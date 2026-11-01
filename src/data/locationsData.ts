export interface LocationData {
  title: string;
  description: string;
  heroTitle: string;
  heroSub: string;
  calloutTitle: string;
  calloutBody: string;
  overviewTitle: string;
  overviewText1: string;
  overviewText2: string;
  marketHighlightsTitle: string;
  marketHighlights: string[];
  localServicesTitle: string;
  localServices: {
    title: string;
    desc: string;
    link: string;
  }[];
  nearbyLocationsTitle: string;
  nearbyLocations: {
    title: string;
    desc: string;
    link: string;
  }[];
  faqs: { q: string; a: string }[];
  whyPartnerTitle?: string;
  whyPartnerText?: string;
}

export interface MarketStat {
  label: { fr: string; en: string };
  value: string;
}

export interface CityServiceFaqItem {
  q: { fr: string; en: string };
  a: { fr: string; en: string };
}

export interface LocationDataMap {
  en: LocationData;
  fr: LocationData;
  uniqueIntroByService?: Record<string, { fr: string; en: string }>;
  marketStats?: MarketStat[];
  faqByService?: Record<string, CityServiceFaqItem[]>;
}

export const locationsData: Record<string, LocationDataMap> = {
  'morocco': {
    en: {
      title: "Web Engineering, SEO & Growth Agency Morocco | Urunk",
      description: "Urunk national hub across Morocco (Casablanca, Marrakech, Rabat, Agadir, Tangier): high-speed React web design, enterprise SEO, and paid acquisition.",
      heroTitle: "National Web Engineering, SEO & Client Acquisition Hub in Morocco",
      heroSub: "With a national population of over 37.5 million and an internet penetration rate exceeding 88.1%, Morocco is undergoing a sweeping digital transition. We help businesses across the Kingdom capture organic search dominance and drive direct margins.",
      calloutTitle: "National Digital Footprint & Performance",
      calloutBody: "We operate a comprehensive geographic network across Casablanca, Marrakech, Rabat, Agadir, and Tangier to establish market authority for Moroccan corporate and tourism leaders.",
      overviewTitle: "Driving Digital Modernization and Organic Authority Across the Kingdom of Morocco",
      overviewText1: "The Kingdom of Morocco has positioned itself as North Africa's preeminent economic and industrial hub, and a top-tier destination on the global tourism map, welcoming a record 17.4 million tourist arrivals in 2024. Boasting a national population of over 37.5 million citizens and a robust national internet penetration rate of 88.1%, the business landscape is undergoing an unprecedented digital acceleration. From the high-rise corporate corridors of Casablanca and administrative offices of Rabat to the historic guest houses in Marrakech and coastal resorts in Agadir, business-to-business (B2B) and business-to-consumer (B2C) operations are increasingly moving online. This massive shift has created intense competition on search engines, where appearing on the first page of Google is no longer just a marketing option, but a core component of commercial survivability.",
      overviewText2: "Moroccan search intent is highly complex, bilingual (often trilingual, combining French, Arabic, and English), requiring a highly sophisticated localized marketing framework. European travelers search in English and German for boutique hospitality, B2B procurement managers require authoritative documentation and technical cases in French, and local consumers interact heavily with Arabic visual search and messaging. Under this dynamic environment, standard template websites and generic overseas marketing packages fail to capture qualified organic traffic or build genuine brand authority. Urunk bridges advanced front-end software engineering (using custom React and Vite architectures starting at 12,000 MAD) with rigorous international SEO and high-ROI ad campaign management (starting at 4,000 MAD/month). We help Moroccan corporate leaders, industrial SMEs, and high-end hospitality groups secure long-term organic rankings, lower acquisition costs, and bypass high intermediary commissions.",
      whyPartnerTitle: "Why Moroccan Enterprises Need a Digital Partner with Local and Technical Authority",
      whyPartnerText: "Thriving in Morocco's diverse digital market demands a partner with a deep technical capability, localized market knowledge, and absolute familiarity with the Kingdom's regulatory guidelines (including strict CNDP compliance for personal data protection). Generalist digital agencies or foreign freelancers lack the physical proximity and context needed to understand regional tourist season shifts, local business psychology, and national e-commerce payment protocols (such as CMI and international card routing). Urunk provides this complete on-the-ground capability, combining elite-tier web development and targeted SEO to turn digital channels into high-yield, predictable business pipelines.",
      marketHighlightsTitle: "Why Work with Urunk in Morocco",
      marketHighlights: [
        "Full national coverage with localized strategies for Casablanca, Marrakech, Rabat, Agadir, and Tangier.",
        "Deep expertise in high-ticket sectors: Hospitality, Tourism, B2B Corporate, and E-commerce.",
        "Engineering-first web development with React and sub-second page performance.",
        "100% transparent reporting on ROI, organic keywords, and lead conversions."
      ],
      localServicesTitle: "Our Services in Morocco",
      localServices: [
        {
          title: "National Enterprise SEO",
          desc: "We optimize your web assets for highly competitive national B2B and B2C keywords, placing your brand at the summit of organic search engine results on Google.",
          link: "/en/seo-agency-morocco"
        },
        {
          title: "React Web Engineering",
          desc: "We develop custom, ultra-fast, and secure websites under React that deliver sub-second loading speeds, clean responsive designs, and robust defense against vulnerabilities.",
          link: "/en/web-design-morocco"
        },
        {
          title: "B2B & B2C Google Search Ads",
          desc: "We design and manage strategic, high-ROI paid Google Ads campaigns that dynamically capture high-intent buyers and corporate procurement managers across Morocco.",
          link: "/en/google-ads-morocco"
        },
        {
          title: "Hotel Digital Marketing",
          desc: "Dedicated hospitality acquisition combining Hotel SEO, Google Ads, Meta retargeting, and commission-free PMS booking tracking.",
          link: "/en/hotel-digital-marketing"
        },
        {
          title: "AI Search & GEO Optimization",
          desc: "We format and structure your digital assets using modern schemas to ensure your Moroccan business is prominently cited as the prime authority in ChatGPT and Gemini search queries.",
          link: "/en/services/ai-seo-optimization"
        }
      ],
      nearbyLocationsTitle: "Regional Economic Hubs",
      nearbyLocations: [
        {
          title: "Casablanca Hub",
          desc: "Corporate B2B, local SEO, and business web development in Casablanca.",
          link: "/en/locations/casablanca"
        },
        {
          title: "Marrakech Hub",
          desc: "Hospitality marketing, Riad SEO, and tourism growth in Marrakech.",
          link: "/en/locations/marrakech"
        },
        {
          title: "Rabat Hub",
          desc: "Institutional, government, and B2B services in the capital city.",
          link: "/en/locations/rabat"
        },
        {
          title: "Agadir Hub",
          desc: "Resort marketing, coastal hotel SEO, and excursion lead generation.",
          link: "/en/locations/agadir"
        }
      ],
      faqs: [
        {
          q: "What makes Urunk the leading SEO agency in Morocco?",
          a: "Our combination of senior web performance engineering, deep understanding of Moroccan search intent in English and French, and proven ROI for tourism and B2B clients."
        },
        {
          q: "Do you serve clients in all cities across Morocco?",
          a: "Yes. While our primary hubs are Casablanca and Marrakech, we manage digital growth for brands in Rabat, Tangier, Agadir, Fes, Essaouira, and Ouarzazate."
        }
      ]
    },
    fr: {
      title: "Agence Web, SEO & Acquisition au Maroc | Hub Urunk",
      description: "Couverture nationale Urunk au Maroc (Casablanca, Marrakech, Rabat, Agadir, Tanger) : création de sites web React, SEO national et acquisition client.",
      heroTitle: "Pôle National d'Ingénierie Web, SEO & Acquisition Client au Maroc",
      heroSub: "Avec une population nationale de plus de 37,5 millions d'habitants et un taux de pénétration internet de 88,1 %, le Maroc vit une transition digitale historique. Nous aidons les leaders du Royaume à s'imposer sur Google.",
      calloutTitle: "Présence Digitale Nationale & Performance",
      calloutBody: "Notre agence déploie ses experts à Casablanca, Marrakech, Rabat, Agadir et Tanger pour imposer l'autorité digitale des PME et acteurs touristiques marocains.",
      overviewTitle: "Propulser la Modernisation Digitale et l'Autorité Organique à Travers le Royaume du Maroc",
      overviewText1: "Le Royaume du Maroc s'est imposé comme le carrefour économique et industriel incontournable de l'Afrique du Nord et l'une des destinations phares du tourisme mondial, enregistrant un record historique de 17,4 millions d'arrivées touristiques en 2024. Porté par une population de plus de 37,5 millions d'habitants et un taux de pénétration d'internet de 88,1 %, le paysage commercial marocain connaît une transition numérique sans précédent. Des grands sièges d'affaires de Casablanca et des ministères de Rabat aux riads de charme de Marrakech et aux grands resorts côtiers d'Agadir, l'acquisition de clients s'effectue désormais en ligne. Cette digitalisation accélérée engendre une compétition intense sur Google, où figurer en première page est devenu un impératif de survie commerciale et de développement.",
      overviewText2: "L'intention de recherche au Maroc est unique et complexe, s'exprimant de manière multilingue (français, arabe et anglais) selon les secteurs d'activité et les audiences ciblées. Les touristes internationaux recherchent en anglais et allemand des séjours de luxe, les directeurs d'achats évaluent leurs partenaires industriels en français, tandis que les consommateurs locaux plébiscitent les formats visuels et l'arabe. Face à cette pluralité, les sites web génériques lents ou les approches marketing standardisées échouent à capter l'intérêt et à instaurer la confiance. Urunk associe une ingénierie informatique de pointe (développement web sur-mesure sous React et Vite dès 12 000 MAD) à un SEO international d'autorité et une gestion experte de vos budgets publicitaires (campagnes dès 4 000 MAD/mois) pour propulser durablement les entreprises marocaines.",
      whyPartnerTitle: "Pourquoi les Entreprises Marocaines ont Besoin d'un Partenaire Technique de Proximité",
      whyPartnerText: "S'imposer durablement sur le marché digital marocain requiert un partenaire de confiance associant expertise de programmation moderne, connaissance intime du tissu d'affaires local et maîtrise parfaite des normes de conformité réglementaire nationales (conformité CNDP pour la protection des données personnelles). Les agences offshore ou les développeurs freelances ne disposent pas de l'ancrage et de la vision globale nécessaires pour synchroniser des passerelles de paiement électronique (CMI, Stripe) ou optimiser des campagnes selon la saisonnalité touristique du Royaume. Urunk offre cette expertise d'élite de bout en bout pour faire du web votre principal levier de croissance.",
      marketHighlightsTitle: "Pourquoi Choisir Urunk au Maroc",
      marketHighlights: [
        "Couverture nationale complète avec stratégies adaptées à Casablanca, Marrakech, Rabat, Agadir et Tanger.",
        "Expertise ciblée sur les secteurs stratégiques : Hôtellerie, Tourisme, PME/B2B et E-commerce.",
        "Développement web haute performance sous React avec chargement en moins d'une seconde.",
        "Rapports 100% transparents sur le ROI, le positionnement des mots-clés et les conversions."
      ],
      localServicesTitle: "Nos Services au Maroc",
      localServices: [
        {
          title: "SEO National d'Autorité",
          desc: "Nous optimisons vos plateformes web pour vous imposer en première position sur Google face aux recherches d'achats à fort volume au Maroc.",
          link: "/agence-seo-maroc"
        },
        {
          title: "Ingénierie Web sous React",
          desc: "Nous concevons des sites internet d'une rapidité absolue sous React, hautement sécurisés et optimisés pour offrir un parcours utilisateur fluide sur mobile.",
          link: "/agence-web-maroc"
        },
        {
          title: "Campagnes Google Ads de Précision",
          desc: "Nous concevons et optimisons des campagnes Google Ads ciblées pour capter instantanément les flux de demandes qualifiées des décideurs et acheteurs nationaux.",
          link: "/google-ads-maroc"
        },
        {
          title: "Marketing Digital Hôtelier",
          desc: "Stratégie complète dédiée aux hôtels et riads au Maroc : SEO local, Google Ads, Meta Ads et suivi PMS des réservations directes sans commission.",
          link: "/marketing-digital-hotelier"
        },
        {
          title: "Optimisation Moteurs IA (AEO)",
          desc: "Nous balisons vos données web pour veiller à ce que votre marque soit citée en priorité par les nouveaux moteurs d'Intelligence Artificielle comme ChatGPT et Gemini.",
          link: "/services/ai-seo-optimization"
        }
      ],
      nearbyLocationsTitle: "Pôles Économiques Régionaux",
      nearbyLocations: [
        {
          title: "Hub Casablanca",
          desc: "Services B2B, SEO local et création web pour entreprises à Casablanca.",
          link: "/zones/casablanca"
        },
        {
          title: "Hub Marrakech",
          desc: "Marketing hôtelier, SEO Riad et croissance touristique à Marrakech.",
          link: "/zones/marrakech"
        },
        {
          title: "Hub Rabat",
          desc: "Services aux institutions, entreprises et PME dans la capitale.",
          link: "/zones/rabat"
        },
        {
          title: "Hub Agadir",
          desc: "Marketing de résidences, SEO d'hôtels côtiers et excursions à Agadir.",
          link: "/zones/agadir"
        }
      ],
      faqs: [
        {
          q: "Pourquoi choisir Urunk pour votre référencement SEO au Maroc ?",
          a: "Grâce à notre maîtrise technique du web, notre expertise en SEO multilingue (FR/EN) et notre historique de résultats probants pour les hôtels et PME."
        },
        {
          q: "Intervenez-vous dans toutes les villes du Maroc ?",
          a: "Oui, nos pôles principaux sont Casablanca et Marrakech, mais nous accompagnons des clients à Rabat, Tanger, Agadir, Fès, Essaouira et Ouarzazate."
        }
      ]
    },
    uniqueIntroByService: {
      'hotel-seo': { fr: "", en: "" },
      'hotel-website-design': { fr: "", en: "" },
      'direct-booking': { fr: "", en: "" },
      'seo-morocco': { fr: "", en: "" },
      'google-ads-morocco': { fr: "", en: "" }
    },
    marketStats: [
      {
        label: { fr: "Arrivées Touristiques Nationales (2024)", en: "National Tourist Arrivals (2024)" },
        value: "17.4M+"
      },
      {
        label: { fr: "Nuitées Hôtelières Classées", en: "Classified Hotel Overnights" },
        value: "25M+"
      },
      {
        label: { fr: "Taux de Pénétration Internet", en: "Internet Penetration Rate" },
        value: "88.1%"
      },
      {
        label: { fr: "Recherche Mobile Tourisme", en: "Mobile Tourism Search Share" },
        value: "74%"
      }
    ],
    faqByService: {
      'hotel-seo': [
        {
          q: {
            fr: "Combien de temps faut-il pour qu'un hôtel se positionne au Maroc ?",
            en: "How long does it take for a hotel in Morocco to achieve top search rankings?"
          },
          a: {
            fr: "En général, 3 à 6 mois sont nécessaires pour constater une augmentation substantielle du trafic organique et des réservations directes.",
            en: "Typically, 3 to 6 months are required to see substantial increases in direct organic traffic and commission-free bookings."
          }
        }
      ]
    }
  },
  'casablanca': {
    en: {
      title: "B2B SEO & Digital Marketing Agency Casablanca | Urunk",
      description: "Leading digital marketing, local SEO, and custom corporate web design agency in Casablanca, Morocco. Specialized in B2B lead generation & Google Business Profiles.",
      heroTitle: "Corporate B2B SEO, Local Search & Web Design in Casablanca",
      heroSub: "With a population of over 3.4 million, Casablanca is the absolute economic hub and financial center of Morocco. We help corporate SMEs and industrial leaders secure market leadership through precision B2B search visibility and React engineering.",
      calloutTitle: "Casablanca Corporate Lead Generation",
      calloutBody: "From Casablanca Finance City to Aïn Sebaâ, we help B2B firms generate highly qualified contract inquiries and lower lead acquisition costs by -35%.",
      overviewTitle: "Casablanca Corporate Landscape: Driving B2B Lead Acquisition and Tech Authority",
      overviewText1: "Casablanca is Morocco's economic beating heart and the primary gateway for international commerce across North and West Africa. Boasting a massive metropolitan population of over 3.4 million residents (exceeding 4.2 million in the greater region), the city represents over 32% of the country's national GDP. It hosts the prestigious Casablanca Finance City (CFC) district, global corporate headquarters, consulting conglomerates, legal practices, and major industrial zones such as Aïn Sebaâ, Sidi Maârouf, and Mohammedia. Because of this concentrated economic density, the commercial and industrial competition is fierce. Local internet penetration has reached a robust 90% in urban areas, which means corporate buyers, procurement directors, and business executives rely almost exclusively on digital search engines to discover, evaluate, and choose B2B suppliers, logistics partners, and professional service agencies.",
      overviewText2: "The local search intent in Casablanca is highly transaction-oriented and professional, with decision-makers querying search engines primarily in French and English for technical capabilities, product sheets, and verified corporate references. In this demanding climate, a generic template website or a slow-loading platform acts as a major security and trust vulnerability, driving key clients straight to digital-first competitors. Furthermore, with the rapid rise of AI search platforms (like ChatGPT, Gemini, and Perplexity), corporate entities in Casablanca must adopt modern Answer Engine Optimization (GEO) strategies to ensure they are cited as the leading authority in their industrial or service category. Urunk designs custom, secure React-based corporate websites starting at 12,000 MAD and implements targeted B2B SEO and high-ROI Google Search Ads to capture high-value enterprise contract inquiries and deliver predictable pipeline growth.",
      whyPartnerTitle: "Why Casablanca Corporate Entities Need a Localized Digital Specialist",
      whyPartnerText: "The B2B sector in Casablanca operates under strict compliance standards, professional protocols, and specific multi-cultural business practices that generalist global agencies fail to comprehend. To successfully acquire enterprise-tier contracts, you need a technical partner familiar with Moroccan B2B buyer psychology, local data privacy regulations (CNDP compliance), and regional search behaviors. Urunk delivers this specialized expertise. We understand how to optimize for both high-level executive decision-makers and technical engineers, ensuring that your digital footprint reflects the absolute security, high speed, and market authority required to dominate the Casablanca business ecosystem.",
      marketHighlightsTitle: "Casablanca Local Market Capabilities",
      marketHighlights: [
        "Rank #1 on Google Maps in Casablanca for local services and retail.",
        "High-converting corporate web design engineered with modern React technology.",
        "Targeted B2B lead generation targeting Casablanca corporate buyers.",
        "Multilingual SEO optimized for French and English business intent."
      ],
      localServicesTitle: "Our Services in Casablanca",
      localServices: [
        {
          title: "B2B SEO & Organic Authority",
          desc: "We optimize your corporate portal for high-volume, industry-specific keywords, positioning your brand at the absolute top of Google search results for Casablanca B2B buyers.",
          link: "/en/seo-agency-casablanca"
        },
        {
          title: "Corporate React Web Development",
          desc: "We build secure, blazing-fast, and fully responsive websites under React that eliminate vulnerabilities, load instantly, and establish enterprise-level trust.",
          link: "/en/web-design-casablanca"
        },
        {
          title: "Google Search & LinkedIn Ads",
          desc: "We manage highly targeted paid campaigns directed at key corporate decision-makers, purchasing managers, and business owners in Casablanca and Rabat.",
          link: "/en/google-ads-morocco"
        },
        {
          title: "Google Business Profile Optimization",
          desc: "We optimize your Google Maps listings for Casablanca's polycentric neighborhoods (Sidi Maarouf, Gauthier, CFC), ensuring your offices rank in the Top 3 Local Pack.",
          link: "/en/services/google-business-profile"
        },
        {
          title: "AI Search & GEO Strategy",
          desc: "We structure and format your digital assets using advanced schema and authoritative data to ensure your brand is cited as the prime authority in AI search engines.",
          link: "/en/services/ai-seo-optimization"
        }
      ],
      nearbyLocationsTitle: "Other Geographic Hubs",
      nearbyLocations: [
        {
          title: "Morocco (National)",
          desc: "Full national agency footprint across the Kingdom of Morocco.",
          link: "/en/locations/morocco"
        },
        {
          title: "Marrakech Hub",
          desc: "Tourism, hotel, and Riad digital marketing in Marrakech.",
          link: "/en/locations/marrakech"
        },
        {
          title: "Rabat Hub",
          desc: "Governmental, administrative, and corporate B2B services in Rabat.",
          link: "/en/locations/rabat"
        }
      ],
      faqs: [
        {
          q: "How does Local SEO in Casablanca differ from national SEO?",
          a: "Local SEO focuses specifically on proximity ranking signals, Google Maps local pack visibility, and local review trust in Casablanca neighborhoods."
        },
        {
          q: "Can Urunk help B2B companies in Casablanca generate inbound qualified leads?",
          a: "Yes. Our campaigns combine high-intent Google Search Ads with dedicated landing pages designed to capture corporate contract inquiries."
        }
      ]
    },
    fr: {
      title: "Agence Web & SEO B2B Casablanca | Hub Commercial Urunk",
      description: "Agence SEO B2B leader, référencement local Google Maps et création de sites web d'entreprises à Casablanca, Maroc. Spécialiste acquisition de leads professionnels.",
      heroTitle: "SEO B2B, Référencement Local & Agence Web à Casablanca",
      heroSub: "Avec une population de plus de 3,4 millions d'habitants, Casablanca concentre l'activité économique et financière du Maroc. Nous aidons les PME et grands groupes à s'imposer sur Google grâce à des architectures React de pointe.",
      calloutTitle: "Génération de Leads Professionnels à Casablanca",
      calloutBody: "De Casablanca Finance City à Aïn Sebaâ, nous aidons les entreprises B2B à capter des contrats qualifiés et à maîtriser leurs coûts d'acquisition.",
      overviewTitle: "Écosystème d'Affaires à Casablanca : Dominer l'Acquisition B2B et l'Autorité Technologique",
      overviewText1: "Casablanca est le poumon économique indiscutable du Royaume et la principale porte d'entrée financière de l'Afrique du Nord et de l'Ouest. Abritant une population métropolitaine de plus de 3,4 millions d'habitants (plus de 4,2 millions pour le Grand Casablanca), la métropole génère à elle seule plus de 32 % du PIB national. Elle concentre le quartier d'affaires d'envergure internationale Casablanca Finance City (CFC), les sièges sociaux des multinationales, les cabinets de conseil, les études juridiques majeures et des zones industrielles de premier plan telles que Aïn Sebaâ, Sidi Maârouf et Mohammedia. Cette densité économique exceptionnelle engendre une concurrence commerciale et industrielle extrêmement rude. Le taux de pénétration internet y atteint 90 % en zone urbaine, incitant les directeurs d'achats, les décideurs et les chefs d'entreprises à s'appuyer massivement sur les moteurs de recherche pour découvrir et évaluer leurs futurs partenaires B2B.",
      overviewText2: "Le comportement de recherche locale à Casablanca est hautement transactionnel et technique, les décideurs formulant des requêtes précises principalement en français et en anglais pour trouver des solutions industrielles, de l'ingénierie ou du conseil juridique. Dans ce contexte d'affaires exigeant, un site web lent, obsolète ou mal sécurisé dégrade instantanément l'image de marque et pousse les prospects vers la concurrence. De plus, face à l'essor fulgurant des moteurs de recherche basés sur l'Intelligence Artificielle (ChatGPT, Gemini, Perplexity), les entreprises casablancaises doivent optimiser leur présence pour l'AEO (Answer Engine Optimization) afin d'être citées comme la référence de leur secteur. Urunk conçoit des portails web en React ultra-sécurisés (dès 12 000 MAD) et déploie des stratégies SEO B2B et des campagnes de recherche Google Ads pour capter les demandes de devis d'affaires et garantir une croissance prévisible de votre pipeline.",
      whyPartnerTitle: "Pourquoi les Groupes de Casablanca ont Besoin d'un Spécialiste Digital Local",
      whyPartnerText: "Le secteur corporatif et industriel à Casablanca est régi par des normes de conformité strictes (notamment la réglementation CNDP sur la protection des données personnelles) et des logiques commerciales multiculturelles. Pour s'adresser efficacement aux décideurs et ingénieurs locaux, une simple présence digitale standardisée ne suffit pas. Il vous faut un partenaire technologique local capable d'allier rigueur de développement web (architecture React sécurisée éliminant les vulnérabilités classiques de WordPress) et stratégies SEO pointues adaptées au marché marocain. Urunk met à votre disposition cette expertise de pointe pour faire de votre site un actif stratégique d'acquisition B2B incontournable.",
      marketHighlightsTitle: "Atouts pour les Entreprises à Casablanca",
      marketHighlights: [
        "Positionnement prioritaire sur Google Maps à Casablanca pour les services locaux.",
        "Création de sites d'entreprises modernes sous technologie React.",
        "Génération de prospects B2B ciblant les décideurs casablancais.",
        "SEO multilingue optimisé pour les recherches en français et anglais."
      ],
      localServicesTitle: "Nos Services à Casablanca",
      localServices: [
        {
          title: "SEO B2B & Autorité Organique",
          desc: "Nous positionnons votre marque en tête de Google sur les requêtes stratégiques de services et produits industriels formulées par les acheteurs d'affaires.",
          link: "/agence-seo-casablanca"
        },
        {
          title: "Création de Sites Web React Corporate",
          desc: "Nous concevons des portails web d'affaires sous React rapides, esthétiques et d'une sécurité maximale pour instaurer une confiance immédiate avec vos grands comptes.",
          link: "/agence-web-maroc"
        },
        {
          title: "Gestion Publicitaire Google & LinkedIn",
          desc: "Nous concevons et optimisons des campagnes publicitaires à fort ciblage pour toucher directement les cadres dirigeants et acheteurs industriels de Casablanca.",
          link: "/google-ads-maroc"
        },
        {
          title: "Optimisation Google Business Profile",
          desc: "Nous positionnons vos bureaux physiques dans le Top 3 Maps sur les recherches de proximité dans les quartiers phares (Sidi Maarouf, Gauthier, CFC).",
          link: "/services/google-business-profile"
        },
        {
          title: "Optimisation pour Moteurs IA (AEO)",
          desc: "Nous balisons vos données web pour veiller à ce que votre marque soit citée en priorité par les nouveaux moteurs d'Intelligence Artificielle comme ChatGPT et Gemini.",
          link: "/services/ai-seo-optimization"
        }
      ],
      nearbyLocationsTitle: "Autres Hubs Régionaux",
      nearbyLocations: [
        {
          title: "Maroc (National)",
          desc: "Couverture nationale globale sur l'ensemble du Royaume.",
          link: "/zones/maroc"
        },
        {
          title: "Hub Marrakech",
          desc: "Marketing hôtelier, SEO Riad et tourisme à Marrakech.",
          link: "/zones/marrakech"
        },
        {
          title: "Hub Rabat",
          desc: "Services aux institutions et entreprises B2B à Rabat.",
          link: "/zones/rabat"
        }
      ],
      faqs: [
        {
          q: "Quelle est la différence entre le SEO local à Casablanca et le SEO national ?",
          a: "Le SEO local vise spécifiquement la visibilité sur Google Maps et les requêtes géolocalisées dans les différents quartiers de Casablanca."
        },
        {
          q: "Comment Urunk aide les PME de Casablanca à générer des prospects qualifiés ?",
          a: "En combinant des campagnes Google Search ciblées et des pages d'atterrissage optimisées pour la prise de contact B2B."
        }
      ]
    },
    uniqueIntroByService: {
      'hotel-seo': { fr: "", en: "" },
      'hotel-website-design': { fr: "", en: "" },
      'web-design-casablanca': { fr: "", en: "" },
      'local-seo-casablanca': { fr: "", en: "" },
      'google-ads-morocco': { fr: "", en: "" }
    },
    marketStats: [
      {
        label: { fr: "Contribution au PIB National", en: "Contribution to National GDP" },
        value: "32.4%"
      },
      {
        label: { fr: "Sièges d'Entreprises B2B & Multinationales", en: "B2B & Corporate Headquarters" },
        value: "60%+"
      },
      {
        label: { fr: "Trafic Voyageurs d'Affaires & Événements", en: "Business Travel & MICE Share" },
        value: "45%"
      },
      {
        label: { fr: "Recherches B2B Locales sur Mobile", en: "Mobile Local B2B Searches" },
        value: "68%"
      }
    ],
    faqByService: {
      'local-seo-casablanca': [
        {
          q: {
            fr: "Pourquoi le SEO local à Casablanca nécessite-t-il une approche par quartier ?",
            en: "Why does local SEO in Casablanca require a district-specific strategy?"
          },
          a: {
            fr: "Casablanca est une métropole polycentrique où la concurrence sur le Pack Local Google Maps varie fortement entre Casablanca Finance City, Gauthier, Aïn Sebaâ et Sidi Maârouf.",
            en: "Casablanca is a polycentric metropolis where Google Maps local pack competition varies heavily between Finance City, Gauthier, Ain Sebaa, and Sidi Maarouf."
          }
        }
      ]
    }
  },
  'marrakech': {
    en: {
      title: "Hotel & Riad Digital Marketing Marrakech | Urunk",
      description: "Leading digital marketing and web design agency in Marrakech. Specialized in Riad SEO, local search visibility, and Google Hotel Ads optimization.",
      heroTitle: "Digital Growth, Web Engineering & SEO in Marrakech",
      heroSub: "With a population of over 1 million people and representing the beating heart of Moroccan tourism, Marrakech hosts a hyper-competitive hospitality ecosystem. We engineer fast websites and deploy localized SEO to bypass high third-party commissions.",
      calloutTitle: "Bypassing OTA Commissions in Marrakech",
      calloutBody: "Reduce dependency on platforms like Booking.com, TripAdvisor, and Airbnb. We boost direct bookings with custom PMS integrations and local Medina search authority.",
      overviewTitle: "Marrakech Digital Maturity: Transitioning from Medina Heritage to Web-Scale Growth",
      overviewText1: "Marrakech is the undisputed capital of Moroccan tourism, welcoming over 3.5 million international arrivals annually to its world-famous historic Medina, Gueliz modern district, and luxury resorts in the Palmeraie. With an estimated local population exceeding 1 million residents, the city's economic vitality is deeply linked to hospitality, boutique crafts, real estate, and excursion services. This extreme saturation means that over 1,500 active boutique guest houses (Riads) and hotels are actively bidding for the attention of global travelers. However, despite high internet penetration of over 85% among tourists and local businesses alike, many Marrakech-based hospitality operators remain heavily dependent on high-commission Online Travel Agencies (OTAs) such as Booking.com and Expedia. These major platforms charge anywhere from 18% to 25% commission on every transaction, severely reducing the net profit margins and direct customer relationship of local hospitality brands.",
      overviewText2: "In this high-stakes digital environment, traditional word-of-mouth and simple social media postings are no longer sufficient to secure steady year-round occupancy. Modern luxury travelers from the United Kingdom, France, Germany, and the United States conduct detailed mobile search queries (making up over 74% of local travel searches) weeks before setting foot in Morocco. If a Riad or tour company does not appear in the coveted Google Maps Local Pack for highly profitable terms like 'best boutique riad Marrakech medina' or 'private desert tour from Marrakech', they are practically invisible. Furthermore, legacy website designs that load slowly, fail on mobile browsers, or lack a secure multilingual direct booking interface (English, French, and German) suffer from massive booking abandonment rates. Urunk designs custom React-engineered web architectures that load in under 1 second, optimize Google Hotel Ads campaigns, and construct local SEO authority to turn digital visitors into direct, commission-free guests.",
      whyPartnerTitle: "Why Marrakech Businesses Need a Digital Partner Grounded in Morocco",
      whyPartnerText: "Successfully navigating Marrakech's unique business landscape requires far more than generic digital templates. You need a dedicated technical partner with a deep, intuitive understanding of Moroccan search behaviors, multilingual target demographics, regional seasonal tourist shifts (such as Marrakech peaking in spring and autumn), and the precise technical constraints of local payment gateways (like the CMI) and popular property management systems (PMS) such as Cloudbeds, SitesMinder, and Amenitiz. A local agency like Urunk understands how to translate Medina charm into high-converting digital assets, ensuring that your marketing spend is optimized for actual high-margin revenue rather than empty traffic.",
      marketHighlightsTitle: "Marrakech Specialized Capabilities",
      marketHighlights: [
        "Hyper-local Medina SEO targeting travelers looking for authentic Riad stays.",
        "Direct booking engine CRO that reduces reliance on Booking.com and Airbnb.",
        "TripAdvisor and Google Hotel Ads campaigns managed for peak occupancy.",
        "Visual web design showcasing architectural heritage, pools, and rooftops."
      ],
      localServicesTitle: "Our Services in Marrakech",
      localServices: [
        {
          title: "Marrakech Riad & Hotel SEO",
          desc: "We optimize your web assets for high-intent long-tail keywords in English, French, and German, outranking massive international travel portals and positioning your Riad directly in the Top 3 of Google Maps.",
          link: "/en/riad-seo-marrakech"
        },
        {
          title: "High-Performance Website Design",
          desc: "We design and develop custom React-based websites with sub-second page loading speeds, immersive visual galleries, and secure, friction-free booking interfaces designed specifically for mobile devices.",
          link: "/en/riad-website-design-marrakech"
        },
        {
          title: "Google Hotel & TripAdvisor Ads",
          desc: "We setup, monitor, and optimize paid Google Hotel Ads and TripAdvisor campaigns that sync dynamically with your live room inventory to capture active booking intent.",
          link: "/en/services/tripadvisor-ads"
        },
        {
          title: "OTA Commission Optimization",
          desc: "We execute direct booking strategies and integrate property management systems (PMS) to redirect traffic from Booking.com directly to your website, saving thousands of MAD in commission fees.",
          link: "/en/hotel-seo"
        },
        {
          title: "Multilingual Content Strategy",
          desc: "We write and optimize search-ready multilingual content tailored to international travelers, conveying the luxury, craftsmanship, and historic soul of your Marrakech venue.",
          link: "/en/services/ai-seo-optimization"
        }
      ],
      nearbyLocationsTitle: "Other Geographic Hubs",
      nearbyLocations: [
        {
          title: "Morocco (National)",
          desc: "Full agency footprint across the Kingdom of Morocco.",
          link: "/en/locations/morocco"
        },
        {
          title: "Casablanca Hub",
          desc: "Corporate B2B, local SEO, and business web development.",
          link: "/en/locations/casablanca"
        },
        {
          title: "Agadir Hub",
          desc: "Coastal resorts, surf lodges, and excursion tour marketing.",
          link: "/en/locations/agadir"
        }
      ],
      faqs: [
        {
          q: "Why is specialized digital marketing essential for a Riad in Marrakech?",
          a: "The Marrakech Medina hosts over 1,500 guest houses. Standard marketing fails to stand out against OTAs, whereas specialized Riad SEO captures direct bookings."
        },
        {
          q: "Can Urunk manage both web design and advertising for a Marrakech tourism brand?",
          a: "Yes. We offer complete packages that include custom web development, SEO, Google Ads, and social media advertising."
        }
      ]
    },
    fr: {
      title: "Agence Marketing Hôtelier & Riad Marrakech | Hub Urunk Marrakech",
      description: "Agence digitale spécialiste à Marrakech pour Riads, hôtels de luxe, tour-opérateurs et restaurants. SEO Riad, création web et réservations directes.",
      heroTitle: "Croissance Digitale, Ingénierie Web & SEO à Marrakech",
      heroSub: "Avec une population de plus d'un million d'habitants et constituant le cœur touristique du Maroc, Marrakech exige un écosystème hôtelier extrêmement compétitif. Nous concevons des sites web ultra-rapides et des stratégies SEO pour réduire vos commissions.",
      calloutTitle: "Réduire les Commissions OTA à Marrakech",
      calloutBody: "Libérez-vous de l'emprise de Booking.com, TripAdvisor et Airbnb. Développez vos réservations directes grâce à nos intégrations PMS et notre visibilité locale.",
      overviewTitle: "Maturité Digitale de Marrakech : Entre Tradition et Innovation Web",
      overviewText1: "Marrakech est incontestablement la capitale touristique du Royaume, accueillant chaque année plus de 3,5 millions de visiteurs internationaux au cœur de sa médina millénaire, du quartier moderne de Guéliz et des resorts prestigieux de la Palmeraie. Avec une population locale de plus de 1 million d'habitants, l'économie régionale dépend en grande partie de l'hôtellerie, de l'artisanat de luxe, de l'immobilier et des excursions touristiques. Cette attractivité génère une concurrence intense, illustrée par la présence de plus de 1 500 riads et maisons d'hôtes actifs luttant pour capter l'attention des voyageurs. Toutefois, malgré un taux de pénétration internet supérieur à 85 % parmi les visiteurs et les commerçants locaux, beaucoup d'établissements restent dépendants des plateformes de réservation en ligne (OTA) comme Booking.com et Expedia, qui prélèvent des commissions exorbitantes de 18 % à 25 % par séjour, réduisant significativement leur rentabilité nette.",
      overviewText2: "Dans cet environnement hautement concurrentiel, le simple bouche-à-oreille et des publications basiques sur les réseaux sociaux ne suffisent plus à garantir un taux d'occupation stable toute l'année. Les voyageurs de luxe (européens, américains et du Moyen-Orient) effectuent des recherches mobiles rigoureuses (représentant 74 % des recherches hôtelières à Marrakech) plusieurs semaines avant leur départ. Si votre riad n'apparaît pas dans le Top 3 de Google Maps (Local Pack) sur des requêtes stratégiques comme « meilleur riad de charme marrakech médina », il perd toute visibilité. De plus, les sites web lents, non adaptés aux smartphones ou dépourvus de moteurs de réservation multilingues sécurisés (FR, EN, DE) entraînent un abandon immédiat du panier d'achat. Urunk développe des architectures web réactives sous React, chargeant en moins de 1 seconde, et orchestre des campagnes Google Ads et de référencement naturel d'autorité pour transformer ces visiteurs digitaux en clients directs.",
      whyPartnerTitle: "Pourquoi les Entreprises de Marrakech ont Besoin d'un Partenaire Digital Local",
      whyPartnerText: "Pour s'imposer sur le marché complexe de Marrakech, les solutions génériques préconçues ne suffisent pas. Il est indispensable de s'entourer d'un partenaire technique disposant d'une expertise fine du comportement de recherche au Maroc, de la forte saisonnalité touristique locale (les pics d'activité du printemps et de l'automne) et des protocoles de paiement électronique nationaux (CMI) et internationaux (Stripe), tout en maîtrisant les intégrations de PMS majeurs comme Cloudbeds ou SiteMinder. Urunk associe rigueur d'ingénierie et sensibilité culturelle marocaine pour concevoir des campagnes sur-mesure qui protègent vos marges opérationnelles et captent une clientèle internationale haut de gamme.",
      marketHighlightsTitle: "Atouts Spécifiques pour Marrakech",
      marketHighlights: [
        "SEO ultra-local pour la médina ciblant les voyageurs en quête de séjours authentiques.",
        "Optimisation de la réservation directe pour réduire la dépendance à Booking.com et Airbnb.",
        "Gestion de campagnes TripAdvisor Ads et Google Hotel Ads pour maximiser l'occupation.",
        "Design web sublimant les cours intérieures, patios, bassins et rooftops."
      ],
      localServicesTitle: "Nos Services à Marrakech",
      localServices: [
        {
          title: "SEO Riad & Hôtel Marrakech",
          desc: "Nous positionnons le site officiel de votre établissement au-dessus des géants de l'intermédiation sur Google en ciblant des requêtes de niche hautement rentables.",
          link: "/seo-riad-marrakech"
        },
        {
          title: "Création de Sites Web Haute Performance",
          desc: "Nous concevons des portails web d'exception sous React, rapides, sécurisés et pensés pour sublimer l'architecture et l'expérience utilisateur sur mobile.",
          link: "/site-web-riad-marrakech"
        },
        {
          title: "Publicités Google Hotel & TripAdvisor Ads",
          desc: "Nous programmons et gérons des campagnes d'acquisition payantes connectées en temps réel à votre inventaire de chambres pour capter les voyageurs qualifiés.",
          link: "/services/tripadvisor-ads"
        },
        {
          title: "Optimisation de Réservation Directe",
          desc: "Nous connectons et paramétrons vos moteurs de réservation pour simplifier le parcours de paiement des clients et contourner les commissions Booking.com.",
          link: "/seo-hotel"
        },
        {
          title: "Création de Contenu Multilingue SEO",
          desc: "Nous rédigeons du contenu haut de gamme optimisé pour le SEO en français, anglais et allemand, valorisant l'authenticité et le luxe de votre établissement.",
          link: "/services/ai-seo-optimization"
        }
      ],
      nearbyLocationsTitle: "Autres Hubs Régionaux",
      nearbyLocations: [
        {
          title: "Maroc (National)",
          desc: "Présence globale sur l'ensemble du territoire national.",
          link: "/zones/maroc"
        },
        {
          title: "Hub Casablanca",
          desc: "Services aux entreprises, SEO local et création web B2B.",
          link: "/zones/casablanca"
        },
        {
          title: "Hub Agadir",
          desc: "Marketing de résidences côtières et tour-opérateurs.",
          link: "/zones/agadir"
        }
      ],
      faqs: [
        {
          q: "Pourquoi un marketing spécialisé est-il indispensable pour un Riad à Marrakech ?",
          a: "Avec plus de 1 500 riads dans la médina, un marketing générique ne suffit plus à se démarquer des plateformes d'intermédiation."
        },
        {
          q: "Urunk peut-il gérer le site web et la publicité pour un établissement à Marrakech ?",
          a: "Oui, nous proposons des formules clé en main incluant développement web, SEO, Google Ads et gestion des réseaux sociaux."
        }
      ]
    },
    uniqueIntroByService: {
      'hotel-seo': { fr: "", en: "" },
      'hotel-website-design': { fr: "", en: "" },
      'riad-seo-marrakech': { fr: "", en: "" },
      'riad-website-design-marrakech': { fr: "", en: "" },
      'direct-booking': { fr: "", en: "" },
      'google-ads-morocco': { fr: "", en: "" },
      'tripadvisor-ads': {
        fr: "Notre expertise TripAdvisor Ads à Marrakech propulse votre riad ou hôtel de charme en tête des placements sponsorisés de la Médina, de Guéliz et de la Palmeraie pour rediriger les voyageurs directement vers votre moteur de réservation sans commission.",
        en: "Our TripAdvisor Ads expertise in Marrakech places your Medina riad or boutique hotel at the top of Sponsored Placements, routing high-intent international travelers directly to your commission-free booking engine."
      },
      'meta-ads': {
        fr: "Notre expertise Meta Ads à Marrakech (Instagram et Facebook) transforme l'architecture de votre riad, hôtel ou table gastronomique en réservations directes grâce à des campagnes vidéo immersives et un retargeting précis des voyageurs européens et nord-américains.",
        en: "Our Meta Ads expertise in Marrakech (Instagram and Facebook) turns your riad, boutique hotel, or luxury hospitality brand into direct bookings through immersive Reels funnels and precision traveler retargeting."
      }
    },
    marketStats: [
      {
        label: { fr: "Riads et Maisons d'Hôtes en Médina", en: "Medina Riads & Boutique Stays" },
        value: "1,500+"
      },
      {
        label: { fr: "Part des Nuitées Hôtelières Nationales", en: "Share of National Hotel Overnights" },
        value: "40%+"
      },
      {
        label: { fr: "Commission Moyenne Payée aux OTAs", en: "Average Commission Paid to OTAs" },
        value: "18% – 25%"
      },
      {
        label: { fr: "Recherches Hébergement Internationales", en: "International Lodging Searches" },
        value: "82%"
      }
    ],
    faqByService: {
      'riad-seo-marrakech': [
        {
          q: {
            fr: "Comment un riad peut-il rivaliser avec Booking.com sur Google à Marrakech ?",
            en: "How can a Marrakech riad outrank Booking.com on Google search?"
          },
          a: {
            fr: "En ciblant des requêtes expérientielles de longue traîne, en optimisant la fiche Google Business Profile et en proposant un meilleur tarif direct.",
            en: "By targeting experiential long-tail search intent, optimizing the Google Business Profile, and guaranteeing best direct booking incentives."
          }
        }
      ],
      'meta-ads': [
        {
          q: {
            fr: "Quel budget prévoir pour une campagne Meta Ads d'hôtel ou riad à Marrakech ?",
            en: "What media budget is recommended for hotel or riad Meta Ads in Marrakech?"
          },
          a: {
            fr: "Pour générer un flux régulier de réservations directes à Marrakech via Instagram et Facebook, nous recommandons un budget média de 3 000 à 6 000 MAD/mois ciblant les voyageurs en France, au Royaume-Uni, en Espagne et aux États-Unis, associé au suivi Meta Pixel sur votre moteur PMS.",
            en: "To drive consistent direct bookings in Marrakech via Instagram and Facebook Meta Ads, we recommend a 3,000 to 6,000 MAD/month ad spend targeting travelers in the UK, France, Germany, and the US, paired with full PMS conversion tracking."
          }
        },
        {
          q: {
            fr: "Comment vos publicités Meta Ads à Marrakech évitent-elles de renvoyer les clients vers Booking.com ?",
            en: "How do your Marrakech Meta Ads prevent travelers from booking on OTAs instead?"
          },
          a: {
            fr: "Nous combinons des formats Reels montrant l'expérience du riad à Marrakech avec une offre directe exclusive (transfert aéroport Ménara ou petit-déjeuner offert) et un retargeting lié à votre tunnel de réservation directe.",
            en: "We pair immersive Marrakech property Reels with an exclusive direct-booking perk (such as complimentary Menara airport transfer) and dynamic retargeting connected straight to your direct booking checkout."
          }
        }
      ],
      'tripadvisor-ads': [
        {
          q: {
            fr: "Pourquoi investir dans TripAdvisor Ads pour un riad ou hôtel à Marrakech ?",
            en: "Why invest in TripAdvisor Ads for a riad or boutique hotel in Marrakech?"
          },
          a: {
            fr: "À Marrakech, plus de 1 500 riads et hôtels se disputent l'attention des voyageurs en phase finale de comparaison. Les placements sponsorisés TripAdvisor Ads affichent votre établissement tout en haut de la catégorie et dirigent le clic vers votre site officiel plutôt que vers une OTA.",
            en: "With over 1,500 competing riads and hotels in Marrakech, TripAdvisor Sponsored Placements position your property above competitors right when travelers compare reviews and dates, sending clicks directly to your official booking site."
          }
        },
        {
          q: {
            fr: "Comment optimisez-vous le retour sur investissement TripAdvisor Ads à Marrakech ?",
            en: "How do you optimize TripAdvisor Ads ROI in Marrakech?"
          },
          a: {
            fr: "Nous ajustons vos enchères CPC selon votre calendrier d'occupation à Marrakech (haute saison printemps/automne vs basse saison), optimisons votre profil Business Advantage et suivons chaque clic sortant vers votre PMS.",
            en: "We calibrate CPC bids around Marrakech's seasonal occupancy peaks, optimize your Business Advantage direct-contact links, and track outbound reservation clicks into your PMS."
          }
        }
      ]
    }
  },
  'rabat': {
    en: {
      title: "B2B & Public Sector Digital Agency Rabat | Urunk",
      description: "Specialized digital marketing, corporate web design, and authority-driven SEO agency in Rabat, Morocco. Serving B2B startups, consultancies, and administrative entities.",
      heroTitle: "Institutional B2B SEO, Digital Strategy & Web Design in Rabat",
      heroSub: "With a population of over 580,000 and the administrative hub of Rabat-Salé-Kénitra (4.8M), Rabat demands the highest standards of digital security, authority, and professional credibility. We build secure React platforms and high-ranking SEO strategies.",
      calloutTitle: "Rabat Authority & B2B Lead Acquisition",
      calloutBody: "We assist legal practices, B2B consulting firms, tech startups, and governmental suppliers in Rabat to capture high-value organic search rankings and project institutional trust.",
      overviewTitle: "Rabat's Administrative and Tech Ecosystem: Securing Digital Trust and Professional Authority",
      overviewText1: "Rabat, the political, administrative, and cultural capital of Morocco, represents a unique business landscape characterized by professional formality, structural governance, and rapid technological modernization. Serving as the primary home for government ministries, foreign embassies, international diplomatic corps, and national regulatory bodies, Rabat-Salé-Kénitra is a major administrative region with over 4.8 million residents (the city of Rabat hosting around 580,000 citizens). In addition to governmental affairs, the city has emerged as a powerhouse for B2B technology, SaaS startups, and offshore development centers, particularly around the high-tech clusters at Rabat Technopolis. Local businesses, corporate consultancies, and technology providers here face highly professional procurement standards and operate in an environment with an 89% internet penetration rate, meaning that digital assets are evaluated strictly on their security, loading speed, and conceptual authority.",
      overviewText2: "The search behavior of business buyers and institutional decision-makers in Rabat is highly specific, analytical, and professional. Unlike consumer-facing retail, Rabat B2B searches (typically conducted in professional French and English) focus on verified credentials, policy alignment, and technical specifications. In this landscape, slow websites, unsecure server configurations, or outdated content can instantly disqualify a supplier from lucrative state or corporate tenders. Furthermore, with the ongoing digitization of Moroccan public services, tech startups and B2B suppliers must establish strong organic search positions. Urunk bridges advanced front-end software engineering (using custom React and static-site generation) with rigorous local SEO strategy to help Rabat-based businesses secure premium organic search visibility, rank in Google Maps local pack, and stand out in modern AI-powered answers.",
      whyPartnerTitle: "Why Rabat Consultancies and B2B Brands Need a Moroccan Digital Partner",
      whyPartnerText: "Operating in Morocco's administrative heart requires a deep understanding of local institutional structures, regulatory frameworks (such as CNDP digital compliance and Moroccan cybersecurity guidelines), and the precise cultural nuances of corporate procurement. A remote or generalist global marketing agency cannot grasp the formal communication standards required to appeal to Rabat's B2B and public sector clients. Urunk provides the specialized, on-the-ground technical authority needed. We design high-security, fast-loading React websites and deploy targeted search campaigns that command professional respect and generate high-margin contract inquiries.",
      marketHighlightsTitle: "Rabat Corporate Capabilities",
      marketHighlights: [
        "Institutional-grade website development built with strict security and speed.",
        "B2B search engine optimization targeting corporate decision-makers in Rabat.",
        "AI Search Optimization ensuring corporate presence on AI answer engines.",
        "Multilingual content execution in French, English, and Arabic."
      ],
      localServicesTitle: "Our Services in Rabat",
      localServices: [
        {
          title: "B2B & Institutional SEO",
          desc: "We optimize your web footprint for complex, industry-specific search terms, positioning your consulting practice or software company in front of major buyers on Google.",
          link: "/en/seo-agency-morocco"
        },
        {
          title: "High-Security React Web Design",
          desc: "We construct highly secure corporate websites using Vite and React, delivering sub-second load times and entirely eliminating the security risks associated with legacy platforms.",
          link: "/en/web-design-morocco"
        },
        {
          title: "AI Search & GEO Optimization",
          desc: "We structure your corporate data and build authority backlinks to ensure your Rabat firm is cited as the leading authority in ChatGPT and Gemini AI Overviews.",
          link: "/en/services/ai-seo-optimization"
        },
        {
          title: "Google Search B2B Ads",
          desc: "We configure and manage high-intent paid Google Search campaigns that capture B2B contract inquiries from procurement managers looking for immediate services.",
          link: "/en/google-ads-morocco"
        },
        {
          title: "Multilingual Content Execution",
          desc: "We craft professional, highly polished copy in French, English, and Arabic, aligned with Rabat's formal administrative and diplomatic communication standards.",
          link: "/en/services/ai-seo-optimization"
        }
      ],
      nearbyLocationsTitle: "Nearby Economic Hubs",
      nearbyLocations: [
        {
          title: "Casablanca Hub",
          desc: "Commercial capital, B2B SEO, and local search visibility.",
          link: "/en/locations/casablanca"
        },
        {
          title: "Morocco (National)",
          desc: "Full national agency coverage across the Kingdom.",
          link: "/en/locations/morocco"
        }
      ],
      faqs: [
        {
          q: "Why choose Urunk for corporate web design in Rabat?",
          a: "Because we build modern React applications that deliver sub-second loading, zero dynamic database vulnerabilities, and superior search engine crawlability."
        },
        {
          q: "Does Urunk provide digital strategy for B2B tech firms in Rabat Technopolis?",
          a: "Yes. We help B2B tech, SaaS, and IT service providers build global organic search presence and generate qualified client inquiries."
        }
      ]
    },
    fr: {
      title: "Agence Web & SEO B2B Rabat | Hub Capitale Urunk",
      description: "Agence de stratégie digitale, création web et SEO d'autorité à Rabat, Maroc. Accompagnement des PME, startups technologiques et cabinets de la capitale.",
      heroTitle: "SEO B2B Institutionnel, Stratégie Digitale & Agence Web à Rabat",
      heroSub: "Avec une population de plus de 580 000 habitants et une région de 4,8M (Rabat-Salé-Kénitra), Rabat exige une rigueur absolue en matière de sécurité et de crédibilité digitale. Nous développons des solutions d'autorité sous React.",
      calloutTitle: "Rayonnement B2B & Institutionnel à Rabat",
      calloutBody: "Nous aidons les cabinets d'avocats, PME de conseil, startups de Technopolis et fournisseurs publics à capter des positions SEO dominantes et à inspirer confiance.",
      overviewTitle: "L'Écosystème Administratif et Tech de Rabat : Construire la Confiance et l'Autorité Digitale",
      overviewText1: "Rabat, capitale politique, administrative et culturelle du Royaume, présente un écosystème d'affaires unique, structuré par la rigueur institutionnelle, la diplomatie et une modernisation technologique rapide. Abritant les ministères, les représentations diplomatiques internationales, les sièges d'organismes de régulation et les parcs d'innovation d'envergure comme Rabat Technopolis, la région de Rabat-Salé-Kénitra compte plus de 4,8 millions de résidents (dont environ 580 000 pour la seule commune de Rabat). En plus des affaires publiques, la ville s'est affirmée comme un pôle d'excellence pour l'offshoring, le logiciel et les services B2B technologiques. Les entreprises, cabinets et startups qui y opèrent font face à des critères de sélection stricts et un taux de pénétration internet urbain de 89 %, où la qualité de la présence web d'une entreprise est évaluée comme le reflet direct de sa compétence technique.",
      overviewText2: "Le comportement de recherche des acheteurs professionnels et des décideurs à Rabat est analytique, hautement qualifié et majoritairement orienté vers des requêtes en français et en anglais axées sur l'expertise technique et la conformité réglementaire. Dans ce contexte d'affaires exigeant, un site web lent, non sécurisé ou graphiquement obsolète discrédite instantanément une entreprise lors d'appels d'offres publics ou privés. De plus, avec la dynamique nationale de dématérialisation, être invisible sur les requêtes stratégiques de son secteur représente un manque à gagner considérable. Urunk associe une ingénierie web de pointe (applications React ultra-rapides et sécurisées excluant les failles des CMS classiques) et un référencement naturel SEO ciblé B2B pour positionner les cabinets et entreprises de Rabat en tête de Google et au cœur des résultats d'Intelligence Artificielle de ChatGPT ou Gemini.",
      whyPartnerTitle: "Pourquoi les Cabinets et PME de Rabat Ont Besoin d'un Partenaire Digital Local",
      whyPartnerText: "Le développement digital au sein de la capitale administrative exige une parfaite maîtrise des réalités réglementaires locales (conformité CNDP, chartes de sécurité gouvernementales) et des sensibilités culturelles des grands comptes publics et privés. Une agence digitale standardisée à l'étranger ne peut décoder la formalité et les exigences de crédibilité requises pour séduire le tissu d'affaires de Rabat. Urunk apporte cette proximité et cette expertise technique d'élite, créant des architectures web sécurisées et des stratégies SEO solides qui garantissent votre autorité de marque et attirent des prospects qualifiés à forte valeur.",
      marketHighlightsTitle: "Atouts pour les Entreprises à Rabat",
      marketHighlights: [
        "Développement web sur-mesure répondant aux exigences de sécurité et de vitesse.",
        "Référencement naturel B2B ciblant les cadres et décideurs de Rabat.",
        "Optimisation Moteurs IA garantissant votre visibilité sur ChatGPT et Google AI.",
        "Rédaction et stratégie de contenu multilingue (français, anglais, arabe)."
      ],
      localServicesTitle: "Nos Services à Rabat",
      localServices: [
        {
          title: "SEO B2B & Référencement d'Autorité",
          desc: "Nous positionnons votre site sur les mots-clés de spécialité les plus rentables du secteur tertiaire et industriel pour capter les grands comptes sur Google.",
          link: "/agence-seo-maroc"
        },
        {
          title: "Création de Sites Web React Sécurisés",
          desc: "Nous développons des plateformes web d'affaires sous React avec une vitesse de chargement instantanée, une sécurité optimale et une conformité réglementaire totale.",
          link: "/agence-web-maroc"
        },
        {
          title: "Optimisation Moteurs IA (AEO)",
          desc: "Nous balisons vos données web pour veiller à ce que votre marque soit activement citée comme leader de sa catégorie par ChatGPT et les résumés Google Gemini.",
          link: "/services/ai-seo-optimization"
        },
        {
          title: "Campagnes Google Ads B2B",
          desc: "Nous configurons et pilotons vos campagnes Google Ads Search ciblées pour capter les opportunités d'affaires des décideurs en recherche active de prestataires.",
          link: "/google-ads-maroc"
        },
        {
          title: "Contenu Multilingue Institutionnel",
          desc: "Nous rédigeons du contenu haut de gamme (français, anglais, arabe) adapté aux codes de communication formels et diplomatiques de la capitale.",
          link: "/services/ai-seo-optimization"
        }
      ],
      nearbyLocationsTitle: "Autres Hubs à Proximité",
      nearbyLocations: [
        {
          title: "Hub Casablanca",
          desc: "Capitale économique, SEO B2B et référencement local.",
          link: "/zones/casablanca"
        },
        {
          title: "Maroc (National)",
          desc: "Présence et accompagnement sur tout le territoire marocain.",
          link: "/zones/maroc"
        }
      ],
      faqs: [
        {
          q: "Pourquoi choisir Urunk pour la création web de votre entreprise à Rabat ?",
          a: "Nous développons des applications React modernes offrant un chargement instantané, une sécurité optimale et une excellente indexabilité."
        },
        {
          q: "Accompagnez-vous les entreprises de Technopolis Rabat ?",
          a: "Oui, nous aidons les acteurs de la tech, du logiciel et des services B2B à développer leur visibilité organique internationale."
        }
      ]
    },
    uniqueIntroByService: {
      'hotel-seo': { fr: "", en: "" },
      'web-design-morocco': { fr: "", en: "" }
    },
    marketStats: [
      {
        label: { fr: "Institutions Publiques & Ministères", en: "Public Institutions & Ministries" },
        value: "85%+"
      },
      {
        label: { fr: "Pôle Technologique & Startups (Technopolis)", en: "Tech Hub & Corporate Footprint" },
        value: "120+ Cies"
      },
      {
        label: { fr: "Tourisme Culturel & Séjours Diplomatiques", en: "Cultural & Diplomatic Tourism Share" },
        value: "35%"
      },
      {
        label: { fr: "Taux de Réservation Directe B2B", en: "Direct B2B Booking Conversion" },
        value: "28%"
      }
    ],
    faqByService: {
      'web-design-morocco': [
        {
          q: {
            fr: "Quelles normes de sécurité web sont requises pour les entreprises à Rabat ?",
            en: "What web security standards are required for corporate entities in Rabat?"
          },
          a: {
            fr: "Conformité CNDP marocaine pour la protection des données, certificat SSL renforcé et architecture sécurisée sans failles WordPress.",
            en: "Moroccan CNDP data privacy compliance, modern SSL encryption, and modern architecture eliminating traditional CMS vulnerabilities."
          }
        }
      ]
    }
  },
  'agadir': {
    en: {
      title: "Coastal Resort & Surf Camp Digital Agency Agadir | Urunk",
      description: "Specialized digital marketing, hotel SEO, and custom web design agency in Agadir & Taghazout. Boost beach resort, surf camp, and tour direct bookings.",
      heroTitle: "Beach Resort Marketing, Hotel SEO & Web Agency in Agadir",
      heroSub: "With a coastal bed capacity of over 40,000 and the rising surf hub of Taghazout Bay, Agadir (420k residents) represents the sports and beach tourism capital of Morocco. We build high-speed websites that bypass OTA commissions.",
      calloutTitle: "Direct Bookings & Excursions in Agadir",
      calloutBody: "Stop losing 25% to Booking.com. We integrate site-speed React web layouts with Cloudbeds, SITE-Minder, and PMS platforms to secure direct stays.",
      overviewTitle: "Agadir Coastal Tourism Landscape: Driving Seaside Bookings and Regional Sport Growth",
      overviewText1: "Agadir and the adjacent surf haven of Taghazout Bay represent the ultimate coastland, wellness, and beach tourism epicenter of Morocco. With a municipal population of around 420,000 (and Souss-Massa region exceeding 2.6 million), the local economy is strongly supported by seaside resorts, international hotel chains, world-renowned surf lodges, agriculture, and ocean fisheries. The regional hotel sector boasts a massive capacity of over 40,000 beds, welcoming millions of European travelers (especially from France, Germany, the UK, and Scandinavia) looking for reliable year-round sunshine. The internet penetration rate in the urban Souss-Massa region is approximately 83%, meaning travelers use mobile search and geolocated maps on 4G/5G networks to explore local attractions, book excursions, and find dining spots.",
      overviewText2: "Despite this massive influx of travelers, seaside hotels, boutique surf lodges, and excursion operators face severe margin erosion, paying up to 25% in commission fees on every transaction to third-party booking portals like Booking.com, Viator, and Airbnb. Furthermore, travel search behavior for Agadir is highly seasonal, and international visitors use multiple languages (French, English, German) to search for specific terms like 'all-inclusive family resort Agadir' or 'best surf camp Taghazout'. If your digital presence fails to load instantly on mobile, or lacks dynamic multi-currency reservation features, international guests will immediately bounce back to high-commission resellers. Urunk designs custom, lightning-fast React hotel websites starting at 12,000 MAD that integrate seamlessly with top PMS engines, paired with localized hôtelier SEO and high-conversion Google Hotel Ads to increase direct bookings.",
      whyPartnerTitle: "Why Agadir Hotels and Surf Camps Need a Localized Digital Expert",
      whyPartnerText: "Agadir and Taghazout Bay require a digital strategy that understands coastal tourism dynamics, European traveler expectations, and sharp seasonal peaks. A local digital partner like Urunk brings this exact expertise. We understand how to optimize your Google Business Profile for walk-ins, implement high-speed mobile designs that load in under 1 second for travelers on loose roaming networks, and integrate regional payment processors and automated WhatsApp booking confirmations. This local focus ensures that your marketing efforts directly lower your acquisition costs and increase net profit margins.",
      marketHighlightsTitle: "Agadir Market Capabilities",
      marketHighlights: [
        "Resort & hotel SEO optimized for French, German, and English beachgoers.",
        "Direct booking engine integrations for surf camps and coastal lodges.",
        "Excursion and water sports lead generation campaigns on Meta & Google.",
        "High-speed mobile web design built for international travelers on 4G/5G."
      ],
      localServicesTitle: "Our Services in Agadir",
      localServices: [
        {
          title: "Agadir Hotel & Resort SEO",
          desc: "We optimize your web portal in English, French, and German for high-volume holiday queries, outranking international OTAs and securing direct traffic on Google.",
          link: "/en/hotel-seo"
        },
        {
          title: "Hotel Website Design & CRO",
          desc: "We develop fast-loading, mobile-first websites using React, built specifically to drive visitors directly into your PMS booking engine checkout flow.",
          link: "/en/hotel-website-design"
        },
        {
          title: "Direct Booking & PMS Integration",
          desc: "We configure, integrate, and optimize Cloudbeds, SitesMinder, and custom PMS reservation widgets to ensure real-time rates and seamless mobile checkout.",
          link: "/en/direct-booking"
        },
        {
          title: "Google Ads & Meta Travel Ads",
          desc: "We design and manage high-ROI Google Search and Meta video ads that capture European travelers planning their beach holidays or surf trips to Agadir.",
          link: "/en/google-ads-morocco"
        },
        {
          title: "Excursion Lead Generation",
          desc: "We build high-converting landing pages and automated chat funnels for tour operators and water sports brands, securing direct bookings without third-party fees.",
          link: "/en/services/ai-seo-optimization"
        }
      ],
      nearbyLocationsTitle: "Nearby Tourism Hubs",
      nearbyLocations: [
        {
          title: "Marrakech Hub",
          desc: "Hospitality marketing, Riad SEO, and Medina guest house growth.",
          link: "/en/locations/marrakech"
        },
        {
          title: "Morocco (National)",
          desc: "Full national agency footprint across the Kingdom of Morocco.",
          link: "/en/locations/morocco"
        }
      ],
      faqs: [
        {
          q: "How can hotels in Agadir and Taghazout attract more European direct bookers?",
          a: "By combining multi-language SEO (English, French, German), Google Hotel Ads, and offering a direct booking price match guarantee on your official website."
        },
        {
          q: "Does Urunk build booking websites for surf camps and excursion providers?",
          a: "Yes. We design high-converting reservation websites with instant deposit processing and automated guest confirmation."
        }
      ]
    },
    fr: {
      title: "Agence Web & Marketing Hôtelier Agadir | Hub Urunk Agadir",
      description: "Agence digitale spécialisée à Agadir et Taghazout pour hôtels de plage, surf camps, tour-opérateurs et résidences. SEO hôtel, création web et réservations directes.",
      heroTitle: "Marketing Hôtelier Balnéaire, SEO & Création Web à Agadir & Taghazout",
      heroSub: "Avec une capacité de plus de 40 000 lits et l'essor mondial de la baie de Taghazout, Agadir (420 000 habitants) représente le pôle du tourisme balnéaire du Maroc. Nous concevons des sites web rapides et orientés réservations directes.",
      calloutTitle: "Réservations Directes & Excursions à Agadir",
      calloutBody: "Ne laissez plus 25 % de commissions à Booking.com. Nous intégrons des architectures web React fluides avec Cloudbeds, SiteMinder et vos PMS hôteliers.",
      overviewTitle: "Écosystème Touristique d'Agadir : Propulser les Réservations Directes et le Tourisme Sportif",
      overviewText1: "Agadir et la baie adjacente de Taghazout constituent le cœur battant du tourisme balnéaire, du bien-être et des sports de glisse au Maroc. Portée par une population urbaine d'environ 420 000 habitants (et plus de 2,6 millions pour la région Souss-Massa), l'économie locale est fortement structurée par les complexes hôteliers de front de mer, les surf camps de renommée mondiale, l'agriculture et la pêche. Avec une capacité hôtelière classée dépassant les 40 000 lits, la région accueille chaque année des millions de voyageurs européens (principalement français, allemands, britanniques et scandinaves) en quête d'un ensoleillement permanent. Le taux de pénétration internet dans la région atteint 83 % en zone urbaine, ce qui incite les voyageurs à utiliser massivement la recherche mobile et les cartes géolocalisées sur les réseaux 4G/5G pour organiser leurs séjours, réserver des cours de surf ou planifier des excursions.",
      overviewText2: "Malgré cette affluence continue, les hôtels côtiers, les surf lodges et les agences d'excursions locaux souffrent d'une érosion sévère de leurs marges en versant jusqu'à 25 % de commission aux géants de la réservation en ligne comme Booking.com, Airbnb ou Viator. De plus, la demande touristique d'Agadir est très saisonnière et multilingue, les visiteurs formulant leurs requêtes dans leurs langues mutuelles (« resort familial tout inclus agadir », « surf lodge taghazout »). Si votre site officiel est lent sur mobile ou dépourvu de moteur de réservation directe sécurisé et multi-devises, le voyageur abandonne instantanément son panier au profit des intermédiaires. Urunk développe des plateformes web hôtelières d'exception sous React (dès 12 000 MAD) et orchestre des campagnes SEO hôtelières et Google Ads ciblées pour accroître vos réservations directes.",
      whyPartnerTitle: "Pourquoi les Hôtels et Surf Camps d'Agadir ont Besoin d'un Expert Digital Marocain",
      whyPartnerText: "Le marché touristique d'Agadir et de Taghazout obéit à des dynamiques saisonnières, des attentes de clientèle européenne et des spécificités géographiques très précises. Faire appel à un partenaire digital local comme Urunk vous garantit un site web hôtelier d'une vitesse de chargement instantanée (moins de 1 seconde) adapté aux voyageurs itinérants sur réseaux mobiles, un référencement Google Maps optimal pour capter les clients de proximité, et des tunnels de paiement locaux et internationaux parfaitement configurés. Notre connaissance approfondie du marché marocain sécurise vos investissements et maximise vos marges nettes.",
      marketHighlightsTitle: "Atouts pour les Établissements à Agadir",
      marketHighlights: [
        "SEO hôtelier balnéaire optimisé pour la clientèle européenne (française, allemande, britannique).",
        "Intégration de moteurs de réservation directe pour surf camps et lodges.",
        "Génération de leads pour activités nautiques et excursions sur Google & Meta Ads.",
        "Design web mobile ultra-rapide adapté aux voyageurs en itinérance."
      ],
      localServicesTitle: "Nos Services à Agadir",
      localServices: [
        {
          title: "SEO Hôtelier Agadir & Taghazout",
          desc: "Nous optimisons la visibilité organique de votre hôtel en français, anglais et allemand pour capter les vacanciers européens en phase de recherche sur Google.",
          link: "/seo-hotel"
        },
        {
          title: "Création de Sites Web d'Hôtels & CRO",
          desc: "Nous concevons des plateformes web immersives sous React, rapides et entièrement optimisées pour convertir le trafic mobile en séjours directs.",
          link: "/site-web-hotel"
        },
        {
          title: "Intégration de PMS & Moteurs",
          desc: "Nous connectons et configurons vos solutions de réservation (Cloudbeds, SiteMinder, Amenitiz, Mews) pour offrir un paiement sécurisé et sans friction.",
          link: "/reservation-directe"
        },
        {
          title: "Google Ads & Meta Travel Ads",
          desc: "Nous programmons des campagnes d'acquisition payantes ultra-ciblées sur les voyageurs européens pour assurer un remplissage optimal en haute et basse saison.",
          link: "/google-ads-maroc"
        },
        {
          title: "Acquisition de Leads d'Excursions",
          desc: "We write clean SEO descriptions and setup reservation triggers to bypass GetYourGuide and capture tour bookings directly on your official site.",
          link: "/services/ai-seo-optimization"
        }
      ],
      nearbyLocationsTitle: "Autres Hubs Touristiques",
      nearbyLocations: [
        {
          title: "Hub Marrakech",
          desc: "Marketing hôtelier, SEO Riad et tourisme à Marrakech.",
          link: "/zones/marrakech"
        },
        {
          title: "Maroc (National)",
          desc: "Présence globale sur l'ensemble du territoire national.",
          link: "/zones/maroc"
        }
      ],
      faqs: [
        {
          q: "Comment les hôtels d'Agadir et Taghazout peuvent-ils attirer plus de clients européens en direct ?",
          a: "En associant un SEO multilingue (français, anglais, allemand), Google Hotel Ads et un moteur de réservation directe offrant des avantages exclusifs."
        },
        {
          q: "Urunk crée-t-il des sites de réservation pour surf camps et agences d'excursions ?",
          a: "Oui, nous concevons des plateformes de réservation fluides avec paiement d'acompte en ligne et confirmation automatique."
        }
      ]
    },
    uniqueIntroByService: {
      'hotel-seo': { fr: "", en: "" },
      'hotel-website-design': { fr: "", en: "" },
      'direct-booking': { fr: "", en: "" }
    },
    marketStats: [
      {
        label: { fr: "Capacité Litière Côtière (Souss-Massa)", en: "Coastal Bed Capacity (Souss-Massa)" },
        value: "40,000+"
      },
      {
        label: { fr: "Durée Moyenne de Séjour Balnéaire", en: "Average Seaside Length of Stay" },
        value: "4.8 Jours"
      },
      {
        label: { fr: "Voyageurs Européens Sans Intermédiaire", en: "Direct European Travelers Target" },
        value: "62%"
      },
      {
        label: { fr: "Économie de Commission OTA par Réservation", en: "OTA Commission Saved per Direct Stay" },
        value: "≈ 1,200 MAD"
      }
    ],
    faqByService: {
      'hotel-seo': [
        {
          q: {
            fr: "Comment attirer des surfeurs et vacanciers européens sans passer par les plateformes ?",
            en: "How can coastal resorts and surf lodges attract European travelers directly?"
          },
          a: {
            fr: "En optimisant le site en anglais, allemand et français sur les requêtes de packages surf, tout inclus et météo favorable.",
            en: "By multilingual SEO targeting surf packages, all-inclusive seasonal queries, and high-intent vacation searches in English, German, and French."
          }
        }
      ]
    }
  }
};
