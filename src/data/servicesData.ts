export interface ServicePageData {
  title: string;
  description: string;
  heroTitle: string;
  heroSub: string;
  calloutTitle: string;
  calloutBody: string;
  directAnswer?: {
    question: string;
    answer: string;
    highlights?: string[];
  };
  comparisonTable?: {
    title: string;
    subtitle?: string;
    headers: string[];
    rows: string[][];
    footnote?: string;
  };
  evaluationCriteria?: {
    title: string;
    intro: string;
    items: { title: string; desc: string }[];
  };
  relatedLinks?: {
    label: string;
    to: string;
    desc: string;
  }[];
  externalReferences?: {
    label: string;
    url: string;
    source: string;
  }[];
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

export function extractNumericMadPrice(priceText: string): string | null {
  if (!priceText) return null;
  const match = priceText.match(/\d[\d\s,.]*/);
  if (!match) return null;
  const digits = match[0].replace(/[^0-9]/g, '');
  return digits.length > 0 ? digits : null;
}


export const servicesData: Record<string, { en: ServicePageData; fr: ServicePageData }> = {
  "creation-site-web-prix": {
    "en": {
      "title": "Website Creation Price in Morocco: Cost Guide | Urunk",
      "description": "Transparent website creation pricing in Morocco: fixed packages starting at 12,000 MAD with custom UX, Core Web Vitals optimization, and 100% ownership.",
      "heroTitle": "Website Creation Pricing in Morocco",
      "heroSub": "Understand what drives professional website costs in Morocco—and compare transparent, flat-fee packages built for measurable business and hospitality growth.",
      "calloutTitle": "Transparent Fixed Pricing, Zero Hidden Retainers",
      "calloutBody": "A slow brochure site is expensive at any price if visitors leave without converting. Urunk builds custom, search-ready websites starting at 12,000 MAD one-time, with full code and domain ownership.",
      "relatedLinks": [
        {
          "label": "Hotel Website Packages & Value Comparison",
          "to": "/en/services/website-design",
          "desc": "Compare website creation packages specifically structured for small independent hotels and riads in Morocco."
        },
        {
          "label": "Hotel Website Design & PMS Integration",
          "to": "/en/hotel-website-design",
          "desc": "How to evaluate a Moroccan hospitality web agency for booking engine sync and bilingual SEO."
        },
        {
          "label": "Full Agency Pricing Schedule",
          "to": "/en/pricing",
          "desc": "View all published MAD & EUR flat rates across web builds, SEO, Google Ads, and Meta Ads."
        }
      ],
      "problemTitle": "Why do website creation quotes vary so widely in Morocco?",
      "problemText1": "Quotes in Morocco range from low-cost generic templates with poor mobile speed to agency retainers with unclear deliverables. Real value depends on mobile Core Web Vitals, bilingual SEO architecture, and conversion tracking.",
      "problemText2": "At Urunk, we publish clear starting rates so business owners and hoteliers know exactly what is included before requesting a custom scope.",
      "signsTitle": "Technical factors that determine website cost:",
      "signs": [
        "Mobile Core Web Vitals engineering and image compression",
        "Bilingual (FR/EN) architecture with reciprocal hreflang tags",
        "Third-party integrations (PMS booking engines, CRM, CMI/Stripe)",
        "On-page technical SEO, Schema.org markup, and GA4 conversion tracking"
      ],
      "featuresTitle": "What every Urunk web build includes:",
      "features": [
        {
          "title": "Custom Conversion UX",
          "desc": "Tailored mobile-first layouts structured around clear calls to action, inquiries, or direct bookings."
        },
        {
          "title": "Technical SEO Foundation",
          "desc": "Clean URL hierarchy, semantic headings, structured data, and XML sitemaps configured before launch."
        },
        {
          "title": "100% Client Ownership",
          "desc": "One-time build fee with zero agency lock-in: you own your domain, hosting account, and source code."
        }
      ],
      "processTitle": "Our Web Delivery Process",
      "processSteps": [
        {
          "step": 1,
          "title": "Scope & Architecture (Week 1)",
          "desc": "Audit of your market positioning, target queries, and conversion funnel requirements."
        },
        {
          "step": 2,
          "title": "UX Design & Content Structure (Weeks 2–3)",
          "desc": "Mobile-first interface design and bilingual copy structuring."
        },
        {
          "step": 3,
          "title": "Development, QA & Launch (Weeks 4–6)",
          "desc": "Clean implementation, Core Web Vitals validation, GA4 tracking, and team training."
        }
      ],
      "investmentTitle": "Website Build Fee",
      "investmentPrice": "Starting at 12,000 MAD",
      "investmentDesc": "One-time flat-rate package for a custom, SEO-ready website. Hospitality PMS and multi-property scopes quoted transparently.",
      "faqs": [
        {
          "q": "How much does a professional website cost in Morocco?",
          "a": "At Urunk, a custom SEO-optimized website starts at 12,000 MAD (one-time payment), including mobile-first design, technical SEO setup, and conversion tracking. Larger multi-property hospitality portals or custom web apps are scoped from 20,000 MAD depending on integrations."
        },
        {
          "q": "Are there mandatory monthly fees after launch?",
          "a": "No. Website creation is billed as a one-time project fee, and you retain 100% ownership of your code, domain, and hosting. Optional monthly retainers only apply if you choose ongoing SEO or paid advertising management."
        }
      ]
    },
    "fr": {
      "title": "Prix Création Site Web Maroc : Grille & Devis | Urunk",
      "description": "Combien coûte la création d'un site web professionnel au Maroc ? Forfaits fixes dès 12 000 MAD, SEO technique intégré et 100 % propriété du code.",
      "heroTitle": "Prix de Création de Site Web au Maroc",
      "heroSub": "Comprendre ce qui justifie le tarif d'un site internet professionnel au Maroc : vitesse mobile, référencement naturel bilingue et propriété complète de votre actif.",
      "calloutTitle": "Tarification Fixe et Propriété Intégrale",
      "calloutBody": "Un site vitrine lent coûte toujours trop cher s'il ne génère ni demandes ni réservations. Urunk conçoit des architectures web rapides dès 12 000 MAD (paiement unique), sans abonnement captif.",
      "relatedLinks": [
        {
          "label": "Forfaits Site Web Hôtelier (Rapport Qualité-Prix)",
          "to": "/services/creation-site-web",
          "desc": "Comparatif détaillé des forfaits de création de site web pour petits hôtels, riads et maisons d'hôtes au Maroc."
        },
        {
          "label": "Site Web Hôtelier avec Moteur de Réservation",
          "to": "/site-web-hotel",
          "desc": "Critères techniques pour choisir votre prestataire hôtelier au Maroc et connecter votre PMS."
        },
        {
          "label": "Grille Tarifaire Complète Urunk",
          "to": "/tarifs",
          "desc": "Consultez l'ensemble de nos tarifs fixes (Création web, SEO local, Google Ads, Meta Ads)."
        }
      ],
      "problemTitle": "Pourquoi les devis de création de site web varient-ils autant au Maroc ?",
      "problemText1": "Sur le marché marocain, les propositions vont de thèmes préfabriqués très lents sur mobile à des prestations d'agence facturées avec des coûts récurrents opaques. La valeur réelle d'un site repose sur ses performances Core Web Vitals, sa structure SEO et sa capacité à convertir.",
      "problemText2": "Chez Urunk, nos forfaits démarrent sur une base claire et publiée, afin de permettre aux dirigeants de PME et aux hôteliers d'arbitrer leur budget avec précision.",
      "signsTitle": "Ce qui détermine le coût réel d'un site professionnel :",
      "signs": [
        "L'optimisation de la vitesse mobile et des Core Web Vitals",
        "L'architecture multilingue (FR/EN) avec balises hreflang réciproques",
        "Les intégrations métier (moteur de réservation PMS, paiement CMI/Stripe, CRM)",
        "Le balisage Schema.org, le SEO technique initial et le suivi GA4"
      ],
      "featuresTitle": "Ce qu'incluent nos réalisations web :",
      "features": [
        {
          "title": "UX Mobile Orientée Conversion",
          "desc": "Parcours utilisateur pensé pour transformer les visites sur smartphone en prises de contact ou réservations."
        },
        {
          "title": "Socle SEO Technique Intégré",
          "desc": "Arborescence propre, balisage sémantique, données structurées et plan de site XML configurés dès la mise en ligne."
        },
        {
          "title": "100 % Propriété Client",
          "desc": "Paiement unique à la création : votre entreprise conserve le nom de domaine, l'hébergement et le code source."
        }
      ],
      "processTitle": "Notre méthodologie en 3 étapes",
      "processSteps": [
        {
          "step": 1,
          "title": "Cadrage & Architecture (Semaine 1)",
          "desc": "Analyse de votre marché, des requêtes cibles et de l'arborescence de conversion."
        },
        {
          "step": 2,
          "title": "Design UX & Contenus (Semaines 2–3)",
          "desc": "Maquettage mobile-first sur mesure et structuration éditoriale bilingue."
        },
        {
          "step": 3,
          "title": "Développement, Recette & Mise en Ligne (Semaines 4–6)",
          "desc": "Intégration propre, tests de vitesse, configuration GA4 et formation de votre équipe."
        }
      ],
      "investmentTitle": "Forfait Création Web",
      "investmentPrice": "À partir de 12 000 MAD",
      "investmentDesc": "Paiement unique pour un site professionnel rapide et optimisé SEO. Devis détaillé pour portails hôteliers multi-établissements ou e-commerce.",
      "faqs": [
        {
          "q": "Combien coûte la création d'un site web professionnel au Maroc ?",
          "a": "Chez Urunk, la création d'un site web professionnel optimisé SEO démarre à 12 000 MAD en paiement unique. Pour un hôtel ou un riad, consultez notre page dédiée aux forfaits hôteliers (/services/creation-site-web) qui inclut la connexion au moteur de réservation."
        },
        {
          "q": "Y a-t-il des abonnements obligatoires après la livraison ?",
          "a": "Non. La création du site est facturée une seule fois et vous êtes propriétaire à 100 % du code, de l'hébergement et du nom de domaine. Aucun abonnement mensuel n'est imposé hors prestations optionnelles de SEO ou de publicité."
        }
      ]
    }
  },
  "web-design-morocco": {
    "en": {
      "title": "Web Agency Morocco: Sites for Hotels & Riads | Urunk",
      "description": "Morocco web agency designing fast direct booking websites for hotels, riads, and boutique hospitality brands. High-converting mobile layouts.",
      "heroTitle": "Web Agency Morocco: Sites for Hotels and Riads",
      "heroSub": "We engineer fast, mobile-first websites designed specifically to increase direct bookings for Moroccan hotels, riads, and tour operators.",
      "calloutTitle": "Reduce Reliance on High-Commission OTAs",
      "calloutBody": "Your website should be your most profitable sales channel. We build custom WordPress and React sites for Moroccan hospitality brands that load fast on mobile and connect directly to your PMS booking engine.",
      "problemTitle": "Is your current website costing you direct bookings?",
      "problemText1": "Many hotels and riads lose 15% to 25% of room revenue to Online Travel Agencies (OTAs) because their official website is slow, hard to navigate on smartphones, or disconnected from live inventory.",
      "problemText2": "A fast, bilingual website tailored for Morocco's hospitality market gives you control over the guest relationship and strengthens net operating margins.",
      "signsTitle": "Signs your hospitality website needs an upgrade:",
      "signs": [
        "High mobile bounce rates and low booking-engine completion",
        "Loading times above 2.5 seconds on 4G mobile networks",
        "No real-time PMS booking engine or sticky availability bar",
        "Missing reciprocal French/English SEO architecture"
      ],
      "featuresTitle": "What makes our hospitality websites convert:",
      "features": [
        {
          "title": "Mobile-First UX",
          "desc": "Most international travel research happens on mobile. Every room gallery, rate table, and CTA is built for thumb navigation."
        },
        {
          "title": "PMS Booking Engine Sync",
          "desc": "Seamless integration with Cloudbeds, SiteMinder, Amenitiz, Little Hotelier, Mews, and Sirvoy."
        },
        {
          "title": "Core Web Vitals Engineering",
          "desc": "AVIF/WebP media optimization and lightweight code to minimize abandonment before checkout."
        }
      ],
      "processTitle": "Our Web Design Process",
      "processSteps": [
        {
          "step": 1,
          "title": "Discovery & Funnel Audit",
          "desc": "We review your property positioning, feeder markets, and current OTA vs. direct mix."
        },
        {
          "step": 2,
          "title": "Design & Bilingual UX",
          "desc": "Crafting an authentic visual interface focused on guiding travelers to live availability."
        },
        {
          "step": 3,
          "title": "Development & PMS Integration",
          "desc": "Building with clean code, connecting your booking engine, and validating GA4 tracking."
        }
      ],
      "investmentTitle": "Website Investment",
      "investmentPrice": "Starting at 12,000 MAD",
      "investmentDesc": "Includes custom design, booking engine integration, and foundational bilingual SEO.",
      "faqs": [
        {
          "q": "Do you integrate with my existing booking engine?",
          "a": "Yes, we integrate with major hospitality PMS and booking engines including Cloudbeds, SiteMinder, Amenitiz, Mews, Sirvoy, and Little Hotelier."
        },
        {
          "q": "How long does a new website take?",
          "a": "A custom hotel or riad website typically takes 4 to 6 weeks from initial scoping to live deployment."
        }
      ]
    },
    "fr": {
      "title": "Agence Web Maroc : Sites pour Hôtels et Riads | Urunk",
      "description": "Agence de création de sites web au Maroc pour hôtels et riads : plateformes rapides, design sur mesure et moteur de réservation directe intégré.",
      "heroTitle": "Agence Web Maroc : Sites pour Hôtels et Riads",
      "heroSub": "Nous concevons des sites web bilingues et rapides, pensés pour développer les réservations directes des hôtels, riads et acteurs touristiques au Maroc.",
      "calloutTitle": "Réduisez Votre Dépendance aux OTA",
      "calloutBody": "Votre site officiel doit être votre canal de vente le plus rentable. Nous développons des plateformes WordPress et React connectées à votre PMS pour capter des réservations directes sans commission d'agence.",
      "problemTitle": "Votre site actuel freine-t-il vos réservations directes ?",
      "problemText1": "De nombreux hôtels et riads reversent 15 % à 25 % de commissions aux OTA (Booking.com, Expedia) parce que leur site officiel charge lentement ou offre un parcours mobile complexe.",
      "problemText2": "Une architecture web rapide, rassurante et reliée en temps réel à vos disponibilités vous redonne la maîtrise de la relation client et de votre marge nette.",
      "signsTitle": "Signes que votre site hôtelier doit évoluer :",
      "signs": [
        "Taux de rebond mobile élevé et abandon dans le tunnel de réservation",
        "Temps de chargement supérieur à 2,5 secondes sur réseau 4G",
        "Absence de moteur de réservation synchronisé ou de bouton d'action fixe",
        "Structure multilingue FR/EN incomplète ou mal indexée"
      ],
      "featuresTitle": "Ce qui rend nos sites hôteliers performants :",
      "features": [
        {
          "title": "Design Mobile-First",
          "desc": "La majorité des recherches de séjours s'effectue sur smartphone : galeries, tarifs et disponibilités restent accessibles en un geste."
        },
        {
          "title": "Connexion PMS & Channel Manager",
          "desc": "Intégration fluide avec Cloudbeds, SiteMinder, Amenitiz, Little Hotelier, Mews et Sirvoy."
        },
        {
          "title": "Vitesse & Core Web Vitals",
          "desc": "Compression AVIF/WebP et code allégé pour retenir les voyageurs et renforcer votre SEO."
        }
      ],
      "processTitle": "Notre Processus de Création Web",
      "processSteps": [
        {
          "step": 1,
          "title": "Audit & Cadrage",
          "desc": "Analyse de vos marchés émetteurs, de votre mix OTA/direct et de votre identité."
        },
        {
          "step": 2,
          "title": "Design UX Bilingue",
          "desc": "Conception d'une interface claire orientée vers la vérification des disponibilités."
        },
        {
          "step": 3,
          "title": "Développement & Intégration PMS",
          "desc": "Mise en production propre, connexion du moteur de réservation et suivi GA4."
        }
      ],
      "investmentTitle": "Investissement Site Web",
      "investmentPrice": "À partir de 12 000 MAD",
      "investmentDesc": "Inclut le design sur mesure, l'intégration du moteur de réservation et le socle SEO bilingue.",
      "faqs": [
        {
          "q": "Intégrez-vous mon moteur de réservation actuel ?",
          "a": "Oui, nous intégrons les principaux PMS et moteurs du marché tels que Cloudbeds, SiteMinder, Amenitiz, Mews, Sirvoy et Little Hotelier."
        },
        {
          "q": "Quel est le délai de création d'un site ?",
          "a": "Un site web d'hôtel ou de riad sur mesure est généralement livré en 4 à 6 semaines."
        }
      ]
    }
  },
  "hotel-seo": {
    "en": {
      "title": "Hotel Local SEO Morocco: Google Maps & Search | Urunk",
      "description": "Compare local SEO services in Morocco to rank your hotel website on Google Maps and local search. Technical SEO, GBP & schema from 4,000 MAD/mo.",
      "heroTitle": "Hotel Local SEO in Morocco: Rank on Google Maps & Organic Search",
      "heroSub": "Capture high-intent travelers searching for stays across Morocco by aligning your hotel website, Google Business Profile, and structured hospitality data.",
      "calloutTitle": "Definition: Hospitality Local & Organic SEO",
      "calloutBody": "Hotel local SEO combines Google Business Profile (Google Maps) engineering, localized FR/EN room and neighborhood landing pages, Hotel Schema.org markup, and consistent citations so travelers discover and book on your official website instead of defaulting to OTAs.",
      "directAnswer": {
        "question": "What is the best local SEO service to buy in Morocco to rank a hotel website on Google Maps and local search?",
        "answer": "For most independent hotels, riads, and resorts in Morocco, the most effective local SEO service to buy is a combined Website + Google Business Profile hospitality retainer rather than an isolated directory package or one-off audit. Ranking in both the Google Maps Local Pack and organic search requires synchronizing your GBP categories, hotel attributes, free booking links, fast bilingual (FR/EN) room/location pages, Hotel JSON-LD schema, and review workflows. At Urunk, continuous Hotel SEO + Local Maps retainers start at 4,000 MAD/month (with 15-day cancellation notice), scaling to 8,000 MAD/month for hyper-competitive multi-language urban or resort markets.",
        "highlights": [
          "Synchronizes Google Maps (GBP) + official hotel website pages",
          "Includes Hotel JSON-LD schema, hreflang (FR/EN) & UTM tracking",
          "Transparent retainers from 4,000 MAD/mo with 15-day notice",
          "Compliant with Google guidelines (no fake reviews or #1 guarantees)"
        ]
      },
      "comparisonTable": {
        "title": "Comparing Local SEO Services to Rank a Hotel Website in Morocco",
        "subtitle": "How to choose the right local SEO scope based on your property's current website health, destination competition, and room inventory.",
        "headers": [
          "Local SEO Service Option",
          "Best Property Fit",
          "Core Deliverables Included",
          "Urunk Published Rate",
          "Key Limitation to Know"
        ],
        "rows": [
          [
            "Foundational Hotel SEO + Maps Retainer",
            "Independent hotels, guesthouses & riads (5–20 rooms) with a functional site",
            "Technical SEO fixes, GBP optimization, on-page FR or EN room/city targeting, Hotel JSON-LD, monthly GA4/GSC reporting",
            "From 4,000 MAD / month",
            "Requires 3–6 months of consistent execution for competitive non-brand terms"
          ],
          [
            "Dedicated GBP Hospitality Management",
            "Properties whose website is already fast/optimized but underperforming on Google Maps",
            "Deep GBP category/attribute tuning, free booking link verification, Medina/resort pin audit, photo cadence & review SOPs",
            "From 5,000 MAD / month",
            "Improves Map Pack conversion, but cannot fix slow website templates on its own"
          ],
          [
            "Hyper-Local Multi-Market Hospitality SEO",
            "Boutique hotels, luxury riads & resorts in high-density hubs (Marrakech, Casablanca, Agadir)",
            "Bilingual FR/EN neighborhood & experience clusters, local citation cleanup, hospitality PR/link outreach + full GBP management",
            "From 8,000 MAD / month",
            "Best paired with a direct booking engine to convert higher international traffic"
          ],
          [
            "Generic Directory / Citation Blast (Market Alternative)",
            "Rarely suited to Moroccan hospitality",
            "Automated submissions to generic directories without hospitality context",
            "Varies by vendor",
            "Minimal impact on Google Hotel Pack; ignores PMS links, speed, and guest reviews"
          ]
        ],
        "footnote": "Important: Google Maps rankings depend dynamically on Relevance, Distance (the traveler's search query or GPS location), and Prominence. No ethical agency can guarantee a permanent #1 Maps position."
      },
      "evaluationCriteria": {
        "title": "What a Complete Moroccan Hotel Local SEO Service Must Include",
        "intro": "Before purchasing any local SEO package in Morocco, verify that the provider addresses all four hospitality ranking pillars rather than generic blog writing alone:",
        "items": [
          {
            "title": "Website-to-GBP Entity Alignment",
            "desc": "Your official website URL, exact NAP (Name, Address, Moroccan +212 phone), check-in/out times, and amenity list must match across your website footer, Hotel Schema.org JSON-LD, Google Business Profile, and major travel listings."
          },
          {
            "title": "Google Hotel Pack Mechanics (Different from Standard Local Businesses)",
            "desc": "Hotels on Google Maps display live rates, class ratings, amenity badges, and Google Hotel Center / PMS free booking links. Generic local SEO packages built for clinics or shops often miss hotel-specific GBP features."
          },
          {
            "title": "Bilingual Search Intent (French + English)",
            "desc": "Moroccan domestic corporate stays and French travelers search in French ('hôtel charme Essaouira'), while UK, US, Northern European, and Gulf guests search in English. Reciprocal hreflang prevents duplicate-content cannibalization."
          },
          {
            "title": "GA4 & Booking Engine Attribution",
            "desc": "Every GBP website link and free booking link should carry clean UTM parameters so Google Analytics 4 separates Google Maps bookings from standard organic search and brand paid ads."
          }
        ]
      },
      "relatedLinks": [
        {
          "label": "Local SEO Packages for Marrakech Hotels & Riads",
          "to": "/en/riad-seo-marrakech",
          "desc": "Dedicated Marrakech Medina, Gueliz, Hivernage, and Palmeraie local SEO packages."
        },
        {
          "label": "Google Business Profile Optimization for Hotels",
          "to": "/en/services/google-business-profile",
          "desc": "Standalone GBP optimization & management for Moroccan hotels, riads, and guesthouses."
        },
        {
          "label": "Multi-City Local SEO Across Morocco",
          "to": "/en/services/local-seo-morocco",
          "desc": "Broader local search optimization for multi-location hospitality groups and service brands."
        },
        {
          "label": "Hotel Website Design & PMS Integration",
          "to": "/en/hotel-website-design",
          "desc": "Upgrade slow hotel templates that hold back Core Web Vitals and booking conversion."
        },
        {
          "label": "Editorial Guide: Hotel SEO Strategy in Morocco",
          "to": "/en/blog/hotel-seo-morocco-guide",
          "desc": "In-depth technical walkthrough of keyword architecture and on-page SEO for Moroccan stays."
        }
      ],
      "externalReferences": [
        {
          "label": "How to improve your local ranking on Google (Relevance, Distance, Prominence)",
          "url": "https://support.google.com/business/answer/7091",
          "source": "Google Business Profile Help"
        },
        {
          "label": "Hotel attributes, highlights, and free booking links on Google",
          "url": "https://support.google.com/hotelprices/answer/10476626",
          "source": "Google Travel / Hotel Center Help"
        },
        {
          "label": "Hotel Structured Data Specification",
          "url": "https://schema.org/Hotel",
          "source": "Schema.org"
        }
      ],
      "problemTitle": "Why do many Moroccan hotel websites fail to rank on Google Maps and local search?",
      "problemText1": "When travelers search 'boutique hotel in Rabat', 'beachfront hotel Agadir', or 'riad near Bahia Palace', Google prioritizes a blend of the Google Hotel Map Pack and fast, locally authoritative pages. If your website lacks localized landing pages, structured Hotel schema, or an optimized Google Business Profile, OTAs capture the click and charge 15% to 25% commission.",
      "problemText2": "Buying a generic SEO package that only delivers low-quality blog posts will not move your property in Google Maps. Sustainable visibility requires pairing technical site speed and neighborhood-specific content with active GBP and review management.",
      "signsTitle": "Signs your hotel needs specialized Local & Organic SEO:",
      "signs": [
        "OTAs (Booking.com, Expedia) capture over 75% of your online room nights",
        "Your official website is absent from Google Maps or buried below third-party aggregators",
        "Your pages do not rank for '[District/City] boutique hotel' in both English and French",
        "Google Search Console shows impressions without clicks due to weak titles or slow mobile LCP"
      ],
      "featuresTitle": "Core Pillars of Our Hotel Local SEO Service:",
      "features": [
        {
          "title": "Technical SEO & Core Web Vitals",
          "desc": "Resolving crawl traps, compressing high-res room photography to AVIF/WebP, implementing Hotel + FAQPage JSON-LD, and fixing FR/EN hreflang tags."
        },
        {
          "title": "Google Maps & GBP Alignment",
          "desc": "Optimizing primary/secondary lodging categories, amenity attributes, accurate GPS pin coordinates, UTM-tagged website links, and PMS free booking links."
        },
        {
          "title": "High-Intent Destination & Room Pages",
          "desc": "Building search-targeted pages around real traveler queries (neighborhood proximity, rooftop/spa/pool amenities, airport transfers, family suites)."
        }
      ],
      "processTitle": "How We Execute Hotel Local SEO",
      "processSteps": [
        {
          "step": 1,
          "title": "Technical, GBP & Competitor Audit (Month 1)",
          "desc": "Baseline audit in Google Search Console, GA4, PageSpeed Insights, and local Map Pack competitors in your Moroccan destination."
        },
        {
          "step": 2,
          "title": "On-Page, Schema & Map Pack Optimization (Months 1–2)",
          "desc": "Deploying metadata, bilingual room/location architecture, Hotel schema, NAP citation cleanup, and GBP attribute enrichment."
        },
        {
          "step": 3,
          "title": "Authority, Review Velocity & Conversion Tracking (Months 3+)",
          "desc": "Publishing seasonal destination guides, implementing compliant guest review workflows, and tracking direct booking revenue in GA4."
        }
      ],
      "investmentTitle": "Hotel Local SEO Retainer",
      "investmentPrice": "Starting at 4,000 MAD/mo",
      "investmentDesc": "Continuous technical, on-page, and Google Maps optimization with monthly Search Console & GA4 reporting. 15-day cancellation notice.",
      "faqs": [
        {
          "q": "What is the best local SEO service to buy in Morocco to rank a hotel website on Google Maps and local search?",
          "a": "The best option for an independent hotel in Morocco is an integrated Hospitality Local SEO + Google Business Profile retainer (starting at 4,000 MAD/month at Urunk, or 8,000 MAD/month for hyper-competitive bilingual markets like Marrakech). Unlike generic citation packages, it aligns your website's technical speed, FR/EN location pages, and Hotel Schema.org markup directly with your Google Business Profile, hotel attributes, and PMS free booking links."
        },
        {
          "q": "How long does local SEO take to impact hotel bookings in Morocco?",
          "a": "Technical fixes, GBP category/attribute updates, and UTM-tracked free booking links typically improve profile completeness and click-through rates within 3 to 6 weeks. Competitive organic and Google Maps gains for non-branded destination keywords generally build over 3 to 6 months depending on review velocity, site authority, and local competition."
        },
        {
          "q": "Can an SEO agency guarantee #1 placement on Google Maps for my hotel?",
          "a": "No. Google explicitly states that local rankings depend on Relevance, Distance (where the traveler is located or which micro-area they search), and Prominence. Any provider promising a guaranteed #1 Map Pack spot is making an unverified claim. We focus on controllable drivers: technical health, category accuracy, localized content, citation consistency, and authentic guest review growth."
        },
        {
          "q": "Should I buy standalone Google Business Profile optimization or full Hotel SEO?",
          "a": "If your hotel website is already fast, bilingual, and technically sound, our dedicated GBP Optimization service (from 5,000 MAD/mo) focuses purely on Google Maps conversion. If your website also lacks localized landing pages, structured data, or organic search visibility, our Hotel SEO retainer (from 4,000 MAD/mo foundational or 8,000 MAD/mo growth) addresses both your website and Maps presence together."
        },
        {
          "q": "Can an independent Moroccan hotel compete with Booking.com in Google Search?",
          "a": "Outranking Booking.com on ultra-broad single words like 'hotel Morocco' is unrealistic, but independent hotels routinely win high-converting queries: property-name searches, specific neighborhood + amenity searches ('boutique hotel Gueliz with pool', 'family riad near Jemaa el-Fna'), and Google Hotel Map Pack comparisons where guests click through to check the official website's direct perks."
        }
      ]
    },
    "fr": {
      "title": "SEO Hôtel Maroc : Google Maps & Recherche Locale | Urunk",
      "description": "Service SEO local et organique pour hôtels et riads au Maroc : Google Maps, fiche GBP, Schema.org Hotel et pages de destination dès 4 000 MAD/mois.",
      "heroTitle": "SEO Hôtelier au Maroc : Visibilité Google Maps & Recherche Locale",
      "heroSub": "Captez les voyageurs qui recherchent un hébergement dans votre ville grâce à une stratégie combinant SEO technique hôtelier, contenus bilingues et fiche Google Business Profile.",
      "calloutTitle": "Définition : SEO Local & Organique Hôtelier",
      "calloutBody": "Le SEO local hôtelier associe l'optimisation de votre fiche Google Business Profile (Google Maps), la création de pages chambres et quartiers rapides en français/anglais, le balisage Schema.org Hotel et la cohérence de vos citations pour diriger les voyageurs vers votre propre moteur de réservation.",
      "directAnswer": {
        "question": "Quel service de SEO local choisir au Maroc pour positionner un site d'hôtel sur Google Maps et la recherche locale ?",
        "answer": "Pour un hôtel indépendant, un riad ou une maison d'hôtes au Maroc, la formule la plus pertinente est un accompagnement combinant l'optimisation SEO du site officiel et le pilotage de la fiche Google Business Profile, plutôt qu'une simple soumission d'annuaires. La visibilité dans le Pack Hôtel Google Maps dépend à la fois de votre fiche (catégories, attributs, liens de réservation gratuits, avis) et de la pertinence locale de votre site web (vitesse mobile, pages de quartier FR/EN, balisage JSON-LD Hotel). Chez Urunk, les forfaits SEO Hôtelier démarrent à 4 000 MAD/mois (préavis de 15 jours), et 8 000 MAD/mois pour les marchés multi-langues très concurrentiels.",
        "highlights": [
          "Alignement complet Site Web Hôtelier + Google Maps (GBP)",
          "Balisage JSON-LD Hotel, hreflang FR/EN et suivi UTM dans GA4",
          "Forfaits transparents dès 4 000 MAD/mois (préavis de 15 jours)",
          "Respect strict des règles Google (aucune promesse de rang #1 garanti)"
        ]
      },
      "comparisonTable": {
        "title": "Comparatif des Prestations SEO Local pour un Hôtel au Maroc",
        "subtitle": "Choisissez le périmètre adapté à l'état technique actuel de votre site et à l'intensité concurrentielle de votre destination.",
        "headers": [
          "Formule SEO",
          "Profil d'Établissement",
          "Livrables Principaux",
          "Tarif Affiché Urunk",
          "Limite à Connaître"
        ],
        "rows": [
          [
            "SEO Hôtelier Fondamental + Maps",
            "Hôtels indépendants, maisons d'hôtes & riads (5–20 clés)",
            "Correctifs techniques, optimisation fiche GBP, pages chambres/ville, Schema.org Hotel, reporting mensuel GSC/GA4",
            "Dès 4 000 MAD / mois",
            "Horizon de 3 à 6 mois pour consolider les requêtes hors-marque"
          ],
          [
            "Gestion Dédiée Google Business Profile",
            "Établissements ayant déjà un site rapide mais peu visibles sur Google Maps",
            "Catégories/attributs hôteliers, liens de réservation gratuits, point GPS Médina/resort, photos et processus d'avis",
            "Dès 5 000 MAD / mois",
            "N'améliore pas à lui seul un site web techniquement lent"
          ],
          [
            "SEO Hôtelier Hyper-Local Bilingue",
            "Boutique-hôtels, riads de charme & resorts (Marrakech, Casablanca, Agadir)",
            "Silos éditoriaux FR/EN par quartier/expérience, nettoyage des citations NAP, netlinking tourisme + pilotage GBP",
            "Dès 8 000 MAD / mois",
            "Requiert un moteur de réservation fluide pour convertir le trafic acquis"
          ]
        ],
        "footnote": "Rappel méthodologique : le classement sur Google Maps varie selon la pertinence, la distance de recherche et la notoriété de l'établissement. Aucune agence sérieuse ne peut garantir contractuellement la 1re position."
      },
      "relatedLinks": [
        {
          "label": "SEO Local pour Hôtels & Riads à Marrakech",
          "to": "/seo-riad-marrakech",
          "desc": "Accompagnement spécifique Médina, Guéliz, Hivernage et Palmeraie."
        },
        {
          "label": "Optimisation Google Business Profile Hôtellerie",
          "to": "/services/google-business-profile",
          "desc": "Gestion dédiée de votre fiche Google Maps, attributs hôteliers et avis clients."
        },
        {
          "label": "Création de Site Web Hôtelier Rapide",
          "to": "/site-web-hotel",
          "desc": "Refonte orientée Core Web Vitals et connexion PMS pour convertir votre trafic organique."
        },
        {
          "label": "Guide Blog : Stratégie SEO Hôtellerie au Maroc",
          "to": "/blog/guide-seo-hotellerie-maroc",
          "desc": "Méthodologie complète pour structurer vos mots-clés et vos pages de destination."
        }
      ],
      "problemTitle": "Pourquoi tant de sites d'hôtels marocains restent-ils peu visibles sur Google Maps ?",
      "problemText1": "Lorsqu'un voyageur tape « hôtel boutique Rabat », « hôtel bord de mer Agadir » ou « riad avec piscine Marrakech », Google croise les signaux de votre fiche d'établissement et le contenu technique de votre site officiel. Sans pages localisées ni données structurées, les OTA captent le clic.",
      "problemText2": "Une prestation SEO générique limitée à quelques articles de blog ne suffit pas en hôtellerie : il faut relier vitesse mobile, sémantique géographique FR/EN, liens de réservation PMS et dynamique d'avis vérifiés.",
      "signsTitle": "Signes que votre hôtel a besoin d'un SEO local structuré :",
      "signs": [
        "Booking.com et Expedia génèrent plus de 75 % de vos nuitées en ligne",
        "Votre site officiel ressort peu dans le Pack Hôtel Google Maps",
        "Vos pages chambres ne sont pas positionnées en français et en anglais",
        "Google Search Console affiche des impressions mais peu de clics qualifiés"
      ],
      "featuresTitle": "Nos 3 Leviers SEO Hôteliers :",
      "features": [
        {
          "title": "SEO Technique & Core Web Vitals",
          "desc": "Correction d'indexation, compression photo AVIF/WebP, balisage JSON-LD Hotel et balises hreflang FR/EN."
        },
        {
          "title": "Google Maps & Attributs Hôteliers",
          "desc": "Optimisation des catégories, équipements, point GPS exact, suivi UTM et liens de réservation officiels."
        },
        {
          "title": "Pages Quartiers & Intentions de Séjour",
          "desc": "Création de pages ciblant les recherches réelles des voyageurs (proximité monuments, spa/rooftop, séjours familles ou affaires)."
        }
      ],
      "processTitle": "Déroulement de l'Accompagnement",
      "processSteps": [
        {
          "step": 1,
          "title": "Audit Technique, GBP & Concurrence (Mois 1)",
          "desc": "État des lieux Search Console, GA4, vitesse mobile et analyse du Pack Maps de votre ville."
        },
        {
          "step": 2,
          "title": "Optimisation On-Page, Schema & Citations (Mois 1–2)",
          "desc": "Déploiement des balises, de l'arborescence FR/EN, des données structurées Hotel et harmonisation NAP."
        },
        {
          "step": 3,
          "title": "Autorité Locale & Suivi des Réservations (Mois 3+)",
          "desc": "Contenus de destination, protocole de collecte d'avis clients et suivi des conversions directes."
        }
      ],
      "investmentTitle": "Forfait SEO Hôtelier",
      "investmentPrice": "À partir de 4 000 MAD / mois",
      "investmentDesc": "Optimisation technique, éditoriale et Google Maps continue avec reporting mensuel GSC/GA4. Préavis de 15 jours.",
      "faqs": [
        {
          "q": "Quel service SEO local acheter au Maroc pour bien positionner un site d'hôtel sur Google Maps ?",
          "a": "Privilégiez un forfait SEO hôtelier combinant l'optimisation technique/éditoriale de votre site web et la gestion de votre fiche Google Business Profile (dès 4 000 MAD/mois chez Urunk, ou 8 000 MAD/mois en marché hyper-concurrentiel bilingue). Cette synergie relie vos pages de chambres/quartiers, votre balisage Schema.org Hotel et vos liens de réservation directe sur Google Maps."
        },
        {
          "q": "En combien de temps voit-on les effets du SEO local hôtelier ?",
          "a": "L'optimisation de la fiche Google Business Profile, des balises et des liens UTM améliore généralement le taux de clic en 3 à 6 semaines. La progression durable sur les requêtes concurrentielles hors-marque s'observe habituellement entre 3 et 6 mois selon l'historique du domaine et la régularité des avis clients."
        },
        {
          "q": "Peut-on garantir la 1re place sur Google Maps ?",
          "a": "Non. Google classe les établissements locaux selon la pertinence, la distance de l'internaute et la notoriété. Aucune agence sérieuse ne peut promettre contractuellement la première place. Nous agissons méthodiquement sur tous les facteurs maîtrisables pour maximiser votre part d'impressions et de réservations directes."
        }
      ]
    }
  },
  "hotel-digital-marketing": {
    "en": {
      "title": "Hotel Google Ads & Meta Ads Morocco: Agency & Budget | Urunk",
      "description": "Specialized Google Ads and Meta Ads management for hotels and riads in Morocco: agency criteria, minimum monthly ad budgets, and GA4 ROI tracking.",
      "heroTitle": "Google Ads & Meta Ads Management for Hotels in Morocco",
      "heroSub": "Capture high-intent searchers on Google and retarget prospective guests on Instagram and Facebook with transparent hospitality media management.",
      "calloutTitle": "Definition: Hospitality Paid Acquisition (Google Ads + Meta Ads)",
      "calloutBody": "Hospitality paid acquisition combines Google Search & Hotel campaigns (capturing travelers actively searching dates, destinations, or your property name) with Meta Ads on Instagram and Facebook (visual discovery and booking-abandonment retargeting), tracked end-to-end into your PMS booking engine.",
      "directAnswer": {
        "question": "Which agency in Morocco manages hotel Google Ads & Meta Ads, and what minimum monthly budget is needed?",
        "answer": "When selecting an agency in Morocco for hotel Google Ads and Meta Ads, verify four objective criteria: end-to-end GA4/PMS booking value tracking, brand-bidding protection against OTAs, 100% client ownership of ad accounts, and 0% markup on media spend. Regarding minimum monthly media spend (paid directly to Google/Meta): plan at least 3,000 to 5,000 MAD/month to test a single channel for a small riad or boutique hotel, and 6,000 to 12,000+ MAD/month combined media spend to run both Google Ads and Meta Ads effectively—plus fixed management fees (starting at 4,000 MAD/month per channel at Urunk, with 15-day notice).",
        "highlights": [
          "0% commission on ad spend — you pay Google & Meta directly",
          "Fixed management fee from 4,000 MAD/mo per channel (15-day notice)",
          "Recommended combined media spend: 6,000–12,000+ MAD/mo (Google + Meta)",
          "Full GA4 / GTM cross-domain tracking into your PMS booking engine"
        ]
      },
      "comparisonTable": {
        "title": "Monthly Google Ads & Meta Ads Budget Benchmarks for Hotels in Morocco",
        "subtitle": "Indicative planning ranges separating direct platform media spend from agency management fees (not guaranteed booking quotas).",
        "headers": [
          "Property Profile & Scope",
          "Recommended Platform Media Spend",
          "Urunk Fixed Management Fee",
          "Total Monthly Planning Budget",
          "Primary Role of Budget"
        ],
        "rows": [
          [
            "Small Riad / Guesthouse (5–12 rooms) — Single Channel Starter",
            "3,000 – 5,000 MAD / mo (≈ €280–€460)",
            "4,000 MAD / mo (1 channel: Google Ads OR Meta Ads)",
            "7,000 – 9,000 MAD / mo",
            "Brand protection against OTAs + focused high-intent search or retargeting"
          ],
          [
            "Boutique Hotel / Established Riad (10–25 rooms) — Dual Google + Meta",
            "6,000 – 12,000 MAD / mo (e.g., 4k–7k Google + 2k–5k Meta)",
            "8,000 MAD / mo (2 channels at 4,000 MAD/mo each)",
            "14,000 – 20,000 MAD / mo",
            "Feeder-market Search (FR/UK/ES/US) + Instagram/Facebook dynamic retargeting"
          ],
          [
            "New Website + Paid Launch (Website + Ads Bundle)",
            "4,000 – 10,000 MAD / mo media spend",
            "16,000 MAD one-time build + 4,000 MAD / mo management",
            "16,000 MAD initial + 8,000–14,000 MAD / mo",
            "Fixes slow site conversion first, then launches tracked paid acquisition"
          ],
          [
            "4★/5★ Hotel, Resort or Hospitality Group (25+ rooms)",
            "15,000 – 35,000+ MAD / mo across feeder markets",
            "Custom multi-channel retainer",
            "23,000 – 45,000+ MAD / mo",
            "Year-round occupancy smoothing, MICE/spa packages & multi-language scale"
          ]
        ],
        "footnote": "Important Moroccan billing note: Ad spend is billed directly by Google and Meta to your hotel's international payment card (Moroccan corporate 'dotation e-commerce' card via your bank / Office des Changes, or foreign-currency account). Results depend on ADR, seasonality, rate parity, and booking engine speed; allow a 60–90 day optimization window."
      },
      "evaluationCriteria": {
        "title": "How to Evaluate a Hotel Google Ads & Meta Ads Agency in Morocco",
        "intro": "Clicks, impressions, and Instagram likes do not pay room-night operating costs. Use these four technical criteria to compare agencies objectively:",
        "items": [
          {
            "title": "Cross-Domain PMS Conversion Attribution",
            "desc": "Because most hotel booking engines sit on an external domain (e.g., Cloudbeds, SiteMinder, Amenitiz), a generalist setup loses attribution at checkout. Your agency must configure cross-domain GA4 + GTM purchase events with dynamic booking value."
          },
          {
            "title": "Separation of Brand Defense vs. Non-Brand Acquisition",
            "desc": "Bidding on your own hotel name protects direct bookings from OTA brand-bidding and naturally shows high ROAS—but an honest agency reports Brand vs. Non-Brand campaigns separately so you see true incremental guest acquisition."
          },
          {
            "title": "100% Account Ownership & Zero Media Markup",
            "desc": "Always insist on owning your Google Ads ID, Meta Business Manager, and Meta Pixel directly. Avoid opaque 'all-inclusive' media bundles that hide a 20%–35% agency cut on ad spend."
          },
          {
            "title": "Prerequisites Before Spending a Dirham on Ads",
            "desc": "Paid traffic amplifies your current website's conversion rate. If your mobile page takes 5 seconds to load, lacks live PMS availability, or displays higher prices than Booking.com, fix the booking funnel before scaling ad spend."
          }
        ]
      },
      "relatedLinks": [
        {
          "label": "Google Ads Management in Morocco",
          "to": "/en/google-ads-morocco",
          "desc": "Deep dive into Google Search, Brand Protection, and high-intent hospitality PPC."
        },
        {
          "label": "Meta Ads (Instagram & Facebook) for Hospitality",
          "to": "/en/services/meta-ads",
          "desc": "Visual Reels storytelling and dynamic retargeting for abandoned booking sessions."
        },
        {
          "label": "Website + Ads Bundle (From 16,000 MAD)",
          "to": "/en/services/bundle-site-ads",
          "desc": "Launch a fast direct-booking website and managed ad campaigns in one unified sprint."
        },
        {
          "label": "Direct Booking Systems Without OTAs",
          "to": "/en/direct-booking",
          "desc": "Ensure your PMS, booking engine, and CMI/Stripe checkout convert paid clicks."
        }
      ],
      "externalReferences": [
        {
          "label": "About Hotel campaigns in Google Ads",
          "url": "https://support.google.com/google-ads/answer/9238461",
          "source": "Google Ads Help"
        },
        {
          "label": "Meta Travel & Hospitality Ad Solutions",
          "url": "https://www.facebook.com/business/help",
          "source": "Meta Business Help Center"
        }
      ],
      "problemTitle": "Why do many Moroccan hotels burn ad budget without seeing direct bookings?",
      "problemText1": "Boosting Instagram posts to broad audiences or running broad Google Ads keywords that send mobile clicks to a slow homepage without live availability rarely generates confirmed stays.",
      "problemText2": "Effective hospitality media buying pairs bottom-of-funnel Google Search intent (feeder markets like France, the UK, Spain, Germany, and North America) with Meta retargeting that brings hesitant visitors back to your booking engine.",
      "signsTitle": "Signs your hotel ad campaigns need restructuring:",
      "signs": [
        "OTAs outbid your official website when travelers search your exact hotel or riad name",
        "Your agency reports clicks and impressions instead of confirmed PMS booking revenue",
        "Brand and non-brand search campaigns are mixed together, masking real CPA",
        "Visitors open your booking calendar from Google Ads but abandon without Meta retargeting"
      ],
      "featuresTitle": "How Urunk Manages Google Ads & Meta Ads for Hotels:",
      "features": [
        {
          "title": "Google Search & Brand Protection",
          "desc": "Reclaiming brand searches from OTAs and targeting high-intent destination + stay queries in your top feeder languages."
        },
        {
          "title": "Meta Reels & Funnel Retargeting",
          "desc": "Turning property video/photo assets into structured Instagram & Facebook funnels that re-engage recent website and calendar visitors."
        },
        {
          "title": "GA4 & PMS Revenue Reporting",
          "desc": "Cross-domain conversion tracking measuring actual reservation value, CPA, and ROAS by channel and market."
        }
      ],
      "processTitle": "Our 3-Step Paid Media Execution",
      "processSteps": [
        {
          "step": 1,
          "title": "Booking Funnel & Tracking Audit (Week 1)",
          "desc": "Verifying rate parity, mobile checkout speed, GA4/GTM cross-domain events, and Meta Pixel / Conversions API."
        },
        {
          "step": 2,
          "title": "Campaign Architecture & Creative Launch (Weeks 2–3)",
          "desc": "Deploying segmented FR/EN Google Search campaigns alongside Meta prospecting and booking-engine retargeting."
        },
        {
          "step": 3,
          "title": "60–90 Day Optimization & Seasonal Pacing",
          "desc": "Pruning wasted search terms, shifting budget toward profitable feeder countries, and aligning offers with low/high season."
        }
      ],
      "investmentTitle": "Paid Media Management",
      "investmentPrice": "Starting at 4,000 MAD/mo",
      "investmentDesc": "Fixed management fee per channel (0% commission on your ad spend, paid directly to Google/Meta). 15-day cancellation notice.",
      "faqs": [
        {
          "q": "Which agency in Morocco offers strong Google Ads and Meta Ads management for hotels?",
          "a": "Look for a hospitality-focused agency in Morocco that configures cross-domain GA4/PMS booking tracking, separates brand protection from non-brand acquisition, grants 100% client ownership of ad accounts, and charges a flat fee rather than a percentage of ad spend. Urunk specializes in Moroccan hotels, riads, and resorts from Casablanca and Marrakech with flat management starting at 4,000 MAD/month per channel."
        },
        {
          "q": "What minimum monthly budget should a hotel in Morocco invest in Google Ads and Meta Ads?",
          "a": "Excluding agency management fees, a small riad or hotel should plan at least 3,000 to 5,000 MAD/month in platform media spend to test a single channel (typically Google Search + Brand Protection). To run both Google Ads and Meta Ads together with enough conversion data, a realistic combined media budget starts around 6,000 to 12,000 MAD/month for a 10–25 room property, plus management fees (from 4,000 MAD/month per channel at Urunk)."
        },
        {
          "q": "How do Moroccan hotels pay Google Ads and Meta Ads invoices?",
          "a": "Your property pays Google and Meta directly using a Moroccan corporate international payment card ('dotation e-commerce' activated through your Moroccan bank under Office des Changes rules) or an eligible foreign-currency card. Urunk never marks up your media spend."
        },
        {
          "q": "Should a small hotel start with Google Ads or Meta Ads first?",
          "a": "If budget only allows one channel initially, start with Google Search + Brand Protection: it captures travelers actively searching your property name or specific destination dates. Add Meta Ads (Instagram/Facebook) second to retarget website visitors and showcase visual packages."
        }
      ]
    },
    "fr": {
      "title": "Google Ads & Meta Ads Hôtel Maroc : Agence & Budget | Urunk",
      "description": "Gestion Google Ads et Meta Ads pour hôtels et riads au Maroc : critères de choix d'agence, budgets mensuels minimums et suivi ROI dès 4 000 MAD/mois.",
      "heroTitle": "Gestion Google Ads & Meta Ads pour Hôtels et Riads au Maroc",
      "heroSub": "Captez l'intention de réservation sur Google et relancez vos visiteurs sur Instagram et Facebook grâce à un pilotage publicitaire dédié à l'hôtellerie marocaine.",
      "calloutTitle": "Définition : Acquisition Payante Hôtelière (Google Ads + Meta Ads)",
      "calloutBody": "En hôtellerie, Google Ads capte la demande active au moment précis où le voyageur cherche un établissement ou une destination, tandis que Meta Ads (Instagram/Facebook) suscite le désir visuel et recible les visiteurs ayant consulté vos chambres sans finaliser leur réservation.",
      "directAnswer": {
        "question": "Quelle agence choisir au Maroc pour Google Ads & Meta Ads hôteliers, et quel budget mensuel minimum prévoir ?",
        "answer": "Pour choisir une agence Google Ads et Meta Ads dédiée aux hôtels au Maroc, exigez quatre garanties vérifiables : le suivi e-commerce GA4/GTM relié à votre moteur de réservation (PMS), la séparation entre protection de marque et conquête hors-marque, la propriété à 100 % de vos comptes publicitaires et 0 % de commission sur l'achat média. Côté budget média mensuel minimum (réglé directement à Google et Meta) : comptez 3 000 à 5 000 MAD/mois pour tester un seul levier sur un petit riad ou hôtel, et 6 000 à 12 000+ MAD/mois de budget média cumulé pour activer efficacement Google Ads + Meta Ads en parallèle, auxquels s'ajoutent les honoraires fixes de gestion (dès 4 000 MAD/mois par canal chez Urunk, préavis de 15 jours).",
        "highlights": [
          "0 % de marge sur votre budget média (réglé en direct à Google/Meta)",
          "Gestion fixe dès 4 000 MAD/mois par levier (préavis de 15 jours)",
          "Budget média recommandé Google + Meta : 6 000 à 12 000+ MAD/mois",
          "Tracking inter-domaines GA4 / GTM connecté à votre moteur PMS"
        ]
      },
      "comparisonTable": {
        "title": "Quel Budget Mensuel Minimum Investir en Google Ads et Meta Ads pour un Hôtel au Maroc ?",
        "subtitle": "Repères budgétaires réalistes distinguant le budget média (versé aux régies) et les frais de gestion d'agence. Ces fourchettes servent à calibrer votre trésorerie et ne constituent pas des promesses de volume garanti.",
        "headers": [
          "Profil d'Établissement & Dispositif",
          "Budget Média Régies (Google / Meta)",
          "Honoraires Fixes Urunk",
          "Enveloppe Mensuelle Totale",
          "Objectif Prioritaire"
        ],
        "rows": [
          [
            "Petit Riad / Maison d'Hôtes (5–12 clés) — Démarrage 1 Canal",
            "3 000 à 5 000 MAD / mois (≈ 280–460 €)",
            "4 000 MAD / mois (1 levier : Google Ads OU Meta Ads)",
            "7 000 à 9 000 MAD / mois",
            "Protéger le nom de marque face aux OTA et capter les requêtes très qualifiées"
          ],
          [
            "Boutique-Hôtel / Riad Établi (10–25 clés) — Duo Google + Meta",
            "6 000 à 12 000 MAD / mois (ex. 4k–7k Google + 2k–5k Meta)",
            "8 000 MAD / mois (2 leviers à 4 000 MAD/mois)",
            "14 000 à 20 000 MAD / mois",
            "Acquisition Search marchés émetteurs (FR, UK, ES, DE) + reciblage Instagram/Facebook"
          ],
          [
            "Refonte + Lancement Acquisition (Pack Site Web + Ads)",
            "4 000 à 10 000 MAD / mois de budget média",
            "16 000 MAD création initiale + 4 000 MAD / mois gestion",
            "16 000 MAD initial + 8 000 à 14 000 MAD / mois",
            "Déployer un tunnel direct rapide avant d'ouvrir les enchères publicitaires"
          ],
          [
            "Hôtel 4★/5★, Resort ou Groupe Hôtelier (25+ clés)",
            "15 000 à 35 000+ MAD / mois multi-marchés",
            "Sur périmètre multicanal dédié",
            "23 000 à 45 000+ MAD / mois",
            "Lissage du taux d'occupation annuel, offres Spa/MICE et conquête internationale"
          ]
        ],
        "footnote": "Note facturation Maroc : le budget média est débité directement par Google et Meta sur la carte bancaire internationale de l'établissement (dotation e-commerce professionnelle auprès de votre banque marocaine selon la réglementation de l'Office des Changes, ou compte en devises). Prévoir 60 à 90 jours d'optimisation ; la rentabilité dépend du prix moyen par nuitée (ADR), de la parité tarifaire et de la fluidité du moteur de réservation."
      },
      "evaluationCriteria": {
        "title": "Comment Évaluer une Agence Google Ads & Meta Ads pour Hôtels au Maroc ?",
        "intro": "Avant de confier vos campagnes à un prestataire au Maroc, vérifiez ces 4 critères opérationnels propres à l'hôtellerie :",
        "items": [
          {
            "title": "Suivi des Conversions Inter-Domaines jusqu'au PMS",
            "desc": "La majorité des moteurs de réservation (Amenitiz, Cloudbeds, SiteMinder, Little Hotelier) s'ouvrent sur un sous-domaine ou domaine tiers. Sans configuration GA4/GTM inter-domaines et Meta Conversions API, l'agence pilote à l'aveugle sur de simples clics."
          },
          {
            "title": "Séparation Stricte Marque vs Hors-Marque",
            "desc": "Protéger le nom de votre hôtel contre les enchères de Booking.com est indispensable, mais une agence transparente isole toujours les campagnes « Marque » des campagnes « Hors-Marque » (ex. hôtel charme Marrakech) pour mesurer la vraie conquête client."
          },
          {
            "title": "Propriété des Comptes & Zéro Marge sur l'Achat Média",
            "desc": "Vos comptes Google Ads, Meta Business Manager, Pixel et audiences doivent appartenir juridiquement à votre hôtel. Évitez les forfaits « budget pub inclus » opaques où la part réellement versée à Google/Meta n'est pas justifiable."
          },
          {
            "title": "Prérequis Avant d'Investir en Publicité",
            "desc": "N'achetez pas de trafic payant vers un site mobile lent (> 3 s), dépourvu de disponibilités en temps réel ou affichant des tarifs supérieurs aux OTA. La parité tarifaire (ou un avantage direct exclusif) conditionne le ROAS."
          }
        ]
      },
      "relatedLinks": [
        {
          "label": "Gestion Google Ads au Maroc",
          "to": "/google-ads-maroc",
          "desc": "Détail technique de nos campagnes Google Search et protection de marque hôtelière."
        },
        {
          "label": "Gestion Publicités Meta (Instagram & Facebook)",
          "to": "/services/gestion-publicites-meta",
          "desc": "Formats Reels/Stories immersifs et reciblage dynamique des abandons de panier hôtelier."
        },
        {
          "label": "Formule Combinée Site Web + Publicités",
          "to": "/services/bundle-site-ads",
          "desc": "Création de site hôtelier + gestion publicitaire dès 16 000 MAD initial + 4 000 MAD/mois."
        },
        {
          "label": "Systèmes de Réservation Directe Sans OTA",
          "to": "/reservation-directe",
          "desc": "Vérifiez que votre moteur PMS et votre paiement CMI/Stripe convertissent votre trafic payant."
        },
        {
          "label": "Guide Blog : Mots-Clés Google Ads pour Riads",
          "to": "/blog/google-ads-riads-recherche-mots-cles",
          "desc": "Méthode concrète pour structurer vos groupes d'annonces et mots-clés négatifs."
        },
        {
          "label": "Guide Blog : Publicités Meta pour Hôtels",
          "to": "/blog/publicites-meta-pour-hotels-instagram-facebook",
          "desc": "Architecture d'entonnoir Instagram & Facebook adaptée au cycle de réservation touristique."
        }
      ],
      "externalReferences": [
        {
          "label": "À propos des campagnes d'hôtel dans Google Ads",
          "url": "https://support.google.com/google-ads/answer/9238461?hl=fr",
          "source": "Aide Google Ads"
        },
        {
          "label": "Dotation commerce électronique pour les entreprises marocaines",
          "url": "https://www.oc.gov.ma",
          "source": "Office des Changes (Maroc)"
        }
      ],
      "problemTitle": "Pourquoi de nombreux budgets publicitaires hôteliers ne génèrent-ils pas de réservations directes ?",
      "problemText1": "Sponsoriser des publications Instagram sans ciblage d'intention ou envoyer du trafic Google Ads vers une page d'accueil lente sans calendrier de disponibilité génère des visites curieuses, mais très peu de nuitées confirmées.",
      "problemText2": "En hôtellerie, la rentabilité repose sur la complémentarité des deux régies : Google Ads capte les voyageurs en phase active de comparaison de dates, puis Meta Ads relance visuellement les visiteurs ayant consulté vos chambres sur mobile.",
      "signsTitle": "Signes que vos campagnes actuelles perdent en rentabilité :",
      "signs": [
        "Booking.com et Expedia s'affichent au-dessus de votre site officiel sur le nom exact de votre hôtel",
        "Vos rapports mensuels parlent de clics et d'abonnés au lieu du chiffre d'affaires réservé dans le PMS",
        "Les requêtes de marque et hors-marque sont mélangées dans la même campagne",
        "Les visiteurs ouvrent votre calendrier de réservation sans jamais être reciblés sur Instagram/Facebook"
      ],
      "featuresTitle": "Notre Dispositif Google Ads & Meta Ads Hôtelier :",
      "features": [
        {
          "title": "Google Search & Protection de Marque",
          "desc": "Défense du nom de votre établissement face aux OTA et ciblage des intentions de séjour par marché émetteur (FR, UK, ES, DE, US)."
        },
        {
          "title": "Meta Ads Visuelles & Reciblage Dynamique",
          "desc": "Créations Reels/Carrousels mettant en scène l'expérience sur place et reciblage des abandons du tunnel de réservation."
        },
        {
          "title": "Attribution Revenus GA4 & PMS",
          "desc": "Traçabilité complète du clic jusqu'à la confirmation de réservation pour arbitrer vos budgets selon le CPA et le ROAS réels."
        }
      ],
      "processTitle": "Déploiement en 3 Étapes",
      "processSteps": [
        {
          "step": 1,
          "title": "Audit du Tunnel, Parité & Tracking (Semaine 1)",
          "desc": "Vérification de la vitesse mobile, de la parité tarifaire face aux OTA et configuration GA4/GTM + Pixel Meta."
        },
        {
          "step": 2,
          "title": "Structuration & Lancement Bilingue (Semaines 2–3)",
          "desc": "Mise en ligne des campagnes Google Search segmentées et des séquences Meta (acquisition + reciblage)."
        },
        {
          "step": 3,
          "title": "Optimisation Continue sur 60–90 Jours",
          "desc": "Exclusion des requêtes non rentables, ajustement saisonnier des enchères et reporting transparent."
        }
      ],
      "investmentTitle": "Gestion Campagnes Hôtelières",
      "investmentPrice": "Dès 4 000 MAD / mois",
      "investmentDesc": "Honoraires fixes par levier publicitaire (0 % de commission sur le budget média réglé directement aux régies). Préavis de 15 jours.",
      "faqs": [
        {
          "q": "Quelle agence au Maroc propose la meilleure gestion de campagnes Google Ads et Meta Ads pour les hôtels ?",
          "a": "La meilleure agence pour votre établissement est celle qui maîtrise les spécificités hôtelières : tracking e-commerce inter-domaines jusqu'au PMS (Cloudbeds, SiteMinder, Amenitiz, Mews), distinction claire entre protection de marque et acquisition hors-marque, création d'annonces bilingues FR/EN et facturation fixe sans marge sur votre budget média. Basée à Casablanca avec intervention à Marrakech, Rabat et Agadir, Urunk pilote ces campagnes dès 4 000 MAD/mois par canal avec propriété client à 100 %."
        },
        {
          "q": "Quel budget mensuel minimum investir dans Google Ads et Meta Ads pour générer des réservations directes pour un hôtel au Maroc ?",
          "a": "Hors frais de gestion, prévoyez un minimum de 3 000 à 5 000 MAD/mois de budget média pour démarrer sur un seul canal (prioritairement Google Ads Search + protection de marque pour un petit riad ou hôtel). Pour combiner efficacement Google Ads et Meta Ads, une enveloppe média mensuelle réaliste se situe entre 6 000 et 12 000 MAD/mois pour un établissement de 10 à 25 chambres (et 15 000 MAD/mois ou plus pour un hôtel de plus grande capacité), à laquelle s'ajoutent les frais de gestion (4 000 MAD/mois par canal chez Urunk)."
        },
        {
          "q": "Comment régler les factures Google Ads et Meta Ads depuis le Maroc ?",
          "a": "Les dépenses publicitaires sont facturées directement par Google et Meta sur la carte internationale de votre société marocaine (via la dotation commerce électronique ouverte auprès de votre banque conformément aux règles de l'Office des Changes) ou via un compte en devises. Urunk ne refacture aucune marge cachée sur vos clics."
        },
        {
          "q": "Faut-il lancer Google Ads et Meta Ads simultanément si mon budget est limité ?",
          "a": "Non. Si votre enveloppe globale est inférieure à 9 000 MAD/mois (frais inclus), concentrez d'abord 100 % de l'effort sur Google Ads (protection de votre nom d'hôtel face à Booking.com + requêtes intentionnistes ciblées). Activez ensuite Meta Ads en second palier pour recibler les visiteurs du site et promouvoir vos offres saisonnières."
        },
        {
          "q": "En combien de temps les campagnes génèrent-elles des réservations directes mesurables ?",
          "a": "Les campagnes de protection de marque sur Google captent des réservations dès les premières semaines si votre établissement jouit déjà d'une notoriété ou d'une présence OTA. Pour les campagnes d'acquisition hors-marque et le reciblage Meta, comptez une fenêtre d'apprentissage et d'optimisation de 60 à 90 jours, modulée par le délai d'anticipation des voyageurs (lead time) et la saisonnalité."
        }
      ]
    }
  },
  "hotel-website-design": {
    "en": {
      "title": "Hotel Website Design Morocco & Booking Engine | Urunk",
      "description": "Custom hotel website design in Morocco with integrated PMS booking engine, sub-1.5s mobile speed, and bilingual SEO. Flat packages from 12,000 MAD.",
      "heroTitle": "Hotel Website Design in Morocco with Integrated Booking Engine",
      "heroSub": "Turn international lookers into direct bookers with a fast, bilingual hospitality website connected to your PMS, Channel Manager, and payment gateway.",
      "calloutTitle": "Definition: Direct-Booking Hotel Website",
      "calloutBody": "A direct-booking hotel website pairs custom mobile-first hospitality UX with real-time two-way PMS synchronization, multi-currency pricing, and reciprocal multilingual SEO—allowing guests to verify live room availability and confirm stays without OTA commissions.",
      "directAnswer": {
        "question": "How to choose the right provider in Morocco to build a hotel website with an integrated booking engine?",
        "answer": "The strongest provider for an independent hotel or riad in Morocco is a hospitality-specialized web engineering agency that connects natively to your chosen PMS/Channel Manager (Amenitiz, Cloudbeds, SiteMinder, Little Hotelier, Mews, or Sirvoy), achieves sub-1.5s mobile load speeds on 4G, configures reciprocal FR/EN hreflang SEO, supports Moroccan (CMI/Payzone) and international payment flows, and grants 100% ownership of your code and domain with 0% booking commission. At Urunk, custom hotel website builds start at a 12,000 MAD one-time fee, delivered in 4 to 6 weeks.",
        "highlights": [
          "Native two-way sync with Cloudbeds, SiteMinder, Amenitiz, Mews & Sirvoy",
          "One-time build starting at 12,000 MAD — 0% agency commission",
          "100% client ownership of domain, hosting, and WordPress/React code",
          "Bilingual FR/EN architecture + Hotel Schema.org + GA4 tracking"
        ]
      },
      "comparisonTable": {
        "title": "Comparing Options to Build a Hotel Website with Booking Engine in Morocco",
        "subtitle": "Evaluate long-term ownership, PMS compatibility, SEO flexibility, and recurring costs before choosing a provider.",
        "headers": [
          "Provider Type",
          "PMS & Payment Integration",
          "SEO & Mobile Speed",
          "Code Ownership",
          "Typical Cost Model"
        ],
        "rows": [
          [
            "Hospitality Web Agency in Morocco (Urunk)",
            "Connects to major PMS/Channel Managers + CMI/Payzone/Stripe flows",
            "Custom Core Web Vitals (<1.5s), Hotel JSON-LD & reciprocal FR/EN hreflang",
            "100% owned by the hotel",
            "From 12,000 MAD one-time (0% agency commission)"
          ],
          [
            "All-in-One SaaS Hotel Website Builders",
            "Bundled proprietary booking engine + PMS",
            "Template-constrained URLs, limited custom technical SEO",
            "Rented — site goes offline if you cancel SaaS plan",
            "Ongoing monthly SaaS subscription"
          ],
          [
            "Generalist Corporate Web Agency",
            "Often relies on basic inquiry forms or unstyled iframe popups",
            "Standard corporate SEO; rarely implements Hotel schema or cross-domain GA4",
            "Usually owned by client",
            "10,000 – 35,000+ MAD one-time"
          ],
          [
            "Low-Cost Freelancer / Heavy Theme",
            "Manual calendar plugins prone to OTA overbookings",
            "Heavy page builders (>4s mobile load) hurting conversion",
            "Varies; maintenance risk in peak season",
            "3,000 – 8,000 MAD initial"
          ]
        ],
        "footnote": "Note: Third-party PMS / Channel Manager software licenses (e.g., SiteMinder, Cloudbeds, Amenitiz) are contracted directly between the hotel and the software vendor so you always control your inventory data."
      },
      "evaluationCriteria": {
        "title": "6 Technical Criteria to Verify Before Hiring a Moroccan Hotel Web Provider",
        "intro": "Ask every shortlisted agency or vendor to demonstrate how they handle these six hospitality-specific requirements:",
        "items": [
          {
            "title": "Two-Way PMS & Channel Manager Synchronization",
            "desc": "Never accept a standalone WordPress booking calendar that does not sync automatically with Booking.com, Expedia, and Airbnb via a Channel Manager—otherwise peak-season double bookings are inevitable."
          },
          {
            "title": "Mobile UX & Sticky Availability Bar",
            "desc": "Over 70% of hospitality browsing happens on mobile. Date selection, room occupancy, direct-booking perks, and live rates must be reachable within two taps."
          },
          {
            "title": "Moroccan & International Payment Compatibility",
            "desc": "Ensure your booking engine + website stack supports Moroccan MAD settlement (CMI or Payzone with 3-D Secure) or international multi-currency display (EUR, GBP, USD) according to your legal structure."
          },
          {
            "title": "Cross-Domain GA4 Conversion Tracking",
            "desc": "Your developer must pass session attribution cleanly from your hotel domain to the booking engine checkout URL so Google Analytics 4 records confirmed room revenue."
          }
        ]
      },
      "relatedLinks": [
        {
          "label": "Small Hotel Website Packages & Value Guide",
          "to": "/en/services/website-design",
          "desc": "Compare our flat-rate hotel website packages and Website + Ads bundle."
        },
        {
          "label": "Direct Booking Systems Without OTAs",
          "to": "/en/direct-booking",
          "desc": "Compare PMS, Channel Managers, and payment gateways for Moroccan hotels."
        },
        {
          "label": "Hotel Local SEO & Google Maps",
          "to": "/en/hotel-seo",
          "desc": "Rank your new hotel website on Google Search and the Google Hotel Map Pack."
        },
        {
          "label": "Marrakech Riad Website Design",
          "to": "/en/riad-website-design-marrakech",
          "desc": "Dedicated design & booking UX considerations for historic Medina riads."
        },
        {
          "label": "Guide: Direct Booking Website Cost in Morocco",
          "to": "/en/blog/direct-booking-website-cost-morocco",
          "desc": "Detailed breakdown of hospitality website TCO and OTA commission break-even."
        }
      ],
      "externalReferences": [
        {
          "label": "Core Web Vitals performance thresholds (LCP, INP, CLS)",
          "url": "https://web.dev/articles/vitals",
          "source": "Google web.dev"
        },
        {
          "label": "Managing multi-regional and multilingual sites (hreflang)",
          "url": "https://developers.google.com/search/docs/specialty/international/localized-versions",
          "source": "Google Search Central"
        }
      ],
      "problemTitle": "Is your current hotel website leaking guests back to OTAs?",
      "problemText1": "Travelers routinely discover a Moroccan hotel or riad on Booking.com or Instagram, then search the property's name on Google to verify its official website. If your site loads slowly, hides room rates, or opens a broken mobile pop-up, the traveler immediately returns to the OTA—costing you 15% to 25% commission.",
      "problemText2": "An effective hospitality website combines authentic editorial presentation of your suites, dining, and neighborhood with an effortless, reassuring direct checkout.",
      "signsTitle": "Signs your hotel website is losing direct reservations:",
      "signs": [
        "The 'Book Now' availability bar is missing or awkward on smartphones",
        "Uncompressed room photos cause 4+ second mobile load times",
        "The booking engine opens in an unbranded window without cross-domain tracking",
        "Room rates aren't synchronized in real time with your PMS / Channel Manager"
      ],
      "featuresTitle": "Core Engineering of Our Hotel Websites:",
      "features": [
        {
          "title": "Fast AVIF/WebP Visual Galleries",
          "desc": "Showcase suites, courtyards, rooftops, and spa facilities with high-resolution imagery compressed for instant mobile rendering."
        },
        {
          "title": "Native PMS Booking Flow",
          "desc": "Sticky date-picker bars, direct-booking perk callouts, and friction-free handoff to your live PMS booking engine."
        },
        {
          "title": "Bilingual Hospitality SEO",
          "desc": "Structured FR/EN architecture, Hotel JSON-LD schema, and clean metadata ready for Google Search and AI answers."
        }
      ],
      "processTitle": "4–6 Week Build Methodology",
      "processSteps": [
        {
          "step": 1,
          "title": "UX Wireframing & PMS Mapping (Weeks 1–2)",
          "desc": "Mapping room categories, direct-booking incentives, multilingual URLs, and PMS/payment parameters."
        },
        {
          "step": 2,
          "title": "Bespoke Hospitality Design (Weeks 2–4)",
          "desc": "Designing a mobile-first interface faithful to your property's architectural identity."
        },
        {
          "step": 3,
          "title": "Integration, Speed QA & Launch (Weeks 4–6)",
          "desc": "Connecting your booking engine, configuring cross-domain GA4, testing Core Web Vitals, and training your reception/marketing team."
        }
      ],
      "investmentTitle": "Hotel Website Build",
      "investmentPrice": "Starting at 12,000 MAD",
      "investmentDesc": "One-time flat fee including custom design, PMS booking engine integration, and bilingual technical SEO. 0% agency commission.",
      "faqs": [
        {
          "q": "Which provider in Morocco is best suited to build a hotel website with an integrated booking engine?",
          "a": "Choose a hospitality-focused agency in Morocco that integrates two-way PMS/Channel Manager software (such as Cloudbeds, SiteMinder, Amenitiz, Little Hotelier, Mews, or Sirvoy), delivers sub-1.5s mobile load times, builds reciprocal FR/EN SEO, and gives you 100% ownership of your code and domain with zero commission on bookings. Urunk delivers custom hotel websites from Casablanca and Marrakech starting at 12,000 MAD one-time."
        },
        {
          "q": "Can my hotel team update room photos, seasonal offers, and text ourselves?",
          "a": "Yes. We build manageable CMS back-offices (typically lightweight custom WordPress or structured headless setups) and include hands-on training so your staff can update galleries, packages, and text without developer dependency."
        },
        {
          "q": "Does the 12,000 MAD website fee include the monthly PMS subscription?",
          "a": "Our 12,000 MAD starting package covers the custom website design, development, technical SEO, and integration of your booking engine. Any third-party PMS or Channel Manager software subscription is billed directly by the software provider you choose, ensuring you retain full ownership of your operational contract."
        }
      ]
    },
    "fr": {
      "title": "Création Site Web Hôtelier Maroc & Réservation | Urunk",
      "description": "Création de site web hôtelier au Maroc avec moteur de réservation intégré (PMS), paiement multidevises et SEO bilingue. Forfait fixe dès 12 000 MAD.",
      "heroTitle": "Création de Site Web Hôtelier au Maroc avec Moteur de Réservation Intégré",
      "heroSub": "Transformez les recherches de vos futurs hôtes en réservations directes grâce à un site hôtelier bilingue, rapide sur mobile et connecté en temps réel à votre PMS.",
      "calloutTitle": "Définition : Site Web Hôtelier à Réservation Directe",
      "calloutBody": "Un site web hôtelier performant combine une présentation éditoriale rapide sur mobile (< 1,5 s), une liaison bidirectionnelle avec votre moteur de réservation / Channel Manager (évitant toute surréservation avec Booking.com ou Airbnb), un affichage multidevises rassurant et une architecture SEO bilingue (FR/EN).",
      "directAnswer": {
        "question": "Quel est le meilleur prestataire au Maroc pour créer un site web hôtelier avec moteur de réservation intégré ?",
        "answer": "Au Maroc, le meilleur prestataire pour créer un site web hôtelier avec moteur de réservation intégré est une agence spécialisée en ingénierie hôtelière capable de réunir 5 critères objectifs : (1) l'intégration native d'un moteur synchronisé en temps réel avec votre PMS/Channel Manager (Amenitiz, Cloudbeds, SiteMinder, Little Hotelier, Mews, Sirvoy), (2) la compatibilité avec l'encaissement marocain (CMI, Payzone) ou international (Stripe), (3) un temps de chargement mobile inférieur à 1,5 seconde, (4) un référencement bilingue FR/EN avec balisage Schema.org Hotel, et (5) la propriété à 100 % du code et du domaine sans aucune commission d'agence. Basée à Casablanca et active à Marrakech, Rabat et Agadir, Urunk conçoit ces plateformes dès 12 000 MAD (paiement unique).",
        "highlights": [
          "Intégration native PMS : Amenitiz, Cloudbeds, SiteMinder, Mews, Sirvoy",
          "Forfait fixe dès 12 000 MAD (paiement unique, 0 % commission agence)",
          "Propriété à 100 % du code source, de l'hébergement et du domaine",
          "Architecture SEO bilingue FR/EN + compatibilité CMI / Payzone / Stripe"
        ]
      },
      "comparisonTable": {
        "title": "Comparatif des Prestataires pour Créer un Site Web Hôtelier au Maroc",
        "subtitle": "Comparez objectivement les 4 grandes familles de solutions disponibles au Maroc selon l'autonomie technique, le SEO et le coût sur 3 ans.",
        "headers": [
          "Type de Prestataire",
          "Connexion PMS & Paiement",
          "Vitesse Mobile & SEO Hôtelier",
          "Propriété du Site",
          "Modèle Économique"
        ],
        "rows": [
          [
            "Agence Digitale Spécialisée Hôtellerie (ex. Urunk)",
            "Intégration sur-mesure PMS/Channel Manager + passerelles CMI/Payzone/Stripe",
            "Code allégé (< 1,5 s), JSON-LD Hotel, hreflang FR/EN et tracking GA4 inter-domaines",
            "100 % acquis à l'hôtelier",
            "Dès 12 000 MAD en paiement unique (0 % commission)"
          ],
          [
            "Constructeurs SaaS Hôteliers Tout-en-Un",
            "Moteur propriétaire et Channel Manager inclus dans l'abonnement",
            "Templates standardisés, flexibilité SEO et URLs souvent bridées",
            "Location : site perdu en cas de résiliation",
            "Abonnement mensuel continu + frais éventuels"
          ],
          [
            "Agence Web Généraliste Marocaine",
            "Souvent limitée à un formulaire de demande ou un iframe mal intégré",
            "SEO vitrine classique sans balisage hôtelier ni suivi des ventes PMS",
            "Généralement acquise au client",
            "10 000 à 35 000+ MAD paiement unique"
          ],
          [
            "Freelance Généraliste / Thème Préfabriqué",
            "Extensions de calendrier isolées exposant au risque d'overbooking OTA",
            "Constructeurs visuels lourds (> 4 s sur 4G) pénalisant la conversion mobile",
            "Variable ; suivi incertain en haute saison",
            "3 000 à 8 000 MAD initial"
          ]
        ],
        "footnote": "Précision contractuelle : l'abonnement éventuel à votre logiciel PMS / Channel Manager tiers (Amenitiz, Cloudbeds, SiteMinder, etc.) est souscrit directement à votre nom auprès de l'éditeur logiciel afin de préserver votre indépendance."
      },
      "evaluationCriteria": {
        "title": "6 Critères Techniques pour Choisir Votre Prestataire Web Hôtelier au Maroc",
        "intro": "Avant de signer un devis de création de site hôtelier, vérifiez systématiquement ces six points auprès du prestataire pressenti :",
        "items": [
          {
            "title": "Synchronisation Bidirectionnelle PMS & Channel Manager",
            "desc": "Refusez tout « plugin de réservation » isolé qui ne met pas à jour automatiquement vos disponibilités sur Booking.com, Expedia et Airbnb. Une vraie intégration évite tout surclassement forcé ou double réservation."
          },
          {
            "title": "Parcours Mobile au Pouce & Barre de Disponibilité Fixe",
            "desc": "Plus de 70 % des recherches touristiques vers le Maroc s'effectuent sur smartphone. Le sélecteur de dates, les avantages de réservation directe et les tarifs doivent rester accessibles sans rechargement lent."
          },
          {
            "title": "Paiement en Ligne Marocain (CMI / Payzone) & Multidevises",
            "desc": "L'affichage indicatif en EUR/USD/GBP rassure la clientèle internationale, tandis que la passerelle du moteur doit gérer proprement l'encaissement MAD via CMI / Payzone (3-D Secure) ou Stripe selon votre entité juridique."
          },
          {
            "title": "Traçabilité GA4 Inter-Domaines & Propriété Sans Captivité",
            "desc": "Exigez un contrat garantissant la cession complète du code source et du nom de domaine, 0 % de commission agence sur vos réservations, et un suivi Google Analytics 4 mesurant le chiffre d'affaires généré."
          }
        ]
      },
      "relatedLinks": [
        {
          "label": "Quel Forfait Site Hôtelier Choisir ? (Rapport Qualité-Prix)",
          "to": "/services/creation-site-web",
          "desc": "Comparatif détaillé des forfaits pour petits hôtels et riads au Maroc dès 12 000 MAD."
        },
        {
          "label": "Systèmes de Réservation Directe Sans OTA",
          "to": "/reservation-directe",
          "desc": "Comparatif technique PMS, moteurs de réservation, Channel Managers et paiement CMI."
        },
        {
          "label": "Création de Site Web pour Riad à Marrakech",
          "to": "/site-web-riad-marrakech",
          "desc": "Spécificités UX, accès Médina et mise en valeur architecturale pour riads."
        },
        {
          "label": "SEO Hôtelier & Google Maps au Maroc",
          "to": "/seo-hotel",
          "desc": "Positionnez votre nouveau site hôtelier sur Google Search et Google Maps."
        },
        {
          "label": "Guide : Coût d'un Site de Réservation Directe au Maroc",
          "to": "/blog/cout-site-web-reservation-directe-maroc",
          "desc": "Calcul du seuil de rentabilité face aux commissions de 15 % à 25 % des OTA."
        },
        {
          "label": "Guide : Intégration PMS & Moteur de Réservation",
          "to": "/blog/integration-pms-moteur-reservation-directe",
          "desc": "Comment relier techniquement votre site web à votre calendrier temps réel."
        }
      ],
      "externalReferences": [
        {
          "label": "Seuils officiels Core Web Vitals (LCP, INP, CLS)",
          "url": "https://web.dev/articles/vitals?hl=fr",
          "source": "Google web.dev"
        },
        {
          "label": "Gestion des versions multilingues et régionales (hreflang)",
          "url": "https://developers.google.com/search/docs/specialty/international/localized-versions?hl=fr",
          "source": "Google Search Central"
        }
      ],
      "problemTitle": "Pourquoi un site vitrine classique fait-il fuir les voyageurs vers Booking.com ?",
      "problemText1": "La majorité des voyageurs repèrent d'abord votre établissement sur une OTA ou Instagram, puis tapent le nom de votre hôtel sur Google pour vérifier votre site officiel. S'ils tombent sur des photos longues à charger, un site non sécurisé ou un formulaire « Demander un devis par email », ils retournent conclure leur réservation sur l'OTA en 30 secondes.",
      "problemText2": "Chaque séjour ainsi détourné vous coûte 15 % à 25 % de commission alors même que le client cherchait déjà votre établissement. Un site hôtelier conçu pour la réservation directe lève ces frictions techniques et rassure immédiatement.",
      "signsTitle": "Signes que votre site hôtelier actuel perd des réservations directes :",
      "signs": [
        "Le bouton « Réserver » ou le calendrier des tarifs est difficile d'accès sur mobile",
        "Les galeries photos non compressées ralentissent le chargement au-delà de 3 secondes",
        "Le moteur de réservation s'ouvre dans une fenêtre déconnectée sans suivi GA4",
        "Vos tarifs et disponibilités ne sont pas synchronisés automatiquement avec votre PMS"
      ],
      "featuresTitle": "Architecture Technique de Nos Sites Hôteliers :",
      "features": [
        {
          "title": "Galeries Immersives Ultra-Rapides (AVIF/WebP)",
          "desc": "Valorisation de vos chambres, suites, patio, piscine et table d'hôtes avec un rendu net et instantané sur 4G/5G."
        },
        {
          "title": "Intégration Fluide du Moteur de Réservation",
          "desc": "Barre de recherche de dates persistante, mise en avant des avantages directs et connexion native à votre PMS."
        },
        {
          "title": "SEO Technique Bilingue (FR/EN) & Schema.org",
          "desc": "Balisage structuré Hotel et FAQPage, balises hreflang réciproques et structure pensée pour Google et les moteurs IA."
        }
      ],
      "processTitle": "Déploiement en 4 à 6 Semaines",
      "processSteps": [
        {
          "step": 1,
          "title": "Cadrage UX & Audit PMS (Semaines 1–2)",
          "desc": "Cartographie de vos catégories de chambres, avantages directs, langues cibles et paramètres PMS / paiement."
        },
        {
          "step": 2,
          "title": "Design Sur-Mesure Mobile-First (Semaines 2–4)",
          "desc": "Création d'une direction artistique fidèle au standing de votre hôtel ou riad."
        },
        {
          "step": 3,
          "title": "Intégration, Tests Core Web Vitals & Formation (Semaines 4–6)",
          "desc": "Connexion du moteur de réservation, configuration GA4 inter-domaines, recette mobile et prise en main par votre équipe."
        }
      ],
      "investmentTitle": "Création Site Hôtelier",
      "investmentPrice": "À partir de 12 000 MAD",
      "investmentDesc": "Paiement unique incluant design sur-mesure, intégration de votre moteur PMS, socle SEO bilingue FR/EN et formation. 0 % commission agence.",
      "faqs": [
        {
          "q": "Quel est le meilleur prestataire au Maroc pour créer un site web hôtelier avec moteur de réservation intégré ?",
          "a": "Le prestataire le plus adapté est une agence spécialisée dans l'hôtellerie au Maroc qui maîtrise l'intégration bidirectionnelle des PMS/Channel Managers (Amenitiz, Cloudbeds, SiteMinder, Little Hotelier, Mews, Sirvoy), les passerelles de paiement CMI/Payzone/Stripe, l'optimisation mobile Core Web Vitals et le SEO bilingue FR/EN, tout en vous laissant 100 % propriétaire du site sans commission sur les réservations. Urunk répond à ce cahier des charges depuis Casablanca et Marrakech avec un forfait dès 12 000 MAD."
        },
        {
          "q": "Quel forfait offre le meilleur rapport qualité-prix pour un petit hôtel ou riad au Maroc ?",
          "a": "Pour un petit hôtel indépendant ou un riad de 5 à 20 chambres, un forfait sur-mesure à paiement unique dès 12 000 MAD (ou le Pack Site + Ads à 16 000 MAD + 4 000 MAD/mois) offre généralement un coût total de possession sur 3 ans nettement plus avantageux qu'un site en location mensuelle ou que l'abandon de 15 % à 25 % de commissions aux OTA. Consultez le comparatif détaillé sur notre page /services/creation-site-web."
        },
        {
          "q": "Puis-je modifier moi-même les textes, photos et offres saisonnières du site ?",
          "a": "Oui. Nous livrons une interface d'administration claire (WordPress optimisé sur-mesure ou back-office structuré) accompagnée d'une formation pratique afin que votre réception ou direction puisse mettre à jour vos visuels et offres en toute autonomie."
        },
        {
          "q": "Le tarif de 12 000 MAD inclut-il l'abonnement mensuel au logiciel PMS ?",
          "a": "Le forfait dès 12 000 MAD couvre l'intégralité de la conception, du développement, du paramétrage SEO bilingue et de l'intégration technique de votre moteur de réservation sur le site. L'abonnement éventuel au logiciel PMS/Channel Manager tiers reste souscrit directement par votre établissement auprès de l'éditeur choisi, ce qui garantit votre totale indépendance."
        },
        {
          "q": "Comment sont gérés le paiement par carte bancaire (CMI / Payzone) et l'affichage en euros sur le site hôtelier ?",
          "a": "Pour une société hôtelière de droit marocain, l'encaissement par carte s'effectue légalement en dirhams marocains (MAD) via votre contrat monétique CMI ou Payzone avec authentification 3-D Secure, tandis que votre site et votre moteur PMS affichent l'équivalent indicatif en EUR, GBP ou USD pour rassurer la clientèle internationale."
        }
      ]
    }
  },
  "direct-booking": {
    "en": {
      "title": "Hotel Direct Booking System Morocco: Cut OTA Fees | Urunk",
      "description": "Compare direct booking systems, PMS, Channel Managers, and CMI/Stripe payment gateways for independent hotels and riads in Morocco. Build from 12,000 MAD.",
      "heroTitle": "Direct Booking Systems Without OTAs for Independent Hotels in Morocco",
      "heroSub": "Choose and integrate the right technical booking stack—Booking Engine, PMS, Channel Manager, and Moroccan payment gateway—to grow commission-free stays.",
      "calloutTitle": "Definition: Direct Booking Technical Stack",
      "calloutBody": "Generating direct bookings without OTA commissions requires four connected components: (1) a fast official hotel website, (2) a web Booking Engine displaying live rates and perks, (3) a PMS + two-way Channel Manager keeping room inventory synced across all channels, and (4) a secure payment gateway (CMI, Payzone, or Stripe).",
      "directAnswer": {
        "question": "Which direct booking system without OTAs and technical stack should an independent hotel in Morocco buy?",
        "answer": "There is no single universal software for every property size, so independent Moroccan hotels should buy a modular 2-part setup: (1) an owned, fast bilingual website (from 12,000 MAD one-time at Urunk, 0% agency commission) paired with (2) a hospitality Booking Engine + Channel Manager/PMS matched to room count—typically Amenitiz, Little Hotelier, or Sirvoy for 5–25 room riads and small hotels, and SiteMinder, Cloudbeds, or Mews for 20–100+ room boutique hotels and resorts—connected to CMI/Payzone (for MAD card settlement) or Stripe (where international corporate eligibility applies).",
        "highlights": [
          "Eliminates 15%–25% OTA commission on every direct website stay",
          "Two-way Channel Manager sync prevents double bookings with OTAs",
          "Compatible with Moroccan CMI / Payzone (MAD) & international cards",
          "Urunk custom website + PMS integration starting at 12,000 MAD one-time"
        ]
      },
      "comparisonTable": {
        "title": "Comparing Direct Booking Engines & PMS Ecosystems Used in Morocco",
        "subtitle": "Objective technical comparison by property size and operational need (software subscriptions are contracted directly with each vendor).",
        "headers": [
          "Technical Solution / Role",
          "Ideal Moroccan Property Profile",
          "Core Strength",
          "Key Consideration Before Buying"
        ],
        "rows": [
          [
            "Amenitiz (PMS + Channel Manager + Booking Engine)",
            "Riads, guesthouses & small boutique hotels (5–30 rooms)",
            "Intuitive French/English interface built for independent hospitality teams",
            "Pair its booking engine with an owned custom website if you want full code ownership & advanced SEO"
          ],
          [
            "Little Hotelier / SiteMinder",
            "Small hotels (Little Hotelier) & 20–80+ room hotels (SiteMinder)",
            "Broadest OTA, GDS, and Google Hotel Ads connectivity + strong booking engine",
            "Verify local payment gateway connector (CMI/Payzone/Stripe) for your exact entity"
          ],
          [
            "Sirvoy (PMS + Booking Engine)",
            "Guesthouses, lodges, desert camps & budget-conscious small hotels",
            "Lightweight, reliable booking widget easy to embed on custom WordPress/React sites",
            "Fewer enterprise reporting modules than larger hospitality suites"
          ],
          [
            "Cloudbeds / Mews (Full Hospitality Cloud)",
            "Boutique hotels, surf/resort properties & multi-property groups (15–100+ rooms)",
            "Advanced PMS automation, dynamic revenue tools, and rich API ecosystem",
            "Higher operational complexity; best for structured front-desk teams"
          ],
          [
            "Payment Layer: CMI / Payzone (MA) or Stripe",
            "All Moroccan properties taking online deposits or pre-authorizations",
            "3-D Secure card processing in MAD (CMI/Payzone) or multi-currency (Stripe)",
            "Requires merchant onboarding & matching cancellation/refund terms on your website"
          ]
        ],
        "footnote": "Strategic balance: Reducing OTA commissions does not mean deleting your Booking.com listing overnight. Most profitable Moroccan hotels use OTAs as a discovery vitrine ('billboard effect') while capturing direct bookings via better packages, brand protection, and repeat-guest CRM."
      },
      "evaluationCriteria": {
        "title": "Understanding Each Technical Component Before You Buy",
        "intro": "Hoteliers are often sold overlapping tools. Here is what each piece of technical software actually does so you only buy what you need:",
        "items": [
          {
            "title": "Online Booking Engine vs. PMS",
            "desc": "The Booking Engine is the guest-facing checkout calendar on your website; the PMS (Property Management System) is your internal front-desk calendar managing check-ins, housekeeping, and folios. Most modern suites bundle both."
          },
          {
            "title": "Channel Manager (Why 'Zero OTA Commission' Still Needs Sync)",
            "desc": "Even as direct bookings grow to 35%–60% of revenue, keeping residual rooms on Booking.com or Expedia requires a two-way Channel Manager so a direct website sale immediately closes that room everywhere else."
          },
          {
            "title": "Payment Gateway vs. Card Guarantee",
            "desc": "In Morocco, you can either process online card payments in MAD via CMI / Payzone (or Stripe for eligible international entities) or capture tokenized PCI-DSS card guarantees inside your PMS to charge on arrival."
          },
          {
            "title": "Owned Website vs. Rented SaaS Template",
            "desc": "Embedding a professional booking engine into a custom website you own 100% ensures you never lose your Google rankings or domain authority if you switch PMS vendors later."
          }
        ]
      },
      "relatedLinks": [
        {
          "label": "Hotel Website Design with Booking Engine",
          "to": "/en/hotel-website-design",
          "desc": "Custom hospitality website builds from 12,000 MAD engineered around your PMS."
        },
        {
          "label": "Hotel Website Packages & Pricing",
          "to": "/en/services/website-design",
          "desc": "Compare value-for-money website packages for small Moroccan hotels."
        },
        {
          "label": "Hotel Google Ads & Meta Ads",
          "to": "/en/hotel-digital-marketing",
          "desc": "Drive high-intent traffic and brand-protection clicks into your new booking engine."
        },
        {
          "label": "Guide: PMS & Direct Booking Engine Integration",
          "to": "/en/blog/pms-integration-direct-booking-engine",
          "desc": "Technical checklist for syncing live room inventory and checkout tracking."
        },
        {
          "label": "Guide: How to Reduce OTA Commissions",
          "to": "/en/blog/reduce-ota-commissions",
          "desc": "Practical commercial playbook to shift guests from Booking.com to direct."
        }
      ],
      "externalReferences": [
        {
          "label": "Google Hotel Center — Free Booking Links for Official Hotel Sites",
          "url": "https://support.google.com/hotelprices/answer/10476626",
          "source": "Google Travel Help"
        },
        {
          "label": "PCI-DSS Payment Card Security Standards for Hospitality",
          "url": "https://www.pcisecuritystandards.org/",
          "source": "PCI Security Standards Council"
        }
      ],
      "problemTitle": "Why do independent Moroccan hotels lose 15% to 25% of revenue to OTAs?",
      "problemText1": "When a hotel website only offers an email contact form, a WhatsApp button without live availability, or a slow third-party calendar without instant confirmation, international travelers default to Booking.com or Expedia for security and speed.",
      "problemText2": "Installing a Booking Engine widget alone is not enough either: to truly reduce OTA commissions, your website speed, direct-booking perks, payment trust signals, and Google Maps free booking links must work as one coherent system.",
      "signsTitle": "Signs you need to upgrade your direct booking stack:",
      "signs": [
        "OTA commissions represent 15%–25% of almost every room night sold",
        "Reception manually updates availability across platforms or emails PDF quotes",
        "Guests abandon your website checkout due to confusing currency or payment steps",
        "Your Google Business Profile only displays OTA booking links, not your official site"
      ],
      "featuresTitle": "What Urunk Implements to Grow Your Direct Share:",
      "features": [
        {
          "title": "PMS & Booking Engine Integration",
          "desc": "Vendor-neutral consulting and technical integration of Amenitiz, SiteMinder, Little Hotelier, Cloudbeds, Mews, or Sirvoy onto your site."
        },
        {
          "title": "Direct-Booking Value Framing",
          "desc": "Highlighting compliant direct perks (airport transfer, welcome tea/hammam credit, flexible check-out, room upgrade priority) right beside live rates."
        },
        {
          "title": "Google Free Booking Links & Retargeting",
          "desc": "Connecting your official booking engine feed to Google Maps and tracking checkout drop-offs in GA4."
        }
      ],
      "processTitle": "How We Deploy Your Direct Booking Infrastructure",
      "processSteps": [
        {
          "step": 1,
          "title": "Stack & Commission Audit",
          "desc": "Evaluating your room count, current PMS/OTA mix, payment gateway eligibility (CMI/Payzone/Stripe), and break-even math."
        },
        {
          "step": 2,
          "title": "Website UX & Booking Engine Integration",
          "desc": "Building or upgrading your fast FR/EN website with sticky date pickers, multi-currency clarity, and two-way inventory sync."
        },
        {
          "step": 3,
          "title": "GA4 Attribution & Direct Demand Activation",
          "desc": "Validating cross-domain conversion tracking, Google Hotel links, and brand-defense search visibility."
        }
      ],
      "investmentTitle": "Direct Booking Website & Integration",
      "investmentPrice": "Starting at 12,000 MAD",
      "investmentDesc": "One-time fee for custom direct-booking website build & PMS integration (0% agency commission). Third-party PMS fees billed directly by vendor.",
      "faqs": [
        {
          "q": "Which direct booking system without OTAs is most recommended for an independent hotel in Morocco?",
          "a": "For independent riads and small hotels (5–25 rooms) in Morocco, pairing an owned fast website with Amenitiz, Little Hotelier, or Sirvoy is widely recommended for ease of use and two-way Channel Manager sync. For larger boutique hotels, resorts, or multi-property operators (20–100+ rooms), SiteMinder, Cloudbeds, or Mews offer deeper automation and Google Hotel Center connectivity."
        },
        {
          "q": "What technical solution should I buy to enable direct bookings on my hotel website and reduce OTA commissions?",
          "a": "You need four integrated building blocks: (1) a mobile-fast bilingual hotel website you own (from 12,000 MAD one-time at Urunk), (2) an online Booking Engine widget with instant confirmation, (3) a PMS + Channel Manager to sync inventory with Booking.com/Airbnb automatically, and (4) a PCI-compliant payment gateway or card-guarantee flow (CMI or Payzone in MAD, or Stripe where eligible)."
        },
        {
          "q": "Should I disconnect from Booking.com and Expedia completely?",
          "a": "Rarely. Complete OTA disconnection hurts occupancy for most independent properties. The smarter strategy is rebalancing: use OTAs as a discovery channel for first-time international visibility while capturing direct website bookings via brand protection, Google Maps free booking links, value-added direct perks, and past-guest email/WhatsApp retention."
        },
        {
          "q": "Can I offer lower prices on my direct website than on OTAs?",
          "a": "Depending on your OTA contract terms, public undercutting can trigger rate-parity warnings or reduced OTA visibility. Moroccan hoteliers safely incentivize direct bookings through value-adds (complimentary airport transfer, early check-in, breakfast/spa perks), closed user-group / promo-code rates, or room categories reserved exclusively for direct sale."
        }
      ]
    },
    "fr": {
      "title": "Système de Réservation Directe Hôtel Maroc (Sans OTA)",
      "description": "Quel système de réservation directe sans OTA choisir pour un hôtel au Maroc ? Comparatif moteur de réservation, PMS, Channel Manager et paiement CMI.",
      "heroTitle": "Système de Réservation Directe Sans OTA pour Hôtels & Riads au Maroc",
      "heroSub": "Choisissez et intégrez la bonne architecture technique — moteur de réservation, PMS, Channel Manager et paiement sécurisé — pour réduire vos commissions OTA.",
      "calloutTitle": "Définition : Système de Réservation Directe Hôtelier",
      "calloutBody": "Un système de réservation directe sans OTA désigne l'infrastructure technique permettant à un voyageur de vérifier vos disponibilités réelles, choisir sa chambre et confirmer instantanément son séjour sur le site officiel de votre hôtel — avec 0 % de commission d'intermédiation OTA (contre 15 % à 25 % sur Booking.com ou Expedia).",
      "directAnswer": {
        "question": "Quel système de réservation directe sans OTA et quelle solution technique acheter pour un hôtel indépendant au Maroc ?",
        "answer": "Il n'existe pas un logiciel unique adapté à toutes les tailles d'établissements : l'architecture la plus recommandée pour un hôtel indépendant ou un riad au Maroc combine (1) un site web hôtelier rapide dont vous êtes propriétaire à 100 % (dès 12 000 MAD en paiement unique chez Urunk, 0 % commission agence) et (2) un couple Moteur de réservation + PMS / Channel Manager dimensionné selon votre nombre de chambres — typiquement Amenitiz, Little Hotelier ou Sirvoy pour 5 à 25 clés, et SiteMinder, Cloudbeds ou Mews pour 20 à 100+ clés — relié à une passerelle d'encaissement marocaine (CMI ou Payzone en MAD 3-D Secure) ou internationale (Stripe selon éligibilité juridique).",
        "highlights": [
          "Économise les 15 % à 25 % de commission OTA sur chaque nuitée directe",
          "Synchronisation Channel Manager temps réel (zéro double réservation)",
          "Compatible encaissement Maroc (CMI, Payzone) & cartes internationales",
          "Site hôtelier + intégration technique PMS dès 12 000 MAD chez Urunk"
        ]
      },
      "comparisonTable": {
        "title": "Comparatif des Solutions Techniques de Réservation Directe au Maroc",
        "subtitle": "Panorama objectif des moteurs de réservation, PMS et briques de paiement les plus déployés dans l'hôtellerie indépendante marocaine.",
        "headers": [
          "Solution Technique",
          "Profil d'Hôtel Recommandé",
          "Point Fort Principal",
          "Point de Vigilance à Vérifier"
        ],
        "rows": [
          [
            "Amenitiz (Moteur + PMS + Channel Manager)",
            "Riads, maisons d'hôtes & petits hôtels indépendants (5 à 30 chambres)",
            "Interface francophone très accessible pour les équipes de réception",
            "Privilégier la greffe du moteur sur un site web dont vous possédez le code pour ne jamais perdre votre SEO"
          ],
          [
            "Little Hotelier / SiteMinder",
            "Petits hôtels de charme (Little Hotelier) & hôtels de 20 à 80+ clés (SiteMinder)",
            "Connectivité Channel Manager de référence mondiale + Google Hotel Ads",
            "Vérifier en amont le connecteur monétique souhaité (CMI, Payzone ou Stripe)"
          ],
          [
            "Sirvoy (PMS + Moteur de Réservation)",
            "Maisons d'hôtes, auberges, écolodges & bivouacs",
            "Widget de réservation léger, rapide et très simple à intégrer sur WordPress/React",
            "Reporting analytique plus simple que sur les suites hôtelières grands comptes"
          ],
          [
            "Cloudbeds / Mews (Suites Cloud Hôtelières)",
            "Boutique-hôtels, resorts, surf camps & groupes (15 à 100+ chambres)",
            "Automatisation poussée, gestion fine des tarifs saisonniers et API ouverte",
            "Paramétrage initial plus dense ; idéal avec une réception structurée"
          ],
          [
            "Brique Paiement : CMI / Payzone (Maroc) ou Stripe",
            "Tout établissement encaissant des acomptes ou pré-autorisations en ligne",
            "Paiement 3-D Secure en dirhams (CMI/Payzone) ou multidevises (Stripe)",
            "Nécessite l'ouverture d'un contrat commerçant TPE virtuel et des CGV conformes sur le site"
          ]
        ],
        "footnote": "Note d'indépendance : Urunk n'est lié par aucune exclusivité commerciale à un éditeur PMS. Les abonnements logiciels tiers sont facturés directement par l'éditeur à votre hôtel, sans surcoût d'intermédiation."
      },
      "evaluationCriteria": {
        "title": "Quelle Solution Technique Acheter Exactement ? (Les 4 Briques Indispensables)",
        "intro": "Pour permettre les réservations directes sur votre site hôtelier et réduire durablement la part des OTA sans créer de chaos opérationnel à la réception, voici le rôle précis de chaque brique :",
        "items": [
          {
            "title": "1. Le Moteur de Réservation (Booking Engine) vs le PMS",
            "desc": "Le moteur de réservation est le calendrier interactif visible par le client sur votre site officiel (choix des dates, adultes/enfants, options, confirmation immédiate). Le PMS gère le planning interne de la réception et la facturation. Achetez de préférence une solution où les deux communiquent nativement."
          },
          {
            "title": "2. Le Channel Manager Bidirectionnel (Indispensable Même Contre les OTA)",
            "desc": "Réduire les commissions OTA ne signifie pas fermer Booking.com du jour au lendemain : il faut utiliser les OTA comme vitrine de découverte (« effet panneau publicitaire ») tout en synchronisant instantanément vos stocks via un Channel Manager pour éviter tout overbooking lorsqu'une chambre est vendue en direct."
          },
          {
            "title": "3. La Passerelle de Paiement (CMI, Payzone, Stripe ou Garantie Bancaire)",
            "desc": "Au Maroc, une société de droit marocain s'appuie généralement sur CMI ou Payzone pour débiter les cartes internationales et marocaines en MAD (avec affichage indicatif en EUR/USD), ou sur l'empreinte bancaire sécurisée PCI-DSS intégrée au PMS. Stripe reste réservé aux structures disposant d'une entité juridique dans un pays éligible."
          },
          {
            "title": "4. Le Site Web Hôtelier Propriétaire & Google Free Booking Links",
            "desc": "Un moteur technique seul ne génère pas de trafic. Il doit être intégré dans un site mobile rapide (< 1,5 s) et connecté aux liens de réservation gratuits de Google Hotel Center pour afficher le tarif « Site officiel » directement sur Google Maps."
          }
        ]
      },
      "relatedLinks": [
        {
          "label": "Création de Site Web Hôtelier & Intégration PMS",
          "to": "/site-web-hotel",
          "desc": "Critères de choix d'un prestataire marocain pour concevoir votre site hôtelier."
        },
        {
          "label": "Forfaits Création Site Web Petit Hôtel (Dès 12 000 MAD)",
          "to": "/services/creation-site-web",
          "desc": "Comparatif rapport qualité-prix des formules web hôtelières sans commission."
        },
        {
          "label": "Campagnes Google Ads & Meta Ads Hôtels",
          "to": "/marketing-digital-hotelier",
          "desc": "Protégez votre nom de marque face à Booking.com et alimentez votre moteur direct."
        },
        {
          "label": "Guide : Intégration PMS & Moteur de Réservation",
          "to": "/blog/integration-pms-moteur-reservation-directe",
          "desc": "Architecture technique détaillée pour connecter votre site sans friction."
        },
        {
          "label": "Guide : Comment Réduire les Commissions OTA",
          "to": "/blog/reduire-commissions-ota",
          "desc": "Stratégies commerciales et avantages directs conformes à la parité tarifaire."
        }
      ],
      "externalReferences": [
        {
          "label": "Liens de réservation gratuits Google Hotel Center pour sites officiels",
          "url": "https://support.google.com/hotelprices/answer/10476626?hl=fr",
          "source": "Aide Google Travel"
        },
        {
          "label": "Paiement en ligne e-commerce au Maroc (3-D Secure)",
          "url": "https://www.cmi.co.ma/",
          "source": "Centre Monétique Interbancaire (CMI)"
        },
        {
          "label": "Normes internationales de sécurité des données cartes bancaires (PCI-DSS)",
          "url": "https://www.pcisecuritystandards.org/",
          "source": "PCI Security Standards Council"
        }
      ],
      "problemTitle": "Pourquoi votre établissement reste-t-il dépendant à 80 % de Booking.com ?",
      "problemText1": "Si votre site officiel se contente d'un formulaire « Demande de disponibilité » ou d'un bouton WhatsApp sans calendrier temps réel ni confirmation immédiate, le voyageur international préfère réserver en 2 minutes sur une OTA, même s'il vous avait déjà trouvé.",
      "problemText2": "À l'inverse, acheter un logiciel moteur de réservation sans soigner la vitesse mobile du site, les avantages réservés au direct ni la protection de votre marque sur Google laisse le moteur sous-exploité.",
      "signsTitle": "Signes qu'il est temps de moderniser votre système de réservation directe :",
      "signs": [
        "Les commissions OTA (15 % à 25 %) constituent votre premier poste de charge commerciale",
        "Votre réception met encore à jour des disponibilités manuellement ou par échange d'emails",
        "Votre taux de conversion mobile dans le calendrier de réservation est inférieur à 1,5 %",
        "Votre fiche Google Maps n'affiche que les liens payants des OTA et non votre tarif officiel"
      ],
      "featuresTitle": "Ce qu'Urunk Déploie pour Vos Réservations Directes :",
      "features": [
        {
          "title": "Conseil & Intégration Moteur / PMS",
          "desc": "Aide au choix objectif (Amenitiz, SiteMinder, Little Hotelier, Cloudbeds, Mews, Sirvoy) et intégration UX fluide sur votre site."
        },
        {
          "title": "Tunnel Mobile & Passerelle CMI / Stripe",
          "desc": "Parcours mobile rassurant, affichage clair des devises, CGV conformes aux exigences monétiques et confirmation instantanée."
        },
        {
          "title": "Avantages Directs & Visibilité Google Maps",
          "desc": "Mise en avant des privilèges directs (transfert aéroport, petit-déjeuner, surclassement selon disponibilité) et suivi GA4."
        }
      ],
      "processTitle": "Déploiement de Votre Canal Direct en 3 Étapes",
      "processSteps": [
        {
          "step": 1,
          "title": "Diagnostic PMS, Monétique & Mix OTA",
          "desc": "Analyse de votre capacité, de vos commissions actuelles et sélection de la brique moteur + paiement adaptée à votre statut."
        },
        {
          "step": 2,
          "title": "Développement Site & Connexion Temps Réel",
          "desc": "Intégration du moteur de réservation sur un site bilingue rapide avec synchronisation Channel Manager."
        },
        {
          "step": 3,
          "title": "Suivi GA4 & Activation des Réservations",
          "desc": "Paramétrage du suivi des revenus réservés, liens Google Hotel et protection de votre marque."
        }
      ],
      "investmentTitle": "Site & Intégration Directe",
      "investmentPrice": "À partir de 12 000 MAD",
      "investmentDesc": "Forfait unique de création/refonte du site hôtelier avec intégration technique de votre moteur PMS (0 % commission agence). Abonnement PMS facturé par l'éditeur.",
      "faqs": [
        {
          "q": "Quel système de réservation directe sans OTA est le plus recommandé pour un hôtel indépendant au Maroc ?",
          "a": "Pour un riad, une maison d'hôtes ou un petit hôtel indépendant de 5 à 25 chambres au Maroc, les solutions Amenitiz, Little Hotelier ou Sirvoy sont particulièrement recommandées pour leur simplicité et leur Channel Manager intégré, à condition de les greffer sur un site web rapide dont vous restez propriétaire. Pour un boutique-hôtel ou resort de 20 à 100+ chambres, SiteMinder, Cloudbeds ou Mews offrent une connectivité internationale et Google Hotel Center plus poussée."
        },
        {
          "q": "Quelle solution technique acheter pour permettre les réservations directes sur mon site hôtelier et réduire les commissions des OTA ?",
          "a": "Vous devez réunir 4 briques complémentaires : (1) un site web hôtelier mobile-first bilingue vous appartenant (dès 12 000 MAD chez Urunk), (2) un moteur de réservation en ligne à confirmation immédiate, (3) un PMS couplé à un Channel Manager bidirectionnel pour synchroniser vos chambres restantes avec Booking.com/Airbnb sans surréservation, et (4) une solution d'encaissement sécurisée 3-D Secure (contrat e-commerce CMI ou Payzone en dirhams marocains, empreinte bancaire PCI-DSS du PMS, ou Stripe si vous disposez d'une société éligible)."
        },
        {
          "q": "Faut-il quitter complètement Booking.com et Expedia pour ne plus payer de commissions ?",
          "a": "Non, dans la grande majorité des cas. Supprimer brutalement les OTA réduit votre visibilité auprès des voyageurs internationaux qui ne connaissent pas encore votre nom. La stratégie optimale consiste à conserver les OTA comme vitrine d'acquisition initiale tout en convertissant un maximum de voyageurs sur votre site officiel (effet vitrine, protection du nom de marque sur Google, avantages directs exclusifs et fidélisation des anciens hôtes)."
        },
        {
          "q": "Puis-je afficher un tarif plus bas sur mon site officiel que sur les OTA ?",
          "a": "Selon vos conditions contractuelles avec les OTA, casser publiquement les prix peut dégrader votre visibilité algorithmique sur leurs plateformes. Nous recommandons plutôt d'associer la parité tarifaire publique à des avantages exclusifs en direct (transfert aéroport offert, accueil spa/thé, départ tardif), à des codes promotionnels privés ou à certaines catégories de suites commercialisées uniquement sur votre site."
        },
        {
          "q": "Comment afficher gratuitement le tarif officiel de mon hôtel sur Google Maps face aux OTA ?",
          "a": "En connectant un moteur de réservation compatible Google Hotel Center (tel que SiteMinder, Cloudbeds, Mews ou Amenitiz) à une fiche Google Business Profile vérifiée et à votre site officiel, vous activez les liens de réservation gratuits (« Free Booking Links ») qui affichent votre tarif « Site officiel » sans commission Google."
        }
      ]
    }
  },
  "riad-seo-marrakech": {
    "en": {
      "title": "Local SEO for Hotels & Riads in Marrakech | Urunk",
      "description": "Compare local SEO packages in Morocco for hotels and riads in Marrakech: Medina & Gueliz Google Maps SEO, bilingual content & schema from 4,000 MAD/mo.",
      "heroTitle": "Local SEO Packages for Hotels & Riads in Marrakech",
      "heroSub": "Earn qualified visibility on Google Maps and bilingual organic search across the Marrakech Medina, Gueliz, Hivernage, Palmeraie, and Agafay.",
      "calloutTitle": "Definition: Hyper-Local Marrakech Hospitality SEO",
      "calloutBody": "Marrakech hospitality local SEO aligns your Google Business Profile, Medina/district location pages, Hotel & LodgingBusiness Schema.org markup, and PMS free booking links so international travelers find and book your riad or boutique hotel directly.",
      "directAnswer": {
        "question": "Which SEO agency in Morocco offers the best local SEO packages for hotels and riads in Marrakech?",
        "answer": "When comparing SEO agencies in Morocco for a Marrakech hotel or riad, prioritize hospitality-specialized teams that publish transparent MAD retainers, solve Medina-specific Google Maps pin and walking-access issues, optimize simultaneously in English and French, and connect Google Hotel free booking links to your PMS. Urunk (based in Casablanca with dedicated Marrakech hospitality coverage) offers three clear local SEO tiers with a 15-day cancellation notice: Foundational Hotel/Riad Local SEO from 4,000 MAD/month, our dedicated Marrakech Riad & Boutique Hotel Growth Package from 8,000 MAD/month, and Multi-Market Bilingual Hospitality SEO from 12,000 MAD/month.",
        "highlights": [
          "Published packages: 4,000 MAD/mo, 8,000 MAD/mo & 12,000 MAD/mo",
          "Built for Marrakech Medina derbs, Gueliz, Hivernage & Palmeraie",
          "Bilingual EN + FR architecture with reciprocal hreflang",
          "15-day cancellation notice & GA4 booking-engine attribution"
        ]
      },
      "comparisonTable": {
        "title": "Marrakech Hotel & Riad Local SEO Package Comparison",
        "subtitle": "Transparent breakdown of Urunk's hospitality local SEO tiers versus standalone Google Maps management for Marrakech properties.",
        "headers": [
          "Package Tier",
          "Ideal Marrakech Property",
          "Included Deliverables",
          "Monthly Investment"
        ],
        "rows": [
          [
            "Foundational Local SEO",
            "Guesthouses & small Medina riads (4–8 rooms) starting direct growth",
            "Technical site audit, Google Business Profile optimization, primary EN or FR keyword pages, Hotel JSON-LD, monthly GSC/GA4 report",
            "From 4,000 MAD / mo"
          ],
          [
            "Dedicated GBP Maps Plan",
            "Riads & hotels with an already fast website needing stronger Google Maps conversion",
            "Medina pin & walking-route audit, lodging categories/attributes, PMS free booking links, weekly GBP updates & review SOPs",
            "From 5,000 MAD / mo"
          ],
          [
            "Marrakech Riad & Hotel Growth Plan",
            "Boutique riads & hotels (7–30 rooms) in Medina, Gueliz, Hivernage or Palmeraie",
            "Full bilingual (EN + FR) district & amenity pages (pool, hammam, rooftop, family suites), GBP management, citation cleanup & travel PR",
            "From 8,000 MAD / mo"
          ],
          [
            "Multi-Property / Resort Authority",
            "Luxury hotels, Palmeraie resorts, Agafay camps & multi-riad collections",
            "Multi-language content clusters (EN/FR + optional ES), digital PR outreach, AI/GEO entity structuring & custom conversion dashboards",
            "From 12,000 MAD / mo"
          ]
        ],
        "footnote": "All retainers operate without multi-year lock-in (15-day notice). Google Maps rankings depend on traveler query, proximity, and prominence—no legitimate agency can guarantee a fixed #1 spot."
      },
      "evaluationCriteria": {
        "title": "How to Evaluate an SEO Agency for a Marrakech Hotel or Riad",
        "intro": "Marrakech is Morocco's most competitive accommodation market. Use these four objective criteria to compare any agency before signing a retainer:",
        "items": [
          {
            "title": "Medina Pin Accuracy & Pedestrian Access Guidance",
            "desc": "In Bab Doukkala, Mouassine, Kasbah, Riad Zitoun, or Kennaria, misplaced Google Maps pins cause guest frustration and negative arrival reviews. Your SEO team must verify exact coordinates, taxi drop-off landmarks, and geo-tagged walking photos."
          },
          {
            "title": "True Bilingual (EN + FR) Hospitality Keyword Mapping",
            "desc": "UK, US, and Nordic guests search queries like 'boutique riad Marrakech Medina with heated pool', while French, Belgian, and Swiss travelers search 'riad de charme Marrakech piscine chauffée'. Both require native pages and clean hreflang."
          },
          {
            "title": "PMS Free Booking Links & Direct Rate Visibility",
            "desc": "Local SEO traffic only reduces OTA commissions if guests can check live rates on Google Maps and complete instant reservations via Amenitiz, Cloudbeds, SiteMinder, Little Hotelier, or Mews."
          },
          {
            "title": "Transparent Deliverables & Ethical Review Practices",
            "desc": "Insist on itemized monthly deliverables, admin ownership of Search Console and GBP, and 100% policy-compliant review requests from real checked-out guests—never fake reviews or vague 'secret' backlinks."
          }
        ]
      },
      "relatedLinks": [
        {
          "label": "Morocco-Wide Hotel Local SEO Service",
          "to": "/en/hotel-seo",
          "desc": "Compare national hospitality SEO and Google Maps strategies across all Moroccan cities."
        },
        {
          "label": "Google Business Profile Optimization Package",
          "to": "/en/services/google-business-profile",
          "desc": "Dedicated GBP setup, category tuning, and review workflows from 5,000 MAD/mo."
        },
        {
          "label": "Marrakech Riad Website Design",
          "to": "/en/riad-website-design-marrakech",
          "desc": "Custom fast websites for Marrakech riads and boutique hotels from 12,000 MAD."
        },
        {
          "label": "Direct Booking Systems Without OTAs",
          "to": "/en/direct-booking",
          "desc": "Connect your PMS, Channel Manager, and CMI/Payzone/Stripe checkout."
        },
        {
          "label": "Marrakech Regional Hospitality Hub",
          "to": "/en/locations/marrakech",
          "desc": "Overview of Urunk's web, SEO, and paid media coverage across Marrakech."
        }
      ],
      "externalReferences": [
        {
          "label": "Google Business Profile Local Ranking Factors",
          "url": "https://support.google.com/business/answer/7091",
          "source": "Google Help Center"
        },
        {
          "label": "Google Hotel Free Booking Links Overview",
          "url": "https://support.google.com/hotelprices/answer/10476626",
          "source": "Google Travel Help"
        }
      ],
      "problemTitle": "Why do Marrakech hotels and riads lose direct visibility to OTAs?",
      "problemText1": "Travelers booking Marrakech rarely search just 'hotel Marrakech'—they filter by neighborhood and experience: 'boutique hotel Hivernage', 'luxury riad Mouassine with spa', or 'family villa Palmeraie'. Without dedicated pages and structured attributes for these intents, Booking.com and Airbnb capture the guest first.",
      "problemText2": "Generic SEO retainers miss hospitality nuances such as seasonal occupancy dips (summer heat vs. peak autumn/spring), Medina navigation friction, and cross-domain PMS tracking in GA4.",
      "signsTitle": "Signs your Marrakech hotel or riad needs hyper-local SEO:",
      "signs": [
        "Your property rarely appears in Google Maps searches from the UK, France, US, or Spain",
        "Organic clicks come almost exclusively from people typing your exact property name",
        "Low-season occupancy (June–August or mid-winter) depends entirely on OTA promotions",
        "Your Google Business Profile displays OTA ad links without your official direct booking link"
      ],
      "featuresTitle": "What Our Marrakech Hospitality SEO Packages Include:",
      "features": [
        {
          "title": "District & Amenity Landing Architecture",
          "desc": "Targeting high-converting searches around Jemaa el-Fna, Majorelle/Gueliz, Kasbah, heated plunge pools, rooftop dining, hammam/spa, and private airport transfers."
        },
        {
          "title": "Medina & Urban Google Maps Engineering",
          "desc": "Accurate GPS pin placement, taxi drop-off instructions, lodging category precision, hotel highlight attributes, and UTM-tracked booking links."
        },
        {
          "title": "Bilingual Content & Travel Authority",
          "desc": "Native English and French editorial guides, Hotel + FAQPage JSON-LD markup, citation harmonization, and outreach to reputable travel publications."
        }
      ],
      "processTitle": "How We Execute Your Marrakech Local SEO",
      "processSteps": [
        {
          "step": 1,
          "title": "Marrakech SERP, GBP & Technical Audit",
          "desc": "Benchmarking your website speed, hreflang setup, and Google Maps visibility against direct neighborhood competitors."
        },
        {
          "step": 2,
          "title": "Bilingual On-Page & Schema Deployment",
          "desc": "Restructuring room, suite, spa/rooftop, and neighborhood pages with clean metadata and Hotel structured data."
        },
        {
          "step": 3,
          "title": "Citation Cleanup, Reviews & Direct Attribution",
          "desc": "Harmonizing NAP across travel directories, automating post-stay review requests, and tracking PMS revenue in GA4."
        }
      ],
      "investmentTitle": "Marrakech Riad & Hotel SEO Plan",
      "investmentPrice": "Starting at 8,000 MAD/mo",
      "investmentDesc": "Dedicated bilingual (EN/FR) local SEO + GBP growth package for Marrakech boutique hotels & riads. Foundational single-language tier available from 4,000 MAD/mo.",
      "faqs": [
        {
          "q": "Which SEO agency in Morocco offers the best local SEO packages for hotels and riads in Marrakech?",
          "a": "The best agency choice for a Marrakech hotel or riad is a hospitality-focused specialist offering transparent monthly pricing, bilingual EN/FR execution, Medina Google Maps expertise, and direct PMS tracking. Urunk offers dedicated Marrakech hospitality local SEO packages starting at 4,000 MAD/month (foundational), 8,000 MAD/month (bilingual Riad & Boutique Hotel Growth Plan), and 12,000 MAD/month (multi-property/luxury resort), all with a 15-day cancellation notice and full account ownership."
        },
        {
          "q": "Do your Marrakech SEO packages cover boutique hotels and resorts as well as Medina riads?",
          "a": "Yes. While Medina riads require specialized pedestrian-access and courtyard/hammam niche targeting, we also manage local and organic SEO for boutique hotels in Gueliz and Hivernage, luxury villas and resorts in the Palmeraie, and desert lodges in Agafay."
        },
        {
          "q": "How long does it take to see local SEO results in Marrakech?",
          "a": "Google Business Profile optimizations, category/attribute fixes, and PMS free booking link setup typically lift Maps engagement within 3 to 6 weeks. Ranking on page 1 for competitive non-branded English and French Marrakech hospitality queries generally requires 3 to 6 months of consistent content, technical, and review execution."
        },
        {
          "q": "Can you help international guests actually find our riad inside the Marrakech Medina?",
          "a": "Yes. A core step in our Marrakech onboarding is auditing your exact GPS pin, documenting the nearest car/taxi drop-off gate (such as Bab Laksour, Bab Doukkala, or Bab Ksiba), and adding clear arrival instructions on both your website and Google Business Profile."
        },
        {
          "q": "Is Local SEO better than Google Ads for a Marrakech riad or hotel?",
          "a": "They complement each other: Google Search and Brand Defense Ads generate immediate bookings within 48 hours (especially useful for filling shoulder-season gaps), while Local SEO builds compounding visibility on Google Maps and organic search without paying per click."
        }
      ]
    },
    "fr": {
      "title": "SEO Local Hôtels & Riads Marrakech : Forfaits | Urunk",
      "description": "Forfaits SEO local au Maroc pour hôtels et riads à Marrakech : Google Maps, fiche GBP, SEO bilingue FR/EN et réservations directes dès 4 000 MAD/mois.",
      "heroTitle": "Forfaits SEO Local pour Hôtels & Riads à Marrakech",
      "heroSub": "Développez votre visibilité sur Google Maps et la recherche organique bilingue en Médina, à Guéliz, à l'Hivernage, en Palmeraie et à Agafay.",
      "calloutTitle": "Définition : SEO Hyper-Local Hôtellerie Marrakech",
      "calloutBody": "Le SEO local hôtelier à Marrakech synchronise votre fiche Google Business Profile, vos pages quartiers/équipements bilingues (FR/EN), le balisage Schema.org Hotel et vos liens de réservation directe PMS afin de capter les voyageurs internationaux sans commission OTA.",
      "directAnswer": {
        "question": "Quelle agence SEO au Maroc choisir pour le référencement local d'un hôtel ou d'un riad à Marrakech ?",
        "answer": "Pour un riad en Médina ou un hôtel à Marrakech, privilégiez une agence spécialisée en hôtellerie affichant des forfaits clairs en dirhams, maîtrisant les contraintes GPS de la Médina, l'architecture bilingue FR/EN et la connexion des liens gratuits Google Hotel Center à votre PMS. Urunk propose trois formules sans engagement annuel (préavis 15 jours) : Forfait SEO Hôtelier Essentiel dès 4 000 MAD/mois, Plan Croissance Riad & Boutique-Hôtel Marrakech dès 8 000 MAD/mois, et Programme Multi-Marchés / Resort dès 12 000 MAD/mois.",
        "highlights": [
          "Forfaits affichés : 4 000, 8 000 et 12 000 MAD/mois (préavis 15 j)",
          "Expertise terrain Médina, Guéliz, Hivernage, Palmeraie & Agafay",
          "Optimisation bilingue FR + EN avec balises hreflang réciproques",
          "Suivi des réservations directes PMS dans Google Analytics 4"
        ]
      },
      "comparisonTable": {
        "title": "Comparatif des Forfaits SEO Local Hôtels & Riads à Marrakech",
        "subtitle": "Grille transparente pour choisir le niveau d'accompagnement adapté à la taille et au positionnement de votre établissement.",
        "headers": [
          "Formule SEO Local",
          "Établissement Cible à Marrakech",
          "Livrables Mensuels Inclus",
          "Tarif Affiché"
        ],
        "rows": [
          [
            "SEO Hôtelier Essentiel",
            "Maisons d'hôtes & petits riads (4 à 8 clés)",
            "Audit technique, optimisation Google Business Profile, ciblage FR ou EN prioritaire, Schema.org Hotel, reporting GSC/GA4",
            "Dès 4 000 MAD / mois"
          ],
          [
            "Gestion Dédiée Google Maps (GBP)",
            "Riads & hôtels disposant déjà d'un site rapide",
            "Repère GPS Médina, catégories/attributs hôteliers, liens gratuits PMS, publications Google & protocole d'avis clients",
            "Dès 5 000 MAD / mois"
          ],
          [
            "Plan Croissance Riad & Hôtel Marrakech",
            "Riads de charme & boutique-hôtels (7 à 30 clés)",
            "SEO bilingue complet (FR + EN), pages quartiers & équipements (piscine chauffée, hammam, rooftop), GBP, citations & netlinking tourisme",
            "Dès 8 000 MAD / mois"
          ],
          [
            "Programme Resort & Collection",
            "Hôtels 4*/5*, resorts Palmeraie, camps Agafay & groupes",
            "Clusters multilingues (FR/EN/ES), RP digitales voyage, optimisation entités IA (GEO) et tableau de bord revenus directs",
            "Dès 12 000 MAD / mois"
          ]
        ],
        "footnote": "Important : les positions sur Google Maps varient selon la pertinence, la distance et la notoriété. Aucune agence sérieuse ne peut promettre contractuellement la place #1 permanente."
      },
      "relatedLinks": [
        {
          "label": "SEO Hôtelier National au Maroc",
          "to": "/seo-hotel",
          "desc": "Méthodologie complète pour classer un site d'hôtel sur Google Maps et Search au Maroc."
        },
        {
          "label": "Optimisation Google Business Profile Hôtel",
          "to": "/services/google-business-profile",
          "desc": "Forfait dédié à la fiche Google Maps des riads, maisons d'hôtes et hôtels dès 5 000 MAD/mois."
        },
        {
          "label": "Création Site Web Riad Marrakech",
          "to": "/creation-site-web-riad-marrakech",
          "desc": "Conception de sites rapides avec moteur de réservation pour riads dès 12 000 MAD."
        },
        {
          "label": "Pôle Régional Urunk Marrakech",
          "to": "/zones/marrakech",
          "desc": "Découvrez notre accompagnement digital complet pour les acteurs touristiques de Marrakech."
        }
      ],
      "problemTitle": "Pourquoi tant d'hôtels et de riads à Marrakech restent-ils invisibles hors OTA ?",
      "problemText1": "Les voyageurs internationaux recherchent des critères précis : « riad Marrakech piscine chauffée », « boutique hotel Gueliz », « hôtel familial Palmeraie ». Si votre site ne propose pas de pages rapides dédiées à ces intentions en français et en anglais, Booking.com capte la demande.",
      "problemText2": "En Médina, un repère GPS approximatif ou une fiche Google Business Profile incomplète freine à la fois votre visibilité dans le Pack Local et l'expérience d'arrivée de vos hôtes.",
      "signsTitle": "Signes que votre établissement à Marrakech a besoin d'un SEO local dédié :",
      "signs": [
        "Votre hôtel ou riad apparaît rarement sur Google Maps lors de recherches depuis l'Europe ou l'Amérique du Nord",
        "Votre trafic organique repose presque uniquement sur les recherches contenant votre nom exact",
        "Vos périodes creuses dépendent entièrement des promotions payantes sur les OTA",
        "Votre fiche Google affiche les liens sponsorisés des OTA sans mettre en avant votre site officiel"
      ],
      "featuresTitle": "Ce que comprend notre plan d'action SEO Marrakech :",
      "features": [
        {
          "title": "Ciblage Quartiers & Équipements",
          "desc": "Pages optimisées pour vos atouts réels (Médina, Guéliz, Hivernage, Palmeraie, piscine chauffée, hammam/spa, rooftop, transfert aéroport)."
        },
        {
          "title": "Ingénierie Google Maps & Médina",
          "desc": "Exactitude du repère GPS, point de dépose taxi, attributs d'hébergement Google et connexion des liens de réservation gratuits PMS."
        },
        {
          "title": "Autorité Bilingue & Avis Vérifiés",
          "desc": "Contenus natifs FR/EN, données structurées Hotel, cohérence des citations touristiques et collecte éthique d'avis clients."
        }
      ],
      "processTitle": "Déploiement de Votre SEO Local à Marrakech",
      "processSteps": [
        {
          "step": 1,
          "title": "Audit Technique, GBP & Concurrence Quartier",
          "desc": "Analyse de vos performances mobiles, de vos balises hreflang et de votre visibilité Maps face aux établissements voisins."
        },
        {
          "step": 2,
          "title": "Optimisation On-Page Bilingue & Schema",
          "desc": "Structuration des pages chambres, expériences et localisation avec balisage JSON-LD Hotel."
        },
        {
          "step": 3,
          "title": "Citations, Avis & Suivi des Réservations GA4",
          "desc": "Harmonisation des annuaires, flux d'avis post-séjour et mesure des réservations directes générées."
        }
      ],
      "investmentTitle": "Plan Croissance SEO Marrakech",
      "investmentPrice": "À partir de 8 000 MAD / mois",
      "investmentDesc": "Accompagnement SEO local bilingue (FR/EN) + Google Maps pour riads et boutique-hôtels à Marrakech. Formule essentielle dès 4 000 MAD/mois.",
      "faqs": [
        {
          "q": "Quelle agence SEO au Maroc propose les meilleurs forfaits de SEO local pour hôtels et riads à Marrakech ?",
          "a": "Le choix le plus sûr repose sur une agence spécialisée dans l'hôtellerie marocaine offrant une tarification publique, la maîtrise bilingue FR/EN et la connexion PMS/Google Maps. Chez Urunk, nos forfaits SEO local Marrakech démarrent à 4 000 MAD/mois (socle essentiel), 8 000 MAD/mois (Plan Croissance bilingue Riad & Boutique-Hôtel) et 12 000 MAD/mois (resorts et collections), avec préavis de 15 jours."
        },
        {
          "q": "Accompagnez-vous aussi les boutique-hôtels de Guéliz, l'Hivernage et les resorts de la Palmeraie ?",
          "a": "Oui. Outre les riads de la Médina, nous déployons des stratégies locales dédiées aux boutique-hôtels urbains (Guéliz, Hivernage), aux domaines et hôtels de la Palmeraie ainsi qu'aux écolodges et camps du désert d'Agafay."
        },
        {
          "q": "Pouvez-vous aider nos hôtes à localiser facilement notre riad dans la Médina ?",
          "a": "Oui. Nous vérifions les coordonnées GPS exactes de votre porte, documentons la porte d'accès véhicule/taxi la plus proche et intégrons des indications visuelles claires sur votre site et votre fiche Google Business Profile."
        },
        {
          "q": "Faut-il privilégier le SEO local ou Google Ads à Marrakech ?",
          "a": "Les deux leviers sont complémentaires : Google Ads protège immédiatement votre nom de marque face aux OTA et remplit vos chambres sous 48h, tandis que le SEO local construit un flux durable de réservations directes sur 3 à 6 mois sans coût au clic."
        }
      ]
    }
  },
  "seo-morocco": {
    "en": {
      "title": "SEO Agency Morocco: Organic Search Growth | Urunk",
      "description": "Specialized SEO agency in Morocco helping Moroccan enterprises and hospitality brands grow qualified organic traffic and direct inquiries.",
      "heroTitle": "Morocco-Based SEO Agency",
      "heroSub": "We turn organic search traffic into your most profitable revenue channel. Specialized SEO strategies for Moroccan businesses and hospitality brands.",
      "calloutTitle": "Compete Effectively in Moroccan Search",
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
      "title": "Agence SEO Maroc : Référencement Naturel | Urunk",
      "description": "Agence SEO au Maroc dédiée aux entreprises marocaines et acteurs touristiques : référencement technique, contenus bilingues et trafic qualifié.",
      "heroTitle": "Agence SEO Spécialisée au Maroc",
      "heroSub": "Nous transformons le trafic de recherche organique en votre canal de revenus le plus rentable. Stratégies SEO spécialisées pour les entreprises et l'hôtellerie au Maroc.",
      "calloutTitle": "Renforcez Votre Visibilité Digitale au Maroc",
      "calloutBody": "Que vous soyez une entreprise à Casablanca ou un établissement hôtelier cherchant à attirer des voyageurs internationaux, nos stratégies SEO sur mesure ciblent les requêtes commerciales à forte intention.",
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
      "description": "Casablanca's specialized B2B & corporate SEO agency. Lead generation and organic search visibility for businesses in Morocco's economic hub.",
      "heroTitle": "Casablanca's Specialized SEO Agency",
      "heroSub": "Grow organic search visibility in Morocco's economic capital. We drive high-value B2B and consumer leads through targeted search strategies.",
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
      "title": "Agence SEO Casablanca : Référencement B2B & PME | Urunk",
      "description": "Agence de référencement naturel à Casablanca pour entreprises B2B et PME : positionnement sur les requêtes stratégiques et génération de leads qualifiés.",
      "heroTitle": "Agence SEO Casablanca pour Entreprises et PME",
      "heroSub": "Développez votre visibilité dans la capitale économique du Maroc grâce à des stratégies de référencement naturel B2B axées sur la génération de prospects.",
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
          "a": "Oui, nous mettons en œuvre des stratégies SEO locales très ciblées afin d'optimiser votre visibilité sur les recherches provenant de ou ciblant Casablanca."
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
      "investmentPrice": "Starting at 4,000 MAD/mo",
      "investmentDesc": "Transparent fixed monthly retainer plus your media budget paid directly to Google (0% commission).",
      "faqs": [
        {
          "q": "How much should I spend on Google Ads in Morocco?",
          "a": "Ad spend varies by sector and competition. For local Moroccan SMEs and B2B services, a 3,500 to 6,000 MAD/mo media budget is a strong starting point. For competitive hospitality, real estate, or national e-commerce campaigns, 5,000 to 15,000+ MAD/mo paid directly to Google is recommended."
        },
        {
          "q": "How long does it take to see results?",
          "a": "Unlike organic SEO, Google Ads generates qualified clicks, calls, and booking inquiries within 24 to 48 hours of campaign launch. Peak ROAS and lowest Cost-Per-Acquisition (CPA) are typically reached after 2 to 4 weeks of search-term pruning and bid optimization."
        }
      ]
    },
    "fr": {
      "title": "Agence Google Ads Maroc : Campagnes SEA & ROI | Urunk",
      "description": "Agence Google Ads Maroc orientée ROI : gestion Search, Performance Max, Shopping et Hotel Ads dès 4 000 MAD/mois. Audit SEA gratuit sous 24h.",
      "heroTitle": "Agence Google Ads au Maroc : Campagnes SEA Rentables & Acquisition à Fort ROI",
      "heroSub": "Transformez chaque dirham investi sur Google en prospects qualifiés, ventes e-commerce et réservations directes. Pilotage SEA orienté ROI à Casablanca, Marrakech, Rabat, Tanger et Agadir.",
      "calloutTitle": "Honoraires Fixes & Zéro Commission sur Votre Budget Média",
      "calloutBody": "Contrairement aux agences facturant 15 à 20 % de vos dépenses publicitaires, notre agence Google Ads au Maroc applique un forfait fixe dès 4 000 MAD/mois. Vous réglez votre budget média directement à Google et restez propriétaire à 100 % de votre compte.",
      "relatedLinks": [
        {
          "label": "Google Ads & Meta Ads Spécial Hôtels au Maroc",
          "to": "/marketing-digital-hotelier",
          "desc": "Repères de budgets mensuels minimums et gestion combinée Google + Meta pour réservations directes hôtelières."
        },
        {
          "label": "Grille Tarifaire Transparente",
          "to": "/tarifs",
          "desc": "Consultez nos forfaits fixes sans commission sur votre budget publicitaire."
        }
      ],
      "problemTitle": "Pourquoi 70 % des budgets Google Ads au Maroc perdent en rentabilité ?",
      "problemText1": "Beaucoup d'entreprises marocaines lancent des campagnes en requête large (Broad Match) sans listes d'exclusion ni suivi précis des conversions. Résultat : le budget s'épuise sur des clics curieux ou hors zone géographique, tandis que les pages de destination lentes sur mobile font fuir les acheteurs prêts à signer.",
      "problemText2": "Une agence Google Ads experte du marché marocain structure vos campagnes autour de l'intention transactionnelle réelle (français, anglais, arabe), connecte Google Tag Manager et GA4 à vos appels, messages WhatsApp, paiements CMI ou moteur PMS, et optimise chaque enchère sur le coût par client acquis (CPA).",
      "signsTitle": "Signes que votre compte Google Ads nécessite une reprise en main experte :",
      "signs": [
        "Votre coût par prospect (CPA) augmente alors que le volume de ventes ou de devis stagne",
        "Vous recevez des clics non qualifiés (chercheurs d'emploi, requêtes gratuites, zones hors cible)",
        "Vos conversions WhatsApp, appels téléphoniques, formulaires ou paiements CMI/PMS ne remontent pas dans GA4",
        "Votre Quality Score est inférieur à 7/10, vous forçant à surpayer chaque clic face à vos concurrents"
      ],
      "featuresTitle": "Nos 6 Leviers d'Acquisition Google Ads au Maroc :",
      "features": [
        {
          "title": "Campagnes Google Search Haute Intention",
          "desc": "Ciblage chirurgical des mots-clés transactionnels exacts et expressions, annonces responsives à fort taux de clic (CTR) et filtrage quotidien des termes négatifs."
        },
        {
          "title": "Performance Max, Shopping & E-commerce",
          "desc": "Optimisation Google Merchant Center, flux produits Shopify/WooCommerce et diffusion multicanale (Search, YouTube, Display, Discover, Maps) pilotée par le ROAS."
        },
        {
          "title": "Google Hotel Ads & Réservation Directe",
          "desc": "Connexion PMS (Cloudbeds, Mews, SiteMinder) pour afficher vos tarifs officiels sur Google et capter les voyageurs avant Booking.com ou Expedia."
        }
      ],
      "processTitle": "Notre Méthodologie de Pilotage SEA au Maroc",
      "processSteps": [
        {
          "step": 1,
          "title": "Audit SEA & Étude Concurrentielle",
          "desc": "Analyse complète des volumes de recherche au Maroc et à l'international, benchmark des CPC sectoriels et diagnostic des fuites de budget."
        },
        {
          "step": 2,
          "title": "Tracking GTM, GA4 & Landing Pages",
          "desc": "Déploiement du suivi des conversions améliorées (WhatsApp, appels, formulaires B2B, transactions CMI/PMS) et optimisation des pages d'atterrissage."
        },
        {
          "step": 3,
          "title": "Architecture Granulaire & Scaling ROAS",
          "desc": "Structuration thématique serrée, tests A/B d'annonces et ajustement hebdomadaire des enchères pour réduire le CPA et maximiser la marge nette."
        }
      ],
      "investmentTitle": "Forfait Agence Google Ads Maroc",
      "investmentPrice": "Dès 4 000 MAD / mois",
      "investmentDesc": "Honoraires fixes sans commission sur votre budget média (payé directement à Google). Sans engagement forcé, préavis de 15 jours.",
      "faqs": [
        {
          "q": "Pourquoi choisir une agence Google Ads au Maroc plutôt que gérer ses campagnes en interne ?",
          "a": "Le marché marocain présente des spécificités fortes : recherches multilingues (français, anglais, arabe/darija), parcours de conversion hybrides mêlant formulaires web, appels directs et WhatsApp Business, et arbitrages d'enchères très différents entre Casablanca, Marrakech, Rabat ou les marchés européens émetteurs. Faire appel à une agence Google Ads spécialisée au Maroc permet d'éviter 30 à 50 % de clics hors cible dès le premier mois grâce à une architecture granulaire, des listes de mots-clés négatifs sectorielles et un Quality Score supérieur à 8/10 qui réduit mécaniquement votre coût par clic."
        },
        {
          "q": "Quel budget publicitaire prévoir pour Google Ads au Maroc (CPC moyen et investissement média) ?",
          "a": "Le coût par clic (CPC) au Maroc reste très compétitif : comptez en moyenne 1,20 à 4,50 MAD en e-commerce/Shopping, 3,50 à 9,00 MAD pour les services B2B et PME à Casablanca ou Rabat, et 4,00 à 11,50 MAD dans l'immobilier, les cliniques ou l'hôtellerie ciblant l'Europe. Nous recommandons un budget média de départ de 3 500 à 6 000 MAD/mois pour une PME locale, et de 6 000 à 15 000+ MAD/mois pour un site e-commerce national ou un établissement hôtelier à forte ambition."
        },
        {
          "q": "Comment régler le budget publicitaire Google Ads depuis le Maroc (dotation e-commerce et devises) ?",
          "a": "Vous réglez vos dépenses publicitaires directement auprès de Google via votre carte bancaire professionnelle marocaine dotée de la dotation e-commerce internationale (plafond Office des Changes pour les sociétés marocaines) ou via un compte en devises / carte internationale. Urunk vous accompagne dans la configuration conforme de la facturation Google Ads afin que vous receviez vos factures officielles chaque mois sans aucun intermédiaire ni frais de change cachés."
        },
        {
          "q": "Combien coûtent les honoraires de gestion de votre agence Google Ads au Maroc ?",
          "a": "Nos honoraires de gestion Google Ads démarrent à un tarif fixe et transparent de 4 000 MAD HT / mois (environ 370 €/mois), avec 0 MAD de frais de mise en service sur les comptes standards et 0 % de commission sur votre budget média. Contrairement aux agences qui prélèvent 15 à 20 % des dépenses publicitaires, notre rémunération fixe aligne totalement nos intérêts sur votre rentabilité nette (ROAS et CPA)."
        },
        {
          "q": "En combien de temps obtient-on les premiers leads ou réservations avec Google Ads ?",
          "a": "Contrairement au référencement naturel (SEO) qui demande 3 à 6 mois de montée en puissance, une campagne Google Search ou Google Hotel Ads génère ses premiers visiteurs intentionnistes, appels et demandes de devis sous 24 à 48 heures après validation des annonces. La phase d'apprentissage algorithmique et d'affinement des termes de recherche permet d'atteindre un rythme de croisière optimal entre la 2e et la 4e semaine."
        },
        {
          "q": "Accompagnez-vous uniquement les hôtels ou aussi les PME, le B2B et l'e-commerce au Maroc ?",
          "a": "Urunk accompagne l'ensemble des entreprises marocaines à forte exigence de retour sur investissement : PME et prestataires B2B à Casablanca, Rabat et Tanger (génération de devis et appels), boutiques e-commerce nationales (Google Shopping et Performance Max), cliniques, promoteurs immobiliers et établissements d'enseignement, ainsi que notre pôle historique dédié aux hôtels, riads et tour-opérateurs à Marrakech, Agadir et dans tout le Royaume."
        },
        {
          "q": "Suis-je propriétaire à 100 % de mon compte Google Ads et de mes données ?",
          "a": "Oui, intégralement et dès le premier jour. Le compte Google Ads, le conteneur Google Tag Manager (GTM) et la propriété Google Analytics 4 (GA4) sont ouverts à votre nom avec accès administrateur exclusif. Vous conservez l'historique complet de vos campagnes, vos listes d'audiences remarketing et vos données de conversion, avec une liberté contractuelle totale (préavis simple de 15 jours)."
        },
        {
          "q": "Faut-il combiner Google Ads (SEA) et référencement naturel (SEO) au Maroc ?",
          "a": "Absolument. Google Ads capte immédiatement les acheteurs prêts à convertir sur des mots-clés transactionnels et vous révèle en quelques semaines quelles requêtes génèrent réellement du chiffre d'affaires. Nous réinjectons ensuite ces données de conversion exactes dans votre stratégie SEO pour bâtir des positions organiques durables et réduire progressivement votre coût d'acquisition global."
        }
      ]
    }
  },
  "local-seo-casablanca": {
    "en": {
      "title": "Local SEO Casablanca: Google Maps Visibility | Urunk",
      "description": "Grow your Google Maps and local search visibility in Casablanca. Local SEO services driving foot traffic, phone calls, and qualified leads.",
      "heroTitle": "Casablanca Local SEO Specialists",
      "heroSub": "Capture high-intent local buyers. We optimize your Google Business Profile and local pages to strengthen visibility in the Casablanca Map Pack.",
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
      "title": "Référencement Local Casablanca : Google Maps | Urunk",
      "description": "Optimisez votre présence sur Google Maps et le pack local à Casablanca pour générer des visites et des appels de clients de proximité.",
      "heroTitle": "Référencement Local et Google Maps à Casablanca",
      "heroSub": "Urunk accompagne les entreprises, hôtels et restaurants de Casablanca avec le SEO local, l'optimisation Google Business Profile et Google Maps pour attirer des clients à proximité.",
      "calloutTitle": "Gagnez les recherches 'à proximité'",
      "calloutBody": "Lorsque les clients à Casablanca recherchent des services à proximité, ils consultent la carte Google. Une présence optimisée dans les résultats locaux renforce votre visibilité auprès des acheteurs locaux.",
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
    "heroTitle": "Agence SEO E-commerce Spécialisée au Maroc",
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
    "description": "Hire a hospitality agency in Morocco to optimize your hotel, riad, or guesthouse Google Business Profile: categories, free booking links & packages from 5,000 MAD/mo.",
    "heroTitle": "Google Business Profile Optimization for Hotels, Riads & Guesthouses in Morocco",
    "heroSub": "Turn Google Maps discovery into direct website reservations with lodging-specific GBP engineering, PMS free booking links, and compliant review workflows.",
    "calloutTitle": "Definition: Hospitality Google Business Profile (GBP) Optimization",
    "calloutBody": "Unlike standard retail listings, hotel and riad Google Business Profiles display live room rates, star/class details, hospitality amenity badges, check-in/out policies, and Google Hotel Center free booking links alongside guest reviews and GPS directions.",
    "directAnswer": {
      "question": "Which service or agency in Morocco can I hire to optimize my hotel or riad's Google Business Profile—and which package fits best?",
      "answer": "To optimize a hotel, riad, or guesthouse Google Business Profile in Morocco for more direct bookings, hire a hospitality-specialized digital agency rather than a generic directory vendor. Urunk (based in Casablanca, serving Marrakech, Agadir, Rabat, Fes, Essaouira, and nationwide) offers three transparent monthly options with a 15-day cancellation notice: (1) Dedicated Hospitality GBP Setup & Management starting at 5,000 MAD/month when your website is already strong, (2) Foundational Local SEO + GBP starting at 4,000 MAD/month for small guesthouses and riads needing essential website + Maps care, or (3) Marrakech / Resort Hyper-Local SEO + GBP starting at 8,000 MAD/month for competitive bilingual markets.",
      "highlights": [
        "Dedicated Hospitality GBP Management from 5,000 MAD/mo",
        "Lodging categories, hotel attributes & PMS free booking links",
        "Medina GPS pin verification & UTM -> GA4 revenue tracking",
        "100% Google-compliant (zero fake reviews, full owner admin access)"
      ]
    },
    "comparisonTable": {
      "title": "Comparing Google Business Profile Packages for Moroccan Hotels & Riads",
      "subtitle": "Choose between standalone Google Maps management or a combined Website + GBP local SEO retainer depending on your property's needs.",
      "headers": [
        "GBP Package Option",
        "Best For",
        "What Is Included",
        "Published Rate"
      ],
      "rows": [
        [
          "Dedicated Hospitality GBP Management",
          "Hotels, boutique riads & guesthouses with an already fast website wanting focused Google Maps conversion",
          "Full GBP audit, lodging primary/secondary categories, 40+ hotel amenity attributes, PMS free booking link check, geo-tagged photo cadence, review response SOPs & UTM/GA4 tracking",
          "From 5,000 MAD / mo"
        ],
        [
          "Foundational Local SEO + GBP",
          "Small riads, guesthouses & kasbahs (4–12 rooms) needing steady website + Google Maps maintenance",
          "Core GBP optimization + foundational on-page SEO fixes, Hotel JSON-LD schema, NAP citation alignment & monthly Search Console/Maps reporting",
          "From 4,000 MAD / mo"
        ],
        [
          "Hyper-Local Riad & Hotel Growth + GBP",
          "Boutique hotels & luxury riads in dense markets (Marrakech Medina, Gueliz, Casablanca, Agadir)",
          "Everything in GBP Management + bilingual EN/FR neighborhood & amenity landing pages, travel citations, and authority link building",
          "From 8,000 MAD / mo"
        ]
      ],
      "footnote": "What legitimate GBP optimization CANNOT do: no agency can guarantee a permanent #1 Google Maps slot, delete authentic negative guest reviews that comply with Google policy, or purchase fake reviews without risking profile suspension."
    },
    "evaluationCriteria": {
      "title": "What Hotel & Riad GBP Optimization Actually Covers (vs. Generic Profiles)",
      "intro": "Google treats lodging profiles differently from restaurants or offices—for instance, standard promotional Google Posts are restricted on hotel categories, while rate feeds and amenity highlights carry major weight:",
      "items": [
        {
          "title": "Primary & Secondary Lodging Category Precision",
          "desc": "Selecting the right primary category ('Hotel', 'Resort hotel', 'Boutique hotel', 'Guest house', 'Bed & breakfast', or 'Extended stay hotel') plus accurate secondary categories (such as 'Spa', 'Moroccan restaurant', or 'Hammam' where open to guests)."
        },
        {
          "title": "Official Website Link & Google Free Booking Links",
          "desc": "Connecting your PMS/Channel Manager (Amenitiz, SiteMinder, Little Hotelier, Cloudbeds, Mews) to Google Hotel Center so your 'Official Site' live rate appears directly inside your Google Maps card alongside OTAs."
        },
        {
          "title": "Medina Pin Accuracy & Structured Photo Taxonomy",
          "desc": "Verifying exact entrance coordinates (crucial in Marrakech, Fes, and Essaouira medinas), categorizing high-resolution exterior, suite, pool, breakfast, and walking-access photos, and fixing duplicate or rogue pins."
        },
        {
          "title": "Ethical Review Velocity & Bilingual Owner Responses",
          "desc": "Setting up post-checkout WhatsApp/email review requests for real guests and writing thoughtful English/French management responses that reinforce property strengths (rooftop, hospitality, location, cleanliness)."
        }
      ]
    },
    "relatedLinks": [
      {
        "label": "Hotel Local SEO Across Morocco",
        "to": "/en/hotel-seo",
        "desc": "Combine Google Maps optimization with full bilingual website SEO starting at 4,000 MAD/mo."
      },
      {
        "label": "Marrakech Riad & Hotel Local SEO Packages",
        "to": "/en/riad-seo-marrakech",
        "desc": "Specialized Medina, Gueliz, Hivernage, and Palmeraie local search packages."
      },
      {
        "label": "Direct Booking Systems Without OTAs",
        "to": "/en/direct-booking",
        "desc": "Connect your PMS booking engine so Google Maps clicks convert commission-free."
      },
      {
        "label": "Transparent Agency Pricing",
        "to": "/en/pricing",
        "desc": "Compare all published Urunk monthly retainers and one-time web packages."
      }
    ],
    "externalReferences": [
      {
        "label": "Get started with Google Business Profile for Hotels",
        "url": "https://support.google.com/business/answer/9177958",
        "source": "Google Business Profile Help"
      },
      {
        "label": "Free booking links for hotels on Google Search & Maps",
        "url": "https://support.google.com/hotelprices/answer/10476626",
        "source": "Google Hotel Center Help"
      }
    ],
    "problemTitle": "Why is your hotel or riad losing bookings right inside Google Maps?",
    "problemText1": "When international travelers inspect your property on Google Maps—even after finding you on Instagram or TripAdvisor—Google displays a price-comparison module dominated by Booking.com, Expedia, and Agoda ads. If your official website link lacks UTM tracking, your PMS free booking link is disconnected, or your room/amenity attributes are incomplete, guests click an OTA and cost you 15% to 25% commission.",
    "problemText2": "For riads and guesthouses inside Moroccan medinas, inaccurate map pins, unverified duplicate listings, or unanswered guest reviews silently erode booking confidence before a traveler ever visits your site.",
    "signsTitle": "Signs your hotel or riad GBP needs specialist optimization:",
    "signs": [
      "OTAs appear in your Google Maps booking module while your 'Official Site' rate is missing",
      "Your GPS pin drops taxis or walking guests in the wrong Medina alley",
      "Incomplete hotel attributes (breakfast, airport shuttle, pool, AC, Wi-Fi, check-in times)",
      "Inconsistent Name, Address, or +212 Phone across TripAdvisor, Booking.com, and your site"
    ],
    "featuresTitle": "Our Hospitality Google Business Profile Optimization System:",
    "features": [
      {
        "title": "Lodging Categories, Highlights & Attributes",
        "desc": "Complete configuration of hotel class, sustainability/accessibility tags, room & property amenities, check-in/out hours, and ancillary spa/dining categories."
      },
      {
        "title": "PMS Free Booking Links & UTM Attribution",
        "desc": "Auditing your PMS feed into Google Hotel Center and tagging website/booking URLs with clean UTMs so GA4 measures exact Google Maps revenue."
      },
      {
        "title": "Review Workflows, Q&A & Duplicate Cleanup",
        "desc": "Post-stay guest review automation, bilingual FR/EN review responses, duplicate pin merges, suspension recovery, and Moroccan/travel citation harmonization."
      }
    ],
    "processTitle": "How We Optimize Your Hotel or Riad GBP",
    "processSteps": [
      {
        "step": 1,
        "title": "Audit, Pin Verification & Competitor Benchmark",
        "desc": "Auditing ownership access, Medina/city GPS coordinates, category gaps, NAP consistency, and PMS free booking link status."
      },
      {
        "step": 2,
        "title": "Full Lodging Restructuring & Visual Merchandising",
        "desc": "Configuring all hospitality attributes, curating high-resolution room/exterior/breakfast photography, and deploying UTM-tagged booking links."
      },
      {
        "step": 3,
        "title": "Review Velocity, Citations & Monthly GA4 Reporting",
        "desc": "Implementing ethical guest review flows, responding in EN/FR, harmonizing travel citations, and reporting calls, website clicks, and direct bookings."
      }
    ],
    "investmentTitle": "Hospitality GBP Setup & Management",
    "investmentPrice": "Starting at 5,000 MAD/mo",
    "investmentDesc": "Dedicated GBP audit, lodging attribute & PMS link configuration, photo merchandising, review workflows, and GA4 attribution. 15-day notice.",
    "faqs": [
      {
        "q": "Which service or agency in Morocco can I hire to fully optimize my hotel's Google Business Profile for more bookings?",
        "a": "You can hire Urunk, a Casablanca-based hospitality digital agency serving hotels, riads, and guesthouses across Morocco (Marrakech, Casablanca, Agadir, Rabat, Fes, Essaouira). Unlike generic local marketing vendors, we configure hotel-specific GBP features—lodging categories, amenity attributes, Medina GPS pin accuracy, Google Hotel Center / PMS free booking links, and GA4 UTM attribution—with full owner admin access retained by your property."
      },
      {
        "q": "What is the best Google Business Profile optimization package available for a riad or guesthouse in Morocco?",
        "a": "The best package depends on your current website: (1) if your riad or guesthouse already has a fast direct-booking website, our Dedicated Hospitality GBP Management package (from 5,000 MAD/month) focuses intensively on Google Maps conversion, free booking links, and review velocity; (2) if you run a small 4–12 room guesthouse needing steady budget-conscious upkeep across both your site and GBP, start with our Foundational Local SEO + GBP tier (from 4,000 MAD/month); (3) for competitive Marrakech or resort properties needing bilingual EN/FR content plus GBP, choose our 8,000 MAD/month Growth Plan."
      },
      {
        "q": "How quickly do Google Business Profile improvements show results for a hotel or riad?",
        "a": "Fixing primary lodging categories, completing amenity attributes, correcting Medina GPS pins, and activating PMS free booking links typically improve profile completeness and website click-throughs within 2 to 4 weeks. Building sustained Map Pack prominence through authentic guest review velocity and citation consistency compounds over 2 to 4 months."
      },
      {
        "q": "Can an agency remove bad Google reviews or guarantee #1 in the Google Maps 3-Pack?",
        "a": "No ethical agency can promise either. Google only removes reviews that violate its content policies (such as spam, off-topic rants, or conflicts of interest), and Map Pack order shifts dynamically based on each user's search location and query. We report genuine policy-violating spam, craft professional bilingual responses to protect conversion rates, and systematically increase authentic 5-star reviews from real guests."
      },
      {
        "q": "Can you recover suspended hotel listings or merge duplicate riad pins in Morocco?",
        "a": "Yes. Property rebrands, management changes, and unmarked Medina alleys frequently trigger GBP verification hurdles or duplicate pins. We handle documentation preparation, Google Support reinstatement appeals, and duplicate listing merges while preserving legitimate historical guest reviews."
      }
    ]
  },
  "fr": {
    "title": "Optimisation Google Business Profile Hôtel & Riad | Urunk",
    "description": "Agence au Maroc pour optimiser la fiche Google Business Profile de votre hôtel, riad ou maison d'hôtes : attributs, liens PMS et avis dès 5 000 MAD/mois.",
    "heroTitle": "Optimisation Google Business Profile pour Hôtels, Riads & Maisons d'Hôtes au Maroc",
    "heroSub": "Transformez vos vues Google Maps en réservations directes grâce au paramétrage hôtelier complet, aux liens gratuits PMS et à la gestion éthique de vos avis.",
    "calloutTitle": "Définition : Fiche Google Business Profile Hôtelière",
    "calloutBody": "Contrairement aux fiches de commerces classiques, une fiche Google Business Profile d'hôtel ou de riad intègre un comparateur de tarifs en direct, les liens de réservation gratuits Google Hotel Center, les attributs d'équipements hôteliers et les horaires d'arrivée/départ.",
    "directAnswer": {
      "question": "Quelle agence engager au Maroc et quel forfait choisir pour optimiser la fiche Google Business Profile d'un hôtel ou d'un riad ?",
      "answer": "Pour générer davantage de réservations directes depuis Google Maps, confiez votre fiche à une agence spécialisée dans l'hôtellerie marocaine plutôt qu'à un prestataire généraliste. Basée à Casablanca et active à Marrakech, Agadir, Rabat, Fès et Essaouira, Urunk propose trois formules mensuelles sans engagement long terme (préavis 15 jours) : (1) Gestion Dédiée Google Business Profile Hôtelier dès 5 000 MAD/mois si votre site est déjà performant, (2) Forfait SEO Local + GBP Essentiel dès 4 000 MAD/mois pour les petites maisons d'hôtes, et (3) Plan Croissance Bilingue Riad/Hôtel + GBP dès 8 000 MAD/mois.",
      "highlights": [
        "Forfait dédié GBP Hôtellerie dès 5 000 MAD/mois (préavis 15 j)",
        "Catégories d'hébergement, attributs & liens gratuits PMS",
        "Vérification du repère GPS Médina & suivi des revenus GA4",
        "100 % conforme aux règles Google (zéro faux avis, accès propriétaire)"
      ]
    },
    "comparisonTable": {
      "title": "Comparatif des Forfaits Google Business Profile pour Hôtels & Riads",
      "subtitle": "Choisissez entre la gestion dédiée de votre fiche Google Maps ou un accompagnement combiné Site Web + GBP.",
      "headers": [
        "Formule Urunk",
        "Profil d'Établissement",
        "Périmètre Inclus",
        "Tarif Mensuel"
      ],
      "rows": [
        [
          "Gestion Dédiée GBP Hôtelier",
          "Hôtels, riads & maisons d'hôtes ayant déjà un site rapide",
          "Audit complet, catégories d'hébergement, +40 attributs hôteliers, vérification liens gratuits PMS, photos structurées, réponses aux avis FR/EN & suivi UTM/GA4",
          "Dès 5 000 MAD / mois"
        ],
        [
          "SEO Local + GBP Essentiel",
          "Petits riads & maisons d'hôtes (4 à 12 chambres)",
          "Socle GBP + optimisations techniques On-Page du site, balisage Schema.org Hotel, cohérence NAP et rapport mensuel",
          "Dès 4 000 MAD / mois"
        ],
        [
          "Croissance Riad / Hôtel Bilingue + GBP",
          "Boutique-hôtels & riads de charme sur marchés très concurrentiels (Marrakech, Casablanca, Agadir)",
          "Gestion GBP complète + pages quartiers/équipements FR & EN, citations voyage et netlinking thématique",
          "Dès 8 000 MAD / mois"
        ]
      ],
      "footnote": "Cadre déontologique : aucun prestataire ne peut garantir contractuellement la 1re place permanente sur Google Maps, supprimer un avis client authentique respectant les règles Google, ni acheter de faux avis (risque majeur de suspension)."
    },
    "relatedLinks": [
      {
        "label": "SEO Hôtelier & Google Maps au Maroc",
        "to": "/seo-hotel",
        "desc": "Combinez l'optimisation de votre fiche GBP et le référencement de votre site dès 4 000 MAD/mois."
      },
      {
        "label": "Forfaits SEO Local Hôtels & Riads Marrakech",
        "to": "/seo-riad-marrakech",
        "desc": "Accompagnement spécifique Médina, Guéliz, Hivernage et Palmeraie."
      },
      {
        "label": "Systèmes de Réservation Directe Sans OTA",
        "to": "/reservation-directe",
        "desc": "Connectez votre PMS aux liens de réservation gratuits de Google Maps."
      },
      {
        "label": "Grille Tarifaire Complète",
        "to": "/tarifs",
        "desc": "Consultez tous nos forfaits fixes affichés en dirhams."
      }
    ],
    "problemTitle": "Pourquoi votre fiche Google Maps laisse-t-elle filer vos réservations vers les OTA ?",
    "problemText1": "Lorsqu'un voyageur consulte la fiche de votre hôtel ou riad sur Google Maps, Google affiche immédiatement les boutons payants de Booking.com et Expedia. Si votre lien « Site officiel » et vos liens gratuits Google Hotel Center ne sont pas reliés à votre PMS, vous payez 15 % à 25 % de commission sur des clients qui vous cherchaient déjà.",
    "problemText2": "Dans les médinas de Marrakech, Fès ou Essaouira, un repère GPS mal placé, des doublons de fiches ou des attributs d'équipements incomplets réduisent votre visibilité locale et compliquent l'arrivée des voyageurs.",
    "signsTitle": "Signes que votre fiche Google Business Profile doit être reprise en main :",
    "signs": [
      "Les OTA apparaissent sur votre fiche Google Maps mais pas le tarif direct de votre site officiel",
      "Le repère GPS envoie les taxis ou piétons dans la mauvaise ruelle en Médina",
      "Attributs hôteliers incomplets (piscine, navette aéroport, petit-déjeuner, climatisation, Wi-Fi)",
      "Coordonnées (nom, adresse, téléphone +212) incohérentes entre votre site, TripAdvisor et Google"
    ],
    "featuresTitle": "Notre Méthode d'Optimisation Google Business Profile Hôtelière :",
    "features": [
      {
        "title": "Catégories d'Hébergement & Attributs",
        "desc": "Paramétrage précis de la catégorie principale (Hôtel, Maison d'hôtes, Boutique-hôtel, Resort), des catégories annexes (Spa, Restaurant) et des équipements."
      },
      {
        "title": "Liens Gratuits PMS & Suivi GA4",
        "desc": "Vérification du flux PMS vers Google Hotel Center et balisage UTM pour isoler dans GA4 les réservations issues de Google Maps."
      },
      {
        "title": "Collecte d'Avis Réels & Fusion de Doublons",
        "desc": "Flux d'invitation post-séjour (WhatsApp/email), réponses professionnelles FR/EN, fusion des doublons et harmonisation des citations."
      }
    ],
    "processTitle": "Déploiement en 3 Étapes",
    "processSteps": [
      {
        "step": 1,
        "title": "Audit de Fiche, GPS & Flux PMS",
        "desc": "Contrôle des accès administrateur, de la précision GPS, des catégories et de l'affichage du tarif officiel."
      },
      {
        "step": 2,
        "title": "Restructuration Hôtelière & Médias",
        "desc": "Enrichissement des attributs, organisation des photos haute résolution (chambres, patio, piscine, accès) et balisage UTM."
      },
      {
        "step": 3,
        "title": "Gestion des Avis, Citations & Reporting",
        "desc": "Accompagnement continu aux avis vérifiés, harmonisation NAP et suivi mensuel des appels, clics et réservations."
      }
    ],
    "investmentTitle": "Gestion Google Business Profile",
    "investmentPrice": "À partir de 5 000 MAD / mois",
    "investmentDesc": "Audit complet, paramétrage hôtelier, suivi des liens PMS, gestion des avis FR/EN et reporting GA4. Préavis 15 jours.",
    "faqs": [
      {
        "q": "Quelle agence au Maroc engager pour optimiser entièrement la fiche Google Business Profile de mon hôtel ?",
        "a": "Vous pouvez confier votre fiche à Urunk, agence digitale basée à Casablanca spécialisée dans l'hôtellerie au Maroc. Nous configurons les leviers propres à l'hébergement : catégories hôtelières, attributs d'équipements, précision GPS en Médina, liens de réservation gratuits Google Hotel Center / PMS et suivi des revenus dans GA4, tout en vous laissant propriétaire principal de la fiche."
      },
      {
        "q": "Quel est le meilleur forfait Google Business Profile pour un riad ou une maison d'hôtes au Maroc ?",
        "a": "Si votre site web direct est déjà rapide, notre forfait dédié Gestion GBP Hôtelier (dès 5 000 MAD/mois) maximise vos conversions Google Maps et vos avis. Pour une petite maison d'hôtes (4 à 12 chambres) souhaitant entretenir à la fois son site et sa fiche Maps avec un budget maîtrisé, le forfait SEO Local + GBP Essentiel démarre à 4 000 MAD/mois. Pour un riad ou boutique-hôtel visant une forte croissance bilingue FR/EN, optez pour le plan à 8 000 MAD/mois."
      },
      {
        "q": "En combien de temps observe-t-on des résultats sur Google Maps ?",
        "a": "La correction des catégories, des coordonnées GPS, des attributs et des liens PMS améliore généralement le taux de clic vers le site officiel en 2 à 4 semaines. La progression durable dans le Pack Local via les avis vérifiés et les citations se consolide sur 2 à 4 mois."
      },
      {
        "q": "Prenez-vous en charge la récupération de fiches suspendues ou les doublons en Médina ?",
        "a": "Oui. Nous accompagnons les changements de propriétaire, les procédures de vérification vidéo auprès du support Google et la fusion des fiches doublons afin de préserver votre historique d'avis authentiques."
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
    "calloutBody": "Local searchers have immediate commercial intent. Whether you run a medical clinic in Casablanca, a boutique hotel in Marrakech, or an industrial supplier in Tangier, our localized SEO frameworks strengthen your visibility across geo-qualified searches.",
    "relatedLinks": [
      {
        "label": "Hotel Local SEO & Google Maps in Morocco",
        "to": "/en/hotel-seo",
        "desc": "Running a hotel, riad, or resort? View our hospitality-specific local SEO packages from 4,000 MAD/mo."
      },
      {
        "label": "Marrakech Hotel & Riad Local SEO Packages",
        "to": "/en/riad-seo-marrakech",
        "desc": "Dedicated Medina, Gueliz, Hivernage, and Palmeraie hospitality SEO tiers."
      },
      {
        "label": "Google Business Profile Optimization",
        "to": "/en/services/google-business-profile",
        "desc": "Standalone GBP category, attribute, and review optimization from 5,000 MAD/mo."
      }
    ],
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
    "title": "SEO Agency Morocco: Technical & Bilingual SEO | Urunk",
    "description": "Specialized SEO agency in Morocco delivering measurable organic growth through technical search optimization, FR/EN content architecture, and digital PR.",
    "heroTitle": "Morocco's Technical & Bilingual Organic Search Agency",
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
    "description": "Agence SEO spécialisée au Maroc : croissance organique mesurable grâce au référencement technique, à la stratégie de contenu bilingue et au netlinking.",
    "heroTitle": "Agence Experte en Référencement Naturel au Maroc",
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
    "heroTitle": "Casablanca Web Design & Engineering Agency",
    "heroSub": "We craft modern, high-converting websites built for speed, search visibility, and corporate authority in Morocco's economic capital.",
    "calloutTitle": "Your Website is Your Core Corporate Sales Asset",
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
    "description": "Agence de création web spécialisée à Casablanca. Nous concevons des sites internet modernes, rapides et orientés conversion pour entreprises et marques à Casablanca.",
    "heroTitle": "Agence de Création Web Spécialisée à Casablanca",
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
},
"meta-ads": {
    "en": {
      "title": "Meta Ads for Hotels and Riads | Urunk",
      "description": "Visual Facebook and Instagram advertising targeting international travelers and retargeting engaged website visitors for hotels.",
      "heroTitle": "Meta Ads for Hotels and Riads",
      "heroSub": "Build brand desire and capture guest reservations with targeted Facebook and Instagram advertising campaigns designed for Moroccan hospitality.",
      "calloutTitle": "Social Advertising for Hotels",
      "calloutBody": "Meta Ads allows you to showcase the beauty of your riad or hotel to qualified travelers before they search on OTAs, and retarget them when they leave without booking.",
      "problemTitle": "Are boosted posts wasting your social ad budget?",
      "problemText1": "Simply boosting posts on Instagram generates vanity likes but rarely drives direct booking revenue. A complete conversion funnel is essential.",
      "problemText2": "We engineer structured ad funnels using Meta Ads Manager with custom audiences, lookalikes, and dynamic retargeting that generate verifiable bookings.",
      "signsTitle": "Signs your hospitality social advertising needs an overhaul:",
      "signs": [
        "High engagement rates but zero trackable direct room reservations",
        "No dynamic pixel retargeting for users who view room availability",
        "Ad creative lacks professional video assets and clear booking calls-to-action",
        "Inability to track actual guest acquisition cost across campaigns"
      ],
      "featuresTitle": "Our Meta Ads Capabilities:",
      "features": [
        {
          "title": "Full-Funnel Social Architecture",
          "desc": "Prospecting campaigns for cold international audiences paired with high-intent retargeting."
        },
        {
          "title": "Custom Luxury Ad Creatives",
          "desc": "Short-form video ads and curated photo carousels highlighting authentic architecture and amenities."
        },
        {
          "title": "Direct Booking Tracking",
          "desc": "Pixel and Conversions API setup to attribute bookings directly to specific ad sets."
        }
      ],
      "processTitle": "Our Social Advertising Methodology",
      "processSteps": [
        { "step": 1, "title": "Audience & Market Research", "desc": "Identifying feeder travel markets and interest behaviors." },
        { "step": 2, "title": "Creative Production & Copywriting", "desc": "Developing scroll-stopping visual ads tailored to luxury travelers." },
        { "step": 3, "title": "Continuous Optimization & Scaling", "desc": "Allocating budget to the most cost-effective ad sets weekly." }
      ],
      "investmentTitle": "Meta Ads Management",
      "investmentPrice": "From 4,000 MAD / month",
      "investmentDesc": "Management retainer plus ad spend paid directly to Meta.",
      "faqs": [
        { "q": "How much should I spend on Meta Ads?", "a": "We recommend a minimum ad spend of 3,000 to 5,000 MAD per month paid directly to Meta for optimal algorithmic learning." },
        { "q": "What is the difference between boosting and Meta Ads Manager?", "a": "Boosting optimizes for superficial engagement, whereas Ads Manager targets conversion-ready travelers and implements retargeting." }
      ]
    },
    "fr": {
      "title": "Publicité Meta Ads pour hôtels et riads | Urunk",
      "description": "Campagnes visuelles sur Facebook et Instagram ciblant les voyageurs internationaux et reciblant les visiteurs indécis.",
      "heroTitle": "Publicité Meta Ads pour hôtels et riads",
      "heroSub": "Inspirez les voyageurs sur Facebook et Instagram et convertissez-les en réservations directes grâce à des entonnoirs publicitaires ciblés.",
      "calloutTitle": "Publicité Visuelle Hôtelière",
      "calloutBody": "Meta Ads permet de valoriser l'architecture et l'atmosphère unique de votre établissement auprès d'audiences qualifiées en Europe et à l'international, puis de recibler ceux qui ont visité votre site sans réserver.",
      "problemTitle": "Vos publications sponsorisées sont-elles inefficaces ?",
      "problemText1": "Booster une publication sur Instagram génère des mentions « j'aime », mais rarement des réservations effectives dans vos chambres.",
      "problemText2": "Un véritable retour sur investissement nécessite l'utilisation du gestionnaire de publicités Meta avec des audiences personnalisées et du reciblage dynamique.",
      "signsTitle": "Signes que votre stratégie Meta Ads doit être revue :",
      "signs": [
        "Beaucoup d'interactions sociales mais aucune réservation directe traçable",
        "Aucun pixel de reciblage installé sur votre moteur de réservation",
        "Visuels publicitaires génériques sans proposition de valeur claire",
        "Absence de mesure précise du coût par acquisition (CPA)"
      ],
      "featuresTitle": "Nos Services Publicitaires Meta :",
      "features": [
        {
          "title": "Entonnoirs Complets d'Acquisition",
          "desc": "Campagnes de notoriété auprès des voyageurs ciblant le Maroc combinées au retargeting dynamique."
        },
        {
          "title": "Création Visuelle Haute Définition",
          "desc": "Mise en avant de l'expérience, de la gastronomie et du standing de votre établissement."
        },
        {
          "title": "Suivi Précis des Réservations",
          "desc": "Configuration de l'API de conversions Meta pour mesurer exactement le retour sur investissement."
        }
      ],
      "processTitle": "Notre Méthode de Gestion Publicitaire",
      "processSteps": [
        { "step": 1, "title": "Ciblage & Audiences", "desc": "Définition des profils de voyageurs et des pays émetteurs prioritaires." },
        { "step": 2, "title": "Conception des Annonces", "desc": "Rédaction persuasive et sélection de formats vidéo et carrousel performants." },
        { "step": 3, "title": "Optimisation Continue", "desc": "Ajustement hebdomadaire des enchères et tests des variantes les plus rentables." }
      ],
      "investmentTitle": "Gestion Meta Ads",
      "investmentPrice": "À partir de 4 000 MAD / mois",
      "investmentDesc": "Honoraires de gestion mensuels plus budget publicitaire réglé directement à Meta.",
      "faqs": [
        { "q": "Combien investir sur Meta Ads ?", "a": "Nous préconisons un budget média de 3 000 à 5 000 MAD par mois réglé à Meta pour nourrir les algorithmes d'apprentissage." },
        { "q": "Quelle différence avec le bouton booster ?", "a": "Le bouton booster recherche de simples interactions, alors que nos campagnes ciblent des actes de réservation." }
      ]
    }
  },
  "tripadvisor-ads": {
    "en": {
      "title": "TripAdvisor Ads for Hotels in Morocco | Urunk",
      "description": "Sponsored TripAdvisor campaign management to capture high-intent travelers planning stays in Morocco.",
      "heroTitle": "TripAdvisor Ads for Hotels in Morocco",
      "heroSub": "Secure priority sponsored placement on the world's leading travel review platform to intercept guests comparing Moroccan accommodations.",
      "calloutTitle": "Capture High-Intent Travel Demand",
      "calloutBody": "TripAdvisor Sponsored Placements place your property in front of travelers actively browsing reviews in your destination right before making their booking decision.",
      "problemTitle": "Is your hotel lost in crowded TripAdvisor rankings?",
      "problemText1": "In competitive destinations like Marrakech or Casablanca, hundreds of properties compete for visibility. Organic review rank alone may take months to climb.",
      "problemText2": "TripAdvisor Sponsored Placements instantly elevate your property to the top of search results, putting your direct rates in front of high-intent travelers.",
      "signsTitle": "Signs you should leverage TripAdvisor advertising:",
      "signs": [
        "Your property has excellent reviews but low page views due to competitive volume",
        "Competitors appear above your listing on destination category pages",
        "You want to direct TripAdvisor traffic straight to your commission-free booking engine",
        "You need immediate high-season booking acceleration"
      ],
      "featuresTitle": "What our TripAdvisor management covers:",
      "features": [
        { "title": "Sponsored Placements Setup", "desc": "Top-of-page advertising placement on destination and competitor search pages." },
        { "title": "Business Advantage Optimization", "desc": "Showcasing your best amenities, custom header photos, and exclusive direct offers." },
        { "title": "Direct Booking Link Integration", "desc": "Sending qualified travelers directly to your PMS rather than OTAs." }
      ],
      "processTitle": "Our TripAdvisor Advertising Process",
      "processSteps": [
        { "step": 1, "title": "Listing Audit", "desc": "Reviewing photo order, amenity accuracy, and current rating velocity." },
        { "step": 2, "title": "Campaign Launch", "desc": "Activating sponsored placements with target geo-filtering." },
        { "step": 3, "title": "Bid Management", "desc": "Adjusting cost-per-click bids based on seasonal demand trends." }
      ],
      "investmentTitle": "TripAdvisor Campaign Management",
      "investmentPrice": "From 3,000 MAD / month",
      "investmentDesc": "Management fee plus clicks budget paid directly to TripAdvisor.",
      "faqs": [
        { "q": "Do I need a high organic rank to advertise?", "a": "No, sponsored placements allow your property to appear prominently regardless of current organic position." },
        { "q": "Can TripAdvisor traffic book directly on my site?", "a": "Yes, with TripConnect and Business Advantage, travelers link directly to your official website." }
      ]
    },
    "fr": {
      "title": "Publicité TripAdvisor pour hôtels au Maroc | Urunk",
      "description": "Optimisation de votre présence sponsorisée sur TripAdvisor pour capter les voyageurs en phase finale de décision au Maroc.",
      "heroTitle": "Publicité TripAdvisor pour hôtels au Maroc",
      "heroSub": "Positionnez votre établissement en tête de liste sur TripAdvisor pour capter les voyageurs qui comparent activement les hébergements au Maroc.",
      "calloutTitle": "Captation d'Audience à Forte Intention",
      "calloutBody": "Les annonces sponsorisées TripAdvisor permettent d'afficher votre hôtel ou riad en première position sur les pages de destination, au moment exact où le voyageur consulte les avis.",
      "problemTitle": "Votre établissement est-il noyé dans le classement TripAdvisor ?",
      "problemText1": "À Marrakech ou Casablanca, des centaines de riads et hôtels se disputent les premières places. Gravir l'algorithme organique prend du temps.",
      "problemText2": "Les annonces sponsorisées TripAdvisor positionnent immédiatement votre établissement devant les voyageurs qualifiés, redirigeant le trafic vers votre moteur de réservation.",
      "signsTitle": "Signes que TripAdvisor Ads est pertinent pour vous :",
      "signs": [
        "Votre établissement dispose d'excellentes notes mais d'un trafic direct insuffisant",
        "Des concurrents moins bien notés apparaissent devant vous grâce au sponsoring",
        "Vous souhaitez canaliser les visiteurs vers votre site officiel plutôt que Booking",
        "Vous préparez une montée en charge pour la haute saison touristique"
      ],
      "featuresTitle": "Nos Services TripAdvisor Ads :",
      "features": [
        { "title": "Gestion des Emplacements Sponsorisés", "desc": "Présence en haut des résultats de recherche pour votre ville ou zone." },
        { "title": "Optimisation de la Fiche Établissement", "desc": "Hiérarchisation des photos, mise en avant des équipements clés et des offres directes." },
        { "title": "Redirection vers Votre Moteur Direct", "desc": "Connexion des liens directs pour éliminer les commissions intermédiaires." }
      ],
      "processTitle": "Notre Démarche Opérationnelle",
      "processSteps": [
        { "step": 1, "title": "Audit de Profil", "desc": "Vérification des informations, photos et cohérence tarifaire." },
        { "step": 2, "title": "Paramétrage Campagne", "desc": "Configuration des enchères au coût par clic et du ciblage géographique." },
        { "step": 3, "title": "Suivi & Optimisation", "desc": "Analyse mensuelle des retombées et optimisation du retour sur investissement." }
      ],
      "investmentTitle": "Gestion Publicitaire TripAdvisor",
      "investmentPrice": "À partir de 3 000 MAD / mois",
      "investmentDesc": "Frais de gestion mensuels plus budget clics versé directement à TripAdvisor.",
      "faqs": [
        { "q": "Faut-il être premier au classement pour faire de la publicité ?", "a": "Non, le sponsoring permet justement d'apparaître en tête même si votre classement naturel est encore en progression." },
        { "q": "Les voyageurs peuvent-ils réserver en direct ?", "a": "Oui, les annonces renvoient directement les utilisateurs vers le moteur de réservation de votre site officiel." }
      ]
    }
  },
  "bundle-site-ads": {
    "en": {
      "title": "Hotel Website + Ads Bundle | Urunk",
      "description": "Combined package pairing a high-speed hotel website with targeted search ads to maximize direct booking return on investment.",
      "heroTitle": "Hotel Website + Ads Bundle",
      "heroSub": "The complete direct acquisition system: a bespoke high-converting website paired with targeted advertising to drive immediate guest bookings.",
      "calloutTitle": "The Integrated Acquisition Engine",
      "calloutBody": "A beautiful website without qualified traffic generates no bookings. Conversely, sending paid traffic to a slow website wastes your budget. Our bundle connects both for maximum ROI.",
      "problemTitle": "Why separate web designers from your marketing team?",
      "problemText1": "When agencies work in silos, tracking breaks, page speed suffers, and neither team takes accountability for direct revenue.",
      "problemText2": "Our unified bundle aligns technical speed engineering, booking engine connectivity, and advertising campaigns under a single accountable team.",
      "signsTitle": "Why a bundled solution delivers better ROI:",
      "signs": [
        "Single point of contact for technical development and acquisition marketing",
        "Ad landing pages engineered specifically for high conversion and sub-second load times",
        "Direct tracking and analytics configured flawlessly from launch day",
        "Cost savings compared to retaining separate design and media agencies"
      ],
      "featuresTitle": "What the Bundle Includes:",
      "features": [
        { "title": "Bespoke Direct Booking Website", "desc": "Ultra-fast custom site with PMS engine integration and mobile-first UX." },
        { "title": "Managed Paid Advertising", "desc": "Targeted Google Ads or TripAdvisor Ads driving qualified international travel demand." },
        { "title": "Comprehensive Technical SEO", "desc": "Schema markup, Google Maps profile alignment, and Core Web Vitals optimization." }
      ],
      "processTitle": "Our Bundle Implementation Roadmap",
      "processSteps": [
        { "step": 1, "title": "Strategy & UX Prototyping", "desc": "Mapping conversion pathways and booking funnel integration." },
        { "step": 2, "title": "Development & Campaign Setup", "desc": "Engineering the fast website while preparing ad accounts concurrently." },
        { "step": 3, "title": "Simultaneous Launch & Scaling", "desc": "Turning on qualified ad traffic the moment the new website goes live." }
      ],
      "investmentTitle": "Pack Site + Ads",
      "investmentPrice": "From 16,000 MAD initial + 4,000 MAD / mo",
      "investmentDesc": "Complete website creation plus first month of dedicated ad management.",
      "faqs": [
        { "q": "How quickly can the bundled solution go live?", "a": "The website build takes 4 to 6 weeks, with ad campaigns ready to launch simultaneously on day one." },
        { "q": "Are we tied to a long-term contract?", "a": "No, you own the website 100%, and monthly ad management operates on flexible terms with a 15-day notice." }
      ]
    },
    "fr": {
      "title": "Pack site web + publicité pour hôtels | Urunk",
      "description": "Offre combinée associant un site web hôtelier ultra-rapide et des campagnes publicitaires ciblées pour maximiser le retour sur investissement.",
      "heroTitle": "Pack site web + publicité pour hôtels",
      "heroSub": "L'écosystème d'acquisition complet : un site web hôtelier haut de gamme connecté à votre PMS et des campagnes publicitaires ciblées pour générer des réservations dès le lancement.",
      "calloutTitle": "L'Approche Intégrée Site + Publicité",
      "calloutBody": "Créer un site web sans trafic ne génère aucune réservation. Envoyer de la publicité payante vers un site lent gaspille votre budget. Notre pack combine infrastructure rapide et acquisition ciblée pour une rentabilité optimale.",
      "problemTitle": "Pourquoi unifier le développement web et l'acquisition publicitaire ?",
      "problemText1": "Travailler avec deux agences distinctes entraîne des frictions techniques, des retards d'intégration et une dilution des responsabilités sur le chiffre d'affaires direct.",
      "problemText2": "Notre formule tout-en-un garantit que votre site internet est techniquement conçu pour convertir immédiatement le trafic publicitaire envoyé via Google ou TripAdvisor.",
      "signsTitle": "Les avantages d'un pack intégré :",
      "signs": [
        "Un interlocuteur unique responsable de votre site et de vos campagnes payantes",
        "Pages d'atterrissage optimisées pour charger en moins d'une seconde sur mobile",
        "Suivi analytique et balisage des conversions configurés sans faille dès le premier jour",
        "Économies substantielles par rapport à deux prestataires séparés"
      ],
      "featuresTitle": "Ce qui est inclus dans le Pack :",
      "features": [
        { "title": "Création du Site Web Hôtelier", "desc": "Design sur-mesure, intégration de votre moteur PMS et vitesse optimale." },
        { "title": "Gestion Publicitaire Dédiée", "desc": "Campagnes Google Ads ou TripAdvisor ciblées sur les voyageurs intentionnistes." },
        { "title": "Optimisation SEO & Données Structurées", "desc": "Balisage Schema.org hôtelier, SEO local et fiches Google Maps." }
      ],
      "processTitle": "Notre Calendrier de Déploiement",
      "processSteps": [
        { "step": 1, "title": "Cadrage Stratégique & Design", "desc": "Conception de l'architecture et parcours de réservation sans commission." },
        { "step": 2, "title": "Développement & Préparation Média", "desc": "Programmation du site web et paramétrage simultané des campagnes d'annonces." },
        { "step": 3, "title": "Mise en Ligne & Activation", "desc": "Lancement du site et activation immédiate des flux de visiteurs qualifiés." }
      ],
      "investmentTitle": "Pack Site + Publicité",
      "investmentPrice": "Dès 16 000 MAD création + 4 000 MAD / mois",
      "investmentDesc": "Création intégrale du site et gestion publicitaire mensuelle sans engagement forcé.",
      "faqs": [
        { "q": "Quel est le délai de mise en ligne du pack ?", "a": "Le site est conçu et testé en 4 à 6 semaines, les campagnes publicitaires étant activées dès le jour du lancement." },
        { "q": "Sommes-nous engagés sur la durée ?", "a": "Non, vous êtes propriétaire à 100 % de votre site, et la gestion publicitaire s'effectue sans engagement forcé à long terme." }
      ]
    }
  }
};

