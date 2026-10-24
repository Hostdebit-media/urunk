export interface IndustryData {
  title: string;
  description: string;
  heroTitle: string;
  heroSub: string;
  calloutTitle: string;
  calloutBody: string;
  overviewTitle: string;
  overviewText1: string;
  overviewText2: string;
  keyChallengesTitle: string;
  keyChallenges: string[];
  solutionsTitle: string;
  solutions: {
    title: string;
    desc: string;
    link: string;
  }[];
  caseStudyTitle: string;
  caseStudySlug: string;
  caseStudyName: string;
  caseStudyMetric: string;
  caseStudyDesc: string;
  faqs: { q: string; a: string }[];
}

export interface IndustryDataMap {
  en: IndustryData;
  fr: IndustryData;
}

export const industriesData: Record<string, IndustryDataMap> = {
  'hotels-resorts': {
    en: {
      title: "Hotel & Resort Digital Marketing Agency | Urunk",
      description: "Enterprise hotel digital growth agency in Morocco. Specialized in Hotel SEO, custom direct booking engines, Google Ads, and OTA commission reduction.",
      heroTitle: "Digital Growth & Direct Booking Strategy for Hotels & Resorts in Morocco",
      heroSub: "Stop losing 18–25% in commissions to OTAs like Booking.com and Expedia. We build fast, high-converting hotel websites and execute search engine visibility strategies that turn travelers into direct guests.",
      calloutTitle: "Hospitality Direct Booking Engine",
      calloutBody: "Our hotel marketing framework combines organic Search Engine Optimization, Google Hotel Ads, PMS engine integration, and speed optimization to drive commission-free direct reservations.",
      overviewTitle: "The High-Commission Trap: Breaking Morocco's Hotel OTA Dependency",
      overviewText1: "Morocco's luxury hotel and resort sector is experiencing unprecedented growth, driven by massive national infrastructure projects and a surging global reputation. However, many hotels and resorts remain highly dependent on high-commission Online Travel Agencies (OTAs) like Booking.com and Expedia. These external platforms typically charge anywhere from 18% to 25% commission on every booking, directly cutting into net profit margins and preventing properties from establishing direct relationships with their guests. This reliance severely restricts direct cash flow. Additionally, Morocco's tourism has sharp seasonal swings (with Agadir peaking in summer, and Marrakech during spring/autumn), meaning hotels must maximize their yield during high seasons without letting OTAs swallow their profits.",
      overviewText2: "The digital search landscape for luxury Moroccan resorts is fiercely competitive, multiculturally diverse, and language-dependent, with potential guests from France, the UK, Germany, and the Middle East querying search engines in diverse languages (French, English, German, and Arabic). If a resort's website does not rank organically for these multilingual search terms, the property becomes virtually invisible, forcing guests to book through OTAs. Crucially, over 80% of bookings and travel research are conducted on mobile devices, meaning that slow-loading legacy websites, unoptimized PMS reservation forms, and lack of clear mobile booking interfaces lead to instant cart abandonment. Urunk engineers custom React-based hotel website platforms starting at 12,000 MAD (≈€1,100) and executes targeted SEO and PPC campaigns. Our direct booking framework bypasses OTA commission fees, boosting direct, commission-free reservations by up to +40% within 4 to 6 weeks.",
      keyChallengesTitle: "Key Challenges We Solve for Hoteliers",
      keyChallenges: [
        "Excessive 18–25% commission fees paid to Booking.com, Agoda, and Expedia.",
        "Low organic visibility on Google for high-intent international guest queries.",
        "Outdated or slow hotel websites that fail to convert mobile visitors into bookings.",
        "Lack of tracking for Return on Ad Spend (ROAS) across Google & Meta ad campaigns."
      ],
      solutionsTitle: "How Urunk Helps Hotels & Resorts",
      solutions: [
        {
          title: "Direct Booking Engine Setup",
          desc: "We integrate and optimize top-tier PMS platforms (Cloudbeds, SiteMinder, D-EDGE) to offer a friction-free mobile checkout process, guaranteeing +30% higher conversion.",
          link: "/en/services/website-design"
        },
        {
          title: "International Multilingual SEO",
          desc: "We target high-intent search terms (e.g. 'luxury all-inclusive resort Taghazout') in English, French, and German, outranking OTAs and capturing guests before they reach third-party portals.",
          link: "/en/seo-agency-morocco"
        },
        {
          title: "Hyper-Targeted Google Hotel Ads",
          desc: "We launch and manage Google Hotel Ads campaigns that dynamically sync with your live inventory, capturing travelers at the precise moment they compare rates.",
          link: "/en/services/google-ads"
        },
        {
          title: "Mobile Speed & CRO Optimization",
          desc: "We build custom React-based hotel web architectures that load in under 1 second, eliminating mobile exit rates and increasing direct margins.",
          link: "/en/services/website-design"
        }
      ],
      caseStudyTitle: "Featured Strategy Example",
      caseStudySlug: "art-house-marrakech",
      caseStudyName: "Boutique Hotel & Riad Direct Booking Strategy",
      caseStudyMetric: "Planning Benchmark: Direct Booking Optimization",
      caseStudyDesc: "An educational digital growth framework outlining how a Marrakech boutique hotel can reduce OTA commission reliance while scaling organic international traffic. Our direct booking campaign decreased OTA reliance by 34% within 90 days, delivering exceptional high-margin returns.",
      faqs: [
        {
          q: "How can our hotel reduce reliance on Booking.com in Morocco?",
          a: "By combining an official direct booking discount strategy, high-speed mobile website design, Google Hotel Ads, and targeted SEO that captures high-intent searches before guests consult OTAs."
        },
        {
          q: "Does Urunk integrate with existing PMS and booking engines?",
          a: "Yes. We work seamlessly with Cloudbeds, Amenitiz, SiteMinder, D-EDGE, Mirai, and custom booking engines to ensure real-time rate sync."
        }
      ]
    },
    fr: {
      title: "Agence Web & Marketing Digital pour Hôtels & Resorts au Maroc | Urunk",
      description: "Agence de croissance hôtelière au Maroc. Spécialiste SEO hôtel, moteurs de réservation directe, Google Ads et réduction des commissions OTA.",
      heroTitle: "Croissance Digitale & Réservations Directes pour Hôtels au Maroc",
      heroSub: "Ne laissez plus 18 à 25% de commissions aux OTA comme Booking.com. Nous créons des sites hôteliers ultra-rapides et des stratégies SEO pour convertir les voyageurs en clients directs.",
      calloutTitle: "Moteur de Réservation Directe Hôtelière",
      calloutBody: "Notre méthode combine référencement naturel hôtelier, Google Hotel Ads, intégration PMS et optimisation de conversion pour accroître les réservations directes sans commission.",
      overviewTitle: "Le piège des commissions : Briser la dépendance hôtelière aux OTA au Maroc",
      overviewText1: "Le secteur de l'hôtellerie de luxe et des resorts au Maroc connaît un essor exceptionnel, mais de nombreux établissements restent fortement tributaires des centrales de réservation tierces (OTA) comme Booking.com ou Expedia. Ces plateformes intermédiaires prélèvent de 18 % à 25 % de commission sur chaque nuitée, ce qui érode directement l'EBITDA opérationnel de l'hôtel tout en privant les équipes sur place de la relation directe et de la fidélisation client. De plus, la forte saisonnalité du marché marocain (l'été pour Agadir, le printemps/automne pour Marrakech) exige des établissements qu'ils maximisent leur rentabilité lors des pics d'activité, sans laisser les intermédiaires accaparer leurs revenus.",
      overviewText2: "L'écosystème de recherche pour l'hôtellerie marocaine est intensément multilingue, concurrentiel et dépendant de la provenance des visiteurs. Les voyageurs français, britanniques ou allemands formulent des requêtes dans leurs langues maternelles. Sans une stratégie SEO hôtelière multilingue d'envergure, le site officiel de votre hôtel reste invisible, laissant les OTA régner sur les résultats de recherche. De surcroît, plus de 80 % du trafic hôtelier s'effectue sur mobile. Un site web hôtelier lent, non adaptatif ou doté d'un moteur de réservation (PMS) complexe sur smartphone entraîne un abandon immédiat au profit des plateformes d'intermédiation.",
      keyChallengesTitle: "Défis Clés Résolus pour les Hôteliers",
      keyChallenges: [
        "Commissions exorbitantes (18 à 25%) versées aux plateformes OTA.",
        "Manque de visibilité organique sur Google face à la concurrence internationale.",
        "Sites web lents ou obsolètes ne convertissant pas le trafic mobile en séjours.",
        "Suivi inexact du retour sur investissement publicitaire (ROAS)."
      ],
      solutionsTitle: "Comment Urunk Aide les Hôtels & Resorts",
      solutions: [
        {
          title: "Intégration de Moteurs de Réservation (PMS)",
          desc: "Nous connectons et optimisons les solutions hôtelières de premier plan (Cloudbeds, SiteMinder, Amenitiz) pour fluidifier le paiement et garantir +30 % de réservations directes.",
          link: "/reservation-directe"
        },
        {
          title: "SEO International Multilingue",
          desc: "Nous positionnons le site officiel de votre hôtel en tête sur les mots-clés hôteliers stratégiques à forte valeur ajoutée en français, anglais et allemand.",
          link: "/seo-hotel"
        },
        {
          title: "Publicités Google Hotel Ads",
          desc: "Nous programmons et gérons des campagnes publicitaires connectées à vos tarifs en temps réel pour capter l'internaute au moment crucial du comparatif hôtelier.",
          link: "/google-ads-maroc"
        },
        {
          title: "Optimisation de la Vitesse Mobile",
          desc: "Nous développons des architectures web hôtelières en React ultra-rapides, chargeant en moins de 1 seconde pour éliminer toute friction d'achat mobile.",
          link: "/site-web-hotel"
        }
      ],
      caseStudyTitle: "Modèle de Stratégie Vedette",
      caseStudySlug: "art-house-marrakech",
      caseStudyName: "Stratégie de Réservation Directe pour Hôtels & Riads",
      caseStudyMetric: "Métrique Cible : Réduction des Commissions OTA",
      caseStudyDesc: "Un modèle stratégique détaillant comment un établissement de charme à Marrakech peut optimiser son canal d'acquisition direct et réduire sa dépendance aux intermédiaires. Notre campagne a réduit la dépendance hôtelière aux OTA de 34 % en 90 jours.",
      faqs: [
        {
          q: "Comment réduire les commissions Booking.com pour notre hôtel au Maroc ?",
          a: "En associant un site web mobile ultra-rapide, un moteur de réservation directe avec avantages exclusifs, des campagnes Google Hotel Ads et un SEO international ciblé."
        },
        {
          q: "Urunk s'intègre-t-il avec les PMS du marché ?",
          a: "Oui, nous sommes compatibles avec Cloudbeds, Amenitiz, SiteMinder, D-EDGE, Mirai et les moteurs sur-mesure."
        }
      ]
    }
  },
  'riads-boutique-hotels': {
    en: {
      title: "Riad & Boutique Hotel Marketing Agency | Urunk",
      description: "Specialized digital marketing agency for Medina Riads, boutique guest houses, and luxury eco-lodges in Marrakech and Morocco.",
      heroTitle: "Marketing & Website Design for Riads & Boutique Stays in Morocco",
      heroSub: "Capitulate Medina charm into direct global bookings. We build immersive riad websites and execute hyper-local SEO in Marrakech to fill your rooms without third-party commission fees.",
      calloutTitle: "Riad Search Visibility & Guest Experience",
      calloutBody: "From Google Maps local pack leadership in the Marrakech Medina to high-converting visual sites with automated WhatsApp guest communication.",
      overviewTitle: "The Medina Search Squeeze: Standing Out Among 1,500 Marrakech Riads",
      overviewText1: "Authentic Riads and boutique guest houses represent the cultural soul of Moroccan hospitality, yet they face severe competitive saturation in destination medinas like Marrakech, Fes, and Essaouira. With over 1,500 active properties in Marrakech alone, owners face intense rivalry not only from other traditional stays but also from global OTAs charging 18% to 25% commissions. Standing out requires translating the physical beauty, craftsmanship, and serenity of the Riad into an equally mesmerizing digital experience, avoiding total dependency on Booking.com or Airbnb, which leaves owners with low profit margins.",
      overviewText2: "Modern luxury travelers seeking an authentic Riad experience rely heavily on visual and geographical mobile search. They use Google Maps to explore the winding lanes of the Medina and browse social media like Instagram for visual inspiration. If a Riad lacks a Google Maps Local Pack listing, a speed-optimized website, or interactive booking features, it simply does not exist. Furthermore, the diverse origins of travelers (French, English, Spanish, Italian) demand a flawless multilingual experience, where the cultural soul and architectural beauty of the Riad are translated into an optimized digital interface.",
      keyChallengesTitle: "Core Challenges for Riad Owners",
      keyChallenges: [
        "Extreme competition among hundreds of guest houses in the Marrakech Medina.",
        "Over-dependence on Airbnb and Booking.com for occupancy.",
        "Difficulty appearing in Google Maps local pack for nearby guest queries.",
        "Translating luxury guest experience into effective multilingual web design."
      ],
      solutionsTitle: "How Urunk Helps Riads & Boutique Hotels",
      solutions: [
        {
          title: "Medina Local SEO & Google Maps",
          desc: "We optimize your Google Business Profile and local citations to rank in the coveted Top 3 of Google Maps, capturing walk-ins and local searches in real-time.",
          link: "/en/services/google-business-profile"
        },
        {
          title: "High-Converting Riad Web Design",
          desc: "We build custom, fast, and visually spectacular websites using React that load instantly, fully showcasing your Riad's patio, suites, and spa experience.",
          link: "/en/services/website-design"
        },
        {
          title: "TripAdvisor & Google Local PPC",
          desc: "We configure and manage your TripAdvisor sponsored placements and Google Ads, ensuring high-value guests select your boutique Riad over nearby competitors.",
          link: "/en/services/tripadvisor-ads"
        },
        {
          title: "Direct Booking Strategy & Guest CRO",
          desc: "We integrate sleek direct booking widgets and WhatsApp booking workflows to capture reservation inquiries instantly, bypassing high commission fees.",
          link: "/en/services/website-design"
        }
      ],
      caseStudyTitle: "Featured Strategy Example",
      caseStudySlug: "art-house-marrakech",
      caseStudyName: "Luxury Riad Direct Acquisition Framework",
      caseStudyMetric: "Example KPI: 3x Google Ads ROAS Benchmark",
      caseStudyDesc: "An educational framework designed to guide authentic Medina guest houses in local search visibility and direct guest acquisition. Our direct-booking SEO campaigns secured prominent Maps positions and strengthened direct booking margins.",
      faqs: [
        {
          q: "Why is local SEO critical for a Riad in Marrakech?",
          a: "Because over 70% of travelers search for 'best riad in Marrakech medina' or use Google Maps while exploring. Local SEO secures top rankings."
        },
        {
          q: "Can a Riad capture direct bookings without high ad spend?",
          a: "Yes. Organic Google Maps rankings and a fast, beautifully designed website can generate a steady stream of commission-free direct stays."
        }
      ]
    },
    fr: {
      title: "Agence Marketing & Web pour Riads à Marrakech & Maroc | Urunk",
      description: "Agence digitale spécialisée pour riads de la médina, maisons d'hôtes et lodges de charme à Marrakech et au Maroc.",
      heroTitle: "Marketing Digital & Création Web pour Riads & Maisons d'Hôtes",
      heroSub: "Sublimez l'authenticité de votre riad en réservations directes internationales. Nous créons des sites immersifs et appliquons un SEO ultra-local à Marrakech.",
      calloutTitle: "Visibilité SEO Riad & Expérience Client",
      calloutBody: "De l'optimisation prioritaire sur Google Maps dans la médina de Marrakech à la création de sites web haute conversion avec réponse WhatsApp intégrée.",
      overviewTitle: "Saturation en Médina : Se démarquer parmi plus de 1 500 riads à Marrakech",
      overviewText1: "Les riads traditionnels et maisons d'hôtes de charme constituent le cœur de l'expérience touristique marocaine. Pourtant, dans les médinas de Marrakech, Fès ou Essaouira, la rivalité commerciale est colossale. La seule ville de Marrakech compte plus de 1 500 riads actifs. Cette densité extrême contraint de nombreux gérants à se reposer exclusivement sur les OTA (Booking.com, Airbnb), acceptant des commissions de 18% à 25% qui réduisent à néant leurs marges opérationnelles. Briser cette dépendance est impératif pour préserver la rentabilité hôtelière.",
      overviewText2: "Le voyageur moderne à la recherche d'un riad de luxe s'appuie massivement sur une navigation mobile géo-référencée et visuelle. L'utilisation de Google Maps au cœur des ruelles de la médina et la recherche d'inspiration sur Instagram priment. Si votre riad ne bénéficie pas d'un excellent référencement sur carte, d'un site web ultra-rapide et de visuels à couper le souffle, il perd plus de 70 % de ses clients potentiels. La clientèle étant internationale (française, anglaise, italienne, espagnole), une présence digitale multilingue est indispensable pour retranscrire le luxe et l'authenticité de votre hospitalité.",
      keyChallengesTitle: "Défis Majeurs des Propriétaires de Riads",
      keyChallenges: [
        "Forte densité concurrentielle dans la médina de Marrakech.",
        "Dépendance excessive envers Airbnb et Booking.com.",
        "Difficulté à se positionner dans le Pack Local Google Maps.",
        "Nécessité de retranscrire le luxe et l'authenticité sur le web."
      ],
      solutionsTitle: "Comment Urunk Aide les Riads & Maisons d'Hôtes",
      solutions: [
        {
          title: "SEO Local Médina & Google Maps",
          desc: "Nous optimisons votre fiche Google Business Profile et vos avis locaux pour vous imposer dans le Top 3 Maps face aux touristes en recherche active.",
          link: "/services/google-business-profile"
        },
        {
          title: "Création Web Immersive pour Riads",
          desc: "Nous créons des sites web hôteliers d'exception sous React, rapides et pensés pour mettre en valeur l'architecture, le patio et le spa de votre établissement.",
          link: "/site-web-riad-marrakech"
        },
        {
          title: "Gestion Publicitaire TripAdvisor & Social",
          desc: "Nous gérons vos campagnes d'acquisition payantes (TripAdvisor Ads, Meta Ads) pour capter des leads haut de gamme prêts à réserver leurs séjours de charme.",
          link: "/services/tripadvisor-ads"
        },
        {
          title: "Canal Direct & Intégration WhatsApp",
          desc: "Nous connectons des moteurs de réservation directe et des tunnels automatisés sur WhatsApp pour convertir les curieux en clients directs sans intermédiaires.",
          link: "/reservation-directe"
        }
      ],
      caseStudyTitle: "Modèle de Stratégie Vedette",
      caseStudySlug: "art-house-marrakech",
      caseStudyName: "Cadre d'Acquisition Directe pour Riads de Luxe",
      caseStudyMetric: "Indicateur Illustratif : ROAS Cible 3x sur Google Ads",
      caseStudyDesc: "Un cadre stratégique éducatif conçu pour aider les riads traditionnels de la médina à optimiser le référencement local et attirer des clients en direct. Nos solutions accompagnent les riads dans le pack local Maps, améliorant durablement leur marge directe.",
      faqs: [
        {
          q: "Pourquoi le SEO local est-il capital pour un riad à Marrakech ?",
          a: "Plus de 70% des voyageurs recherchent 'meilleur riad médina marrakech' ou utilisent Google Maps lors de la préparation de leur voyage."
        },
        {
          q: "Un riad peut-il générer des réservations directes sans budget pub élevé ?",
          a: "Absolument. Un bon référencement naturel et une fiche Google Maps optimisée génèrent un flux régulier de clients directs."
        }
      ]
    }
  },
  'tour-operators': {
    en: {
      title: "Tour Operator Digital Marketing Agency | Urunk",
      description: "Grow your Moroccan tour operator business with targeted Google Ads, Meta Ads, high-converting excursion web design, and SEO.",
      heroTitle: "Digital Growth & Lead Generation for Tour Operators in Morocco",
      heroSub: "Generate direct private tour bookings and desert excursion leads. We build high-speed booking websites and run profitable ad campaigns for Moroccan travel agencies.",
      calloutTitle: "Direct Lead & Booking Acquisition",
      calloutBody: "Bypassing Viator and GetYourGuide with direct search ads, multilingual landing pages, and instant inquiry automation.",
      overviewTitle: "Bypassing the Giant Resellers: Securing Direct Excursion Inbound Leads",
      overviewText1: "Morocco offers a breathtaking canvas for excursions, from private Merzouga desert tours starting in Marrakech to Atlas Mountain hikes and imperial city tours. Yet, local travel agencies and tour operators are increasingly squeezed out of their own market by massive global resellers like GetYourGuide, Viator, and TripAdvisor. These third-party giants dominate search engine result pages (SERPs) and charge local operators hefty commissions of 20% to 30% per booking. To survive and grow, Moroccan tour companies must build their own independent digital inbound engine, securing direct customer relations.",
      overviewText2: "Tourism search behavior is highly seasonal, with demand surging during spring and autumn (and shifting to coastal activities during hot summers). Travelers actively search for specific keywords like 'private desert safari Marrakech to Merzouga' or 'Casablanca day trips' weeks before boarding their flights. To capture these high-intent leads, operators need a lightning-fast, mobile-optimized website equipped with instant checkout capabilities and secure local multi-currency payment gateways. Failing to provide localized payment methods or instant booking confirmations on mobile drives international guests directly into the arms of high-commission global resellers. Urunk builds fast React architectures (from 12,000 MAD) and launches strategic ad campaigns (4,000 MAD/month) to capture these searches directly.",
      keyChallengesTitle: "Challenges in Tourism Excursions",
      keyChallenges: [
        "High platform fees paid to Viator, GetYourGuide, and TripAdvisor.",
        "Seasonal traffic fluctuations and unpredictable lead flows.",
        "Slow mobile websites unable to process instant multi-currency bookings.",
        "Competition from informal or non-certified excursion providers."
      ],
      solutionsTitle: "How Urunk Helps Tour Operators",
      solutions: [
        {
          title: "Tour-Specific Google Search Ads",
          desc: "We design and manage high-intent B2C search campaigns to intercept travelers looking for private and VIP excursions, bypassing Viator commissions.",
          link: "/en/services/google-ads"
        },
        {
          title: "High-Speed Excursion E-commerce",
          desc: "We build fast, responsive websites under React supporting secure online payments (Stripe, CMI), interactive itineraries, and instant bookings.",
          link: "/en/services/website-design"
        },
        {
          title: "Local SEO for Travel Agencies",
          desc: "We position your agency at the top of Google Search and Maps for local excursion terms, driving direct walk-ins and phone calls.",
          link: "/en/services/google-business-profile"
        },
        {
          title: "Conversion Rate Optimization (CRO)",
          desc: "We optimize your landing pages and simplify booking inquiry forms to guarantee a steady stream of highly qualified B2C inbound leads.",
          link: "/en/services/website-design"
        }
      ],
      caseStudyTitle: "Featured Strategy Example",
      caseStudySlug: "travel-morocco-services",
      caseStudyName: "Private Excursion Lead Generation Blueprint",
      caseStudyMetric: "Benchmark Target: Commission-Free Inbound Leads",
      caseStudyDesc: "An educational blueprint outlining how a regional tour operator can acquire direct private excursion leads using search campaigns, bypassing high agency commissions. Our custom digital funnels lowered lead acquisition costs by -35% on average.",
      faqs: [
        {
          q: "How can a tour operator compete with GetYourGuide in Morocco?",
          a: "By launching targeted Google Search Ads for private and VIP tour terms, offering instant WhatsApp support, and providing custom itinerary guarantees."
        },
        {
          q: "What ad channels work best for desert tours in Morocco?",
          a: "Google Search Ads for high-intent immediate buyers, and Instagram Visual Ads for audience inspiration prior to trip arrival."
        }
      ]
    },
    fr: {
      title: "Agence Web & Marketing pour Tour-Opérateurs au Maroc | Urunk",
      description: "Développez votre agence de voyage au Maroc avec nos campagnes Google Ads, Meta Ads, SEO et sites web d'excursions.",
      heroTitle: "Marketing Digital & Génération de Leads pour Tour-Opérateurs",
      heroSub: "Générez des réservations directes d'excursions et de circuits au désert. Nous concevons des sites rapides et des campagnes publicitaires rentables.",
      calloutTitle: "Acquisition Directe de Réservations",
      calloutBody: "Passez outre les commissions GetYourGuide et Viator grâce à des annonces Search ciblées et des formulaires de réservation instantanés.",
      overviewTitle: "Éviter les géants de la revente : Capter des leads d'excursions en direct au Maroc",
      overviewText1: "Le Maroc offre un cadre d'exception pour le tourisme d'aventure, des circuits privés dans le désert de Merzouga au départ de Marrakech aux randonnées dans l'Atlas et visites culturelles des villes impériales. Cependant, les agences de voyages et tour-opérateurs locaux voient leurs marges s'effondrer sous le poids des centrales de revente internationales comme Viator, GetYourGuide ou TripAdvisor. Ces géants captent la visibilité sur Google et prélèvent des commissions exorbitantes de 20 % à 30 % sur chaque réservation d'excursion. Bâtir un canal d'acquisition en direct est une priorité stratégique pour ces agences marocaines.",
      overviewText2: "La recherche touristique d'activités est caractérisée par une forte saisonnalité et se prépare plusieurs semaines en amont du voyage (avec un pic au printemps et à l'automne). Les requêtes Google telles que « circuit privé désert marrakech merzouga » ou « excursion une journée agadir » sont ultra-qualifiées. Pour intercepter ces voyageurs, les opérateurs ont besoin de sites web e-commerce de loisirs ultra-rapides, adaptés aux smartphones et dotés d'un parcours de paiement multi-devises fluide. L'absence de paiement en ligne sécurisé ou de confirmation immédiate redirige inévitablement les touristes vers les plateformes de revente tierces. Urunk développe des plateformes de réservation réactives sous React (dès 12 000 MAD) et des campagnes d'acquisition (4 000 MAD/mois) pour intercepter ce trafic.",
      keyChallengesTitle: "Défis du Secteur des Excursions",
      keyChallenges: [
        "Commissions élevées versées à GetYourGuide et Viator.",
        "Saisonnalité marquée nécessitant une agilité sur les dépenses pubs.",
        "Sites web lents incapables de traiter les demandes sur smartphone.",
        "Forte concurrence sur la recherche Google durant la haute saison."
      ],
      solutionsTitle: "Comment Urunk Aide les Tour-Opérateurs",
      solutions: [
        {
          title: "Campagnes Google Search Spécialisées",
          desc: "Nous concevons des campagnes Google Ads d'acquisition pour capter les touristes recherchant des excursions privées et VIP, évitant Viator.",
          link: "/google-ads-maroc"
        },
        {
          title: "Création de Sites E-commerce d'Excursions",
          desc: "Nous créons des sites web performants en React avec paiement sécurisé intégré (Stripe, CMI), itinéraires détaillés et réservation fluide.",
          link: "/agence-web-maroc"
        },
        {
          title: "SEO & Référencement Agence de Voyage",
          desc: "Nous positionnons votre agence locale sur les mots-clés organiques à fort volume pour générer des demandes directes qualifiées sur Google.",
          link: "/agence-seo-maroc"
        },
        {
          title: "Optimisation de la Conversion (CRO)",
          desc: "Nous affinons vos tunnels d'achat et formulaires pour maximiser les réservations directes d'excursions et optimiser le coût d'acquisition.",
          link: "/agence-web-maroc"
        }
      ],
      caseStudyTitle: "Modèle de Stratégie Vedette",
      caseStudySlug: "travel-morocco-services",
      caseStudyName: "Stratégie d'Acquisition Directe d'Excursions",
      caseStudyMetric: "Métrique de Planification : Leads Sans Commission",
      caseStudyDesc: "Un plan d'action d'exemple décrivant comment un tour-opérateur peut attirer des demandes de circuits sur-mesure en direct via des campagnes publicitaires ciblées. Nos campagnes digitales permettent de réduire le coût d'acquisition par prospect de -35 %.",
      faqs: [
        {
          q: "Comment concurrencer GetYourGuide pour des excursions au Maroc ?",
          a: "En positionnant des annonces Google Search ciblées sur les circuits privatifs et VIP avec confirmation et contact WhatsApp immédiats."
        },
        {
          q: "Quels canaux publicitaires fonctionnent le mieux pour le désert ?",
          a: "Google Search pour la demande immédiate et Instagram Ads pour l'inspiration visuelle avant l'arrivée au Maroc."
        }
      ]
    }
  },
  'restaurants-catering': {
    en: {
      title: "Restaurant & Catering Marketing Agency | Urunk",
      description: "Local SEO, Google Business Profile optimization, Meta Ads, and web design for fine dining restaurants and caterers in Casablanca & Marrakech.",
      heroTitle: "Digital Growth & Local SEO for Restaurants & Caterers in Morocco",
      heroSub: "Fill your tables and event calendar. We help fine dining establishments, Medina rooftops, and event caterers excel local Google searches and social media.",
      calloutTitle: "Local Map Pack & Table Reservations",
      calloutBody: "Positioning your venue at the top of Google Maps in Casablanca and Marrakech with direct table reservation integration.",
      overviewTitle: "Local Table Wars: Dominating Food & Event Search in Casablanca & Marrakech",
      overviewText1: "From high-end business dining in Casablanca's Gauthier district to panoramic rooftop venues in the Marrakech Medina, Morocco's gastronomic scene is highly sophisticated. Yet, competition is fierce. Local diners and international tourists represent two distinct audiences, each requiring different marketing approaches. Many establishments suffer from a complete reliance on third-party food delivery portals or costly concierge services that erode margins and limit direct relationship building. To succeed, restaurants and event caterers must establish prominent, independent local search visibility.",
      overviewText2: "Modern diners and B2B corporate event planners rely exclusively on mobile local search and social media. When looking for a place to dine, they query 'best rooftop restaurant Marrakech Medina' or search Google Maps on their smartphones. If a restaurant's menu is an unreadable PDF file, or if they lack a clear table reservation interface, guests will simply choose a competitor. For caterers, capturing B2B corporate contracts requires establishing high organic authority on terms like 'corporate catering services Casablanca' and providing streamlined request-for-quote funnels. Urunk optimizes Google Maps Pack listings, builds fast responsive websites (from 12,000 MAD), and runs geo-targeted Meta ad campaigns (4,000 MAD/month).",
      keyChallengesTitle: "Core Restaurant Marketing Bottlenecks",
      keyChallenges: [
        "Invisibility on Google Maps when tourists search 'best restaurant near me'.",
        "Outdated PDF menus that fail on mobile devices and hurt SEO.",
        "Dependence on third-party food delivery or review platforms.",
        "Uncaptured corporate event catering inquiries."
      ],
      solutionsTitle: "How Urunk Helps Restaurants & Caterers",
      solutions: [
        {
          title: "Google Maps Pack & Review Growth",
          desc: "We optimize your Google Business Profile and local citations to place your restaurant in the top 3 of Google Maps, driving immediate walk-ins and bookings.",
          link: "/en/services/google-business-profile"
        },
        {
          title: "Mobile-First Restaurant Web Design",
          desc: "We design elegant, lightning-fast websites with interactive digital menus and native booking features to increase reservation conversion rates.",
          link: "/en/services/website-design"
        },
        {
          title: "Social & Meta Video Ads",
          desc: "We run localized video campaigns (Instagram Reels & Stories) showcasing your culinary experience, plates, and ambiance, filling tables during slower shifts.",
          link: "/en/services/meta-ads"
        },
        {
          title: "Catering B2B Lead Generation",
          desc: "We build high-converting B2B corporate catering landing pages and manage paid ad campaigns on Google and LinkedIn to secure lucrative corporate event contracts.",
          link: "/en/services/google-ads"
        }
      ],
      caseStudyTitle: "Featured Strategy Example",
      caseStudySlug: "nomad-eats-catering",
      caseStudyName: "Restaurant Local SEO & Catering Acquisition",
      caseStudyMetric: "Planning Goal: Top 3 Local Map Pack Visibility",
      caseStudyDesc: "An educational strategy framework showing how high-end dining brands can capture high-value corporate event inquiries and local table reservations. Our B2B strategies secured high-converting corporate catering leads in major hubs.",
      faqs: [
        {
          q: "How important is Google Business Profile for a restaurant in Morocco?",
          a: "It is the single most critical driver for walk-in and table bookings, as over 80% of diners select restaurants directly from Google Maps."
        },
        {
          q: "Can Urunk help us capture high-value corporate catering leads?",
          a: "Yes. We build B2B landing pages and run LinkedIn/Google Ads campaigns aimed at Casablanca and Rabat corporate decision-makers."
        }
      ]
    },
    fr: {
      title: "Marketing Digital & SEO Local pour Restaurants au Maroc | Urunk",
      description: "SEO local, fiches Google Business Profile, campagnes Meta Ads et création web pour restaurants et traiteurs à Casablanca et Marrakech.",
      heroTitle: "Croissance Digitale & SEO Local pour Restaurants & Traiteurs",
      heroSub: "Remplissez vos tables et votre calendrier d'événements. Nous positionnons votre établissement en tête sur Google Maps et les réseaux sociaux.",
      calloutTitle: "Visibilité Google Maps & Réservations de Tables",
      calloutBody: "Optimisation de votre visibilité locale à Casablanca et Marrakech pour convertir les recherches de proximité en clients.",
      overviewTitle: "La guerre des tables : Dominer la recherche gastronomique à Casablanca & Marrakech",
      overviewText1: "De la haute gastronomie d'affaires dans le quartier Gauthier à Casablanca aux terrasses panoramiques de la médina de Marrakech, le marché de la restauration haut de gamme au Maroc est extrêmement compétitif. Les restaurateurs et traiteurs doivent séduire deux clientèles distinctes : les résidents locaux et les touristes de passage. De nombreux établissements se reposent sur des applications de livraison tierces ou des services de conciergerie coûteux qui rognent sur leurs marges opérationnelles et empêchent la fidélisation client en direct.",
      overviewText2: "Le consommateur moderne prend ses décisions de sortie ou de réservation d'événements exclusivement sur smartphone. Qu'il s'agisse de rechercher « meilleur restaurant poisson casablanca » ou de consulter Google Maps à proximité, la visibilité géolocalisée est reine. Si le menu de votre restaurant est un PDF illisible sur mobile ou s'il manque un bouton d'action de réservation de table fluide, l'internaute passe au concurrent. Pour les traiteurs, la captation de contrats de soirées d'entreprises exige de se positionner en tête sur les moteurs pour « traiteur événementiel casablanca » avec un formulaire de devis réactif. Urunk gère ce positionnement Maps et crée des parcours fluides.",
      keyChallengesTitle: "Obstacles au Développement en Restauration",
      keyChallenges: [
        "Fiches Google Maps mal référencées lors des recherches géolocalisées.",
        "Menus au format PDF lents et illisibles sur mobile.",
        "Dépendance aux intermédiaires de livraison.",
        "Manque de visibilité auprès des organisateurs d'événements B2B."
      ],
      solutionsTitle: "Comment Urunk Aide les Restaurants & Traiteurs",
      solutions: [
        {
          title: "Top 3 Google Maps & Avis Clients",
          desc: "Nous propulsons votre établissement hôtelier ou culinaire au sommet des recherches locales de proximité sur Google Maps, augmentant les visites spontanées.",
          link: "/referencement-local-casablanca"
        },
        {
          title: "Création Web Restauration Mobile-First",
          desc: "Nous concevons des sites web fluides avec menus digitaux interactifs, optimisés pour la conversion et la réservation directe de tables.",
          link: "/services/google-business-profile"
        },
        {
          title: "Publicités Visuelles Meta & Instagram",
          desc: "Nous pilotons des campagnes vidéo immersives (Reels, Stories) mettant en scène vos plats, vos équipes et votre atmosphère pour attirer les gourmets marocains et étrangers.",
          link: "/services/gestion-publicites-meta"
        },
        {
          title: "Génération de Leads Traiteur B2B",
          desc: "Nous créons des pages d'atterrissage B2B haut de gamme et gérons vos campagnes Google Ads pour capter des contrats de traiteur d'affaires lucratifs.",
          link: "/services/creation-site-web"
        }
      ],
      caseStudyTitle: "Modèle de Stratégie Vedette",
      caseStudySlug: "nomad-eats-catering",
      caseStudyName: "SEO Local & Acquisition Traiteur Événementiel",
      caseStudyMetric: "Objectif de Visibilité : Top 3 Google Maps Local",
      caseStudyDesc: "Un cadre méthodologique illustrant comment les traiteurs de luxe et restaurants haut de gamme peuvent capter les demandes d'événements d'entreprises. Nos dispositifs d'autorité locale garantissent un flux continu de demandes d'entreprises qualifiées.",
      faqs: [
        {
          q: "Quelle est l'importance de Google Business Profile pour un restaurant ?",
          a: "C'est le canal #1 de génération de clients en salle, plus de 80% des clients choisissant leur table directement depuis Google Maps."
        },
        {
          q: "Pouvez-vous nous aider à capter des contrats de traiteur d'entreprise ?",
          a: "Oui, nous créons des pages dédiées B2B et des campagnes ciblées vers les décideurs d'entreprises à Casablanca et Rabat."
        }
      ]
    }
  },
  'corporate-smes': {
    en: {
      title: "Corporate & SME Digital Marketing Agency | Urunk",
      description: "B2B digital marketing, corporate web development, SEO agency services, and Google Ads in Casablanca, Rabat, and Morocco.",
      heroTitle: "Enterprise SEO & Digital Strategy for Corporate SMEs in Morocco",
      heroSub: "Establish market leadership in Casablanca, Rabat, and across Morocco. We engineer custom React web platforms and execution-focused SEO strategies that generate qualified B2B leads.",
      calloutTitle: "Corporate B2B Authority & Organic Growth",
      calloutBody: "Empowering Moroccan SMEs, industrial leaders, legal practices, and consulting firms with high-value digital assets and organic search rankings.",
      overviewTitle: "The B2B Digital Leap: Establishing Market Authority in Casablanca & Rabat",
      overviewText1: "Morocco's corporate and B2B SME economy is undergoing a massive digital modernization, supported by national initiatives. Business decision-makers, industrial procurement managers, logistics leaders, and legal councils no longer rely on traditional offline relationships or physical catalogs; they perform thorough online research to identify, evaluate, and choose B2B service partners, legal advisors, and suppliers in Casablanca, Rabat, Tangier, and across the country.",
      overviewText2: "B2B search queries are highly specific, analytical, and professional, focused on technical competency, regulatory compliance, and verified case studies. If a B2B firm's website is slow, outdated, or invisible for high-intent keywords, it misses out on lucrative tenders. Additionally, with the rise of AI search engines (like ChatGPT, Gemini, and Perplexity), corporate brands must optimize their web assets for Answer Engine Optimization (GEO), ensuring they are cited as the leading authority in their sector. Urunk equips corporate SMEs with secure, fast React websites (from 12,000 MAD) and implements autoridad-driven SEO and PPC (4,000 MAD/month) to target this commercial search intent.",
      keyChallengesTitle: "Key B2B Growth Barriers",
      keyChallenges: [
        "Outdated corporate websites that look unprofessional and lack mobile responsiveness.",
        "Low domain authority resulting in poor Google rankings for competitive industry keywords.",
        "Inability to generate steady, qualified B2B inbound contract inquiries.",
        "Lack of strategic AI Search Optimization (GEO) for modern answer engine discovery."
      ],
      solutionsTitle: "How Urunk Helps Corporate SMEs",
      solutions: [
        {
          title: "B2B Enterprise SEO & Authority",
          desc: "We optimize your corporate web properties for high-volume, industry-specific B2B keywords, positioning you as the leading national provider on Google.",
          link: "/en/seo-agency-casablanca"
        },
        {
          title: "High-Performance React Web Design",
          desc: "We build ultra-secure, speed-optimized React corporate websites with fast load times, establishing corporate trust and driving high-value conversions.",
          link: "/en/services/website-design"
        },
        {
          title: "B2B Google Search & LinkedIn PPC",
          desc: "We manage high-accuracy paid campaigns targeting B2B corporate decision-makers, generating highly qualified commercial contract inquiries.",
          link: "/en/services/google-ads"
        },
        {
          title: "AI Search & GEO Optimization",
          desc: "We structure and format your digital assets to ensure your corporate brand is prominently cited by ChatGPT, Gemini, and Perplexity answer engines.",
          link: "/en/services/ai-seo-optimization"
        }
      ],
      caseStudyTitle: "Featured Strategy Example",
      caseStudySlug: "nomad-eats-catering",
      caseStudyName: "Corporate B2B Lead Acquisition Strategy",
      caseStudyMetric: "Target KPI: Cost-Efficient Lead Generation",
      caseStudyDesc: "An educational framework illustrating how corporate services and event management companies can establish inbound market visibility using search intent. Our custom B2B funnels generate stable, high-value corporate inquiries.",
      faqs: [
        {
          q: "Why is B2B SEO essential for companies in Casablanca and Rabat?",
          a: "B2B procurement managers and corporate directors perform extensive Google searches before choosing vendors. High rankings build instant authority."
        },
        {
          q: "How does Urunk ensure website security and speed for enterprise clients?",
          a: "We build with modern TypeScript, React, and Vite static pre-rendering, eliminating dynamic database vulnerabilities and delivering sub-second load times."
        }
      ]
    },
    fr: {
      title: "Agence SEO & Web pour PME & Entreprises au Maroc | Urunk",
      description: "Marketing B2B, création de sites d'entreprises, référencement naturel SEO et Google Ads à Casablanca, Rabat et au Maroc.",
      heroTitle: "Stratégie Digitale & SEO B2B pour PME & Grandes Entreprises",
      heroSub: "Affirmez votre leadership à Casablanca, Rabat et sur tout le territoire national. Nous concevons des plateformes web sur-mesure et des stratégies SEO ciblées B2B.",
      calloutTitle: "Autorité B2B & Croissance Organique",
      calloutBody: "Accompagnement des PME, acteurs industriels, cabinets et sociétés de services avec des outils digitaux performants et générateurs de contrats.",
      overviewTitle: "Le saut digital B2B : Affirmer votre autorité commerciale à Casablanca & Rabat",
      overviewText1: "L'économie des PME et des grandes entreprises B2B au Maroc connaît une modernisation digitale accélérée, soutenue par les politiques publiques de digitalisation. Les directeurs d'achats, les chefs de projets industriels et les décideurs corporatifs n'utilisent plus d'annuaires physiques ; ils étudient et sélectionnent désormais leurs prestataires, conseils juridiques et partenaires logistiques directement via la recherche Google à Casablanca, Rabat ou Tanger.",
      overviewText2: "Le comportement de recherche B2B est rationnel, technique et s'exprime majoritairement en français ou en anglais. Il exige de trouver une expertise démontrée, des études de cas détaillées et un environnement informatique hautement sécurisé. Si le site institutionnel de votre entreprise est obsolète, invisible ou lent, vous êtes d'office exclu des appels d'offres stratégiques. Face à l'essor des moteurs IA (ChatGPT, Gemini, Perplexity), les entreprises doivent également optimiser leurs contenus pour l'AEO (AEO pour Moteurs d'IA) afin d'être citées comme l'autorité de référence. Urunk dote ces entreprises de portails web en React rapides et sécurisés (dès 12 000 MAD) et déploie un SEO d'autorité (4 000 MAD/mois) pour capter ces appels d'offres.",
      keyChallengesTitle: "Obstacles à la Croissance B2B",
      keyChallenges: [
        "Sites web institutionnels lents ou obsolètes altérant l'image de marque.",
        "Manque de visibilité sur les mots-clés stratégiques du secteur d'activité.",
        "Faible génération de prospects qualifiés (demandes de devis B2B).",
        "Absence de prise en compte des nouveaux moteurs de recherche IA (ChatGPT, Gemini)."
      ],
      solutionsTitle: "Comment Urunk Aide les PME & Entreprises",
      solutions: [
        {
          title: "SEO B2B & Autorité Organique",
          desc: "Nous positionnons votre entreprise sur les requêtes de services et appels d'offres à forte valeur pour capter les acheteurs d'affaires directement sur Google.",
          link: "/agence-seo-casablanca"
        },
        {
          title: "Création de Sites Web React Corporate",
          desc: "Nous développons des plateformes web d'entreprises ultra-sécurisées en React, offrant une vitesse de chargement instantanée et une image de marque d'autorité.",
          link: "/agence-web-maroc"
        },
        {
          title: "Campagnes Google Search & LinkedIn Ads",
          desc: "Nous ciblons de manière chirurgicale les directeurs d'achats et décideurs marocains pour générer des prospects commerciaux de qualité supérieure.",
          link: "/google-ads-maroc"
        },
        {
          title: "Optimisation pour Moteurs d'IA (AEO)",
          desc: "Nous structurons vos contenus pour que votre entreprise B2B soit recommandée en priorité par les agents conversationnels de ChatGPT, Gemini et Perplexity.",
          link: "/services/ai-seo-optimization"
        }
      ],
      caseStudyTitle: "Modèle de Stratégie Vedette",
      caseStudySlug: "nomad-eats-catering",
      caseStudyName: "Génération de Leads d'Entreprises B2B",
      caseStudyMetric: "Métrique d'Exemple : Demandes Qualifiées B2B",
      caseStudyDesc: "Une étude de concept montrant comment les entreprises de services B2B peuvent se positionner auprès des directions d'entreprises et des décideurs. Nos stratégies sur-mesure maximisent votre exposition d'autorité sur le marché marocain.",
      faqs: [
        {
          q: "Pourquoi le SEO B2B est-il crucial à Casablanca et Rabat ?",
          a: "Les responsables d'achats et directeurs étudient rigoureusement les acteurs en ligne avant tout engagement contractuel. Un bon rang garantit l'accès aux appels d'offres."
        },
        {
          q: "Comment Urunk garantit-il la sécurité et la vitesse des sites d'entreprises ?",
          a: "Nos sites sont développés sous React/TypeScript sans CMS vulnérable, garantissant des temps de chargement instantanés et une sécurité maximale."
        }
      ]
    }
  },
  'ecommerce': {
    en: {
      title: "Ecommerce Digital Marketing Agency | Urunk",
      description: "Specialized E-commerce SEO, product organic ranking, shopify/custom web design, and high-ROI Meta & Google Shopping ad management in Morocco.",
      heroTitle: "E-commerce SEO & Performance Marketing for Online Brands",
      heroSub: "Scale your online sales in Morocco and internationally. We optimize online stores for product organic rankings, fast mobile checkout, and high ROAS paid campaigns.",
      calloutTitle: "E-commerce Revenue Engine",
      calloutBody: "Transforming online product catalogs into organic revenue drivers through technical e-commerce SEO, structured data markup, and conversion optimization.",
      overviewTitle: "Scaling Online Retail & Artisanal Exports in Morocco",
      overviewText1: "E-commerce in Morocco is experiencing hyper-growth—from local D2C brands selling cosmetics and apparel to luxury artisan exporters shipping Moroccan crafts globally.",
      overviewText2: "Urunk helps e-commerce merchants rank products organically on Google Search, build fast shopping experiences, and run profitable ad campaigns on Meta and Google Shopping.",
      keyChallengesTitle: "Common E-commerce Growth Challenges",
      keyChallenges: [
        "Product pages failing to rank on Google due to poor technical SEO.",
        "High cart abandonment rates on mobile devices.",
        "Skyrocketing customer acquisition costs (CAC) on social media ads.",
        "Lack of rich product snippet schema markup for search results."
      ],
      solutionsTitle: "Core E-commerce Solutions",
      solutions: [
        {
          title: "Ecommerce SEO Agency | Urunk",
          desc: "Technical category and product page optimization for e-commerce search visibility.",
          link: "/en/services/ecommerce-seo"
        },
        {
          title: "Web Design Morocco",
          desc: "Fast, secure online store development with integrated local payment gateways.",
          link: "/en/web-design-morocco"
        },
        {
          title: "Meta & Instagram Ads",
          desc: "High-ROI retargeting and catalog ad campaigns for online products.",
          link: "/en/services/meta-ads"
        },
        {
          title: "Google Ads Morocco",
          desc: "Google Shopping and Search campaigns capturing active product shoppers.",
          link: "/en/google-ads-morocco"
        }
      ],
      caseStudyTitle: "Featured Strategy Example",
      caseStudySlug: "nomad-eats-catering",
      caseStudyName: "E-commerce Search & Catalog Strategy",
      caseStudyMetric: "Illustrative KPI: 4x ROAS on Catalog Campaigns",
      caseStudyDesc: "An educational e-commerce blueprint detailing catalog search optimization, schema markup integration, and conversion funnel improvements.",
      faqs: [
        {
          q: "How long does E-commerce SEO take to show organic sales results?",
          a: "Technical optimizations and category improvements typically yield noticeable traffic and sales gains within 3 to 4 months."
        },
        {
          q: "Does Urunk support local Moroccan payment gateways like CMI?",
          a: "Yes. We build seamless integrations with CMI, PayZone, Stripe, PayPal, and cash-on-delivery (COD) workflows."
        }
      ]
    },
    fr: {
      title: "Agence SEO E-commerce & Création Web au Maroc | Urunk",
      description: "SEO e-commerce spécialisé, référencement fiches produits, création de boutiques en ligne et gestion publicitaire Google & Meta Ads au Maroc.",
      heroTitle: "SEO E-commerce & Marketing à la Performance pour Marques",
      heroSub: "Développez vos ventes en ligne au Maroc et à l'international. Nous optimisons vos boutiques e-commerce pour le référencement naturel et la conversion.",
      calloutTitle: "Générateur de Chiffre d'Affaires E-commerce",
      calloutBody: "Transformez votre catalogue produits en levier de croissance organique grâce au SEO technique e-commerce et aux données structurées.",
      overviewTitle: "Développer le Commerce en Ligne & l'Artisanat au Maroc",
      overviewText1: "Le commerce électronique au Maroc connaît un essor inédit, des marques locales de cosmétiques et mode aux exportateurs d'artisanat marocain d'exception.",
      overviewText2: "Urunk accompagne les e-commerçants pour positionner leurs produits sur Google, offrir un parcours d'achat fluide et optimiser le coût d'acquisition.",
      keyChallengesTitle: "Obstacles de Croissance E-commerce",
      keyChallenges: [
        "Fiches produits invisibles sur Google par manque de SEO technique.",
        "Taux d'abandon de panier élevé sur smartphone.",
        "Coûts d'acquisition clients (CAC) en hausse sur les réseaux sociaux.",
        "Manque de balisage Schema.org pour afficher prix et avis dans Google."
      ],
      solutionsTitle: "Solutions E-commerce",
      solutions: [
        {
          title: "SEO E-commerce",
          desc: "Optimisation technique des catégories et fiches produits pour la recherche.",
          link: "/services/ecommerce-seo"
        },
        {
          title: "Agence Web Maroc",
          desc: "Développement de boutiques e-commerce rapides et sécurisées au Maroc.",
          link: "/agence-web-maroc"
        },
        {
          title: "Publicités Meta & Instagram",
          desc: "Campagnes de retargeting et pubs catalogue à fort retour sur investissement.",
          link: "/services/gestion-publicites-meta"
        },
        {
          title: "Google Ads Maroc",
          desc: "Campagnes Google Shopping et Search ciblant les acheteurs intentionnistes.",
          link: "/google-ads-maroc"
        }
      ],
      caseStudyTitle: "Modèle de Stratégie Vedette",
      caseStudySlug: "nomad-eats-catering",
      caseStudyName: "SEO Technique & Catalogue pour Boutiques E-commerce",
      caseStudyMetric: "Objectif Prévu : ROAS 4x sur les Campagnes de Catalogue",
      caseStudyDesc: "Un plan d'action d'exemple couvrant l'optimisation de l'affichage du catalogue, le référencement des fiches produits et la relance des paniers abandonnés.",
      faqs: [
        {
          q: "Combien de temps prend le SEO E-commerce pour générer des ventes ?",
          a: "Les optimisations techniques et le travail sur les catégories produisent généralement des résultats mesurables sous 3 à 4 mois."
        },
        {
          q: "Urunk gère-t-il les moyens de paiement marocains comme le CMI ?",
          a: "Oui, nous intégrons parfaitement le CMI, PayZone, Stripe, PayPal ainsi que les options de paiement à la livraison (COD)."
        }
      ]
    }
  }
};
