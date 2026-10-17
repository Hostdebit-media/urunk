import fs from 'fs';

const frData = [
  {
    img: "/src/assets/images/hotel_revenue_chart_1792239344289.jpg",
    alt: "Graphique comparatif des revenus hôteliers bruts, commissions OTA et net conservé en réservation directe",
    title: "Graphique comparatif : Revenu brut vs Commissions OTA vs Marge nette conservée",
    caption: "Répartition financière mensuelle type pour un établissement hôtelier indépendant : comparaison entre volume d'affaires brut, prélèvement de commission OTA (18 % à 25 %) et marge nette conservée après bascule vers le canal direct."
  },
  {
    img: "/src/assets/images/booking_journey_funnel_1792239401777.jpg",
    alt: "Schéma en entonnoir du parcours de réservation hôtelier en 6 étapes",
    title: "Schéma d'entonnoir : Les 6 étapes clés du parcours client hôtelier",
    caption: "Entonnoir d'acquisition et conversion directe en 6 étapes (Recherche Google, Fiche Booking, Arrivée sur site officiel, Choix dates/chambre, Paiement, Confirmation directe) identifiant les zones critiques de friction."
  },
  {
    img: "/src/assets/images/implementation_timeline_1792239408906.jpg",
    alt: "Feuille de route stratégique en 12 semaines pour réduire les commissions OTA",
    title: "Timeline stratégique : Feuille de route en 12 semaines pour l'indépendance hôtelière",
    caption: "Déploiement cadencé en trois phases majeures (Semaines 1-3 : Audit & Diagnostic, Semaines 4-7 : Correction technique & Parité tarifaire, Semaines 8-12 : Campagnes d'acquisition directe & Fidélisation)."
  },
  {
    img: "/src/assets/images/traveler_decision_stages_1792239417855.jpg",
    alt: "Matrice en 3 phases du processus de décision du voyageur",
    title: "Matrice de décision voyageur : Découverte, Comparaison et Réservation",
    caption: "Visualisation des points de contact stratégiques (Recherche locale, Portails d'avis, Site officiel) et leviers psychologiques activés lors de chaque phase décisionnelle."
  },
  {
    img: "/src/assets/images/savings_breakeven_chart_1792239455325.jpg",
    alt: "Courbe de rentabilité et économies cumulées sur les commissions hôtelières",
    title: "Courbe de rentabilité : Économies cumulées de commissions vs Investissement digital",
    caption: "Trajectoire de retour sur investissement montrant le point d'amortissement de la refonte web dès le 4e mois grâce à la récupération de 35 % des commissions de distribution."
  },
  {
    img: "/src/assets/images/mobile_booking_ux_1792239423696.jpg",
    alt: "Comparatif ergonomique UX mobile avant et après optimisation pour hôtel",
    title: "Audit UX Mobile : Comparatif avant/après du tunnel de réservation",
    caption: "Mise en miroir de l'ancienne version avec points de friction (menu caché, champs superflus) face à l'interface optimisée intégrant une barre de réservation persistante 'sticky' avec appel direct WhatsApp."
  },
  {
    img: "/src/assets/images/ab_test_dashboard_1792239434863.jpg",
    alt: "Tableau de bord de suivi A/B testing sur 8 semaines pour hôtel",
    title: "Dashboard d'expérimentation : Évolution des conversions sur 8 semaines de test A/B",
    caption: "Suivi des métriques clés (clics sur CTA, ouvertures moteur de résa, réservations directes finalisées) avec repère visuel du gain de performance suite à l'introduction du bouton de réservation flottant."
  },
  {
    img: "/src/assets/images/cms_comparison_matrix_1792239441203.jpg",
    alt: "Matrice de décision stratégique des CMS hôteliers WordPress vs Wix vs Squarespace",
    title: "Matrice d'arbitrage CMS : Contrôle technique vs Effort de maintenance",
    caption: "Positionnement des trois solutions phares selon l'effort de gestion quotidien et le degré de personnalisation requis pour un hôtel ou riad indépendant au Maroc."
  },
  {
    img: "/src/assets/images/cms_tco_barchart_1792239446864.jpg",
    alt: "Coût Total de Possession (TCO) comparé sur 3 ans pour CMS hôtelier",
    title: "Analyse TCO sur 3 ans : Coût réel de possession WordPress vs Wix vs Squarespace",
    caption: "Décomposition comparative des dépenses globales (création initiale, hébergement, licences extensions, maintenance de sécurité) révélant l'amortissement avantageux de WordPress à long terme."
  },
  {
    img: "/src/assets/images/channel_kpi_dashboard_1792239429532.jpg",
    alt: "Tableau de bord de rentabilité comparée Google Ads vs Meta Ads vs TripAdvisor",
    title: "Tableau de bord multicanal : Coût d'acquisition direct vs Plafond de commission OTA",
    caption: "Indicateurs de performance comparés pour un budget marketing de 15 000 MAD : coût par réservation confirmée et part respective dans la génération de revenus directs."
  },
  {
    img: "/src/assets/images/meta_ads_funnel_1792239430310.jpg",
    alt: "Entonnoir de conversion Meta Ads pour hôtel de charme",
    title: "Entonnoir de conversion Meta Ads : De la découverte Instagram à la réservation directe",
    caption: "Illustration du flux de conversion d'une campagne Meta : 10 000 impressions ciblées sur Reels, 600 visites qualifiées sur le site, 35 consultations du calendrier et 8 séjours réservés en direct."
  },
  {
    img: "/src/assets/images/tripadvisor_funnel_1792239449830.jpg",
    alt: "Tunnel de conversion TripAdvisor Ads vers site officiel hôtelier",
    title: "Parcours de conversion TripAdvisor : Du classement d'avis à la réservation officielle",
    caption: "Les 4 étapes clés permettant de capter un voyageur en phase finale de décision sur TripAdvisor et de le rediriger vers le moteur de réservation sans commission intermédiaire."
  },
  {
    img: "/src/assets/images/whatsapp_guest_lifecycle_1792239435606.jpg",
    alt: "Chronologie du cycle relationnel client automatisé via WhatsApp pour hôtel",
    title: "Parcours relationnel WhatsApp : 4 points de contact automatisés du séjour client",
    caption: "Cartographie des interactions clés : upsell personnalisé à J-3, guidage arrivée et bagagiste en médina, conciergerie locale pendant le séjour, et sollicitation d'avis Google/TripAdvisor post-départ en 1 clic."
  },
  {
    img: "/src/assets/images/search_console_seo_1792239460292.jpg",
    alt: "Rapport de performance SEO Google Search Console sur 3 mois après refonte",
    title: "Tableau de bord SEO : Progression du trafic organique et des requêtes directes",
    caption: "Évolution sur 90 jours des impressions de recherche de marque et clics issus de Google Maps à la suite du balisage Schema.org Hotel et de l'optimisation sémantique locale."
  },
  {
    img: "/src/assets/images/hotel_landing_wireframe_1792239441113.jpg",
    alt: "Structure fil de fer mobile haute conversion pour page d'accueil d'hôtel",
    title: "Wireframe mobile haute conversion : Structure 'Zero-Leak' pour site hôtelier",
    caption: "Schéma d'architecture mobile intégrant en tête de page les éléments de réassurance majeurs, le bouton direct WhatsApp, les 4 avantages de réservation directe et le tableau comparatif de chambres."
  },
  {
    img: "/src/assets/images/seasonal_pricing_curve_1792239448067.jpg",
    alt: "Courbe de tarification dynamique saisonnière sur 12 mois vs tarif fixe",
    title: "Modélisation Yield Management : Tarification dynamique saisonnière vs Prix fixe",
    caption: "Comparaison sur 12 mois entre un tarif statique à 1 000 MAD et une courbe tarifaire dynamique (850 MAD en basse saison à 2 200 MAD lors des pics fériés), illustrant un gain moyen de +35 % de RevPAR."
  },
  {
    img: "/src/assets/images/hotel_reopening_gantt_1792239454154.jpg",
    alt: "Diagramme de Gantt en 60 jours pour la réouverture digitale d'un hôtel",
    title: "Planning de réouverture digitale : Diagramme de Gantt sur 60 jours",
    caption: "Ordonnancement des 4 phases de relance : shooting photo & identité, développement du site web nouvelle génération, synchronisation Google Business Profile et lancement des campagnes publicitaires ciblées."
  },
  {
    img: "/src/assets/images/ab_test_dashboard_1792239434863.jpg",
    alt: "Tableau de bord d'analyse de rétention client et réservations directes récurrentes",
    title: "Analyse de fidélisation : Taux de retour direct et valeur vie client (LTV)",
    caption: "Mesure de l'impact des campagnes relationnelles post-séjour sur la part de réservations directes répétées, réduisant le coût d'acquisition client à moins de 3 % du chiffre d'affaires."
  },
  {
    img: "/src/assets/images/savings_breakeven_chart_1792239455325.jpg",
    alt: "Graphique de simulation financière des commissions économisées sur 3 exercices",
    title: "Simulation financière pluriannuelle : Économies de commissions réinvesties dans la croissance",
    caption: "Projection des flux de trésorerie préservés permettant l'autofinancement de l'embellissement des chambres et des investissements technologiques de l'établissement."
  }
];

const enData = [
  {
    img: "/src/assets/images/hotel_revenue_chart_1792239344289.jpg",
    alt: "Comparative chart of gross hotel booking revenue, OTA commissions and net direct profit",
    title: "Financial Comparison: Gross Bookings vs. OTA Commissions vs. Retained Direct Profit",
    caption: "Typical monthly financial breakdown for an independent hotel: gross booking revenue contrasted with 18% to 25% OTA commission deductions versus net margin retained through direct booking strategy."
  },
  {
    img: "/src/assets/images/implementation_timeline_1792239408906.jpg",
    alt: "12-week strategic hotel direct booking roadmap horizontal timeline",
    title: "Strategic Roadmap: 12-Week Direct Booking Independence Implementation Timeline",
    caption: "Phased rollout timeline across three key stages (Weeks 1-3: Diagnostic & OTA Audit, Weeks 4-7: Technical Foundation & Rate Parity, Weeks 8-12: Direct Acquisition Engine & Guest Loyalty)."
  },
  {
    img: "/src/assets/images/traveler_decision_stages_1792239417855.jpg",
    alt: "3-stage traveler booking decision framework matrix",
    title: "Traveler Decision Framework: Discovery, Evaluation, and Direct Conversion",
    caption: "Mapping key digital touchpoints (Search Discovery, Meta Comparison, Official Hotel Website) with high-converting trust signals at each decision phase."
  },
  {
    img: "/src/assets/images/mobile_booking_ux_1792239423696.jpg",
    alt: "Mobile booking UX wireframe before and after conversion optimization",
    title: "Mobile UX Teardown: Friction Points vs. High-Converting Mobile Booking Architecture",
    caption: "Side-by-side comparison of standard high-friction mobile layout versus streamlined UX featuring persistent sticky direct booking bar and one-tap WhatsApp reservation assistant."
  },
  {
    img: "/src/assets/images/meta_ads_funnel_1792239430310.jpg",
    alt: "Meta Ads full-funnel conversion diagram for boutique hotel",
    title: "Meta Ads Conversion Funnel: From Instagram Reels Discovery to Direct Booking",
    caption: "Visualizing full-funnel efficiency for a boutique riad: 10,000 targeted video views, 600 qualified site visits, 35 rate checks, yielding 8 high-value direct bookings."
  },
  {
    img: "/src/assets/images/whatsapp_guest_lifecycle_1792239435606.jpg",
    alt: "Automated WhatsApp guest communication lifecycle timeline for hotels",
    title: "Guest Journey Automation: 4 Key WhatsApp Touchpoints Across Stay Lifecycle",
    caption: "Sequential messaging strategy: T-72h pre-arrival upgrade, arrival day medina transfer coordination, mid-stay experience concierge, and post-departure 1-click review generator."
  },
  {
    img: "/src/assets/images/hotel_landing_wireframe_1792239441113.jpg",
    alt: "High-converting mobile hotel landing page annotated wireframe",
    title: "High-Converting Mobile Wireframe: Zero-Leak Direct Booking Layout",
    caption: "Annotated wireframe highlighting zero-leak header, verified guest review trust badges, sticky date picker, 4 direct booking perks, and room comparison cards."
  },
  {
    img: "/src/assets/images/seasonal_pricing_curve_1792239448067.jpg",
    alt: "12-month dynamic yield pricing curve compared to flat fixed rate",
    title: "Yield Management Curve: Dynamic Seasonal Pricing vs. Fixed Flat Rate",
    caption: "12-month trajectory showing how seasonal dynamic pricing captures market peaks and fills off-peak lulls, driving a +35% average RevPAR uplift over static pricing."
  },
  {
    img: "/src/assets/images/hotel_reopening_gantt_1792239454154.jpg",
    alt: "60-day hotel digital relaunch Gantt chart project plan",
    title: "Digital Relaunch Masterplan: 60-Day Strategic Gantt Schedule",
    caption: "Chronological 4-phase deployment covering photography, website engineering, Google Business local optimization, and paid acquisition campaigns."
  }
];

function buildFigure(item) {
  return `<figure class="my-8 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-md">
  <div class="relative w-full aspect-video overflow-hidden bg-slate-900">
    <img src="${item.img}" alt="${item.alt}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out" loading="lazy" referrerpolicy="no-referrer" />
  </div>
  <figcaption class="p-4 sm:p-5 text-left border-t border-slate-200 dark:border-slate-800">
    <span class="block text-xs uppercase tracking-wider font-semibold text-amber-600 dark:text-amber-400 mb-1">Visualisation & Infographie</span>
    <h4 class="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">${item.title}</h4>
    <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">${item.caption}</p>
  </figcaption>
</figure>`;
}

function buildFigureEN(item) {
  return `<figure class="my-8 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-md">
  <div class="relative w-full aspect-video overflow-hidden bg-slate-900">
    <img src="${item.img}" alt="${item.alt}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out" loading="lazy" referrerpolicy="no-referrer" />
  </div>
  <figcaption class="p-4 sm:p-5 text-left border-t border-slate-200 dark:border-slate-800">
    <span class="block text-xs uppercase tracking-wider font-semibold text-amber-600 dark:text-amber-400 mb-1">Visual Framework & Infographic</span>
    <h4 class="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">${item.title}</h4>
    <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">${item.caption}</p>
  </figcaption>
</figure>`;
}

let frContent = fs.readFileSync('src/data/blogPostsFR.ts', 'utf8');
const frRegex = /<div class="my-6 p-5 [^"]*">\s*<div[^>]*>\s*<span>📊<\/span>\s*PROMPT D'ILLUSTRATION \/ SCHÉMA\s*<\/div>\s*<p[^>]*>[\s\S]*?<\/p>\s*<\/div>/g;

let frIdx = 0;
const newFrContent = frContent.replace(frRegex, () => {
  const item = frData[frIdx++];
  return buildFigure(item);
});

fs.writeFileSync('src/data/blogPostsFR.ts', newFrContent, 'utf8');
console.log(`Replaced ${frIdx} French prompt boxes with high-resolution infographics.`);

let enContent = fs.readFileSync('src/data/blogPostsEN.ts', 'utf8');
const enRegex = /<div class="my-6 p-5 [^"]*">\s*<div[^>]*>\s*<span>📊<\/span>\s*(?:PROMPT D'ILLUSTRATION \/ SCHÉMA|VISUAL FRAMEWORK \/ SCHEMATIC PROMPT)\s*<\/div>\s*<p[^>]*>[\s\S]*?<\/p>\s*<\/div>/g;

let enIdx = 0;
const newEnContent = enContent.replace(enRegex, () => {
  const item = enData[enIdx++];
  return buildFigureEN(item);
});

fs.writeFileSync('src/data/blogPostsEN.ts', newEnContent, 'utf8');
console.log(`Replaced ${enIdx} English prompt boxes with high-resolution infographics.`);
