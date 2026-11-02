import React from 'react';
import Callout from '../../../components/fr/CalloutFR';
import SEO from '../../../components/SEO';
import { buildServiceProviderSchema } from '../../../components/SEO/StructuredData';
import Button from '../../../components/ui/Button';
import Section from '../../../components/ui/Section';
import Hairline from '../../../components/ui/Hairline';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      { "@type": "Country", name: "Morocco" },
      { "@type": "Country", name: "Worldwide" },
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

      {/* Editorial Hero */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-4xl">
          <p className="text-sm text-bg-light/75 mb-4">Offre de croissance</p>
          <h1 className="font-serif text-bg-light mb-6 text-balance">
            Pack site web + publicité pour hôtels
          </h1>
          <p className="text-lg md:text-xl text-bg-light/85 mb-10 max-w-[65ch] leading-relaxed">
            Le moteur complet de réservation directe. Un site web moderne optimisé pour la conversion associé à des publicités ciblées pour attirer immédiatement des clients.
          </p>
          <div className="max-w-3xl mb-10">
            <Callout variant="dark">
              <strong className="text-bg-light font-semibold">La stratégie unifiée :</strong> Créer un site web sans trafic ne génère aucune réservation. De même, envoyer de la publicité vers un site obsolète gaspille votre budget. Le Pack Urunk réunit la création web et la gestion publicitaire pour créer une machine à réservation directe clé en main.
            </Callout>
          </div>
          <Button href="/contact" variant="primary">
            Discuter de votre projet avec un expert
          </Button>
        </div>
      </Section>

      {/* Problem Section */}
      <Section tone="alt">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-primary mb-6 text-balance">
              Pourquoi faire appel à deux agences quand vous pouvez tout aligner ?
            </h2>
            <div className="space-y-4 text-primary/85 leading-relaxed max-w-[65ch]">
              <p>
                De nombreux hôtels font l'erreur d'engager un développeur web qui ne comprend pas le marketing, puis une agence de publicité qui blâme le site web pour le manque de conversions.
              </p>
              <p>
                Avec le Pack Urunk, vous bénéficiez d'un partenaire unique responsable de la chaîne complète d'acquisition : de la première impression publicitaire sur l'écran du voyageur jusqu'au clic final sur votre moteur de réservation.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 border border-border-subtle bg-bg-card p-8 rounded-sm">
            <h3 className="font-serif text-primary pb-4 mb-6 border-b border-border-subtle">
              Pourquoi le pack est gagnant :
            </h3>
            <div className="divide-y divide-border-subtle text-sm text-primary/85">
              <p className="py-3.5 pt-0 m-0">Interlocuteur et responsable unique</p>
              <p className="py-3.5 m-0">Retour sur investissement dès le lancement du site</p>
              <p className="py-3.5 m-0">Intégration impeccable du suivi des conversions</p>
              <p className="py-3.5 pb-0 m-0">
                Message cohérent de l'annonce publicitaire jusqu'au moteur de réservation
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Ce qui est inclus */}
      <Section tone="light">
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-primary text-balance">
            Que comprend le pack complet ?
          </h2>
        </div>

        <div>
          <Hairline />
          <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">01</div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-primary m-0">Nouveau Site Web Sur-Mesure</h3>
            </div>
            <div className="md:col-span-7">
              <ul className="space-y-2.5 text-primary/85">
                <li>Design WordPress sur-mesure et adapté aux mobiles</li>
                <li>Intégration du moteur de réservation directe / WhatsApp</li>
                <li>Chargement ultra-rapide et bases SEO techniques</li>
                <li>Back-office simple et autonome pour modifier vos textes/photos</li>
              </ul>
            </div>
          </div>
          <Hairline />
          <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">02</div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-primary m-0">Gestion Publicitaire (1 au choix)</h3>
            </div>
            <div className="md:col-span-7">
              <ul className="space-y-2.5 text-primary/85">
                <li>Configuration des annonces Google Ads OU TripAdvisor Ads</li>
                <li>Recherche approfondie de mots-clés et de la concurrence</li>
                <li>Optimisation mensuelle continue</li>
                <li>Rapports de performance transparents</li>
              </ul>
            </div>
          </div>
          <Hairline />
        </div>
      </Section>

      {/* Process & Pricing */}
      <Section tone="alt">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-primary mb-8">Le Processus de Lancement</h2>
            <div>
              <Hairline />
              <div className="py-6 flex gap-6 items-baseline">
                <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">1</span>
                <div>
                  <h3 className="font-serif text-primary mb-2">Double Stratégie</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    Nous concevons en parallèle l'arborescence de votre site et l'architecture de vos campagnes publicitaires.
                  </p>
                </div>
              </div>
              <Hairline />
              <div className="py-6 flex gap-6 items-baseline">
                <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">2</span>
                <div>
                  <h3 className="font-serif text-primary mb-2">Phase de Développement</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    Pendant que les développeurs créent le site, nos spécialistes paramètrent les outils de suivi et rédigent les annonces.
                  </p>
                </div>
              </div>
              <Hairline />
              <div className="py-6 flex gap-6 items-baseline">
                <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">3</span>
                <div>
                  <h3 className="font-serif text-primary mb-2">Lancement Simultané</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    Dès que le site est validé, nous activons le trafic publicitaire pour générer des réservations immédiates.
                  </p>
                </div>
              </div>
              <Hairline />
            </div>
          </div>

          <div className="lg:col-span-5 bg-primary text-bg-light p-8 md:p-10 rounded-sm space-y-5">
            <p className="text-sm text-bg-light/75 m-0">
              Tarif affiché du pack, disponibilité limitée
            </p>
            <h3 className="font-serif text-3xl text-bg-light tabular-nums m-0">
              Dès 16 000 MAD + 4 000 MAD/mois
            </h3>
            <p className="text-bg-light/85 leading-relaxed m-0">
              Création complète du site hôtelier (16 000 MAD initial) + gestion mensuelle d'un canal Ads (4 000 MAD/mois, hors budget média payé à la régie).
            </p>
            <p className="text-sm text-bg-light/90 pt-4 border-t border-white/15 m-0">
              100 % propriété du site et préavis simple de 15 jours sur le suivi publicitaire.
            </p>
            <Button href="/contact" variant="primary" className="w-full">
              Vérifier la disponibilité
            </Button>
          </div>
        </div>
      </Section>

      {/* Case Study Proof */}
      <Section tone="light">
        <div className="max-w-3xl">
          <h2 className="font-serif text-primary mb-4">Découvrez le modèle stratégique</h2>
          <p className="text-primary/85 leading-relaxed mb-6 max-w-[65ch]">
            Nous avons conçu un plan complet Web + Publicités d'exemple pour les concepts de traiteur et de gastronomie d'entreprise, illustrant des structures d'acquisition performantes.
          </p>
          <p className="m-0">
            <Link to="/realisations/nomad-eats-traiteur">
              Plan Web + Publicités pour traiteur et gastronomie d'entreprise
            </Link>
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="alt">
        <div className="max-w-3xl">
          <p className="text-sm text-accent font-medium mb-2">FAQ</p>
          <h2 className="font-serif text-primary mb-10">Foire aux questions</h2>
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
            Prenez le contrôle de vos réservations.
          </h2>
          <p className="text-lg text-bg-light/85 mb-8">
            Une seule agence. Une stratégie cohérente. Des résultats concrets.
          </p>
          <Button href="/contact" variant="primary">
            Obtenir mon devis gratuit
          </Button>
        </div>
      </Section>
    </div>
  );
}
