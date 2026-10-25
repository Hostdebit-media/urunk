import {
  Globe,
  Search,
  BarChart3,
  Building2,
  Sparkles,
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
        title: { en: 'Website Design', fr: 'Création de site web' },
        desc: {
          en: 'Bilingual websites connected to your booking engine or quote form',
          fr: 'Sites bilingues reliés à votre moteur de réservation ou formulaire'
        },
        link: { en: '/en/services/website-design', fr: '/services/creation-site-web' },
        icon: Layout
      },
      {
        title: { en: 'Local SEO & Google Maps', fr: 'SEO et Google Maps' },
        desc: {
          en: 'Local search rankings and Google Business Profile management',
          fr: 'Classement local sur Google et suivi de fiche établissement'
        },
        link: { en: '/en/seo-agency-morocco', fr: '/agence-seo-maroc' },
        icon: Search
      },
      {
        title: { en: 'Hotel SEO', fr: 'SEO hôtelier' },
        desc: {
          en: 'Search visibility for hotels, riads, and guesthouses in Morocco',
          fr: 'Visibilité sur Google pour hôtels, riads et maisons d’hôtes'
        },
        link: { en: '/en/hotel-seo', fr: '/seo-hotel' },
        icon: BarChart3
      },
      {
        title: { en: 'Google Ads', fr: 'Google Ads' },
        desc: {
          en: 'Search campaigns managed directly inside your Google Ads account',
          fr: 'Annonces de recherche gérées directement sur votre compte Google'
        },
        link: { en: '/en/google-ads-morocco', fr: '/google-ads-maroc' },
        icon: Megaphone
      },
      {
        title: { en: 'Meta Ads', fr: 'Meta Ads' },
        desc: {
          en: 'Instagram and Facebook ad campaigns and visitor retargeting',
          fr: 'Campagnes Instagram et Facebook et relance des visiteurs'
        },
        link: { en: '/en/services/meta-ads', fr: '/services/gestion-publicites-meta' },
        icon: Sparkles
      },
      {
        title: { en: 'TripAdvisor Ads', fr: 'TripAdvisor Ads' },
        desc: {
          en: 'Sponsored placements and listing updates on TripAdvisor',
          fr: 'Emplacements sponsorisés et mise à jour de fiche TripAdvisor'
        },
        link: { en: '/en/services/tripadvisor-ads', fr: '/services/tripadvisor-ads' },
        icon: Compass
      },
      {
        title: { en: 'Website + Ads Package', fr: 'Pack site web et annonces' },
        desc: {
          en: 'Combined website delivery and monthly ad management',
          fr: 'Création du site et gestion mensuelle de vos annonces'
        },
        link: { en: '/en/services/bundle-site-ads', fr: '/services/bundle-site-ads' },
        icon: Layers
      }
    ]
  },
  {
    id: 'secteurs-zones',
    title: { en: 'Sectors & Cities', fr: 'Secteurs et villes' },
    columns: [
      {
        heading: { en: 'Sectors', fr: 'Secteurs' },
        items: [
          {
            title: { en: 'Hotels & Resorts', fr: 'Hôtels et complexes' },
            desc: { en: 'PMS connection and hotel search campaigns', fr: 'Connexion PMS et campagnes de recherche hôtelière' },
            link: { en: '/en/industries/hotels-resorts', fr: '/secteurs/hotels-resorts' },
            icon: Building2
          },
          {
            title: { en: 'Riads & Guesthouses', fr: 'Riads et maisons d’hôtes' },
            desc: { en: 'Bilingual sites and Google Maps visibility in Medinas', fr: 'Sites bilingues et présence sur Google Maps en médina' },
            link: { en: '/en/industries/riads-boutique-hotels', fr: '/secteurs/riads-maisons-hotes' },
            icon: Sparkles
          },
          {
            title: { en: 'Tour Operators', fr: 'Excursions et agences' },
            desc: { en: 'Mobile itinerary pages and direct WhatsApp inquiries', fr: 'Pages d’itinéraires mobiles et contact WhatsApp direct' },
            link: { en: '/en/industries/tour-operators', fr: '/secteurs/tour-operateurs' },
            icon: Compass
          },
          {
            title: { en: 'Restaurants & Catering', fr: 'Restaurants et traiteurs' },
            desc: { en: 'Local table bookings and corporate event quote forms', fr: 'Réservations de table et devis pour réceptions' },
            link: { en: '/en/industries/restaurants-catering', fr: '/secteurs/restaurants-traiteurs' },
            icon: Utensils
          },
          {
            title: { en: 'SMEs & B2B Services', fr: 'PME et cabinets B2B' },
            desc: { en: 'Service websites and local quote request campaigns', fr: 'Sites vitrines rapides et demandes de devis locales' },
            link: { en: '/en/industries/corporate-smes', fr: '/secteurs/pme-entreprises' },
            icon: Building2
          }
        ]
      },
      {
        heading: { en: 'Cities', fr: 'Villes' },
        items: [
          {
            title: { en: 'Morocco (Overview)', fr: 'Maroc (vue d’ensemble)' },
            desc: { en: 'Support across all regions of Morocco', fr: 'Accompagnement dans les principales villes du Maroc' },
            link: { en: '/en/locations/morocco', fr: '/zones/maroc' },
            icon: Globe
          },
          {
            title: { en: 'Casablanca', fr: 'Casablanca' },
            desc: { en: 'Agency office in Maarif for SMEs and business hotels', fr: 'Bureau à Maarif pour PME, traiteurs et hôtels d’affaires' },
            link: { en: '/en/locations/casablanca', fr: '/zones/casablanca' },
            icon: Building2
          },
          {
            title: { en: 'Marrakech', fr: 'Marrakech' },
            desc: { en: 'Riads, villas, and tourism operators in Medina and Gueliz', fr: 'Riads, villas et activités en Médina, Guéliz et Palmeraie' },
            link: { en: '/en/locations/marrakech', fr: '/zones/marrakech' },
            icon: Sparkles
          },
          {
            title: { en: 'Rabat', fr: 'Rabat' },
            desc: { en: 'Websites and local search for B2B firms and hotels', fr: 'Sites professionnels et référencement local à Rabat' },
            link: { en: '/en/locations/rabat', fr: '/zones/rabat' },
            icon: Building2
          },
          {
            title: { en: 'Agadir', fr: 'Agadir' },
            desc: { en: 'Coastal hotels, surf camps, and seasonal search ads', fr: 'Hôtels côtiers, résidences et activités à Agadir et Taghazout' },
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
        title: { en: 'Project Dossiers', fr: 'Dossiers métiers' },
        desc: { en: 'Technical setups by hospitality and service sector', fr: 'Exemples d’architectures mises en place par métier' },
        link: { en: '/en/work', fr: '/realisations' },
        icon: BarChart3
      },
      {
        title: { en: 'Blog & Guides', fr: 'Articles et guides' },
        desc: { en: 'Practical articles on PMS tools, SEO, and OTA fees', fr: 'Guides pratiques sur les PMS, le SEO et les commissions OTA' },
        link: { en: '/en/blog', fr: '/blog' },
        icon: BookOpen
      },
      {
        title: { en: 'FAQ', fr: 'Questions fréquentes' },
        desc: { en: 'Answers on timelines, billing, and contract terms', fr: 'Réponses sur les délais, la facturation et le préavis' },
        link: { en: '/en/faq', fr: '/faq' },
        icon: CheckCircle2
      }
    ]
  },
  {
    id: 'a-propos',
    title: { en: 'About', fr: 'À propos' },
    link: { en: '/en/about', fr: '/a-propos' }
  }
];
