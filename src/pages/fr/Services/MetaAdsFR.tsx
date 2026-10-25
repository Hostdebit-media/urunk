import React from "react";
import Callout from "../../../components/Callout";
import SEO from "../../../components/SEO";
import RelatedExpertiseSection from "../../../components/RelatedExpertiseSection";
import { getMatrixLinksForService } from "../../../data/matrixRelations";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function MetaAdsFR() {

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Gestion Meta Ads",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Urunk"
    },
    "description": "Gestion publicitaire sur Facebook et Instagram pour l'hôtellerie."
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Meta Ads pour Hôtels",
    "description": "Campagnes ciblées sur Facebook et Instagram pour hôtels et riads.",
    "provider": {
      "@type": "Organization",
      "name": "Urunk"
    },
    "areaServed": [
      { "@type": "Country", "name": "Morocco" },
      { "@type": "Country", "name": "Worldwide" }
    ],
    "url": "https://urunk.com/services/gestion-publicites-meta"
  };
  const faqs = [
    {
      q: "Combien devrais-je dépenser pour mes publicités Meta Ads ?",
      a: "Nous recommandons un budget publicitaire minimum de 3 000 à 5 000 MAD par mois (payé directement à Meta). Cela nous permet d'alimenter l'algorithme et de tester efficacement plusieurs audiences et visuels.",
    },
    {
      q: "Quelle est la différence entre booster une publication et créer des campagnes Meta Ads ?",
      a: "Booster une publication génère principalement des j'aime et des commentaires superficiels. Notre gestion de campagnes utilise le Meta Ads Manager pour cibler des voyageurs intentionnels et déployer du retargeting dynamique qui génère de vraies réservations.",
    },
    {
      q: "Avez-vous besoin de l'accès à ma page Facebook et mon compte Instagram ?",
      a: "Oui, nous vous guidons étape par étape pour nous accorder un accès partenaire sécurisé via le Meta Business Manager, sans jamais avoir besoin de vos mots de passe personnels.",
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Publicité Meta Ads pour hôtels et riads | Urunk"
        description="Campagnes visuelles sur Facebook et Instagram ciblant les voyageurs internationaux et reciblant les visiteurs indécis."
        schema={[schema, serviceSchema]}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent-soft text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            Publicité sur les réseaux sociaux
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Publicité Meta Ads pour hôtels et riads
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light">
            Ne laissez plus partir vos futurs clients. Inspirez les voyageurs
            sur Facebook et Instagram, puis reciblez-les jusqu'à ce qu'ils
            réservent.
          </p>
          <div className="max-w-3xl mx-auto mb-10 text-left">
            <Callout variant="dark">
              <strong className="text-accent font-semibold">Ce que nous faisons :</strong> Urunk propose une gestion
              spécialisée des publicités Meta (Facebook & Instagram). Nous créons
              des campagnes visuelles captivantes pour valoriser votre
              établissement, promouvoir vos offres spéciales et recibler
              efficacement les utilisateurs ayant quitté votre moteur de
              réservation.
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
              Faites-vous simplement du « boost de publication » ?
            </h2>
            <p className="text-primary/80 mb-6 leading-relaxed">
              De nombreux propriétaires d'hôtels appuient sur le bouton «
              Booster la publication » sur Instagram dans l'espoir d'obtenir des
              réservations. Mais les « j'aime » ne payent pas les factures. Ce
              bouton est conçu pour générer de l'engagement, pas du chiffre
              d'affaires.
            </p>
            <p className="text-primary/80 leading-relaxed">
              Un véritable retour sur investissement nécessite le Meta Ads
              Manager. Nous construisons des entonnoirs complets : les audiences
              froides découvrent vos meilleures vidéos, les audiences tièdes
              explorent vos équipements, et les audiences chaudes (qui ont
              visité votre page de réservation) reçoivent l'incitation finale
              pour réserver directement.
            </p>
          </div>
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
            <h3 className="text-xl font-bold mb-4">
              Erreurs courantes sur Meta Ads :
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-primary/80">
                <Check size={20} className="text-accent shrink-0" /> Booster des
                publications au lieu d'utiliser des campagnes de conversion
              </li>
              <li className="flex gap-3 text-primary/80">
                <Check size={20} className="text-accent shrink-0" /> Oublier
                d'installer le Pixel Meta pour le retargeting
              </li>
              <li className="flex gap-3 text-primary/80">
                <Check size={20} className="text-accent shrink-0" /> Utiliser
                des visuels statiques et chargés au lieu de vidéos verticales
                fluides
              </li>
              <li className="flex gap-3 text-primary/80">
                <Check size={20} className="text-accent shrink-0" /> Diffuser la
                même publicité à tout le monde sans segmenter la maturité du
                prospect
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Stratégie sociale à entonnoir complet.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">
                Ciblage d'Audience
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Nous ciblons les voyageurs ayant manifesté un intérêt pour votre
                destination en créant des audiences similaires basées sur vos
                clients passés.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">
                Création & Rédaction
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Nous concevons des visuels captivants et des textes persuasifs
                qui transmettent l'émotion et l'expérience unique de votre
                établissement.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">
                Retargeting Puissant
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Nous configurons le Pixel afin d'accompagner les utilisateurs
                ayant quitté votre site sans réserver, leur rappelant d'inscrire
                leur séjour.
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
                    Pixel Meta & Analyse des Contenus
                  </h3>
                  <p className="text-sm text-primary/80">
                    Nous vérifions l'installation du Pixel Meta sur votre site
                    et sélectionnons vos meilleures photos/vidéos.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-1">
                    Conception des Campagnes & Visuels
                  </h3>
                  <p className="text-sm text-primary/80">
                    Nous préparons les éléments graphiques, rédigeons les textes
                    et paramétrons les entonnoirs dans Ads Manager.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-1">Optimisation Mensuelle</h3>
                  <p className="text-sm text-primary/80">
                    Nous renouvelons les annonces fatiguées et réallouons le
                    budget vers les campagnes générant les réservations les plus
                    rentables.
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
              Hors budget publicitaire payé directement à Meta. Sans engagement
              longue durée.
            </p>
            <Link
              to="/contact"
              className="w-full bg-primary hover:bg-primary-light text-white py-3 rounded-xl font-medium transition-colors"
            >
              Développer mes réservations
            </Link>
          </div>
        </div>
      </section>

      <RelatedExpertiseSection
        kicker="Acquisition Régionale & Social Ads"
        title="Publicité Meta Ads & Réservation Directe par Ville au Maroc"
        subtitle="Découvrez nos dispositifs d'acquisition Instagram, Facebook, Google Ads et réservation directe à Marrakech, Casablanca et Agadir."
        links={getMatrixLinksForService('meta-ads', 'fr')}
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
        <h2 className="text-4xl font-bold mb-6">
          Prêt à transformer l'attention en réservations ?
        </h2>
        <p className="text-xl text-primary/80 mb-8">
          Construisons un entonnoir sur les réseaux sociaux rentable pour votre
          établissement.
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
