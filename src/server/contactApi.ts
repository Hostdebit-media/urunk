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
  CONTACT_RATE_LIMITER?: ContactRateLimiterBinding;
}

export interface ContactHandlerOptions {
  clientIp?: string;
  fetchImpl?: typeof fetch;
  now?: number;
  allowForwardedDevOrigin?: string;
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

export function resetContactRateLimitStore(): void {
  rateLimitStore.clear();
}

function hashIpForRateLimit(rawIp: string): string {
  // Non-reversible 32-bit FNV-1a fingerprint so raw visitor IPs are not retained in memory or logs
  const normalized = (rawIp || 'unknown').split(',')[0].trim().toLowerCase();
  let hash = 0x811c9dc5;
  for (let i = 0; i < normalized.length; i++) {
    hash ^= normalized.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return `ip_${(hash >>> 0).toString(16).padStart(8, '0')}`;
}

function checkMemoryRateLimit(
  ipHash: string,
  now: number
): { allowed: boolean; retryAfterSeconds: number } {
  // Opportunistic pruning of expired buckets
  const cutoff = now - RATE_LIMIT_WINDOW_MS;
  for (const [key, bucket] of rateLimitStore.entries()) {
    const active = bucket.timestamps.filter((t) => t > cutoff);
    if (active.length === 0) {
      rateLimitStore.delete(key);
    } else if (active.length !== bucket.timestamps.length) {
      bucket.timestamps = active;
    }
  }

  const existing = rateLimitStore.get(ipHash);
  const recent = existing ? existing.timestamps.filter((t) => t > cutoff) : [];

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    const oldestInWindow = recent[0];
    const retryAfterMs = Math.max(1000, oldestInWindow + RATE_LIMIT_WINDOW_MS - now);
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil(retryAfterMs / 1000),
    };
  }

  if (!existing && rateLimitStore.size >= MAX_RATE_LIMIT_KEYS) {
    const firstKey = rateLimitStore.keys().next().value;
    if (firstKey) {
      rateLimitStore.delete(firstKey);
    }
  }

  recent.push(now);
  rateLimitStore.set(ipHash, { timestamps: recent });
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

function buildAllowedOrigins(
  requestUrl: URL,
  env: ContactEnv,
  allowForwardedDevOrigin?: string
): Set<string> {
  const allowed = new Set<string>(DEFAULT_PRODUCTION_ORIGINS);
  allowed.add(requestUrl.origin);

  if (env.ALLOWED_ORIGINS) {
    for (const raw of env.ALLOWED_ORIGINS.split(',')) {
      const trimmed = raw.trim().replace(/\/+$/, '');
      if (trimmed) {
        allowed.add(trimmed);
      }
    }
  }

  const isLocalHost =
    requestUrl.hostname === 'localhost' || requestUrl.hostname === '127.0.0.1';
  if (isLocalHost && allowForwardedDevOrigin) {
    allowed.add(allowForwardedDevOrigin.replace(/\/+$/, ''));
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
        'Access-Control-Allow-Headers': 'Content-Type, Accept',
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

  // 2. IP rate limiting (5 submissions / 10 minutes per anonymized IP hash)
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
      // Fall back to in-memory isolate rate limiter if optional binding errors
    }
  }

  const memLimit = checkMemoryRateLimit(ipHash, startTime);
  if (!memLimit.allowed) {
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
      { ...corsHeaders, 'Retry-After': String(memLimit.retryAfterSeconds) }
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

  // 4. Verify server-side email provider secret exists before attempting delivery
  const resendApiKey = (env.RESEND_API_KEY || '').trim();
  if (!resendApiKey) {
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

  const toEmail = (env.CONTACT_TO_EMAIL || 'contact@urunk.com').trim();
  const fromEmail = (
    env.CONTACT_FROM_EMAIL || 'Urunk Website <leads@urunk.com>'
  ).trim();

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
    to: [toEmail],
    subject: safeSubject,
    text: textLines.join('\n'),
    html: htmlBody,
  };
  if (validEmail) {
    resendPayload.reply_to = validEmail;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), RESEND_TIMEOUT_MS);

  try {
    const providerRes = await fetchImpl(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
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

    logSafeContactEvent('info', {
      status: 200,
      code: 'DELIVERED',
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
    clearTimeout(timeoutId);
  }
}
