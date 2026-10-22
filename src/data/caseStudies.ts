export interface StrategyExampleItem {
  slug: string;
  frSlug: string;
  industry: string;
  frIndustry: string;
  location: string;
  frLocation: string;
  topicName: string;
  frTopicName: string;
  title: string;
  frTitle: string;
  seoTitle?: string;
  frSeoTitle?: string;
  metaDescription: string;
  frMetaDescription: string;
  
  // EN Strategy Content
  businessScenario: string;
  digitalChallenges: string[];
  recommendedStrategy: string;
  seoStrategy: {
    overview: string;
    targetKeywords: string[];
    technicalActions: string[];
  };
  paidAcquisitionStrategy: {
    overview: string;
    channels: string[];
    adTactics: string[];
  };
  conversionStrategy: {
    overview: string;
    croTactics: string[];
  };
  directBookingStrategy: {
    overview: string;
    tactics: string[];
  };
  measurementFramework: string;
  recommendedKPIs: { metric: string; targetDescription: string }[];
  implementationRoadmap: { phase: string; duration: string; focus: string }[];
  relatedServices: { label: string; url: string }[];
  heroImage: string;

  // FR Strategy Content
  frBusinessScenario: string;
  frDigitalChallenges: string[];
  frRecommendedStrategy: string;
  frSeoStrategy: {
    overview: string;
    targetKeywords: string[];
    technicalActions: string[];
  };
  frPaidAcquisitionStrategy: {
    overview: string;
    channels: string[];
    adTactics: string[];
  };
  frConversionStrategy: {
    overview: string;
    croTactics: string[];
  };
  frDirectBookingStrategy: {
    overview: string;
    tactics: string[];
  };
  frMeasurementFramework: string;
  frRecommendedKPIs: { metric: string; targetDescription: string }[];
  frImplementationRoadmap: { phase: string; duration: string; focus: string }[];
  frRelatedServices: { label: string; url: string }[];

  // Expanded Case Study Sections (EN)
  challengeDetail?: string;
  solutionDetail?: string;
  resultsDetail?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  imageDescriptions?: string;

  // Expanded Case Study Sections (FR)
  frChallengeDetail?: string;
  frSolutionDetail?: string;
  frResultsDetail?: string;
  frTestimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  frImageDescriptions?: string;
}

export type CaseStudyItem = StrategyExampleItem;

export const caseStudies: StrategyExampleItem[] = [
  {
    slug: "travel-morocco-services",
    frSlug: "services-voyage-maroc",
    industry: "Tour Operators & Excursions",
    frIndustry: "Tour-Opérateurs & Excursions",
    location: "Marrakech & High Atlas, Morocco",
    frLocation: "Marrakech & Haut Atlas, Maroc",
    topicName: "Direct Booking Strategy for Moroccan Tour Operators",
    frTopicName: "Stratégie de Réservation Directe pour Tour-Opérateurs au Maroc",
    title: "Example Strategy: Direct Booking Growth for a Moroccan Tour Operator",
    frTitle: "Scénario type : Croissance des Réservations Directes pour Tour-Opérateurs au Maroc",
    seoTitle: "Tour Operator Direct Booking Strategy | Urunk",
    frSeoTitle: "Réservation Directe Tour-Opérateurs | Urunk",
    metaDescription: "Strategic framework outlining how Moroccan tour operators can build high-converting direct booking channels, lower OTA commissions, and scale search visibility.",
    frMetaDescription: "Cadre stratégique expliquant comment les tour-opérateurs au Maroc peuvent développer un canal de réservation directe, réduire les commissions OTA et maximiser leur SEO.",
    
    // EN Content
    businessScenario: "Independent tour operators and excursion providers in Morocco often rely heavily on third-party OTAs (Viator, GetYourGuide, TripAdvisor) paying 20%-30% commissions per seat. While OTAs deliver initial volume, sustainable profitability requires capturing direct traveler inquiries before they book elsewhere. This strategic framework details how to decouple operations from third-party reliance by engineering high-performance landing pages and direct WhatsApp conversion tunnels specifically optimized for Saharan and High Atlas itineraries.",
    digitalChallenges: [
      "High OTA commission fees (20-30%) severely reducing operating margins per private tour or excursion seat",
      "Unoptimized mobile user experience leading to high bounce rates (68% average) for travelers on slow mobile networks",
      "Lack of instant communication and structured inquiry channels for custom, multi-day itinerary requests",
      "Low organic search visibility for high-intent queries like 'private Marrakech to Merzouga desert tour'"
    ],
    recommendedStrategy: "An integrated direct acquisition architecture combining ultra-fast mobile landing pages, localized organic search optimization, targeted TripAdvisor Sponsored Placements, and instant WhatsApp inquiry routing with automated follow-ups.",
    seoStrategy: {
      overview: "Target commercial search intent for multi-day itineraries, private desert trips, and regional excursion routes. We build a hub-and-spoke content architecture around key destinations (Merzouga, Zagora, High Atlas) supported by comprehensive structured data markup to capture high-intent international planners.",
      targetKeywords: [
        "Morocco desert tour direct booking",
        "Private Marrakech to Merzouga tour operator",
        "Custom Morocco itinerary planner",
        "Atlas Mountains day trip from Marrakech"
      ],
      technicalActions: [
        "Implementation of custom TouristAttraction and TourOperator Schema markup to trigger search rich snippets",
        "Sub-2-second mobile page load performance optimization utilizing WebP/AVIF generation and code splitting",
        "Creation of highly specialized destination landing pages with embedded real-time WhatsApp inquiry buttons"
      ]
    },
    paidAcquisitionStrategy: {
      overview: "Combine high-ROAS Google Search Ads capturing active search intent with TripAdvisor Sponsored Placements and social proof retargeting on Instagram.",
      channels: [
        "Google Search Ads (Targeting high-intent long-tail keywords in English and German)",
        "TripAdvisor Sponsored Placements on regional destination listings",
        "Meta Retargeting (Instagram/Facebook Reels showcasing raw traveler footage)"
      ],
      adTactics: [
        "Geo-targeting international travelers planning trips 30-60 days prior to their arrival in Morocco",
        "Dynamic ad copy emphasizing zero-commission direct pricing guarantees and complimentary tour upgrades",
        "Retargeting visitors who viewed private tour pages but did not initiate a WhatsApp inquiry"
      ]
    },
    conversionStrategy: {
      overview: "Streamline the decision path for international travelers seeking itinerary confirmation on mobile screens. We remove all unnecessary form fields and replace them with interactive, visual choices.",
      croTactics: [
        "Sticky 'Book Directly via WhatsApp' floating CTA on mobile viewport with a pulsing notification effect",
        "Transparent, card-free itinerary breakdown with clear icons for inclusions (meals, transport, hotels)",
        "Trust signals including official tourism guide badges, secure payment guarantees, and real guest feedback prompts"
      ]
    },
    directBookingStrategy: {
      overview: "Capture high-intent inquiries instantly through direct messaging before prospective guests leave the site, facilitating real-time sales closing via mobile.",
      tactics: [
        "Automated WhatsApp template greeting with instant tour selection menus to capture initial passenger count and dates",
        "Direct PDF custom quote generation within 15 minutes of initial inquiry by the localized operations team",
        "Automated post-tour review request system triggering 2 hours after excursion end to build TripAdvisor reviews"
      ]
    },
    measurementFramework: "Track full-funnel metrics from organic/paid click to WhatsApp conversation start and confirmed booking deposit using Google Analytics 4 Custom Events and offline CRM import.",
    recommendedKPIs: [
      { metric: "Direct Booking Share", targetDescription: "Targeting 45%+ of total bookings from direct web/WhatsApp channels within 90 days" },
      { metric: "Cost Per Acquisition", targetDescription: "Reducing customer acquisition cost (CAC) by 50% compared to equivalent OTA commission percentage" },
      { metric: "Mobile Page Speed Index", targetDescription: "Ensuring First Contentful Paint is under 1.0 seconds on standard 4G mobile connections" }
    ],
    implementationRoadmap: [
      { phase: "Phase 1: Architecture & Mobile UX", duration: "Weeks 1-3", focus: "Rebuild mobile landing pages, configure WhatsApp inquiry routing, install Google Analytics 4 conversion tracking" },
      { phase: "Phase 2: Organic & Local SEO", duration: "Weeks 4-6", focus: "Publish tour route content clusters, implement TourOperator Schema, optimize Google Business Profile" },
      { phase: "Phase 3: Search & TripAdvisor Ads", duration: "Weeks 7-12", focus: "Launch targeted Google Search Ads & TripAdvisor Sponsored Placements, monitor cost-per-lead" }
    ],
    relatedServices: [
      { label: "Google Ads Morocco", url: "/en/google-ads-morocco" },
      { label: "Website Design", url: "/en/services/website-design" },
      { label: "Direct Booking Strategy", url: "/en/direct-booking" },
      { label: "TripAdvisor Ads", url: "/en/services/tripadvisor-ads" }
    ],
    heroImage: "/images/travel-morocco-hero.webp",

    // Expanded Case Study Sections
    challengeDetail: "Travel Morocco Services, an independent boutique agency offering high-end desert excursions and private Atlas tours, was entirely dependent on Viator and TripAdvisor. These platforms extracted up to 25% in commissions per booking, turning high-value tours into low-margin operations. Their existing website, built on a heavy and outdated generic template, loaded in 4.8 seconds on 4G networks, causing 68% of mobile visitors to bounce immediately back to the OTAs. They lacked a structured lead-capture workflow, leaving the agency unable to respond in real-time to high-spending travelers looking to book customized private itineraries.",
    solutionDetail: "Urunk engineered a custom, ultra-lightweight React-based web platform optimized specifically for mobile travelers. We integrated a frictionless direct-to-WhatsApp routing system that connects travelers instantly with a booking specialist. On the SEO front, we created a comprehensive search optimization campaign, building dedicated landing pages for popular routes such as 'Marrakech to Merzouga' and deploying TourOperator and TouristAttraction structured data schema. To drive immediate volume, we launched tightly managed Google Search campaigns targeting high-intent long-tail keywords in English-speaking markets, combined with a TripAdvisor Sponsored Placements strategy offering a 'direct-booking bonus' (such as a free sunrise camel ride or luxury tent upgrade).",
    resultsDetail: "Within 60 days of launching the new acquisition framework, Travel Morocco Services saw spectacular growth: Direct booking volume increased by +124%, shifting their channel mix so that 52% of all bookings now occur directly rather than through third-party OTAs. The agency saved over 45,000 MAD in OTA commission fees in the first two months alone, instantly boosting their net profit margin. Mobile bounce rate crashed from 68% down to just 19%, thanks to a 100/100 performance score on Google Lighthouse with page loads under 1 second. Additionally, average booking order value rose by 22% due to personalized custom itinerary upgrades handled during the newly optimized WhatsApp communication sequence.",
    testimonial: {
      quote: "Our direct bookings have more than doubled since working with Urunk. Before, we were throwing away our margins on OTA fees just to stay visible. Now, travelers from the UK, Germany, and the US find our custom tour planner on Google and book directly with us over WhatsApp. It's revolutionized our cash flow and profitability.",
      author: "Kamil Oudghiri",
      role: "Founder & Operations Manager, Travel Morocco Services"
    },
    imageDescriptions: "The primary header asset features a high-fidelity, wide-aspect photography of a serene golden desert sunset over the rolling dunes of Erg Chebbi in Merzouga, Morocco. A silhouette line of three camels is guided by a local Berber nomad dressed in traditional flowing blue indigo robes, creating a sense of authentic adventure and premium wanderlust. The image layout utilizes modern <picture> tags serving AVIF and WebP formats across 400w, 800w, and 1200w responsive widths, with explicit aspect ratios to eliminate any layout shifts during page render.",

    // FR Content
    frBusinessScenario: "Les organisateurs de circuits et d'excursions indépendants au Maroc dépendent souvent à l'excès des plateformes tierces (Viator, GetYourGuide, TripAdvisor) auxquelles ils versent 20 à 30 % de commission par client. Si ces intermédiaires apportent un volume initial, la pérennité financière exige de capter l'intérêt des voyageurs en direct avant qu'ils ne réservent ailleurs. Ce cadre stratégique montre comment s'affranchir de cette dépendance grâce à un site mobile ultra-rapide et un tunnel d'engagement direct via WhatsApp.",
    frDigitalChallenges: [
      "Frais de commission OTA exorbitants (20-30 %) réduisant fortement la marge nette par excursion",
      "Expérience mobile peu performante entraînant un taux de rebond de 68 % sur les réseaux mobiles",
      "Absence de canal d'échange structuré et instantané pour les demandes d'itinéraires sur mesure",
      "Faible visibilité Google sur les requêtes à forte intention commerciale comme 'circuit désert maroc privé'"
    ],
    frRecommendedStrategy: "Une architecture d'acquisition directe combinant des pages d'atterrissage ultra-rapides sur mobile, un référencement naturel ciblé, des annonces TripAdvisor Sponsorisées et une capture d'opportunités via WhatsApp.",
    frSeoStrategy: {
      overview: "Cibler l'intention de recherche commerciale pour les circuits sur plusieurs jours, les excursions privées dans le désert et les circuits régionaux. Nous structurons l'arborescence du site autour de pôles géographiques (Merzouga, Zagora, Haut Atlas) et enrichissons les pages de données Schema spécifiques.",
      targetKeywords: [
        "Réservation directe circuit désert Maroc",
        "Tour-opérateur privé Marrakech Merzouga",
        "Circuit Maroc sur mesure",
        "Excursion Atlas départ Marrakech"
      ],
      technicalActions: [
        "Mise en place de données structurées Schema TourOperator et TouristAttraction pour enrichir les résultats de recherche",
        "Optimisation de la vitesse de chargement sous la seconde sur mobile avec génération d'images AVIF/WebP",
        "Création de pages de destination thématiques avec intégration d'appels à l'action WhatsApp instantanés"
      ]
    },
    frPaidAcquisitionStrategy: {
      overview: "Combiner des campagnes Google Ads axées sur l'intention d'achat avec des annonces TripAdvisor Sponsorisées et des campagnes de reciblage sur Instagram.",
      channels: [
        "Google Search Ads (Ciblage de mots-clés de niche à forte valeur en anglais et en allemand)",
        "TripAdvisor Sponsored Placements sur les fiches de destinations régionales",
        "Retargeting Meta (Instagram/Facebook Reels valorisant l'expérience client vécue)"
      ],
      adTactics: [
        "Ciblage géographique des voyageurs planifiant leur séjour 30 à 60 jours avant le départ",
        "Accroches valorisant la réservation directe sans frais d'intermédiaire et avec surclassements offerts",
        "Campagne de reciblage des visiteurs ayant consulté les itinéraires sans prendre contact"
      ]
    },
    frConversionStrategy: {
      overview: "Simplifier à l'extrême le parcours de réservation pour les voyageurs internationaux souhaitant valider leur itinéraire sur smartphone.",
      croTactics: [
        "Bouton d'action flottant 'Réserver directement via WhatsApp' sur mobile avec effet de notification",
        "Présentation claire des étapes de l'itinéraire sans chargement de page et avec icônes d'inclusions (repas, hôtels, transport)",
        "Éléments de réassurance forts : badges de guides agréés, sécurité de paiement et témoignages de clients récents"
      ]
    },
    frDirectBookingStrategy: {
      overview: "Capter immédiatement les prospects qualifiés via la messagerie instantanée avant qu'ils ne quittent la page, favorisant la clôture immédiate des ventes.",
      tactics: [
        "Message d'accueil automatique WhatsApp avec pré-sélection d'options pour qualifier la demande (dates, passagers)",
        "Génération et envoi de propositions d'itinéraires au format PDF sous 15 minutes par l'équipe réceptive locale",
        "Relance automatique pour l'envoi d'avis TripAdvisor 2 heures après la fin de leur excursion"
      ]
    },
    frMeasurementFramework: "Suivre l'ensemble du tunnel d'acquisition, du clic initial à la prise de contact WhatsApp et au versement de l'acompte grâce à un suivi d'événements personnalisé dans GA4.",
    frRecommendedKPIs: [
      { metric: "Part de Réservation Directe", targetDescription: "Atteindre 45%+ de réservations directes via le site et WhatsApp sous 90 jours" },
      { metric: "Coût d'Acquisition (CAC)", targetDescription: "Réduction de 50 % du coût d'acquisition par rapport aux taux de commission moyens des OTA" },
      { metric: "Vitesse d'affichage mobile", targetDescription: "Maintenir l'indice First Contentful Paint sous 1,0 seconde sur réseau mobile standard" }
    ],
    frImplementationRoadmap: [
      { phase: "Phase 1 : Architecture & UX Mobile", duration: "Semaines 1-3", focus: "Refonte des pages mobiles, configuration du routage WhatsApp, installation du suivi de conversion GA4" },
      { phase: "Phase 2 : SEO & Référencement Local", duration: "Semaines 4-6", focus: "Publication de contenus d'itinéraires, intégration du Schema TourOperator, optimisation de la fiche Google Maps" },
      { phase: "Phase 3 : Campagnes Google & TripAdvisor", duration: "Semaines 7-12", focus: "Lancement des campagnes publicitaires ciblées, suivi du coût par prospect et optimisation du ROAS" }
    ],
    frRelatedServices: [
      { label: "Gestion Google Ads", url: "/google-ads-maroc" },
      { label: "Création Site Web", url: "/services/creation-site-web" },
      { label: "Réservation Directe", url: "/reservation-directe" },
      { label: "TripAdvisor Ads", url: "/services/tripadvisor-ads" }
    ],

    // Expanded Case Study Sections FR
    frChallengeDetail: "Travel Morocco Services, une agence réceptive indépendante proposant des circuits haut de gamme dans le désert et l'Atlas, dépendait exclusivement des réservations issues de Viator et TripAdvisor. Les commissions exorbitantes exigées par ces plateformes (jusqu'à 25 % par dossier) grevaient lourdement la rentabilité de leurs ventes. De plus, leur site internet de l'époque était basé sur un thème lourd et lent, mettant plus de 4,8 secondes à s'afficher sur mobile, ce qui faisait fuir les visiteurs. L'agence ne disposait d'aucun outil moderne pour engager rapidement ces prospects désireux de concevoir des itinéraires sur mesure.",
    frSolutionDetail: "Urunk a conçu une plateforme web sur-mesure sous React, ultra-légère et pensée en priorité pour les utilisateurs mobiles. Nous avons intégré un bouton d'appel à l'action flottant dirigeant l'utilisateur instantanément vers WhatsApp pour échanger avec un conseiller local. Nous avons également déployé une stratégie SEO ciblée, avec la création de pages dédiées aux itinéraires phares comme 'Marrakech à Merzouga' et l'intégration de données structurées hôtelières et touristiques. Pour générer un flux rapide de réservations directes, nous avons lancé des campagnes Google Ads ciblées sur des mots-clés d'achat qualifiés, complétées par un référencement sponsorisé sur TripAdvisor valorisant un avantage exclusif de réservation directe (surclassement gratuit en bivouac de luxe).",
    frResultsDetail: "Les résultats ont été immédiats : en seulement deux mois, le volume de réservations directes a augmenté de +124 %, représentant désormais 52 % du carnet de commandes global de l'agence. Travel Morocco Services a économisé plus de 45 000 MAD de commissions en l'espace de 60 jours, augmentant directement sa trésorerie. Le taux de rebond sur mobile s'est effondré de 68 % à 19 % grâce à un temps de chargement de page réduit sous la seconde. De plus, le panier moyen de réservation a progressé de +22 % grâce à un processus de vente affiné par l'équipe réceptive sur WhatsApp lors de la conception des programmes personnalisés.",
    frTestimonial: {
      quote: "Nos réservations directes ont plus que doublé depuis notre collaboration avec Urunk. Auparavant, nous versions nos marges aux OTA pour exister. Désormais, des voyageurs anglais, allemands et américains trouvent notre planificateur de circuit sur Google et réservent en direct avec nous sur WhatsApp. Cela a radicalement transformé notre rentabilité.",
      author: "Kamil Oudghiri",
      role: "Fondateur et Directeur des Opérations, Travel Morocco Services"
    },
    frImageDescriptions: "L'image principale affiche un coucher de soleil serein sur les dunes dorées de l'Erg Chebbi à Merzouga au Maroc. On y aperçoit la silhouette de trois dromadaires guidés par un nomade berbère en habit traditionnel bleu indigo, évoquant l'aventure authentique. L'image est optimisée en formats modernes AVIF et WebP, déclinée en différentes résolutions adaptées aux écrans (400px, 800px et 1200px) et dotée de dimensions explicites pour éliminer tout décalage visuel (CLS)."
  },
  {
    slug: "nomad-eats-catering",
    frSlug: "nomad-eats-traiteur",
    industry: "Hospitality & Corporate Catering",
    frIndustry: "Traiteurs & Événements Corporate",
    location: "Casablanca & Marrakech, Morocco",
    frLocation: "Casablanca & Marrakech, Maroc",
    topicName: "B2B Digital Marketing Strategy for Catering Services",
    frTopicName: "Stratégie Marketing Digital B2B pour Traiteurs au Maroc",
    title: "Example Strategy: B2B Lead Generation for Catering & Event Services in Morocco",
    frTitle: "Scénario type : Acquisition de Prospects B2B pour Traiteurs & Événements au Maroc",
    seoTitle: "B2B Catering Lead Generation Strategy | Urunk",
    frSeoTitle: "Acquisition B2B Traiteurs Événements | Urunk",
    metaDescription: "Strategic framework detailing how commercial catering businesses in Casablanca and Marrakech can capture corporate event budgets through targeted B2B SEO and Google Ads.",
    frMetaDescription: "Cadre stratégique détaillant comment les traiteurs événementiels à Casablanca et Marrakech peuvent capter des budgets d'entreprises grâce au SEO B2B et à Google Ads.",
    
    // EN Content
    businessScenario: "Corporate catering and event dining providers in major Moroccan commercial hubs (Casablanca, Rabat, Marrakech) face high competition for corporate galas, MICE events, and private wedding functions. Organic search and search advertising represent the highest-intent channels for reaching corporate executive assistants and event planners who are actively seeking professional suppliers under strict deadlines. This strategic blueprint outlines how to structure a B2B lead generation engine to capture highly profitable business contracts.",
    digitalChallenges: [
      "Unfocused ad spend generating consumer recipe clicks rather than corporate event inquiries",
      "Lack of specialized digital menus and clear B2B quote request (RFQ) workflows",
      "Slow site speed impacting mobile decision-makers reviewing catering options during busy workdays",
      "Insufficient local SEO presence in major commercial zones like Casablanca Finance City, Sidi Maârouf, or Guéliz Marrakech"
    ],
    recommendedStrategy: "A high-precision B2B acquisition engine centered on intent-driven Google Search campaigns, dedicated corporate menu landing pages, local SEO visibility, and streamlined RFQ forms combined with instant automated sales follow-ups.",
    seoStrategy: {
      overview: "Rank at the top of Google for high-value commercial queries relating to corporate catering, business lunch deliveries, and luxury event catering. We build local content landing pages targeted specifically at major business districts in Morocco.",
      targetKeywords: [
        "Corporate catering service Casablanca",
        "Luxury wedding catering Marrakech",
        "B2B event catering Morocco",
        "Traiteur entreprise Sidi Maârouf"
      ],
      technicalActions: [
        "Implementation of FoodService, CateringService and LocalBusiness Schema markup",
        "Creation of highly specialized landing pages by service category (Corporate Seminars, Weddings, Gala Dinners, Buffet Cocktails)",
        "Optimization of local map coordinates and content pages to cover major corporate business hubs"
      ]
    },
    paidAcquisitionStrategy: {
      overview: "Deploy exact-match Google Search Ads targeting active corporate event planners and office managers, paired with LinkedIn campaigns aimed at business coordinators.",
      channels: [
        "Google Search Ads (Targeting exact and phrase-match transactional queries)",
        "Google Business Profile Local Services Ads in Casablanca and Marrakech",
        "LinkedIn Sponsored Content (Targeting Executive Assistants, HR Managers, and Event Organizers)"
      ],
      adTactics: [
        "Dayparting ads to run strictly during commercial business hours (Monday-Friday 8am-6pm)",
        "Thorough negative keyword lists to exclude cooking classes, recipes, and consumer-grade catering searches",
        "Ad extensions displaying prestigious corporate client references and highlighting a guaranteed 24-hour response SLA"
      ]
    },
    conversionStrategy: {
      overview: "Convert corporate site visitors into qualified proposals within minutes through interactive, low-friction digital tools designed for busy office professionals.",
      croTactics: [
        "Interactive online event menu estimator allowing planners to calculate per-head costs instantly based on headcount",
        "Simplified 4-field B2B inquiry form (Event Date, Headcount, Budget Tier, Contact details)",
        "High-resolution visual galleries showing professional corporate buffet setups, waiter staff, and elegant dish presentations"
      ]
    },
    directBookingStrategy: {
      overview: "Accelerate B2B proposal cycles and deal closure through structured digital communication and immediate follow-ups.",
      tactics: [
        "Instant custom PDF proposal generation sent via automated email and WhatsApp within minutes of form submission",
        "SLA guaranteeing a call from a dedicated corporate account manager within 2 hours of receipt",
        "Automated follow-up sequence via email and phone to track sent quotes and schedule tastings"
      ]
    },
    measurementFramework: "Measure marketing efficiency based on Cost Per Qualified B2B Inquiry, pipeline value, and quote conversion rate rather than raw, non-commercial web traffic.",
    recommendedKPIs: [
      { metric: "Cost Per Qualified Lead", targetDescription: "Maintaining B2B lead cost below 300 MAD per qualified corporate event inquiry" },
      { metric: "Proposal Request Rate", targetDescription: "Targeting 5%+ conversion rate on commercial menu landing pages" },
      { metric: "Pipeline Value Generated", targetDescription: "Tracking the total estimated MAD value of submitted corporate RFQs monthly" }
    ],
    implementationRoadmap: [
      { phase: "Phase 1: B2B Menu & Form Setup", duration: "Weeks 1-2", focus: "Develop corporate menu landing pages, design RFQ forms, implement Google Tag Manager event tracking" },
      { phase: "Phase 2: Google Search Ads Launch", duration: "Weeks 3-5", focus: "Launch tightly themed B2B search campaigns, configure negative keywords, set up business hours scheduling" },
      { phase: "Phase 3: Local SEO & LinkedIn", duration: "Weeks 6-10", focus: "Optimize Google Maps profile for commercial catering, launch targeted LinkedIn outreach for event coordinators" }
    ],
    relatedServices: [
      { label: "Website Design", url: "/en/services/website-design" },
      { label: "Google Ads Management", url: "/en/services/google-ads" },
      { label: "Local SEO Casablanca", url: "/en/local-seo-casablanca" },
      { label: "SEO Morocco", url: "/en/seo-agency-morocco" }
    ],
    heroImage: "/images/nomad-eats-hero.webp",

    // Expanded Case Study Sections
    challengeDetail: "Nomad Eats, a premium catering service based in Casablanca, struggled to capture high-value corporate events and luxury wedding contracts, despite having an exceptional culinary team. Their digital presence consisted of a basic website that failed to rank for transactional commercial search queries, and their Google Ads campaigns were draining budget on broad consumer searches like 'cooking tips' or 'birthday menus'. Corporate assistants and event managers in Sidi Maârouf or Casablanca Finance City, who operated under tight schedules, faced a slow and confusing request-for-quote workflow, often waiting 3 to 4 days for a proposal. This delay caused them to lose high-budget business lunches and corporate seminars to established legacy competitors.",
    solutionDetail: "Urunk engineered a high-converting B2B acquisition platform designed specifically for commercial and corporate decision-makers. We developed modular landing pages featuring an interactive B2B menu estimator, allowing busy planners to calculate estimated per-head costs in seconds. We launched tightly themed Google Search campaigns using exact and phrase-match keywords, excluding consumer-focused queries through a strict negative keyword list. The campaigns were scheduled exclusively during business hours to maximize lead quality. Furthermore, we integrated a streamlined RFP process that triggered an automated PDF menu catalog and connected the lead with a dedicated account representative within two hours. We also optimized their Google Business Profile to capture local 'catering near me' queries inside Casablanca's business districts.",
    resultsDetail: "The results achieved over a 3-month period surpassed expectations: Inbound corporate leads grew by +185%, delivering a steady pipeline of highly qualified event inquiries. Cost Per Lead (CPL) decreased by 35%, falling from 420 MAD to 270 MAD due to the elimination of irrelevant consumer search terms. In total, Nomad Eats secured 14 major corporate contracts within the first 90 days, yielding a direct revenue increase of +115,000 MAD in monthly contract value. The interactive online estimator alone accounted for a 5.2% form conversion rate, filtering out unqualified inquiries and allowing the sales team to focus on high-value corporate deals.",
    testimonial: {
      quote: "Urunk has built an incredible business acquisition tool for us. The online menu estimator saves our sales team hours of manual quoting and immediately captures serious corporate clients. Our Google Ads campaigns are finally highly profitable, and we are now the go-to caterer for major firms in Casablanca Finance City.",
      author: "Sofia Benjelloun",
      role: "Founder, Nomad Eats Catering"
    },
    imageDescriptions: "The primary project asset displays a beautifully arranged corporate catering layout on a long solid oak table in a minimalist, sunlit Casablanca office reception hall. Gourmet finger food, delicate mini pastillas, artisanal skewers, and fresh local fruit juices in clear glass carafes are showcased, reflecting professional elegance. The image is fully responsive, embedded within a structural <picture> element featuring AVIF, WebP, and JPEG source variants optimized to eliminate Cumulative Layout Shift (CLS) on all desktop and mobile displays.",

    // FR Content
    frBusinessScenario: "Les traiteurs et prestataires de restauration événementielle dans les grands centres économiques du Maroc (Casablanca, Rabat, Marrakech) font face à une vive concurrence pour les séminaires, galas d'entreprises et mariages. Le SEO et Google Ads constituent les canaux à plus forte valeur pour toucher les décideurs, chargés de communication et responsables administratifs qui recherchent activement des partenaires professionnels sous des délais stricts. Ce cadre stratégique présente la mise en place d'un tunnel d'acquisition B2B optimisé pour capter ces budgets corporate.",
    frDigitalChallenges: [
      "Budget publicitaire gaspillé sur des requêtes grand public (recettes, idées de repas) plutôt que professionnelles B2B",
      "Absence de présentation claire des formules traiteur entreprise et d'outils d'estimation rapide en ligne",
      "Lenteur du site web freinant les responsables achats et événementiel sur leur mobile pendant leurs heures de travail",
      "Présence SEO locale insuffisante sur les zones d'affaires majeures (Casablanca Finance City, Sidi Maârouf, Guéliz)"
    ],
    frRecommendedStrategy: "Un dispositif d'acquisition B2B haute précision axé sur des campagnes Google Ads ciblées sur les mots-clés d'achat, des pages de destination dédiées aux offres entreprises et un SEO local performant.",
    frSeoStrategy: {
      overview: "Se positionner en tête des résultats Google sur les requêtes à forte valeur commerciale liées à la restauration d'entreprise et aux événements professionnels. Nous développons des landing pages locales ciblant les grands quartiers d'affaires marocains.",
      targetKeywords: [
        "Traiteur entreprise Casablanca",
        "Service traiteur séminaire Marrakech",
        "Traiteur événementiel B2B Maroc",
        "Traiteur lunch box Sidi Maârouf"
      ],
      technicalActions: [
        "Mise en place de données structurées Schema FoodService, CateringService et LocalBusiness",
        "Création de pages de destination thématiques par catégorie de prestation (Buffet, Cocktail, Repas assis, Séminaire)",
        "Optimisation du référencement local pour ressortir dans les packs Google Maps sur les zones de bureaux"
      ]
    },
    frPaidAcquisitionStrategy: {
      overview: "Déployer des campagnes Google Search ciblant spécifiquement les organisateurs d'événements et responsables administratifs, complétées par des campagnes LinkedIn ciblées.",
      channels: [
        "Google Search Ads (Mots-clés en ciblage exact et expressions régulières)",
        "Google Maps Local Services Ads sur Casablanca et Marrakech",
        "LinkedIn Sponsored Content ciblant les Assistantes de Direction, Responsables RH et Directeurs Marketing"
      ],
      adTactics: [
        "Diffusion ciblée exclusivement pendant les heures de bureau (Lundi-Vendredi 8h-18h)",
        "Exclusion rigoureuse de tous les termes non commerciaux (recettes, cours de cuisine, traiteur pas cher)",
        "Extensions d'annonces mettant en avant des références d'entreprises prestigieuses et le délai de réponse garanti sous 24h"
      ]
    },
    frConversionStrategy: {
      overview: "Transformer les visiteurs professionnels en devis qualifiés en quelques minutes grâce à des interfaces simples et fluides pensées pour les professionnels pressés.",
      croTactics: [
        "Estimation en ligne interactive permettant de calculer les coûts par participant selon le nombre de convives",
        "Formulaire B2B express en 4 champs (Date de l'événement, Nombre d'invités, Gamme de budget, Contact)",
        "Galeries photos professionnelles présentant de vrais buffets d'affaires, le service de table et le dressage"
      ]
    },
    frDirectBookingStrategy: {
      overview: "Accélérer le cycle de validation des devis d'entreprise par un suivi structuré et réactif.",
      tactics: [
        "Génération et envoi automatique d'une proposition commerciale complète au format PDF sur WhatsApp et par e-mail en quelques secondes",
        "SLA de rappel téléphonique par un chargé de compte entreprise dédié sous 2 heures",
        "Séquence de relance automatisée pour le suivi des devis et la planification de dégustations"
      ]
    },
    frMeasurementFramework: "Évaluer l'efficacité marketing en mesurant le coût par prospect B2B qualifié, la valeur globale du pipeline et le taux de signature, plutôt que le volume de trafic global.",
    frRecommendedKPIs: [
      { metric: "Coût par Prospect B2B", targetDescription: "Maintenir le coût par lead qualifié sous la barre des 300 MAD" },
      { metric: "Taux de Demande de Devis", targetDescription: "Viser un taux de conversion de 5%+ sur les fiches de menus B2B" },
      { metric: "Pipeline d'affaires généré", targetDescription: "Suivre la valeur totale en MAD des demandes de devis reçues chaque mois" }
    ],
    frImplementationRoadmap: [
      { phase: "Phase 1 : Menus B2B & Formulaires", duration: "Semaines 1-2", focus: "Développement des pages de menus d'entreprise, création du formulaire de devis, configuration du suivi GTM" },
      { phase: "Phase 2 : Lancement Google Ads B2B", duration: "Semaines 3-5", focus: "Lancement des campagnes de recherche B2B, exclusion des requêtes non qualifiées, paramétrage du planning horaires" },
      { phase: "Phase 3 : SEO Local & LinkedIn", duration: "Semaines 6-10", focus: "Optimisation de la fiche Google Maps pour traiteur d'entreprise, ciblage LinkedIn des responsables événements" }
    ],
    frRelatedServices: [
      { label: "Création Site Web", url: "/services/creation-site-web" },
      { label: "Gestion Google Ads", url: "/google-ads-maroc" },
      { label: "SEO Local Casablanca", url: "/referencement-local-casablanca" },
      { label: "Agence SEO Maroc", url: "/agence-seo-maroc" }
    ],

    // Expanded Case Study Sections FR
    frChallengeDetail: "Nomad Eats, un service traiteur haut de gamme implanté à Casablanca, peinait à remporter des contrats événementiels d'envergure auprès des entreprises et pour les grands mariages, malgré l'excellence reconnue de sa cuisine. Leur site internet n'était pas référencé sur les mots-clés d'achat et leurs campagnes publicitaires Google s'épuisaient sur des requêtes grand public inutiles (recettes, astuces culinaires). Les assistantes de direction et organisateurs d'événements à Sidi Maârouf ou Casablanca Finance City, souvent pressés, se retrouvaient face à un processus de demande de devis archaïque les forçant à attendre 3 à 4 jours pour obtenir une proposition, ce qui les incitait à se tourner vers des concurrents plus réactifs.",
    frSolutionDetail: "Urunk a développé un portail d'acquisition B2B moderne et optimisé pour la conversion. Nous avons créé des pages d'offres modulaires équipées d'un estimateur de prix en ligne interactif, permettant de configurer un menu et d'obtenir un coût indicatif par personne instantanément. Nous avons restructuré les campagnes Google Ads en ciblant uniquement des requêtes professionnelles ultra-qualifiées, avec exclusion rigoureuse des termes culinaires grand public, et planifié leur diffusion uniquement pendant les heures de bureau. Enfin, nous avons mis en place un workflow automatisé qui envoie un catalogue PDF personnalisé par email et WhatsApp immédiatement après soumission, suivi d'un contact personnalisé sous deux heures.",
    frResultsDetail: "Les performances sur 90 jours ont dépassé nos prévisions initiales : le volume de prospects d'entreprises qualifiés a augmenté de +185 %. Le coût par lead (CPL) a baissé de 35 %, s'établissant à 270 MAD au lieu de 420 MAD grâce à la suppression des clics inutiles. Nomad Eats a signé 14 grands contrats d'entreprises majeurs lors du premier trimestre de mise en service, générant un revenu supplémentaire récurrent estimé à +115 000 MAD par mois. L'estimateur de devis en ligne a affiché un taux de conversion de 5,2 %, qualifiant parfaitement les demandes avant traitement par l'équipe commerciale.",
    frTestimonial: {
      quote: "Urunk a développé pour nous un outil d'acquisition client incroyable. L'estimateur de devis en ligne fait gagner un temps précieux à notre équipe et attire des clients corporate sérieux. Nos campagnes publicitaires sont enfin extrêmement rentables et nous sommes devenus un prestataire incontournable sur Casablanca.",
      author: "Sofia Benjelloun",
      role: "Fondatrice, Nomad Eats Catering"
    },
    frImageDescriptions: "L'image du projet montre une superbe table de buffet d'affaires dressée sur un plateau en chêne massif, au sein d'un bureau moderne et lumineux à Sidi Maârouf, Casablanca. Elle présente des pièces cocktail raffinées, des mini pastillas croustillantes et des jus de fruits frais locaux en carafes. L'élément est intégré via une balise responsive <picture> délivrant des variantes d'images en formats optimisés (AVIF/WebP) et prévenant tout décalage visuel (CLS)."
  },
  {
    slug: "art-house-marrakech",
    frSlug: "art-house-marrakech",
    industry: "Tourism Experience & Cultural Workshops",
    frIndustry: "Ateliers & Expériences Touristiques",
    location: "Marrakech Medina, Morocco",
    frLocation: "Médina de Marrakech, Maroc",
    topicName: "Local SEO & Paid Social Strategy for Tourism Experiences",
    frTopicName: "SEO Local & Social Ads pour Ateliers & Expériences",
    title: "Example Strategy: Local SEO & Social Ads for Workshops & Experiences in Marrakech",
    frTitle: "Scénario type : SEO Local & Social Ads pour Ateliers & Expériences à Marrakech",
    seoTitle: "Local SEO & Social Ads for Experiences | Urunk",
    frSeoTitle: "SEO Local & Ads pour Ateliers Marrakech | Urunk",
    metaDescription: "Strategic blueprint outlining how art galleries, pottery studios, and cultural experience providers in Marrakech can drive direct visitor bookings via Meta Ads and Google Maps.",
    frMetaDescription: "Plan stratégique expliquant comment les galeries, ateliers d'artisanat et créateurs d'expériences à Marrakech peuvent attirer des visiteurs en direct via les Meta Ads et Google Maps.",
    
    // FR Content
    frBusinessScenario: "Marrakech attire chaque année des millions de voyageurs internationaux en quête d'activités culturelles immersives comme la poterie, la peinture de zelliges, les cours de cuisine et les ateliers d'artisanat. Les créateurs d'expériences font face à un double défi : capter les voyageurs planifiant leur séjour en ligne depuis l'étranger, et attirer les touristes actuellement sur place qui cherchent une activité de dernière minute. Ce cadre stratégique montre comment développer un tunnel de conversion directe pour s'affranchir des commissions élevées prélevées par les intermédiaires.",
    frDigitalChallenges: [
      "Dépendance extrême envers les concierges d'hôtels et les plateformes revendeuses (Viator, Airbnb Experiences) prélevant jusqu'à 30 % de commission.",
      "Sous-exploitation de la fiche Google Business Profile pour les requêtes géolocalisées à forte intention d'achat dans la Médina historique et Guéliz.",
      "Manque de campagnes publicitaires visuelles sur les réseaux sociaux ciblant spécifiquement les touristes actuellement en vacances à Marrakech.",
      "Absence de calendrier de disponibilité des places en temps réel et de tunnel d'achat mobile fluide."
    ],
    frRecommendedStrategy: "Une stratégie d'acquisition à double niveau combinant l'optimisation ultra-locale de Google Maps pour les touristes déjà à Marrakech, et des campagnes visuelles sur Instagram/Facebook pour capter les voyageurs en phase de planification.",
    frSeoStrategy: {
      overview: "Exceller sur les recherches locales et les mots-clés à forte intention pour les ateliers d'art et activités créatives à Marrakech. Nous mettons l'accent sur les citations locales et l'accumulation d'avis clients pour dominer la carte Google Maps.",
      targetKeywords: [
        "cours de poterie marrakech reservation",
        "atelier artisanat medina marrakech",
        "activites culturelles marrakech direct",
        "atelier argile marrakech gueliz"
      ],
      technicalActions: [
        "Optimisation de la fiche Google Business Profile avec mises à jour visuelles quotidiennes, photos géolocalisées et catégories alignées",
        "Intégration du balisage Schema Event et LocalBusiness pour déclencher l'affichage automatique des événements sur Google",
        "Optimisation de la vitesse de la page de destination mobile pour garantir un chargement instantané sur les réseaux locaux 3G/4G"
      ]
    },
    frPaidAcquisitionStrategy: {
      overview: "Engager les voyageurs durant leur phase de planification depuis l'étranger et diffuser des publicités mobiles ultra-ciblées aux utilisateurs actuellement actifs à Marrakech.",
      channels: [
        "Instagram Ads (Reels et Stories montrant des moments authentiques et tactiles d'ateliers)",
        "Facebook Feed Ads ciblant les personnes exprimant un intérêt de voyage pour le Maroc",
        "Extensions de campagnes locales Google Ads pour générer des itinéraires vers l'atelier"
      ],
      adTactics: [
        "Ciblage géographique de précision dans un rayon de 10 km autour de la Médina de Marrakech, axé sur les touristes actifs",
        "Publicités vidéo courtes et dynamiques illustrant la création étape par étape d'une poterie ou d'un carreau de zellige",
        "Appels à l'action directs 'Réserver' menant directement vers un calendrier de réservation en ligne"
      ]
    },
    frConversionStrategy: {
      overview: "Éliminer toutes les frictions entre le visionnage d'une vidéo captivante de l'atelier et la confirmation d'une session de réservation. Nous proposons un tunnel sans obligation de création de compte.",
      croTactics: [
        "Calendrier de session en temps réel montrant les places disponibles matin/après-midi et mises à jour en direct",
        "Prise en charge de paiements multidevises (EUR, MAD, USD, GBP) pour les visiteurs internationaux par carte de crédit",
        "Confirmation instantanée de la réservation envoyée directement par WhatsApp, SMS et email"
      ]
    },
    frDirectBookingStrategy: {
      overview: "Bâtir un canal d'acquisition directe organique pour générer du bouche-à-oreille, des visites répétées et des réservations privées pour les groupes ou entreprises.",
      tactics: [
        "Messages WhatsApp automatisés permettant de réserver rapidement des ateliers privés ou des team-building d'entreprises",
        "Certificats numériques de participation à l'atelier avec QR codes intégrés et liens de partage sur les réseaux sociaux",
        "Envoi automatisé d'une demande d'avis Google via WhatsApp exactement 2 heures après la fin de l'atelier"
      ]
    },
    frMeasurementFramework: "Évaluer les performances à travers le nombre de réservations directes de sièges, le coût par réservation (CPA) et le retour sur investissement publicitaire (ROAS) des campagnes sociales et locales.",
    frRecommendedKPIs: [
      { metric: "Coût par siège réservé", targetDescription: "Maintenir les dépenses publicitaires en dessous de 40 MAD par participant à l'atelier" },
      { metric: "Visibilité dans le Pack Local Google Maps", targetDescription: "Atteindre le top 3 de Google Maps à Marrakech pour les termes liés aux ateliers" },
      { metric: "Part des réservations directes", targetDescription: "Faire grimper le canal d'acquisition directe à plus de 60 % du chiffre d'affaires global de l'atelier" }
    ],
    frImplementationRoadmap: [
      { phase: "Phase 1 : Recherche locale & Google Maps", duration: "Semaines 1-2", focus: "Calibrer la fiche Google Business Profile, configurer le balisage de données structurées et auditer la vitesse mobile" },
      { phase: "Phase 2 : Campagnes visuelles Meta", duration: "Semaines 3-4", focus: "Produire des vidéos publicitaires captivantes, structurer les campagnes Instagram/Facebook avec ciblage géographique" },
      { phase: "Phase 3 : Réservation & Automatisations", duration: "Semaines 5-8", focus: "Intégrer le calendrier de réservation en temps réel et configurer les relances de confirmation WhatsApp" }
    ],
    frRelatedServices: [
      { label: "SEO Local Maroc", url: "/services" },
      { label: "Gestion Publicité Meta", url: "/services" },
      { label: "Création Site Web", url: "/services/creation-site-web" },
      { label: "Google Business Profile", url: "/services" }
    ],

    // EN Content
    businessScenario: "Marrakech attracts millions of international travelers annually seeking immersive cultural activities such as pottery making, tile painting, cooking classes, and artisan workshops. Experience providers face the dual challenge of capturing pre-trip online planners and attracting walk-in or short-notice bookings from tourists currently exploring the city streets. This strategic framework establishes how experience operators can build a direct-to-consumer acquisition funnel, reducing commissions paid to third-party travel desks.",
    digitalChallenges: [
      "Extremely high dependency on local hotel concierges and reseller platforms (Viator, Airbnb Experiences) extracting up to 30% in commission fees",
      "Under-leveraged Google Business Profile for high-intent near-me map searches in historical Medina and modern Guéliz quarters",
      "Sub-optimal visual advertising on social channels leading to high cost-per-acquisition among active tourists currently in Marrakech",
      "Absence of real-time seat availability calendar and instant mobile reservation checkout flow"
    ],
    recommendedStrategy: "A dual-stage acquisition strategy leveraging hyper-local Google Maps optimization for in-destination tourists alongside visual Meta Instagram/Facebook campaigns targeting travelers preparing for their trip.",
    seoStrategy: {
      overview: "Excel in local map searches and high-intent organic terms for Marrakech creative activities and artistic workshops. We focus heavily on local citations and review accumulation to secure top map placements.",
      targetKeywords: [
        "Marrakech pottery workshop booking",
        "Art activities in Marrakech Medina",
        "Moroccan craft experience direct booking",
        "Clay class Marrakech Guéliz"
      ],
      technicalActions: [
        "Google Business Profile optimization with daily visual updates, geotagged imagery, and category alignment",
        "Event and LocalBusiness Schema integration to trigger automatic Google Event event listings",
        "Mobile landing page speed optimization achieving low mobile load time on local 3G/4G networks"
      ]
    },
    paidAcquisitionStrategy: {
      overview: "Engage travelers during their trip planning phase at home, and deliver hyper-localized mobile ads to users currently active within Marrakech.",
      channels: [
        "Instagram Ads (Reels & Stories showcasing tactile, hands-on workshop moments)",
        "Facebook Feed Ads targeting users expressing travel interest in Morocco",
        "Google Local Campaign Extensions driving driving directions to the studio location"
      ],
      adTactics: [
        "In-destination radius targeting within 10km of Marrakech Medina, focused on active tourists",
        "Dynamic short-form video ads illustrating the step-by-step creation of a piece of pottery or zellige tile",
        "Direct 'Book Now' call-to-actions linking straight to a live seat-booking calendar"
      ]
    },
    conversionStrategy: {
      overview: "Eliminate friction between viewing a captivating workshop video and securing a session slot. We provide a frictionless checkout requiring zero account creation.",
      croTactics: [
        "Real-time session calendar showing available morning/afternoon seats and live count updates",
        "Multi-currency payment support (EUR, MAD, USD, GBP) for international visitors with credit cards",
        "Instant booking confirmation details sent directly via WhatsApp, SMS, and email"
      ]
    },
    directBookingStrategy: {
      overview: "Build an organic direct-to-guest channel that captures repeat visits, corporate group private bookings, and organic word-of-mouth recommendations.",
      tactics: [
        "WhatsApp automated prompt enabling quick booking of private family workshops or group corporate team-building events",
        "Digital workshop completion certificates with integrated QR codes and social media sharing links",
        "Automated review generation prompt triggered via WhatsApp exactly 2 hours after the workshop ends"
      ]
    },
    measurementFramework: "Evaluate performance through Direct Seat Bookings, Cost Per Booking (CPA), and Return on Ad Spend (ROAS) across social and maps campaigns.",
    recommendedKPIs: [
      { metric: "Cost Per Reserved Seat", targetDescription: "Maintaining ad spend below 40 MAD per booked workshop participant" },
      { metric: "Google Maps Local Pack Visibility", targetDescription: "Achieving top 3 positions in Marrakech map pack for localized workshop search terms" },
      { metric: "Direct Booking Share", targetDescription: "Growing direct booking channel to account for 60%+ of total workshop revenue" }
    ],
    implementationRoadmap: [
      { phase: "Phase 1: Local Search & Google Maps", duration: "Weeks 1-2", focus: "Calibrate Google Business Profile, set up Schema markups, audit mobile landing page velocity" },
      { phase: "Phase 2: Visual Meta Campaign Design", duration: "Weeks 3-4", focus: "Produce short video ad creatives, build Instagram/Facebook campaign structures with geo-fencing" },
      { phase: "Phase 3: Real-Time Booking & Automation", duration: "Weeks 5-8", focus: "Integrate session booking calendar, set up instant WhatsApp confirmation workflows" }
    ],
    relatedServices: [
      { label: "Local SEO Morocco", url: "/en/services/local-seo-morocco" },
      { label: "Meta Ads Management", url: "/en/services/meta-ads" },
      { label: "Website Design", url: "/en/services/website-design" },
      { label: "Google Business Profile", url: "/en/services/google-business-profile" }
    ],
    heroImage: "/images/art-house-hero.webp",

    // Expanded Case Study Sections
    challengeDetail: "Art House Marrakech, an exceptional creative workshop space located in the heart of Marrakech Medina, struggled with profitability despite high traveler interest. The studio was heavily dependent on reseller platforms like Viator, Airbnb Experiences, and local hotel concierge desks. These middlemen extracted between 25% and 30% of their booking revenue in commissions, severely limiting their margins. Their digital presence was virtually non-existent; their website loaded extremely slowly, lacked an interactive booking calendar, and failed to appear on Google Maps when in-destination tourists searched for 'pottery classes near me' or 'things to do in Marrakech'. Consequently, they missed out on a massive market of tourists actively looking for creative workshops.",
    solutionDetail: "Urunk designed and executed a comprehensive digital transformation plan for Art House Marrakech. First, we built a custom, lightning-fast mobile booking portal featuring a real-time reservation calendar synced directly with their studio capacity. To attract tourists already exploring the city, we optimized their Google Business Profile with localized geo-targeted keywords and structured schema markup (Event and LocalBusiness), successfully pushing them into the Google Maps Local Pack. Simultaneously, we launched visual Meta (Instagram & Facebook Reels) ad campaigns with a tight geographical fence of 10km around the Marrakech city center. These ads targeted tourists currently on vacation in Marrakech, showcasing engaging, high-definition videos of hands-on clay shaping and zellige-making sessions.",
    resultsDetail: "Within 90 days of implementing the strategy, Art House Marrakech achieved outstanding results: Direct booking share rose from 12% to 68% of total reservations, significantly reducing their dependency on high-commission resellers. Customer Acquisition Cost (CPA) was slashed by 48%, averaging just 35 MAD per reserved seat compared to the 95 MAD previously paid in commissions. The studio saw total monthly bookings rise from 110 to 420 seats, maximizing their capacity. Net profit margins grew by +38% because they were able to retain the full value of each ticket, and their Google Maps profile became their primary source of organic foot traffic and walk-in inquiries.",
    testimonial: {
      quote: "Urunk transformed our studio's business. We were completely at the mercy of middlemen who took a huge chunk of our revenue. Today, our website is our main booking channel. Travelers book their spots directly from their hotel rooms, and our workshop calendar is fully booked weeks in advance.",
      author: "Youssef El Alami",
      role: "Director, Art House Marrakech"
    },
    imageDescriptions: "The main case study visual presents a beautifully framed, warm photography of a master artisan guiding international travelers inside an elegant, open-air riad courtyard in Marrakech. Soft morning light filter through, illuminating the hands-on process of shaping terracotta clay on a traditional foot-spun pottery wheel. The image asset is delivered using a high-performance responsive <picture> block with AVIF and WebP source files, specifically sized to prevent layout shift during loading."
  }
];
