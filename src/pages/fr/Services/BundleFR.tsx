import React from "react";
import Callout from "../../../components/fr/CalloutFR";
import SEO from "../../../components/SEO";
import { buildServiceProviderSchema } from "../../../components/SEO/StructuredData";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function BundleFR() {
  const faqs = [
    {
      q: "Combien de temps prend le déploiement du pack Site Web + Publicité ?",
      a: "Le déploiement complet prend 4 à 6 semaines : pendant que nos ingénieurs développent votre site hôtelier bilingue et raccordent votre moteur PMS, notre pôle SEA/Social prépare vos campagnes et le suivi GA4/GTM pour activer le trafic dès la mise en ligne.",
    },
    {
      q: "Quel canal publicitaire est inclus dans le forfait à 16 000 MAD + 4 000 MAD/mois ?",
      a: "La formule réunit la création complète du site hôtelier, l'architecture des pages d'atterrissage publicitaires, le suivi GA4/GTM inter-domaines et le pilotage mensuel d'un levier publicitaire prioritaire au choix (Google Ads, Meta Ads ou TripAdvisor Ads), hors budget média payé directement à la régie.",
    },
    {
      q: "Pourquoi regrouper création du site et campagnes publicitaires sous une même équipe ?",
      a: "En alignant conception du site, connexion PMS, Google Tag Manager et campagnes publicitaires sous un interlocuteur unique, vous éliminez les pertes d'attribution entre prestataires et activez un trafic qualifié dès le jour de la mise en ligne.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://urunk.com/services/bundle-site-ads#service",
    name: "Pack Site Web Hôtelier + Publicité au Maroc",
    serviceType: "Forfait Site Web et Acquisition Publicitaire pour Hôtels",
    description:
      "Formule combinée pour hôtels et riads au Maroc : création de site web avec moteur de réservation + gestion publicitaire dès 16 000 MAD initial + 4 000 MAD/mois.",
    provider: buildServiceProviderSchema(),
    areaServed: [
      { "@type": "Country", "name": "Morocco" },
      { "@type": "Country", "name": "Worldwide" },
    ],
    url: "https://urunk.com/services/bundle-site-ads",
    offers: {
      "@type": "Offer",
      price: "16000",
      priceCurrency: "MAD",
      url: "https://urunk.com/services/bundle-site-ads",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div className="w-full">
      <SEO
        title="Pack Site Web + Publicité Hôtel Maroc | Urunk"
        description="Offre combinée site web hôtelier + gestion publicitaire (Google, Meta ou TripAdvisor) dès 16 000 MAD initial + 4 000 MAD/mois pour réservations directes."
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent-soft text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            Offre de Croissance
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Pack site web + publicité pour hôtels
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light">
            Le moteur complet de réservation directe. Un site web moderne
            optimisé pour la conversion associé à des publicités ciblées pour
            attirer immédiatement des clients.
          </p>
          <div className="max-w-3xl mx-auto mb-10 text-left">
            <Callout variant="dark">
              <strong>La stratégie unifiée :</strong> Créer un site web sans
              trafic ne génère aucune réservation. De même, envoyer de la
              publicité vers un site obsolète gaspille votre budget. Le Pack Urunk
              réunit la création web et la gestion publicitaire pour créer une
              machine à réservation directe clé en main.
            </Callout>
          </div>
          <Link
            to="/contact"
            className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
          >
            Discuter de votre projet avec un expert <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Pourquoi faire appel à deux agences quand vous pouvez tout aligner
              ?
            </h2>
            <p className="text-primary/80 mb-6 leading-relaxed">
              De nombreux hôtels font l'erreur d'engager un développeur web qui
              ne comprend pas le marketing, puis une agence de publicité qui
              blâme le site web pour le manque de conversions.
            </p>
            <p className="text-primary/80 leading-relaxed">
              Avec le Pack Urunk, vous bénéficiez d'un partenaire unique
              responsable de la chaîne complète d'acquisition : de la première
              impression publicitaire sur l'écran du voyageur jusqu'au clic
              final sur votre moteur de réservation.
            </p>
          </div>
          <div className="bg-bg-alt p-8 rounded-2xl border border-primary/10">
            <h3 className="text-xl font-bold mb-4">
              Pourquoi le pack est gagnant :
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-primary/80">
                <Check size={20} className="text-accent shrink-0" />{" "}
                Interlocuteur et responsable unique
              </li>
              <li className="flex gap-3 text-primary/80">
                <Check size={20} className="text-accent shrink-0" /> Retour sur
                investissement dès le lancement du site
              </li>
              <li className="flex gap-3 text-primary/80">
                <Check size={20} className="text-accent shrink-0" /> Intégration
                impeccable du suivi des conversions
              </li>
              <li className="flex gap-3 text-primary/80">
                <Check size={20} className="text-accent shrink-0" /> Message
                cohérent de l'annonce publicitaire jusqu'au moteur de
                réservation
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="bg-primary/5 py-20 px-6 border-y border-primary/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Que comprend le pack complet ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-primary/10">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <Check size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                1. Nouveau Site Web Sur-Mesure
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-primary/80 text-sm">
                  <span className="text-accent">→</span> Design WordPress
                  sur-mesure et adapté aux mobiles
                </li>
                <li className="flex gap-3 text-primary/80 text-sm">
                  <span className="text-accent">→</span> Intégration du moteur
                  de réservation directe / WhatsApp
                </li>
                <li className="flex gap-3 text-primary/80 text-sm">
                  <span className="text-accent">→</span> Chargement ultra-rapide
                  et bases SEO techniques
                </li>
                <li className="flex gap-3 text-primary/80 text-sm">
                  <span className="text-accent">→</span> Back-office simple et
                  autonome pour modifier vos textes/photos
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-primary/10">
              <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <Check size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                2. Gestion Publicitaire (1 au choix)
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-primary/80 text-sm">
                  <span className="text-accent">→</span> Configuration des
                  annonces Google Ads OU TripAdvisor Ads
                </li>
                <li className="flex gap-3 text-primary/80 text-sm">
                  <span className="text-accent">→</span> Recherche approfondie
                  de mots-clés et de la concurrence
                </li>
                <li className="flex gap-3 text-primary/80 text-sm">
                  <span className="text-accent">→</span> Optimisation mensuelle
                  continue
                </li>
                <li className="flex gap-3 text-primary/80 text-sm">
                  <span className="text-accent">→</span> Rapports de performance
                  transparents
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Pricing */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Le Processus de Lancement
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-1">Double Stratégie</h3>
                  <p className="text-sm text-primary/80">
                    Nous concevons en parallèle l'arborescence de votre site et
                    l'architecture de vos campagnes publicitaires.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phase de Développement</h3>
                  <p className="text-sm text-primary/80">
                    Pendant que les développeurs créent le site, nos
                    spécialistes paramètrent les outils de suivi et rédigent les
                    annonces.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-1">Lancement Simultané</h3>
                  <p className="text-sm text-primary/80">
                    Dès que le site est validé, nous activons le trafic
                    publicitaire pour générer des réservations immédiates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-10 rounded-2xl shadow-md flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
              DISPONIBILITÉ LIMITÉE
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-accent-soft text-sm font-medium mb-6">
              Tarif Affiché du Pack
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 tabular-nums">Dès 16 000 MAD + 4 000 MAD/mois</h3>
            <p className="text-white/80 text-sm mb-6">
              Création complète du site hôtelier (16 000 MAD initial) + gestion mensuelle d'un canal Ads (4 000 MAD/mois, hors budget média payé à la régie).
            </p>
            <div className="bg-white/10 p-4 rounded-xl mb-8 w-full">
              <p className="text-sm text-white/90 font-medium">
                100 % propriété du site &amp; préavis simple de 15 jours sur le suivi publicitaire.
              </p>
            </div>
            <Link
              to="/contact"
              className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-xl font-bold transition-all shadow-md"
            >
              Vérifier la disponibilité
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Proof */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Découvrez le modèle stratégique</h2>
        <p className="text-primary/80 mb-8 max-w-2xl mx-auto">
          Nous avons conçu un plan complet Web + Publicités d'exemple pour les concepts de traiteur et de gastronomie d'entreprise, illustrant des structures d'acquisition performantes.
        </p>
        <Link
          to="/realisations/nomad-eats-traiteur"
          className="text-accent hover:text-accent-hover font-medium flex items-center justify-center gap-2 transition-colors"
        >
          Explorer le modèle de stratégie <ArrowRight size={18} />
        </Link>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-bg-alt border-t border-primary/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Foire aux questions
          </h2>
          <div className="flex flex-col border-t border-primary/20">
            {faqs.map((faq, i) => (
              <details key={i} className="group border-b border-primary/20">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 pr-4 text-lg">
                  <span>{faq.q}</span>
                  <span className="transition group-open:rotate-180 text-accent">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="text-primary/70 pb-6 pr-4 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Prenez le contrôle de vos réservations.
        </h2>
        <p className="text-xl text-primary/80 mb-8">
          Une seule agence. Une stratégie cohérente. Des résultats concrets.
        </p>
        <Link
          to="/contact"
          className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 transition-colors"
        >
          Obtenir mon devis gratuit <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
