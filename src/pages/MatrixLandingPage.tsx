import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { locationsData, MarketStat, CityServiceFaqItem } from '../data/locationsData';
import { industriesData } from '../data/industriesData';
import { servicesData } from '../data/servicesData';
import { matrixRelations, findMatrixRelation, MatrixRelation, getRelatedMatrixLinks } from '../data/matrixRelations';
import { buildMatrixMetadata } from '../data/matrixMetadata';
import SEO from '../components/SEO';
import RelatedExpertiseSection from '../components/RelatedExpertiseSection';
import { buildFAQPageSchema } from '../components/SEO/StructuredData';
import { 
  MapPin, 
  ArrowRight, 
  Check, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  TrendingUp, 
  Search, 
  ShieldCheck, 
  HelpCircle, 
  BarChart2, 
  Phone,
  Building2,
  Calendar,
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface MatrixProps {
  lang: 'en' | 'fr';
}

export default function MatrixLandingPage({ lang }: MatrixProps) {
  const { industryId, serviceId, locationId, param1, param2 } = useParams<{
    industryId?: string;
    serviceId?: string;
    locationId?: string;
    param1?: string;
    param2?: string;
  }>();

  const isFrench = lang === 'fr';

  // 1. Dual Resolution: 2-tuple matrix relations OR 3-tuple legacy route
  let resolvedServiceId: string | undefined = serviceId;
  let resolvedLocationId: string | undefined = locationId;
  let resolvedIndustryId: string | undefined = industryId;
  let matchedRelation: MatrixRelation | undefined;

  if (param1 && param2) {
    // Attempt slug-based lookup via matrix relations registry
    const match = findMatrixRelation(param1, param2, lang) || findMatrixRelation(param2, param1, lang);
    if (match) {
      matchedRelation = match;
      resolvedServiceId = match.serviceId;
      if (match.type === 'service_location') {
        resolvedLocationId = match.locationId || match.targetId;
      } else if (match.type === 'service_industry') {
        resolvedIndustryId = match.industryId || match.targetId;
      }
    } else {
      // Direct ID pair lookup (e.g. hotel-seo + marrakech)
      const relById = matrixRelations.find(
        r => r.id === `${param1}-${param2}` || r.id === `${param2}-${param1}`
      );
      if (relById) {
        matchedRelation = relById;
        resolvedServiceId = relById.serviceId;
        if (relById.type === 'service_location') {
          resolvedLocationId = relById.locationId || relById.targetId;
        } else if (relById.type === 'service_industry') {
          resolvedIndustryId = relById.industryId || relById.targetId;
        }
      } else {
        // Fallback: direct dataset match
        if (servicesData[param1]) {
          resolvedServiceId = param1;
          if (locationsData[param2]) resolvedLocationId = param2;
          else if (industriesData[param2]) resolvedIndustryId = param2;
        } else if (servicesData[param2]) {
          resolvedServiceId = param2;
          if (locationsData[param1]) resolvedLocationId = param1;
          else if (industriesData[param1]) resolvedIndustryId = param1;
        }
      }
    }
  }

  // 2. Validate Service existence
  if (!resolvedServiceId || !servicesData[resolvedServiceId]) {
    return <Navigate to={isFrench ? "/404" : "/en/404"} replace />;
  }

  // 3. Must have at least a Location OR an Industry
  if (!resolvedLocationId && !resolvedIndustryId) {
    return <Navigate to={isFrench ? "/404" : "/en/404"} replace />;
  }

  // If a location is provided but invalid, return 404
  if (resolvedLocationId && !locationsData[resolvedLocationId]) {
    return <Navigate to={isFrench ? "/404" : "/en/404"} replace />;
  }

  // If an industry is provided but invalid, return 404
  if (resolvedIndustryId && !industriesData[resolvedIndustryId]) {
    return <Navigate to={isFrench ? "/404" : "/en/404"} replace />;
  }

  // 4. Extract data objects
  const srvData = servicesData[resolvedServiceId][lang];
  const locData = resolvedLocationId ? locationsData[resolvedLocationId][lang] : undefined;
  const locMap = resolvedLocationId ? locationsData[resolvedLocationId] : undefined;
  
  // Intelligent Industry association for Hospitality or Corporate services if none specified
  let effectiveIndustryId = resolvedIndustryId;
  if (!effectiveIndustryId) {
    if (
      resolvedServiceId.includes('hotel') || 
      resolvedServiceId.includes('riad') || 
      resolvedServiceId === 'direct-booking' || 
      resolvedServiceId === 'tripadvisor-ads'
    ) {
      effectiveIndustryId = resolvedServiceId.includes('riad') ? 'riads-boutique-hotels' : 'hotels-resorts';
    } else if (resolvedLocationId === 'casablanca' || resolvedLocationId === 'rabat') {
      effectiveIndustryId = 'corporate-smes';
    }
  }
  const indData = effectiveIndustryId ? industriesData[effectiveIndustryId]?.[lang] : undefined;

  // National benchmark fallback for market stats if not in specific city
  const marketStatsToDisplay: MarketStat[] = 
    locMap?.marketStats && locMap.marketStats.length > 0 
      ? locMap.marketStats 
      : (locationsData['morocco']?.marketStats || []);

  // 5 & 6. Clean, authoritative Title, Heading, Meta Description & Handwritten Intro
  const {
    locationName,
    industryName,
    cleanServiceName,
    pageHeading,
    metaPageTitle,
    metaDescription,
    leadIntroText,
  } = buildMatrixMetadata({
    lang,
    serviceId: resolvedServiceId,
    locationId: resolvedLocationId,
    industryId: resolvedIndustryId,
    effectiveIndustryId,
  });

  // 7. Structured FAQs (combining city-specific service FAQs + core service FAQs)
  const localizedFaqs: { q: string; a: string }[] = [];
  if (locMap?.faqByService?.[resolvedServiceId]) {
    locMap.faqByService[resolvedServiceId].forEach(item => {
      localizedFaqs.push({
        q: item.q[lang],
        a: item.a[lang]
      });
    });
  }
  // Add core service FAQs without duplicating
  if (srvData.faqs) {
    srvData.faqs.slice(0, 4).forEach(faq => {
      if (!localizedFaqs.some(f => f.q.toLowerCase() === faq.q.toLowerCase())) {
        localizedFaqs.push(faq);
      }
    });
  }

  // Interactive accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // 8. Schema.org FAQPage and Service Structured Data
  const schemaFaqItems = localizedFaqs.map(f => ({
    question: f.q,
    answer: f.a
  }));
  const faqSchema = buildFAQPageSchema(schemaFaqItems);

  // Status gating & SEO indexation: planned pages receive noindex
  const isPlanned = matchedRelation?.status === 'planned';

  const relatedExpertiseLinks = getRelatedMatrixLinks(
    {
      currentId: matchedRelation?.id,
      serviceId: resolvedServiceId,
      locationId: resolvedLocationId,
      industryId: effectiveIndustryId
    },
    lang,
    6
  );

  return (
    <div className="min-h-screen bg-bg text-primary selection:bg-accent/20">
      <SEO 
        title={metaPageTitle}
        description={metaDescription}
        schema={faqSchema}
        noindex={isPlanned}
      />
      
      {/* Planned / Review Mode Top Bar */}
      {isPlanned && (
        <aside 
          aria-label={isFrench ? "Statut de déploiement de la page" : "Page deployment status"}
          className="bg-amber-500/10 border-b border-amber-500/20 text-amber-900 dark:text-amber-300 py-2.5 px-4 text-xs font-medium text-center"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>
              {isFrench 
                ? "Statut : Déploiement Planifié (Balisage noindex actif pour contrôle qualité avant indexation)" 
                : "Status: Planned Deployment (noindex active for pre-release editorial review)"}
            </span>
          </div>
        </aside>
      )}

      {/* Hero Section */}
      <section className="relative pt-28 pb-18 md:pt-36 md:pb-24 px-6 bg-primary text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('/noise.png')" }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label={isFrench ? "Fil d'Ariane" : "Breadcrumb"} className="flex items-center gap-2 text-xs text-white/60 mb-6 flex-wrap">
            <Link to={isFrench ? "/" : "/en"} className="hover:text-white transition-colors">
              {isFrench ? "Accueil" : "Home"}
            </Link>
            <span>/</span>
            <Link to={isFrench ? "/services" : "/en/services"} className="hover:text-white transition-colors">
              Expertise
            </Link>
            <span>/</span>
            {locData && (
              <>
                <Link 
                  to={isFrench ? (resolvedLocationId === 'morocco' ? '/zones/maroc' : `/zones/${resolvedLocationId}`) : `/en/locations/${resolvedLocationId}`} 
                  className="hover:text-white transition-colors"
                >
                  {locationName}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-accent font-medium">{cleanServiceName}</span>
          </nav>

          {/* Context Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            {locData && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wide border border-white/15 whitespace-nowrap">
                <MapPin size={13} className="text-accent" />
                <span>{locationName}</span>
              </span>
            )}
            {indData && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 text-yellow-300 text-xs font-semibold tracking-wide border border-accent/25 whitespace-nowrap">
                <Award size={13} />
                <span>{industryName}</span>
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-white/80 text-xs font-semibold tracking-wide border border-white/10 whitespace-nowrap">
              <ShieldCheck size={13} className="text-green-400" />
              <span>{isFrench ? "Audit Stratégique Garanti" : "Performance Backed"}</span>
            </span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-[1.12] mb-6 max-w-4xl">
            {pageHeading}
          </h1>

          {/* Unique Lead Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-white/85 mb-8 leading-relaxed font-light max-w-3xl">
            {leadIntroText}
          </p>

          {/* AEO / GEO Information-Dense Summary Block */}
          <div className="max-w-3xl mb-8 bg-white/10 border-l-4 border-accent p-6 rounded-r-2xl backdrop-blur-xs text-left">
            <p className="text-sm md:text-base leading-relaxed text-white/95 m-0 font-normal">
              <strong>Urunk Agency</strong> {isFrench 
                ? `déploie son expertise ${cleanServiceName} à ${locationName} en combinant ingénierie web réactive (< 1s), intégration aux moteurs de réservation (PMS) et acquisition ciblée. Notre approche permet d'accroître les requêtes directes de plus de 40 % et d'éliminer les commissions intermédiaires.`
                : `delivers dedicated ${cleanServiceName} expertise in ${locationName}, fusing sub-second web architectures, native PMS booking engines, and precision acquisition campaigns to grow direct inquiries by +40% and eliminate OTA commission fees.`}
            </p>
          </div>
          
          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <Link 
              to={isFrench ? "/contact" : "/en/contact"} 
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 text-center"
            >
              <span>{isFrench ? "Demander un Audit de Visibilité" : "Request Direct Strategy Audit"}</span>
              <ArrowRight size={18} />
            </Link>

            <a 
              href="#market-intelligence" 
              className="px-6 py-4 rounded-xl font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2 text-sm border border-white/20"
            >
              <span>{isFrench ? "Données & Enjeux du Marché" : "Market Data & Realities"}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Market Intelligence Section (Phase 2 Data Layer Integration) */}
      {marketStatsToDisplay.length > 0 && (
        <section id="market-intelligence" className="py-14 md:py-20 px-6 bg-bg border-b border-primary/10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-3 border border-primary/10">
                <BarChart2 size={13} className="text-accent" />
                <span>{isFrench ? "Repères & Dynamique du Secteur" : "Market Benchmarks"}</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
                {isFrench 
                  ? `Indicateurs Clés du Marché : ${locationName}` 
                  : `Key Market Indicators: ${locationName}`}
              </h2>
              <p className="text-sm text-primary/70 mt-2 max-w-2xl font-light">
                {isFrench 
                  ? "Indicateurs consolidés d'après les rapports de l'Observatoire du Tourisme, du HCP et les benchmarks opérationnels de l'Agence Urunk." 
                  : "Consolidated performance metrics based on Moroccan Tourism Observatory reports and operational benchmarks."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {marketStatsToDisplay.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-6 rounded-xl border border-primary/10 shadow-sm hover:border-accent/40 transition-colors"
                >
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-accent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-primary/80 font-medium leading-snug">
                    {stat.label[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Strategic Problem & Local Friction */}
      <section className="py-16 md:py-24 px-6 bg-bg-alt border-b border-primary/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: The Problem Narrative */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-accent/15">
              {isFrench ? "Diagnostic Stratégique" : "Strategic Assessment"}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-6 text-primary leading-tight">
              {srvData.problemTitle}
            </h2>
            <div className="space-y-4 text-primary/80 font-light leading-relaxed text-sm sm:text-base">
              <p>{srvData.problemText1}</p>
              <p>{srvData.problemText2}</p>
              {locData?.overviewText1 && (
                <div className="p-5 bg-white rounded-xl border border-primary/10 mt-6 shadow-sm">
                  <h3 className="font-serif font-bold text-base text-primary mb-2 flex items-center gap-2">
                    <MapPin size={16} className="text-accent" />
                    <span>{isFrench ? `Spécificité Locale : ${locationName}` : `Local Market Factor: ${locationName}`}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-primary/75 leading-relaxed">
                    {locData.overviewText1}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Local Challenges / Friction Points */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-2xl border border-primary/10 shadow-sm">
            <h3 className="text-lg font-serif font-bold mb-5 text-primary pb-3 border-b border-primary/10 flex items-center gap-2">
              <Award size={18} className="text-accent" />
              <span>
                {locData?.marketHighlightsTitle || indData?.keyChallengesTitle || (isFrench ? "Défis Clés à Résoudre" : "Key Challenges We Solve")}
              </span>
            </h3>

            <ul className="space-y-3.5">
              {(locData?.marketHighlights || indData?.keyChallenges || srvData.signs || [
                "Dépendance excessive envers les OTAs (Booking, Expedia, Airbnb)",
                "Faible taux de conversion mobile des visiteurs internationaux",
                "Visibilité locale insuffisante sur les recherches Google Maps",
                "Coût par acquisition élevé sans suivi précis du retour sur investissement"
              ]).slice(0, 4).map((item, index) => {
                const textValue = typeof item === 'string' ? item : (item as any).text || (item as any).title;
                return (
                  <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-primary/85 leading-relaxed font-light">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    <span>{textValue}</span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 pt-5 border-t border-primary/10">
              <p className="text-xs text-primary/70 mb-4 font-light">
                {isFrench 
                  ? "Nos plans d'action combinent SEO sémantique multilingue, infrastructure ultra-rapide et tunnel direct sans commission."
                  : "Our solutions merge multilingual technical SEO, high-speed architectures, and commission-free direct booking funnels."}
              </p>
              <Link
                to={isFrench ? "/tarifs" : "/en/pricing"}
                className="text-accent hover:text-accent-hover text-xs font-bold inline-flex items-center gap-1 transition-colors"
              >
                <span>{isFrench ? "Consulter la grille tarifaire transparente" : "View transparent pricing tiers"}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Implementation Roadmap */}
      <section className="py-16 md:py-24 px-6 bg-bg border-b border-primary/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-3 border border-primary/10">
              <Layers size={13} className="text-accent" />
              <span>{isFrench ? "Livrables et Déploiement" : "Scope of Deliverables"}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary">
              {srvData.featuresTitle || (isFrench ? "Ce que comprend notre accompagnement" : "What Our Framework Delivers")}
            </h2>
            <p className="text-sm sm:text-base text-primary/70 mt-3 font-light">
              {isFrench 
                ? "Une méthodologie rigoureuse orientée retour sur investissement direct et pérennité sur Google." 
                : "A rigorous methodology focused on direct revenue ROI and long-term search engine equity."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(srvData.features && srvData.features.length > 0 ? srvData.features.slice(0, 3) : [
              {
                title: isFrench ? "Audit Technique & Concurrentiel" : "Technical & Competitive Audit",
                desc: isFrench ? "Analyse exhaustive de votre positionnement sur Google Maps, de la vitesse Core Web Vitals et des opportunités de requêtes locales." : "In-depth indexing review, Core Web Vitals profiling, and local competitive gap analysis."
              },
              {
                title: isFrench ? "Tunnel de Réservation Directe" : "Direct Conversion Engine",
                desc: isFrench ? "Optimisation du parcours client pour inciter les voyageurs à réserver sans intermédiaire, intégration PMS fluide." : "High-converting user experience designed to turn browsers into direct, paying guests."
              },
              {
                title: isFrench ? "Suivi & Rapports de Rentabilité" : "Performance & ROI Tracking",
                desc: isFrench ? "Tableau de bord transparent mesurant l'évolution du trafic direct, les réservations générées et les commissions économisées." : "Clear analytics measuring direct revenue generated and commission fees preserved."
              }
            ]).map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white p-7 rounded-xl border border-primary/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-bold font-serif mb-5">
                    {idx + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-primary mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary/75 font-light leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Feature (If Industry available) */}
      {indData?.caseStudyName && (
        <section className="py-16 md:py-20 px-6 bg-primary text-white border-b border-white/10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-yellow-300 text-xs font-semibold tracking-wide mb-4 border border-white/15">
                <Sparkles size={13} />
                <span>{indData.caseStudyTitle || (isFrench ? "Étude de Cas Récente" : "Proven Track Record")}</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                {indData.caseStudyName}
              </h3>
              <p className="text-accent text-xl sm:text-2xl font-serif font-bold mb-4">
                {indData.caseStudyMetric}
              </p>
              <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed">
                {indData.caseStudyDesc}
              </p>
            </div>
            
            <Link 
              to={isFrench ? `/realisations/${indData.caseStudySlug}` : `/en/work/${indData.caseStudySlug}`} 
              className="shrink-0 bg-white hover:bg-white/90 text-primary px-7 py-3.5 rounded-xl font-bold shadow-md transition-all inline-flex items-center gap-2 text-sm"
            >
              <span>{isFrench ? "Lire l'Étude de Cas" : "View Case Study"}</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      )}

      {/* Transparent Pricing Anchor */}
      <section className="py-16 md:py-22 px-6 bg-bg border-b border-primary/10">
        <div className="max-w-4xl mx-auto text-center bg-white p-8 sm:p-12 rounded-2xl border border-primary/10 shadow-sm">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-3 border border-accent/15">
            {isFrench ? "Tarification Claire & Sans Surprise" : "Transparent Investment"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-3">
            {srvData.investmentTitle || (isFrench ? "Investissement & Forfaits d'Intervention" : "Investment & Packages")}
          </h2>
          <p className="text-3xl sm:text-4xl font-serif font-bold text-accent my-4">
            {srvData.investmentPrice || (isFrench ? "À partir de 12,000 MAD" : "From 12,000 MAD")}
          </p>
          <p className="text-xs sm:text-sm text-primary/75 max-w-xl mx-auto font-light leading-relaxed mb-6">
            {srvData.investmentDesc || (isFrench 
              ? "Forfait clair, facturation transparente sans commission masquée sur vos réservations directes. Éligible pour les établissements basés au Maroc."
              : "Clear fixed pricing with 0 hidden commissions on your direct bookings. Sourced and managed by local marketing engineers.")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to={isFrench ? "/contact" : "/en/contact"}
              className="bg-primary hover:bg-primary-light text-white px-7 py-3.5 rounded-xl font-bold transition-colors inline-flex items-center justify-center gap-2 text-sm"
            >
              <span>{isFrench ? "Obtenir un Devis Personnalisé" : "Get a Custom Proposal"}</span>
              <ArrowRight size={16} />
            </Link>
            <Link 
              to={isFrench ? "/tarifs" : "/en/pricing"}
              className="border border-primary/20 hover:bg-primary/5 text-primary px-7 py-3.5 rounded-xl font-bold transition-colors inline-flex items-center justify-center text-sm"
            >
              <span>{isFrench ? "Voir tous nos tarifs" : "View Full Pricing Matrix"}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* E-E-A-T Expert Authority Box */}
      <section className="max-w-4xl mx-auto my-12 px-6">
        <div className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xs">
          <img 
            src="/images/youssef-avatar.webp" 
            alt={isFrench ? "Portrait de J.Mellal, Consultant SEO et Stratège Marketing Digital Propulsé par l'IA au Maroc" : "Portrait of J.Mellal, SEO Consultant and AI-Powered Digital Marketing Strategist in Morocco"} 
            width={88} 
            height={88} 
            loading="lazy" 
            className="w-20 h-20 rounded-full object-cover border-2 border-accent shrink-0"
          />
          <div>
            <div className="text-xs font-bold text-accent uppercase tracking-wider mb-1">
              {isFrench ? "Direction Conseil & Stratégie Métier" : "Senior Strategic Direction"}
            </div>
            <h3 className="text-xl font-serif font-bold text-primary mb-2">
              {isFrench ? "J.Mellal : Consultant SEO & Stratège Marketing Digital Propulsé par l'IA" : "J.Mellal : SEO Consultant & AI-Powered Digital Marketing Strategist"}
            </h3>
            <p className="text-sm text-primary/80 leading-relaxed m-0 font-light">
              {isFrench 
                ? "Consultant SEO et stratège en marketing digital propulsé par l'IA, accompagnant la croissance en ligne des entreprises et établissements hôteliers au Maroc (Casablanca, Marrakech, Rabat et Agadir)."
                : "SEO Consultant, AI-Powered Digital Marketing Strategist, and helping businesses grow online in Morocco. Specializing in hospitality disintermediation, Google Ads, and full-funnel direct-booking optimization across Morocco."}
            </p>
          </div>
        </div>
      </section>

      {/* Localized FAQ Accordion */}
      {localizedFaqs.length > 0 && (
        <section className="py-16 md:py-24 px-6 bg-bg-alt border-b border-primary/10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-3 border border-primary/10">
                <HelpCircle size={13} className="text-accent" />
                <span>{isFrench ? "Foire Aux Questions" : "Frequently Asked Questions"}</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
                {isFrench 
                  ? `Questions Fréquentes : ${cleanServiceName} (${locationName})` 
                  : `Questions & Answers: ${cleanServiceName} in ${locationName}`}
              </h2>
            </div>

            <div className="space-y-3.5">
              {localizedFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl border border-primary/10 overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-primary hover:text-accent transition-colors"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className="text-accent shrink-0" />
                      ) : (
                        <ChevronDown size={18} className="text-primary/40 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div 
                        id={`faq-answer-${index}`}
                        className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-primary/80 font-light leading-relaxed border-t border-primary/5 pt-3.5"
                      >
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <RelatedExpertiseSection
        kicker={isFrench ? "Maillage d'Expertises Complémentaires" : "Related Regional & Sector Expertise"}
        title={isFrench ? `Autres Expertises Spécialisées (${locationName} & Maroc)` : `Complementary Specializations (${locationName} & Morocco)`}
        subtitle={
          isFrench
            ? "Explorez nos pages d'intervention connexes combinant création web rapide, référencement local et campagnes d'acquisition directe dans les principaux pôles marocains."
            : "Explore connected regional and vertical playbooks uniting sub-second web design, local search authority, and commission-free direct acquisition across Morocco."
        }
        links={relatedExpertiseLinks}
        isFrench={isFrench}
        bgVariant="default"
      />

      {/* Conversion Final CTA */}
      <section className="py-16 md:py-24 px-6 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            {isFrench 
              ? `Prêt à Développer Vos Réservations Directes à ${locationName} ?` 
              : `Ready to Maximize Your Direct Bookings in ${locationName}?`}
          </h2>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-8 font-light leading-relaxed">
            {isFrench 
              ? "Échangez avec nos spécialistes du marketing digital marocain. Nous analysons votre visibilité actuelle et concevons une stratégie adaptée à vos objectifs." 
              : "Schedule a discovery session with our Moroccan hospitality and search engineers to assess your direct conversion potential."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to={isFrench ? "/contact" : "/en/contact"} 
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all inline-flex items-center gap-2"
            >
              <span>{isFrench ? "Réserver un Audit Gratuit" : "Schedule Free Audit"}</span>
              <ArrowRight size={18} />
            </Link>
            <a 
              href="tel:+212668802096" 
              className="text-white/80 hover:text-white px-6 py-4 rounded-xl font-semibold inline-flex items-center gap-2 text-sm border border-white/20 hover:bg-white/10 transition-colors"
            >
              <Phone size={16} />
              <span>+212 668-802096</span>
            </a>
          </div>
        </div>
      </section>

      {/* Internal Cross-Linking / Silo Navigation */}
      <nav aria-label="Silo Navigation" className="py-8 px-6 bg-bg border-t border-primary/10 text-xs text-primary/70">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-semibold text-primary">{isFrench ? "Hubs associés :" : "Related hubs:"}</span>
            {locData && (
              <Link 
                to={isFrench ? `/zones/${resolvedLocationId}` : `/en/locations/${resolvedLocationId}`}
                className="hover:text-accent transition-colors underline underline-offset-2"
              >
                {isFrench ? `Toutes les prestations à ${locationName}` : `All services in ${locationName}`}
              </Link>
            )}
            <Link 
              to={isFrench ? "/services" : "/en/services"}
              className="hover:text-accent transition-colors underline underline-offset-2"
            >
              {isFrench ? "Catalogue de services" : "Full service catalog"}
            </Link>
            {indData && effectiveIndustryId && (
              <Link 
                to={isFrench ? `/secteurs/${effectiveIndustryId}` : `/en/industries/${effectiveIndustryId}`}
                className="hover:text-accent transition-colors underline underline-offset-2"
              >
                {isFrench ? `Secteur ${industryName}` : `${industryName} sector`}
              </Link>
            )}
          </div>
          <div>
            <Link 
              to={isFrench ? "/tarifs" : "/en/pricing"} 
              className="hover:text-accent font-semibold transition-colors"
            >
              {isFrench ? "Transparence tarifaire MAD / EUR →" : "Transparent MAD / EUR pricing →"}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
