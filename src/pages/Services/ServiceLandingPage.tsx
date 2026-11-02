import React from 'react';
import { servicesData, extractNumericMadPrice } from '../../data/servicesData';
import { getMatrixLinksForService } from '../../data/matrixRelations';
import SEO from '../../components/SEO';
import { buildServiceProviderSchema } from '../../components/SEO/StructuredData';
import { routeMappings } from '../../components/Breadcrumbs';
import Callout from '../../components/Callout';
import RelatedExpertiseSection from '../../components/RelatedExpertiseSection';
import Button from '../../components/ui/Button';
import Section from '../../components/ui/Section';
import Hairline from '../../components/ui/Hairline';
import { ChevronDown } from 'lucide-react';
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
      <Section tone="light">
        <div className="max-w-[68ch]">
          <h1>Service Not Found</h1>
          <p className="mt-4">The service configuration could not be loaded.</p>
          <p className="mt-6">
            <Link to="/en">Return to Home</Link>
          </p>
        </div>
      </Section>
    );
  }

  const data = dataMap[lang];
  const serviceExpertiseLinks = getMatrixLinksForService(serviceKey, lang);

  const numericPrice = extractNumericMadPrice(data.investmentPrice);
  const isMonthlyPrice = /\/\s*(?:mo|mois)|par mois|per month/i.test(data.investmentPrice);
  const cleanPath = location.pathname.endsWith('/') && location.pathname.length > 1
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const mappedServiceLabel = routeMappings[serviceKey]
    ? (isFrench ? routeMappings[serviceKey].fr : routeMappings[serviceKey].en)
    : data.heroTitle;

  const schemaMarkup: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://urunk.com${cleanPath}#service`,
    "name": data.heroTitle,
    "serviceType": mappedServiceLabel,
    "description": data.description,
    "provider": buildServiceProviderSchema(),
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

      {/* Editorial Hero & Opening Answer Block */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-4xl">
          <p className="text-sm text-bg-light/75 mb-4">
            {isFrench
              ? 'Solution digitale hôtellerie et tourisme'
              : 'Hospitality and tourism digital infrastructure'}
          </p>

          <h1 className="font-serif text-bg-light mb-6 text-balance">
            {data.heroTitle}
          </h1>

          <p className="text-lg md:text-xl text-bg-light/85 mb-10 max-w-[65ch] leading-relaxed">
            {data.heroSub}
          </p>

          <div className="max-w-3xl mb-8 border border-white/20 p-6 md:p-8 rounded-sm">
            {data.directAnswer ? (
              <div className="space-y-4">
                <p className="text-sm font-semibold text-bg-light m-0">
                  {data.directAnswer.question}
                </p>
                <p className="text-base leading-relaxed text-bg-light/90 m-0">
                  {data.directAnswer.answer}
                </p>
                {data.directAnswer.highlights && data.directAnswer.highlights.length > 0 && (
                  <ul className="grid sm:grid-cols-2 gap-3 pt-3 border-t border-white/15 text-sm text-bg-light/85">
                    {data.directAnswer.highlights.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <p className="text-base leading-relaxed text-bg-light/90 m-0">
                <strong className="text-bg-light font-semibold">Urunk Agency</strong>{' '}
                {isFrench
                  ? `accompagne les hôtels indépendants, riads, maisons d'hôtes et entreprises au Maroc depuis Casablanca (Maarif) et Marrakech. Notre approche repose sur des standards techniques mesurables (Core Web Vitals, suivi des conversions GA4/GTM, données structurées Schema.org et propriété à 100 % de vos actifs). Tarif affiché : ${data.investmentPrice}.`
                  : `supports independent hotels, riads, guesthouses, and Moroccan businesses from Casablanca (Maarif) and Marrakech. Our work focuses on measurable technical fundamentals (Core Web Vitals, GA4/GTM conversion tracking, Schema.org structured data, and 100% client asset ownership). Published pricing: ${data.investmentPrice}.`}
              </p>
            )}
          </div>

          <div className="max-w-3xl mb-10">
            <Callout variant="dark">
              <strong className="text-bg-light font-semibold">{data.calloutTitle}:</strong>{' '}
              {data.calloutBody}
            </Callout>
          </div>

          <div>
            <Button href={isFrench ? '/contact' : '/en/contact'} variant="primary">
              {isFrench ? 'Demander un diagnostic personnalisé' : 'Request a tailored assessment'}
            </Button>
          </div>
        </div>
      </Section>

      {/* Problem & Operational Signs */}
      <Section tone="alt">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm text-accent font-medium mb-3">
              {isFrench ? 'Diagnostic terrain' : 'Operational context'}
            </p>
            <h2 className="font-serif text-primary mb-6 text-balance">
              {data.problemTitle}
            </h2>
            <div className="space-y-4 max-w-[65ch] text-primary/85 leading-relaxed">
              <p>{data.problemText1}</p>
              <p>{data.problemText2}</p>
            </div>
          </div>

          <div className="lg:col-span-5 border border-border-subtle bg-bg-card p-8 rounded-sm">
            <h3 className="font-serif text-primary pb-4 mb-6 border-b border-border-subtle">
              {data.signsTitle}
            </h3>
            <div className="divide-y divide-border-subtle">
              {data.signs.map((sign, index) => (
                <p key={index} className="py-3.5 first:pt-0 last:pb-0 text-sm text-primary/85 leading-relaxed m-0">
                  {sign}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Solutions / Features as Editorial Rows */}
      <Section tone="light">
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-primary text-balance">
            {data.featuresTitle}
          </h2>
        </div>

        <div>
          <Hairline />
          {data.features.map((feature, i) => (
            <React.Fragment key={i}>
              <div className="py-8 md:py-10 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">
                  0{i + 1}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-serif text-primary m-0">
                    {feature.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[65ch]">
                    {feature.desc}
                  </p>
                </div>
              </div>
              <Hairline />
            </React.Fragment>
          ))}
        </div>
      </Section>

      {/* Structured Comparison Table */}
      {data.comparisonTable && (
        <Section tone="alt">
          <div className="max-w-3xl mb-10">
            <p className="text-sm text-accent font-medium mb-2">
              {isFrench ? 'Comparatif et repères décisionnels' : 'Structured comparison and benchmarks'}
            </p>
            <h2 className="font-serif text-primary mb-3 text-balance">
              {data.comparisonTable.title}
            </h2>
            {data.comparisonTable.subtitle && (
              <p className="text-primary/80 leading-relaxed max-w-[65ch]">
                {data.comparisonTable.subtitle}
              </p>
            )}
          </div>

          <p className="md:hidden text-xs text-primary/70 mb-2">
            {isFrench
              ? 'Faites glisser horizontalement pour comparer toutes les colonnes'
              : 'Swipe horizontally to compare all columns'}
          </p>
          <div className="overflow-x-auto border border-border-subtle rounded-sm bg-bg-card">
            <table className="w-full text-left border-collapse tabular-nums min-w-[680px]">
              <thead>
                <tr className="bg-primary text-bg-light text-sm">
                  {data.comparisonTable.headers.map((header, idx) => (
                    <th key={idx} className="py-4 px-5 font-medium border-b border-white/15">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle text-sm">
                {data.comparisonTable.rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-bg-card' : 'bg-bg-light'}>
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className={`py-4 px-5 align-top leading-relaxed ${
                          cellIdx === 0 ? 'font-semibold text-primary' : 'text-primary/85'
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
            <p className="mt-4 text-sm text-primary/70 leading-relaxed max-w-[68ch]">
              {data.comparisonTable.footnote}
            </p>
          )}
        </Section>
      )}

      {/* Buyer Evaluation Criteria */}
      {data.evaluationCriteria && (
        <Section tone="light">
          <div className="max-w-3xl mb-12">
            <p className="text-sm text-accent font-medium mb-2">
              {isFrench ? "Critères d'évaluation et points de vigilance" : 'Objective selection criteria and common pitfalls'}
            </p>
            <h2 className="font-serif text-primary mb-4 text-balance">
              {data.evaluationCriteria.title}
            </h2>
            <p className="text-primary/80 leading-relaxed max-w-[65ch]">
              {data.evaluationCriteria.intro}
            </p>
          </div>

          <div>
            <Hairline />
            {data.evaluationCriteria.items.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="py-7 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                  <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">
                    0{idx + 1}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-primary m-0">{item.title}</h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-primary/80 leading-relaxed m-0 max-w-[65ch]">{item.desc}</p>
                  </div>
                </div>
                <Hairline />
              </React.Fragment>
            ))}
          </div>
        </Section>
      )}

      {/* Numbered Process & Investment */}
      <Section tone="alt">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm text-accent font-medium mb-2">
              {isFrench ? 'Méthodologie' : 'Our process'}
            </p>
            <h2 className="font-serif text-primary mb-8 text-balance">
              {data.processTitle}
            </h2>
            <div>
              <Hairline />
              {data.processSteps.map((step) => (
                <React.Fragment key={step.step}>
                  <div className="py-6 flex gap-6 items-baseline">
                    <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-serif text-primary mb-2">{step.title}</h3>
                      <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">{step.desc}</p>
                    </div>
                  </div>
                  <Hairline />
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-primary text-bg-light p-8 md:p-10 rounded-sm lg:sticky lg:top-28">
            <p className="text-sm text-bg-light/75 mb-3">
              {data.investmentTitle}
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-bg-light mb-4 tabular-nums">
              {data.investmentPrice}
            </h3>
            <p className="text-bg-light/85 leading-relaxed mb-8">
              {data.investmentDesc}
            </p>
            <Button
              href={isFrench ? '/contact' : '/en/contact'}
              variant="primary"
              className="w-full"
            >
              {isFrench ? 'Demander un devis détaillé' : 'Request a detailed proposal'}
            </Button>
          </div>
        </div>
      </Section>

      {/* E-E-A-T Expert Authority Block */}
      <Section tone="light">
        <div className="max-w-3xl border-y border-border-subtle py-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <img
            src="/images/youssef-avatar.webp"
            alt={
              isFrench
                ? 'Portrait de J.Mellal, Consultant SEO et Stratège Marketing Digital Hôtelier au Maroc'
                : 'Portrait of J.Mellal, Hospitality SEO Consultant and Digital Growth Strategist in Morocco'
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
                ? 'J.Mellal — Consultant SEO & Stratège Acquisition Hôtelière'
                : 'J.Mellal — Hospitality SEO & Direct-Booking Strategist'}
            </h3>
            <p className="text-sm text-primary/80 leading-relaxed m-0">
              {isFrench
                ? "Fondateur d'Urunk Agency à Casablanca. Spécialiste de l'ingénierie web hôtelière, de l'intégration de moteurs de réservation (PMS), du référencement local Google Maps et du pilotage Google Ads & Meta Ads pour hôtels et riads au Maroc."
                : 'Founder of Urunk Agency in Casablanca. Specializing in hospitality web architecture, PMS booking engine integration, Google Maps local SEO, and ROI-tracked Google Ads & Meta Ads for hotels and riads across Morocco.'}
            </p>
          </div>
        </div>
      </Section>

      <RelatedExpertiseSection
        kicker={isFrench ? 'Déploiements par ville et secteur' : 'City and sector specializations'}
        title={
          isFrench
            ? 'Déclinaisons Régionales & Sectorielles au Maroc'
            : 'Regional & Industry Applications Across Morocco'
        }
        subtitle={
          isFrench
            ? "Consultez nos stratégies dédiées par destination (Marrakech, Casablanca, Agadir, Rabat) et par typologie d'établissement pour évaluer les indicateurs propres à votre marché."
            : 'Review destination-specific benchmarks across Marrakech, Casablanca, Agadir, and Rabat along with vertical playbooks tailored to your property or business model.'
        }
        links={serviceExpertiseLinks}
        isFrench={isFrench}
        bgVariant="alt"
      />

      {/* Contextual Internal Links Hub */}
      {data.relatedLinks && data.relatedLinks.length > 0 && (
        <Section tone="light">
          <div className="max-w-3xl mb-10">
            <p className="text-sm text-accent font-medium mb-2">
              {isFrench ? 'Maillage et ressources associées' : 'Related services and guides'}
            </p>
            <h2 className="font-serif text-primary text-balance">
              {isFrench
                ? 'Approfondir Votre Stratégie Digitale Hôtelière'
                : 'Explore Related Hospitality Solutions & Guides'}
            </h2>
          </div>

          <div>
            <Hairline />
            {data.relatedLinks.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="py-6 grid md:grid-cols-12 gap-3 md:gap-8 items-baseline">
                  <div className="md:col-span-5">
                    <Link to={item.to} className="font-serif text-xl text-accent hover:text-accent-hover">
                      {item.label}
                    </Link>
                  </div>
                  <div className="md:col-span-7">
                    <p className="text-sm text-primary/80 leading-relaxed m-0">{item.desc}</p>
                  </div>
                </div>
                <Hairline />
              </React.Fragment>
            ))}
          </div>
        </Section>
      )}

      {/* Native Details/Summary FAQ Section */}
      <Section tone="alt">
        <div className="max-w-3xl">
          <p className="text-sm text-accent font-medium mb-2">FAQ</p>
          <h2 className="font-serif text-primary mb-10">
            {isFrench ? 'Questions Fréquemment Posées' : 'Frequently Asked Questions'}
          </h2>

          <div>
            <Hairline />
            {data.faqs.map((faq, i) => (
              <React.Fragment key={i}>
                <details
                  id={`faq-item-${i}`}
                  open={i === 0}
                  className="group py-5"
                >
                  <summary className="list-none flex items-center justify-between gap-6 cursor-pointer font-serif text-xl text-primary">
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className="text-accent shrink-0 transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <div className="pt-4 text-primary/85 leading-relaxed max-w-[65ch]">
                    {faq.a}
                  </div>
                </details>
                <Hairline />
              </React.Fragment>
            ))}
          </div>

          {data.externalReferences && data.externalReferences.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border-subtle">
              <h3 className="font-serif text-lg text-primary mb-4">
                {isFrench
                  ? 'Documentation officielle et standards de référence'
                  : 'Official documentation and industry standards'}
              </h3>
              <ul className="space-y-2.5 text-sm">
                {data.externalReferences.map((ref, idx) => (
                  <li key={idx} className="text-primary/80">
                    <a href={ref.url} target="_blank" rel="noopener noreferrer">
                      {ref.label}
                    </a>
                    <span className="text-primary/65"> — {ref.source}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>

      {/* Closing Band on Primary */}
      <Section tone="dark" className="py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-bg-light/85">
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <span>{isFrench ? 'Propriété 100 % Client' : '100% Client Asset Ownership'}</span>
            <span>{isFrench ? 'Préavis 15 Jours (Abonnements)' : '15-Day Notice on Retainers'}</span>
            <span>{isFrench ? 'Tarifs Fixes Sans Commission' : 'Flat Fees, Zero Booking Commission'}</span>
          </div>
          <div>
            <Link to={isFrench ? '/tarifs' : '/en/pricing'}>
              {isFrench ? 'Consulter Notre Grille Tarifaire' : 'View Full Pricing Schedule'}
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
