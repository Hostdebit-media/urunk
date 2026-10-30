export type MatrixRelationType = 'service_location' | 'service_industry';
export type MatrixRelationStatus = 'live' | 'planned';

export interface MatrixRelation {
  id: string;
  type: MatrixRelationType;
  serviceId: string;
  targetId: string;
  locationId?: string;
  industryId?: string;
  slugs: {
    fr: {
      service: string;
      target: string;
    };
    en: {
      service: string;
      target: string;
    };
  };
  status: MatrixRelationStatus;
  priority: number;
}

export const matrixRelations: MatrixRelation[] = [
  // 1. Hotel SEO × Marrakech (Hospitality hub #1)
  {
    id: 'hotel-seo-marrakech',
    type: 'service_location',
    serviceId: 'hotel-seo',
    targetId: 'marrakech',
    locationId: 'marrakech',
    slugs: {
      fr: { service: 'seo-hotel', target: 'marrakech' },
      en: { service: 'hotel-seo', target: 'marrakech' }
    },
    status: 'live',
    priority: 0.6
  },
  // 2. Hotel Website Design × Marrakech
  {
    id: 'hotel-website-design-marrakech',
    type: 'service_location',
    serviceId: 'hotel-website-design',
    targetId: 'marrakech',
    locationId: 'marrakech',
    slugs: {
      fr: { service: 'site-web-hotel', target: 'marrakech' },
      en: { service: 'hotel-website-design', target: 'marrakech' }
    },
    status: 'live',
    priority: 0.6
  },
  // 3. Riad SEO × Marrakech
  {
    id: 'riad-seo-marrakech',
    type: 'service_location',
    serviceId: 'riad-seo-marrakech',
    targetId: 'marrakech',
    locationId: 'marrakech',
    slugs: {
      fr: { service: 'seo-riad', target: 'marrakech' },
      en: { service: 'riad-seo', target: 'marrakech' }
    },
    status: 'live',
    priority: 0.6
  },
  // 4. Riad Website Design × Marrakech
  {
    id: 'riad-website-design-marrakech',
    type: 'service_location',
    serviceId: 'riad-website-design-marrakech',
    targetId: 'marrakech',
    locationId: 'marrakech',
    slugs: {
      fr: { service: 'site-web-riad', target: 'marrakech' },
      en: { service: 'riad-website-design', target: 'marrakech' }
    },
    status: 'live',
    priority: 0.6
  },
  // 5. Direct Booking Strategy × Marrakech
  {
    id: 'direct-booking-marrakech',
    type: 'service_location',
    serviceId: 'direct-booking',
    targetId: 'marrakech',
    locationId: 'marrakech',
    slugs: {
      fr: { service: 'reservation-directe', target: 'marrakech' },
      en: { service: 'direct-booking', target: 'marrakech' }
    },
    status: 'live',
    priority: 0.6
  },
  // 6. Hotel SEO × Agadir (Coastal & surf resort capital)
  {
    id: 'hotel-seo-agadir',
    type: 'service_location',
    serviceId: 'hotel-seo',
    targetId: 'agadir',
    locationId: 'agadir',
    slugs: {
      fr: { service: 'seo-hotel', target: 'agadir' },
      en: { service: 'hotel-seo', target: 'agadir' }
    },
    status: 'live',
    priority: 0.6
  },
  // 7. Hotel Website Design × Agadir
  {
    id: 'hotel-website-design-agadir',
    type: 'service_location',
    serviceId: 'hotel-website-design',
    targetId: 'agadir',
    locationId: 'agadir',
    slugs: {
      fr: { service: 'site-web-hotel', target: 'agadir' },
      en: { service: 'hotel-website-design', target: 'agadir' }
    },
    status: 'live',
    priority: 0.6
  },
  // 8. Direct Booking Strategy × Agadir
  {
    id: 'direct-booking-agadir',
    type: 'service_location',
    serviceId: 'direct-booking',
    targetId: 'agadir',
    locationId: 'agadir',
    slugs: {
      fr: { service: 'reservation-directe', target: 'agadir' },
      en: { service: 'direct-booking', target: 'agadir' }
    },
    status: 'live',
    priority: 0.6
  },
  // 9. Hotel SEO × Casablanca (Corporate & business hospitality)
  {
    id: 'hotel-seo-casablanca',
    type: 'service_location',
    serviceId: 'hotel-seo',
    targetId: 'casablanca',
    locationId: 'casablanca',
    slugs: {
      fr: { service: 'seo-hotel', target: 'casablanca' },
      en: { service: 'hotel-seo', target: 'casablanca' }
    },
    status: 'live',
    priority: 0.6
  },
  // 10. Web Design × Casablanca (Commercial/B2B focus)
  {
    id: 'web-design-casablanca',
    type: 'service_location',
    serviceId: 'web-design-casablanca',
    targetId: 'casablanca',
    locationId: 'casablanca',
    slugs: {
      fr: { service: 'creation-site-web', target: 'casablanca' },
      en: { service: 'web-design', target: 'casablanca' }
    },
    status: 'live',
    priority: 0.6
  },
  // 11. Local SEO × Casablanca
  {
    id: 'local-seo-casablanca',
    type: 'service_location',
    serviceId: 'local-seo-casablanca',
    targetId: 'casablanca',
    locationId: 'casablanca',
    slugs: {
      fr: { service: 'referencement-local', target: 'casablanca' },
      en: { service: 'local-seo', target: 'casablanca' }
    },
    status: 'live',
    priority: 0.6
  },
  // 12. Google Ads × Casablanca
  {
    id: 'google-ads-casablanca',
    type: 'service_location',
    serviceId: 'google-ads-morocco',
    targetId: 'casablanca',
    locationId: 'casablanca',
    slugs: {
      fr: { service: 'google-ads', target: 'casablanca' },
      en: { service: 'google-ads', target: 'casablanca' }
    },
    status: 'live',
    priority: 0.6
  },
  // 13. Google Ads × Marrakech
  {
    id: 'google-ads-marrakech',
    type: 'service_location',
    serviceId: 'google-ads-morocco',
    targetId: 'marrakech',
    locationId: 'marrakech',
    slugs: {
      fr: { service: 'google-ads', target: 'marrakech' },
      en: { service: 'google-ads', target: 'marrakech' }
    },
    status: 'live',
    priority: 0.6
  },
  // 14. TripAdvisor Ads × Marrakech
  {
    id: 'tripadvisor-ads-marrakech',
    type: 'service_location',
    serviceId: 'tripadvisor-ads',
    targetId: 'marrakech',
    locationId: 'marrakech',
    slugs: {
      fr: { service: 'tripadvisor-ads', target: 'marrakech' },
      en: { service: 'tripadvisor-ads', target: 'marrakech' }
    },
    status: 'live',
    priority: 0.6
  },
  // 15. Hotel SEO × Rabat (Diplomatic & institutional business hotels)
  {
    id: 'hotel-seo-rabat',
    type: 'service_location',
    serviceId: 'hotel-seo',
    targetId: 'rabat',
    locationId: 'rabat',
    slugs: {
      fr: { service: 'seo-hotel', target: 'rabat' },
      en: { service: 'hotel-seo', target: 'rabat' }
    },
    status: 'live',
    priority: 0.6
  },
  // 16. Web Design × Rabat
  {
    id: 'web-design-rabat',
    type: 'service_location',
    serviceId: 'web-design-morocco',
    targetId: 'rabat',
    locationId: 'rabat',
    slugs: {
      fr: { service: 'creation-site-web', target: 'rabat' },
      en: { service: 'web-design', target: 'rabat' }
    },
    status: 'live',
    priority: 0.6
  },
  // 17. Meta Ads × Marrakech (Visual hospitality & dining)
  {
    id: 'meta-ads-marrakech',
    type: 'service_location',
    serviceId: 'meta-ads',
    targetId: 'marrakech',
    locationId: 'marrakech',
    slugs: {
      fr: { service: 'meta-ads', target: 'marrakech' },
      en: { service: 'meta-ads', target: 'marrakech' }
    },
    status: 'live',
    priority: 0.6
  },
  // 18. Service × Industry: Hotel SEO × Hotels & Resorts
  {
    id: 'hotel-seo-hotels-resorts',
    type: 'service_industry',
    serviceId: 'hotel-seo',
    targetId: 'hotels-resorts',
    industryId: 'hotels-resorts',
    slugs: {
      fr: { service: 'seo-hotel', target: 'hotels-resorts' },
      en: { service: 'hotel-seo', target: 'hotels-resorts' }
    },
    status: 'live',
    priority: 0.6
  },
  // 19. Service × Industry: Direct Booking × Riads & Boutique Stays
  {
    id: 'direct-booking-riads-boutique-hotels',
    type: 'service_industry',
    serviceId: 'direct-booking',
    targetId: 'riads-boutique-hotels',
    industryId: 'riads-boutique-hotels',
    slugs: {
      fr: { service: 'reservation-directe', target: 'riads-maisons-hotes' },
      en: { service: 'direct-booking', target: 'riads-boutique-hotels' }
    },
    status: 'live',
    priority: 0.6
  }
];

export function getAllMatrixRelations(): MatrixRelation[] {
  return matrixRelations;
}

export function getLiveMatrixRelations(): MatrixRelation[] {
  return matrixRelations.filter(r => r.status === 'live');
}

export function findMatrixRelation(
  serviceSlug: string,
  targetSlug: string,
  lang: 'fr' | 'en'
): MatrixRelation | undefined {
  return matrixRelations.find(r => {
    const slugPair = r.slugs[lang];
    return slugPair.service === serviceSlug && slugPair.target === targetSlug;
  });
}

export function findLiveMatrixRelation(
  serviceSlug: string,
  targetSlug: string,
  lang: 'fr' | 'en'
): MatrixRelation | undefined {
  const relation = findMatrixRelation(serviceSlug, targetSlug, lang);
  return relation?.status === 'live' ? relation : undefined;
}

export function isCuratedMatrixPath(pathname: string): boolean {
  const withoutQuery = pathname.split(/[?#]/)[0] || '/';
  const cleanPath =
    withoutQuery.endsWith('/') && withoutQuery.length > 1
      ? withoutQuery.slice(0, -1)
      : withoutQuery;

  for (const rel of matrixRelations) {
    if (rel.status !== 'live') continue;
    const frPath = `/expertise/${rel.slugs.fr.service}/${rel.slugs.fr.target}`;
    const enPath = `/en/expertise/${rel.slugs.en.service}/${rel.slugs.en.target}`;
    if (cleanPath === frPath || cleanPath === enPath) {
      return true;
    }
  }
  return false;
}

export interface MatrixLinkItem {
  id: string;
  path: string;
  anchor: string;
  contextLabel: string;
  summary: string;
  serviceId: string;
  locationId?: string;
  industryId?: string;
}

interface CuratedRelationCopy {
  fr: {
    anchor: string;
    contextLabel: string;
    summary: string;
  };
  en: {
    anchor: string;
    contextLabel: string;
    summary: string;
  };
}

const CURATED_RELATION_COPY: Record<string, CuratedRelationCopy> = {
  'hotel-seo-marrakech': {
    fr: {
      anchor: 'SEO Hôtelier à Marrakech',
      contextLabel: 'Marrakech · Hôtels & Palaces',
      summary: 'Positionnement organique Google et Google Maps pour capter les réservations directes à Guéliz, Hivernage et Palmeraie.'
    },
    en: {
      anchor: 'Hotel SEO in Marrakech',
      contextLabel: 'Marrakech · Hotels & Resorts',
      summary: 'Organic search and Google Maps positioning to capture direct room bookings across Gueliz, Hivernage, and Palmeraie.'
    }
  },
  'hotel-website-design-marrakech': {
    fr: {
      anchor: 'Création Site Web Hôtel à Marrakech',
      contextLabel: 'Marrakech · Ingénierie Web',
      summary: 'Portails hôteliers rapides (< 1,5s) connectés à votre moteur PMS pour convertir le trafic mobile sans commission.'
    },
    en: {
      anchor: 'Hotel Website Design in Marrakech',
      contextLabel: 'Marrakech · Web Engineering',
      summary: 'Sub-second hotel websites natively integrated with your PMS booking engine to convert mobile travelers directly.'
    }
  },
  'riad-seo-marrakech': {
    fr: {
      anchor: 'Référencement SEO Riad à Marrakech',
      contextLabel: 'Marrakech Médina · Riads',
      summary: 'Visibilité multilingue sur Google et le Pack Local Médina pour attirer la clientèle internationale à haute contribution.'
    },
    en: {
      anchor: 'Riad SEO in Marrakech',
      contextLabel: 'Marrakech Medina · Boutique Riads',
      summary: 'Multilingual search visibility and Medina Local Pack rankings targeting high-spending international travelers.'
    }
  },
  'riad-website-design-marrakech': {
    fr: {
      anchor: 'Création Site Web Riad à Marrakech',
      contextLabel: 'Marrakech Médina · Réservation Directe',
      summary: 'Sites immersifs sur-mesure reflétant l’authenticité de votre riad avec réservation directe Cloudbeds, Amenitiz ou Sirvoy.'
    },
    en: {
      anchor: 'Riad Website Design in Marrakech',
      contextLabel: 'Marrakech Medina · Direct Booking',
      summary: 'Bespoke boutique riad websites combining editorial storytelling with frictionless Cloudbeds, Amenitiz, or Sirvoy booking.'
    }
  },
  'direct-booking-marrakech': {
    fr: {
      anchor: 'Stratégie Réservation Directe à Marrakech',
      contextLabel: 'Marrakech · Désintermédiation OTA',
      summary: 'Réduction des commissions Booking.com et Expedia grâce à un tunnel de conversion direct et un suivi ROI complet.'
    },
    en: {
      anchor: 'Direct Booking Strategy in Marrakech',
      contextLabel: 'Marrakech · Zero-Commission Funnel',
      summary: 'Full-funnel OTA disintermediation pairing PMS synchronization, rate-parity incentives, and verified ROI tracking.'
    }
  },
  'hotel-seo-agadir': {
    fr: {
      anchor: 'SEO Hôtelier à Agadir & Taghazout',
      contextLabel: 'Agadir · Resorts & Surf Camps',
      summary: 'Acquisition organique internationale pour complexes balnéaires, écolodges et surf camps de la côte atlantique.'
    },
    en: {
      anchor: 'Hotel SEO in Agadir & Taghazout',
      contextLabel: 'Agadir · Coastal Resorts',
      summary: 'International organic search visibility for beachfront resorts, surf camps, and wellness retreats on the Atlantic coast.'
    }
  },
  'hotel-website-design-agadir': {
    fr: {
      anchor: 'Création Site Web Hôtel à Agadir',
      contextLabel: 'Agadir · Hôtellerie Balnéaire',
      summary: 'Conception de sites hôteliers multilingues rapides optimisés pour les séjours balnéaires et forfaits surf/bien-être.'
    },
    en: {
      anchor: 'Hotel Website Design in Agadir',
      contextLabel: 'Agadir · Beachfront Hospitality',
      summary: 'Fast, multilingual resort websites engineered to showcase coastal stays, surf packages, and direct room availability.'
    }
  },
  'direct-booking-agadir': {
    fr: {
      anchor: 'Réservation Directe Hôtel à Agadir',
      contextLabel: 'Agadir · Intégration PMS',
      summary: 'Développement des ventes directes sans intermédiaire pour les hôtels et résidences touristiques d’Agadir Bay.'
    },
    en: {
      anchor: 'Direct Booking Strategy in Agadir',
      contextLabel: 'Agadir · PMS Integration',
      summary: 'Commission-free direct booking architecture tailored for Agadir Bay resorts and Taghazout boutique properties.'
    }
  },
  'hotel-seo-casablanca': {
    fr: {
      anchor: 'SEO Hôtelier d’Affaires à Casablanca',
      contextLabel: 'Casablanca · Hôtellerie Corporate',
      summary: 'Référencement ciblé sur les séjours corporate, séminaires MICE et voyageurs d’affaires dans la capitale économique.'
    },
    en: {
      anchor: 'Business Hotel SEO in Casablanca',
      contextLabel: 'Casablanca · Corporate Stays',
      summary: 'Targeted organic rankings for executive stays, MICE conferences, and corporate hospitality across Casablanca.'
    }
  },
  'web-design-casablanca': {
    fr: {
      anchor: 'Création Site Web Entreprise à Casablanca',
      contextLabel: 'Casablanca · PME & B2B',
      summary: 'Développement de plateformes web B2B haute vitesse orientées génération de prospects et crédibilité institutionnelle.'
    },
    en: {
      anchor: 'Corporate Web Design in Casablanca',
      contextLabel: 'Casablanca · B2B & SMEs',
      summary: 'High-speed B2B and corporate websites engineered for executive credibility and qualified lead generation.'
    }
  },
  'local-seo-casablanca': {
    fr: {
      anchor: 'Référencement Local & Google Maps à Casablanca',
      contextLabel: 'Casablanca · Pack Local Top 3',
      summary: 'Optimisation Google Business Profile et citations locales pour capter les recherches géolocalisées à Casablanca.'
    },
    en: {
      anchor: 'Local SEO & Google Maps in Casablanca',
      contextLabel: 'Casablanca · Local 3-Pack',
      summary: 'Google Business Profile optimization and local authority building to rank in Casablanca’s Google Maps 3-Pack.'
    }
  },
  'google-ads-casablanca': {
    fr: {
      anchor: 'Gestion Google Ads & SEA à Casablanca',
      contextLabel: 'Casablanca · Acquisition B2B',
      summary: 'Campagnes Search et Performance Max à fort ROI pour générer appels entrants, devis B2B et ventes à Casablanca.'
    },
    en: {
      anchor: 'Google Ads Management in Casablanca',
      contextLabel: 'Casablanca · Paid Search',
      summary: 'ROI-driven Google Search and Performance Max campaigns generating qualified B2B leads and inquiries in Casablanca.'
    }
  },
  'google-ads-marrakech': {
    fr: {
      anchor: 'Campagnes Google Ads à Marrakech',
      contextLabel: 'Marrakech · Search & Hotel Ads',
      summary: 'Pilotage SEA multilingue (Search, Hotel Ads, Performance Max) pour capter les voyageurs prêts à réserver en direct.'
    },
    en: {
      anchor: 'Google Ads Campaigns in Marrakech',
      contextLabel: 'Marrakech · Search & Hotel Ads',
      summary: 'Multilingual Google Search and Hotel Ads management capturing high-intent travelers ready to book direct.'
    }
  },
  'tripadvisor-ads-marrakech': {
    fr: {
      anchor: 'Publicité TripAdvisor Ads à Marrakech',
      contextLabel: 'Marrakech · Placements Sponsorisés',
      summary: 'Gestion des placements sponsorisés TripAdvisor pour placer votre hôtel ou riad en tête des recherches destination.'
    },
    en: {
      anchor: 'TripAdvisor Ads in Marrakech',
      contextLabel: 'Marrakech · Sponsored Placements',
      summary: 'Sponsored placement management on TripAdvisor positioning your Marrakech property in front of active trip planners.'
    }
  },
  'hotel-seo-rabat': {
    fr: {
      anchor: 'SEO Hôtelier & Institutionnel à Rabat',
      contextLabel: 'Rabat · Hôtels d’Affaires',
      summary: 'Positionnement Google durable pour les hôtels diplomatiques, résidences exécutives et séjours d’affaires à Rabat.'
    },
    en: {
      anchor: 'Hotel SEO in Rabat',
      contextLabel: 'Rabat · Diplomatic & Business Hotels',
      summary: 'Long-term organic search authority for diplomatic hotels, executive residences, and corporate stays in Rabat.'
    }
  },
  'web-design-rabat': {
    fr: {
      anchor: 'Création Site Web Sur-Mesure à Rabat',
      contextLabel: 'Rabat · Entreprises & Institutions',
      summary: 'Conception de sites vitrines et portails corporate conformes aux standards de vitesse, d’accessibilité et de SEO.'
    },
    en: {
      anchor: 'Custom Web Design in Rabat',
      contextLabel: 'Rabat · Corporate & Institutions',
      summary: 'Tailored corporate and institutional web platforms built for Core Web Vitals speed, security, and search authority.'
    }
  },
  'meta-ads-marrakech': {
    fr: {
      anchor: 'Publicité Meta Ads à Marrakech',
      contextLabel: 'Marrakech · Instagram & Facebook',
      summary: 'Campagnes visuelles et retargeting Instagram/Facebook pour transformer l’inspiration voyage en réservations directes.'
    },
    en: {
      anchor: 'Meta Ads in Marrakech',
      contextLabel: 'Marrakech · Instagram & Facebook',
      summary: 'Visual paid social and retargeting funnels across Instagram and Facebook turning travel inspiration into direct stays.'
    }
  },
  'hotel-seo-hotels-resorts': {
    fr: {
      anchor: 'SEO Hôtelier : Hôtels & Resorts au Maroc',
      contextLabel: 'Secteur · Hôtels & Complexes',
      summary: 'Architecture SEO dédiée aux hôtels indépendants et resorts souhaitant reprendre leurs parts de marché aux OTA.'
    },
    en: {
      anchor: 'Hotel SEO for Hotels & Resorts',
      contextLabel: 'Sector · Luxury Hotels & Resorts',
      summary: 'Dedicated organic search architecture helping independent hotels and resorts reclaim brand and destination demand.'
    }
  },
  'direct-booking-riads-boutique-hotels': {
    fr: {
      anchor: 'Réservation Directe : Riads & Maisons d’Hôtes',
      contextLabel: 'Secteur · Riads & Boutique Hôtels',
      summary: 'Écosystème complet site rapide, PMS et acquisition ciblée pour remplir vos chambres sans commission intermédiaire.'
    },
    en: {
      anchor: 'Direct Booking for Riads & Boutique Stays',
      contextLabel: 'Sector · Riads & Guesthouses',
      summary: 'Complete direct booking system uniting fast web design, PMS sync, and search visibility for boutique riads.'
    }
  }
};

export function toMatrixLinkItem(rel: MatrixRelation, lang: 'fr' | 'en'): MatrixLinkItem {
  const slugPair = rel.slugs[lang];
  const path = lang === 'fr'
    ? `/expertise/${slugPair.service}/${slugPair.target}`
    : `/en/expertise/${slugPair.service}/${slugPair.target}`;
  const copy = CURATED_RELATION_COPY[rel.id]?.[lang];

  return {
    id: rel.id,
    path,
    anchor: copy?.anchor || `${slugPair.service} — ${slugPair.target}`,
    contextLabel: copy?.contextLabel || slugPair.target,
    summary: copy?.summary || '',
    serviceId: rel.serviceId,
    locationId: rel.locationId,
    industryId: rel.industryId
  };
}

export function getAllLiveMatrixLinks(lang: 'fr' | 'en'): MatrixLinkItem[] {
  return getLiveMatrixRelations().map(rel => toMatrixLinkItem(rel, lang));
}

function pickLiveMatrixLinksByIds(ids: string[], lang: 'fr' | 'en'): MatrixLinkItem[] {
  const liveById = new Map(getLiveMatrixRelations().map(r => [r.id, r]));
  const result: MatrixLinkItem[] = [];
  for (const id of ids) {
    const rel = liveById.get(id);
    if (rel) {
      result.push(toMatrixLinkItem(rel, lang));
    }
  }
  return result;
}

export function getMatrixLinksForLocation(locationKey: string, lang: 'fr' | 'en'): MatrixLinkItem[] {
  switch (locationKey) {
    case 'marrakech':
      return pickLiveMatrixLinksByIds([
        'hotel-seo-marrakech',
        'hotel-website-design-marrakech',
        'riad-seo-marrakech',
        'riad-website-design-marrakech',
        'direct-booking-marrakech',
        'google-ads-marrakech',
        'tripadvisor-ads-marrakech',
        'meta-ads-marrakech',
        'direct-booking-riads-boutique-hotels',
        'hotel-seo-hotels-resorts'
      ], lang);
    case 'casablanca':
      return pickLiveMatrixLinksByIds([
        'web-design-casablanca',
        'local-seo-casablanca',
        'google-ads-casablanca',
        'hotel-seo-casablanca',
        'web-design-rabat',
        'hotel-seo-hotels-resorts'
      ], lang);
    case 'agadir':
      return pickLiveMatrixLinksByIds([
        'hotel-seo-agadir',
        'hotel-website-design-agadir',
        'direct-booking-agadir',
        'hotel-seo-hotels-resorts',
        'direct-booking-riads-boutique-hotels',
        'google-ads-marrakech'
      ], lang);
    case 'rabat':
      return pickLiveMatrixLinksByIds([
        'hotel-seo-rabat',
        'web-design-rabat',
        'web-design-casablanca',
        'local-seo-casablanca',
        'google-ads-casablanca',
        'hotel-seo-hotels-resorts'
      ], lang);
    default:
      return getAllLiveMatrixLinks(lang);
  }
}

export function getMatrixLinksForIndustry(industryKey: string, lang: 'fr' | 'en'): MatrixLinkItem[] {
  switch (industryKey) {
    case 'hotels-resorts':
      return pickLiveMatrixLinksByIds([
        'hotel-seo-hotels-resorts',
        'hotel-seo-marrakech',
        'hotel-website-design-marrakech',
        'hotel-seo-agadir',
        'hotel-website-design-agadir',
        'direct-booking-agadir',
        'hotel-seo-casablanca',
        'hotel-seo-rabat',
        'google-ads-marrakech',
        'tripadvisor-ads-marrakech'
      ], lang);
    case 'riads-boutique-hotels':
      return pickLiveMatrixLinksByIds([
        'direct-booking-riads-boutique-hotels',
        'riad-seo-marrakech',
        'riad-website-design-marrakech',
        'direct-booking-marrakech',
        'meta-ads-marrakech',
        'tripadvisor-ads-marrakech',
        'google-ads-marrakech',
        'hotel-website-design-agadir'
      ], lang);
    case 'corporate-smes':
      return pickLiveMatrixLinksByIds([
        'web-design-casablanca',
        'local-seo-casablanca',
        'google-ads-casablanca',
        'web-design-rabat',
        'hotel-seo-casablanca',
        'hotel-seo-rabat'
      ], lang);
    case 'tour-operators':
      return pickLiveMatrixLinksByIds([
        'google-ads-marrakech',
        'tripadvisor-ads-marrakech',
        'meta-ads-marrakech',
        'direct-booking-marrakech',
        'direct-booking-agadir',
        'hotel-website-design-agadir'
      ], lang);
    case 'restaurants-catering':
      return pickLiveMatrixLinksByIds([
        'local-seo-casablanca',
        'meta-ads-marrakech',
        'tripadvisor-ads-marrakech',
        'web-design-casablanca',
        'google-ads-casablanca',
        'web-design-rabat'
      ], lang);
    default:
      return pickLiveMatrixLinksByIds([
        'hotel-seo-hotels-resorts',
        'direct-booking-riads-boutique-hotels',
        'web-design-casablanca',
        'hotel-seo-marrakech',
        'hotel-seo-agadir',
        'web-design-rabat'
      ], lang);
  }
}

function getServiceCluster(serviceKey: string): 'web' | 'seo' | 'ads_booking' {
  const k = serviceKey.toLowerCase();
  if (k.includes('web') || k.includes('site')) return 'web';
  if (k.includes('seo') || k.includes('referencement') || k.includes('business-profile')) return 'seo';
  return 'ads_booking';
}

export function getMatrixLinksForService(serviceKey: string, lang: 'fr' | 'en'): MatrixLinkItem[] {
  const cluster = getServiceCluster(serviceKey);
  let baseIds: string[];

  if (cluster === 'web') {
    baseIds = [
      'web-design-casablanca',
      'web-design-rabat',
      'hotel-website-design-marrakech',
      'riad-website-design-marrakech',
      'hotel-website-design-agadir',
      'direct-booking-riads-boutique-hotels',
      'direct-booking-marrakech',
      'direct-booking-agadir'
    ];
  } else if (cluster === 'seo') {
    baseIds = [
      'hotel-seo-marrakech',
      'riad-seo-marrakech',
      'hotel-seo-casablanca',
      'local-seo-casablanca',
      'hotel-seo-agadir',
      'hotel-seo-rabat',
      'hotel-seo-hotels-resorts',
      'direct-booking-riads-boutique-hotels'
    ];
  } else {
    baseIds = [
      'google-ads-casablanca',
      'google-ads-marrakech',
      'meta-ads-marrakech',
      'tripadvisor-ads-marrakech',
      'direct-booking-marrakech',
      'direct-booking-agadir',
      'direct-booking-riads-boutique-hotels',
      'hotel-seo-hotels-resorts'
    ];
  }

  // Float exact serviceId matches to the top while preserving cluster breadth
  const liveById = new Map(getLiveMatrixRelations().map(r => [r.id, r]));
  const sortedIds = [...baseIds].sort((a, b) => {
    const aExact = liveById.get(a)?.serviceId === serviceKey ? 1 : 0;
    const bExact = liveById.get(b)?.serviceId === serviceKey ? 1 : 0;
    return bExact - aExact;
  });

  return pickLiveMatrixLinksByIds(sortedIds, lang);
}

export function getRelatedMatrixLinks(
  params: {
    currentId?: string;
    currentPath?: string;
    serviceId?: string;
    locationId?: string;
    industryId?: string;
  },
  lang: 'fr' | 'en',
  limit = 6
): MatrixLinkItem[] {
  const currentCluster = params.serviceId ? getServiceCluster(params.serviceId) : undefined;
  const candidates = getLiveMatrixRelations()
    .map((rel, index) => {
      const item = toMatrixLinkItem(rel, lang);
      if (params.currentId && rel.id === params.currentId) return null;
      if (params.currentPath && item.path === params.currentPath) return null;

      let score = 0;
      if (params.serviceId && rel.serviceId === params.serviceId) score += 6;
      if (params.locationId && rel.locationId === params.locationId) score += 4;
      if (params.industryId && rel.industryId === params.industryId) score += 4;
      if (currentCluster && getServiceCluster(rel.serviceId) === currentCluster) score += 3;

      return { item, score, index };
    })
    .filter((entry): entry is { item: MatrixLinkItem; score: number; index: number } => entry !== null);

  candidates.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.index - b.index;
  });

  return candidates.slice(0, limit).map(c => c.item);
}

