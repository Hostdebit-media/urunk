import test from 'node:test';
import assert from 'node:assert/strict';
import {
  handleContactRequest,
  resetContactRateLimitStore,
  isValidEmailAddress,
  isValidPhoneOrWhatsApp,
  type ContactEnv,
} from './contactApi';

const VALID_PAYLOAD = {
  lang: 'fr',
  source: 'contact_page_fr',
  name: 'Omar Aziz',
  contact: 'omar@riadatlas.ma',
  business: 'Riad Atlas Marrakech',
  service: 'Pack Site Web',
  message: 'Nous souhaitons moderniser notre moteur de réservation directe.',
  privacyAccepted: true,
  _gotcha: '',
  pageUrl: '/contact',
};

function makeJsonRequest(
  body: unknown,
  overrides: {
    url?: string;
    method?: string;
    origin?: string | null;
    contentType?: string;
    extraHeaders?: Record<string, string>;
  } = {}
): Request {
  const headers: Record<string, string> = {};
  if (overrides.origin !== null) {
    headers.Origin = overrides.origin ?? 'https://urunk.com';
  }
  headers['Content-Type'] = overrides.contentType ?? 'application/json';
  if (overrides.extraHeaders) {
    Object.assign(headers, overrides.extraHeaders);
  }

  return new Request(overrides.url ?? 'https://urunk.com/api/contact', {
    method: overrides.method ?? 'POST',
    headers,
    body:
      overrides.method === 'GET' || overrides.method === 'OPTIONS'
        ? undefined
        : typeof body === 'string'
          ? body
          : JSON.stringify(body),
  });
}

test('email and phone validators accept valid hospitality formats and reject malformed strings', () => {
  assert.equal(isValidEmailAddress('contact@riad-atlas.ma'), true);
  assert.equal(isValidEmailAddress('gm+booking@hotel.co.uk'), true);
  assert.equal(isValidEmailAddress('invalid-email'), false);
  assert.equal(isValidEmailAddress('bad@@domain.com'), false);

  assert.equal(isValidPhoneOrWhatsApp('+212 668-802096'), true);
  assert.equal(isValidPhoneOrWhatsApp('0668802096'), true);
  assert.equal(isValidPhoneOrWhatsApp('12345'), false);
  assert.equal(isValidPhoneOrWhatsApp('abc-phone-number'), false);
});

test('GET requests return 405 Method Not Allowed and OPTIONS preflight returns 204 for allowed origin', async () => {
  resetContactRateLimitStore();

  const getRes = await handleContactRequest(
    makeJsonRequest(null, { method: 'GET' }),
    {}
  );
  assert.equal(getRes.status, 405);
  assert.equal(getRes.headers.get('allow'), 'POST, OPTIONS');

  const optionsRes = await handleContactRequest(
    makeJsonRequest(null, { method: 'OPTIONS', origin: 'https://urunk.com' }),
    {}
  );
  assert.equal(optionsRes.status, 204);
  assert.equal(
    optionsRes.headers.get('access-control-allow-origin'),
    'https://urunk.com'
  );
});

test('disallowed cross-site origins are blocked with 403 even if X-Forwarded-Host is spoofed', async () => {
  resetContactRateLimitStore();

  const res = await handleContactRequest(
    makeJsonRequest(VALID_PAYLOAD, {
      url: 'https://urunk.com/api/contact',
      origin: 'https://evil-spammer.example',
      extraHeaders: { 'X-Forwarded-Host': 'evil-spammer.example' },
    }),
    { RESEND_API_KEY: 're_test_secret' }
  );

  assert.equal(res.status, 403);
  const body = (await res.json()) as { ok: boolean; code: string };
  assert.equal(body.ok, false);
  assert.equal(body.code, 'FORBIDDEN_ORIGIN');
});

test('non-JSON Content-Type returns 415 and payloads exceeding 16 KB return 413', async () => {
  resetContactRateLimitStore();

  const wrongTypeRes = await handleContactRequest(
    makeJsonRequest('name=Omar', { contentType: 'application/x-www-form-urlencoded' }),
    { RESEND_API_KEY: 're_test_secret' }
  );
  assert.equal(wrongTypeRes.status, 415);

  // Streaming body > 16 KB without Content-Length header
  const hugeString = JSON.stringify({
    ...VALID_PAYLOAD,
    message: 'A'.repeat(18 * 1024),
  });
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(new TextEncoder().encode(hugeString));
      controller.close();
    },
  });
  const streamReq = new Request('https://urunk.com/api/contact', {
    method: 'POST',
    headers: {
      Origin: 'https://urunk.com',
      'Content-Type': 'application/json',
    },
    body: stream,
    // @ts-expect-error Node fetch requires duplex when passing ReadableStream
    duplex: 'half',
  });

  const oversizedRes = await handleContactRequest(streamReq, {
    RESEND_API_KEY: 're_test_secret',
  });
  assert.equal(oversizedRes.status, 413);
  const body = (await oversizedRes.json()) as { ok: boolean; code: string };
  assert.equal(body.code, 'PAYLOAD_TOO_LARGE');
});

test('server-side validation rejects missing consent, bad email/phone, missing business, long messages, and honeypots', async () => {
  const cases: Array<{ patch: Record<string, unknown>; expectedCode: string }> = [
    { patch: { privacyAccepted: false }, expectedCode: 'CONSENT_REQUIRED' },
    { patch: { name: 'A' }, expectedCode: 'INVALID_NAME' },
    { patch: { contact: 'not-an-email@bad' }, expectedCode: 'INVALID_EMAIL' },
    { patch: { contact: '123' }, expectedCode: 'INVALID_CONTACT' },
    { patch: { business: '' }, expectedCode: 'INVALID_BUSINESS' },
    { patch: { service: '' }, expectedCode: 'INVALID_SERVICE' },
    { patch: { message: 'x'.repeat(3005) }, expectedCode: 'MESSAGE_TOO_LONG' },
    {
      patch: {
        message:
          'https://a.com https://b.com https://c.com https://d.com https://e.com https://f.com',
      },
      expectedCode: 'SPAM_DETECTED',
    },
    { patch: { _gotcha: 'https://bot-link.example' }, expectedCode: 'SPAM_DETECTED' },
  ];

  for (const [idx, c] of cases.entries()) {
    resetContactRateLimitStore();
    const res = await handleContactRequest(
      makeJsonRequest({ ...VALID_PAYLOAD, ...c.patch }),
      { RESEND_API_KEY: 're_test_secret' },
      { clientIp: `198.51.100.${idx + 1}` }
    );
    assert.equal(res.status, 400, `Expected 400 for ${c.expectedCode}`);
    const json = (await res.json()) as { ok: boolean; code: string };
    assert.equal(json.ok, false);
    assert.equal(json.code, c.expectedCode);
  }
});

test('missing RESEND_API_KEY returns 503 EMAIL_PROVIDER_UNCONFIGURED and never claims success', async () => {
  resetContactRateLimitStore();

  const res = await handleContactRequest(
    makeJsonRequest(VALID_PAYLOAD),
    {},
    { clientIp: '203.0.113.10' }
  );
  assert.equal(res.status, 503);
  const json = (await res.json()) as { ok: boolean; code: string };
  assert.equal(json.ok, false);
  assert.equal(json.code, 'EMAIL_PROVIDER_UNCONFIGURED');
});

test('upstream Resend failure returns 502 EMAIL_DELIVERY_FAILED', async () => {
  resetContactRateLimitStore();

  const failingFetch: typeof fetch = async () =>
    new Response(JSON.stringify({ message: 'Invalid API key' }), { status: 401 });

  const res = await handleContactRequest(
    makeJsonRequest(VALID_PAYLOAD),
    { RESEND_API_KEY: 're_invalid' },
    { clientIp: '203.0.113.20', fetchImpl: failingFetch }
  );
  assert.equal(res.status, 502);
  const json = (await res.json()) as { ok: boolean; code: string };
  assert.equal(json.ok, false);
  assert.equal(json.code, 'EMAIL_DELIVERY_FAILED');
});

test('sliding-window IP rate limiter blocks the 6th submission within 10 minutes with 429 and Retry-After', async () => {
  resetContactRateLimitStore();
  const baseTime = 1_700_000_000_000;
  const okFetch: typeof fetch = async () =>
    new Response(JSON.stringify({ id: 'email_123' }), { status: 200 });
  const env: ContactEnv = { RESEND_API_KEY: 're_valid_key' };

  for (let i = 0; i < 5; i++) {
    const res = await handleContactRequest(
      makeJsonRequest(VALID_PAYLOAD),
      env,
      { clientIp: '203.0.113.77', fetchImpl: okFetch, now: baseTime + i * 1000 }
    );
    assert.equal(res.status, 200);
  }

  const sixthRes = await handleContactRequest(
    makeJsonRequest(VALID_PAYLOAD),
    env,
    { clientIp: '203.0.113.77', fetchImpl: okFetch, now: baseTime + 6000 }
  );
  assert.equal(sixthRes.status, 429);
  assert.ok(Number(sixthRes.headers.get('retry-after')) > 0);
  const sixthBody = (await sixthRes.json()) as { ok: boolean; code: string };
  assert.equal(sixthBody.code, 'RATE_LIMITED');
});

test('successful Resend delivery sanitizes CRLF/HTML, sets reply_to, and logs zero PII or message content', async () => {
  resetContactRateLimitStore();

  let capturedUrl = '';
  let capturedAuth = '';
  let capturedBody: Record<string, unknown> = {};

  const mockFetch: typeof fetch = async (input, init) => {
    capturedUrl = String(input);
    const hdrs = new Headers(init?.headers);
    capturedAuth = hdrs.get('authorization') || '';
    capturedBody = JSON.parse(String(init?.body || '{}')) as Record<string, unknown>;
    return new Response(JSON.stringify({ id: 're_msg_999' }), { status: 200 });
  };

  const capturedLogs: string[] = [];
  const origLog = console.log;
  const origWarn = console.warn;
  const origError = console.error;
  console.log = (...args: unknown[]) => capturedLogs.push(args.map(String).join(' '));
  console.warn = (...args: unknown[]) => capturedLogs.push(args.map(String).join(' '));
  console.error = (...args: unknown[]) => capturedLogs.push(args.map(String).join(' '));

  try {
    const sensitivePayload = {
      lang: 'en',
      source: 'contact_page_en',
      name: 'Nadia Benali\r\nBcc: attacker@evil.com',
      email: 'nadia.secret@palaceriad.ma',
      phone: '+212 661-998877',
      business: 'Riad <script>alert(1)</script> Medina',
      service: 'hotel-seo',
      message: 'Confidential ADR 2400 MAD & occupancy <img src=x onerror=alert(1)>',
      privacyAccepted: true,
    };

    const res = await handleContactRequest(
      makeJsonRequest(sensitivePayload, { origin: 'https://www.urunk.com' }),
      {
        RESEND_API_KEY: 're_live_mock_token',
        CONTACT_TO_EMAIL: 'contact@urunk.com',
        CONTACT_FROM_EMAIL: 'Urunk Leads <leads@urunk.com>',
      },
      { clientIp: '192.0.2.55', fetchImpl: mockFetch }
    );

    assert.equal(res.status, 200);
    const json = (await res.json()) as { ok: boolean };
    assert.equal(json.ok, true);

    assert.equal(capturedUrl, 'https://api.resend.com/emails');
    assert.equal(capturedAuth, 'Bearer re_live_mock_token');
    assert.equal(capturedBody.reply_to, 'nadia.secret@palaceriad.ma');
    assert.equal(/\r|\n/.test(String(capturedBody.subject)), false);
    assert.equal(String(capturedBody.html).includes('<script>'), false);
    assert.equal(String(capturedBody.html).includes('&lt;script&gt;'), true);

    const allLogsJoined = capturedLogs.join('\n');
    assert.equal(allLogsJoined.includes('nadia.secret@palaceriad.ma'), false);
    assert.equal(allLogsJoined.includes('661-998877'), false);
    assert.equal(allLogsJoined.includes('Confidential ADR'), false);
    assert.equal(allLogsJoined.includes('Nadia Benali'), false);
    assert.equal(allLogsJoined.includes('192.0.2.55'), false);
  } finally {
    console.log = origLog;
    console.warn = origWarn;
    console.error = origError;
  }
});

test('malformed or missing-id 200 OK upstream Resend response returns 502 and never falsely claims delivery', async () => {
  resetContactRateLimitStore();

  for (const badBody of ['not-json', '{}', JSON.stringify({ id: '   ' })]) {
    const malformedFetch: typeof fetch = async () =>
      new Response(badBody, { status: 200 });

    const res = await handleContactRequest(
      makeJsonRequest(VALID_PAYLOAD),
      { RESEND_API_KEY: 're_valid_key' },
      { clientIp: '203.0.113.88', fetchImpl: malformedFetch }
    );
    assert.equal(res.status, 502);
    const json = (await res.json()) as { ok: boolean; code: string };
    assert.equal(json.ok, false);
    assert.equal(json.code, 'EMAIL_DELIVERY_FAILED');
  }
});

test('X-Idempotency-Key and concurrent duplicate submissions block double-sends with 409 DUPLICATE_SUBMISSION', async () => {
  resetContactRateLimitStore();

  let resendCalls = 0;
  let capturedIdempotency = '';
  let capturedRecipients: unknown = null;

  const mockFetch: typeof fetch = async (_input, init) => {
    resendCalls += 1;
    const hdrs = new Headers(init?.headers);
    capturedIdempotency = hdrs.get('idempotency-key') || '';
    const parsed = JSON.parse(String(init?.body || '{}')) as { to?: unknown };
    capturedRecipients = parsed.to;
    await new Promise((r) => setTimeout(r, 15));
    return new Response(JSON.stringify({ id: `re_idemp_${resendCalls}` }), { status: 200 });
  };

  // 1. Concurrent identical requests (race condition)
  const [r1, r2] = await Promise.all([
    handleContactRequest(
      makeJsonRequest(VALID_PAYLOAD),
      {
        RESEND_API_KEY: 're_valid_key',
        CONTACT_TO_EMAIL: 'contact@urunk.com, ops@urunk.com',
      },
      { clientIp: '203.0.113.91', fetchImpl: mockFetch }
    ),
    handleContactRequest(
      makeJsonRequest(VALID_PAYLOAD),
      {
        RESEND_API_KEY: 're_valid_key',
        CONTACT_TO_EMAIL: 'contact@urunk.com, ops@urunk.com',
      },
      { clientIp: '203.0.113.91', fetchImpl: mockFetch }
    ),
  ]);

  assert.equal(r1.status, 200);
  assert.equal(r2.status, 409);
  assert.equal(resendCalls, 1);
  assert.deepEqual(capturedRecipients, ['contact@urunk.com', 'ops@urunk.com']);

  // 2. Sequential replay with identical X-Idempotency-Key
  const key = 'urunk-test-idempotency-key-001';
  const firstKeyed = await handleContactRequest(
    makeJsonRequest(VALID_PAYLOAD, { extraHeaders: { 'X-Idempotency-Key': key } }),
    { RESEND_API_KEY: 're_valid_key' },
    { clientIp: '203.0.113.92', fetchImpl: mockFetch }
  );
  assert.equal(firstKeyed.status, 200);
  assert.equal(capturedIdempotency, key);

  const replayKeyed = await handleContactRequest(
    makeJsonRequest(VALID_PAYLOAD, { extraHeaders: { 'X-Idempotency-Key': key } }),
    { RESEND_API_KEY: 're_valid_key' },
    { clientIp: '203.0.113.92', fetchImpl: mockFetch }
  );
  assert.equal(replayKeyed.status, 409);
  const replayJson = (await replayKeyed.json()) as { ok: boolean; code: string };
  assert.equal(replayJson.code, 'DUPLICATE_SUBMISSION');
  assert.equal(resendCalls, 2);
});

test('Cloudflare Workers Cache API enforces rate limits across fresh isolate memory stores', async () => {
  const sharedPopCache = new Map<string, string>();
  const mockEdgeCache = {
    async match(req: Request | string) {
      const k = typeof req === 'string' ? req : req.url;
      const val = sharedPopCache.get(k);
      return val ? new Response(val, { headers: { 'Content-Type': 'application/json' } }) : undefined;
    },
    async put(req: Request | string, res: Response) {
      const k = typeof req === 'string' ? req : req.url;
      sharedPopCache.set(k, await res.text());
    },
  };

  const baseTime = 1_710_000_000_000;
  const okFetch: typeof fetch = async () =>
    new Response(JSON.stringify({ id: 're_pop_1' }), { status: 200 });

  for (let i = 0; i < 5; i++) {
    // Simulate cold isolate on every request by clearing in-memory store
    resetContactRateLimitStore();
    const res = await handleContactRequest(
      makeJsonRequest(VALID_PAYLOAD),
      { RESEND_API_KEY: 're_valid_key' },
      {
        clientIp: '198.51.100.200',
        fetchImpl: okFetch,
        now: baseTime + i * 1000,
        edgeCache: mockEdgeCache,
      }
    );
    assert.equal(res.status, 200);
  }

  // 6th request lands on a brand-new isolate (empty memory store), still blocked via PoP Cache API
  resetContactRateLimitStore();
  const sixth = await handleContactRequest(
    makeJsonRequest(VALID_PAYLOAD),
    { RESEND_API_KEY: 're_valid_key' },
    {
      clientIp: '198.51.100.200',
      fetchImpl: okFetch,
      now: baseTime + 6000,
      edgeCache: mockEdgeCache,
    }
  );
  assert.equal(sixth.status, 429);
  const sixthBody = (await sixth.json()) as { ok: boolean; code: string };
  assert.equal(sixthBody.code, 'RATE_LIMITED');
});

