import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Building2,
  Sparkles,
  Compass,
  Utensils,
  Briefcase,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import SEO from '../../components/SEO';
import { industriesData } from '../../data/industriesData';

interface SectorHubItem {
  key: 'hotels-resorts' | 'riads-boutique-hotels' | 'tour-operators' | 'restaurants-catering' | 'corporate-smes';
  pathEn: string;
  pathFr: string;
  icon: React.ReactNode;
}

const sectorItems: SectorHubItem[] = [
  {
    key: 'hotels-resorts',
    pathEn: '/en/industries/hotels-resorts',
    pathFr: '/secteurs/hotels-resorts',
    icon: <Building2 size={28} />
  },
  {
    key: 'riads-boutique-hotels',
    pathEn: '/en/industries/riads-boutique-hotels',
    pathFr: '/secteurs/riads-maisons-hotes',
    icon: <Sparkles size={28} />
  },
  {
    key: 'tour-operators',
    pathEn: '/en/industries/tour-operators',
    pathFr: '/secteurs/tour-operateurs',
    icon: <Compass size={28} />
  },
  {
    key: 'restaurants-catering',
    pathEn: '/en/industries/restaurants-catering',
    pathFr: '/secteurs/restaurants-traiteurs',
    icon: <Utensils size={28} />
  },
  {
    key: 'corporate-smes',
    pathEn: '/en/industries/corporate-smes',
    pathFr: '/secteurs/pme-entreprises',
    icon: <Briefcase size={28} />
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
    <div className="w-full bg-bg text-primary pb-24">
      <SEO
        title={pageTitle}
        description={pageDescription}
        schema={[breadcrumbSchema, itemListSchema]}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden" id="industries-hero-section">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.1] mb-6" id="industries-main-h1">
            {h1Text}
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light max-w-3xl mx-auto" id="industries-main-sub">
            {pageDescription}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center" id="industries-hero-ctas">
            <Link
              to={isFrench ? '/contact' : '/en/contact'}
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
              id="industries-cta-audit"
            >
              <span>{isFrench ? 'Demander un Audit Gratuit' : 'Request a Free Audit'}</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              to={isFrench ? '/tarifs' : '/en/pricing'}
              className="border border-white/20 hover:border-accent text-white px-8 py-4 rounded-xl font-medium transition-all inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm"
              id="industries-cta-pricing"
            >
              <span>{isFrench ? 'Consulter nos Tarifs' : 'View Agency Pricing'}</span>
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto w-full" id="industries-hubs-grid-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectorItems.map((sec, idx) => {
            const entry = industriesData[sec.key][lang];
            const targetPath = isFrench ? sec.pathFr : sec.pathEn;

            return (
              <Link
                key={sec.key}
                to={targetPath}
                className="group bg-white p-8 rounded-2xl border border-primary/10 hover:border-accent/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                id={`industry-card-${idx}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {sec.icon}
                    </div>
                  </div>

                  <h2 className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors mb-3">
                    {entry.title}
                  </h2>

                  <p className="text-sm text-primary/70 font-light leading-relaxed">
                    {entry.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-primary/5 flex items-center justify-end text-accent font-semibold text-sm">
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
