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
    link: { en: '/en/services', fr: '/services' },
    columns: [
      {
        heading: { en: 'Websites', fr: 'Sites web' },
        items: [
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
            title: { en: 'Web Design Morocco', fr: 'Agence web Maroc' },
            desc: {
              en: 'Custom bilingual websites for hospitality and SMEs in Morocco',
              fr: 'Conception de sites bilingues pour hôtels et PME au Maroc'
            },
            link: { en: '/en/web-design-morocco', fr: '/agence-web-maroc' },
            icon: Globe
          },
          {
            title: { en: 'Web Design Casablanca', fr: 'Agence web Casablanca' },
            desc: {
              en: 'Professional websites for hotels and companies in Casablanca',
              fr: 'Création de sites professionnels pour entreprises à Casablanca'
            },
            link: { en: '/en/web-design-casablanca', fr: '/agence-web-casablanca' },
            icon: Building2
          },
          {
            title: { en: 'Hotel Website Design', fr: 'Site web d’hôtel' },
            desc: {
              en: 'Hotel websites with room pages and direct PMS booking sync',
              fr: 'Sites d’hôtels avec pages chambres et connexion au moteur PMS'
            },
            link: { en: '/en/hotel-website-design', fr: '/site-web-hotel' },
            icon: Sparkles
          },
          {
            title: { en: 'Riad Website Design', fr: 'Site web riad Marrakech' },
            desc: {
              en: 'Fast mobile websites for riads and guesthouses in Marrakech',
              fr: 'Sites rapides sur mobile pour riads et maisons d’hôtes à Marrakech'
            },
            link: { en: '/en/riad-website-design-marrakech', fr: '/site-web-riad-marrakech' },
            icon: Compass
          }
        ]
      },
      {
        heading: { en: 'Search', fr: 'Référencement' },
        items: [
          {
            title: { en: 'SEO Agency Morocco', fr: 'Agence SEO Maroc' },
            desc: {
              en: 'Local search rankings and Google Business Profile management',
              fr: 'Classement local sur Google et suivi de fiche établissement'
            },
            link: { en: '/en/seo-agency-morocco', fr: '/agence-seo-maroc' },
            icon: Search
          },
          {
            title: { en: 'SEO Agency Casablanca', fr: 'Agence SEO Casablanca' },
            desc: {
              en: 'Organic search optimization for businesses in Casablanca',
              fr: 'Référencement naturel pour les entreprises à Casablanca'
            },
            link: { en: '/en/seo-agency-casablanca', fr: '/agence-seo-casablanca' },
            icon: Building2
          },
          {
            title: { en: 'Local SEO Casablanca', fr: 'Référencement local Casablanca' },
            desc: {
              en: 'Google Maps visibility and local search across Casablanca',
              fr: 'Visibilité sur Google Maps et recherche locale à Casablanca'
            },
            link: { en: '/en/local-seo-casablanca', fr: '/referencement-local-casablanca' },
            icon: Globe
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
            title: { en: 'Riad SEO Marrakech', fr: 'SEO riad Marrakech' },
            desc: {
              en: 'Local search and Google Maps rankings for Marrakech riads',
              fr: 'Référencement local et Google Maps pour riads à Marrakech'
            },
            link: { en: '/en/riad-seo-marrakech', fr: '/seo-riad-marrakech' },
            icon: Sparkles
          }
        ]
      },
      {
        heading: { en: 'Specialist SEO', fr: 'SEO spécialisé' },
        items: [
          {
            title: { en: 'Local SEO Morocco', fr: 'SEO local Maroc' },
            desc: {
              en: 'Regional search rankings and local citations across Morocco',
              fr: 'Positionnement local et citations régionales partout au Maroc'
            },
            link: { en: '/en/services/local-seo-morocco', fr: '/services/local-seo-morocco' },
            icon: Compass
          },
          {
            title: { en: 'Google Business Profile', fr: 'Fiche Google Business' },
            desc: {
              en: 'Setup, updates, and local tracking for your Google listing',
              fr: 'Configuration, suivi et mise à jour de votre fiche Google'
            },
            link: { en: '/en/services/google-business-profile', fr: '/services/google-business-profile' },
            icon: CheckCircle2
          },
          {
            title: { en: 'AI SEO Optimization', fr: 'Optimisation SEO IA' },
            desc: {
              en: 'Structured content and schema markup for AI search engines',
              fr: 'Contenus structurés et balisage pour moteurs de recherche IA'
            },
            link: { en: '/en/services/ai-seo-optimization', fr: '/services/ai-seo-optimization' },
            icon: Sparkles
          },
          {
            title: { en: 'WordPress SEO', fr: 'SEO WordPress' },
            desc: {
              en: 'Technical audits, page speed, and indexing for WordPress',
              fr: 'Audit technique, vitesse et indexation pour sites WordPress'
            },
            link: { en: '/en/services/wordpress-seo', fr: '/services/wordpress-seo' },
            icon: Layers
          },
          {
            title: { en: 'E-commerce SEO', fr: 'SEO e-commerce' },
            desc: {
              en: 'Category architecture and product indexing for online stores',
              fr: 'Structure des catégories et indexation des fiches produits'
            },
            link: { en: '/en/services/ecommerce-seo', fr: '/services/ecommerce-seo' },
            icon: BarChart3
          }
        ]
      },
      {
        heading: { en: 'Advertising', fr: 'Publicité' },
        items: [
          {
            title: { en: 'Google Ads', fr: 'Google Ads Maroc' },
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
        heading: { en: 'Direct booking', fr: 'Réservation directe' },
        items: [
          {
            title: { en: 'Direct Booking', fr: 'Réservation directe' },
            desc: {
              en: 'Booking engine setup and direct reservation funnel strategy',
              fr: 'Connexion moteur de réservation et parcours client en direct'
            },
            link: { en: '/en/direct-booking', fr: '/reservation-directe' },
            icon: CheckCircle2
          },
          {
            title: { en: 'Hotel Digital Marketing', fr: 'Marketing digital hôtelier' },
            desc: {
              en: 'Combined web, search, and paid acquisition for hospitality',
              fr: 'Site web, référencement et annonces dédiés à l’hôtellerie'
            },
            link: { en: '/en/hotel-digital-marketing', fr: '/marketing-digital-hotelier' },
            icon: Building2
          }
        ]
      }
    ]
  },
  {
    id: 'secteurs-zones',
    title: { en: 'Sectors & Cities', fr: 'Secteurs et villes' },
    columns: [
      {
        heading: { en: 'Industries', fr: 'Secteurs' },
        items: [
          {
            title: { en: 'All industries', fr: 'Tous les secteurs' },
            desc: {
              en: 'Overview of hospitality, tourism, and B2B sectors we serve',
              fr: 'Vue d’ensemble des métiers accompagnés partout au Maroc'
            },
            link: { en: '/en/industries', fr: '/secteurs' },
            icon: Layers
          },
          {
            title: { en: 'Hotels and resorts', fr: 'Hôtels et complexes' },
            desc: { en: 'PMS connection and hotel search campaigns', fr: 'Connexion PMS et campagnes de recherche hôtelière' },
            link: { en: '/en/industries/hotels-resorts', fr: '/secteurs/hotels-resorts' },
            icon: Building2
          },
          {
            title: { en: 'Riads and boutique hotels', fr: 'Riads et maisons d’hôtes' },
            desc: { en: 'Bilingual sites and Google Maps visibility in Medinas', fr: 'Sites bilingues et présence sur Google Maps en médina' },
            link: { en: '/en/industries/riads-boutique-hotels', fr: '/secteurs/riads-maisons-hotes' },
            icon: Sparkles
          },
          {
            title: { en: 'Tour operators', fr: 'Tour-opérateurs' },
            desc: { en: 'Mobile itinerary pages and direct WhatsApp inquiries', fr: 'Pages d’itinéraires mobiles et contact WhatsApp direct' },
            link: { en: '/en/industries/tour-operators', fr: '/secteurs/tour-operateurs' },
            icon: Compass
          },
          {
            title: { en: 'Restaurants and catering', fr: 'Restaurants et traiteurs' },
            desc: { en: 'Local table bookings and corporate event quote forms', fr: 'Réservations de table et devis pour réceptions' },
            link: { en: '/en/industries/restaurants-catering', fr: '/secteurs/restaurants-traiteurs' },
            icon: Utensils
          },
          {
            title: { en: 'Corporate SMEs', fr: 'PME et entreprises B2B' },
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
            title: { en: 'All cities', fr: 'Toutes les villes' },
            desc: {
              en: 'Regional hubs and local search coverage across Morocco',
              fr: 'Villes couvertes et interventions locales au Maroc'
            },
            link: { en: '/en/locations', fr: '/zones' },
            icon: Layers
          },
          {
            title: { en: 'Morocco', fr: 'Maroc' },
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
