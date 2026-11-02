import React from 'react';
import { useParams, useLocation, Navigate, Link } from 'react-router-dom';
import { locationsData, MarketStat } from '../data/locationsData';
import { industriesData } from '../data/industriesData';
import { servicesData } from '../data/servicesData';
import {
  matrixRelations,
  findMatrixRelation,
  MatrixRelation,
  getRelatedMatrixLinks,
  isCuratedMatrixPath,
} from '../data/matrixRelations';
import { buildMatrixMetadata } from '../data/matrixMetadata';
import SEO from '../components/SEO';
import RelatedExpertiseSection from '../components/RelatedExpertiseSection';
import { buildFAQPageSchema, buildServiceProviderSchema } from '../components/SEO/StructuredData';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import Hairline from '../components/ui/Hairline';
import { ChevronDown } from 'lucide-react';

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

  const location = useLocation();
  const isFrench = lang === 'fr';

  // 1. Dual Resolution: 2-tuple matrix relations OR 3-tuple legacy route
  let resolvedServiceId: string | undefined = serviceId;
  let resolvedLocationId: string | undefined = locationId;
  let resolvedIndustryId: string | undefined = industryId;
  let matchedRelation: MatrixRelation | undefined;

  if (param1 && param2) {
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

  if (resolvedLocationId && !locationsData[resolvedLocationId]) {
    return <Navigate to={isFrench ? "/404" : "/en/404"} replace />;
  }

  if (resolvedIndustryId && !industriesData[resolvedIndustryId]) {
    return <Navigate to={isFrench ? "/404" : "/en/404"} replace />;
  }

  // 4. Extract data objects
  const srvData = servicesData[resolvedServiceId][lang];
  const locData = resolvedLocationId ? locationsData[resolvedLocationId][lang] : undefined;
  const locMap = resolvedLocationId ? locationsData[resolvedLocationId] : undefined;

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

  const marketStatsToDisplay: MarketStat[] =
    locMap?.marketStats && locMap.marketStats.length > 0
      ? locMap.marketStats
      : (locationsData['morocco']?.marketStats || []);

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

  const localizedFaqs: { q: string; a: string }[] = [];
  if (locMap?.faqByService?.[resolvedServiceId]) {
    locMap.faqByService[resolvedServiceId].forEach(item => {
      localizedFaqs.push({
        q: item.q[lang],
        a: item.a[lang],
      });
    });
  }
  if (srvData.faqs) {
    srvData.faqs.slice(0, 4).forEach(faq => {
      if (!localizedFaqs.some(f => f.q.toLowerCase() === faq.q.toLowerCase())) {
        localizedFaqs.push(faq);
      }
    });
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": pageHeading,
    "description": metaDescription,
    "provider": buildServiceProviderSchema(),
    "areaServed": locationName,
  };
  const schemaFaqItems = localizedFaqs.map(f => ({
    question: f.q,
    answer: f.a,
  }));
  const faqSchema = buildFAQPageSchema(schemaFaqItems);

  const isPlanned = matchedRelation?.status === 'planned';
  const shouldNoIndex = isPlanned || !isCuratedMatrixPath(location.pathname);

  const relatedExpertiseLinks = getRelatedMatrixLinks(
    {
      currentId: matchedRelation?.id,
      serviceId: resolvedServiceId,
      locationId: resolvedLocationId,
      industryId: effectiveIndustryId,
    },
    lang,
    6
  );

  const deliverables =
    srvData.features && srvData.features.length > 0
      ? srvData.features.slice(0, 3)
      : [
          {
            title: isFrench ? 'Audit Technique & Concurrentiel' : 'Technical & Competitive Audit',
            desc: isFrench
              ? 'Analyse exhaustive de votre positionnement sur Google Maps, de la vitesse Core Web Vitals et des opportunités de requêtes locales.'
              : 'In-depth indexing review, Core Web Vitals profiling, and local competitive gap analysis.',
          },
          {
            title: isFrench ? 'Tunnel de Réservation Directe' : 'Direct Conversion Engine',
            desc: isFrench
              ? 'Optimisation du parcours client pour inciter les voyageurs à réserver sans intermédiaire, intégration PMS fluide.'
              : 'High-converting user experience designed to turn browsers into direct, paying guests.',
          },
          {
            title: isFrench ? 'Suivi & Rapports de Rentabilité' : 'Performance & ROI Tracking',
            desc: isFrench
              ? "Tableau de bord transparent mesurant l'évolution du trafic direct, les réservations générées et les commissions économisées."
              : 'Clear analytics measuring direct revenue generated and commission fees preserved.',
          },
        ];

  const contextMetaParts = [
    locData ? locationName : null,
    indData ? industryName : null,
    isFrench ? 'Audit stratégique garanti' : 'Performance backed',
  ].filter(Boolean) as string[];

  return (
    <div className="min-h-screen bg-bg-light text-primary">
      <SEO
        title={metaPageTitle}
        description={metaDescription}
        schema={[serviceSchema, faqSchema]}
        noindex={shouldNoIndex}
      />

      {isPlanned && (
        <aside
          aria-label={isFrench ? 'Statut de déploiement de la page' : 'Page deployment status'}
          className="bg-bg-alt border-b border-border-subtle text-primary py-2.5 px-6 text-xs text-center"
        >
          <div className="max-w-[1240px] mx-auto">
            {isFrench
              ? 'Statut : Déploiement Planifié (Balisage noindex actif pour contrôle qualité avant indexation)'
              : 'Status: Planned Deployment (noindex active for pre-release editorial review)'}
          </div>
        </aside>
      )}

      {/* Editorial Hero */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-4xl">
          <nav
            aria-label={isFrench ? "Fil d'Ariane" : 'Breadcrumb'}
            className="flex items-center gap-2 text-xs text-bg-light/75 mb-6 flex-wrap"
          >
            <Link to={isFrench ? '/' : '/en'}>
              {isFrench ? 'Accueil' : 'Home'}
            </Link>
            <span>/</span>
            <Link to={isFrench ? '/services' : '/en/services'}>
              Expertise
            </Link>
            <span>/</span>
            {locData && (
              <>
                <Link
                  to={
                    isFrench
                      ? resolvedLocationId === 'morocco'
                        ? '/zones/maroc'
                        : `/zones/${resolvedLocationId}`
                      : `/en/locations/${resolvedLocationId}`
                  }
                >
                  {locationName}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-bg-light">{cleanServiceName}</span>
          </nav>

          <p className="text-sm text-bg-light/75 mb-4">
            {contextMetaParts.join(', ')}
          </p>

          <h1 className="font-serif text-bg-light mb-6 text-balance">
            {pageHeading}
          </h1>

          <p className="text-lg md:text-xl text-bg-light/85 mb-8 leading-relaxed max-w-[65ch]">
            {leadIntroText}
          </p>

          <div className="max-w-3xl mb-10 border border-white/20 p-6 md:p-8 rounded-sm">
            <p className="text-base leading-relaxed text-bg-light/90 m-0">
              <strong className="text-bg-light font-semibold">Urunk Agency</strong>{' '}
              {isFrench
                ? `déploie son expertise ${cleanServiceName} à ${locationName} en combinant ingénierie web réactive ([À CONFIRMER]), intégration aux moteurs de réservation (PMS) et acquisition ciblée. Notre approche permet d'accroître les requêtes directes de plus de 40 % et d'éliminer les commissions intermédiaires.`
                : `delivers dedicated ${cleanServiceName} expertise in ${locationName}, fusing sub-second web architectures, native PMS booking engines, and precision acquisition campaigns to grow direct inquiries by +40% and eliminate OTA commission fees.`}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Button href={isFrench ? '/contact' : '/en/contact'} variant="primary">
              {isFrench ? 'Demander un audit de visibilité' : 'Request direct strategy audit'}
            </Button>
            <Button href="#market-intelligence" variant="secondary">
              {isFrench ? 'Données et enjeux du marché' : 'Market data and realities'}
            </Button>
          </div>
        </div>
      </Section>

      {/* Market Intelligence Indicators */}
      {marketStatsToDisplay.length > 0 && (
        <Section id="market-intelligence" tone="light">
          <div className="max-w-3xl mb-12">
            <p className="text-sm text-accent font-medium mb-2">
              {isFrench ? 'Repères et dynamique du secteur' : 'Market benchmarks'}
            </p>
            <h2 className="font-serif text-primary mb-3 text-balance">
              {isFrench
                ? `Indicateurs Clés du Marché : ${locationName}`
                : `Key Market Indicators: ${locationName}`}
            </h2>
            <p className="text-primary/80 leading-relaxed max-w-[65ch]">
              {isFrench
                ? "Indicateurs consolidés d'après les rapports de l'Observatoire du Tourisme, du HCP et les benchmarks opérationnels de l'Agence Urunk."
                : 'Consolidated performance metrics based on Moroccan Tourism Observatory reports and operational benchmarks.'}
            </p>
          </div>

          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 border-y border-border-subtle py-8">
            {marketStatsToDisplay.map((stat, idx) => (
              <div key={idx}>
                <dd className="font-serif text-3xl md:text-4xl text-accent mb-2 tabular-nums m-0">
                  {stat.value}
                </dd>
                <dt className="text-sm text-primary/80 leading-snug">
                  {stat.label[lang]}
                </dt>
              </div>
            ))}
          </dl>
        </Section>
      )}

      {/* Strategic Problem & Local Friction */}
      <Section tone="alt">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm text-accent font-medium mb-3">
              {isFrench ? 'Diagnostic stratégique' : 'Strategic assessment'}
            </p>
            <h2 className="font-serif text-primary mb-6 text-balance">
              {srvData.problemTitle}
            </h2>
            <div className="space-y-4 text-primary/85 leading-relaxed max-w-[65ch]">
              <p>{srvData.problemText1}</p>
              <p>{srvData.problemText2}</p>
              {locData?.overviewText1 && (
                <div className="pt-6 mt-6 border-t border-border-subtle">
                  <h3 className="font-serif text-primary mb-2">
                    {isFrench
                      ? `Spécificité Locale : ${locationName}`
                      : `Local Market Factor: ${locationName}`}
                  </h3>
                  <p className="text-sm text-primary/80 leading-relaxed m-0">
                    {locData.overviewText1}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 border border-border-subtle bg-bg-card p-8 rounded-sm">
            <h3 className="font-serif text-primary pb-4 mb-6 border-b border-border-subtle">
              {locData?.marketHighlightsTitle ||
                indData?.keyChallengesTitle ||
                (isFrench ? 'Défis Clés à Résoudre' : 'Key Challenges We Solve')}
            </h3>

            <div className="divide-y divide-border-subtle">
              {(
                locData?.marketHighlights ||
                indData?.keyChallenges ||
                srvData.signs || [
                  'Dépendance excessive envers les OTAs (Booking, Expedia, Airbnb)',
                  'Faible taux de conversion mobile des visiteurs internationaux',
                  'Visibilité locale insuffisante sur les recherches Google Maps',
                  'Coût par acquisition élevé sans suivi précis du retour sur investissement',
                ]
              )
                .slice(0, 4)
                .map((item, index) => {
                  const textValue =
                    typeof item === 'string'
                      ? item
                      : (item as { text?: string; title?: string }).text ||
                        (item as { text?: string; title?: string }).title;
                  return (
                    <p
                      key={index}
                      className="py-3.5 first:pt-0 last:pb-0 text-sm text-primary/85 leading-relaxed m-0"
                    >
                      {textValue}
                    </p>
                  );
                })}
            </div>

            <div className="mt-6 pt-5 border-t border-border-subtle">
              <p className="text-sm text-primary/75 mb-4">
                {isFrench
                  ? "Nos plans d'action combinent SEO sémantique multilingue, infrastructure ultra-rapide et tunnel direct sans commission."
                  : 'Our solutions merge multilingual technical SEO, high-speed architectures, and commission-free direct booking funnels.'}
              </p>
              <Link to={isFrench ? '/tarifs' : '/en/pricing'} className="text-sm font-medium">
                {isFrench ? 'Consulter la grille tarifaire transparente' : 'View transparent pricing tiers'}
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Deliverables as Editorial Rows */}
      <Section tone="light">
        <div className="max-w-3xl mb-12">
          <p className="text-sm text-accent font-medium mb-2">
            {isFrench ? 'Livrables et déploiement' : 'Scope of deliverables'}
          </p>
          <h2 className="font-serif text-primary mb-3 text-balance">
            {srvData.featuresTitle ||
              (isFrench ? 'Ce que comprend notre accompagnement' : 'What Our Framework Delivers')}
          </h2>
          <p className="text-primary/80 leading-relaxed max-w-[65ch]">
            {isFrench
              ? 'Une méthodologie rigoureuse orientée retour sur investissement direct et pérennité sur Google.'
              : 'A rigorous methodology focused on direct revenue ROI and long-term search engine equity.'}
          </p>
        </div>

        <div>
          <Hairline />
          {deliverables.map((feature, idx) => (
            <React.Fragment key={idx}>
              <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">
                  0{idx + 1}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-serif text-primary m-0">{feature.title}</h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[65ch]">{feature.desc}</p>
                </div>
              </div>
              <Hairline />
            </React.Fragment>
          ))}
        </div>
      </Section>

      {/* Case Study Feature */}
      {indData?.caseStudyName && (
        <Section tone="dark">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-sm text-bg-light/75 mb-3">
                {indData.caseStudyTitle || (isFrench ? 'Étude de cas récente' : 'Proven track record')}
              </p>
              <h2 className="font-serif text-bg-light mb-3">
                {indData.caseStudyName}
              </h2>
              <p className="font-serif text-2xl text-bg-light/95 mb-4 tabular-nums">
                {indData.caseStudyMetric}
              </p>
              <p className="text-bg-light/85 leading-relaxed max-w-[60ch] m-0">
                {indData.caseStudyDesc}
              </p>
            </div>

            <div className="shrink-0">
              <Button
                href={isFrench ? `/realisations/${indData.caseStudySlug}` : `/en/work/${indData.caseStudySlug}`}
                variant="primary"
              >
                {indData.caseStudyName}
              </Button>
            </div>
          </div>
        </Section>
      )}

      {/* Transparent Pricing Anchor & E-E-A-T Block */}
      <Section tone="light">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 border border-border-subtle bg-bg-card p-8 md:p-10 rounded-sm">
            <p className="text-sm text-accent font-medium mb-2">
              {isFrench ? 'Tarification claire et sans surprise' : 'Transparent investment'}
            </p>
            <h2 className="font-serif text-primary mb-3">
              {srvData.investmentTitle ||
                (isFrench ? "Investissement & Forfaits d'Intervention" : 'Investment & Packages')}
            </h2>
            <p className="font-serif text-3xl md:text-4xl text-accent my-4 tabular-nums">
              {srvData.investmentPrice || (isFrench ? 'À partir de 12,000 MAD' : 'From 12,000 MAD')}
            </p>
            <p className="text-primary/80 leading-relaxed mb-8 max-w-[55ch]">
              {srvData.investmentDesc ||
                (isFrench
                  ? 'Forfait clair, facturation transparente sans commission masquée sur vos réservations directes. Éligible pour les établissements basés au Maroc.'
                  : 'Clear fixed pricing with 0 hidden commissions on your direct bookings. Sourced and managed by local marketing engineers.')}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Button href={isFrench ? '/contact' : '/en/contact'} variant="dark">
                {isFrench ? 'Obtenir un devis personnalisé' : 'Get a custom proposal'}
              </Button>
              <Button href={isFrench ? '/tarifs' : '/en/pricing'} variant="secondary">
                {isFrench ? 'Voir tous nos tarifs' : 'View full pricing matrix'}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 border-y border-border-subtle py-8 flex flex-col sm:flex-row items-start gap-6">
            <img
              src="/images/youssef-avatar.webp"
              alt={
                isFrench
                  ? "Portrait de J.Mellal, Consultant SEO et Stratège Marketing Digital Propulsé par l'IA au Maroc"
                  : 'Portrait of J.Mellal, SEO Consultant and AI-Powered Digital Marketing Strategist in Morocco'
              }
              width={80}
              height={80}
              loading="lazy"
              className="w-20 h-20 rounded-full object-cover border border-border-subtle shrink-0"
            />
            <div>
              <p className="text-sm text-accent font-medium mb-1">
                {isFrench ? 'Direction conseil et stratégie métier' : 'Senior strategic direction'}
              </p>
              <h3 className="font-serif text-primary mb-2">
                {isFrench
                  ? "J.Mellal : Consultant SEO & Stratège Marketing Digital Propulsé par l'IA"
                  : 'J.Mellal : SEO Consultant & AI-Powered Digital Marketing Strategist'}
              </h3>
              <p className="text-sm text-primary/80 leading-relaxed m-0">
                {isFrench
                  ? "Consultant SEO et stratège en marketing digital propulsé par l'IA, accompagnant la croissance en ligne des entreprises et établissements hôteliers au Maroc (Casablanca, Marrakech, Rabat et Agadir)."
                  : 'SEO Consultant, AI-Powered Digital Marketing Strategist, and helping businesses grow online in Morocco. Specializing in hospitality disintermediation, Google Ads, and full-funnel direct-booking optimization across Morocco.'}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Localized FAQ Accordion */}
      {localizedFaqs.length > 0 && (
        <Section tone="alt">
          <div className="max-w-3xl">
            <p className="text-sm text-accent font-medium mb-2">
              {isFrench ? 'Foire aux questions' : 'Frequently asked questions'}
            </p>
            <h2 className="font-serif text-primary mb-10 text-balance">
              {isFrench
                ? `Questions Fréquentes : ${cleanServiceName} (${locationName})`
                : `Questions & Answers: ${cleanServiceName} in ${locationName}`}
            </h2>

            <div>
              <Hairline />
              {localizedFaqs.map((faq, index) => (
                <React.Fragment key={index}>
                  <details open={index === 0} className="group py-5">
                    <summary className="list-none flex items-center justify-between gap-6 cursor-pointer font-serif text-xl text-primary">
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className="text-accent shrink-0 transition-transform duration-200 group-open:rotate-180"
                      />
                    </summary>
                    <div
                      id={`faq-answer-${index}`}
                      className="pt-4 text-primary/85 leading-relaxed max-w-[65ch]"
                    >
                      {faq.a}
                    </div>
                  </details>
                  <Hairline />
                </React.Fragment>
              ))}
            </div>
          </div>
        </Section>
      )}

      <RelatedExpertiseSection
        kicker={isFrench ? "Maillage d'expertises complémentaires" : 'Related regional and sector expertise'}
        title={
          isFrench
            ? `Autres Expertises Spécialisées (${locationName} & Maroc)`
            : `Complementary Specializations (${locationName} & Morocco)`
        }
        subtitle={
          isFrench
            ? "Explorez nos pages d'intervention connexes combinant création web rapide, référencement local et campagnes d'acquisition directe dans les principaux pôles marocains."
            : 'Explore connected regional and vertical playbooks uniting sub-second web design, local search authority, and commission-free direct acquisition across Morocco.'
        }
        links={relatedExpertiseLinks}
        isFrench={isFrench}
        bgVariant="default"
      />

      {/* Conversion Final CTA */}
      <Section tone="dark">
        <div className="max-w-3xl">
          <h2 className="font-serif text-bg-light mb-4 text-balance">
            {isFrench
              ? `Prêt à Développer Vos Réservations Directes à ${locationName} ?`
              : `Ready to Maximize Your Direct Bookings in ${locationName}?`}
          </h2>
          <p className="text-bg-light/85 max-w-[60ch] mb-8 leading-relaxed">
            {isFrench
              ? 'Échangez avec nos spécialistes du marketing digital marocain. Nous analysons votre visibilité actuelle et concevons une stratégie adaptée à vos objectifs.'
              : 'Schedule a discovery session with our Moroccan hospitality and search engineers to assess your direct conversion potential.'}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Button href={isFrench ? '/contact' : '/en/contact'} variant="primary">
              {isFrench ? 'Réserver un audit gratuit' : 'Schedule free audit'}
            </Button>
            <Button href="tel:+212668802096" variant="secondary">
              +212 668-802096
            </Button>
          </div>
        </div>
      </Section>

      {/* Internal Cross-Linking / Silo Navigation */}
      <nav aria-label="Silo Navigation" className="py-8 px-[clamp(20px,5vw,56px)] bg-bg-light border-t border-border-subtle text-sm text-primary/80">
        <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-5 flex-wrap">
            <span className="font-medium text-primary">
              {isFrench ? 'Hubs associés :' : 'Related hubs:'}
            </span>
            {locData && (
              <Link to={isFrench ? `/zones/${resolvedLocationId}` : `/en/locations/${resolvedLocationId}`}>
                {isFrench ? `Toutes les prestations à ${locationName}` : `All services in ${locationName}`}
              </Link>
            )}
            <Link to={isFrench ? '/services' : '/en/services'}>
              {isFrench ? 'Catalogue de services' : 'Full service catalog'}
            </Link>
            {indData && effectiveIndustryId && (
              <Link to={isFrench ? `/secteurs/${effectiveIndustryId}` : `/en/industries/${effectiveIndustryId}`}>
                {isFrench ? `Secteur ${industryName}` : `${industryName} sector`}
              </Link>
            )}
          </div>
          <div>
            <Link to={isFrench ? '/tarifs' : '/en/pricing'}>
              {isFrench ? 'Transparence tarifaire MAD / EUR' : 'Transparent MAD / EUR pricing'}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
