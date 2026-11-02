import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { industriesData } from '../../data/industriesData';
import { getMatrixLinksForIndustry } from '../../data/matrixRelations';
import SEO from '../../components/SEO';
import Callout from '../../components/Callout';
import RelatedExpertiseSection from '../../components/RelatedExpertiseSection';
import Button from '../../components/ui/Button';
import Section from '../../components/ui/Section';
import Hairline from '../../components/ui/Hairline';
import { ChevronDown } from 'lucide-react';

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
      <Section tone="light">
        <div className="max-w-[68ch]">
          <h1>Industry Sector Not Found</h1>
          <p className="mt-4">The requested industry sector could not be loaded.</p>
          <p className="mt-6">
            <Link to="/en">Return to Home</Link>
          </p>
        </div>
      </Section>
    );
  }

  const data = dataMap[lang];
  const industryExpertiseLinks = getMatrixLinksForIndustry(industryKey, lang);

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

      {/* Editorial Hero */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-4xl">
          <p className="text-sm text-bg-light/75 mb-4">
            {isFrench ? 'Expertise sectorielle' : 'Industry expertise'}
          </p>

          <h1 className="font-serif text-bg-light mb-6 text-balance">
            {data.heroTitle}
          </h1>

          <p className="text-lg md:text-xl text-bg-light/85 mb-10 max-w-[65ch] leading-relaxed">
            {data.heroSub}
          </p>

          <div className="max-w-3xl mb-8 border border-white/20 p-6 md:p-8 rounded-sm">
            <p className="text-base leading-relaxed text-bg-light/90 m-0">
              <strong className="text-bg-light font-semibold">Urunk Agency</strong>{' '}
              {isFrench
                ? "déploie des architectures numériques de pointe pour les acteurs de ce secteur au Maroc (Casablanca, Marrakech, Rabat, Agadir). Nos équipes conçoivent des sites web ultra-rapides ([À CONFIRMER]) synchronisés avec vos systèmes métiers et pilotent des campagnes Google Ads et SEO d'autorité générant plus de 40 % de requêtes directes sans commission d'intermédiaire. Forfaits création dès 12 000 MAD, gestion marketing dès 4 000 MAD/mois."
                : 'engineers high-performance web systems and direct-booking channels for this sector across Morocco and worldwide. We build speed-optimized platforms ([À CONFIRMER]) seamlessly integrated with industry booking engines, driving a 40%+ increase in direct revenue and bypassing high OTA commissions. Web design starts at 12,000 MAD, performance ad management at 4,000 MAD/mo.'}
            </p>
          </div>

          <div className="max-w-3xl mb-10">
            <Callout variant="dark">
              <strong className="text-bg-light font-semibold">{data.calloutTitle}:</strong>{' '}
              {data.calloutBody}
            </Callout>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Button href={isFrench ? '/contact' : '/en/contact'} variant="primary">
              {isFrench ? 'Demander un audit gratuit' : 'Discuss your industry growth'}
            </Button>
            <Button href={isFrench ? '/realisations' : '/en/work'} variant="secondary">
              {isFrench ? 'Consulter nos réalisations clients' : 'View strategy examples'}
            </Button>
          </div>
        </div>
      </Section>

      {/* Industry Overview & Key Challenges */}
      <Section tone="alt">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm text-accent font-medium mb-3">
              {isFrench ? 'Analyse du marché' : 'Market overview'}
            </p>
            <h2 className="font-serif text-primary mb-6 text-balance">
              {data.overviewTitle}
            </h2>
            <div className="space-y-4 max-w-[65ch] text-primary/85 leading-relaxed">
              <p>{data.overviewText1}</p>
              <p>{data.overviewText2}</p>
            </div>
          </div>

          <div className="lg:col-span-5 border border-border-subtle bg-bg-card p-8 rounded-sm">
            <h3 className="font-serif text-primary pb-4 mb-6 border-b border-border-subtle">
              {data.keyChallengesTitle}
            </h3>
            <div className="divide-y divide-border-subtle">
              {data.keyChallenges.map((challenge, index) => (
                <p key={index} className="py-3.5 first:pt-0 last:pb-0 text-sm text-primary/85 leading-relaxed m-0">
                  {challenge}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Connected Specialized Services as Hairline Rows */}
      <Section tone="light">
        <div className="max-w-3xl mb-12">
          <p className="text-sm text-accent font-medium mb-2">
            {isFrench ? 'Services connectés' : 'Targeted solutions'}
          </p>
          <h2 className="font-serif text-primary text-balance">
            {data.solutionsTitle}
          </h2>
        </div>

        <div>
          <Hairline />
          {data.solutions.map((item, i) => (
            <React.Fragment key={i}>
              <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">
                  0{i + 1}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-serif text-primary m-0">
                    <Link to={item.link}>{item.title}</Link>
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[65ch]">
                    {item.desc}
                  </p>
                </div>
              </div>
              <Hairline />
            </React.Fragment>
          ))}
        </div>
      </Section>

      <RelatedExpertiseSection
        kicker={isFrench ? 'Déploiement régional par métier' : 'Regional and vertical playbooks'}
        title={
          isFrench
            ? "Expertises Locales Dédiées à Votre Secteur d'Activité"
            : 'City & Sector Specializations for Your Industry'
        }
        subtitle={
          isFrench
            ? "Découvrez comment nous adaptons le référencement naturel, la création web rapide et les campagnes d'acquisition directe aux spécificités de votre secteur à Marrakech, Casablanca, Agadir et Rabat."
            : 'Explore how our engineering and search teams tailor fast web platforms, organic SEO, and paid acquisition for your vertical across Marrakech, Casablanca, Agadir, and Rabat.'
        }
        links={industryExpertiseLinks}
        isFrench={isFrench}
        bgVariant="alt"
      />

      {/* Featured Case Study Band */}
      <Section tone="dark">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-sm text-bg-light/75 mb-3">
              {data.caseStudyTitle}
            </p>
            <h2 className="font-serif text-bg-light mb-3">
              {data.caseStudyName}
            </h2>
            <p className="font-serif text-2xl text-bg-light/95 mb-4 tabular-nums">
              {data.caseStudyMetric}
            </p>
            <p className="text-bg-light/85 leading-relaxed max-w-[60ch] m-0">
              {data.caseStudyDesc}
            </p>
          </div>

          <div className="shrink-0">
            <Button
              href={isFrench ? `/realisations/${data.caseStudySlug}` : `/en/work/${data.caseStudySlug}`}
              variant="primary"
            >
              {data.caseStudyName}
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
              {isFrench ? 'Direction conseil et stratégie sectorielle' : 'Sector strategic direction'}
            </p>
            <h3 className="font-serif text-primary mb-2">
              {isFrench
                ? "J.Mellal : Consultant SEO & Stratège Marketing Digital Propulsé par l'IA"
                : 'J.Mellal : SEO Consultant & AI-Powered Digital Marketing Strategist'}
            </h3>
            <p className="text-sm text-primary/80 leading-relaxed m-0">
              {isFrench
                ? "Consultant SEO et stratège en marketing digital propulsé par l'IA, accompagnant la croissance en ligne des entreprises au Maroc. Spécialiste de la rentabilité hôtelière, de la désintermédiation OTA et du positionnement d'autorité à Casablanca et Marrakech."
                : 'SEO Consultant, AI-Powered Digital Marketing Strategist, and helping businesses grow online in Morocco. Specializing in direct hospitality acquisition, OTA disintermediation, and authority SEO in Casablanca and Marrakech.'}
            </p>
          </div>
        </div>
      </Section>

      {/* Native Details/Summary FAQ Section */}
      <Section tone="alt">
        <div className="max-w-3xl">
          <p className="text-sm text-accent font-medium mb-2">FAQ</p>
          <h2 className="font-serif text-primary mb-10">
            {isFrench ? 'Questions Fréquemment Posées' : 'Industry FAQ'}
          </h2>

          <div>
            <Hairline />
            {data.faqs.map((faq, i) => (
              <React.Fragment key={i}>
                <details open={i === 0} className="group py-5">
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
        </div>
      </Section>
    </div>
  );
}
