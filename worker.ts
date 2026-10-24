/**
 * Cloudflare Worker for urunk.com
 * Handles Static Assets, Edge Performance, SEO Prerendering, Structured Logging,
 * Security Headers, and Accurate 404 Status Responses.
 */

interface Env {
  ASSETS: {
    fetch: (request: Request | string) => Promise<Response>;
  };
}

const SECURITY_HEADERS: Record<string, string> = {
  "Content-Security-Policy":
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com https://cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.cloudflareinsights.com https://cloudflareinsights.com https://*.cloudflare.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://formsubmit.co;",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  "X-XSS-Protection": "1; mode=block",
  "Cross-Origin-Opener-Policy": "same-origin"
};

function applySecurityHeaders(headers: Headers) {
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(key, value);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const startTime = Date.now();
    let url: URL;

    try {
      url = new URL(request.url);
    } catch (err: any) {
      console.error(
        JSON.stringify({
          level: "error",
          status: 400,
          rawUrl: request.url,
          error: err?.message || String(err),
          timestamp: new Date().toISOString()
        })
      );
      const badHeaders = new Headers();
      applySecurityHeaders(badHeaders);
      return new Response("Bad Request", { status: 400, headers: badHeaders });
    }

    const { pathname, search } = url;
    const method = request.method;
    const userAgent = request.headers.get("user-agent") || "";
    const ip =
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-forwarded-for") ||
      "unknown";

    // Handle non-GET/HEAD methods (e.g. bots probing POST/PUT/OPTIONS to static routes)
    if (method !== "GET" && method !== "HEAD") {
      const durationMs = Date.now() - startTime;
      console.log(
        JSON.stringify({
          timestamp: new Date().toISOString(),
          method,
          path: pathname,
          status: 405,
          ip,
          userAgent,
          durationMs,
          msg: "Method not allowed for static assets"
        })
      );
      const methodHeaders = new Headers({
        Allow: "GET, HEAD",
        "Content-Type": "text/plain; charset=utf-8"
      });
      applySecurityHeaders(methodHeaders);
      return new Response("Method Not Allowed", {
        status: 405,
        headers: methodHeaders
      });
    }

    try {
      // 1. Trailing slash normalization (redirect /page/ -> /page, except root '/' and '/en/')
      if (pathname.length > 1 && pathname.endsWith("/") && pathname !== "/en/") {
        const cleanPath = pathname.slice(0, -1);
        const redirectUrl = new URL(cleanPath + search, url.origin);
        const redirectHeaders = new Headers({
          Location: redirectUrl.toString()
        });
        applySecurityHeaders(redirectHeaders);
        return new Response(null, {
          status: 301,
          headers: redirectHeaders
        });
      }

      // 2. Legacy /fr/ route handling (redirect /fr or /fr/path -> / or /path)
      if (pathname === "/fr" || pathname.startsWith("/fr/")) {
        let targetPath = pathname === "/fr" || pathname === "/fr/" ? "/" : pathname.slice(3);
        if (targetPath === "/services/gestion-google-ads") targetPath = "/google-ads-maroc";
        if (targetPath === "/services/bundle") targetPath = "/services/bundle-site-ads";
        const redirectUrl = new URL(targetPath + search, url.origin);
        const redirectHeaders = new Headers({
          Location: redirectUrl.toString()
        });
        applySecurityHeaders(redirectHeaders);
        return new Response(null, {
          status: 301,
          headers: redirectHeaders
        });
      }

      // 2b. Canonical 301 Redirects for consolidated & legacy URLs
      const CANONICAL_REDIRECTS: Record<string, string> = {
        "/services/gestion-google-ads": "/google-ads-maroc",
        "/services/gestion-google-ads.html": "/google-ads-maroc",
        "/services/bundle": "/services/bundle-site-ads",
        "/en/services/bundle": "/en/services/bundle-site-ads",
        "/en/seo-riad-marrakech": "/en/riad-seo-marrakech",
        "/en/seo-riad-marrakech.html": "/en/riad-seo-marrakech",
        "/en/services/meta-ads-management": "/en/services/meta-ads",
        "/en/website-design": "/en/services/website-design",
        "/secteurs/ecommerce": "/secteurs/hotels-resorts",
        "/en/industries/ecommerce": "/en/industries/hotels-resorts",
        "/about": "/en/about",
        "/pricing": "/en/pricing",
        "/work": "/en/work",
        "/terms-of-service": "/en/terms-of-service",
        "/privacy-policy": "/en/privacy-policy",
        "/thank-you": "/en/thank-you",
        "/web-design-morocco": "/en/web-design-morocco",
        "/web-design-casablanca": "/en/web-design-casablanca",
        "/seo-morocco": "/en/seo-morocco",
        "/seo-agency-morocco": "/en/seo-agency-morocco",
        "/seo-agency-casablanca": "/en/seo-agency-casablanca",
        "/hotel-seo": "/en/hotel-seo",
        "/hotel-digital-marketing": "/en/hotel-digital-marketing",
        "/hotel-website-design": "/en/hotel-website-design",
        "/direct-booking": "/en/direct-booking",
        "/google-ads-morocco": "/en/google-ads-morocco",
        "/local-seo-casablanca": "/en/local-seo-casablanca",
        "/riad-seo-marrakech": "/en/riad-seo-marrakech",
        "/riad-website-design-marrakech": "/en/riad-website-design-marrakech",
        "/services/website-design": "/en/services/website-design",
        "/services/google-ads": "/en/services/google-ads",
        "/services/meta-ads": "/en/services/meta-ads",
        "/sitemap": "/plan-du-site",
        "/html-sitemap": "/plan-du-site",
        "/en/html-sitemap": "/en/sitemap"
      };

      const normalizedPathname = pathname.toLowerCase();
      if (CANONICAL_REDIRECTS[normalizedPathname]) {
        const redirectUrl = new URL(CANONICAL_REDIRECTS[normalizedPathname] + search, url.origin);
        const redirectHeaders = new Headers({
          Location: redirectUrl.toString()
        });
        applySecurityHeaders(redirectHeaders);
        return new Response(null, {
          status: 301,
          headers: redirectHeaders
        });
      }

      // 3. Attempt direct fetch from static assets
      let assetResponse = await env.ASSETS.fetch(request);

      // 4. Clean URL resolution: if 404 and no file extension in path, try .html or /index.html
      if (assetResponse.status === 404 && !pathname.includes(".")) {
        // Try /path.html
        const htmlUrl = new URL(pathname + ".html" + search, url.origin);
        assetResponse = await env.ASSETS.fetch(new Request(htmlUrl.toString(), request));

        // If still 404, try /path/index.html
        if (assetResponse.status === 404) {
          const indexUrl = new URL(pathname + "/index.html" + search, url.origin);
          assetResponse = await env.ASSETS.fetch(new Request(indexUrl.toString(), request));
        }
      }

      // 5. If STILL 404: Serve the bilingual 404 page with an authentic HTTP 404 status
      if (assetResponse.status === 404) {
        // Try /404 first, fallback to /404.html
        let notFoundRes = await env.ASSETS.fetch(new Request(new URL("/404", url.origin).toString(), request));
        if (notFoundRes.status !== 200) {
          notFoundRes = await env.ASSETS.fetch(new Request(new URL("/404.html", url.origin).toString(), request));
        }

        const notFoundHeaders = new Headers(notFoundRes.headers);
        applySecurityHeaders(notFoundHeaders);
        notFoundHeaders.set("Content-Type", "text/html; charset=utf-8");
        notFoundHeaders.set("Cache-Control", "no-cache, no-store, must-revalidate");

        const durationMs = Date.now() - startTime;
        console.log(
          JSON.stringify({
            timestamp: new Date().toISOString(),
            method,
            path: pathname,
            status: 404,
            ip,
            userAgent,
            durationMs,
            msg: "404 Not Found"
          })
        );

        return new Response(notFoundRes.body, {
          status: 404,
          statusText: "Not Found",
          headers: notFoundHeaders
        });
      }

      // 6. Asset found (200, 304, etc.) - Apply security headers and cache policies
      const responseHeaders = new Headers(assetResponse.headers);
      applySecurityHeaders(responseHeaders);

      const contentType = responseHeaders.get("content-type") || "";
      if (pathname === "/.well-known/security.txt") {
        responseHeaders.set("Content-Type", "text/plain; charset=utf-8");
        responseHeaders.set("Cache-Control", "public, max-age=86400");
      } else if (pathname.startsWith("/assets/") || pathname.startsWith("/images/") || pathname.endsWith(".svg")) {
        responseHeaders.set("Cache-Control", "public, max-age=31536000, immutable");
      } else if (pathname.endsWith(".ico") || pathname === "/favicon.ico") {
        responseHeaders.set("Cache-Control", "public, max-age=86400");
      } else if (pathname === "/robots.txt" || pathname === "/llms.txt" || pathname.endsWith(".xml")) {
        responseHeaders.set("Cache-Control", "public, max-age=3600");
      } else if (contentType.includes("text/html")) {
        // Ensure pre-rendered HTML gets revalidated on new deploys
        responseHeaders.set("Cache-Control", "public, max-age=0, must-revalidate");
      }

      const durationMs = Date.now() - startTime;
      console.log(
        JSON.stringify({
          timestamp: new Date().toISOString(),
          method,
          path: pathname,
          status: assetResponse.status,
          ip,
          userAgent,
          durationMs
        })
      );

      return new Response(assetResponse.body, {
        status: assetResponse.status,
        statusText: assetResponse.statusText,
        headers: responseHeaders
      });
    } catch (err: any) {
      // 7. Catch any runtime exception to eliminate unhandled 500 crashes
      const durationMs = Date.now() - startTime;
      console.error(
        JSON.stringify({
          level: "error",
          timestamp: new Date().toISOString(),
          method,
          path: pathname,
          status: 500,
          ip,
          userAgent,
          durationMs,
          error: err?.message || String(err),
          stack: err?.stack || ""
        })
      );

      const errorHeaders = new Headers();
      applySecurityHeaders(errorHeaders);
      errorHeaders.set("Content-Type", "text/html; charset=utf-8");

      return new Response(
        `<!DOCTYPE html><html lang="fr"><head><title>Erreur Serveur | Server Error</title></head><body style="font-family:sans-serif;text-align:center;padding:4rem;"><h1>Erreur Serveur (500)</h1><p>Une erreur temporaire est survenue. Veuillez réessayer ultérieurement.</p><p><a href="/">Retour à l'accueil</a></p></body></html>`,
        {
          status: 500,
          headers: errorHeaders
        }
      );
    }
  }
};
