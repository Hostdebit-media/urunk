import React from "react";
import Callout from "../../../components/fr/CalloutFR";
import SEO from "../../../components/SEO";
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";


  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Création de sites web pour hôtels",
    "description": "Sites WordPress sur-mesure conçus spécifiquement pour les hôtels, riads et voyagistes afin d'augmenter les réservations directes.",
    "provider": {
      "@type": "Organization",
      "name": "Urunk"
    },
    "areaServed": [
      { "@type": "Country", "name": "Morocco" },
      { "@type": "Country", "name": "Worldwide" }
    ],
    "url": "https://urunk.com/services/creation-site-web"
  };

export default function WebsiteDesignFR() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Création de sites web pour hôtels et riads",
    provider: {
      "@type": "Organization",
      name: "Urunk",
      url: "https://urunk.com",
    },
    description:
      "Sites WordPress rapides et optimisés pour la conversion d'hôtels et riads au Maroc.",
  };

  const faqs = [
    {
      q: "Combien de temps faut-il pour créer un site web hôtelier ?",
      a: "La création complète d'un site web sur-mesure pour un hôtel ou un riad nécessite en moyenne 4 à 6 semaines. Ce délai inclut toutes les phases de notre processus rigoureux : depuis la phase de découverte et la définition de la stratégie d'arborescence, en passant par le maquettage UI/UX personnalisé, l'écriture de contenus optimisés pour le SEO, jusqu'à l'intégration technique avec votre PMS et les phases de tests intensifs avant la mise en ligne.",
    },
    {
      q: "Intégrez-vous mon moteur de réservation actuel ?",
      a: "Absolument. Nous concevons nos architectures pour qu'elles s'intègrent de manière transparente avec n'importe quel Property Management System (PMS) et Channel Manager majeur du marché, notamment Cloudbeds, SiteMinder, Guesty, Mews, Sirvoy, Little Hotelier et Opera. La synchronisation des tarifs, de la disponibilité en temps réel, des restrictions de séjour et le traitement sécurisé des paiements via passerelle (comme Stripe ou CMI au Maroc) sont entièrement automatisés.",
    },
    {
      q: "Le site web sera-t-il adapté aux mobiles et rapide sur les connexions 4G locales ?",
      a: "Oui. Plus de 70 % des voyageurs effectuent leurs recherches et réservations d'hébergement depuis un smartphone, souvent en déplacement. Nos sites sont développés selon une philosophie 'Mobile-First'. Nous optimisons chaque élément technique (compression d'images au format AVIF/WebP, chargement différé ou lazy-loading, code JavaScript asynchrone) pour garantir un affichage ultra-rapide sous la barre des 1,5 seconde, même sur les réseaux cellulaires instables.",
    },
    {
      q: "À qui appartiendra le site internet une fois qu'il sera mis en ligne ?",
      a: "Vous êtes et restez le propriétaire exclusif à 100 % de votre site web, de son nom de domaine, de son hébergement, de l'ensemble de ses fichiers sources, de ses bases de données et des visuels créés. Contrairement à de nombreuses agences hôtelières qui verrouillent leurs clients avec des systèmes propriétaires ou des abonnements captifs, nous vous livrons un site autonome basé sur les standards ouverts de WordPress ou du code React propre.",
    },
    {
      q: "Le site hôtelier sera-t-il disponible en plusieurs langues (français, anglais, espagnol) ?",
      a: "Oui, la dimension multilingue est un pilier fondamental de notre stratégie pour capter une clientèle touristique internationale haut de gamme. Nous mettons en œuvre des traductions fluides avec gestion des attributs de langue HTML dynamiques (lang tags) pour le SEO international. Vos visiteurs peuvent basculer instantanément d'une langue à une autre, et chaque version linguistique est parfaitement optimisée pour être indexée et visible sur les versions locales de Google (Google.fr, Google.co.uk, Google.de, etc.).",
    },
  ];

  return (
    <div className="w-full">
      <SEO
        title="Création de sites web pour hôtels et riads au Maroc | Urunk"
        description="Ne perdez plus vos réservations directes au profit des OTA. Nous créons des sites WordPress rapides et adaptés aux mobiles pour hôtels et riads."
        schema={[schemaMarkup, serviceSchema]}
      />

      {/* Hero & AI Answer Block */}
      <section className="relative pt-32 pb-20 px-6 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-accent text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            Transformation Digitale
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Création de sites web d'hôtels
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light">
            Transformez vos visiteurs en clients grâce à un site WordPress
            sur-mesure, rapide et mobile-first, conçu pour contourner les
            commissions des OTA.
          </p>
          <div className="max-w-3xl mx-auto mb-10 text-left">
            <Callout variant="dark">
              <strong>Ce que nous faisons :</strong> Urunk conçoit et développe
              des sites WordPress sur-mesure pour hôtels, riads et voyagistes au
              Maroc et à l'international. Nos sites sont optimisés pour les
              mobiles, se chargent en moins de 3 secondes et s'intègrent
              directement avec votre système de gestion (PMS) pour réduire votre
              dépendance envers Booking.com et Expedia.
            </Callout>
          </div>
          <Link
            to="/contact"
            className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
          >
            Demander un devis gratuit <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Pourquoi les sites d'hôtels classiques échouent à convertir
            </h2>
            <p className="text-primary/80 mb-6 leading-relaxed">
              La plupart des sites d'hôtels commettent les mêmes erreurs :
              lenteur au chargement, galeries photos mal adaptées au mobile et
              absence de bouton de réservation directe visible.
            </p>
            <p className="text-primary/80 leading-relaxed">
              Lorsqu'un visiteur a des difficultés à vérifier vos
              disponibilités, il retourne immédiatement sur Booking.com ou
              Expedia. Et vous perdez 15 % à 25 % de votre marge en commission.
            </p>
          </div>
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
            <h3 className="text-xl font-bold mb-4">Ce que nous corrigeons :</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-primary/80">
                <Check size={20} className="text-accent shrink-0" /> Bouton «
                Réserver » omniprésent sur mobile
              </li>
              <li className="flex gap-3 text-primary/80">
                <Check size={20} className="text-accent shrink-0" /> Intégration
                WhatsApp directe pour les questions rapides
              </li>
              <li className="flex gap-3 text-primary/80">
                <Check size={20} className="text-accent shrink-0" /> Vitesse de
                chargement ultra-rapide (inférieure à 3 secondes)
              </li>
              <li className="flex gap-3 text-primary/80">
                <Check size={20} className="text-accent shrink-0" /> Intégration
                fluide de votre moteur de réservation (PMS)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Performance & Architecture Deep-Dive */}
      <section className="py-20 px-6 bg-white border-y border-primary/10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider font-mono">Spécifications Techniques</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2">Architecture Web Hôtelière & Core Web Vitals</h2>
            <p className="text-primary/70 font-light text-sm mt-3 leading-relaxed">
              La lenteur d'un site web est la première cause d'abandon au profit des OTA. Nos développements répondent aux critères de vitesse les plus stricts de Google.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center space-y-2">
              <div className="text-3xl font-bold text-accent font-serif">&lt; 1,2s</div>
              <h3 className="font-bold text-primary text-sm">LCP (Largest Contentful Paint)</h3>
              <p className="text-xs font-light text-primary/70">Chargement ultra-rapide des photos haute résolution de vos chambres sans perte de qualité visuelle.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center space-y-2">
              <div className="text-3xl font-bold text-accent font-serif">0,00</div>
              <h3 className="font-bold text-primary text-sm">CLS (Cumulative Layout Shift)</h3>
              <p className="text-xs font-light text-primary/70">Stabilité visuelle parfaite. Aucun décalage d'élément pendant la consultation du moteur de réservation.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center space-y-2">
              <div className="text-3xl font-bold text-accent font-serif">&lt; 80ms</div>
              <h3 className="font-bold text-primary text-sm">INP (Interaction to Next Paint)</h3>
              <p className="text-xs font-light text-primary/70">Réactivité tactile instantanée lors de la sélection des dates de séjour et de la vérification des disponibilités.</p>
            </div>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 text-center space-y-2">
              <div className="text-3xl font-bold text-accent font-serif">100 / 100</div>
              <h3 className="font-bold text-primary text-sm">Score Mobile Google Lighthouse</h3>
              <p className="text-xs font-light text-primary/70">Optimisation spécifique pour les réseaux mobiles 4G/5G empruntés par les voyageurs en déplacement.</p>
            </div>
          </div>

          {/* New Technologies Section */}
          <div className="pt-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-accent font-semibold text-xs uppercase tracking-wider font-mono">Modern Tech Stack</span>
              <h3 className="text-2xl font-serif font-bold text-primary mt-1">Technologies de Pointe & Éco-conception</h3>
              <p className="text-primary/70 font-light text-xs mt-2 leading-relaxed">
                Nous combinons les meilleurs outils modernes du web pour offrir à vos clients une expérience fluide, hautement sécurisée et éco-responsable.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <h4 className="font-bold text-primary text-base mb-2">WordPress ou Headless React</h4>
                <p className="text-xs text-primary/80 font-light leading-relaxed">
                  Au choix, un CMS WordPress sur-mesure pour une autonomie complète de vos équipes, ou une architecture Headless découpée sous React / Vite propulsée sur le réseau Edge pour une vitesse de réponse instantanée de l'ordre de la milliseconde.
                </p>
              </div>
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <h4 className="font-bold text-primary text-base mb-2">Tailwind CSS & Animations Motion</h4>
                <p className="text-xs text-primary/80 font-light leading-relaxed">
                  L'utilisation de Tailwind CSS nous permet de maintenir un bundle de styles extrêmement léger, tandis que les transitions et micro-interactions via motion/react créent un sentiment d'élégance et de luxe indispensable pour l'hôtellerie boutique.
                </p>
              </div>
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <h4 className="font-bold text-primary text-base mb-2">Hébergement Cloudflare Workers</h4>
                <p className="text-xs text-primary/80 font-light leading-relaxed">
                  Vos pages web et vos ressources statiques sont déployées au plus près de vos visiteurs internationaux sur le réseau mondial de Cloudflare. Cela garantit un temps d'accès minimal, que vos clients réservent depuis Paris, Londres ou New York.
                </p>
              </div>
            </div>
          </div>

          {/* Workflow Integration PMS */}
          <div className="grid lg:grid-cols-12 gap-12 items-center pt-8">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-accent font-semibold text-xs uppercase tracking-wider font-mono">Connexion PMS Flawless</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary">Intégration Moteur de Réservation & Synchro PMS</h3>
              <p className="text-primary/80 font-light text-sm leading-relaxed">
                Ne changez pas vos habitudes de gestion. Nous raccordons votre nouveau site web à votre logiciel de gestion hôtelière (PMS) et Channel Manager existant via des widgets sécurisés et des API REST.
              </p>
              <ul className="space-y-3 text-xs text-primary/80 font-light">
                <li className="flex items-center gap-3"><Check size={16} className="text-accent shrink-0" /> <strong>Cloudbeds, Mews, SiteMinder, Sirvoy, Little Hotelier, Opera & Guesty</strong>.</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-accent shrink-0" /> Synchronisation automatique des tarifs, des nuitées minimales et des promotions directes.</li>
                <li className="flex items-center gap-3"><Check size={16} className="text-accent shrink-0" /> Confirmation instantanée par e-mail et enregistrement direct des acomptes bancaires (CMI / Stripe).</li>
              </ul>
            </div>
            <div className="lg:col-span-6 bg-primary text-white p-8 md:p-10 rounded-3xl space-y-6">
              <h3 className="text-xl font-serif font-bold text-accent">Périmètre des Livrables & Garanties</h3>
              <ul className="space-y-3 text-xs text-white/90 font-light">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Investissement Forfaitaire :</strong> À partir de 12 000 MAD (≈1 100 €) pour la création complète du site web sur-mesure.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Délais de Réalisation :</strong> 4 à 6 semaines du cadrage initial au déploiement en production.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Garantie de Croissance :</strong> Engagement de performance sur 90 jours après livraison.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Propriété à 100 % :</strong> Vous êtes propriétaire exclusif du code source, du nom de domaine et du contenu.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Ce qui est inclus dans notre offre.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">
                Design Mobile-First
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Plus de 70 % de vos visiteurs navigueront sur smartphone. Nous
                garantissons une navigation fluide, ergonomique et haut de gamme sur tous les
                écrans de téléphones et de tablettes.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">
                Moteur de Réservation
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Connexion directe avec Cloudbeds, SiteMinder ou votre moteur
                actuel pour permettre des réservations instantanées, des devis personnalisés, et des paiements directs sans intermédiaire.
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-accent">
                Optimisation SEO & Vitesse
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Structure sémantique irréprochable, données structurées JSON-LD hôtelières intégrées et optimisation de vitesse pour un excellent positionnement local sur Google.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Pricing */}
      <section className="py-20 px-6 bg-bg-alt border-b border-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-xs uppercase tracking-wider font-mono">Processus & Approche Budgétaire</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-1">Notre Calendrier & Méthode de Création</h2>
            <p className="text-primary/70 font-light text-sm mt-3 leading-relaxed">
              Nous appliquons un processus de développement rigoureux divisé en phases claires pour garantir un projet livré à temps, sans dérive budgétaire.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-10">
              <div className="relative pl-8 border-l border-primary/10 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-accent border-4 border-bg-alt flex items-center justify-center"></div>
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">Semaines 1-2 : Cadrage Stratégique & Audit</h3>
                  <p className="text-sm text-primary/80 font-light leading-relaxed">
                    Nous définissons vos objectifs de conversion, étudions le positionnement de vos concurrents directs dans votre ville et concevons l'architecture du site (sitemap). Nous créons l'arborescence optimale pour guider l'utilisateur vers la réservation directe en réduisant les frictions.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-accent border-4 border-bg-alt flex items-center justify-center"></div>
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">Semaines 3-4 : Maquettage UI/UX & Rédaction</h3>
                  <p className="text-sm text-primary/80 font-light leading-relaxed">
                    Nos designers élaborent une identité visuelle sur-mesure valorisant le caractère unique de votre hôtel ou riad. En parallèle, nous rédigeons et optimisons les contenus multilingues (français, anglais, etc.) pour plaire à la fois à vos clients et aux algorithmes de recherche Google.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-accent border-4 border-bg-alt flex items-center justify-center"></div>
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">Semaines 5-6 : Développement, Intégration PMS & Lancement</h3>
                  <p className="text-sm text-primary/80 font-light leading-relaxed">
                    Nos développeurs intègrent les maquettes validées avec un code propre et ultra-rapide. Nous raccordons votre moteur de réservation et configurons les API de paiement. Après des tests complets d'affichage sur smartphones, tablettes et ordinateurs, nous configurons les redirections et lançons le site de manière sécurisée.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-10 rounded-3xl border border-primary/10 shadow-sm space-y-6 lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider border border-accent/15">
                Approche Tarifaire
              </span>
              <h3 className="text-3xl font-serif font-bold text-primary">Un Budget Fixe Sans Mauvaise Surprise</h3>
              <p className="text-sm text-primary/80 font-light leading-relaxed">
                Nos tarifs sont présentés sous forme de forfaits forfaitaires tout inclus, sans aucun abonnement captif ou redevance mensuelle obligatoire. Vous savez exactement ce que vous payez dès le premier jour.
              </p>
              <div className="py-4 border-y border-primary/5">
                <div className="text-3xl font-serif font-bold text-accent">À partir de 12 000 MAD</div>
                <p className="text-xs text-primary/60 mt-1">Payable à 50 % à la commande et 50 % à la livraison finale du projet.</p>
              </div>
              <ul className="space-y-2.5 text-xs text-primary/70 font-light">
                <li className="flex items-center gap-2.5"><Check size={14} className="text-accent" /> Analyse technique et sitemap inclus</li>
                <li className="flex items-center gap-2.5"><Check size={14} className="text-accent" /> Intégration d'un PMS / Channel Manager</li>
                <li className="flex items-center gap-2.5"><Check size={14} className="text-accent" /> Optimisation Core Web Vitals (temps de chargement &lt; 2s)</li>
                <li className="flex items-center gap-2.5"><Check size={14} className="text-accent" /> Configuration complète de Google Analytics 4 & GTM</li>
              </ul>
              <Link
                to="/contact"
                className="w-full bg-primary hover:bg-primary-light text-white py-3.5 rounded-xl font-bold transition-all text-center block text-sm"
              >
                Demander un devis sur-mesure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Proof */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Architecture Centrée sur l'Utilisateur
        </h2>
        <p className="text-primary/80 mb-8 max-w-2xl mx-auto">
          Découvrez notre modèle de conception stratégique illustrant comment une mise en page rapide, pensée pour les mobiles et associée à des canaux de messagerie directe, peut optimiser l'engagement digital global et maximiser les ventes directes.
        </p>
        <Link
          to="/realisations/art-house-marrakech"
          className="text-accent hover:text-accent-hover font-medium flex items-center justify-center gap-2 transition-colors"
        >
          Explorer notre cas d'étude Marrakech <ArrowRight size={18} />
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
          Prêt à augmenter vos réservations directes ?
        </h2>
        <p className="text-xl text-primary/80 mb-8">
          Construisons ensemble un site web performant pour votre établissement.
        </p>
        <Link
          to="/contact"
          className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 transition-colors"
        >
          Obtenir mon devis gratuit <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
