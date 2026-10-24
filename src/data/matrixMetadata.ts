import { locationsData } from './locationsData';
import { industriesData } from './industriesData';
import { servicesData } from './servicesData';

export const LOCATION_LABELS: Record<string, { fr: string; en: string }> = {
  morocco: { fr: 'Maroc', en: 'Morocco' },
  marrakech: { fr: 'Marrakech', en: 'Marrakech' },
  casablanca: { fr: 'Casablanca', en: 'Casablanca' },
  rabat: { fr: 'Rabat', en: 'Rabat' },
  agadir: { fr: 'Agadir', en: 'Agadir' },
};

export const INDUSTRY_LABELS: Record<
  string,
  { fr: string; en: string; compactFr: string; compactEn: string; descFr: string; descEn: string }
> = {
  'hotels-resorts': {
    fr: 'Hôtels & Resorts',
    en: 'Hotels & Resorts',
    compactFr: 'Hôtels & Resorts',
    compactEn: 'Hotels & Resorts',
    descFr: 'hôtels et resorts',
    descEn: 'hotels and resorts',
  },
  'riads-boutique-hotels': {
    fr: "Riads & Maisons d'Hôtes",
    en: 'Riads & Boutique Hotels',
    compactFr: 'Riads de Charme',
    compactEn: 'Boutique Riads',
    descFr: "riads et maisons d'hôtes",
    descEn: 'riads and boutique hotels',
  },
  'tour-operators': {
    fr: 'Tour-Opérateurs',
    en: 'Tour Operators',
    compactFr: 'Tour-Opérateurs',
    compactEn: 'Tour Operators',
    descFr: "tour-opérateurs et agences d'excursions",
    descEn: 'tour operators and excursion brands',
  },
  'restaurants-catering': {
    fr: 'Restaurants & Traiteurs',
    en: 'Restaurants & Catering',
    compactFr: 'Restaurants',
    compactEn: 'Restaurants',
    descFr: 'restaurants et traiteurs',
    descEn: 'restaurants and catering brands',
  },
  'corporate-smes': {
    fr: 'PME & Entreprises',
    en: 'Corporate & SMEs',
    compactFr: 'PME & Entreprises',
    compactEn: 'Corporate SMEs',
    descFr: 'PME et entreprises B2B',
    descEn: 'corporate B2B companies and SMEs',
  },
  ecommerce: {
    fr: 'E-commerce',
    en: 'E-commerce',
    compactFr: 'E-commerce',
    compactEn: 'E-commerce',
    descFr: 'boutiques e-commerce',
    descEn: 'e-commerce stores',
  },
};

export const SERVICE_MATRIX_LABELS: Record<
  string,
  { fr: string; en: string; compactFr: string; compactEn: string; descFr: string; descEn: string }
> = {
  'hotel-seo': {
    fr: 'SEO Hôtelier',
    en: 'Hotel SEO',
    compactFr: 'SEO Hôtelier',
    compactEn: 'Hotel SEO',
    descFr: 'SEO hôtelier et Google Maps',
    descEn: 'hotel SEO and local Maps visibility',
  },
  'hotel-website-design': {
    fr: 'Création Site Web Hôtel',
    en: 'Hotel Website Design',
    compactFr: 'Site Web Hôtel',
    compactEn: 'Hotel Web Design',
    descFr: 'création de site web hôtelier',
    descEn: 'direct-booking hotel website design',
  },
  'riad-seo-marrakech': {
    fr: 'SEO pour Riads',
    en: 'Riad SEO',
    compactFr: 'SEO Riads',
    compactEn: 'Riad SEO',
    descFr: 'référencement naturel pour riads',
    descEn: 'organic SEO for luxury riads',
  },
  'riad-website-design-marrakech': {
    fr: 'Création Site Web Riad',
    en: 'Riad Website Design',
    compactFr: 'Site Web Riad',
    compactEn: 'Riad Web Design',
    descFr: 'création de site web pour riad',
    descEn: 'bespoke riad website design',
  },
  'direct-booking': {
    fr: 'Réservation Directe Hôtel',
    en: 'Direct Booking Strategy',
    compactFr: 'Réservation Directe',
    compactEn: 'Direct Booking',
    descFr: 'stratégie de réservation directe',
    descEn: 'commission-free direct booking strategy',
  },
  'web-design-casablanca': {
    fr: 'Création Site Web',
    en: 'Web Design',
    compactFr: 'Création Site Web',
    compactEn: 'Web Design',
    descFr: 'conception de site internet rapide',
    descEn: 'high-speed custom web design',
  },
  'web-design-morocco': {
    fr: 'Création Site Web',
    en: 'Web Design',
    compactFr: 'Création Site Web',
    compactEn: 'Web Design',
    descFr: 'création de site internet sur mesure',
    descEn: 'custom performance web development',
  },
  'creation-site-web-prix': {
    fr: 'Création Site Web',
    en: 'Website Design',
    compactFr: 'Création Site Web',
    compactEn: 'Website Design',
    descFr: 'création de site web professionnel',
    descEn: 'professional website creation',
  },
  'local-seo-casablanca': {
    fr: 'Référencement Local',
    en: 'Local SEO',
    compactFr: 'SEO Local',
    compactEn: 'Local SEO',
    descFr: 'référencement local et Google Maps',
    descEn: 'local SEO and Google Maps ranking',
  },
  'local-seo-morocco': {
    fr: 'Référencement Local',
    en: 'Local SEO',
    compactFr: 'SEO Local',
    compactEn: 'Local SEO',
    descFr: 'référencement local Google Maps',
    descEn: 'local search and Maps optimization',
  },
  'google-ads-morocco': {
    fr: 'Gestion Google Ads',
    en: 'Google Ads Management',
    compactFr: 'Google Ads',
    compactEn: 'Google Ads',
    descFr: 'campagnes Google Ads haute intention',
    descEn: 'high-ROI Google Search Ads campaigns',
  },
  'meta-ads': {
    fr: 'Publicité Meta Ads',
    en: 'Meta Ads Management',
    compactFr: 'Meta Ads',
    compactEn: 'Meta Ads',
    descFr: 'publicité Meta Ads (Instagram & Facebook)',
    descEn: 'Instagram and Facebook Meta Ads',
  },
  'tripadvisor-ads': {
    fr: 'Publicité TripAdvisor Ads',
    en: 'TripAdvisor Ads',
    compactFr: 'TripAdvisor Ads',
    compactEn: 'TripAdvisor Ads',
    descFr: 'campagnes sponsorisées TripAdvisor Ads',
    descEn: 'TripAdvisor Sponsored Placements',
  },
  'hotel-digital-marketing': {
    fr: 'Marketing Digital Hôtelier',
    en: 'Hospitality Digital Marketing',
    compactFr: 'Marketing Hôtelier',
    compactEn: 'Hotel Marketing',
    descFr: 'marketing digital hôtelier',
    descEn: 'hospitality digital marketing',
  },
  'bundle-site-ads': {
    fr: 'Pack Site Web & Ads',
    en: 'Website & Ads Bundle',
    compactFr: 'Pack Site & Ads',
    compactEn: 'Site & Ads Bundle',
    descFr: 'pack site web et publicité digitale',
    descEn: 'website and paid ads growth bundle',
  },
  'seo-morocco': {
    fr: 'Référencement SEO',
    en: 'SEO Services',
    compactFr: 'SEO Naturel',
    compactEn: 'SEO Services',
    descFr: 'référencement naturel SEO',
    descEn: 'organic search engine optimization',
  },
  'seo-agency-morocco': {
    fr: 'Agence SEO',
    en: 'SEO Agency',
    compactFr: 'Agence SEO',
    compactEn: 'SEO Agency',
    descFr: 'accompagnement agence SEO',
    descEn: 'full-service SEO agency strategy',
  },
  'seo-agency-casablanca': {
    fr: 'Agence SEO',
    en: 'SEO Agency',
    compactFr: 'Agence SEO',
    compactEn: 'SEO Agency',
    descFr: 'référencement naturel B2B et local',
    descEn: 'B2B and local SEO strategy',
  },
  'ai-seo-optimization': {
    fr: 'Optimisation SEO IA',
    en: 'AI SEO Optimization',
    compactFr: 'SEO IA',
    compactEn: 'AI SEO',
    descFr: 'optimisation SEO pour moteurs IA',
    descEn: 'AI search and semantic SEO',
  },
  'wordpress-seo': {
    fr: 'SEO WordPress',
    en: 'WordPress SEO',
    compactFr: 'SEO WordPress',
    compactEn: 'WordPress SEO',
    descFr: 'optimisation technique SEO WordPress',
    descEn: 'technical WordPress SEO optimization',
  },
  'ecommerce-seo': {
    fr: 'SEO E-commerce',
    en: 'E-commerce SEO',
    compactFr: 'SEO E-commerce',
    compactEn: 'Ecommerce SEO',
    descFr: 'référencement naturel e-commerce',
    descEn: 'e-commerce organic SEO',
  },
  'google-business-profile-optimization': {
    fr: 'Google Business Profile',
    en: 'Google Business Profile',
    compactFr: 'Fiche Google Maps',
    compactEn: 'Google Maps SEO',
    descFr: 'optimisation de fiche Google Business Profile',
    descEn: 'Google Business Profile optimization',
  },
};

function formatHumanSlug(slug: string): string {
  return slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export interface MatrixResolvedMetadata {
  locationName: string;
  industryName: string;
  cleanServiceName: string;
  pageHeading: string;
  metaPageTitle: string;
  metaDescription: string;
  leadIntroText: string;
}

const BESPOKE_MATRIX_DESCRIPTIONS: Record<string, { fr: string; en: string }> = {
  'hotel-seo:marrakech': {
    fr: 'Positionnez votre hôtel à Marrakech devant les OTA sur Google Search et Maps. Stratégie SEO multilingue, audit technique offert et zéro commission.',
    en: 'Rank your Marrakech hotel above OTAs on Google Search and Maps. Multilingual hospitality SEO, faster mobile pages, and commission-free bookings.',
  },
  'hotel-website-design:marrakech': {
    fr: 'Conception de sites web hôteliers ultra-rapides à Marrakech avec moteur PMS connecté (Cloudbeds, Mews) pour maximiser vos réservations en direct.',
    en: 'Bespoke hotel website design in Marrakech with sub-second mobile load times and native PMS booking integration to grow commission-free revenue.',
  },
  'riad-seo-marrakech:marrakech': {
    fr: 'Référencement naturel et Google Maps pour les riads de la Médina de Marrakech : captez les voyageurs internationaux sans payer 20 % aux plateformes.',
    en: 'Specialized Google Maps and organic SEO for Medina riads in Marrakech. Attract high-spending European and US guests directly to your own site.',
  },
  'riad-website-design-marrakech:marrakech': {
    fr: "Création de sites internet d'exception pour riads à Marrakech : galeries immersives, réservation directe sans commission et chargement instantané.",
    en: 'Custom luxury riad website design in Marrakech featuring editorial room galleries, seamless PMS sync, and fast mobile checkout. Free site audit.',
  },
  'direct-booking:marrakech': {
    fr: 'Réduisez vos commissions Booking et Airbnb à Marrakech grâce à un tunnel de réservation directe complet : site rapide, SEO local et Google Ads.',
    en: 'Cut 15–25% OTA commission fees in Marrakech with an integrated direct booking funnel combining PMS checkout, local SEO, and brand search defense.',
  },
  'hotel-seo:agadir': {
    fr: 'SEO hôtelier à Agadir et Taghazout : captez les recherches internationales de séjours balnéaires et surf camps sur Google avant les comparateurs.',
    en: 'Hotel and resort SEO in Agadir and Taghazout: capture European sun-and-surf travel searches on Google and grow direct seasonal room occupancy.',
  },
  'hotel-website-design:agadir': {
    fr: 'Sites web sur mesure pour hôtels, resorts et surf camps à Agadir : architecture mobile multilingue connectée à votre planning de réservation PMS.',
    en: 'High-converting resort and surf hotel website design in Agadir with multilingual UX, fast mobile galleries, and real-time PMS availability sync.',
  },
  'direct-booking:agadir': {
    fr: 'Développez les réservations directes de votre hôtel ou club à Agadir : reprenez la marge cédée aux tour-opérateurs grâce à un canal direct dédié.',
    en: 'Grow direct guest reservations for Agadir coastal resorts and boutique stays. Replace costly OTA allotments with a high-margin direct funnel.',
  },
  'hotel-seo:casablanca': {
    fr: "Référencement SEO pour hôtels d'affaires à Casablanca : dominez les requêtes corporate, séminaires et courts séjours sur Google Search et Maps.",
    en: 'Business hotel SEO in Casablanca: rank first for corporate travel, MICE seminar, and executive stay searches across Anfa, Maarif, and Casa Port.',
  },
  'web-design-casablanca:casablanca': {
    fr: 'Création de sites web professionnels à Casablanca dès 12 000 MAD : performance Core Web Vitals, design B2B sur mesure et génération de prospects.',
    en: 'Custom high-speed web design in Casablanca for B2B companies, SMEs, and hospitality brands. Engineered for Core Web Vitals and lead conversion.',
  },
  'local-seo-casablanca:casablanca': {
    fr: 'Dominez le Pack Local Google Maps à Casablanca (Anfa, Maarif, Sidi Maarouf) et générez des appels et demandes de devis qualifiés chaque semaine.',
    en: 'Dominate the Google Maps Local Pack in Casablanca across Anfa, Maarif, and Sidi Maarouf to drive continuous B2B inquiries and local phone calls.',
  },
  'google-ads-morocco:casablanca': {
    fr: "Gestion Google Ads à Casablanca orientée ROI : campagnes Search B2B et hôtelières à haute intention d'achat, suivi précis des conversions inclus.",
    en: 'ROI-focused Google Search Ads management in Casablanca: capture high-intent B2B decision-makers and corporate hotel guests with full CPA tracking.',
  },
  'google-ads-morocco:marrakech': {
    fr: 'Campagnes Google Ads et Hotel Ads à Marrakech : interceptez les voyageurs prêts à réserver un riad ou hôtel de charme directement sur votre site.',
    en: 'Targeted Google Search and Hotel Ads management in Marrakech: capture ready-to-book international travelers and send traffic straight to your PMS.',
  },
  'tripadvisor-ads:marrakech': {
    fr: 'Expertise TripAdvisor Ads à Marrakech : placez votre riad ou hôtel en tête des classements sponsorisés et dirigez les voyageurs vers votre site.',
    en: 'TripAdvisor Ads expertise in Marrakech: secure top Sponsored Placements visibility and route high-intent travelers straight to your booking engine.',
  },
  'hotel-seo:rabat': {
    fr: "SEO pour hôtels et résidences à Rabat : captez la clientèle diplomatique, institutionnelle et d'affaires sur Google en français et en anglais.",
    en: 'SEO for business and boutique hotels in Rabat: capture diplomatic, institutional, and executive stay searches on Google in French and English.',
  },
  'web-design-morocco:rabat': {
    fr: 'Conception de sites internet rapides et sécurisés à Rabat pour PME, institutions et acteurs du tourisme. Livraison clé en main sous 4 à 6 semaines.',
    en: 'Fast, secure custom web development in Rabat for corporate SMEs, institutions, and hospitality operators. Delivered turnkey in 4 to 6 weeks.',
  },
  'meta-ads:marrakech': {
    fr: 'Expertise Meta Ads à Marrakech (Instagram & Facebook) pour hôtels et riads : vidéos immersives, retargeting et réservations directes mesurables.',
    en: 'Meta Ads expertise in Marrakech: Instagram and Facebook video funnels and dynamic retargeting for riads and hotels to grow direct bookings.',
  },
  'hotel-seo:hotels-resorts': {
    fr: 'Stratégie SEO dédiée aux hôtels et resorts au Maroc : surpassez les OTA sur vos requêtes de marque et de destination pour accroître votre marge.',
    en: 'National SEO architecture for Moroccan hotels and resorts: outrank OTAs on destination and brand keywords to grow commission-free room bookings.',
  },
  'direct-booking:riads-boutique-hotels': {
    fr: "Système de réservation directe pour riads et maisons d'hôtes au Maroc : éliminez 15 à 25 % de commissions OTA avec un parcours client optimisé.",
    en: 'Direct booking growth system for Moroccan riads and boutique stays: reclaim 15–25% OTA commission margins with fast mobile UX and PMS checkout.',
  },
};

function buildThreeTupleDescription(params: {
  lang: 'fr' | 'en';
  serviceId: string;
  locationName: string;
  indDesc: string;
  srvDesc: string;
}): string {
  const { lang, serviceId, locationName, indDesc, srvDesc } = params;
  const isFrench = lang === 'fr';

  switch (serviceId) {
    case 'hotel-seo':
      return isFrench
        ? `Propulsez vos ${indDesc} à ${locationName} en tête de Google Search et Maps : captez une clientèle qualifiée en direct, sans commission OTA.`
        : `Rank your ${indDesc} in ${locationName} at the top of Google Search and Maps to attract high-intent guests directly without OTA commissions.`;
    case 'hotel-website-design':
      return isFrench
        ? `Création de sites web rapides pour ${indDesc} à ${locationName} : parcours mobile haute conversion, réservation directe et SEO technique intégré.`
        : `Custom fast websites for ${indDesc} in ${locationName}: mobile-first UX, seamless direct booking integration, and built-in technical SEO.`;
    case 'google-ads-morocco':
      return isFrench
        ? `Campagnes Google Ads sur mesure pour ${indDesc} à ${locationName} : ciblez les recherches à forte intention d'achat et suivez votre ROI.`
        : `High-ROI Google Search Ads for ${indDesc} in ${locationName}: capture ready-to-book demand, lower acquisition costs, and track conversions.`;
    case 'direct-booking':
      return isFrench
        ? `Augmentez les ventes directes de vos ${indDesc} à ${locationName} : réduisez vos frais d'intermédiaires grâce à un tunnel d'acquisition dédié.`
        : `Scale commission-free direct sales for ${indDesc} in ${locationName} with a conversion-engineered booking funnel and local search strategy.`;
    default:
      return isFrench
        ? `Développez vos ${indDesc} à ${locationName} grâce à notre ${srvDesc} : plus de réservations directes et zéro commission. Audit gratuit.`
        : `Grow your ${indDesc} in ${locationName} with tailored ${srvDesc}: capture high-intent clients, boost direct bookings, and cut OTA fees.`;
  }
}

export function buildMatrixMetadata(params: {
  lang: 'fr' | 'en';
  serviceId: string;
  locationId?: string;
  industryId?: string;
  effectiveIndustryId?: string;
}): MatrixResolvedMetadata {
  const { lang, serviceId, locationId, industryId, effectiveIndustryId } = params;
  const isFrench = lang === 'fr';

  const srvEntry = SERVICE_MATRIX_LABELS[serviceId];
  const fallbackSrvTitle =
    servicesData[serviceId]?.[lang]?.title.split('|')[0].split(':')[0].trim() ||
    formatHumanSlug(serviceId);

  const cleanServiceName = srvEntry ? srvEntry[lang] : fallbackSrvTitle;
  const srvCompact = srvEntry
    ? isFrench
      ? srvEntry.compactFr
      : srvEntry.compactEn
    : cleanServiceName;
  const srvDesc = srvEntry
    ? isFrench
      ? srvEntry.descFr
      : srvEntry.descEn
    : cleanServiceName.toLowerCase();

  const locEntry = locationId ? LOCATION_LABELS[locationId] : undefined;
  const locationName = locEntry
    ? locEntry[lang]
    : locationId
      ? formatHumanSlug(locationId)
      : isFrench
        ? 'Maroc'
        : 'Morocco';

  const displayIndKey = industryId || effectiveIndustryId;
  const displayIndEntry = displayIndKey ? INDUSTRY_LABELS[displayIndKey] : undefined;
  const industryName = displayIndEntry
    ? displayIndEntry[lang]
    : displayIndKey
      ? industriesData[displayIndKey]?.[lang]?.title.split('|')[0].trim() || formatHumanSlug(displayIndKey)
      : '';

  const strictIndEntry = industryId ? INDUSTRY_LABELS[industryId] : undefined;
  const indCompact = strictIndEntry
    ? isFrench
      ? strictIndEntry.compactFr
      : strictIndEntry.compactEn
    : industryId
      ? formatHumanSlug(industryId)
      : '';
  const indDesc = strictIndEntry
    ? isFrench
      ? strictIndEntry.descFr
      : strictIndEntry.descEn
    : indCompact.toLowerCase();

  let pageHeading = '';
  let metaPageTitle = '';
  let metaDescription = '';

  if (locationId && industryId) {
    // 3-Tuple Matrix Page: Location × Industry × Service
    const fullIndLabel = strictIndEntry ? strictIndEntry[lang] : indCompact;
    pageHeading = isFrench
      ? `${cleanServiceName} pour ${fullIndLabel} à ${locationName}`
      : `${cleanServiceName} for ${fullIndLabel} in ${locationName}`;

    metaPageTitle = isFrench
      ? `${srvCompact} : ${indCompact} à ${locationName} | Urunk`
      : `${srvCompact} for ${indCompact} in ${locationName} | Urunk`;

    metaDescription = buildThreeTupleDescription({
      lang,
      serviceId,
      locationName,
      indDesc,
      srvDesc,
    });
  } else if (locationId) {
    // 2-Tuple Matrix Page: Service × Location
    const locPrepFr = locationId === 'morocco' ? `au ${locationName}` : `à ${locationName}`;
    pageHeading = isFrench
      ? `${cleanServiceName} ${locPrepFr}`
      : `${cleanServiceName} in ${locationName}`;

    metaPageTitle = isFrench
      ? `${cleanServiceName} ${locPrepFr} | Agence Urunk`
      : `${cleanServiceName} in ${locationName} | Urunk Agency`;

    const bespoke = BESPOKE_MATRIX_DESCRIPTIONS[`${serviceId}:${locationId}`];
    metaDescription = bespoke
      ? bespoke[lang]
      : isFrench
        ? `Boostez vos réservations directes et votre visibilité ${locPrepFr} grâce à notre service de ${srvDesc}. Tarifs clairs et audit offert.`
        : `Scale direct bookings and qualified inquiries in ${locationName} with our ${srvDesc}. Commission-free growth systems and free audit.`;
  } else {
    // 2-Tuple Matrix Page: Service × Industry (National Morocco scope)
    const fullIndLabel = strictIndEntry ? strictIndEntry[lang] : industryName;
    pageHeading = isFrench
      ? `${cleanServiceName} pour ${fullIndLabel} au Maroc`
      : `${cleanServiceName} for ${fullIndLabel} in Morocco`;

    const fullCandidateFr = `${srvCompact} : ${fullIndLabel} | Urunk`;
    const fullCandidateEn = `${srvCompact} for ${fullIndLabel} | Urunk`;

    metaPageTitle = isFrench
      ? fullCandidateFr.length <= 58
        ? fullCandidateFr
        : `${srvCompact} pour ${indCompact} au Maroc | Urunk`
      : fullCandidateEn.length <= 58
        ? fullCandidateEn
        : `${srvCompact} for ${indCompact} in Morocco | Urunk`;

    const bespoke = industryId ? BESPOKE_MATRIX_DESCRIPTIONS[`${serviceId}:${industryId}`] : undefined;
    metaDescription = bespoke
      ? bespoke[lang]
      : isFrench
        ? `Optimisez la rentabilité de vos ${indDesc} au Maroc avec notre ${srvDesc} : réservations directes sans commission et audit gratuit.`
        : `Maximize direct revenue for ${indDesc} across Morocco with our ${srvDesc}: outrank OTAs on Google and request your free audit.`;
  }

  const locMap = locationId ? locationsData[locationId] : undefined;
  const rawUniqueIntro = !industryId ? locMap?.uniqueIntroByService?.[serviceId]?.[lang] : undefined;
  const leadIntroText =
    rawUniqueIntro && rawUniqueIntro.trim().length > 0 ? rawUniqueIntro : metaDescription;

  return {
    locationName,
    industryName,
    cleanServiceName,
    pageHeading,
    metaPageTitle,
    metaDescription,
    leadIntroText,
  };
}
