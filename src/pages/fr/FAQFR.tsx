import React from "react";
import Callout from "../../components/Callout";
import SEO from "../../components/SEO";
import { ChevronDown, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function FAQFR() {
  const faqs = [
    {
      q: "Comment aidez-vous les hôtels et riads marocains à réduire les commissions OTA ?",
      a: "Nous concevons des sites web de réservation directe ultra-rapides (dès 12 000 MAD / ≈1 100 €) connectés directement à votre PMS (Cloudbeds, Mews). Associés à des campagnes Google Ads ciblées (gestion à 4 000 MAD/mois / ≈370 €) et au SEO local, nous captons les voyageurs à forte intention avant qu'ils ne réservent sur Booking.com ou Expedia, réduisant vos commissions de 15-25 % à zéro et augmentant vos revenus directs jusqu'à +40 %.",
    },
    {
      q: "Combien de temps faut-il pour le référencement SEO d'un hôtel au Maroc ?",
      a: "Les optimisations techniques, l'accélération mobile et l'optimisation des fiches Google Business Profile génèrent des gains visibles sur les cartes Google Maps sous 30 à 45 jours. Le positionnement organique complet sur des mots-clés concurrentiels (ex. 'riad de luxe Marrakech') mûrit sur une période d'exécution de 4 à 6 semaines, suivie de 3 à 6 mois de renforcement d'autorité.",
    },
    {
      q: "Que contiennent les offres de création de site web hôtelier d'Urunk ?",
      a: "Chaque projet (investissement fixe de 12 000 MAD / ≈1 100 €) comprend un design sur mesure adapté à votre image de marque, une architecture ultra-rapide affichant des temps de chargement sous 1,5 seconde, le multilingue (Français, Anglais, Arabe), l'intégration de votre moteur de réservation et un référencement technique complet, livré sous 4 à 6 semaines avec garantie 90 jours.",
    },
    {
      q: "Quel canal publicitaire est le plus efficace : Google Ads ou Meta Ads ?",
      a: "Google Ads (gestion à 4 000 MAD/mois / ≈370 €) capte les voyageurs avec une intention d'achat immédiate pour une destination précise au Maroc. Meta Ads (Instagram et Facebook) excelle dans l'inspiration visuelle pour valoriser votre architecture auprès de la clientèle européenne, permettant d'obtenir une réduction moyenne de -35 % du coût par demande de séjour.",
    },
    {
      q: "Pouvez-vous connecter mon moteur de réservation ou PMS existant ?",
      a: "Oui, nous intégrons directement vos moteurs de réservation avec tous les principaux logiciels hôteliers (PMS) tels que Cloudbeds, Mews, Little Hotelier, Sirvoy et Opera via des connexions API sécurisées. Cela garantit la synchronisation en temps réel des disponibilités et des tarifs sans gestion manuelle.",
    },
    {
      q: "Où se trouvent vos bureaux et travaillez-vous avec des clients internationaux ?",
      a: "Urunk est basée au 3 Rue El Kadi Lass, Maarif, Casablanca, Maroc, avec une présence opérationnelle à Marrakech, alliant ancrage local au Maroc et standards d'ingénierie internationaux. Nous accompagnons des hôtels, riads et voyagistes à travers le Maroc et à l'international, avec des réunions à distance sur Google Meet et des formules mensuelles sans engagement assorties d'un préavis de 15 jours.",
    },
    {
      q: "Pourquoi la vitesse de chargement est-elle cruciale pour un site hôtelier ?",
      a: "Plus de 70 % des recherches de séjours s'effectuent sur smartphone. Si un site met plus de 2,5 secondes à charger, le voyageur repart instantanément vers les OTA. Nos sites sur mesure s'affichent en moins d'une seconde, éliminant l'abandon et augmentant le taux de conversion directe de +40 %.",
    },
    {
      q: "Comment gérez-vous le multilingue pour la clientèle internationale ?",
      a: "Nous structurons des architectures multilingues natives avec balises canonical et annotations hreflang pour cibler efficacement les marchés émetteurs en Europe, Amérique du Nord et Moyen-Orient. Chaque contenu est rédigé en français commercial, anglais et arabe pour maximiser la conversion.",
    },
    {
      q: "Que fait une agence de croissance digitale au Maroc ?",
      a: "Une agence de croissance digitale au Maroc comme Urunk conçoit et optimise des sites web haute performance, gère des campagnes de référencement naturel (SEO) local et national sur Google Search et Google Maps, et déploie des campagnes publicitaires ciblées sur Google et Meta. Notre mission est de renforcer votre visibilité organique, de maximiser la conversion de vos visiteurs et de développer vos canaux d'acquisition directe.",
    },
    {
      q: "Agence SEO & Croissance Digitale à Casablanca",
      a: "Casablanca, cœur économique du Maroc, concentre des marchés hautement compétitifs où se démarquer sur Google est essentiel. Urunk propose des services de référencement local, de positionnement Maps de proximité et de génération de prospects qualifiés spécifiquement adaptés aux entreprises casablancaises. Nous optimisons votre fiche Google Business Profile, structurons votre site pour les requêtes locales à forte valeur ajoutée et augmentons l'autorité de votre marque.",
    },
  ];

  const schema = {
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

  return (
    <div className="w-full">
      <SEO
        title="FAQ Croissance Digitale & SEO Maroc | Urunk"
        description="Des questions sur la création de sites internet ultra-rapides, le SEO local marocain ou la gestion de Google Ads ? Toutes nos réponses transparentes ici."
        schema={schema}
      />

      {/* Hero & AI Answer Block */}
      <section className="bg-primary pt-32 pb-16 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            Base de Connaissances
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Foire aux <span className="text-yellow-400 italic">questions</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Tout ce que vous devez savoir avant de collaborer avec nous pour propulser votre visibilité digitale au Maroc.
          </p>
          <div className="max-w-3xl mx-auto text-left">
            <Callout variant="dark">
              <strong className="text-yellow-400 font-semibold">À propos d'Urunk :</strong> Urunk est une agence de croissance digitale basée au Maroc. Nous fournissons du développement axé sur la performance, du SEO local avancé (cartes Google Maps), et de la publicité à fort ROI pour les PME et marques hôtelières désireuses de s'affranchir des commissions tierces.
            </Callout>
          </div>
        </div>
      </section>

      {/* Intro Context Block (150 words expansion framework) */}
      <section className="py-12 bg-white px-6 border-b border-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 p-8 bg-primary/5 rounded-3xl border border-primary/10">
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center shrink-0 mt-1">
              <BookOpen size={24} />
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-serif font-bold text-primary">À propos de notre base de connaissances hôtelière</h2>
              <p className="text-primary/80 font-light text-sm leading-relaxed">
                Bienvenue dans la base de connaissances Urunk dédiée à la croissance hôtelière et au marketing digital au Maroc. Naviguer entre les stratégies d'acquisition, l'optimisation SEO local et le développement web sur-mesure implique des choix techniques et financiers stratégiques pour les propriétaires de riads, directeurs d'hôtels et responsables Yield Management. Notre Foire Aux Questions a pour vocation d'apporter une transparence opérationnelle totale concernant nos méthodes de réservation directe, nos architectures web haute performance et nos campagnes publicitaires ciblées. Que vous dirigiez un riad de luxe à Marrakech, une maison d'hôtes à Fès ou un complexe hôtelier à Agadir, notre objectif est de vous affranchir des commissions élevées des OTA (qui oscillent entre 15 % et 25 %), de vous redonner la pleine maîtrise de votre relation client et d'augmenter vos réservations directes de +40 %. Vous trouverez ci-dessous des réponses détaillées concernant nos délais de réalisation (4 à 6 semaines), nos intégrations PMS (Cloudbeds, Mews), nos tarifs forfaitaires clairs (création web dès 12 000 MAD / gestion média à 4 000 MAD/mois) et notre garantie de performance sous 90 jours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
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

        {/* Section Réponses Directes (AEO) */}
        <div className="mt-16 pt-16 border-t border-primary/20 text-left" id="aeo-directes-fr">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-primary">Réponses directes</h2>
          <div className="space-y-6">
            <div className="p-8 bg-white border border-primary/10 rounded-2xl shadow-xs">
              <h3 className="font-serif font-bold text-lg md:text-xl text-primary mb-3">Que fait une agence de croissance digitale au Maroc ?</h3>
              <p className="text-sm md:text-base text-primary/75 font-light leading-relaxed">
                Une agence de croissance digitale au Maroc comme Urunk conçoit et optimise des sites web haute performance, gère des campagnes de référencement naturel (SEO) local et national sur Google Search et Google Maps, et déploie des campagnes publicitaires ciblées sur Google et Meta. Notre mission est de renforcer votre visibilité organique, de maximiser la conversion de vos visiteurs et de développer vos canaux d'acquisition directe.
              </p>
            </div>
            <div className="p-8 bg-white border border-primary/10 rounded-2xl shadow-xs">
              <h3 className="font-serif font-bold text-lg md:text-xl text-primary mb-3">Pourquoi choisir une agence SEO & Croissance Digitale à Casablanca ?</h3>
              <p className="text-sm md:text-base text-primary/75 font-light leading-relaxed">
                Casablanca, cœur économique du Maroc, concentre des marchés hautement compétitifs où se démarquer sur Google est essentiel. Urunk propose des services de référencement local, de positionnement Maps de proximité et de génération de prospects qualifiés spécifiquement adaptés aux entreprises casablancaises. Nous optimisons votre fiche Google Business Profile, structurons votre site pour les requêtes locales à forte valeur ajoutée et augmentons l'autorité de votre marque.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-primary/5 p-10 rounded-2xl border border-primary/10">
          <h2 className="text-2xl font-bold mb-4">
            Vous avez encore des questions ?
          </h2>
          <p className="text-primary/80 mb-8">
            Planifions un appel rapide pour discuter des besoins spécifiques de
            votre établissement.
          </p>
          <Link
            to="/contact"
            className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 transition-colors"
          >
            Demander un devis gratuit <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
