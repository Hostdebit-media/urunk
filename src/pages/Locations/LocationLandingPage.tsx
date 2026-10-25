import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { locationsData } from '../../data/locationsData';
import { getMatrixLinksForLocation } from '../../data/matrixRelations';
import SEO from '../../components/SEO';
import Callout from '../../components/Callout';
import RelatedExpertiseSection from '../../components/RelatedExpertiseSection';
import { MapPin, Check, ArrowRight, ChevronDown, Award, ExternalLink, Globe } from 'lucide-react';

interface LocationLandingPageProps {
  locationKey: string;
}

export default function LocationLandingPage({ locationKey }: LocationLandingPageProps) {
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');
  const lang = isFrench ? 'fr' : 'en';

  const dataMap = locationsData[locationKey];
  if (!dataMap) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Location Hub Not Found</h1>
        <p className="mt-4">The requested location page could not be loaded.</p>
        <Link to="/en" className="text-accent underline mt-4 inline-block">Return to Home</Link>
      </div>
    );
  }

  const data = dataMap[lang];
  const regionalExpertiseLinks = getMatrixLinksForLocation(locationKey, lang);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const breadcrumbItems = [
    { label: isFrench ? "Accueil" : "Home", path: isFrench ? "/" : "/en" },
    { label: isFrench ? "Zones Géographiques" : "Locations", path: isFrench ? "/zones/maroc" : "/en/locations/morocco" },
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
            <MapPin size={14} /> {isFrench ? "Pôle Régional" : "Geographic Hub"}
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
                ? `déploie une présence opérationnelle et stratégique dans ce pôle économique marocain. Nos spécialistes accompagnent les entreprises, hôtels et riads locaux avec des solutions de création web sur-mesure (dès 12 000 MAD) et des campagnes d'acquisition locale Google Maps & Google Ads (dès 4 000 MAD/mois) pour capturer les flux de clients qualifiés sans intermédiaire.`
                : `maintains an active operational and strategic presence in this premier Moroccan economic hub. We equip local businesses, resorts, and riads with custom React/WordPress web engineering (from 12,000 MAD) and high-intent local SEO & Google Ads management (from 4,000 MAD/mo).`}
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
              <span>{isFrench ? "Lancer un Projet dans cette Zone" : "Start a Local Project"}</span>
              <ArrowRight size={18} />
            </Link>
            <Link 
              to={isFrench ? "/tarifs" : "/en/pricing"} 
              className="border border-white/20 hover:border-accent text-white px-8 py-4 rounded-xl font-medium transition-all inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm"
            >
              <span>{isFrench ? "Consulter Nos Tarifs" : "View Agency Pricing"}</span>
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Regional Market Overview */}
      <section className="bg-bg-alt py-16 md:py-24 px-6 border-y border-primary/10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-accent/15">
              {isFrench ? "Analyse Régionale" : "Regional Focus"}
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
              <Award size={20} className="text-accent" /> {data.marketHighlightsTitle}
            </h3>
            <ul className="space-y-4">
              {data.marketHighlights.map((highlight, index) => (
                <li key={index} className="flex gap-3 text-sm text-primary/85 leading-relaxed font-light">
                  <Check size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Specialized Services for Location */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-3 border border-accent/15">
            {isFrench ? "Services Locaux" : "Location Services"}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary">
            {data.localServicesTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {data.localServices.map((item, i) => (
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
                {isFrench ? "Découvrir le Service" : "Explore Service"} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <RelatedExpertiseSection
        kicker={isFrench ? "Spécialisations Locales Dédiées" : "Dedicated Regional Specializations"}
        title={
          isFrench
            ? "Pôles d'Expertise Métier & Acquisition dans cette Zone"
            : "Specialized Search, Web & Paid Acquisition Playbooks"
        }
        subtitle={
          isFrench
            ? "Accédez directement à nos feuilles de route techniques adaptées aux hôtels, riads et entreprises opérant sur ce marché régional."
            : "Access dedicated technical roadmaps tailored for hotels, boutique riads, and enterprises competing in this regional market."
        }
        links={regionalExpertiseLinks}
        isFrench={isFrench}
        bgVariant="alt"
      />

      {/* Why Choose a Local Partner Section */}
      {data.whyPartnerTitle && data.whyPartnerText && (
        <section className="bg-white py-16 md:py-24 px-6 border-t border-b border-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-accent/15">
              {isFrench ? "Expertise Terrain" : "Local Expertise"}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary leading-tight">
              {data.whyPartnerTitle}
            </h2>
            <p className="text-primary/80 font-light leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              {data.whyPartnerText}
            </p>
          </div>
        </section>
      )}

      {/* Other Geographic Hubs Links */}
      <section className="bg-bg-alt py-16 px-6 border-b border-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-3 border border-accent/15">
              <Globe size={14} /> {isFrench ? "Réseau Régional" : "Regional Network"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
              {data.nearbyLocationsTitle}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {data.nearbyLocations.map((hub, idx) => (
              <Link 
                key={idx} 
                to={hub.link} 
                className="p-6 bg-white rounded-xl border border-primary/10 hover:border-accent transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-serif font-bold text-lg text-primary group-hover:text-accent transition-colors">{hub.title}</h4>
                  <ArrowRight size={16} className="text-primary/30 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs text-primary/70 font-light leading-relaxed">{hub.desc}</p>
              </Link>
            ))}
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
              {isFrench ? "Expertise Régionale & Direction Stratégique" : "Regional Strategic Direction"}
            </div>
            <h3 className="text-xl font-serif font-bold text-primary mb-2">
              {isFrench ? "J.Mellal : Consultant SEO & Stratège Marketing Digital Propulsé par l'IA" : "J.Mellal : SEO Consultant & AI-Powered Digital Marketing Strategist"}
            </h3>
            <p className="text-sm text-primary/80 leading-relaxed m-0 font-light">
              {isFrench 
                ? "Consultant SEO et stratège en marketing digital propulsé par l'IA, accompagnant la croissance en ligne des entreprises, riads et groupes hôteliers au Maroc (Casablanca, Marrakech, Rabat et Agadir) sur Google, Google Maps et Google Ads."
                : "SEO Consultant, AI-Powered Digital Marketing Strategist, and helping businesses grow online in Morocco across Casablanca, Marrakech, Rabat, and Agadir through local search dominance, high-converting websites, and profitable ad campaigns."}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-8 md:py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-primary">
          {isFrench ? "Questions sur cette Zone" : "Regional FAQ"}
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

      {/* Dynamic Bottom CTA Section with City Name */}
      <section className="bg-primary text-white py-16 md:py-24 px-6 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6 border border-accent/15">
            {isFrench ? "Discutons de Votre Projet" : "Let's Connect"}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 tracking-tight leading-tight">
            {isFrench 
              ? `Prêt à Propulser Votre Activité à ${locationKey === 'morocco' ? 'travers le Maroc' : data.heroTitle.split(" ").slice(-1)[0]} ?`
              : `Ready to Scale Your Business in ${locationKey === 'morocco' ? 'Morocco' : data.heroTitle.split(" ").slice(-1)[0]}?`
            }
          </h2>
          <p className="text-white/80 text-base md:text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            {isFrench
              ? `Urunk conçoit des solutions d'ingénierie web et de marketing digital de précision adaptées aux spécificités économiques de la région de ${locationKey === 'morocco' ? 'Maroc' : data.heroTitle.split(" ").slice(-1)[0]}. Collaborez avec notre équipe d'experts locaux.`
              : `Urunk designs high-performance web development and precision search engine optimization tailored to the local market realities of ${locationKey === 'morocco' ? 'Morocco' : data.heroTitle.split(" ").slice(-1)[0]}. Contact our expert team today.`
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to={isFrench ? "/contact" : "/en/contact"} 
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
            >
              <span>{isFrench ? `Contacter l'Agence à ${locationKey === 'morocco' ? 'Maroc' : data.heroTitle.split(" ").slice(-1)[0]}` : `Contact the Agency in ${locationKey === 'morocco' ? 'Morocco' : data.heroTitle.split(" ").slice(-1)[0]}`}</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
