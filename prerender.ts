import * as fs from 'fs';
import * as path from 'path';
import { servicesData } from './src/data/servicesData';
import { blogPostsEN } from './src/data/blogPostsEN';
import { blogPostsFR } from './src/data/blogPostsFR';
import { caseStudies } from './src/data/caseStudies';
import { industriesData } from './src/data/industriesData';
import { locationsData } from './src/data/locationsData';
import { getEquivalentRoute } from './src/data/slugMappings';
import {
  matrixRelations,
  findMatrixRelation,
  getAllLiveMatrixLinks,
  getMatrixLinksForLocation,
  getMatrixLinksForIndustry,
  getMatrixLinksForService,
  getRelatedMatrixLinks,
  MatrixLinkItem
} from './src/data/matrixRelations';
import { buildMatrixMetadata } from './src/data/matrixMetadata';

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

function getSafeModifiedDate(publishDate: string): string {
  return CURRENT_DATE >= publishDate ? CURRENT_DATE : publishDate;
}

interface ArticleSchemaOptions {
  type?: 'Article' | 'BlogPosting';
  url: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  lang: 'fr' | 'en';
}

function buildArticleSchema(opts: ArticleSchemaOptions): object {
  const rawHeadline = opts.headline.replace(/\s+/g, ' ').trim();
  const cleanHeadline = rawHeadline.length > 110
    ? `${rawHeadline.substring(0, 107).trim()}...`
    : rawHeadline;
  const modifiedDate = opts.dateModified && opts.dateModified >= opts.datePublished
    ? opts.dateModified
    : getSafeModifiedDate(opts.datePublished);

  return {
    "@context": "https://schema.org",
    "@type": opts.type || "Article",
    "@id": `${opts.url}#article`,
    "headline": cleanHeadline,
    "description": opts.description,
    "image": opts.image,
    "inLanguage": opts.lang === 'fr' ? 'fr-MA' : 'en-US',
    "datePublished": opts.datePublished,
    "dateModified": modifiedDate,
    "author": {
      "@type": "Person",
      "name": "J.Mellal",
      "jobTitle": opts.lang === 'fr'
        ? "Consultant SEO & Stratège Marketing Digital Propulsé par l'IA"
        : "SEO Consultant & AI-Powered Digital Marketing Strategist",
      "url": opts.lang === 'fr' ? `${BASE_URL}/a-propos` : `${BASE_URL}/en/about`,
      "worksFor": {
        "@type": "Organization",
        "name": "Urunk",
        "url": BASE_URL
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Urunk",
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": opts.url
    }
  };
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
    description: 'Consultez les conditions générales de vente et d\'utilisation de l\'agence Urunk : création web, référencement SEO, facturation et propriété.'
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
    title: 'Agence SEO Casablanca : Référencement & Maps | Urunk',
    description: 'Développez votre autorité organique à Casablanca. Nous optimisons votre visibilité sur Google Maps et propulsons votre site devant vos concurrents.'
  },
  {
    path: '/google-ads-maroc',
    lang: 'fr',
    title: 'Agence Google Ads Maroc : Campagnes SEA & ROI | Urunk',
    description: 'Agence Google Ads Maroc orientée ROI : gestion Search, Performance Max, Shopping et Hotel Ads dès 4 000 MAD/mois. Audit SEA gratuit sous 24h.'
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
    description: 'Nos zones d\'intervention au Maroc (Casablanca, Marrakech, Rabat, Agadir) : SEO local, fiches Google Business Profile et sites web performants.'
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
    title: 'Morocco Web & SEO Agency for Hotels & Riads | Urunk EN',
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
    description: 'Explore Urunk\'s complete HTML sitemap with direct links to all hotel marketing services, regional hubs, case studies, and bilingual SEO guides.'
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
    title: 'Hotels & Resorts Digital Marketing Agency | Urunk',
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
  { key: 'meta-ads', enPath: '/en/services/meta-ads', frPath: '/services/gestion-publicites-meta' },
  { key: 'tripadvisor-ads', enPath: '/en/services/tripadvisor-ads', frPath: '/services/tripadvisor-ads' },
  { key: 'bundle-site-ads', enPath: '/en/services/bundle-site-ads', frPath: '/services/bundle-site-ads' },
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
    fr: "Agence Google Ads Maroc : Campagnes SEA & ROI | Urunk"
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

function resolveMatrixPageContext(pagePath: string, lang: 'en' | 'fr') {
  if (!pagePath.startsWith('/expertise/') && !pagePath.startsWith('/en/expertise/')) {
    return null;
  }
  const clean = pagePath.replace(/^\/en\//, '/');
  const segs = clean.split('/').filter(Boolean); // ['expertise', seg1, seg2, seg3?]
  let serviceId: string | undefined;
  let locationId: string | undefined;
  let industryId: string | undefined;

  if (segs.length === 4) {
    locationId = segs[1];
    industryId = segs[2];
    serviceId = segs[3];
  } else if (segs.length === 3) {
    const param1 = segs[1];
    const param2 = segs[2];
    const match = findMatrixRelation(param1, param2, lang) || findMatrixRelation(param2, param1, lang);
    if (match) {
      serviceId = match.serviceId;
      if (match.type === 'service_location') {
        locationId = match.locationId || match.targetId;
      } else if (match.type === 'service_industry') {
        industryId = match.industryId || match.targetId;
      }
    } else if (servicesData[param1]) {
      serviceId = param1;
      if (locationsData[param2]) locationId = param2;
      else if (industriesData[param2]) industryId = param2;
    } else if (servicesData[param2]) {
      serviceId = param2;
      if (locationsData[param1]) locationId = param1;
      else if (industriesData[param1]) industryId = param1;
    }
  }

  if (!serviceId || !servicesData[serviceId]) {
    return null;
  }

  const meta = buildMatrixMetadata({
    lang,
    serviceId,
    locationId,
    industryId,
  });

  const srvData = servicesData[serviceId][lang];
  const locMap = locationId ? locationsData[locationId] : undefined;
  const localizedFaqs: { q: string; a: string }[] = [];

  if (locMap?.faqByService?.[serviceId]) {
    for (const item of locMap.faqByService[serviceId]) {
      localizedFaqs.push({ q: item.q[lang], a: item.a[lang] });
    }
  }
  if (srvData.faqs) {
    for (const faq of srvData.faqs.slice(0, 4)) {
      if (!localizedFaqs.some(f => f.q.toLowerCase() === faq.q.toLowerCase())) {
        localizedFaqs.push(faq);
      }
    }
  }

  const marketStats =
    locMap?.marketStats && locMap.marketStats.length > 0
      ? locMap.marketStats
      : locationsData['morocco']?.marketStats || [];

  return {
    serviceId,
    locationId,
    industryId,
    meta,
    srvData,
    localizedFaqs,
    marketStats,
  };
}

function renderMatrixLinksHtml(
  links: MatrixLinkItem[],
  heading: string,
  subheading: string
): string {
  if (!links || links.length === 0) return '';
  return `
    <section style="margin-top: 2.75rem; margin-bottom: 2.75rem;">
      <h2 style="color: #0F2D25; font-size: 1.75rem; margin-bottom: 0.65rem; font-family: Georgia, serif;">${escapeHtml(heading)}</h2>
      <p style="color: #4a5568; line-height: 1.65; margin-top: 0; margin-bottom: 1.35rem;">${escapeHtml(subheading)}</p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.15rem;">
        ${links.map(item => `
          <div style="padding: 1.35rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
            <p style="font-size: 0.78rem; color: #718096; margin: 0 0 0.35rem 0;">${escapeHtml(item.contextLabel)}</p>
            <h3 style="font-size: 1.12rem; margin: 0 0 0.45rem 0; font-family: Georgia, serif;">
              <a href="${item.path}" style="color: #0F2D25; text-decoration: underline;">${escapeHtml(item.anchor)}</a>
            </h3>
            <p style="margin: 0; color: #4a5568; font-size: 0.92rem; line-height: 1.55;">${escapeHtml(item.summary)}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function generateFallbackBody(page: PageMetadata, allPages: PageMetadata[]): string {
  const isFR = page.lang === 'fr';
  const lang = isFR ? 'fr' : 'en';
  const equivalentPath = getEquivalentRoute(page.path);
  
  // Header / Main Navigation
  let html = `
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
              <li><a href="${isFR ? '/google-ads-maroc' : '/en/google-ads-morocco'}" style="color: #0F2D25; text-decoration: underline;">${isFR ? 'Agence Google Ads Maroc' : 'Google Ads Morocco'}</a></li>
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
                ${isFR ? 'Siège Casablanca' : 'Casablanca Office'} &rarr;
              </a>
            </h3>
            <p style="margin: 0; color: #4a5568; font-size: 0.9rem;">${isFR ? '3 Rue El Kadi Lass, Maarif, Casablanca, Maroc' : '3 Rue El Kadi Lass, Maarif, Casablanca, Morocco'}</p>
          </div>
          <div style="padding: 1.25rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.15rem;">
              <a href="${isFR ? '/zones/marrakech' : '/en/locations/marrakech'}" style="color: #0F2D25; text-decoration: underline; font-weight: bold;">
                ${isFR ? 'Pôle Marrakech' : 'Marrakech Hub'} &rarr;
              </a>
            </h3>
            <p style="margin: 0; color: #4a5568; font-size: 0.9rem;">${isFR ? 'Couverture Médina, Guéliz & Palmeraie, Marrakech' : 'Medina, Gueliz & Palmeraie Coverage, Marrakech'}</p>
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
            { q: "Où êtes-vous basés et comment collaborez-vous avec vos clients ?", a: "Urunk est basée au 3 Rue El Kadi Lass, Maarif, Casablanca, Maroc, avec une présence opérationnelle à Marrakech, assurant une proximité directe pour nos clients au Maroc. Nous collaborons également à distance via Google Meet et proposons des contrats mensuels flexibles sans engagement abusif avec un préavis de résiliation de 15 jours." },
            { q: "Y a-t-il des frais de configuration pour les campagnes Google, Meta ou TripAdvisor ?", a: "Non, aucun frais de dossier de départ n'est facturé pour nos prestations standard de prise en main mensuelle de vos comptes publicitaires." },
            { q: "Proposez-vous des contrats à engagement de durée minimale ?", a: "Non. Tous nos services récurrents d'optimisation SEO ou de gestion de campagnes publicitaires sont facturés sans engagement forcé à long terme." },
            { q: "Y a-t-il des frais de licence récurrents pour notre site web ?", a: "Non. Nous concevons vos sites web sous des technologies ouvertes dont vous êtes propriétaire à 100 %. Vous ne payez aucun abonnement logiciel de notre part." }
          ] : [
            { q: "How do you help Moroccan riads and hotels reduce OTA commissions?", a: "We build high-performance, ultra-fast direct booking websites (starting at 12,000 MAD / ≈1,100 €) integrated with your Property Management System. Combined with targeted Google Search campaigns (4,000 MAD/month / ≈370 €/month management retainer) and local SEO, we intercept travelers before they book on third-party channels, reducing dependency and increasing your direct bookings." },
            { q: "How long does it take for an SEO strategy to show results?", a: "Technical SEO fixes, page speed optimization, and Google Business Profile updates yield visible local search improvements within 30 to 45 days. Organic authority for competitive search keywords (such as 'luxury riad Marrakech') typically matures over a 4 to 6 week implementation period followed by 3 to 6 months of ongoing growth." },
            { q: "What is included in your website creation package?", a: "Every project (12,000 MAD / ≈1,100 € fixed investment) includes custom luxury user experience design, rapid React performance engineering, bilingual structure (English, French), native booking engine API integration, and complete technical SEO. We deliver in 4 to 6 weeks, backed by our 90-day growth guarantee subject to [CONDITIONS_GARANTIE]." },
            { q: "Which advertising channel is more effective: Google Ads or Meta Ads?", a: "Google Ads (managed at 4,000 MAD/month / ≈370 €/month) capture high-intent travelers actively searching for specific Moroccan destinations. Meta Ads (Instagram and Facebook) excel at showcasing room architecture and amenities to qualified audiences in Europe and North America, optimizing your direct inquiry acquisition costs." },
            { q: "Can you connect the website to my existing PMS?", a: "Yes, we seamlessly integrate direct booking engines with leading Property Management Systems including Cloudbeds, Mews, Little Hotelier, Sirvoy, and Opera via secure API connections. This ensures real-time rate synchronization and availability." },
            { q: "Where is Urunk located and how do you work with clients?", a: "Urunk is headquartered at 3 Rue El Kadi Lass, Maarif, Casablanca, Morocco, with regional presence in Marrakech for local proximity across Morocco. We collaborate via remote consultations on Google Meet and offer flexible monthly agreements with a 15-day notice policy." },
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
    const seenServiceHrefs = new Set<string>();
    for (const mapping of serviceRouteMapping) {
      const sData = servicesData[mapping.key];
      if (sData) {
        const item = isFR ? sData.fr : sData.en;
        const href = isFR ? mapping.frPath : mapping.enPath;
        if (seenServiceHrefs.has(href)) continue;
        seenServiceHrefs.add(href);
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
    html += renderMatrixLinksHtml(
      getAllLiveMatrixLinks(lang),
      isFR
        ? 'Expertises Spécialisées par Ville & Secteur au Maroc'
        : 'Specialized Services by Moroccan City & Sector',
      isFR
        ? "Explorez nos 19 pôles d'expertise régionaux et sectoriels associant création web rapide, référencement local et campagnes d'acquisition directe à Marrakech, Casablanca, Agadir et Rabat."
        : 'Explore all 19 dedicated regional and vertical playbooks pairing high-speed web engineering, local search authority, and direct acquisition across Marrakech, Casablanca, Agadir, and Rabat.'
    );
  } else if (page.path === '/google-ads-maroc') {
    const gData = servicesData['google-ads-morocco'].fr;
    html += `
      <div>
        <header style="margin-bottom: 2.5rem;">
          <p style="font-size: 0.9rem; color: #718096; margin-bottom: 0.5rem;">
            <a href="/" style="color: #718096; text-decoration: none;">Accueil</a> &gt;
            <a href="/services" style="color: #718096; text-decoration: none;">Services</a> &gt;
            <span>Agence Google Ads Maroc</span>
          </p>
          <p style="font-size: 0.85rem; font-weight: bold; text-transform: uppercase; letter-spacing: 0.08em; color: #D46E55; margin-bottom: 0.75rem;">
            Agence Google Ads Maroc · Référencement Payant SEA &amp; Performance
          </p>
          <h1 style="font-size: 2.75rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">
            Agence Google Ads au Maroc : Campagnes SEA Rentables &amp; Acquisition à Fort ROI
          </h1>
          <p style="font-size: 1.15rem; color: #4a5568; line-height: 1.7; margin-bottom: 1.5rem;">
            En tant qu'<strong>agence Google Ads au Maroc</strong> basée à Casablanca et Marrakech, Urunk structure, pilote et rentabilise vos campagnes publicitaires sur le Réseau de Recherche (Search), Performance Max, Google Shopping, YouTube et Google Hotel Ads. Que vous dirigiez une PME ou une entreprise B2B à Casablanca et Rabat, une enseigne e-commerce nationale ou un hôtel et riad à Marrakech et Agadir, nous transformons votre budget média en prospects qualifiés, appels entrants, ventes vérifiées et réservations directes sans commission.
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem;">
            <a href="/contact" style="background: #D46E55; color: white; padding: 0.85rem 1.75rem; border-radius: 8px; text-decoration: none; font-weight: bold;">
              Demander un Audit Google Ads Gratuit &rarr;
            </a>
            <a href="/tarifs" style="border: 1px solid #0F2D25; color: #0F2D25; padding: 0.85rem 1.75rem; border-radius: 8px; text-decoration: none; font-weight: bold;">
              Consulter nos Forfaits SEA
            </a>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 1rem; background: #FAF8F5; padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 12px;">
            <div>
              <strong style="font-size: 1.5rem; color: #0F2D25; display: block;">4 000 MAD</strong>
              <span style="font-size: 0.85rem; color: #4a5568;">Forfait mensuel fixe de gestion SEA, sans frais de mise en service.</span>
            </div>
            <div>
              <strong style="font-size: 1.5rem; color: #0F2D25; display: block;">0 %</strong>
              <span style="font-size: 0.85rem; color: #4a5568;">Aucune commission variable prélevée sur votre budget publicitaire Google.</span>
            </div>
            <div>
              <strong style="font-size: 1.5rem; color: #0F2D25; display: block;">24 – 48 h</strong>
              <span style="font-size: 0.85rem; color: #4a5568;">Premiers prospects, appels et clics haute intention dès l'activation.</span>
            </div>
            <div>
              <strong style="font-size: 1.5rem; color: #0F2D25; display: block;">FR · EN · AR</strong>
              <span style="font-size: 0.85rem; color: #4a5568;">Campagnes multilingues ciblant le Maroc et les marchés internationaux.</span>
            </div>
          </div>
        </header>

        <section style="margin-bottom: 3rem;">
          <h2 style="color: #0F2D25; font-size: 1.9rem; margin-bottom: 1rem; font-family: Georgia, serif;">
            Pourquoi choisir une agence Google Ads spécialisée au Maroc plutôt qu'une gestion générique ?
          </h2>
          <p style="margin-bottom: 1rem; color: #4a5568; line-height: 1.7;">
            Sur le marché marocain, plus de 60 % des budgets investis sans méthodologie rigoureuse sur Google Ads s'évaporent sur des requêtes trop larges, des clics informationnels sans intention d'achat ou le Réseau des partenaires de recherche activé par défaut. Une campagne lancée en mode automatique (« Smart Campaign ») mélange les internautes cherchant un emploi, un stage, un tutoriel gratuit et vos véritables acheteurs prêts à signer un devis ou payer une commande.
          </p>
          <p style="margin-bottom: 1.5rem; color: #4a5568; line-height: 1.7;">
            Collaborer avec une <strong>agence SEA au Maroc</strong> maîtrisant les réalités locales change radicalement l'équation financière : arbitrage du coût par clic (CPC) par ville et par langue, suivi précis des conversions hybrides propres aux habitudes marocaines (formulaires de devis, appels téléphoniques mobiles, conversations WhatsApp Business, paiements carte CMI, commandes e-commerce confirmées et moteurs PMS hôteliers), et transparence comptable totale puisque vous réglez Google directement sur votre propre compte publicitaire.
          </p>

          <div style="overflow-x: auto; margin-bottom: 2rem;">
            <table style="width: 100%; border-collapse: collapse; background: #ffffff; border: 1px solid #e2e8f0;">
              <thead>
                <tr style="background: #0F2D25; color: #ffffff; text-align: left;">
                  <th style="padding: 0.85rem 1rem;">Critère d'évaluation</th>
                  <th style="padding: 0.85rem 1rem;">Gestion interne / Boost auto</th>
                  <th style="padding: 0.85rem 1rem;">Agence classique au % média</th>
                  <th style="padding: 0.85rem 1rem; color: #FAF8F5;">Agence Google Ads Urunk</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 0.85rem 1rem; font-weight: bold;">Modèle de rémunération</td>
                  <td style="padding: 0.85rem 1rem;">Temps interne non dédié</td>
                  <td style="padding: 0.85rem 1rem;">15 % à 25 % du budget dépensé</td>
                  <td style="padding: 0.85rem 1rem; font-weight: bold; color: #0F2D25;">Forfait fixe dès 4 000 MAD/mois (0 % sur média)</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 0.85rem 1rem; font-weight: bold;">Propriété du compte</td>
                  <td style="padding: 0.85rem 1rem;">Interne mais mal structuré</td>
                  <td style="padding: 0.85rem 1rem;">Souvent bloqué sous compte agence</td>
                  <td style="padding: 0.85rem 1rem; font-weight: bold; color: #0F2D25;">100 % propriétaire (accès administrateur client)</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 0.85rem 1rem; font-weight: bold;">Filtrage du gaspillage</td>
                  <td style="padding: 0.85rem 1rem;">Requêtes larges non filtrées</td>
                  <td style="padding: 0.85rem 1rem;">Revue mensuelle superficielle</td>
                  <td style="padding: 0.85rem 1rem; font-weight: bold; color: #0F2D25;">Audit hebdomadaire des termes &amp; mots-clés négatifs</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 0.85rem 1rem; font-weight: bold;">Suivi des conversions</td>
                  <td style="padding: 0.85rem 1rem;">Clics et impressions uniquement</td>
                  <td style="padding: 0.85rem 1rem;">Page de remerciement basique</td>
                  <td style="padding: 0.85rem 1rem; font-weight: bold; color: #0F2D25;">GTM + GA4 + WhatsApp + Appels + CMI / PMS</td>
                </tr>
                <tr>
                  <td style="padding: 0.85rem 1rem; font-weight: bold;">Engagement contractuel</td>
                  <td style="padding: 0.85rem 1rem;">Aucun</td>
                  <td style="padding: 0.85rem 1rem;">6 à 12 mois verrouillés</td>
                  <td style="padding: 0.85rem 1rem; font-weight: bold; color: #0F2D25;">Mensuel sans engagement forcé (préavis 15 jours)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style="margin-bottom: 3rem;">
          <h2 style="color: #0F2D25; font-size: 1.9rem; margin-bottom: 1.25rem; font-family: Georgia, serif;">
            Nos 6 leviers de campagnes Google Ads gérés pour les entreprises au Maroc
          </h2>
          <p style="margin-bottom: 1.5rem; color: #4a5568; line-height: 1.7;">
            Chaque secteur économique exige une architecture publicitaire adaptée. Nous combinons les formats à plus haute intention commerciale de l'écosystème Google Ads afin de capter la demande active au coût par acquisition (CPA) le plus compétitif :
          </p>
          <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
            <div style="padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
              <h3 style="color: #0F2D25; font-size: 1.35rem; margin-top: 0; margin-bottom: 0.5rem;">01. Campagnes Google Search (Réseau de Recherche Haute Intention)</h3>
              <p style="color: #4a5568; margin-bottom: 0.75rem;">Nous ciblons exclusivement les requêtes transactionnelles et commerciales en correspondance exacte et d'expression (français, anglais et arabe), tout en enrichissant chaque semaine une liste stricte de mots-clés négatifs pour éliminer les clics hors cible. Objectif : un Quality Score de 8 à 10/10 réduisant mécaniquement votre CPC face à vos concurrents.</p>
              <ul style="padding-left: 1.25rem; margin: 0; color: #4a5568;">
                <li>Groupes d'annonces thématiques granulaires alignés sur chaque prestation ou gamme</li>
                <li>Annonces responsives (RSA) avec extensions d'appel direct, de prix, de lieu et d'accroche</li>
                <li>Exclusion systématique des recherches gratuites, emplois, stages et requêtes informatives</li>
              </ul>
            </div>

            <div style="padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
              <h3 style="color: #0F2D25; font-size: 1.35rem; margin-top: 0; margin-bottom: 0.5rem;">02. Performance Max &amp; Acquisition Multicanale Pilotée par le ROAS</h3>
              <p style="color: #4a5568; margin-bottom: 0.75rem;">Déploiement maîtrisé sur Search, YouTube, Display, Discover, Gmail et Maps grâce à vos signaux d'audience propriétaires (listes clients CRM, visiteurs chauds, paniers abandonnés) et à l'isolation stricte du trafic de marque pour garantir une croissance réellement incrémentale.</p>
              <ul style="padding-left: 1.25rem; margin: 0; color: #4a5568;">
                <li>Segmentation des groupes d'assets visuels et vidéos par ligne de service ou marge</li>
                <li>Exclusion des termes de marque pour mesurer le véritable coût d'acquisition de nouveaux clients</li>
                <li>Stratégies d'enchères Smart Bidding basées sur la valeur réelle (tROAS / tCPA)</li>
              </ul>
            </div>

            <div style="padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
              <h3 style="color: #0F2D25; font-size: 1.35rem; margin-top: 0; margin-bottom: 0.5rem;">03. Google Shopping &amp; Croissance E-commerce au Maroc</h3>
              <p style="color: #4a5568; margin-bottom: 0.75rem;">Pour les boutiques Shopify, WooCommerce et PrestaShop au Maroc, nous optimisons votre flux Google Merchant Center (titres produits sémantiques, prix en dirhams MAD, disponibilité) et distinguons les paiements par carte CMI des commandes en paiement à la livraison (COD) effectivement livrées.</p>
              <ul style="padding-left: 1.25rem; margin: 0; color: #4a5568;">
                <li>Audit et correction technique des flux produits dans Google Merchant Center</li>
                <li>Découpage des campagnes Shopping par marge brute, best-sellers et saisonnalité</li>
                <li>Remontée fiable du chiffre d'affaires e-commerce via Google Tag Manager et GA4</li>
              </ul>
            </div>

            <div style="padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
              <h3 style="color: #0F2D25; font-size: 1.35rem; margin-top: 0; margin-bottom: 0.5rem;">04. Google Hotel Ads &amp; Réservation Directe Sans Commission OTA</h3>
              <p style="color: #4a5568; margin-bottom: 0.75rem;">Les plateformes comme Booking.com et Expedia enchérissent sur le nom même de votre hôtel ou riad au Maroc pour prélever 15 à 25 % de commission. En connectant votre moteur PMS (Cloudbeds, Mews, SiteMinder, Amenitiz) à Google Hotel Ads et à des campagnes Search sur les marchés émetteurs (France, Royaume-Uni, Espagne, États-Unis, Suisse), nous affichons votre tarif officiel en tête de Google.</p>
              <ul style="padding-left: 1.25rem; margin: 0; color: #4a5568;">
                <li>Protection de votre marque hôtelière et activation des liens officiels Google Hotel Center</li>
                <li>Ciblage des voyageurs internationaux à fort panier moyen en phase de réservation</li>
                <li>Suivi exact des nuitées et revenus directs générés sans commission intermédiaire</li>
              </ul>
            </div>

            <div style="padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
              <h3 style="color: #0F2D25; font-size: 1.35rem; margin-top: 0; margin-bottom: 0.5rem;">05. Publicité Locale &amp; Visibilité Sponsorisée sur Google Maps</h3>
              <p style="color: #4a5568; margin-bottom: 0.75rem;">Conçu pour les cliniques, cabinets médicaux et dentaires, écoles supérieures, concessions automobiles, showrooms immobiliers et prestataires de proximité à Casablanca, Marrakech, Rabat, Tanger et Agadir. Synchronisation complète avec votre fiche Google Business Profile pour stimuler les appels directs et itinéraires.</p>
            </div>

            <div style="padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
              <h3 style="color: #0F2D25; font-size: 1.35rem; margin-top: 0; margin-bottom: 0.5rem;">06. Remarketing Display &amp; YouTube Ads de Réassurance</h3>
              <p style="color: #4a5568; margin-bottom: 0.75rem;">Un décideur B2B à Casablanca ou un acheteur comparant plusieurs prestataires consulte en moyenne 4 à 6 sites avant de convertir. Nos campagnes de reciblage plafonnées en fréquence sur YouTube et le Réseau Display ramènent vos visiteurs qualifiés vers la prise de contact au meilleur CPA.</p>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 3rem; background: #FAF8F5; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0;">
          <h2 style="color: #0F2D25; font-size: 1.85rem; margin-top: 0; margin-bottom: 1rem; font-family: Georgia, serif;">
            Coût par clic (CPC), budgets Google Ads au Maroc et dotation e-commerce
          </h2>
          <p style="color: #4a5568; line-height: 1.7; margin-bottom: 1.5rem;">
            Quel budget prévoir avec une <strong>agence Google Ads au Maroc</strong> ? Contrairement aux marchés français ou nord-américains où les CPC dépassent fréquemment 30 à 80 MAD, la SERP marocaine offre encore un excellent levier de rentabilité lorsque le Quality Score et le ciblage géographique sont finement pilotés :
          </p>
          <div style="overflow-x: auto; margin-bottom: 1.5rem;">
            <table style="width: 100%; border-collapse: collapse; background: #ffffff; border: 1px solid #e2e8f0;">
              <thead>
                <tr style="background: #0F2D25; color: #ffffff; text-align: left;">
                  <th style="padding: 0.75rem 1rem;">Secteur d'activité</th>
                  <th style="padding: 0.75rem 1rem;">Zones principales</th>
                  <th style="padding: 0.75rem 1rem;">CPC moyen constaté</th>
                  <th style="padding: 0.75rem 1rem;">Budget média conseillé</th>
                  <th style="padding: 0.75rem 1rem;">Objectif prioritaire</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 0.75rem 1rem; font-weight: bold;">PME, Services B2B &amp; Industrie</td>
                  <td style="padding: 0.75rem 1rem;">Casablanca, Rabat, Tanger, Kénitra</td>
                  <td style="padding: 0.75rem 1rem;">3,50 – 9,00 MAD</td>
                  <td style="padding: 0.75rem 1rem;">4 000 – 12 000 MAD / mois</td>
                  <td style="padding: 0.75rem 1rem;">Demandes de devis qualifiées &amp; appels</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 0.75rem 1rem; font-weight: bold;">Hôtels, Riads &amp; Tour-Opérateurs</td>
                  <td style="padding: 0.75rem 1rem;">Marrakech, Agadir, Essaouira, Fès</td>
                  <td style="padding: 0.75rem 1rem;">4,00 – 11,50 MAD</td>
                  <td style="padding: 0.75rem 1rem;">5 000 – 15 000 MAD / mois</td>
                  <td style="padding: 0.75rem 1rem;">Réservations directes PMS (ROAS 5x–9x)</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 0.75rem 1rem; font-weight: bold;">E-commerce &amp; Marques D2C</td>
                  <td style="padding: 0.75rem 1rem;">Maroc entier &amp; Export</td>
                  <td style="padding: 0.75rem 1rem;">1,20 – 4,50 MAD</td>
                  <td style="padding: 0.75rem 1rem;">5 000 – 20 000 MAD / mois</td>
                  <td style="padding: 0.75rem 1rem;">Ventes validées (CMI / COD confirmé)</td>
                </tr>
                <tr>
                  <td style="padding: 0.75rem 1rem; font-weight: bold;">Immobilier, Cliniques &amp; Enseignement</td>
                  <td style="padding: 0.75rem 1rem;">Casablanca, Rabat, Marrakech, Tanger</td>
                  <td style="padding: 0.75rem 1rem;">4,50 – 12,00 MAD</td>
                  <td style="padding: 0.75rem 1rem;">5 000 – 15 000 MAD / mois</td>
                  <td style="padding: 0.75rem 1rem;">Rendez-vous, visites showrooms &amp; WhatsApp</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 style="color: #0F2D25; font-size: 1.25rem; margin-bottom: 0.5rem;">Facturation Google Ads au Maroc, carte internationale et dotation e-commerce</h3>
          <p style="color: #4a5568; line-height: 1.7; margin-bottom: 1rem;">
            Pour garantir votre indépendance, vos dépenses publicitaires sont réglées directement à Google Ireland / Google LLC via la carte bancaire internationale professionnelle de votre société marocaine (dotation e-commerce / dotation professionnelle Office des Changes activée auprès d'Attijariwafa Bank, CIH, BMCE Bank of Africa, Banque Populaire ou CFG Bank) ou via un moyen de paiement international existant. Nos honoraires de pilotage SEA sont facturés séparément et en toute clarté à partir de 4 000 MAD/mois.
          </p>
          <h3 style="color: #0F2D25; font-size: 1.25rem; margin-bottom: 0.5rem;">Arbitrage sémantique multilingue : Français, Anglais et Arabe</h3>
          <p style="color: #4a5568; line-height: 1.7; margin: 0;">
            Au Maroc, un même acheteur alterne entre le français pour les services B2B et médicaux, l'arabe pour certaines recherches locales sur mobile et l'anglais pour le tourisme international, l'IT ou l'investissement. Nous séparons les campagnes par langue et par zone urbaine (Casablanca Anfa/Maarif/Sidi Maârouf, Rabat Agdal/Hay Riad, Marrakech Guéliz/Hivernage/Médina, Tanger, Agadir) afin d'aligner chaque annonce sur la langue exacte de l'utilisateur.
          </p>
        </section>

        <section style="margin-bottom: 3rem;">
          <h2 style="color: #0F2D25; font-size: 1.9rem; margin-bottom: 1.25rem; font-family: Georgia, serif;">
            Notre méthodologie de pilotage SEA et de tracking des conversions
          </h2>
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            <div style="padding: 1.25rem; border-left: 3px solid #0F2D25; background: #FAF8F5;">
              <h3 style="color: #0F2D25; font-size: 1.2rem; margin: 0 0 0.35rem 0;">Étape 01 : Audit SEA Complet &amp; Cartographie d'Intention</h3>
              <p style="margin: 0; color: #4a5568;">Analyse approfondie de votre compte existant ou des enchères concurrentes au Maroc, estimation des volumes mensuels de recherche, calcul du CPA cible acceptable selon votre marge commerciale et plan média détaillé.</p>
            </div>
            <div style="padding: 1.25rem; border-left: 3px solid #0F2D25; background: #FAF8F5;">
              <h3 style="color: #0F2D25; font-size: 1.2rem; margin: 0 0 0.35rem 0;">Étape 02 : Tracking Chirurgical (GTM, GA4, WhatsApp, Appels &amp; CMI/PMS)</h3>
              <p style="margin: 0; color: #4a5568;">Déploiement complet de Google Tag Manager (GTM), Google Analytics 4 (GA4) et des Conversions Améliorées (Enhanced Conversions) pour remonter chaque demande de devis, appel téléphonique, clic WhatsApp qualifié, transaction CMI ou réservation directe PMS.</p>
            </div>
            <div style="padding: 1.25rem; border-left: 3px solid #0F2D25; background: #FAF8F5;">
              <h3 style="color: #0F2D25; font-size: 1.2rem; margin: 0 0 0.35rem 0;">Étape 03 : Structuration Granulaire &amp; Pages d'Atterrissage Rapides</h3>
              <p style="margin: 0; color: #4a5568;">Rédaction d'annonces persuasives à haut taux de clic (CTR), paramétrage de toutes les extensions pertinentes et recommandations d'optimisation sur vos landing pages pour améliorer le taux de conversion sur mobile.</p>
            </div>
            <div style="padding: 1.25rem; border-left: 3px solid #0F2D25; background: #FAF8F5;">
              <h3 style="color: #0F2D25; font-size: 1.2rem; margin: 0 0 0.35rem 0;">Étape 04 : Optimisation Hebdomadaire &amp; Reporting ROI Transparent</h3>
              <p style="margin: 0; color: #4a5568;">Nettoyage hebdomadaire des termes de recherche, exclusions négatives, réallocation budgétaire vers les campagnes les plus rentables et tableau de bord mensuel centré sur le coût par prospect qualifié et le chiffre d'affaires généré.</p>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 3rem; background: #0F2D25; color: white; padding: 2.25rem; border-radius: 12px;">
          <h2 style="color: white; font-size: 1.85rem; margin-top: 0; margin-bottom: 0.75rem; font-family: Georgia, serif;">
            Tarif Agence Google Ads Maroc : Forfait Mensuel Fixe &amp; Transparent
          </h2>
          <p style="font-size: 2rem; font-weight: bold; color: #D46E55; margin-bottom: 0.75rem;">
            ${escapeHtml(gData.investmentPrice)} <span style="font-size: 1rem; font-weight: normal; color: #e2e8f0;">(hors budget média payé directement à Google)</span>
          </p>
          <p style="color: #e2e8f0; line-height: 1.7; margin-bottom: 1.5rem;">
            ${escapeHtml(gData.investmentDesc)} Supervision senior par J.Mellal (Consultant SEO &amp; Stratège Marketing Digital Propulsé par l'IA), zéro frais d'ouverture de compte, propriété intégrale de vos données historiques et liberté contractuelle mensuelle.
          </p>
          <a href="/contact" style="display: inline-block; background: #D46E55; color: white; padding: 0.85rem 2rem; border-radius: 8px; text-decoration: none; font-weight: bold;">
            Recevoir mon Audit Google Ads Gratuit sous 24h
          </a>
        </section>

        <section style="margin-bottom: 3rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
          <div style="padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
            <h2 style="color: #0F2D25; font-size: 1.3rem; margin-top: 0; margin-bottom: 0.75rem; font-family: Georgia, serif;">Pôles Google Ads par Ville au Maroc</h2>
            <ul style="padding-left: 1.25rem; margin: 0; line-height: 1.9;">
              <li><a href="/expertise/google-ads/casablanca" style="color: #0F2D25; text-decoration: underline;">Campagnes Google Ads à Casablanca (PME &amp; B2B)</a></li>
              <li><a href="/expertise/google-ads/marrakech" style="color: #0F2D25; text-decoration: underline;">Campagnes Google Ads à Marrakech (Hôtels, Riads &amp; Services)</a></li>
              <li><a href="/zones/rabat" style="color: #0F2D25; text-decoration: underline;">Acquisition Digitale &amp; SEA à Rabat</a></li>
              <li><a href="/zones/agadir" style="color: #0F2D25; text-decoration: underline;">Acquisition Touristique &amp; Resorts à Agadir</a></li>
              <li><a href="/zones/maroc" style="color: #0F2D25; text-decoration: underline;">Couverture Nationale Maroc</a></li>
            </ul>
          </div>
          <div style="padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
            <h2 style="color: #0F2D25; font-size: 1.3rem; margin-top: 0; margin-bottom: 0.75rem; font-family: Georgia, serif;">Synergie SEA + SEO &amp; Conversion</h2>
            <ul style="padding-left: 1.25rem; margin: 0; line-height: 1.9;">
              <li><a href="/agence-seo-maroc" style="color: #0F2D25; text-decoration: underline;">Agence SEO Maroc (Référencement Naturel Durable)</a></li>
              <li><a href="/creation-site-web" style="color: #0F2D25; text-decoration: underline;">Création de Site Web &amp; Landing Pages Rapides</a></li>
              <li><a href="/services/bundle-site-ads" style="color: #0F2D25; text-decoration: underline;">Pack Complet Site Web + Campagnes Google Ads</a></li>
              <li><a href="/services/gestion-publicites-meta" style="color: #0F2D25; text-decoration: underline;">Publicités Meta Ads (Instagram &amp; Facebook)</a></li>
              <li><a href="/reservation-directe" style="color: #0F2D25; text-decoration: underline;">Stratégie de Réservation Directe Hôtelière</a></li>
            </ul>
          </div>
          <div style="padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
            <h2 style="color: #0F2D25; font-size: 1.3rem; margin-top: 0; margin-bottom: 0.75rem; font-family: Georgia, serif;">Secteurs &amp; Ressources Pratiques</h2>
            <ul style="padding-left: 1.25rem; margin: 0; line-height: 1.9;">
              <li><a href="/secteurs/pme-entreprises" style="color: #0F2D25; text-decoration: underline;">Marketing Digital pour PME &amp; Entreprises B2B</a></li>
              <li><a href="/secteurs/hotels-resorts" style="color: #0F2D25; text-decoration: underline;">Solutions Digitales Hôtels &amp; Resorts</a></li>
              <li><a href="/blog/tripadvisor-vs-google-ads" style="color: #0F2D25; text-decoration: underline;">Comparatif : Google Ads vs TripAdvisor Ads</a></li>
              <li><a href="/blog/google-ads-riads-recherche-mots-cles" style="color: #0F2D25; text-decoration: underline;">Guide Recherche de Mots-Clés Google Ads au Maroc</a></li>
              <li><a href="/realisations" style="color: #0F2D25; text-decoration: underline;">Études de Cas &amp; Résultats Clients</a></li>
            </ul>
          </div>
        </section>

        <section style="margin-bottom: 3rem;">
          <h2 style="color: #0F2D25; font-size: 1.85rem; margin-bottom: 1.5rem; font-family: Georgia, serif;">
            Questions fréquentes sur notre Agence Google Ads au Maroc
          </h2>
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            ${gData.faqs.map(faq => `
              <div style="padding: 1.25rem; border: 1px solid #e2e8f0; border-radius: 8px; background: #ffffff;">
                <h3 style="color: #0F2D25; font-size: 1.15rem; margin-top: 0; margin-bottom: 0.5rem;">${escapeHtml(faq.q)}</h3>
                <p style="margin: 0; color: #4a5568; line-height: 1.65;">${escapeHtml(faq.a)}</p>
              </div>
            `).join('')}
          </div>
        </section>
      </div>
    `;
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
      <div>
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

        ${renderMatrixLinksHtml(
          getMatrixLinksForService(serviceMapping.key, lang),
          isFR
            ? 'Déclinaisons Régionales & Sectorielles au Maroc'
            : 'Regional & Industry Applications Across Morocco',
          isFR
            ? "Consultez nos stratégies dédiées par destination (Marrakech, Casablanca, Agadir, Rabat) et par typologie d'établissement."
            : 'Review destination-specific benchmarks across Marrakech, Casablanca, Agadir, and Rabat along with vertical playbooks tailored to your market.'
        )}

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
      </div>
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
      const challenges = (isFR ? study.frDigitalChallenges : study.digitalChallenges) || [];
      const solution = isFR ? study.frRecommendedStrategy || study.recommendedStrategy : study.recommendedStrategy;
      const challengeDetail = isFR ? study.frChallengeDetail || study.challengeDetail : study.challengeDetail;
      const solutionDetail = isFR ? study.frSolutionDetail || study.solutionDetail : study.solutionDetail;
      const resultsDetail = isFR ? study.frResultsDetail || study.resultsDetail : study.resultsDetail;
      const roadmap = (isFR ? study.frImplementationRoadmap : study.implementationRoadmap) || [];
      const measurement = isFR ? study.frMeasurementFramework || study.measurementFramework : study.measurementFramework;

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
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1rem; font-family: Georgia, serif;">${isFR ? 'Contexte & Scénario Métier' : 'Business Scenario & Market Context'}</h2>
            <p style="color: #4a5568; line-height: 1.7; font-size: 1.05rem; margin-bottom: 1rem;">${escapeHtml(scenario)}</p>
            ${challengeDetail ? `<p style="color: #4a5568; line-height: 1.7; font-size: 1rem; margin-bottom: 1rem;">${escapeHtml(challengeDetail)}</p>` : ''}
            ${challenges.length > 0 ? `
              <h3 style="color: #0F2D25; font-size: 1.25rem; margin-bottom: 0.75rem;">${isFR ? 'Freins Digitaux Identifiés' : 'Key Digital Bottlenecks Identified'}</h3>
              <ul style="padding-left: 1.5rem; color: #4a5568; line-height: 1.65;">
                ${challenges.map(c => `<li style="margin-bottom: 0.5rem;">${escapeHtml(c)}</li>`).join('')}
              </ul>
            ` : ''}
          </section>

          <section style="margin-bottom: 2.5rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1rem; font-family: Georgia, serif;">${isFR ? 'Stratégie Recommandée Urunk' : 'Recommended Urunk Execution Strategy'}</h2>
            <p style="color: #4a5568; line-height: 1.7; font-size: 1.05rem; margin-bottom: 1rem;">${escapeHtml(solution)}</p>
            ${solutionDetail ? `<p style="color: #4a5568; line-height: 1.7; font-size: 1rem; margin-bottom: 1rem;">${escapeHtml(solutionDetail)}</p>` : ''}
            ${resultsDetail ? `
              <div style="background: #ffffff; border-left: 4px solid #D46E55; padding: 1.25rem 1.5rem; border-radius: 0 8px 8px 0; margin-top: 1.25rem;">
                <h3 style="color: #0F2D25; font-size: 1.2rem; margin: 0 0 0.5rem 0;">${isFR ? 'Impact Opérationnel & Résultats Cibles' : 'Projected Commercial Impact & Outcomes'}</h3>
                <p style="margin: 0; color: #4a5568; line-height: 1.65;">${escapeHtml(resultsDetail)}</p>
              </div>
            ` : ''}
          </section>

          ${roadmap.length > 0 ? `
          <section style="margin-bottom: 2.5rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1rem; font-family: Georgia, serif;">${isFR ? 'Feuille de Route de Déploiement' : 'Implementation Roadmap'}</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
              ${roadmap.map(step => `
                <div style="padding: 1.25rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
                  <div style="font-size: 0.85rem; font-weight: bold; color: #D46E55; text-transform: uppercase;">${escapeHtml(step.duration)}</div>
                  <h3 style="color: #0F2D25; font-size: 1.15rem; margin: 0.35rem 0 0.5rem 0;">${escapeHtml(step.phase)}</h3>
                  <p style="margin: 0; color: #4a5568; font-size: 0.95rem; line-height: 1.6;">${escapeHtml(step.focus)}</p>
                </div>
              `).join('')}
            </div>
            ${measurement ? `<p style="color: #4a5568; line-height: 1.65; margin-top: 1.25rem;"><strong>${isFR ? 'Cadre de Mesure Analytique :' : 'Analytics & Attribution Framework:'}</strong> ${escapeHtml(measurement)}</p>` : ''}
          </section>
          ` : ''}

          <div style="text-align: center; margin-top: 3rem;">
            <a href="${isFR ? '/contact' : '/en/contact'}" style="background: #D46E55; color: white; padding: 0.85rem 2rem; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
              ${isFR ? 'Obtenir des Résultats Similaires' : 'Achieve Similar Results for Your Property'}
            </a>
          </div>
        </article>
      `;
    }
  } else if (page.path === '/realisations' || page.path === '/en/work') {
    // WORK / CASE STUDIES DIRECTORY INDEX
    html += `
      <div>
        <header style="margin-bottom: 2.5rem; text-align: center;">
          <span style="display: inline-block; padding: 0.35rem 1rem; border-radius: 9999px; background: rgba(212,110,85,0.1); color: #D46E55; font-size: 0.85rem; font-weight: bold; text-transform: uppercase; margin-bottom: 1rem;">
            ${isFR ? 'Études de Cas & Architectures Appliquées' : 'Applied Growth Frameworks & Case Studies'}
          </span>
          <h1 style="font-size: 2.75rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">
            ${isFR ? 'Nos Réalisations & Modèles de Croissance au Maroc' : 'Hospitality & B2B Digital Growth Case Studies in Morocco'}
          </h1>
          <p style="font-size: 1.15rem; color: #4a5568; line-height: 1.65; max-width: 800px; margin: 0 auto;">
            ${isFR
              ? "Découvrez comment Urunk conçoit des écosystèmes d'acquisition directe sans commission pour les riads de Marrakech, les opérateurs touristiques nationaux et les entreprises de services à Casablanca."
              : "Explore how Urunk architects commission-free direct booking ecosystems and high-intent B2B lead pipelines for boutique Marrakech riads, Moroccan tour operators, and Casablanca service brands."}
          </p>
        </header>

        <section style="margin-bottom: 2.5rem; background: #FAF8F5; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0;">
          <h2 style="color: #0F2D25; font-size: 1.8rem; margin-top: 0; margin-bottom: 1rem; font-family: Georgia, serif;">
            ${isFR ? 'Notre Approche : Ingénierie Web, SEO Local et Rentabilité Directe' : 'Our Engineering Methodology: Speed, Search Authority & Net Margin'}
          </h2>
          <p style="color: #4a5568; line-height: 1.7; margin-bottom: 1rem;">
            ${isFR
              ? "Dans l'hôtellerie et le tourisme au Maroc, la majorité des établissements perdent entre 15 % et 25 % de leur chiffre d'affaires brut en commissions versées aux plateformes tierces (Booking.com, Expedia, GetYourGuide). Parallèlement, de nombreuses PME à Casablanca et Rabat souffrent de sites institutionnels lents qui ne convertissent pas les décideurs B2B sur mobile. Nos études de cas détaillent comment la refonte technique sous architecture rapide (< 1,5 seconde), l'intégration native des moteurs PMS (Cloudbeds, Mews, SiteMinder) et le ciblage Google Search permettent de reprendre le contrôle commercial."
              : "Across Morocco's hospitality and tourism sectors, independent properties routinely surrender 15% to 25% of gross room and excursion revenue to third-party OTA intermediaries such as Booking.com, Expedia, and GetYourGuide. Meanwhile, corporate service providers in Casablanca and Rabat often rely on slow legacy websites that fail to capture high-intent mobile searchers. Our applied strategy case studies document how sub-second web engineering, frictionless PMS checkout integration (Cloudbeds, Mews, SiteMinder), and precision Google Search & Maps campaigns rebuild direct revenue sovereignty."}
          </p>
          <p style="color: #4a5568; line-height: 1.7; margin: 0;">
            ${isFR
              ? "Chaque architecture présentée ci-dessous repose sur des indicateurs mesurables : coût par acquisition (CPA), part des réservations directes face aux OTA, positionnement dans le Pack Local Google Maps Top 3 et retour sur dépenses publicitaires (ROAS). Nos déploiements sont livrés clé en main en 4 à 6 semaines à tarif fixe dès 12 000 MAD, accompagnés de notre garantie contractuelle de performance de 90 jours."
              : "Every framework showcased below is anchored on verifiable commercial KPIs: Cost Per Acquisition (CPA), direct-to-OTA booking ratio, Google Maps Local 3-Pack rankings, and Return on Ad Spend (ROAS). All custom website builds start at a transparent 12,000 MAD fixed investment delivered in 4 to 6 weeks, backed by our contractual 90-day performance guarantee."}
          </p>
        </section>

        <section style="margin-bottom: 3rem;">
          <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1.5rem; font-family: Georgia, serif;">
            ${isFR ? 'Dossiers Stratégiques & Études Sectorielles Détaillées' : 'Detailed Sector Case Studies & Strategic Blueprints'}
          </h2>
          <div style="display: flex; flex-direction: column; gap: 2rem;">
            ${caseStudies.map(study => {
              const sTitle = isFR ? study.frTitle || study.title : study.title;
              const sIndustry = isFR ? study.frIndustry || study.industry : study.industry;
              const sLoc = isFR ? study.frLocation || study.location : study.location;
              const sScenario = isFR ? study.frBusinessScenario || study.businessScenario : study.businessScenario;
              const sStrategy = isFR ? study.frRecommendedStrategy || study.recommendedStrategy : study.recommendedStrategy;
              const sKpis = (isFR ? study.frRecommendedKPIs : study.recommendedKPIs) || [];
              const sHref = isFR ? `/realisations/${study.frSlug || study.slug}` : `/en/work/${study.slug}`;
              return `
                <div style="padding: 2rem; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
                  <div style="font-size: 0.85rem; color: #D46E55; font-weight: bold; text-transform: uppercase; margin-bottom: 0.5rem;">
                    ${escapeHtml(sIndustry)} &bull; ${escapeHtml(sLoc)}
                  </div>
                  <h3 style="font-size: 1.5rem; color: #0F2D25; margin: 0 0 0.75rem 0; font-family: Georgia, serif;">
                    <a href="${sHref}" style="color: #0F2D25; text-decoration: none;">${escapeHtml(sTitle)}</a>
                  </h3>
                  <p style="color: #4a5568; line-height: 1.65; margin-bottom: 0.75rem;"><strong>${isFR ? 'Problématique :' : 'Challenge:'}</strong> ${escapeHtml(sScenario)}</p>
                  <p style="color: #4a5568; line-height: 1.65; margin-bottom: 1.25rem;"><strong>${isFR ? 'Dispositif déployé :' : 'Strategic Solution:'}</strong> ${escapeHtml(sStrategy)}</p>
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem; margin-bottom: 1.25rem;">
                    ${sKpis.map(k => `
                      <div style="padding: 0.75rem; background: #FAF8F5; border-radius: 8px; border: 1px solid #e2e8f0;">
                        <div style="font-weight: bold; color: #0F2D25; font-size: 0.95rem;">${escapeHtml(k.metric)}</div>
                        <div style="font-size: 0.85rem; color: #4a5568;">${escapeHtml(k.targetDescription)}</div>
                      </div>
                    `).join('')}
                  </div>
                  <a href="${sHref}" style="color: #D46E55; font-weight: bold; text-decoration: underline;">
                    ${isFR ? 'Consulter l\'étude complète →' : 'Read full case study →'}
                  </a>
                </div>
              `;
            }).join('')}
          </div>
        </section>

        <section style="background: #0F2D25; color: #ffffff; padding: 2rem; border-radius: 12px; text-align: center;">
          <h2 style="color: #ffffff; font-size: 1.75rem; margin-top: 0; margin-bottom: 0.75rem; font-family: Georgia, serif;">
            ${isFR ? 'Prêt à Bâtir Votre Propre Canal d\'Acquisition Directe ?' : 'Ready to Build Your Own Direct Acquisition Engine?'}
          </h2>
          <p style="color: #e2e8f0; max-width: 650px; margin: 0 auto 1.5rem auto; line-height: 1.6;">
            ${isFR
              ? "Demandez votre diagnostic gratuit sous 24 à 48 heures. Nos ingénieurs analysent votre vitesse mobile, vos fuites de commissions OTA et votre potentiel SEO local."
              : "Request your complimentary 24–48 hour channel diagnostic. Our team audits your mobile speed, OTA commission leakage, and local Google Search opportunity."}
          </p>
          <a href="${isFR ? '/contact' : '/en/contact'}" style="display: inline-block; background: #D46E55; color: #ffffff; padding: 0.85rem 2rem; border-radius: 8px; text-decoration: none; font-weight: bold;">
            ${isFR ? 'Demander Mon Audit Gratuit' : 'Request My Free Strategy Audit'}
          </a>
        </section>
      </div>
    `;
  } else if (page.path.startsWith('/secteurs/') || page.path.startsWith('/en/industries/')) {
    // INDUSTRY VERTICAL LANDING PAGES (10 PAGES)
    const rawSlug = page.path.replace(/^\/(?:secteurs|en\/industries)\//, '');
    const industrySlugMap: Record<string, string> = {
      'hotels-resorts': 'hotels-resorts',
      'riads-maisons-hotes': 'riads-boutique-hotels',
      'riads-boutique-hotels': 'riads-boutique-hotels',
      'tour-operateurs': 'tour-operators',
      'tour-operators': 'tour-operators',
      'restaurants-traiteurs': 'restaurants-catering',
      'restaurants-catering': 'restaurants-catering',
      'pme-entreprises': 'corporate-smes',
      'corporate-smes': 'corporate-smes',
      'ecommerce': 'ecommerce'
    };
    const indKey = industrySlugMap[rawSlug] || rawSlug;
    const indMap = industriesData[indKey];
    if (indMap) {
      const data = indMap[lang];
      const matchedStudy = caseStudies.find(s => s.slug === data.caseStudySlug || s.frSlug === data.caseStudySlug);
      const studyHref = isFR
        ? `/realisations/${matchedStudy ? (matchedStudy.frSlug || matchedStudy.slug) : data.caseStudySlug}`
        : `/en/work/${matchedStudy ? matchedStudy.slug : data.caseStudySlug}`;

      html += `
        <div>
          <header style="margin-bottom: 2.5rem;">
            <p style="font-size: 0.9rem; color: #718096; margin-bottom: 0.5rem;">
              <a href="${isFR ? '/' : '/en'}" style="color: #718096; text-decoration: none;">${isFR ? 'Accueil' : 'Home'}</a> &gt;
              <a href="${isFR ? '/services' : '/en/services'}" style="color: #718096; text-decoration: none;">${isFR ? 'Secteurs' : 'Industries'}</a> &gt;
              ${escapeHtml(data.heroTitle)}
            </p>
            <h1 style="font-size: 2.65rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">${escapeHtml(data.heroTitle)}</h1>
            <p style="font-size: 1.15rem; color: #4a5568; line-height: 1.65; margin-bottom: 1.5rem;">${escapeHtml(data.heroSub)}</p>
            <div style="background: #f8fafc; border-left: 4px solid #0F2D25; padding: 1.25rem 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 1.25rem;">
              <p style="margin: 0; color: #2d3748; line-height: 1.65;">
                <strong>Urunk Agency</strong> ${isFR
                  ? "déploie des architectures numériques de pointe pour les acteurs de ce secteur au Maroc (Casablanca, Marrakech, Rabat, Agadir). Nos équipes conçoivent des sites web ultra-rapides synchronisés avec vos systèmes métiers et pilotent des campagnes Google Ads et SEO d'autorité générant plus de 40 % de requêtes directes sans commission d'intermédiaire. Forfaits création dès 12 000 MAD, gestion marketing dès 4 000 MAD/mois."
                  : "engineers high-performance web systems and direct-booking channels for this sector across Morocco and international feeder markets. We build speed-optimized platforms seamlessly integrated with industry booking engines, driving a 40%+ increase in direct revenue while bypassing steep OTA commissions. Web design starts at 12,000 MAD, performance ad management at 4,000 MAD/mo."}
              </p>
            </div>
            <aside style="background: #FAF8F5; border-left: 4px solid #D46E55; padding: 1.25rem 1.5rem; border-radius: 0 8px 8px 0;">
              <strong style="color: #0F2D25;">${escapeHtml(data.calloutTitle)} :</strong>
              <p style="margin: 0.4rem 0 0 0; color: #4a5568; line-height: 1.6;">${escapeHtml(data.calloutBody)}</p>
            </aside>
          </header>

          <section style="margin-bottom: 2.75rem;">
            <h2 style="color: #0F2D25; font-size: 1.85rem; margin-bottom: 1rem; font-family: Georgia, serif;">${escapeHtml(data.overviewTitle)}</h2>
            <p style="color: #4a5568; line-height: 1.75; margin-bottom: 1rem;">${escapeHtml(data.overviewText1)}</p>
            <p style="color: #4a5568; line-height: 1.75; margin-bottom: 1.5rem;">${escapeHtml(data.overviewText2)}</p>

            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.75rem;">
              <h3 style="color: #0F2D25; font-size: 1.35rem; margin-top: 0; margin-bottom: 1rem; font-family: Georgia, serif;">${escapeHtml(data.keyChallengesTitle)}</h3>
              <ul style="padding-left: 1.5rem; margin: 0; color: #4a5568; line-height: 1.7;">
                ${data.keyChallenges.map(ch => `<li style="margin-bottom: 0.5rem;">${escapeHtml(ch)}</li>`).join('')}
              </ul>
            </div>
          </section>

          <section style="margin-bottom: 2.75rem;">
            <h2 style="color: #0F2D25; font-size: 1.85rem; margin-bottom: 1.25rem; font-family: Georgia, serif;">${escapeHtml(data.solutionsTitle)}</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">
              ${data.solutions.map((sol, idx) => `
                <div style="padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
                  <h3 style="color: #0F2D25; font-size: 1.2rem; margin: 0 0 0.5rem 0;">0${idx + 1}. ${escapeHtml(sol.title)}</h3>
                  <p style="color: #4a5568; line-height: 1.65; margin: 0 0 0.85rem 0;">${escapeHtml(sol.desc)}</p>
                  <a href="${sol.link}" style="color: #D46E55; font-weight: 600; text-decoration: underline;">${isFR ? 'Explorer la solution →' : 'Explore service →'}</a>
                </div>
              `).join('')}
            </div>
          </section>

          <section style="margin-bottom: 2.75rem; background: #0F2D25; color: #ffffff; padding: 2rem; border-radius: 12px;">
            <span style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: #ECC94B; font-weight: bold;">${escapeHtml(data.caseStudyTitle)}</span>
            <h2 style="color: #ffffff; font-size: 1.7rem; margin: 0.5rem 0; font-family: Georgia, serif;">${escapeHtml(data.caseStudyName)}</h2>
            <p style="color: #ECC94B; font-weight: bold; margin: 0 0 0.75rem 0;">${escapeHtml(data.caseStudyMetric)}</p>
            <p style="color: #e2e8f0; line-height: 1.65; margin: 0 0 1.25rem 0;">${escapeHtml(data.caseStudyDesc)}</p>
            <a href="${studyHref}" style="display: inline-block; background: #D46E55; color: #ffffff; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: bold;">
              ${isFR ? 'Consulter l\'Étude Complète' : 'Explore Full Case Study'}
            </a>
          </section>

          ${renderMatrixLinksHtml(
            getMatrixLinksForIndustry(indKey, lang),
            isFR
              ? "Expertises Locales Dédiées à Votre Secteur d'Activité"
              : 'City & Sector Specializations for Your Industry',
            isFR
              ? 'Découvrez comment nous adaptons le référencement naturel, la création web rapide et les campagnes directes aux spécificités de votre secteur à Marrakech, Casablanca, Agadir et Rabat.'
              : 'Explore how our engineering and search teams tailor fast web platforms, organic SEO, and paid acquisition for your vertical across Marrakech, Casablanca, Agadir, and Rabat.'
          )}

          <section style="margin-bottom: 2.5rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1.25rem; font-family: Georgia, serif;">
              ${isFR ? 'Questions Fréquentes sur ce Secteur' : 'Sector Frequently Asked Questions'}
            </h2>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              ${data.faqs.map(faq => `
                <div style="padding: 1.25rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
                  <h3 style="color: #0F2D25; font-size: 1.15rem; margin: 0 0 0.5rem 0;">${escapeHtml(faq.q)}</h3>
                  <p style="margin: 0; color: #4a5568; line-height: 1.65;">${escapeHtml(faq.a)}</p>
                </div>
              `).join('')}
            </div>
          </section>
        </div>
      `;
    }
  } else if ((page.path.startsWith('/zones/') && page.path !== '/zones') || (page.path.startsWith('/en/locations/') && page.path !== '/en/locations')) {
    // REGIONAL LOCATION HUB PAGES (10 PAGES)
    const rawLoc = page.path.replace(/^\/(?:zones|en\/locations)\//, '');
    const locKey = rawLoc === 'maroc' ? 'morocco' : rawLoc;
    const locMap = locationsData[locKey];
    if (locMap) {
      const data = locMap[lang];
      const stats = locMap.marketStats || [];

      html += `
        <div>
          <header style="margin-bottom: 2.5rem;">
            <p style="font-size: 0.9rem; color: #718096; margin-bottom: 0.5rem;">
              <a href="${isFR ? '/' : '/en'}" style="color: #718096; text-decoration: none;">${isFR ? 'Accueil' : 'Home'}</a> &gt;
              <a href="${isFR ? '/zones' : '/en/locations'}" style="color: #718096; text-decoration: none;">${isFR ? 'Zones' : 'Locations'}</a> &gt;
              ${escapeHtml(data.heroTitle)}
            </p>
            <h1 style="font-size: 2.65rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">${escapeHtml(data.heroTitle)}</h1>
            <p style="font-size: 1.15rem; color: #4a5568; line-height: 1.65; margin-bottom: 1.5rem;">${escapeHtml(data.heroSub)}</p>
            <div style="background: #f8fafc; border-left: 4px solid #0F2D25; padding: 1.25rem 1.5rem; border-radius: 0 8px 8px 0; margin-bottom: 1.25rem;">
              <p style="margin: 0; color: #2d3748; line-height: 1.65;">
                <strong>Urunk Agency</strong> ${isFR
                  ? "déploie une présence opérationnelle et stratégique dans ce pôle économique marocain. Nos spécialistes accompagnent les entreprises, hôtels et riads locaux avec des solutions de création web sur-mesure (dès 12 000 MAD) et des campagnes d'acquisition locale Google Maps & Google Ads (dès 4 000 MAD/mois) pour capturer les flux de clients qualifiés sans intermédiaire."
                  : "maintains an active operational and strategic presence in this premier Moroccan economic hub. We equip local businesses, resorts, and boutique riads with custom speed-engineered web platforms (from 12,000 MAD) and high-intent local SEO & Google Ads management (from 4,000 MAD/mo)."}
              </p>
            </div>
            <aside style="background: #FAF8F5; border-left: 4px solid #D46E55; padding: 1.25rem 1.5rem; border-radius: 0 8px 8px 0;">
              <strong style="color: #0F2D25;">${escapeHtml(data.calloutTitle)} :</strong>
              <p style="margin: 0.4rem 0 0 0; color: #4a5568; line-height: 1.6;">${escapeHtml(data.calloutBody)}</p>
            </aside>
          </header>

          ${stats.length > 0 ? `
          <section style="margin-bottom: 2.5rem;">
            <h2 style="color: #0F2D25; font-size: 1.65rem; margin-bottom: 1rem; font-family: Georgia, serif;">
              ${isFR ? 'Indicateurs Économiques & Digitaux Clés' : 'Key Regional Market & Search Benchmarks'}
            </h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
              ${stats.map(st => `
                <div style="padding: 1.15rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
                  <div style="font-size: 1.45rem; font-weight: bold; color: #D46E55;">${escapeHtml(st.value)}</div>
                  <div style="font-size: 0.85rem; color: #4a5568; margin-top: 0.25rem;">${escapeHtml(st.label[lang])}</div>
                </div>
              `).join('')}
            </div>
          </section>
          ` : ''}

          <section style="margin-bottom: 2.75rem;">
            <h2 style="color: #0F2D25; font-size: 1.85rem; margin-bottom: 1rem; font-family: Georgia, serif;">${escapeHtml(data.overviewTitle)}</h2>
            <p style="color: #4a5568; line-height: 1.75; margin-bottom: 1rem;">${escapeHtml(data.overviewText1)}</p>
            <p style="color: #4a5568; line-height: 1.75; margin-bottom: 1.5rem;">${escapeHtml(data.overviewText2)}</p>

            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.75rem;">
              <h3 style="color: #0F2D25; font-size: 1.35rem; margin-top: 0; margin-bottom: 1rem; font-family: Georgia, serif;">${escapeHtml(data.marketHighlightsTitle)}</h3>
              <ul style="padding-left: 1.5rem; margin: 0; color: #4a5568; line-height: 1.7;">
                ${data.marketHighlights.map(hl => `<li style="margin-bottom: 0.5rem;">${escapeHtml(hl)}</li>`).join('')}
              </ul>
            </div>
          </section>

          <section style="margin-bottom: 2.75rem;">
            <h2 style="color: #0F2D25; font-size: 1.85rem; margin-bottom: 1.25rem; font-family: Georgia, serif;">${escapeHtml(data.localServicesTitle)}</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">
              ${data.localServices.map((srv, idx) => `
                <div style="padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
                  <h3 style="color: #0F2D25; font-size: 1.2rem; margin: 0 0 0.5rem 0;">0${idx + 1}. ${escapeHtml(srv.title)}</h3>
                  <p style="color: #4a5568; line-height: 1.65; margin: 0 0 0.85rem 0;">${escapeHtml(srv.desc)}</p>
                  <a href="${srv.link}" style="color: #D46E55; font-weight: 600; text-decoration: underline;">${isFR ? 'Découvrir le service →' : 'Explore service →'}</a>
                </div>
              `).join('')}
            </div>
          </section>

          ${renderMatrixLinksHtml(
            getMatrixLinksForLocation(locKey, lang),
            isFR
              ? "Pôles d'Expertise Métier & Acquisition dans cette Zone"
              : 'Specialized Search, Web & Paid Acquisition Playbooks',
            isFR
              ? 'Accédez directement à nos feuilles de route techniques adaptées aux hôtels, riads et entreprises opérant sur ce marché régional.'
              : 'Access dedicated technical roadmaps tailored for hotels, boutique riads, and enterprises competing in this regional market.'
          )}

          ${data.whyPartnerTitle && data.whyPartnerText ? `
          <section style="margin-bottom: 2.75rem; background: #FAF8F5; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0;">
            <h2 style="color: #0F2D25; font-size: 1.75rem; margin-top: 0; margin-bottom: 0.85rem; font-family: Georgia, serif;">${escapeHtml(data.whyPartnerTitle)}</h2>
            <p style="margin: 0; color: #4a5568; line-height: 1.75;">${escapeHtml(data.whyPartnerText)}</p>
          </section>
          ` : ''}

          <section style="margin-bottom: 2.75rem;">
            <h2 style="color: #0F2D25; font-size: 1.65rem; margin-bottom: 1rem; font-family: Georgia, serif;">${escapeHtml(data.nearbyLocationsTitle)}</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
              ${data.nearbyLocations.map(nb => `
                <div style="padding: 1.25rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
                  <h3 style="font-size: 1.1rem; margin: 0 0 0.4rem 0;"><a href="${nb.link}" style="color: #0F2D25; text-decoration: underline;">${escapeHtml(nb.title)}</a></h3>
                  <p style="margin: 0; color: #4a5568; font-size: 0.92rem; line-height: 1.55;">${escapeHtml(nb.desc)}</p>
                </div>
              `).join('')}
            </div>
          </section>

          <section style="margin-bottom: 2.5rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1.25rem; font-family: Georgia, serif;">
              ${isFR ? 'Questions Fréquentes sur ce Pôle Régional' : 'Regional Hub Frequently Asked Questions'}
            </h2>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              ${data.faqs.map(faq => `
                <div style="padding: 1.25rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
                  <h3 style="color: #0F2D25; font-size: 1.15rem; margin: 0 0 0.5rem 0;">${escapeHtml(faq.q)}</h3>
                  <p style="margin: 0; color: #4a5568; line-height: 1.65;">${escapeHtml(faq.a)}</p>
                </div>
              `).join('')}
            </div>
          </section>
        </div>
      `;
    }
  } else if (page.path === '/services/creation-site-web') {
    // COMMERCIAL WEBSITE CREATION SERVICE PAGE (/services/creation-site-web)
    html += `
      <div>
        <header style="margin-bottom: 2.5rem;">
          <p style="font-size: 0.9rem; color: #718096; margin-bottom: 0.5rem;"><a href="/" style="color: #718096; text-decoration: none;">Accueil</a> &gt; <a href="/services" style="color: #718096; text-decoration: none;">Services</a> &gt; Création de Site Web Sur-Mesure</p>
          <h1 style="font-size: 2.75rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">Création de Site Web Sur-Mesure au Maroc : Vitesse, SEO & Conversion Directe</h1>
          <p style="font-size: 1.2rem; color: #4a5568; line-height: 1.65; margin-bottom: 1.5rem;">
            Nous concevons des plateformes web ultra-rapides en React et WordPress optimisé pour les hôtels, riads, restaurants et PME marocaines souhaitant transformer leur trafic mobile en réservations et prospects directs sans commission.
          </p>
          <aside style="background: #FAF8F5; border-left: 4px solid #D46E55; padding: 1.25rem 1.5rem; border-radius: 0 8px 8px 0;">
            <strong style="color: #0F2D25;">Investissement Clé en Main dès 12 000 MAD (≈ 1 100 €) :</strong>
            <p style="margin: 0.4rem 0 0 0; color: #4a5568; line-height: 1.6;">Livraison complète en 4 à 6 semaines, propriété intellectuelle à 100 %, zéro frais de licence mensuel et garantie contractuelle de performance sous 90 jours.</p>
          </aside>
        </header>

        <section style="margin-bottom: 2.75rem;">
          <h2 style="color: #0F2D25; font-size: 1.85rem; margin-bottom: 1rem; font-family: Georgia, serif;">Pourquoi les Sites Web Classiques Freinent Votre Chiffre d'Affaires au Maroc</h2>
          <p style="color: #4a5568; line-height: 1.75; margin-bottom: 1rem;">
            Plus de 82 % des recherches touristiques et commerciales au Maroc s'effectuent désormais sur smartphone. Pourtant, la majorité des établissements hôteliers de Marrakech ou Agadir et des entreprises de services à Casablanca utilisent encore des thèmes préfabriqués surchargés qui mettent plus de 5 secondes à s'afficher sur réseau 4G. Chaque seconde supplémentaire de chargement entraîne une chute mesurable du taux de conversion : l'internaute quitte la page et réserve sur Booking.com (vous coûtant 18 % à 25 % de commission) ou contacte un concurrent mieux positionné sur Google.
          </p>
          <p style="color: #4a5568; line-height: 1.75; margin-bottom: 0;">
            Chez Urunk, notre pôle d'ingénierie web traite votre site internet comme votre actif commercial le plus rentable. Nous éliminons les extensions superflues, structurons chaque page autour de l'intention de recherche Google (balisage Schema.org natif, hiérarchie Hn sémantique, Core Web Vitals dans le vert) et intégrons un parcours de conversion sans friction connecté directement à votre moteur de réservation PMS ou à votre CRM commercial.
          </p>
        </section>

        <section style="margin-bottom: 2.75rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 2rem;">
          <h2 style="color: #0F2D25; font-size: 1.8rem; margin-top: 0; margin-bottom: 1.25rem; font-family: Georgia, serif;">Architecture Technique & Livrables Inclus dans Chaque Projet</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.25rem;">
            <div style="padding: 1.25rem; background: #FAF8F5; border-radius: 8px;">
              <h3 style="color: #0F2D25; font-size: 1.15rem; margin: 0 0 0.5rem 0;">01. Design UX Mobile-First Sur-Mesure</h3>
              <p style="margin: 0; color: #4a5568; line-height: 1.6;">Maquettes éditoriales haute couture valorisant votre identité visuelle, vos chambres ou vos offres B2B avec appels à l'action persistants sur mobile.</p>
            </div>
            <div style="padding: 1.25rem; background: #FAF8F5; border-radius: 8px;">
              <h3 style="color: #0F2D25; font-size: 1.15rem; margin: 0 0 0.5rem 0;">02. Performance Core Web Vitals (&lt; 1,5s)</h3>
              <p style="margin: 0; color: #4a5568; line-height: 1.6;">Compression d'images WebP/AVIF nouvelle génération, pré-rendu statique ultra-léger et distribution CDN mondiale pour un affichage quasi instantané.</p>
            </div>
            <div style="padding: 1.25rem; background: #FAF8F5; border-radius: 8px;">
              <h3 style="color: #0F2D25; font-size: 1.15rem; margin: 0 0 0.5rem 0;">03. Intégration PMS, CMI & WhatsApp</h3>
              <p style="margin: 0; color: #4a5568; line-height: 1.6;">Connexion fluide avec Cloudbeds, Mews, SiteMinder, Amenitiz, passerelles de paiement marocaines CMI/PayZone et qualification directe via WhatsApp Business.</p>
            </div>
            <div style="padding: 1.25rem; background: #FAF8F5; border-radius: 8px;">
              <h3 style="color: #0F2D25; font-size: 1.15rem; margin: 0 0 0.5rem 0;">04. Fondations SEO Bilingues & IA</h3>
              <p style="margin: 0; color: #4a5568; line-height: 1.6;">Architecture multilingue native (français, anglais, espagnol) avec balises hreflang réciproques, données structurées JSON-LD et suivi analytique GA4 complet.</p>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 2.75rem;">
          <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1.25rem; font-family: Georgia, serif;">Méthodologie de Déploiement en 4 à 6 Semaines</h2>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="padding: 1.25rem; border-left: 3px solid #0F2D25; background: #FAF8F5;">
              <h3 style="color: #0F2D25; font-size: 1.15rem; margin: 0 0 0.35rem 0;">Semaine 1 : Audit Sémantique & Architecture de Conversion</h3>
              <p style="margin: 0; color: #4a5568; line-height: 1.6;">Analyse des requêtes Google de votre marché à Casablanca, Marrakech, Rabat ou Agadir, cartographie de l'arborescence SEO et wireframes orientés réservation directe.</p>
            </div>
            <div style="padding: 1.25rem; border-left: 3px solid #0F2D25; background: #FAF8F5;">
              <h3 style="color: #0F2D25; font-size: 1.15rem; margin: 0 0 0.35rem 0;">Semaines 2 à 3 : Direction Artistique & Rédaction Persuasive</h3>
              <p style="margin: 0; color: #4a5568; line-height: 1.6;">Création de l'interface sur-mesure, optimisation photographique et rédaction de contenus bilingues calibrés pour convaincre vos futurs hôtes et décideurs.</p>
            </div>
            <div style="padding: 1.25rem; border-left: 3px solid #0F2D25; background: #FAF8F5;">
              <h3 style="color: #0F2D25; font-size: 1.15rem; margin: 0 0 0.35rem 0;">Semaines 4 à 5 : Développement Front-End & Connexions API</h3>
              <p style="margin: 0; color: #4a5568; line-height: 1.6;">Intégration du code propre, branchement du moteur de réservation ou des formulaires CRM, tests rigoureux sur iOS et Android et validation PageSpeed.</p>
            </div>
            <div style="padding: 1.25rem; border-left: 3px solid #0F2D25; background: #FAF8F5;">
              <h3 style="color: #0F2D25; font-size: 1.15rem; margin: 0 0 0.35rem 0;">Semaine 6 : Mise en Production, Indexation Google & Formation</h3>
              <p style="margin: 0; color: #4a5568; line-height: 1.6;">Déploiement sécurisé SSL, soumission des sitemaps sur Google Search Console, transfert intégral des accès administrateurs et formation de votre équipe.</p>
            </div>
          </div>
        </section>

        ${renderMatrixLinksHtml(
          getMatrixLinksForService('website-design', 'fr'),
          'Création de Sites Web & Réservation Directe par Ville au Maroc',
          'Consultez nos feuilles de route dédiées à Marrakech, Casablanca, Agadir et Rabat pour les hôtels, riads et entreprises.'
        )}

        <section style="margin-bottom: 2.5rem;">
          <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1.25rem; font-family: Georgia, serif;">Questions Fréquentes — Création de Site Web au Maroc</h2>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="padding: 1.25rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
              <h3 style="color: #0F2D25; font-size: 1.15rem; margin: 0 0 0.5rem 0;">Sommes-nous propriétaires à 100 % du site web livré ?</h3>
              <p style="margin: 0; color: #4a5568; line-height: 1.65;">Oui, intégralement. Dès la livraison finale, le nom de domaine, le code source, les visuels et l'ensemble des comptes analytiques vous appartiennent sans aucune redevance mensuelle obligatoire envers Urunk.</p>
            </div>
            <div style="padding: 1.25rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
              <h3 style="color: #0F2D25; font-size: 1.15rem; margin: 0 0 0.5rem 0;">En combien de temps l'investissement de 12 000 MAD est-il rentabilisé ?</h3>
              <p style="margin: 0; color: #4a5568; line-height: 1.65;">Pour un riad ou un hôtel facturant 1 500 MAD la nuitée, économiser 20 % de commission Booking.com sur à peine 40 nuitées directes rembourse intégralement le coût de création du site internet.</p>
            </div>
          </div>
        </section>

        <div style="text-align: center; margin-top: 2.5rem;">
          <a href="/contact" style="background: #D46E55; color: white; padding: 0.85rem 2rem; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
            Demander un Devis & Audit Gratuit
          </a>
        </div>
      </div>
    `;
  } else {
    // GENERIC / CORE PAGE FALLBACK
    if (page.path === '/a-propos' || page.path === '/en/about') {
      html += `
        <div>
          <header style="margin-bottom: 2.5rem; text-align: center;">
            <h1 style="font-size: 2.75rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">${escapeHtml(page.title)}</h1>
            <p style="font-size: 1.2rem; color: #4a5568; line-height: 1.6; max-width: 800px; margin: 0 auto;">${escapeHtml(page.description)}</p>
          </header>

          <section style="margin-bottom: 2.5rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1rem; font-family: Georgia, serif;">${isFR ? 'Notre Mission : Rendre aux Hôteliers et Entreprises Marocaines Leur Souveraineté Digitale' : 'Our Core Mission: Restoring Direct Revenue Sovereignty Across Morocco'}</h2>
            <p style="font-size: 1.05rem; line-height: 1.75; color: #4a5568; margin-bottom: 1rem;">
              ${isFR
                ? "Fondée pour répondre à un déséquilibre structurel du marché touristique et B2B marocain, Urunk accompagne les hôtels indépendants, les riads de prestige, les opérateurs d'excursions et les PME ambitieuses dans la reprise en main de leur acquisition client. Pendant trop longtemps, d'excellents établissements à Marrakech, Agadir ou Fès ont cédé entre 18 % et 25 % de leur chiffre d'affaires brut aux agences de voyages en ligne (OTA), faute de disposer d'une plateforme web rapide et d'une visibilité directe sur Google."
                : "Founded to solve a structural margin leak across Morocco's hospitality and B2B sectors, Urunk empowers independent hotels, luxury Medina riads, tour operators, and growth-stage SMEs to own their customer acquisition pipeline. For years, exceptional properties in Marrakech, Agadir, and Fes surrendered 18% to 25% of their gross room revenue to Online Travel Agencies simply because their own websites loaded slowly on mobile devices and ranked poorly on Google Search."}
            </p>
            <p style="font-size: 1.05rem; line-height: 1.75; color: #4a5568; margin-bottom: 0;">
              ${isFR
                ? "Nous combinons une ingénierie web moderne (sites sur-mesure à 12 000 MAD livrés en 4 à 6 semaines, temps de chargement inférieur à 1,5 seconde) avec un pilotage chirurgical du référencement naturel local (SEO Google Maps) et des campagnes payantes à haute intention sur Google Ads, Meta Ads et TripAdvisor. Notre modèle économique est 100 % aligné sur votre rentabilité : zéro commission sur vos ventes, propriété intellectuelle totale de vos actifs et transparence absolue."
                : "We bridge modern front-end software engineering (fixed-fee 12,000 MAD custom websites delivered in 4 to 6 weeks with sub-1.5-second load times) with surgical local SEO, Google Maps 3-Pack positioning, and high-intent paid acquisition across Google Ads, Meta Ads, and TripAdvisor. Our business model is 100% aligned with your net margin: zero commission on your bookings, full ownership of all source code and ad accounts, and transparent monthly reporting."}
            </p>
          </section>

          <section style="margin-bottom: 2.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 2rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-top: 0; margin-bottom: 1rem; font-family: Georgia, serif;">${isFR ? 'Principes Opérationnels de Croissance Directe' : 'Hospitality & B2B Growth Operating Principles'}</h2>
            <p style="color: #4a5568; line-height: 1.7; margin-bottom: 1rem;">
              ${isFR ? 'Chaque projet géré par Urunk repose sur une structure contractuelle transparente et des normes d\'ingénierie strictes pour garantir un retour sur investissement mesurable :' : 'Every client engagement managed by Urunk operates under rigorous engineering benchmarks and clear contractual commitments:'}
            </p>
            <ul style="padding-left: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; color: #4a5568; line-height: 1.65; margin-bottom: 0;">
              <li><strong>${isFR ? 'Site Web Sur-Mesure (12 000 MAD / ≈ 1 100 €)' : 'Custom Direct Booking Website (12,000 MAD / ≈ €1,100)'}</strong> — ${isFR ? 'Livré clé en main sous 4 à 6 semaines, vitesse mobile optimale, raccordement PMS (Cloudbeds, Mews, SiteMinder) et 0 % de commission d\'intermédiaire.' : 'Engineered for sub-second mobile performance, integrated directly with Cloudbeds, Mews, or SiteMinder, and delivered turnkey in 4–6 weeks with zero commission fees.'}</li>
              <li><strong>${isFR ? 'Gestion Publicitaire & SEO (4 000 MAD/mois Google/Meta/SEO, 3 000 MAD/mois TripAdvisor)' : 'Targeted Ad & SEO Retainers (4,000 MAD/mo Google/Meta/SEO, 3,000 MAD/mo TripAdvisor)'}</strong> — ${isFR ? 'Campagnes haute intention ciblant les marchés émetteurs européens, britanniques et nord-américains ainsi que les décideurs locaux au Maroc.' : 'High-intent multilingual search and paid social marketing capturing travelers in France, the UK, Germany, and North America alongside domestic Moroccan buyers.'}</li>
              <li><strong>${isFR ? 'Zéro Engagement Forcé & Préavis de 15 Jours' : 'Zero Lock-In Contracts & 15-Day Flexibility'}</strong> — ${isFR ? 'Nous fidélisons nos partenaires par la performance réelle de leurs réservations directes, jamais par des clauses d\'engagement rigides.' : 'We earn client retention month after month through verifiable revenue performance rather than restrictive annual agency retainers.'}</li>
              <li><strong>${isFR ? 'Garantie Contractuelle de 90 Jours' : 'Contractual 90-Day Performance Guarantee'}</strong> — ${isFR ? 'Si les jalons de performance définis ne sont pas atteints sous 90 jours, nous poursuivons l\'optimisation sans frais de gestion additionnels.' : 'If agreed direct channel milestones are not met within 90 days of launch, we continue optimizing your campaigns with zero additional management fees.'}</li>
            </ul>
          </section>

          <section style="margin-bottom: 2.5rem; background: #FAF8F5; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-top: 0; margin-bottom: 1rem; font-family: Georgia, serif;">${isFR ? 'Ancrage Local à Casablanca et Marrakech' : 'On-the-Ground Presence in Casablanca and Marrakech'}</h2>
            <p style="color: #4a5568; line-height: 1.75; margin-bottom: 1rem;">
              ${isFR
                ? "Contrairement aux agences généralistes étrangères déconnectées des réalités du terrain marocain, Urunk opère depuis son siège au 3 Rue El Kadi Lass, Maarif, Casablanca, Maroc pour accompagner les directions générales, PME industrielles, acteurs de la restauration et enseignes B2B, avec une présence opérationnelle dédiée à Marrakech au plus près des propriétaires de riads, hôtels-boutiques, camps du désert et agences réceptives."
                : "Unlike offshore agencies unfamiliar with Moroccan market nuances, Urunk operates from its headquarters at 3 Rue El Kadi Lass, Maarif, Casablanca, Morocco serving corporate SMEs, B2B enterprises, and hospitality groups, alongside dedicated on-the-ground coverage in Marrakech working directly with boutique riad owners, luxury resorts, desert camps, and inbound tour operators."}
            </p>
            <p style="color: #4a5568; line-height: 1.75; margin: 0;">
              ${isFR
                ? "Cette double expertise nous permet de maîtriser simultanément les exigences réglementaires locales (conformité CNDP Loi 09-08, passerelles monétiques CMI, saisonnalité touristique régionale) et les standards internationaux du référencement multilingue (français, anglais, espagnol, arabe) et de l'optimisation pour les moteurs IA (ChatGPT, Gemini, Perplexity)."
                : "This dual footprint enables our strategists and engineers to combine local operational mastery—including CNDP Law 09-08 compliance, CMI payment gateway workflows, and regional tourism seasonality—with international multilingual SEO (English, French, Spanish, Arabic) and Answer Engine Optimization (GEO) for modern AI discovery platforms."}
            </p>
          </section>

          <div style="text-align: center; margin-top: 2.5rem;">
            <a href="${isFR ? '/contact' : '/en/contact'}" style="background: #D46E55; color: white; padding: 0.85rem 2rem; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
              ${isFR ? 'Demander un Audit Stratégique Gratuit' : 'Schedule a Complimentary Strategy Audit'}
            </a>
          </div>
        </div>
      `;
    } else if (page.path === '/tarifs' || page.path === '/en/pricing') {
      html += `
        <div>
          <header style="margin-bottom: 2.5rem; text-align: center;">
            <h1 style="font-size: 2.75rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">${escapeHtml(page.title)}</h1>
            <p style="font-size: 1.2rem; color: #4a5568; line-height: 1.6; max-width: 800px; margin: 0 auto;">${escapeHtml(page.description)}</p>
          </header>

          <section style="margin-bottom: 3rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1rem; font-family: Georgia, serif; text-align: center;">${isFR ? 'Comparatif des Investissements & Retour sur Investissement' : 'Transparent Investment & ROI Comparison'}</h2>
            <p style="color: #4a5568; line-height: 1.7; margin-bottom: 1.5rem;">
              ${isFR
                ? "Contrairement aux agences traditionnelles facturant au pourcentage ou imposant des abonnements propriétaires opaques, la grille tarifaire d'Urunk est publique, forfaitaire et conçue pour maximiser votre marge nette dès le premier trimestre. Vous conservez 100 % de la propriété de votre code source, de votre nom de domaine et de vos comptes publicitaires."
                : "Unlike legacy agencies hiding behind custom quotes or charging ongoing software licensing fees, Urunk publishes clear, fixed-rate investments engineered to maximize your net margin from quarter one. You retain 100% ownership of your website code, domain, analytics, and ad accounts."}
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
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; color: #D46E55; font-weight: bold;">${isFR ? 'À partir de 12 000 MAD (approx. 1 100 €) (Paiement unique)' : 'Starting at 12,000 MAD (approx. €1,100) (One-Time)'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0;">${isFR ? '4 à 6 semaines' : '4–6 Weeks'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; color: #38a169; font-weight: bold;">${isFR ? '0 % de commission OTA' : '0% OTA Commissions'}</td>
                </tr>
                <tr style="background: #f7fafc;">
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; font-weight: bold;">${isFR ? 'SEO & Référencement Local' : 'SEO & Local Search'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; color: #D46E55; font-weight: bold;">${isFR ? 'À partir de 4 000 MAD/mois (approx. 370 €/mois)' : 'Starting at 4,000 MAD/mo (approx. €370/mo)'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0;">${isFR ? 'Accompagnement continu' : 'Ongoing'}</td>
                  <td style="padding: 0.85rem; border: 1px solid #e2e8f0; color: #38a169; font-weight: bold;">${isFR ? 'Visibilité Google Maps Top 3' : 'Google Maps 3-Pack Visibility'}</td>
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

            <section style="margin-bottom: 2rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 2rem;">
              <h2 style="color: #0F2D25; font-size: 1.65rem; margin-top: 0; margin-bottom: 0.85rem; font-family: Georgia, serif;">
                ${isFR ? 'Calcul de Rentabilité : Pourquoi l\'Acquisition Directe Surpasse les OTA' : 'Break-Even Math: Why Direct Channels Outperform 20% OTA Commissions'}
              </h2>
              <p style="color: #4a5568; line-height: 1.75; margin-bottom: 1rem;">
                ${isFR
                  ? "Un riad ou hôtel-boutique de 12 chambres affichant un tarif moyen de 1 600 MAD par nuitée et un taux d'occupation de 70 % génère plus de 4,9 millions MAD de chiffre d'affaires annuel. Si 65 % de ces nuitées proviennent de Booking.com ou Expedia à 20 % de commission moyenne, l'établissement reverse plus de 630 000 MAD par an aux plateformes tierces. En transférant seulement 25 % à 40 % de ce volume vers votre propre moteur de réservation directe grâce à un site rapide (12 000 MAD une seule fois) et un pilotage SEO/Ads mensuel (4 000 MAD/mois), l'économie nette annuelle dépasse largement l'investissement initial dès les premières semaines."
                  : "Consider a 12-room Marrakech riad or boutique hotel averaging 1,600 MAD per night at 70% occupancy—generating roughly 4.9 million MAD in annual room revenue. When 65% of those nights come through Booking.com or Expedia at a 20% blended commission, the property loses over 630,000 MAD every single year in intermediary fees. Shifting just 25% to 40% of that volume onto your own commission-free booking engine via a one-time 12,000 MAD website and a 4,000 MAD/month search acquisition retainer pays back the entire build within weeks and compounds net profit year-round."}
              </p>
              <p style="color: #4a5568; line-height: 1.75; margin: 0;">
                ${isFR
                  ? "Modalités de facturation claires : acompte de 50 % au lancement pour les créations de sites web et solde de 50 % à la mise en ligne validée. Pour la gestion mensuelle SEO et publicitaire, le budget média est réglé directement par votre carte d'entreprise auprès de Google, Meta ou TripAdvisor pour une transparence comptable totale, sans aucun frais de dossier caché et avec un simple préavis de 15 jours."
                  : "Straightforward billing structure: custom website builds follow a 50% kickoff milestone and 50% upon approved production launch. For monthly SEO and paid media retainers, your ad spend is billed directly to your own corporate payment method by Google, Meta, or TripAdvisor—ensuring 100% financial transparency, zero setup markups, and flexible 15-day cancellation notice."}
              </p>
            </section>

            <div style="background: #FAF8F5; border: 2px solid #0F2D25; border-radius: 12px; padding: 2rem; margin-top: 2rem;">
              <h3 style="color: #0F2D25; font-size: 1.5rem; margin-top: 0; margin-bottom: 0.5rem; font-family: Georgia, serif;">${isFR ? 'Engagez-vous en Toute Sérénité : Garantie de 90 Jours' : 'Backed by Our Contractual 90-Day Guarantee'}</h3>
              <p style="color: #4a5568; line-height: 1.65; margin-bottom: 0;">
                ${isFR ? 'Tous nos contrats d\'accompagnement direct sont couverts par une garantie de performance de 90 jours. Si les objectifs convenus lors de l\'audit initial ne sont pas atteints dans les 90 jours suivant le lancement, nos équipes maintiennent l\'optimisation de vos campagnes sans facturer d\'honoraires supplémentaires.' : 'Every website build (12,000 MAD) and monthly ad management program (3,000 MAD to 4,000 MAD/mo) is backed by our strict 90-day direct revenue guarantee: if agreed launch benchmarks are not met within 90 days, we continue optimizing at zero management fee until achieved.'}
              </p>
            </div>
          </section>
        </div>
      `;
    } else if (page.path === '/zones' || page.path === '/en/locations') {
      const h1Text = isFR ? "Nos Zones d'Intervention au Maroc" : "Locations We Serve in Morocco";
      const subText = isFR 
        ? "Urunk accompagne les hôtels, riads et entreprises à Casablanca, Marrakech, Rabat, Agadir et partout au Maroc avec le SEO local, l'optimisation Google Business Profile et la création de sites web performants."
        : "Urunk works with hotels, riads and businesses across Casablanca, Marrakech, Rabat, Agadir and all of Morocco, providing local SEO, Google Business Profile optimization and high-performance websites.";
      
      html += `
        <div>
          <header style="margin-bottom: 2.5rem; text-align: center;">
            <h1 style="font-size: 2.75rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">${escapeHtml(h1Text)}</h1>
            <p style="font-size: 1.2rem; color: #4a5568; line-height: 1.6; max-width: 800px; margin: 0 auto;">${escapeHtml(subText)}</p>
          </header>

          <section style="margin-bottom: 2.5rem; background: #FAF8F5; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-top: 0; margin-bottom: 1rem; font-family: Georgia, serif;">
              ${isFR ? 'Stratégie de Référencement Régional & Intention de Recherche au Maroc' : 'Regional Search Strategy & Market Coverage Across Morocco'}
            </h2>
            <p style="color: #4a5568; line-height: 1.75; margin-bottom: 1rem;">
              ${isFR
                ? "Le paysage numérique marocain exige des stratégies d'acquisition calibrées selon les réalités économiques et saisonnières de chaque ville. Des riads historiques de la Médina de Marrakech aux sièges d'entreprises de Casablanca, en passant par l'écosystème institutionnel de Rabat et les complexes balnéaires d'Agadir et Taghazout, les requêtes formulées sur Google et Google Maps diffèrent radicalement. Urunk déploie un maillage national combinant référencement local avancé, optimisation du Pack Local Google Maps Top 3 et ingénierie web ultra-rapide dès 12 000 MAD."
                : "Morocco's digital economy demands localized search strategies calibrated to the distinct commercial and seasonal dynamics of each city. From historic Medina riads in Marrakech and corporate headquarters in Casablanca to institutional consultancies in Rabat and Atlantic surf resorts in Agadir and Taghazout, buyer search behavior varies sharply by region. Urunk operates a nationwide growth network combining hyper-local SEO, Google Maps 3-Pack positioning, and sub-second web engineering starting at 12,000 MAD."}
            </p>
            <p style="color: #4a5568; line-height: 1.75; margin: 0;">
              ${isFR
                ? "Grâce à nos implantations opérationnelles à Marrakech et Casablanca, nous maîtrisons le référencement multilingue (français, anglais, arabe, espagnol) indispensable pour capter simultanément les décideurs B2B nationaux et les voyageurs européens ou nord-américains à haute valeur ajoutée, réduisant de 15 % à 25 % les frais de commission versés aux plateformes intermédiaires."
                : "Operating on-the-ground hubs in Marrakech and Casablanca allows our team to execute native multilingual search campaigns (English, French, Spanish, Arabic) that capture both domestic B2B decision-makers and high-spending European and North American travelers—helping hospitality clients bypass 15% to 25% OTA commissions and lift direct bookings by +40%."}
            </p>
          </section>

          <section style="margin-bottom: 3rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-bottom: 1.5rem; font-family: Georgia, serif; text-align: center;">${isFR ? "Pôles Régionaux & Hubs SEO Dédiés" : "Dedicated Regional Hubs & SEO Coverage"}</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
              <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 1.5rem; border-radius: 10px;">
                <h3 style="color: #0F2D25; margin-top: 0;"><a href="${isFR ? '/zones/maroc' : '/en/locations/morocco'}" style="color: #0F2D25; text-decoration: none;">${isFR ? 'Maroc (Hub National)' : 'Morocco (National Hub)'}</a></h3>
                <p style="color: #4a5568; font-size: 0.95rem; line-height: 1.6;">${isFR ? 'Couverture nationale pour groupes hôteliers, marques touristiques et entreprises visant une autorité organique bilingue sur l\'ensemble du Royaume.' : 'Kingdom-wide digital growth architecture for hotel groups, national tour operators, and enterprises building bilingual organic authority across Morocco.'}</p>
              </div>
              <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 1.5rem; border-radius: 10px;">
                <h3 style="color: #0F2D25; margin-top: 0;"><a href="${isFR ? '/zones/casablanca' : '/en/locations/casablanca'}" style="color: #0F2D25; text-decoration: none;">Casablanca</a></h3>
                <p style="color: #4a5568; font-size: 0.95rem; line-height: 1.6;">${isFR ? 'Capitale économique : génération de leads B2B, portails institutionnels rapides, référencement Google Maps et acquisition pour restaurants et traiteurs.' : 'Commercial capital: B2B lead generation, high-speed corporate web platforms, Google Maps 3-Pack dominance, and fine-dining & catering acquisition.'}</p>
              </div>
              <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 1.5rem; border-radius: 10px;">
                <h3 style="color: #0F2D25; margin-top: 0;"><a href="${isFR ? '/zones/marrakech' : '/en/locations/marrakech'}" style="color: #0F2D25; text-decoration: none;">Marrakech</a></h3>
                <p style="color: #4a5568; font-size: 0.95rem; line-height: 1.6;">${isFR ? 'Cœur touristique : SEO spécialisé pour riads en Médina et hôtels de charme à Guéliz et la Palmeraie, moteurs PMS sans commission et TripAdvisor Ads.' : 'Hospitality heartland: specialized Medina Riad SEO, luxury hotel web design across Gueliz and Palmeraie, PMS direct booking engines, and TripAdvisor Ads.'}</p>
              </div>
              <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 1.5rem; border-radius: 10px;">
                <h3 style="color: #0F2D25; margin-top: 0;"><a href="${isFR ? '/zones/rabat' : '/en/locations/rabat'}" style="color: #0F2D25; text-decoration: none;">Rabat</a></h3>
                <p style="color: #4a5568; font-size: 0.95rem; line-height: 1.6;">${isFR ? 'Capitale administrative : SEO d\'autorité pour cabinets de conseil, PME technologiques, cliniques et établissements hôteliers d\'affaires.' : 'Institutional capital: authority SEO, AEO/GEO AI search visibility, corporate web development, and targeted Google Search campaigns for B2B firms.'}</p>
              </div>
              <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 1.5rem; border-radius: 10px;">
                <h3 style="color: #0F2D25; margin-top: 0;"><a href="${isFR ? '/zones/agadir' : '/en/locations/agadir'}" style="color: #0F2D25; text-decoration: none;">Agadir &amp; Taghazout</a></h3>
                <p style="color: #4a5568; font-size: 0.95rem; line-height: 1.6;">${isFR ? 'Pôle balnéaire atlantique : marketing digital pour resorts côtiers, SEO international pour surf camps de Taghazout et campagnes Meta visuelles.' : 'Atlantic resort & surf hub: beachfront hotel marketing, Taghazout surf & yoga retreat SEO, and European feeder-market paid social acquisition.'}</p>
              </div>
            </div>
          </section>

          ${renderMatrixLinksHtml(
            getAllLiveMatrixLinks(lang),
            isFR
              ? 'Nos Interventions Ciblées à Marrakech, Casablanca, Agadir & Rabat'
              : 'Targeted Growth Playbooks Across Marrakech, Casablanca, Agadir & Rabat',
            isFR
              ? "Consultez nos pages d'expertise dédiées croisant chaque métier (SEO hôtelier, création web, réservation directe, Google Ads, Meta Ads, TripAdvisor) avec les réalités locales de votre ville."
              : 'Browse dedicated local-intent pages pairing specialized acquisition services (Hotel SEO, Web Design, Direct Booking, Google Ads, Meta & TripAdvisor Ads) with city-level market data.'
          )}

          <section style="margin-bottom: 2.5rem;">
            <h2 style="color: #0F2D25; font-size: 1.75rem; margin-bottom: 1rem; font-family: Georgia, serif;">
              ${isFR ? 'Accompagnement dans Toutes les Villes du Royaume' : 'Supporting Properties & Businesses Nationwide'}
            </h2>
            <p style="color: #4a5568; line-height: 1.75; margin: 0;">
              ${isFR
                ? "Au-delà de nos cinq hubs principaux, nos équipes accompagnent également les maisons d'hôtes, kasbahs, bivouacs de luxe et entreprises situés à Tanger, Fès, Essaouira, Ouarzazate, Merzouga et Dakhla. Chaque projet débute par un audit gratuit sous 24 à 48 heures mesurant le volume de recherche exact de votre zone géographique et les opportunités immédiates de réservation directe."
                : "Beyond our five primary hubs, Urunk actively supports boutique kasbahs, desert luxury camps, coastal guesthouses, and growing SMEs in Tangier, Fes, Essaouira, Ouarzazate, Merzouga, and Dakhla. Every partnership begins with a complimentary 24–48 hour regional audit quantifying exact local search demand and immediate direct booking opportunities."}
            </p>
          </section>

          <div style="text-align: center; margin-top: 2.5rem;">
            <a href="${isFR ? '/contact' : '/en/contact'}" style="background: #D46E55; color: white; padding: 0.85rem 2rem; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">
              ${isFR ? 'Obtenir un Audit Local Gratuit' : 'Get a Free Regional Visibility Audit'}
            </a>
          </div>
        </div>
      `;
    } else if (page.path === '/blog' || page.path === '/en/blog') {
      const posts = isFR ? blogPostsFR : blogPostsEN;
      html += `
        <div>
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
        </div>
      `;
    } else if (page.path === '/plan-du-site' || page.path === '/en/sitemap') {
      const posts = isFR ? blogPostsFR : blogPostsEN;
      const corePagesList = isFR ? [
        { name: 'Accueil Urunk', url: '/', desc: 'Portail principal de notre agence de croissance digitale et hôtelière au Maroc.' },
        { name: 'À Propos', url: '/a-propos', desc: 'Notre mission, nos hubs à Casablanca et Marrakech et notre méthodologie.' },
        { name: 'Tarifs & Formules', url: '/tarifs', desc: 'Grille tarifaire fixe transparente dès 12 000 MAD sans commission OTA.' },
        { name: 'Réalisations & Études de Cas', url: '/realisations', desc: 'Exemples concrets de stratégies SEO, Google Ads et réservation directe.' },
        { name: 'Foire Aux Questions (FAQ)', url: '/faq', desc: 'Réponses sur les délais, la propriété du code, les PMS et la garantie 90 jours.' },
        { name: 'Contact & Audit Gratuit', url: '/contact', desc: 'Demandez votre diagnostic digital complet livré sous 24 à 48 heures.' }
      ] : [
        { name: 'Urunk Home', url: '/en', desc: 'Main portal for our Moroccan hospitality and B2B digital growth agency.' },
        { name: 'About Urunk', url: '/en/about', desc: 'Our mission, Casablanca and Marrakech hubs, and engineering standards.' },
        { name: 'Pricing & Packages', url: '/en/pricing', desc: 'Transparent fixed-fee pricing from 12,000 MAD with zero OTA commissions.' },
        { name: 'Work & Case Studies', url: '/en/work', desc: 'Applied strategy blueprints across boutique riads, tour operators, and B2B.' },
        { name: 'Frequently Asked Questions', url: '/en/faq', desc: 'Direct answers on timelines, full code ownership, PMS sync, and 90-day guarantee.' },
        { name: 'Contact & Free Audit', url: '/en/contact', desc: 'Request your complimentary 24–48 hour website and direct booking audit.' }
      ];
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
        { name: 'Création Site Web (Tarifs)', url: '/creation-site-web' },
        { name: 'Service Création Site Web', url: '/services/creation-site-web' },
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
        { name: 'Publicités Meta', url: '/services/gestion-publicites-meta' },
        { name: 'TripAdvisor Ads', url: '/services/tripadvisor-ads' },
        { name: 'Pack Réservation Directe', url: '/services/bundle-site-ads' }
      ] : [
        { name: 'Website Design', url: '/en/services/website-design' },
        { name: 'Web Design Morocco', url: '/en/web-design-morocco' },
        { name: 'Web Design Casablanca', url: '/en/web-design-casablanca' },
        { name: 'SEO Agency Morocco', url: '/en/seo-agency-morocco' },
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
        <div>
          <header style="margin-bottom: 2.5rem; text-align: center;">
            <h1 style="font-size: 2.75rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">${escapeHtml(page.title)}</h1>
            <p style="font-size: 1.2rem; color: #4a5568; line-height: 1.6; max-width: 800px; margin: 0 auto;">${escapeHtml(page.description)}</p>
          </header>

          <section style="margin-bottom: 2.5rem; background: #FAF8F5; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0;">
            <h2 style="color: #0F2D25; font-size: 1.75rem; margin-top: 0; margin-bottom: 0.85rem; font-family: Georgia, serif;">
              ${isFR ? 'Architecture Sémantique & Guide de Navigation Urunk' : 'Website Architecture & Navigation Guide'}
            </h2>
            <p style="color: #4a5568; line-height: 1.75; margin-bottom: 1rem;">
              ${isFR
                ? "Notre plateforme est structurée selon une architecture plate à deux niveaux conçue pour offrir une accessibilité immédiate aux dirigeants d'hôtels, propriétaires de riads, décideurs B2B ainsi qu'aux moteurs de recherche et agents IA. Les contenus sont organisés autour de quatre piliers complémentaires : nos services d'ingénierie web et d'acquisition directe (création de sites dès 12 000 MAD, gestion SEO et publicitaire dès 4 000 MAD/mois), nos expertises sectorielles verticales, nos hubs géographiques au Maroc et notre bibliothèque d'études et de guides pratiques."
                : "Our platform is engineered on a flat, two-tier semantic architecture built for effortless navigation by hoteliers, riad owners, corporate decision-makers, and search crawlers alike. All resources are organized across four interconnected pillars: core web engineering and direct acquisition services (custom websites starting at 12,000 MAD, monthly SEO and paid media retainers from 4,000 MAD/mo), vertical industry playbooks, regional Moroccan hubs, and in-depth hospitality research guides."}
            </p>
            <p style="color: #4a5568; line-height: 1.75; margin: 0;">
              ${isFR
                ? "Chaque page publiée en français dispose de son équivalent exact en anglais relié par un balisage hreflang réciproque. Pour identifier rapidement la solution adaptée à votre établissement, commencez par explorer le pôle géographique de votre ville, consultez les études de cas de votre secteur d'activité, puis demandez votre diagnostic gratuit sous 24 à 48 heures."
                : "Every English page maintains a one-to-one French counterpart connected via reciprocal hreflang tags. To pinpoint the right growth strategy for your business, explore your city's regional hub, review applied case studies for your industry vertical, or jump straight to our transparent pricing and complimentary 24–48 hour channel diagnostic."}
            </p>
          </section>

          <section style="margin-bottom: 3rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; border-bottom: 2px solid #D46E55; padding-bottom: 0.5rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? 'Pages Institutionnelles & Utilitaires' : 'Core Agency & Corporate Pages'}</h2>
            <p style="color: #4a5568; margin-bottom: 1rem; line-height: 1.65;">
              ${isFR
                ? "Accédez aux informations essentielles concernant la mission d'Urunk, nos tarifs fixes sans commission, nos réalisations clients, notre foire aux questions et nos engagements légaux conformes à la loi marocaine 09-08."
                : "Access essential pages detailing Urunk's mission, transparent fixed-fee pricing, client strategy frameworks, frequently asked questions, and legal compliance under Moroccan Law 09-08 and GDPR."}
            </p>
            <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1rem; list-style: none; padding: 0;">
              ${corePagesList.map(c => `<li style="padding: 0.85rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;"><a href="${c.url}" style="color: #0F2D25; text-decoration: none; font-weight: bold;">${escapeHtml(c.name)}</a><p style="margin: 0.35rem 0 0 0; font-size: 0.88rem; color: #4a5568; line-height: 1.5;">${escapeHtml(c.desc)}</p></li>`).join('')}
            </ul>
          </section>

          <section style="margin-bottom: 3rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; border-bottom: 2px solid #D46E55; padding-bottom: 0.5rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? 'Services & Spécialités d\'Acquisition' : 'Services & Direct Acquisition Specializations'}</h2>
            <p style="color: #4a5568; margin-bottom: 1rem; line-height: 1.65;">
              ${isFR
                ? "Découvrez l'ensemble de nos prestations techniques dédiées à la création de sites web rapides, à l'intégration de moteurs de réservation PMS, au référencement naturel local Google Business Profile et à la gestion de campagnes Google Ads, Meta Ads et TripAdvisor."
                : "Browse our full suite of technical services spanning sub-second custom website design, direct PMS booking integration, Google Business Profile optimization, and ROI-tracked Google Ads, Meta Ads, and TripAdvisor Sponsored Placements."}
            </p>
            <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.75rem; list-style: none; padding: 0;">
              ${services.map(s => `<li><a href="${s.url}" style="color: #0F2D25; text-decoration: none; font-weight: 500;">${escapeHtml(s.name)}</a></li>`).join('')}
            </ul>
          </section>

          <section style="margin-bottom: 3rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; border-bottom: 2px solid #D46E55; padding-bottom: 0.5rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? 'Secteurs d\'Activité Accompagnés' : 'Industries & Verticals Served'}</h2>
            <p style="color: #4a5568; margin-bottom: 1rem; line-height: 1.65;">
              ${isFR
                ? "Chaque secteur présente des cycles de décision et des marges spécifiques : explorez nos feuilles de route dédiées aux hôtels et resorts, riads en Médina, tour-opérateurs, restaurants gastronomiques et PME B2B."
                : "Each vertical faces distinct margin structures and search behaviors: explore our specialized growth playbooks for luxury hotels, boutique Medina riads, inbound tour operators, restaurants, and corporate SMEs."}
            </p>
            <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.75rem; list-style: none; padding: 0;">
              ${sectors.map(s => `<li><a href="${s.url}" style="color: #0F2D25; text-decoration: none; font-weight: 500;">${escapeHtml(s.name)}</a></li>`).join('')}
            </ul>
          </section>

          <section style="margin-bottom: 3rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; border-bottom: 2px solid #D46E55; padding-bottom: 0.5rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? 'Zones & Hubs Régionaux au Maroc' : 'Locations & Regional Hubs in Morocco'}</h2>
            <p style="color: #4a5568; margin-bottom: 1rem; line-height: 1.65;">
              ${isFR
                ? "Consultez nos pages régionales couvrant Casablanca, Marrakech, Rabat, Agadir et l'ensemble du Maroc pour découvrir les statistiques locales de recherche et nos dispositifs SEO de proximité."
                : "Explore our regional hub pages covering Casablanca, Marrakech, Rabat, Agadir, and nationwide Morocco for localized search benchmarks and Google Maps visibility strategies."}
            </p>
            <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 0.75rem; list-style: none; padding: 0;">
              ${locations.map(l => `<li><a href="${l.url}" style="color: #0F2D25; text-decoration: none; font-weight: 500;">${escapeHtml(l.name)}</a></li>`).join('')}
            </ul>
          </section>

          <section style="margin-bottom: 3rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; border-bottom: 2px solid #D46E55; padding-bottom: 0.5rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? 'Expertises Spécialisées par Ville & Secteur' : 'City & Sector Specialized Expertise'}</h2>
            <p style="color: #4a5568; margin-bottom: 1rem; line-height: 1.65;">
              ${isFR
                ? "Accédez directement à nos 19 pôles d'expertise régionaux et sectoriels combinant SEO hôtelier, création de sites web riads et entreprises, réservation directe et campagnes Google, Meta et TripAdvisor Ads."
                : 'Access all 19 specialized regional and vertical playbooks uniting hotel and riad SEO, custom web engineering, direct booking strategy, and Google, Meta, and TripAdvisor ad management.'}
            </p>
            <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 0.75rem; list-style: none; padding: 0;">
              ${getAllLiveMatrixLinks(lang).map(m => `<li><a href="${m.path}" style="color: #0F2D25; text-decoration: none; font-weight: 500;">${escapeHtml(m.anchor)}</a></li>`).join('')}
            </ul>
          </section>

          <section style="margin-bottom: 3rem;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; border-bottom: 2px solid #D46E55; padding-bottom: 0.5rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? 'Articles de Blog & Guides Stratégiques' : 'Blog Articles & Hospitality Research Guides'}</h2>
            <p style="color: #4a5568; margin-bottom: 1rem; line-height: 1.65;">
              ${isFR
                ? "Notre bibliothèque éditoriale regroupe des guides approfondis sur la réduction des commissions Booking.com et Airbnb, le choix d'un PMS hôtelier, l'optimisation de la vitesse mobile et la rentabilité des campagnes Google et Meta Ads."
                : "Our editorial library provides actionable, data-backed guides on reducing Booking.com and Airbnb commissions, selecting hotel PMS software, optimizing mobile Core Web Vitals, and scaling profitable Google and Meta ad funnels."}
            </p>
            <ul style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 0.75rem; list-style: none; padding: 0;">
              ${posts.map(p => `<li><a href="${isFR ? '/blog/' : '/en/blog/'}${p.slug}" style="color: #0F2D25; text-decoration: none;">${escapeHtml(p.title)}</a></li>`).join('')}
            </ul>
          </section>
        </div>
      `;
    } else if (page.path === '/contact' || page.path === '/en/contact') {
      html += `
        <div>
          <header style="margin-bottom: 2.5rem; text-align: center;">
            <span style="display: inline-block; padding: 0.35rem 1rem; border-radius: 9999px; background: rgba(212,110,85,0.1); color: #D46E55; font-size: 0.85rem; font-weight: bold; text-transform: uppercase; margin-bottom: 1rem;">
              ${isFR ? 'Diagnostic Gratuit sous 24 à 48h' : 'Complimentary 24–48h Strategy Diagnostic'}
            </span>
            <h1 style="font-size: 2.75rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">
              ${isFR ? 'Contactez Urunk & Demandez Votre Audit Digital Gratuit' : 'Contact Urunk & Request Your Free Direct Booking Audit'}
            </h1>
            <p style="font-size: 1.15rem; color: #4a5568; line-height: 1.65; max-width: 780px; margin: 0 auto;">
              ${escapeHtml(page.description)}
            </p>
          </header>

          <section style="margin-bottom: 2.5rem; background: #FAF8F5; padding: 2rem; border-radius: 12px; border: 1px solid #e2e8f0;">
            <h2 style="color: #0F2D25; font-size: 1.8rem; margin-top: 0; margin-bottom: 1rem; font-family: Georgia, serif;">
              ${isFR ? 'Ce Que Contient Votre Audit Stratégique Gratuit (Livré en 24–48h)' : 'What Your Complimentary 24–48 Hour Channel Audit Includes'}
            </h2>
            <p style="color: #4a5568; line-height: 1.75; margin-bottom: 1rem;">
              ${isFR
                ? "Avant tout engagement commercial, notre équipe d'ingénieurs web et de stratèges SEO réalise une analyse complète et personnalisée de l'écosystème numérique actuel de votre établissement hôtelier, riad ou entreprise au Maroc. Plutôt qu'un rapport automatisé générique, vous recevez une feuille de route chiffrée identifiant précisément vos fuites de revenus et vos leviers de croissance rapide :"
                : "Before you commit a single dirham, our senior web engineers and search strategists prepare a custom, manual diagnostic of your hotel, riad, or corporate digital footprint in Morocco. Rather than an automated generic PDF, you receive a quantified growth roadmap pinpointing exact revenue leaks and immediate opportunities:"}
            </p>
            <ul style="padding-left: 1.5rem; color: #4a5568; line-height: 1.7; margin-bottom: 0;">
              <li style="margin-bottom: 0.5rem;"><strong>${isFR ? 'Audit de Performance Mobile & Core Web Vitals :' : 'Mobile Speed & Core Web Vitals Benchmark:'}</strong> ${isFR ? 'Mesure précise du temps de chargement sur réseau mobile et détection des frictions qui font fuir vos visiteurs vers les OTA.' : 'Real-device load-time testing and checkout UX analysis uncovering why mobile visitors bounce back to third-party OTAs.'}</li>
              <li style="margin-bottom: 0.5rem;"><strong>${isFR ? 'Évaluation des Pertes en Commissions OTA (15 % à 25 %) :' : 'OTA Commission Leakage & Rate Parity Check:'}</strong> ${isFR ? 'Estimation du volume de réservations récupérables en direct via l\'intégration fluide d\'un moteur PMS sans commission.' : 'Calculation of annual Booking.com and Expedia fees you can recapture through a commission-free direct PMS booking funnel.'}</li>
              <li style="margin-bottom: 0.5rem;"><strong>${isFR ? 'Visibilité SEO Locale & Google Business Profile :' : 'Local SEO & Google Maps 3-Pack Visibility:'}</strong> ${isFR ? 'Analyse de votre positionnement sur Google Maps et sur les requêtes bilingues stratégiques à Marrakech, Casablanca, Rabat ou Agadir.' : 'Ranking audit across Google Maps and high-intent English/French search terms in Marrakech, Casablanca, Rabat, or Agadir.'}</li>
              <li><strong>${isFR ? 'Potentiel Google Ads, Meta Ads & TripAdvisor :' : 'Paid Search & Metasearch Opportunity Sizing:'}</strong> ${isFR ? 'Projection du budget média optimal et du coût par demande cible pour générer des réservations qualifiées sous 30 jours.' : 'Recommended media budget allocation and target Cost Per Acquisition (CPA) to generate direct inquiries within 30 days.'}</li>
            </ul>
          </section>

          <section style="margin-bottom: 2.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
            <div style="padding: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">
              <h2 style="color: #0F2D25; font-size: 1.35rem; margin-top: 0; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? 'Nos Bureaux & Coordonnées Directes' : 'Direct Contact & Operational Hubs'}</h2>
              <p style="color: #4a5568; line-height: 1.65; margin-bottom: 0.75rem;">
                <strong>${isFR ? 'Adresse :' : 'Address:'}</strong> ${isFR ? '3 Rue El Kadi Lass, Maarif, Casablanca, Maroc' : '3 Rue El Kadi Lass, Maarif, Casablanca, Morocco'}<br />
                <strong>${isFR ? 'Téléphone :' : 'Phone:'}</strong> +212 668-802096<br />
                <strong>Email :</strong> contact@urunk.com<br />
                <strong>${isFR ? 'Zones couvertes :' : 'Service Hubs:'}</strong> Casablanca, Marrakech, Rabat &amp; Agadir
              </p>
              <p style="color: #4a5568; line-height: 1.65; margin: 0; font-size: 0.95rem;">
                ${isFR
                  ? "Consultations en présentiel sur rendez-vous à Casablanca et Marrakech, ou en visioconférence Google Meet partout au Maroc et à l'international du lundi au vendredi (09h00 – 18h30 GMT+1)."
                  : "In-person strategy sessions available by appointment in Casablanca and Marrakech, or via Google Meet video consultation across Morocco and Europe Monday through Friday (09:00 – 18:30 GMT+1)."}
              </p>
            </div>
            <div style="padding: 1.5rem; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px;">
              <h2 style="color: #0F2D25; font-size: 1.35rem; margin-top: 0; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? 'Déroulement après Votre Prise de Contact' : 'What Happens After You Reach Out'}</h2>
              <ol style="padding-left: 1.25rem; color: #4a5568; line-height: 1.65; margin: 0;">
                <li style="margin-bottom: 0.5rem;"><strong>${isFR ? 'Sous 24 heures :' : 'Within 24 Hours:'}</strong> ${isFR ? 'Confirmation de réception et lancement de l\'audit technique de votre domaine et de votre fiche Google.' : 'Confirmation of your request and manual technical review of your domain, PMS flow, and Google Maps listing.'}</li>
                <li style="margin-bottom: 0.5rem;"><strong>${isFR ? 'Sous 48 heures :' : 'Within 48 Hours:'}</strong> ${isFR ? 'Envoi de votre diagnostic détaillé accompagné de recommandations tarifées transparentes (forfait fixe dès 12 000 MAD).' : 'Delivery of your tailored diagnostic with transparent fixed-fee recommendations (websites from 12,000 MAD, retainers from 4,000 MAD/mo).'}</li>
                <li><strong>${isFR ? 'Session Stratégique (30 min) :' : '30-Minute Strategy Call:'}</strong> ${isFR ? 'Présentation claire du plan d\'action sur 90 jours, sans aucune pression commerciale.' : 'Walkthrough of your 90-day direct growth roadmap with zero sales pressure or long-term lock-in.'}</li>
              </ol>
            </div>
          </section>

          <section style="margin-bottom: 2rem;">
            <h2 style="color: #0F2D25; font-size: 1.75rem; margin-bottom: 1rem; font-family: Georgia, serif;">
              ${isFR ? 'Questions Fréquentes avant de Démarrer' : 'Pre-Consultation Frequently Asked Questions'}
            </h2>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div style="padding: 1.25rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
                <h3 style="color: #0F2D25; font-size: 1.1rem; margin: 0 0 0.4rem 0;">${isFR ? 'L\'audit initial est-il réellement gratuit et sans engagement ?' : 'Is the initial digital audit genuinely free and non-binding?'}</h3>
                <p style="margin: 0; color: #4a5568; line-height: 1.65;">${isFR ? 'Oui, à 100 %. Vous conservez l\'intégralité des constats techniques et des pistes d\'optimisation partagés lors de notre diagnostic, que vous décidiez de confier le déploiement à Urunk ou à votre équipe interne.' : 'Yes, 100%. All technical findings, speed benchmarks, and keyword opportunities shared in your diagnostic are yours to keep whether you partner with Urunk or implement them internally.'}</p>
              </div>
              <div style="padding: 1.25rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
                <h3 style="color: #0F2D25; font-size: 1.1rem; margin: 0 0 0.4rem 0;">${isFR ? 'Quelles informations préparer pour accélérer l\'analyse ?' : 'What details should we share to get the most accurate audit?'}</h3>
                <p style="margin: 0; color: #4a5568; line-height: 1.65;">${isFR ? 'Indiquez simplement l\'adresse actuelle de votre site web (ou le nom de votre établissement sur Google Maps / Booking), votre ville au Maroc et votre objectif prioritaire (refonte web, SEO local ou lancement Google/Meta Ads).' : 'Simply share your current website URL (or your property name on Google Maps / Booking.com), your city in Morocco, and your primary priority (new direct booking website, local SEO, or paid search/social acquisition).'}</p>
              </div>
            </div>
          </section>
        </div>
      `;
    } else if (page.path === '/politique-de-confidentialite' || page.path === '/en/privacy-policy') {
      html += `
        <div>
          <header style="margin-bottom: 2.5rem;">
            <span style="display: inline-block; padding: 0.3rem 0.85rem; border-radius: 9999px; background: rgba(212,110,85,0.12); color: #D46E55; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem;">
              ${isFR ? 'Conformité Loi 09-08 (CNDP) & RGPD' : 'Law 09-08 (CNDP) & GDPR Compliance'}
            </span>
            <h1 style="font-size: 2.65rem; color: #0F2D25; margin-bottom: 0.75rem; line-height: 1.2; font-family: Georgia, serif;">
              ${isFR ? 'Politique de Confidentialité & Protection des Données Personnelles' : 'Privacy Policy & Personal Data Protection'}
            </h1>
            <p style="font-size: 1.1rem; color: #4a5568; line-height: 1.65;">
              ${isFR
                ? "Dernière mise à jour : Août 2026. La présente Politique de Confidentialité détaille la manière dont Urunk collecte, utilise, sécurise et protège vos informations personnelles dans le strict respect de la Loi marocaine n° 09-08 et du Règlement Général sur la Protection des Données (RGPD)."
                : "Last updated: August 2026. This Privacy Policy details how Urunk collects, processes, secures, and protects personal information in strict compliance with Moroccan Law No. 09-08 (supervised by the CNDP) and the European General Data Protection Regulation (GDPR)."}
            </p>
          </header>

          <section style="margin-bottom: 2rem;">
            <h2 style="color: #0F2D25; font-size: 1.55rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? '1. Responsable du Traitement & Engagements Légaux' : '1. Data Controller & Regulatory Commitment'}</h2>
            <p style="color: #4a5568; line-height: 1.75;">
              ${isFR
                ? "Urunk (« nous », « notre agence ») accorde une priorité absolue à la confidentialité des données de ses visiteurs, prospects et clients partenaires hôteliers et entreprises. Lorsque vous naviguez sur urunk.com, demandez un audit gratuit ou signez un contrat de prestation digitale, vos données sont traitées de manière loyale, licite et transparente conformément aux dispositions de la Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP) au Maroc et aux standards européens du RGPD."
                : "Urunk ('we,' 'our,' or 'us') is committed to safeguarding the privacy of website visitors, prospective audit requesters, and contracted hospitality and corporate clients. Whenever you browse urunk.com, submit a diagnostic request, or engage our agency for web engineering, SEO, or paid media services, personal data is processed lawfully and transparently under the supervision standards of Morocco's CNDP (Law No. 09-08) and the EU GDPR."}
            </p>
          </section>

          <section style="margin-bottom: 2rem;">
            <h2 style="color: #0F2D25; font-size: 1.55rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? '2. Catégories de Données Personnelles Collectées' : '2. Categories of Personal Data We Collect'}</h2>
            <p style="color: #4a5568; line-height: 1.75; margin-bottom: 0.75rem;">
              ${isFR ? 'Nous limitons strictement la collecte aux informations nécessaires à l\'élaboration de votre diagnostic et au suivi de votre projet :' : 'We strictly limit data collection to the minimum information required to prepare your audit and deliver contracted services:'}
            </p>
            <ul style="padding-left: 1.5rem; color: #4a5568; line-height: 1.7;">
              <li><strong>${isFR ? 'Données d\'identité professionnelle :' : 'Professional Identity Data:'}</strong> ${isFR ? 'Nom complet, nom de votre hôtel, riad ou société, ville d\'implantation et fonction.' : 'Full name, hotel, riad, or company name, city of operation, and professional role.'}</li>
              <li><strong>${isFR ? 'Données de contact :' : 'Contact Data:'}</strong> ${isFR ? 'Adresse e-mail professionnelle, numéro de téléphone et coordonnées WhatsApp Business communiquées volontairement.' : 'Business email address, telephone number, and voluntarily submitted WhatsApp contact details.'}</li>
              <li><strong>${isFR ? 'Données techniques et de navigation :' : 'Technical & Usage Data:'}</strong> ${isFR ? 'Adresse IP anonymisée, type de navigateur, appareil mobile ou ordinateur, pages consultées et temps de chargement mesurés à des fins d\'optimisation ergonomique.' : 'Anonymized IP address, browser version, device type, visited pages, and performance metrics used to maintain fast, accessible user experiences.'}</li>
            </ul>
          </section>

          <section style="margin-bottom: 2rem;">
            <h2 style="color: #0F2D25; font-size: 1.55rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? '3. Finalités du Traitement & Base Juridique' : '3. Purpose of Processing & Lawful Basis'}</h2>
            <p style="color: #4a5568; line-height: 1.75;">
              ${isFR
                ? "Vos données personnelles ne sont jamais vendues, louées ni cédées à des courtiers publicitaires tiers. Elles sont exclusivement utilisées pour : (a) réaliser et vous transmettre votre audit de performance web, SEO local ou réservation directe sous 24 à 48 heures ; (b) assurer la gestion contractuelle, la facturation et le support technique des projets confiés ; (c) améliorer la vitesse, la sécurité et la pertinence éditoriale de notre site ; et (d) respecter nos obligations comptables, fiscales et légales en vigueur au Royaume du Maroc."
                : "We never sell, rent, or trade your personal data to third-party data brokers. Information collected is used exclusively to: (a) prepare and deliver your complimentary website speed, SEO, or direct booking audit within 24–48 hours; (b) manage project onboarding, milestone communication, and billing for contracted clients; (c) monitor site security and Core Web Vitals performance; and (d) satisfy statutory accounting and legal obligations under Moroccan law."}
            </p>
          </section>

          <section style="margin-bottom: 2rem;">
            <h2 style="color: #0F2D25; font-size: 1.55rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? '4. Politique de Cookies & Mesure d\'Audience' : '4. Cookies & Privacy-Respecting Analytics'}</h2>
            <p style="color: #4a5568; line-height: 1.75;">
              ${isFR
                ? "Le site urunk.com utilise des cookies techniques essentiels au bon fonctionnement de la navigation bilingue (français/anglais) ainsi que des cookies analytiques anonymisés permettant d'évaluer l'ergonomie de nos pages sur mobile et ordinateur. Vous pouvez à tout moment configurer votre navigateur web pour refuser ou supprimer les cookies non essentiels sans altérer votre accès à nos contenus d'information."
                : "Our website uses essential technical cookies required for bilingual navigation and form security, alongside privacy-compliant analytical cookies that aggregate anonymous traffic trends. You may configure your browser preferences at any time to block or delete non-essential cookies without losing access to our informational resources."}
            </p>
          </section>

          <section style="margin-bottom: 2rem;">
            <h2 style="color: #0F2D25; font-size: 1.55rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? '5. Durée de Conservation, Sécurité SSL & Vos Droits' : '5. Data Retention, SSL Security & Your Individual Rights'}</h2>
            <p style="color: #4a5568; line-height: 1.75; margin-bottom: 0.75rem;">
              ${isFR
                ? "Toutes les transmissions effectuées via nos formulaires sont chiffrées de bout en bout par protocole HTTPS/TLS. Les données relatives aux demandes d'audit sans suite commerciale sont supprimées ou anonymisées au bout de 24 mois maximum. Conformément à la Loi n° 09-08 et au RGPD, vous disposez d'un droit permanent d'accès, de rectification, d'effacement (« droit à l'oubli »), de limitation et d'opposition au traitement de vos données."
                : "All form submissions on urunk.com are protected by end-to-end HTTPS/TLS encryption and restricted to authorized project strategists. Inquiry records that do not transition into an active agency agreement are purged or anonymized within 24 months. Under Moroccan Law No. 09-08 and GDPR, you hold the right of access, rectification, erasure ('right to be forgotten'), restriction, and objection at any time."}
            </p>
            <p style="color: #4a5568; line-height: 1.75; margin: 0;">
              ${isFR
                ? "Pour exercer l'un de ces droits ou poser toute question relative à la protection de vos données, adressez une demande écrite à notre équipe conformité à l'adresse contact@urunk.com ou par courrier postal au 3 Rue El Kadi Lass, Maarif, Casablanca, Maroc. Nous nous engageons à vous répondre dans un délai maximal de 30 jours."
                : "To exercise any of these privacy rights or submit a data protection inquiry, please contact our compliance team in writing at contact@urunk.com or by mail at 3 Rue El Kadi Lass, Maarif, Casablanca, Morocco. All verified requests receive a formal response within 30 calendar days."}
            </p>
          </section>
        </div>
      `;
    } else if (page.path === '/conditions-generales' || page.path === '/en/terms-of-service') {
      html += `
        <div>
          <header style="margin-bottom: 2.5rem;">
            <span style="display: inline-block; padding: 0.3rem 0.85rem; border-radius: 9999px; background: rgba(212,110,85,0.12); color: #D46E55; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem;">
              ${isFR ? 'Cadre Contractuel & Engagements Client' : 'Client Service Agreement & Legal Terms'}
            </span>
            <h1 style="font-size: 2.65rem; color: #0F2D25; margin-bottom: 0.75rem; line-height: 1.2; font-family: Georgia, serif;">
              ${isFR ? 'Conditions Générales d\'Utilisation et de Prestation de Services' : 'Terms of Service & Agency Client Agreements'}
            </h1>
            <p style="font-size: 1.1rem; color: #4a5568; line-height: 1.65;">
              ${isFR
                ? "Dernière mise à jour : Août 2026. Les présentes Conditions Générales régissent l'accès au site urunk.com ainsi que les relations contractuelles relatives aux prestations de création de sites web, de référencement naturel (SEO) et de gestion publicitaire fournies par Urunk."
                : "Last updated: August 2026. These Terms of Service govern access to urunk.com and set forth the contractual framework for custom website engineering, search engine optimization (SEO), and paid advertising management delivered by Urunk."}
            </p>
          </header>

          <section style="margin-bottom: 2rem;">
            <h2 style="color: #0F2D25; font-size: 1.55rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? '1. Objet et Périmètre des Prestations' : '1. Acceptance & Scope of Services'}</h2>
            <p style="color: #4a5568; line-height: 1.75;">
              ${isFR
                ? "Urunk fournit des services spécialisés d'ingénierie digitale destinés aux hôtels, riads, opérateurs touristiques, restaurateurs et PME au Maroc et à l'international : conception de sites internet rapides sur-mesure connectés aux systèmes PMS, optimisation technique et sémantique pour les moteurs de recherche (Google, Google Maps et moteurs IA), ainsi que création et pilotage de campagnes Google Ads, Meta Ads et TripAdvisor. Chaque mission fait l'objet d'un cahier des charges écrit précisant les livrables exacts et le calendrier d'exécution."
                : "Urunk provides specialized digital growth engineering for hotels, boutique riads, tour operators, restaurants, and corporate SMEs in Morocco and internationally. Core deliverables include custom high-speed website development with PMS booking integration, technical and local Search Engine Optimization (Google Search, Google Maps, and AI answer engines), and paid media management across Google Ads, Meta Ads, and TripAdvisor. Every engagement is governed by a written Scope of Work (SOW) defining exact milestones and deliverables."}
            </p>
          </section>

          <section style="margin-bottom: 2rem;">
            <h2 style="color: #0F2D25; font-size: 1.55rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? '2. Modalités Financières & Facturation Transparente' : '2. Fixed-Fee Billing & Media Spend Structure'}</h2>
            <p style="color: #4a5568; line-height: 1.75;">
              ${isFR
                ? "Les projets de création ou de refonte de site web à tarif fixe (dès 12 000 MAD) suivent un échéancier clair : un acompte initial de 50 % au démarrage du développement, puis le solde de 50 % à la validation finale avant mise en production sur votre domaine. Les prestations récurrentes de référencement SEO et de gestion publicitaire (3 000 MAD à 4 000 MAD/mois) sont facturées mensuellement en début de période. Les budgets d'achat média sont réglés directement par le client auprès des régies publicitaires (Google, Meta, TripAdvisor), garantissant une absence totale de marge cachée sur vos clics."
                : "Fixed-price website development projects (starting at 12,000 MAD) require a 50% kickoff deposit prior to engineering commencement, with the remaining 50% balance payable upon final client approval prior to production domain launch. Ongoing monthly retainers for SEO or paid campaign management (3,000 MAD to 4,000 MAD/month) are invoiced monthly in advance. Advertising media spend is billed directly to the client's payment method by Google, Meta, or TripAdvisor with zero agency markup."}
            </p>
          </section>

          <section style="margin-bottom: 2rem;">
            <h2 style="color: #0F2D25; font-size: 1.55rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? '3. Transfert Intégral de Propriété Intellectuelle' : '3. 100% Client Intellectual Property & Account Ownership'}</h2>
            <p style="color: #4a5568; line-height: 1.75;">
              ${isFR
                ? "Dès le règlement complet des échéances convenues, Urunk cède au client 100 % des droits d'exploitation et de propriété sur le design sur-mesure, les contenus rédigés, le code livré, les accès administrateurs du site, ainsi que l'intégralité des comptes Google Analytics, Google Search Console, Google Ads et Meta Business configurés pour l'établissement. Aucune redevance de licence propriétaire ni clause de rétention technique n'est appliquée."
                : "Upon full settlement of agreed project invoices, Urunk transfers 100% ownership of the custom visual design, copywriting assets, production website code, CMS administrative credentials, and configured Google Analytics, Search Console, Google Ads, and Meta Business accounts to the client. We enforce zero proprietary platform lock-in or recurring software licensing fees."}
            </p>
          </section>

          <section style="margin-bottom: 2rem;">
            <h2 style="color: #0F2D25; font-size: 1.55rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? '4. Délais de Coopération, Résiliation sous 15 Jours & Garantie' : '4. Timelines, 15-Day Notice Flexibility & 90-Day Guarantee'}</h2>
            <p style="color: #4a5568; line-height: 1.75;">
              ${isFR
                ? "Afin de respecter le délai standard de livraison de 4 à 6 semaines, le client s'engage à fournir les éléments nécessaires (photographies haute définition, grilles tarifaires, accès API PMS et retours de validation) dans des délais raisonnables. Nos contrats d'accompagnement mensuel fonctionnent sans engagement annuel verrouillé : chaque partie peut y mettre fin par simple notification écrite envoyée 15 jours avant le cycle mensuel suivant. Notre garantie de performance de 90 jours s'applique conformément aux indicateurs définis dans le cahier des charges signé."
                : "To maintain our standard 4-to-6 week website delivery schedule, clients agree to supply required photography, room/service descriptions, PMS API keys, and milestone feedback promptly. Ongoing monthly SEO and ad management agreements carry no annual lock-in and may be cancelled at any time with 15 calendar days' written notice prior to the next billing date. Our 90-day performance guarantee applies in accordance with the target benchmarks defined in the signed SOW."}
            </p>
          </section>

          <section style="margin-bottom: 2rem;">
            <h2 style="color: #0F2D25; font-size: 1.55rem; margin-bottom: 0.75rem; font-family: Georgia, serif;">${isFR ? '5. Limitation de Responsabilité & Droit Applicable' : '5. Limitation of Liability & Moroccan Governing Law'}</h2>
            <p style="color: #4a5568; line-height: 1.75;">
              ${isFR
                ? "Urunk ne saurait être tenu responsable des interruptions imputables à des prestataires tiers (hébergeurs cloud, pannes de serveurs PMS externes ou modifications soudaines d'algorithmes par Google ou Meta). La responsabilité globale d'Urunk au titre d'un contrat ne peut excéder le montant des honoraires réglés par le client au cours des trois derniers mois. Les présentes Conditions Générales sont régies par le droit du Royaume du Maroc et relèvent de la compétence exclusive des tribunaux de commerce de Casablanca ou de Marrakech."
                : "Urunk shall not be liable for indirect damages arising from third-party infrastructure outages, external PMS downtime, or unannounced algorithm updates by Google, Meta, or TripAdvisor. Total agency liability under any claim shall not exceed the fees paid by the client to Urunk during the preceding three-month period. These Terms of Service are governed exclusively by the laws of the Kingdom of Morocco under the jurisdiction of the commercial courts of Casablanca or Marrakech."}
            </p>
          </section>
        </div>
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
        <div>
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
        </div>
      `;
    } else if (page.path.startsWith('/expertise/') || page.path.startsWith('/en/expertise/')) {
      const ctx = resolveMatrixPageContext(page.path, lang);
      if (ctx) {
        const locHref = ctx.locationId
          ? isFR
            ? ctx.locationId === 'morocco'
              ? '/zones/maroc'
              : `/zones/${ctx.locationId}`
            : `/en/locations/${ctx.locationId}`
          : '';
        html += `
          <div>
            <nav aria-label="${isFR ? "Fil d'Ariane" : 'Breadcrumb'}" style="font-size: 0.85rem; color: #718096; margin-bottom: 1.25rem;">
              <a href="${isFR ? '/' : '/en'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Accueil' : 'Home'}</a>
              <span> / </span>
              <a href="${isFR ? '/services' : '/en/services'}" style="color: #4a5568; text-decoration: none;">Expertise</a>
              ${ctx.locationId ? `<span> / </span><a href="${locHref}" style="color: #4a5568; text-decoration: none;">${escapeHtml(ctx.meta.locationName)}</a>` : ''}
              <span> / </span>
              <span style="color: #D46E55; font-weight: 600;">${escapeHtml(ctx.meta.cleanServiceName)}</span>
            </nav>

            <header style="margin-bottom: 2.5rem;">
              <span style="display: inline-block; padding: 0.3rem 0.85rem; border-radius: 9999px; background: rgba(212,110,85,0.12); color: #D46E55; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem;">
                Expertise ${escapeHtml(ctx.meta.cleanServiceName)} — ${escapeHtml(ctx.meta.locationName)}
              </span>
              <h1 style="font-size: 2.5rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">${escapeHtml(ctx.meta.pageHeading)}</h1>
              <p style="font-size: 1.15rem; color: #4a5568; line-height: 1.65; margin-bottom: 1.25rem;">${escapeHtml(ctx.meta.leadIntroText)}</p>
              <p style="font-size: 1rem; color: #2d3748; background: #f8fafc; border-left: 4px solid #D46E55; padding: 1rem 1.25rem; border-radius: 0 8px 8px 0;">
                <strong>Urunk Agency</strong> ${isFR
                  ? `déploie son expertise ${escapeHtml(ctx.meta.cleanServiceName)} à ${escapeHtml(ctx.meta.locationName)} pour développer vos réservations directes sans commission OTA, grâce à une architecture web ultra-rapide et un suivi ROI précis.`
                  : `delivers specialized ${escapeHtml(ctx.meta.cleanServiceName)} expertise in ${escapeHtml(ctx.meta.locationName)} to grow commission-free direct bookings through sub-second web engineering and transparent ROI tracking.`}
              </p>
            </header>

            ${ctx.marketStats.length > 0 ? `
            <section style="margin-bottom: 2.5rem;">
              <h2 style="color: #0F2D25; font-size: 1.65rem; margin-bottom: 1rem; font-family: Georgia, serif;">
                ${isFR ? `Indicateurs Clés du Marché — ${escapeHtml(ctx.meta.locationName)}` : `Key Market Benchmarks — ${escapeHtml(ctx.meta.locationName)}`}
              </h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
                ${ctx.marketStats.map(stat => `
                  <div style="padding: 1rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
                    <div style="font-size: 1.5rem; font-weight: bold; color: #0F2D25;">${escapeHtml(stat.value)}</div>
                    <div style="font-size: 0.85rem; color: #4a5568;">${escapeHtml(stat.label[lang])}</div>
                  </div>
                `).join('')}
              </div>
            </section>
            ` : ''}

            <section style="margin-bottom: 2.5rem;">
              <h2 style="color: #0F2D25; font-size: 1.75rem; margin-bottom: 1rem; font-family: Georgia, serif;">${escapeHtml(ctx.srvData.problemTitle)}</h2>
              <p style="margin-bottom: 1rem; color: #4a5568; line-height: 1.7;">${escapeHtml(ctx.srvData.problemText1)}</p>
              <p style="margin-bottom: 1.25rem; color: #4a5568; line-height: 1.7;">${escapeHtml(ctx.srvData.problemText2)}</p>
              ${ctx.srvData.signs && ctx.srvData.signs.length > 0 ? `
                <h3 style="color: #0F2D25; font-size: 1.25rem; margin-bottom: 0.75rem;">${escapeHtml(ctx.srvData.signsTitle)}</h3>
                <ul style="padding-left: 1.5rem; color: #4a5568; line-height: 1.65; margin-bottom: 0;">
                  ${ctx.srvData.signs.map(s => `<li style="margin-bottom: 0.4rem;">${escapeHtml(s)}</li>`).join('')}
                </ul>
              ` : ''}
            </section>

            <section style="margin-bottom: 2.5rem;">
              <h2 style="color: #0F2D25; font-size: 1.75rem; margin-bottom: 1.25rem; font-family: Georgia, serif;">
                ${isFR ? `Livrables & Méthodologie ${escapeHtml(ctx.meta.cleanServiceName)}` : `${escapeHtml(ctx.meta.cleanServiceName)} Deliverables & Execution`}
              </h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.25rem;">
                ${ctx.srvData.features.map(feat => `
                  <div style="padding: 1.25rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
                    <h3 style="color: #0F2D25; font-size: 1.1rem; margin: 0 0 0.5rem 0;">${escapeHtml(feat.title)}</h3>
                    <p style="margin: 0; color: #4a5568; font-size: 0.95rem; line-height: 1.6;">${escapeHtml(feat.desc)}</p>
                  </div>
                `).join('')}
              </div>
            </section>

            ${ctx.srvData.processSteps && ctx.srvData.processSteps.length > 0 ? `
            <section style="margin-bottom: 2.5rem;">
              <h2 style="color: #0F2D25; font-size: 1.65rem; margin-bottom: 1rem; font-family: Georgia, serif;">${escapeHtml(ctx.srvData.processTitle)}</h2>
              <div style="display: flex; flex-direction: column; gap: 0.85rem;">
                ${ctx.srvData.processSteps.map(ps => `
                  <div style="padding: 1.1rem 1.25rem; border-left: 3px solid #0F2D25; background: #FAF8F5;">
                    <h3 style="color: #0F2D25; font-size: 1.1rem; margin: 0 0 0.3rem 0;">Phase ${escapeHtml(String(ps.step))} : ${escapeHtml(ps.title)}</h3>
                    <p style="margin: 0; color: #4a5568; line-height: 1.6;">${escapeHtml(ps.desc)}</p>
                  </div>
                `).join('')}
              </div>
            </section>
            ` : ''}

            <section style="margin-bottom: 2.5rem; padding: 1.5rem; border: 1px solid #e2e8f0; border-radius: 12px; background: #f8fafc;">
              <h2 style="color: #0F2D25; font-size: 1.5rem; margin: 0 0 0.5rem 0; font-family: Georgia, serif;">${escapeHtml(ctx.srvData.investmentTitle)}</h2>
              <p style="font-size: 1.25rem; font-weight: bold; color: #D46E55; margin: 0 0 0.5rem 0;">${escapeHtml(ctx.srvData.investmentPrice)}</p>
              <p style="margin: 0 0 1rem 0; color: #4a5568;">${escapeHtml(ctx.srvData.investmentDesc)}</p>
              <a href="${isFR ? '/contact' : '/en/contact'}" style="display: inline-block; background: #D46E55; color: #ffffff; padding: 0.75rem 1.5rem; border-radius: 8px; text-decoration: none; font-weight: 600;">
                ${isFR ? 'Demander un Audit Gratuit' : 'Request a Free Strategy Audit'}
              </a>
            </section>

            ${renderMatrixLinksHtml(
              getRelatedMatrixLinks(
                {
                  currentPath: page.path,
                  serviceId: ctx.serviceId,
                  locationId: ctx.locationId,
                  industryId: ctx.industryId
                },
                lang,
                6
              ),
              isFR
                ? `Autres Expertises Spécialisées (${ctx.meta.locationName} & Maroc)`
                : `Complementary Specializations (${ctx.meta.locationName} & Morocco)`,
              isFR
                ? "Explorez nos pages d'intervention connexes combinant création web rapide, référencement local et campagnes d'acquisition directe dans les principaux pôles marocains."
                : 'Explore connected regional and vertical playbooks uniting sub-second web design, local search authority, and commission-free direct acquisition across Morocco.'
            )}

            ${ctx.localizedFaqs.length > 0 ? `
            <section style="margin-bottom: 2.5rem;">
              <h2 style="color: #0F2D25; font-size: 1.75rem; margin-bottom: 1.25rem; font-family: Georgia, serif;">
                ${isFR ? `Questions Fréquentes — ${escapeHtml(ctx.meta.cleanServiceName)} (${escapeHtml(ctx.meta.locationName)})` : `Frequently Asked Questions — ${escapeHtml(ctx.meta.cleanServiceName)} (${escapeHtml(ctx.meta.locationName)})`}
              </h2>
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                ${ctx.localizedFaqs.map(item => `
                  <div style="padding: 1.25rem; border: 1px solid #e2e8f0; border-radius: 10px; background: #ffffff;">
                    <h3 style="color: #0F2D25; font-size: 1.1rem; margin: 0 0 0.5rem 0;">${escapeHtml(item.q)}</h3>
                    <p style="margin: 0; color: #4a5568; line-height: 1.6;">${escapeHtml(item.a)}</p>
                  </div>
                `).join('')}
              </div>
            </section>
            ` : ''}
          </div>
        `;
      }
    } else {
      // Standard static content (noindex utility pages such as /merci, /en/thank-you, /404)
      html += `
        <div>
          <header style="margin-bottom: 2.5rem;">
            <h1 style="font-size: 2.5rem; color: #0F2D25; margin-bottom: 1rem; line-height: 1.2; font-family: Georgia, serif;">${escapeHtml(page.title.replace(/\s*\|\s*(Agence\s+Urunk|Urunk\s+Agency|Urunk)\s*$/i, ''))}</h1>
            <p style="font-size: 1.15rem; color: #4a5568; line-height: 1.6;">${escapeHtml(page.description)}</p>
          </header>

          <section style="margin-bottom: 2.5rem;">
            <p style="font-size: 1.05rem; line-height: 1.7; color: #4a5568;">
              ${isFR ? 'Bienvenue sur la plateforme Urunk. Notre agence accompagne les établissements hôteliers, riads et entreprises au Maroc pour développer leur visibilité et leurs réservations directes sans commissions d\'intermédiaires.' : 'Welcome to Urunk. Our digital growth agency helps boutique hotels, riads, and businesses across Morocco scale search visibility and secure direct guest bookings without intermediary commission fees.'}
            </p>
          </section>
        </div>
      `;
    }
  }

  html += `
      </main>
      <footer style="margin-top: 4rem; padding: 2rem; border-top: 1px solid #e2e8f0; font-size: 0.9rem; color: #718096; max-width: 1100px; margin-left: auto; margin-right: auto; font-family: sans-serif;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
          <div>
            <h4 style="color: #0F2D25; margin-top: 0; margin-bottom: 0.75rem; font-size: 0.95rem;">URUNK</h4>
            <p style="font-size: 0.85rem; color: #4a5568; line-height: 1.5; margin-bottom: 0.5rem;">${isFR ? "Agence spécialisée en création web, SEO et publicité digitale au Maroc." : "Specialized web design, SEO and digital marketing agency in Morocco."}</p>
            <p style="font-size: 0.82rem; color: #4a5568; line-height: 1.5; margin: 0;">${isFR ? "3 Rue El Kadi Lass, Maarif, Casablanca, Maroc" : "3 Rue El Kadi Lass, Maarif, Casablanca, Morocco"}<br />+212 668-802096 &middot; contact@urunk.com</p>
          </div>
          <div>
            <h4 style="color: #0F2D25; margin-top: 0; margin-bottom: 0.75rem; font-size: 0.95rem;">${isFR ? 'Secteurs' : 'Industries'}</h4>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; display: flex; flex-direction: column; gap: 0.4rem;">
              <li><a href="${isFR ? '/secteurs/hotels-resorts' : '/en/industries/hotels-resorts'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Hôtels & Resorts' : 'Hotels & Resorts'}</a></li>
              <li><a href="${isFR ? '/secteurs/riads-maisons-hotes' : '/en/industries/riads-boutique-hotels'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Riads & Maisons d\'Hôtes' : 'Riads & Boutique Stays'}</a></li>
              <li><a href="${isFR ? '/secteurs/tour-operateurs' : '/en/industries/tour-operators'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Tour-Opérateurs' : 'Tour Operators'}</a></li>
              <li><a href="${isFR ? '/secteurs/restaurants-traiteurs' : '/en/industries/restaurants-catering'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Restaurants & Traiteurs' : 'Restaurants & Catering'}</a></li>
              <li><a href="${isFR ? '/secteurs/pme-entreprises' : '/en/industries/corporate-smes'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'PME & Entreprises B2B' : 'Corporate & SMEs'}</a></li>
            </ul>
          </div>
          <div>
            <h4 style="color: #0F2D25; margin-top: 0; margin-bottom: 0.75rem; font-size: 0.95rem;">${isFR ? 'Zones' : 'Locations'}</h4>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.85rem; display: flex; flex-direction: column; gap: 0.4rem;">
              <li><a href="${isFR ? '/zones' : '/en/locations'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Toutes les zones' : 'All Locations'}</a></li>
              <li><a href="${isFR ? '/zones/maroc' : '/en/locations/morocco'}" style="color: #4a5568; text-decoration: none;">${isFR ? 'Maroc (Hub)' : 'Morocco Hub'}</a></li>
              <li><a href="${isFR ? '/zones/casablanca' : '/en/locations/casablanca'}" style="color: #4a5568; text-decoration: none;">Casablanca</a></li>
              <li><a href="${isFR ? '/zones/marrakech' : '/en/locations/marrakech'}" style="color: #4a5568; text-decoration: none;">Marrakech</a></li>
              <li><a href="${isFR ? '/zones/rabat' : '/en/locations/rabat'}" style="color: #4a5568; text-decoration: none;">Rabat</a></li>
              <li><a href="${isFR ? '/zones/agadir' : '/en/locations/agadir'}" style="color: #4a5568; text-decoration: none;">Agadir</a></li>
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

  // Verify all linked JS/CSS assets in Vite's built template exist on disk and emit asset-manifest.json
  const entryJsMatch = rawViteTemplate.match(/<script[^>]+type="module"[^>]+src="(\/assets\/index-[^"]+\.js)"/i);
  const entryCssMatch = rawViteTemplate.match(/<link[^>]+rel="stylesheet"[^>]+href="(\/assets\/[^"]+\.css)"/i);
  const allLinkedAssets = Array.from(
    rawViteTemplate.matchAll(/<(?:script|link)[^>]+(?:src|href)="(\/assets\/[^"]+)"/gi)
  ).map(m => m[1]);

  for (const assetUrl of allLinkedAssets) {
    const assetDiskPath = path.join('dist', assetUrl.replace(/^\//, ''));
    if (!fs.existsSync(assetDiskPath)) {
      console.error(`Error: Linked build asset missing on disk: ${assetDiskPath}`);
      process.exit(1);
    }
  }

  const assetManifest = {
    entryJs: entryJsMatch ? entryJsMatch[1] : null,
    entryCss: entryCssMatch ? entryCssMatch[1] : null,
    generatedAt: new Date().toISOString(),
  };
  fs.mkdirSync(path.join('dist', 'assets'), { recursive: true });
  fs.writeFileSync(
    path.join('dist', 'assets', 'asset-manifest.json'),
    JSON.stringify(assetManifest, null, 2),
    'utf8'
  );

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

  // 7. Add Matrix Expertise Pages (3-Tuple: Location × Industry × Service)
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
          const enMeta = buildMatrixMetadata({
            lang: 'en',
            serviceId: srv,
            locationId: loc,
            industryId: ind,
          });
          allPages.push({
            path: `/en/expertise/${loc}/${ind}/${srv}`,
            lang: 'en',
            title: enMeta.metaPageTitle,
            description: enMeta.metaDescription,
          });

          const frMeta = buildMatrixMetadata({
            lang: 'fr',
            serviceId: srv,
            locationId: loc,
            industryId: ind,
          });
          allPages.push({
            path: `/expertise/${loc}/${ind}/${srv}`,
            lang: 'fr',
            title: frMeta.metaPageTitle,
            description: frMeta.metaDescription,
          });
        }
      }
    }
  }

  // 8. Add Live 2-Tuple Matrix Relations
  for (const rel of matrixRelations) {
    if (rel.status === 'live') {
      const srvData = servicesData[rel.serviceId];
      if (srvData) {
        const frMeta = buildMatrixMetadata({
          lang: 'fr',
          serviceId: rel.serviceId,
          locationId: rel.locationId,
          industryId: rel.industryId,
        });
        allPages.push({
          path: `/expertise/${rel.slugs.fr.service}/${rel.slugs.fr.target}`,
          lang: 'fr',
          title: frMeta.metaPageTitle,
          description: frMeta.metaDescription,
        });

        const enMeta = buildMatrixMetadata({
          lang: 'en',
          serviceId: rel.serviceId,
          locationId: rel.locationId,
          industryId: rel.industryId,
        });
        allPages.push({
          path: `/en/expertise/${rel.slugs.en.service}/${rel.slugs.en.target}`,
          lang: 'en',
          title: enMeta.metaPageTitle,
          description: enMeta.metaDescription,
        });
      }
    }
  }

  console.log(`Loaded ${allPages.length} unique pages for pre-rendering.`);

  let successCount = 0;

  function formatDescription(desc: string, lang: string = 'fr'): string {
    const cleaned = desc.replace(/\s+/g, ' ').trim();
    if (cleaned.length <= 158) {
      return cleaned;
    }
    const withinLimit = cleaned.substring(0, 158);
    const sentenceMatches = [...withinLimit.matchAll(/[.!?](\s+|$)/g)];
    if (sentenceMatches.length > 0) {
      const lastMatch = sentenceMatches[sentenceMatches.length - 1];
      const endIdx = (lastMatch.index ?? 0) + 1;
      if (endIdx >= 115) {
        return cleaned.substring(0, endIdx).trim();
      }
    }
    const lastSpace = withinLimit.lastIndexOf(' ');
    if (lastSpace >= 115) {
      let str = withinLimit.substring(0, lastSpace).trim();
      str = str.replace(/[,;:\-–—]+\s*$/, '').trim();
      str = str.replace(/\b(pour les|pour le|pour la|pour|et|de|des|du|en|au|aux|avec|dans|sur|par|vers|sans|for|and|the|to|in|at|of|with|by|from|on|or|a|an)\s*$/i, '').trim();
      str = str.replace(/(?:[ldLD]['’]|['’]s)\s*$/, '').trim();
      str = str.replace(/[,;:\-–—]+\s*$/, '').trim();
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
    const isCaseStudy = page.path.startsWith('/realisations/') || page.path.startsWith('/en/work/');
    const matchedServiceMapping = serviceRouteMapping.find(m => page.lang === 'fr' ? m.frPath === page.path : m.enPath === page.path);
    const isCommercialService = page.path.startsWith('/services/') || page.path.startsWith('/en/services/') || Boolean(matchedServiceMapping);
    const isFaqPage = page.path === '/faq' || page.path === '/en/faq' || page.path === '/tarifs' || page.path === '/en/pricing';
    const isCalculatorPage = page.path.includes('calculator');

    const ogImageUrl = `${BASE_URL}/og-image.jpg`;

    const matchedBlogPost = isBlogPost
      ? (page.lang === 'fr'
          ? blogPostsFR.find(p => p.slug === (page.path.split('/').pop() || ''))
          : blogPostsEN.find(p => p.slug === (page.path.split('/').pop() || '')))
      : undefined;
    const matchedCaseStudy = isCaseStudy
      ? caseStudies.find(s => {
          const slug = page.path.replace(/^\/(?:realisations|en\/work)\//, '');
          return s.slug === slug || s.frSlug === slug;
        })
      : undefined;

    const articlePublishedIso = isBlogPost
      ? parsePublishDate(matchedBlogPost?.date)
      : '2026-01-20';
    const articleModifiedIso = getSafeModifiedDate(articlePublishedIso);
    const articleOgTags = (isBlogPost || isCaseStudy)
      ? `\n    <meta property="article:published_time" content="${articlePublishedIso}" />\n    <meta property="article:modified_time" content="${articleModifiedIso}" />\n    <meta property="article:author" content="J.Mellal" />`
      : '';

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
    <meta property="og:type" content="${(isBlogPost || isCaseStudy) ? 'article' : 'website'}" />${articleOgTags}
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
          "email": "contact@urunk.com",
          "telephone": "+212668802096",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3 Rue El Kadi Lass, Maarif",
            "addressLocality": "Casablanca",
            "addressRegion": "Casablanca-Settat",
            "postalCode": "20330",
            "addressCountry": "MA"
          },
          "sameAs": [
            "https://www.linkedin.com/company/urunk",
            "https://www.instagram.com/urunkagency",
            "https://www.facebook.com/urunkagency"
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "ProfessionalService"],
          "@id": "https://urunk.com/#localbusiness",
          "name": "Urunk",
          "url": "https://urunk.com",
          "telephone": "+212668802096",
          "email": "contact@urunk.com",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3 Rue El Kadi Lass, Maarif",
            "addressLocality": "Casablanca",
            "addressRegion": "Casablanca-Settat",
            "postalCode": "20330",
            "addressCountry": "MA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 33.5855,
            "longitude": -7.6365
          },
          "areaServed": [
            { "@type": "Country", "name": "Morocco" },
            { "@type": "City", "name": "Casablanca" },
            { "@type": "City", "name": "Marrakech" },
            { "@type": "City", "name": "Rabat" },
            { "@type": "City", "name": "Agadir" }
          ]
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
      } else if (page.path === '/google-ads-maroc') {
         schemaDesc = "Agence Google Ads au Maroc spécialisée dans la création, l'audit et le pilotage de campagnes SEA rentables (Search, Performance Max, Google Shopping, YouTube Ads et Google Hotel Ads) pour PME, B2B, e-commerce et hôtellerie dès 4 000 MAD/mois.";
      } else if (page.path.includes("google-ads") || page.path.includes("gestion-google-ads")) {
         schemaDesc = page.lang === "fr" ? "Gestion Google Ads experte à 4 000 MAD/mois (approx. 370 €/mois), avec garantie de performance sous 90 jours [CONDITIONS_GARANTIE] pour maximiser les réservations directes." : "Expert Google Ads management at 4,000 MAD/mo (approx. €370/mo), backed by a 90-day guarantee [CONDITIONS_GARANTIE] to drive direct bookings.";
      } else if (page.path.includes("meta-ads") || page.path.includes("gestion-publicites-meta")) {
         schemaDesc = page.lang === "fr" ? "Gestion Meta Ads experte à 4 000 MAD/mois (approx. 370 €/mois), avec garantie de performance sous 90 jours [CONDITIONS_GARANTIE] pour maximiser les réservations directes." : "Expert Meta Ads management at 4,000 MAD/mo (approx. €370/mo), backed by a 90-day guarantee [CONDITIONS_GARANTIE] to drive direct bookings.";
      } else if (page.path.includes("tripadvisor-ads")) {
         schemaDesc = page.lang === "fr" ? "Gestion TripAdvisor Ads experte à 3 000 MAD/mois (approx. 280 €/mois), avec garantie de performance sous 90 jours [CONDITIONS_GARANTIE] pour convertir les voyageurs en clients directs." : "Expert TripAdvisor Ads management at 3,000 MAD/mo (approx. €280/mo), backed by a 90-day guarantee [CONDITIONS_GARANTIE] to drive direct bookings.";
      } else if (page.path.includes("bundle")) {
         schemaDesc = page.lang === "fr" ? "Architecture digitale complète incluant un site à 12 000 MAD (approx. 1 100 €) (4-6 semaines) et la gestion de campagnes (4 000 MAD/mois (approx. 370 €/mois)) sous garantie de 90 jours [CONDITIONS_GARANTIE]." : "Complete digital architecture including a 12,000 MAD (approx. €1,100) website (4-6 weeks) and campaign management (4,000 MAD/mo (approx. €370/mo)) under a 90-day guarantee [CONDITIONS_GARANTIE].";
      }

      if (page.path === '/google-ads-maroc') {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${canonicalUrl}#service`,
          "name": "Agence Google Ads Maroc — Gestion SEA & Acquisition Payante",
          "serviceType": "Agence Google Ads & Gestion SEA",
          "description": schemaDesc,
          "provider": {
            "@type": "ProfessionalService",
            "name": "Urunk",
            "url": "https://urunk.com",
            "telephone": "+212668802096",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3 Rue El Kadi Lass, Maarif",
              "addressLocality": "Casablanca",
              "addressRegion": "Casablanca-Settat",
              "postalCode": "20330",
              "addressCountry": "MA"
            }
          },
          "areaServed": [
            { "@type": "Country", "name": "Morocco" },
            { "@type": "City", "name": "Casablanca" },
            { "@type": "City", "name": "Marrakech" },
            { "@type": "City", "name": "Rabat" },
            { "@type": "City", "name": "Tangier" },
            { "@type": "City", "name": "Agadir" }
          ],
          "offers": {
            "@type": "Offer",
            "price": "4000",
            "priceCurrency": "MAD",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "4000",
              "priceCurrency": "MAD",
              "unitText": "MONTH"
            },
            "availability": "https://schema.org/InStock",
            "url": canonicalUrl
          }
        });
      } else {
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

      if (matchedServiceMapping && servicesData[matchedServiceMapping.key]) {
        const srvEntry = servicesData[matchedServiceMapping.key][page.lang];
        if (srvEntry && srvEntry.faqs && srvEntry.faqs.length > 0) {
          schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": srvEntry.faqs.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a
              }
            }))
          });
        }
      }
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
          { q: "Où êtes-vous basés et comment collaborez-vous avec vos clients ?", a: "Urunk est basée au 3 Rue El Kadi Lass, Maarif, Casablanca, Maroc, avec une présence opérationnelle à Marrakech, assurant une proximité directe pour nos clients au Maroc. Nous collaborons également à distance via Google Meet et proposons des contrats mensuels flexibles sans engagement abusif avec un préavis de résiliation de 15 jours." },
          { q: "Y a-t-il des frais de configuration pour les campagnes Google, Meta ou TripAdvisor ?", a: "Non, aucun frais de dossier de départ n'est facturé pour nos prestations standard de prise en main mensuelle de vos comptes publicitaires." },
          { q: "Proposez-vous des contrats à engagement de durée minimale ?", a: "Non. Tous nos services récurrents d'optimisation SEO ou de gestion de campagnes publicitaires sont facturés sans engagement forcé à long terme." },
          { q: "Y a-t-il des frais de licence récurrents pour notre site web ?", a: "Non. Nous concevons vos sites web sous des technologies ouvertes dont vous êtes propriétaire à 100 %. Vous ne payez aucun abonnement logiciel de notre part." }
        ] : [
          { q: "How do you help Moroccan riads and hotels reduce OTA commissions?", a: "We build high-performance, ultra-fast direct booking websites (starting at 12,000 MAD / ≈1,100 €) integrated with your Property Management System. Combined with targeted Google Search campaigns (4,000 MAD/month / ≈370 €/month management retainer) and local SEO, we intercept travelers before they book on third-party channels, reducing dependency and increasing your direct bookings." },
          { q: "How long does it take for an SEO strategy to show results?", a: "Technical SEO fixes, page speed optimization, and Google Business Profile updates yield visible local search improvements within 30 to 45 days. Organic authority for competitive search keywords (such as 'luxury riad Marrakech') typically matures over a 4 to 6 week implementation period followed by 3 to 6 months of ongoing growth." },
          { q: "What is included in your website creation package?", a: "Every project (12,000 MAD / ≈1,100 € fixed investment) includes custom luxury user experience design, rapid React performance engineering, bilingual structure (English, French), native booking engine API integration, and complete technical SEO. We deliver in 4 to 6 weeks, backed by our 90-day growth guarantee subject to [CONDITIONS_GARANTIE]." },
          { q: "Which advertising channel is more effective: Google Ads or Meta Ads?", a: "Google Ads (managed at 4,000 MAD/month / ≈370 €/month) capture high-intent travelers actively searching for specific Moroccan destinations. Meta Ads (Instagram and Facebook) excel at showcasing room architecture and amenities to qualified audiences in Europe and North America, reducing inquiry costs." },
          { q: "Can you connect the website to my existing PMS?", a: "Yes, we seamlessly integrate direct booking engines with leading Property Management Systems including Cloudbeds, Mews, Little Hotelier, Sirvoy, and Opera via secure API connections. This ensures real-time rate synchronization and availability." },
          { q: "Where is Urunk located and how do you work with clients?", a: "Urunk is headquartered at 3 Rue El Kadi Lass, Maarif, Casablanca, Morocco, with regional presence in Marrakech for local proximity across Morocco. We collaborate via remote consultations on Google Meet and offer flexible monthly agreements with a 15-day notice policy." },
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
      const postHeadline = matchedBlogPost?.h1 || matchedBlogPost?.title || pageTitle;
      schemas.push(
        buildArticleSchema({
          type: 'BlogPosting',
          url: canonicalUrl,
          headline: postHeadline,
          description: pageDesc,
          image: ogImageUrl,
          datePublished: articlePublishedIso,
          dateModified: articleModifiedIso,
          lang: page.lang
        })
      );
    }

    if (isCaseStudy) {
      const studyHeadline = (page.lang === 'fr' ? matchedCaseStudy?.frTitle : matchedCaseStudy?.title) || pageTitle;
      const studyImage = matchedCaseStudy?.heroImage ? `${BASE_URL}${matchedCaseStudy.heroImage}` : ogImageUrl;
      schemas.push(
        buildArticleSchema({
          type: 'Article',
          url: canonicalUrl,
          headline: studyHeadline,
          description: pageDesc,
          image: studyImage,
          datePublished: '2026-01-20',
          dateModified: getSafeModifiedDate('2026-01-20'),
          lang: page.lang
        })
      );
    }

    if (page.path === '/blog' || page.path === '/en/blog') {
      const hubPosts = page.lang === 'fr' ? blogPostsFR : blogPostsEN;
      schemas.push(
        buildArticleSchema({
          type: 'Article',
          url: canonicalUrl,
          headline: pageTitle,
          description: pageDesc,
          image: ogImageUrl,
          datePublished: '2026-01-15',
          dateModified: getSafeModifiedDate('2026-01-15'),
          lang: page.lang
        }),
        {
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": `${canonicalUrl}#blog`,
          "name": pageTitle,
          "description": pageDesc,
          "url": canonicalUrl,
          "inLanguage": page.lang === 'fr' ? 'fr-MA' : 'en-US',
          "publisher": {
            "@type": "Organization",
            "name": "Urunk",
            "url": BASE_URL,
            "logo": {
              "@type": "ImageObject",
              "url": `${BASE_URL}/logo.png`
            }
          },
          "blogPost": hubPosts.slice(0, 10).map(p => {
            const pDate = parsePublishDate(p.date);
            const pUrl = `${BASE_URL}${page.lang === 'fr' ? '/blog/' : '/en/blog/'}${p.slug}`;
            return {
              "@type": "BlogPosting",
              "headline": p.h1 || p.title,
              "url": pUrl,
              "datePublished": pDate,
              "dateModified": getSafeModifiedDate(pDate),
              "author": {
                "@type": "Person",
                "name": "J.Mellal",
                "url": page.lang === 'fr' ? `${BASE_URL}/a-propos` : `${BASE_URL}/en/about`
              }
            };
          })
        }
      );
    }

    if (page.path === '/plan-du-site' || page.path === '/en/sitemap') {
      schemas.push(
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${canonicalUrl}#webpage`,
          "name": pageTitle,
          "description": pageDesc,
          "url": canonicalUrl,
          "inLanguage": page.lang === 'fr' ? 'fr-MA' : 'en-US'
        },
        buildArticleSchema({
          type: 'Article',
          url: canonicalUrl,
          headline: pageTitle,
          description: pageDesc,
          image: ogImageUrl,
          datePublished: '2026-01-15',
          dateModified: getSafeModifiedDate('2026-01-15'),
          lang: page.lang
        })
      );
    }

    if (page.path === '/realisations' || page.path === '/en/work') {
      schemas.push(
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${canonicalUrl}#webpage`,
          "name": pageTitle,
          "description": pageDesc,
          "url": canonicalUrl,
          "inLanguage": page.lang === 'fr' ? 'fr-MA' : 'en-US'
        },
        buildArticleSchema({
          type: 'Article',
          url: canonicalUrl,
          headline: pageTitle,
          description: pageDesc,
          image: ogImageUrl,
          datePublished: '2026-01-18',
          dateModified: getSafeModifiedDate('2026-01-18'),
          lang: page.lang
        })
      );
    }

    if (page.path === '/a-propos' || page.path === '/en/about') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": `${canonicalUrl}#aboutpage`,
        "name": pageTitle,
        "description": pageDesc,
        "url": canonicalUrl,
        "inLanguage": page.lang === 'fr' ? 'fr-MA' : 'en-US',
        "mainEntity": {
          "@type": "Organization",
          "name": "Urunk",
          "url": BASE_URL,
          "founder": {
            "@type": "Person",
            "name": "J.Mellal",
            "jobTitle": page.lang === 'fr'
              ? "Consultant SEO & Stratège Marketing Digital Propulsé par l'IA"
              : "SEO Consultant & AI-Powered Digital Marketing Strategist"
          }
        }
      });
    }

    if (page.path === '/contact' || page.path === '/en/contact') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${canonicalUrl}#contactpage`,
        "name": pageTitle,
        "description": pageDesc,
        "url": canonicalUrl,
        "inLanguage": page.lang === 'fr' ? 'fr-MA' : 'en-US',
        "mainEntity": {
          "@type": "LocalBusiness",
          "@id": "https://urunk.com/#localbusiness",
          "name": "Urunk",
          "url": BASE_URL,
          "email": "contact@urunk.com",
          "telephone": "+212668802096",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3 Rue El Kadi Lass, Maarif",
            "addressLocality": "Casablanca",
            "addressRegion": "Casablanca-Settat",
            "postalCode": "20330",
            "addressCountry": "MA"
          }
        }
      });
    }

    if (page.path === '/services' || page.path === '/en/services' || page.path === '/zones' || page.path === '/en/locations') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#collectionpage`,
        "name": pageTitle,
        "description": pageDesc,
        "url": canonicalUrl,
        "inLanguage": page.lang === 'fr' ? 'fr-MA' : 'en-US'
      });
    }

    if (
      page.path === '/politique-de-confidentialite' ||
      page.path === '/en/privacy-policy' ||
      page.path === '/conditions-generales' ||
      page.path === '/en/terms-of-service'
    ) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "name": pageTitle,
        "description": pageDesc,
        "url": canonicalUrl,
        "inLanguage": page.lang === 'fr' ? 'fr-MA' : 'en-US',
        "dateModified": getSafeModifiedDate('2026-08-01')
      });
    }

    if (page.path.startsWith('/secteurs/') || page.path.startsWith('/en/industries/')) {
      const rawInd = page.path.replace(/^\/(?:secteurs|en\/industries)\//, '');
      const indMapLookup: Record<string, string> = {
        'hotels-resorts': 'hotels-resorts',
        'riads-maisons-hotes': 'riads-boutique-hotels',
        'riads-boutique-hotels': 'riads-boutique-hotels',
        'tour-operateurs': 'tour-operators',
        'tour-operators': 'tour-operators',
        'restaurants-traiteurs': 'restaurants-catering',
        'restaurants-catering': 'restaurants-catering',
        'pme-entreprises': 'corporate-smes',
        'corporate-smes': 'corporate-smes',
        'ecommerce': 'ecommerce'
      };
      const indEntry = industriesData[indMapLookup[rawInd] || rawInd]?.[page.lang];
      if (indEntry && indEntry.faqs.length > 0) {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": indEntry.faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.a
            }
          }))
        });
      }
    }

    if ((page.path.startsWith('/zones/') && page.path !== '/zones') || (page.path.startsWith('/en/locations/') && page.path !== '/en/locations')) {
      const rawLoc = page.path.replace(/^\/(?:zones|en\/locations)\//, '');
      const locEntry = locationsData[rawLoc === 'maroc' ? 'morocco' : rawLoc]?.[page.lang];
      if (locEntry && locEntry.faqs.length > 0) {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": locEntry.faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.a
            }
          }))
        });
      }
    }

    const matrixCtx = resolveMatrixPageContext(page.path, page.lang);
    if (matrixCtx) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": matrixCtx.meta.pageHeading,
        "description": pageDesc,
        "provider": {
          "@type": "ProfessionalService",
          "name": "Urunk",
          "url": "https://urunk.com"
        },
        "areaServed": matrixCtx.meta.locationName
      });

      if (matrixCtx.localizedFaqs.length > 0) {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": matrixCtx.localizedFaqs.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.a
            }
          }))
        });
      }
    }

    if (page.path !== '/' && page.path !== '/en') {
      if (matrixCtx) {
        const breadcrumbItems: object[] = [
          {
            "@type": "ListItem",
            "position": 1,
            "name": page.lang === 'fr' ? 'Accueil' : 'Home',
            "item": page.lang === 'fr' ? `${BASE_URL}/` : `${BASE_URL}/en`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Expertise",
            "item": page.lang === 'fr' ? `${BASE_URL}/services` : `${BASE_URL}/en/services`
          }
        ];
        if (matrixCtx.locationId) {
          const locUrl = page.lang === 'fr'
            ? (matrixCtx.locationId === 'morocco' ? `${BASE_URL}/zones/maroc` : `${BASE_URL}/zones/${matrixCtx.locationId}`)
            : `${BASE_URL}/en/locations/${matrixCtx.locationId}`;
          breadcrumbItems.push({
            "@type": "ListItem",
            "position": 3,
            "name": matrixCtx.meta.locationName,
            "item": locUrl
          });
        }
        breadcrumbItems.push({
          "@type": "ListItem",
          "position": breadcrumbItems.length + 1,
          "name": matrixCtx.meta.pageHeading,
          "item": canonicalUrl
        });
        schemas.push({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbItems
        });
      } else if (isBlogPost) {
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
              "name": "Blog",
              "item": page.lang === 'fr' ? `${BASE_URL}/blog` : `${BASE_URL}/en/blog`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": pageTitle,
              "item": canonicalUrl
            }
          ]
        });
      } else if (isCaseStudy) {
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
              "name": page.lang === 'fr' ? 'Réalisations' : 'Work',
              "item": page.lang === 'fr' ? `${BASE_URL}/realisations` : `${BASE_URL}/en/work`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": pageTitle,
              "item": canonicalUrl
            }
          ]
        });
      } else if (isCommercialService && page.path !== '/services' && page.path !== '/en/services') {
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
              "name": "Services",
              "item": page.lang === 'fr' ? `${BASE_URL}/services` : `${BASE_URL}/en/services`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": page.path === '/google-ads-maroc' ? 'Agence Google Ads Maroc' : pageTitle,
              "item": canonicalUrl
            }
          ]
        });
      } else {
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
