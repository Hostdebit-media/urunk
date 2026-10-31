/**
 * Server-side Lead Capture & Transactional Email Handler (/api/contact)
 * Compatible with Cloudflare Workers (edge runtime) and Vite Node dev server.
 *
 * Security & Privacy Guarantees:
 * - Credentials read exclusively from server-side environment bindings (never exposed to client).
 * - Origin allowlist validation (blocks cross-origin abuse).
 * - Strict Content-Type (application/json) and streaming payload cap (16 KB).
 * - Honeypot check + sliding-window IP rate limiting (5 req / 10 min per hashed IP).
 * - Server-side field validation, CRLF header-injection stripping, and HTML escaping.
 * - Zero PII / message content written to logs.
 */

export interface ContactRateLimiterBinding {
  limit: (options: { key: string }) => Promise<{ success: boolean }>;
}

export interface ContactEnv {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
  ALLOWED_ORIGINS?: string;
  ALL_ALLOWED_ORIGINS?: string;
  CONTACT_RATE_LIMITER?: ContactRateLimiterBinding;
}

export interface ContactEdgeCache {
  match: (request: Request | string) => Promise<Response | undefined>;
  put: (request: Request | string, response: Response) => Promise<void>;
}

export interface ContactHandlerOptions {
  clientIp?: string;
  fetchImpl?: typeof fetch;
  now?: number;
  allowForwardedDevOrigin?: string;
  edgeCache?: ContactEdgeCache | null;
}

export type ContactFormSource =
  | 'contact_page_fr'
  | 'contact_page_en'
  | 'home_audit_fr'
  | 'home_audit_en';

interface RateLimitBucket {
  timestamps: number[];
}

const MAX_BODY_BYTES = 16 * 1024; // 16 KB
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_RATE_LIMIT_KEYS = 2000;
const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const RESEND_TIMEOUT_MS = 8000;

const DEFAULT_PRODUCTION_ORIGINS = [
  'https://urunk.com',
  'https://www.urunk.com',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
];

const VALID_SOURCES = new Set<ContactFormSource>([
  'contact_page_fr',
  'contact_page_en',
  'home_audit_fr',
  'home_audit_en',
]);

const rateLimitStore = new Map<string, RateLimitBucket>();
const inFlightSubmissions = new Set<string>();
const processedIdempotencyKeys = new Map<string, number>();
const IDEMPOTENCY_TTL_MS = 10 * 60 * 1000;

export function resetContactRateLimitStore(): void {
  rateLimitStore.clear();
  inFlightSubmissions.clear();
  processedIdempotencyKeys.clear();
}

function fnv1aHex(value: string): string {
  let hash = 0x811c9dc5;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(16).padStart(8, '0');
}

function hashIpForRateLimit(rawIp: string): string {
  // Non-reversible 32-bit FNV-1a fingerprint so raw visitor IPs are not retained in memory or logs
  const normalized = (rawIp || 'unknown').split(',')[0].trim().toLowerCase();
  return `ip_${fnv1aHex(normalized)}`;
}

function resolveDefaultEdgeCache(override?: ContactEdgeCache | null): ContactEdgeCache | null {
  if (override !== undefined) return override;
  try {
    const globalCaches = (globalThis as unknown as { caches?: { default?: ContactEdgeCache } }).caches;
    if (globalCaches && globalCaches.default && typeof globalCaches.default.match === 'function') {
      return globalCaches.default;
    }
  } catch {
    // Cache API unavailable in Node / local dev runtime
  }
  return null;
}

async function checkRateLimitWithEdgeCache(
  ipHash: string,
  now: number,
  edgeCache: ContactEdgeCache | null
): Promise<{ allowed: boolean; retryAfterSeconds: number }> {
  const cutoff = now - RATE_LIMIT_WINDOW_MS;

  // Opportunistic pruning of expired isolate buckets
  for (const [key, bucket] of rateLimitStore.entries()) {
    const active = bucket.timestamps.filter((t) => t > cutoff);
    if (active.length === 0) {
      rateLimitStore.delete(key);
    } else if (active.length !== bucket.timestamps.length) {
      bucket.timestamps = active;
    }
  }

  const memExisting = rateLimitStore.get(ipHash);
  let mergedTimestamps = memExisting ? memExisting.timestamps.filter((t) => t > cutoff) : [];

  const cacheKeyUrl = `https://rate-limit.urunk.internal/${ipHash}`;
  if (edgeCache) {
    try {
      const cachedRes = await edgeCache.match(cacheKeyUrl);
      if (cachedRes) {
        const parsed = (await cachedRes.json()) as { timestamps?: unknown };
        if (Array.isArray(parsed?.timestamps)) {
          const validCached = parsed.timestamps.filter(
            (t): t is number => typeof t === 'number' && Number.isFinite(t) && t > cutoff
          );
          const combined = Array.from(new Set([...mergedTimestamps, ...validCached])).sort(
            (a, b) => a - b
          );
          mergedTimestamps = combined;
        }
      }
    } catch {
      // Fall back gracefully to isolate memory store
    }
  }

  if (mergedTimestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    const oldestInWindow = mergedTimestamps[0];
    const retryAfterMs = Math.max(1000, oldestInWindow + RATE_LIMIT_WINDOW_MS - now);
    rateLimitStore.set(ipHash, { timestamps: mergedTimestamps });
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil(retryAfterMs / 1000),
    };
  }

  if (!memExisting && rateLimitStore.size >= MAX_RATE_LIMIT_KEYS) {
    const firstKey = rateLimitStore.keys().next().value;
    if (firstKey) {
      rateLimitStore.delete(firstKey);
    }
  }

  mergedTimestamps.push(now);
  rateLimitStore.set(ipHash, { timestamps: mergedTimestamps });

  if (edgeCache) {
    try {
      const ttlSeconds = Math.ceil(RATE_LIMIT_WINDOW_MS / 1000);
      await edgeCache.put(
        cacheKeyUrl,
        new Response(JSON.stringify({ timestamps: mergedTimestamps }), {
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': `public, max-age=${ttlSeconds}`,
          },
        })
      );
    } catch {
      // Non-fatal if Cache API write fails
    }
  }

  return { allowed: true, retryAfterSeconds: 0 };
}

function stripControlChars(input: string, preserveNewlines: boolean): string {
  if (preserveNewlines) {
    return input
      .replace(/\r\n/g, '\n')
      .replace(/\r/g, '\n')
      .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
  }
  return input.replace(/[\x00-\x1F\x7F\r\n]+/g, ' ').replace(/\s+/g, ' ');
}

export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function isValidEmailAddress(value: string): boolean {
  if (!value || value.length > 254) return false;
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/.test(
    value
  );
}

export function isValidPhoneOrWhatsApp(value: string): boolean {
  if (!value || value.length > 25) return false;
  if (!/^[+\d][\d\s().-]{7,24}$/.test(value)) return false;
  const digits = value.replace(/\D/g, '');
  return digits.length >= 8 && digits.length <= 15;
}

function countLinks(text: string): number {
  const matches = text.match(/(?:https?:\/\/|www\.)\S+/gi);
  return matches ? matches.length : 0;
}

export function normalizeSenderAddress(rawFrom?: string): string {
  const cleaned = stripControlChars(
    rawFrom || 'Urunk Website <leads@urunk.com>',
    false
  )
    .trim()
    .replace(/^["']+|["']+$/g, '')
    .trim();

  if (!cleaned) return '';

  const bracketMatch = cleaned.match(/^(.*?)<([^<>]+)>$/);
  if (bracketMatch) {
    const rawDisplay = bracketMatch[1].trim().replace(/^["']+|["']+$/g, '').trim();
    const emailPart = bracketMatch[2].trim();
    if (!isValidEmailAddress(emailPart)) {
      return '';
    }
    const display = rawDisplay || 'Urunk Website';
    return `${display} <${emailPart}>`;
  }

  if (isValidEmailAddress(cleaned)) {
    return `Urunk Website <${cleaned}>`;
  }

  return '';
}

function buildAllowedOrigins(
  requestUrl: URL,
  env: ContactEnv,
  allowForwardedDevOrigin?: string
): Set<string> {
  const allowed = new Set<string>(DEFAULT_PRODUCTION_ORIGINS);
  allowed.add(requestUrl.origin);

  const configuredOriginLists = [env.ALLOWED_ORIGINS, env.ALL_ALLOWED_ORIGINS].filter(
    (v): v is string => typeof v === 'string' && v.trim().length > 0
  );
  for (const listStr of configuredOriginLists) {
    for (const raw of listStr.split(',')) {
      const trimmed = raw
        .trim()
        .replace(/^["']+|["']+$/g, '')
        .trim()
        .replace(/\/+$/, '');
      if (trimmed) {
        allowed.add(trimmed);
      }
    }
  }

  if (allowForwardedDevOrigin) {
    for (const raw of allowForwardedDevOrigin.split(',')) {
      const trimmed = raw.trim().replace(/\/+$/, '');
      if (trimmed) {
        allowed.add(trimmed);
      }
    }
  }

  return allowed;
}

function resolveRequestOrigin(request: Request): string | null {
  const originHeader = request.headers.get('origin');
  if (originHeader && originHeader !== 'null') {
    return originHeader.trim().replace(/\/+$/, '');
  }

  const secFetchSite = request.headers.get('sec-fetch-site');
  if (secFetchSite === 'cross-site') {
    return null;
  }

  const refererHeader = request.headers.get('referer');
  if (refererHeader) {
    try {
      return new URL(refererHeader).origin;
    } catch {
      return null;
    }
  }

  return null;
}

async function readBoundedBody(
  request: Request,
  maxBytes: number
): Promise<{ ok: true; text: string } | { ok: false; code: 'PAYLOAD_TOO_LARGE' }> {
  const contentLengthHeader = request.headers.get('content-length');
  if (contentLengthHeader !== null) {
    const declaredLength = Number(contentLengthHeader);
    if (!Number.isNaN(declaredLength) && declaredLength > maxBytes) {
      return { ok: false, code: 'PAYLOAD_TOO_LARGE' };
    }
  }

  if (!request.body) {
    return { ok: true, text: '' };
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) {
        totalBytes += value.byteLength;
        if (totalBytes > maxBytes) {
          await reader.cancel().catch(() => undefined);
          return { ok: false, code: 'PAYLOAD_TOO_LARGE' };
        }
        chunks.push(value);
      }
    }
  } finally {
    reader.releaseLock();
  }

  const merged = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.byteLength;
  }

  const text = new TextDecoder('utf-8', { fatal: false }).decode(merged);
  return { ok: true, text };
}

function jsonResponse(
  status: number,
  body: Record<string, unknown>,
  extraHeaders?: Record<string, string>
): Response {
  const headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    'X-Content-Type-Options': 'nosniff',
    ...extraHeaders,
  });
  return new Response(JSON.stringify(body), { status, headers });
}

function logSafeContactEvent(
  level: 'info' | 'warn' | 'error',
  details: {
    status: number;
    code: string;
    source?: string;
    lang?: string;
    providerStatus?: number;
    providerMessageId?: string;
    durationMs: number;
  }
): void {
  const payload = JSON.stringify({
    level,
    event: 'contact_submission',
    timestamp: new Date().toISOString(),
    ...details,
  });

  if (level === 'error') {
    console.error(payload);
  } else if (level === 'warn') {
    console.warn(payload);
  } else {
    console.log(payload);
  }
}

export async function handleContactRequest(
  request: Request,
  env: ContactEnv,
  options: ContactHandlerOptions = {}
): Promise<Response> {
  const startTime = options.now ?? Date.now();
  const fetchImpl = options.fetchImpl ?? fetch;

  let requestUrl: URL;
  try {
    requestUrl = new URL(request.url);
  } catch {
    return jsonResponse(400, { ok: false, code: 'BAD_REQUEST' });
  }

  const method = request.method.toUpperCase();
  if (method !== 'POST' && method !== 'OPTIONS') {
    return jsonResponse(
      405,
      { ok: false, code: 'METHOD_NOT_ALLOWED' },
      { Allow: 'POST, OPTIONS' }
    );
  }

  const allowedOrigins = buildAllowedOrigins(
    requestUrl,
    env,
    options.allowForwardedDevOrigin
  );
  const requestOrigin = resolveRequestOrigin(request);

  if (!requestOrigin || !allowedOrigins.has(requestOrigin)) {
    logSafeContactEvent('warn', {
      status: 403,
      code: 'FORBIDDEN_ORIGIN',
      durationMs: (options.now ?? Date.now()) - startTime,
    });
    return jsonResponse(403, { ok: false, code: 'FORBIDDEN_ORIGIN' });
  }

  const corsHeaders: Record<string, string> = {
    'Access-Control-Allow-Origin': requestOrigin,
    Vary: 'Origin',
  };

  if (method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        ...corsHeaders,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Idempotency-Key',
        'Access-Control-Max-Age': '86400',
        'Cache-Control': 'no-store',
      },
    });
  }

  const contentType = (request.headers.get('content-type') || '').toLowerCase();
  if (!contentType.includes('application/json')) {
    return jsonResponse(
      415,
      { ok: false, code: 'UNSUPPORTED_MEDIA_TYPE' },
      corsHeaders
    );
  }

  const bodyResult = await readBoundedBody(request, MAX_BODY_BYTES);
  if (!bodyResult.ok) {
    logSafeContactEvent('warn', {
      status: 413,
      code: 'PAYLOAD_TOO_LARGE',
      durationMs: (options.now ?? Date.now()) - startTime,
    });
    return jsonResponse(
      413,
      { ok: false, code: 'PAYLOAD_TOO_LARGE' },
      corsHeaders
    );
  }

  let rawPayload: unknown;
  try {
    rawPayload = JSON.parse(bodyResult.text || '{}');
  } catch {
    return jsonResponse(400, { ok: false, code: 'INVALID_JSON' }, corsHeaders);
  }

  if (!rawPayload || typeof rawPayload !== 'object' || Array.isArray(rawPayload)) {
    return jsonResponse(400, { ok: false, code: 'INVALID_PAYLOAD' }, corsHeaders);
  }

  const data = rawPayload as Record<string, unknown>;
  const lang = data.lang === 'en' ? 'en' : 'fr';
  const rawSource = typeof data.source === 'string' ? data.source : '';
  const source: ContactFormSource = VALID_SOURCES.has(rawSource as ContactFormSource)
    ? (rawSource as ContactFormSource)
    : lang === 'en'
      ? 'contact_page_en'
      : 'contact_page_fr';

  // 1. Anti-spam honeypot check (never claim success on bot trap)
  const honeypot = typeof data._gotcha === 'string' ? data._gotcha.trim() : '';
  if (honeypot.length > 0) {
    logSafeContactEvent('warn', {
      status: 400,
      code: 'SPAM_DETECTED',
      source,
      lang,
      durationMs: (options.now ?? Date.now()) - startTime,
    });
    return jsonResponse(400, { ok: false, code: 'SPAM_DETECTED' }, corsHeaders);
  }

  // 1b. Client idempotency key duplicate guard (prevents double-send on retry/double-tap)
  const rawIdempotencyHeader = stripControlChars(
    request.headers.get('x-idempotency-key') || '',
    false
  )
    .trim()
    .slice(0, 128);
  const clientIdempotencyKey = /^[a-zA-Z0-9._:-]{8,128}$/.test(rawIdempotencyHeader)
    ? rawIdempotencyHeader
    : '';

  if (clientIdempotencyKey) {
    for (const [k, ts] of processedIdempotencyKeys.entries()) {
      if (startTime - ts > IDEMPOTENCY_TTL_MS) {
        processedIdempotencyKeys.delete(k);
      }
    }
    if (processedIdempotencyKeys.has(clientIdempotencyKey)) {
      logSafeContactEvent('warn', {
        status: 409,
        code: 'DUPLICATE_SUBMISSION',
        source,
        lang,
        durationMs: (options.now ?? Date.now()) - startTime,
      });
      return jsonResponse(409, { ok: false, code: 'DUPLICATE_SUBMISSION' }, corsHeaders);
    }
  }

  // 2. IP rate limiting (5 submissions / 10 minutes per anonymized IP hash, PoP-cached on Workers)
  const rawIp =
    options.clientIp ||
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-forwarded-for') ||
    'unknown';
  const ipHash = hashIpForRateLimit(rawIp);

  if (env.CONTACT_RATE_LIMITER) {
    try {
      const edgeLimit = await env.CONTACT_RATE_LIMITER.limit({ key: ipHash });
      if (!edgeLimit.success) {
        logSafeContactEvent('warn', {
          status: 429,
          code: 'RATE_LIMITED',
          source,
          lang,
          durationMs: (options.now ?? Date.now()) - startTime,
        });
        return jsonResponse(
          429,
          { ok: false, code: 'RATE_LIMITED' },
          { ...corsHeaders, 'Retry-After': '60' }
        );
      }
    } catch {
      // Fall back to edge Cache API + isolate memory limiter if optional binding errors
    }
  }

  const edgeCache = resolveDefaultEdgeCache(options.edgeCache);
  const rateLimit = await checkRateLimitWithEdgeCache(ipHash, startTime, edgeCache);
  if (!rateLimit.allowed) {
    logSafeContactEvent('warn', {
      status: 429,
      code: 'RATE_LIMITED',
      source,
      lang,
      durationMs: (options.now ?? Date.now()) - startTime,
    });
    return jsonResponse(
      429,
      { ok: false, code: 'RATE_LIMITED' },
      { ...corsHeaders, 'Retry-After': String(rateLimit.retryAfterSeconds) }
    );
  }

  // 3. Server-side field validation & sanitization
  if (data.privacyAccepted !== true) {
    return jsonResponse(400, { ok: false, code: 'CONSENT_REQUIRED' }, corsHeaders);
  }

  const name =
    typeof data.name === 'string'
      ? stripControlChars(data.name, false).trim()
      : '';
  if (name.length < 2 || name.length > 120) {
    return jsonResponse(400, { ok: false, code: 'INVALID_NAME' }, corsHeaders);
  }

  const rawEmail =
    typeof data.email === 'string'
      ? stripControlChars(data.email, false).trim()
      : '';
  const rawPhone =
    typeof data.phone === 'string'
      ? stripControlChars(data.phone, false).trim()
      : '';
  const rawContact =
    typeof data.contact === 'string'
      ? stripControlChars(data.contact, false).trim()
      : '';

  let validEmail = '';
  let validPhone = '';

  if (rawEmail) {
    if (!isValidEmailAddress(rawEmail)) {
      return jsonResponse(400, { ok: false, code: 'INVALID_EMAIL' }, corsHeaders);
    }
    validEmail = rawEmail;
  }

  if (rawPhone) {
    if (!isValidPhoneOrWhatsApp(rawPhone)) {
      return jsonResponse(400, { ok: false, code: 'INVALID_PHONE' }, corsHeaders);
    }
    validPhone = rawPhone;
  }

  if (rawContact) {
    if (rawContact.includes('@')) {
      if (!isValidEmailAddress(rawContact)) {
        return jsonResponse(400, { ok: false, code: 'INVALID_EMAIL' }, corsHeaders);
      }
      if (!validEmail) validEmail = rawContact;
    } else {
      if (!isValidPhoneOrWhatsApp(rawContact)) {
        return jsonResponse(400, { ok: false, code: 'INVALID_CONTACT' }, corsHeaders);
      }
      if (!validPhone) validPhone = rawContact;
    }
  }

  if (source === 'contact_page_en' && !validEmail) {
    return jsonResponse(400, { ok: false, code: 'INVALID_EMAIL' }, corsHeaders);
  }

  if (!validEmail && !validPhone) {
    return jsonResponse(400, { ok: false, code: 'INVALID_CONTACT' }, corsHeaders);
  }

  const business =
    typeof data.business === 'string'
      ? stripControlChars(data.business, false).trim()
      : '';
  const isFullContactForm =
    source === 'contact_page_fr' || source === 'contact_page_en';
  if (isFullContactForm && (business.length < 2 || business.length > 160)) {
    return jsonResponse(400, { ok: false, code: 'INVALID_BUSINESS' }, corsHeaders);
  }
  if (!isFullContactForm && business.length > 160) {
    return jsonResponse(400, { ok: false, code: 'INVALID_BUSINESS' }, corsHeaders);
  }

  const service =
    typeof data.service === 'string'
      ? stripControlChars(data.service, false).trim()
      : '';
  if (service.length < 2 || service.length > 120) {
    return jsonResponse(400, { ok: false, code: 'INVALID_SERVICE' }, corsHeaders);
  }

  const message =
    typeof data.message === 'string'
      ? stripControlChars(data.message, true).trim()
      : '';
  if (message.length > 3000) {
    return jsonResponse(400, { ok: false, code: 'MESSAGE_TOO_LONG' }, corsHeaders);
  }
  if (countLinks(message) > 5) {
    logSafeContactEvent('warn', {
      status: 400,
      code: 'SPAM_DETECTED',
      source,
      lang,
      durationMs: (options.now ?? Date.now()) - startTime,
    });
    return jsonResponse(400, { ok: false, code: 'SPAM_DETECTED' }, corsHeaders);
  }

  const pageUrl =
    typeof data.pageUrl === 'string'
      ? stripControlChars(data.pageUrl, false).trim().slice(0, 200)
      : '';

  // 4. Verify server-side email provider secret and recipient configuration before attempting delivery
  const resendApiKey = (env.RESEND_API_KEY || '').trim();
  const recipientList = stripControlChars(
    env.CONTACT_TO_EMAIL || 'contact@urunk.com',
    false
  )
    .split(',')
    .map((addr) => addr.trim().replace(/^["']+|["']+$/g, '').trim())
    .filter((addr) => isValidEmailAddress(addr));
  const fromEmail = normalizeSenderAddress(env.CONTACT_FROM_EMAIL);

  if (!resendApiKey || recipientList.length === 0 || !fromEmail) {
    logSafeContactEvent('warn', {
      status: 503,
      code: 'EMAIL_PROVIDER_UNCONFIGURED',
      source,
      lang,
      durationMs: (options.now ?? Date.now()) - startTime,
    });
    return jsonResponse(
      503,
      { ok: false, code: 'EMAIL_PROVIDER_UNCONFIGURED' },
      corsHeaders
    );
  }

  // Concurrent in-flight duplicate guard (prevents simultaneous double-POST race conditions)
  const payloadFingerprint = `fp_${fnv1aHex(
    `${ipHash}|${source}|${name.toLowerCase()}|${validEmail.toLowerCase()}|${validPhone}|${business.toLowerCase()}|${service.toLowerCase()}|${message}`
  )}`;
  if (inFlightSubmissions.has(payloadFingerprint)) {
    logSafeContactEvent('warn', {
      status: 409,
      code: 'DUPLICATE_SUBMISSION',
      source,
      lang,
      durationMs: (options.now ?? Date.now()) - startTime,
    });
    return jsonResponse(409, { ok: false, code: 'DUPLICATE_SUBMISSION' }, corsHeaders);
  }

  const subjectLeadLabel = business ? `${business} (${name})` : name;
  const rawSubject = `[Urunk Lead · ${lang.toUpperCase()}] ${subjectLeadLabel} — ${service}`;
  const safeSubject = stripControlChars(rawSubject, false).slice(0, 140);

  const textLines = [
    `New website inquiry (${source})`,
    `Language: ${lang.toUpperCase()}`,
    `Name: ${name}`,
    business ? `Property / Business: ${business}` : null,
    validEmail ? `Email: ${validEmail}` : null,
    validPhone ? `Phone / WhatsApp: ${validPhone}` : null,
    `Requested Service / Activity: ${service}`,
    pageUrl ? `Page Path: ${pageUrl}` : null,
    `Privacy Consent: Confirmed`,
    message ? `\nMessage:\n${message}` : null,
  ].filter((line): line is string => Boolean(line));

  const htmlRows: Array<[string, string]> = [
    ['Source', escapeHtml(source)],
    ['Language', escapeHtml(lang.toUpperCase())],
    ['Name', escapeHtml(name)],
  ];
  if (business) htmlRows.push(['Property / Business', escapeHtml(business)]);
  if (validEmail) htmlRows.push(['Email', escapeHtml(validEmail)]);
  if (validPhone) htmlRows.push(['Phone / WhatsApp', escapeHtml(validPhone)]);
  htmlRows.push(['Service / Activity', escapeHtml(service)]);
  if (pageUrl) htmlRows.push(['Page Path', escapeHtml(pageUrl)]);

  const htmlBody = [
    '<div style="font-family:system-ui,-apple-system,sans-serif;max-width:600px;color:#0F2D25;line-height:1.5;">',
    '<h2 style="margin:0 0 16px 0;font-size:18px;color:#0F2D25;">New Urunk Website Lead</h2>',
    '<table style="width:100%;border-collapse:collapse;font-size:14px;">',
    ...htmlRows.map(
      ([label, val]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;width:36%;">${label}</td><td style="padding:8px 12px;border:1px solid #e2e8f0;">${val}</td></tr>`
    ),
    '</table>',
    message
      ? `<div style="margin-top:16px;padding:12px 14px;border:1px solid #e2e8f0;border-radius:8px;background:#ffffff;"><strong style="display:block;margin-bottom:6px;font-size:13px;">Message:</strong><div style="white-space:pre-wrap;font-size:14px;">${escapeHtml(message)}</div></div>`
      : '',
    '</div>',
  ].join('');

  const resendPayload: Record<string, unknown> = {
    from: fromEmail,
    to: recipientList,
    subject: safeSubject,
    text: textLines.join('\n'),
    html: htmlBody,
  };
  if (validEmail) {
    resendPayload.reply_to = validEmail;
  }

  const resendHeaders: Record<string, string> = {
    Authorization: `Bearer ${resendApiKey}`,
    'Content-Type': 'application/json',
  };
  if (clientIdempotencyKey) {
    resendHeaders['Idempotency-Key'] = clientIdempotencyKey;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), RESEND_TIMEOUT_MS);
  inFlightSubmissions.add(payloadFingerprint);

  try {
    const providerRes = await fetchImpl(RESEND_ENDPOINT, {
      method: 'POST',
      headers: resendHeaders,
      body: JSON.stringify(resendPayload),
      signal: controller.signal,
    });

    if (!providerRes.ok) {
      logSafeContactEvent('error', {
        status: 502,
        code: 'EMAIL_DELIVERY_FAILED',
        providerStatus: providerRes.status,
        source,
        lang,
        durationMs: (options.now ?? Date.now()) - startTime,
      });
      return jsonResponse(
        502,
        { ok: false, code: 'EMAIL_DELIVERY_FAILED' },
        corsHeaders
      );
    }

    let providerJson: unknown = null;
    try {
      providerJson = await providerRes.json();
    } catch {
      providerJson = null;
    }

    const messageId =
      providerJson &&
      typeof providerJson === 'object' &&
      typeof (providerJson as { id?: unknown }).id === 'string'
        ? (providerJson as { id: string }).id.trim()
        : '';

    if (!messageId) {
      logSafeContactEvent('error', {
        status: 502,
        code: 'INVALID_PROVIDER_RESPONSE',
        providerStatus: providerRes.status,
        source,
        lang,
        durationMs: (options.now ?? Date.now()) - startTime,
      });
      return jsonResponse(
        502,
        { ok: false, code: 'EMAIL_DELIVERY_FAILED' },
        corsHeaders
      );
    }

    if (clientIdempotencyKey) {
      if (processedIdempotencyKeys.size >= MAX_RATE_LIMIT_KEYS) {
        const oldestKey = processedIdempotencyKeys.keys().next().value;
        if (oldestKey) processedIdempotencyKeys.delete(oldestKey);
      }
      processedIdempotencyKeys.set(clientIdempotencyKey, startTime);
    }

    logSafeContactEvent('info', {
      status: 200,
      code: 'DELIVERED',
      providerStatus: providerRes.status,
      providerMessageId: messageId.slice(0, 64),
      source,
      lang,
      durationMs: (options.now ?? Date.now()) - startTime,
    });
    return jsonResponse(200, { ok: true }, corsHeaders);
  } catch {
    logSafeContactEvent('error', {
      status: 502,
      code: 'EMAIL_DELIVERY_FAILED',
      source,
      lang,
      durationMs: (options.now ?? Date.now()) - startTime,
    });
    return jsonResponse(
      502,
      { ok: false, code: 'EMAIL_DELIVERY_FAILED' },
      corsHeaders
    );
  } finally {
    inFlightSubmissions.delete(payloadFingerprint);
    clearTimeout(timeoutId);
  }
}
