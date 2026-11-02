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

export default function TripadvisorAdsFR() {
  const faqs = [
    {
      q: "Qu'est-ce que les emplacements sponsorisés TripAdvisor ?",
      a: "Les emplacements sponsorisés TripAdvisor sont des annonces publicitaires haut de gamme qui placent votre établissement au sommet des résultats de recherche de votre ville et sur les fiches de vos concurrents directs, captant ainsi l'attention des voyageurs prêts à réserver.",
    },
    {
      q: "Combien coûtent les publicités TripAdvisor ?",
      a: "TripAdvisor fonctionne sur un modèle au clic (CPC) ou sur un forfait mensuel flexible. Nous gérons votre budget pour garantir que vos annonces s'affichent lors des journées de fort trafic sans dépasser le plafond convenu.",
    },
    {
      q: "Faut-il être classé numéro 1 pour que cela fonctionne ?",
      a: "Non ! C'est justement tout l'intérêt des publicités TripAdvisor : vous pouvez apparaître en haut de la première page grâce au sponsoring, même si votre classement organique actuel est plus bas dans la liste.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://urunk.com/services/tripadvisor-ads#service",
    name: "Publicité TripAdvisor pour hôtels au Maroc",
    serviceType: "Gestion TripAdvisor Ads",
    description:
      "Gestion TripAdvisor Ads à 3 000 MAD/mois (env. 280 €/mois), sans engagement de durée, pour générer des réservations directes.",
    provider: buildServiceProviderSchema(),
    areaServed: [
      { "@type": "Country", name: "Morocco" },
      { "@type": "Country", name: "Worldwide" },
    ],
    url: "https://urunk.com/services/tripadvisor-ads",
    offers: {
      "@type": "Offer",
      price: "3000",
      priceCurrency: "MAD",
      url: "https://urunk.com/services/tripadvisor-ads",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "3000",
        priceCurrency: "MAD",
        unitText: "MONTH",
      },
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
        title="Publicité TripAdvisor pour hôtels au Maroc | Urunk"
        description="Optimisation de votre présence sponsorisée sur TripAdvisor pour capter les voyageurs en phase finale de décision au Maroc."
        schema={[serviceSchema, faqSchema]}
      />

      {/* Editorial Hero */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-4xl">
          <p className="text-sm text-bg-light/75 mb-4">Plateformes de voyage</p>
          <h1 className="font-serif text-bg-light mb-6 text-balance">
            Publicité TripAdvisor pour hôtels au Maroc
          </h1>
          <p className="text-lg md:text-xl text-bg-light/85 mb-10 max-w-[65ch] leading-relaxed">
            Optimisez les recherches sur TripAdvisor. Placez votre établissement devant les voyageurs comparant activement leurs options d'hébergement.
          </p>
          <div className="max-w-3xl mb-10">
            <Callout variant="dark">
              <strong className="text-bg-light font-semibold">Notre valeur ajoutée :</strong> Urunk aide les hôtels et riads à maximiser leur visibilité sur TripAdvisor dans des marchés hautement concurrentiels, transformant leur réputation en un moteur constant de réservations directes.
            </Callout>
          </div>
          <Button href="/contact" variant="primary">
            Dominez TripAdvisor dès maintenant
          </Button>
        </div>
      </Section>

      {/* Problem Section */}
      <Section tone="alt">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-primary mb-6 text-balance">
              Les excellents avis ne servent à rien si personne ne les voit.
            </h2>
            <div className="space-y-4 text-primary/85 leading-relaxed max-w-[65ch]">
              <p>
                Vous travaillez dur pour offrir une expérience client exceptionnelle et obtenir des avis 5 étoiles. Mais dans des destinations comme Marrakech ou Casablanca, des centaines d'établissements se disputent la visibilité. Si vous êtes relégué en page 3, les voyageurs ne vous trouveront tout simplement pas.
              </p>
              <p>
                Les publicités TripAdvisor vous permettent de contourner l'algorithme. En sécurisant les meilleurs emplacements sponsorisés, vous garantissez que les voyageurs découvrent votre établissement en tête de liste lors de la préparation de leur voyage.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 border border-border-subtle bg-bg-card p-8 rounded-sm">
            <h3 className="font-serif text-primary pb-4 mb-6 border-b border-border-subtle">
              Signes que vous avez besoin de Gestion TripAdvisor Ads :
            </h3>
            <div className="divide-y divide-border-subtle text-sm text-primary/85">
              <p className="py-3.5 pt-0 m-0">Vous avez d'excellentes notes mais un faible trafic sur votre fiche</p>
              <p className="py-3.5 m-0">Des concurrents moins bien notés apparaissent avant vous</p>
              <p className="py-3.5 pb-0 m-0">Vous êtes trop dépendant de Booking.com pour votre visibilité</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Ce qui est inclus */}
      <Section tone="light">
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-primary text-balance">
            Optimisation globale de votre visibilité.
          </h2>
        </div>

        <div>
          <Hairline />
          <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">01</div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-primary m-0">Emplacements Sponsorisés</h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-primary/80 leading-relaxed m-0 max-w-[65ch]">
                Nous gérons la stratégie d'enchères pour positionner votre établissement dans les premières positions sponsorisées de votre destination.
              </p>
            </div>
          </div>
          <Hairline />
          <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">02</div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-primary m-0">Optimisation de la Fiche</h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-primary/80 leading-relaxed m-0 max-w-[65ch]">
                Nous sublimons la sélection de photos principales, la liste des équipements et les descriptions pour inciter les visiteurs à réserver dès le 1er clic.
              </p>
            </div>
          </div>
          <Hairline />
          <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">03</div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-primary m-0">Stratégie d'Avis Clients</h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-primary/80 leading-relaxed m-0 max-w-[65ch]">
                Nous vous fournissons des modèles et processus simples pour aider vos équipes sur le terrain à collecter davantage d'avis positifs.
              </p>
            </div>
          </div>
          <Hairline />
        </div>
      </Section>

      {/* Process & Pricing */}
      <Section tone="alt">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-primary mb-8">Comment ça marche</h2>
            <div>
              <Hairline />
              <div className="py-6 flex gap-6 items-baseline">
                <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">1</span>
                <div>
                  <h3 className="font-serif text-primary mb-2">Audit du Profil</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    Nous analysons votre classement actuel, le positionnement de vos concurrents et la qualité de votre fiche.
                  </p>
                </div>
              </div>
              <Hairline />
              <div className="py-6 flex gap-6 items-baseline">
                <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">2</span>
                <div>
                  <h3 className="font-serif text-primary mb-2">Lancement des Campagnes</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    Nous paramétrons des campagnes ciblées en allouant intelligemment votre budget selon les jours de forte affluence.
                  </p>
                </div>
              </div>
              <Hairline />
              <div className="py-6 flex gap-6 items-baseline">
                <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">3</span>
                <div>
                  <h3 className="font-serif text-primary mb-2">Suivi de la Performance</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    Nous mesurons le taux de clic et fournissons un rapport mensuel limpide sur l'augmentation des demandes directes.
                  </p>
                </div>
              </div>
              <Hairline />
            </div>
          </div>

          <div className="lg:col-span-5 bg-bg-card p-8 md:p-10 rounded-sm border border-border-subtle space-y-5">
            <p className="text-sm text-accent font-medium m-0">Frais de gestion</p>
            <h3 className="font-serif text-3xl text-primary tabular-nums m-0">
              À partir de 3 000 MAD<span className="text-lg text-primary/70">/mois</span>
            </h3>
            <p className="text-primary/80 leading-relaxed m-0">
              Hors dépenses publicitaires payées à TripAdvisor. Aucun contrat longue durée.
            </p>
            <Button href="/contact" variant="dark" className="w-full">
              Boostez votre visibilité
            </Button>
          </div>
        </div>
      </Section>

      {/* Case Study Proof */}
      <Section tone="light">
        <div className="max-w-3xl">
          <h2 className="font-serif text-primary mb-4">Modélisation Publicitaire Stratégique</h2>
          <p className="text-primary/85 leading-relaxed mb-6 max-w-[65ch]">
            Découvrez notre cadre stratégique illustrant comment le positionnement des annonces TripAdvisor et des tunnels web personnalisés peuvent accroître la visibilité et structurer l'acquisition des voyagistes.
          </p>
          <p className="m-0">
            <Link to="/realisations/services-voyage-maroc">
              Cadre stratégique TripAdvisor et tunnel web pour voyagistes
            </Link>
          </p>
        </div>
      </Section>

      <RelatedExpertiseSection
        kicker="Spécialisations hôtelières par destination"
        title="TripAdvisor Ads & Réservation Directe à Marrakech et Agadir"
        subtitle="Explorez nos stratégies de placements sponsorisés TripAdvisor, campagnes Google Ads et tunnels directs sans commission au Maroc."
        links={getMatrixLinksForService('tripadvisor-ads', 'fr')}
        isFrench={true}
        bgVariant="alt"
      />

      {/* FAQ */}
      <Section tone="light">
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
            Prêt à sortir du lot ?
          </h2>
          <p className="text-lg text-bg-light/85 mb-8">
            Donnez à vos avis la visibilité qu'ils méritent.
          </p>
          <Button href="/contact" variant="primary">
            Obtenir une proposition publicitaire
          </Button>
        </div>
      </Section>
    </div>
  );
}
