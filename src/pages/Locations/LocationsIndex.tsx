import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import RelatedExpertiseSection from '../../components/RelatedExpertiseSection';
import { getAllLiveMatrixLinks } from '../../data/matrixRelations';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Hairline from '../../components/ui/Hairline';

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
    highlightsFr: ["Visibilité Recherche Nationale", "Campagnes SEO Hôtelières", "Moteurs de Réservation Directe", "Sites Web Multilingues"]
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
    highlightsFr: ["Classement Google Maps & Pack Local", "Génération de Prospects B2B", "Développement Web Entreprise", "SEO Restaurants & Traiteurs"]
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
    highlightsFr: ["Spécialistes SEO Riads Médina", "Réduction des Commissions OTA", "Sites Web Hôteliers de Luxe", "Publicités TripAdvisor & Google"]
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
    highlightsFr: ["Autorité de Marque Institutionnelle", "Visibilité B2B & Acteurs Tech", "Optimisation Moteurs IA", "Campagnes Publicitaires Ciblées"]
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
    highlightsFr: ["SEO Hôtels Balnéaires", "Acquisition Surf Camps Taghazout", "Architecture Réservation Directe", "Ciblage Touristes Européens"]
  }
];

const sectorsList = [
  {
    title: "Hotels & Luxury Resorts",
    titleFr: "Hôtels & Resorts de Luxe",
    path: "/en/industries/hotels-resorts",
    pathFr: "/secteurs/hotels-resorts"
  },
  {
    title: "Riads & Boutique Stays",
    titleFr: "Riads & Maisons d'Hôtes",
    path: "/en/industries/riads-boutique-hotels",
    pathFr: "/secteurs/riads-maisons-hotes"
  },
  {
    title: "Tour Operators & Excursions",
    titleFr: "Tour-Opérateurs & Excursions",
    path: "/en/industries/tour-operators",
    pathFr: "/secteurs/tour-operateurs"
  },
  {
    title: "Restaurants & Catering",
    titleFr: "Restaurants & Traiteurs",
    path: "/en/industries/restaurants-catering",
    pathFr: "/secteurs/restaurants-traiteurs"
  },
  {
    title: "Corporate & SMEs",
    titleFr: "PME & Entreprises B2B",
    path: "/en/industries/corporate-smes",
    pathFr: "/secteurs/pme-entreprises"
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
    <div className="w-full bg-bg-light text-primary">
      <SEO
        title={pageTitle}
        description={pageDescription}
        schema={[breadcrumbSchema, itemListSchema]}
      />

      {/* Hero Header */}
      <Section tone="dark" className="pt-28 md:pt-36" id="locations-hero-section">
        <div className="max-w-4xl">
          <p className="text-sm font-medium text-bg-light/75 mb-4" id="locations-badge">
            {isFrench ? "Pôles Régionaux au Maroc" : "Regional Hubs across Morocco"}
          </p>

          <h1 className="font-serif text-bg-light mb-6 text-balance" id="locations-main-h1">
            {isFrench ? "Nos Zones d'Intervention au Maroc" : "Locations We Serve in Morocco"}
          </h1>

          <p className="text-lg md:text-xl text-bg-light/85 mb-10 leading-relaxed max-w-[62ch]" id="locations-main-sub">
            {isFrench
              ? "Urunk accompagne les hôtels, riads et entreprises à Casablanca, Marrakech, Rabat, Agadir et partout au Maroc avec le SEO local, l'optimisation Google Business Profile et la création de sites web performants."
              : "Urunk works with hotels, riads and businesses across Casablanca, Marrakech, Rabat, Agadir and all of Morocco, providing local SEO, Google Business Profile optimization and high-performance websites."}
          </p>

          <div className="flex flex-wrap items-center gap-4" id="locations-hero-ctas">
            <Button
              variant="dark"
              href={isFrench ? "/contact" : "/en/contact"}
              id="locations-cta-audit"
            >
              {isFrench ? "Demander un Audit Gratuit" : "Request a Free Audit"}
            </Button>
            <Link
              to={isFrench ? "/tarifs" : "/en/pricing"}
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm border border-bg-light/30 text-bg-light hover:bg-bg-light/10 font-medium text-[15px] no-underline transition-colors whitespace-nowrap shrink-0"
              id="locations-cta-pricing"
            >
              {isFrench ? "Consulter nos Tarifs" : "View Agency Pricing"}
            </Link>
          </div>
        </div>
      </Section>

      {/* Editorial Market Context */}
      <Section tone="alt" className="border-b border-border-subtle">
        <div className="max-w-[68ch] space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-primary text-balance">
              {isFrench
                ? "Stratégie de Référencement & Ancrage Régional au Maroc"
                : "Regional Search Strategy & Market Coverage in Morocco"}
            </h2>
            <p className="text-primary/85 leading-relaxed">
              {isFrench
                ? "Le paysage numérique de l'hôtellerie au Maroc exige des stratégies de référencement ciblées et adaptées aux spécificités de chaque région. Des riads de la Médina de Marrakech aux hôtels d'affaires de Casablanca, en passant par les institutions de Rabat et les complexes balnéaires d'Agadir, l'intention de recherche varie profondément. Urunk déploie un réseau national d'acquisition digitale combinant SEO local avancé, positionnement Google Maps et création web ultra-rapide (dès 12 000 MAD / ≈1 100 €). En captant l'intention de recherche régionale et en simplifiant le parcours de réservation directe, nous aidons les propriétaires à réduire leur dépendance aux commissions des OTA ([À CONFIRMER]) et à augmenter leurs réservations directes de +40 %. Que vous dirigiez un établissement de charme à Fès ou un surf camp à Taghazout, nos équipes régionales garantissent une exécution en 4 à 6 semaines, une gestion média transparente (4 000 MAD/mois) et une garantie de performance sous 90 jours."
                : "Morocco's digital hospitality landscape demands localized search strategies tailored to regional guest profiles and market behaviors. From the bustling Medina riads of Marrakech to the corporate hotel hubs of Casablanca, the institutional centers of Rabat, and the beach resorts of Agadir, travel intent varies significantly across destinations. Urunk provides a nationwide digital growth framework that combines hyper-local Search Engine Optimization (SEO), Google Maps 3-Pack optimization, and high-speed web engineering (starting at 12,000 MAD / ≈€1,100). By capturing regional search intent and eliminating friction in the direct booking funnel, we empower property owners across Morocco to reduce reliance on OTAs (which charge [À CONFIRMER] commissions) and increase direct booking revenues by up to +40%. Whether you operate a luxury boutique stay in Fes or a seaside resort in Taghazout, our regional hubs deliver 4-to-6 week execution timelines, transparent ad management (4,000 MAD/mo / ≈€370), and risk-free 90-day growth guarantees."}
            </p>
          </div>

          <Hairline />

          <div className="space-y-3">
            <h3 className="font-serif text-primary">
              {isFrench
                ? "L'importance d'un partenaire digital marocain de proximité"
                : "The Advantage of a Native Moroccan Digital Partner"}
            </h3>
            <p className="text-primary/80 leading-relaxed text-[15px]">
              {isFrench
                ? "Pourquoi un partenaire digital ancré au Maroc est-il indispensable ? Naviguer dans les spécificités du marché marocain demande plus qu'une simple expertise technique. Les algorithmes de recherche géolocalisée et les comportements d'achat des voyageurs internationaux (notamment européens et américains) nécessitent une approche de contenu multilingue native et une connaissance fine de la saisonnalité touristique locale. En tant qu'agence ayant des attaches physiques à Marrakech et Casablanca, Urunk maîtrise les nuances de la Darija pour les campagnes locales et l'anglais/français commercial pour attirer une clientèle internationale à haute contribution. Cette double vision nous permet d'élaborer des micro-campagnes et des structures de données enrichies (schémas d'établissements locaux) qui se positionnent naturellement en tête de Google."
                : "Why a localized Moroccan digital partner is essential: Navigating the complexities of the Moroccan market requires more than standard digital marketing knowledge. Successfully targeting high-spending international travelers from Europe and North America demands fluent multilingual search strategy and a deep comprehension of Moroccan tourism seasonality and regional buying patterns. Operating physical hubs in Marrakech and Casablanca allows Urunk to bridge local operational nuances with world-class acquisition engineering. We align your local Google Business Profiles with advanced structured data schemas, tailored TripAdvisor ad bidding strategies, and rapid-loading Jamstack designs to capture hyper-local search intents that traditional remote agencies miss completely."}
            </p>
          </div>
        </div>
      </Section>

      {/* Regional Hubs Editorial List */}
      <Section tone="light" id="locations-hubs-grid-section">
        <div className="max-w-[68ch] mb-14">
          <p className="text-accent text-sm font-medium mb-2">
            {isFrench ? "Maillage Territorial" : "Territorial Network"}
          </p>
          <h2 className="font-serif text-primary mb-4 text-balance">
            {isFrench
              ? "Hubs Régionaux & Centres Économiques"
              : "Regional Hubs & Economic Centers"}
          </h2>
          <p className="text-primary/75 leading-relaxed">
            {isFrench
              ? "Chaque destination présente une dynamique concurrentielle unique. Découvrez nos stratégies dédiées à chaque pôle."
              : "Each market has unique search dynamics and buyer behaviors. Explore our dedicated strategies for each hub."}
          </p>
        </div>

        <Hairline />
        {locationsList.map((loc, idx) => {
          const targetPath = isFrench ? loc.pathFr : loc.path;
          const cityName = isFrench ? loc.cityFr : loc.city;
          const tagLabel = isFrench ? loc.tagFr : loc.tag;
          const description = isFrench ? loc.descFr : loc.desc;
          const highlights = isFrench ? loc.highlightsFr : loc.highlights;

          return (
            <div key={targetPath} id={`hub-card-${idx}`}>
              <div className="py-10 grid md:grid-cols-12 gap-6 md:gap-8 items-start">
                <div className="md:col-span-4">
                  <p className="text-xs font-medium text-accent mb-2">
                    <span className="tabular-nums text-primary/50 mr-2">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {tagLabel}
                  </p>
                  <h3 className="font-serif text-[26px] leading-snug text-primary">
                    <Link to={targetPath}>{cityName}</Link>
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="text-primary/80 leading-relaxed max-w-[60ch]">
                    {description}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <ul className="space-y-1.5 text-sm text-primary/75">
                    {highlights.map((item, hIdx) => (
                      <li key={hIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Hairline />
            </div>
          );
        })}
      </Section>

      {/* Sectors Served Across Morocco */}
      <Section tone="alt" className="border-y border-border-subtle" id="locations-sectors-section">
        <div className="max-w-[68ch] mb-12">
          <p className="text-accent text-sm font-medium mb-2">
            {isFrench ? "Secteurs d'Expertise" : "Industries We Serve"}
          </p>
          <h2 className="font-serif text-primary mb-4 text-balance">
            {isFrench
              ? "Des Solutions Adaptées à Votre Industrie"
              : "Specialized Growth by Industry"}
          </h2>
          <p className="text-primary/75 leading-relaxed">
            {isFrench
              ? "Nos méthodologies d'acquisition sont calibrées pour les acteurs de l'hôtellerie, du tourisme et des services au Maroc."
              : "Our acquisition frameworks are finely calibrated for hospitality, tourism, and modern service enterprises."}
          </p>
        </div>

        <Hairline />
        {sectorsList.map((sec, sIdx) => {
          const targetPath = isFrench ? sec.pathFr : sec.path;
          const label = isFrench ? sec.titleFr : sec.title;
          return (
            <div key={targetPath} id={`sector-link-${sIdx}`}>
              <div className="py-5 flex items-baseline gap-4">
                <span className="tabular-nums text-xs text-primary/50">
                  {String(sIdx + 1).padStart(2, '0')}
                </span>
                <Link to={targetPath} className="font-serif text-xl">
                  {label}
                </Link>
              </div>
              <Hairline />
            </div>
          );
        })}
      </Section>

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

      {/* Audit Callout */}
      <Section tone="dark" id="locations-audit-banner">
        <div className="max-w-2xl">
          <h2 className="font-serif text-bg-light mb-4 text-balance">
            {isFrench
              ? "Développez Votre Visibilité Locale au Maroc"
              : "Scale Your Local Search Visibility in Morocco"}
          </h2>
          <p className="text-bg-light/85 text-lg mb-8 leading-relaxed">
            {isFrench
              ? "Que vous gériez un riad à Marrakech, un resort à Agadir ou une entreprise à Casablanca, nous concevons votre stratégie d'acquisition sur mesure."
              : "Whether you operate a luxury riad in Marrakech, a beach resort in Agadir, or a B2B firm in Casablanca, we craft your bespoke growth engine."}
          </p>
          <Button
            variant="dark"
            href={isFrench ? "/contact" : "/en/contact"}
            id="banner-contact-btn"
          >
            {isFrench ? "Obtenir un Audit Gratuit" : "Get a Free Visibility Audit"}
          </Button>
        </div>
      </Section>
    </div>
  );
}
