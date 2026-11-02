import React from "react";
import SEO from "../../components/SEO";
import { buildArticleSchema } from "../../components/SEO/StructuredData";
import { Link } from "react-router-dom";
import { caseStudies } from "../../data/caseStudies";
import ImageWithSkeleton from "../../components/ImageWithSkeleton";
import Section from "../../components/ui/Section";
import Hairline from "../../components/ui/Hairline";

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
    <div className="w-full bg-bg-light text-primary">
      <SEO
        title="Exemples de Stratégies Digitales & Modèles | Urunk"
        description="Découvrez les cadres stratégiques et modèles d'acquisition directe conçus par Urunk pour le tourisme, l'hôtellerie et les services au Maroc."
        schema={schema}
      />

      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-4xl">
          <p className="text-sm font-medium text-bg-light/75 mb-4">
            Modèles de Stratégie Sectorielle
          </p>
          <h1 className="font-serif text-bg-light mb-6 text-balance">
            Exemples de <span className="italic">Stratégies</span>
          </h1>
          <p className="text-lg md:text-xl text-bg-light/85 max-w-[62ch] leading-relaxed">
            Des cadres d&apos;acquisition clairs et structurés pour le secteur du tourisme et des services au Maroc. Découvrez comment nous concevons des canaux de réservation directe et des moteurs d&apos;acquisition multi-canaux.
          </p>
        </div>
      </Section>

      <Section tone="alt" className="border-b border-border-subtle">
        <div className="max-w-[68ch]">
          <p className="text-sm font-medium text-accent mb-3">
            Méthodologie &amp; Standards d&apos;Exécution
          </p>
          <h2 className="font-serif text-primary mb-4 text-balance">
            Comment les Architectures Urunk Propulsent Votre Croissance Directe
          </h2>
          <p className="text-primary/85 leading-relaxed mb-5">
            Nos modèles stratégiques constituent des références méthodologiques d&apos;évaluation pour les secteurs hôteliers, touristiques et B2B au Maroc. Nous réfutons les approches génériques de refonte visuelle ou de campagnes de communication superficielles. Une croissance pérenne s&apos;appuie sur des architectures logicielles optimisées sous React et un ciblage scientifique de l&apos;intention de recherche locale.
          </p>
          <p className="text-primary/85 leading-relaxed mb-10">
            En orchestrant des tunnels de conversion directe, nos modèles hôteliers éliminent l&apos;érosion des marges liée aux intermédiaires (les commissions des OTA oscillent de [À CONFIRMER]), augmentant vos réservations directes de +40 % en 4 à 6 semaines. Pour les PME et industries B2B, nous structurons des campagnes organiques d&apos;autorité pour acheminer des prospects ultra-qualifiés, réduisant de -35 % le coût par acquisition. Découvrez ci-dessous nos cadres stratégiques pour chaque secteur.
          </p>

          <Hairline className="mb-8" />

          <h3 className="font-serif text-primary mb-6">
            Nos Domaines d&apos;Expertise &amp; Piliers d&apos;Action
          </h3>
          <div className="grid sm:grid-cols-2 gap-8 text-[15px]">
            <div>
              <h4 className="font-semibold text-primary mb-2">
                1. Optimisation des Réservations Directes
              </h4>
              <p className="text-sm text-primary/80 leading-relaxed">
                Nous raccordons et synchronisons vos PMS et Channel Managers directement à des structures front-end optimisées. Cela supprime les commissions intermédiaires, accélère les tunnels d&apos;achat et sécurise la collecte des acomptes bancaires de manière native.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">
                2. Autorité de Recherche Locale
              </h4>
              <p className="text-sm text-primary/80 leading-relaxed">
                Nous captons l&apos;intention de recherche multilingue (français, anglais, arabe, allemand) sur vos marchés émetteurs. Nos structures de données locales JSON-LD et notre indexation sémantique garantissent un positionnement hôtelier de premier choix.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">
                3. Ingénierie Edge &amp; Vitesse de Pointe
              </h4>
              <p className="text-sm text-primary/80 leading-relaxed">
                En réduisant le poids de nos bundles applicatifs et en propulsant l&apos;ensemble de nos livrables sur le réseau mondial de serveurs Cloudflare Workers, nous offrons un affichage instantané ([À CONFIRMER]), empêchant les mobinautes de quitter votre site.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">
                4. Conformité &amp; Protection des Données
              </h4>
              <p className="text-sm text-primary/80 leading-relaxed">
                Chacune de nos conceptions respecte scrupuleusement les exigences de la norme WCAG 2.2 AA. Nous configurons nativement Google Consent Mode v2, protégeant ainsi la confidentialité de vos utilisateurs tout en maintenant un suivi analytique rigoureux.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="light">
        <Hairline />
        {caseStudies.map((study) => {
          const industry = study.frIndustry;
          const topicName = study.frTopicName;
          const scenario = study.frBusinessScenario;
          const kpi = study.frRecommendedKPIs[0];

          return (
            <div key={study.frSlug}>
              <article className="py-10 md:py-12 grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4">
                  <div className="aspect-[16/10] bg-bg-alt overflow-hidden border border-border-subtle rounded-sm">
                    <ImageWithSkeleton
                      src={study.heroImage}
                      imageName={getImageName(study.slug)}
                      alt={topicName}
                      width={400}
                      height={250}
                      loading="lazy"
                      className="w-full h-full"
                      imgClassName="object-cover"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                  </div>
                </div>

                <div className="md:col-span-8 max-w-[68ch]">
                  <p className="text-sm font-medium text-accent mb-2">{industry}</p>
                  <h2 className="font-serif text-[28px] leading-snug text-primary mb-3">
                    <Link to={`/realisations/${study.frSlug}`}>{topicName}</Link>
                  </h2>
                  <p className="text-primary/80 leading-relaxed mb-5">{scenario}</p>
                  <p className="text-sm text-primary/70">
                    <span className="font-medium text-primary">Cible métrique indicative :</span>{" "}
                    <span className="tabular-nums">{kpi.metric}</span>
                  </p>
                </div>
              </article>
              <Hairline />
            </div>
          );
        })}
      </Section>
    </div>
  );
}
