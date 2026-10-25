import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  MapPin, 
  Globe, 
  Building2, 
  Sparkles, 
  Compass, 
  ArrowRight, 
  CheckCircle, 
  Award,
  Layers,
  Utensils,
  ShoppingBag,
  Briefcase,
  ExternalLink
} from 'lucide-react';
import SEO from '../../components/SEO';
import Callout from '../../components/Callout';
import RelatedExpertiseSection from '../../components/RelatedExpertiseSection';
import { getAllLiveMatrixLinks } from '../../data/matrixRelations';

interface LocationCard {
  city: string;
  cityFr: string;
  tag: string;
  tagFr: string;
  path: string;
  pathFr: string;
  desc: string;
  descFr: string;
  highlights: string[];
  highlightsFr: string[];
  icon: React.ReactNode;
}

const locationsList: LocationCard[] = [
  {
    city: "Morocco (National Hub)",
    cityFr: "Maroc (Hub National)",
    tag: "Kingdom-Wide Coverage",
    tagFr: "Couverture Nationale",
    path: "/en/locations/morocco",
    pathFr: "/zones/maroc",
    desc: "Nationwide digital growth agency footprint across the Kingdom of Morocco. Hospitality SEO, Google Ads, and high-performance websites for leading brands.",
    descFr: "Présence globale sur l'ensemble du territoire marocain. Stratégies d'acquisition hôtelière et référencement naturel à fort impact pour marques nationales.",
    highlights: ["National Search Visibility", "Hospitality SEO Campaigns", "Direct Booking Engines", "Multi-Language Web Design"],
    highlightsFr: ["Visibilité Recherche Nationale", "Campagnes SEO Hôtelières", "Moteurs de Réservation Directe", "Sites Web Multilingues"],
    icon: <Globe size={28} />
  },
  {
    city: "Casablanca Hub",
    cityFr: "Hub Casablanca",
    tag: "Commercial & B2B Capital",
    tagFr: "Capitale Économique & B2B",
    path: "/en/locations/casablanca",
    pathFr: "/zones/casablanca",
    desc: "Commercial capital of Morocco. B2B SEO, local search optimization, corporate website development, and restaurant growth marketing.",
    descFr: "Capitale économique du Royaume. Référencement local B2B, création de portails d'entreprises, Google Business Profile et marketing pour restaurateurs.",
    highlights: ["Local Maps & 3-Pack Ranking", "B2B Lead Generation", "Enterprise Web Development", "Restaurant & Catering SEO"],
    highlightsFr: ["Classement Google Maps & Pack Local", "Génération de Prospects B2B", "Développement Web Entreprise", "SEO Restaurants & Traiteurs"],
    icon: <Building2 size={28} />
  },
  {
    city: "Marrakech Hub",
    cityFr: "Hub Marrakech",
    tag: "Hospitality & Tourism Heart",
    tagFr: "Coeur Hôtelier & Tourisme",
    path: "/en/locations/marrakech",
    pathFr: "/zones/marrakech",
    desc: "Morocco's premier tourism destination. Boutique Riad SEO in the Medina, luxury hotel web design, Google Maps ranking, and direct booking engines.",
    descFr: "Capitale touristique et hôtelière. Référencement de riads en Médina, création de sites web immersifs, visibilité Google Maps et gestion de réputation.",
    highlights: ["Medina Riad SEO Specialists", "OTA Commission Reduction", "Luxury Hospitality Websites", "TripAdvisor & Google Ads"],
    highlightsFr: ["Spécialistes SEO Riads Médina", "Réduction des Commissions OTA", "Sites Web Hôteliers de Luxe", "Publicités TripAdvisor & Google"],
    icon: <Sparkles size={28} />
  },
  {
    city: "Rabat Hub",
    cityFr: "Hub Rabat",
    tag: "Capital & Institutional Center",
    tagFr: "Capitale Institutionnelle",
    path: "/en/locations/rabat",
    pathFr: "/zones/rabat",
    desc: "Capital city and institutional innovation center. Authority SEO, corporate websites, SME visibility, and targeted search campaigns.",
    descFr: "Capitale institutionnelle et centre d'innovation. SEO d'autorité, sites web pour PME & institutions, communication touristique et campagnes Search.",
    highlights: ["Institutional Brand Authority", "B2B & Tech Visibility", "AI Search Engine Optimization", "Targeted Search Advertising"],
    highlightsFr: ["Autorité de Marque Institutionnelle", "Visibilité B2B & Acteurs Tech", "Optimisation Moteurs IA", "Campagnes Publicitaires Ciblées"],
    icon: <Building2 size={28} />
  },
  {
    city: "Agadir Hub",
    cityFr: "Hub Agadir",
    tag: "Coastal Resorts & Surfing",
    tagFr: "Resorts Balnéaires & Surf",
    path: "/en/locations/agadir",
    pathFr: "/zones/agadir",
    desc: "Coastal resort and surf hub. Beachfront hotel marketing, Taghazout surf camp SEO, direct booking acquisition, and international tourism ads.",
    descFr: "Pôle balnéaire et écotouristique. Marketing pour resorts côtiers, SEO pour surf camps de Taghazout, campagnes Meta et réservation directe.",
    highlights: ["Beach Resort SEO", "Taghazout Surf Camp Leads", "Direct Booking Architecture", "European Tourist Targeting"],
    highlightsFr: ["SEO Hôtels Balnéaires", "Acquisition Surf Camps Taghazout", "Architecture Réservation Directe", "Ciblage Touristes Européens"],
    icon: <Compass size={28} />
  }
];

const sectorsList = [
  {
    title: "Hotels & Luxury Resorts",
    titleFr: "Hôtels & Resorts de Luxe",
    path: "/en/industries/hotels-resorts",
    pathFr: "/secteurs/hotels-resorts",
    icon: <Building2 size={20} />
  },
  {
    title: "Riads & Boutique Stays",
    titleFr: "Riads & Maisons d'Hôtes",
    path: "/en/industries/riads-boutique-hotels",
    pathFr: "/secteurs/riads-maisons-hotes",
    icon: <Sparkles size={20} />
  },
  {
    title: "Tour Operators & Excursions",
    titleFr: "Tour-Opérateurs & Excursions",
    path: "/en/industries/tour-operators",
    pathFr: "/secteurs/tour-operateurs",
    icon: <Compass size={20} />
  },
  {
    title: "Restaurants & Catering",
    titleFr: "Restaurants & Traiteurs",
    path: "/en/industries/restaurants-catering",
    pathFr: "/secteurs/restaurants-traiteurs",
    icon: <Utensils size={20} />
  },
  {
    title: "Corporate & SMEs",
    titleFr: "PME & Entreprises B2B",
    path: "/en/industries/corporate-smes",
    pathFr: "/secteurs/pme-entreprises",
    icon: <Briefcase size={20} />
  }
];

export default function LocationsIndex() {
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');
  const allExpertiseLinks = getAllLiveMatrixLinks(isFrench ? 'fr' : 'en');

  const pageTitle = isFrench 
    ? "Zones d'Intervention — SEO & Web au Maroc | Urunk" 
    : "Locations We Serve — SEO & Web in Morocco | Urunk";

  const pageDescription = isFrench
    ? "Découvrez nos zones d'intervention au Maroc : Casablanca, Marrakech, Rabat, Agadir. SEO local, Google Business Profile et création de sites web performants."
    : "Explore the locations we serve across Morocco: Casablanca, Marrakech, Rabat, Agadir. Local SEO, Google Business Profile optimization & high-speed websites.";

  const breadcrumbItems = [
    { label: isFrench ? "Accueil" : "Home", path: isFrench ? "/" : "/en" },
    { label: isFrench ? "Zones" : "Locations", path: isFrench ? "/zones" : "/en/locations" }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://urunk.com${item.path}`
    }))
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": isFrench ? "Zones d'Intervention Urunk au Maroc" : "Locations We Serve in Morocco",
    "description": pageDescription,
    "itemListElement": locationsList.map((loc, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": isFrench ? loc.cityFr : loc.city,
      "url": `https://urunk.com${isFrench ? loc.pathFr : loc.path}`
    }))
  };

  return (
    <div className="w-full bg-bg text-primary pb-24">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        schema={[breadcrumbSchema, itemListSchema]}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden" id="locations-hero-section">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-6 border border-white/10" id="locations-badge">
            <MapPin size={14} /> {isFrench ? "Pôles Régionaux au Maroc" : "Regional Hubs across Morocco"}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.1] mb-6" id="locations-main-h1">
            {isFrench ? "Nos Zones d'Intervention au Maroc" : "Locations We Serve in Morocco"}
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light max-w-3xl mx-auto" id="locations-main-sub">
            {isFrench 
              ? "Urunk accompagne les hôtels, riads et entreprises à Casablanca, Marrakech, Rabat, Agadir et partout au Maroc avec le SEO local, l'optimisation Google Business Profile et la création de sites web performants."
              : "Urunk works with hotels, riads and businesses across Casablanca, Marrakech, Rabat, Agadir and all of Morocco, providing local SEO, Google Business Profile optimization and high-performance websites."}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center" id="locations-hero-ctas">
            <Link 
              to={isFrench ? "/contact" : "/en/contact"} 
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
              id="locations-cta-audit"
            >
              <span>{isFrench ? "Demander un Audit Gratuit" : "Request a Free Audit"}</span>
              <ArrowRight size={18} />
            </Link>
            <Link 
              to={isFrench ? "/tarifs" : "/en/pricing"} 
              className="border border-white/20 hover:border-accent text-white px-8 py-4 rounded-xl font-medium transition-all inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm"
              id="locations-cta-pricing"
            >
              <span>{isFrench ? "Consulter nos Tarifs" : "View Agency Pricing"}</span>
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Market Context (150 words expansion) */}
      <section className="py-12 bg-white px-6 border-b border-primary/10">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10 space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-serif font-bold text-primary">
                {isFrench ? "Stratégie de Référencement & Ancrage Régional au Maroc" : "Regional Search Strategy & Market Coverage in Morocco"}
              </h2>
              <p className="text-primary/80 font-light text-sm leading-relaxed">
                {isFrench 
                  ? "Le paysage numérique de l'hôtellerie au Maroc exige des stratégies de référencement ciblées et adaptées aux spécificités de chaque région. Des riads de la Médina de Marrakech aux hôtels d'affaires de Casablanca, en passant par les institutions de Rabat et les complexes balnéaires d'Agadir, l'intention de recherche varie profondément. Urunk déploie un réseau national d'acquisition digitale combinant SEO local avancé, positionnement Google Maps et création web ultra-rapide (dès 12 000 MAD / ≈1 100 €). En captant l'intention de recherche régionale et en simplifiant le parcours de réservation directe, nous aidons les propriétaires à réduire leur dépendance aux commissions des OTA (15 % à 25 %) et à augmenter leurs réservations directes de +40 %. Que vous dirigiez un établissement de charme à Fès ou un surf camp à Taghazout, nos équipes régionales garantissent une exécution en 4 à 6 semaines, une gestion média transparente (4 000 MAD/mois) et une garantie de performance sous 90 jours."
                  : "Morocco's digital hospitality landscape demands localized search strategies tailored to regional guest profiles and market behaviors. From the bustling Medina riads of Marrakech to the corporate hotel hubs of Casablanca, the institutional centers of Rabat, and the beach resorts of Agadir, travel intent varies significantly across destinations. Urunk provides a nationwide digital growth framework that combines hyper-local Search Engine Optimization (SEO), Google Maps 3-Pack optimization, and high-speed web engineering (starting at 12,000 MAD / ≈€1,100). By capturing regional search intent and eliminating friction in the direct booking funnel, we empower property owners across Morocco to reduce reliance on OTAs (which charge 15% to 25% commissions) and increase direct booking revenues by up to +40%. Whether you operate a luxury boutique stay in Fes or a seaside resort in Taghazout, our regional hubs deliver 4-to-6 week execution timelines, transparent ad management (4,000 MAD/mo / ≈€370), and risk-free 90-day growth guarantees."}
              </p>
            </div>
            
            <div className="pt-4 border-t border-primary/10 space-y-2">
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider">
                {isFrench ? "L'importance d'un partenaire digital marocain de proximité" : "The Advantage of a Native Moroccan Digital Partner"}
              </h3>
              <p className="text-primary/75 font-light text-xs leading-relaxed">
                {isFrench 
                  ? "Pourquoi un partenaire digital ancré au Maroc est-il indispensable ? Naviguer dans les spécificités du marché marocain demande plus qu'une simple expertise technique. Les algorithmes de recherche géolocalisée et les comportements d'achat des voyageurs internationaux (notamment européens et américains) nécessitent une approche de contenu multilingue native et une connaissance fine de la saisonnalité touristique locale. En tant qu'agence ayant des attaches physiques à Marrakech et Casablanca, Urunk maîtrise les nuances de la Darija pour les campagnes locales et l'anglais/français commercial pour attirer une clientèle internationale à haute contribution. Cette double vision nous permet d'élaborer des micro-campagnes et des structures de données enrichies (schémas d'établissements locaux) qui se positionnent naturellement en tête de Google."
                  : "Why a localized Moroccan digital partner is essential: Navigating the complexities of the Moroccan market requires more than standard digital marketing knowledge. Successfully targeting high-spending international travelers from Europe and North America demands fluent multilingual search strategy and a deep comprehension of Moroccan tourism seasonality and regional buying patterns. Operating physical hubs in Marrakech and Casablanca allows Urunk to bridge local operational nuances with world-class acquisition engineering. We align your local Google Business Profiles with advanced structured data schemas, tailored TripAdvisor ad bidding strategies, and rapid-loading Jamstack designs to capture hyper-local search intents that traditional remote agencies miss completely."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Hubs Grid */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto w-full" id="locations-hubs-grid-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-3 border border-accent/15">
            <Globe size={14} /> {isFrench ? "Maillage Territorial" : "Territorial Network"}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            {isFrench ? "Hubs Régionaux & Centres Économiques" : "Regional Hubs & Economic Centers"}
          </h2>
          <p className="text-primary/70 text-base md:text-lg font-light leading-relaxed">
            {isFrench 
              ? "Chaque destination présente une dynamique concurrentielle unique. Découvrez nos stratégies dédiées à chaque pôle."
              : "Each market has unique search dynamics and buyer behaviors. Explore our dedicated strategies for each hub."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locationsList.map((loc, idx) => (
            <Link 
              key={idx}
              to={isFrench ? loc.pathFr : loc.path}
              className="group bg-white p-8 rounded-2xl border border-primary/10 hover:border-accent/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              id={`hub-card-${idx}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {loc.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-bg-alt text-primary/80 uppercase tracking-wider">
                    {isFrench ? loc.tagFr : loc.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors mb-3">
                  {isFrench ? loc.cityFr : loc.city}
                </h3>

                <p className="text-sm text-primary/70 font-light leading-relaxed mb-6">
                  {isFrench ? loc.descFr : loc.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-primary/5">
                  {(isFrench ? loc.highlightsFr : loc.highlights).map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-primary/85 font-medium">
                      <CheckCircle size={14} className="text-accent shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-primary/5 flex items-center justify-between text-accent font-semibold text-sm">
                <span>{isFrench ? "Explorer ce Hub" : "Explore Hub Strategy"}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sectors Served Across Morocco */}
      <section className="bg-bg-alt py-16 md:py-24 px-6 border-y border-primary/10" id="locations-sectors-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-3 border border-accent/15">
              <Award size={14} /> {isFrench ? "Secteurs d'Expertise" : "Industries We Serve"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              {isFrench ? "Des Solutions Adaptées à Votre Industrie" : "Specialized Growth by Industry"}
            </h2>
            <p className="text-primary/70 text-sm md:text-base font-light leading-relaxed">
              {isFrench 
                ? "Nos méthodologies d'acquisition sont calibrées pour les acteurs de l'hôtellerie, du tourisme et des services au Maroc."
                : "Our acquisition frameworks are finely calibrated for hospitality, tourism, and modern service enterprises."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectorsList.map((sec, sIdx) => (
              <Link 
                key={sIdx}
                to={isFrench ? sec.pathFr : sec.path}
                className="bg-white p-6 rounded-xl border border-primary/10 hover:border-accent hover:shadow-md transition-all group flex items-center justify-between"
                id={`sector-link-${sIdx}`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    {sec.icon}
                  </div>
                  <span className="font-serif font-bold text-base text-primary group-hover:text-accent transition-colors">
                    {isFrench ? sec.titleFr : sec.title}
                  </span>
                </div>
                <ArrowRight size={16} className="text-primary/30 group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedExpertiseSection
        kicker={isFrench ? "Expertises Spécialisées par Ville" : "City-Specific Expertise Directory"}
        title={
          isFrench
            ? "Nos Interventions Ciblées à Marrakech, Casablanca, Agadir & Rabat"
            : "Targeted Growth Playbooks Across Marrakech, Casablanca, Agadir & Rabat"
        }
        subtitle={
          isFrench
            ? "Consultez nos pages d'expertise dédiées croisant chaque métier (SEO hôtelier, création web, réservation directe, Google Ads, Meta Ads, TripAdvisor) avec les réalités locales de votre ville."
            : "Browse dedicated local-intent pages pairing specialized acquisition services (Hotel SEO, Web Design, Direct Booking, Google Ads, Meta & TripAdvisor Ads) with city-level market data."
        }
        links={allExpertiseLinks}
        isFrench={isFrench}
        bgVariant="white"
      />

      {/* Trust & Methodology Callout */}
      <section className="py-16 px-6 max-w-5xl mx-auto" id="locations-audit-banner">
        <div className="bg-primary text-white p-8 md:p-12 rounded-3xl relative overflow-hidden text-center space-y-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,110,85,0.15),transparent_50%)]"></div>
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
              {isFrench 
                ? "Développez Votre Visibilité Locale au Maroc" 
                : "Scale Your Local Search Visibility in Morocco"}
            </h2>
            <p className="text-white/85 text-sm md:text-base font-light leading-relaxed">
              {isFrench 
                ? "Que vous gériez un riad à Marrakech, un resort à Agadir ou une entreprise à Casablanca, nous concevons votre stratégie d'acquisition sur mesure."
                : "Whether you operate a luxury riad in Marrakech, a beach resort in Agadir, or a B2B firm in Casablanca, we craft your bespoke growth engine."}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to={isFrench ? "/contact" : "/en/contact"}
                className="bg-white hover:bg-bg-light text-primary px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm inline-flex items-center justify-center gap-2"
                id="banner-contact-btn"
              >
                <span>{isFrench ? "Obtenir un Audit Gratuit" : "Get a Free Visibility Audit"}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
