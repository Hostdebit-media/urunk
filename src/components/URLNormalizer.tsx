import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * URLNormalizer
 * 
 * Enforces clean, SEO-friendly URL standards on the client-side:
 * 1. Lowercase paths.
 * 2. Hyphens (-) instead of underscores (_) or other unwanted characters.
 * 3. Removes trailing slashes (except for '/' and '/fr').
 * 4. Eliminates duplicate slashes.
 * 5. Handles legacy / non-SEO friendly redirections dynamically.
 */
export default function URLNormalizer() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;
    
    // Skip if root paths
    if (pathname === '/' || pathname === '/en') {
      return;
    }

    let normalizedPath = pathname;

    // 1. Force lowercase
    normalizedPath = normalizedPath.toLowerCase();

    // 2. Strip .html or .htm extension if present
    if (normalizedPath.endsWith('.html')) {
      normalizedPath = normalizedPath.slice(0, -5);
    } else if (normalizedPath.endsWith('.htm')) {
      normalizedPath = normalizedPath.slice(0, -4);
    }

    // 3. Replace underscores with hyphens (e.g. google_ads -> google-ads)
    normalizedPath = normalizedPath.replace(/_/g, '-');

    // 4. Remove multiple duplicate slashes
    normalizedPath = normalizedPath.replace(/\/+/g, '/');

    // 5. Remove trailing slashes (e.g. /about/ -> /about)
    if (normalizedPath.endsWith('/') && normalizedPath.length > 1) {
      normalizedPath = normalizedPath.slice(0, -1);
    }

    // 6. Direct single-hop redirect mapping for old/legacy URL structures
    const redirectMappings: { [key: string]: string } = {
      '/fr': '/',
      '/fr/': '/',
      '/fr/tarifs': '/tarifs',
      '/fr/pricing': '/tarifs',
      '/fr/a-propos': '/a-propos',
      '/fr/about': '/a-propos',
      '/fr/realisations': '/realisations',
      '/fr/work': '/realisations',
      '/fr/contact': '/contact',
      '/fr/faq': '/faq',
      '/fr/blog': '/blog',
      '/fr/services': '/services',
      '/fr/politique-de-confidentialite': '/politique-de-confidentialite',
      '/fr/conditions-generales': '/conditions-generales',
      '/fr/plan-du-site': '/plan-du-site',
      '/fr/merci': '/merci',
      '/about': '/en/about',
      '/pricing': '/en/pricing',
      '/work': '/en/work',
      '/terms-of-service': '/en/terms-of-service',
      '/privacy-policy': '/en/privacy-policy',
      '/thank-you': '/en/thank-you',
      '/sitemap': '/plan-du-site',
      '/html-sitemap': '/plan-du-site',
      '/en/html-sitemap': '/en/sitemap',
      '/work/nomad-eats-traiteur': '/realisations/nomad-eats-traiteur',
      '/work/art-house-marrakech-case-study': '/en/work/art-house-marrakech',
      '/realisations/art-house-marrakech-case-study': '/realisations/art-house-marrakech',
      '/fr/realisations/art-house-marrakech-case-study': '/realisations/art-house-marrakech',
      '/services/gestion-google-ads': '/google-ads-maroc',
      '/services/bundle': '/services/bundle-site-ads',
      '/en/services/bundle': '/en/services/bundle-site-ads',
      '/en/seo-riad-marrakech': '/en/riad-seo-marrakech',
      '/en/services/meta-ads-management': '/en/services/meta-ads',
      '/en/website-design': '/en/services/website-design',
    };

    if (redirectMappings[normalizedPath]) {
      normalizedPath = redirectMappings[normalizedPath];
    } else if (normalizedPath.startsWith('/fr/')) {
      // Automatic single-hop collapse for any nested /fr/ URL
      normalizedPath = normalizedPath.replace(/^\/fr\//, '/');
    }

    // If pathname has changed, execute a clean client-side replace
    if (normalizedPath !== pathname) {
      navigate(`${normalizedPath}${search}${hash}`, { replace: true });
    }
  }, [location, navigate]);

  return null;
}
