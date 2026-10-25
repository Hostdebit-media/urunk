import React, { useState } from 'react';
import { servicesData } from '../../data/servicesData';
import { getMatrixLinksForService } from '../../data/matrixRelations';
import SEO from '../../components/SEO';
import Callout from '../../components/Callout';
import RelatedExpertiseSection from '../../components/RelatedExpertiseSection';
import { Check, ArrowRight, ChevronDown, Sparkles, Smartphone, Award, Calendar, ExternalLink } from 'lucide-react';
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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
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
    "offers": {
      "@type": "Offer",
      "price": data.investmentPrice.replace(/[^0-9]/g, ""),
      "priceCurrency": "MAD"
    }
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
      
      {/* Hero & AI Answer / Summary Block */}
      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent-soft text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            <Sparkles size={14} /> {isFrench ? "Service de Croissance Tourisme" : "Tourism Growth Solution"}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.1] mb-6">
            {data.heroTitle}
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed font-light">
            {data.heroSub}
          </p>

          {/* AEO / GEO Information-Dense Summary Block */}
          <div className="max-w-3xl mx-auto mb-8 bg-white/10 border border-white/15 p-6 rounded-2xl backdrop-blur-xs text-left">
            <p className="text-sm md:text-base leading-relaxed text-white/95 m-0 font-normal">
              <strong>Urunk Agency</strong> {isFrench
                ? `délivre ce service spécialisé avec une garantie de performance technique et de retour sur investissement. Basée à Casablanca et Marrakech, notre agence applique les standards internationaux (Core Web Vitals, Google Ads accrédité, balisage Schema.org) pour décupler votre acquisition directe au Maroc et à l'international. Tarif transparent : ${data.investmentPrice}.`
                : `delivers this specialized service with guaranteed technical velocity and measurable business ROI. Operating from Casablanca and Marrakech, our engineers apply enterprise standards (Core Web Vitals, Google Ads certified, rich Schema.org) to scale your direct bookings. Transparent pricing: ${data.investmentPrice}.`}
            </p>
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
              <span>{isFrench ? "Obtenir un Devis Gratuit" : "Get a Free Custom Quote"}</span>
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
              {isFrench ? "Le Problème" : "The Core Bottleneck"}
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
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent mb-6 font-serif font-bold">
                0{i + 1}
              </span>
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">{feature.title}</h3>
              <p className="text-sm text-primary/75 font-light leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

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
                  <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold font-serif shrink-0 shadow-sm">
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
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white relative z-10">{data.investmentPrice}</h3>
            <p className="text-white/80 text-sm font-light leading-relaxed max-w-sm mb-8 relative z-10">
              {data.investmentDesc}
            </p>
            
            <Link 
              to={isFrench ? "/contact" : "/en/contact"} 
              className="w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-bold shadow-md hover:shadow-lg transition-all relative z-10 flex items-center justify-center gap-2"
            >
              <span>{isFrench ? "Lancer mon Audit Gratuit" : "Request My Free Estimate"}</span>
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
                ? "Consultant SEO et stratège en marketing digital propulsé par l'IA, accompagnant la croissance en ligne des entreprises, hôtels et riads au Maroc. Spécialiste du référencement naturel, de Google Ads et de l'optimisation des réservations et conversions directes."
                : "SEO Consultant, AI-Powered Digital Marketing Strategist, and helping businesses grow online in Morocco. Specializing in search engine optimization, Google Ads, and full-funnel direct-booking and conversion growth across Morocco."}
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
                  openFaqIndex === i ? 'max-h-96 opacity-100 border-t border-primary/5' : 'max-h-0 opacity-0'
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

      {/* Trust & Local Links Footer Section */}
      <section className="bg-primary text-white py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/60">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <span className="flex items-center gap-1"><Check size={12} className="text-accent" /> {isFrench ? "Paiement 100% Sécurisé" : "100% Secure Payment"}</span>
            <span className="flex items-center gap-1"><Check size={12} className="text-accent" /> {isFrench ? "Accompagnement Dédié" : "Dedicated Local Experts"}</span>
            <span className="flex items-center gap-1"><Check size={12} className="text-accent" /> {isFrench ? "Sans Frais Cachés" : "Transparent Fixed Invoicing"}</span>
          </div>
          <div>
            <Link to={isFrench ? "/tarifs" : "/en/pricing"} className="hover:text-accent transition-colors font-medium">
              {isFrench ? "Consulter Nos Tarifs Généraux" : "View Global Price Index"} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
