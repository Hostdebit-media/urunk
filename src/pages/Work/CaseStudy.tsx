import React from 'react';
import SEO from '../../components/SEO';
import { buildArticleSchema } from '../../components/SEO/StructuredData';
import { useParams, Link, useLocation } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import ImageWithSkeleton from '../../components/ImageWithSkeleton';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Hairline from '../../components/ui/Hairline';

const getImageName = (slug: string) => {
  if (slug === "travel-morocco-services" || slug === "circuit-sahara-maroc") return "sahara-camel";
  if (slug === "nomad-eats-catering" || slug === "traiteur-casablanca") return "moroccan-catering";
  if (slug === "art-house-marrakech" || slug === "atelier-poterie-marrakech") return "marrakech-pottery";
  return undefined;
};

export default function CaseStudy() {
  const { slug } = useParams();
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');
  const study = caseStudies.find(s => isFrench ? (s.frSlug === slug || s.slug === slug) : s.slug === slug);

  if (!study) {
    return (
      <Section tone="light" className="pt-32">
        <div className="max-w-[68ch]">
          <h1 className="font-serif text-primary mb-6">
            {isFrench ? "Étude de cas introuvable" : "Case Study Not Found"}
          </h1>
          <Link to={isFrench ? "/realisations" : "/en/work"}>
            {isFrench ? "Retour aux réalisations" : "Return to Work"}
          </Link>
        </div>
      </Section>
    );
  }

  const title = isFrench ? study.frTitle : study.title;
  const pageSeoTitle = isFrench
    ? (study.frSeoTitle || `${study.frTitle} | Urunk`)
    : (study.seoTitle || `${study.title} | Urunk`);
  const metaDescription = isFrench ? study.frMetaDescription : study.metaDescription;
  const industry = isFrench ? study.frIndustry : study.industry;
  const studyLocation = isFrench ? study.frLocation : study.location;
  const topicName = isFrench ? study.frTopicName : study.topicName;
  const businessScenario = isFrench ? study.frBusinessScenario : study.businessScenario;
  const digitalChallenges = isFrench ? study.frDigitalChallenges : study.digitalChallenges;
  const recommendedStrategy = isFrench ? study.frRecommendedStrategy : study.recommendedStrategy;

  const seoStrat = isFrench ? study.frSeoStrategy : study.seoStrategy;
  const paidStrat = isFrench ? study.frPaidAcquisitionStrategy : study.paidAcquisitionStrategy;
  const croStrat = isFrench ? study.frConversionStrategy : study.conversionStrategy;
  const directStrat = isFrench ? study.frDirectBookingStrategy : study.directBookingStrategy;
  const measurement = isFrench ? study.frMeasurementFramework : study.measurementFramework;
  const kpis = isFrench ? study.frRecommendedKPIs : study.recommendedKPIs;
  const roadmap = isFrench ? study.frImplementationRoadmap : study.implementationRoadmap;
  const services = isFrench ? study.frRelatedServices : study.relatedServices;

  const canonicalUrl = `https://urunk.com${isFrench ? `/realisations/${study.frSlug}` : `/en/work/${study.slug}`}`;

  const schema = buildArticleSchema({
    type: 'Article',
    url: canonicalUrl,
    headline: title,
    description: metaDescription,
    image: study.heroImage,
    datePublished: '2026-01-20',
    lang: isFrench ? 'fr' : 'en'
  });

  return (
    <div className="w-full bg-bg-light text-primary">
      <SEO
        title={pageSeoTitle}
        description={metaDescription}
        image={study.heroImage}
        type="article"
        schema={schema}
      />

      {/* Editorial Header + Lead Visual */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-bg-light/75 mb-4">
              <span>
                {isFrench ? "Scénario Type Sectoriel" : "Representative Industry Scenario"}
              </span>
              <span>
                {industry}, {studyLocation}
              </span>
            </div>
            <h1 className="font-serif text-bg-light mb-5 text-balance">{title}</h1>
            <p className="text-bg-light/85 text-lg max-w-[62ch] leading-relaxed">
              {topicName}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[16/10] overflow-hidden border border-bg-light/20 rounded-sm bg-primary-light">
              <ImageWithSkeleton
                src={study.heroImage}
                imageName={getImageName(study.slug)}
                alt={topicName}
                className="w-full h-full"
                imgClassName="object-cover"
                priority={true}
                fetchPriority="high"
                width={1200}
                height={600}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Main Editorial Essay */}
      <Section tone="light">
        <div className="max-w-[68ch] space-y-14">
          {/* Transparency Notice */}
          <div className="border-y border-border-subtle py-6 text-sm leading-relaxed text-primary/80">
            <strong className="text-primary font-semibold block mb-1">
              {isFrench
                ? "Avis de Transparence : Modèle de Stratégie Digital Sectoriel"
                : "Transparency Notice: Strategic Framework Example"}
            </strong>
            {isFrench
              ? "Cette page présente le modèle de stratégie digitale élaboré par Urunk pour ce secteur d'activité au Maroc. Elle détaille nos recommandations techniques, leviers d'acquisition et indicateurs cibles pour optimiser l'acquisition directe."
              : "This page presents Urunk's strategic digital framework designed for this business sector in Morocco. It details our technical recommendations, acquisition channels, and target metrics to optimize direct customer acquisition."}
          </div>

          {/* 1. Business Scenario */}
          <div>
            <p className="text-sm font-medium text-accent mb-2">
              {isFrench ? "01. Scénario d'Entreprise" : "01. Business Scenario"}
            </p>
            <h2 className="font-serif text-primary mb-4">
              {isFrench ? "Contexte Sectoriel" : "Industry Context"}
            </h2>
            <p className="text-primary/85 leading-relaxed">{businessScenario}</p>
          </div>

          <Hairline />

          {/* 2. Challenges */}
          <div>
            <p className="text-sm font-medium text-accent mb-2">
              {isFrench ? "02. Défis Digitaux Majeurs" : "02. Main Digital Challenges"}
            </p>
            <h2 className="font-serif text-primary mb-4">
              {isFrench ? "Obstacles à la Croissance" : "Growth Obstacles"}
            </h2>
            <ul className="space-y-3 text-primary/85 leading-relaxed list-disc pl-5">
              {digitalChallenges.map((challenge, idx) => (
                <li key={idx}>{challenge}</li>
              ))}
            </ul>
          </div>

          <Hairline />

          {/* 3. Recommended Overall Strategy */}
          <div>
            <p className="text-sm font-medium text-accent mb-2">
              {isFrench ? "03. Stratégie Recommandée" : "03. Recommended Core Strategy"}
            </p>
            <h2 className="font-serif text-primary mb-4">
              {isFrench
                ? "Vue d'Ensemble du Dispositif d'Acquisition Directe"
                : "Direct Acquisition Master Framework"}
            </h2>
            <p className="text-primary/85 text-lg leading-relaxed">
              {recommendedStrategy}
            </p>
          </div>

          <Hairline />

          {/* 4. SEO Strategy */}
          <div>
            <p className="text-sm font-medium text-accent mb-2">
              {isFrench ? "04. Stratégie SEO" : "04. SEO Strategy"}
            </p>
            <h3 className="font-serif text-primary mb-3">
              {isFrench ? "Acquisition Organique" : "Organic Search Visibility"}
            </h3>
            <p className="text-primary/85 leading-relaxed mb-6">{seoStrat.overview}</p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-primary mb-2">
                {isFrench ? "Mots-clés cibles :" : "Target search queries:"}
              </h4>
              <p className="text-sm text-primary/75 leading-relaxed">
                {seoStrat.targetKeywords.join(', ')}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-primary mb-2">
                {isFrench ? "Actions techniques :" : "Technical SEO actions:"}
              </h4>
              <ul className="space-y-2 text-sm text-primary/80 list-disc pl-5">
                {seoStrat.technicalActions.map((act, i) => (
                  <li key={i}>{act}</li>
                ))}
              </ul>
            </div>
          </div>

          <Hairline />

          {/* 5. Paid Acquisition Strategy */}
          <div>
            <p className="text-sm font-medium text-accent mb-2">
              {isFrench ? "05. Acquisition Payante" : "05. Paid Acquisition Strategy"}
            </p>
            <h3 className="font-serif text-primary mb-3">
              {isFrench ? "Campagnes Moteur & Réseaux" : "Paid Media Engine"}
            </h3>
            <p className="text-primary/85 leading-relaxed mb-6">{paidStrat.overview}</p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-primary mb-2">
                {isFrench ? "Canaux utilisés :" : "Recommended channels:"}
              </h4>
              <p className="text-sm text-primary/75">{paidStrat.channels.join(', ')}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-primary mb-2">
                {isFrench ? "Tactiques publicitaires :" : "Campaign tactics:"}
              </h4>
              <ul className="space-y-2 text-sm text-primary/80 list-disc pl-5">
                {paidStrat.adTactics.map((tac, i) => (
                  <li key={i}>{tac}</li>
                ))}
              </ul>
            </div>
          </div>

          <Hairline />

          {/* 6. Conversion Strategy */}
          <div>
            <p className="text-sm font-medium text-accent mb-2">
              {isFrench
                ? "06. Stratégie Site Web & Conversion"
                : "06. Website & Conversion Strategy"}
            </p>
            <h3 className="font-serif text-primary mb-3">
              {isFrench ? "Parcours Client & Vitesse" : "Conversion Architecture"}
            </h3>
            <p className="text-primary/85 leading-relaxed mb-5">{croStrat.overview}</p>
            <ul className="space-y-2 text-sm text-primary/80 list-disc pl-5">
              {croStrat.croTactics.map((tac, i) => (
                <li key={i}>{tac}</li>
              ))}
            </ul>
          </div>

          <Hairline />

          {/* 7. Direct Booking & WhatsApp */}
          <div>
            <p className="text-sm font-medium text-accent mb-2">
              {isFrench
                ? "07. Stratégie WhatsApp & Direct"
                : "07. Direct Booking & WhatsApp Strategy"}
            </p>
            <h3 className="font-serif text-primary mb-3">
              {isFrench ? "Messagerie & Réactivité" : "Direct Inquiry Engine"}
            </h3>
            <p className="text-primary/85 leading-relaxed mb-5">{directStrat.overview}</p>
            <ul className="space-y-2 text-sm text-primary/80 list-disc pl-5">
              {directStrat.tactics.map((tac, i) => (
                <li key={i}>{tac}</li>
              ))}
            </ul>
          </div>

          <Hairline />

          {/* 8 & 9. Measurement & Target KPIs */}
          <div>
            <p className="text-sm font-medium text-accent mb-2">
              {isFrench ? "08. Cadre de Mesure & Analyse" : "08. Measurement Framework"}
            </p>
            <h3 className="font-serif text-primary mb-3">
              {isFrench
                ? "Attribution & Suivi des Performances"
                : "Tracking & Performance Metrics"}
            </h3>
            <p className="text-primary/85 leading-relaxed mb-8">{measurement}</p>

            <h4 className="text-sm font-semibold text-primary mb-4">
              {isFrench
                ? "09. Indicateurs Clés de Performance Cibles (KPIs)"
                : "09. Recommended Target KPIs"}
            </h4>
            <div className="border-t border-border-subtle">
              {kpis.map((kpi, i) => (
                <div key={i} className="py-4 border-b border-border-subtle">
                  <p className="font-serif text-xl text-accent tabular-nums mb-1">
                    {kpi.metric}
                  </p>
                  <p className="text-sm text-primary/80">{kpi.targetDescription}</p>
                </div>
              ))}
            </div>
          </div>

          <Hairline />

          {/* 10. Implementation Roadmap */}
          <div>
            <p className="text-sm font-medium text-accent mb-2">
              {isFrench
                ? "10. Feuille de Route d'Exécution"
                : "10. Implementation Roadmap"}
            </p>
            <h3 className="font-serif text-primary mb-6">
              {isFrench ? "Déploiement Étape par Étape" : "Phased Execution Plan"}
            </h3>
            <div className="border-t border-border-subtle">
              {roadmap.map((step, i) => (
                <div key={i} className="py-5 border-b border-border-subtle">
                  <p className="text-xs font-medium text-accent tabular-nums mb-1">
                    {step.duration}
                  </p>
                  <h4 className="font-semibold text-primary mb-1">{step.phase}</h4>
                  <p className="text-sm text-primary/80 leading-relaxed">{step.focus}</p>
                </div>
              ))}
            </div>
          </div>

          <Hairline />

          {/* 11. Related Services */}
          <div>
            <h3 className="font-serif text-primary mb-4">
              {isFrench
                ? "11. Services Urunk Associés à cette Stratégie"
                : "11. Related Urunk Services"}
            </h3>
            <ul className="space-y-2">
              {services.map((srv, i) => (
                <li key={i}>
                  <Link to={srv.url}>{srv.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 12. Call To Action */}
      <Section tone="dark">
        <div className="max-w-[68ch]">
          <h2 className="font-serif text-bg-light mb-4 text-balance">
            {isFrench
              ? "Prêt à déployer cette stratégie pour votre établissement ?"
              : "Ready to implement this direct booking strategy for your business?"}
          </h2>
          <p className="text-bg-light/85 mb-8 text-lg leading-relaxed">
            {isFrench
              ? "Recevez une analyse gratuite de votre présence digitale et découvrez nos recommandations sur mesure."
              : "Request a custom digital strategy audit and see how we can build your direct booking pipeline."}
          </p>
          <Button variant="dark" href={isFrench ? "/contact" : "/en/contact"}>
            {isFrench
              ? "Demander un audit stratégique gratuit"
              : "Request Free Strategy Audit"}
          </Button>
        </div>
      </Section>
    </div>
  );
}
