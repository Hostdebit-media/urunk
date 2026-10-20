import React from "react";
import Callout from "../../../components/fr/CalloutFR";
import SEO from "../../../components/SEO";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function GoogleAdsFR() {

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Gestion Google Ads",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Urunk"
    },
    "description": "Gestion professionnelle Google Ads pour hôtels, riads et voyagistes pour générer des réservations directes."
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Google Ads pour Hôtels",
    "description": "Gestion de campagnes Google Ads basées sur les données pour capter les voyageurs à forte intention d'achat.",
    "provider": {
      "@type": "Organization",
      "name": "Urunk"
    },
    "areaServed": [
      { "@type": "Country", "name": "Morocco" },
      { "@type": "Country", "name": "Worldwide" }
    ],
    "url": "https://urunk.com/services/gestion-google-ads"
  };
  const faqs = [
    {
      q: "Combien dois-je dépenser sur Google Ads ?",
      a: "Nous recommandons un budget publicitaire minimum de 3 000 à 5 000 MAD par mois payé directement à Google. Cela garantit un volume de trafic suffisant pour tester les mots-clés et générer un retour sur investissement mesurable.",
    },
    {
      q: "Combien de temps faut-il pour voir des résultats ?",
      a: "Contrairement au SEO qui prend des mois, Google Ads génère du trafic qualifié dès le 1er jour de lancement de la campagne. Les optimisations hebdomadaires permettent d'améliorer continuellement le taux de conversion.",
    },
    {
      q: "Suis-je propriétaire de mon compte Google Ads ?",
      a: "Oui. Le compte Google Ads est créé à votre nom ou nous gérons votre compte existant. Vous conservez la propriété à 100 % et vous payez directement Google pour les clics.",
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Gestion Google Ads pour Hôtels & Riads | Urunk"
        description="Captez des voyageurs au moment exact où ils cherchent un hébergement. Campagnes Google Ads optimisées pour les réservations directes d'hôtels."
        schema={[schema, serviceSchema]}
      />

      {/* Hero & AI Answer Block */}
      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent-soft text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            Publicité sur les moteurs de recherche
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Gestion Google Ads
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light">
            Captez des voyageurs à forte intention d'achat au moment précis où
            ils recherchent un séjour dans votre région.
          </p>
          <div className="max-w-3xl mx-auto mb-10 text-left">
            <Callout variant="dark">
              <strong className="text-accent font-semibold">Notre approche :</strong> Urunk gère des campagnes Google
              Ads ciblées pour les hôtels, riads et voyagistes. Nous ciblons les
              mots-clés à haute conversion, éliminons le gaspillage de budget et
              suivons chaque réservation directe pour vous garantir un retour sur
              investissement (ROI) positif.
            </Callout>
          </div>
          <Link
            to="/contact"
            className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
          >
            Demander un audit publicitaire <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Achetez-vous des clics ou des réservations ?
            </h2>
            <p className="text-primary/80 mb-6 leading-relaxed">
              De nombreux hôteliers lancent des campagnes Google Ads sans suivi
              rigoureux des conversions. Ils enchérissent sur des termes trop
              larges comme « vacances au Maroc » et voient leur budget s'envoler
              sans aucune réservation directe.
            </p>
            <p className="text-primary/80 leading-relaxed">
              Sans liste de mots-clés négatifs, sans ciblage précis et sans
              suivi des conversions, Google Ads devient un gouffre financier.
              Nous inversons la tendance en nous concentrant exclusivement sur
              les intentions de recherche prêtes à réserver.
            </p>
          </div>
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
            <h3 className="text-xl font-bold mb-4">
              Erreurs courantes sur Google Ads :
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-primary/80">
                <Check size={20} className="text-accent shrink-0" /> Enchérir
                inutilement sur le nom de ses concurrents
              </li>
              <li className="flex gap-3 text-primary/80">
                <Check size={20} className="text-accent shrink-0" /> Aucun outil
                de suivi des conversions installé
              </li>
              <li className="flex gap-3 text-primary/80">
                <Check size={20} className="text-accent shrink-0" /> Renvoyer
                tout le trafic vers la page d'accueil au lieu d'offres ciblées
              </li>
              <li className="flex gap-3 text-primary/80">
                <Check size={20} className="text-accent shrink-0" /> Laisser
                Google appliquer automatiquement des recommandations
                d'association large
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Gestion axée sur la performance.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">
                Stratégie de Mots-Clés
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Nous identifions les requêtes exactes de vos futurs clients pour
                isoler les acheteurs décidés des simples curieux.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">
                Textes Publicitaires Percutants
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Nous rédigeons des annonces attractives mettant en avant vos
                équipements uniques et vos avantages de réservation directe.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">
                Optimisation Continue
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Nous surveillons quotidiennement les termes de recherche,
                ajustons les enchères et éliminons les clics non pertinents.
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
                  <h3 className="font-bold mb-1">
                    Audit & Configuration du Suivi
                  </h3>
                  <p className="text-sm text-primary/80">
                    Nous analysons l'historique et configurons un suivi de
                    conversion strict sur votre site.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-1">Création des Campagnes</h3>
                  <p className="text-sm text-primary/80">
                    Nous structurons les campagnes, groupes d'annonces et
                    mots-clés adaptés à vos objectifs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-1">
                    Rapports Mensuels Transparents
                  </h3>
                  <p className="text-sm text-primary/80">
                    Vous recevez un rapport mensuel clair résumant vos dépenses
                    et le nombre de réservations directes obtenues.
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
              À partir de 4 000 MAD
              <span className="text-xl font-normal text-primary/70">/mois</span>
            </h3>
            <p className="text-primary/70 text-sm mb-8">
              Hors dépenses publicitaires payées à Google. Aucun engagement
              longue durée.
            </p>
            <Link
              to="/contact"
              className="w-full bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-medium transition-colors"
            >
              Lancer mes campagnes
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Proof */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Conception Stratégique de Campagne</h2>
        <p className="text-primary/80 mb-8 max-w-2xl mx-auto">
          Découvrez notre cadre stratégique illustrant comment structurer des campagnes de recherche pour une visibilité maximale tout en ciblant les demandes professionnelles à forte valeur ajoutée.
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
          Prêt pour une croissance mesurable ?
        </h2>
        <p className="text-xl text-primary/80 mb-8">
          Transformons les recherches en chiffre d'affaires direct.
        </p>
        <Link
          to="/contact"
          className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 transition-colors"
        >
          Obtenir une proposition de campagne <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
