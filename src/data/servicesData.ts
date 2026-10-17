export interface ServicePageData {
  title: string;
  description: string;
  heroTitle: string;
  heroSub: string;
  calloutTitle: string;
  calloutBody: string;
  problemTitle: string;
  problemText1: string;
  problemText2: string;
  signsTitle: string;
  signs: string[];
  featuresTitle: string;
  features: { title: string; desc: string }[];
  processTitle: string;
  processSteps: { step: number; title: string; desc: string }[];
  investmentTitle: string;
  investmentPrice: string;
  investmentDesc: string;
  faqs: { q: string; a: string }[];
}



export const servicesData: Record<string, { en: ServicePageData; fr: ServicePageData }> = {
  "creation-site-web-prix": {
    "en": {
      "title": "Website Design Morocco Price: Website Creation Costs | Urunk",
      "description": "Discover transparent website design pricing in Morocco. Urunk engineers high-performance custom websites with clear, fixed-price packages and high ROI.",
      "heroTitle": "Website Design Morocco Price",
      "heroSub": "What is the real cost of a high-performance, SEO-optimized website in Morocco? We deliver transparent, performance-focused pricing with zero hidden commissions.",
      "calloutTitle": "A High-ROI Investment For Your Search Visibility",
      "calloutBody": "Do not pay for a slow website that remains invisible on Google. Urunk designs blazing-fast custom web architectures optimized for Core Web Vitals to convert organic visitors into active paying clients.",
      "problemTitle": "Why do website creation prices vary so much in Morocco?",
      "problemText1": "From insecure low-cost platforms to overpriced agencies, navigating website pricing is challenging. True web value depends on page speed, customization, and integrated SEO architecture.",
      "problemText2": "At Urunk, we believe in complete transparency. We provide fixed-price packages for professional corporate and hospitality websites that actually grow your customer base.",
      "signsTitle": "Key factors that determine professional website cost:",
      "signs": [
        "Core Web Vitals performance and page speed engineering",
        "Level of custom user experience and user interface design",
        "Foundational search engine optimization (SEO) implementation",
        "Security protocols, domain setups, and reliable cloud hosting"
      ],
      "featuresTitle": "Our value-driven web solutions:",
      "features": [
        {
          "title": "Bespoke Custom Design",
          "desc": "Distinct visual design aligned with your brand identity and commercial conversion goals."
        },
        {
          "title": "Built-In SEO Architecture",
          "desc": "Technical structure pre-optimized for Google indexing and search query visibility from day one."
        },
        {
          "title": "Excellent Core Web Vitals",
          "desc": "Blazing-fast mobile page loads engineered to retain visitors and maximize bookings."
        }
      ],
      "processTitle": "Our Web Development Methodology",
      "processSteps": [
        {
          "step": 1,
          "title": "Project Scope & Strategy",
          "desc": "We analyze your target market, competitors, and map out your core conversion funnel."
        },
        {
          "step": 2,
          "title": "Design & UX Prototyping",
          "desc": "We design high-converting, mobile-responsive layouts tailored to your unique audience."
        },
        {
          "step": 3,
          "title": "Engineering & Deployment",
          "desc": "We build with lightweight, clean code and deploy on ultra-reliable, high-speed hosting."
        }
      ],
      "investmentTitle": "Website Investment",
      "investmentPrice": "Starting at 12,000 MAD",
      "investmentDesc": "Transparent flat-rate package for a professional, search-optimized business website.",
      "faqs": [
        {
          "q": "How much does a professional website cost in Morocco?",
          "a": "A professional business website at Urunk starts at 12,000 MAD for a custom SEO-optimized landing architecture. Custom hotel sites with PMS integrations or complex e-commerce platforms scale based on features."
        },
        {
          "q": "Are there any hidden recurring fees or mandatory contracts?",
          "a": "No. Our website creation pricing is a transparent, one-time flat fee. You retain 100% ownership of your domain, hosting, assets, and source code."
        }
      ]
    },
    "fr": {
      "title": "Création Site Web Maroc Prix : Tarifs Création de Site Internet | Urunk",
      "description": "Découvrez les prix de création de site web au Maroc. Urunk conçoit des sites internet haute performance avec un excellent rapport qualité-prix.",
      "heroTitle": "Création Site Web Maroc Prix",
      "heroSub": "Quel est le coût réel d'un site internet performant et optimisé SEO au Maroc ? Nous proposons des forfaits transparents, adaptés à votre budget d'acquisition.",
      "calloutTitle": "Un investissement rentable pour votre visibilité",
      "calloutBody": "Ne payez pas pour un site internet lent ou invisible sur Google. Urunk conçoit des architectures web ultra-rapides, adaptées aux exigences modernes du référencement et optimisées pour générer un retour sur investissement rapide.",
      "problemTitle": "Pourquoi les prix de création de site web varient-ils au Maroc ?",
      "problemText1": "Entre les solutions low-cost non sécurisées et les agences aux tarifs exorbitants, il est difficile de s'y retrouver. Le prix d'un site web dépend de sa vitesse, de son niveau de personnalisation et de son optimisation SEO.",
      "problemText2": "Chez Urunk, nous croyons en la transparence. Nous proposons des forfaits à prix fixe pour la création de sites internet professionnels qui convertissent réellement vos visiteurs en clients.",
      "signsTitle": "Ce qui détermine le prix d'un site internet professionnel :",
      "signs": [
        "La vitesse de chargement et le respect des Core Web Vitals",
        "L'intégration d'un design sur-mesure ou de modèles pré-conçus",
        "L'optimisation pour le référencement naturel (SEO)",
        "Le niveau de sécurité et la qualité de l'hébergement"
      ],
      "featuresTitle": "Nos solutions web au juste prix :",
      "features": [
        {
          "title": "Design Sur-Mesure",
          "desc": "Conception unique alignée avec l'identité de votre marque et vos objectifs de conversion."
        },
        {
          "title": "SEO Intégré dès le Départ",
          "desc": "Structure technique optimisée pour Google pour que votre site soit visible immédiatement."
        },
        {
          "title": "Vitesse de Chargement Exceptionnelle",
          "desc": "Sites internet ultra-rapides conçus pour d'excellentes performances Core Web Vitals."
        }
      ],
      "processTitle": "Notre méthodologie de création",
      "processSteps": [
        {
          "step": 1,
          "title": "Cadrage du Projet",
          "desc": "Analyse de vos besoins, de vos concurrents et définition de l'architecture du site."
        },
        {
          "step": 2,
          "title": "Maquettage & Design",
          "desc": "Création d'une interface utilisateur moderne, fluide et optimisée sur mobile."
        },
        {
          "step": 3,
          "title": "Développement & Lancement",
          "desc": "Intégration technique, optimisation de la vitesse et mise en ligne sécurisée."
        }
      ],
      "investmentTitle": "Tarif de Création",
      "investmentPrice": "À partir de 12 000 MAD",
      "investmentDesc": "Forfait tout-inclus pour un site vitrine professionnel rapide et optimisé SEO.",
      "faqs": [
        {
          "q": "Combien coûte la création d'un site web professionnel au Maroc ?",
          "a": "Le prix d'un site web professionnel chez Urunk commence à 12 000 MAD pour un site vitrine optimisé SEO. Pour un site hôtelier avec moteur de réservation ou un site e-commerce, les tarifs s'adaptent selon la complexité."
        },
        {
          "q": "Y a-t-il des frais cachés ou des abonnements obligatoires ?",
          "a": "Non. Nos tarifs de création de site sont uniques et sans frais cachés. Vous restez propriétaire à 100% de votre nom de domaine, de votre hébergement et de votre code."
        }
      ]
    }
  },
  "web-design-morocco": {
    "en": {
      "title": "Website Design Morocco: Hotel Web Design | Urunk",
      "description": "Get more direct bookings with our specialized Moroccan web design agency. We build blazing-fast, high-converting websites for hotels, riads, and tourism businesses.",
      "heroTitle": "Morocco's Leading Hospitality Web Design Agency",
      "heroSub": "We engineer beautiful, lightning-fast websites designed specifically to increase direct bookings for Moroccan hotels, riads, and tour operators.",
      "calloutTitle": "Stop Losing Guests to OTAs",
      "calloutBody": "Your website is your most powerful booking engine. We build custom WordPress sites for Moroccan hospitality brands that capture attention, load instantly, and drive direct reservations without Booking.com commissions.",
      "problemTitle": "Is your current website costing you direct bookings?",
      "problemText1": "Many hotels and riads lose up to 25% of their revenue to Online Travel Agencies (OTAs) simply because their own website is slow, outdated, or hard to use on mobile devices.",
      "problemText2": "A professional, high-speed website tailored for the Moroccan tourism market gives you full control over the guest experience and significantly improves your profit margins.",
      "signsTitle": "Signs your hospitality website needs an upgrade:",
      "signs": [
        "High bounce rates and low direct booking conversion",
        "Loading times over 3 seconds on mobile networks",
        "No integrated booking engine or clear call-to-action",
        "Looks outdated compared to your luxury competitors"
      ],
      "featuresTitle": "What makes our hospitality websites convert:",
      "features": [
        {
          "title": "Mobile-First Design",
          "desc": "Over 70% of travel bookings happen on mobile. Our designs are pixel-perfect on every device."
        },
        {
          "title": "Direct Booking Engine Integration",
          "desc": "Seamless connection with your PMS (Cloudbeds, Mews, etc.) for friction-free reservations."
        },
        {
          "title": "Speed Optimization",
          "desc": "Lightning-fast loading times that keep potential guests on your site and improve Google rankings."
        }
      ],
      "processTitle": "Our Web Design Process",
      "processSteps": [
        {
          "step": 1,
          "title": "Discovery & Strategy",
          "desc": "We analyze your target audience, current booking metrics, and brand identity."
        },
        {
          "step": 2,
          "title": "Design & UX",
          "desc": "Creating a stunning visual interface focused on driving users to the 'Book Now' button."
        },
        {
          "step": 3,
          "title": "Development & Integration",
          "desc": "Building the site with clean code and integrating your preferred booking engine."
        }
      ],
      "investmentTitle": "Website Investment",
      "investmentPrice": "Starting at 12,000 MAD",
      "investmentDesc": "Includes custom design, booking engine integration, and foundational SEO.",
      "faqs": [
        {
          "q": "Do you integrate with my existing booking engine?",
          "a": "Yes, we integrate seamlessly with major PMS platforms like Cloudbeds, SiteMinder, Mews, and Little Hotelier."
        },
        {
          "q": "How long does a new website take?",
          "a": "A custom hotel or riad website typically takes 4-6 weeks from discovery to launch."
        }
      ]
    },
    "fr": {
      "title": "Création Site Web Maroc : Agence Digitale Riad | Urunk",
      "description": "Augmentez vos réservations directes avec notre agence web spécialisée au Maroc. Sites internet ultra-rapides et optimisés pour la conversion hôtelière.",
      "heroTitle": "L'Agence Web Hôtelière de Référence au Maroc",
      "heroSub": "Nous concevons des sites web magnifiques et ultra-rapides, spécialement créés pour augmenter les réservations directes de votre riad ou hôtel.",
      "calloutTitle": "Cessez de perdre des clients face aux OTA",
      "calloutBody": "Votre site web est votre moteur de réservation le plus puissant. Nous créons des sites sur mesure pour les marques hôtelières marocaines qui captivent l'attention et génèrent des réservations directes sans commissions.",
      "problemTitle": "Votre site actuel vous fait-il perdre des réservations ?",
      "problemText1": "De nombreux hôtels et riads perdent jusqu'à 25% de leurs revenus au profit des OTA (Booking.com, Expedia) car leur propre site est lent ou peu adapté aux mobiles.",
      "problemText2": "Un site web professionnel et performant vous donne le contrôle total sur l'expérience client et améliore considérablement vos marges bénéficiaires.",
      "signsTitle": "Signes que votre site hôtelier a besoin d'une refonte :",
      "signs": [
        "Taux de rebond élevé et peu de réservations directes",
        "Temps de chargement supérieur à 3 secondes sur mobile",
        "Pas de moteur de réservation intégré ou de bouton clair",
        "Design obsolète face à vos concurrents directs"
      ],
      "featuresTitle": "Ce qui rend nos sites hôteliers performants :",
      "features": [
        {
          "title": "Design Mobile-First",
          "desc": "Plus de 70% des réservations se font sur mobile. Nos designs sont parfaits sur tous les écrans."
        },
        {
          "title": "Intégration Moteur de Réservation",
          "desc": "Connexion fluide avec votre PMS (Cloudbeds, Mews, etc.) pour des réservations sans friction."
        },
        {
          "title": "Optimisation de la Vitesse",
          "desc": "Temps de chargement ultra-rapides pour retenir les visiteurs et améliorer votre classement Google."
        }
      ],
      "processTitle": "Notre Processus de Création Web",
      "processSteps": [
        {
          "step": 1,
          "title": "Découverte et Stratégie",
          "desc": "Analyse de votre audience, vos métriques actuelles et votre identité de marque."
        },
        {
          "step": 2,
          "title": "Design et UX",
          "desc": "Création d'une interface visuelle axée sur la conversion vers la réservation."
        },
        {
          "step": 3,
          "title": "Développement et Intégration",
          "desc": "Code propre et intégration de votre moteur de réservation préféré."
        }
      ],
      "investmentTitle": "Investissement Site Web",
      "investmentPrice": "À partir de 12 000 MAD",
      "investmentDesc": "Inclut le design sur mesure, l'intégration du moteur de réservation et le SEO de base.",
      "faqs": [
        {
          "q": "Intégrez-vous mon moteur de réservation actuel ?",
          "a": "Oui, nous intégrons parfaitement les principaux PMS comme Cloudbeds, SiteMinder, Mews et Little Hotelier."
        },
        {
          "q": "Combien de temps faut-il pour créer le site ?",
          "a": "Un site web d'hôtel ou de riad sur mesure prend généralement de 4 à 6 semaines."
        }
      ]
    }
  },
  "hotel-seo": {
    "en": {
      "title": "Hotel SEO Services: Rank Higher & Direct Book | Urunk",
      "description": "Expert Hotel SEO services to outrank OTAs and competitors on Google. Increase your direct bookings and reduce OTA commissions.",
      "heroTitle": "Hotel SEO That Drives Direct Bookings",
      "heroSub": "Stop relying entirely on OTAs. We optimize your hotel's website to excel Google search results and capture high-intent travelers.",
      "calloutTitle": "Outrank the OTAs and Take Back Your Margins",
      "calloutBody": "Online Travel Agencies excel search results, but with a targeted Hotel SEO strategy, you can capture travelers searching for specific accommodations in your city, driving them directly to your own booking engine.",
      "problemTitle": "Are you invisible to travelers on Google?",
      "problemText1": "If your hotel doesn't appear on the first page of Google for queries like 'boutique hotel in [City]', you are losing thousands in potential direct revenue to competitors and OTAs.",
      "problemText2": "Without proper technical SEO, optimized content, and local search authority, your beautiful website remains hidden from ready-to-book guests.",
      "signsTitle": "Signs you need Hotel SEO:",
      "signs": [
        "You rely on Booking.com/Expedia for over 80% of bookings",
        "Your website traffic is flat or declining",
        "You don't rank for '[Your City] hotel' keywords",
        "Your competitors always appear above you in search"
      ],
      "featuresTitle": "Our Comprehensive Hotel SEO Approach:",
      "features": [
        {
          "title": "Technical SEO Audit",
          "desc": "Fixing crawl errors, improving site speed, and ensuring mobile-readiness for Google."
        },
        {
          "title": "Keyword & Content Strategy",
          "desc": "Targeting high-intent traveler searches and creating destination-focused content."
        },
        {
          "title": "Local SEO & Google Maps",
          "desc": "Optimizing your Google Business Profile to excel the local 'Map Pack'."
        }
      ],
      "processTitle": "How We Grow Your Organic Traffic",
      "processSteps": [
        {
          "step": 1,
          "title": "Audit & Strategy",
          "desc": "Deep analysis of your current visibility and competitor landscape."
        },
        {
          "step": 2,
          "title": "On-Page Optimization",
          "desc": "Optimizing metadata, headers, and content for your target keywords."
        },
        {
          "step": 3,
          "title": "Authority Building",
          "desc": "Earning high-quality backlinks from travel blogs and directories."
        }
      ],
      "investmentTitle": "Hotel SEO Retainer",
      "investmentPrice": "Starting at 4,000 MAD/mo",
      "investmentDesc": "Continuous optimization, local SEO management, and monthly performance reporting.",
      "faqs": [
        {
          "q": "How long does SEO take for a hotel?",
          "a": "While initial technical fixes can show results in weeks, a comprehensive SEO strategy typically takes 3-6 months to significantly impact direct bookings."
        },
        {
          "q": "Can we really outrank Booking.com?",
          "a": "While outranking OTAs on broad terms is extremely difficult, we focus on highly profitable long-tail keywords where your hotel can win."
        }
      ]
    },
    "fr": {
      "title": "Services SEO Hôtels : Réservations Directes | Urunk",
      "description": "Services SEO experts pour hôtels afin de dépasser les OTA sur Google. Augmentez vos réservations directes et réduisez vos commissions.",
      "heroTitle": "Le SEO Hôtelier qui Génère des Réservations Directes",
      "heroSub": "Ne dépendez plus des OTA. Nous optimisons le site de votre hôtel pour optimiser les résultats Google et capter les voyageurs.",
      "calloutTitle": "Dépassez les OTA et Récupérez Vos Marges",
      "calloutBody": "Les agences de voyage en ligne dominent les résultats de recherche, mais avec une stratégie SEO ciblée, vous pouvez capter les voyageurs et les diriger directement vers votre moteur de réservation.",
      "problemTitle": "Êtes-vous invisible sur Google ?",
      "problemText1": "Si votre hôtel n'apparaît pas sur la première page de Google pour des requêtes ciblées, vous perdez une part considérable de revenus directs au profit de vos concurrents et des OTA.",
      "problemText2": "Sans un SEO technique rigoureux, un contenu optimisé et une autorité locale, votre magnifique site web reste caché des clients prêts à réserver.",
      "signsTitle": "Signes que vous avez besoin de SEO Hôtelier :",
      "signs": [
        "Vous dépendez de Booking.com pour plus de 80% de vos réservations",
        "Le trafic de votre site web stagne ou diminue",
        "Vous n'êtes pas bien classé pour les mots-clés de votre ville",
        "Vos concurrents apparaissent toujours au-dessus de vous"
      ],
      "featuresTitle": "Notre Approche SEO Hôtelière :",
      "features": [
        {
          "title": "Audit SEO Technique",
          "desc": "Correction des erreurs d'exploration, amélioration de la vitesse et optimisation mobile."
        },
        {
          "title": "Stratégie de Contenu",
          "desc": "Ciblage des recherches à forte intention et création de contenu axé sur la destination."
        },
        {
          "title": "SEO Local & Google Maps",
          "desc": "Optimisation de votre fiche d'établissement Google (Google Business Profile) pour optimiser la recherche locale."
        }
      ],
      "processTitle": "Comment Nous Développons Votre Trafic",
      "processSteps": [
        {
          "step": 1,
          "title": "Audit & Stratégie",
          "desc": "Analyse approfondie de votre visibilité actuelle et de vos concurrents."
        },
        {
          "step": 2,
          "title": "Optimisation On-Page",
          "desc": "Optimisation des métadonnées, titres et contenus pour vos mots-clés."
        },
        {
          "step": 3,
          "title": "Création d'Autorité",
          "desc": "Acquisition de liens de qualité depuis des blogs de voyage et annuaires."
        }
      ],
      "investmentTitle": "Forfait SEO Hôtelier",
      "investmentPrice": "À partir de 4 000 MAD / mois",
      "investmentDesc": "Optimisation continue, gestion du SEO local et rapports de performance mensuels.",
      "faqs": [
        {
          "q": "Combien de temps prend le SEO pour un hôtel ?",
          "a": "Bien que les correctifs techniques initiaux puissent montrer des résultats rapidement, une stratégie SEO complète prend généralement 3 à 6 mois pour impacter significativement les réservations."
        },
        {
          "q": "Pouvons-nous vraiment dépasser Booking.com ?",
          "a": "Bien qu'il soit très difficile de dépasser les OTA sur des termes génériques, nous nous concentrons sur des mots-clés longue traîne très rentables où votre hôtel peut gagner."
        }
      ]
    }
  },
  "hotel-digital-marketing": {
    "en": {
      "title": "Hospitality Digital Marketing Agency Morocco | Urunk",
      "description": "Full-stack digital marketing for Moroccan hotels, riads, and tour operators. We combine SEO, Google Ads, and high-conversion web design.",
      "heroTitle": "Hospitality Digital Marketing Agency",
      "heroSub": "Comprehensive growth strategies to fill your rooms, reduce OTA dependency, and build a lasting digital brand.",
      "calloutTitle": "Data-Driven Marketing for Hotels and Riads",
      "calloutBody": "We don't just run ads; we build holistic digital ecosystems. From capturing search intent via Google to retargeting past visitors on Meta, we ensure your hospitality brand remains top-of-mind.",
      "problemTitle": "Is your marketing budget driving real bookings?",
      "problemText1": "Many hotels waste money on generic marketing agencies that don't understand the hospitality booking journey. Likes and shares don't pay the bills; direct bookings do.",
      "problemText2": "Our hospitality-first approach means every campaign is measured by Cost-Per-Acquisition (CPA) and Return on Ad Spend (ROAS) based on actual room nights sold.",
      "signsTitle": "Signs you need specialized hospitality marketing:",
      "signs": [
        "You can't attribute bookings to specific marketing campaigns",
        "Your social media followers aren't converting into guests",
        "You have no email marketing or past-guest retention strategy",
        "Your marketing feels disjointed across different channels"
      ],
      "featuresTitle": "Our Digital Marketing Services:",
      "features": [
        {
          "title": "Omnichannel Campaigns",
          "desc": "Cohesive messaging across Google, Meta, TripAdvisor, and your website."
        },
        {
          "title": "Conversion Tracking",
          "desc": "Advanced analytics to track exactly which ads drive actual reservations."
        },
        {
          "title": "Guest Lifecycle Marketing",
          "desc": "Automated email flows to upsell services and encourage repeat bookings."
        }
      ],
      "processTitle": "Our Marketing Methodology",
      "processSteps": [
        {
          "step": 1,
          "title": "Funnel Analysis",
          "desc": "Identifying where you are losing potential guests in the booking process."
        },
        {
          "step": 2,
          "title": "Campaign Setup",
          "desc": "Launching highly targeted ads and optimizing your organic presence."
        },
        {
          "step": 3,
          "title": "Scaling & Optimization",
          "desc": "Reallocating budget to the best-performing channels to maximize ROI."
        }
      ],
      "investmentTitle": "Marketing Retainer",
      "investmentPrice": "Custom Pricing",
      "investmentDesc": "Tailored to your property size, goals, and required channel management.",
      "faqs": [
        {
          "q": "Do you handle social media posting?",
          "a": "We focus on paid social media (Meta Ads) and high-level strategy that drives bookings, rather than daily organic posting."
        },
        {
          "q": "How do you measure success?",
          "a": "We measure success by the increase in direct bookings, reduction in CPA, and overall revenue growth."
        }
      ]
    },
    "fr": {
      "title": "Agence Marketing Digital Hôtelier au Maroc | Urunk",
      "description": "Marketing digital complet pour hôtels, riads et tour-opérateurs marocains. SEO, Google Ads et design web haute conversion.",
      "heroTitle": "Agence de Marketing Digital Hôtelier",
      "heroSub": "Stratégies de croissance complètes pour remplir vos chambres, réduire la dépendance aux OTA et bâtir une marque digitale forte.",
      "calloutTitle": "Marketing Basé sur les Données pour Hôtels et Riads",
      "calloutBody": "Nous ne nous contentons pas de diffuser des annonces ; nous créons des écosystèmes digitaux holistiques. De la capture d'intention sur Google au reciblage sur Meta, nous gardons votre marque hôtelière à l'esprit des voyageurs.",
      "problemTitle": "Votre budget marketing génère-t-il de vraies réservations ?",
      "problemText1": "De nombreux hôtels gaspillent leur budget avec des agences généralistes qui ne maîtrisent pas le parcours de réservation hôtelier. Les « j'aime » ne paient pas les factures ; les réservations directes, si.",
      "problemText2": "Notre approche centrée sur l'hôtellerie signifie que chaque campagne est mesurée par le coût par acquisition (CPA) et le retour sur investissement publicitaire (ROAS).",
      "signsTitle": "Signes que vous avez besoin d'un marketing spécialisé :",
      "signs": [
        "Vous ne pouvez pas attribuer les réservations à des campagnes spécifiques",
        "Vos abonnés sur les réseaux sociaux ne se convertissent pas en clients",
        "Vous n'avez pas de stratégie de fidélisation par email",
        "Votre marketing semble décousu sur les différents canaux"
      ],
      "featuresTitle": "Nos Services de Marketing Digital :",
      "features": [
        {
          "title": "Campagnes Omnicanales",
          "desc": "Message cohérent sur Google, Meta, TripAdvisor et votre site web."
        },
        {
          "title": "Suivi des Conversions",
          "desc": "Analyses avancées pour suivre quelles annonces génèrent des réservations."
        },
        {
          "title": "Marketing du Cycle de Vie Client",
          "desc": "Emails automatisés pour les ventes incitatives et les réservations répétées."
        }
      ],
      "processTitle": "Notre Méthodologie",
      "processSteps": [
        {
          "step": 1,
          "title": "Analyse de l'Entonnoir",
          "desc": "Identification des points de perte de clients potentiels."
        },
        {
          "step": 2,
          "title": "Lancement de Campagnes",
          "desc": "Mise en place d'annonces très ciblées et optimisation de la présence organique."
        },
        {
          "step": 3,
          "title": "Mise à l'Échelle",
          "desc": "Réallocation du budget vers les canaux les plus performants."
        }
      ],
      "investmentTitle": "Forfait Marketing",
      "investmentPrice": "Sur Mesure",
      "investmentDesc": "Adapté à la taille de votre établissement, vos objectifs et les canaux requis.",
      "faqs": [
        {
          "q": "Gérez-vous les publications sur les réseaux sociaux ?",
          "a": "Nous nous concentrons sur les publicités payantes (Meta Ads) et la stratégie globale qui génère des réservations, plutôt que sur les publications quotidiennes."
        },
        {
          "q": "Comment mesurez-vous le succès ?",
          "a": "Par l'augmentation des réservations directes, la réduction du CPA et la croissance globale des revenus."
        }
      ]
    }
  },
  "hotel-website-design": {
    "en": {
      "title": "Hotel Website Design: Direct Booking Sites | Urunk",
      "description": "Stunning, high-speed hotel website design tailored for the hospitality industry. We integrate seamlessly with your booking engine to drive direct sales.",
      "heroTitle": "Premium Hotel Website Design",
      "heroSub": "Transform lookers into bookers with a custom-designed, speed-optimized website built exclusively for hospitality brands.",
      "calloutTitle": "Websites Engineered for the Guest Journey",
      "calloutBody": "Your hotel's website needs to do more than look pretty; it needs to sell the experience and make booking effortless. We combine immersive visuals with frictionless UX to maximize your conversion rate.",
      "problemTitle": "Is your website creating friction for guests?",
      "problemText1": "If your website forces users through a clunky, multi-step booking process or takes too long to load high-res images, guests will simply leave and book via an OTA.",
      "problemText2": "A frustrating website experience directly harms your brand perception and your bottom line. You need a site that feels as luxurious and welcoming as your property.",
      "signsTitle": "Signs your hotel website is costing you guests:",
      "signs": [
        "The 'Book Now' button is hard to find on mobile",
        "Images take too long to load or look pixelated",
        "The booking engine opens in an unstyled, confusing pop-up",
        "There is no clear integration with your PMS"
      ],
      "featuresTitle": "Essential Features of Our Hotel Websites:",
      "features": [
        {
          "title": "Immersive Visual Galleries",
          "desc": "Showcase your property with fast-loading, high-quality image and video galleries."
        },
        {
          "title": "Frictionless Booking Flow",
          "desc": "Clear, sticky CTAs and seamless integration with your booking engine."
        },
        {
          "title": "SEO-Optimized Architecture",
          "desc": "Built with technical SEO best practices to ensure you rank for local searches."
        }
      ],
      "processTitle": "Our Design Approach",
      "processSteps": [
        {
          "step": 1,
          "title": "UX Wireframing",
          "desc": "Mapping out the optimal user journey from landing page to booking confirmation."
        },
        {
          "step": 2,
          "title": "Visual Design",
          "desc": "Crafting a bespoke aesthetic that perfectly matches your hotel's unique brand."
        },
        {
          "step": 3,
          "title": "Performance Testing",
          "desc": "Rigorous testing to ensure lightning-fast load times across all devices."
        }
      ],
      "investmentTitle": "Hotel Website Build",
      "investmentPrice": "Starting at 12,000 MAD",
      "investmentDesc": "Fully custom design, advanced PMS integration, and on-page SEO setup.",
      "faqs": [
        {
          "q": "Can I update the content myself?",
          "a": "Yes, we build our sites on user-friendly CMS platforms (like WordPress) and provide training so your team can easily update text and images."
        },
        {
          "q": "Do you provide hosting?",
          "a": "We offer premium, high-speed hosting solutions optimized specifically for our custom builds, ensuring maximum uptime and security."
        }
      ]
    },
    "fr": {
      "title": "Création Site Web Hôtel : Réservation Directe | Urunk",
      "description": "Création de sites web d'hôtels rapides et élégants. Nous intégrons parfaitement votre moteur de réservation pour stimuler les ventes directes.",
      "heroTitle": "Création de Sites Web Hôteliers Premium",
      "heroSub": "Transformez les visiteurs en clients avec un site web sur mesure, optimisé pour la vitesse et conçu exclusivement pour l'hôtellerie.",
      "calloutTitle": "Des Sites Conçus pour le Parcours Client",
      "calloutBody": "Le site web de votre hôtel doit faire plus qu'être beau ; il doit vendre l'expérience et faciliter la réservation. Nous combinons des visuels immersifs avec une UX fluide pour maximiser votre taux de conversion.",
      "problemTitle": "Votre site web crée-t-il des frictions pour les clients ?",
      "problemText1": "Si votre site impose un processus de réservation fastidieux ou si vos images tardent à charger, les visiteurs iront tout simplement réserver via une OTA.",
      "problemText2": "Une expérience web frustrante nuit directement à la perception de votre marque et à vos revenus. Vous avez besoin d'un site aussi accueillant que votre établissement.",
      "signsTitle": "Signes que le site de votre hôtel vous fait perdre des clients :",
      "signs": [
        "Le bouton 'Réserver' est difficile à trouver sur mobile",
        "Les images sont lentes à charger ou pixelisées",
        "Le moteur de réservation s'ouvre dans une fenêtre déroutante",
        "Il n'y a pas d'intégration claire avec votre PMS"
      ],
      "featuresTitle": "Fonctionnalités Essentielles de Nos Sites Hôteliers :",
      "features": [
        {
          "title": "Galeries Visuelles Immersives",
          "desc": "Mettez en valeur votre établissement avec des galeries d'images et de vidéos à chargement rapide."
        },
        {
          "title": "Processus de Réservation Fluide",
          "desc": "Appels à l'action clairs et intégration parfaite avec votre moteur de réservation."
        },
        {
          "title": "Architecture Optimisée SEO",
          "desc": "Construit selon les meilleures pratiques SEO techniques pour un bon classement local."
        }
      ],
      "processTitle": "Notre Approche Design",
      "processSteps": [
        {
          "step": 1,
          "title": "Wireframing UX",
          "desc": "Cartographie du parcours utilisateur optimal, de la page d'accueil à la confirmation."
        },
        {
          "step": 2,
          "title": "Design Visuel",
          "desc": "Création d'une esthétique sur mesure qui correspond parfaitement à la marque de votre hôtel."
        },
        {
          "step": 3,
          "title": "Tests de Performance",
          "desc": "Tests rigoureux pour garantir des temps de chargement ultra-rapides sur tous les appareils."
        }
      ],
      "investmentTitle": "Création de Site Hôtelier",
      "investmentPrice": "À partir de 12 000 MAD",
      "investmentDesc": "Design 100% sur mesure, intégration PMS avancée et configuration SEO On-Page.",
      "faqs": [
        {
          "q": "Puis-je mettre à jour le contenu moi-même ?",
          "a": "Oui, nous utilisons des CMS intuitifs (comme WordPress) et formons votre équipe pour faciliter les mises à jour."
        },
        {
          "q": "Proposez-vous l'hébergement ?",
          "a": "Nous offrons des solutions d'hébergement premium et ultra-rapides, optimisées pour nos créations."
        }
      ]
    }
  },
  "direct-booking": {
    "en": {
      "title": "Direct Booking Strategies: Reduce OTA Fees | Urunk",
      "description": "Proven strategies to increase direct bookings for your hotel or riad. Keep more of your revenue and build direct guest relationships.",
      "heroTitle": "Maximize Direct Bookings, Minimize Commissions",
      "heroSub": "Implement advanced direct booking strategies that shift your revenue mix away from expensive OTAs and towards your own highly profitable channel.",
      "calloutTitle": "Reclaim Your Revenue from OTAs",
      "calloutBody": "Every booking through an OTA costs you 15-25%. We implement persuasive direct-booking incentives, optimized booking funnels, and targeted marketing to ensure guests choose to book directly with you.",
      "problemTitle": "Are you overly dependent on Booking.com?",
      "problemText1": "While OTAs are great for initial visibility, relying on them for the majority of your bookings severely limits your profitability and prevents you from owning the guest relationship.",
      "problemText2": "Without a compelling reason to book directly, guests will take the path of least resistance. You need a strategy that makes direct booking the obvious and most rewarding choice.",
      "signsTitle": "Signs you need a Direct Booking Strategy:",
      "signs": [
        "OTA commissions are your largest marketing expense",
        "Your direct booking conversion rate is below 2%",
        "You don't offer clear incentives for booking direct",
        "Guests find it easier to use OTA apps than your website"
      ],
      "featuresTitle": "Our Direct Booking Growth Tactics:",
      "features": [
        {
          "title": "Booking Funnel Optimization",
          "desc": "Removing friction and simplifying the steps required to complete a reservation on your site."
        },
        {
          "title": "Value-Add Incentives",
          "desc": "Strategically highlighting direct-booking perks (e.g., free breakfast, late checkout) to drive conversion."
        },
        {
          "title": "Retargeting Campaigns",
          "desc": "Bringing back visitors who abandoned your booking engine with compelling offers."
        }
      ],
      "processTitle": "How We Shift Your Revenue Mix",
      "processSteps": [
        {
          "step": 1,
          "title": "Data Analysis",
          "desc": "Reviewing your current OTA vs. direct booking ratio and identifying bottlenecks."
        },
        {
          "step": 2,
          "title": "Incentive Strategy",
          "desc": "Developing clear, highly visible reasons for guests to book direct."
        },
        {
          "step": 3,
          "title": "Conversion Optimization",
          "desc": "A/B testing website elements and booking flows to maximize direct conversions."
        }
      ],
      "investmentTitle": "Direct Booking Consultation & Implementation",
      "investmentPrice": "Project Based",
      "investmentDesc": "Comprehensive audit, strategy development, and technical implementation.",
      "faqs": [
        {
          "q": "Should I offer a lower price than OTAs?",
          "a": "Due to rate parity agreements, offering a lower public rate is often difficult. We focus on 'value-adds' or gated discounts to incentivize direct bookings without violating OTA terms."
        },
        {
          "q": "How much can I expect to increase direct bookings?",
          "a": "While results vary depending on property size and season, our strategies focus on building sustainable, direct-booking revenue channels that steadily lower your reliance on third-party OTAs."
        }
      ]
    },
    "fr": {
      "title": "Stratégies Réservation Directe : Moins d'OTA | Urunk",
      "description": "Stratégies éprouvées pour augmenter les réservations directes de votre hôtel ou riad. Conservez vos revenus et fidélisez vos clients.",
      "heroTitle": "Maximisez les Réservations Directes, Minimisez les Commissions",
      "heroSub": "Mettez en œuvre des stratégies avancées pour détourner vos revenus des OTA coûteuses vers votre propre canal, beaucoup plus rentable.",
      "calloutTitle": "Récupérez Vos Revenus face aux OTA",
      "calloutBody": "Chaque réservation via une OTA vous coûte 15 à 25%. Nous mettons en place des incitations persuasives, des entonnoirs de réservation optimisés et un marketing ciblé pour que les clients choisissent de réserver directement avec vous.",
      "problemTitle": "Êtes-vous trop dépendant de Booking.com ?",
      "problemText1": "Bien que les OTA soient utiles pour la visibilité initiale, en dépendre pour la majorité de vos réservations limite fortement votre rentabilité et vous empêche de posséder la relation client.",
      "problemText2": "Sans un avantage clair à réserver en direct, les clients choisiront la facilité. Vous avez besoin d'une stratégie qui fait de la réservation directe le choix le plus évident et le plus gratifiant.",
      "signsTitle": "Signes que vous avez besoin d'une Stratégie de Réservation Directe :",
      "signs": [
        "Les commissions OTA sont votre principale dépense marketing",
        "Votre taux de conversion en direct est inférieur à 2%",
        "Vous n'offrez pas d'avantages clairs pour la réservation directe",
        "Les clients trouvent les applications OTA plus faciles à utiliser que votre site"
      ],
      "featuresTitle": "Nos Tactiques de Croissance des Réservations Directes :",
      "features": [
        {
          "title": "Optimisation de l'Entonnoir de Réservation",
          "desc": "Suppression des frictions et simplification des étapes requises pour finaliser une réservation."
        },
        {
          "title": "Incitations à Valeur Ajoutée",
          "desc": "Mise en avant stratégique des avantages de la réservation directe (ex: petit-déjeuner offert, départ tardif)."
        },
        {
          "title": "Campagnes de Reciblage",
          "desc": "Faire revenir les visiteurs ayant abandonné votre moteur de réservation avec des offres attractives."
        }
      ],
      "processTitle": "Comment Nous Modifions Votre Mix de Revenus",
      "processSteps": [
        {
          "step": 1,
          "title": "Analyse des Données",
          "desc": "Examen de votre ratio OTA / direct actuel et identification des freins."
        },
        {
          "step": 2,
          "title": "Stratégie d'Incitations",
          "desc": "Développement de raisons claires et très visibles pour inciter à la réservation directe."
        },
        {
          "step": 3,
          "title": "Optimisation de la Conversion",
          "desc": "Tests A/B sur les éléments du site pour maximiser les conversions directes."
        }
      ],
      "investmentTitle": "Consultation et Mise en Œuvre",
      "investmentPrice": "Sur Devis",
      "investmentDesc": "Audit complet, élaboration de la stratégie et implémentation technique.",
      "faqs": [
        {
          "q": "Dois-je proposer un prix inférieur à celui des OTA ?",
          "a": "En raison des accords de parité tarifaire, il est souvent difficile de proposer un tarif public inférieur. Nous nous concentrons sur les 'valeurs ajoutées' ou les remises privées pour inciter à la réservation directe."
        },
        {
          "q": "De combien puis-je espérer augmenter mes réservations directes ?",
          "a": "Bien que les résultats varient selon la taille de l'établissement et la saison, nos stratégies visent à développer des canaux de réservation directe pérennes pour réduire votre dépendance aux OTA."
        }
      ]
    }
  },
  "riad-seo-marrakech": {
    "en": {
      "title": "Riad SEO Marrakech: Excel Local Search | Urunk",
      "description": "Specialized SEO services for Riads in Marrakech. Rank #1 for 'best riad in marrakech' and capture direct bookings from high-value tourists.",
      "heroTitle": "Marrakech Riad SEO Specialists",
      "heroSub": "Stand out in the crowded Marrakech medina. We help luxury and boutique riads excel Google search and capture more direct bookings.",
      "calloutTitle": "The Medina is Crowded. Your SEO Doesn't Have to Be.",
      "calloutBody": "With hundreds of riads competing for attention, generic marketing isn't enough. We specialize in Hyper-Local SEO for Marrakech riads, ensuring your property appears when tourists search for authentic Moroccan stays.",
      "problemTitle": "Is your Riad lost in the noise of Marrakech?",
      "problemText1": "Tourists search for highly specific experiences: 'riad in marrakech with pool', 'best luxury riad in medina'. If you aren't optimizing for these exact phrases, you're missing out on ideal guests.",
      "problemText2": "Without targeted Riad SEO, you're forced to rely on OTA algorithms, which prioritize whoever pays the highest commission, not the best property.",
      "signsTitle": "Signs your Riad needs targeted SEO:",
      "signs": [
        "You don't appear on Google Maps when searching from outside Morocco",
        "Your website only gets traffic when people search your exact name",
        "You struggle to attract guests during the off-season",
        "Competitor riads constantly outrank you"
      ],
      "featuresTitle": "Our Riad SEO Blueprint:",
      "features": [
        {
          "title": "Niche Keyword Targeting",
          "desc": "Optimizing for specific amenities like 'riad with hammam' or 'riad near Jemaa el-Fnaa'."
        },
        {
          "title": "Medina Local SEO",
          "desc": "Ensuring your Google Business Profile accurately reflects your hard-to-find location."
        },
        {
          "title": "High-Quality Backlinks",
          "desc": "Getting your riad featured in authoritative travel blogs and Marrakech guides."
        }
      ],
      "processTitle": "How We Rank Your Riad",
      "processSteps": [
        {
          "step": 1,
          "title": "Keyword Deep Dive",
          "desc": "Identifying exactly what your ideal guests are searching for."
        },
        {
          "step": 2,
          "title": "Content & Technical Overhaul",
          "desc": "Restructuring your site to highlight your unique selling points."
        },
        {
          "step": 3,
          "title": "Local Authority",
          "desc": "Building consistent citations and managing your TripAdvisor/Google reviews."
        }
      ],
      "investmentTitle": "Riad SEO Growth Plan",
      "investmentPrice": "Starting at 8,000 MAD/mo",
      "investmentDesc": "Targeted specifically for boutique riads looking to increase direct occupancy.",
      "faqs": [
        {
          "q": "Is SEO better than Google Ads for a riad?",
          "a": "SEO provides long-term, sustainable direct bookings with a higher ROI over time, whereas Ads provide immediate visibility. We often recommend a combined approach."
        },
        {
          "q": "Can you help people find my riad in the medina?",
          "a": "Yes! A crucial part of our Local SEO is optimizing your Google Maps listing with clear directions, photos, and accurate pin placement to help guests navigate the medina."
        }
      ]
    },
    "fr": {
      "title": "SEO Riad Marrakech : Optimisez la Recherche | Urunk",
      "description": "Services SEO spécialisés pour les Riads à Marrakech. Classez-vous #1 et captez les réservations directes des touristes à forte valeur ajoutée.",
      "heroTitle": "Spécialistes SEO pour Riads à Marrakech",
      "heroSub": "Démarquez-vous dans la médina de Marrakech. Nous aidons les riads de charme et de luxe à optimiser Google et à capter plus de réservations directes.",
      "calloutTitle": "La Médina est saturée. Votre visibilité ne devrait pas l'être.",
      "calloutBody": "Avec des centaines de riads en concurrence, un marketing générique ne suffit pas. Nous sommes spécialisés dans le SEO hyper-local pour les riads de Marrakech, garantissant que votre établissement apparaisse lorsque les touristes recherchent des séjours authentiques.",
      "problemTitle": "Votre Riad est-il noyé dans la masse à Marrakech ?",
      "problemText1": "Les touristes recherchent des expériences très spécifiques : 'riad marrakech avec piscine', 'meilleur riad luxe médina'. Si vous n'optimisez pas pour ces phrases exactes, vous passez à côté de vos clients idéaux.",
      "problemText2": "Sans un SEO Riad ciblé, vous êtes contraint de vous fier aux algorithmes des OTA, qui privilégient ceux qui paient la commission la plus élevée.",
      "signsTitle": "Signes que votre Riad a besoin d'un SEO ciblé :",
      "signs": [
        "Vous n'apparaissez pas sur Google Maps lors d'une recherche depuis l'étranger",
        "Votre site ne reçoit du trafic que lorsque les gens recherchent votre nom exact",
        "Vous avez du mal à attirer des clients hors saison",
        "Les riads concurrents vous dépassent constamment"
      ],
      "featuresTitle": "Notre Plan d'Action SEO pour Riads :",
      "features": [
        {
          "title": "Ciblage de Mots-Clés de Niche",
          "desc": "Optimisation pour des équipements spécifiques comme 'riad avec hammam' ou 'riad près de Jemaa el-Fna'."
        },
        {
          "title": "SEO Local Médina",
          "desc": "Garantir que votre fiche Google My Business reflète précisément votre emplacement, souvent difficile à trouver."
        },
        {
          "title": "Backlinks de Qualité",
          "desc": "Faire figurer votre riad dans des blogs de voyage reconnus et des guides sur Marrakech."
        }
      ],
      "processTitle": "Comment Nous Classons Votre Riad",
      "processSteps": [
        {
          "step": 1,
          "title": "Analyse Approfondie des Mots-Clés",
          "desc": "Identifier exactement ce que recherchent vos clients idéaux."
        },
        {
          "step": 2,
          "title": "Refonte Technique et Contenu",
          "desc": "Restructurer votre site pour mettre en valeur vos atouts uniques."
        },
        {
          "step": 3,
          "title": "Autorité Locale",
          "desc": "Création de citations cohérentes et gestion de vos avis TripAdvisor/Google."
        }
      ],
      "investmentTitle": "Plan de Croissance SEO Riad",
      "investmentPrice": "À partir de 8 000 MAD / mois",
      "investmentDesc": "Ciblé spécifiquement pour les riads de charme cherchant à augmenter leur taux d'occupation direct.",
      "faqs": [
        {
          "q": "Le SEO est-il meilleur que Google Ads pour un riad ?",
          "a": "Le SEO offre des réservations directes durables avec un meilleur ROI sur le long terme, tandis que les annonces offrent une visibilité immédiate. Nous recommandons souvent une approche combinée."
        },
        {
          "q": "Pouvez-vous aider les clients à trouver mon riad dans la médina ?",
          "a": "Oui ! Une partie cruciale de notre SEO local consiste à optimiser votre fiche Google Maps avec des indications claires, des photos et un placement précis du repère."
        }
      ]
    }
  },
  "seo-morocco": {
    "en": {
      "title": "SEO Agency Morocco: Top Google Rankings | Urunk",
      "description": "The leading SEO agency in Morocco. We help Moroccan businesses and tourism brands excel Google search and drive qualified, high-converting traffic.",
      "heroTitle": "Morocco-based SEO Agency",
      "heroSub": "We turn organic search traffic into your most profitable revenue channel. Specialized SEO strategies for Moroccan businesses and hospitality brands.",
      "calloutTitle": "Excel the Moroccan Digital Landscape",
      "calloutBody": "Whether you're a local business in Casablanca or a luxury hotel looking to attract international tourists, our tailored SEO strategies ensure you capture the top spots on Google when it matters most.",
      "problemTitle": "Is your Moroccan business practically invisible online?",
      "problemText1": "Having a beautiful website is useless if your target audience can't find it. If you aren't on the first page of Google, your competitors are stealing your potential clients every single day.",
      "problemText2": "SEO in Morocco requires a deep understanding of bilingual search behavior (French and English), local search intent, and mobile-first optimization. Generic SEO tactics won't cut it.",
      "signsTitle": "Signs you need professional SEO in Morocco:",
      "signs": [
        "Your website receives very little organic traffic",
        "You rank well for your brand name, but not for your services",
        "International clients can't find your Moroccan business",
        "You have no structured bilingual SEO strategy"
      ],
      "featuresTitle": "Our Proven Moroccan SEO Framework:",
      "features": [
        {
          "title": "Bilingual Optimization",
          "desc": "Targeting both French-speaking locals/Europeans and English-speaking international markets."
        },
        {
          "title": "Technical Excellence",
          "desc": "Ensuring lightning-fast load times and perfect mobile rendering for Moroccan networks."
        },
        {
          "title": "High-Authority Link Building",
          "desc": "Earning powerful backlinks from authoritative Moroccan and international publications."
        }
      ],
      "processTitle": "How We Rank Your Business",
      "processSteps": [
        {
          "step": 1,
          "title": "Comprehensive SEO Audit",
          "desc": "Identifying technical bottlenecks and missed keyword opportunities."
        },
        {
          "step": 2,
          "title": "Strategic Implementation",
          "desc": "Optimizing on-page content, site architecture, and meta data."
        },
        {
          "step": 3,
          "title": "Ongoing Growth",
          "desc": "Continuous monitoring, content creation, and link building to secure top rankings."
        }
      ],
      "investmentTitle": "National & International SEO",
      "investmentPrice": "Starting at 12,000 MAD/mo",
      "investmentDesc": "Comprehensive SEO strategy tailored to your market and competition.",
      "faqs": [
        {
          "q": "Do you optimize for French or English?",
          "a": "Both. We develop sophisticated bilingual SEO strategies, utilizing proper hreflang tags to ensure you rank for both French and English search intents without duplicate content penalties."
        },
        {
          "q": "How long until we see results in Morocco?",
          "a": "While technical improvements can show results in weeks, a noticeable increase in qualified organic traffic and leads typically takes 3-6 months, depending on your industry's competitiveness."
        }
      ]
    },
    "fr": {
      "title": "Agence SEO Maroc : Référencement Google #1 | Urunk",
      "description": "La principale agence SEO au Maroc. Nous aidons les entreprises marocaines et les marques touristiques à optimiser Google et à générer du trafic qualifié.",
      "heroTitle": "La Première Agence SEO du Maroc",
      "heroSub": "Nous transformons le trafic de recherche organique en votre canal de revenus le plus rentable. Stratégies SEO spécialisées pour les entreprises et l'hôtellerie au Maroc.",
      "calloutTitle": "Optimisez le Paysage Digital Marocain",
      "calloutBody": "Que vous soyez une entreprise locale à Casablanca ou un hôtel de luxe cherchant à attirer des touristes internationaux, nos stratégies SEO sur mesure vous garantissent les premières places sur Google.",
      "problemTitle": "Votre entreprise marocaine est-elle invisible en ligne ?",
      "problemText1": "Avoir un beau site web est inutile si votre public cible ne le trouve pas. Si vous n'êtes pas sur la première page de Google, vos concurrents vous volent vos clients potentiels chaque jour.",
      "problemText2": "Le SEO au Maroc nécessite une compréhension approfondie du comportement de recherche bilingue (français et anglais), de l'intention locale et de l'optimisation mobile. Les tactiques SEO génériques ne suffisent pas.",
      "signsTitle": "Signes que vous avez besoin d'un SEO professionnel au Maroc :",
      "signs": [
        "Votre site web reçoit très peu de trafic organique",
        "Vous êtes bien classé pour votre nom de marque, mais pas pour vos services",
        "Les clients internationaux ne trouvent pas votre entreprise",
        "Vous n'avez pas de stratégie SEO bilingue structurée"
      ],
      "featuresTitle": "Notre Cadre SEO Marocain Éprouvé :",
      "features": [
        {
          "title": "Optimisation Bilingue",
          "desc": "Ciblage des locaux/européens francophones et des marchés internationaux anglophones."
        },
        {
          "title": "Excellence Technique",
          "desc": "Garantir des temps de chargement ultra-rapides et un rendu mobile parfait."
        },
        {
          "title": "Netlinking de Haute Autorité",
          "desc": "Acquisition de backlinks puissants provenant de publications marocaines et internationales."
        }
      ],
      "processTitle": "Comment Nous Classons Votre Entreprise",
      "processSteps": [
        {
          "step": 1,
          "title": "Audit SEO Complet",
          "desc": "Identification des freins techniques et des opportunités de mots-clés manquées."
        },
        {
          "step": 2,
          "title": "Implémentation Stratégique",
          "desc": "Optimisation du contenu On-Page, de l'architecture du site et des métadonnées."
        },
        {
          "step": 3,
          "title": "Croissance Continue",
          "desc": "Surveillance, création de contenu et création de liens en continu pour sécuriser les premières places."
        }
      ],
      "investmentTitle": "SEO National & International",
      "investmentPrice": "À partir de 12 000 MAD / mois",
      "investmentDesc": "Stratégie SEO complète adaptée à votre marché et à la concurrence.",
      "faqs": [
        {
          "q": "Optimisez-vous pour le français ou l'anglais ?",
          "a": "Les deux. Nous développons des stratégies SEO bilingues sophistiquées, utilisant des balises hreflang appropriées pour vous classer sur les deux langues sans pénalité pour contenu dupliqué."
        },
        {
          "q": "Combien de temps avant de voir des résultats au Maroc ?",
          "a": "Bien que les améliorations techniques puissent montrer des résultats en quelques semaines, une augmentation notable du trafic et des leads prend généralement 3 à 6 mois."
        }
      ]
    }
  },
  "seo-agency-casablanca": {
    "en": {
      "title": "SEO Agency Casablanca: Local & B2B Search | Urunk",
      "description": "Casablanca's top-rated SEO agency. We specialize in lead generation and B2B organic search visibility for corporate businesses in Morocco's economic hub.",
      "heroTitle": "Casablanca's Specialized SEO Agency",
      "heroSub": "Excel search results in Morocco's economic capital. We drive high-value B2B and consumer leads through targeted organic search strategies.",
      "calloutTitle": "Win the Casablanca Market",
      "calloutBody": "In a highly competitive business environment like Casablanca, being visible on Google is non-negotiable. Our SEO strategies are designed specifically to generate qualified leads and outrank established corporate competitors.",
      "problemTitle": "Is your business losing market share in Casablanca?",
      "problemText1": "When decision-makers in Casablanca search for B2B services, suppliers, or corporate partners, they turn to Google. If your company isn't on the first page, you are losing high-value contracts to competitors.",
      "problemText2": "Relying purely on traditional networking or expensive outbound sales is no longer enough. You need an inbound engine that brings qualified corporate leads directly to your inbox.",
      "signsTitle": "Signs you need B2B SEO in Casablanca:",
      "signs": [
        "Your competitors excel the search results for your industry",
        "Your website generates less than 5 qualified leads per month",
        "You are overly reliant on paid ads (Google Ads, LinkedIn) for leads",
        "Your local Google Business Profile is unoptimized"
      ],
      "featuresTitle": "Our Corporate SEO Strategy:",
      "features": [
        {
          "title": "B2B Keyword Targeting",
          "desc": "Focusing on high-intent commercial queries used by corporate decision-makers."
        },
        {
          "title": "Authority Content Marketing",
          "desc": "Establishing your company as an industry thought leader through expert content."
        },
        {
          "title": "Local Enterprise SEO",
          "desc": "Dominating local search visibility within the Casablanca business districts."
        }
      ],
      "processTitle": "How We Generate B2B Leads",
      "processSteps": [
        {
          "step": 1,
          "title": "Market & Competitor Analysis",
          "desc": "Identifying exactly how your competitors are acquiring leads online."
        },
        {
          "step": 2,
          "title": "Technical & On-Page SEO",
          "desc": "Ensuring your corporate website is flawlessly optimized for Google's crawlers."
        },
        {
          "step": 3,
          "title": "Digital PR & Link Building",
          "desc": "Earning authority through high-profile industry backlinks."
        }
      ],
      "investmentTitle": "Corporate SEO Retainer",
      "investmentPrice": "Starting at 15,000 MAD/mo",
      "investmentDesc": "Tailored for B2B companies looking for serious lead generation in Casablanca.",
      "faqs": [
        {
          "q": "Is SEO effective for B2B companies in Morocco?",
          "a": "Absolutely. Decision-makers research extensively online before reaching out to vendors. B2B SEO ensures you are present during their research phase, building trust before the first contact."
        },
        {
          "q": "Do you offer localized SEO for Casablanca specifically?",
          "a": "Yes, we implement highly targeted local SEO strategies to ensure you excel searches specifically originating from or targeting the Casablanca region."
        }
      ]
    },
    "fr": {
      "title": "Agence SEO Casablanca : Référencement B2B | Urunk",
      "description": "L'agence SEO la mieux notée de Casablanca. Nous sommes spécialisés dans la génération de leads B2B et la visibilité organique pour les entreprises.",
      "heroTitle": "La Première Agence SEO de Casablanca",
      "heroSub": "Optimisez les résultats de recherche dans la capitale économique du Maroc. Nous générons des leads B2B de grande valeur grâce au SEO.",
      "calloutTitle": "Gagnez le Marché de Casablanca",
      "calloutBody": "Dans un environnement concurrentiel comme Casablanca, être visible sur Google est non négociable. Nos stratégies SEO sont conçues pour générer des leads qualifiés et dépasser vos concurrents.",
      "problemTitle": "Votre entreprise perd-elle des parts de marché à Casablanca ?",
      "problemText1": "Lorsque les décideurs à Casablanca recherchent des services B2B ou des fournisseurs, ils se tournent vers Google. Si votre entreprise n'est pas sur la première page, vous perdez des contrats à forte valeur ajoutée.",
      "problemText2": "Le réseautage traditionnel ne suffit plus. Vous avez besoin d'un moteur entrant (inbound) qui apporte des leads qualifiés directement dans votre boîte de réception.",
      "signsTitle": "Signes que vous avez besoin de SEO B2B à Casablanca :",
      "signs": [
        "Vos concurrents dominent les résultats de recherche dans votre secteur",
        "Votre site génère moins de 5 leads qualifiés par mois",
        "Vous dépendez trop des publicités payantes (Google Ads, LinkedIn)",
        "Votre fiche d'établissement Google (Google Business Profile) n'est pas optimisée"
      ],
      "featuresTitle": "Notre Stratégie SEO d'Entreprise :",
      "features": [
        {
          "title": "Ciblage de Mots-Clés B2B",
          "desc": "Concentration sur les requêtes commerciales à forte intention utilisées par les décideurs."
        },
        {
          "title": "Marketing de Contenu d'Autorité",
          "desc": "Établir votre entreprise en tant que leader d'opinion via du contenu expert."
        },
        {
          "title": "SEO Local d'Entreprise",
          "desc": "Optimiser la visibilité locale dans les quartiers d'affaires de Casablanca."
        }
      ],
      "processTitle": "Comment Nous Générons des Leads B2B",
      "processSteps": [
        {
          "step": 1,
          "title": "Analyse du Marché et des Concurrents",
          "desc": "Identifier exactement comment vos concurrents acquièrent des clients en ligne."
        },
        {
          "step": 2,
          "title": "SEO Technique et On-Page",
          "desc": "S'assurer que votre site est parfaitement optimisé pour les robots de Google."
        },
        {
          "step": 3,
          "title": "RP Digitales et Link Building",
          "desc": "Gagner en autorité grâce à des backlinks de haut niveau."
        }
      ],
      "investmentTitle": "Forfait SEO B2B",
      "investmentPrice": "À partir de 15 000 MAD / mois",
      "investmentDesc": "Conçu pour les entreprises B2B cherchant une génération de leads sérieuse à Casablanca.",
      "faqs": [
        {
          "q": "Le SEO est-il efficace pour les entreprises B2B au Maroc ?",
          "a": "Absolument. Les décideurs font des recherches approfondies en ligne avant de contacter des fournisseurs. Le SEO B2B garantit votre présence pendant cette phase."
        },
        {
          "q": "Proposez-vous un SEO localisé pour Casablanca spécifiquement ?",
          "a": "Oui, nous mettons en œuvre des stratégies SEO locales très ciblées pour vous assurer de optimiser les recherches provenant de ou ciblant Casablanca."
        }
      ]
    }
  },
  "google-ads-morocco": {
    "en": {
      "title": "Google Ads Morocco: High-ROI Search Campaigns | Urunk",
      "description": "Expert Google Ads management for Moroccan businesses and hospitality brands. Maximize your ROAS and capture high-intent search traffic instantly.",
      "heroTitle": "Morocco's ROI-Focused Google Ads Agency",
      "heroSub": "Turn your advertising budget into a predictable revenue engine. We specialize in high-converting Google Search and Performance Max campaigns.",
      "calloutTitle": "Capture Ready-to-Buy Searchers",
      "calloutBody": "When people search for your services on Google, they are ready to buy. Our data-driven Google Ads campaigns place your business at the very top of those search results, ensuring you capture the most valuable clicks.",
      "problemTitle": "Is your Google Ads budget being wasted?",
      "problemText1": "Many Moroccan businesses attempt to run Google Ads themselves or hire generic agencies, resulting in wasted spend on broad, irrelevant keywords and poorly converting landing pages.",
      "problemText2": "A successful Google Ads campaign requires precise targeting, negative keyword management, compelling ad copy, and relentless A/B testing to ensure a positive Return on Ad Spend (ROAS).",
      "signsTitle": "Signs your current Google Ads strategy is failing:",
      "signs": [
        "Your Cost-Per-Acquisition (CPA) is too high",
        "You get a lot of clicks but very few leads or direct bookings",
        "You aren't using conversion tracking or retargeting",
        "Your Quality Score is low, meaning you pay more per click"
      ],
      "featuresTitle": "Our Google Ads Methodology:",
      "features": [
        {
          "title": "Precision Keyword Targeting",
          "desc": "Focusing strictly on high-intent 'bottom-of-funnel' search terms."
        },
        {
          "title": "Landing Page Optimization",
          "desc": "Ensuring the page your ads point to is engineered for maximum conversion."
        },
        {
          "title": "Data-Driven Scaling",
          "desc": "Using advanced tracking to scale campaigns that work and pause those that don't."
        }
      ],
      "processTitle": "How We Maximize Your Ad Spend",
      "processSteps": [
        {
          "step": 1,
          "title": "Audience & Competitor Research",
          "desc": "Analyzing search volume and competitor bids in your specific niche."
        },
        {
          "step": 2,
          "title": "Campaign Architecture",
          "desc": "Structuring your account with tightly themed ad groups for higher Quality Scores."
        },
        {
          "step": 3,
          "title": "Relentless Optimization",
          "desc": "Daily monitoring, bid adjustments, and A/B testing of ad copy."
        }
      ],
      "investmentTitle": "Google Ads Management",
      "investmentPrice": "Starting at 5,000 MAD/mo",
      "investmentDesc": "Plus your dedicated ad spend budget paid directly to Google.",
      "faqs": [
        {
          "q": "How much should I spend on Google Ads in Morocco?",
          "a": "Ad spend varies drastically by industry. For local businesses, a 3,000 - 4,000 MAD/mo budget is a good starting point. For competitive hospitality terms, 5,000 MAD+/mo is recommended."
        },
        {
          "q": "How long does it take to see results?",
          "a": "Unlike SEO, Google Ads can generate traffic and leads within 24 hours of launching the campaign. However, optimal ROAS is usually achieved after 2-4 weeks of data collection and optimization."
        }
      ]
    },
    "fr": {
      "title": "Gestion Google Ads Maroc : Campagnes Payantes | Urunk",
      "description": "Gestion experte de Google Ads pour les entreprises marocaines et l'hôtellerie. Maximisez votre ROAS et captez le trafic à forte intention.",
      "heroTitle": "L'Agence Google Ads Axée sur le ROI au Maroc",
      "heroSub": "Transformez votre budget publicitaire en un moteur de revenus prévisible. Spécialistes des campagnes Google Search et Performance Max.",
      "calloutTitle": "Captez les Acheteurs Prêts à Convertir",
      "calloutBody": "Lorsque les internautes recherchent vos services sur Google, ils sont prêts à acheter. Nos campagnes placent votre entreprise tout en haut des résultats, vous garantissant les clics les plus précieux.",
      "problemTitle": "Votre budget Google Ads est-il gaspillé ?",
      "problemText1": "De nombreuses entreprises marocaines tentent de gérer elles-mêmes leurs campagnes Google Ads ou engagent des agences généralistes, ce qui entraîne des dépenses inutiles sur des mots-clés trop larges et des pages de destination qui ne convertissent pas.",
      "problemText2": "Une campagne réussie nécessite un ciblage précis, une gestion des mots-clés à exclure, des annonces percutantes et des tests A/B continus pour garantir un retour sur investissement (ROAS) positif.",
      "signsTitle": "Signes que votre stratégie Google Ads actuelle échoue :",
      "signs": [
        "Votre coût par acquisition (CPA) est trop élevé",
        "Vous avez beaucoup de clics mais très peu de leads ou réservations",
        "Vous n'utilisez pas le suivi des conversions ou le reciblage",
        "Votre niveau de qualité est bas, vous payez donc plus cher par clic"
      ],
      "featuresTitle": "Notre Méthodologie Google Ads :",
      "features": [
        {
          "title": "Ciblage Précis des Mots-Clés",
          "desc": "Concentration stricte sur les termes de recherche à forte intention d'achat."
        },
        {
          "title": "Optimisation de la Page de Destination",
          "desc": "Garantir que la page de l'annonce est conçue pour une conversion maximale."
        },
        {
          "title": "Mise à l'Échelle Basée sur les Données",
          "desc": "Suivi avancé pour développer les campagnes qui fonctionnent et stopper les autres."
        }
      ],
      "processTitle": "Comment Nous Maximisons Votre Budget",
      "processSteps": [
        {
          "step": 1,
          "title": "Recherche d'Audience et de Concurrents",
          "desc": "Analyse du volume de recherche et des enchères de vos concurrents."
        },
        {
          "step": 2,
          "title": "Architecture de la Campagne",
          "desc": "Structuration de votre compte avec des groupes d'annonces très ciblés."
        },
        {
          "step": 3,
          "title": "Optimisation Continue",
          "desc": "Surveillance quotidienne, ajustement des enchères et tests A/B des annonces."
        }
      ],
      "investmentTitle": "Gestion Google Ads",
      "investmentPrice": "À partir de 5 000 MAD / mois",
      "investmentDesc": "Plus votre budget publicitaire payé directement à Google.",
      "faqs": [
        {
          "q": "Combien dois-je dépenser sur Google Ads au Maroc ?",
          "a": "Le budget varie selon le secteur. Pour les entreprises locales, 3 000 à 4 000 MAD/mois est un bon début. Pour l'hôtellerie très concurrentielle, 5 000 MAD et plus par mois est recommandé."
        },
        {
          "q": "Combien de temps pour voir des résultats ?",
          "a": "Contrairement au SEO, Google Ads peut générer du trafic en 24h. Cependant, le ROAS optimal est généralement atteint après 2 à 4 semaines d'optimisation."
        }
      ]
    }
  },
  "local-seo-casablanca": {
    "en": {
      "title": "Local SEO Casablanca: Excel Google Maps | Urunk",
      "description": "Rank #1 on Google Maps in Casablanca. Our Local SEO services drive foot traffic, phone calls, and local leads for Casablanca businesses.",
      "heroTitle": "Casablanca Local SEO Experts",
      "heroSub": "Don't let competitors steal your local customers. We optimize your Google Business Profile to excel the Casablanca local 'Map Pack'.",
      "calloutTitle": "Win the 'Near Me' Searches",
      "calloutBody": "When customers in Casablanca search for services 'near me', they don't scroll past the Google Map. If your business isn't in those top 3 spots, you are invisible to local buyers.",
      "problemTitle": "Is your Casablanca business hidden on Google Maps?",
      "problemText1": "Many local businesses lose out to competitors simply because their Google Business Profile is unoptimized, unverified, or lacks consistent NAP (Name, Address, Phone) citations across the web.",
      "problemText2": "Local SEO isn't just about keywords; it's about building geographical relevance and trust so Google confidently recommends your business to local searchers.",
      "signsTitle": "Signs you need Local SEO in Casablanca:",
      "signs": [
        "You rely heavily on foot traffic but don't rank on Maps",
        "Competitors with worse reviews rank higher than you",
        "You have inconsistent business information online",
        "You aren't generating phone calls directly from Google"
      ],
      "featuresTitle": "Our Local SEO Arsenal:",
      "features": [
        {
          "title": "Google Business Profile Optimization",
          "desc": "Fully claiming and optimizing every aspect of your GBP."
        },
        {
          "title": "Local Citation Building",
          "desc": "Ensuring your business details are consistent across all Moroccan directories."
        },
        {
          "title": "Review Management Strategy",
          "desc": "Implementing systems to consistently generate positive, 5-star Google reviews."
        }
      ],
      "processTitle": "How We Boost Your Local Rankings",
      "processSteps": [
        {
          "step": 1,
          "title": "Profile Audit & Claiming",
          "desc": "Securing your digital real estate and fixing any existing errors."
        },
        {
          "step": 2,
          "title": "On-Page Local Signals",
          "desc": "Adding local schema markup and geo-targeted keywords to your website."
        },
        {
          "step": 3,
          "title": "Ongoing Authority Building",
          "desc": "Publishing local updates, managing reviews, and acquiring local backlinks."
        }
      ],
      "investmentTitle": "Local SEO Management",
      "investmentPrice": "Starting at 4,000 MAD/mo",
      "investmentDesc": "Dedicated specifically to ranking physical businesses in the Casablanca area.",
      "faqs": [
        {
          "q": "Do I need a physical address for Local SEO?",
          "a": "Ideally yes, but if you are a Service Area Business (SAB) that travels to customers in Casablanca, we can still optimize your profile to rank in the area."
        },
        {
          "q": "How important are Google Reviews?",
          "a": "Crucial. Review velocity, quantity, and overall rating are massive ranking factors for the Local Map Pack. We help you automate the review generation process."
        }
      ]
    },
    "fr": {
      "title": "SEO Local Casablanca : Optimisez Google Maps | Urunk",
      "description": "Classez-vous #1 sur Google Maps à Casablanca. Nos services de SEO local génèrent du trafic, des appels et des clients pour les entreprises casablancaises.",
      "heroTitle": "Référencement Local & Google Maps à Casablanca",
      "heroSub": "Urunk accompagne les entreprises, hôtels et restaurants de Casablanca avec le SEO local, l'optimisation Google Business Profile et Google Maps pour attirer des clients à proximité.",
      "calloutTitle": "Gagnez les recherches 'à proximité'",
      "calloutBody": "Lorsque les clients à Casablanca recherchent des services à proximité, ils s'arrêtent à la carte Google. Si votre entreprise n'est pas dans le top 3, vous êtes invisible pour les acheteurs locaux.",
      "problemTitle": "Votre entreprise de Casablanca est-elle cachée sur Google Maps ?",
      "problemText1": "De nombreuses entreprises locales perdent face à leurs concurrents simplement parce que leur fiche Google My Business n'est pas optimisée, ou manque de cohérence sur le web.",
      "problemText2": "Le SEO local ne concerne pas seulement les mots-clés ; il s'agit de construire une pertinence géographique pour que Google recommande votre entreprise en toute confiance.",
      "signsTitle": "Signes que vous avez besoin de SEO Local à Casablanca :",
      "signs": [
        "Vous dépendez du trafic piéton mais vous n'êtes pas classé sur Maps",
        "Des concurrents avec de moins bons avis sont mieux classés",
        "Vos informations d'entreprise sont incohérentes en ligne",
        "Vous ne générez pas d'appels directement depuis Google"
      ],
      "featuresTitle": "Notre Arsenal de SEO Local :",
      "features": [
        {
          "title": "Optimisation de la Fiche Google",
          "desc": "Revendication et optimisation complète de chaque aspect de votre fiche."
        },
        {
          "title": "Création de Citations Locales",
          "desc": "Garantir la cohérence de vos coordonnées sur tous les annuaires marocains."
        },
        {
          "title": "Stratégie de Gestion des Avis",
          "desc": "Mise en place de systèmes pour générer régulièrement des avis Google 5 étoiles."
        }
      ],
      "processTitle": "Comment Nous Améliorons Votre Classement Local",
      "processSteps": [
        {
          "step": 1,
          "title": "Audit et Revendication de Profil",
          "desc": "Sécurisation de votre présence numérique et correction des erreurs existantes."
        },
        {
          "step": 2,
          "title": "Signaux Locaux On-Page",
          "desc": "Ajout de balisage schema local et de mots-clés géociblés sur votre site."
        },
        {
          "step": 3,
          "title": "Création Continue d'Autorité",
          "desc": "Publication de mises à jour, gestion des avis et acquisition de liens locaux."
        }
      ],
      "investmentTitle": "Gestion SEO Local",
      "investmentPrice": "À partir de 4 000 MAD / mois",
      "investmentDesc": "Dédié spécifiquement au classement des entreprises physiques dans la région de Casablanca.",
      "faqs": [
        {
          "q": "Ai-je besoin d'une adresse physique pour le SEO Local ?",
          "a": "Idéalement oui, mais si vous êtes une entreprise de services intervenant chez les clients à Casablanca, nous pouvons optimiser votre profil."
        },
        {
          "q": "Quelle est l'importance des avis Google ?",
          "a": "Cruciale. Le volume, la fréquence et la note globale sont des facteurs de classement massifs pour la carte locale. Nous vous aidons à automatiser ce processus."
        }
      ]
    }
  },
  "riad-website-design-marrakech": {
    "en": {
      "title": "Riad Website Design Marrakech: Luxury Sites | Urunk",
      "description": "Bespoke website design for luxury Riads in Marrakech. Showcase your property's authentic beauty and drive commission-free direct bookings.",
      "heroTitle": "Luxury Riad Website Design in Marrakech",
      "heroSub": "Immersive, lightning-fast web design that captures the magic of your Medina property and converts international travelers into direct guests.",
      "calloutTitle": "Your Riad's Digital Front Door",
      "calloutBody": "A luxury riad needs a website that reflects its elegance. We build bespoke, high-performance websites for Marrakech riads that integrate seamlessly with booking engines to maximize direct, commission-free reservations.",
      "problemTitle": "Does your website reflect the true luxury of your Riad?",
      "problemText1": "Many stunning riads in Marrakech lose out to competitors because their website is outdated, slow, or fails to properly showcase their architecture and ambiance.",
      "problemText2": "If your website doesn't instantly communicate luxury and authenticity while offering a flawless mobile booking experience, international guests will turn to Booking.com or Airbnb instead.",
      "signsTitle": "Signs your Riad needs a new website:",
      "signs": [
        "Your website doesn't do justice to your property's beauty",
        "Guests complain about the booking process on mobile",
        "You receive very few direct bookings compared to OTAs",
        "Your site lacks fast-loading, high-resolution galleries"
      ],
      "featuresTitle": "Features of Our Riad Websites:",
      "features": [
        {
          "title": "Immersive Visual Storytelling",
          "desc": "High-resolution, fast-loading image and video galleries that capture your riad's essence."
        },
        {
          "title": "Direct Booking Integration",
          "desc": "Frictionless connection with popular PMS systems used by Moroccan riads."
        },
        {
          "title": "Medina Location Guides",
          "desc": "Interactive maps and clear directions to help guests navigate the complex medina alleys."
        }
      ],
      "processTitle": "Our Riad Web Design Process",
      "processSteps": [
        {
          "step": 1,
          "title": "Brand & Aesthetic Discovery",
          "desc": "Understanding your riad's unique history, architecture, and target guest."
        },
        {
          "step": 2,
          "title": "Bespoke UI/UX Design",
          "desc": "Crafting a luxurious visual experience optimized for mobile booking."
        },
        {
          "step": 3,
          "title": "Development & SEO",
          "desc": "Building a lightning-fast site optimized for 'riad in marrakech' search terms."
        }
      ],
      "investmentTitle": "Riad Website Design",
      "investmentPrice": "Starting at 12,000 MAD",
      "investmentDesc": "Includes bespoke design, booking engine integration, and localized SEO.",
      "faqs": [
        {
          "q": "Can you help us take better photos of our Riad?",
          "a": "While we focus on digital design and SEO, we partner with some of Marrakech's top architectural and hospitality photographers and can manage the shoot for you."
        },
        {
          "q": "Will the website be in multiple languages?",
          "a": "Yes. Given Marrakech's international appeal, we build bilingual or multilingual websites (English, French, Spanish) to maximize your global reach."
        }
      ]
    },
    "fr": {
      "title": "Création Site Web Riad Marrakech : Design Luxe | Urunk",
      "description": "Création de sites web sur mesure pour riads de luxe à Marrakech. Mettez en valeur la beauté de votre établissement et générez des réservations directes.",
      "heroTitle": "Création de Sites Web pour Riads de Luxe à Marrakech",
      "heroSub": "Un web design immersif et ultra-rapide qui capture la magie de votre propriété en médina et convertit les voyageurs en clients directs.",
      "calloutTitle": "La Vitrine Digitale de votre Riad",
      "calloutBody": "Un riad de luxe a besoin d'un site web qui reflète son élégance. Nous créons des sites performants pour les riads de Marrakech, parfaitement intégrés aux moteurs de réservation pour maximiser les ventes directes.",
      "problemTitle": "Votre site reflète-t-il le véritable luxe de votre Riad ?",
      "problemText1": "De nombreux riads magnifiques à Marrakech perdent des clients car leur site web est obsolète, lent ou ne met pas en valeur leur architecture et leur ambiance.",
      "problemText2": "Si votre site ne communique pas instantanément luxe et authenticité, tout en offrant une expérience de réservation mobile sans faille, les clients iront sur Booking.com ou Airbnb.",
      "signsTitle": "Signes que votre Riad a besoin d'un nouveau site :",
      "signs": [
        "Votre site ne rend pas justice à la beauté de votre établissement",
        "Les clients se plaignent du processus de réservation sur mobile",
        "Vous recevez très peu de réservations directes par rapport aux OTA",
        "Votre site manque de galeries d'images haute résolution et rapides"
      ],
      "featuresTitle": "Fonctionnalités de Nos Sites pour Riads :",
      "features": [
        {
          "title": "Narration Visuelle Immersive",
          "desc": "Galeries d'images et vidéos haute résolution à chargement rapide."
        },
        {
          "title": "Intégration Réservation Directe",
          "desc": "Connexion fluide avec les PMS populaires utilisés par les riads marocains."
        },
        {
          "title": "Guides de Localisation Médina",
          "desc": "Cartes interactives et indications claires pour aider les clients à naviguer dans la médina."
        }
      ],
      "processTitle": "Notre Processus de Création Web pour Riads",
      "processSteps": [
        {
          "step": 1,
          "title": "Découverte de la Marque",
          "desc": "Comprendre l'histoire unique, l'architecture et la clientèle cible de votre riad."
        },
        {
          "step": 2,
          "title": "Design UI/UX Sur Mesure",
          "desc": "Création d'une expérience visuelle luxueuse optimisée pour la réservation sur mobile."
        },
        {
          "step": 3,
          "title": "Développement et SEO",
          "desc": "Création d'un site ultra-rapide optimisé pour les termes de recherche 'riad marrakech'."
        }
      ],
      "investmentTitle": "Création de Site Riad",
      "investmentPrice": "À partir de 12 000 MAD",
      "investmentDesc": "Inclut le design sur mesure, l'intégration du moteur de réservation et le SEO localisé.",
      "faqs": [
        {
          "q": "Pouvez-vous nous aider à prendre de meilleures photos de notre Riad ?",
          "a": "Bien que nous soyons concentrés sur le digital, nous collaborons avec les meilleurs photographes de Marrakech et pouvons organiser le shooting pour vous."
        },
        {
          "q": "Le site sera-t-il multilingue ?",
          "a": "Oui. Vu l'attrait international de Marrakech, nous créons des sites bilingues ou multilingues (Anglais, Français) pour maximiser votre portée mondiale."
        }
      ]
    }
  }
,
  "ai-seo-optimization": {
  "en": {
    "title": "AI SEO Optimization: Modern Search Content | Urunk",
    "description": "Ensure your hotel, riad, or brand is cited by ChatGPT, Gemini, Perplexity, and Google AI Overviews with our pioneering AI Search Optimization services.",
    "heroTitle": "AI SEO & Generative Engine Optimization",
    "heroSub": "Position your Moroccan hospitality brand, enterprise, or ecommerce store directly inside AI conversational answers across ChatGPT, Gemini, Claude, and Perplexity.",
    "calloutTitle": "The Future of Discovery is Generative AI",
    "calloutBody": "Over 30% of global travelers and high-ticket buyers now consult conversational AI models before booking. We engineer your digital entity authority, knowledge graph citations, and semantic structured data so generative engines consistently recommend your brand as the definitive authority in Morocco.",
    "problemTitle": "Is your brand invisible to conversational AI models?",
    "problemText1": "Traditional search engines rank blue links based on keywords and PageRank. Conversational AI search engines operate on neural embeddings, entity confidence scores, knowledge graph nodes, and consensus citations.",
    "problemText2": "If your digital entity is not semantically structured across trusted Moroccan and global data repositories, large language models will hallucinate competitors or omit your property entirely from curated travel itineraries.",
    "signsTitle": "Signals your brand needs Generative Engine Optimization (GEO):",
    "signs": [
      "ChatGPT or Perplexity does not recommend your hotel when asked for best stays in your destination",
      "Google AI Overviews summarize competitor packages while ignoring your domain",
      "Your website lacks semantic Schema.org entity relationships and Wikipedia/Wikidata grounding",
      "LLMs provide inaccurate pricing, location, or amenity details when queried about your brand"
    ],
    "featuresTitle": "Our AI Search & GEO Implementation Architecture:",
    "features": [
      {
        "title": "Entity & Knowledge Graph Grounding",
        "desc": "Structuring your brand data with multi-layered Schema.org markup, sameAs entity anchors, and authoritative data corroboration."
      },
      {
        "title": "Semantic Vector Optimization",
        "desc": "Crafting content with authoritative topical depth and natural conversational syntax that aligns with LLM retrieval-augmented generation (RAG)."
      },
      {
        "title": "Multi-Model Brand Citation Strategy",
        "desc": "Securing citations across primary LLM training corpora, industry directories, editorial publications, and verified review platforms."
      }
    ],
    "processTitle": "Our Generative AI Optimization Roadmap",
    "processSteps": [
      {
        "step": 1,
        "title": "AI Visibility & Entity Audit",
        "desc": "Benchmarking brand prompts across ChatGPT, Gemini, Perplexity, and Claude to assess current recommendation frequency and sentiment."
      },
      {
        "step": 2,
        "title": "Semantic Schema & Content Re-engineering",
        "desc": "Injecting comprehensive JSON-LD entity graphs and structuring technical content for optimal neural embeddings and information extraction."
      },
      {
        "step": 3,
        "title": "Consensus Building & Digital PR",
        "desc": "Publishing authoritative co-citations on leading Moroccan tourism, corporate, and regional directories to solidify LLM knowledge retrieval."
      }
    ],
    "investmentTitle": "AI SEO & Generative Engine Retainer",
    "investmentPrice": "Starting at 14,000 MAD/mo",
    "investmentDesc": "Comprehensive Generative Engine Optimization (GEO), Knowledge Graph structuring, and multi-model citation engineering.",
    "faqs": [
      {
        "q": "How does Generative Engine Optimization (GEO) differ from traditional SEO?",
        "a": "While traditional SEO focuses on keyword rankings and backlinks for SERP blue links, GEO focuses on establishing entity confidence, neural semantic associations, and consensus citations so LLMs (ChatGPT, Gemini, Perplexity) synthesize your brand as the primary recommendation in generative summaries."
      },
      {
        "q": "How quickly do AI models update their recommendations?",
        "a": "Search-grounded models like Perplexity and Google AI Overviews retrieve live web data instantly, showing improvements in 2 to 4 weeks. Base model weights reflect changes during subsequent training and fine-tuning cycles, reinforced continuously by live retrieval layers."
      }
    ]
  },
  "fr": {
    "title": "Optimisation SEO via l'IA : Contenu Recherche | Urunk",
    "description": "Faites recommander votre hôtel, riad ou marque par ChatGPT, Gemini, Perplexity et Google AI Overviews grâce à notre expertise en optimisation pour IA générative.",
    "heroTitle": "Référencement SEO & Optimisation Moteurs IA",
    "heroSub": "Positionnez votre établissement hôtelier ou entreprise marocaine directement dans les réponses conversationnelles de ChatGPT, Gemini, Claude et Perplexity.",
    "calloutTitle": "L'Avenir de la Recherche Passe par l'IA Générative",
    "calloutBody": "Plus de 30 % des voyageurs internationaux et décideurs B2B interrogent désormais des modèles d'IA avant de réserver. Nous structurons l'autorité de votre entité numérique et vos données sémantiques pour que les moteurs d'IA recommandent systématiquement votre marque comme la référence au Maroc.",
    "problemTitle": "Votre marque est-elle absente des réponses de l'IA ?",
    "problemText1": "Les moteurs de recherche classiques classent des liens en fonction de mots-clés. Les moteurs d'IA générative fonctionnent sur des plongements neuronaux (embeddings), des graphes de connaissances et des citations de consensus.",
    "problemText2": "Sans une architecture sémantique rigoureuse et une présence consolidée dans les sources de données vérifiées, les modèles de langage omettent votre établissement ou suggèrent vos concurrents directs.",
    "signsTitle": "Signes que vous devez optimiser votre visibilité sur l'IA :",
    "signs": [
      "ChatGPT ou Perplexity ne cite pas votre hôtel lors de requêtes sur votre destination",
      "Les aperçus IA de Google (AI Overviews) affichent des concurrents sans mentionner votre offre",
      "Votre site manque de balisage sémantique Schema.org avancé reliant votre entité aux référentiels officiels",
      "Les IA fournissent des informations erronées ou obsolètes sur vos services"
    ],
    "featuresTitle": "Notre Architecture d'Optimisation Moteurs Génératifs (GEO) :",
    "features": [
      {
        "title": "Structuration de Graphe de Connaissances",
        "desc": "Implémentation de données structurées Schema.org exhaustives avec liaisons d'entités sameAs et corroborations de données fiables."
      },
      {
        "title": "Optimisation Sémantique Vectorielle",
        "desc": "Rédaction à haute valeur ajoutée et syntaxe conversationnelle optimisée pour la génération augmentée de récupération (RAG)."
      },
      {
        "title": "Stratégie de Citations Multi-Modèles",
        "desc": "Ancrage de votre autorité sur les répertoires et publications consultés par les corpus d'entraînement de ChatGPT, Gemini et Perplexity."
      }
    ],
    "processTitle": "Notre Méthodologie d'Optimisation IA",
    "processSteps": [
      {
        "step": 1,
        "title": "Audit de Visibilité IA & Benchmark",
        "desc": "Test systématique de dizaines de prompts sectoriels sur ChatGPT, Gemini et Perplexity pour mesurer votre taux de citation actuel."
      },
      {
        "step": 2,
        "title": "Restructuration Sémantique & JSON-LD",
        "desc": "Déploiement d'un maillage sémantique de pointe facilitant l'extraction de données factuelles par les robots d'indexation IA."
      },
      {
        "step": 3,
        "title": "Consolidation d'Autorité & RP Digitales",
        "desc": "Diffusion d'articles de référence et co-citations sur des plateformes marocaines et internationales à forte réputation numérique."
      }
    ],
    "investmentTitle": "Accompagnement SEO IA & Moteurs Génératifs",
    "investmentPrice": "À partir de 14 000 MAD / mois",
    "investmentDesc": "Optimisation complète pour moteurs génératifs (GEO), structuration de graphe de connaissances et monitoring de visibilité IA.",
    "faqs": [
      {
        "q": "Quelle est la différence entre le SEO traditionnel et le SEO pour IA (GEO) ?",
        "a": "Le SEO classique optimise les classements sur les pages de résultats traditionnelles de Google. Le GEO (Generative Engine Optimization) vise à influencer les réponses synthétisées générées par les LLMs (ChatGPT, Gemini, Perplexity), en positionnant votre marque comme la réponse d'autorité la plus fiable."
      },
      {
        "q": "En combien de temps observe-t-on des résultats sur les moteurs IA ?",
        "a": "Les moteurs avec recherche en direct (comme Perplexity ou Google AI Overviews) intègrent les données optimisées en 2 à 4 semaines. Pour les modèles entraînés par batchs, les citations s'ancrent durablement au fil des cycles d'apprentissage."
      }
    ]
  }
}
,
  "ecommerce-seo": {
  "en": {
    "title": "Ecommerce SEO Services: Boost Store Sales | Urunk",
    "description": "Scale your online store revenue with specialized e-commerce SEO in Morocco. Technical Shopify, WooCommerce, and Magento search optimization for Moroccan and international markets.",
    "heroTitle": "Morocco's High-Performance E-commerce SEO Agency",
    "heroSub": "We transform e-commerce catalogs into predictable revenue engines. Scalable search optimization for Moroccan online brands targeting local and global shoppers.",
    "calloutTitle": "Stop Relying Exclusively on Paid Ad Spend",
    "calloutBody": "Rising Meta and TikTok ad acquisition costs destroy e-commerce margins. We engineer faceted category architectures, product structured data, and high-intent commercial keyword rankings that generate daily sales without continuous ad spend.",
    "problemTitle": "Is your online store stuck burning budget on ads?",
    "problemText1": "Many e-commerce stores in Morocco suffer from duplicate category indexing, broken faceted navigation filters, thin product descriptions, and poor mobile crawl efficiency.",
    "problemText2": "Without technical e-commerce SEO and targeted buyer-intent keyword clusters, your products remain buried while competitors capture high-converting transactional searches.",
    "signsTitle": "Signs your e-commerce store needs specialized SEO:",
    "signs": [
      "Over 80% of revenue is dependent on continuous Meta/TikTok ad spend",
      "Category pages are not indexed or generate zero organic traffic",
      "Faceted filters (color, size, price) cause massive duplicate content issues",
      "Product pages lack Product Schema, ratings, priceValidUntil, and availability markup"
    ],
    "featuresTitle": "Our Comprehensive E-commerce SEO System:",
    "features": [
      {
        "title": "Faceted Navigation & Architecture",
        "desc": "Canonicalization and parameter management ensuring clean crawl budget and indexing of high-intent search combinations."
      },
      {
        "title": "Product & Merchant Schema",
        "desc": "Complete Schema.org Product, AggregateOffer, and MerchantReturnPolicy implementation for Google Merchant Center rich snippets."
      },
      {
        "title": "High-Intent Category Optimization",
        "desc": "Building robust topical clusters and buying guides that rank category hubs for competitive commercial search terms."
      }
    ],
    "processTitle": "Our E-commerce Growth Methodology",
    "processSteps": [
      {
        "step": 1,
        "title": "Technical Catalog & Crawl Audit",
        "desc": "Resolving indexation bloat, duplicate URL variants, canonical loops, and mobile Core Web Vitals bottlenecks."
      },
      {
        "step": 2,
        "title": "Commercial Intent Clustering",
        "desc": "Structuring category taxonomy and product copy around high-volume, high-converting buyer search queries."
      },
      {
        "step": 3,
        "title": "Authority Link Building & Digital PR",
        "desc": "Earning authoritative niche backlinks to boost domain authority and drive high-margin organic sales."
      }
    ],
    "investmentTitle": "E-commerce SEO Growth Program",
    "investmentPrice": "Starting at 15,000 MAD/mo",
    "investmentDesc": "Comprehensive catalog optimization, technical site hygiene, structured data, and authoritative backlink acquisition.",
    "faqs": [
      {
        "q": "Which e-commerce platforms do you support in Morocco?",
        "a": "We specialize in Shopify, WooCommerce (WordPress), Magento (Adobe Commerce), and custom Next.js/headless e-commerce architectures."
      },
      {
        "q": "How do you handle multi-currency and multi-language e-commerce sites?",
        "a": "We implement strict hreflang tags, localized subdirectories (e.g. /fr/ and /en/), regional pricing schema, and international currency canonical configurations to ensure seamless global shopping experiences."
      }
    ]
  },
  "fr": {
    "title": "Référencement SEO E-commerce : Boostez Ventes | Urunk",
    "description": "Multipliez les ventes de votre boutique en ligne avec notre agence SEO e-commerce au Maroc. Optimisation Shopify, WooCommerce et Magento pour marchés marocains et export.",
    "heroTitle": "L'Agence SEO E-commerce de Référence au Maroc",
    "heroSub": "Nous transformons votre catalogue en ligne en une source prévisible de ventes récurrentes. Optimisation SEO technique pour boutiques en ligne au Maroc et à l'international.",
    "calloutTitle": "Ne Soyez Plus Dépendant des Coûts Publicitaires",
    "calloutBody": "La hausse constante des coûts d'acquisition sur Meta et TikTok réduit vos marges. Nous structurons votre catalogue, vos facettes de navigation et vos fiches produits pour générer des commandes régulières sur Google sans dépendre des publicités payantes.",
    "problemTitle": "Votre boutique en ligne peine-t-elle à générer des ventes organiques ?",
    "problemText1": "De nombreuses boutiques e-commerce au Maroc souffrent d'indexation chaotique causée par les filtres (tailles, couleurs), de fiches produits sans contenu textuel et d'un temps de chargement mobile excessif.",
    "problemText2": "Sans une architecture de catalogue optimisée et un balisage marchand rigoureux, vos produits demeurent invisibles tandis que vos concurrents captent les intentions d'achat les plus rentables.",
    "signsTitle": "Signes que votre e-commerce a besoin d'un SEO spécialisé :",
    "signs": [
      "Plus de 80 % de votre chiffre d'affaires dépend des publicités Meta ou TikTok",
      "Vos pages catégories ne génèrent presque aucun trafic organique qualifié",
      "Les filtres à facettes génèrent des milliers d'URL dupliquées pénalisantes",
      "Vos produits n'affichent pas les prix, avis et disponibilités directement dans Google"
    ],
    "featuresTitle": "Notre Système SEO E-commerce Sur-Mesure :",
    "features": [
      {
        "title": "Gestion Technique des Facettes",
        "desc": "Indexation ciblée des filtres stratégiques et canonicalisation stricte pour optimiser le budget de crawl de Google."
      },
      {
        "title": "Données Structurées Merchant & Produit",
        "desc": "Balisage JSON-LD complet (Product, Offer, MerchantReturnPolicy) pour maximiser l'affichage de rich snippets attractifs."
      },
      {
        "title": "Silos Thématiques & Pages Catégories",
        "desc": "Structuration de guides d'achat et d'arborescences sémantiques captant les recherches transactionnelles à fort volume."
      }
    ],
    "processTitle": "Notre Processus de Croissance E-commerce",
    "processSteps": [
      {
        "step": 1,
        "title": "Audit Technique de Catalogue",
        "desc": "Élimination des pages orphelines, résolution du contenu dupliqué et optimisation des Core Web Vitals sur mobile."
      },
      {
        "step": 2,
        "title": "Optimisation Sémantique Transactionnelle",
        "desc": "Rédaction de descriptifs de catégories et fiches produits ciblant les intentions d'achat précises."
      },
      {
        "step": 3,
        "title": "Acquisition de Liens & Netlinking Niche",
        "desc": "Obtention de backlinks d'autorité renforçant la popularité de votre nom de domaine et vos positions clés."
      }
    ],
    "investmentTitle": "Programme SEO E-commerce",
    "investmentPrice": "À partir de 15 000 MAD / mois",
    "investmentDesc": "Audit technique complet, optimisation On-Page des catégories, balisage Schema.org et netlinking d'autorité.",
    "faqs": [
      {
        "q": "Quelles plateformes e-commerce optimisez-vous au Maroc ?",
        "a": "Nous intervenons sur Shopify, WooCommerce (WordPress), Magento, Prestashop ainsi que sur les architectures e-commerce sur mesure (Next.js / Headless)."
      },
      {
        "q": "Comment gérez-vous le référencement international et multi-devises ?",
        "a": "Nous configurons des balises hreflang rigoureuses, des répertoires géolocalisés (/fr/, /en/) et des flux de données structurées conformes pour chaque marché cible."
      }
    ]
  }
}
,
  "google-business-profile-optimization": {
  "en": {
    "title": "Google Business Profile Optimization for Hotels | Urunk",
    "description": "Excel Google Maps and local 3-pack search in Morocco. Complete Google Business Profile optimization, citation cleanup, and review growth for Moroccan businesses.",
    "heroTitle": "Morocco's Google Business Profile & Maps Specialists",
    "heroSub": "Capture high-intent local foot traffic and phone calls. We optimize your Google Business Profile to rank #1 in the Google Maps 3-Pack across Moroccan cities.",
    "calloutTitle": "The Highest-Converting Local Traffic Channel",
    "calloutBody": "Over 65% of mobile searches for Moroccan restaurants, riads, clinics, and professional services result in a direct call or direction request from the Google Maps 3-Pack. We optimize your primary categories, geo-tagged photo media, review velocity, and NAP citation consistency to excel local map searches.",
    "problemTitle": "Are your local competitors dominating Google Maps in your area?",
    "problemText1": "Many Moroccan businesses struggle with unoptimized Google listings, incorrect category choices, incomplete attribute tags, and irregular review acquisition that depress local search rankings.",
    "problemText2": "Google's local algorithm weighs proximity, prominence, and relevance. Without active optimization and authoritative geo-citations, your listing gets relegated to page 2 of Maps results.",
    "signsTitle": "Signs your Google Business Profile is underperforming:",
    "signs": [
      "Your listing does not appear in the top 3 Google Maps results for your primary services",
      "Inconsistent Name, Address, Phone (NAP) details across local Moroccan directories",
      "Infrequent customer reviews and low review response rates",
      "Competitors with lower ratings outrank your business in local proximity searches"
    ],
    "featuresTitle": "Our Google Business Profile Optimization System:",
    "features": [
      {
        "title": "Category & Attribute Precision",
        "desc": "Configuring high-leverage primary and secondary business categories with full attribute specifications."
      },
      {
        "title": "Review Acceleration & Management",
        "desc": "Automated review generation workflows and keyword-rich review response frameworks that signal local relevance."
      },
      {
        "title": "Local Geo-Grid Citation Building",
        "desc": "Building consistent NAP citations across Telecontact, PagesJaunes, TripAdvisor, and Moroccan trade directories."
      }
    ],
    "processTitle": "Our Local Maps Optimization Process",
    "processSteps": [
      {
        "step": 1,
        "title": "Local Audit & Geo-Grid Scan",
        "desc": "Mapping your Google Maps ranking radius across every kilometer of your target Moroccan city to spot visibility gaps."
      },
      {
        "step": 2,
        "title": "Listing Restructuring & Media Injection",
        "desc": "Optimizing titles, services, products, Q&A sections, and uploading high-resolution geo-tagged photography."
      },
      {
        "step": 3,
        "title": "Ongoing Posts, Citations & Review Growth",
        "desc": "Publishing weekly Google Updates, expanding regional citations, and boosting 5-star customer review signals."
      }
    ],
    "investmentTitle": "Google Business Profile Setup & Management",
    "investmentPrice": "Starting at 5,000 MAD/mo",
    "investmentDesc": "Comprehensive GBP audit, category refinement, review acceleration workflows, and weekly local post management.",
    "faqs": [
      {
        "q": "How fast can a business improve its Google Maps 3-Pack ranking?",
        "a": "Category adjustments, listing completion, and initial NAP cleanups often produce measurable map ranking improvements within 14 to 30 days."
      },
      {
        "q": "Can you help resolve suspended or duplicate Google listings in Morocco?",
        "a": "Yes, we provide full listing recovery, verification support with Google Support, and duplicate listing consolidation."
      }
    ]
  },
  "fr": {
    "title": "Optimisation Fiche Google Business Profile Riad | Urunk",
    "description": "Optimisez le Pack Local Google Maps au Maroc. Optimisation complète de fiche Google Business Profile, gestion des avis et citations locales pour entreprises.",
    "heroTitle": "Spécialistes Google Business Profile & Maps au Maroc",
    "heroSub": "Captez les clients de proximité et générez des appels qualifiés. Nous optimisons votre fiche Google Business Profile pour atteindre le Top 3 sur Google Maps.",
    "calloutTitle": "Le Canal d'Acquisition Local le Plus Rentable",
    "calloutBody": "Plus de 65 % des recherches mobiles pour des riads, restaurants, cliniques et prestataires de services au Maroc aboutissent à un appel ou une visite physique depuis le Pack Local 3 de Google Maps. Nous optimisons vos catégories, photos géolocalisées et signaux d'avis pour maximiser votre visibilité.",
    "problemTitle": "Vos concurrents locaux vous devancent-ils sur Google Maps ?",
    "problemText1": "De nombreuses entreprises au Maroc disposent de fiches incomplètes, de mauvaises catégories secondaires ou d'informations discordantes (NAP) qui freinent leur classement local.",
    "problemText2": "L'algorithme local de Google privilégie la pertinence, la proximité et la notoriété. Sans optimisation méthodique et recueil régulier d'avis, votre fiche reste invisible.",
    "signsTitle": "Signes que votre fiche Google Business Profile doit être optimisée :",
    "signs": [
      "Votre établissement n'apparaît pas dans les 3 premières positions Maps sur vos mots-clés clés",
      "Des informations d'adresse ou de téléphone contradictoires sur les annuaires marocains",
      "Peu d'avis récents ou des avis sans réponses professionnelles intégrant vos mots-clés",
      "Vos concurrents captent tous les appels téléphoniques directs de votre zone géographique"
    ],
    "featuresTitle": "Notre Méthode d'Optimisation Google Business Profile :",
    "features": [
      {
        "title": "Sélection Précise des Catégories",
        "desc": "Choix de la catégorie principale la plus performante et ajout méthodique des catégories secondaires pertinentes."
      },
      {
        "title": "Stratégie de Collecte d'Avis Clients",
        "desc": "Mise en place de processus de collecte automatisés et réponses stratégiques enrichies en mots-clés locaux."
      },
      {
        "title": "Nettoyage & Création de Citations Locales",
        "desc": "Harmonisation rigoureuse de vos coordonnées (NAP) sur Telecontact, PagesJaunes, TripAdvisor et annuaires sectoriels."
      }
    ],
    "processTitle": "Notre Processus de Visibilité Locale",
    "processSteps": [
      {
        "step": 1,
        "title": "Audit & Diagnostic Geo-Grid",
        "desc": "Cartographie précise de votre positionnement sur Google Maps quartier par quartier pour identifier les zones à conquérir."
      },
      {
        "step": 2,
        "title": "Optimisation Complète & Enrichissement Média",
        "desc": "Refonte des descriptions, configuration des produits/services, intégration de photos haute résolution et balisage."
      },
      {
        "step": 3,
        "title": "Publications Hebdomadaires & Gestion d'Avis",
        "desc": "Diffusion continue d'actualités Google, suivi des avis et consolidation des signaux de notoriété locale."
      }
    ],
    "investmentTitle": "Gestion & Optimisation Google Business Profile",
    "investmentPrice": "À partir de 5 000 MAD / mois",
    "investmentDesc": "Audit complet, optimisation sémantique, publications d'actualités et accompagnement à la collecte d'avis 5 étoiles.",
    "faqs": [
      {
        "q": "En combien de temps observe-t-on des progrès sur Google Maps ?",
        "a": "L'optimisation des catégories, l'enrichissement des attributs et le nettoyage des citations produisent généralement des gains de visibilité mesurables en 15 à 30 jours."
      },
      {
        "q": "Prenez-vous en charge la récupération de fiches suspendues au Maroc ?",
        "a": "Oui, nous gérons la résolution des suspensions, les démarches de vérification auprès de Google et la fusion des fiches doublons."
      }
    ]
  }
}
,
  "local-seo-morocco": {
  "en": {
    "title": "Local SEO Morocco: Drive Google Map Bookings | Urunk",
    "description": "Capture customers in your city with specialized Local SEO in Morocco. Geo-targeted rankings in Casablanca, Marrakech, Rabat, Agadir, and across the Kingdom.",
    "heroTitle": "High-Impact Local SEO Across Morocco",
    "heroSub": "Drive paying customers in your specific Moroccan city or region. Precision local search optimization combining Google Maps visibility, localized landing pages, and regional authority citations.",
    "calloutTitle": "Win the Customers Right in Your Neighborhood",
    "calloutBody": "Local searchers have immediate commercial intent. Whether you run a medical clinic in Casablanca, a luxury riad in Marrakech, or an industrial supplier in Tangier, our localized SEO frameworks ensure your business excels in every geo-qualified search.",
    "problemTitle": "Are local buyers finding your competitors instead of you?",
    "problemText1": "National SEO strategies often fail to rank businesses for hyper-local queries containing Moroccan city, district, or neighborhood names.",
    "problemText2": "Without dedicated city landing pages, localized schema markup, and regional Moroccan backlinks, your domain misses the most profitable nearby customer opportunities.",
    "signsTitle": "Signs you need a dedicated Local SEO strategy in Morocco:",
    "signs": [
      "Your business does not rank for \"[service] in [city]\" queries (e.g. Casablanca, Marrakech, Rabat)",
      "Your website lacks localized landing pages with localized Schema.org markup",
      "No structured local directory citations across Moroccan regional platforms",
      "Low organic foot traffic, bookings, or inbound phone calls from your target metropolitan area"
    ],
    "featuresTitle": "Our Moroccan Local SEO Framework:",
    "features": [
      {
        "title": "Localized City & District Landing Pages",
        "desc": "High-converting, hyper-targeted landing pages tailored for specific Moroccan cities and commercial districts."
      },
      {
        "title": "Geo-Targeted Structured Data",
        "desc": "Implementation of LocalBusiness and PostalAddress schema with precise latitude/longitude geo-coordinates."
      },
      {
        "title": "Regional Moroccan Citation Building",
        "desc": "Authoritative local citations and backlinks across trusted Moroccan directories and trade publications."
      }
    ],
    "processTitle": "Our Local SEO Roadmap",
    "processSteps": [
      {
        "step": 1,
        "title": "Local Market & Keyword Analysis",
        "desc": "Identifying high-intent localized search queries and benchmarking top local competitors across your target cities."
      },
      {
        "step": 2,
        "title": "On-Page Geo-Optimization",
        "desc": "Deploying optimized city pages, localized metadata, embedded maps, and local schema markup."
      },
      {
        "step": 3,
        "title": "Local Authority & Reputation Building",
        "desc": "Building regional citations, managing review velocity, and securing localized Moroccan backlinks."
      }
    ],
    "investmentTitle": "Local SEO Growth Retainer",
    "investmentPrice": "Starting at 8,000 MAD/mo",
    "investmentDesc": "Targeted local SEO for 1-3 Moroccan cities including Google Business Profile synchronization and local landing pages.",
    "faqs": [
      {
        "q": "What is the difference between Local SEO and National SEO in Morocco?",
        "a": "National SEO targets broad keywords across the entire country or internationally, while Local SEO optimizes for localized geographic queries (such as city, district, and \"near me\" searches) and Google Maps 3-Pack placement."
      },
      {
        "q": "Can you optimize for multiple cities across Morocco simultaneously?",
        "a": "Yes, we create multi-location architectures with distinct localized landing pages for Casablanca, Marrakech, Rabat, Agadir, Tangier, and other strategic cities."
      }
    ]
  },
  "fr": {
    "title": "Référencement Local Maroc : Visibilité Maps | Urunk",
    "description": "Attirez les clients de votre ville avec notre agence de SEO local au Maroc. Classements géolocalisés à Casablanca, Marrakech, Rabat, Agadir et dans tout le Royaume.",
    "heroTitle": "Le Spécialiste du Référencement Local au Maroc",
    "heroSub": "Captez des clients prêts à acheter dans votre ville ou région. Une stratégie SEO locale puissante combinant présence sur Google Maps, pages géociblées et citations régionales.",
    "calloutTitle": "Captez la Clientèle de Votre Zone Géographique",
    "calloutBody": "Les recherches locales possèdent un taux de conversion immédiat. Que vous dirigiez une clinique à Casablanca, un riad à Marrakech ou un cabinet d'avocats à Rabat, nos stratégies de SEO local vous positionnent en tête sur toutes les requêtes géolocalisées.",
    "problemTitle": "Vos clients locaux trouvent-ils vos concurrents en tête de liste ?",
    "problemText1": "Une stratégie SEO globale ne suffit pas à positionner une entreprise sur les requêtes intégrant des noms de villes ou de quartiers marocains.",
    "problemText2": "Sans pages locales dédiées, sans balisage sémantique d'adresse et sans annuaires régionaux harmonisés, vous perdez les prospects les plus proches de vos points de vente.",
    "signsTitle": "Signes que vous avez besoin d'un référencement local au Maroc :",
    "signs": [
      "Votre site ne se classe pas sur les requêtes \"[service] à [ville]\" (Casablanca, Marrakech, Rabat, etc.)",
      "Votre site n'a pas de pages géolocalisées avec balisage Schema.org LocalBusiness",
      "Vos coordonnées sont incohérentes ou absentes des grands annuaires marocains",
      "Vos demandes de devis et appels téléphoniques locaux restent insuffisants"
    ],
    "featuresTitle": "Notre Dispositif de SEO Local Marocain :",
    "features": [
      {
        "title": "Pages Locales par Ville & Quartier",
        "desc": "Création de pages d'atterrissage géociblées et ultra-pertinentes pour chaque ville ou zone d'activité ciblée."
      },
      {
        "title": "Balisage Sémantique LocalBusiness",
        "desc": "Intégration de balises JSON-LD précises avec géolocalisation GPS, horaires d'ouverture et zones desservies."
      },
      {
        "title": "Citations & Liens Régionaux Marocains",
        "desc": "Inscription et synchronisation sur les annuaires marocains de référence pour renforcer votre autorité locale."
      }
    ],
    "processTitle": "Notre Méthodologie de Référencement Local",
    "processSteps": [
      {
        "step": 1,
        "title": "Étude des Mots-Clés Locaux & Concurrence",
        "desc": "Cartographie des volumes de recherche par ville et audit des concurrents les mieux positionnés."
      },
      {
        "step": 2,
        "title": "Déploiement des Pages & Données Structurées",
        "desc": "Rédaction et intégration des contenus locaux, balises méta optimisées et cartes interactives."
      },
      {
        "step": 3,
        "title": "Netlinking Local & Signaux de Notoriété",
        "desc": "Développement de liens locaux et accélération des avis clients pour asseoir votre leadership de zone."
      }
    ],
    "investmentTitle": "Programme SEO Local Maroc",
    "investmentPrice": "À partir de 8 000 MAD / mois",
    "investmentDesc": "Optimisation SEO locale complète pour 1 à 3 villes avec synchronisation Google Maps et netlinking régional.",
    "faqs": [
      {
        "q": "Quelle est la différence entre SEO local et SEO national au Maroc ?",
        "a": "Le SEO national cible des requêtes génériques sur tout le pays, tandis que le SEO local cible spécifiquement les internautes recherchant un prestataire dans une ville ou un quartier précis (avec forte intention de contact immédiat)."
      },
      {
        "q": "Pouvez-vous gérer plusieurs villes simultanément ?",
        "a": "Absolument. Nous mettons en place une architecture multi-sites ou multi-pages couvrant Casablanca, Marrakech, Rabat, Agadir, Tanger et d'autres métropoles."
      }
    ]
  }
}
,
  "seo-agency-morocco": {
  "en": {
    "title": "SEO Agency Morocco: Rank #1 on Google Organic | Urunk",
    "description": "The definitive SEO agency in Morocco. We deliver measurable revenue growth through technical search engine optimization, content architecture, and authoritative link building.",
    "heroTitle": "Morocco's Leading Organic Search Agency",
    "heroSub": "We turn Google search into your most profitable, predictable customer acquisition channel. Tailored organic search strategies for Moroccan enterprises, luxury hospitality, and digital brands.",
    "calloutTitle": "Engineering Unfair Organic Search Advantages",
    "calloutBody": "Ranking on Google is not about tricks or superficial keyword stuffing. We combine deep technical web performance, bilingual semantic content architecture (French and English), and premium digital PR to place your brand at the absolute summit of high-value search results.",
    "problemTitle": "Is your Moroccan business missing out on high-intent search revenue?",
    "problemText1": "Over 85% of high-intent purchase journeys in Morocco start with a search engine. When your company doesn't hold top-3 organic positions, prospective clients buy from your competitors instead.",
    "problemText2": "The Moroccan search ecosystem demands nuanced multilingual optimization, technical Core Web Vitals compliance, and authoritative link acquisition that generic international agencies simply cannot deliver.",
    "signsTitle": "Signals your enterprise needs a specialized Moroccan SEO partner:",
    "signs": [
      "Organic search traffic represents less than 40% of your total website visitors",
      "Your site ranks for brand terms, but loses on lucrative non-branded service searches",
      "Bilingual search performance is inconsistent between French and English markets",
      "Previous SEO agencies delivered hollow ranking reports without measurable revenue growth"
    ],
    "featuresTitle": "Our Full-Scale SEO Growth Architecture:",
    "features": [
      {
        "title": "Multilingual Semantic Architecture",
        "desc": "Engineered site taxonomy and content clusters optimized for French-speaking domestic markets and English-speaking global clients."
      },
      {
        "title": "Technical Core Web Vitals Tuning",
        "desc": "Sub-second server response times, optimized JavaScript hydration, and clean mobile crawl efficiency."
      },
      {
        "title": "High-Impact Digital PR & Link Acquisition",
        "desc": "Securing contextual backlinks from leading Moroccan news outlets, industry journals, and global publications."
      }
    ],
    "processTitle": "Our Proven Enterprise SEO Methodology",
    "processSteps": [
      {
        "step": 1,
        "title": "Deep Technical & Market Audit",
        "desc": "Analyzing crawl logs, indexation hygiene, keyword revenue opportunity, and competitor gap matrices."
      },
      {
        "step": 2,
        "title": "Structural Optimization & Content Strategy",
        "desc": "Re-architecting URL hierarchies, deploying rich schema markup, and executing high-depth content clusters."
      },
      {
        "step": 3,
        "title": "Authoritative Outreach & Iterative Scaling",
        "desc": "Executing strategic PR outreach, tracking rank trajectories, and continuously expanding topical domain visibility."
      }
    ],
    "investmentTitle": "Enterprise SEO Strategic Retainer",
    "investmentPrice": "Starting at 12,000 MAD/mo",
    "investmentDesc": "Comprehensive full-service SEO management including technical engineering, bilingual content production, and digital PR.",
    "faqs": [
      {
        "q": "Why is bilingual SEO essential for businesses in Morocco?",
        "a": "Moroccan business decision-makers and local consumers primarily search in French, while international tourists, foreign investors, and export buyers search in English. A robust bilingual SEO strategy captures both markets without keyword cannibalization."
      },
      {
        "q": "How do you measure and report SEO success?",
        "a": "We track meaningful commercial metrics: qualified organic lead conversions, direct bookings, revenue attribution, top-3 keyword market share, and organic traffic growth."
      }
    ]
  },
  "fr": {
    "title": "Agence SEO Maroc : Expert Référencement | Urunk",
    "description": "L'agence SEO de référence au Maroc. Générez une croissance mesurable grâce à notre expertise en référencement technique, stratégie de contenu bilingue et netlinking d'autorité.",
    "heroTitle": "L'Agence Experte en Référencement Naturel au Maroc",
    "heroSub": "Faites de Google votre canal d'acquisition de clients le plus rentable et pérenne. Stratégies SEO sur-mesure pour entreprises marocaines, hôtellerie haut de gamme et e-commerce.",
    "calloutTitle": "Construisez un Avantage Concurrentiel Durable sur Google",
    "calloutBody": "Le référencement naturel n'est pas une question d'artifices. Nous combinons excellence technique web, architecture sémantique bilingue (français et anglais) et relations presse digitales pour positionner votre marque au sommet des requêtes les plus rentables du marché marocain et international.",
    "problemTitle": "Votre entreprise passe-t-elle à côté des opportunités Google au Maroc ?",
    "problemText1": "Plus de 85 % des parcours d'achat à forte valeur ajoutée au Maroc débutent sur un moteur de recherche. Si vous ne figurez pas dans les 3 premières positions, vos prospects signent chez vos concurrents.",
    "problemText2": "Le marché marocain exige une maîtrise fine du comportement de recherche bilingue, des performances techniques irréprochables sur réseaux mobiles et des liens d'autorité locaux.",
    "signsTitle": "Signes que vous devez collaborer avec une agence SEO d'élite :",
    "signs": [
      "Le trafic naturel représente moins de 40 % de vos visites totales",
      "Vous êtes visible sur votre nom de marque, mais absent sur vos prestations stratégiques",
      "Votre visibilité est déséquilibrée entre vos versions française et anglaise",
      "Vos prestataires précédents vous ont fourni des rapports vagues sans impact sur votre chiffre d'affaires"
    ],
    "featuresTitle": "Notre Architecture de Croissance SEO Complète :",
    "features": [
      {
        "title": "Architecture Sémantique Bilingue",
        "desc": "Arborescences et silos de contenu taillés sur mesure pour séduire à la fois les marchés francophones et anglophones."
      },
      {
        "title": "Excellence Technique & Core Web Vitals",
        "desc": "Optimisation du code, temps de réponse serveur inférieurs à 300 ms et fluidité mobile exemplaire."
      },
      {
        "title": "Netlinking Stratégique & Relations Presse",
        "desc": "Acquisition de backlinks d'autorité depuis des médias marocains et des portails sectoriels reconnus."
      }
    ],
    "processTitle": "Notre Démarche Méthodologique",
    "processSteps": [
      {
        "step": 1,
        "title": "Audit Technique & Analyse d'Opportunité",
        "desc": "Diagnostic approfondi des freins d'indexation, étude sémantique concurrentielle et identification des gains rapides."
      },
      {
        "step": 2,
        "title": "Optimisation On-Page & Structuration",
        "desc": "Refonte des balises, déploiement du balisage Schema.org avancé et création de contenus d'autorité."
      },
      {
        "step": 3,
        "title": "Campagnes de Netlinking & Suivi ROI",
        "desc": "Développement de l'autorité du domaine, suivi régulier des conversions et ajustements continus de positionnement."
      }
    ],
    "investmentTitle": "Accompagnement SEO Entreprise",
    "investmentPrice": "À partir de 12 000 MAD / mois",
    "investmentDesc": "Prise en charge intégrale : SEO technique, stratégie de contenu bilingue, netlinking premium et reporting mensuel orienté business.",
    "faqs": [
      {
        "q": "Pourquoi le SEO bilingue est-il indispensable au Maroc ?",
        "a": "Les clients locaux et décideurs marocains effectuent principalement leurs recherches en français, tandis que les touristes internationaux et acheteurs étrangers utilisent l'anglais. Une stratégie bilingue rigoureuse avec balises hreflang capte les deux audiences sans risque de cannibalisation."
      },
      {
        "q": "Quels indicateurs suivez-vous pour mesurer la performance ?",
        "a": "Nous mesurons l'impact réel sur votre activité : volume de formulaires de contact qualifiés, réservations directes, chiffre d'affaires généré et évolution des positions dans le Top 3."
      }
    ]
  }
}
,
  "web-design-casablanca": {
  "en": {
    "title": "Website Design Casablanca | Web Design Agency | Urunk",
    "description": "Casablanca's specialized web design agency. We design and develop bespoke, high-converting websites for corporations, B2B enterprises, and fast-growing businesses in Casablanca.",
    "heroTitle": "Casablanca's Leading Web Design & Development Agency",
    "heroSub": "We craft modern, high-converting websites built for speed, search visibility, and corporate authority in Morocco's economic capital.",
    "calloutTitle": "Your Website is Your #1 Corporate Sales Asset",
    "calloutBody": "In Casablanca's competitive business landscape, a slow or outdated website undermines your credibility. We engineer custom WordPress and modern web platforms tailored to Casablanca enterprises, combining sophisticated visual aesthetics with technical performance and lead-generation architecture.",
    "problemTitle": "Does your website reflect the true stature of your Casablanca enterprise?",
    "problemText1": "Many businesses in Casablanca operate with template-heavy websites that load slowly, fail to communicate their unique value proposition, and convert poorly on mobile devices.",
    "problemText2": "A bespoke corporate website built for the Moroccan market establishes immediate trust with prospective B2B clients, investors, and international partners.",
    "signsTitle": "Signs your Casablanca business needs a website redesign:",
    "signs": [
      "Your website looks outdated compared to top competitors in your sector",
      "Mobile page load speeds exceed 3 seconds on standard Moroccan 4G networks",
      "Your site generates few qualified inbound contact requests or inquiries",
      "The design does not effectively represent your brand's premium positioning"
    ],
    "featuresTitle": "Our Web Design & Engineering Standards:",
    "features": [
      {
        "title": "Custom Corporate UI/UX Design",
        "desc": "Bespoke, brand-aligned interfaces crafted for modern corporate, financial, industrial, and tech enterprises."
      },
      {
        "title": "Speed & Core Web Vitals Optimization",
        "desc": "Ultra-fast loading speeds engineered for flawless performance across Moroccan and international networks."
      },
      {
        "title": "Built-In Lead Generation Architecture",
        "desc": "Strategic call-to-action pathways and contact forms engineered to maximize conversion rates."
      }
    ],
    "processTitle": "Our Web Design Process",
    "processSteps": [
      {
        "step": 1,
        "title": "Discovery & Strategic Wireframing",
        "desc": "Understanding your commercial objectives, target demographics, and establishing information architecture."
      },
      {
        "step": 2,
        "title": "Bespoke UI Design & Prototyping",
        "desc": "Crafting responsive, visually refined design concepts that elevate your brand prestige."
      },
      {
        "step": 3,
        "title": "Technical Development & SEO Launch",
        "desc": "Developing on clean, secure codebases with integrated SEO fundamentals and tracking analytics."
      }
    ],
    "investmentTitle": "Custom Web Design Package",
    "investmentPrice": "Starting at 20,000 MAD",
    "investmentDesc": "Complete custom website design and development with mobile optimization, CMS training, and SEO launch readiness.",
    "faqs": [
      {
        "q": "How long does a custom web design project take to complete?",
        "a": "A standard custom corporate website typically takes between 4 and 8 weeks from initial discovery to final launch, depending on scope and feature complexity."
      },
      {
        "q": "Do you provide website maintenance and hosting support in Casablanca?",
        "a": "Yes, we provide ongoing maintenance, security monitoring, cloud hosting management, and technical updates for all client websites."
      }
    ]
  },
  "fr": {
    "title": "Création Site Web Casablanca : Agence de Design | Urunk",
    "description": "Agence de création web de référence à Casablanca. Nous concevons des sites internet modernes, rapides et orientés conversion pour entreprises et marques à Casablanca.",
    "heroTitle": "L'Agence de Création Web de Référence à Casablanca",
    "heroSub": "Nous concevons des sites internet modernes, ultra-rapides et taillés pour générer des opportunités d'affaires dans la capitale économique du Maroc.",
    "calloutTitle": "Votre Site Web est Votre Meilleur Commercial",
    "calloutBody": "Dans l'environnement concurrentiel de Casablanca, un site web obsolète nuit directement à votre crédibilité. Nous développons des plateformes web sur-mesure combinant élégance visuelle, performance technique irréprochable et parcours de conversion optimisés.",
    "problemTitle": "Votre site internet valorise-t-il réellement votre entreprise à Casablanca ?",
    "problemText1": "De nombreuses entreprises casablancaises disposent de sites réalisés sur des modèles génériques, lents à charger et inadaptés aux attentes des décideurs modernes.",
    "problemText2": "Un site web sur-mesure, rapide et clair installe une confiance immédiate auprès de vos prospects B2B, investisseurs et partenaires internationaux.",
    "signsTitle": "Signes que votre entreprise a besoin d'une refonte de site :",
    "signs": [
      "Votre site internet paraît vieillissant face aux leaders de votre secteur",
      "Le temps de chargement dépasse 3 secondes sur les connexions 4G locales",
      "Le site ne génère que très peu de demandes de devis ou prises de contact",
      "L'expérience utilisateur sur mobile est dégradée ou peu intuitive"
    ],
    "featuresTitle": "Nos Standards de Conception Web :",
    "features": [
      {
        "title": "Design UI/UX Sur-Mesure",
        "desc": "Interfaces graphiques élégantes et modernes, pensées spécifiquement pour l'identité de votre entreprise."
      },
      {
        "title": "Vitesse & Performance Optimale",
        "desc": "Temps de chargement records et respect strict des Core Web Vitals de Google pour une expérience fluide."
      },
      {
        "title": "Architecture Orientée Conversion",
        "desc": "Parcours utilisateurs et formulaires étudiés pour transformer chaque visiteur qualifié en contact commercial."
      }
    ],
    "processTitle": "Notre Méthode de Création Web",
    "processSteps": [
      {
        "step": 1,
        "title": "Cadrage & Arborescence Stratégique",
        "desc": "Analyse de vos objectifs commerciaux, étude de votre cible et définition de la structure du site."
      },
      {
        "step": 2,
        "title": "Design Graphique & Prototypage",
        "desc": "Création de maquettes sur-mesure responsive alliant modernité et valorisation de votre image de marque."
      },
      {
        "step": 3,
        "title": "Développement & Mise en Ligne SEO",
        "desc": "Intégration sur code propre et sécurisé avec configuration des bases SEO et outils d'analyse."
      }
    ],
    "investmentTitle": "Création de Site Internet Sur-Mesure",
    "investmentPrice": "À partir de 20 000 MAD",
    "investmentDesc": "Conception complète, intégration responsive, formation à l'administration et optimisation SEO de lancement.",
    "faqs": [
      {
        "q": "Quel est le délai moyen pour concevoir un site web professionnel ?",
        "a": "La création d'un site web sur-mesure prend généralement entre 4 et 8 semaines, selon la complexité fonctionnelle et le volume de contenus à intégrer."
      },
      {
        "q": "Proposez-vous la maintenance et l'hébergement à Casablanca ?",
        "a": "Oui, nous assurons la maintenance technique, la surveillance de sécurité, les sauvegardes régulières et l'hébergement cloud haute performance."
      }
    ]
  }
}
,
  "wordpress-seo": {
  "en": {
    "title": "WordPress SEO Service: Fast Audits & Rankings | Urunk",
    "description": "Supercharge your WordPress website rankings and speed in Morocco. Deep technical SEO, Core Web Vitals optimization, schema structuring, and security hardening.",
    "heroTitle": "Specialized WordPress SEO & Performance Services",
    "heroSub": "Transform your WordPress website into a lightning-fast, top-ranking search asset. Technical SEO, database cleanup, Core Web Vitals tuning, and schema architecture.",
    "calloutTitle": "Unlock the True Ranking Power of WordPress",
    "calloutBody": "WordPress powers over 40% of the web, but plugin bloat, heavy themes, and slow database queries frequently stifle search performance. We strip away technical bottlenecks, configure advanced caching and schema engines, and optimize your WordPress architecture for top Google rankings.",
    "problemTitle": "Is your WordPress website weighed down by slow plugins and code bloat?",
    "problemText1": "Many WordPress sites suffer from poor Core Web Vitals, excessive CSS/JS payload, unoptimized media assets, and incorrect SEO plugin configurations that undermine rankings.",
    "problemText2": "A technically sound WordPress site loads in under a second, provides clear semantic signals to Google, and consistently outranks heavier competitor platforms.",
    "signsTitle": "Signs your WordPress site needs technical search optimization:",
    "signs": [
      "Google PageSpeed Insights score is below 70 on mobile devices",
      "Excessive plugin usage causing slow database queries and high server TTFB",
      "Duplicate taxonomies (tags vs categories) creating indexation bloat in Google",
      "Missing structured data markup for your core business services or products"
    ],
    "featuresTitle": "Our WordPress SEO & Speed Architecture:",
    "features": [
      {
        "title": "Core Web Vitals & Asset Optimization",
        "desc": "Minifying assets, optimizing critical rendering paths, deferring non-critical scripts, and configuring advanced caching."
      },
      {
        "title": "Taxonomy & Indexation Hygiene",
        "desc": "Cleaning up tag archives, pagination parameters, and author pages to focus crawl budget on high-value URLs."
      },
      {
        "title": "Advanced Schema.org Integration",
        "desc": "Deploying modular JSON-LD structured data for rich snippets across services, FAQs, and articles."
      }
    ],
    "processTitle": "Our WordPress SEO Roadmap",
    "processSteps": [
      {
        "step": 1,
        "title": "Full Technical & Performance Audit",
        "desc": "Profiling plugin bottlenecks, database bloat, theme scripts, and search crawl errors."
      },
      {
        "step": 2,
        "title": "Speed & Code Optimization",
        "desc": "Implementing caching, database cleanup, image WebP conversion, and script deferral for sub-second load times."
      },
      {
        "step": 3,
        "title": "On-Page SEO & Structured Data",
        "desc": "Configuring canonicals, metadata templates, XML sitemaps, and advanced Schema markup."
      }
    ],
    "investmentTitle": "WordPress SEO Optimization Package",
    "investmentPrice": "Starting at 9,000 MAD",
    "investmentDesc": "Complete technical speed tuning, Core Web Vitals optimization, taxonomy hygiene, and schema deployment.",
    "faqs": [
      {
        "q": "Will optimizing WordPress speed affect my current website design or features?",
        "a": "No. Our performance optimizations enhance backend efficiency, script loading order, and image compression without altering your visual design or functionality."
      },
      {
        "q": "Which SEO plugins do you recommend and configure on WordPress?",
        "a": "We work with Yoast SEO, Rank Math, SEOPress, or custom schema setups depending on your existing infrastructure and business requirements."
      }
    ]
  },
  "fr": {
    "title": "Expertise SEO WordPress : Audit & Optimisation | Urunk",
    "description": "Propulsez votre site WordPress en tête de Google au Maroc. Optimisation SEO technique, Core Web Vitals, nettoyage de plugins et balisage structuré.",
    "heroTitle": "Expertise SEO & Performance Technique WordPress",
    "heroSub": "Transformez votre site WordPress en un actif performant, ultra-rapide et dominant sur Google. Optimisation technique, nettoyage de base de données et données structurées.",
    "calloutTitle": "Exploitez la Véritable Puissance SEO de WordPress",
    "calloutBody": "WordPress propulse plus de 40 % du web, mais l'accumulation de plugins, les thèmes trop lourds et les requêtes lentes brident fréquemment son référencement. Nous éliminons les lenteurs techniques et déployons une architecture SEO robuste pour vous classer au sommet de Google.",
    "problemTitle": "Votre site WordPress est-il ralenti par des plugins superflus ?",
    "problemText1": "De nombreux sites WordPress au Maroc souffrent de mauvais scores Core Web Vitals, de fichiers JavaScript encombrants et d'extensions mal paramétrées qui pénalisent le positionnement.",
    "problemText2": "Un site WordPress parfaitement optimisé se charge en moins d'une seconde, envoie des signaux sémantiques clairs à Google et convertit davantage de visiteurs.",
    "signsTitle": "Signes que votre site WordPress a besoin d'un audit SEO technique :",
    "signs": [
      "Score Google PageSpeed Insights inférieur à 70 sur smartphone",
      "Temps de réponse serveur (TTFB) élevé causé par des plugins ou requêtes lourdes",
      "Contenu dupliqué causé par les étiquettes (tags), catégories et pages d'auteurs",
      "Absence de données structurées pour enrichir vos résultats dans la recherche Google"
    ],
    "featuresTitle": "Nos Piliers d'Optimisation WordPress :",
    "features": [
      {
        "title": "Vitesse & Core Web Vitals",
        "desc": "Mise en cache avancée, conversion WebP automatique, minification des scripts et optimisation du chemin critique."
      },
      {
        "title": "Hygiène d'Indexation & Taxonomies",
        "desc": "Désindexation des pages parasites (archives d'étiquettes, doublons) pour concentrer le budget de crawl de Google."
      },
      {
        "title": "Balisage Structuré Schema.org Avancé",
        "desc": "Intégration de schémas JSON-LD complets pour activer les rich snippets (avis, FAQ, services)."
      }
    ],
    "processTitle": "Notre Processus d'Optimisation WordPress",
    "processSteps": [
      {
        "step": 1,
        "title": "Audit Technique & Profiling Performance",
        "desc": "Diagnostic précis des requêtes SQL lentes, conflits d'extensions et anomalies d'indexation."
      },
      {
        "step": 2,
        "title": "Nettoyage & Accélération Technique",
        "desc": "Optimisation de la base de données, allègement du code et configuration d'un système de cache performant."
      },
      {
        "step": 3,
        "title": "Structuration On-Page & Déploiement Schema",
        "desc": "Configuration des balises méta, sitemaps XML optimisés et balisage sémantique riche."
      }
    ],
    "investmentTitle": "Pack Optimisation SEO WordPress",
    "investmentPrice": "À partir de 9 000 MAD",
    "investmentDesc": "Audit complet, optimisation vitesse et Core Web Vitals, configuration SEO avancée et rapport de performance.",
    "faqs": [
      {
        "q": "L'optimisation de la vitesse risque-t-elle de casser mon design ?",
        "a": "Non. Nous effectuons tous les tests sur environnement sécurisé afin de garantir que l'apparence visuelle et les fonctionnalités restent parfaitement intactes."
      },
      {
        "q": "Quels plugins SEO prenez-vous en charge ?",
        "a": "Nous intervenons sur Rank Math, Yoast SEO, SEOPress ainsi que sur des implémentations de balisage sémantique sur-mesure."
      }
    ]
  }
}
};
