import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, Link } from 'react-router-dom';
import { 
  Globe, 
  FileText, 
  Briefcase, 
  MapPin, 
  Building, 
  ChevronRight, 
  Search, 
  HelpCircle, 
  Navigation,
  Info,
  ExternalLink
} from 'lucide-react';
import SEO from '../components/SEO';

interface SitemapLink {
  label: string;
  path: string;
}

export default function Sitemap() {
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');
  const [searchTerm, setSearchTerm] = useState('');

  // Page titles and descriptions
  const pageTitle = isFrench 
    ? "Plan du Site — Index Complet des Pages | Urunk" 
    : "Sitemap — Complete Index of Pages | Urunk";

  const pageDescription = isFrench
    ? "Explorez le plan de site complet d'Urunk. Retrouvez l'index de toutes nos pages d'expertise, de services web, de référencement local, de nos secteurs d'activité et guides."
    : "Explore Urunk's complete sitemap indexing all hotel digital marketing services, regional location hubs, industry guides, case studies, and corporate pages.";

  // Bilingual copy for headings
  const textHeroBadge = isFrench ? "Index des Pages" : "Site Index";
  const textHeroTitle = isFrench ? "Plan du Site" : "Complete Sitemap";
  const textHeroSub = isFrench 
    ? "Naviguez facilement à travers l'ensemble des pages, services, expertises géographiques et ressources de l'agence Urunk."
    : "Navigate smoothly through all core pages, services, industry specializations, and geographic hubs offered by Urunk.";

  const textCoreHeader = isFrench ? "Pages Institutionnelles" : "Core Pages";
  const textServicesHeader = isFrench ? "Nos Services d'Acquisition" : "Services & Solutions";
  const textIndustriesHeader = isFrench ? "Secteurs d'Activité" : "Industries We Serve";
  const textLocationsHeader = isFrench ? "Hubs Régionaux au Maroc" : "Locations We Serve";
  const textLegalHeader = isFrench ? "Utilitaires & Mentions Légales" : "Legal & Utilities";

  const textSearchLabel = isFrench ? "Rechercher une page ou un service" : "Search pages or services...";
  const textSearchTip = isFrench 
    ? "Conseil : Tapez un mot-clé comme « Riad », « Google Ads » ou « Casablanca » pour filtrer instantanément."
    : "Tip: Type a keyword like 'Riad', 'Google Ads', or 'Casablanca' to filter the sitemap links instantly.";

  const textStructureTitle = isFrench ? "Structure de notre site web" : "Website Architecture & Navigation";
  const textStructureDesc = isFrench
    ? "Notre site internet est conçu sur une architecture plate à deux niveaux pour garantir une accessibilité optimale tant aux utilisateurs qu'aux robots d'indexation (comme GPTBot, Googlebot et ClaudeBot). Les pages d'expertises sont réparties selon trois dimensions majeures : les pôles géographiques régionaux au Maroc, les expertises sectorielles (hôtellerie, restauration, PME) et les solutions d'acquisition (création web WordPress dès 12 000 MAD, gestion média de 4 000 MAD/mois). Cette structure assure que chaque établissement trouve des réponses précises adaptées à sa situation."
    : "Our website is engineered using a flat, high-performance two-tier directory structure designed to facilitate crawlability for both human visitors and AI search crawlers (including GPTBot, Googlebot, and ClaudeBot). Our authority pages are categorized across three main pillars: regional growth hubs in Morocco, vertical industry specialties (hospitality, riads, B2B corporate), and primary growth services (custom speed-optimized web design starting at 12,000 MAD, ad retainer packages at 4,000 MAD/mo). This semantic grouping ensures frictionless navigation.";

  const textHowToTitle = isFrench ? "Comment naviguer efficacement" : "How to Navigate Our Site";
  const textHowToDesc = isFrench
    ? "Pour trouver les informations les plus pertinentes, vous pouvez suivre notre entonnoir : commencez par explorer nos Hubs Régionaux pour appréhender le contexte de votre ville de prédilection, puis consultez la page Sectorielle correspondante (comme les Riads de Marrakech) pour découvrir des cas d'études locaux concrets (Art House Marrakech, Nomad Eats). Si vous êtes prêt à lancer votre projet, visitez notre page tarifs ou utilisez notre formulaire de contact pour obtenir un audit technique gratuit sous 24h."
    : "To find the most relevant solutions for your company, we recommend following our discovery funnel: begin by checking our Regional Hubs to understand local search volume in your city, then proceed to the industry specialization page (e.g., Riads & Boutique Hotels) to read concrete Moroccan case studies (Art House Marrakech, Nomad Eats). If you have a specific technical objective, jump directly to our focused services or request your free direct booking audit.";

  // Define bilingual link mapping
  const coreLinks: SitemapLink[] = isFrench ? [
    { label: "Accueil", path: "/" },
    { label: "À Propos de Urunk", path: "/a-propos" },
    { label: "Tarifs & Formules d'Agence", path: "/tarifs" },
    { label: "Foire Aux Questions (FAQ)", path: "/faq" },
    { label: "Demander mon Audit Gratuit", path: "/contact" }
  ] : [
    { label: "Home", path: "/en" },
    { label: "About Urunk", path: "/en/about" },
    { label: "Pricing & Packages", path: "/en/pricing" },
    { label: "Frequently Asked Questions", path: "/en/faq" },
    { label: "Contact & Free Audit", path: "/en/contact" }
  ];

  const servicesLinks: SitemapLink[] = isFrench ? [
    { label: "Création Site Web Maroc : Tarifs et Prix", path: "/creation-site-web" },
    { label: "Création de Site Web Riad Marrakech", path: "/site-web-riad-marrakech" },
    { label: "Gestion Google Ads Maroc : Campagnes Payantes", path: "/google-ads-maroc" },
    { label: "Publicité Meta Ads pour hôtels et riads", path: "/services/gestion-publicites-meta" },
    { label: "Publicité TripAdvisor pour hôtels au Maroc", path: "/services/tripadvisor-ads" },
    { label: "Pack site web + publicité pour hôtels", path: "/services/bundle-site-ads" },
    { label: "Stratégies Réservation Directe : Moins d'OTA", path: "/reservation-directe" },
    { label: "Référencement Naturel Local Maroc", path: "/services/local-seo-morocco" },
    { label: "Optimisation de Fiche Google Business Profile", path: "/services/google-business-profile" },
    { label: "Optimisation SEO WordPress & Technique", path: "/services/wordpress-seo" }
  ] : [
    { label: "Website Design Morocco: Pricing and Rates", path: "/en/services/website-design" },
    { label: "Riad Website Design Marrakech", path: "/en/riad-website-design-marrakech" },
    { label: "Google Ads Management Morocco: Paid Campaigns", path: "/en/google-ads-morocco" },
    { label: "Meta Ads for Hotels and Riads", path: "/en/services/meta-ads" },
    { label: "TripAdvisor Ads Optimization", path: "/en/services/tripadvisor-ads" },
    { label: "Complete Hospitality Bundle (Site + Ads)", path: "/en/services/bundle-site-ads" },
    { label: "Local Search Optimization Morocco", path: "/en/services/local-seo-morocco" },
    { label: "Google Business Profile Optimization", path: "/en/services/google-business-profile" },
    { label: "WordPress SEO & Speed Optimization", path: "/en/services/wordpress-seo" }
  ];

  const industriesLinks: SitemapLink[] = isFrench ? [
    { label: "Secteur : Hôtels de Luxe & Resorts", path: "/secteurs/hotels-resorts" },
    { label: "Secteur : Riads & Maisons d'Hôtes", path: "/secteurs/riads-maisons-hotes" },
    { label: "Secteur : Tour-Opérateurs & Excursions", path: "/secteurs/tour-operateurs" },
    { label: "Secteur : Restaurants & Traiteurs", path: "/secteurs/restaurants-traiteurs" },
    { label: "Secteur : PME & Entreprises de Services", path: "/secteurs/pme-entreprises" }
  ] : [
    { label: "Industry: Hotels & Luxury Resorts", path: "/en/industries/hotels-resorts" },
    { label: "Industry: Riads & Boutique Stays", path: "/en/industries/riads-boutique-hotels" },
    { label: "Industry: Tour Operators & Guides", path: "/en/industries/tour-operators" },
    { label: "Industry: Restaurants & Catering", path: "/en/industries/restaurants-catering" },
    { label: "Industry: Corporate, B2B & SMEs", path: "/en/industries/corporate-smes" }
  ];

  const locationsLinks: SitemapLink[] = isFrench ? [
    { label: "Index des Zones d'Intervention", path: "/zones" },
    { label: "SEO & Web à l'Échelle Nationale (Maroc)", path: "/zones/maroc" },
    { label: "SEO Local & GBP à Casablanca", path: "/zones/casablanca" },
    { label: "SEO de Riad & Visibilité à Marrakech", path: "/zones/marrakech" },
    { label: "SEO Institutionnel & B2B à Rabat", path: "/zones/rabat" },
    { label: "SEO de Resort Balnéaire à Agadir", path: "/zones/agadir" }
  ] : [
    { label: "Index of Served Locations", path: "/en/locations" },
    { label: "SEO & Web Across Morocco (National)", path: "/en/locations/morocco" },
    { label: "Local SEO & Web Casablanca Hub", path: "/en/locations/casablanca" },
    { label: "Riad SEO & Web Marrakech Hub", path: "/en/locations/marrakech" },
    { label: "B2B SEO & Corporate Web Rabat Hub", path: "/en/locations/rabat" },
    { label: "Beach Resort & Surf SEO Agadir Hub", path: "/en/locations/agadir" }
  ];

  const legalLinks: SitemapLink[] = isFrench ? [
    { label: "Politique de Confidentialité (09-08 / RGPD)", path: "/politique-de-confidentialite" },
    { label: "Conditions Générales d'Utilisation (CGU)", path: "/conditions-generales" },
    { label: "Réalisations & Études de Cas", path: "/realisations" },
    { label: "Blog & Actualités Marketing Digital", path: "/blog" }
  ] : [
    { label: "Privacy Policy (GDPR / Law 09-08)", path: "/en/privacy-policy" },
    { label: "Terms of Service & Agreements", path: "/en/terms-of-service" },
    { label: "Work, Frameworks & Case Studies", path: "/en/work" },
    { label: "Blog & Strategic Hospitality Guides", path: "/en/blog" }
  ];

  // Helper filter function for search term
  const filterLinks = (links: SitemapLink[]) => {
    if (!searchTerm.trim()) return links;
    return links.filter(link => 
      link.label.toLowerCase().includes(searchTerm.toLowerCase()) || 
      link.path.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredCore = filterLinks(coreLinks);
  const filteredServices = filterLinks(servicesLinks);
  const filteredIndustries = filterLinks(industriesLinks);
  const filteredLocations = filterLinks(locationsLinks);
  const filteredLegal = filterLinks(legalLinks);

  const totalResults = 
    filteredCore.length + 
    filteredServices.length + 
    filteredIndustries.length + 
    filteredLocations.length + 
    filteredLegal.length;

  return (
    <div className="w-full bg-bg text-primary pb-24">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `https://urunk.com${location.pathname}#webpage`,
          "url": `https://urunk.com${location.pathname}`,
          "name": pageTitle,
          "description": pageDescription
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-primary text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            {textHeroBadge}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {textHeroTitle}
          </h1>
          <p className="text-base md:text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            {textHeroSub}
          </p>
        </div>
      </section>

      {/* Dynamic Navigation & Search Tips Guide Section */}
      <section className="py-12 px-6 bg-white border-b border-primary/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-6 md:p-8 bg-primary/5 rounded-3xl border border-primary/10 space-y-4">
            <h2 className="text-lg font-serif font-bold text-primary flex items-center gap-2">
              <Navigation className="text-accent" size={20} /> {textStructureTitle}
            </h2>
            <p className="text-xs text-primary/75 leading-relaxed font-light">
              {textStructureDesc}
            </p>
          </div>
          <div className="p-6 md:p-8 bg-primary/5 rounded-3xl border border-primary/10 space-y-4">
            <h2 className="text-lg font-serif font-bold text-primary flex items-center gap-2">
              <HelpCircle className="text-accent" size={20} /> {textHowToTitle}
            </h2>
            <p className="text-xs text-primary/75 leading-relaxed font-light">
              {textHowToDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Live Interactive Search Section */}
      <section className="pt-12 px-6 max-w-6xl mx-auto">
        <div className="relative max-w-xl mx-auto">
          <label htmlFor="sitemap-search-input" className="sr-only">{textSearchLabel}</label>
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-primary/40" size={18} />
            <input 
              id="sitemap-search-input"
              type="text"
              placeholder={textSearchLabel}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-primary/20 focus:border-accent focus:outline-none text-sm bg-white"
            />
          </div>
          <p className="text-[11px] text-primary/60 mt-2 text-center">
            {textSearchTip}
          </p>
        </div>
      </section>

      {/* Sitemap Links Grid */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        {totalResults === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-primary/10">
            <Info size={40} className="mx-auto text-primary/30 mb-4" />
            <p className="text-sm font-medium text-primary/75">
              {isFrench ? "Aucun résultat pour cette recherche." : "No pages found matching your search criteria."}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Core Pages Column */}
            {filteredCore.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-primary/10 shadow-sm space-y-4">
                <h2 className="text-xl font-serif font-bold text-primary flex items-center gap-2 border-b border-primary/10 pb-3">
                  <Globe className="text-accent" size={20} /> {textCoreHeader}
                </h2>
                <p className="text-xs text-primary/70 font-light leading-relaxed">
                  {isFrench
                    ? "Découvrez la mission d'Urunk, notre transparence tarifaire sans commission d'intermédiaire, notre garantie contractuelle de 90 jours et l'accès direct à votre diagnostic gratuit."
                    : "Explore Urunk's mission, our transparent commission-free pricing model, our 90-day direct growth guarantee, and direct access to your complimentary channel audit."}
                </p>
                <ul className="space-y-3 font-light text-sm">
                  {filteredCore.map((link, idx) => (
                    <li key={idx}>
                      <Link to={link.path} className="flex items-center justify-between text-primary hover:text-accent transition-colors py-1">
                        <span>{link.label}</span> <ChevronRight size={14} className="text-primary/40" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Services Column */}
            {filteredServices.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-primary/10 shadow-sm space-y-4">
                <h2 className="text-xl font-serif font-bold text-primary flex items-center gap-2 border-b border-primary/10 pb-3">
                  <FileText className="text-accent" size={20} /> {textServicesHeader}
                </h2>
                <p className="text-xs text-primary/70 font-light leading-relaxed">
                  {isFrench
                    ? "Solutions techniques de création de sites web ultra-rapides, d'intégration PMS, de référencement naturel local Google Maps et de pilotage publicitaire Google, Meta et TripAdvisor."
                    : "Specialized engineering for high-speed direct booking websites, PMS integration, Google Maps local SEO, and high-intent Google, Meta, and TripAdvisor ad management."}
                </p>
                <ul className="space-y-3 font-light text-sm">
                  {filteredServices.map((link, idx) => (
                    <li key={idx}>
                      <Link to={link.path} className="flex items-center justify-between text-primary hover:text-accent transition-colors py-1">
                        <span>{link.label}</span> <ChevronRight size={14} className="text-primary/40" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Industries Column */}
            {filteredIndustries.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-primary/10 shadow-sm space-y-4">
                <h2 className="text-xl font-serif font-bold text-primary flex items-center gap-2 border-b border-primary/10 pb-3">
                  <Briefcase className="text-accent" size={20} /> {textIndustriesHeader}
                </h2>
                <p className="text-xs text-primary/70 font-light leading-relaxed">
                  {isFrench
                    ? "Stratégies sectorielles calibrées pour réduire la dépendance aux OTA (15 à 25 % de commission) des hôtels, riads, tour-opérateurs, restaurateurs et PME B2B au Maroc."
                    : "Vertical playbooks engineered to eliminate 15–25% OTA commission leakage across luxury hotels, boutique Medina riads, tour operators, restaurants, and corporate SMEs."}
                </p>
                <ul className="space-y-3 font-light text-sm">
                  {filteredIndustries.map((link, idx) => (
                    <li key={idx}>
                      <Link to={link.path} className="flex items-center justify-between text-primary hover:text-accent transition-colors py-1">
                        <span>{link.label}</span> <ChevronRight size={14} className="text-primary/40" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Locations Column */}
            {filteredLocations.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-primary/10 shadow-sm space-y-4">
                <h2 className="text-xl font-serif font-bold text-primary flex items-center gap-2 border-b border-primary/10 pb-3">
                  <MapPin className="text-accent" size={20} /> {textLocationsHeader}
                </h2>
                <p className="text-xs text-primary/70 font-light leading-relaxed">
                  {isFrench
                    ? "Couverture opérationnelle à Casablanca, Marrakech, Rabat, Agadir et sur tout le Royaume pour capter l'intention de recherche géolocalisée des clientèles locales et internationales."
                    : "Dedicated regional hubs across Casablanca, Marrakech, Rabat, Agadir, and nationwide Morocco capturing localized commercial and international travel search demand."}
                </p>
                <ul className="space-y-3 font-light text-sm">
                  {filteredLocations.map((link, idx) => (
                    <li key={idx}>
                      <Link to={link.path} className="flex items-center justify-between text-primary hover:text-accent transition-colors py-1">
                        <span>{link.label}</span> <ChevronRight size={14} className="text-primary/40" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Legal Column */}
            {filteredLegal.length > 0 && (
              <div className="bg-white p-8 rounded-3xl border border-primary/10 shadow-sm space-y-4">
                <h2 className="text-xl font-serif font-bold text-primary flex items-center gap-2 border-b border-primary/10 pb-3">
                  <Building className="text-accent" size={20} /> {textLegalHeader}
                </h2>
                <p className="text-xs text-primary/70 font-light leading-relaxed">
                  {isFrench
                    ? "Cadre réglementaire conforme à la loi marocaine 09-08 (CNDP) et au RGPD, conditions contractuelles transparentes, études de cas détaillées et bibliothèque d'articles experts."
                    : "Full regulatory compliance under Moroccan Law 09-08 (CNDP) and GDPR, transparent client agreements, applied strategy case studies, and hospitality research guides."}
                </p>
                <ul className="space-y-3 font-light text-sm">
                  {filteredLegal.map((link, idx) => (
                    <li key={idx}>
                      <Link to={link.path} className="flex items-center justify-between text-primary hover:text-accent transition-colors py-1">
                        <span>{link.label}</span> <ChevronRight size={14} className="text-primary/40" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        )}

        {/* Editorial Architecture & Bilingual Coverage Note */}
        <div className="mt-12 bg-white p-8 rounded-3xl border border-primary/10 shadow-sm space-y-4">
          <h2 className="text-xl font-serif font-bold text-primary">
            {isFrench
              ? "Écosystème Bilingue, Maillage Sémantique & Ressources Éditoriales"
              : "Bilingual Content Ecosystem, Semantic Linking & Editorial Resources"}
          </h2>
          <p className="text-xs md:text-sm text-primary/75 font-light leading-relaxed">
            {isFrench
              ? "L'intégralité des ressources répertoriées sur ce plan du site est disponible en français et en anglais avec un balisage hreflang réciproque intégral, permettant aux établissements hôteliers, riads et entreprises marocaines de rayonner simultanément auprès des décideurs locaux et des voyageurs internationaux d'Europe, du Royaume-Uni et d'Amérique du Nord. Nos guides éditoriaux approfondissent la réduction des commissions OTA, l'intégration des moteurs PMS (Cloudbeds, Mews, SiteMinder, Amenitiz), l'optimisation des Core Web Vitals et l'arbitrage budgétaire entre Google Search, Meta Ads et TripAdvisor."
              : "Every resource indexed in this directory is published natively in both English and French with reciprocal hreflang annotations, enabling Moroccan hotels, boutique riads, tour operators, and B2B enterprises to engage domestic stakeholders alongside international travelers from Europe, the UK, and North America. Our editorial library covers practical playbooks on reducing third-party OTA commissions, integrating direct booking PMS engines (Cloudbeds, Mews, SiteMinder, Amenitiz), passing Core Web Vitals benchmarks, and allocating ad spend across Google Search, Meta Ads, and TripAdvisor."}
          </p>
        </div>
      </section>
    </div>
  );
}
