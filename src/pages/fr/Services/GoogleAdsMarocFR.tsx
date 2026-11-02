import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import SEO from '../../../components/SEO';
import { buildServiceProviderSchema } from '../../../components/SEO/StructuredData';
import { servicesData } from '../../../data/servicesData';
import Button from '../../../components/ui/Button';
import Section from '../../../components/ui/Section';
import Hairline from '../../../components/ui/Hairline';

interface CampaignFormatItem {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
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
        'Filtrage continu des termes de recherche pour éliminer 100 % du gaspillage budgétaire',
      ],
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
        'Enchères automatisées basées sur la valeur réelle de conversion (tROAS / tCPA)',
      ],
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
        'Remontée des ventes confirmées via Google Tag Manager et GA4 E-commerce',
      ],
    },
    {
      num: '04',
      title: 'Google Hotel Ads & Réservation Directe Sans Commission OTA',
      subtitle: 'Reprenez vos nuitées face à Booking.com et Expedia sur votre propre nom et destination',
      description:
        "Les plateformes OTA enchérissent agressivement sur le nom même de votre hôtel ou riad au Maroc, prélevant ensuite [À CONFIRMER] de commission. En raccordant votre moteur PMS (Cloudbeds, Mews, SiteMinder, Amenitiz) à Google Hotel Ads et à des campagnes Search dédiées aux marchés émetteurs (France, Royaume-Uni, Espagne, États-Unis, Suisse), nous affichons votre tarif direct officiel en tête de Google.",
      deliverables: [
        'Protection de marque hôtelière et liens officiels Google Hotel Center',
        'Ciblage géolocalisé des voyageurs internationaux à haut panier moyen',
        'Mesure exacte du chiffre d’affaires direct généré dans votre PMS',
      ],
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
        'Ajustement des enchères selon vos horaires d’ouverture et pics de demande',
      ],
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
        'Créations orientées réassurance et incitation directe à la prise de contact',
      ],
    },
  ];

  const sectorBenchmarks: SectorBenchmarkRow[] = [
    {
      sector: 'PME, Services B2B & Industrie',
      cities: 'Casablanca, Rabat, Tanger, Kénitra',
      avgCpc: '3,50 – 9,00 MAD',
      recommendedBudget: '4 000 – 12 000 MAD / mois',
      primaryKpi: 'Demandes de devis qualifiées & appels commerciaux',
    },
    {
      sector: 'Hôtels, Riads & Tour-Opérateurs',
      cities: 'Marrakech, Agadir, Essaouira, Fès, Ouarzazate',
      avgCpc: '4,00 – 11,50 MAD',
      recommendedBudget: '5 000 – 15 000 MAD / mois',
      primaryKpi: 'Réservations directes PMS sans commission (ROAS 5x–9x)',
    },
    {
      sector: 'E-commerce & Marques D2C',
      cities: 'National (Maroc entier) & Export',
      avgCpc: '1,20 – 4,50 MAD',
      recommendedBudget: '5 000 – 20 000 MAD / mois',
      primaryKpi: 'Achats validés (CMI / COD confirmé) & coût par commande',
    },
    {
      sector: 'Immobilier, Cliniques & Enseignement',
      cities: 'Casablanca, Rabat, Marrakech, Tanger',
      avgCpc: '4,50 – 12,00 MAD',
      recommendedBudget: '5 000 – 15 000 MAD / mois',
      primaryKpi: 'Prises de rendez-vous, visites showrooms & leads WhatsApp',
    },
  ];

  const methodologySteps = [
    {
      num: '01',
      title: 'Audit SEA Complet & Cartographie d’Intention',
      desc: "Avant de dépenser le moindre dirham, notre agence Google Ads au Maroc audite votre historique de compte (ou vos concurrents directs sur la SERP marocaine), chiffre les volumes de recherche mensuels en français, anglais et arabe, et calcule votre coût par acquisition cible selon vos marges commerciales.",
    },
    {
      num: '02',
      title: 'Tracking Chirurgical : GTM, GA4, WhatsApp, Appels & CMI',
      desc: "Sans mesure fiable, les algorithmes d'enchères de Google optimisent à l'aveugle. Nous déployons Google Tag Manager (GTM), Google Analytics 4 (GA4) et le suivi des conversions améliorées (Enhanced Conversions) pour tracer chaque formulaire soumis, clic d'appel mobile, ouverture de conversation WhatsApp qualifiée, paiement CMI ou réservation PMS.",
    },
    {
      num: '03',
      title: 'Architecture de Compte & Pages d’Atterrissage ([À CONFIRMER])',
      desc: "Un bon clic envoyé vers une page lente détruit votre rentabilité. Nous structurons vos campagnes par intention d'achat stricte et optimisons vos pages de destination mobiles (message match, preuves de confiance, vitesse Core Web Vitals) pour maximiser votre Quality Score et payer chaque clic moins cher que vos concurrents.",
    },
    {
      num: '04',
      title: 'Pilotage Hebdomadaire, Tests A/B & Scaling du ROI',
      desc: "Chaque semaine, nos stratèges SEA purgent les requêtes non pertinentes, testent de nouvelles variantes d'annonces, réallouent le budget vers les régions et heures les plus rentables, et vous remettent un rapport exécutif limpide centré sur vos revenus générés — pas sur des impressions superficielles.",
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://urunk.com/google-ads-maroc#service',
    name: 'Agence Google Ads Maroc — Gestion de Campagnes SEA & PPC',
    serviceType: 'Gestion Google Ads (SEA / PPC)',
    description: data.description,
    provider: buildServiceProviderSchema(),
    areaServed: [
      { '@type': 'Country', name: 'Maroc' },
      { '@type': 'City', name: 'Casablanca' },
      { '@type': 'City', name: 'Marrakech' },
      { '@type': 'City', name: 'Rabat' },
      { '@type': 'City', name: 'Tanger' },
      { '@type': 'City', name: 'Agadir' },
    ],
    offers: {
      '@type': 'Offer',
      price: '4000',
      priceCurrency: 'MAD',
      description:
        'Forfait mensuel fixe de gestion Google Ads au Maroc dès 4 000 MAD HT/mois (0 % de commission sur le budget média réglé directement à Google).',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://urunk.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://urunk.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Agence Google Ads Maroc',
        item: 'https://urunk.com/google-ads-maroc',
      },
    ],
  };

  return (
    <div className="w-full bg-bg-light text-primary">
      <SEO
        title={data.title}
        description={data.description}
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* 1. EDITORIAL HERO */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm text-bg-light/75 mb-4">
              Acquisition payante SEA et performance marketing — Maroc
            </p>
            <h1 className="font-serif text-bg-light mb-6 text-balance">
              {data.heroTitle}
            </h1>
            <p className="text-lg text-bg-light/85 leading-relaxed mb-8 max-w-[65ch]">
              <strong className="text-bg-light font-semibold">Urunk</strong> est une <strong className="text-bg-light font-semibold">agence Google Ads au Maroc</strong> dédiée à la rentabilité mesurable des PME, entreprises B2B, marques e-commerce et établissements hôteliers. Depuis nos pôles de <strong className="text-bg-light font-semibold">Casablanca</strong> et <strong className="text-bg-light font-semibold">Marrakech</strong>, nous concevons et pilotons vos campagnes <strong className="text-bg-light font-semibold">Google Search</strong>, <strong className="text-bg-light font-semibold">Performance Max</strong>, <strong className="text-bg-light font-semibold">Google Shopping</strong> et <strong className="text-bg-light font-semibold">Google Hotel Ads</strong> pour capter les clients prêts à acheter — sans aucune commission sur votre budget publicitaire.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <Button href="/contact" variant="primary">
                Demander mon audit Google Ads gratuit
              </Button>
              <Button href="/tarifs" variant="secondary">
                Voir nos forfaits SEA
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-bg-light/75 pt-6 border-t border-white/15">
              <span>Propriété 100 % client du compte Google Ads</span>
              <span>Sans engagement forcé (préavis 15 jours)</span>
              <span>Suivi des conversions GA4, WhatsApp &amp; PMS</span>
            </div>
          </div>

          <div className="lg:col-span-5 border border-white/20 p-6 sm:p-8 rounded-sm">
            <h2 className="font-serif text-2xl text-bg-light mb-6 pb-4 border-b border-white/15">
              Synthèse Exécutive — Pilotage SEA Urunk
            </h2>
            <dl className="grid grid-cols-2 gap-6 mb-6 tabular-nums">
              <div>
                <dd className="font-serif text-2xl sm:text-3xl text-bg-light mb-1 m-0">
                  4 000 MAD
                </dd>
                <dt className="text-xs text-bg-light/75 leading-snug">
                  Forfait mensuel fixe dès 4 000 MAD HT/mois
                </dt>
              </div>
              <div>
                <dd className="font-serif text-2xl sm:text-3xl text-bg-light mb-1 m-0">
                  0 %
                </dd>
                <dt className="text-xs text-bg-light/75 leading-snug">
                  Commission sur votre budget média Google
                </dt>
              </div>
              <div>
                <dd className="font-serif text-2xl sm:text-3xl text-bg-light mb-1 m-0">
                  24 – 48 h
                </dd>
                <dt className="text-xs text-bg-light/75 leading-snug">
                  Premiers prospects &amp; clics qualifiés après lancement
                </dt>
              </div>
              <div>
                <dd className="font-serif text-2xl sm:text-3xl text-bg-light mb-1 m-0">
                  FR, EN, AR
                </dd>
                <dt className="text-xs text-bg-light/75 leading-snug">
                  Campagnes multilingues Maroc &amp; International
                </dt>
              </div>
            </dl>
            <p className="text-xs text-bg-light/85 leading-relaxed pt-4 border-t border-white/15 m-0">
              <strong className="text-bg-light font-semibold">Diagnostic gratuit sous [À CONFIRMER] :</strong> audit de vos campagnes actuelles ou estimation chiffrée du potentiel de recherche et du CPC moyen sur votre secteur au Maroc.
            </p>
          </div>
        </div>
      </Section>

      {/* 2. PROBLEM & AGENCY COMPARISON SECTION */}
      <Section tone="light">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6">
            <p className="text-sm text-accent font-medium mb-3">
              Constat terrain au Maroc
            </p>
            <h2 className="font-serif text-primary mb-6 text-balance">
              Pourquoi confier vos campagnes à une agence Google Ads spécialisée au Maroc ?
            </h2>
            <div className="space-y-4 text-primary/85 leading-relaxed max-w-[65ch]">
              <p>{data.problemText1}</p>
              <p>{data.problemText2}</p>
            </div>
          </div>

          <div className="lg:col-span-6 border border-border-subtle bg-bg-card p-8 rounded-sm">
            <h3 className="font-serif text-primary pb-4 mb-6 border-b border-border-subtle">
              {data.signsTitle}
            </h3>
            <div className="divide-y divide-border-subtle">
              {data.signs.map((sign, idx) => (
                <p key={idx} className="py-3.5 first:pt-0 last:pb-0 text-sm text-primary/85 leading-relaxed m-0">
                  {sign}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="border border-border-subtle bg-bg-card rounded-sm overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-border-subtle bg-bg-alt">
            <h3 className="font-serif text-primary mb-2">
              Comparatif : Gestion interne vs Agence au pourcentage vs Agence Google Ads Urunk
            </h3>
            <p className="text-sm text-primary/80 m-0 max-w-[65ch]">
              Comprenez comment le modèle de rémunération et la rigueur technique impactent directement votre coût d'acquisition client au Maroc.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm min-w-[680px]">
              <thead>
                <tr className="bg-primary text-bg-light">
                  <th className="py-4 px-5 font-medium">Critère Stratégique</th>
                  <th className="py-4 px-5 font-medium">Gestion Interne / Boost Auto</th>
                  <th className="py-4 px-5 font-medium">Agence Classique (% Budget)</th>
                  <th className="py-4 px-5 font-semibold">Urunk — Agence Google Ads Maroc</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                <tr className="bg-bg-card">
                  <td className="py-4 px-5 font-semibold text-primary">Modèle de facturation</td>
                  <td className="py-4 px-5 text-primary/80">Temps interne caché + clics perdus</td>
                  <td className="py-4 px-5 text-primary/80 tabular-nums">15 % à 20 % du budget média</td>
                  <td className="py-4 px-5 font-semibold text-primary tabular-nums">Forfait fixe dès 4 000 MAD/mois (0 % marge média)</td>
                </tr>
                <tr className="bg-bg-light">
                  <td className="py-4 px-5 font-semibold text-primary">Ciblage des mots-clés</td>
                  <td className="py-4 px-5 text-primary/80">Requêtes larges automatiques coûteuses</td>
                  <td className="py-4 px-5 text-primary/80">Mots-clés génériques à fort volume</td>
                  <td className="py-4 px-5 font-semibold text-primary">Intention transactionnelle exacte + exclusions hebdomadaires</td>
                </tr>
                <tr className="bg-bg-card">
                  <td className="py-4 px-5 font-semibold text-primary">Tracking des conversions Maroc</td>
                  <td className="py-4 px-5 text-primary/80">Clics simples sans suivi de revenu</td>
                  <td className="py-4 px-5 text-primary/80">Formulaires basiques uniquement</td>
                  <td className="py-4 px-5 font-semibold text-primary">GTM + GA4 : WhatsApp, appels, devis CRM, CMI &amp; PMS hôtelier</td>
                </tr>
                <tr className="bg-bg-light">
                  <td className="py-4 px-5 font-semibold text-primary">Propriété du compte</td>
                  <td className="py-4 px-5 text-primary/80">Client</td>
                  <td className="py-4 px-5 text-primary/80">Souvent bloquée sur un compte agence</td>
                  <td className="py-4 px-5 font-semibold text-primary">100 % propriétaire dès le jour 1 (accès admin complet)</td>
                </tr>
                <tr className="bg-bg-card">
                  <td className="py-4 px-5 font-semibold text-primary">Engagement contractuel</td>
                  <td className="py-4 px-5 text-primary/80">—</td>
                  <td className="py-4 px-5 text-primary/80 tabular-nums">Engagement rigide 6 à 12 mois</td>
                  <td className="py-4 px-5 font-semibold text-primary tabular-nums">Liberté mensuelle (préavis écrit 15 jours, sans pénalité)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* 3. 6 GOOGLE ADS CAMPAIGN FORMATS AS EDITORIAL ROWS */}
      <Section tone="alt">
        <div className="max-w-3xl mb-12">
          <p className="text-sm text-accent font-medium mb-2">
            Architecture SEA et PPC complète
          </p>
          <h2 className="font-serif text-primary mb-4 text-balance">
            Nos 6 leviers Google Ads déployés pour votre croissance au Maroc
          </h2>
          <p className="text-primary/80 leading-relaxed max-w-[65ch]">
            Chaque entreprise possède un cycle d'achat distinct. Notre agence sélectionne et combine uniquement les formats publicitaires Google qui génèrent un retour sur investissement vérifiable pour votre activité.
          </p>
        </div>

        <div>
          <Hairline />
          {campaignFormats.map(item => (
            <React.Fragment key={item.num}>
              <div className="py-9 grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                <div className="lg:col-span-1 text-sm font-medium text-accent tabular-nums pt-1">
                  {item.num}
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-serif text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-accent font-medium m-0">{item.subtitle}</p>
                </div>
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-primary/85 leading-relaxed m-0 max-w-[65ch]">
                    {item.description}
                  </p>
                  <ul className="space-y-2 pt-3 border-t border-border-subtle text-sm text-primary/80">
                    {item.deliverables.map((deliv, i) => (
                      <li key={i}>{deliv}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Hairline />
            </React.Fragment>
          ))}
        </div>
      </Section>

      {/* 4. MOROCCAN MARKET BENCHMARKS & DOTATION BILLING */}
      <Section tone="light">
        <div className="max-w-3xl mb-12">
          <p className="text-sm text-accent font-medium mb-2">
            Données et repères budgétaires Maroc
          </p>
          <h2 className="font-serif text-primary mb-4 text-balance">
            Benchmarks Google Ads au Maroc : CPC moyens, budgets et secteurs accompagnés
          </h2>
          <p className="text-primary/80 leading-relaxed max-w-[65ch]">
            Quel budget prévoir pour dominer la première page de Google à Casablanca, Marrakech, Rabat ou à l'échelle nationale ? Voici les fourchettes de coûts par clic (CPC) et d'investissements médias observées sur nos comptes clients au Maroc.
          </p>
        </div>

        <div className="border border-border-subtle bg-bg-card rounded-sm overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm min-w-[680px]">
              <thead>
                <tr className="bg-primary text-bg-light">
                  <th className="py-4 px-5 font-medium">Secteur d’Activité</th>
                  <th className="py-4 px-5 font-medium">Zones Clés</th>
                  <th className="py-4 px-5 font-medium">CPC Moyen Observé</th>
                  <th className="py-4 px-5 font-medium">Budget Média Conseillé</th>
                  <th className="py-4 px-5 font-medium">Objectif Principal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {sectorBenchmarks.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? 'bg-bg-light' : 'bg-bg-card'}>
                    <td className="py-4 px-5 font-semibold text-primary">{row.sector}</td>
                    <td className="py-4 px-5 text-primary/80">{row.cities}</td>
                    <td className="py-4 px-5 font-semibold text-accent tabular-nums whitespace-nowrap">{row.avgCpc}</td>
                    <td className="py-4 px-5 font-medium text-primary tabular-nums whitespace-nowrap">{row.recommendedBudget}</td>
                    <td className="py-4 px-5 text-primary/85">{row.primaryKpi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 pt-8 border-t border-border-subtle">
          <div>
            <h3 className="font-serif text-primary mb-3">
              Paiement Google Ads &amp; Dotation E-commerce au Maroc
            </h3>
            <p className="text-sm text-primary/85 leading-relaxed m-0 max-w-[60ch]">
              Au Maroc, le règlement direct des régies publicitaires internationales (Google Ireland Ltd) s'effectue simplement via la <strong>dotation e-commerce internationale</strong> activée sur votre carte bancaire professionnelle marocaine (jusqu'à 100 % de l'IS payé dans la limite réglementaire de l'Office des Changes pour les sociétés) ou via un compte en devises / carte internationale. Nous configurons votre profil de facturation officiel pour garantir une comptabilité claire et 0 % de frais d'intermédiation.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-primary mb-3">
              Arbitrage Multilingue (Français, Anglais &amp; Arabe)
            </h3>
            <p className="text-sm text-primary/85 leading-relaxed m-0 max-w-[60ch]">
              Les intentions de recherche au Maroc varient fortement selon la langue : requêtes B2B majoritairement francophones à Casablanca et Rabat, recherches touristiques anglophones, francophones et hispanophones vers Marrakech et Agadir, et requêtes locales grand public bilingues français/arabe. Nous segmentons vos campagnes par langue afin d'aligner chaque annonce avec la page de destination correspondante.
            </p>
          </div>
        </div>
      </Section>

      {/* 5. 4-STEP METHODOLOGY & CONVERSION TRACKING */}
      <Section tone="alt">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm text-accent font-medium mb-2">
              Méthodologie d’ingénierie SEA
            </p>
            <h2 className="font-serif text-primary mb-8 text-balance">
              Comment notre agence Google Ads transforme vos clics en chiffre d’affaires
            </h2>

            <div>
              <Hairline />
              {methodologySteps.map(step => (
                <React.Fragment key={step.num}>
                  <div className="py-7 flex gap-6 items-baseline">
                    <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="font-serif text-primary mb-2">{step.title}</h3>
                      <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  <Hairline />
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-primary text-bg-light p-8 sm:p-10 rounded-sm space-y-5">
              <p className="text-sm text-bg-light/75 m-0">
                Tarif agence Google Ads Maroc
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-bg-light tabular-nums m-0">
                Dès 4 000 MAD / mois
              </h2>
              <p className="text-sm text-bg-light/85 leading-relaxed m-0">
                Honoraires mensuels fixes (env. 370 €/mois) + budget publicitaire réglé directement à Google. Aucun pourcentage prélevé sur vos dépenses médias.
              </p>

              <ul className="space-y-3 text-sm text-bg-light/90 py-5 border-y border-white/15">
                <li>Audit initial, étude de mots-clés et structuration complète inclus (0 MAD de frais de dossier)</li>
                <li>Installation du tracking GTM + GA4 (WhatsApp, appels, formulaires, CMI, moteur PMS)</li>
                <li>Optimisation hebdomadaire des enchères, annonces RSA et exclusions négatives</li>
                <li>Rapport mensuel transparent centré sur CPA, ROAS et revenus générés</li>
              </ul>

              <Button href="/contact" variant="primary" className="w-full">
                Recevoir mon audit SEA gratuit
              </Button>
              <p className="text-xs text-bg-light/75 m-0">
                Réponse sous [À CONFIRMER], Casablanca &amp; Marrakech
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. NATIONAL COVERAGE & COMPLEMENTARY INTERNAL MESH */}
      <Section tone="light">
        <div className="max-w-3xl mb-12">
          <p className="text-sm text-accent font-medium mb-2">
            Maillage régional et synergies d’acquisition
          </p>
          <h2 className="font-serif text-primary mb-4 text-balance">
            Une agence Google Ads active dans toutes les villes clés du Maroc
          </h2>
          <p className="text-primary/80 leading-relaxed max-w-[65ch]">
            Que vous cibliez une clientèle locale au Maroc ou des acheteurs et voyageurs internationaux, nos équipes adaptent vos enchères et vos pages de destination aux réalités économiques de chaque bassin régional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 pt-8 border-t border-border-subtle">
          <div>
            <h3 className="font-serif text-primary mb-3">
              Pôles Google Ads par Ville
            </h3>
            <p className="text-sm text-primary/75 leading-relaxed mb-4">
              Découvrez nos stratégies d'acquisition payante et locale adaptées à chaque métropole marocaine :
            </p>
            <ul className="divide-y divide-border-subtle text-sm">
              <li className="py-2.5">
                <Link to="/expertise/google-ads/casablanca">
                  Gestion Google Ads à Casablanca (B2B &amp; PME)
                </Link>
              </li>
              <li className="py-2.5">
                <Link to="/expertise/google-ads/marrakech">
                  Google Ads &amp; Hotel Ads à Marrakech
                </Link>
              </li>
              <li className="py-2.5">
                <Link to="/zones/rabat">
                  Acquisition Digitale &amp; SEA à Rabat
                </Link>
              </li>
              <li className="py-2.5">
                <Link to="/zones/agadir">
                  Campagnes Hôtels &amp; Tourisme à Agadir
                </Link>
              </li>
              <li className="py-2.5">
                <Link to="/zones/maroc">
                  Hub National Maroc &amp; Campagnes Export
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-primary mb-3">
              Synergies SEO, Site Web &amp; Ads
            </h3>
            <p className="text-sm text-primary/75 leading-relaxed mb-4">
              Maximisez le taux de conversion de vos annonces grâce à un écosystème digital rapide et cohérent :
            </p>
            <ul className="divide-y divide-border-subtle text-sm">
              <li className="py-2.5">
                <Link to="/agence-seo-maroc">
                  Agence SEO Maroc (Référencement Naturel)
                </Link>
              </li>
              <li className="py-2.5">
                <Link to="/services/creation-site-web">
                  Création de Site Web Haute Conversion
                </Link>
              </li>
              <li className="py-2.5">
                <Link to="/services/bundle-site-ads">
                  Pack Site Web + Publicité Google Ads
                </Link>
              </li>
              <li className="py-2.5">
                <Link to="/services/gestion-publicites-meta">
                  Publicité Meta Ads (Instagram &amp; Facebook)
                </Link>
              </li>
              <li className="py-2.5">
                <Link to="/marketing-digital-hotelier">
                  Marketing Digital Hôtelier au Maroc (Stratégie &amp; ROI)
                </Link>
              </li>
              <li className="py-2.5">
                <Link to="/reservation-directe">
                  Stratégie de Réservation Directe Hôtelière
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-primary mb-3">
              Guides SEA &amp; Secteurs Cibles
            </h3>
            <p className="text-sm text-primary/75 leading-relaxed mb-4">
              Approfondissez vos arbitrages budgétaires avec nos guides pratiques et pages sectorielles :
            </p>
            <ul className="divide-y divide-border-subtle text-sm">
              <li className="py-2.5">
                <Link to="/secteurs/pme-entreprises">
                  Acquisition B2B pour PME &amp; Entreprises
                </Link>
              </li>
              <li className="py-2.5">
                <Link to="/secteurs/hotels-resorts">
                  Solutions Digitales Hôtels &amp; Resorts
                </Link>
              </li>
              <li className="py-2.5">
                <Link to="/blog/tripadvisor-vs-google-ads">
                  Comparatif : Google Ads vs TripAdvisor Ads
                </Link>
              </li>
              <li className="py-2.5">
                <Link to="/blog/google-ads-riads-recherche-mots-cles">
                  Guide Mots-Clés Google Ads au Maroc
                </Link>
              </li>
              <li className="py-2.5">
                <Link to="/realisations">
                  Consulter nos Études de Cas &amp; Résultats
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 7. E-E-A-T SENIOR SUPERVISION */}
        <div className="max-w-3xl mt-16 border-y border-border-subtle py-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <img
            src="/images/youssef-avatar.webp"
            alt="Portrait de J.Mellal, Consultant SEO et Stratège Marketing Digital Propulsé par l'IA au Maroc"
            width={80}
            height={80}
            loading="lazy"
            className="w-20 h-20 rounded-full object-cover border border-border-subtle shrink-0"
          />
          <div>
            <p className="text-sm text-accent font-medium mb-1">
              Direction stratégique SEA, SEO et IA
            </p>
            <h3 className="font-serif text-primary mb-2">
              J.Mellal : Consultant SEO &amp; Stratège Marketing Digital Propulsé par l'IA
            </h3>
            <p className="text-sm text-primary/80 leading-relaxed m-0">
              Consultant SEO et stratège en marketing digital propulsé par l'IA, J.Mellal accompagne la croissance en ligne des entreprises au Maroc. Chaque architecture de compte Google Ads et GA4 (PME B2B à Casablanca, e-commerce national ou hôtellerie de charme à Marrakech) est auditée et pilotée avec une exigence unique : réduire votre coût par client acquis et maximiser votre marge nette vérifiée.
            </p>
          </div>
        </div>
      </Section>

      {/* 8. COMPREHENSIVE FAQ SECTION */}
      <Section tone="alt">
        <div className="max-w-3xl">
          <p className="text-sm text-accent font-medium mb-2">
            Foire aux questions SEA
          </p>
          <h2 className="font-serif text-primary mb-10 text-balance">
            Questions fréquentes sur notre Agence Google Ads au Maroc
          </h2>

          <div>
            <Hairline />
            {data.faqs.map((faq, i) => (
              <React.Fragment key={i}>
                <details
                  id={`faq-google-ads-${i}`}
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
        </div>
      </Section>

      {/* 9. FINAL CONVERSION CALLOUT */}
      <Section tone="dark">
        <div className="max-w-3xl">
          <h2 className="font-serif text-bg-light mb-4 text-balance">
            Prêt à rentabiliser vos campagnes Google Ads au Maroc ?
          </h2>
          <p className="text-bg-light/85 max-w-[60ch] mb-8 leading-relaxed">
            Obtenez sous [À CONFIRMER] un audit gratuit de votre compte Google Ads existant ou un plan média chiffré (mots-clés, volumes de recherche au Maroc, CPC estimé et budget recommandé).
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Button href="/contact" variant="primary">
              Lancer mon audit Google Ads gratuit
            </Button>
            <Button href="mailto:contact@urunk.com" variant="secondary">
              contact@urunk.com
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
