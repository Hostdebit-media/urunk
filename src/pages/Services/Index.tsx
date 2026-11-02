import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import RelatedExpertiseSection from '../../components/RelatedExpertiseSection';
import { getAllLiveMatrixLinks } from '../../data/matrixRelations';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Hairline from '../../components/ui/Hairline';

interface ServiceItem {
  category: string;
  categoryFr: string;
  title: string;
  titleFr: string;
  desc: string;
  descFr: string;
  path: string;
  pathFr: string;
}

const services: ServiceItem[] = [
  // 1. Web Design
  {
    category: 'Web Design',
    categoryFr: 'Création Web',
    title: 'Website Design & Development',
    titleFr: 'Création de Sites Web',
    desc: 'Custom, high-speed, mobile-optimized hotel websites built to convert lookers into direct bookings.',
    descFr: 'Conception de sites vitrines et marchands haut de gamme, rapides et optimisés pour la réservation.',
    path: '/en/services/website-design',
    pathFr: '/services/creation-site-web',
  },
  {
    category: 'Web Design',
    categoryFr: 'Création Web',
    title: 'Morocco Web Design Agency',
    titleFr: 'Agence Web Maroc',
    desc: 'Tailored Jamstack and modern frontend web engineering for businesses seeking elite speed and design.',
    descFr: 'Ingénierie web moderne et design haut de gamme pour les marques hôtelières et PME au Maroc.',
    path: '/en/web-design-morocco',
    pathFr: '/agence-web-maroc',
  },
  {
    category: 'Web Design',
    categoryFr: 'Création Web',
    title: 'Casablanca Web Design',
    titleFr: 'Agence Web Casablanca',
    desc: 'Custom enterprise and luxury brand websites tailored specifically for the Casablanca corporate ecosystem.',
    descFr: 'Création de sites internet premium et d\'applications web pour les entreprises de Casablanca.',
    path: '/en/web-design-casablanca',
    pathFr: '/agence-web-casablanca',
  },
  {
    category: 'Web Design',
    categoryFr: 'Création Web',
    title: 'Hotel Website Design',
    titleFr: 'Site Web Hôtel',
    desc: 'Sophisticated websites with immersive media, room display layouts, and seamless booking integration.',
    descFr: 'Portails hôteliers de luxe avec galeries immersives et parcours client fluide.',
    path: '/en/hotel-website-design',
    pathFr: '/site-web-hotel',
  },
  {
    category: 'Web Design',
    categoryFr: 'Création Web',
    title: 'Riad Website Design Marrakech',
    titleFr: 'Site Web Riad Marrakech',
    desc: 'Bespoke websites designed specifically to capture the intimate, authentic luxury of boutique Medina riads.',
    descFr: 'Sites d\'exception reflétant le charme intime et l\'authenticité des riads et maisons d\'hôtes de la médina.',
    path: '/en/riad-website-design-marrakech',
    pathFr: '/site-web-riad-marrakech',
  },

  // 2. SEO & Organic Growth
  {
    category: 'SEO & Organic',
    categoryFr: 'Référencement & SEO',
    title: 'SEO Morocco',
    titleFr: 'Référencement SEO Maroc',
    desc: 'Expert search engine optimization to capture high-intent organic traffic searching for Morocco tourism.',
    descFr: 'Optimisation de référencement naturel pour optimiser Google Maroc et l\'international.',
    path: '/en/seo-agency-morocco',
    pathFr: '/agence-seo-maroc',
  },
  {
    category: 'SEO & Organic',
    categoryFr: 'Référencement & SEO',
    title: 'SEO Agency Morocco',
    titleFr: 'Agence SEO Maroc',
    desc: 'High-performance organic positioning strategies from our specialized search consultancy.',
    descFr: 'Stratégies d\'acquisition organique complètes par notre agence de référencement basée au Maroc.',
    path: '/en/seo-agency-morocco',
    pathFr: '/agence-seo-maroc',
  },
  {
    category: 'SEO & Organic',
    categoryFr: 'Référencement & SEO',
    title: 'SEO Agency Casablanca',
    titleFr: 'Agence SEO Casablanca',
    desc: 'B2B and hospitality search optimization targeting competitive corporate queries in Casablanca.',
    descFr: 'Positionnement de pointe sur les mots-clés stratégiques hautement concurrentiels à Casablanca.',
    path: '/en/seo-agency-casablanca',
    pathFr: '/agence-seo-casablanca',
  },
  {
    category: 'SEO & Organic',
    categoryFr: 'Référencement & SEO',
    title: 'Hotel SEO',
    titleFr: 'SEO Hôtelier',
    desc: 'Bypass OTAs completely by outranking Booking and TripAdvisor for valuable accommodation search queries.',
    descFr: 'Dépassez les OTA sur Google et positionnez vos chambres en tête des résultats pour capter l\'intention directe.',
    path: '/en/hotel-seo',
    pathFr: '/seo-hotel',
  },
  {
    category: 'SEO & Organic',
    categoryFr: 'Référencement & SEO',
    title: 'Riad SEO Marrakech',
    titleFr: 'SEO Riad Marrakech',
    desc: 'Hyper-local Medina SEO to capture high-ticket international guests searching for luxury riads in Marrakech.',
    descFr: 'Optimisation de visibilité pour les riads de Marrakech ciblant la clientèle touristique internationale.',
    path: '/en/riad-seo-marrakech',
    pathFr: '/seo-riad-marrakech',
  },
  {
    category: 'SEO & Organic',
    categoryFr: 'Référencement & SEO',
    title: 'AI SEO Optimization',
    titleFr: 'Optimisation SEO par l\'IA',
    desc: 'Leverage advanced AI semantic structures, schema markups, and search engine content clustering.',
    descFr: 'Utilisez la sémantique de l\'IA, les balises de schéma et le maillage sémantique prédictif.',
    path: '/en/services/ai-seo-optimization',
    pathFr: '/services/ai-seo-optimization',
  },
  {
    category: 'SEO & Organic',
    categoryFr: 'Référencement & SEO',
    title: 'WordPress SEO',
    titleFr: 'SEO WordPress',
    desc: 'Fine-tune WordPress speed, technical performance, page structure, and core web vitals for maximum crawlability.',
    descFr: 'Optimisation technique WordPress pour la vitesse, la structure et un indexage parfait de vos contenus.',
    path: '/en/services/wordpress-seo',
    pathFr: '/services/wordpress-seo',
  },
  {
    category: 'SEO & Organic',
    categoryFr: 'Référencement & SEO',
    title: 'E-commerce SEO',
    titleFr: 'SEO E-commerce',
    desc: 'Scale organic sales with clean product page indexing, transactional structured data, and high-intent keyword mapping.',
    descFr: 'Augmentez vos ventes en ligne avec un indexage propre de vos fiches produits et des schémas transactionnels.',
    path: '/en/services/ecommerce-seo',
    pathFr: '/services/ecommerce-seo',
  },

  // 3. Local SEO & Maps
  {
    category: 'Local SEO & Maps',
    categoryFr: 'SEO Local & Cartes',
    title: 'Local SEO Casablanca',
    titleFr: 'Référencement Local Casablanca',
    desc: 'Excel location-based searches, Google Maps Pack, and regional business directories in Casablanca.',
    descFr: 'Gagnez les meilleures places sur Google Maps et dans le Pack Local pour Casablanca.',
    path: '/en/local-seo-casablanca',
    pathFr: '/referencement-local-casablanca',
  },
  {
    category: 'Local SEO & Maps',
    categoryFr: 'SEO Local & Cartes',
    title: 'Google Business Profile',
    titleFr: 'Optimisation Fiche Google Business',
    desc: 'Comprehensive optimization of your GBP listings, review management, and high-ranking local citation structures.',
    descFr: 'Gestion professionnelle et optimisation de votre profil Google Business pour maximiser l\'attraction locale.',
    path: '/en/services/google-business-profile',
    pathFr: '/services/google-business-profile',
  },
  {
    category: 'Local SEO & Maps',
    categoryFr: 'SEO Local & Cartes',
    title: 'Local SEO Morocco',
    titleFr: 'SEO Local Maroc',
    desc: 'Establish geographic visibility across Morocco with consistent citation clusters and region-targeted location SEO.',
    descFr: 'Citations locales précises et positionnement géocentrique pour être trouvé par les voyageurs partout au Maroc.',
    path: '/en/services/local-seo-morocco',
    pathFr: '/services/local-seo-morocco',
  },

  // 4. Paid Advertising
  {
    category: 'Paid Advertising',
    categoryFr: 'Publicité Payante',
    title: 'Google Ads Management',
    titleFr: 'Agence Google Ads Maroc : Campagnes SEA & ROI',
    desc: 'Create high-converting Search, Display, and Performance Max campaigns targeting ready-to-book global travelers.',
    descFr: 'Agence Google Ads au Maroc spécialisée Search, Performance Max, Shopping et Hotel Ads dès 4 000 MAD/mois pour PME, e-commerce et hôtellerie.',
    path: '/en/services/google-ads',
    pathFr: '/google-ads-maroc',
  },
  {
    category: 'Paid Advertising',
    categoryFr: 'Publicité Payante',
    title: 'Meta Ads (FB & IG)',
    titleFr: 'Gestion Publicités Meta',
    desc: 'Drive visual inspiration and targeted social media lead generation across Facebook and Instagram.',
    descFr: 'Campagnes visuelles percutantes sur Instagram et Facebook pour stimuler les réservations d\'inspiration.',
    path: '/en/services/meta-ads',
    pathFr: '/services/gestion-publicites-meta',
  },
  {
    category: 'Paid Advertising',
    categoryFr: 'Publicité Payante',
    title: 'TripAdvisor Ads Optimization',
    titleFr: 'Optimisation TripAdvisor Ads',
    desc: 'Sponsor placement listings and optimize campaigns on TripAdvisor to capture active destination planners.',
    descFr: 'Sponsorisation et optimisation des annonces TripAdvisor pour attirer les touristes qualifiés.',
    path: '/en/services/tripadvisor-ads',
    pathFr: '/services/tripadvisor-ads',
  },
  {
    category: 'Paid Advertising',
    categoryFr: 'Publicité Payante',
    title: 'Google Ads Morocco',
    titleFr: 'Google Ads Maroc',
    desc: 'PPC search campaigns tailored for regional businesses seeking rapid lead generation within the Moroccan market.',
    descFr: 'Annonces ultra-ciblées sur Google Maroc pour générer rapidement des contacts et prospects hautement qualifiés.',
    path: '/en/google-ads-morocco',
    pathFr: '/google-ads-maroc',
  },

  // 5. Hospitality Solutions
  {
    category: 'Hospitality Solutions',
    categoryFr: 'Solutions de Croissance',
    title: 'Hotel Digital Marketing',
    titleFr: 'Marketing Digital Hôtelier',
    desc: 'An omnichannel booking acquisition system combining search marketing, travel ads, and direct booking funnels.',
    descFr: 'Écosystème digital omnicanal complet pour maximiser le taux d\'occupation de votre hôtel.',
    path: '/en/hotel-digital-marketing',
    pathFr: '/marketing-digital-hotelier',
  },
  {
    category: 'Hospitality Solutions',
    categoryFr: 'Solutions de Croissance',
    title: 'Direct Booking Strategy',
    titleFr: 'Stratégie de Réservation Directe',
    desc: 'Bypass OTA commission fees with optimized PMS integration, loyalty systems, and conversion-focused UX.',
    descFr: 'Stratégies d\'intégration PMS, incitations de fidélisation et UX fluide pour contourner les commissions des OTA.',
    path: '/en/direct-booking',
    pathFr: '/reservation-directe',
  },
  {
    category: 'Hospitality Solutions',
    categoryFr: 'Solutions de Croissance',
    title: 'The Website & Ads Bundle',
    titleFr: 'Forfait Site Web & Publicité',
    desc: 'The definitive high-growth solution uniting a brand new booking website with managed PPC campaigns.',
    descFr: 'Le pack d\'accélération ultime associant un site hôtelier d\'exception et une gestion publicitaire optimisée.',
    path: '/en/services/bundle-site-ads',
    pathFr: '/services/bundle-site-ads',
  },
];

export default function ServicesIndex() {
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');
  const allExpertiseLinks = getAllLiveMatrixLinks(isFrench ? 'fr' : 'en');

  const rawCategories = [
    { en: 'All Services', fr: 'Tous les Services' },
    { en: 'Web Design', fr: 'Création Web' },
    { en: 'SEO & Organic', fr: 'Référencement & SEO' },
    { en: 'Local SEO & Maps', fr: 'SEO Local & Cartes' },
    { en: 'Paid Advertising', fr: 'Publicité Payante' },
    { en: 'Hospitality Solutions', fr: 'Solutions de Croissance' },
  ];

  const [activeTab, setActiveTab] = useState('All Services');

  const seenPaths = new Set<string>();
  const filteredServices = services.filter((service) => {
    if (activeTab !== 'All Services' && service.category !== activeTab) return false;
    const targetPath = isFrench ? service.pathFr : service.path;
    if (seenPaths.has(targetPath)) return false;
    seenPaths.add(targetPath);
    return true;
  });

  return (
    <div className="bg-bg-light text-primary min-h-screen">
      <SEO
        title={
          isFrench
            ? "Nos Services d'Acquisition & Marketing Digital | Urunk"
            : "Our Acquisition & Digital Marketing Services | Urunk"
        }
        description={
          isFrench
            ? "Découvrez notre catalogue complet de services d'acquisition : création de sites web hôteliers, référencement SEO, Google Ads, et solutions sur mesure."
            : "Explore our comprehensive suite of growth and digital acquisition services: high-speed hotel web design, SEO, Google Ads, and custom hospitality solutions."
        }
      />

      {/* Hero Section */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-4xl">
          <p className="text-sm font-medium text-bg-light/75 mb-4">
            {isFrench ? "Catalogue Complet" : "Comprehensive Suite"}
          </p>
          <h1 className="font-serif text-bg-light mb-6 text-balance">
            {isFrench ? "Nos Services d'Acquisition" : "Acquisition Services"}
          </h1>
          <p className="text-lg md:text-xl text-bg-light/85 max-w-[62ch] leading-relaxed">
            {isFrench
              ? "Des solutions de marketing sur mesure et haut de gamme pour transformer votre établissement en un moteur de réservations directes."
              : "Bespoke digital growth and marketing solutions designed to scale direct bookings and maximize revenue for your business."}
          </p>
        </div>
      </Section>

      {/* Category Filter Controls */}
      <div className="border-b border-border-subtle bg-bg-light sticky top-[76px] z-30 px-[clamp(20px,5vw,56px)]">
        <div className="max-w-[1240px] mx-auto w-full py-4">
          <div className="flex overflow-x-auto gap-2 items-center">
            {rawCategories.map((cat, idx) => {
              const isActive = activeTab === cat.en;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTab(cat.en)}
                  className={`px-4 py-2 rounded-sm text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-bg-light'
                      : 'bg-bg-card text-primary/80 hover:text-primary border border-border-subtle'
                  }`}
                >
                  {isFrench ? cat.fr : cat.en}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Editorial Service Rows */}
      <Section tone="light">
        {filteredServices.length === 0 ? (
          <div className="py-16 text-primary/65">
            {isFrench ? "Aucun service trouvé." : "No services found."}
          </div>
        ) : (
          <div>
            <Hairline />
            {filteredServices.map((service, index) => {
              const targetPath = isFrench ? service.pathFr : service.path;
              const label = isFrench ? service.titleFr : service.title;
              const categoryLabel = isFrench ? service.categoryFr : service.category;
              const description = isFrench ? service.descFr : service.desc;

              return (
                <div key={targetPath} id={`service-card-${index}`}>
                  <div className="py-8 md:py-10 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                    <div className="md:col-span-3 flex items-baseline gap-3">
                      <span className="tabular-nums text-xs text-primary/50">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-medium text-accent">
                        {categoryLabel}
                      </span>
                    </div>
                    <div className="md:col-span-4">
                      <h2 className="font-serif text-[26px] leading-snug text-primary">
                        <Link to={targetPath}>{label}</Link>
                      </h2>
                    </div>
                    <div className="md:col-span-5">
                      <p className="text-primary/80 text-base leading-relaxed max-w-[60ch]">
                        {description}
                      </p>
                    </div>
                  </div>
                  <Hairline />
                </div>
              );
            })}
          </div>
        )}
      </Section>

      <RelatedExpertiseSection
        kicker={isFrench ? "Expertises Croisées Ville & Secteur" : "Regional & Sector Matrix"}
        title={
          isFrench
            ? "Expertises Spécialisées par Ville & Secteur au Maroc"
            : "Specialized Services by Moroccan City & Sector"
        }
        subtitle={
          isFrench
            ? "Chaque marché local possède ses propres volumes de recherche, coûts par clic et comportements de réservation. Explorez nos 19 pôles d'expertise régionaux et sectoriels."
            : "Search demand, CPC benchmarks, and booking behaviors vary across Moroccan cities. Explore all 19 dedicated city and vertical specializations."
        }
        links={allExpertiseLinks}
        isFrench={isFrench}
        bgVariant="alt"
      />

      {/* Audit Callout */}
      <Section tone="dark">
        <div className="max-w-2xl">
          <h2 className="font-serif text-bg-light mb-4 text-balance">
            {isFrench ? "Besoin d'un audit de visibilité ?" : "Need a custom visibility audit?"}
          </h2>
          <p className="text-bg-light/85 text-lg mb-8 leading-relaxed">
            {isFrench
              ? "Nous analysons votre site web, votre positionnement local et vos campagnes existantes pour identifier vos plus grands leviers de croissance directe."
              : "We will analyze your website, local positioning, and active ad accounts to locate your highest leverage opportunities for direct revenue."}
          </p>
          <Button variant="dark" href={isFrench ? "/contact" : "/en/contact"}>
            {isFrench ? "Demander mon audit gratuit" : "Request Free Audit"}
          </Button>
        </div>
      </Section>
    </div>
  );
}
