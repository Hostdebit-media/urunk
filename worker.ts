/**
 * Cloudflare Worker for urunk.com
 * Handles Static Assets, Edge Performance, SEO Prerendering, Structured Logging,
 * Security Headers, and Accurate 404 Status Responses.
 */

import { handleContactRequest, type ContactEnv } from "./src/server/contactApi";

interface Env extends ContactEnv {
  ASSETS: {
    fetch: (request: Request | string) => Promise<Response>;
  };
}

const SECURITY_HEADERS: Record<string, string> = {
  "Content-Security-Policy":
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com https://cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.cloudflareinsights.com https://cloudflareinsights.com https://*.cloudflare.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
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

const LEGACY_FR_REDIRECTS: Record<string, string> = {
  "/fr": "/",
  "/fr/pricing": "/tarifs",
  "/fr/about": "/a-propos",
  "/fr/work": "/realisations",
  "/fr/terms-of-service": "/conditions-generales",
  "/fr/privacy-policy": "/politique-de-confidentialite",
  "/fr/sitemap": "/plan-du-site",
  "/fr/html-sitemap": "/plan-du-site",
  "/fr/thank-you": "/merci",
  "/fr/services/website-design": "/services/creation-site-web",
  "/fr/services/google-ads": "/google-ads-maroc",
  "/fr/services/gestion-google-ads": "/google-ads-maroc",
  "/fr/services/meta-ads": "/services/gestion-publicites-meta",
  "/fr/services/bundle": "/services/bundle-site-ads",
  "/fr/industries/hotels-resorts": "/secteurs/hotels-resorts",
  "/fr/industries/riads-boutique-hotels": "/secteurs/riads-maisons-hotes",
  "/fr/industries/tour-operators": "/secteurs/tour-operateurs",
  "/fr/industries/restaurants-catering": "/secteurs/restaurants-traiteurs",
  "/fr/industries/corporate-smes": "/secteurs/pme-entreprises",
  "/fr/industries/ecommerce": "/secteurs/hotels-resorts",
  "/fr/locations": "/zones",
  "/fr/locations/morocco": "/zones/maroc",
  "/fr/locations/casablanca": "/zones/casablanca",
  "/fr/locations/marrakech": "/zones/marrakech",
  "/fr/locations/rabat": "/zones/rabat",
  "/fr/locations/agadir": "/zones/agadir"
};

const CANONICAL_REDIRECTS: Record<string, string> = {
  "/services/gestion-google-ads": "/google-ads-maroc",
  "/services/bundle": "/services/bundle-site-ads",
  "/en/services/bundle": "/en/services/bundle-site-ads",
  "/en/seo-riad-marrakech": "/en/riad-seo-marrakech",
  "/en/services/meta-ads-management": "/en/services/meta-ads",
  "/en/website-design": "/en/services/website-design",
  "/blog/pages-atterrissage-haute-conversion-hotels": "/blog/landing-pages-hotels",
  "/en/blog/high-converting-hotel-landing-pages": "/en/blog/landing-pages-hotels",
  "/secteurs/ecommerce": "/secteurs/hotels-resorts",
  "/en/industries/ecommerce": "/en/industries/hotels-resorts",
  "/about": "/en/about",
  "/pricing": "/en/pricing",
  "/work": "/en/work",
  "/locations": "/en/locations",
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

export function isWorkerStaticAssetPath(normalizedPathname: string): boolean {
  return (
    normalizedPathname.startsWith("/assets/") ||
    normalizedPathname.startsWith("/images/") ||
    normalizedPathname.startsWith("/icons/") ||
    /\.(?:js|mjs|css|map|json|xml|txt|ico|svg|png|jpe?g|webp|avif|gif|woff2?|ttf|eot|webmanifest)$/i.test(
      normalizedPathname
    )
  );
}

/**
 * Resolves any non-canonical HTML path (trailing slash, .html suffix, legacy /fr/*,
 * or legacy un-prefixed English path) to its final canonical destination in a single hop.
 */
export function resolveCanonicalRedirect(pathname: string): string | null {
  const lower = pathname.toLowerCase();
  if (
    isWorkerStaticAssetPath(lower) ||
    lower === "/404" ||
    lower === "/404.html" ||
    lower.startsWith("/api/")
  ) {
    return null;
  }

  let candidate = pathname;
  let shouldRedirect = false;

  // 1. Strip trailing slashes (except root "/")
  if (candidate.length > 1 && candidate.endsWith("/")) {
    candidate = candidate.replace(/\/+$/, "") || "/";
    shouldRedirect = true;
  }

  // 2. Strip .html suffix (including /index.html -> / and /page.html -> /page)
  const candidateLowerBeforeHtml = candidate.toLowerCase();
  if (candidateLowerBeforeHtml === "/index.html") {
    candidate = "/";
    shouldRedirect = true;
  } else if (candidateLowerBeforeHtml.endsWith("/index.html")) {
    candidate = candidate.slice(0, -11) || "/";
    shouldRedirect = true;
  } else if (candidateLowerBeforeHtml.endsWith(".html")) {
    candidate = candidate.slice(0, -5) || "/";
    shouldRedirect = true;
  }

  // 3. Single-hop legacy /fr and /fr/* resolution to French canonical paths
  const candidateLowerAfterHtml = candidate.toLowerCase();
  if (LEGACY_FR_REDIRECTS[candidateLowerAfterHtml]) {
    candidate = LEGACY_FR_REDIRECTS[candidateLowerAfterHtml];
    shouldRedirect = true;
  } else if (candidateLowerAfterHtml.startsWith("/fr/")) {
    candidate = candidate.slice(3) || "/";
    shouldRedirect = true;
  }

  // 4. Consolidated & legacy root canonical table + prefix splats
  const candidateLowerFinal = candidate.toLowerCase();
  if (CANONICAL_REDIRECTS[candidateLowerFinal]) {
    candidate = CANONICAL_REDIRECTS[candidateLowerFinal];
    shouldRedirect = true;
  } else if (candidateLowerFinal.startsWith("/industries/")) {
    candidate = `/en${candidate}`;
    shouldRedirect = true;
  } else if (candidateLowerFinal.startsWith("/locations/")) {
    candidate = `/en${candidate}`;
    shouldRedirect = true;
  } else if (candidateLowerFinal.startsWith("/work/")) {
    candidate = `/en${candidate}`;
    shouldRedirect = true;
  }

  if (!shouldRedirect || candidate === pathname) {
    return null;
  }
  return candidate;
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

    // Server-side lead capture API endpoint (/api/contact)
    if (pathname === "/api/contact" || pathname === "/api/contact/") {
      const apiRes = await handleContactRequest(request, env, { clientIp: ip });
      const apiHeaders = new Headers(apiRes.headers);
      applySecurityHeaders(apiHeaders);
      return new Response(apiRes.body, {
        status: apiRes.status,
        headers: apiHeaders
      });
    }

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
      const normalizedPathname = pathname.toLowerCase();

      // 1–2. Single-hop canonical 301 redirect resolution (.html, trailing slash, /fr/*, legacy English)
      const redirectTarget = resolveCanonicalRedirect(pathname);
      if (redirectTarget) {
        const redirectUrl = new URL(redirectTarget + search, url.origin);
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
      let isFallbackEntryAsset = false;

      // 3b. Case-insensitive & deployment-skew resilience for /assets/* bundles
      if (assetResponse.status === 404 && normalizedPathname.startsWith("/assets/")) {
        // First try lowercase asset path in case crawler/proxy normalized casing
        if (pathname !== normalizedPathname) {
          const lowerAssetUrl = new URL(normalizedPathname + search, url.origin);
          assetResponse = await env.ASSETS.fetch(new Request(lowerAssetUrl.toString(), request));
        }

        // Next, if a stale HTML cache or delayed crawler render queue requests a previous
        // root entry bundle (/assets/index-<hash>.js or /assets/index-<hash>.css),
        // serve the current live entry asset from /assets/asset-manifest.json so JS/CSS never 404s.
        const isEntryJsRequest = /^\/assets\/index-[a-z0-9_-]+\.js$/i.test(normalizedPathname);
        const isEntryCssRequest = /^\/assets\/index-[a-z0-9_-]+\.css$/i.test(normalizedPathname);

        if (assetResponse.status === 404 && (isEntryJsRequest || isEntryCssRequest)) {
          const manifestUrl = new URL("/assets/asset-manifest.json", url.origin);
          const manifestRes = await env.ASSETS.fetch(new Request(manifestUrl.toString(), request));
          if (manifestRes.status === 200) {
            const manifest = (await manifestRes.json()) as {
              entryJs?: string | null;
              entryCss?: string | null;
            };
            const targetAssetPath = isEntryJsRequest ? manifest.entryJs : manifest.entryCss;
            if (targetAssetPath) {
              const fallbackUrl = new URL(targetAssetPath, url.origin);
              const fallbackRes = await env.ASSETS.fetch(new Request(fallbackUrl.toString(), request));
              if (fallbackRes.status === 200) {
                assetResponse = fallbackRes;
                isFallbackEntryAsset = true;
              }
            }
          }
        }

        // If a non-existent static chunk/asset is still 404, return a clean non-HTML 404 (never cache 404s)
        if (assetResponse.status === 404) {
          const missingAssetHeaders = new Headers();
          applySecurityHeaders(missingAssetHeaders);
          missingAssetHeaders.set("Content-Type", "text/plain; charset=utf-8");
          missingAssetHeaders.set("Cache-Control", "no-store, no-cache, must-revalidate");
          missingAssetHeaders.set("CDN-Cache-Control", "no-store");
          missingAssetHeaders.set("Cloudflare-CDN-Cache-Control", "no-store");
          return new Response("Asset Not Found", {
            status: 404,
            statusText: "Not Found",
            headers: missingAssetHeaders
          });
        }
      }

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
        notFoundHeaders.set("CDN-Cache-Control", "no-store");
        notFoundHeaders.set("Cloudflare-CDN-Cache-Control", "no-store");

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
      } else if (isFallbackEntryAsset) {
        // Ensure fallback responses for stale entry hashes execute with proper MIME type but are never cached permanently
        if (pathname.toLowerCase().endsWith(".js")) {
          responseHeaders.set("Content-Type", "application/javascript; charset=utf-8");
        } else if (pathname.toLowerCase().endsWith(".css")) {
          responseHeaders.set("Content-Type", "text/css; charset=utf-8");
        }
        responseHeaders.set("Cache-Control", "public, max-age=0, s-maxage=0, must-revalidate");
        responseHeaders.set("CDN-Cache-Control", "no-store");
        responseHeaders.set("Cloudflare-CDN-Cache-Control", "no-store");
      } else if (normalizedPathname === "/assets/asset-manifest.json") {
        responseHeaders.set("Content-Type", "application/json; charset=utf-8");
        responseHeaders.set("Cache-Control", "no-store, no-cache, must-revalidate");
        responseHeaders.set("CDN-Cache-Control", "no-store");
        responseHeaders.set("Cloudflare-CDN-Cache-Control", "no-store");
      } else if (
        normalizedPathname.startsWith("/assets/") ||
        normalizedPathname.startsWith("/images/") ||
        normalizedPathname.endsWith(".svg")
      ) {
        if (normalizedPathname.endsWith(".js") || normalizedPathname.endsWith(".mjs")) {
          responseHeaders.set("Content-Type", "application/javascript; charset=utf-8");
        } else if (normalizedPathname.endsWith(".css")) {
          responseHeaders.set("Content-Type", "text/css; charset=utf-8");
        }
        responseHeaders.set("Cache-Control", "public, max-age=31536000, immutable");
      } else if (pathname.endsWith(".ico") || pathname === "/favicon.ico") {
        responseHeaders.set("Cache-Control", "public, max-age=86400");
      } else if (pathname === "/robots.txt" || pathname === "/llms.txt" || pathname.endsWith(".xml")) {
        responseHeaders.set("Cache-Control", "public, max-age=3600");
      } else if (contentType.includes("text/html")) {
        // Prevent Cloudflare Edge CDN from serving stale pre-rendered HTML referencing deleted JS hashes across deploys
        responseHeaders.set("Cache-Control", "public, max-age=0, s-maxage=0, must-revalidate");
        responseHeaders.set("CDN-Cache-Control", "no-cache, no-store, must-revalidate");
        responseHeaders.set("Cloudflare-CDN-Cache-Control", "no-cache, no-store, must-revalidate");
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
