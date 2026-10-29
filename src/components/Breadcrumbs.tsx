import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const routeMappings: Record<string, { en: string; fr: string }> = {
  'services': { en: 'Services', fr: 'Services' },
  'website-design': { en: 'Website Design', fr: 'Création Site Web' },
  'creation-site-web': { en: 'Website Design', fr: 'Création Site Web' },
  'web-design-morocco': { en: 'Web Design Morocco', fr: 'Agence Web Maroc' },
  'agence-web-maroc': { en: 'Web Design Morocco', fr: 'Agence Web Maroc' },
  'web-design-casablanca': { en: 'Web Design Casablanca', fr: 'Agence Web Casablanca' },
  'agence-web-casablanca': { en: 'Web Design Casablanca', fr: 'Agence Web Casablanca' },
  'seo-morocco': { en: 'SEO Agency Morocco', fr: 'Agence SEO Maroc' },
  'seo-agency-morocco': { en: 'SEO Agency Morocco', fr: 'Agence SEO Maroc' },
  'agence-seo-maroc': { en: 'SEO Agency Morocco', fr: 'Agence SEO Maroc' },
  'seo-agency-casablanca': { en: 'SEO Agency Casablanca', fr: 'Agence SEO Casablanca' },
  'agence-seo-casablanca': { en: 'SEO Agency Casablanca', fr: 'Agence SEO Casablanca' },
  'hotel-seo': { en: 'Hotel SEO', fr: 'SEO Hôtelier' },
  'seo-hotel': { en: 'Hotel SEO', fr: 'SEO Hôtelier' },
  'hotel-digital-marketing': { en: 'Hotel Digital Marketing', fr: 'Marketing Digital Hôtelier' },
  'marketing-digital-hotelier': { en: 'Hotel Digital Marketing', fr: 'Marketing Digital Hôtelier' },
  'hotel-website-design': { en: 'Hotel Website Design', fr: 'Site Web Hôtel' },
  'site-web-hotel': { en: 'Hotel Website Design', fr: 'Site Web Hôtel' },
  'direct-booking': { en: 'Direct Booking Strategy', fr: 'Réservation Directe' },
  'reservation-directe': { en: 'Direct Booking Strategy', fr: 'Réservation Directe' },
  'google-ads-morocco': { en: 'Google Ads Morocco', fr: 'Google Ads Maroc' },
  'google-ads-maroc': { en: 'Google Ads Morocco', fr: 'Google Ads Maroc' },
  'local-seo-casablanca': { en: 'Local SEO Casablanca', fr: 'Référencement Local Casablanca' },
  'referencement-local-casablanca': { en: 'Local SEO Casablanca', fr: 'Référencement Local Casablanca' },
  'riad-seo-marrakech': { en: 'Riad SEO Marrakech', fr: 'SEO Riad Marrakech' },
  'seo-riad-marrakech': { en: 'Riad SEO Marrakech', fr: 'SEO Riad Marrakech' },
  'riad-website-design-marrakech': { en: 'Riad Website Design', fr: 'Site Web Riad Marrakech' },
  'site-web-riad-marrakech': { en: 'Riad Website Design', fr: 'Site Web Riad Marrakech' },

  'google-ads': { en: 'Google Ads', fr: 'Google Ads' },
  'gestion-google-ads': { en: 'Google Ads', fr: 'Gestion Google Ads' },
  'meta-ads': { en: 'Meta Ads', fr: 'Meta Ads' },
  'gestion-publicites-meta': { en: 'Meta Ads', fr: 'Gestion Publicités Meta' },
  'tripadvisor-ads': { en: 'Tripadvisor Ads', fr: 'TripAdvisor Ads' },
  'gestion-publicites-tripadvisor': { en: 'Tripadvisor Ads', fr: 'Gestion TripAdvisor Ads' },
  'bundle': { en: 'Website + Ads Bundle', fr: 'Pack Site Web + Pub' },
  'bundle-site-ads': { en: 'Website + Ads Bundle', fr: 'Pack Site Web + Pub' },
  'site-web-et-publicite': { en: 'Website + Ads Bundle', fr: 'Pack Site Web + Pub' },
  'ai-seo-optimization': { en: 'AI Search Optimization', fr: 'Optimisation SEO IA' },
  'wordpress-seo': { en: 'WordPress SEO', fr: 'SEO WordPress' },
  'ecommerce-seo': { en: 'E-commerce SEO', fr: 'SEO E-commerce' },
  'google-business-profile': { en: 'Google Business Profile', fr: 'Google Business Profile' },
  'local-seo-morocco': { en: 'Local SEO Morocco', fr: 'SEO Local Maroc' },

  'pricing': { en: 'Pricing', fr: 'Tarifs' },
  'tarifs': { en: 'Pricing', fr: 'Tarifs' },
  'work': { en: 'Strategy Examples', fr: 'Exemples de Stratégies' },
  'realisations': { en: 'Strategy Examples', fr: 'Exemples de Stratégies' },
  'about': { en: 'About Us', fr: 'À Propos' },
  'a-propos': { en: 'About Us', fr: 'À Propos' },
  'blog': { en: 'Blog & Articles', fr: 'Blog & Guide' },
  'faq': { en: 'FAQ', fr: 'FAQ' },
  'contact': { en: 'Contact', fr: 'Contact' },
  'privacy-policy': { en: 'Privacy Policy', fr: 'Politique de confidentialité' },
  'politique-de-confidentialite': { en: 'Privacy Policy', fr: 'Politique de confidentialité' },
  'terms-of-service': { en: 'Terms of Service', fr: 'Conditions générales' },
  'conditions-generales': { en: 'Terms of Service', fr: 'Conditions générales' },
  'sitemap': { en: 'HTML Sitemap', fr: 'Plan du site' },
  'plan-du-site': { en: 'HTML Sitemap', fr: 'Plan du site' },
  'thank-you': { en: 'Thank You', fr: 'Merci' },
  'merci': { en: 'Thank You', fr: 'Merci' },

  // Industries
  'industries': { en: 'Industries', fr: 'Secteurs d\'Activité' },
  'secteurs': { en: 'Industries', fr: 'Secteurs d\'Activité' },
  'hotels-resorts': { en: 'Hotels & Luxury Resorts', fr: 'Hôtels & Resorts de Luxe' },
  'riads-boutique-hotels': { en: 'Riads & Boutique Hotels', fr: 'Riads & Hôtels Boutique' },
  'riads-maisons-hotes': { en: 'Riads & Boutique Hotels', fr: 'Riads & Maisons d\'Hôtes' },
  'tour-operators': { en: 'Tour Operators & Agencies', fr: 'Tour-Opérateurs & Agences' },
  'tour-operateurs': { en: 'Tour Operators & Agencies', fr: 'Tour-Opérateurs & Agences' },
  'restaurants-catering': { en: 'Restaurants & Catering', fr: 'Restaurants & Traiteurs' },
  'restaurants-traiteurs': { en: 'Restaurants & Catering', fr: 'Restaurants & Traiteurs' },
  'corporate-smes': { en: 'Corporate & SMEs', fr: 'PME & Entreprises' },
  'pme-entreprises': { en: 'Corporate & SMEs', fr: 'PME & Entreprises' },

  // Locations
  'locations': { en: 'Locations', fr: 'Zones' },
  'zones': { en: 'Locations', fr: 'Zones' },
  'morocco': { en: 'Morocco (National)', fr: 'Maroc (National)' },
  'maroc': { en: 'Morocco (National)', fr: 'Maroc (National)' },
  'casablanca': { en: 'Casablanca', fr: 'Casablanca' },
  'marrakech': { en: 'Marrakech', fr: 'Marrakech' },
  'rabat': { en: 'Rabat', fr: 'Rabat' },
  'agadir': { en: 'Agadir', fr: 'Agadir' }
};

function formatSlug(slug: string) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const isFrench = pathnames[0] !== 'en';

  if (pathnames.length === 0 || (pathnames.length === 1 && pathnames[0] === 'en')) {
    return null;
  }

  const buildPath = (index: number) => {
    return '/' + pathnames.slice(0, index + 1).join('/');
  };

  return (
    <nav className="w-full overflow-hidden text-xs md:text-sm text-primary/80 font-medium px-4 sm:px-6 md:px-12 max-w-7xl mx-auto py-2.5 md:py-3.5 print:hidden" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1 md:space-x-2 overflow-x-auto whitespace-nowrap scrollbar-none py-1 max-w-full">
        <li className="inline-flex items-center">
          <Link to={isFrench ? '/' : '/en'} className="inline-flex items-center py-1 hover:text-accent transition-colors">
            <Home size={14} className="mr-1.5 shrink-0" />
            <span>{isFrench ? 'Accueil' : 'Home'}</span>
          </Link>
        </li>

        {pathnames.map((segment, index) => {
          if (segment === 'en') return null;

          const routePath = buildPath(index);
          const isLast = index === pathnames.length - 1;
          const mappedName = routeMappings[segment];
          const label = mappedName ? (isFrench ? mappedName.fr : mappedName.en) : formatSlug(segment);

          return (
            <li key={routePath} className="flex items-center">
              <ChevronRight size={14} className="text-primary/40 mx-1 shrink-0" />
              {isLast ? (
                <span className="text-primary font-semibold truncate max-w-[200px] md:max-w-xs" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link to={routePath} className="hover:text-accent transition-colors truncate max-w-[150px] md:max-w-none py-1">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
