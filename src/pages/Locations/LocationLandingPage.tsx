import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { locationsData } from '../../data/locationsData';
import { getMatrixLinksForLocation } from '../../data/matrixRelations';
import SEO from '../../components/SEO';
import Callout from '../../components/Callout';
import RelatedExpertiseSection from '../../components/RelatedExpertiseSection';
import Button from '../../components/ui/Button';
import Section from '../../components/ui/Section';
import Hairline from '../../components/ui/Hairline';
import { ChevronDown } from 'lucide-react';

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
      <Section tone="light">
        <div className="max-w-[68ch]">
          <h1>Location Hub Not Found</h1>
          <p className="mt-4">The requested location page could not be loaded.</p>
          <p className="mt-6">
            <Link to="/en">Return to Home</Link>
          </p>
        </div>
      </Section>
    );
  }

  const data = dataMap[lang];
  const regionalExpertiseLinks = getMatrixLinksForLocation(locationKey, lang);

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

  const cityLabel = locationKey === 'morocco'
    ? (isFrench ? 'Maroc' : 'Morocco')
    : data.heroTitle.split(' ').slice(-1)[0];

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
            {isFrench ? 'Pôle régional' : 'Geographic hub'}
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
                ? "déploie une présence opérationnelle et stratégique dans ce pôle économique marocain. Nos spécialistes accompagnent les entreprises, hôtels et riads locaux avec des solutions de création web sur-mesure (dès 12 000 MAD) et des campagnes d'acquisition locale Google Maps & Google Ads (dès 4 000 MAD/mois) pour capturer les flux de clients qualifiés sans intermédiaire."
                : 'maintains an active operational and strategic presence in this premier Moroccan economic hub. We equip local businesses, resorts, and riads with custom React/WordPress web engineering (from 12,000 MAD) and high-intent local SEO & Google Ads management (from 4,000 MAD/mo).'}
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
              {isFrench ? 'Lancer un projet dans cette zone' : 'Start a local project'}
            </Button>
            <Button href={isFrench ? '/tarifs' : '/en/pricing'} variant="secondary">
              {isFrench ? 'Consulter nos tarifs' : 'View agency pricing'}
            </Button>
          </div>
        </div>
      </Section>

      {/* Regional Market Overview */}
      <Section tone="alt">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm text-accent font-medium mb-3">
              {isFrench ? 'Analyse régionale' : 'Regional focus'}
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
              {data.marketHighlightsTitle}
            </h3>
            <div className="divide-y divide-border-subtle">
              {data.marketHighlights.map((highlight, index) => (
                <p key={index} className="py-3.5 first:pt-0 last:pb-0 text-sm text-primary/85 leading-relaxed m-0">
                  {highlight}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Specialized Services as Editorial Hairline Rows */}
      <Section tone="light">
        <div className="max-w-3xl mb-12">
          <p className="text-sm text-accent font-medium mb-2">
            {isFrench ? 'Services locaux' : 'Location services'}
          </p>
          <h2 className="font-serif text-primary text-balance">
            {data.localServicesTitle}
          </h2>
        </div>

        <div>
          <Hairline />
          {data.localServices.map((item, i) => (
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
        kicker={isFrench ? 'Spécialisations locales dédiées' : 'Dedicated regional specializations'}
        title={
          isFrench
            ? "Pôles d'Expertise Métier & Acquisition dans cette Zone"
            : 'Specialized Search, Web & Paid Acquisition Playbooks'
        }
        subtitle={
          isFrench
            ? 'Accédez directement à nos feuilles de route techniques adaptées aux hôtels, riads et entreprises opérant sur ce marché régional.'
            : 'Access dedicated technical roadmaps tailored for hotels, boutique riads, and enterprises competing in this regional market.'
        }
        links={regionalExpertiseLinks}
        isFrench={isFrench}
        bgVariant="alt"
      />

      {/* Why Partner Section */}
      {data.whyPartnerTitle && data.whyPartnerText && (
        <Section tone="light">
          <div className="max-w-3xl">
            <p className="text-sm text-accent font-medium mb-2">
              {isFrench ? 'Expertise terrain' : 'Local expertise'}
            </p>
            <h2 className="font-serif text-primary mb-6 text-balance">
              {data.whyPartnerTitle}
            </h2>
            <p className="text-primary/85 leading-relaxed max-w-[65ch] m-0">
              {data.whyPartnerText}
            </p>
          </div>
        </Section>
      )}

      {/* Other Geographic Hubs */}
      <Section tone="alt">
        <div className="max-w-3xl mb-10">
          <p className="text-sm text-accent font-medium mb-2">
            {isFrench ? 'Réseau régional' : 'Regional network'}
          </p>
          <h2 className="font-serif text-primary text-balance">
            {data.nearbyLocationsTitle}
          </h2>
        </div>

        <div>
          <Hairline />
          {data.nearbyLocations.map((hub, idx) => (
            <React.Fragment key={idx}>
              <div className="py-6 grid md:grid-cols-12 gap-3 md:gap-8 items-baseline">
                <div className="md:col-span-4">
                  <h3 className="font-serif text-primary m-0">
                    <Link to={hub.link}>{hub.title}</Link>
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm text-primary/80 leading-relaxed m-0 max-w-[65ch]">
                    {hub.desc}
                  </p>
                </div>
              </div>
              <Hairline />
            </React.Fragment>
          ))}
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
              {isFrench ? 'Expertise régionale et direction stratégique' : 'Regional strategic direction'}
            </p>
            <h3 className="font-serif text-primary mb-2">
              {isFrench
                ? "J.Mellal : Consultant SEO & Stratège Marketing Digital Propulsé par l'IA"
                : 'J.Mellal : SEO Consultant & AI-Powered Digital Marketing Strategist'}
            </h3>
            <p className="text-sm text-primary/80 leading-relaxed m-0">
              {isFrench
                ? "Consultant SEO et stratège en marketing digital propulsé par l'IA, accompagnant la croissance en ligne des entreprises, riads et groupes hôteliers au Maroc (Casablanca, Marrakech, Rabat et Agadir) sur Google, Google Maps et Google Ads."
                : 'SEO Consultant, AI-Powered Digital Marketing Strategist, and helping businesses grow online in Morocco across Casablanca, Marrakech, Rabat, and Agadir through local search dominance, high-converting websites, and profitable ad campaigns.'}
            </p>
          </div>
        </div>
      </Section>

      {/* Native Details/Summary FAQ Section */}
      <Section tone="alt">
        <div className="max-w-3xl">
          <p className="text-sm text-accent font-medium mb-2">FAQ</p>
          <h2 className="font-serif text-primary mb-10">
            {isFrench ? 'Questions sur cette Zone' : 'Regional FAQ'}
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

      {/* Closing Band on Primary */}
      <Section tone="dark">
        <div className="max-w-3xl">
          <p className="text-sm text-bg-light/75 mb-3">
            {isFrench ? 'Discutons de votre projet' : "Let's connect"}
          </p>
          <h2 className="font-serif text-bg-light mb-6 text-balance">
            {isFrench
              ? `Prêt à Propulser Votre Activité à ${locationKey === 'morocco' ? 'travers le Maroc' : cityLabel} ?`
              : `Ready to Scale Your Business in ${cityLabel}?`}
          </h2>
          <p className="text-bg-light/85 leading-relaxed mb-10 max-w-[60ch]">
            {isFrench
              ? `Urunk conçoit des solutions d'ingénierie web et de marketing digital de précision adaptées aux spécificités économiques de la région de ${cityLabel}. Collaborez avec notre équipe d'experts locaux.`
              : `Urunk designs high-performance web development and precision search engine optimization tailored to the local market realities of ${cityLabel}. Contact our expert team today.`}
          </p>
          <Button href={isFrench ? '/contact' : '/en/contact'} variant="primary">
            {isFrench
              ? `Contacter l'agence à ${cityLabel}`
              : `Contact the agency in ${cityLabel}`}
          </Button>
        </div>
      </Section>
    </div>
  );
}
