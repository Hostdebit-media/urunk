import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Monitor, 
  Search, 
  MapPin, 
  Target, 
  Globe, 
  LayoutGrid, 
  TrendingUp, 
  Sparkles, 
  BadgePercent, 
  Compass, 
  CheckCircle,
  Code,
  Layers,
  Smartphone,
  Briefcase,
  Megaphone
} from 'lucide-react';
import SEO from '../../components/SEO';

interface ServiceItem {
  icon: React.ReactNode;
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
    icon: <Monitor size={32} />,
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
    icon: <Code size={32} />,
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
    icon: <Layers size={32} />,
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
    icon: <Smartphone size={32} />,
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
    icon: <Compass size={32} />,
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
    icon: <Search size={32} />,
    category: 'SEO & Organic',
    categoryFr: 'Référencement & SEO',
    title: 'SEO Morocco',
    titleFr: 'Référencement SEO Maroc',
    desc: 'Expert search engine optimization to capture high-intent organic traffic searching for Morocco tourism.',
    descFr: 'Optimisation de référencement naturel pour optimiser Google Maroc et l\'international.',
    path: '/en/seo-morocco',
    pathFr: '/agence-seo-maroc',
  },
  {
    icon: <TrendingUp size={32} />,
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
    icon: <Briefcase size={32} />,
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
    icon: <Sparkles size={32} />,
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
    icon: <MapPin size={32} />,
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
    icon: <Sparkles size={32} />,
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
    icon: <Layers size={32} />,
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
    icon: <BadgePercent size={32} />,
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
    icon: <MapPin size={32} />,
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
    icon: <CheckCircle size={32} />,
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
    icon: <Compass size={32} />,
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
    icon: <Target size={32} />,
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
    icon: <Megaphone size={32} />,
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
    icon: <Globe size={32} />,
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
    icon: <Target size={32} />,
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
    icon: <Megaphone size={32} />,
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
    icon: <Compass size={32} />,
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
    icon: <LayoutGrid size={32} />,
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
  
  // Dynamic categories list based on language
  const rawCategories = [
    { en: 'All Services', fr: 'Tous les Services' },
    { en: 'Web Design', fr: 'Création Web' },
    { en: 'SEO & Organic', fr: 'Référencement & SEO' },
    { en: 'Local SEO & Maps', fr: 'SEO Local & Cartes' },
    { en: 'Paid Advertising', fr: 'Publicité Payante' },
    { en: 'Hospitality Solutions', fr: 'Solutions de Croissance' },
  ];

  const [activeTab, setActiveTab] = useState('All Services');

  // Filter services and deduplicate by localized destination path
  const seenPaths = new Set<string>();
  const filteredServices = services.filter(service => {
    if (activeTab !== 'All Services' && service.category !== activeTab) return false;
    const targetPath = isFrench ? service.pathFr : service.path;
    if (seenPaths.has(targetPath)) return false;
    seenPaths.add(targetPath);
    return true;
  });

  return (
    <div className="bg-bg-light min-h-screen pb-24">
      <SEO 
        title={isFrench ? "Nos Services d'Acquisition & Marketing Digital | Urunk" : "Our Acquisition & Digital Marketing Services | Urunk"}
        description={isFrench ? "Découvrez notre catalogue complet de services d'acquisition : création de sites web hôteliers, référencement SEO, Google Ads, et solutions sur mesure." : "Explore our comprehensive suite of growth and digital acquisition services: high-speed hotel web design, SEO, Google Ads, and custom hospitality solutions."}
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent-soft text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            {isFrench ? "Catalogue Complet" : "Comprehensive Suite"}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-6">
            {isFrench ? "Nos Services d'Acquisition" : "Acquisition Services"}
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            {isFrench 
              ? "Des solutions de marketing sur mesure et haut de gamme pour transformer votre établissement en un moteur de réservations directes." 
              : "Bespoke digital growth and marketing solutions designed to scale direct bookings and maximize revenue for your business."}
          </p>
        </div>
      </section>

      {/* Category Tabs Section */}
      <section className="py-12 border-b border-primary/5 sticky top-16 bg-bg-light/90 backdrop-blur-md z-40 shadow-[0_2px_15px_rgba(15,45,37,0.01)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex overflow-x-auto pb-3 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-none snap-x gap-3 justify-start md:justify-center items-center">
            {rawCategories.map((cat, idx) => {
              const isActive = activeTab === cat.en;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(cat.en)}
                  className={`snap-center px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive 
                      ? 'bg-primary text-white shadow-sm' 
                      : 'bg-bg-alt/30 text-primary hover:bg-bg-alt/80 border border-primary/5'
                  }`}
                >
                  {isFrench ? cat.fr : cat.en}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-24 text-primary/60">
              {isFrench ? "Aucun service trouvé." : "No services found."}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <Link 
                  key={index}
                  to={isFrench ? service.pathFr : service.path}
                  id={`service-card-${index}`}
                  className="group bg-white p-8 rounded-2xl border border-primary/10 hover:border-accent/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full premium-card"
                >
                  <div className="w-16 h-16 bg-bg-alt text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-accent mb-2 block">
                    {isFrench ? service.categoryFr : service.category}
                  </span>
                  <h2 className="text-xl font-serif font-bold text-primary mb-4">
                    {isFrench ? service.titleFr : service.title}
                  </h2>
                  <p className="text-primary/70 mb-8 flex-grow text-sm font-light leading-relaxed">
                    {isFrench ? service.descFr : service.desc}
                  </p>
                  <div className="mt-auto flex items-center text-accent font-semibold group-hover:translate-x-1.5 transition-all text-sm">
                    {isFrench ? 'Découvrir la solution' : 'Explore solution'} <ArrowRight size={16} className="ml-2" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trust Callout */}
      <section className="py-8 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-primary text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,110,85,0.15),transparent_50%)]"></div>
          <div className="relative z-10 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
              {isFrench ? "Besoin d'un audit de visibilité ?" : "Need a custom visibility audit?"}
            </h2>
            <p className="text-white/85 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
              {isFrench 
                ? "Nous analysons votre site web, votre positionnement local et vos campagnes existantes pour identifier vos plus grands leviers de croissance directe." 
                : "We will analyze your website, local positioning, and active ad accounts to locate your highest leverage opportunities for direct revenue."}
            </p>
            <div className="pt-4">
              <Link 
                to={isFrench ? "/contact" : "/en/contact"}
                className="btn-white bg-white hover:bg-bg-light text-primary px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm inline-flex items-center gap-2"
              >
                {isFrench ? "Demander mon audit gratuit" : "Request Free Audit"} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
