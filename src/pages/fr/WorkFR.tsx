import React from "react";
import SEO from "../../components/SEO";
import { buildArticleSchema } from "../../components/SEO/StructuredData";
import { Link } from "react-router-dom";
import { caseStudies } from "../../data/caseStudies";
import { ArrowRight, Compass, Target } from "lucide-react";
import ImageWithSkeleton from "../../components/ImageWithSkeleton";

const getImageName = (slug: string) => {
  if (slug === "travel-morocco-services" || slug === "circuit-sahara-maroc") return "sahara-camel";
  if (slug === "nomad-eats-catering" || slug === "traiteur-casablanca") return "moroccan-catering";
  if (slug === "art-house-marrakech" || slug === "atelier-poterie-marrakech") return "marrakech-pottery";
  return undefined;
};

export default function WorkIndex() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://urunk.com/realisations#webpage",
      "name": "Exemples de Stratégies Digitales | Urunk",
      "description": "Découvrez les cadres stratégiques et modèles de croissance d'Urunk pour les hôtels, riads, tour-opérateurs et traiteurs au Maroc.",
      "url": "https://urunk.com/realisations",
      "inLanguage": "fr-MA"
    },
    buildArticleSchema({
      type: "Article",
      url: "https://urunk.com/realisations",
      headline: "Exemples de Stratégies Digitales & Modèles | Urunk",
      description: "Découvrez les cadres stratégiques et modèles d'acquisition directe conçus par Urunk pour le tourisme, l'hôtellerie et les services au Maroc.",
      datePublished: "2026-01-18",
      lang: "fr"
    })
  ];

  return (
    <div className="w-full pb-20 bg-bg text-primary">
      <SEO
        title="Exemples de Stratégies Digitales & Modèles | Urunk"
        description="Découvrez les cadres stratégiques et modèles d'acquisition directe conçus par Urunk pour le tourisme, l'hôtellerie et les services au Maroc."
        schema={schema}
      />

      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            <Compass size={14} />
            Modèles de Stratégie Sectorielle
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Exemples de <span className="text-accent italic font-semibold">Stratégies</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Des cadres d'acquisition clairs et structurés pour le secteur du tourisme et des services au Maroc. Découvrez comment nous concevons des canaux de réservation directe et des moteurs d'acquisition multi-canaux.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-primary/5 mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-accent mb-3 block">Méthodologie & Standards d'Exécution</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">Comment les Architectures Urunk Propulsent Votre Croissance Directe</h2>
            <p className="text-sm text-primary/80 leading-relaxed font-light mb-6">
              Nos modèles stratégiques constituent des références méthodologiques d'évaluation pour les secteurs hôteliers, touristiques et B2B au Maroc. Nous réfutons les approches génériques de refonte visuelle ou de campagnes de communication superficielles. Une croissance pérenne s'appuie sur des architectures logicielles optimisées sous React et un ciblage scientifique de l'intention de recherche locale.
            </p>
            <p className="text-sm text-primary/80 leading-relaxed font-light mb-8">
              En orchestrant des tunnels de conversion directe, nos modèles hôteliers éliminent l'érosion des marges liée aux intermédiaires (les commissions des OTA oscillent de 15 % à 25 %), augmentant vos réservations directes de +40 % en 4 à 6 semaines. Pour les PME et industries B2B, nous structurons des campagnes organiques d'autorité pour acheminer des prospects ultra-qualifiés, réduisant de -35 % le coût par acquisition. Découvrez ci-dessous nos cadres stratégiques pour chaque secteur.
            </p>

            <div className="border-t border-primary/5 pt-8">
              <h3 className="text-xl font-serif font-bold text-primary mb-6">Nos Domaines d'Expertise & Piliers d'Action</h3>
              <div className="grid sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-bold text-accent mb-2">1. Optimisation des Réservations Directes</h4>
                  <p className="text-xs text-primary/75 font-light leading-relaxed">
                    Nous raccordons et synchronisons vos PMS et Channel Managers directement à des structures front-end optimisées. Cela supprime les commissions intermédiaires, accélère les tunnels d'achat et sécurise la collecte des acomptes bancaires de manière native.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-2">2. Autorité de Recherche Locale</h4>
                  <p className="text-xs text-primary/75 font-light leading-relaxed">
                    Nous captons l'intention de recherche multilingue (français, anglais, arabe, allemand) sur vos marchés émetteurs. Nos structures de données locales JSON-LD et notre indexation sémantique garantissent un positionnement hôtelier de premier choix.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-2">3. Ingénierie Edge & Vitesse de Pointe</h4>
                  <p className="text-xs text-primary/75 font-light leading-relaxed">
                    En réduisant le poids de nos bundles applicatifs et en propulsant l'ensemble de nos livrables sur le réseau mondial de serveurs Cloudflare Workers, nous offrons un affichage instantané sous 1,5s, empêchant les mobinautes de quitter votre site.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-2">4. Conformité & Protection des Données</h4>
                  <p className="text-xs text-primary/75 font-light leading-relaxed">
                    Chacune de nos conceptions respecte scrupuleusement les exigences de la norme WCAG 2.2 AA. Nous configurons nativement Google Consent Mode v2, protégeant ainsi la confidentialité de vos utilisateurs tout en maintenant un suivi analytique rigoureux.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {caseStudies.map((study, index) => {
            const industry = study.frIndustry;
            const topicName = study.frTopicName;
            const scenario = study.frBusinessScenario;
            const kpi = study.frRecommendedKPIs[0];

            return (
              <Link
                to={`/realisations/${study.frSlug}`}
                key={index}
                className="group bg-white rounded-2xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="aspect-[16/10] bg-gray-100 overflow-hidden relative">
                  <ImageWithSkeleton
                    src={study.heroImage}
                    imageName={getImageName(study.slug)}
                    alt={topicName}
                    width={400}
                    height={250}
                    loading="lazy"
                    className="w-full h-full"
                    imgClassName="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 text-accent font-bold text-xs px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Target size={12} />
                    Exemple de Stratégie
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
                    {industry}
                  </span>
                  <h2 className="text-xl font-serif font-bold mb-3 group-hover:text-accent transition-colors text-primary line-clamp-2">
                    {topicName}
                  </h2>
                  <p className="text-xs text-primary/75 mb-6 line-clamp-3 font-light leading-relaxed">
                    {scenario}
                  </p>

                  <div className="mt-auto pt-4 border-t border-primary/10">
                    <div className="mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary/60 block mb-1">Cible Métrique Indicative :</span>
                      <span className="text-xs font-bold text-accent bg-accent/5 px-2.5 py-1 rounded border border-accent/10 inline-block">
                        {kpi.metric}
                      </span>
                    </div>
                    <span className="text-xs font-bold flex items-center gap-1 text-accent group-hover:text-accent-hover transition-all">
                      <span>Consulter la stratégie complète</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
    );
}
