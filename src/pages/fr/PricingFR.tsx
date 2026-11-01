import React from "react";
import Callout from "../../components/Callout";
import SEO from "../../components/SEO";
import { buildServiceProviderSchema } from "../../components/SEO/StructuredData";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { pricingCopyFR } from "../../data/copy/pricing.fr";

export default function PricingFR() {
  const { seo, hero, callout, packages, faq, cta } = pricingCopyFR;
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

  return (
    <div className="w-full">
      <SEO
        title={seo.title}
        description={seo.description}
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero & AI Answer Block */}
      <section className="bg-primary pt-32 pb-16 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            {hero.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            {hero.title}<span className="text-yellow-400 italic">{hero.titleItalic}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            {hero.subtext}
          </p>
          <div className="max-w-3xl mx-auto text-left">
            <Callout variant="dark">
              <strong className="text-yellow-400 font-semibold">{callout.title}</strong> {callout.body}
            </Callout>
          </div>
        </div>
      </section>

      {/* Pricing Grids */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Website Design */}
          <div className="bg-white border border-primary/10 rounded-2xl p-8 shadow-sm flex flex-col">
            <h2 className="text-xl font-bold mb-2">{packages.web.title}</h2>
            <p className="text-accent font-semibold text-3xl mb-2">
              {packages.web.price}
            </p>
            <p className="text-sm text-primary/70 mb-8">
              {packages.web.subtitle}
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              {packages.web.features.map((feature, i) => (
                <li key={i} className="flex gap-3 text-sm text-primary/80">
                  <Check size={18} className="text-accent shrink-0" /> {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="w-full block text-center bg-primary text-white py-3.5 rounded-xl font-medium hover:bg-primary-light transition-colors mt-auto"
            >
              {packages.web.cta}
            </Link>
          </div>

          {/* Bundle (Best Value) */}
          <div className="bg-primary text-white border-2 border-yellow-400 rounded-2xl p-8 shadow-md relative transform md:-translate-y-4 flex flex-col">
            <div className="absolute top-0 right-0 bg-yellow-400 text-primary text-xs font-bold px-4 py-1.5 rounded-bl-xl">
              {packages.bundle.badge}
            </div>
            <h2 className="text-xl font-bold mb-2">
              {packages.bundle.title}
            </h2>
            <p className="text-yellow-400 font-semibold text-3xl mb-2">{packages.bundle.price}</p>
            <p className="text-sm text-white/60 mb-8">
              {packages.bundle.subtitle}
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              {packages.bundle.features.map((feature, i) => (
                <li key={i} className="flex gap-3 text-sm text-white/90">
                  <Check size={18} className="text-yellow-400 shrink-0" /> {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="w-full block text-center bg-yellow-400 text-primary py-3.5 rounded-xl font-bold hover:bg-yellow-500 transition-colors mt-auto shadow-lg"
            >
              {packages.bundle.cta}
            </Link>
          </div>

          {/* Ad Management */}
          <div className="bg-white border border-primary/10 rounded-2xl p-8 shadow-sm flex flex-col">
            <h2 className="text-xl font-bold mb-2">{packages.ads.title}</h2>
            <p className="text-accent font-semibold text-3xl mb-2">
              {packages.ads.price}
              <span className="text-base font-normal">{packages.ads.priceSuffix}</span>
            </p>
            <p className="text-sm text-primary/70 mb-8">
              {packages.ads.subtitle}
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              {packages.ads.features.map((feature, i) => (
                <li key={i} className="flex gap-3 text-sm text-primary/80">
                  <Check size={18} className="text-accent shrink-0" /> {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="w-full block text-center border-2 border-primary text-primary py-3.5 rounded-xl font-medium hover:bg-primary/5 transition-colors mt-auto"
            >
              {packages.ads.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Investment ROI Breakdown */}
      <section className="py-24 px-6 bg-primary/5 border-t border-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Analyse Financière & R.O.I.</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2">Le Modèle Financier de la Réservation Directe</h2>
            <p className="text-primary/70 font-light mt-3">Comprendre l'impact à long terme de votre investissement dans l'ingénierie et le marketing digital.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-primary/80 leading-relaxed font-light text-sm">
            <div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4">Réservations Directes vs Canaux Tiers (OTA)</h3>
              <p className="mb-4">
                Gérer un établissement de prestige au Maroc (Casablanca, Marrakech, Rabat, Agadir) sans plateforme de réservation directe optimisée s'avère extrêmement coûteux. Les agences de voyage en ligne (OTA) facturent entre 15 % et 25 % de commission sur chaque séjour. Si votre hôtel ou riad de luxe génère 200 000 MAD de chiffre d'affaires mensuel, vous pouvez perdre jusqu'à 50 000 MAD en commissions chaque mois.
              </p>
              <p>
                Nos sites web haute performance, débutant à 12,000 MAD (≈1 100 €), sont conçus pour capter ce trafic directement. En intégrant des moteurs de réservation (PMS) fluides et en simplifiant le parcours de paiement, nos clients constatent une hausse moyenne de +40 % de leurs réservations directes, récupérant des milliers de dirhams de marges chaque mois.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4">Indicateurs de Performance & Calendrier de Déploiement</h3>
              <p className="mb-4">
                Chacune de nos solutions s'accompagne d'engagements clairs. Notre calendrier de conception et de développement s'étend sur 4 à 6 semaines, de la phase de planification stratégique jusqu'au lancement technique final. Combinée avec notre gestion mensuelle des campagnes d'acquisition (à partir de 4 000 MAD/mois), les établissements obtiennent une réduction moyenne de -35 % de leur coût par acquisition de prospect.
              </p>
              <p>
                Pour garantir votre sérénité absolue, toutes nos créations incluent une garantie technique de 90 jours, associée à un préavis de résiliation de 15 jours sur nos prestations d'accompagnement marketing mensuel. Cela vous permet d'ajuster ou d'augmenter votre budget publicitaire au rythme de votre croissance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-bg-alt border-y border-primary/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            {faq.title}
          </h2>
          <div className="flex flex-col border-t border-primary/20">
            {faq.items.map((item, i) => (
              <details key={i} className="group border-b border-primary/20">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-6 pr-4 text-lg">
                  <span>{item.q}</span>
                  <span className="transition group-open:rotate-180 text-accent">
                    <ChevronDown size={24} />
                  </span>
                </summary>
                <div className="text-primary/70 pb-6 pr-4 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          {cta.title}
        </h2>
        <p className="text-xl text-primary/80 mb-8">
          {cta.subtitle}
        </p>
        <Link
          to="/contact"
          className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 transition-colors"
        >
          {cta.button} <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
