import React from 'react';
import Callout from '../../../components/Callout';
import SEO from '../../../components/SEO';
import { buildServiceProviderSchema } from '../../../components/SEO/StructuredData';
import RelatedExpertiseSection from '../../../components/RelatedExpertiseSection';
import { getMatrixLinksForService } from '../../../data/matrixRelations';
import Button from '../../../components/ui/Button';
import Section from '../../../components/ui/Section';
import Hairline from '../../../components/ui/Hairline';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MetaAdsFR() {
  const faqs = [
    {
      q: "Quel budget publicitaire prévoir sur Meta Ads pour un hôtel ou un riad au Maroc ?",
      a: "Pour un riad ou un petit hôtel utilisant Meta Ads en reciblage et acquisition ciblée, prévoyez un budget média de départ de 3 000 à 6 000 MAD/mois payé directement à Meta, en complément de nos honoraires fixes dès 4 000 MAD/mois (0 % de commission sur votre budget média). Pour un plan combiné Google Ads + Meta Ads, consultez notre page dédiée au Marketing Digital Hôtelier.",
    },
    {
      q: "Quelle est la différence entre booster une publication et piloter le Meta Ads Manager ?",
      a: "Le bouton « Booster la publication » optimise les mentions J'aime sans suivi du tunnel de réservation. Notre gestion sur Meta Ads Manager s'appuie sur le Pixel Meta, l'API Conversions (CAPI) et votre moteur PMS pour recibler les visiteurs ayant consulté vos chambres sans finaliser leur séjour.",
    },
    {
      q: "Restons-nous propriétaires de notre Business Manager et de nos données d'audience ?",
      a: "Oui, à 100 %. Nous intervenons via un accès partenaire sécurisé sur votre Meta Business Manager sans jamais détenir vos identifiants personnels, avec un préavis simple de 15 jours.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Gestion Publicités Meta Ads (Instagram & Facebook) pour Hôtels",
    serviceType: "Meta Ads pour Hôtels et Riads",
    description:
      "Campagnes Instagram et Facebook orientées réservations directes pour hôtels et riads au Maroc dès 4 000 MAD/mois d'honoraires fixes (0 % commission média).",
    provider: buildServiceProviderSchema(),
    areaServed: [
      { "@type": "Country", name: "Morocco" },
      { "@type": "Country", name: "Worldwide" },
    ],
    url: "https://urunk.com/services/gestion-publicites-meta",
    offers: {
      "@type": "Offer",
      price: "4000",
      priceCurrency: "MAD",
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
        title="Publicité Meta Ads Hôtels & Riads Maroc | Urunk"
        description="Gestion de campagnes Instagram et Facebook pour hôtels et riads au Maroc : acquisition visuelle, reciblage PMS et honoraires fixes dès 4 000 MAD/mois."
        schema={[serviceSchema, faqSchema]}
      />

      {/* Editorial Hero */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-4xl">
          <p className="text-sm text-bg-light/75 mb-4">Publicité sur les réseaux sociaux</p>
          <h1 className="font-serif text-bg-light mb-6 text-balance">
            Publicité Meta Ads pour hôtels et riads
          </h1>
          <p className="text-lg md:text-xl text-bg-light/85 mb-10 max-w-[65ch] leading-relaxed">
            Ne laissez plus partir vos futurs clients. Inspirez les voyageurs sur Facebook et Instagram, puis reciblez-les jusqu'à ce qu'ils réservent.
          </p>
          <div className="max-w-3xl mb-10">
            <Callout variant="dark">
              <strong className="text-bg-light font-semibold">Ce que nous faisons :</strong> Urunk pilote vos campagnes Meta (Facebook &amp; Instagram) dès 4 000 MAD/mois d'honoraires fixes (0 % de marge sur votre budget média). Vous cherchez une <strong className="text-bg-light font-semibold">stratégie globale combinant SEO hôtelier, Google Ads, Meta Ads et les budgets mensuels recommandés au Maroc</strong> ? Consultez notre page pilier{' '}
              <Link to="/marketing-digital-hotelier">
                Marketing Digital Hôtelier au Maroc
              </Link>.
            </Callout>
          </div>
          <Button href="/contact" variant="primary">
            Demander un audit publicitaire
          </Button>
        </div>
      </Section>

      {/* Problem Section */}
      <Section tone="alt">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-primary mb-6 text-balance">
              Faites-vous simplement du « boost de publication » ?
            </h2>
            <div className="space-y-4 text-primary/85 leading-relaxed max-w-[65ch]">
              <p>
                De nombreux propriétaires d'hôtels appuient sur le bouton « Booster la publication » sur Instagram dans l'espoir d'obtenir des réservations. Mais les « j'aime » ne payent pas les factures. Ce bouton est conçu pour générer de l'engagement, pas du chiffre d'affaires.
              </p>
              <p>
                Un véritable retour sur investissement nécessite le Meta Ads Manager. Nous construisons des entonnoirs complets : les audiences froides découvrent vos meilleures vidéos, les audiences tièdes explorent vos équipements, et les audiences chaudes (qui ont visité votre page de réservation) reçoivent l'incitation finale pour réserver directement.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 border border-border-subtle bg-bg-card p-8 rounded-sm">
            <h3 className="font-serif text-primary pb-4 mb-6 border-b border-border-subtle">
              Erreurs courantes sur Meta Ads :
            </h3>
            <div className="divide-y divide-border-subtle text-sm text-primary/85">
              <p className="py-3.5 pt-0 m-0">Booster des publications au lieu d'utiliser des campagnes de conversion</p>
              <p className="py-3.5 m-0">Oublier d'installer le Pixel Meta pour le retargeting</p>
              <p className="py-3.5 m-0">Utiliser des visuels statiques et chargés au lieu de vidéos verticales fluides</p>
              <p className="py-3.5 pb-0 m-0">Diffuser la même publicité à tout le monde sans segmenter la maturité du prospect</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Ce qui est inclus */}
      <Section tone="light">
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-primary text-balance">
            Stratégie sociale à entonnoir complet.
          </h2>
        </div>

        <div>
          <Hairline />
          <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">01</div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-primary m-0">Ciblage d'Audience</h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-primary/80 leading-relaxed m-0 max-w-[65ch]">
                Nous ciblons les voyageurs ayant manifesté un intérêt pour votre destination en créant des audiences similaires basées sur vos clients passés.
              </p>
            </div>
          </div>
          <Hairline />
          <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">02</div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-primary m-0">Création &amp; Rédaction</h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-primary/80 leading-relaxed m-0 max-w-[65ch]">
                Nous concevons des visuels captivants et des textes persuasifs qui transmettent l'émotion et l'expérience unique de votre établissement.
              </p>
            </div>
          </div>
          <Hairline />
          <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
            <div className="md:col-span-1 text-sm font-medium text-accent tabular-nums">03</div>
            <div className="md:col-span-4">
              <h3 className="font-serif text-primary m-0">Retargeting Puissant</h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-primary/80 leading-relaxed m-0 max-w-[65ch]">
                Nous configurons le Pixel afin d'accompagner les utilisateurs ayant quitté votre site sans réserver, leur rappelant d'inscrire leur séjour.
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
                  <h3 className="font-serif text-primary mb-2">Pixel Meta &amp; Analyse des Contenus</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    Nous vérifions l'installation du Pixel Meta sur votre site et sélectionnons vos meilleures photos/vidéos.
                  </p>
                </div>
              </div>
              <Hairline />
              <div className="py-6 flex gap-6 items-baseline">
                <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">2</span>
                <div>
                  <h3 className="font-serif text-primary mb-2">Conception des Campagnes &amp; Visuels</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    Nous préparons les éléments graphiques, rédigeons les textes et paramétrons les entonnoirs dans Ads Manager.
                  </p>
                </div>
              </div>
              <Hairline />
              <div className="py-6 flex gap-6 items-baseline">
                <span className="font-serif text-2xl text-accent shrink-0 tabular-nums w-8">3</span>
                <div>
                  <h3 className="font-serif text-primary mb-2">Optimisation Mensuelle</h3>
                  <p className="text-primary/80 leading-relaxed m-0 max-w-[60ch]">
                    Nous renouvelons les annonces fatiguées et réallouons le budget vers les campagnes générant les réservations les plus rentables.
                  </p>
                </div>
              </div>
              <Hairline />
            </div>
          </div>

          <div className="lg:col-span-5 bg-bg-card p-8 md:p-10 rounded-sm border border-border-subtle space-y-5">
            <p className="text-sm text-accent font-medium m-0">Frais de gestion</p>
            <h3 className="font-serif text-3xl text-primary tabular-nums m-0">
              À partir de 4 000 MAD<span className="text-lg text-primary/70">/mois</span>
            </h3>
            <p className="text-primary/80 leading-relaxed m-0">
              Hors budget publicitaire payé directement à Meta. Sans engagement longue durée.
            </p>
            <Button href="/contact" variant="dark" className="w-full">
              Développer mes réservations
            </Button>
          </div>
        </div>
      </Section>

      <RelatedExpertiseSection
        kicker="Acquisition régionale et social ads"
        title="Publicité Meta Ads & Réservation Directe par Ville au Maroc"
        subtitle="Découvrez nos dispositifs d'acquisition Instagram, Facebook, Google Ads et réservation directe à Marrakech, Casablanca et Agadir."
        links={getMatrixLinksForService('meta-ads', 'fr')}
        isFrench={true}
        bgVariant="default"
      />

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
            Prêt à transformer l'attention en réservations ?
          </h2>
          <p className="text-lg text-bg-light/85 mb-8">
            Construisons un entonnoir sur les réseaux sociaux rentable pour votre établissement.
          </p>
          <Button href="/contact" variant="primary">
            Obtenir une proposition de campagne
          </Button>
        </div>
      </Section>
    </div>
  );
}
