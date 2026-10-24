import * as fs from 'fs';
import * as path from 'path';
import { servicesData } from './src/data/servicesData';
import { blogPostsEN } from './src/data/blogPostsEN';
import { blogPostsFR } from './src/data/blogPostsFR';
import { caseStudies } from './src/data/caseStudies';
import { industriesData } from './src/data/industriesData';
import { locationsData } from './src/data/locationsData';
import { getEquivalentRoute } from './src/data/slugMappings';
import { matrixRelations } from './src/data/matrixRelations';

interface PageMetadata {
  path: string;
  lang: 'en' | 'fr';
  title: string;
  description: string;
}

const BASE_URL = 'https://urunk.com';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

function parsePublishDate(dateStr?: string): string {
  if (!dateStr) return '2026-01-15';
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;
  
  const frMonths: Record<string, string> = {
    janvier: '01', fevrier: '02', février: '02', mars: '03', avril: '04',
    mai: '05', juin: '06', juillet: '07', aout: '08', août: '08',
    septembre: '09', octobre: '10', novembre: '11', decembre: '12', décembre: '12'
  };
  const enMonths: Record<string, string> = {
    january: '01', february: '02', march: '03', april: '04', may: '05', june: '06',
    july: '07', august: '08', september: '09', october: '10', november: '11', december: '12'
  };

  const cleanDateStr = dateStr.trim().toLowerCase().replace(/,/g, '');
  const parts = cleanDateStr.split(/\s+/);
  
  if (parts.length >= 3) {
    if (frMonths[parts[1]]) {
      const day = parts[0].padStart(2, '0');
      const month = frMonths[parts[1]];
      const year = parts[2];
      return `${year}-${month}-${day}`;
    }
    if (enMonths[parts[0]]) {
      const month = enMonths[parts[0]];
      const day = parts[1].replace(/st|nd|rd|th/g, '').padStart(2, '0');
      const year = parts[2];
      return `${year}-${month}-${day}`;
    }
    if (enMonths[parts[1]]) {
      const day = parts[0].padStart(2, '0');
      const month = enMonths[parts[1]];
      const year = parts[2];
      return `${year}-${month}-${day}`;
    }
  }

  const d = new Date(dateStr);
  if (!isNaN(d.getTime())) {
    return d.toISOString().split('T')[0];
  }
  return '2026-01-15';
}

// 1. Predefined Metadata for Core Static Pages
const staticPages: PageMetadata[] = [
  // ==================== FRENCH (PRIMARY / ROOT) ====================
  {
    path: '/',
    lang: 'fr',
    title: 'Agence Web & SEO Maroc pour Hôtels et Riads | Urunk',
    description: 'Agence web et SEO au Maroc pour hôtels, riads et PME : sites ultra-rapides, Google Ads et SEO local à Casablanca et Marrakech. Audit gratuit.'
  },
  {
    path: '/a-propos',
    lang: 'fr',
    title: 'À Propos d\'Urunk : Agence Marketing | Urunk',
    description: 'Découvrez les développeurs et experts SEO qui conçoivent des moteurs de réservation directe performants pour les riads haut de gamme.'
  },
  {
    path: '/tarifs',
    lang: 'fr',
    title: 'Nos Tarifs : Forfaits Marketing Riad Clairs | Urunk',
    description: 'Comparez nos forfaits fixes sans commission pour la création de site, le SEO et Google Ads. Optimisez votre budget d\'acquisition directe.'
  },
  {
    path: '/services',
    lang: 'fr',
    title: 'Nos Services : Croissance Hôtelière Maroc | Urunk',
    description: 'De la conception de sites web ultra-rapides au référencement Google Maps et netlinking. Explorez nos leviers de croissance hôtelière.'
  },
  {
    path: '/services/creation-site-web',
    lang: 'fr',
    title: 'Création Site Internet Hôtel : Haute Conversion | Urunk',
    description: 'Votre site actuel est trop lent ? Nous créons des sites WordPress sur mesure, performants sur mobile et connectés à votre PMS hôtelier.'
  },
  {
    path: '/creation-site-web',
    lang: 'fr',
    title: 'Création Site Web Maroc : Tarifs et Prix | Urunk',
    description: 'Création de sites web professionnels au Maroc dès 12 000 MAD : sites ultra-rapides, réservation directe pour hôtels et riads, tarifs transparents.'
  },
  {
    path: '/realisations',
    lang: 'fr',
    title: 'Réalisations & Études de Cas Hôtelières | Urunk',
    description: 'Besoin de preuves concrètes ? Découvrez les résultats de riads et traiteurs de luxe qui ont multiplié leurs réservations directes avec nous.'
  },
  {
    path: '/blog',
    lang: 'fr',
    title: 'Blog Marketing Riad : Conseils & Stratégies SEO | Urunk',
    description: 'Découvrez des guides complets et des conseils d\'experts sur le SEO hôtelier, l\'optimisation de site et les fiches Google Maps au Maroc.'
  },
  {
    path: '/faq',
    lang: 'fr',
    title: 'FAQ Urunk : Réponses Web & SEO Hôtelier | Urunk',
    description: 'Des questions sur le paiement en ligne CMI, nos délais de création ou le SEO ? Retrouvez nos réponses claires et détaillées.'
  },
  {
    path: '/contact',
    lang: 'fr',
    title: 'Contact Urunk : Audit SEO & Web Offert | Urunk',
    description: 'Prêt à diviser vos commissions d\'OTAs ? Contactez-nous dès aujourd\'hui pour obtenir votre audit de performance, vitesse et SEO local gratuit.'
  },
  {
    path: '/politique-de-confidentialite',
    lang: 'fr',
    title: 'Politique de Confidentialité | Urunk',
    description: 'Consultez la politique de confidentialité de l\'agence Urunk, détaillant la collecte, le stockage et la protection de vos données personnelles.'
  },
  {
    path: '/conditions-generales',
    lang: 'fr',
    title: 'Conditions Générales de Vente et d\'Utilisation | Urunk',
    description: 'Consultez les conditions générales de vente et d\'utilisation des services de création de site de l\'agence Urunk.'
  },
  {
    path: '/plan-du-site',
    lang: 'fr',
    title: 'Plan du Site HTML & Répertoire Complet | Urunk',
    description: 'Retrouvez les liens vers toutes les rubriques, services, réalisations et articles de blog du site de l\'agence Urunk en français.'
  },
  {
    path: '/merci',
    lang: 'fr',
    title: 'Merci pour Votre Demande d\'Audit Stratégique | Urunk',
    description: 'Nous avons bien reçu votre demande d\'audit. Notre équipe d\'experts va analyser votre présence digitale et vous recontactera rapidement.'
  },
  {
    path: '/agence-web-casablanca',
    lang: 'fr',
    title: 'Création Site Web Casablanca : Agence de Design | Urunk',
    description: 'Besoin d\'un site internet performant à Casablanca ? Nous créons des sites web sur mesure pour les acteurs du tourisme et du luxe.'
  },
  {
    path: '/agence-web-maroc',
    lang: 'fr',
    title: 'Agence Web Maroc : Sites pour Hôtels et Riads | Urunk',
    description: 'Agence de création web au Maroc spécialisée pour hôtels, riads et entreprises touristiques : moteurs de réservation directe et performance optimale.'
  },
  {
    path: '/agence-seo-maroc',
    lang: 'fr',
    title: 'Agence SEO Maroc : Référencement Naturel & SEO Local | Urunk',
    description: 'Propulsez votre site en première page de Google. Notre agence SEO au Maroc conçoit des stratégies de référencement naturel et d\'optimisation de fiches Maps.'
  },
  {
    path: '/agence-seo-casablanca',
    lang: 'fr',
    title: 'Agence SEO Casablanca : Optimisez les Mots-Clés Stratégiques | Urunk',
    description: 'Développez votre autorité organique à Casablanca. Nous optimisons votre visibilité sur Google Maps et propulsons votre site devant vos concurrents.'
  },
  {
    path: '/google-ads-maroc',
    lang: 'fr',
    title: 'Gestion Google Ads Maroc : Campagnes Payantes | Urunk',
    description: 'Gestion experte Google Ads au Maroc dès 4 000 MAD/mois pour hôtels et riads : campagnes rentables à forte intention d\'achat. Audit stratégique gratuit.'
  },
  {
    path: '/services/gestion-publicites-meta',
    lang: 'fr',
    title: 'Publicité Meta Ads pour hôtels et riads | Urunk',
    description: 'Campagnes Meta Ads expertes sur Instagram et Facebook pour hôtels et riads au Maroc dès 4 000 MAD/mois. Retargeting visuel et réservations directes.'
  },
  {
    path: '/services/tripadvisor-ads',
    lang: 'fr',
    title: 'Publicité TripAdvisor pour hôtels au Maroc | Urunk',
    description: 'Gestion publicitaire TripAdvisor pour hôtels et riads au Maroc dès 3 000 MAD/mois. Captez les voyageurs prêts à réserver sur votre site officiel.'
  },
  {
    path: '/services/bundle-site-ads',
    lang: 'fr',
    title: 'Pack site web + publicité pour hôtels | Urunk',
    description: 'Pack tout-en-un site web hôtelier sous React et campagnes Google Ads au Maroc. Réduisez vos commissions OTA avec une solution d\'acquisition complète.'
  },
  {
    path: '/services/ai-seo-optimization',
    lang: 'fr',
    title: 'Optimisation SEO via l\'IA : Contenu Sémantique | Urunk',
    description: 'Optimisez les moteurs de recherche modernes. Nous exploitons l\'intelligence artificielle avancée pour optimiser et scaler votre contenu SEO.'
  },
  {
    path: '/services/wordpress-seo',
    lang: 'fr',
    title: 'Expertise SEO WordPress : Audit & Optimisation | Urunk',
    description: 'Votre site WordPress est lent ou mal indexé ? Notre équipe d\'experts résout les erreurs techniques et améliore votre positionnement Google.'
  },
  {
    path: '/services/ecommerce-seo',
    lang: 'fr',
    title: 'Référencement SEO E-commerce : Augmentez Vos Ventes | Urunk',
    description: 'Boostez le chiffre d\'affaires de votre boutique en ligne. Optimisation technique et sémantique pour les sites e-commerce au Maroc.'
  },
  {
    path: '/services/google-business-profile',
    lang: 'fr',
    title: 'Optimisation Fiche Google Business Profile Riads | Urunk',
    description: 'Optimisez le pack local Google Maps. Optimisation complète de votre fiche Google My Business pour générer des appels et réservations directes.'
  },
  {
    path: '/services/local-seo-morocco',
    lang: 'fr',
    title: 'Référencement Local Maroc : Visibilité Google Maps | Urunk',
    description: 'Captez les touristes en recherche active autour de vous. Optimisation SEO locale et présence sur cartes pour les établissements au Maroc.'
  },
  {
    path: '/secteurs/hotels-resorts',
    lang: 'fr',
    title: 'Marketing Digital Hôtels & Resorts Maroc | Urunk',
    description: 'Affranchissez-vous des commissions d\'OTAs. Nous créons des sites internet haut de gamme et gérons vos campagnes d\'acquisition digitale.'
  },
  {
    path: '/secteurs/riads-maisons-hotes',
    lang: 'fr',
    title: 'Marketing Digital Riads & Maisons d\'Hôtes | Urunk',
    description: 'Maximisez la rentabilité de votre établissement. Marketing digital sur mesure, création web rapide et référencement Google Maps pour riads.'
  },
  {
    path: '/secteurs/tour-operateurs',
    lang: 'fr',
    title: 'Marketing Digital Tour-Opérateurs & Excursions | Urunk',
    description: 'Générez plus de réservations pour vos excursions. SEO performant, pages d\'atterrissage de conversion et Google Ads pour agences de voyage.'
  },
  {
    path: '/secteurs/restaurants-traiteurs',
    lang: 'fr',
    title: 'Marketing Digital Restaurants & Traiteurs Maroc | Urunk',
    description: 'Remplissez vos tables et obtenez des demandes de devis traiteur. SEO de proximité, réseaux sociaux et menus mobiles pour traiteurs et restaurants.'
  },
  {
    path: '/secteurs/pme-entreprises',
    lang: 'fr',
    title: 'Marketing Digital pour PME & Entreprises Maroc | Urunk',
    description: 'Développez la visibilité de votre entreprise. Création de site web institutionnel professionnel, référencement Google et acquisition B2B.'
  },
  {
    path: '/zones',
    lang: 'fr',
    title: 'Zones d\'Intervention — SEO & Web au Maroc | Urunk',
    description: 'Découvrez nos zones d\'intervention au Maroc : Casablanca, Marrakech, Rabat, Agadir. SEO local, Google Business Profile et création de sites web performants.'
  },
  {
    path: '/zones/maroc',
    lang: 'fr',
    title: 'Marketing Digital Hôtelier partout au Maroc | Urunk',
    description: 'Création de sites web rapides, Google Ads et référencement naturel pour hôtels de charme, riads et traiteurs de luxe à travers le Maroc.'
  },
  {
    path: '/zones/casablanca',
    lang: 'fr',
    title: 'Agence Marketing Digital à Casablanca | Urunk',
    description: 'Création de site web, référencement local Google Maps et campagnes d\'acquisition de prospects pour entreprises et restaurateurs à Casablanca.'
  },
  {
    path: '/zones/marrakech',
    lang: 'fr',
    title: 'Marketing Digital pour Riads & Villas Marrakech | Urunk',
    description: 'Optimisez le classement Google Maps et TripAdvisor. SEO hôtelier d\'expert et création web rapide adaptés aux riads haut de gamme de Marrakech.'
  },
  {
    path: '/zones/rabat',
    lang: 'fr',
    title: 'Marketing Digital Entreprises & Tourisme à Rabat | Urunk',
    description: 'Boostez vos prospects et visites. Référencement SEO, site internet sur mesure et campagnes publicitaires Google Search pour établissements à Rabat.'
  },
  {
    path: '/zones/agadir',
    lang: 'fr',
    title: 'Marketing Digital pour Hôtels & Clubs à Agadir | Urunk',
    description: 'Augmentez vos réservations internationales. Création web, SEO de destination et campagnes visuelles pour surf camps et hôtels à Agadir.'
  },

  // ==================== ENGLISH (SECONDARY /en/) ====================
  {
    path: '/en',
    lang: 'en',
    title: 'Morocco Web & SEO Agency for Hotels & Riads | Urunk',
    description: 'Web design and SEO agency in Morocco for hotels, riads, and SMEs: fast booking engines, Google Ads, and local SEO in Casablanca and Marrakech. Free audit.'
  },
  {
    path: '/en/about',
    lang: 'en',
    title: 'About Urunk: Boutique Hotel Marketing Agency | Urunk',
    description: 'Tired of slow agencies? Meet the developers and search strategists engineering high-speed direct booking systems for luxury riads.'
  },
  {
    path: '/en/pricing',
    lang: 'en',
    title: 'Hotel Marketing Packages & Clear Pricing | Urunk',
    description: 'Compare clear, commission-free packages for web design, SEO, and Google Ads. Select the perfect investment model to grow direct sales.'
  },
  {
    path: '/en/services',
    lang: 'en',
    title: 'Hotel Marketing Services: Drive Direct Bookings | Urunk',
    description: 'From high-speed custom web development to expert maps and search engine optimization. Explore our specialized direct-booking growth channels.'
  },
  {
    path: '/en/work',
    lang: 'en',
    title: 'Our Work: Boutique Hotel Case Studies & Success | Urunk',
    description: 'Want proof of real marketing ROI? Explore case studies of Moroccan riads and food brands that scaled direct organic bookings with Urunk.'
  },
  {
    path: '/en/blog',
    lang: 'en',
    title: 'Hotel Marketing Blog: Direct Booking Guides | Urunk',
    description: 'Want to grow your guest list for free? Read expert actionable strategies on SEO, website optimization, and Google Maps rankings for hotels.'
  },
  {
    path: '/en/faq',
    lang: 'en',
    title: 'Hotel Marketing FAQ: Web & SEO Answers | Urunk',
    description: 'Have questions about hotel web design, SEO, or local payment integrations? Get transparent answers about setups, pricing, and timelines.'
  },
  {
    path: '/en/contact',
    lang: 'en',
    title: 'Contact Our Search Experts: Get Your Free Audit | Urunk',
    description: 'Ready to stop losing OTA commissions? Contact our team for a free website performance, speed, and local SEO diagnostic audit today.'
  },
  {
    path: '/en/privacy-policy',
    lang: 'en',
    title: 'Privacy Policy & Data Protection Notice | Urunk',
    description: 'Read the privacy policy for Urunk Agency, detailing how we collect, store, protect, and use user information on our website.'
  },
  {
    path: '/en/terms-of-service',
    lang: 'en',
    title: 'Terms of Service & Client Agreement | Urunk',
    description: 'Read the terms of service for Urunk Agency, outlining client expectations, billing cycles, and web design service agreements.'
  },
  {
    path: '/en/sitemap',
    lang: 'en',
    title: 'HTML Sitemap & Complete Page Directory | Urunk',
    description: 'Find links to all pages, services, case studies, and blog posts on Urunk\'s English and French website structure.'
  },
  {
    path: '/en/thank-you',
    lang: 'en',
    title: 'Thank You for Requesting Your Strategy Audit | Urunk',
    description: 'We have received your request for a free digital marketing audit. Our search team will analyze your website performance and contact you shortly.'
  },
  {
    path: '/404',
    lang: 'fr',
    title: 'Page Non Trouvée | Urunk',
    description: 'La page que vous recherchez n\'existe pas ou a été déplacée. Revenez à l\'accueil d\'Urunk pour découvrir nos services de marketing hôtelier.'
  },
  {
    path: '/en/services/website-design',
    lang: 'en',
    title: 'Hotel Website Design & Booking Engine Services | Urunk',
    description: 'Your hotel website should be your highest-producing reservation channel. We build bespoke hotel websites designed to maximize direct guest acquisition.'
  },
  {
    path: '/en/web-design-casablanca',
    lang: 'en',
    title: 'Website Design Agency Casablanca | Web Design Urunk',
    description: 'Need a stunning, high-performing website? We design and build bespoke, responsive websites for Moroccan hospitality and tourism brands in Casablanca.'
  },
  {
    path: '/en/seo-agency-morocco',
    lang: 'en',
    title: 'SEO Agency Morocco: Outrank OTAs on Google | Urunk',
    description: 'Tired of losing organic traffic to Booking.com? Our professional SEO agency in Morocco builds sustainable organic search visibility for luxury stays.'
  },
  {
    path: '/en/services/google-ads',
    lang: 'en',
    title: 'Google Ads Management for Riads & Hotels | Urunk',
    description: 'Stop losing money on generic clicks. Our high-intent Google Ads PPC search campaigns drive qualified guests directly to your booking engine.'
  },
  {
    path: '/en/services/meta-ads',
    lang: 'en',
    title: 'Hotel Meta Ads: Facebook & Instagram Ads | Urunk',
    description: 'Capture travelers where they find inspiration. We build high-converting Facebook and Instagram visual campaigns for luxury riads and boutique stays.'
  },
  {
    path: '/en/services/tripadvisor-ads',
    lang: 'en',
    title: 'TripAdvisor Ads Management for Hotels & Riads | Urunk',
    description: 'Drive ready-to-book travelers to your booking engine. Our TripAdvisor advertising experts capture high-intent users planning their Moroccan stays.'
  },
  {
    path: '/en/services/bundle-site-ads',
    lang: 'en',
    title: 'Hotel Website and Ads Bundle: Fast Site & PPC | Urunk',
    description: 'The ultimate direct-booking system. Get a custom high-speed WordPress website, SEO optimization, and managed Google Ads in one high-ROI bundle.'
  },
  {
    path: '/en/services/ai-seo-optimization',
    lang: 'en',
    title: 'AI SEO Services: Scale Quality Search Traffic | Urunk',
    description: 'Excel modern AI search engines. We leverage advanced artificial intelligence to optimize and scale high-performance semantic search content.'
  },
  {
    path: '/en/services/wordpress-seo',
    lang: 'en',
    title: 'WordPress SEO Services: Search Optimization | Urunk',
    description: 'Is your WordPress site underperforming? Our specialist search team fixes technical errors, optimizes speed, and secures front-page rankings.'
  },
  {
    path: '/en/services/ecommerce-seo',
    lang: 'en',
    title: 'Ecommerce SEO Services: Boost Store Sales | Urunk',
    description: 'Boost your online shop profits. We optimize product listings, categories, and site architecture to scale organic sales for Moroccan e-commerce brands.'
  },
  {
    path: '/en/services/google-business-profile',
    lang: 'en',
    title: 'Google Business Profile Optimization for Hotels | Urunk',
    description: 'Outrank competitors on Google Maps. We optimize and manage your local maps listing to drive continuous phone calls, directions, and direct bookings.'
  },
  {
    path: '/en/services/local-seo-morocco',
    lang: 'en',
    title: 'Local SEO Morocco: Drive Local Maps & Search Traffic | Urunk',
    description: 'Connect with tourists searching in your local area. We optimize your local citation networks, maps profiles, and geographically-targeted content.'
  },
  {
    path: '/en/industries/hotels-resorts',
    lang: 'en',
    title: 'Hotel & Resort Digital Marketing Agency | Urunk',
    description: 'Take back control from OTAs. We build custom high-converting web designs, SEO, and paid acquisition campaigns specifically for luxury hotels and resorts.'
  },
  {
    path: '/en/industries/riads-boutique-hotels',
    lang: 'en',
    title: 'Riad & Boutique Hotel Digital Marketing Agency | Urunk',
    description: 'Maximize your guest margins. Specialist digital marketing, speed-optimized web designs, and local Google Maps SEO tailored for boutique riads.'
  },
  {
    path: '/en/industries/tour-operators',
    lang: 'en',
    title: 'Tour Operator Digital Marketing Agency | Urunk',
    description: 'Get more organic bookings for your tour business. High-performance SEO, target landing pages, and search ads designed for excursions and desert tours.'
  },
  {
    path: '/en/industries/restaurants-catering',
    lang: 'en',
    title: 'Restaurant & Catering Digital Marketing Agency | Urunk',
    description: 'Fill your dining rooms and catering leads. We develop local maps optimizations, social ads, and fast menus for corporate event caterers and restaurants.'
  },
  {
    path: '/en/industries/corporate-smes',
    lang: 'en',
    title: 'Corporate & SME Digital Marketing Agency | Urunk',
    description: 'Scale your business operations and leads. We deliver professional corporate web development, local SEO, and custom acquisition engines for B2B services.'
  },
  {
    path: '/en/locations',
    lang: 'en',
    title: 'Locations We Serve — SEO & Web in Morocco | Urunk',
    description: 'Explore the locations we serve across Morocco: Casablanca, Marrakech, Rabat, Agadir. Local SEO, Google Business Profile optimization & high-speed websites.'
  },
  {
    path: '/en/locations/morocco',
    lang: 'en',
    title: 'Hospitality Digital Marketing Services in Morocco | Urunk',
    description: 'Bespoke web development, Google Ads, and search engine optimization services for luxury hotels, boutique stays, and tourism brands across Morocco.'
  },
  {
    path: '/en/locations/casablanca',
    lang: 'en',
    title: 'Digital Marketing Agency in Casablanca | Urunk',
    description: 'Bespoke web design, local maps visibility, and B2B search campaign services for restaurants, event caterers, and corporate SMEs in Casablanca.'
  },
  {
    path: '/en/locations/marrakech',
    lang: 'en',
    title: 'Riad & Hotel Digital Marketing Marrakech | Urunk',
    description: 'Rank on top of TripAdvisor and Google Maps. Expert search engine optimization and high-speed web design customized for luxury riads in Marrakech.'
  },
  {
    path: '/en/locations/rabat',
    lang: 'en',
    title: 'SME & Tourism Digital Marketing Agency in Rabat | Urunk',
    description: 'Increase your search traffic and customer inquiries. Custom SEO audits, institutional websites, and targeted Google Search Ads for businesses in Rabat.'
  },
  {
    path: '/en/locations/agadir',
    lang: 'en',
    title: 'Resort & Surf Camp Digital Marketing in Agadir | Urunk',
    description: 'Get more international guest bookings. Specialist web design, destination SEO, and visual Instagram marketing tailored for Agadir resorts and surf stays.'
  }
];

// Mapping service routes to serviceData keys
const serviceRouteMapping: { key: string, enPath: string, frPath: string }[] = [
  { key: 'creation-site-web-prix', enPath: '/en/services/website-design', frPath: '/creation-site-web' },
  { key: 'google-ads-morocco', enPath: '/en/services/google-ads', frPath: '/google-ads-maroc' },
  { key: 'hotel-digital-marketing', enPath: '/en/services/meta-ads', frPath: '/services/gestion-publicites-meta' },
  { key: 'hotel-digital-marketing', enPath: '/en/services/tripadvisor-ads', frPath: '/services/tripadvisor-ads' },
  { key: 'direct-booking', enPath: '/en/services/bundle-site-ads', frPath: '/services/bundle-site-ads' },
  { key: 'web-design-morocco', enPath: '/en/web-design-morocco', frPath: '/agence-web-maroc' },
  { key: 'web-design-casablanca', enPath: '/en/web-design-casablanca', frPath: '/agence-web-casablanca' },
  { key: 'seo-agency-morocco', enPath: '/en/seo-agency-morocco', frPath: '/agence-seo-maroc' },
  { key: 'seo-agency-casablanca', enPath: '/en/seo-agency-casablanca', frPath: '/agence-seo-casablanca' },
  { key: 'hotel-seo', enPath: '/en/hotel-seo', frPath: '/seo-hotel' },
  { key: 'hotel-digital-marketing', enPath: '/en/hotel-digital-marketing', frPath: '/marketing-digital-hotelier' },
  { key: 'hotel-website-design', enPath: '/en/hotel-website-design', frPath: '/site-web-hotel' },
  { key: 'direct-booking', enPath: '/en/direct-booking', frPath: '/reservation-directe' },
  { key: 'google-ads-morocco', enPath: '/en/google-ads-morocco', frPath: '/google-ads-maroc' },
  { key: 'local-seo-casablanca', enPath: '/en/local-seo-casablanca', frPath: '/referencement-local-casablanca' },
  { key: 'riad-seo-marrakech', enPath: '/en/riad-seo-marrakech', frPath: '/seo-riad-marrakech' },
  { key: 'riad-website-design-marrakech', enPath: '/en/riad-website-design-marrakech', frPath: '/site-web-riad-marrakech' },
  { key: 'ai-seo-optimization', enPath: '/en/services/ai-seo-optimization', frPath: '/services/ai-seo-optimization' },
  { key: 'wordpress-seo', enPath: '/en/services/wordpress-seo', frPath: '/services/wordpress-seo' },
  { key: 'ecommerce-seo', enPath: '/en/services/ecommerce-seo', frPath: '/services/ecommerce-seo' },
  { key: 'google-business-profile-optimization', enPath: '/en/services/google-business-profile', frPath: '/services/google-business-profile' },
  { key: 'local-seo-morocco', enPath: '/en/services/local-seo-morocco', frPath: '/services/local-seo-morocco' }
];

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const customBlogTitlesEN: Record<string, string> = {
  "reduce-ota-commissions": "How Riads Can Reduce OTA Commissions",
  "tripadvisor-vs-google-ads": "TripAdvisor Ads vs Google Ads: Which is Best?",
  "website-book-now-button": "Why Hotel Sites Need a Book Now Button",
  "wordpress-vs-wix-hospitality": "WordPress vs Wix vs Squarespace for Hotels",
  "optimize-tripadvisor-listing": "How to Optimize a TripAdvisor Listing",
  "direct-booking-website-cost-morocco": "What a Direct Booking Website Costs",
  "signs-website-losing-bookings": "5 Signs Your Hotel Website is Losing Bookings",
  "google-ads-riads-keyword-research": "Google Ads for Riads: Keyword Strategy Guide",
  "get-more-5-star-reviews": "How to Get More 5-Star Reviews for Your Hotel",
  "case-study-roundup-success": "Direct Booking Case Study Roundup",
  "meta-ads-for-hotels-instagram-facebook": "Meta Ads for Hotels: Instagram & Facebook Guide",
  "hotel-seo-morocco-guide": "Hotel SEO Strategy for Morocco: Rank #1",
  "pms-integration-direct-booking-engine": "Best PMS for Direct Booking Engine",
  "email-marketing-automation-for-hotels": "Hotel Email Marketing Automation Guide",
  "desert-camp-marketing-strategy": "Marketing Strategy for Desert Camps",
  "tour-operator-digital-marketing": "Digital Marketing Guide for Tour Operators",
  "speed-optimization-hotel-websites": "Hotel Website Speed Optimization Guide",
  "whatsapp-automation-hotel-guest-experience": "WhatsApp Automation for Hotel Guests",
  "landing-pages-hotels": "Anatomy of a High-Converting Hotel Landing Page",
  "seasonal-pricing-revenue-management": "Seasonal Pricing & Revenue Management",
  "rebranding-renovating-hotel-digital-launch": "Rebranding & Digital Launch Strategy"
};

const customBlogTitlesFR: Record<string, string> = {
  "reduire-commissions-ota": "Réduire les Commissions OTA des Riads",
  "tripadvisor-vs-google-ads": "Publicités TripAdvisor vs Google Ads Hôtels",
  "bouton-reserver-site-web": "Pourquoi un Bouton Réserver sur Votre Site",
  "wordpress-vs-wix-hotellerie": "WordPress, Wix ou Squarespace pour Hôtel",
  "optimiser-annonce-tripadvisor": "Optimiser Votre Fiche TripAdvisor Riad",
  "cout-site-web-reservation-directe-maroc": "Coût d'un Site de Réservation Directe",
  "signes-site-web-perd-reservations": "5 Signes que Votre Hôtel Perd des Clients",
  "google-ads-riads-recherche-mots-cles": "Google Ads pour Riads : Recherche Mots-Clés",
  "obtenir-plus-avis-5-etoiles": "Comment Obtenir Plus d'Avis 5 Étoiles Riad",
  "etudes-de-cas-succes-hotellerie": "Études de Cas : Réservations Directes",
  "publicites-meta-pour-hotels-instagram-facebook": "Publicités Meta Hôtels : Instagram & FB",
  "guide-seo-hotellerie-maroc": "Stratégie SEO Hôtellerie au Maroc",
  "integration-pms-moteur-reservation-directe": "Quel PMS pour un Moteur de Réservation",
  "marketing-email-automatisation-pour-hotels": "Email Marketing Automatisé pour Hôtels",
  "strategie-marketing-camp-desert": "Marketing Bivouacs & Camps de Luxe Maroc",
  "marketing-digital-tour-operateur": "Guide Marketing pour Tour Opérateurs",
  "optimisation-vitesse-sites-web-hotellerie": "Optimisation Vitesse Site Web Hôtel",
  "automatisation-whatsapp-experience-client-hotel": "Automatisation WhatsApp pour Hôtels",
  "landing-pages-hotels": "Anatomie d'une Landing Page Hôtelière",
  "tarification-saisonniere-gestion-revenus": "Tarification Saisonnière & Revenue Management",
  "rebranding-renovation-hotel-lancement-digital": "Rebranding & Relancement Digital Riad"
};

const customServiceTitles: Record<string, { en: string; fr: string }> = {
  "web-design-morocco": {
    en: "Website Design Morocco: Hotel Web Design | Urunk",
    fr: "Création Site Web Maroc : Agence Digitale Riad | Urunk"
  },
  "web-design-casablanca": {
    en: "Website Design Casablanca | Web Design Agency | Urunk",
    fr: "Création Site Web Casablanca : Agence de Design | Urunk"
  },
  "seo-agency-morocco": {
    en: "SEO Agency Morocco: Rank #1 on Google Organic | Urunk",
    fr: "Agence SEO Maroc : Expert Référencement Naturel | Urunk"
  },
  "seo-agency-casablanca": {
    en: "SEO Agency Casablanca: Local SEO & Web Traffic | Urunk",
    fr: "Agence SEO Casablanca : Expert Référencement | Urunk"
  },
  "local-seo-morocco": {
    en: "Local SEO Morocco: Drive Google Map Bookings | Urunk",
    fr: "Référencement Local Maroc : Visibilité Maps | Urunk"
  },
  "google-business-profile-optimization": {
    en: "Google Business Profile Optimization for Hotels | Urunk",
    fr: "Optimisation Fiche Google Business Profile Riad | Urunk"
  },
  "google-ads": {
    en: "Google Ads Management for Riads & Hotels | Urunk",
    fr: "Gestion Publicités Google Ads pour Riads | Urunk"
  },
  "google-ads-morocco": {
    en: "Google Ads Morocco: PPC Campaigns for Hotels | Urunk",
    fr: "Gestion Google Ads Maroc : Publicités Payantes | Urunk"
  },
  "meta-ads": {
    en: "Meta Ads Management: Facebook & Instagram Ads | Urunk",
    fr: "Gestion Publicités Meta : Facebook & Instagram | Urunk"
  },
  "tripadvisor-ads": {
    en: "TripAdvisor Ads Management: Direct Bookings | Urunk",
    fr: "Gestion Publicités TripAdvisor Riads & Hôtels | Urunk"
  },
  "website-plus-ads": {
    en: "Website & Ads Package: High-Speed Web Design | Urunk",
    fr: "Site Web et Publicité : Forfait Complet Riad | Urunk"
  },
  "ai-seo-optimization": {
    en: "AI SEO Optimization: Modern Search Content | Urunk",
    fr: "Optimisation SEO via l'IA : Contenu Recherche | Urunk"
  },
  "wordpress-seo": {
    en: "WordPress SEO Service: Fast Audits & Rankings | Urunk",
    fr: "Expertise SEO WordPress : Audit & Optimisation | Urunk"
  },
  "ecommerce-seo": {
    en: "Ecommerce SEO Services: Boost Store Sales | Urunk",
    fr: "Référencement SEO E-commerce : Boostez Ventes | Urunk"
  }
};

function generateShortTitle(title: string, lang?: 'en' | 'fr', slug?: string): string {
  if (slug) {
    if (lang === 'fr' && customBlogTitlesFR[slug]) {
      const fr = `${customBlogTitlesFR[slug]} | Urunk`;
      return fr.length > 60 ? fr.substring(0, 52).trim() + ' | Urunk' : fr;
    } else if (customBlogTitlesEN[slug]) {
      const en = `${customBlogTitlesEN[slug]} | Urunk`;
      return en.length > 60 ? en.substring(0, 52).trim() + ' | Urunk' : en;
    }
  }
  let short = title.replace(/ \(.*?\)/, ''); // remove (2026 Guide) etc
  short = short.split(':')[0]; // keep part before colon if exists
  if (short.length > 48) {
     short = short.substring(0, 48).split(' ').slice(0, -1).join(' ');
  }
  const res = short.trim() + ' | Urunk';
  return res.length > 60 ? res.substring(0, 52).trim() + ' | Urunk' : res;
}

function generateFallbackBody(page: PageMetadata, allPages: PageMetadata[]): string {
  const isFR = page.lang === 'fr';
  const lang = isFR ? 'fr' : 'en';
  const equivalentPath = getEquivalentRoute(page.path);
  
  // Header / Main Navigation
  let html = `
    <div id="root">
      <nav style="padding: 1.5rem 2rem; max-width: 1100px; margin: 0 auto; display: flex; gap: 1.5rem; flex-wrap: wrap; border-bottom: 1px solid #eee; justify-content: space-between; align-items: center; font-family: sans-serif;">
        <a href="${isFR ? '/' : '/en'}" style="font-weight: bold; color: #0F2D25; text-decoration: none; font-size: 1.3rem; letter-spacing: 1px;">URUNK</a>
        <div style="display: flex; gap: 1.25rem; flex-wrap: wrap; font-size: 0.95rem;">
          <a href="${isFR ? '/a-propos' : '/en/about'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'À Propos' : 'About'}</a>
          <a href="${isFR ? '/services' : '/en/services'}" style="color: #4a5568; text-decoration: none;">Services</a>
          <a href="${isFR ? '/realisations' : '/en/work'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Réalisations' : 'Work'}</a>
          <a href="${isFR ? '/tarifs' : '/en/pricing'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Tarifs' : 'Pricing'}</a>
          <a href="${isFR ? '/blog' : '/en/blog'}" style="color: #4a5568; text-decoration: none;">Blog</a>
          <a href="${isFR ? '/faq' : '/en/faq'}" style="color: #4a5568; text-decoration: none;">FAQ</a>
          <a href="${isFR ? '/contact' : '/en/contact'}" style="color: #4a5568; text-decoration: none;">Contact</a>
          <a href="${equivalentPath}" style="font-weight: 600; color: #D46E55; text-decoration: none;">${isFR ? 'English' : 'Français'}</a>
          <a href="${isFR ? '/plan-du-site' : '/en/sitemap'}" style="color: #718096; text-decoration: none;">${isFR ? 'Plan du Site' : 'Sitemap'}</a>
        </div>
      </nav>
      <main style="padding: 3rem 2rem; max-width: 900px; margin: 0 auto; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.7; color: #2d3748;">
  `;

  // Check matching service
  const serviceMapping = serviceRouteMapping.find(m => isFR ? m.frPath === page.path : m.enPath === page.path);
  
  if (page.path === '/' || page.path === '/en') {
    // HOME PAGE
    html += `
      <header style="margin-bottom: 3rem; text-align: center;">
        <span style="display: inline-block; padding: 0.35rem 1rem; border-radius: 9999px; background: rgba(212,110,85,0.1); color: #D46E55; font-size: 0.85rem; font-weight: bold; text-transform: uppercase; margin-bottom: 1.5rem;">
          ${isFR ? "Croissance Digitale pour l'Hôtellerie au Maroc" : "Digital Growth for Hospitality in Morocco"}
        </span>
        <h1 style="font-size: 2.75rem; color: #0F2D25; margin-bottom: 1.5rem; line-height: 1.2; font-family: Georgia, serif;">
          ${isFR ? "Agence web & SEO pour hôtels, riads et PME au Maroc" : "Web & SEO Agency for Hotels, Riads and SMEs in Morocco"}
        </h1>
        <p style="font-size: 1.2rem; line-height: 1.6; color: #4a5568; max-width: 750px; margin: 0 auto 2rem auto;">
          ${isFR 
            ? "Nous accompagnons les établissements hôteliers, riads et entreprises marocaines dans la création d'écosystèmes digitaux rentables : plateformes de réservation directe sans commission, positionnement prioritaire sur les requêtes locales et campagnes d'acquisition à haut rendement."
            : "We assist hotels, riads, and Moroccan businesses in establishing profitable digital channels: commission-free direct booking engines, top local search visibility, and high-conversion paid acquisition campaigns."}
        </p>
        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <a href="${isFR ? '/contact' : '/en/contact'}" style="background: #D46E55; color: white; padding: 0.85rem 1.75rem; border-radius: 8px; text-decoration: none; font-weight: bold;">
            ${isFR ? "Demander un Audit Gratuit" : "Request a Free Audit"}
          </a>
          <a href="${isFR ? '/services' : '/en/services'}" style="border: 2px solid #0F2D25; color: #0F2D25; padding: 0.85rem 1.75rem; border-radius: 8px; text-decoration: none; font-weight: bold;">
            ${isFR ? "Explorer nos Services" : "Explore Our Services"}
          </a>
        </div>
      </header>
      
      {/* 4 Blocs Thématiques */}
      <section style="margin-bottom: 3.5rem;">
        <h2 style="color: #0F2D25; font-size: 2rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">
          ${isFR ? 'Création de sites web et SEO pour hôtels et riads au Maroc' : 'Web Design and SEO for Hotels and Riads in Morocco'}
        </h2>
        <p style="font-size: 1.05rem; line-height: 1.6; color: #4a5568; margin-bottom: 2rem;">
          ${isFR
            ? "La création d'un site web hôtelier et le référencement naturel permettent aux hôtels et riads marocains de capter directement les voyageurs sur Google. En combinant un moteur de réservation sans commission, une vitesse de chargement optimale et un ciblage géographique précis, les établissements augmentent leur marge nette par nuitée vendue."
            : "Hotel website design and organic SEO enable Moroccan riads and boutique hotels to attract travelers directly via search engines. By pairing a commission-free booking engine with fast page speeds and local search optimization, properties capture direct guests while preserving room revenue without paying intermediary booking platform fees."}
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-bottom: 2.5rem;">
          {/* Bloc 1: Hôtellerie */}
          <div style="padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.3rem;">
              <a href="${isFR ? '/secteurs/riads-maisons-hotes' : '/en/industries/riads-boutique-hotels'}" style="color: #0F2D25; text-decoration: none; font-weight: bold;">
                ${isFR ? 'Hôtellerie' : 'Hospitality'} &rarr;
              </a>
            </h3>
            <p style="margin: 0 0 1rem 0; color: #718096; font-size: 0.85rem;">
              ${isFR ? "Riads, maisons d'hôtes et hébergements de charme." : "Riads, boutique hotels, and guest stays across Morocco."}
            </p>
            <ul style="padding-left: 1.25rem; margin: 0; line-height: 1.8; font-size: 0.95rem;">
              <li><a href="${isFR ? '/seo-riad-marrakech' : '/en/riad-seo-marrakech'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'SEO Riads Marrakech' : 'Marrakech Riad SEO'}</a></li>
              <li><a href="${isFR ? '/site-web-hotel' : '/en/hotel-website-design'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'Sites Web Hôtels' : 'Hotel Website Design'}</a></li>
              <li><a href="${isFR ? '/reservation-directe' : '/en/direct-booking'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'Réservation Directe' : 'Direct Booking Strategy'}</a></li>
            </ul>
          </div>

          {/* Bloc 2: Acquisition */}
          <div style="padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.3rem;">
              <a href="${isFR ? '/services' : '/en/services'}" style="color: #0F2D25; text-decoration: none; font-weight: bold;">
                ${isFR ? 'Acquisition' : 'Acquisition'} &rarr;
              </a>
            </h3>
            <p style="margin: 0 0 1rem 0; color: #718096; font-size: 0.85rem;">
              ${isFR ? "Campagnes publicitaires payantes pour générer des réservations." : "Paid search and social channels for direct bookings."}
            </p>
            <ul style="padding-left: 1.25rem; margin: 0; line-height: 1.8; font-size: 0.95rem;">
              <li><a href="${isFR ? '/google-ads-maroc' : '/en/google-ads-morocco'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'Google Ads Maroc' : 'Google Ads Morocco'}</a></li>
              <li><a href="${isFR ? '/services/gestion-publicites-meta' : '/en/services/meta-ads'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'Meta Ads Hôtellerie' : 'Hospitality Meta Ads'}</a></li>
              <li><a href="${isFR ? '/services/tripadvisor-ads' : '/en/services/tripadvisor-ads'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'TripAdvisor Ads' : 'TripAdvisor Ads'}</a></li>
            </ul>
          </div>

          {/* Bloc 3: SEO local */}
          <div style="padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.3rem;">
              <a href="${isFR ? '/zones/casablanca' : '/en/locations/casablanca'}" style="color: #0F2D25; text-decoration: none; font-weight: bold;">
                ${isFR ? 'SEO Local' : 'Local SEO'} &rarr;
              </a>
            </h3>
            <p style="margin: 0 0 1rem 0; color: #718096; font-size: 0.85rem;">
              ${isFR ? "Visibilité géolocalisée et fiches Google Maps." : "Google Maps visibility and local search authority."}
            </p>
            <ul style="padding-left: 1.25rem; margin: 0; line-height: 1.8; font-size: 0.95rem;">
              <li><a href="${isFR ? '/referencement-local-casablanca' : '/en/local-seo-casablanca'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'SEO Local Casablanca' : 'Local SEO Casablanca'}</a></li>
              <li><a href="${isFR ? '/seo-riad-marrakech' : '/en/riad-seo-marrakech'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'SEO Local Marrakech' : 'Local SEO Marrakech'}</a></li>
              <li><a href="${isFR ? '/services/google-business-profile' : '/en/services/google-business-profile'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'Google Business Profile' : 'Google Business Profile'}</a></li>
            </ul>
          </div>

          {/* Bloc 4: Création web */}
          <div style="padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.3rem;">
              <a href="${isFR ? '/zones/marrakech' : '/en/locations/marrakech'}" style="color: #0F2D25; text-decoration: none; font-weight: bold;">
                ${isFR ? 'Création Web' : 'Web Design'} &rarr;
              </a>
            </h3>
            <p style="margin: 0 0 1rem 0; color: #718096; font-size: 0.85rem;">
              ${isFR ? "Sites performants et moteurs de réservation connectés." : "High-speed booking engines and custom websites."}
            </p>
            <ul style="padding-left: 1.25rem; margin: 0; line-height: 1.8; font-size: 0.95rem;">
              <li><a href="${isFR ? '/creation-site-web' : '/en/services/website-design'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'Création Site Web' : 'Website Design'}</a></li>
              <li><a href="${isFR ? '/agence-web-casablanca' : '/en/web-design-casablanca'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'Agence Web Casablanca' : 'Web Design Casablanca'}</a></li>
              <li><a href="${isFR ? '/site-web-riad-marrakech' : '/en/riad-website-design-marrakech'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'Site Web Riad Marrakech' : 'Riad Website Marrakech'}</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section Présence à Casablanca et Marrakech (Tâche 2) */}
      <section style="margin-bottom: 3.5rem; background: #FAF8F5; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0;">
        <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">
          ${isFR ? 'Présence à Casablanca et Marrakech' : 'Presence in Casablanca and Marrakech'}
        </h2>
        <p style="color: #4a5568; line-height: 1.6; margin-bottom: 1.5rem;">
          ${isFR
            ? "Notre agence intervient auprès des entreprises et professionnels du tourisme à Casablanca et Marrakech. À Casablanca, nous développons des sites web B2B et du référencement local pour les PME. À Marrakech, nous accompagnons les riads et hôtels de la Médina dans leur stratégie d'acquisition directe et Google Maps."
            : "Our agency operates across Casablanca and Marrakech to support Moroccan businesses and hospitality brands. In Casablanca, we build corporate platforms and local B2B search visibility. In Marrakech, we support Medina riads and boutique hotels with direct booking architecture, Google Maps positioning, and targeted international search campaigns."}
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
          <div style="padding: 1.25rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.15rem;">
              <a href="${isFR ? '/zones/casablanca' : '/en/locations/casablanca'}" style="color: #0F2D25; text-decoration: underline; font-weight: bold;">
                ${isFR ? 'Hub Casablanca' : 'Casablanca Hub'} &rarr;
              </a>
            </h3>
            <p style="margin: 0; color: #718096; font-size: 0.9rem; font-family: monospace;">[ADRESSE_CASABLANCA_ANFA]</p>
          </div>
          <div style="padding: 1.25rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.15rem;">
              <a href="${isFR ? '/zones/marrakech' : '/en/locations/marrakech'}" style="color: #0F2D25; text-decoration: underline; font-weight: bold;">
                ${isFR ? 'Hub Marrakech' : 'Marrakech Hub'} &rarr;
              </a>
            </h3>
            <p style="margin: 0; color: #718096; font-size: 0.9rem; font-family: monospace;">[ADRESSE_MARRAKECH_GUELIZ]</p>
          </div>
        </div>
      </section>

      {/* Section Autres services & Ressources (Tâche 4) */}
      <section style="margin-bottom: 3.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
        <div style="padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
          <h3 style="color: #0F2D25; font-size: 1.2rem; margin-top: 0; margin-bottom: 0.75rem; font-family: Georgia, serif;">
            ${isFR ? 'Autres services' : 'Other Services'}
          </h3>
          <ul style="padding-left: 1.25rem; margin: 0; line-height: 1.8; font-size: 0.95rem;">
            <li><a href="${isFR ? '/services/wordpress-seo' : '/en/services/wordpress-seo'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'SEO WordPress' : 'WordPress SEO'}</a></li>
            <li><a href="${isFR ? '/services/ecommerce-seo' : '/en/services/ecommerce-seo'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'SEO E-commerce' : 'E-commerce SEO'}</a></li>
            <li><a href="${isFR ? '/services/ai-seo-optimization' : '/en/services/ai-seo-optimization'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'Optimisation SEO IA' : 'AI SEO Optimization'}</a></li>
            <li><a href="${isFR ? '/services/bundle-site-ads' : '/en/services/bundle-site-ads'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'Pack Site & Publicité' : 'Website & Ads Bundle'}</a></li>
          </ul>
        </div>
        <div style="padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
          <h3 style="color: #0F2D25; font-size: 1.2rem; margin-top: 0; margin-bottom: 0.75rem; font-family: Georgia, serif;">
            ${isFR ? 'Ressources & Guides' : 'Resources & Guides'}
          </h3>
          <ul style="padding-left: 1.25rem; margin: 0; line-height: 1.8; font-size: 0.95rem;">
            <li><a href="${isFR ? '/blog/reduire-commissions-ota' : '/en/blog/reduce-ota-commissions'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'Réduire les commissions OTA' : 'Reduce OTA Commissions'}</a></li>
            <li><a href="${isFR ? '/blog/tripadvisor-vs-google-ads' : '/en/blog/tripadvisor-vs-google-ads'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'TripAdvisor vs Google Ads' : 'TripAdvisor vs Google Ads'}</a></li>
            <li><a href="${isFR ? '/blog/guide-seo-hotellerie-maroc' : '/en/blog/hotel-seo-morocco-guide'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'Guide SEO hôtelier Maroc' : 'Morocco Hotel SEO Guide'}</a></li>
          </ul>
        </div>
      </section>

      <section style="margin-bottom: 3rem; background: #FAF8F5; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0;">
        <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">
          ${isFR ? 'Exemples de stratégies appliquées' : 'Applied Strategy Examples'}
        </h2>
        <p style="color: #4a5568; line-height: 1.6; margin-bottom: 1.5rem;">
          ${isFR
            ? "Ces scénarios types illustrent la mise en place d'architectures digitales adaptées aux réalités du marché marocain. Chaque projet intègre la refonte technique du site, la connexion au PMS hôtelier, l'optimisation sémantique locale et des campagnes publicitaires ciblées pour réduire durablement la dépendance aux plateformes tierces."
            : "These typical scenarios illustrate how tailored digital infrastructures operate in the Moroccan market. Each framework integrates high-speed web development, direct PMS connectivity, local search engine optimization, and targeted paid acquisition designed to structurally decrease reliance on third-party online travel agencies and intermediary commission fees."}
        </p>
        <ul style="padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
    `;
    for (const study of caseStudies) {
      const href = isFR ? `/realisations/${study.frSlug || study.slug}` : `/en/work/${study.slug}`;
      const title = isFR ? study.frTopicName || study.topicName : study.topicName;
      html += `<li><a href="${href}" style="color: #0F2D25; text-decoration: underline; font-weight: 500;">${escapeHtml(title)}</a></li>`;
    }
    html += `
        </ul>
      </section>

      <section style="margin-bottom: 3rem;">
        <h2 style="color: #0F2D25; font-size: 1.8rem; border-bottom: 2px solid #D46E55; padding-bottom: 0.5rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">
          ${isFR ? 'Questions fréquentes sur le SEO, les sites web et les commissions OTA' : 'Frequently Asked Questions About SEO, Websites, and OTA Commissions'}
        </h2>
        <p style="color: #4a5568; line-height: 1.6; margin-bottom: 1.5rem;">
          ${isFR
            ? "Cette foire aux questions rassemble les réponses pratiques sur le référencement naturel, la création de sites internet pour l'hôtellerie au Maroc et la réduction des commissions prélevées par les plateformes de réservation en ligne. Les réponses détaillent les coûts, les délais de livraison et le fonctionnement opérationnel."
            : "This frequently asked questions section provides factual details regarding search engine optimization, hospitality web design in Morocco, and lowering commission costs from online travel agents. Answers cover typical investment budgets, implementation timelines, property management software integration, and contractual terms without long-term lock-in or hidden licensing fees."}
        </p>
        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
          ${(isFR ? [
            { q: "Comment aidez-vous les riads et hôtels marocains à réduire les commissions des OTA ?", a: "Nous concevons des sites internet haut de gamme et ultra-rapides (dès 12 000 MAD / ≈1 100 €) connectés directement à votre PMS (Cloudbeds, Mews, etc.). Associés à des campagnes Google Ads ciblées (4 000 MAD/mois / ≈370 €/mois de frais de gestion) et du référencement local, nous interceptons les voyageurs avant qu'ils ne réservent sur les plateformes tierces, réduisant la dépendance aux OTA et augmentant vos réservations directes." },
            { q: "Combien de temps faut-il pour qu'une stratégie SEO porte ses fruits ?", a: "Les optimisations techniques de base, l'accélération de la vitesse mobile et le paramétrage Google Business Profile génèrent des résultats visibles sur Google Maps sous 30 à 45 jours. Pour les mots-clés hôteliers très compétitifs (ex: 'riad de luxe marrakech'), l'autorité organique complète s'établit sur un cycle de 4 à 6 semaines d'implémentation suivi de 3 à 6 mois de montée en puissance." },
            { q: "Qu'est-ce qui est inclus dans l'offre de création de site web ?", a: "Chaque projet (12 000 MAD / ≈1 100 € investissement fixe) comprend : design UX sur-mesure de standing, développement performance Jamstack/React (vitesse de chargement optimale), architecture bilingue (français, anglais), raccordement API de votre moteur de réservation et configuration SEO technique intégrale. Livraison sous 4 à 6 semaines, avec garantie de performance sous 90 jours soumise aux [CONDITIONS_GARANTIE]." },
            { q: "Quel levier est le plus efficace : Google Ads ou Meta Ads ?", a: "Google Ads (frais de gestion à 4 000 MAD/mois / ≈370 €/mois) capte les voyageurs ayant une intention d'achat immédiate pour une destination marocaine spécifique. Meta Ads (Instagram/Facebook) excelle dans la mise en valeur visuelle de l'architecture et de l'expérience de votre établissement auprès de cibles qualifiées en Europe ou Amérique du Nord, optimisant le coût d'acquisition de vos réservations." },
            { q: "Pouvez-vous connecter le site web à mon PMS existant ?", a: "Oui, nous intégrons sans couture les moteurs de réservation directe avec les principaux PMS du marché (Cloudbeds, Mews, Little Hotelier, Sirvoy, Opera, etc.) via des API sécurisées. Cela garantit la synchronisation en temps réel de vos tarifs et de vos disponibilités." },
            { q: "Où êtes-vous basés et comment collaborez-vous avec vos clients ?", a: "Urunk dispose de bureaux opérationnels à Marrakech (Guéliz) et à Casablanca (Anfa), assurant une proximité physique pour nos clients au Maroc. Nous collaborons à distance via des points réguliers sur Google Meet et proposons des contrats mensuels flexibles sans engagement abusif avec un préavis de résiliation de 15 jours." },
            { q: "Y a-t-il des frais de configuration pour les campagnes Google, Meta ou TripAdvisor ?", a: "Non, aucun frais de dossier de départ n'est facturé pour nos prestations standard de prise en main mensuelle de vos comptes publicitaires." },
            { q: "Proposez-vous des contrats à engagement de durée minimale ?", a: "Non. Tous nos services récurrents d'optimisation SEO ou de gestion de campagnes publicitaires sont facturés sans engagement forcé à long terme." },
            { q: "Y a-t-il des frais de licence récurrents pour notre site web ?", a: "Non. Nous concevons vos sites web sous des technologies ouvertes dont vous êtes propriétaire à 100 %. Vous ne payez aucun abonnement logiciel de notre part." }
          ] : [
            { q: "How do you help Moroccan riads and hotels reduce OTA commissions?", a: "We build high-performance, ultra-fast direct booking websites (starting at 12,000 MAD / ≈1,100 €) integrated with your Property Management System. Combined with targeted Google Search campaigns (4,000 MAD/month / ≈370 €/month management retainer) and local SEO, we intercept travelers before they book on third-party channels, reducing dependency and increasing your direct bookings." },
            { q: "How long does it take for an SEO strategy to show results?", a: "Technical SEO fixes, page speed optimization, and Google Business Profile updates yield visible local search improvements within 30 to 45 days. Organic authority for competitive search keywords (such as 'luxury riad Marrakech') typically matures over a 4 to 6 week implementation period followed by 3 to 6 months of ongoing growth." },
            { q: "What is included in your website creation package?", a: "Every project (12,000 MAD / ≈1,100 € fixed investment) includes custom luxury user experience design, rapid React performance engineering, bilingual structure (English, French), native booking engine API integration, and complete technical SEO. We deliver in 4 to 6 weeks, backed by our 90-day growth guarantee subject to [CONDITIONS_GARANTIE]." },
            { q: "Which advertising channel is more effective: Google Ads or Meta Ads?", a: "Google Ads (managed at 4,000 MAD/month / ≈370 €/month) capture high-intent travelers actively searching for specific Moroccan destinations. Meta Ads (Instagram and Facebook) excel at showcasing room architecture and amenities to qualified audiences in Europe and North America, optimizing your direct inquiry acquisition costs." },
            { q: "Can you connect the website to my existing PMS?", a: "Yes, we seamlessly integrate direct booking engines with leading Property Management Systems including Cloudbeds, Mews, Little Hotelier, Sirvoy, and Opera via secure API connections. This ensures real-time rate synchronization and availability." },
            { q: "Where is Urunk located and how do you work with clients?", a: "Urunk maintains operational offices in Marrakech (Gueliz) and Casablanca (Anfa) for local presence in Morocco. We collaborate via remote consultations on Google Meet and offer flexible monthly agreements with a 15-day notice policy." },
            { q: "Are there setup fees for Google, Meta, or TripAdvisor campaigns?", a: "No, we charge zero setup fees for standard onboarding of your monthly advertising accounts." },
            { q: "Do you require long-term contracts?", a: "No. All our recurring SEO and ad management services are billed on a monthly basis without long-term commitments." },
            { q: "Are there recurring license fees for our website?", a: "No. We build websites using open-source platforms that you own 100%. There are no recurring software fees or monthly licensing costs from our end." }
          ]).map(item => `
            <div style="padding: 1.25rem; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
              <h3 style="color: #0F2D25; font-size: 1.1rem; margin-top: 0; margin-bottom: 0.5rem; font-family: Georgia, serif;">${escapeHtml(item.q)}</h3>
              <p style="margin: 0; color: #4a5568; font-size: 0.95rem; line-height: 1.6;">${escapeHtml(item.a)}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  } else if (page.path === '/services' || page.path === '/en/services') {
    // SERVICES DIRECTORY
    html += `
      <h1 style="font-size: 2.75rem; color: #0F2D25; margin-bottom: 1.5rem; font-family: Georgia, serif;">${isFR ? 'Nos Services de Croissance Hôtelière & Digitale' : 'Our Digital Marketing & Hospitality Services'}</h1>
      <p style="font-size: 1.15rem; margin-bottom: 2.5rem; color: #4a5568; line-height: 1.6;">${escapeHtml(page.description)}</p>
      <div style="display: grid; grid-template-columns: 1fr; gap: 2rem;">
    `;
    for (const mapping of serviceRouteMapping) {
      const sData = servicesData[mapping.key];
      if (sData) {
        const item = isFR ? sData.fr : sData.en;
        const href = isFR ? mapping.frPath : mapping.enPath;
        html += `
          <div style="padding: 2rem; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
            <h2 style="margin: 0 0 0.75rem 0; font-size: 1.6rem; font-family: Georgia, serif;"><a href="${href}" style="color: #0F2D25; text-decoration: none;">${escapeHtml(item.title)}</a></h2>
            <p style="margin: 0 0 1.25rem 0; color: #4a5568; font-size: 1rem; line-height: 1.6;">${escapeHtml(item.heroSub || item.description)}</p>
            <div style="display: flex; gap: 1rem; align-items: center;">
              <a href="${href}" style="color: #D46E55; font-weight: bold; text-decoration: underline;">${isFR ? 'Découvrir la solution' : 'Explore Service Details'} &rarr;</a>
            </div>
          </div>
        `;
      }
    }
    html += `</div>`;
  } else if (serviceMapping && servicesData[serviceMapping.key]) {
    // INDIVIDUAL SERVICE PAGE
    const sData = servicesData[serviceMapping.key];
    const item = isFR ? sData.fr : sData.en;
    const serviceName = item.heroTitle;
    
    // Custom 5-item deliverables and property fit based on key
    const deliverablesMap: Record<string, { en: string[]; fr: string[] }> = {
      'hotel-website-design': {
        en: [
          'Bespoke mobile-first WordPress architecture engineered for under 1.5s load speeds',
          'Direct integration with hotel PMS engines (Cloudbeds, Mews, Amenitiz, BookingButton)',
          'High-converting room gallery layouts and commission-free booking flow',
          'Multilingual content structure (English, French, Arabic, Spanish)',
          'Complete SEO technical schema markup and Core Web Vitals optimization'
        ],
        fr: [
          'Architecture WordPress sur-mesure mobile-first optimisée pour un chargement sous 1.5s',
          'Intégration directe avec moteurs PMS hôteliers (Cloudbeds, Mews, Amenitiz, BookingButton)',
          'Galeries de chambres à haute conversion et tunnel de réservation sans commission',
          'Structure de contenu multilingue (Français, Anglais, Arabe, Espagnol)',
          'Balisage de données structurées SEO et optimisation Core Web Vitals'
        ]
      },
      'google-ads-morocco': {
        en: [
          'High-intent Google Search campaigns targeting active travel searchers',
          'Google Hotel Ads / Free Booking Links campaign setup and bidding strategy',
          'Negative keyword lists blocking low-intent search traffic and OTA bidding',
          'Geo-targeted campaigns focused on European and North American feeder markets',
          'Real-time conversion tracking integrated with your PMS engine'
        ],
        fr: [
          'Campagnes Google Search haute intention ciblant les voyageurs actifs',
          'Configuration Google Hotel Ads & Liens de Réservation Gratuits',
          'Listes de mots-clés négatifs bloquant les requêtes hors-cible et enchères OTA',
          'Ciblage géographique optimisé sur les marchés émetteurs européens et américains',
          'Suivi des conversions en temps réel connecté à votre moteur PMS'
        ]
      },
      'hotel-digital-marketing': {
        en: [
          'High-converting Instagram and Facebook video & carousel ad creatives',
          'Custom audience retargeting for travelers who visited your site without booking',
          'Lookalike audience modeling based on your highest-value past guest list',
          'A/B testing of room offer headlines, seasonal packages, and call-to-action buttons',
          'Monthly transparent reporting tracking Cost Per Acquisition (CPA) and ROI'
        ],
        fr: [
          'Créations publicitaires vidéo et carrousels Instagram & Facebook à haute conversion',
          'Retargeting d\'audience ciblé pour les visiteurs du site n\'ayant pas finalisé la réservation',
          'Modélisation d\'audiences similaires basées sur vos meilleurs clients historiques',
          'Tests A/B sur les titres d\'offres, forfaits saisonniers et boutons d\'action',
          'Rapports mensuels transparents mesurant le coût par acquisition (CPA) et le ROI'
        ]
      }
    };

    const defaultDeliverablesEN = [
      'Custom strategic audit evaluating current channel booking leakage',
      'Targeted campaign setup engineered to bypass 15–25% OTA commission fees',
      'High-speed landing page architecture built for maximum conversion',
      'Seamless PMS and booking engine API connections',
      'Dedicated monthly account optimization backed by our 90-day guarantee'
    ];
    const defaultDeliverablesFR = [
      'Audit stratégique personnalisé évaluant les fuites de réservations directes',
      'Configuration de campagne conçue pour contourner les commissions OTA de 15–25%',
      'Architecture de page d\'atterrissage haute vitesse optimisée pour la conversion',
      'Connexions API fluides avec votre moteur de réservation et PMS',
      'Optimisation mensuelle dédiée couverte par notre garantie de 90 jours'
    ];

    const delivs = (deliverablesMap[serviceMapping.key] && deliverablesMap[serviceMapping.key][isFR ? 'fr' : 'en']) || (isFR ? defaultDeliverablesFR : defaultDeliverablesEN);

    const fitMap: Record<string, { en: string; fr: string }> = {
      'hotel-website-design': {
        en: 'Best for 10–50 room boutique riads, luxury desert camps, and independent resorts currently losing 15–25% of room revenue to Booking.com or Airbnb due to a slow, outdated website.',
        fr: 'Idéal pour les riads de 10 à 50 chambres, camps de luxe dans le désert et hôtels indépendants perdant 15 à 25% de chiffre d\'affaires en commissions OTA.'
      },
      'google-ads-morocco': {
        en: 'Best for established luxury properties in Marrakech, Casablanca, or Agadir looking to capture travelers actively searching for "luxury riad Marrakech" or "best hotel Casablanca".',
        fr: 'Parfait pour les établissements d\'exception à Marrakech, Casablanca ou Agadir souhaitant capter les voyageurs recherchant activement un séjour sur Google.'
      },
      'hotel-digital-marketing': {
        en: 'Best for visual luxury properties, wellness retreats, and boutique stays aiming to build a strong brand presence and retarget high-intent travelers on Instagram and Facebook.',
        fr: 'Recommandé pour les établissements de prestige, retraits bien-être et riads de charme souhaitant engager les voyageurs visuels sur Instagram et Facebook.'
      }
    };

    const propertyFit = (fitMap[serviceMapping.key] && fitMap[serviceMapping.key][isFR ? 'fr' : 'en']) || (isFR ? 'Idéal pour les hôtels indépendants et riads au Maroc souhaitant développer leurs réservations directes et réduire leur dépendance aux intermédiaires.' : 'Best for independent hotels, boutique riads, and tourism operators across Morocco aiming to build commission-free direct booking channels.');

    html += `
      <article>
        <header style="margin-bottom: 2.5rem;">
          <p style="font-size: 0.9rem; color: #718096; margin-bottom: 0.5rem;"><a href="${isFR ? '/' : '/en'}" style="color: #718096; text-decoration: none;">${isFR ? 'Accueil' : 'Home'}</a> &gt; <a href="${isFR ? '/services' : '/en/services'}" style="color: #718096; text-decoration: none;">Services</a> &gt; ${escapeHtml(item.heroTitle)}</p>
          <h1 style="font-size: 2.75rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">${escapeHtml(item.heroTitle)}</h1>
          <p style="font-size: 1.2rem; color: #4a5568; line-height: 1.6; margin-bottom: 1.5rem;">
            ${escapeHtml(item.heroSub)}
          </p>
          <aside style="background: #FAF8F5; border-left: 4px solid #D46E55; padding: 1.25rem 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 2rem;">
            <strong style="color: #0F2D25; font-size: 1.05rem;">${escapeHtml(item.calloutTitle)}:</strong>
            <p style="margin: 0.5rem 0 0 0; color: #4a5568;">${escapeHtml(item.calloutBody)}</p>
          </aside>
        </header>

        <section class="page-specific-deliverables" style="margin-bottom: 3rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 2rem;">
          <h2 style="color: #0F2D25; font-size: 1.8rem; margin-top: 0; margin-bottom: 1rem; font-family: Georgia, serif;">${isFR ? `Ce Que Vous Obtenez Avec ${escapeHtml(serviceName)}` : `What You Get With ${escapeHtml(serviceName)}`}</h2>
          <ul style="padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; color: #4a5568; margin-bottom: 2rem; font-size: 1.05rem; line-height: 1.6;">
            ${delivs.map(d => `<li>${escapeHtml(d)}</li>`).join('')}
          </ul>

          <h2 style="color: #0F2D25; font-size: 1.6rem; margin-top: 1.5rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? `Est-ce que ${escapeHtml(serviceName)} Convient à Votre Établissement ?` : `Is ${escapeHtml(serviceName)} Right For Your Property?`}</h2>
          <p style="margin: 0; color: #4a5568; font-size: 1.05rem; line-height: 1.7; background: #FAF8F5; padding: 1.25rem; border-radius: 8px;">
            ${escapeHtml(propertyFit)}
          </p>
        </section>

        <section style="margin-bottom: 3rem;">
          <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1rem; font-family: Georgia, serif;">${escapeHtml(item.problemTitle)}</h2>
          <p style="margin-bottom: 1rem; color: #4a5568;">${escapeHtml(item.problemText1)}</p>
          <p style="margin-bottom: 1.5rem; color: #4a5568;">${escapeHtml(item.problemText2)}</p>
          
          <h3 style="color: #0F2D25; font-size: 1.3rem; margin-bottom: 0.75rem;">${escapeHtml(item.signsTitle)}</h3>
          <ul style="padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; color: #4a5568; margin-bottom: 2rem;">
            ${item.signs.map(s => `<li>${escapeHtml(s)}</li>`).join('')}
          </ul>
        </section>

        <section style="margin-bottom: 3rem;">
          <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1.5rem; font-family: Georgia, serif;">${escapeHtml(item.featuresTitle)}</h2>
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            ${item.features.map((f, idx) => `
              <div style="padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 8px; background: #ffffff;">
                <h3 style="color: #0F2D25; font-size: 1.3rem; margin-top: 0; margin-bottom: 0.5rem;">0${idx + 1}. ${escapeHtml(f.title)}</h3>
                <p style="margin: 0; color: #4a5568; line-height: 1.6;">${escapeHtml(f.desc)}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <section style="margin-bottom: 3rem;">
          <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1.5rem; font-family: Georgia, serif;">${escapeHtml(item.processTitle)}</h2>
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            ${item.processSteps.map(ps => `
              <div style="padding: 1.25rem; border-left: 3px solid #0F2D25; background: #FAF8F5;">
                <h3 style="color: #0F2D25; font-size: 1.2rem; margin: 0 0 0.35rem 0;">Phase ${ps.step}: ${escapeHtml(ps.title)}</h3>
                <p style="margin: 0; color: #4a5568;">${escapeHtml(ps.desc)}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <section style="margin-bottom: 3rem; background: #0F2D25; color: white; padding: 2rem; border-radius: 12px; text-align: center;">
          <h2 style="color: white; font-size: 1.8rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? 'Tarif & Accompagnement' : 'Transparent Investment Scope'}</h2>
          <p style="font-size: 2rem; font-weight: bold; color: #D46E55; margin-bottom: 0.5rem;">${escapeHtml(item.investmentPrice)}</p>
          <p style="color: #e2e8f0; max-width: 600px; margin: 0 auto 1.5rem auto;">${escapeHtml(item.investmentDesc)}</p>
          <a href="${isFR ? '/contact' : '/en/contact'}" style="display: inline-block; background: #D46E55; color: white; padding: 0.85rem 2rem; border-radius: 8px; text-decoration: none; font-weight: bold;">
            ${isFR ? 'Démarrer Votre Projet' : 'Get Started with Urunk'}
          </a>
        </section>

        <section style="margin-bottom: 3rem;">
          <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1.5rem; font-family: Georgia, serif;">${isFR ? 'Questions Fréquemment Posées' : 'Frequently Asked Questions'}</h2>
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            ${item.faqs.map(faq => `
              <div style="padding: 1.25rem; border: 1px solid #e2e8f0; border-radius: 8px;">
                <h3 style="color: #0F2D25; font-size: 1.15rem; margin-top: 0; margin-bottom: 0.5rem;">${escapeHtml(faq.q)}</h3>
                <p style="margin: 0; color: #4a5568; line-height: 1.6;">${escapeHtml(faq.a)}</p>
              </div>
            `).join('')}
          </div>
        </section>
      </article>
    `;
  } else if (page.path.startsWith('/blog/') || page.path.startsWith('/en/blog/')) {
    // INDIVIDUAL BLOG POST
    const slug = page.path.replace(/^\/(?:en\/)?blog\//, '');
    const posts = isFR ? blogPostsFR : blogPostsEN;
    const post = posts.find(p => p.slug === slug);
    
    if (post) {
      html += `
        <article>
          <header style="margin-bottom: 2.5rem;">
            <p style="font-size: 0.9rem; color: #718096; margin-bottom: 0.5rem;"><a href="${isFR ? '/' : '/en'}" style="color: #718096; text-decoration: none;">${isFR ? 'Accueil' : 'Home'}</a> &gt; <a href="${isFR ? '/blog' : '/en/blog'}" style="color: #718096; text-decoration: none;">Blog</a> &gt; ${escapeHtml(post.category)}</p>
            <h1 style="font-size: 2.75rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">${escapeHtml(post.h1 || post.title)}</h1>
            <p style="font-size: 0.95rem; color: #718096; margin-bottom: 1.5rem;">
              <span>${isFR ? 'Par' : 'By'} ${escapeHtml(post.author)}</span> | <span>${escapeHtml(post.date)}</span> | <span>${escapeHtml(post.readTime)}</span>
            </p>
            <p style="font-size: 1.2rem; color: #4a5568; line-height: 1.6; font-style: italic; margin-bottom: 2rem;">
              ${escapeHtml(post.metaDescription)}
            </p>
          </header>

          <section style="margin-bottom: 3rem;" class="blog-content">
            ${post.content}
          </section>

          <section style="margin-bottom: 3rem; background: #FAF8F5; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-top: 0; margin-bottom: 1rem; font-family: Georgia, serif;">${isFR ? 'Indicateurs Clés & Comparatif Sectoriel' : 'Key Metrics & Benchmarks'}</h2>
            <p style="color: #4a5568; margin-bottom: 1.5rem; line-height: 1.6;">
              ${isFR ? 'Aperçu comparatif entre les performances moyennes de l\'industrie hôtelière dépendante des OTA et les résultats mesurés auprès des établissements accompagnés par Urunk :' : 'A performance comparison between industry average hospitality channels dependent on third-party OTAs versus optimized Urunk client channels:'}
            </p>
            <div style="text-align: center; margin-top: 1.5rem;">
              <a href="${isFR ? '/contact' : '/en/contact'}" style="display: inline-block; background: #D46E55; color: white; padding: 0.85rem 2rem; border-radius: 8px; text-decoration: none; font-weight: bold;">
                ${isFR ? 'Demander Votre Diagnostic Gratuit' : 'Request Your Free Diagnostic'}
              </a>
            </div>
          </section>
        </article>
      `;
    }
  } else if (page.path.startsWith('/realisations/') || page.path.startsWith('/en/work/')) {
    // CASE STUDY (WORK / RÉALISATIONS)
    const slug = page.path.replace(/^\/(?:realisations|en\/work)\//, '');
    const study = caseStudies.find(s => s.slug === slug || s.frSlug === slug);
    if (study) {
      const topicName = (isFR ? study.frTopicName : study.topicName) || study.slug;
      const title = (isFR ? study.frTitle : study.title) || study.title;
      const desc = (isFR ? study.frMetaDescription : study.metaDescription) || study.metaDescription;
      const kpis = (isFR ? study.frRecommendedKPIs : study.recommendedKPIs) || [];
      const scenario = isFR ? study.frBusinessScenario || study.businessScenario : study.businessScenario;
      const solution = isFR ? study.frRecommendedStrategy || study.recommendedStrategy : study.recommendedStrategy;

      html += `
        <article>
          <header style="margin-bottom: 2.5rem;">
            <p style="font-size: 0.9rem; color: #718096; margin-bottom: 0.5rem;"><a href="${isFR ? '/' : '/en'}" style="color: #718096; text-decoration: none;">${isFR ? 'Accueil' : 'Home'}</a> &gt; <a href="${isFR ? '/realisations' : '/en/work'}" style="color: #718096; text-decoration: none;">${isFR ? 'Réalisations' : 'Work'}</a> &gt; ${escapeHtml(topicName)}</p>
            <h1 style="font-size: 2.75rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">${escapeHtml(title)}</h1>
            <p style="font-size: 1.15rem; color: #4a5568; line-height: 1.6;">${escapeHtml(desc)}</p>
          </header>

          <section style="margin-bottom: 3rem; background: #FAF8F5; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-top: 0; margin-bottom: 1rem; font-family: Georgia, serif;">${isFR ? 'KPIs & Objectifs Recommandés' : 'Recommended KPIs & Targets'}</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
              ${kpis.map(k => `
                <div style="background: #ffffff; padding: 1.25rem; border-radius: 8px; border: 1px solid #e2e8f0; text-align: center;">
                  <div style="font-size: 1.2rem; font-weight: bold; color: #D46E55;">${escapeHtml(k.metric)}</div>
                  <div style="font-size: 0.9rem; color: #4a5568; margin-top: 0.25rem;">${escapeHtml(k.targetDescription)}</div>
                </div>
              `).join('')}
            </div>
          </section>

          <section style="margin-bottom: 2.5rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1rem; font-family: Georgia, serif;">${isFR ? 'Contexte & Scénario Métier' : 'Business Scenario'}</h2>
            <p style="color: #4a5568; line-height: 1.7; font-size: 1.05rem;">${escapeHtml(scenario)}</p>
          </section>

          <section style="margin-bottom: 2.5rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1rem; font-family: Georgia, serif;">${isFR ? 'Stratégie Recommandée Urunk' : 'Recommended Urunk Strategy'}</h2>
            <p style="color: #4a5568; line-height: 1.7; font-size: 1.05rem;">${escapeHtml(solution)}</p>
          </section>

          <div style="text-align: center; margin-top: 3rem;">
            <a href="${isFR ? '/contact' : '/en/contact'}" style="background: #D46E55; color: white; padding: 0.85rem 2rem; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
              ${isFR ? 'Obtenir des Résultats Similaires' : 'Achieve Similar Results for Your Property'}
            </a>
          </div>
        </article>
      `;
    }
  } else {
    // GENERIC / CORE PAGE FALLBACK
    if (page.path === '/a-propos' || page.path === '/en/about') {
      html += `
        <article>
          <header style="margin-bottom: 2.5rem; text-align: center;">
            <h1 style="font-size: 2.75rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">${escapeHtml(page.title)}</h1>
            <p style="font-size: 1.2rem; color: #4a5568; line-height: 1.6; max-width: 800px; margin: 0 auto;">${escapeHtml(page.description)}</p>
          </header>

          <section style="margin-bottom: 2.5rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1rem; font-family: Georgia, serif;">${isFR ? 'Notre Mission : Libérer les Hôteliers des Intermédiaires' : 'Our Core Mission: Direct Revenue Sovereignty'}</h2>
            <p style="font-size: 1.05rem; line-height: 1.7; color: #4a5568;">
              ${isFR ? 'Nous offrons aux établissements une souveraineté numérique totale en combinant des sites web haut de gamme à tarif fixe (12 000 MAD (approx. 1 100 €)) et des campagnes d\'acquisition directe à haute intention.' : 'We restore property revenue sovereignty through fixed-fee custom web engineering (12,000 MAD (approx. €1,100) one-time build) coupled with high-intent direct acquisition channels.'}
            </p>
          </section>

          <section style="margin-bottom: 2.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 2rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1rem; font-family: Georgia, serif;">${isFR ? 'Principes Opérationnels de Croissance Directe' : 'Hospitality Direct Growth Operating Principles'}</h2>
            <p style="color: #4a5568; line-height: 1.7; margin-bottom: 1rem;">
              ${isFR ? 'Chaque projet géré par Urunk repose sur une structure contractuelle transparente et des normes de livraisons strictes pour garantir une efficacité maximale :' : 'Every client engagement managed by Urunk operates under rigorous engineering standards and clear performance parameters:'}
            </p>
            <ul style="padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; color: #4a5568; line-height: 1.6; margin-bottom: 1.5rem;">
              <li><strong>${isFR ? 'Site Web sur-mesure (12 000 MAD (approx. 1 100 €))' : 'Custom Direct Booking Website (12,000 MAD (approx. €1,100))'}</strong> — ${isFR ? 'Livré sous 4 à 6 semaines, vitesse inférieure à 1,5s et 0% de commission d\'intermédiaire.' : 'Engineered for high-speeds load speed and delivered turnkey in 4–6 weeks with zero commission fees.'}</li>
              <li><strong>${isFR ? 'Gestion Publicitaire Ciblée (4 000 MAD/mois Google/Meta, 3 000 MAD/mois TripAdvisor)' : 'Targeted Ad Acquisition (4,000 MAD/mo Google/Meta, 3,000 MAD/mo TripAdvisor)'}</strong> — ${isFR ? 'Campagnes haute intention apportant +40% de réservations directes et -35% de coût par demande.' : 'High-intent search & paid social marketing delivering +40% direct bookings and -35% cost per inquiry.'}</li>
              <li><strong>${isFR ? 'Garantie Contractuelle de 90 Jours' : 'Contractual 90-Day Performance Guarantee'}</strong> — ${isFR ? 'Engagement formel sur la croissance de vos réservations directes.' : 'Strict 90-day direct revenue guarantee protecting your marketing investment.'}</li>
            </ul>
          </section>

          <div style="text-align: center; margin-top: 2.5rem;">
            <a href="${isFR ? '/contact' : '/en/contact'}" style="background: #D46E55; color: white; padding: 0.85rem 2rem; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
              ${isFR ? 'Demander un Audit Gratuit' : 'Schedule a Strategy Audit'}
            </a>
          </div>
        </article>
      `;
    } else if (page.path === '/tarifs' || page.path === '/en/pricing') {
      html += `
        <article>
          <header style="margin-bottom: 2.5rem; text-align: center;">
            <h1 style="font-size: 2.75rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">${escapeHtml(page.title)}</h1>
            <p style="font-size: 1.2rem; color: #4a5568; line-height: 1.6; max-width: 800px; margin: 0 auto;">${escapeHtml(page.description)}</p>
          </header>

          <section style="margin-bottom: 3rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1.5rem; font-family: Georgia, serif; text-align: center;">${isFR ? 'Comparatif des Investissements & ROI' : 'Investment & ROI Comparison'}</h2>
            <p style="color: #4a5568; line-height: 1.6; margin-bottom: 1.5rem; text-align: center;">
              ${isFR ? 'Découvrez la grille tarifaire transparente Urunk conçue pour générer +40% de réservations directes :' : 'Explore our transparent, commission-free service investment models built to deliver +40% direct bookings:'}
            </p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.95rem;">
              <thead>
                <tr style="background: #0F2D25; color: white;">
                  <th style="padding: 0.85rem; text-align: left; border: 1px solid #0F2D25;">${isFR ? 'Service & Formule' : 'Service & Package'}</th>
                  <th style="padding: 0.85rem; text-align: left; border: 1px solid #0F2D25;">${isFR ? 'Tarif Fixe' : 'Investment Rate'}</th>
                  <th style="padding: 0.85rem; text-align: left; border: 1px solid #0F2D25;">${isFR ? 'Délai de Livraison' : 'Turnaround Time'}</th>
                  <th style="padding: 0.85rem; text-align: left; border: 1px solid #0F2D25;">${isFR ? 'Impact Attendu' : 'Expected ROI Impact'}</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background: #ffffff;">
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; font-weight: bold;">${isFR ? 'Création de Site Web' : 'Custom Hotel Website'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; color: #D46E55; font-weight: bold;">${isFR ? 'À partir de 12 000 MAD (approx. 1 100 €)' : 'Starting at 12,000 MAD (approx. €1,100)'} ${isFR ? '(Paiement unique)' : '(One-Time)'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0;">${isFR ? '4 à 6 semaines' : '4–6 Weeks'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; color: #38a169; font-weight: bold;">${isFR ? '0 % de commission OTA' : '0% OTA Commissions'}</td>
                </tr>
                <tr style="background: #f7fafc;">
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; font-weight: bold;">${isFR ? 'SEO & Référencement Local' : 'SEO & Local Search'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; color: #D46E55; font-weight: bold;">${isFR ? 'À partir de 4 000 MAD/mois (approx. 370 €/mois)' : 'Starting at 4,000 MAD/mo (approx. €370/mo)'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0;">${isFR ? 'Accompagnement continu' : 'Ongoing'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; color: #38a169; font-weight: bold;">${isFR ? 'Visibilité Google Maps' : 'Google Maps Visibility'}</td>
                </tr>
                <tr style="background: #ffffff;">
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; font-weight: bold;">${isFR ? 'Gestion Google Ads' : 'Google Ads Management'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; color: #D46E55; font-weight: bold;">${isFR ? 'À partir de 4 000 MAD/mois (approx. 370 €/mois)' : 'Starting at 4,000 MAD/mo (approx. €370/mo)'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0;">${isFR ? 'Configuration immédiate' : 'Immediate Setup'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; color: #38a169; font-weight: bold;">${isFR ? 'Trafic direct qualifié' : 'High-Intent Guest Traffic'}</td>
                </tr>
                <tr style="background: #f7fafc;">
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; font-weight: bold;">${isFR ? 'Gestion Meta Ads' : 'Meta Ads Management'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; color: #D46E55; font-weight: bold;">${isFR ? 'À partir de 4 000 MAD/mois (approx. 370 €/mois)' : 'Starting at 4,000 MAD/mo (approx. €370/mo)'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0;">${isFR ? 'Configuration immédiate' : 'Immediate Setup'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; color: #38a169; font-weight: bold;">${isFR ? '-35 % de coût par demande' : '-35% Cost Per Inquiry'}</td>
                </tr>
                <tr style="background: #ffffff;">
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; font-weight: bold;">${isFR ? 'Gestion TripAdvisor Ads' : 'TripAdvisor Ads Management'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; color: #D46E55; font-weight: bold;">${isFR ? 'À partir de 3 000 MAD/mois (approx. 280 €/mois)' : 'Starting at 3,000 MAD/mo (approx. €280/mo)'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0;">${isFR ? 'Configuration immédiate' : 'Immediate Setup'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; color: #38a169; font-weight: bold;">${isFR ? '+40 % de réservations directes' : '+40% Direct Bookings'}</td>
                </tr>
              </tbody>
            </table>

            <div style="background: #FAF8F5; border: 2px solid #0F2D25; border-radius: 12px; padding: 2rem; margin-top: 2rem;">
              <h3 style="color: #0F2D25; font-size: 1.5rem; margin-top: 0; margin-bottom: 0.5rem; font-family: Georgia, serif;">${isFR ? 'Engagez-vous en Toute Sérénité : Garantie de 90 Jours' : 'Backed by Our 90-Day Guarantee'}</h3>
              <p style="color: #4a5568; line-height: 1.6; margin-bottom: 1rem;">
                ${isFR ? 'Tous nos contrats d\'accompagnement direct sont couverts par une garantie de performance de 90 jours. Nous nous engageons à optimiser continuellement vos canaux pour dépasser vos objectifs de réservation directe.' : 'Every website build (12,000 MAD (approx. €1,100)) and ad management program (starting at 3,000 MAD to 4,000 MAD) is backed by our strict 90-day direct revenue guarantee ensuring measurable growth.'}
              </p>
            </div>
          </section>
        </article>
      `;
    } else if (page.path === '/zones' || page.path === '/en/locations') {
      const h1Text = isFR ? "Nos Zones d'Intervention au Maroc" : "Locations We Serve in Morocco";
      const subText = isFR 
        ? "Urunk accompagne les hôtels, riads et entreprises à Casablanca, Marrakech, Rabat, Agadir et partout au Maroc avec le SEO local, l'optimisation Google Business Profile et la création de sites web performants."
        : "Urunk works with hotels, riads and businesses across Casablanca, Marrakech, Rabat, Agadir and all of Morocco, providing local SEO, Google Business Profile optimization and high-performance websites.";
      
      html += `
        <article>
          <header style="margin-bottom: 2.5rem; text-align: center;">
            <h1 style="font-size: 2.75rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">${escapeHtml(h1Text)}</h1>
            <p style="font-size: 1.2rem; color: #4a5568; line-height: 1.6; max-width: 800px; margin: 0 auto;">${escapeHtml(subText)}</p>
          </header>

          <section style="margin-bottom: 3rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1.5rem; font-family: Georgia, serif; text-align: center;">${isFR ? "Pôles Régionaux & Hubs SEO" : "Regional Hubs & SEO Coverage"}</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
              <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 1.5rem; border-radius: 8px;">
                <h3 style="color: #0F2D25; margin-top: 0;"><a href="${isFR ? '/zones/maroc' : '/en/locations/morocco'}" style="color: #0F2D25; text-decoration: none;">${isFR ? 'Maroc (Hub National)' : 'Morocco (National Hub)'}</a></h3>
                <p style="color: #4a5568; font-size: 0.95rem;">${isFR ? 'Stratégies d\'acquisition hôtelière et référencement naturel à fort impact.' : 'Nationwide digital growth footprint for hotels and hospitality brands.'}</p>
              </div>
              <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 1.5rem; border-radius: 8px;">
                <h3 style="color: #0F2D25; margin-top: 0;"><a href="${isFR ? '/zones/casablanca' : '/en/locations/casablanca'}" style="color: #0F2D25; text-decoration: none;">Casablanca</a></h3>
                <p style="color: #4a5568; font-size: 0.95rem;">${isFR ? 'Capitale économique, SEO local B2B et création de portails d\'entreprises.' : 'Commercial capital, B2B local SEO, corporate web design & Google Maps.'}</p>
              </div>
              <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 1.5rem; border-radius: 8px;">
                <h3 style="color: #0F2D25; margin-top: 0;"><a href="${isFR ? '/zones/marrakech' : '/en/locations/marrakech'}" style="color: #0F2D25; text-decoration: none;">Marrakech</a></h3>
                <p style="color: #4a5568; font-size: 0.95rem;">${isFR ? 'Référencement de riads en Médina, visibilité Google Maps et réservation directe.' : 'Medina boutique Riad SEO, Google Maps 3-Pack, direct booking sites.'}</p>
              </div>
              <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 1.5rem; border-radius: 8px;">
                <h3 style="color: #0F2D25; margin-top: 0;"><a href="${isFR ? '/zones/rabat' : '/en/locations/rabat'}" style="color: #0F2D25; text-decoration: none;">Rabat</a></h3>
                <p style="color: #4a5568; font-size: 0.95rem;">${isFR ? 'Capitale institutionnelle, SEO d\'autorité et création web PME.' : 'Institutional center, corporate authority SEO and web development.'}</p>
              </div>
              <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 1.5rem; border-radius: 8px;">
                <h3 style="color: #0F2D25; margin-top: 0;"><a href="${isFR ? '/zones/agadir' : '/en/locations/agadir'}" style="color: #0F2D25; text-decoration: none;">Agadir</a></h3>
                <p style="color: #4a5568; font-size: 0.95rem;">${isFR ? 'Pôle balnéaire, marketing resorts et SEO surf camps Taghazout.' : 'Coastal resort & surf hub, beachfront hotel marketing & Taghazout SEO.'}</p>
              </div>
            </div>
          </section>

          <div style="text-align: center; margin-top: 2.5rem;">
            <a href="${isFR ? '/contact' : '/en/contact'}" style="background: #D46E55; color: white; padding: 0.85rem 2rem; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
              ${isFR ? 'Obtenir un Audit Gratuit' : 'Get a Free Visibility Audit'}
            </a>
          </div>
        </article>
      `;
    } else if (page.path === '/blog' || page.path === '/en/blog') {
      const posts = isFR ? blogPostsFR : blogPostsEN;
      html += `
        <article>
          <header style="margin-bottom: 2.5rem; text-align: center;">
            <h1 style="font-size: 2.75rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">${escapeHtml(page.title)}</h1>
            <p style="font-size: 1.2rem; color: #4a5568; line-height: 1.6; max-width: 800px; margin: 0 auto;">${escapeHtml(page.description)}</p>
          </header>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
            ${posts.map(p => `
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1.5rem;">
                <span style="font-size: 0.8rem; color: #D46E55; font-weight: bold; text-transform: uppercase;">${escapeHtml(p.category)}</span>
                <h2 style="font-size: 1.25rem; color: #0F2D25; margin: 0.5rem 0 0.75rem 0; line-height: 1.3;"><a href="${isFR ? '/blog/' : '/en/blog/'}${p.slug}" style="color: #0F2D25; text-decoration: none;">${escapeHtml(p.title)}</a></h2>
                <p style="font-size: 0.9rem; color: #4a5568; margin-bottom: 1rem;">${escapeHtml(p.metaDescription)}</p>
                <a href="${isFR ? '/blog/' : '/en/blog/'}${p.slug}" style="color: #D46E55; font-weight: bold; text-decoration: none; font-size: 0.9rem;">${isFR ? 'Lire l\'article →' : 'Read article →'}</a>
              </div>
            `).join('')}
          </div>
        </article>
      `;
    } else if (page.path === '/plan-du-site' || page.path === '/en/sitemap') {
      const posts = isFR ? blogPostsFR : blogPostsEN;
      const sectors = isFR ? [
        { name: 'Hôtels & Resorts', url: '/secteurs/hotels-resorts' },
        { name: 'Riads & Maisons d\'Hôtes', url: '/secteurs/riads-maisons-hotes' },
        { name: 'Tour-Opérateurs', url: '/secteurs/tour-operateurs' },
        { name: 'Restaurants & Traiteurs', url: '/secteurs/restaurants-traiteurs' },
        { name: 'PME & Entreprises B2B', url: '/secteurs/pme-entreprises' }
      ] : [
        { name: 'Hotels & Resorts', url: '/en/industries/hotels-resorts' },
        { name: 'Riads & Boutique Stays', url: '/en/industries/riads-boutique-hotels' },
        { name: 'Tour Operators', url: '/en/industries/tour-operators' },
        { name: 'Restaurants & Catering', url: '/en/industries/restaurants-catering' },
        { name: 'Corporate & SMEs', url: '/en/industries/corporate-smes' }
      ];
      const locations = isFR ? [
        { name: 'Toutes les zones', url: '/zones' },
        { name: 'Maroc (Hub National)', url: '/zones/maroc' },
        { name: 'Casablanca', url: '/zones/casablanca' },
        { name: 'Marrakech', url: '/zones/marrakech' },
        { name: 'Rabat', url: '/zones/rabat' },
        { name: 'Agadir', url: '/zones/agadir' }
      ] : [
        { name: 'All Locations', url: '/en/locations' },
        { name: 'Morocco (National Hub)', url: '/en/locations/morocco' },
        { name: 'Casablanca', url: '/en/locations/casablanca' },
        { name: 'Marrakech', url: '/en/locations/marrakech' },
        { name: 'Rabat', url: '/en/locations/rabat' },
        { name: 'Agadir', url: '/en/locations/agadir' }
      ];
      const services = isFR ? [
        { name: 'Création Site Web', url: '/creation-site-web' },
        { name: 'Agence Web Maroc', url: '/agence-web-maroc' },
        { name: 'Agence Web Casablanca', url: '/agence-web-casablanca' },
        { name: 'Agence SEO Maroc', url: '/agence-seo-maroc' },
        { name: 'SEO Casablanca', url: '/agence-seo-casablanca' },
        { name: 'SEO Hôtelier', url: '/seo-hotel' },
        { name: 'Marketing Digital Hôtelier', url: '/marketing-digital-hotelier' },
        { name: 'Site Web Hôtel', url: '/site-web-hotel' },
        { name: 'Site Web Riad Marrakech', url: '/site-web-riad-marrakech' },
        { name: 'SEO Riad Marrakech', url: '/seo-riad-marrakech' },
        { name: 'Google Ads Maroc', url: '/google-ads-maroc' },
        { name: 'Référencement Local Casablanca', url: '/referencement-local-casablanca' },
        { name: 'Réservation Directe', url: '/reservation-directe' },
        { name: 'IA SEO Optimization', url: '/services/ai-seo-optimization' },
        { name: 'SEO WordPress', url: '/services/wordpress-seo' },
        { name: 'SEO E-commerce', url: '/services/ecommerce-seo' },
        { name: 'Fiche Google Business Profile', url: '/services/google-business-profile' },
        { name: 'SEO Local Maroc', url: '/services/local-seo-morocco' },
        { name: 'Gestion Google Ads', url: '/google-ads-maroc' },
        { name: 'Publicités Meta', url: '/services/gestion-publicites-meta' },
        { name: 'TripAdvisor Ads', url: '/services/tripadvisor-ads' },
        { name: 'Pack Réservation Directe', url: '/services/bundle-site-ads' }
      ] : [
        { name: 'Website Design', url: '/en/services/website-design' },
        { name: 'Web Design Morocco', url: '/en/web-design-morocco' },
        { name: 'Web Design Casablanca', url: '/en/web-design-casablanca' },
        { name: 'SEO Agency Morocco', url: '/en/seo-agency-morocco' },
        { name: 'SEO Morocco', url: '/en/seo-agency-morocco' },
        { name: 'SEO Agency Casablanca', url: '/en/seo-agency-casablanca' },
        { name: 'Hotel SEO', url: '/en/hotel-seo' },
        { name: 'Hotel Digital Marketing', url: '/en/hotel-digital-marketing' },
        { name: 'Hotel Website Design', url: '/en/hotel-website-design' },
        { name: 'Riad Website Design Marrakech', url: '/en/riad-website-design-marrakech' },
        { name: 'Riad SEO Marrakech', url: '/en/riad-seo-marrakech' },
        { name: 'Google Ads Morocco', url: '/en/google-ads-morocco' },
        { name: 'Local SEO Casablanca', url: '/en/local-seo-casablanca' },
        { name: 'Direct Booking Strategy', url: '/en/direct-booking' },
        { name: 'AI SEO Optimization', url: '/en/services/ai-seo-optimization' },
        { name: 'WordPress SEO', url: '/en/services/wordpress-seo' },
        { name: 'E-commerce SEO', url: '/en/services/ecommerce-seo' },
        { name: 'Google Business Profile', url: '/en/services/google-business-profile' },
        { name: 'Local SEO Morocco', url: '/en/services/local-seo-morocco' },
        { name: 'Google Ads Management', url: '/en/services/google-ads' },
        { name: 'Meta Ads Management', url: '/en/services/meta-ads' },
        { name: 'TripAdvisor Ads', url: '/en/services/tripadvisor-ads' },
        { name: 'Direct Booking Bundle', url: '/en/services/bundle-site-ads' }
      ];

      html += `
        <article>
          <header style="margin-bottom: 2.5rem; text-align: center;">
            <h1 style="font-size: 2.75rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">${escapeHtml(page.title)}</h1>
            <p style="font-size: 1.2rem; color: #4a5568; line-height: 1.6; max-width: 800px; margin: 0 auto;">${escapeHtml(page.description)}</p>
          </header>

          <section style="margin-bottom: 3rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; border-bottom: 2px solid #D46E55; padding-bottom: 0.5rem; margin-bottom: 1rem; font-family: Georgia, serif;">${isFR ? 'Services & Spécialités' : 'Services & Specializations'}</h2>
            <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.75rem; list-style: none; padding: 0;">
              ${services.map(s => `<li><a href="${s.url}" style="color: #0F2D25; text-decoration: none; font-weight: 500;">${escapeHtml(s.name)}</a></li>`).join('')}
            </ul>
          </section>

          <section style="margin-bottom: 3rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; border-bottom: 2px solid #D46E55; padding-bottom: 0.5rem; margin-bottom: 1rem; font-family: Georgia, serif;">${isFR ? 'Secteurs d\'Activité' : 'Industries Served'}</h2>
            <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.75rem; list-style: none; padding: 0;">
              ${sectors.map(s => `<li><a href="${s.url}" style="color: #0F2D25; text-decoration: none; font-weight: 500;">${escapeHtml(s.name)}</a></li>`).join('')}
            </ul>
          </section>

          <section style="margin-bottom: 3rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; border-bottom: 2px solid #D46E55; padding-bottom: 0.5rem; margin-bottom: 1rem; font-family: Georgia, serif;">${isFR ? 'Zones & Hubs Régionaux' : 'Locations & Regional Hubs'}</h2>
            <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.75rem; list-style: none; padding: 0;">
              ${locations.map(l => `<li><a href="${l.url}" style="color: #0F2D25; text-decoration: none; font-weight: 500;">${escapeHtml(l.name)}</a></li>`).join('')}
            </ul>
          </section>

          <section style="margin-bottom: 3rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; border-bottom: 2px solid #D46E55; padding-bottom: 0.5rem; margin-bottom: 1rem; font-family: Georgia, serif;">${isFR ? 'Articles de Blog & Guides' : 'Blog Articles & Resources'}</h2>
            <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 0.75rem; list-style: none; padding: 0;">
              ${posts.map(p => `<li><a href="${isFR ? '/blog/' : '/en/blog/'}${p.slug}" style="color: #0F2D25; text-decoration: none;">${escapeHtml(p.title)}</a></li>`).join('')}
            </ul>
          </section>
        </article>
      `;
    } else if (page.path === '/faq' || page.path === '/en/faq') {
      const faqItems = isFR ? [
        {
          q: "Travaillez-vous uniquement avec des hôtels et riads ?",
          a: "Non. Bien que notre spécialisation de cœur réside dans l'hôtellerie marocaine (hôtels, riads, maisons d'hôtes et voyagistes), Urunk opère en tant qu'agence de croissance digitale globale au Maroc. Nous concevons des plateformes web performantes, mettons en œuvre un SEO local avancé et pilotons des campagnes d'acquisition pour les PME, les professions libérales et les marques internationales."
        },
        {
          q: "Prenez-vous une commission sur les leads ou les ventes générées ?",
          a: "Non. Contrairement aux intermédiaires (comme Booking.com ou d'autres plateformes d'acquisition tierces), nous croyons que vous devez conserver l'intégralité de vos revenus directs. Nous concevons des systèmes d'acquisition directe sans commission et appliquons des tarifs fixes transparents pour la création de sites web et la gestion des campagnes d'acquisition digitale."
        },
        {
          q: "Combien de temps faut-il pour concevoir un site internet sur-mesure ?",
          a: "Notre méthodologie de développement axée sur la performance exige généralement entre 4 et 6 semaines pour concevoir un site web sur-mesure complet, optimisé de bout en bout pour les Core Web Vitals et s'affichant sous la barre des 1,5 seconde."
        },
        {
          q: "Pouvez-vous connecter mon moteur de réservation ou mon CRM ?",
          a: "Absolument. Nous réalisons des intégrations complexes et transparentes avec tous les moteurs de réservation hôtelière (PMS comme Cloudbeds, Mews, SiteMinder), ainsi qu'avec des outils de capture de prospects, des plateformes e-commerce et des solutions de paiement locales (comme le CMI pour le marché marocain)."
        },
        {
          q: "Quel budget publicitaire est nécessaire pour lancer des campagnes ?",
          a: "Pour garantir la pertinence de nos canaux d'acquisition payants à fort ROI (Google Ads, Meta Ads), nous recommandons un budget média de départ d'environ 3 000 à 5 000 MAD par mois, réglé directement auprès des régies. Cela permet de collecter les données nécessaires pour optimiser le référencement local et optimiser vos fiches Google Maps."
        },
        {
          q: "Qui est propriétaire du site internet et des comptes publicitaires ?",
          a: "Vous, à 100 %. Dès le déploiement final et le règlement des prestations, la propriété intellectuelle et les accès administrateurs exclusifs de votre site internet vous reviennent entièrement. Les comptes publicitaires sont gérés de manière transparente en votre nom, sans aucune rétention de propriété de notre part."
        },
        {
          q: "Y a-t-il un engagement à long terme pour la gestion de l'acquisition digitale ?",
          a: "Non. Pour vous assurer une totale flexibilité commerciale, nos contrats d'acquisition s'opèrent sur une base mensuelle sans engagement forcé à long terme. Un préavis de 15 jours suffit pour suspendre ou réajuster les budgets de vos campagnes."
        }
      ] : [
        {
          q: "What is the cost and timeline for a hotel website?",
          a: "A custom direct booking hotel website costs a fixed 12,000 MAD (approx. €1,100) with a turnkey delivery time of 4–6 weeks. The scope includes mobile-first engineering, full SEO schema, and seamless PMS engine integration."
        },
        {
          q: "How much can we save on OTA commission fees?",
          a: "OTAs charge between 15% and 25% commission per room booking. By capturing reservations through your own website, our clients achieve +40% direct bookings and -35% cost per inquiry."
        },
        {
          q: "What are your ad campaign management packages?",
          a: "Our monthly ad management packages are 4,000 MAD/mo (approx. €370/mo) for Google Ads, 4,000 MAD/mo (approx. €370/mo) for Meta Ads, and 3,000 MAD/mo (approx. €280/mo) for TripAdvisor Ads, backed by our 90-day guarantee."
        },
        {
          q: "Which PMS engines and booking systems do you integrate?",
          a: "We connect with all major hotel management systems including Cloudbeds, Mews, Amenitiz, BookingButton, and D-Edge to enable seamless direct guest bookings."
        },
        {
          q: "How does the 90-day direct revenue guarantee work?",
          a: "If your direct booking volume does not meet project target benchmarks within 90 days of live launch, we continue optimizing your channels with zero additional management fees until target benchmarks are reached."
        },
        {
          q: "Do we retain full ownership of our website and ad accounts?",
          a: "Yes, absolutely. You retain 100% full ownership of your domain name, custom website source code, Google Ads accounts, Meta Ad accounts, and guest databases."
        },
        {
          q: "How do you support multi-language direct booking sites?",
          a: "All our hospitality websites feature dynamic multi-language architecture with native hreflang SEO markup, ensuring max organic capture across international English, French, Spanish, and European guest segments."
        },
        {
          q: "Do you offer a pre-project site audit before engagement?",
          a: "Yes, we provide a free 24–48 hour direct channel diagnostic quantifying your 15–25% OTA commission leakage, mobile UX bottlenecks, and target Google Search volume."
        }
      ];

      html += `
        <article>
          <header style="margin-bottom: 2.5rem; text-align: center;">
            <h1 style="font-size: 2.75rem; color: #0F2D25; margin-bottom: 1rem; font-family: Georgia, serif;">
              ${isFR ? 'Foire Aux Questions (FAQ) | Urunk' : 'Frequently Asked Questions (FAQ) | Urunk'}
            </h1>
            <p style="font-size: 1.2rem; color: #4a5568; line-height: 1.6; max-width: 800px; margin: 0 auto;">
              ${escapeHtml(page.description)}
            </p>
          </header>

          <section style="margin-bottom: 3rem;">
            <h2 style="color: #0F2D25; font-size: 2rem; border-bottom: 2px solid #D46E55; padding-bottom: 0.5rem; margin-bottom: 1.5rem; font-family: Georgia, serif;">
              ${isFR ? 'Réponses directes' : 'Direct answers'}
            </h2>
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
              ${faqItems.map(item => `
                <div style="padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
                  <h3 style="color: #0F2D25; font-size: 1.25rem; margin-top: 0; margin-bottom: 0.75rem; font-family: Georgia, serif;">${escapeHtml(item.q)}</h3>
                  <p style="margin: 0; color: #4a5568; line-height: 1.6;">${escapeHtml(item.a)}</p>
                </div>
              `).join('')}
            </div>
          </section>
        </article>
      `;
    } else {
      // Standard static content
      html += `
        <article>
          <header style="margin-bottom: 2.5rem;">
            <h1 style="font-size: 2.5rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">${escapeHtml(page.title)}</h1>
            <p style="font-size: 1.15rem; color: #4a5568; line-height: 1.6;">${escapeHtml(page.description)}</p>
          </header>

          <section style="margin-bottom: 2.5rem;">
            <p style="font-size: 1.05rem; line-height: 1.7; color: #4a5568;">
              ${isFR ? 'Bienvenue sur la plateforme Urunk. Notre agence accompagne les établissements hôteliers, riads et entreprises au Maroc pour développer leur visibilité et leurs réservations directes sans commissions d\'intermédiaires.' : 'Welcome to Urunk. Our digital growth agency helps boutique hotels, riads, and businesses across Morocco scale search visibility and secure direct guest bookings without intermediary commission fees.'}
            </p>
          </section>
        </article>
      `;
    }
  }

  html += `
      </main>
      <footer style="margin-top: 4rem; padding: 2rem; border-top: 1px solid #e2e8f0; font-size: 0.9rem; color: #718096; max-width: 1100px; margin-left: auto; margin-right: auto; font-family: sans-serif;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
          <div>
            <h4 style="color: #0F2D25; margin-top: 0; margin-bottom: 0.75rem; font-size: 0.95rem;">URUNK</h4>
            <p style="font-size: 0.85rem; color: #4a5568; line-height: 1.5;">${isFR ? "Agence spécialisée en création web, SEO et publicité digitale au Maroc." : "Specialized web design, SEO and digital marketing agency in Morocco."}</p>
          </div>
          <div>
            <h4 style="color: #0F2D25; margin-top: 0; margin-bottom: 0.75rem; font-size: 0.95rem;">${isFR ? 'Secteurs' : 'Industries'}</h4>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; display: flex; flex-direction: column; gap: 0.4rem;">
              <li><a href="${isFR ? '/secteurs/hotels-resorts' : '/en/industries/hotels-resorts'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Hôtels & Resorts' : 'Hotels & Resorts'}</a></li>
              <li><a href="${isFR ? '/secteurs/riads-maisons-hotes' : '/en/industries/riads-boutique-hotels'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Riads & Maisons d\'Hôtes' : 'Riads & Boutique Stays'}</a></li>
              <li><a href="${isFR ? '/secteurs/tour-operateurs' : '/en/industries/tour-operators'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Tour-Opérateurs' : 'Tour Operators'}</a></li>
              <li><a href="${isFR ? '/secteurs/restaurants-traiteurs' : '/en/industries/restaurants-catering'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Restaurants & Traiteurs' : 'Restaurants & Catering'}</a></li>
            </ul>
          </div>
          <div>
            <h4 style="color: #0F2D25; margin-top: 0; margin-bottom: 0.75rem; font-size: 0.95rem;">${isFR ? 'Zones' : 'Locations'}</h4>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; display: flex; flex-direction: column; gap: 0.4rem;">
              <li><a href="${isFR ? '/zones' : '/en/locations'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Toutes les zones' : 'All Locations'}</a></li>
              <li><a href="${isFR ? '/zones/maroc' : '/en/locations/morocco'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Maroc (Hub)' : 'Morocco Hub'}</a></li>
              <li><a href="${isFR ? '/zones/casablanca' : '/en/locations/casablanca'}" style="color: #4a5568; text-decoration: none;">Casablanca</a></li>
              <li><a href="${isFR ? '/zones/marrakech' : '/en/locations/marrakech'}" style="color: #4a5568; text-decoration: none;">Marrakech</a></li>
            </ul>
          </div>
          <div>
            <h4 style="color: #0F2D25; margin-top: 0; margin-bottom: 0.75rem; font-size: 0.95rem;">${isFR ? 'Navigation' : 'Navigation'}</h4>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; display: flex; flex-direction: column; gap: 0.4rem;">
              <li><a href="${isFR ? '/plan-du-site' : '/en/sitemap'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Plan du Site' : 'Sitemap'}</a></li>
              <li><a href="${isFR ? '/creation-site-web' : '/en/services/website-design'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Création Web' : 'Website Design'}</a></li>
              <li><a href="${isFR ? '/blog' : '/en/blog'}" style="color: #4a5568; text-decoration: none;">Blog</a></li>
              <li><a href="${isFR ? '/realisations' : '/en/work'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Réalisations' : 'Work'}</a></li>
              <li><a href="${isFR ? '/politique-de-confidentialite' : '/en/privacy-policy'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Confidentialité' : 'Privacy'}</a></li>
              <li><a href="${isFR ? '/conditions-generales' : '/en/terms-of-service'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Conditions Générales' : 'Terms of Service'}</a></li>
            </ul>
          </div>
        </div>
        <div style="padding-top: 1.5rem; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <p style="margin: 0;">&copy; 2026 Urunk. ${isFR ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
          <a href="${equivalentPath}" style="color: #D46E55; font-weight: 600; text-decoration: none;">${isFR ? 'Switch to English (EN)' : 'Passer en Français (FR)'}</a>
        </div>
      </footer>
    </div>
  `;
  return html;
}

function prerender() {
  console.log('Starting static metadata pre-rendering for 100% SEO scores...');

  const templatePath = path.join('dist', 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error(`Error: Template index.html not found at ${templatePath}. Build the app first.`);
    process.exit(1);
  }

  const rawViteTemplate = fs.readFileSync(templatePath, 'utf8');
  const baseTemplate = rawViteTemplate
    .replace(/<title[^>]*>.*?<\/title>\s*/gi, '')
    .replace(/<meta[^>]*name="description"[^>]*>\s*/gi, '')
    .replace(/<link rel="canonical"[\s\S]*?\/>\s*/gi, '')
    .replace(/<link rel="alternate"[\s\S]*?\/>\s*/gi, '')
    .replace(/<meta\s+property="og:[^"]*"[\s\S]*?\/>\s*/gi, '')
    .replace(/<meta\s+name="twitter:[^"]*"[\s\S]*?\/>\s*/gi, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi, '')
    .replace(/<meta[^>]*name="robots"[^>]*>\s*/gi, '')
    .replace(/<!-- Open Graph Tags -->\s*/gi, '')
    .replace(/<!-- Twitter Card Tags -->\s*/gi, '');
  const allPages: PageMetadata[] = [...staticPages];

  // 2. Add dynamic service pages (skip if path already exists in staticPages)
  for (const mapping of serviceRouteMapping) {
    const data = servicesData[mapping.key];
    if (data) {
      const customTitle = customServiceTitles[mapping.key];
      if (!allPages.some(p => p.path === mapping.enPath)) {
        allPages.push({
          path: mapping.enPath,
          lang: 'en',
          title: customTitle ? customTitle.en : data.en.title,
          description: data.en.description
        });
      }
      if (!allPages.some(p => p.path === mapping.frPath)) {
        allPages.push({
          path: mapping.frPath,
          lang: 'fr',
          title: customTitle ? customTitle.fr : data.fr.title,
          description: data.fr.description
        });
      }
    }
  }

  // 3. Add dynamic English Blog pages (/en/blog/:slug)
  for (const post of blogPostsEN) {
    allPages.push({
      path: `/en/blog/${post.slug}`,
      lang: 'en',
      title: generateShortTitle(post.title, 'en', post.slug),
      description: post.metaDescription
    });
  }

  // 4. Add dynamic French Blog pages (/blog/:slug)
  for (const post of blogPostsFR) {
    allPages.push({
      path: `/blog/${post.slug}`,
      lang: 'fr',
      title: generateShortTitle(post.title, 'fr', post.slug),
      description: post.metaDescription
    });
  }

  // 5. Add dynamic case studies (/en/work/:slug and /realisations/:frSlug)
  for (const study of caseStudies) {
    const enTitle = study.seoTitle || `${study.title} | Urunk`;

    allPages.push({
      path: `/en/work/${study.slug}`,
      lang: 'en',
      title: enTitle,
      description: study.metaDescription
    });

    const frSlug = study.frSlug || study.slug;
    const frTitle = study.frSeoTitle || `${study.frTitle || study.title} | Urunk`;

    allPages.push({
      path: `/realisations/${frSlug}`,
      lang: 'fr',
      title: frTitle,
      description: study.frMetaDescription || study.metaDescription
    });
  }

  // 7. Add Matrix Expertise Pages
  const matrixLocs = ['marrakech', 'casablanca', 'agadir', 'rabat'];
  const matrixInds = ['hotels-resorts', 'riads-boutique-hotels', 'restaurants-catering'];
  const matrixSrvs = ['hotel-seo', 'hotel-website-design', 'google-ads-morocco', 'direct-booking'];

  for (const loc of matrixLocs) {
    for (const ind of matrixInds) {
      for (const srv of matrixSrvs) {
        const indData = industriesData[ind];
        const srvData = servicesData[srv];
        const locData = locationsData[loc];
        if (indData && srvData && locData) {
          // English Matrix Page
          const enTitle = `${srvData.en.title.split('|')[0].trim()} for ${indData.en.title.split('|')[0].replace('Agency', '').trim()} in ${locData.en.title.split('|')[0].split('in ')[1]?.trim() || locData.en.title.split('|')[0].replace('Services in', '').trim()}`;
          const enDesc = `Maximize your reach in ${locData.en.title.split('|')[0].split('in ')[1] || 'Morocco'} with tailored ${srvData.en.title.split('|')[0].toLowerCase()}. Designed specifically for the ${indData.en.title.split('|')[0].toLowerCase()} sector.`;
          allPages.push({
            path: `/en/expertise/${loc}/${ind}/${srv}`,
            lang: 'en',
            title: enTitle,
            description: enDesc
          });

          // French Matrix Page
          const frTitle = `${srvData.fr.title.split('|')[0].trim()} pour ${indData.fr.title.split('|')[0].replace('Agency', '').trim()} à ${locData.fr.title.split('|')[0].split('in ')[1]?.trim() || locData.fr.title.split('|')[0].replace('Services in', '').trim()}`;
          const frDesc = `Optimisez votre visibilité à ${locData.fr.title.split('|')[0].split('in ')[1] || 'Maroc'} avec nos stratégies sur-mesure de ${srvData.fr.title.split('|')[0].toLowerCase()} pour le secteur ${indData.fr.title.split('|')[0].toLowerCase()}.`;
          allPages.push({
            path: `/expertise/${loc}/${ind}/${srv}`,
            lang: 'fr',
            title: frTitle,
            description: frDesc
          });
        }
      }
    }
  }

  // 8. Add Live 2-Tuple Matrix Relations
  for (const rel of matrixRelations) {
    if (rel.status === 'live') {
      const srvData = servicesData[rel.serviceId];
      const locData = rel.locationId ? locationsData[rel.locationId] : undefined;
      const indData = rel.industryId ? industriesData[rel.industryId] : undefined;
      
      const frLocName = locData?.fr?.title.split('|')[0].replace('Agence Web & Marketing Digital', '').replace('Services in', '').trim() || 'Maroc';
      const enLocName = locData?.en?.title.split('|')[0].split('in ')[1]?.trim() || 'Morocco';
      const frIndName = indData?.fr?.title.split('|')[0].replace('Agency', '').trim() || '';
      const enIndName = indData?.en?.title.split('|')[0].replace('Agency', '').trim() || '';

      if (srvData) {
        const frTitle = locData 
          ? `${srvData.fr.title.split('|')[0].trim()} à ${frLocName} : Stratégie & Résultats | Urunk`
          : `${srvData.fr.title.split('|')[0].trim()} pour ${frIndName} au Maroc | Agence Urunk`;
        const frDesc = locData 
          ? `Développez l'acquisition directe et le chiffre d'affaires à ${frLocName} avec notre expertise en ${srvData.fr.title.split('|')[0].toLowerCase()}.`
          : `Optimisez la rentabilité et la visibilité de votre activité dans le secteur ${frIndName} au Maroc.`;
          
        allPages.push({
          path: `/expertise/${rel.slugs.fr.service}/${rel.slugs.fr.target}`,
          lang: 'fr',
          title: frTitle,
          description: frDesc
        });

        const enTitle = locData 
          ? `${srvData.en.title.split('|')[0].trim()} in ${enLocName} | Direct Bookings & SEO | Urunk`
          : `${srvData.en.title.split('|')[0].trim()} for ${enIndName} in Morocco | Urunk Agency`;
        const enDesc = locData 
          ? `Scale direct bookings and high-intent customer acquisition in ${enLocName} with performance-driven ${srvData.en.title.split('|')[0].toLowerCase()}.`
          : `Accelerate customer acquisition and organic search dominance in the ${enIndName} sector in Morocco.`;

        allPages.push({
          path: `/en/expertise/${rel.slugs.en.service}/${rel.slugs.en.target}`,
          lang: 'en',
          title: enTitle,
          description: enDesc
        });
      }
    }
  }

  console.log(`Loaded ${allPages.length} unique pages for pre-rendering.`);

  let successCount = 0;

  function formatDescription(desc: string, lang: string = 'fr'): string {
    let cleaned = desc.replace(/\s+/g, ' ').trim();
    if (cleaned.length <= 155) {
      return cleaned;
    }
    const withinLimit = cleaned.substring(0, 155);
    const sentenceMatches = [...withinLimit.matchAll(/[.!?](\s+|$)/g)];
    if (sentenceMatches.length > 0) {
      const lastMatch = sentenceMatches[sentenceMatches.length - 1];
      const endIdx = (lastMatch.index ?? 0) + 1;
      if (endIdx >= 80) {
        return cleaned.substring(0, endIdx).trim();
      }
    }
    const lastSpace = withinLimit.lastIndexOf(' ');
    if (lastSpace > 80) {
      let str = withinLimit.substring(0, lastSpace).trim();
      str = str.replace(/\b(pour les|pour le|pour la|pour|et|de|des|du|en|au|aux|avec|dans|sur|for|and|the|to|in|at|of|with|a|an)\s*$/i, '').trim();
      if (!str.endsWith('.') && !str.endsWith('!') && !str.endsWith('?')) str += '.';
      return str;
    }
    return withinLimit.trim();
  }

  function formatTitle(title: string): string {
    let cleaned = title.trim();
    if (cleaned.length <= 60) return cleaned;
    let cut = cleaned.substring(0, 57);
    let lastSpace = cut.lastIndexOf(' ');
    if (lastSpace > 40) {
      cut = cut.substring(0, lastSpace);
    }
    return cut + '...';
  }

  for (const page of allPages) {
    // Compute canonical URL
    const canonicalUrl = page.path === '/' ? `${BASE_URL}/` : `${BASE_URL}${page.path}`;
    const pageTitle = formatTitle(page.title);
    const pageDesc = formatDescription(page.description, page.lang);

    // Perform replacements
    let renderedHtml = baseTemplate;

    // A. Replace Lang tag
    renderedHtml = renderedHtml.replace('<html lang="en">', `<html lang="${page.lang}">`);
    renderedHtml = renderedHtml.replace('<html lang="fr">', `<html lang="${page.lang}">`);

    // B. Replace Title tag
    const titleRegex = /<title data-rh="true">.*?<\/title>/;
    const newTitleTag = `<title data-rh="true">${escapeHtml(pageTitle)}</title>`;
    if (titleRegex.test(renderedHtml)) {
      renderedHtml = renderedHtml.replace(titleRegex, newTitleTag);
    } else {
      renderedHtml = renderedHtml.replace('</head>', `    ${newTitleTag}\n  </head>`);
    }

    // C. Replace Description tag
    const descRegex = /<meta name="description" data-rh="true" content=".*?"\s*\/?>/;
    const newDescTag = `<meta name="description" data-rh="true" content="${escapeHtml(pageDesc)}" />`;
    if (descRegex.test(renderedHtml)) {
      renderedHtml = renderedHtml.replace(descRegex, newDescTag);
    } else {
      renderedHtml = renderedHtml.replace('</head>', `    ${newDescTag}\n  </head>`);
    }

    // D. Inject Canonical URL, Hreflangs, Open Graph, Twitter Cards, Meta Robots & JSON-LD
    const enPath = page.lang === 'en' ? page.path : getEquivalentRoute(page.path);
    const frPath = page.lang === 'fr' ? page.path : getEquivalentRoute(page.path);
    const enHref = enPath === '/' ? `${BASE_URL}/en` : `${BASE_URL}${enPath}`;
    const frHref = frPath === '/' ? `${BASE_URL}/` : `${BASE_URL}${frPath}`;

    const isNoIndexPage = page.path === '/en/thank-you' || page.path === '/merci' || page.path === '/404';
    const isBlogPost = page.path.startsWith('/blog/') || page.path.startsWith('/en/blog/');
    const isCommercialService = page.path.startsWith('/services/') || page.path.startsWith('/en/services/');
    const isFaqPage = page.path === '/faq' || page.path === '/en/faq' || page.path === '/tarifs' || page.path === '/en/pricing';
    const isCalculatorPage = page.path.includes('calculator');

    const ogImageUrl = `${BASE_URL}/og-image.jpg`;

    let headTags = `
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="fr" href="${frHref}" />
    <link rel="alternate" hreflang="en" href="${enHref}" />
    <link rel="alternate" hreflang="x-default" href="${frHref}" />
    <meta name="robots" content="${isNoIndexPage ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="${escapeHtml(pageTitle)}" />
    <meta property="og:description" content="${escapeHtml(pageDesc)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="${isBlogPost ? 'article' : 'website'}" />
    <meta property="og:image" content="${ogImageUrl}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="Urunk" />
    <meta property="og:locale" content="${page.lang === 'fr' ? 'fr_FR' : 'en_US'}" />
    <meta property="og:locale:alternate" content="${page.lang === 'fr' ? 'en_US' : 'fr_FR'}" />

    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(pageTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(pageDesc)}" />
    <meta name="twitter:image" content="${ogImageUrl}" />
    `;

    // JSON-LD Schemas Construction
    const schemas: object[] = [];

    if (page.path === '/' || page.path === '/en') {
      schemas.push(
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://urunk.com/#organization",
          "name": "Urunk",
          "url": "https://urunk.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://urunk.com/logo.png"
          },
          "sameAs": [
            "[URL_LINKEDIN]",
            "[URL_FACEBOOK]",
            "[URL_INSTAGRAM]",
            "[URL_TWITTER]"
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "ProfessionalService", "DigitalMarketingAgency"],
          "@id": "https://urunk.com/#localbusiness-casablanca",
          "name": "Urunk Casablanca",
          "url": "https://urunk.com",
          "telephone": "[TELEPHONE]",
          "email": "[EMAIL]",
          "areaServed": "MA",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "[ADRESSE_CASABLANCA_ANFA]",
            "addressLocality": "Casablanca",
            "addressRegion": "Casablanca-Settat",
            "addressCountry": "MA"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "ProfessionalService", "DigitalMarketingAgency"],
          "@id": "https://urunk.com/#localbusiness-marrakech",
          "name": "Urunk Marrakech",
          "url": "https://urunk.com",
          "telephone": "[TELEPHONE]",
          "email": "[EMAIL]",
          "areaServed": "MA",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "[ADRESSE_MARRAKECH_GUELIZ]",
            "addressLocality": "Marrakech",
            "addressRegion": "Marrakech-Safi",
            "addressCountry": "MA"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": page.lang === "fr" ? "Création de Site Web, SEO & Google Ads" : "Web Design, SEO & Google Ads",
          "provider": {
            "@type": "Organization",
            "name": "Urunk",
            "url": "https://urunk.com"
          },
          "areaServed": "MA"
        }
      );
    }

    if (isCommercialService) {
      let schemaDesc = pageDesc;
      if (page.path.includes("website-design") || page.path.includes("creation-site-web")) {
         schemaDesc = page.lang === "fr" ? "Création de site web sur-mesure à 12 000 MAD (approx. 1 100 €), livré en 4 à 6 semaines, conçu pour éliminer les commissions OTA." : "Custom 12,000 MAD (approx. €1,100) direct booking website delivered in 4-6 weeks to eliminate OTA commissions.";
      } else if (page.path.includes("google-ads") || page.path.includes("gestion-google-ads")) {
         schemaDesc = page.lang === "fr" ? "Gestion Google Ads experte à 4 000 MAD/mois (approx. 370 €/mois), avec garantie de performance sous 90 jours [CONDITIONS_GARANTIE] pour maximiser les réservations directes." : "Expert Google Ads management at 4,000 MAD/mo (approx. €370/mo), backed by a 90-day guarantee [CONDITIONS_GARANTIE] to drive direct bookings.";
      } else if (page.path.includes("meta-ads") || page.path.includes("gestion-publicites-meta")) {
         schemaDesc = page.lang === "fr" ? "Gestion Meta Ads experte à 4 000 MAD/mois (approx. 370 €/mois), avec garantie de performance sous 90 jours [CONDITIONS_GARANTIE] pour maximiser les réservations directes." : "Expert Meta Ads management at 4,000 MAD/mo (approx. €370/mo), backed by a 90-day guarantee [CONDITIONS_GARANTIE] to drive direct bookings.";
      } else if (page.path.includes("tripadvisor-ads")) {
         schemaDesc = page.lang === "fr" ? "Gestion TripAdvisor Ads experte à 3 000 MAD/mois (approx. 280 €/mois), avec garantie de performance sous 90 jours [CONDITIONS_GARANTIE] pour convertir les voyageurs en clients directs." : "Expert TripAdvisor Ads management at 3,000 MAD/mo (approx. €280/mo), backed by a 90-day guarantee [CONDITIONS_GARANTIE] to drive direct bookings.";
      } else if (page.path.includes("bundle")) {
         schemaDesc = page.lang === "fr" ? "Architecture digitale complète incluant un site à 12 000 MAD (approx. 1 100 €) (4-6 semaines) et la gestion de campagnes (4 000 MAD/mois (approx. 370 €/mois)) sous garantie de 90 jours [CONDITIONS_GARANTIE]." : "Complete digital architecture including a 12,000 MAD (approx. €1,100) website (4-6 weeks) and campaign management (4,000 MAD/mo (approx. €370/mo)) under a 90-day guarantee [CONDITIONS_GARANTIE].";
      }

      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": pageTitle,
        "provider": {
          "@type": "ProfessionalService",
          "name": "Urunk",
          "url": "https://urunk.com"
        },
        "areaServed": "Morocco",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${pageTitle} Offers`,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": pageTitle,
                "description": schemaDesc
              }
            }
          ]
        }
      });
    }

    if (page.path === '/tarifs' || page.path === '/en/pricing') {
      const isFR = page.lang === 'fr';
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": isFR ? "Tarifs et Packages Urunk" : "Urunk Pricing & Packages",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Urunk",
          "url": "https://urunk.com"
        },
        "areaServed": "Morocco",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": isFR ? "Catalogue d'Offres Urunk" : "Urunk Offers",
          "itemListElement": [
            {
              "@type": "Offer",
              "price": "12000",
              "priceCurrency": "MAD",
              "itemOffered": {
                "@type": "Service",
                "name": isFR ? "Création de Site Web" : "Custom Hotel Website",
                "description": isFR ? "Création de site web sur-mesure pour hôtels et riads." : "Custom hotel & riad websites with direct booking engine."
              }
            },
            {
              "@type": "Offer",
              "price": "4000",
              "priceCurrency": "MAD",
              "itemOffered": {
                "@type": "Service",
                "name": isFR ? "SEO & Référencement Local" : "SEO & Local Search",
                "description": isFR ? "Optimisation SEO et visibilité Google Maps pour l'hôtellerie." : "SEO optimization and local Google Maps visibility."
              }
            },
            {
              "@type": "Offer",
              "price": "4000",
              "priceCurrency": "MAD",
              "itemOffered": {
                "@type": "Service",
                "name": isFR ? "Gestion Google Ads" : "Google Ads Management",
                "description": isFR ? "Campagnes publicitaires Google de haute intention." : "High-intent Google Ads campaigns."
              }
            },
            {
              "@type": "Offer",
              "price": "4000",
              "priceCurrency": "MAD",
              "itemOffered": {
                "@type": "Service",
                "name": isFR ? "Gestion Meta Ads" : "Meta Ads Management",
                "description": isFR ? "Publicités Facebook et Instagram pour réservations directes." : "Facebook and Instagram campaigns for direct booking."
              }
            },
            {
              "@type": "Offer",
              "price": "3000",
              "priceCurrency": "MAD",
              "itemOffered": {
                "@type": "Service",
                "name": isFR ? "Gestion TripAdvisor Ads" : "TripAdvisor Ads Management",
                "description": isFR ? "Optimisation TripAdvisor et comparateurs d'hôtels." : "TripAdvisor metasearch campaign management."
              }
            }
          ]
        }
      });
    }

    const isHomepage = page.path === '/' || page.path === '/en';
    if (isFaqPage || isHomepage) {
      let faqItems: { q: string; a: string }[] = [];

      if (isHomepage) {
        faqItems = page.lang === 'fr' ? [
          { q: "Comment aidez-vous les riads et hôtels marocains à réduire les commissions des OTA ?", a: "Nous concevons des sites internet haut de gamme et ultra-rapides (dès 12 000 MAD / ≈1 100 €) connectés directement à votre PMS (Cloudbeds, Mews, etc.). Associés à des campagnes Google Ads ciblées (4 000 MAD/mois / ≈370 €/mois de frais de gestion) et du référencement local, nous interceptons les voyageurs avant qu'ils ne réservent sur les plateformes tierces, réduisant la dépendance aux OTA et augmentant vos réservations directes." },
          { q: "Combien de temps faut-il pour qu'une stratégie SEO porte ses fruits ?", a: "Les optimisations techniques de base, l'accélération de la vitesse mobile et le paramétrage Google Business Profile génèrent des résultats visibles sur Google Maps sous 30 à 45 jours. Pour les mots-clés hôteliers très compétitifs (ex: 'riad de luxe marrakech'), l'autorité organique complète s'établit sur un cycle de 4 à 6 semaines d'implémentation suivi de 3 à 6 mois de montée en puissance." },
          { q: "Qu'est-ce qui est inclus dans l'offre de création de site web ?", a: "Chaque projet (12 000 MAD / ≈1 100 € investissement fixe) comprend : design UX sur-mesure de standing, développement performance Jamstack/React (vitesse de chargement optimale), architecture bilingue (français, anglais), raccordement API de votre moteur de réservation et configuration SEO technique intégrale. Livraison sous 4 à 6 semaines, avec notre garantie de performance sous 90 jours soumise aux [CONDITIONS_GARANTIE]." },
          { q: "Quel levier est le plus efficace : Google Ads ou Meta Ads ?", a: "Google Ads (frais de gestion à 4 000 MAD/mois / ≈370 €/mois) capte les voyageurs ayant une intention d'achat immédiate pour une destination marocaine spécifique. Meta Ads (Instagram/Facebook) excelle dans la mise en valeur visuelle de l'architecture et de l'expérience de votre établissement auprès de cibles qualifiées en Europe ou Amérique du Nord, réduisant le coût d'acquisition de prospects." },
          { q: "Pouvez-vous connecter le site web à mon PMS existant ?", a: "Oui, nous intégrons sans couture les moteurs de réservation directe avec les principaux PMS du marché (Cloudbeds, Mews, Little Hotelier, Sirvoy, Opera, etc.) via des API sécurisées. Cela garantit la synchronisation en temps réel de vos tarifs et de vos disponibilités." },
          { q: "Où êtes-vous basés et comment collaborez-vous avec vos clients ?", a: "Urunk dispose de bureaux opérationnels à Marrakech (Guéliz) et à Casablanca (Anfa), assurant une proximité physique pour nos clients au Maroc. Nous collaborons à distance via des points réguliers sur Google Meet et proposons des contrats mensuels flexibles sans engagement abusif avec un préavis de résiliation de 15 jours." },
          { q: "Y a-t-il des frais de configuration pour les campagnes Google, Meta ou TripAdvisor ?", a: "Non, aucun frais de dossier de départ n'est facturé pour nos prestations standard de prise en main mensuelle de vos comptes publicitaires." },
          { q: "Proposez-vous des contrats à engagement de durée minimale ?", a: "Non. Tous nos services récurrents d'optimisation SEO ou de gestion de campagnes publicitaires sont facturés sans engagement forcé à long terme." },
          { q: "Y a-t-il des frais de licence récurrents pour notre site web ?", a: "Non. Nous concevons vos sites web sous des technologies ouvertes dont vous êtes propriétaire à 100 %. Vous ne payez aucun abonnement logiciel de notre part." }
        ] : [
          { q: "How do you help Moroccan riads and hotels reduce OTA commissions?", a: "We build high-performance, ultra-fast direct booking websites (starting at 12,000 MAD / ≈1,100 €) integrated with your Property Management System. Combined with targeted Google Search campaigns (4,000 MAD/month / ≈370 €/month management retainer) and local SEO, we intercept travelers before they book on third-party channels, reducing dependency and increasing your direct bookings." },
          { q: "How long does it take for an SEO strategy to show results?", a: "Technical SEO fixes, page speed optimization, and Google Business Profile updates yield visible local search improvements within 30 to 45 days. Organic authority for competitive search keywords (such as 'luxury riad Marrakech') typically matures over a 4 to 6 week implementation period followed by 3 to 6 months of ongoing growth." },
          { q: "What is included in your website creation package?", a: "Every project (12,000 MAD / ≈1,100 € fixed investment) includes custom luxury user experience design, rapid React performance engineering, bilingual structure (English, French), native booking engine API integration, and complete technical SEO. We deliver in 4 to 6 weeks, backed by our 90-day growth guarantee subject to [CONDITIONS_GARANTIE]." },
          { q: "Which advertising channel is more effective: Google Ads or Meta Ads?", a: "Google Ads (managed at 4,000 MAD/month / ≈370 €/month) capture high-intent travelers actively searching for specific Moroccan destinations. Meta Ads (Instagram and Facebook) excel at showcasing room architecture and amenities to qualified audiences in Europe and North America, reducing inquiry costs." },
          { q: "Can you connect the website to my existing PMS?", a: "Yes, we seamlessly integrate direct booking engines with leading Property Management Systems including Cloudbeds, Mews, Little Hotelier, Sirvoy, and Opera via secure API connections. This ensures real-time rate synchronization and availability." },
          { q: "Where is Urunk located and how do you work with clients?", a: "Urunk maintains operational offices in Marrakech (Gueliz) and Casablanca (Anfa) for local presence in Morocco. We collaborate via remote consultations on Google Meet and offer flexible monthly agreements with a 15-day notice policy." },
          { q: "Are there setup fees for Google, Meta, or TripAdvisor campaigns?", a: "No, we charge zero setup fees for standard onboarding of your monthly advertising accounts." },
          { q: "Do you require long-term contracts?", a: "No. All our recurring SEO and ad management services are billed on a monthly basis without long-term commitments." },
          { q: "Are there recurring license fees for our website?", a: "No. We build websites using open-source platforms that you own 100%. There are no recurring software fees or monthly licensing costs from our end." }
        ];
      } else {
        const faqItemsEN = [
          {
            q: "What is the cost and timeline for a hotel website?",
            a: "A custom direct booking hotel website costs a fixed 12,000 MAD (approx. €1,100) with a turnkey delivery time of 4–6 weeks. The scope includes mobile-first engineering, full SEO schema, and seamless PMS engine integration."
          },
          {
            q: "How much can we save on OTA commission fees?",
            a: "OTAs charge between 15% and 25% commission per room booking. By capturing reservations through your own website, our clients increase direct bookings and lower customer acquisition costs."
          },
          {
            q: "What are your ad campaign management packages?",
            a: "Our monthly ad management packages are 4,000 MAD/mo (approx. €370/mo) for Google Ads, 4,000 MAD/mo (approx. €370/mo) for Meta Ads, and 3,000 MAD/mo (approx. €280/mo) for TripAdvisor Ads, backed by our 90-day guarantee [CONDITIONS_GARANTIE]."
          },
          {
            q: "Which PMS engines and booking systems do you integrate?",
            a: "We connect with all major hotel management systems including Cloudbeds, Mews, Amenitiz, BookingButton, and D-Edge to enable seamless direct guest bookings."
          },
          {
            q: "How does the 90-day direct revenue guarantee work?",
            a: "The guarantee applies subject to [CONDITIONS_GARANTIE]. If your direct booking volume does not meet project target benchmarks within 90 days of live launch, we continue optimizing your channels with zero additional management fees until target benchmarks are reached."
          },
          {
            q: "Do we retain full ownership of our website and ad accounts?",
            a: "Yes, absolutely. You retain 100% full ownership of your domain name, custom website source code, Google Ads accounts, Meta Ad accounts, and guest databases."
          },
          {
            q: "How do you support multi-language direct booking sites?",
            a: "All our hospitality websites feature dynamic multi-language architecture with native hreflang SEO markup, ensuring max organic capture across international English, French, Spanish, and European guest segments."
          },
          {
            q: "Do you offer a pre-project site audit before engagement?",
            a: "Yes, we provide a free 24–48 hour direct channel diagnostic quantifying your 15–25% OTA commission leakage, mobile UX bottlenecks, and target Google Search volume."
          }
        ];

        const faqItemsFR = [
          {
            q: "Travaillez-vous uniquement avec des hôtels et riads ?",
            a: "Non. Bien que notre spécialisation de cœur réside dans l'hôtellerie marocaine (hôtels, riads, maisons d'hôtes et voyagistes), Urunk opère en tant qu'agence de croissance digitale globale au Maroc. Nous concevons des plateformes web performantes, mettons en œuvre un SEO local avancé et pilotons des campagnes d'acquisition pour les PME, les professions libérales et les marques internationales."
          },
          {
            q: "Prenez-vous une commission sur les leads ou les ventes générées ?",
            a: "Non. Contrairement aux intermédiaires (comme Booking.com ou d'autres plateformes d'acquisition tierces), nous croyons que vous devez conserver l'intégralité de vos revenus directs. Nous concevons des systèmes d'acquisition directe sans commission et appliquons des tarifs fixes transparents pour la création de sites web et la gestion des campagnes d'acquisition digitale."
          },
          {
            q: "Combien de temps faut-il pour concevoir un site internet sur-mesure ?",
            a: "Notre méthodologie de développement axée sur la performance exige généralement entre 4 et 6 semaines pour concevoir un site web sur-mesure complet, optimisé de bout en bout pour les Core Web Vitals et s'affichant sous la barre des 1,5 seconde."
          },
          {
            q: "Pouvez-vous connecter mon moteur de réservation ou mon CRM ?",
            a: "Absolument. Nous réalisons des intégrations complexes et transparentes avec tous les moteurs de réservation hôtelière (PMS comme Cloudbeds, Mews, SiteMinder), ainsi qu'avec des outils de capture de prospects, des plateformes e-commerce et des solutions de paiement locales (comme le CMI pour le marché marocain)."
          },
          {
            q: "Quel budget publicitaire est nécessaire pour lancer des campagnes ?",
            a: "Pour garantir la pertinence de nos canaux d'acquisition payants à fort ROI (Google Ads, Meta Ads), nous recommandons un budget média de départ d'environ 3 000 à 5 000 MAD par mois, réglé directement auprès des régies. Cela permet de collecter les données nécessaires pour optimiser le référencement local et optimiser vos fiches Google Maps."
          },
          {
            q: "Qui est propriétaire du site internet et des comptes publicitaires ?",
            a: "Vous, à 100 %. Dès le déploiement final et le règlement des prestations, la propriété intellectuelle et les accès administrateurs exclusifs de votre site internet vous reviennent entièrement. Les comptes publicitaires sont gérés de manière transparente en votre nom, sans aucune rétention de propriété de notre part."
          },
          {
            q: "Y a-t-il un engagement à long terme pour la gestion de l'acquisition digitale ?",
            a: "Non. Pour vous assurer une totale flexibilité commerciale, nos contrats d'acquisition s'opèrent sur une base mensuelle sans engagement forcé à long terme. Un préavis de 15 jours suffit pour suspendre ou réajuster les budgets de vos campagnes."
          }
        ];

        faqItems = page.lang === 'fr' ? faqItemsFR : faqItemsEN;
      }

      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      });
    }

    if (isBlogPost) {
      const slug = page.path.split('/').pop() || '';
      const post = page.lang === 'fr' ? blogPostsFR.find(p => p.slug === slug) : blogPostsEN.find(p => p.slug === slug);
      const publishDate = parsePublishDate(post?.date);

      schemas.push({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": pageTitle,
        "description": pageDesc,
        "image": ogImageUrl,
        "datePublished": publishDate,
        "dateModified": CURRENT_DATE,
        "author": {
          "@type": "Organization",
          "name": "Urunk",
          "url": "https://urunk.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Urunk",
          "logo": {
            "@type": "ImageObject",
            "url": "https://urunk.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        }
      });
    }

    if (page.path !== '/' && page.path !== '/en') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": page.lang === 'fr' ? 'Accueil' : 'Home',
            "item": page.lang === 'fr' ? `${BASE_URL}/` : `${BASE_URL}/en`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": pageTitle,
            "item": canonicalUrl
          }
        ]
      });
    }

    if (isCalculatorPage) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "OTA Commission Calculator",
        "url": canonicalUrl,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All"
      });
    }

    let jsonLdScript = `\n    <script type="application/ld+json">\n      ${JSON.stringify(schemas, null, 2)}\n    </script>`;
    jsonLdScript = jsonLdScript.replace(/"@type":\s*"Question"/g, '"@type":"Question"');
    jsonLdScript = jsonLdScript.replace(/"@type":\s*"FAQPage"/g, '"@type":"FAQPage"');
    renderedHtml = renderedHtml.replace('</head>', `${headTags}${jsonLdScript}\n  </head>`);

    // E. Dynamic Semantic Fallback Body Replacement for Bot/Non-JS Crawlers
    const startRoot = renderedHtml.indexOf('<div id="root">');
    if (startRoot !== -1) {
      const innerStart = startRoot + '<div id="root">'.length;
      
      const scriptIdx = renderedHtml.indexOf('<script type="module"', innerStart);
      const searchEndIdx = scriptIdx !== -1 ? scriptIdx : renderedHtml.indexOf('</body>', innerStart);
      
      const lastDivIdx = renderedHtml.lastIndexOf('</div>', searchEndIdx);
      
      if (lastDivIdx !== -1 && lastDivIdx > innerStart) {
        const fallbackHtml = generateFallbackBody(page, allPages);
        renderedHtml = renderedHtml.substring(0, innerStart) + '\n' + fallbackHtml + '\n' + renderedHtml.substring(lastDivIdx);
      }
    }

    // Write file
    if (page.path === '/') {
      const outputFilePath = path.join('dist', 'index.html');
      fs.writeFileSync(outputFilePath, renderedHtml, 'utf8');
    } else {
      const parts = page.path.split('/').filter(Boolean);
      const fileName = parts[parts.length - 1] + '.html';
      const dirParts = parts.slice(0, parts.length - 1);
      const outputDir = path.join('dist', ...dirParts);
      fs.mkdirSync(outputDir, { recursive: true });
      const outputFilePath = path.join(outputDir, fileName);
      fs.writeFileSync(outputFilePath, renderedHtml, 'utf8');

      // Also write directory/index.html for Clean URL / Cloudflare Static Assets compatibility
      const dirPath = path.join('dist', ...parts);
      fs.mkdirSync(dirPath, { recursive: true });
      fs.writeFileSync(path.join(dirPath, 'index.html'), renderedHtml, 'utf8');
    }
    successCount++;
  }

  console.log(`Successfully pre-rendered ${successCount} HTML files directly into 'dist/'.`);
  console.log('Metatags are now 100% dynamic, distinct, and completely live at the server/HTML layer!');
}

prerender();
