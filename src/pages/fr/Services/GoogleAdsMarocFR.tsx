import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Award,
  TrendingUp,
  Target,
  BarChart3,
  ShieldCheck,
  MapPin,
  Search,
  ShoppingBag,
  Building2,
  PhoneCall,
  Layers,
  X
} from 'lucide-react';
import SEO from '../../../components/SEO';
import { servicesData } from '../../../data/servicesData';

interface CampaignFormatItem {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  colSpan: string;
}

interface SectorBenchmarkRow {
  sector: string;
  cities: string;
  avgCpc: string;
  recommendedBudget: string;
  primaryKpi: string;
}

export default function GoogleAdsMarocFR() {
  const data = servicesData['google-ads-morocco'].fr;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const campaignFormats: CampaignFormatItem[] = [
    {
      num: '01',
      title: 'Campagnes Google Search (Réseau de Recherche Haute Intention)',
      subtitle: 'Captez les décideurs et acheteurs au moment précis où ils cherchent votre prestation',
      description:
        "Le Réseau de Recherche demeure le levier le plus rentable au Maroc lorsqu'il est structuré avec rigueur. Nous ciblons exclusivement les requêtes transactionnelles et commerciales en correspondance exacte et d'expression (français, anglais et arabe), tout en alimentant chaque semaine une liste stricte de mots-clés négatifs pour bloquer les clics curieux, les recherches d'emploi ou les demandes gratuites.",
      deliverables: [
        'Groupes d’annonces thématiques granulaires (Quality Score cible 8 à 10/10)',
        'Annonces responsives (RSA) avec extensions d’appel, de prix, de lieu et d’accroche',
        'Filtrage continu des termes de recherche pour éliminer 100 % du gaspillage budgétaire'
      ],
      colSpan: 'lg:col-span-7'
    },
    {
      num: '02',
      title: 'Performance Max & Acquisition Multicanale Pilotée par la Donnée',
      subtitle: 'Search, YouTube, Display, Discover, Gmail et Maps unifiés autour du ROAS',
      description:
        "Nous configurons vos campagnes Performance Max en les nourrissant de signaux d'audience propriétaires (listes clients CRM, visiteurs à forte intention, paniers abandonnés) et en isolant le trafic de marque pour garantir une acquisition réellement incrémentale.",
      deliverables: [
        'Segmentation des groupes d’assets visuels et vidéos par gamme d’offre',
        'Exclusion des requêtes de marque pour mesurer le vrai coût d’acquisition client',
        'Enchères automatisées basées sur la valeur réelle de conversion (tROAS / tCPA)'
      ],
      colSpan: 'lg:col-span-5'
    },
    {
      num: '03',
      title: 'Google Shopping & Croissance E-commerce au Maroc',
      subtitle: 'Dominez les résultats produits visuels sur Shopify, WooCommerce et PrestaShop',
      description:
        "Pour les marques D2C et boutiques en ligne marocaines, nous optimisons votre flux Google Merchant Center (titres enrichis, GTIN, prix en MAD, promotions) et distinguons les transactions payées par carte CMI des commandes en paiement à la livraison (COD) confirmées afin d'entraîner l'algorithme sur votre marge nette réelle.",
      deliverables: [
        'Audit et optimisation technique du flux catalogue Google Merchant Center',
        'Segmentation des produits par marge brute, saisonnalité et taux de rotation',
        'Remontée des ventes confirmées via Google Tag Manager et GA4 E-commerce'
      ],
      colSpan: 'lg:col-span-5'
    },
    {
      num: '04',
      title: 'Google Hotel Ads & Réservation Directe Sans Commission OTA',
      subtitle: 'Reprenez vos nuitées face à Booking.com et Expedia sur votre propre nom et destination',
      description:
        "Les plateformes OTA enchérissent agressivement sur le nom même de votre hôtel ou riad au Maroc, prélevant ensuite 15 à 25 % de commission. En raccordant votre moteur PMS (Cloudbeds, Mews, SiteMinder, Amenitiz) à Google Hotel Ads et à des campagnes Search dédiées aux marchés émetteurs (France, Royaume-Uni, Espagne, États-Unis, Suisse), nous affichons votre tarif direct officiel en tête de Google.",
      deliverables: [
        'Protection de marque hôtelière et liens officiels Google Hotel Center',
        'Ciblage géolocalisé des voyageurs internationaux à haut panier moyen',
        'Mesure exacte du chiffre d’affaires direct généré dans votre PMS'
      ],
      colSpan: 'lg:col-span-7'
    },
    {
      num: '05',
      title: 'Publicité Locale & Visibilité Sponsorisée Google Maps',
      subtitle: 'Générez des appels entrants, contacts WhatsApp et visites en point de vente',
      description:
        "Idéal pour les cliniques, cabinets médicaux, concessions, écoles privées, restaurants et prestataires de proximité à Casablanca, Marrakech, Rabat, Tanger ou Agadir. Nous synchronisons votre fiche Google Business Profile avec vos annonces locales pour capter les recherches géolocalisées sur mobile.",
      deliverables: [
        'Ciblage précis par rayon kilométrique et quartiers stratégiques (Anfa, Maarif, Guéliz, Agdal)',
        'Extensions d’appel direct sur smartphone et suivi des clics WhatsApp Business',
        'Ajustement des enchères selon vos horaires d’ouverture et pics de demande'
      ],
      colSpan: 'lg:col-span-6'
    },
    {
      num: '06',
      title: 'Remarketing Display & YouTube Ads de Conversion',
      subtitle: 'Convertissez les 95 % de visiteurs qui comparent avant de prendre leur décision',
      description:
        "Un acheteur B2B à Casablanca ou un voyageur réservant un séjour à Marrakech compare en moyenne 4 à 6 offres avant de s'engager. Nos séquences de reciblage sur YouTube et le Réseau Display rappellent vos preuves sociales et votre proposition de valeur aux visiteurs chauds pour diviser votre CPA global.",
      deliverables: [
        'Audiences segmentées par profondeur de visite (page tarif, devis, moteur PMS)',
        'Plafonnement de fréquence (frequency capping) pour éviter toute fatigue publicitaire',
        'Créations orientées réassurance et incitation directe à la prise de contact'
      ],
      colSpan: 'lg:col-span-6'
    }
  ];

  const sectorBenchmarks: SectorBenchmarkRow[] = [
    {
      sector: 'PME, Services B2B & Industrie',
      cities: 'Casablanca, Rabat, Tanger, Kénitra',
      avgCpc: '3,50 – 9,00 MAD',
      recommendedBudget: '4 000 – 12 000 MAD / mois',
      primaryKpi: 'Demandes de devis qualifiées & appels commerciaux'
    },
    {
      sector: 'Hôtels, Riads & Tour-Opérateurs',
      cities: 'Marrakech, Agadir, Essaouira, Fès, Ouarzazate',
      avgCpc: '4,00 – 11,50 MAD',
      recommendedBudget: '5 000 – 15 000 MAD / mois',
      primaryKpi: 'Réservations directes PMS sans commission (ROAS 5x–9x)'
    },
    {
      sector: 'E-commerce & Marques D2C',
      cities: 'National (Maroc entier) & Export',
      avgCpc: '1,20 – 4,50 MAD',
      recommendedBudget: '5 000 – 20 000 MAD / mois',
      primaryKpi: 'Achats validés (CMI / COD confirmé) & coût par commande'
    },
    {
      sector: 'Immobilier, Cliniques & Enseignement',
      cities: 'Casablanca, Rabat, Marrakech, Tanger',
      avgCpc: '4,50 – 12,00 MAD',
      recommendedBudget: '5 000 – 15 000 MAD / mois',
      primaryKpi: 'Prises de rendez-vous, visites showrooms & leads WhatsApp'
    }
  ];

  const methodologySteps = [
    {
      num: '01',
      title: 'Audit SEA Complet & Cartographie d’Intention',
      desc: "Avant de dépenser le moindre dirham, notre agence Google Ads au Maroc audite votre historique de compte (ou vos concurrents directs sur la SERP marocaine), chiffre les volumes de recherche mensuels en français, anglais et arabe, et calcule votre coût par acquisition cible selon vos marges commerciales."
    },
    {
      num: '02',
      title: 'Tracking Chirurgical : GTM, GA4, WhatsApp, Appels & CMI',
      desc: "Sans mesure fiable, les algorithmes d'enchères de Google optimisent à l'aveugle. Nous déployons Google Tag Manager (GTM), Google Analytics 4 (GA4) et le suivi des conversions améliorées (Enhanced Conversions) pour tracer chaque formulaire soumis, clic d'appel mobile, ouverture de conversation WhatsApp qualifiée, paiement CMI ou réservation PMS."
    },
    {
      num: '03',
      title: 'Architecture de Compte & Pages d’Atterrissage (< 1,5 s)',
      desc: "Un bon clic envoyé vers une page lente détruit votre rentabilité. Nous structurons vos campagnes par intention d'achat stricte et optimisons vos pages de destination mobiles (message match, preuves de confiance, vitesse Core Web Vitals) pour maximiser votre Quality Score et payer chaque clic moins cher que vos concurrents."
    },
    {
      num: '04',
      title: 'Pilotage Hebdomadaire, Tests A/B & Scaling du ROI',
      desc: "Chaque semaine, nos stratèges SEA purgent les requêtes non pertinentes, testent de nouvelles variantes d'annonces, réallouent le budget vers les régions et heures les plus rentables, et vous remettent un rapport exécutif limpide centré sur vos revenus générés — pas sur des impressions superficielles."
    }
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://urunk.com/google-ads-maroc#service',
    name: 'Agence Google Ads Maroc — Gestion de Campagnes SEA & PPC',
    serviceType: 'Gestion Google Ads (SEA / PPC)',
    description: data.description,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Urunk',
      url: 'https://urunk.com',
      email: 'contact@urunk.com',
      telephone: '+212668802096',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3 Rue El Kadi Lass, Maarif',
        addressLocality: 'Casablanca',
        addressRegion: 'Casablanca-Settat',
        postalCode: '20330',
        addressCountry: 'MA'
      }
    },
    areaServed: [
      { '@type': 'Country', name: 'Maroc' },
      { '@type': 'City', name: 'Casablanca' },
      { '@type': 'City', name: 'Marrakech' },
      { '@type': 'City', name: 'Rabat' },
      { '@type': 'City', name: 'Tanger' },
      { '@type': 'City', name: 'Agadir' }
    ],
    offers: {
      '@type': 'Offer',
      price: '4000',
      priceCurrency: 'MAD',
      description:
        'Forfait mensuel fixe de gestion Google Ads au Maroc dès 4 000 MAD HT/mois (0 % de commission sur le budget média réglé directement à Google).'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://urunk.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://urunk.com/services'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Agence Google Ads Maroc',
        item: 'https://urunk.com/google-ads-maroc'
      }
    ]
  };

  return (
    <div className="w-full bg-bg-light text-primary">
      <SEO
        title={data.title}
        description={data.description}
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* 1. HERO PROPOSITION SECTION */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.16),transparent_55%)]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent-soft mb-4">
                Acquisition Payante SEA &amp; Performance Marketing — Maroc
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-bold leading-[1.12] tracking-tight mb-6">
                {data.heroTitle}
              </h1>
              <p className="text-base sm:text-lg text-white/85 font-light leading-relaxed mb-8 max-w-2xl">
                <strong>Urunk</strong> est une <strong>agence Google Ads au Maroc</strong> dédiée à la rentabilité mesurable des PME, entreprises B2B, marques e-commerce et établissements hôteliers. Depuis nos pôles de <strong>Casablanca</strong> et <strong>Marrakech</strong>, nous concevons et pilotons vos campagnes <strong>Google Search</strong>, <strong>Performance Max</strong>, <strong>Google Shopping</strong> et <strong>Google Hotel Ads</strong> pour capter les clients prêts à acheter — sans aucune commission sur votre budget publicitaire.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <Link
                  to="/contact"
                  className="bg-accent hover:bg-accent-hover text-white px-7 py-4 rounded-xl font-bold shadow-lg transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <span>Demander mon Audit Google Ads Gratuit</span>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/tarifs"
                  className="border border-white/20 hover:border-white/40 bg-white/5 text-white px-6 py-4 rounded-xl font-semibold transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <span>Voir nos Forfaits SEA</span>
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/75 font-medium">
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-accent" /> Propriété 100 % client du compte Google Ads
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-accent" /> Sans engagement forcé (préavis 15 jours)
                </span>
                <span className="flex items-center gap-1.5">
                  <Check size={14} className="text-accent" /> Garantie de performance 90 jours
                </span>
              </div>
            </div>

            {/* Executive Key Figures Panel */}
            <div className="lg:col-span-5">
              <div className="bg-white/8 border border-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-xs">
                <h2 className="text-lg font-serif font-bold text-white mb-5 pb-4 border-b border-white/10">
                  Synthèse Exécutive — Pilotage SEA Urunk
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-accent tabular-nums mb-1">
                      4 000 MAD
                    </div>
                    <div className="text-xs text-white/75 leading-snug">
                      Forfait mensuel fixe dès 4 000 MAD HT/mois
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums mb-1">
                      0 %
                    </div>
                    <div className="text-xs text-white/75 leading-snug">
                      Commission sur votre budget média Google
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums mb-1">
                      24 – 48 h
                    </div>
                    <div className="text-xs text-white/75 leading-snug">
                      Premiers prospects &amp; clics qualifiés après lancement
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums mb-1">
                      FR · EN · AR
                    </div>
                    <div className="text-xs text-white/75 leading-snug">
                      Campagnes multilingues Maroc &amp; International
                    </div>
                  </div>
                </div>
                <p className="text-xs text-white/80 leading-relaxed m-0">
                  <strong>Diagnostic gratuit sous 24h ouvrées :</strong> audit de vos campagnes actuelles ou estimation chiffrée du potentiel de recherche et du CPC moyen sur votre secteur au Maroc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM & AGENCY COMPARISON SECTION */}
      <section className="py-16 md:py-24 px-6 bg-bg border-b border-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-6">
              <p className="text-xs font-bold uppercase tracking-wider text-accent mb-3">
                Constat Terrain au Maroc
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 leading-tight">
                Pourquoi confier vos campagnes à une agence Google Ads spécialisée au Maroc ?
              </h2>
              <p className="text-primary/80 font-light leading-relaxed mb-4">
                {data.problemText1}
              </p>
              <p className="text-primary/80 font-light leading-relaxed">
                {data.problemText2}
              </p>
            </div>

            <div className="lg:col-span-6 bg-white p-7 sm:p-8 rounded-2xl border border-primary/10">
              <h3 className="text-lg font-serif font-bold text-primary mb-5 pb-3 border-b border-primary/10 flex items-center gap-2.5">
                <Award size={20} className="text-accent shrink-0" />
                <span>{data.signsTitle}</span>
              </h3>
              <ul className="space-y-4">
                {data.signs.map((sign, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-primary/85 leading-relaxed">
                    <Check size={18} className="text-accent shrink-0 mt-0.5" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Comparison Table: Internal vs % Agency vs Urunk */}
          <div className="bg-white rounded-2xl border border-primary/10 overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-primary/10 bg-bg-alt/50">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-2">
                Comparatif : Gestion interne vs Agence au pourcentage vs Agence Google Ads Urunk
              </h3>
              <p className="text-sm text-primary/75 font-light m-0">
                Comprenez comment le modèle de rémunération et la rigueur technique impactent directement votre coût d'acquisition client au Maroc.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-bg-alt text-primary border-b border-primary/10">
                    <th className="py-4 px-5 font-semibold">Critère Stratégique</th>
                    <th className="py-4 px-5 font-semibold">Gestion Interne / Boost Auto</th>
                    <th className="py-4 px-5 font-semibold">Agence Classique (% Budget)</th>
                    <th className="py-4 px-5 font-bold text-accent">Urunk — Agence Google Ads Maroc</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/10">
                  <tr>
                    <td className="py-4 px-5 font-semibold text-primary">Modèle de facturation</td>
                    <td className="py-4 px-5 text-primary/75">Temps interne caché + clics perdus</td>
                    <td className="py-4 px-5 text-primary/75 tabular-nums">15 % à 20 % du budget média</td>
                    <td className="py-4 px-5 font-semibold text-primary tabular-nums">Forfait fixe dès 4 000 MAD/mois (0 % marge média)</td>
                  </tr>
                  <tr className="bg-bg-light/50">
                    <td className="py-4 px-5 font-semibold text-primary">Ciblage des mots-clés</td>
                    <td className="py-4 px-5 text-primary/75">Requêtes larges automatiques coûteuses</td>
                    <td className="py-4 px-5 text-primary/75">Mots-clés génériques à fort volume</td>
                    <td className="py-4 px-5 font-semibold text-primary">Intention transactionnelle exacte + exclusions hebdomadaires</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-semibold text-primary">Tracking des conversions Maroc</td>
                    <td className="py-4 px-5 text-primary/75">Clics simples sans suivi de revenu</td>
                    <td className="py-4 px-5 text-primary/75">Formulaires basiques uniquement</td>
                    <td className="py-4 px-5 font-semibold text-primary">GTM + GA4 : WhatsApp, appels, devis CRM, CMI &amp; PMS hôtelier</td>
                  </tr>
                  <tr className="bg-bg-light/50">
                    <td className="py-4 px-5 font-semibold text-primary">Propriété du compte</td>
                    <td className="py-4 px-5 text-primary/75">Client</td>
                    <td className="py-4 px-5 text-primary/75">Souvent bloquée sur un compte agence</td>
                    <td className="py-4 px-5 font-semibold text-primary">100 % propriétaire dès le jour 1 (accès admin complet)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-semibold text-primary">Engagement contractuel</td>
                    <td className="py-4 px-5 text-primary/75">—</td>
                    <td className="py-4 px-5 text-primary/75 tabular-nums">Engagement rigide 6 à 12 mois</td>
                    <td className="py-4 px-5 font-semibold text-primary tabular-nums">Liberté mensuelle (préavis 15 jours) + garantie 90 jours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC BENTO GRID: 6 GOOGLE ADS CAMPAIGN FORMATS */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-accent mb-3">
            Architecture SEA &amp; PPC Complète
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 leading-tight">
            Nos 6 leviers Google Ads déployés pour votre croissance au Maroc
          </h2>
          <p className="text-base text-primary/75 font-light leading-relaxed">
            Chaque entreprise possède un cycle d'achat distinct. Notre agence sélectionne et combine uniquement les formats publicitaires Google qui génèrent un retour sur investissement vérifiable pour votre activité.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {campaignFormats.map(item => (
            <div
              key={item.num}
              className={`${item.colSpan} p-7 sm:p-9 rounded-2xl border border-primary/10 bg-white hover:border-accent/40 transition-all flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span className="text-sm font-mono font-bold text-accent tabular-nums">
                    {item.num}
                  </span>
                  <span className="text-xs font-medium text-primary/60">
                    Google Ads Certifié
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-accent mb-4">
                  {item.subtitle}
                </p>
                <p className="text-sm text-primary/80 font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <ul className="pt-5 border-t border-primary/10 space-y-2.5">
                {item.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-primary/85">
                    <Check size={16} className="text-accent shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MOROCCAN MARKET BENCHMARKS & DOTATION BILLING */}
      <section className="py-16 md:py-24 px-6 bg-bg-alt border-y border-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-accent mb-3">
              Données &amp; Repères Budgétaires Maroc
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 leading-tight">
              Benchmarks Google Ads au Maroc : CPC moyens, budgets et secteurs accompagnés
            </h2>
            <p className="text-base text-primary/75 font-light leading-relaxed">
              Quel budget prévoir pour dominer la première page de Google à Casablanca, Marrakech, Rabat ou à l'échelle nationale ? Voici les fourchettes de coûts par clic (CPC) et d'investissements médias observées sur nos comptes clients au Maroc.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-primary/10 overflow-hidden mb-10">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-4 px-5 font-semibold">Secteur d’Activité</th>
                    <th className="py-4 px-5 font-semibold">Zones Clés</th>
                    <th className="py-4 px-5 font-semibold">CPC Moyen Observé</th>
                    <th className="py-4 px-5 font-semibold">Budget Média Conseillé</th>
                    <th className="py-4 px-5 font-semibold">Objectif Principal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/10">
                  {sectorBenchmarks.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? 'bg-bg-light/60' : 'bg-white'}>
                      <td className="py-4 px-5 font-bold text-primary">{row.sector}</td>
                      <td className="py-4 px-5 text-primary/75">{row.cities}</td>
                      <td className="py-4 px-5 font-semibold text-accent tabular-nums whitespace-nowrap">{row.avgCpc}</td>
                      <td className="py-4 px-5 font-medium text-primary tabular-nums whitespace-nowrap">{row.recommendedBudget}</td>
                      <td className="py-4 px-5 text-primary/80">{row.primaryKpi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Moroccan Operational Specifics: Dotation E-commerce & Multilingual SERP */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-primary/10">
              <h3 className="text-lg font-serif font-bold text-primary mb-3 flex items-center gap-2.5">
                <ShieldCheck size={20} className="text-accent shrink-0" />
                <span>Paiement Google Ads &amp; Dotation E-commerce au Maroc</span>
              </h3>
              <p className="text-sm text-primary/80 font-light leading-relaxed m-0">
                Au Maroc, le règlement direct des régies publicitaires internationales (Google Ireland Ltd) s'effectue simplement via la <strong>dotation e-commerce internationale</strong> activée sur votre carte bancaire professionnelle marocaine (jusqu'à 100 % de l'IS payé dans la limite réglementaire de l'Office des Changes pour les sociétés) ou via un compte en devises / carte internationale. Nous configurons votre profil de facturation officiel pour garantir une comptabilité claire et 0 % de frais d'intermédiation.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-primary/10">
              <h3 className="text-lg font-serif font-bold text-primary mb-3 flex items-center gap-2.5">
                <Search size={20} className="text-accent shrink-0" />
                <span>Arbitrage Multilingue (Français, Anglais &amp; Arabe)</span>
              </h3>
              <p className="text-sm text-primary/80 font-light leading-relaxed m-0">
                Les intentions de recherche au Maroc varient fortement selon la langue : requêtes B2B majoritairement francophones à Casablanca et Rabat, recherches touristiques anglophones, francophones et hispanophones vers Marrakech et Agadir, et requêtes locales grand public bilingues français/arabe. Nous segmentons vos campagnes par langue afin d'aligner chaque annonce avec la page de destination correspondante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4-STEP METHODOLOGY & CONVERSION TRACKING */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-wider text-accent mb-3">
              Méthodologie d’Ingénierie SEA
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 leading-tight">
              Comment notre agence Google Ads transforme vos clics en chiffre d’affaires
            </h2>

            <div className="space-y-6">
              {methodologySteps.map(step => (
                <div
                  key={step.num}
                  className="p-6 sm:p-7 rounded-2xl border border-primary/10 bg-white flex flex-col sm:flex-row gap-5 items-start"
                >
                  <span className="w-11 h-11 rounded-xl bg-primary text-white font-serif font-bold flex items-center justify-center shrink-0 tabular-nums">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-primary/80 font-light leading-relaxed m-0">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Pricing & Audit Conversion Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-primary text-white p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.18),transparent_60%)]" />
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-wider text-accent-soft mb-2">
                  Tarif Agence Google Ads Maroc
                </p>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tabular-nums mb-3">
                  Dès 4 000 MAD / mois
                </h2>
                <p className="text-sm text-white/80 font-light leading-relaxed mb-6">
                  Honoraires mensuels fixes (env. 370 €/mois) + budget publicitaire réglé directement à Google. Aucun pourcentage prélevé sur vos dépenses médias.
                </p>

                <ul className="space-y-3 text-sm text-white/90 mb-8 pb-6 border-b border-white/10">
                  <li className="flex items-start gap-2.5">
                    <Check size={17} className="text-accent shrink-0 mt-0.5" />
                    <span>Audit initial, étude de mots-clés et structuration complète inclus (0 MAD de frais de dossier)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={17} className="text-accent shrink-0 mt-0.5" />
                    <span>Installation du tracking GTM + GA4 (WhatsApp, appels, formulaires, CMI, moteur PMS)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={17} className="text-accent shrink-0 mt-0.5" />
                    <span>Optimisation hebdomadaire des enchères, annonces RSA et exclusions négatives</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check size={17} className="text-accent shrink-0 mt-0.5" />
                    <span>Rapport mensuel transparent centré sur CPA, ROAS et revenus générés</span>
                  </li>
                </ul>

                <Link
                  to="/contact"
                  className="w-full bg-accent hover:bg-accent-hover text-white py-4 px-6 rounded-xl font-bold shadow-md transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <span>Recevoir mon Audit SEA Gratuit</span>
                  <ArrowRight size={18} />
                </Link>
                <p className="text-center text-xs text-white/65 mt-4 m-0">
                  Réponse sous 24h ouvrées · Casablanca &amp; Marrakech
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NATIONAL COVERAGE & COMPLEMENTARY INTERNAL MESH */}
      <section className="py-16 md:py-20 px-6 bg-bg border-y border-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-accent mb-3">
              Maillage Régional &amp; Synergies d’Acquisition
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 leading-tight">
              Une agence Google Ads active dans toutes les villes clés du Maroc
            </h2>
            <p className="text-base text-primary/75 font-light leading-relaxed">
              Que vous cibliez une clientèle locale au Maroc ou des acheteurs et voyageurs internationaux, nos équipes adaptent vos enchères et vos pages de destination aux réalités économiques de chaque bassin régional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pôles Régionaux Google Ads */}
            <div className="bg-white p-7 rounded-2xl border border-primary/10">
              <div className="flex items-center gap-2.5 mb-4">
                <MapPin size={20} className="text-accent shrink-0" />
                <h3 className="text-lg font-serif font-bold text-primary">
                  Pôles Google Ads par Ville
                </h3>
              </div>
              <p className="text-xs text-primary/70 font-light leading-relaxed mb-4">
                Découvrez nos stratégies d'acquisition payante et locale adaptées à chaque métropole marocaine :
              </p>
              <ul className="space-y-2.5 text-sm font-medium">
                <li>
                  <Link to="/expertise/google-ads/casablanca" className="text-primary hover:text-accent transition-colors flex items-center justify-between py-1 border-b border-primary/5">
                    <span>Gestion Google Ads à Casablanca (B2B &amp; PME)</span>
                    <ArrowRight size={14} className="text-accent shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link to="/expertise/google-ads/marrakech" className="text-primary hover:text-accent transition-colors flex items-center justify-between py-1 border-b border-primary/5">
                    <span>Google Ads &amp; Hotel Ads à Marrakech</span>
                    <ArrowRight size={14} className="text-accent shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link to="/zones/rabat" className="text-primary hover:text-accent transition-colors flex items-center justify-between py-1 border-b border-primary/5">
                    <span>Acquisition Digitale &amp; SEA à Rabat</span>
                    <ArrowRight size={14} className="text-accent shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link to="/zones/agadir" className="text-primary hover:text-accent transition-colors flex items-center justify-between py-1 border-b border-primary/5">
                    <span>Campagnes Hôtels &amp; Tourisme à Agadir</span>
                    <ArrowRight size={14} className="text-accent shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link to="/zones/maroc" className="text-primary hover:text-accent transition-colors flex items-center justify-between py-1">
                    <span>Hub National Maroc &amp; Campagnes Export</span>
                    <ArrowRight size={14} className="text-accent shrink-0" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Synergies SEO + Web + Ads */}
            <div className="bg-white p-7 rounded-2xl border border-primary/10">
              <div className="flex items-center gap-2.5 mb-4">
                <Layers size={20} className="text-accent shrink-0" />
                <h3 className="text-lg font-serif font-bold text-primary">
                  Synergies SEO, Site Web &amp; Ads
                </h3>
              </div>
              <p className="text-xs text-primary/70 font-light leading-relaxed mb-4">
                Maximisez le taux de conversion de vos annonces grâce à un écosystème digital rapide et cohérent :
              </p>
              <ul className="space-y-2.5 text-sm font-medium">
                <li>
                  <Link to="/agence-seo-maroc" className="text-primary hover:text-accent transition-colors flex items-center justify-between py-1 border-b border-primary/5">
                    <span>Agence SEO Maroc (Référencement Naturel)</span>
                    <ArrowRight size={14} className="text-accent shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link to="/creation-site-web" className="text-primary hover:text-accent transition-colors flex items-center justify-between py-1 border-b border-primary/5">
                    <span>Création de Site Web Haute Conversion</span>
                    <ArrowRight size={14} className="text-accent shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link to="/services/bundle-site-ads" className="text-primary hover:text-accent transition-colors flex items-center justify-between py-1 border-b border-primary/5">
                    <span>Pack Site Web + Publicité Google Ads</span>
                    <ArrowRight size={14} className="text-accent shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link to="/services/gestion-publicites-meta" className="text-primary hover:text-accent transition-colors flex items-center justify-between py-1 border-b border-primary/5">
                    <span>Publicité Meta Ads (Instagram &amp; Facebook)</span>
                    <ArrowRight size={14} className="text-accent shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link to="/reservation-directe" className="text-primary hover:text-accent transition-colors flex items-center justify-between py-1">
                    <span>Stratégie de Réservation Directe Hôtelière</span>
                    <ArrowRight size={14} className="text-accent shrink-0" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Ressources & Études Pratiques */}
            <div className="bg-white p-7 rounded-2xl border border-primary/10">
              <div className="flex items-center gap-2.5 mb-4">
                <BarChart3 size={20} className="text-accent shrink-0" />
                <h3 className="text-lg font-serif font-bold text-primary">
                  Guides SEA &amp; Secteurs Cibles
                </h3>
              </div>
              <p className="text-xs text-primary/70 font-light leading-relaxed mb-4">
                Approfondissez vos arbitrages budgétaires avec nos guides pratiques et pages sectorielles :
              </p>
              <ul className="space-y-2.5 text-sm font-medium">
                <li>
                  <Link to="/secteurs/pme-entreprises" className="text-primary hover:text-accent transition-colors flex items-center justify-between py-1 border-b border-primary/5">
                    <span>Acquisition B2B pour PME &amp; Entreprises</span>
                    <ArrowRight size={14} className="text-accent shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link to="/secteurs/hotels-resorts" className="text-primary hover:text-accent transition-colors flex items-center justify-between py-1 border-b border-primary/5">
                    <span>Solutions Digitales Hôtels &amp; Resorts</span>
                    <ArrowRight size={14} className="text-accent shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link to="/blog/tripadvisor-vs-google-ads" className="text-primary hover:text-accent transition-colors flex items-center justify-between py-1 border-b border-primary/5">
                    <span>Comparatif : Google Ads vs TripAdvisor Ads</span>
                    <ArrowRight size={14} className="text-accent shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link to="/blog/google-ads-riads-recherche-mots-cles" className="text-primary hover:text-accent transition-colors flex items-center justify-between py-1 border-b border-primary/5">
                    <span>Guide Mots-Clés Google Ads au Maroc</span>
                    <ArrowRight size={14} className="text-accent shrink-0" />
                  </Link>
                </li>
                <li>
                  <Link to="/realisations" className="text-primary hover:text-accent transition-colors flex items-center justify-between py-1">
                    <span>Consulter nos Études de Cas &amp; Résultats</span>
                    <ArrowRight size={14} className="text-accent shrink-0" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. E-E-A-T SENIOR SUPERVISION */}
      <section className="max-w-4xl mx-auto pt-16 pb-6 px-6">
        <div className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <img
            src="/images/youssef-avatar.webp"
            alt="Portrait de J.Mellal, Consultant SEO et Stratège Marketing Digital Propulsé par l'IA au Maroc"
            width={88}
            height={88}
            loading="lazy"
            className="w-20 h-20 rounded-full object-cover border-2 border-accent shrink-0"
          />
          <div>
            <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">
              Direction Stratégique SEA, SEO &amp; IA
            </p>
            <h3 className="text-xl font-serif font-bold text-primary mb-2">
              J.Mellal : Consultant SEO &amp; Stratège Marketing Digital Propulsé par l'IA
            </h3>
            <p className="text-sm text-primary/80 leading-relaxed m-0 font-light">
              Consultant SEO et stratège en marketing digital propulsé par l'IA, J.Mellal accompagne la croissance en ligne des entreprises au Maroc. Chaque architecture de compte Google Ads et GA4 (PME B2B à Casablanca, e-commerce national ou hôtellerie de charme à Marrakech) est auditée et pilotée avec une exigence unique : réduire votre coût par client acquis et maximiser votre marge nette vérifiée.
            </p>
          </div>
        </div>
      </section>

      {/* 8. COMPREHENSIVE FAQ SECTION */}
      <section className="py-12 md:py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-accent mb-3">
            Foire Aux Questions SEA
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
            Questions fréquentes sur notre Agence Google Ads au Maroc
          </h2>
        </div>

        <div className="space-y-4">
          {data.faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-primary/10 bg-white rounded-xl overflow-hidden transition-all"
              id={`faq-google-ads-${i}`}
            >
              <button
                type="button"
                className="w-full py-5 px-6 flex justify-between items-center text-left hover:bg-bg-alt/40 transition-colors cursor-pointer"
                onClick={() => toggleFaq(i)}
                aria-expanded={openFaqIndex === i}
              >
                <span className="font-serif font-bold text-primary text-base pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-accent shrink-0 transition-transform duration-300 ${
                    openFaqIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFaqIndex === i
                    ? 'max-h-[420px] opacity-100 border-t border-primary/5'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 text-sm text-primary/80 font-light leading-relaxed bg-bg-alt/15">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FINAL CONVERSION CALLOUT */}
      <section className="bg-primary text-white py-16 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-4">
            Prêt à rentabiliser vos campagnes Google Ads au Maroc ?
          </h2>
          <p className="text-base text-white/80 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Obtenez sous 24h ouvrées un audit gratuit de votre compte Google Ads existant ou un plan média chiffré (mots-clés, volumes de recherche au Maroc, CPC estimé et budget recommandé).
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all inline-flex items-center justify-center gap-2"
            >
              <span>Lancer mon Audit Google Ads Gratuit</span>
              <ArrowRight size={18} />
            </Link>
            <a
              href="mailto:contact@urunk.com"
              className="w-full sm:w-auto border border-white/20 hover:border-white/40 px-7 py-4 rounded-xl font-semibold text-white/90 hover:text-white transition-all inline-flex items-center justify-center"
            >
              contact@urunk.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
