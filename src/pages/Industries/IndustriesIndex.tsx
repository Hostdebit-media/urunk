import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { industriesData } from '../../data/industriesData';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Hairline from '../../components/ui/Hairline';

interface SectorHubItem {
  key: 'hotels-resorts' | 'riads-boutique-hotels' | 'tour-operators' | 'restaurants-catering' | 'corporate-smes';
  pathEn: string;
  pathFr: string;
}

const sectorItems: SectorHubItem[] = [
  {
    key: 'hotels-resorts',
    pathEn: '/en/industries/hotels-resorts',
    pathFr: '/secteurs/hotels-resorts'
  },
  {
    key: 'riads-boutique-hotels',
    pathEn: '/en/industries/riads-boutique-hotels',
    pathFr: '/secteurs/riads-maisons-hotes'
  },
  {
    key: 'tour-operators',
    pathEn: '/en/industries/tour-operators',
    pathFr: '/secteurs/tour-operateurs'
  },
  {
    key: 'restaurants-catering',
    pathEn: '/en/industries/restaurants-catering',
    pathFr: '/secteurs/restaurants-traiteurs'
  },
  {
    key: 'corporate-smes',
    pathEn: '/en/industries/corporate-smes',
    pathFr: '/secteurs/pme-entreprises'
  }
];

export default function IndustriesIndex() {
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');
  const lang = isFrench ? 'fr' : 'en';

  const pageTitle = isFrench
    ? 'Secteurs d’activité | Urunk'
    : 'Industries We Serve | Urunk';

  const pageDescription = isFrench
    ? 'Sites web, référencement et annonces pour les hôtels, riads, tour-opérateurs, restaurants et PME au Maroc.'
    : 'Websites, SEO and advertising for hotels, riads, tour operators, restaurants and SMEs in Morocco.';

  const h1Text = isFrench ? 'Secteurs d’activité' : 'Industries we serve';

  const breadcrumbItems = [
    { label: isFrench ? 'Accueil' : 'Home', path: isFrench ? '/' : '/en' },
    { label: h1Text, path: isFrench ? '/secteurs' : '/en/industries' }
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://urunk.com${item.path}`
    }))
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: h1Text,
    description: pageDescription,
    itemListElement: sectorItems.map((sec, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: industriesData[sec.key][lang].title,
      url: `https://urunk.com${isFrench ? sec.pathFr : sec.pathEn}`
    }))
  };

  return (
    <div className="w-full bg-bg-light text-primary">
      <SEO
        title={pageTitle}
        description={pageDescription}
        schema={[breadcrumbSchema, itemListSchema]}
      />

      {/* Hero Header */}
      <Section tone="dark" className="pt-28 md:pt-36" id="industries-hero-section">
        <div className="max-w-4xl">
          <h1 className="font-serif text-bg-light mb-6 text-balance" id="industries-main-h1">
            {h1Text}
          </h1>

          <p className="text-lg md:text-xl text-bg-light/85 mb-10 leading-relaxed max-w-[62ch]" id="industries-main-sub">
            {pageDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4" id="industries-hero-ctas">
            <Button
              variant="dark"
              href={isFrench ? '/contact' : '/en/contact'}
              id="industries-cta-audit"
            >
              {isFrench ? 'Demander un Audit Gratuit' : 'Request a Free Audit'}
            </Button>
            <Link
              to={isFrench ? '/tarifs' : '/en/pricing'}
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm border border-bg-light/30 text-bg-light hover:bg-bg-light/10 font-medium text-[15px] no-underline transition-colors whitespace-nowrap shrink-0"
              id="industries-cta-pricing"
            >
              {isFrench ? 'Consulter nos Tarifs' : 'View Agency Pricing'}
            </Link>
          </div>
        </div>
      </Section>

      {/* Editorial Sector Rows */}
      <Section tone="light" id="industries-hubs-grid-section">
        <Hairline />
        {sectorItems.map((sec, idx) => {
          const entry = industriesData[sec.key][lang];
          const targetPath = isFrench ? sec.pathFr : sec.pathEn;

          return (
            <div key={sec.key} id={`industry-card-${idx}`}>
              <div className="py-10 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                <div className="md:col-span-2">
                  <span className="tabular-nums text-sm text-primary/50">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h2 className="font-serif text-[28px] leading-snug text-primary">
                    <Link to={targetPath}>{entry.title}</Link>
                  </h2>
                </div>
                <div className="md:col-span-6">
                  <p className="text-primary/80 leading-relaxed max-w-[65ch]">
                    {entry.description}
                  </p>
                </div>
              </div>
              <Hairline />
            </div>
          );
        })}
      </Section>
    </div>
  );
}
