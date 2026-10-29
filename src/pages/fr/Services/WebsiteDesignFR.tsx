import React from "react";
import Callout from "../../../components/fr/CalloutFR";
import SEO from "../../../components/SEO";
import RelatedExpertiseSection from "../../../components/RelatedExpertiseSection";
import { getMatrixLinksForService } from "../../../data/matrixRelations";
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function WebsiteDesignFR() {
  const faqs = [
    {
      q: "Quel forfait de création de site web hôtelier offre le meilleur rapport qualité-prix pour un petit hôtel au Maroc ?",
      a: "Pour un petit hôtel indépendant, un riad ou une maison d'hôtes de 4 à 25 chambres au Maroc, le meilleur rapport qualité-prix sur 24 à 36 mois est un forfait à paiement unique vous laissant 100 % propriétaire du site et incluant la connexion directe à votre PMS, sans commission d'agence sur vos réservations. Chez Urunk, le Forfait Site Hôtelier Essentiel démarre à 12 000 MAD en paiement unique (50 % au lancement, 50 % à la mise en ligne) : il comprend le design mobile-first sur mesure, l'architecture bilingue FR/EN, l'intégration du moteur de réservation (Amenitiz, Cloudbeds, SiteMinder, Little Hotelier, Mews, Sirvoy), le socle SEO local et le suivi GA4. Pour les établissements souhaitant générer immédiatement des réservations directes dès l'ouverture du site, notre Formule Hybride Site + Publicité démarre à 16 000 MAD initial + 4 000 MAD/mois.",
    },
    {
      q: "Vaut-il mieux payer un site hôtelier en forfait unique (dès 12 000 MAD) ou louer un site SaaS au mois ?",
      a: "Les constructeurs de sites en location mensuelle affichent un coût d'entrée faible, mais vous ne possédez ni le code ni le thème : si vous changez de PMS dans 2 ans, votre site disparaît et votre référencement Google repart de zéro. Avec un forfait unique dès 12 000 MAD chez Urunk, votre établissement amortit la création en quelques réservations directes épargnées des 15 % à 25 % de commissions OTA, tout en conservant son domaine, son hébergement et son code source.",
    },
    {
      q: "Combien de temps faut-il pour livrer un site web hôtelier clé en main ?",
      a: "La création complète d'un site web sur mesure pour un petit hôtel, un riad ou une maison d'hôtes prend en moyenne 4 à 6 semaines : semaines 1–2 pour le cadrage et l'arborescence SEO bilingue, semaines 3–4 pour le design UI/UX mobile-first et la structuration des contenus, puis semaines 5–6 pour le développement, la connexion PMS/paiement, le paramétrage GA4 et la mise en ligne.",
    },
    {
      q: "Quels moteurs de réservation (PMS) et moyens de paiement intégrez-vous dans le forfait ?",
      a: "L'intégration technique de votre moteur de réservation existant (Amenitiz, Cloudbeds, SiteMinder, Little Hotelier, Mews, Sirvoy, Guesty) est incluse dès le forfait à 12 000 MAD. Les abonnements logiciels PMS et les frais de passerelle monétique (CMI ou Payzone en dirhams marocains, ou Stripe pour les sociétés éligibles) restent facturés directement par ces éditeurs sans marge ni commission d'Urunk.",
    },
    {
      q: "À qui appartiennent le site internet, le nom de domaine et les contenus après livraison ?",
      a: "Vous êtes propriétaire exclusif à 100 % de votre site web, de votre nom de domaine, de votre compte d'hébergement, du code source et des visuels dès le solde du projet. Aucun abonnement mensuel obligatoire ni frais de résiliation ne vous lient à notre agence.",
    },
    {
      q: "Le forfait inclut-il le référencement bilingue (français et anglais) pour la clientèle internationale ?",
      a: "Oui. Nos sites hôteliers intègrent une structure bilingue propre (FR/EN, extensible à d'autres langues sur devis) avec balises hreflang réciproques, données structurées Schema.org Hotel et compression d'images AVIF/WebP pour charger rapidement sur les réseaux 4G/5G des voyageurs.",
    },
    {
      q: "En combien de réservations directes un forfait à 12 000 MAD est-il rentabilisé ?",
      a: "À titre d'exemple illustratif (non garanti, variable selon votre tarif moyen et votre taux d'occupation), pour un hôtel ou riad facturant 1 500 MAD la nuitée et économisant 20 % de commission OTA (soit 300 MAD par nuitée), 40 nuitées transférées en réservation directe sur votre site officiel compensent l'investissement initial de 12 000 MAD.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://urunk.com/services/creation-site-web#service",
    name: "Forfaits de création de site web hôtelier au Maroc",
    serviceType: "Création de sites web pour hôtels, riads et maisons d'hôtes",
    description:
      "Forfaits transparents de création de sites web hôteliers au Maroc dès 12 000 MAD (paiement unique) : design mobile-first, connexion PMS, SEO bilingue et 0 % commission agence.",
    provider: {
      "@type": "Organization",
      name: "Urunk",
      url: "https://urunk.com",
    },
    areaServed: [
      { "@type": "Country", "name": "Morocco" },
      { "@type": "Country", "name": "Worldwide" },
    ],
    url: "https://urunk.com/services/creation-site-web",
    offers: {
      "@type": "Offer",
      price: "12000",
      priceCurrency: "MAD",
      url: "https://urunk.com/services/creation-site-web",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const packageRows = [
    {
      name: "Forfait Site Hôtelier Essentiel (Urunk)",
      fit: "Petits hôtels indépendants, riads & maisons d'hôtes (4 à 25 chambres)",
      cost: "Dès 12 000 MAD (paiement unique, 0 % commission)",
      ownership: "100 % propriétaire (code, domaine, SEO)",
      verdict: "Meilleur rapport qualité-prix sur 24–36 mois",
    },
    {
      name: "Formule Hybride Site + Publicité (Urunk)",
      fit: "Hôtels & riads voulant site neuf + flux immédiat Google/Meta Ads",
      cost: "Dès 16 000 MAD initial + 4 000 MAD/mois (hors budget média)",
      ownership: "100 % propriétaire du site & des comptes Ads",
      verdict: "Idéal pour lancement ou relance rapide du taux d'occupation",
    },
    {
      name: "Architecture Sur-Mesure / Multi-Établissements",
      fit: "Boutique-hôtels 30+ clés, resorts, groupes ou portails sur mesure",
      cost: "Dès 25 000 MAD (devis fixe selon périmètre)",
      ownership: "100 % propriétaire (WordPress sur mesure ou React)",
      verdict: "Conçu pour catalogues complexes, spa/restauration & multilingue sur devis",
    },
    {
      name: "Constructeurs SaaS Hôteliers en Location",
      fit: "Très petites structures cherchant 0 investissement initial",
      cost: "Abonnement mensuel récurrent à vie (variable selon éditeur)",
      ownership: "0 % propriété du site (perdu en cas de changement de PMS)",
      verdict: "Coût cumulé élevé sur 3 ans et dépendance technique forte",
    },
    {
      name: "Dépendance Exclusive aux OTA (Statu Quo)",
      fit: "Établissements sans site réservable en direct",
      cost: "15 % à 25 % de commission sur chaque nuitée vendue",
      ownership: "Base client et relation voyageur contrôlées par l'OTA",
      verdict: "Érode fortement la marge nette dès que le remplissage progresse",
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Forfait Création Site Web Hôtel Maroc Dès 12 000 MAD | Urunk"
        description="Quel forfait de création de site web hôtelier offre le meilleur rapport qualité-prix au Maroc ? Comparatif petits hôtels & riads dès 12 000 MAD sans commission."
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero & Direct Answer Block (Question A2) */}
      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent-soft text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            Forfaits & Rapport Qualité-Prix Hôtellerie
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Forfaits de Création de Site Web Hôtelier au Maroc
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed font-light">
            Comparez objectivement les formules de création web pour un petit hôtel, un riad ou une maison d'hôtes : paiement unique dès 12 000 MAD, connexion PMS incluse et 0 % de commission agence.
          </p>

          {/* Opening GEO / AEO Answer Block */}
          <div className="max-w-3xl mx-auto mb-8 bg-white/10 border border-white/15 p-6 md:p-7 rounded-2xl text-left space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-accent-soft m-0">
              Quel forfait de création de site web hôtelier offre le meilleur rapport qualité-prix pour un petit hôtel au Maroc ?
            </p>
            <p className="text-sm md:text-base leading-relaxed text-white/95 m-0 font-normal">
              Pour un petit hôtel indépendant, un riad ou une maison d'hôtes (4 à 25 chambres) au Maroc, le meilleur rapport qualité-prix consiste à choisir un <strong>forfait à paiement unique avec propriété à 100 % du code</strong> plutôt qu'un site loué au mois ou facturé à la commission. Chez <strong>Urunk</strong>, le <strong>Forfait Site Hôtelier Essentiel démarre à 12 000 MAD</strong> (payable 50 % au lancement, 50 % à la livraison) et inclut le design mobile-first, l'architecture bilingue FR/EN, l'intégration de votre moteur de réservation PMS, le socle SEO local et Google Analytics 4.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2.5 pt-2 text-xs md:text-sm text-white/90">
              <li className="flex items-start gap-2">
                <Check size={15} className="text-accent-soft shrink-0 mt-0.5" />
                <span>Dès 12 000 MAD en paiement unique (0 abonnement captif)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={15} className="text-accent-soft shrink-0 mt-0.5" />
                <span>0 % de commission agence sur vos réservations directes</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={15} className="text-accent-soft shrink-0 mt-0.5" />
                <span>Connexion PMS incluse (Amenitiz, Cloudbeds, SiteMinder, Mews…)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={15} className="text-accent-soft shrink-0 mt-0.5" />
                <span>Livraison en 4 à 6 semaines & 100 % propriété du code/domaine</span>
              </li>
            </ul>
          </div>

          <div className="max-w-3xl mx-auto mb-10 text-left">
            <Callout variant="dark">
              <strong>Distinction utile :</strong> Cette page détaille nos <strong>forfaits, livrables et critères de coût total sur 3 ans</strong> pour les petits hôtels et riads. Si vous souhaitez comparer les critères techniques pour choisir votre agence web hôtelière au Maroc, consultez aussi notre guide{" "}
              <Link to="/site-web-hotel" className="underline text-accent-soft hover:text-white font-semibold">
                prestataire de site web hôtelier avec moteur de réservation intégré
              </Link>.
            </Callout>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              Demander un devis détaillé <ArrowRight size={18} />
            </Link>
            <Link
              to="/tarifs"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-4 rounded-xl font-semibold transition-all inline-flex items-center gap-2"
            >
              Voir toute la grille tarifaire
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Package Comparison Table */}
      <section className="py-20 px-6 bg-white border-b border-primary/10 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
              Comparatif Coût Total de Possession (TCO)
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">
              Quel Forfait Choisir pour un Petit Hôtel ou Riad au Maroc ?
            </h2>
            <p className="text-sm md:text-base text-primary/75 font-light leading-relaxed">
              Un site hôtelier « pas cher » à la création mais lent sur mobile ou verrouillé dans un abonnement propriétaire coûte souvent plus cher sur 3 ans qu'un site rapide vous appartenant intégralement.
            </p>
          </div>

          <p className="md:hidden text-xs text-primary/60 mb-2 font-medium">
            ← Faites glisser horizontalement pour comparer toutes les colonnes →
          </p>
          <div className="overflow-x-auto rounded-2xl border border-primary/10 bg-bg shadow-xs">
            <table className="w-full text-left border-collapse tabular-nums min-w-[720px]">
              <thead>
                <tr className="bg-primary text-white text-xs uppercase tracking-wider">
                  <th className="py-4 px-5 font-semibold border-b border-white/10">Formule / Modèle</th>
                  <th className="py-4 px-5 font-semibold border-b border-white/10">Profil d'Établissement</th>
                  <th className="py-4 px-5 font-semibold border-b border-white/10">Budget & Modèle Économique</th>
                  <th className="py-4 px-5 font-semibold border-b border-white/10">Propriété de l'Actif</th>
                  <th className="py-4 px-5 font-semibold border-b border-white/10">Rapport Qualité-Prix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/10 text-sm">
                {packageRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-bg-alt/40"}>
                    <td className="py-4 px-5 align-top font-semibold text-primary">{row.name}</td>
                    <td className="py-4 px-5 align-top text-primary/80 font-light">{row.fit}</td>
                    <td className="py-4 px-5 align-top text-primary/85 font-medium">{row.cost}</td>
                    <td className="py-4 px-5 align-top text-primary/80 font-light">{row.ownership}</td>
                    <td className="py-4 px-5 align-top text-primary/80 font-light">{row.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-primary/65 font-light leading-relaxed">
            Note : les frais mensuels de votre logiciel PMS / Channel Manager tiers et les frais de transaction monétique (CMI, Payzone ou Stripe) sont facturés directement par ces opérateurs selon votre nombre de chambres.
          </p>
        </div>
      </section>

      {/* Evaluation Criteria: What Makes True Value-for-Money */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
              Critères d'Achat Objectifs
            </span>
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">
              Les 4 Critères qui Déterminent la Rentabilité d'un Forfait Web Hôtelier
            </h2>
            <p className="text-primary/80 mb-5 leading-relaxed font-light">
              Pour un petit hôtel de 6 à 20 chambres au Maroc, économiser seulement quelques réservations mensuelles habituellement soumises à 15 %–25 % de commission Booking.com suffit à amortir un forfait fixe de 12 000 MAD.
            </p>
            <p className="text-primary/80 leading-relaxed font-light">
              Encore faut-il que le forfait inclue dès le départ les briques techniques qui transforment réellement un visiteur mobile international en client direct :
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-primary/10 shadow-xs">
            <h3 className="text-xl font-serif font-bold mb-5 text-primary">Ce qui doit impérativement figurer au devis :</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 text-primary/85">
                <Check size={20} className="text-accent shrink-0 mt-0.5" />
                <span><strong>Barre de réservation mobile fixe :</strong> accès immédiat aux dates et tarifs réels sans zoom ni rechargement lent.</span>
              </li>
              <li className="flex gap-3 text-primary/85">
                <Check size={20} className="text-accent shrink-0 mt-0.5" />
                <span><strong>Synchronisation PMS & WhatsApp :</strong> tunnel instantané pour les voyageurs décidés + contact WhatsApp rapide pour les demandes de transfert ou privatisation.</span>
              </li>
              <li className="flex gap-3 text-primary/85">
                <Check size={20} className="text-accent shrink-0 mt-0.5" />
                <span><strong>Architecture SEO bilingue (FR/EN) :</strong> URLs dédiées, balises hreflang et Schema.org Hotel pour capter l'Europe et l'international.</span>
              </li>
              <li className="flex gap-3 text-primary/85">
                <Check size={20} className="text-accent shrink-0 mt-0.5" />
                <span><strong>Propriété complète sans commission :</strong> aucun pourcentage prélevé par l'agence web sur votre chiffre d'affaires direct.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Performance & Architecture Deep-Dive */}
      <section className="py-20 px-6 bg-white border-y border-primary/10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider font-mono">Spécifications Techniques</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2">Architecture Web Hôtelière & Core Web Vitals</h2>
            <p className="text-primary/70 font-light text-sm mt-3 leading-relaxed">
              La lenteur mobile est la première cause d'abandon vers les OTA. Chaque forfait Urunk est optimisé selon les seuils Core Web Vitals de Google.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 tabular-nums">
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center space-y-2">
              <div className="text-3xl font-bold text-accent font-serif">&lt; 1,5s</div>
              <h3 className="font-bold text-primary text-sm">LCP Cible Mobile</h3>
              <p className="text-xs font-light text-primary/70">Affichage rapide des visuels de chambres en AVIF/WebP sans dégrader la netteté.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center space-y-2">
              <div className="text-3xl font-bold text-accent font-serif">&lt; 0,05</div>
              <h3 className="font-bold text-primary text-sm">CLS (Stabilité Visuelle)</h3>
              <p className="text-xs font-light text-primary/70">Aucun saut de mise en page lors de l'ouverture du calendrier de disponibilité.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center space-y-2">
              <div className="text-3xl font-bold text-accent font-serif">&lt; 100ms</div>
              <h3 className="font-bold text-primary text-sm">INP (Réactivité Tactile)</h3>
              <p className="text-xs font-light text-primary/70">Sélection fluide des dates, chambres et options sur smartphone.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center space-y-2">
              <div className="text-3xl font-bold text-accent font-serif">90+</div>
              <h3 className="font-bold text-primary text-sm">Objectif PageSpeed</h3>
              <p className="text-xs font-light text-primary/70">Code léger pensé pour les réseaux 4G/5G utilisés par les voyageurs en mobilité.</p>
            </div>
          </div>

          {/* Workflow Integration PMS */}
          <div className="grid lg:grid-cols-12 gap-12 items-center pt-4">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-accent font-semibold text-xs uppercase tracking-wider font-mono">Connexion PMS Incluse</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary">Intégration Moteur de Réservation & Paiement</h3>
              <p className="text-primary/80 font-light text-sm leading-relaxed">
                Conservez vos outils de réception habituels. Nous raccordons votre site hôtelier à votre PMS et Channel Manager existant, ou vous aidons à sélectionner la solution adaptée à votre capacité.
              </p>
              <ul className="space-y-3 text-xs text-primary/80 font-light">
                <li className="flex items-center gap-3"><Check size={16} className="text-accent shrink-0" /> <strong>Amenitiz, Cloudbeds, SiteMinder, Little Hotelier, Mews, Sirvoy & Guesty</strong>.</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-accent shrink-0" /> Synchronisation temps réel des disponibilités, restrictions de séjour et codes promo directs.</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-accent shrink-0" /> Passerelles monétiques sécurisées (CMI / Payzone au Maroc ou Stripe selon éligibilité).</li>
              </ul>
            </div>
            <div className="lg:col-span-6 bg-primary text-white p-8 md:p-10 rounded-3xl space-y-6">
              <h3 className="text-xl font-serif font-bold text-accent-soft">Engagements Contractuels Clairs</h3>
              <ul className="space-y-3 text-xs text-white/90 font-light">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Forfait Fixe :</strong> Dès 12 000 MAD (≈ 1 100 €) payable en deux échéances claires (50 % commande, 50 % mise en ligne).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Délai Maîtrisé :</strong> 4 à 6 semaines du cadrage initial au déploiement en production.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Support Post-Mise en Ligne :</strong> Formation de votre équipe réception et suivi technique correctif après lancement.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Propriété à 100 % :</strong> Code source, nom de domaine, hébergement et compte GA4 à votre nom.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Pricing */}
      <section className="py-20 px-6 bg-bg-alt border-b border-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-xs uppercase tracking-wider font-mono">Calendrier & Budget</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-1">Déploiement en 4 à 6 Semaines</h2>
            <p className="text-primary/70 font-light text-sm mt-3 leading-relaxed">
              Un processus structuré en trois jalons pour livrer votre site hôtelier à temps et sans dépassement budgétaire.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-10">
              <div className="relative pl-8 border-l border-primary/10 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-accent border-4 border-bg-alt flex items-center justify-center"></div>
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">Semaines 1–2 : Cadrage, Arborescence & Mix PMS</h3>
                  <p className="text-sm text-primary/80 font-light leading-relaxed">
                    Étude de votre positionnement tarifaire, de vos marchés émetteurs et structuration des pages chambres, expériences et localisation pour réduire les frictions vers le moteur direct.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-accent border-4 border-bg-alt flex items-center justify-center"></div>
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">Semaines 3–4 : Design UI/UX Mobile & Contenus Bilingues</h3>
                  <p className="text-sm text-primary/80 font-light leading-relaxed">
                    Création d'une interface fidèle à l'atmosphère de votre hôtel ou riad et rédaction optimisée en français et anglais pour répondre aux intentions de recherche Google.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-accent border-4 border-bg-alt flex items-center justify-center"></div>
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">Semaines 5–6 : Intégration PMS, GA4 & Mise en Ligne</h3>
                  <p className="text-sm text-primary/80 font-light leading-relaxed">
                    Connexion du moteur de réservation, vérification des redirections SEO, paramétrage Google Analytics 4 / Tag Manager et formation de votre équipe.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-10 rounded-3xl border border-primary/10 shadow-sm space-y-6 lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider border border-accent/15">
                Forfait Essentiel Petit Hôtel & Riad
              </span>
              <h3 className="text-3xl font-serif font-bold text-primary">Un Budget Fixe Sans Abonnement Captif</h3>
              <p className="text-sm text-primary/80 font-light leading-relaxed">
                Idéal pour les petits hôtels indépendants, riads et maisons d'hôtes souhaitant un actif durable et rapide sans commission agence.
              </p>
              <div className="py-4 border-y border-primary/5 tabular-nums">
                <div className="text-3xl font-serif font-bold text-accent">À partir de 12 000 MAD</div>
                <p className="text-xs text-primary/60 mt-1">50 % à la commande · 50 % à la livraison finale · 0 % commission.</p>
              </div>
              <ul className="space-y-2.5 text-xs text-primary/75 font-light">
                <li className="flex items-center gap-2.5"><Check size={14} className="text-accent" /> Architecture SEO bilingue (FR/EN) & Schema.org Hotel</li>
                <li className="flex items-center gap-2.5"><Check size={14} className="text-accent" /> Intégration de votre moteur PMS / Channel Manager</li>
                <li className="flex items-center gap-2.5"><Check size={14} className="text-accent" /> Optimisation Core Web Vitals & images AVIF/WebP</li>
                <li className="flex items-center gap-2.5"><Check size={14} className="text-accent" /> Suivi des conversions Google Analytics 4 & GTM</li>
              </ul>
              <Link
                to="/contact"
                className="w-full bg-primary hover:bg-primary-light text-white py-3.5 rounded-xl font-bold transition-all text-center block text-sm"
              >
                Recevoir un chiffrage personnalisé
              </Link>
              <p className="text-[11px] text-primary/60 text-center m-0">
                Besoin du site + gestion Ads immédiate ? Voir le{" "}
                <Link to="/services/bundle-site-ads" className="text-accent underline font-medium">
                  Pack Site + Publicité dès 16 000 MAD
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual Hospitality Links */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
            Ressources Complémentaires
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
            Comparer les Solutions Techniques & le Retour sur Investissement
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link to="/site-web-hotel" className="p-6 rounded-2xl border border-primary/10 bg-white hover:border-accent/40 transition-all">
            <h3 className="font-serif font-bold text-base text-primary mb-2">Choisir son Prestataire Web Hôtelier →</h3>
            <p className="text-xs text-primary/70 font-light m-0">Grille d'évaluation technique pour sélectionner votre agence au Maroc.</p>
          </Link>
          <Link to="/reservation-directe" className="p-6 rounded-2xl border border-primary/10 bg-white hover:border-accent/40 transition-all">
            <h3 className="font-serif font-bold text-base text-primary mb-2">Systèmes de Réservation Sans OTA →</h3>
            <p className="text-xs text-primary/70 font-light m-0">Comparatif PMS, Channel Manager et passerelles CMI / Payzone / Stripe.</p>
          </Link>
          <Link to="/blog/cout-site-web-reservation-directe-maroc" className="p-6 rounded-2xl border border-primary/10 bg-white hover:border-accent/40 transition-all">
            <h3 className="font-serif font-bold text-base text-primary mb-2">Guide : Coût Réel d'un Site Direct →</h3>
            <p className="text-xs text-primary/70 font-light m-0">Calcul du seuil de rentabilité face aux commissions Booking.com.</p>
          </Link>
          <Link to="/realisations/art-house-marrakech" className="p-6 rounded-2xl border border-primary/10 bg-white hover:border-accent/40 transition-all">
            <h3 className="font-serif font-bold text-base text-primary mb-2">Étude de Cas Marrakech →</h3>
            <p className="text-xs text-primary/70 font-light m-0">Exemple concret d'architecture mobile-first orientée conversion directe.</p>
          </Link>
        </div>
      </section>

      <RelatedExpertiseSection
        kicker="Ingénierie Web par Ville"
        title="Création de Sites Web & Réservation Directe par Ville au Maroc"
        subtitle="Consultez nos feuilles de route dédiées à Marrakech, Casablanca, Agadir et Rabat pour les hôtels, riads et entreprises."
        links={getMatrixLinksForService("hotel-website-design", "fr")}
        isFrench={true}
        bgVariant="white"
      />

      {/* FAQ */}
      <section className="py-20 px-6 bg-bg-alt border-t border-primary/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-10 text-center">
            Questions Fréquentes sur les Forfaits de Site Web Hôtelier
          </h2>
          <div className="flex flex-col border-t border-primary/20">
            {faqs.map((faq, i) => (
              <details key={i} open={i === 0} className="group border-b border-primary/20">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 pr-4 text-lg">
                  <span>{faq.q}</span>
                  <span className="transition group-open:rotate-180 text-accent shrink-0 ml-3">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="text-primary/75 pb-6 pr-4 leading-relaxed text-sm md:text-base">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Prêt à rentabiliser votre site officiel sans commission agence ?
        </h2>
        <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto font-light">
          Partagez le nombre de chambres et le PMS actuel de votre établissement : nous vous adressons une recommandation forfaitaire claire sous 24h ouvrées.
        </p>
        <Link
          to="/contact"
          className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 transition-colors"
        >
          Demander mon devis forfaitaire <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
