import { 
  Globe, 
  Search, 
  BarChart3, 
  Building2, 
  MapPin, 
  Sparkles, 
  FileText, 
  BookOpen, 
  Layout, 
  CheckCircle2, 
  Compass,
  Utensils,
  Megaphone,
  Layers
} from 'lucide-react';

export interface NavItem {
  title: { en: string; fr: string };
  desc: { en: string; fr: string };
  link: { en: string; fr: string };
  badge?: { en: string; fr: string };
  icon?: any;
}

export interface NavGroup {
  id: string;
  title: { en: string; fr: string };
  link?: { en: string; fr: string };
  columns?: {
    heading: { en: string; fr: string };
    items: NavItem[];
  }[];
  simpleItems?: NavItem[];
}

export const navData: NavGroup[] = [
  {
    id: 'services',
    title: { en: 'Services', fr: 'Services' },
    simpleItems: [
      {
        title: { en: 'Website Design', fr: 'Création de Site Web' },
        desc: { en: 'Custom, high-converting sites for hospitality & brands', fr: 'Sites sur-mesure à haute conversion pour l\'hôtellerie & marques' },
        link: { en: '/en/services/website-design', fr: '/services/creation-site-web' },
        icon: Layout
      },
      {
        title: { en: 'SEO & Ranking', fr: 'SEO & Référencement' },
        desc: { en: 'Dominate organic search & maps for commercial terms', fr: 'Dominez la recherche organique & Google Maps sur vos mots-clés' },
        link: { en: '/en/seo-agency-morocco', fr: '/agence-seo-maroc' },
        icon: Search
      },
      {
        title: { en: 'Hotel SEO', fr: 'SEO Hôtelier' },
        desc: { en: 'Outrank online travel agencies on Google Search', fr: 'Dépassez les agences de voyage en ligne sur Google Search' },
        link: { en: '/en/hotel-seo', fr: '/seo-hotel' },
        icon: BarChart3,
        badge: { en: 'Popular', fr: 'Populaire' }
      },
      {
        title: { en: 'Google Ads', fr: 'Google Ads' },
        desc: { en: 'High-intent search campaigns targeting active searchers', fr: 'Campagnes d\'acquisition ciblées sur Google pour un ROI immédiat' },
        link: { en: '/en/google-ads-morocco', fr: '/google-ads-maroc' },
        icon: Megaphone
      },
      {
        title: { en: 'Meta Ads', fr: 'Meta Ads' },
        desc: { en: 'Visual advertising on Instagram & Facebook', fr: 'Publicités visuelles ciblées sur Instagram et Facebook' },
        link: { en: '/en/services/meta-ads', fr: '/services/gestion-publicites-meta' },
        icon: Sparkles
      },
      {
        title: { en: 'TripAdvisor Ads', fr: 'TripAdvisor Ads' },
        desc: { en: 'Capture high-intent travelers in reservation phase', fr: 'Captez les voyageurs actifs en pleine phase de réservation' },
        link: { en: '/en/services/tripadvisor-ads', fr: '/services/tripadvisor-ads' },
        icon: Compass
      },
      {
        title: { en: 'Website + Ads Package', fr: 'Pack Site Web + Ads' },
        desc: { en: 'All-in-one web, SEO & paid acquisition package', fr: 'Formule clé en main Web, SEO & Publicités' },
        link: { en: '/en/services/bundle-site-ads', fr: '/services/bundle-site-ads' },
        icon: Layers,
        badge: { en: 'Best Value', fr: 'Meilleur Choix' }
      }
    ]
  },
  {
    id: 'secteurs-zones',
    title: { en: 'Sectors & Locations', fr: 'Secteurs & Zones' },
    columns: [
      {
        heading: { en: 'Sectors', fr: 'Secteurs' },
        items: [
          {
            title: { en: 'Hotels & Resorts', fr: 'Hôtels & Resorts' },
            desc: { en: 'Direct bookings for luxury establishments', fr: 'Réservations directes pour hôtels & résidences' },
            link: { en: '/en/industries/hotels-resorts', fr: '/secteurs/hotels-resorts' },
            icon: Building2
          },
          {
            title: { en: 'Riads & Boutique Stays', fr: 'Riads & Maisons d\'Hôtes' },
            desc: { en: 'Dedicated Medina property growth hub', fr: 'Pôle digital dédié aux riads de la médina' },
            link: { en: '/en/industries/riads-boutique-hotels', fr: '/secteurs/riads-maisons-hotes' },
            icon: Sparkles
          },
          {
            title: { en: 'Tour Operators & Excursions', fr: 'Tour-Opérateurs & Excursions' },
            desc: { en: 'Inbound booking & lead generation systems', fr: 'Systèmes de réservation directe et génération de fiches' },
            link: { en: '/en/industries/tour-operators', fr: '/secteurs/tour-operateurs' },
            icon: Compass
          },
          {
            title: { en: 'Restaurants & Catering', fr: 'Restaurants & Traiteurs' },
            desc: { en: 'Local SEO visibility and reservation requests', fr: 'Visibilité locale sur Maps et demandes d\'événements' },
            link: { en: '/en/industries/restaurants-catering', fr: '/secteurs/restaurants-traiteurs' },
            icon: Utensils
          },
          {
            title: { en: 'Corporate & Local SMEs', fr: 'PME & Entreprises Locales' },
            desc: { en: 'B2B digital growth and web design', fr: 'Croissance B2B et autorité digitale des PME d\'affaires' },
            link: { en: '/en/industries/corporate-smes', fr: '/secteurs/pme-entreprises' },
            icon: Building2
          }
        ]
      },
      {
        heading: { en: 'Locations', fr: 'Zones' },
        items: [
          {
            title: { en: 'Morocco (National)', fr: 'Maroc (Hub National)' },
            desc: { en: 'Growth campaigns operating nationwide', fr: 'Campagnes d\'acquisition actives sur tout le Maroc' },
            link: { en: '/en/locations/morocco', fr: '/zones/maroc' },
            icon: Globe
          },
          {
            title: { en: 'Casablanca (Business)', fr: 'Casablanca (Centre d\'Affaires)' },
            desc: { en: 'Corporate web design and B2B local search', fr: 'Design web corporatif et SEO B2B de proximité' },
            link: { en: '/en/locations/casablanca', fr: '/zones/casablanca' },
            icon: Building2
          },
          {
            title: { en: 'Marrakech (Tourism)', fr: 'Marrakech (Tourisme & Riads)' },
            desc: { en: 'Riad SEO and luxury stay acquisition', fr: 'Référencement de riads et acquisition d\'hébergements de prestige' },
            link: { en: '/en/locations/marrakech', fr: '/zones/marrakech' },
            icon: Sparkles
          },
          {
            title: { en: 'Rabat (Capital)', fr: 'Rabat (Hub Capitale)' },
            desc: { en: 'B2B SEO & corporate web solutions', fr: 'SEO local B2B et solutions web institutionnelles' },
            link: { en: '/en/locations/rabat', fr: '/zones/rabat' },
            icon: Building2
          },
          {
            title: { en: 'Agadir (Coastal)', fr: 'Agadir (Hub Balnéaire)' },
            desc: { en: 'Beach resort marketing and local lead gen', fr: 'Marketing d\'hôtels côtiers et excursions balnéaires' },
            link: { en: '/en/locations/agadir', fr: '/zones/agadir' },
            icon: Compass
          }
        ]
      }
    ]
  },
  {
    id: 'tarifs',
    title: { en: 'Pricing', fr: 'Tarifs' },
    link: { en: '/en/pricing', fr: '/tarifs' }
  },
  {
    id: 'resources',
    title: { en: 'Resources', fr: 'Ressources' },
    simpleItems: [
      {
        title: { en: 'Strategy Examples', fr: 'Exemples de Stratégies' },
        desc: { en: 'Direct booking case files & marketing formulas', fr: 'Modèles de stratégies d\'acquisition pour l\'hôtellerie' },
        link: { en: '/en/work', fr: '/realisations' },
        icon: BarChart3
      },
      {
        title: { en: 'Blog & Guides', fr: 'Blog & Guides Marketing' },
        desc: { en: 'Actionable insight articles on SEO & direct bookings', fr: 'Conseils pratiques et guides d\'acquisition directe' },
        link: { en: '/en/blog', fr: '/blog' },
        icon: BookOpen
      },
      {
        title: { en: 'Frequently Asked Questions', fr: 'Foire Aux Questions' },
        desc: { en: 'Transparent answers on scopes and guarantees', fr: 'Réponses claires sur nos méthodes, délais et garanties' },
        link: { en: '/en/faq', fr: '/faq' },
        icon: CheckCircle2
      }
    ]
  },
  {
    id: 'a-propos',
    title: { en: 'About Us', fr: 'À Propos' },
    link: { en: '/en/about', fr: '/a-propos' }
  }
];
