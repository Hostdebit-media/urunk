import { matrixRelations } from './matrixRelations';

export const blogSlugMap: Record<string, string> = {
  // EN -> FR
  "reduce-ota-commissions": "reduire-commissions-ota",
  "tripadvisor-vs-google-ads": "tripadvisor-vs-google-ads",
  "website-book-now-button": "bouton-reserver-site-web",
  "wordpress-vs-wix-hospitality": "wordpress-vs-wix-hotellerie",
  "optimize-tripadvisor-listing": "optimiser-annonce-tripadvisor",
  "direct-booking-website-cost-morocco": "cout-site-web-reservation-directe-maroc",
  "signs-website-losing-bookings": "signes-site-web-perd-reservations",
  "google-ads-riads-keyword-research": "google-ads-riads-recherche-mots-cles",
  "get-more-5-star-reviews": "obtenir-plus-avis-5-etoiles",
  "case-study-roundup-success": "etudes-de-cas-succes-hotellerie",
  "meta-ads-for-hotels-instagram-facebook": "publicites-meta-pour-hotels-instagram-facebook",
  "hotel-seo-morocco-guide": "guide-seo-hotellerie-maroc",
  "pms-integration-direct-booking-engine": "integration-pms-moteur-reservation-directe",
  "email-marketing-automation-for-hotels": "marketing-email-automatisation-pour-hotels",
  "desert-camp-marketing-strategy": "strategie-marketing-camp-desert",
  "tour-operator-digital-marketing": "marketing-digital-tour-operateur",
  "speed-optimization-hotel-websites": "optimisation-vitesse-sites-web-hotellerie",
  "whatsapp-automation-hotel-guest-experience": "automatisation-whatsapp-experience-client-hotel",
  "landing-pages-hotels": "landing-pages-hotels",
  "seasonal-pricing-revenue-management": "tarification-saisonniere-gestion-revenus",
  "rebranding-renovating-hotel-digital-launch": "rebranding-renovation-hotel-lancement-digital"
};

export const caseStudySlugMap: Record<string, string> = {
  "travel-morocco-services": "services-voyage-maroc",
  "nomad-eats-catering": "nomad-eats-traiteur",
  "art-house-marrakech": "art-house-marrakech"
};

export const blogSlugMapFRtoEN = Object.fromEntries(
  Object.entries(blogSlugMap).map(([en, fr]) => [fr, en])
);

export const caseStudySlugMapFRtoEN = Object.fromEntries(
  Object.entries(caseStudySlugMap).map(([en, fr]) => [fr, en])
);

export function getFRBlogSlug(enSlug: string): string {
  return blogSlugMap[enSlug] || enSlug;
}

export function getENBlogSlug(frSlug: string): string {
  return blogSlugMapFRtoEN[frSlug] || frSlug;
}

export function getFRCaseStudySlug(enSlug: string): string {
  return caseStudySlugMap[enSlug] || enSlug;
}

export function getENCaseStudySlug(frSlug: string): string {
  return caseStudySlugMapFRtoEN[frSlug] || frSlug;
}

export const routeMap: Record<string, string> = {
  // FR (root) -> EN (/en/...)
  '/': '/en',
  '/a-propos': '/en/about',
  '/tarifs': '/en/pricing',
  '/services': '/en/services',
  '/services/creation-site-web': '/en/services/website-design',
  '/creation-site-web': '/en/services/website-design',
  '/agence-web-maroc': '/en/web-design-morocco',
  '/agence-web-casablanca': '/en/web-design-casablanca',
  '/agence-seo-maroc': '/en/seo-agency-morocco',
  '/agence-seo-casablanca': '/en/seo-agency-casablanca',
  '/seo-hotel': '/en/hotel-seo',
  '/marketing-digital-hotelier': '/en/hotel-digital-marketing',
  '/site-web-hotel': '/en/hotel-website-design',
  '/reservation-directe': '/en/direct-booking',
  '/google-ads-maroc': '/en/google-ads-morocco',
  '/referencement-local-casablanca': '/en/local-seo-casablanca',
  '/seo-riad-marrakech': '/en/riad-seo-marrakech',
  '/site-web-riad-marrakech': '/en/riad-website-design-marrakech',
  
  '/services/gestion-google-ads': '/en/google-ads-morocco',
  '/services/gestion-publicites-meta': '/en/services/meta-ads',
  '/services/tripadvisor-ads': '/en/services/tripadvisor-ads',
  '/services/bundle-site-ads': '/en/services/bundle-site-ads',
  '/services/ai-seo-optimization': '/en/services/ai-seo-optimization',
  '/services/wordpress-seo': '/en/services/wordpress-seo',
  '/services/ecommerce-seo': '/en/services/ecommerce-seo',
  '/services/google-business-profile': '/en/services/google-business-profile',
  '/services/local-seo-morocco': '/en/services/local-seo-morocco',

  // Industries (FR -> EN)
  '/secteurs/hotels-resorts': '/en/industries/hotels-resorts',
  '/secteurs/riads-maisons-hotes': '/en/industries/riads-boutique-hotels',
  '/secteurs/tour-operateurs': '/en/industries/tour-operators',
  '/secteurs/restaurants-traiteurs': '/en/industries/restaurants-catering',
  '/secteurs/pme-entreprises': '/en/industries/corporate-smes',

  // Locations (FR -> EN)
  '/zones': '/en/locations',
  '/zones/maroc': '/en/locations/morocco',
  '/zones/casablanca': '/en/locations/casablanca',
  '/zones/marrakech': '/en/locations/marrakech',
  '/zones/rabat': '/en/locations/rabat',
  '/zones/agadir': '/en/locations/agadir',

  '/realisations': '/en/work',
  '/blog': '/en/blog',
  '/faq': '/en/faq',
  '/contact': '/en/contact',
  '/politique-de-confidentialite': '/en/privacy-policy',
  '/conditions-generales': '/en/terms-of-service',
  '/plan-du-site': '/en/sitemap',
  '/merci': '/en/thank-you',

  // EN (/en/...) -> FR (root)
  '/en': '/',
  '/en/': '/',
  '/en/about': '/a-propos',
  '/en/pricing': '/tarifs',
  '/en/services': '/services',
  '/en/services/website-design': '/creation-site-web',
  '/en/web-design-morocco': '/agence-web-maroc',
  '/en/web-design-casablanca': '/agence-web-casablanca',
  '/en/seo-agency-morocco': '/agence-seo-maroc',
  '/en/seo-morocco': '/agence-seo-maroc',
  '/en/seo-agency-casablanca': '/agence-seo-casablanca',
  '/en/hotel-seo': '/seo-hotel',
  '/en/hotel-digital-marketing': '/marketing-digital-hotelier',
  '/en/hotel-website-design': '/site-web-hotel',
  '/en/direct-booking': '/reservation-directe',
  '/en/google-ads-morocco': '/google-ads-maroc',
  '/en/local-seo-casablanca': '/referencement-local-casablanca',
  '/en/riad-seo-marrakech': '/seo-riad-marrakech',
  '/en/riad-website-design-marrakech': '/site-web-riad-marrakech',

  '/en/services/google-ads': '/google-ads-maroc',
  '/en/services/meta-ads': '/services/gestion-publicites-meta',
  '/en/services/tripadvisor-ads': '/services/tripadvisor-ads',
  '/en/services/bundle-site-ads': '/services/bundle-site-ads',
  '/en/services/ai-seo-optimization': '/services/ai-seo-optimization',
  '/en/services/wordpress-seo': '/services/wordpress-seo',
  '/en/services/ecommerce-seo': '/services/ecommerce-seo',
  '/en/services/google-business-profile': '/services/google-business-profile',
  '/en/services/local-seo-morocco': '/services/local-seo-morocco',

  // Industries (EN -> FR)
  '/en/industries/hotels-resorts': '/secteurs/hotels-resorts',
  '/en/industries/riads-boutique-hotels': '/secteurs/riads-maisons-hotes',
  '/en/industries/tour-operators': '/secteurs/tour-operateurs',
  '/en/industries/restaurants-catering': '/secteurs/restaurants-traiteurs',
  '/en/industries/corporate-smes': '/secteurs/pme-entreprises',

  // Locations (EN -> FR)
  '/en/locations': '/zones',
  '/en/locations/morocco': '/zones/maroc',
  '/en/locations/casablanca': '/zones/casablanca',
  '/en/locations/marrakech': '/zones/marrakech',
  '/en/locations/rabat': '/zones/rabat',
  '/en/locations/agadir': '/zones/agadir',

  '/en/work': '/realisations',
  '/en/blog': '/blog',
  '/en/faq': '/faq',
  '/en/contact': '/contact',
  '/en/privacy-policy': '/politique-de-confidentialite',
  '/en/terms-of-service': '/conditions-generales',
  '/en/sitemap': '/plan-du-site',
  '/en/html-sitemap': '/plan-du-site',
  '/en/thank-you': '/merci',

  // Legacy mappings support (old un-prefixed EN)
  '/about': '/en/about',
  '/pricing': '/en/pricing',
  '/work': '/en/work',
  '/privacy-policy': '/en/privacy-policy',
  '/terms-of-service': '/en/terms-of-service',
  '/sitemap': '/plan-du-site',
  '/html-sitemap': '/plan-du-site',
  '/thank-you': '/merci',
};

export function getEquivalentRoute(pathname: string): string {
  const cleanPath = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  if (routeMap[cleanPath]) {
    return routeMap[cleanPath];
  }

  // Blog dynamic post routing
  if (cleanPath.startsWith('/en/blog/')) {
    const slug = cleanPath.slice(9);
    return '/blog/' + getFRBlogSlug(slug);
  }
  if (cleanPath.startsWith('/blog/')) {
    const slug = cleanPath.slice(6);
    return '/en/blog/' + getENBlogSlug(slug);
  }

  // Work / Case studies dynamic routing
  if (cleanPath.startsWith('/en/work/')) {
    const slug = cleanPath.slice(9);
    return '/realisations/' + getFRCaseStudySlug(slug);
  }
  if (cleanPath.startsWith('/realisations/')) {
    const slug = cleanPath.slice(14);
    return '/en/work/' + getENCaseStudySlug(slug);
  }
  if (cleanPath.startsWith('/work/')) {
    const slug = cleanPath.slice(6);
    return '/realisations/' + getFRCaseStudySlug(slug);
  }

  // Expertise (Matrix) dynamic routing
  if (cleanPath.startsWith('/en/expertise/')) {
    const parts = cleanPath.split('/').slice(3);
    if (parts.length === 2) {
      const rel = matrixRelations.find(r => 
        (r.slugs.en.service === parts[0] && r.slugs.en.target === parts[1]) ||
        (r.slugs.en.service === parts[1] && r.slugs.en.target === parts[0])
      );
      if (rel) {
        return `/expertise/${rel.slugs.fr.service}/${rel.slugs.fr.target}`;
      }
      return `/expertise/${parts[0]}/${parts[1]}`;
    }
    if (parts.length === 3) {
      return `/expertise/${parts[0]}/${parts[1]}/${parts[2]}`;
    }
  }
  if (cleanPath.startsWith('/fr/expertise/') || cleanPath.startsWith('/expertise/')) {
    const isPrefixedFr = cleanPath.startsWith('/fr/');
    const parts = cleanPath.split('/').slice(isPrefixedFr ? 3 : 2);
    if (parts.length === 2) {
      const rel = matrixRelations.find(r => 
        (r.slugs.fr.service === parts[0] && r.slugs.fr.target === parts[1]) ||
        (r.slugs.fr.service === parts[1] && r.slugs.fr.target === parts[0])
      );
      if (rel) {
        return `/en/expertise/${rel.slugs.en.service}/${rel.slugs.en.target}`;
      }
      return `/en/expertise/${parts[0]}/${parts[1]}`;
    }
    if (parts.length === 3) {
      return `/en/expertise/${parts[0]}/${parts[1]}/${parts[2]}`;
    }
  }

  if (cleanPath === '/en' || cleanPath.startsWith('/en/')) {
    const withoutEn = cleanPath.slice(3) || '/';
    return withoutEn;
  } else {
    return cleanPath === '/' ? '/en' : '/en' + cleanPath;
  }
}
