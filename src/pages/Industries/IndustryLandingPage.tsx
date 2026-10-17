import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { industriesData } from '../../data/industriesData';
import SEO from '../../components/SEO';
import Callout from '../../components/Callout';
import { Sparkles, Check, ArrowRight, ChevronDown, Award, ExternalLink, Building2 } from 'lucide-react';

interface IndustryLandingPageProps {
  industryKey: string;
}

export default function IndustryLandingPage({ industryKey }: IndustryLandingPageProps) {
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');
  const lang = isFrench ? 'fr' : 'en';

  const dataMap = industriesData[industryKey];
  if (!dataMap) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Industry Sector Not Found</h1>
        <p className="mt-4">The requested industry sector could not be loaded.</p>
        <Link to="/en" className="text-accent underline mt-4 inline-block">Return to Home</Link>
      </div>
    );
  }

  const data = dataMap[lang];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const breadcrumbItems = [
    { label: isFrench ? "Accueil" : "Home", path: isFrench ? "/" : "/en" },
    { label: isFrench ? "Secteurs" : "Industries", path: isFrench ? "/services" : "/en/services" },
    { label: data.heroTitle.split(" ")[0] + " " + (data.heroTitle.split(" ")[1] || ""), path: location.pathname }
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
        schema={[breadcrumbSchema, faqSchema]}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            <Building2 size={14} /> {isFrench ? "Expertise Sectorielle" : "Industry Expertise"}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.1] mb-6">
            {data.heroTitle}
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed font-light">
            {data.heroSub}
          </p>

          {/* AEO / GEO Information-Dense Summary Block */}
          <div className="max-w-3xl mx-auto mb-8 bg-white/10 border-l-4 border-accent p-6 rounded-r-2xl backdrop-blur-xs text-left">
            <p className="text-sm md:text-base leading-relaxed text-white/95 m-0 font-normal">
              <strong>Urunk Agency</strong> {isFrench 
                ? "déploie des architectures numériques de pointe pour les acteurs de ce secteur au Maroc (Casablanca, Marrakech, Rabat, Agadir). Nos équipes conçoivent des sites web ultra-rapides (< 1s) synchronisés avec vos systèmes métiers et pilotent des campagnes Google Ads et SEO d'autorité générant plus de 40 % de requêtes directes sans commission d'intermédiaire. Forfaits création dès 12 000 MAD, gestion marketing dès 4 000 MAD/mois."
                : "engineers high-performance web systems and direct-booking channels for this sector across Morocco and worldwide. We build speed-optimized platforms (< 1s) seamlessly integrated with industry booking engines, driving a 40%+ increase in direct revenue and bypassing high OTA commissions. Web design starts at 12,000 MAD, performance ad management at 4,000 MAD/mo."}
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-10 text-left">
            <Callout variant="dark">
              <strong className="text-yellow-400 font-semibold">{data.calloutTitle}:</strong> {data.calloutBody}
            </Callout>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to={isFrench ? "/contact" : "/en/contact"} 
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
            >
              <span>{isFrench ? "Demander un Audit Gratuit" : "Discuss Your Industry Growth"}</span>
              <ArrowRight size={18} />
            </Link>
            <Link 
              to={isFrench ? "/realisations" : "/en/work"} 
              className="border border-white/20 hover:border-accent text-white px-8 py-4 rounded-xl font-medium transition-all inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm"
            >
              <span>{isFrench ? "Consulter Nos Réalisations Clients" : "View Strategy Examples"}</span>
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Overview & Bottlenecks */}
      <section className="bg-bg-alt py-16 md:py-24 px-6 border-y border-primary/10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-accent/15">
              {isFrench ? "Analyse du Marché" : "Market Overview"}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary leading-tight">
              {data.overviewTitle}
            </h2>
            <p className="text-primary/80 mb-4 font-light leading-relaxed">
              {data.overviewText1}
            </p>
            <p className="text-primary/80 font-light leading-relaxed">
              {data.overviewText2}
            </p>
          </div>

          <div className="flex-1 w-full bg-white p-8 rounded-2xl border border-primary/10 shadow-sm">
            <h3 className="text-lg font-serif font-bold mb-6 text-primary flex items-center gap-2 border-b border-primary/5 pb-3">
              <Award size={20} className="text-accent" /> {data.keyChallengesTitle}
            </h3>
            <ul className="space-y-4">
              {data.keyChallenges.map((challenge, index) => (
                <li key={index} className="flex gap-3 text-sm text-primary/85 leading-relaxed font-light">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Connected Specialized Services */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-3 border border-accent/15">
            {isFrench ? "Services Connectés" : "Targeted Solutions"}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary">
            {data.solutionsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {data.solutions.map((item, i) => (
            <Link 
              key={i} 
              to={item.link} 
              className="p-6 md:p-8 rounded-2xl border border-primary/10 bg-white hover:border-accent hover:shadow-md transition-all group flex flex-col justify-between w-full"
            >
              <div className="w-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent font-serif font-bold shrink-0">
                    0{i + 1}
                  </span>
                  <ArrowRight size={18} className="text-primary/30 group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-primary group-hover:text-accent transition-colors break-words">
                  {item.title}
                </h3>
                <p className="text-sm text-primary/75 font-light leading-relaxed break-words">
                  {item.desc}
                </p>
              </div>
              <span className="mt-6 text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-1">
                {isFrench ? "Explorer la Solution" : "Explore Service"} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Case Study Link */}
      <section className="bg-primary text-white py-16 px-6 border-y border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
              <Sparkles size={14} /> {data.caseStudyTitle}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              {data.caseStudyName}
            </h3>
            <p className="text-yellow-400 font-bold text-lg mb-4">{data.caseStudyMetric}</p>
            <p className="text-white/80 text-sm font-light leading-relaxed">
              {data.caseStudyDesc}
            </p>
          </div>

          <Link 
            to={isFrench ? `/realisations/${data.caseStudySlug}` : `/en/work/${data.caseStudySlug}`} 
            className="shrink-0 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
          >
            <span>{isFrench ? "Consulter l'Étude Complète" : "Explore Full Case Study"}</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* E-E-A-T Expert Authority Box */}
      <section className="max-w-4xl mx-auto my-16 px-6">
        <div className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xs">
          <img 
            src="/images/youssef-avatar.webp" 
            alt="Portrait de Youssef, Stratège en Acquisition Digitale et Fondateur d'Urunk Agency" 
            width={88} 
            height={88} 
            loading="lazy" 
            className="w-20 h-20 rounded-full object-cover border-2 border-accent shrink-0"
          />
          <div>
            <div className="text-xs font-bold text-accent uppercase tracking-wider mb-1">
              {isFrench ? "Direction Conseil & Stratégie Sectorielle" : "Sector Strategic Direction"}
            </div>
            <h3 className="text-xl font-serif font-bold text-primary mb-2">
              {isFrench ? "Expertise Dirigée par Youssef" : "Strategic Direction by Youssef"}
            </h3>
            <p className="text-sm text-primary/80 leading-relaxed m-0 font-light">
              {isFrench 
                ? "Fondateur d'Urunk Agency et consultant en croissance digitale depuis plus de 8 ans au Maroc. Spécialiste de la rentabilité hôtelière, de la désintermédiation OTA et du positionnement de marque à Casablanca et Marrakech."
                : "Founder of Urunk Agency and senior digital growth consultant with over 8 years of operational experience across Morocco. Specializing in direct hospitality acquisition, OTA disintermediation, and authority SEO in Casablanca and Marrakech."}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-8 md:py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-primary">
          {isFrench ? "Questions Fréquemment Posées" : "Industry FAQ"}
        </h2>

        <div className="space-y-4">
          {data.faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border border-primary/10 bg-white rounded-xl overflow-hidden transition-all shadow-sm"
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
    </div>
  );
}
