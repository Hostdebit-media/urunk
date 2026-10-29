import React, { useState } from 'react';
import { servicesData, extractNumericMadPrice } from '../../data/servicesData';
import { getMatrixLinksForService } from '../../data/matrixRelations';
import SEO from '../../components/SEO';
import Callout from '../../components/Callout';
import RelatedExpertiseSection from '../../components/RelatedExpertiseSection';
import { Check, ArrowRight, ChevronDown, Sparkles, Award, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface ServiceLandingPageProps {
  serviceKey: string;
}

export default function ServiceLandingPage({ serviceKey }: ServiceLandingPageProps) {
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');
  const lang = isFrench ? 'fr' : 'en';

  const dataMap = servicesData[serviceKey];
  if (!dataMap) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <p className="mt-4">The service configuration could not be loaded.</p>
        <Link to="/en" className="text-accent underline mt-4 inline-block">Return to Home</Link>
      </div>
    );
  }

  const data = dataMap[lang];
  const serviceExpertiseLinks = getMatrixLinksForService(serviceKey, lang);

  // Local state for interactive FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const numericPrice = extractNumericMadPrice(data.investmentPrice);
  const isMonthlyPrice = /\/\s*(?:mo|mois)|par mois|per month/i.test(data.investmentPrice);
  const cleanPath = location.pathname.endsWith('/') && location.pathname.length > 1
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const schemaMarkup: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://urunk.com${cleanPath}#service`,
    "name": data.heroTitle,
    "serviceType": data.heroTitle,
    "description": data.description,
    "provider": {
      "@type": "Organization",
      "name": "Urunk",
      "url": "https://urunk.com"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Morocco"
      },
      {
        "@type": "Country",
        "name": "Worldwide"
      }
    ],
    ...(numericPrice
      ? {
          "offers": {
            "@type": "Offer",
            "price": numericPrice,
            "priceCurrency": "MAD",
            "url": `https://urunk.com${cleanPath}`,
            ...(isMonthlyPrice
              ? {
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": numericPrice,
                    "priceCurrency": "MAD",
                    "unitText": "MONTH"
                  }
                }
              : {})
          }
        }
      : {})
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="w-full">
      <SEO 
        title={data.title} 
        description={data.description} 
        schema={[schemaMarkup, faqSchema]}
      />
      
      {/* Hero & GEO / AEO Opening Answer Block */}
      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent-soft text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            <Sparkles size={14} /> {isFrench ? "Solution Digitale Hôtellerie & Tourisme" : "Hospitality & Tourism Digital Infrastructure"}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.1] mb-6">
            {data.heroTitle}
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed font-light">
            {data.heroSub}
          </p>

          {/* AEO / GEO Opening Answer Block */}
          <div className="max-w-3xl mx-auto mb-8 bg-white/10 border border-white/15 p-6 md:p-7 rounded-2xl backdrop-blur-xs text-left">
            {data.directAnswer ? (
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-accent-soft m-0">
                  {data.directAnswer.question}
                </p>
                <p className="text-sm md:text-base leading-relaxed text-white/95 m-0 font-normal">
                  {data.directAnswer.answer}
                </p>
                {data.directAnswer.highlights && data.directAnswer.highlights.length > 0 && (
                  <ul className="grid sm:grid-cols-2 gap-2.5 pt-2 text-xs md:text-sm text-white/90">
                    {data.directAnswer.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check size={15} className="text-accent-soft shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <p className="text-sm md:text-base leading-relaxed text-white/95 m-0 font-normal">
                <strong>Urunk Agency</strong>{' '}
                {isFrench
                  ? `accompagne les hôtels indépendants, riads, maisons d'hôtes et entreprises au Maroc depuis Casablanca (Maarif) et Marrakech. Notre approche repose sur des standards techniques mesurables (Core Web Vitals, suivi des conversions GA4/GTM, données structurées Schema.org et propriété à 100 % de vos actifs). Tarif affiché : ${data.investmentPrice}.`
                  : `supports independent hotels, riads, guesthouses, and Moroccan businesses from Casablanca (Maarif) and Marrakech. Our work focuses on measurable technical fundamentals (Core Web Vitals, GA4/GTM conversion tracking, Schema.org structured data, and 100% client asset ownership). Published pricing: ${data.investmentPrice}.`}
              </p>
            )}
          </div>

          <div className="max-w-3xl mx-auto mb-10 text-left">
            <Callout variant="dark">
              <strong className="text-accent font-semibold">{data.calloutTitle}:</strong> {data.calloutBody}
            </Callout>
          </div>

          <div className="mt-8">
            <Link 
              to={isFrench ? "/contact" : "/en/contact"} 
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <span>{isFrench ? "Demander un Diagnostic Personnalisé" : "Request a Tailored Assessment"}</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem & Signs Section */}
      <section className="bg-bg-alt py-16 md:py-24 px-6 border-y border-primary/10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-accent/15">
              {isFrench ? "Diagnostic Terrain" : "Operational Context"}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary leading-tight">
              {data.problemTitle}
            </h2>
            <p className="text-primary/80 mb-4 font-light leading-relaxed">
              {data.problemText1}
            </p>
            <p className="text-primary/80 font-light leading-relaxed">
              {data.problemText2}
            </p>
          </div>

          <div className="flex-1 w-full bg-white p-8 rounded-2xl border border-primary/10 shadow-sm">
            <h3 className="text-lg font-serif font-bold mb-6 text-primary flex items-center gap-2 border-b border-primary/5 pb-3">
              <Award size={20} className="text-accent" /> {data.signsTitle}
            </h3>
            <ul className="space-y-4">
              {data.signs.map((sign, index) => (
                <li key={index} className="flex gap-3 text-sm text-primary/85 leading-relaxed font-light">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Value Propositions / Features Grid */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-primary">
          {data.featuresTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {data.features.map((feature, i) => (
            <div key={i} className="p-8 rounded-2xl border border-primary/10 bg-white hover:border-accent/30 transition-all shadow-sm">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent mb-6 font-serif font-bold tabular-nums">
                0{i + 1}
              </span>
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">{feature.title}</h3>
              <p className="text-sm text-primary/75 font-light leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Structured Comparison Table (GEO / AEO Decision Matrix) */}
      {data.comparisonTable && (
        <section className="py-16 md:py-20 px-6 bg-white border-t border-primary/10 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
                {isFrench ? "Comparatif & Repères Décisionnels" : "Structured Comparison & Benchmarks"}
              </span>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-3">
                {data.comparisonTable.title}
              </h2>
              {data.comparisonTable.subtitle && (
                <p className="text-sm md:text-base text-primary/75 font-light leading-relaxed">
                  {data.comparisonTable.subtitle}
                </p>
              )}
            </div>

            <p className="md:hidden text-xs text-primary/60 mb-2 font-medium">
              {isFrench ? "← Faites glisser horizontalement pour comparer toutes les colonnes →" : "← Swipe horizontally to compare all columns →"}
            </p>
            <div className="overflow-x-auto rounded-2xl border border-primary/10 bg-bg shadow-xs">
              <table className="w-full text-left border-collapse tabular-nums min-w-[680px]">
                <thead>
                  <tr className="bg-primary text-white text-xs uppercase tracking-wider">
                    {data.comparisonTable.headers.map((header, idx) => (
                      <th key={idx} className="py-4 px-5 font-semibold border-b border-white/10">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/10 text-sm">
                  {data.comparisonTable.rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-bg-alt/40'}>
                      {row.map((cell, cellIdx) => (
                        <td
                          key={cellIdx}
                          className={`py-4 px-5 align-top leading-relaxed ${
                            cellIdx === 0 ? 'font-semibold text-primary' : 'text-primary/80 font-light'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {data.comparisonTable.footnote && (
              <p className="mt-4 text-xs text-primary/65 font-light leading-relaxed">
                {data.comparisonTable.footnote}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Buyer Evaluation Criteria & Pitfalls Section */}
      {data.evaluationCriteria && (
        <section className="py-16 md:py-20 px-6 bg-bg border-t border-primary/10">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
                {isFrench ? "Critères d'Évaluation & Points de Vigilance" : "Objective Selection Criteria & Common Pitfalls"}
              </span>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-3">
                {data.evaluationCriteria.title}
              </h2>
              <p className="text-sm md:text-base text-primary/75 font-light leading-relaxed">
                {data.evaluationCriteria.intro}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {data.evaluationCriteria.items.map((item, idx) => (
                <div key={idx} className="bg-white border border-primary/10 rounded-2xl p-6 shadow-xs">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-accent/10 text-accent font-serif font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 tabular-nums">
                      {idx + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-serif font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-sm text-primary/75 font-light leading-relaxed m-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works & Pricing Grid */}
      <section className="bg-bg-alt py-16 md:py-24 px-6 border-y border-primary/10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Steps */}
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-accent/15">
              {isFrench ? "Méthodologie" : "Our Process"}
            </span>
            <h2 className="text-3xl font-serif font-bold mb-8 text-primary">{data.processTitle}</h2>
            <div className="space-y-8 relative before:absolute before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-primary/10">
              {data.processSteps.map((step) => (
                <div key={step.step} className="flex gap-6 relative z-10 bg-bg-alt">
                  <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold font-serif shrink-0 shadow-sm tabular-nums">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-primary mb-1">{step.title}</h3>
                    <p className="text-sm text-primary/80 font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Box */}
          <div className="bg-primary text-white p-8 md:p-12 rounded-3xl shadow-xl border border-white/10 flex flex-col items-center text-center relative overflow-hidden lg:sticky lg:top-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_60%)]"></div>
            
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-accent-soft text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
              {data.investmentTitle}
            </span>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white relative z-10 tabular-nums">{data.investmentPrice}</h3>
            <p className="text-white/80 text-sm font-light leading-relaxed max-w-sm mb-8 relative z-10">
              {data.investmentDesc}
            </p>
            
            <Link 
              to={isFrench ? "/contact" : "/en/contact"} 
              className="w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-bold shadow-md hover:shadow-lg transition-all relative z-10 flex items-center justify-center gap-2"
            >
              <span>{isFrench ? "Demander un Devis Détaillé" : "Request a Detailed Proposal"}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* E-E-A-T Expert Authority Box */}
      <section className="max-w-4xl mx-auto my-12 px-6">
        <div className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xs">
          <img 
            src="/images/youssef-avatar.webp" 
            alt={isFrench ? "Portrait de J.Mellal, Consultant SEO et Stratège Marketing Digital Hôtelier au Maroc" : "Portrait of J.Mellal, Hospitality SEO Consultant and Digital Growth Strategist in Morocco"} 
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
              {isFrench ? "J.Mellal — Consultant SEO & Stratège Acquisition Hôtelière" : "J.Mellal — Hospitality SEO & Direct-Booking Strategist"}
            </h3>
            <p className="text-sm text-primary/80 leading-relaxed m-0 font-light">
              {isFrench 
                ? "Fondateur d'Urunk Agency à Casablanca. Spécialiste de l'ingénierie web hôtelière, de l'intégration de moteurs de réservation (PMS), du référencement local Google Maps et du pilotage Google Ads & Meta Ads pour hôtels et riads au Maroc."
                : "Founder of Urunk Agency in Casablanca. Specializing in hospitality web architecture, PMS booking engine integration, Google Maps local SEO, and ROI-tracked Google Ads & Meta Ads for hotels and riads across Morocco."}
            </p>
          </div>
        </div>
      </section>

      <RelatedExpertiseSection
        kicker={isFrench ? "Déploiements par Ville & Secteur" : "City & Sector Specializations"}
        title={
          isFrench
            ? "Déclinaisons Régionales & Sectorielles au Maroc"
            : "Regional & Industry Applications Across Morocco"
        }
        subtitle={
          isFrench
            ? "Consultez nos stratégies dédiées par destination (Marrakech, Casablanca, Agadir, Rabat) et par typologie d'établissement pour évaluer les indicateurs propres à votre marché."
            : "Review destination-specific benchmarks across Marrakech, Casablanca, Agadir, and Rabat along with vertical playbooks tailored to your property or business model."
        }
        links={serviceExpertiseLinks}
        isFrench={isFrench}
        bgVariant="alt"
      />

      {/* Contextual Internal Links Hub (Services, Pricing, Editorial Guides) */}
      {data.relatedLinks && data.relatedLinks.length > 0 && (
        <section className="py-12 md:py-16 px-6 max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
              {isFrench ? "Maillage & Ressources Associées" : "Related Services & Guides"}
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
              {isFrench ? "Approfondir Votre Stratégie Digitale Hôtelière" : "Explore Related Hospitality Solutions & Guides"}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.relatedLinks.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className="group p-6 rounded-2xl border border-primary/10 bg-white hover:border-accent/40 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-serif font-bold text-primary group-hover:text-accent transition-colors mb-2 flex items-center justify-between gap-2">
                    <span>{item.label}</span>
                    <ArrowRight size={16} className="text-accent shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </h3>
                  <p className="text-xs md:text-sm text-primary/70 font-light leading-relaxed m-0">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Interactive Accordion FAQs Section */}
      <section className="py-8 md:py-16 px-6 max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-accent/15 flex mx-auto w-max">
          FAQ
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-primary">
          {isFrench ? "Questions Fréquemment Posées" : "Frequently Asked Questions"}
        </h2>

        <div className="space-y-4">
          {data.faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border border-primary/10 bg-white rounded-xl overflow-hidden transition-all shadow-sm"
              id={`faq-item-${i}`}
            >
              <button
                className="w-full py-5 px-6 flex justify-between items-center text-left hover:bg-bg-alt/40 transition-colors"
                onClick={() => toggleFaq(i)}
                aria-expanded={openFaqIndex === i}
              >
                <span className="font-serif font-bold text-primary text-base pr-4">{faq.q}</span>
                <ChevronDown 
                  size={18} 
                  className={`text-accent shrink-0 transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFaqIndex === i ? 'max-h-[800px] opacity-100 border-t border-primary/5' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 text-sm text-primary/80 font-light leading-relaxed bg-bg-alt/10">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Credible External References Strip */}
      {data.externalReferences && data.externalReferences.length > 0 && (
        <section className="pb-14 px-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl border border-primary/10 bg-bg-alt/50">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary/70 mb-3">
              {isFrench ? "Documentation Officielle & Standards de Référence" : "Official Documentation & Industry Standards"}
            </h3>
            <ul className="space-y-2 text-xs md:text-sm">
              {data.externalReferences.map((ref, idx) => (
                <li key={idx} className="flex flex-wrap items-center gap-2 text-primary/80">
                  <ExternalLink size={14} className="text-accent shrink-0" />
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:text-accent underline underline-offset-2 transition-colors"
                  >
                    {ref.label}
                  </a>
                  <span className="text-primary/55">— {ref.source}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Trust & Local Links Footer Section */}
      <section className="bg-primary text-white py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/60">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <span className="flex items-center gap-1"><Check size={12} className="text-accent" /> {isFrench ? "Propriété 100 % Client" : "100% Client Asset Ownership"}</span>
            <span className="flex items-center gap-1"><Check size={12} className="text-accent" /> {isFrench ? "Préavis 15 Jours (Abonnements)" : "15-Day Notice on Retainers"}</span>
            <span className="flex items-center gap-1"><Check size={12} className="text-accent" /> {isFrench ? "Tarifs Fixes Sans Commission" : "Flat Fees, Zero Booking Commission"}</span>
          </div>
          <div>
            <Link to={isFrench ? "/tarifs" : "/en/pricing"} className="hover:text-accent transition-colors font-medium">
              {isFrench ? "Consulter Notre Grille Tarifaire" : "View Full Pricing Schedule"} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
