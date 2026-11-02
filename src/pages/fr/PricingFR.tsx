import React from "react";
import Callout from "../../components/Callout";
import SEO from "../../components/SEO";
import { buildServiceProviderSchema } from "../../components/SEO/StructuredData";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { pricingCopyFR } from "../../data/copy/pricing.fr";
import Section from "../../components/ui/Section";
import Button from "../../components/ui/Button";
import Hairline from "../../components/ui/Hairline";

export default function PricingFR() {
  const { seo, hero, callout, packages, faq, cta } = pricingCopyFR;
  const bundleKicker =
    packages.bundle.badge.charAt(0) + packages.bundle.badge.slice(1).toLowerCase();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tarifs et Packages Urunk",
    "provider": buildServiceProviderSchema(),
    "areaServed": "Morocco",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catalogue d'Offres Urunk",
      "itemListElement": [
        {
          "@type": "Offer",
          "price": "12000",
          "priceCurrency": "MAD",
          "itemOffered": {
            "@type": "Service",
            "name": "Création de Site Web",
            "description": "Création de site web sur-mesure pour hôtels et riads."
          }
        },
        {
          "@type": "Offer",
          "price": "4000",
          "priceCurrency": "MAD",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & Référencement Local",
            "description": "Optimisation SEO et visibilité Google Maps pour l'hôtellerie."
          }
        },
        {
          "@type": "Offer",
          "price": "4000",
          "priceCurrency": "MAD",
          "itemOffered": {
            "@type": "Service",
            "name": "Gestion Google Ads",
            "description": "Campagnes publicitaires Google de haute intention."
          }
        },
        {
          "@type": "Offer",
          "price": "4000",
          "priceCurrency": "MAD",
          "itemOffered": {
            "@type": "Service",
            "name": "Gestion Meta Ads",
            "description": "Publicités Facebook et Instagram pour réservations directes."
          }
        },
        {
          "@type": "Offer",
          "price": "3000",
          "priceCurrency": "MAD",
          "itemOffered": {
            "@type": "Service",
            "name": "Gestion TripAdvisor Ads",
            "description": "Optimisation TripAdvisor et comparateurs d'hôtels."
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.items.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  const rateSchedule = [
    {
      name: "Création de Site Web",
      note: "Création de site web sur-mesure pour hôtels et riads",
      rate: "12 000 MAD"
    },
    {
      name: "SEO & Référencement Local",
      note: "Optimisation SEO et visibilité Google Maps pour l'hôtellerie",
      rate: "4 000 MAD/mois"
    },
    {
      name: "Gestion Google Ads",
      note: "Campagnes publicitaires Google de haute intention",
      rate: "4 000 MAD/mois"
    },
    {
      name: "Gestion Meta Ads",
      note: "Publicités Facebook et Instagram pour réservations directes",
      rate: "4 000 MAD/mois"
    },
    {
      name: "Gestion TripAdvisor Ads",
      note: "Optimisation TripAdvisor et comparateurs d'hôtels",
      rate: "3 000 MAD/mois"
    }
  ];

  return (
    <div className="w-full bg-bg-light text-primary">
      <SEO
        title={seo.title}
        description={seo.description}
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero & Summary Callout */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-4xl">
          <p className="text-sm font-medium text-bg-light/75 mb-4">
            {hero.badge}
          </p>
          <h1 className="font-serif text-bg-light mb-6 text-balance">
            {hero.title}{hero.titleItalic}
          </h1>
          <p className="text-lg md:text-xl text-bg-light/85 mb-10 max-w-[62ch] leading-relaxed">
            {hero.subtext}
          </p>
          <div className="max-w-3xl">
            <Callout variant="dark">
              <strong className="text-bg-light font-semibold">{callout.title}</strong>{" "}
              {callout.body}
            </Callout>
          </div>
        </div>
      </Section>

      {/* Editorial Pricing: One Featured Package Card + Dotted-Leader Ledger */}
      <Section tone="light">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Single Bordered Package Card */}
          <div className="lg:col-span-5 bg-bg-card border border-border-subtle rounded-sm p-8 md:p-10">
            <p className="text-sm font-medium text-accent mb-2">{bundleKicker}</p>
            <h2 className="font-serif text-[32px] leading-tight text-primary mb-3">
              {packages.bundle.title}
            </h2>
            <p className="font-serif text-2xl text-accent tabular-nums mb-2">
              {packages.bundle.price}
            </p>
            <p className="text-sm text-primary/70 mb-8">
              {packages.bundle.subtitle}
            </p>
            <Hairline className="mb-6" />
            <ul className="space-y-3 mb-8">
              {packages.bundle.features.map((feature, i) => (
                <li key={i} className="text-sm text-primary/85 leading-relaxed">
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant="primary" href="/contact" className="w-full">
              {packages.bundle.cta}
            </Button>
          </div>

          {/* Unboxed Ledger Rows with Dotted Leaders */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <h2 className="font-serif text-[28px] leading-tight text-primary shrink-0">
                  {packages.web.title}
                </h2>
                <span
                  className="flex-1 border-b border-dotted border-border-subtle"
                  aria-hidden="true"
                />
                <span className="font-medium text-accent tabular-nums shrink-0">
                  {packages.web.price}
                </span>
              </div>
              <p className="text-sm text-primary/70 mb-4">{packages.web.subtitle}</p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-primary/80 mb-5">
                {packages.web.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link to="/contact" className="text-sm font-medium">
                {packages.web.cta}
              </Link>
            </div>

            <Hairline />

            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <h2 className="font-serif text-[28px] leading-tight text-primary shrink-0">
                  {packages.ads.title}
                </h2>
                <span
                  className="flex-1 border-b border-dotted border-border-subtle"
                  aria-hidden="true"
                />
                <span className="font-medium text-accent tabular-nums shrink-0">
                  {packages.ads.price}
                  {packages.ads.priceSuffix}
                </span>
              </div>
              <p className="text-sm text-primary/70 mb-4">{packages.ads.subtitle}</p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-primary/80 mb-5">
                {packages.ads.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link to="/contact" className="text-sm font-medium">
                {packages.ads.cta}
              </Link>
            </div>

            <Hairline />

            <div>
              <h3 className="font-serif text-[26px] text-primary mb-6">
                Grille des prestations individuelles
              </h3>
              <div className="space-y-4">
                {rateSchedule.map((row, idx) => (
                  <div key={idx}>
                    <div className="flex items-baseline gap-3">
                      <span className="font-medium text-primary">{row.name}</span>
                      <span
                        className="flex-1 border-b border-dotted border-border-subtle"
                        aria-hidden="true"
                      />
                      <span className="tabular-nums font-medium text-primary shrink-0">
                        {row.rate}
                      </span>
                    </div>
                    <p className="text-xs text-primary/65 mt-1">{row.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Investment ROI Breakdown */}
      <Section tone="alt" className="border-t border-border-subtle">
        <div className="max-w-5xl">
          <div className="mb-12 max-w-[68ch]">
            <p className="text-accent font-medium text-sm mb-2">
              Analyse Financière &amp; R.O.I.
            </p>
            <h2 className="font-serif text-primary mb-3 text-balance">
              Le Modèle Financier de la Réservation Directe
            </h2>
            <p className="text-primary/75">
              Comprendre l&apos;impact à long terme de votre investissement dans l&apos;ingénierie et le marketing digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-primary/85 leading-relaxed">
            <div className="max-w-[68ch]">
              <h3 className="font-serif text-primary mb-4">
                Réservations Directes vs Canaux Tiers (OTA)
              </h3>
              <p className="mb-4">
                Gérer un établissement de prestige au Maroc (Casablanca, Marrakech, Rabat, Agadir) sans plateforme de réservation directe optimisée s&apos;avère extrêmement coûteux. Les agences de voyage en ligne (OTA) facturent [À CONFIRMER] de commission sur chaque séjour. Si votre hôtel ou riad de luxe génère 200 000 MAD de chiffre d&apos;affaires mensuel, vous pouvez perdre jusqu&apos;à 50 000 MAD en commissions chaque mois.
              </p>
              <p>
                Nos sites web haute performance, débutant à 12,000 MAD (≈1 100 €), sont conçus pour capter ce trafic directement. En intégrant des moteurs de réservation (PMS) fluides et en simplifiant le parcours de paiement, nos clients constatent une hausse moyenne de +40 % de leurs réservations directes, récupérant des milliers de dirhams de marges chaque mois.
              </p>
            </div>
            <div className="max-w-[68ch]">
              <h3 className="font-serif text-primary mb-4">
                Indicateurs de Performance &amp; Calendrier de Déploiement
              </h3>
              <p className="mb-4">
                Chacune de nos solutions s&apos;accompagne d&apos;engagements clairs. Notre calendrier de conception et de développement s&apos;étend sur 4 à 6 semaines, de la phase de planification stratégique jusqu&apos;au lancement technique final. Combinée avec notre gestion mensuelle des campagnes d&apos;acquisition (à partir de 4 000 MAD/mois), les établissements obtiennent une réduction moyenne de -35 % de leur coût par acquisition de prospect.
              </p>
              <p>
                Pour garantir votre sérénité absolue, toutes nos créations incluent une garantie technique de 90 jours, associée à un préavis de résiliation de 15 jours sur nos prestations d&apos;accompagnement marketing mensuel. Cela vous permet d&apos;ajuster ou d&apos;augmenter votre budget publicitaire au rythme de votre croissance.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="light" className="border-t border-border-subtle">
        <div className="max-w-[68ch]">
          <h2 className="font-serif text-primary mb-10">{faq.title}</h2>
          <div className="border-t border-border-subtle">
            {faq.items.map((item, i) => (
              <details key={i} className="group border-b border-border-subtle">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 pr-2 text-lg text-primary">
                  <span>{item.q}</span>
                  <span className="transition-transform group-open:rotate-180 text-accent shrink-0 ml-4">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="text-primary/80 pb-6 pr-4 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="dark">
        <div className="max-w-2xl">
          <h2 className="font-serif text-bg-light mb-4 text-balance">{cta.title}</h2>
          <p className="text-lg text-bg-light/85 mb-8 leading-relaxed">
            {cta.subtitle}
          </p>
          <Button variant="dark" href="/contact">
            {cta.button}
          </Button>
        </div>
      </Section>
    </div>
  );
}
