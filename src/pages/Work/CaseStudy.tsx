import React from 'react';
import SEO from '../../components/SEO';
import { useParams, Link, useLocation } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import { ArrowRight, Check, Compass, Target, BarChart3, Search, Megaphone, Smartphone, MessageSquare, Layers, ShieldCheck } from 'lucide-react';
import ImageWithSkeleton from '../../components/ImageWithSkeleton';

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
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">{isFrench ? "Exemple de stratégie introuvable" : "Strategy Example Not Found"}</h1>
        <Link to={isFrench ? "/realisations" : "/en/work"} className="text-accent hover:underline font-medium">
          {isFrench ? "Retour aux exemples de stratégies" : "Return to Strategy Examples"}
        </Link>
      </div>
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

  const canonicalUrl = `https://urunk.com${isFrench ? `/fr/realisations/${study.frSlug}` : `/work/${study.slug}`}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": metaDescription,
    "image": `https://urunk.com${study.heroImage}`,
    "author": {
      "@type": "Organization",
      "name": "Urunk Digital Agency",
      "url": "https://urunk.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Urunk Agency",
      "url": "https://urunk.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  return (
    <div className="w-full pb-20 bg-bg text-primary">
      <SEO 
        title={pageSeoTitle}
        description={metaDescription}
        schema={schema}
      />
      
      {/* Hero Header */}
      <div className="h-[45vh] md:h-[55vh] w-full relative overflow-hidden bg-primary">
        <ImageWithSkeleton 
          src={study.heroImage} 
          imageName={getImageName(study.slug)}
          alt={topicName} 
          className="w-full h-full" 
          imgClassName="object-cover opacity-30" 
          priority={true}
          fetchPriority="high"
          width={1200}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 max-w-6xl mx-auto w-full text-white">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 text-accent-hover border border-accent/30 text-xs font-bold uppercase tracking-wider">
              <Compass size={14} />
              {isFrench ? "Exemple de Stratégie Sectorielle" : "Industry Strategy Example"}
            </span>
            <span className="text-white/70 text-sm font-medium">
              {industry} · {studyLocation}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight max-w-4xl">{title}</h1>
          <p className="text-white/80 text-base md:text-lg max-w-3xl font-light">
            {topicName}
          </p>
        </div>
      </div>

      <div className="py-12 px-6 max-w-5xl mx-auto">
        
        {/* Transparent Strategy Disclaimer */}
        <div className="mb-12 bg-accent/5 border border-accent/20 p-6 rounded-2xl flex items-start gap-4">
          <ShieldCheck size={24} className="text-accent shrink-0 mt-1" />
          <div className="text-sm leading-relaxed text-primary/80">
            <strong className="text-primary font-bold block mb-1">
              {isFrench ? "Avis de Transparence : Modèle de Stratégie Digital Sectoriel" : "Transparency Notice: Strategic Framework Example"}
            </strong>
            {isFrench 
              ? "Cette page présente le modèle de stratégie digitale élaboré par Urunk pour ce secteur d'activité au Maroc. Elle détaille nos recommandations techniques, leviers d'acquisition et indicateurs cibles pour optimiser l'acquisition directe."
              : "This page presents Urunk's strategic digital framework designed for this business sector in Morocco. It details our technical recommendations, acquisition channels, and target metrics to optimize direct customer acquisition."}
          </div>
        </div>

        {/* 1. Business Scenario & Challenges */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm">
            <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider mb-3">
              <Target size={18} />
              <span>{isFrench ? "1. Scénario d'Entreprise" : "1. Business Scenario"}</span>
            </div>
            <h2 className="text-2xl font-serif font-bold mb-4">{isFrench ? "Contexte Sectoriel" : "Industry Context"}</h2>
            <p className="text-primary/80 leading-relaxed">{businessScenario}</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm">
            <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider mb-3">
              <BarChart3 size={18} />
              <span>{isFrench ? "2. Défis Digitaux Majeurs" : "2. Main Digital Challenges"}</span>
            </div>
            <h2 className="text-2xl font-serif font-bold mb-4">{isFrench ? "Obstacles à la Croissance" : "Growth Obstacles"}</h2>
            <ul className="space-y-3">
              {digitalChallenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-primary/80">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0 mt-2"></span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. Recommended Overall Strategy */}
        <div className="bg-primary text-white p-8 md:p-10 rounded-2xl mb-12">
          <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-2">
            {isFrench ? "3. Stratégie Recommandée" : "3. Recommended Core Strategy"}
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            {isFrench ? "Vue d'Ensemble du Dispositif d'Acquisition Directe" : "Direct Acquisition Master Framework"}
          </h2>
          <p className="text-white/90 text-lg leading-relaxed font-light">
            {recommendedStrategy}
          </p>
        </div>

        {/* 4. SEO Strategy & 5. Paid Acquisition Strategy */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* SEO Strategy */}
          <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm">
            <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider mb-3">
              <Search size={18} />
              <span>{isFrench ? "4. Stratégie SEO" : "4. SEO Strategy"}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{isFrench ? "Acquisition Organique" : "Organic Search Visibility"}</h3>
            <p className="text-sm text-primary/80 mb-6">{seoStrat.overview}</p>
            
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary/70 mb-2">
                {isFrench ? "Mots-Clés Cibles :" : "Target Search Queries:"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {seoStrat.targetKeywords.map((kw, i) => (
                  <span key={i} className="bg-primary/5 text-primary text-xs font-medium px-3 py-1 rounded-md border border-primary/10">
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary/70 mb-2">
                {isFrench ? "Actions Techniques :" : "Technical SEO Actions:"}
              </h4>
              <ul className="space-y-2">
                {seoStrat.technicalActions.map((act, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-primary/80">
                    <Check size={14} className="text-accent shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Paid Acquisition Strategy */}
          <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm">
            <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider mb-3">
              <Megaphone size={18} />
              <span>{isFrench ? "5. Acquisition Payante" : "5. Paid Acquisition Strategy"}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{isFrench ? "Campagnes Moteur & Réseaux" : "Paid Media Engine"}</h3>
            <p className="text-sm text-primary/80 mb-6">{paidStrat.overview}</p>
            
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary/70 mb-2">
                {isFrench ? "Canaux Utilisés :" : "Recommended Channels:"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {paidStrat.channels.map((ch, i) => (
                  <span key={i} className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-md">
                    {ch}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary/70 mb-2">
                {isFrench ? "Tactiques Publicitaires :" : "Campaign Tactics:"}
              </h4>
              <ul className="space-y-2">
                {paidStrat.adTactics.map((tac, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-primary/80">
                    <Check size={14} className="text-accent shrink-0 mt-0.5" />
                    <span>{tac}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* 6. Website / CRO Strategy & 7. WhatsApp / Direct Booking */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Conversion Strategy */}
          <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm">
            <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider mb-3">
              <Smartphone size={18} />
              <span>{isFrench ? "6. Stratégie Site Web & Conversion" : "6. Website & Conversion Strategy"}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{isFrench ? "Parcours Client & Vitesse" : "Conversion Architecture"}</h3>
            <p className="text-sm text-primary/80 mb-6">{croStrat.overview}</p>
            <ul className="space-y-3">
              {croStrat.croTactics.map((tac, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-primary/80">
                  <Check size={16} className="text-accent shrink-0 mt-0.5" />
                  <span>{tac}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Booking & WhatsApp */}
          <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm">
            <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider mb-3">
              <MessageSquare size={18} />
              <span>{isFrench ? "7. Stratégie WhatsApp & Direct" : "7. Direct Booking & WhatsApp Strategy"}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{isFrench ? "Messagerie & Réactivité" : "Direct Inquiry Engine"}</h3>
            <p className="text-sm text-primary/80 mb-6">{directStrat.overview}</p>
            <ul className="space-y-3">
              {directStrat.tactics.map((tac, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-primary/80">
                  <Check size={16} className="text-accent shrink-0 mt-0.5" />
                  <span>{tac}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 8. Measurement & 9. Target KPIs */}
        <div className="bg-bg-alt border border-primary/10 p-8 rounded-2xl mb-12">
          <div className="mb-6">
            <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-1">
              {isFrench ? "8. Cadre de Mesure & Analyse" : "8. Measurement Framework"}
            </span>
            <h3 className="text-2xl font-serif font-bold">{isFrench ? "Attribution & Suivi des Performances" : "Tracking & Performance Metrics"}</h3>
            <p className="text-sm text-primary/80 mt-2">{measurement}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary/70 mb-4">
              {isFrench ? "9. Indicateurs Clés de Performance Cibles (KPIs) :" : "9. Recommended Target KPIs:"}
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {kpis.map((kpi, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-primary/10">
                  <div className="font-bold text-accent text-lg mb-1">{kpi.metric}</div>
                  <p className="text-xs text-primary/80">{kpi.targetDescription}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 10. Implementation Roadmap */}
        <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-sm mb-12">
          <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider mb-2">
            <Layers size={18} />
            <span>{isFrench ? "10. Feuille de Route d'Exécution" : "10. Implementation Roadmap"}</span>
          </div>
          <h3 className="text-2xl font-serif font-bold mb-6">{isFrench ? "Déploiement Étape par Étape" : "Phased Execution Plan"}</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {roadmap.map((step, i) => (
              <div key={i} className="p-6 rounded-xl bg-bg-alt border border-primary/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">{step.duration}</span>
                  <h4 className="font-bold text-base mb-2">{step.phase}</h4>
                  <p className="text-xs text-primary/80 leading-relaxed">{step.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 11. Related Services */}
        <div className="mb-12">
          <h3 className="text-lg font-bold mb-4">{isFrench ? "11. Services Urunk Associés à cette Stratégie :" : "11. Related Urunk Services:"}</h3>
          <div className="flex flex-wrap gap-3">
            {services.map((srv, i) => (
              <Link 
                key={i} 
                to={srv.url}
                className="bg-white hover:bg-accent/10 border border-primary/15 px-4 py-2 rounded-lg text-sm font-medium text-primary hover:text-accent transition-colors flex items-center gap-2"
              >
                <span>{srv.label}</span>
                <ArrowRight size={14} className="text-accent" />
              </Link>
            ))}
          </div>
        </div>

        {/* 12. Call To Action */}
        <div className="bg-primary text-white p-10 md:p-14 rounded-2xl text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            {isFrench 
              ? "Prêt à déployer cette stratégie pour votre établissement ?" 
              : "Ready to implement this direct booking strategy for your business?"}
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-sm md:text-base font-light">
            {isFrench 
              ? "Recevez une analyse gratuite de votre présence digitale et découvrez nos recommandations sur mesure." 
              : "Request a custom digital strategy audit and see how we can build your direct booking pipeline."}
          </p>
          <Link 
            to={isFrench ? "/contact" : "/en/contact"} 
            className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 transition-colors shadow-lg"
          >
            <span>{isFrench ? "Demander un audit stratégique gratuit" : "Request Free Strategy Audit"}</span>
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </div>
  );
}
