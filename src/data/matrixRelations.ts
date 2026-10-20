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
    serviceId: 'hotel-digital-marketing',
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
    serviceId: 'hotel-digital-marketing',
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
