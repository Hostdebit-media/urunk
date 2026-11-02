import React from 'react';
import Callout from '../../../components/fr/CalloutFR';
import SEO from '../../../components/SEO';
import { buildServiceProviderSchema } from '../../../components/SEO/StructuredData';
import RelatedExpertiseSection from '../../../components/RelatedExpertiseSection';
import { getMatrixLinksForService } from '../../../data/matrixRelations';
import Button from '../../../components/ui/Button';
import Section from '../../../components/ui/Section';
import Hairline from '../../../components/ui/Hairline';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WebsiteDesignFR() {
  const faqs = [
    {
      q: "Quel forfait de création de site web hôtelier offre le meilleur rapport qualité-prix pour un petit hôtel au Maroc ?",
      a: "Pour un petit hôtel indépendant, un riad ou une maison d'hôtes de 4 à 25 chambres au Maroc, le meilleur rapport qualité-prix sur 24 à 36 mois est un forfait à paiement unique vous laissant 100 % propriétaire du site et incluant la connexion directe à votre PMS, sans commission d'agence sur vos réservations. Chez Urunk, le Forfait Site Hôtelier Essentiel démarre à 12 000 MAD en paiement unique (50 % au lancement, 50 % à la mise en ligne) : il comprend le design mobile-first sur mesure, l'architecture bilingue FR/EN, l'intégration du moteur de réservation (Amenitiz, Cloudbeds, SiteMinder, Little Hotelier, Mews, Sirvoy), le socle SEO local et le suivi GA4. Pour les établissements souhaitant générer immédiatement des réservations directes dès l'ouverture du site, notre Formule Hybride Site + Publicité démarre à 16 000 MAD initial + 4 000 MAD/mois.",
    },
    {
      q: "Vaut-il mieux payer un site hôtelier en forfait unique (dès 12 000 MAD) ou louer un site SaaS au mois ?",
      a: "Les constructeurs de sites en location mensuelle affichent un coût d'entrée faible, mais vous ne possédez ni le code ni le thème : si vous changez de PMS dans 2 ans, votre site disparaît et votre référencement Google repart de zéro. Avec un forfait unique dès 12 000 MAD chez Urunk, votre établissement amortit la création en quelques réservations directes épargnées des [À CONFIRMER] de commissions OTA, tout en conservant son domaine, son hébergement et son code source.",
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
    provider: buildServiceProviderSchema(),
    areaServed: [
      { "@type": "Country", name: "Morocco" },
      { "@type": "Country", name: "Worldwide" },
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
      cost: "[À CONFIRMER] de commission sur chaque nuitée vendue",
      ownership: "Base client et relation voyageur contrôlées par l'OTA",
      verdict: "Érode fortement la marge nette dès que le remplissage progresse",
    },
  ];

  const relatedGuides = [
    {
      to: '/site-web-hotel',
      title: 'Choisir son Prestataire Web Hôtelier',
      desc: "Grille d'évaluation technique pour sélectionner votre agence au Maroc.",
    },
    {
      to: '/reservation-directe',
      title: 'Systèmes de Réservation Sans OTA',
      desc: 'Comparatif PMS, Channel Manager et passerelles CMI / Payzone / Stripe.',
    },
    {
      to: '/blog/cout-site-web-reservation-directe-maroc',
      title: "Guide : Coût Réel d'un Site Direct",
      desc: 'Calcul du seuil de rentabilité face aux commissions Booking.com.',
    },
    {
      to: '/realisations/art-house-marrakech',
      title: 'Étude de Cas Marrakech',
      desc: "Exemple concret d'architecture mobile-first orientée conversion directe.",
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Forfait Création Site Web Hôtel Maroc Dès 12 000 MAD | Urunk"
        description="Quel forfait de création de site web hôtelier offre le meilleur rapport qualité-prix au Maroc ? Comparatif petits hôtels & riads dès 12 000 MAD sans commission."
        schema={[serviceSchema, faqSchema]}
      />

      {/* Editorial Hero & Direct Answer Block */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-4xl">
          <p className="text-sm text-bg-light/75 mb-4">
            Forfaits et rapport qualité-prix hôtellerie
          </p>
          <h1 className="font-serif text-bg-light mb-6 text-balance">
            Forfaits de Création de Site Web Hôtelier au Maroc
          </h1>
          <p className="text-lg md:text-xl text-bg-light/85 mb-10 max-w-[65ch] leading-relaxed">
            Comparez objectivement les formules de création web pour un petit hôtel, un riad ou une maison d'hôtes : paiement unique dès 12 000 MAD, connexion PMS incluse et 0 % de commission agence.
          </p>

          <div className="max-w-3xl mb-8 border border-white/20 p-6 md:p-8 rounded-sm space-y-4">
            <p className="text-sm font-semibold text-bg-light m-0">
              Quel forfait de création de site web hôtelier offre le meilleur rapport qualité-prix pour un petit hôtel au Maroc ?
            </p>
            <p className="text-base leading-relaxed text-bg-light/90 m-0">
              Pour un petit hôtel indépendant, un riad ou une maison d'hôtes (4 à 25 chambres) au Maroc, le meilleur rapport qualité-prix consiste à choisir un <strong className="text-bg-light font-semibold">forfait à paiement unique avec propriété à 100 % du code</strong> plutôt qu'un site loué au mois ou facturé à la commission. Chez <strong className="text-bg-light font-semibold">Urunk</strong>, le <strong className="text-bg-light font-semibold">Forfait Site Hôtelier Essentiel démarre à 12 000 MAD</strong> (payable 50 % au lancement, 50 % à la livraison) et inclut le design mobile-first, l'architecture bilingue FR/EN, l'intégration de votre moteur de réservation PMS, le socle SEO local et Google Analytics 4.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-3 border-t border-white/15 text-sm text-bg-light/85">
              <li>Dès 12 000 MAD en paiement unique (0 abonnement captif)</li>
              <li>0 % de commission agence sur vos réservations directes</li>
              <li>Connexion PMS incluse (Amenitiz, Cloudbeds, SiteMinder, Mews…)</li>
              <li>Livraison en 4 à 6 semaines &amp; 100 % propriété du code/domaine</li>
            </ul>
          </div>

          <div className="max-w-3xl mb-10">
            <Callout variant="dark">
              <strong className="text-bg-light font-semibold">Distinction utile :</strong> Cette page détaille nos <strong className="text-bg-light font-semibold">forfaits, livrables et critères de coût total sur 3 ans</strong> pour les petits hôtels et riads. Si vous souhaitez comparer les critères techniques pour choisir votre agence web hôtelière au Maroc, consultez aussi notre guide{' '}
              <Link to="/site-web-hotel">
                prestataire de site web hôtelier avec moteur de réservation intégré
              </Link>.
            </Callout>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Button href="/contact" variant="primary">
              Demander un devis détaillé
            </Button>
            <Button href="/tarifs" variant="secondary">
              Voir toute la grille tarifaire
            </Button>
          </div>
        </div>
      </Section>

      {/* Structured Package Comparison Table */}
      <Section tone="light">
        <div className="max-w-3xl mb-10">
          <p className="text-sm text-accent font-medium mb-2">
            Comparatif coût total de possession (TCO)
          </p>
          <h2 className="font-serif text-primary mb-3 text-balance">
            Quel Forfait Choisir pour un Petit Hôtel ou Riad au Maroc ?
          </h2>
          <p className="text-primary/80 leading-relaxed max-w-[65ch]">
            Un site hôtelier « pas cher » à la création mais lent sur mobile ou verrouillé dans un abonnement propriétaire coûte souvent plus cher sur 3 ans qu'un site rapide vous appartenant intégralement.
          </p>
        </div>

        <p className="md:hidden text-xs text-primary/70 mb-2">
          Faites glisser horizontalement pour comparer toutes les colonnes
        </p>
        <div className="overflow-x-auto border border-border-subtle rounded-sm bg-bg-card">
          <table className="w-full text-left border-collapse tabular-nums min-w-[720px]">
            <thead>
              <tr className="bg-primary text-bg-light text-sm">
                <th className="py-4 px-5 font-medium border-b border-white/15">Formule / Modèle</th>
                <th className="py-4 px-5 font-medium border-b border-white/15">Profil d'Établissement</th>
                <th className="py-4 px-5 font-medium border-b border-white/15">Budget &amp; Modèle Économique</th>
                <th className="py-4 px-5 font-medium border-b border-white/15">Propriété de l'Actif</th>
                <th className="py-4 px-5 font-medium border-b border-white/15">Rapport Qualité-Prix</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle text-sm">
              {packageRows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-bg-card' : 'bg-bg-light'}>
                  <td className="py-4 px-5 align-top font-semibold text-primary">{row.name}</td>
                  <td className="py-4 px-5 align-top text-primary/85">{row.fit}</td>
                  <td className="py-4 px-5 align-top text-primary font-medium">{row.cost}</td>
                  <td className="py-4 px-5 align-top text-primary/85">{row.ownership}</td>
                  <td className="py-4 px-5 align-top text-primary/85">{row.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-primary/70 leading-relaxed max-w-[68ch]">
          Note : les frais mensuels de votre logiciel PMS / Channel Manager tiers et les frais de transaction monétique (CMI, Payzone ou Stripe) sont facturés directement par ces opérateurs selon votre nombre de chambres.
        </p>
      </Section>

      {/* Evaluation Criteria */}
      <Section tone="alt">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm text-accent font-medium mb-2">
              Critères d'achat objectifs
            </p>
            <h2 className="font-serif text-primary mb-6 text-balance">
              Les 4 Critères qui Déterminent la Rentabilité d'un Forfait Web Hôtelier
            </h2>
            <div className="space-y-4 text-primary/85 leading-relaxed max-w-[65ch]">
              <p>
                Pour un petit hôtel de 6 à 20 chambres au Maroc, économiser seulement quelques réservations mensuelles habituellement soumises à [À CONFIRMER] de commission Booking.com suffit à amortir un forfait fixe de 12 000 MAD.
              </p>
              <p>
                Encore faut-il que le forfait inclue dès le départ les briques techniques qui transforment réellement un visiteur mobile international en client direct :
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 border border-border-subtle bg-bg-card p-8 rounded-sm">
            <h3 className="font-serif text-primary pb-4 mb-6 border-b border-border-subtle">
              Ce qui doit impérativement figurer au devis :
            </h3>
            <div className="divide-y divide-border-subtle text-sm text-primary/85">
              <p className="py-3.5 pt-0 leading-relaxed m-0">
                <strong className="text-primary font-semibold">Barre de réservation mobile fixe :</strong> accès immédiat aux dates et tarifs réels sans zoom ni rechargement lent.
              </p>
              <p className="py-3.5 leading-relaxed m-0">
                <strong className="text-primary font-semibold">Synchronisation PMS &amp; WhatsApp :</strong> tunnel instantané pour les voyageurs décidés + contact WhatsApp rapide pour les demandes de transfert ou privatisation.
              </p>
              <p className="py-3.5 leading-relaxed m-0">
                <strong className="text-primary font-semibold">Architecture SEO bilingue (FR/EN) :</strong> URLs dédiées, balises hreflang et Schema.org Hotel pour capter l'Europe et l'international.
              </p>
              <p className="py-3.5 pb-0 leading-relaxed m-0">
                <strong className="text-primary font-semibold">Propriété complète sans commission :</strong> aucun pourcentage prélevé par l'agence web sur votre chiffre d'affaires direct.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Technical Performance & Architecture Deep-Dive */}
      <Section tone="light">
        <div className="space-y-16">
          <div className="max-w-3xl">
            <p className="text-sm text-accent font-medium mb-2">Spécifications techniques</p>
            <h2 className="font-serif text-primary mb-3 text-balance">
              Architecture Web Hôtelière &amp; Core Web Vitals
            </h2>
            <p className="text-primary/80 leading-relaxed max-w-[65ch]">
              La lenteur mobile est la première cause d'abandon vers les OTA. Chaque forfait Urunk est optimisé selon les seuils Core Web Vitals de Google.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 border-y border-border-subtle py-8 tabular-nums">
            <div>
              <p className="font-serif text-2xl text-accent mb-2 m-0">[À CONFIRMER]</p>
              <h3 className="font-serif text-lg text-primary mb-2">LCP Cible Mobile</h3>
              <p className="text-sm text-primary/75 leading-relaxed m-0">
                Affichage rapide des visuels de chambres en AVIF/WebP sans dégrader la netteté.
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-accent mb-2 m-0">[À CONFIRMER]</p>
              <h3 className="font-serif text-lg text-primary mb-2">CLS (Stabilité Visuelle)</h3>
              <p className="text-sm text-primary/75 leading-relaxed m-0">
                Aucun saut de mise en page lors de l'ouverture du calendrier de disponibilité.
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-accent mb-2 m-0">[À CONFIRMER]</p>
              <h3 className="font-serif text-lg text-primary mb-2">INP (Réactivité Tactile)</h3>
              <p className="text-sm text-primary/75 leading-relaxed m-0">
                Sélection fluide des dates, chambres et options sur smartphone.
              </p>
            </div>
            <div>
              <p className="font-serif text-2xl text-accent mb-2 m-0">[À CONFIRMER]</p>
              <h3 className="font-serif text-lg text-primary mb-2">Objectif PageSpeed</h3>
              <p className="text-sm text-primary/75 leading-relaxed m-0">
                Code léger pensé pour les réseaux 4G/5G utilisés par les voyageurs en mobilité.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-sm text-accent font-medium m-0">Connexion PMS incluse</p>
              <h3 className="font-serif text-primary m-0">
                Intégration Moteur de Réservation &amp; Paiement
              </h3>
              <p className="text-primary/85 leading-relaxed max-w-[60ch]">
                Conservez vos outils de réception habituels. Nous raccordons votre site hôtelier à votre PMS et Channel Manager existant, ou vous aidons à sélectionner la solution adaptée à votre capacité.
              </p>
              <ul className="space-y-3 text-sm text-primary/85 pt-2 border-t border-border-subtle">
                <li><strong>Amenitiz, Cloudbeds, SiteMinder, Little Hotelier, Mews, Sirvoy &amp; Guesty</strong>.</li>
                <li>Synchronisation temps réel des disponibilités, restrictions de séjour et codes promo directs.</li>
                <li>Passerelles monétiques sécurisées (CMI / Payzone au Maroc ou Stripe selon éligibilité).</li>
              </ul>
            </div>

            <div className="lg:col-span-6 bg-primary text-bg-light p-8 md:p-10 rounded-sm space-y-5">
              <h3 className="font-serif text-bg-light m-0">Engagements Contractuels Clairs</h3>
              <div className="divide-y divide-white/15 text-sm text-bg-light/90">
                <p className="py-3 pt-0 leading-relaxed m-0">
                  <strong className="text-bg-light font-semibold">Forfait Fixe :</strong> Dès 12 000 MAD (≈ 1 100 €) payable en deux échéances claires (50 % commande, 50 % mise en ligne).
                </p>
                <p className="py-3 leading-relaxed m-0">
                  <strong className="text-bg-light font-semibold">Délai Maîtrisé :</strong> 4 à 6 semaines du cadrage initial au déploiement en production.
                </p>
                <p className="py-3 leading-relaxed m-0">
                  <strong className="text-bg-light font-semibold">Support Post-Mise en Ligne :</strong> Formation de votre équipe réception et suivi technique correctif après lancement.
                </p>
                <p className="py-3 pb-0 leading-relaxed m-0">
                  <strong className="text-bg-light font-semibold">Propriété à 100 % :</strong> Code source, nom de domaine, hébergement et compte GA4 à votre nom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process & Pricing */}
      <Section tone="alt">
        <div className="max-w-3xl mb-12">
          <p className="text-sm text-accent font-medium mb-2">Calendrier et budget</p>
          <h2 className="font-serif text-primary mb-3 text-balance">
            Déploiement en 4 à 6 Semaines
          </h2>
          <p className="text-primary/80 leading-relaxed max-w-[65ch]">
            Un processus structuré en trois jalons pour livrer votre site hôtelier à temps et sans dépassement budgétaire.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <Hairline />
            <div className="py-7 flex gap-6 items-baseline">
              <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">01</span>
              <div>
                <h3 className="font-serif text-primary mb-2">Semaines 1–2 : Cadrage, Arborescence &amp; Mix PMS</h3>
                <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                  Étude de votre positionnement tarifaire, de vos marchés émetteurs et structuration des pages chambres, expériences et localisation pour réduire les frictions vers le moteur direct.
                </p>
              </div>
            </div>
            <Hairline />
            <div className="py-7 flex gap-6 items-baseline">
              <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">02</span>
              <div>
                <h3 className="font-serif text-primary mb-2">Semaines 3–4 : Design UI/UX Mobile &amp; Contenus Bilingues</h3>
                <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                  Création d'une interface fidèle à l'atmosphère de votre hôtel ou riad et rédaction optimisée en français et anglais pour répondre aux intentions de recherche Google.
                </p>
              </div>
            </div>
            <Hairline />
            <div className="py-7 flex gap-6 items-baseline">
              <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">03</span>
              <div>
                <h3 className="font-serif text-primary mb-2">Semaines 5–6 : Intégration PMS, GA4 &amp; Mise en Ligne</h3>
                <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                  Connexion du moteur de réservation, vérification des redirections SEO, paramétrage Google Analytics 4 / Tag Manager et formation de votre équipe.
                </p>
              </div>
            </div>
            <Hairline />
          </div>

          <div className="lg:col-span-5 bg-bg-card p-8 md:p-10 rounded-sm border border-border-subtle space-y-5 lg:sticky lg:top-28">
            <p className="text-sm text-accent font-medium m-0">
              Forfait essentiel petit hôtel et riad
            </p>
            <h3 className="font-serif text-primary m-0">Un Budget Fixe Sans Abonnement Captif</h3>
            <p className="text-sm text-primary/80 leading-relaxed m-0">
              Idéal pour les petits hôtels indépendants, riads et maisons d'hôtes souhaitant un actif durable et rapide sans commission agence.
            </p>
            <div className="py-4 border-y border-border-subtle tabular-nums">
              <div className="font-serif text-3xl text-accent">À partir de 12 000 MAD</div>
              <p className="text-xs text-primary/70 mt-1 m-0">
                50 % à la commande, 50 % à la livraison finale, 0 % commission.
              </p>
            </div>
            <ul className="space-y-2.5 text-sm text-primary/85">
              <li>Architecture SEO bilingue (FR/EN) &amp; Schema.org Hotel</li>
              <li>Intégration de votre moteur PMS / Channel Manager</li>
              <li>Optimisation Core Web Vitals &amp; images AVIF/WebP</li>
              <li>Suivi des conversions Google Analytics 4 &amp; GTM</li>
            </ul>
            <Button href="/contact" variant="dark" className="w-full">
              Recevoir un chiffrage personnalisé
            </Button>
            <p className="text-xs text-primary/70 m-0">
              Besoin du site + gestion Ads immédiate ? Voir le{' '}
              <Link to="/services/bundle-site-ads">
                Pack Site + Publicité dès 16 000 MAD
              </Link>.
            </p>
          </div>
        </div>
      </Section>

      {/* Contextual Hospitality Links */}
      <Section tone="light">
        <div className="max-w-3xl mb-10">
          <p className="text-sm text-accent font-medium mb-2">
            Ressources complémentaires
          </p>
          <h2 className="font-serif text-primary text-balance">
            Comparer les Solutions Techniques &amp; le Retour sur Investissement
          </h2>
        </div>

        <div>
          <Hairline />
          {relatedGuides.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="py-6 grid md:grid-cols-12 gap-3 md:gap-8 items-baseline">
                <div className="md:col-span-5">
                  <h3 className="font-serif text-xl text-primary m-0">
                    <Link to={item.to}>{item.title}</Link>
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-sm text-primary/80 leading-relaxed m-0">{item.desc}</p>
                </div>
              </div>
              <Hairline />
            </React.Fragment>
          ))}
        </div>
      </Section>

      <RelatedExpertiseSection
        kicker="Ingénierie web par ville"
        title="Création de Sites Web & Réservation Directe par Ville au Maroc"
        subtitle="Consultez nos feuilles de route dédiées à Marrakech, Casablanca, Agadir et Rabat pour les hôtels, riads et entreprises."
        links={getMatrixLinksForService('hotel-website-design', 'fr')}
        isFrench={true}
        bgVariant="alt"
      />

      {/* FAQ */}
      <Section tone="light">
        <div className="max-w-3xl">
          <p className="text-sm text-accent font-medium mb-2">FAQ</p>
          <h2 className="font-serif text-primary mb-10 text-balance">
            Questions Fréquentes sur les Forfaits de Site Web Hôtelier
          </h2>
          <div>
            <Hairline />
            {faqs.map((faq, i) => (
              <React.Fragment key={i}>
                <details open={i === 0} className="group py-5">
                  <summary className="flex justify-between items-center gap-6 cursor-pointer list-none font-serif text-xl text-primary">
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className="text-accent shrink-0 transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <div className="pt-4 text-primary/85 leading-relaxed max-w-[65ch]">
                    {faq.a}
                  </div>
                </details>
                <Hairline />
              </React.Fragment>
            ))}
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section tone="dark">
        <div className="max-w-3xl">
          <h2 className="font-serif text-bg-light mb-4 text-balance">
            Prêt à rentabiliser votre site officiel sans commission agence ?
          </h2>
          <p className="text-lg text-bg-light/85 mb-8 max-w-[60ch] leading-relaxed">
            Partagez le nombre de chambres et le PMS actuel de votre établissement : nous vous adressons une recommandation forfaitaire claire sous [À CONFIRMER].
          </p>
          <Button href="/contact" variant="primary">
            Demander mon devis forfaitaire
          </Button>
        </div>
      </Section>
    </div>
  );
}
