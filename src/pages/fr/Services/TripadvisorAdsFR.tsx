import React from "react";
import Callout from "../../../components/fr/CalloutFR";
import SEO from "../../../components/SEO";
import { buildServiceProviderSchema } from "../../../components/SEO/StructuredData";
import RelatedExpertiseSection from "../../../components/RelatedExpertiseSection";
import { getMatrixLinksForService } from "../../../data/matrixRelations";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent-soft text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            Plateformes de voyage
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Publicité TripAdvisor pour hôtels au Maroc
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light">
            Optimisez les recherches sur TripAdvisor. Placez votre établissement
            devant les voyageurs comparant activement leurs options
            d'hébergement.
          </p>
          <div className="max-w-3xl mx-auto mb-10 text-left">
            <Callout variant="dark">
              <strong className="text-accent font-semibold">Notre valeur ajoutée :</strong> Urunk aide les hôtels et
              riads à maximiser leur visibilité sur TripAdvisor dans des marchés
              hautement concurrentiels, transformant leur réputation en un moteur
              constant de réservations directes.
            </Callout>
          </div>
          <Link
            to="/contact"
            className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
          >
            Dominez TripAdvisor dès maintenant <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Les excellents avis ne servent à rien si personne ne les voit.
            </h2>
            <p className="text-primary/80 mb-6 leading-relaxed">
              Vous travaillez dur pour offrir une expérience client
              exceptionnelle et obtenir des avis 5 étoiles. Mais dans des
              destinations comme Marrakech ou Casablanca, des centaines
              d'établissements se disputent la visibilité. Si vous êtes relégué
              en page 3, les voyageurs ne vous trouveront tout simplement pas.
            </p>
            <p className="text-primary/80 leading-relaxed">
              Les publicités TripAdvisor vous permettent de contourner
              l'algorithme. En sécurisant les meilleurs emplacements
              sponsorisés, vous garantissez que les voyageurs découvrent votre
              établissement en tête de liste lors de la préparation de leur voyage.
            </p>
          </div>
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
            <h3 className="text-xl font-bold mb-4">
              Signes que vous avez besoin de Gestion TripAdvisor Ads :
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-primary/80">
                <Check size={20} className="text-accent shrink-0" /> Vous avez
                d'excellentes notes mais un faible trafic sur votre fiche
              </li>
              <li className="flex gap-3 text-primary/80">
                <Check size={20} className="text-accent shrink-0" /> Des
                concurrents moins bien notés apparaissent avant vous
              </li>
              <li className="flex gap-3 text-primary/80">
                <Check size={20} className="text-accent shrink-0" /> Vous êtes
                trop dépendant de Booking.com pour votre visibilité
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Optimisation globale de votre visibilité.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">
                Emplacements Sponsorisés
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Nous gérons la stratégie d'enchères pour positionner votre
                établissement dans les premières positions sponsorisées de votre
                destination.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">
                Optimisation de la Fiche
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Nous sublimons la sélection de photos principales, la liste des
                équipements et les descriptions pour inciter les visiteurs à
                réserver dès le 1er clic.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">
                Stratégie d'Avis Clients
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Nous vous fournissons des modèles et processus simples pour
                aider vos équipes sur le terrain à collecter davantage d'avis
                positifs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Pricing */}
      <section className="py-20 px-6 bg-bg-alt">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Comment ça marche</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-1">Audit du Profil</h3>
                  <p className="text-sm text-primary/80">
                    Nous analysons votre classement actuel, le positionnement de
                    vos concurrents et la qualité de votre fiche.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-1">Lancement des Campagnes</h3>
                  <p className="text-sm text-primary/80">
                    Nous paramétrons des campagnes ciblées en allouant
                    intelligemment votre budget selon les jours de forte
                    affluence.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-1">Suivi de la Performance</h3>
                  <p className="text-sm text-primary/80">
                    Nous mesurons le taux de clic et fournissons un rapport
                    mensuel limpide sur l'augmentation des demandes directes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm border border-primary/10 flex flex-col justify-center items-center text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Frais de gestion
            </span>
            <h3 className="text-4xl font-bold mb-2">
              À partir de 3 000 MAD
              <span className="text-xl font-normal text-primary/70">/mois</span>
            </h3>
            <p className="text-primary/70 text-sm mb-8">
              Hors dépenses publicitaires payées à TripAdvisor. Aucun contrat
              longue durée.
            </p>
            <Link
              to="/contact"
              className="w-full bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-medium transition-colors"
            >
              Boostez votre visibilité
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Proof */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Modélisation Publicitaire Stratégique</h2>
        <p className="text-primary/80 mb-8 max-w-2xl mx-auto">
          Découvrez notre cadre stratégique illustrant comment le positionnement des annonces TripAdvisor et des tunnels web personnalisés peuvent accroître la visibilité et structurer l'acquisition des voyagistes.
        </p>
        <Link
          to="/realisations/services-voyage-maroc"
          className="text-accent hover:text-accent-hover font-medium flex items-center justify-center gap-2 transition-colors"
        >
          Explorer le modèle de stratégie <ArrowRight size={18} />
        </Link>
      </section>

      <RelatedExpertiseSection
        kicker="Spécialisations Hôtelières par Destination"
        title="TripAdvisor Ads & Réservation Directe à Marrakech et Agadir"
        subtitle="Explorez nos stratégies de placements sponsorisés TripAdvisor, campagnes Google Ads et tunnels directs sans commission au Maroc."
        links={getMatrixLinksForService('tripadvisor-ads', 'fr')}
        isFrench={true}
        bgVariant="white"
      />

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
        <h2 className="text-4xl font-bold mb-6">Prêt à sortir du lot ?</h2>
        <p className="text-xl text-primary/80 mb-8">
          Donnez à vos avis la visibilité qu'ils méritent.
        </p>
        <Link
          to="/contact"
          className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 transition-colors"
        >
          Obtenir une proposition publicitaire <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
