import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Search, TrendingUp, Smartphone, Globe, Star, MapPin, Compass, Zap, ShieldCheck, Percent, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageWithSkeleton from '../../components/ImageWithSkeleton';

const ProofSectionFR = lazy(() => import('../../components/fr/HomeFR/ProofSectionFR'));
const SectorsAndHubsFR = lazy(() => import('../../components/fr/HomeFR/SectorsAndHubsFR'));
const PortfolioSectionFR = lazy(() => import('../../components/fr/HomeFR/PortfolioSectionFR'));
const PricingSectionFR = lazy(() => import('../../components/fr/HomeFR/PricingSectionFR'));
const FaqSectionFR = lazy(() => import('../../components/fr/HomeFR/FaqSectionFR'));
const BottomFormSectionFR = lazy(() => import('../../components/fr/HomeFR/BottomFormSectionFR'));

function SectionSkeleton() {
  return (
    <div className="py-20 flex justify-center items-center min-h-[400px]">
      <div className="w-8 h-8 border-4 border-primary/20 border-t-accent rounded-full animate-spin"></div>
    </div>
  );
}

export default function HomeFR() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Agence Croissance Digitale Maroc | Site Web & SEO | Urunk</title>
        <meta name="description" content="Urunk est une agence de croissance digitale au Maroc. Nous proposons de la création de sites internet rapides, du SEO local avancé et des campagnes Google Ads." />
        <link rel="canonical" href="https://urunk.com/" />
        <link rel="alternate" hrefLang="en" href="https://urunk.com/en/" />
        <link rel="alternate" hrefLang="fr" href="https://urunk.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://urunk.com/en/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Urunk",
              "image": "https://urunk.com/og-image.jpg",
              "@id": "https://urunk.com/#organization",
              "url": "https://urunk.com/",
              "telephone": "+212500000000",
              "priceRange": "4000 MAD - 12000 MAD",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Guéliz",
                "addressLocality": "Marrakech",
                "addressRegion": "Marrakech-Safi",
                "postalCode": "40000",
                "addressCountry": "MA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 31.629472,
                "longitude": -7.981111
              },
              "sameAs": [
                "https://www.linkedin.com/company/urunk"
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "department": [
                {
                  "@type": "ProfessionalService",
                  "name": "Urunk Casablanca",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Anfa",
                    "addressLocality": "Casablanca",
                    "addressRegion": "Casablanca-Settat",
                    "postalCode": "20000",
                    "addressCountry": "MA"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 33.5731,
                    "longitude": -7.5898
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 relative overflow-hidden bg-bg" id="hero-section-fr">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.08),transparent_50%)]"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-8 border border-accent/20" id="hero-badge-fr">
            Agence de Croissance Digitale au Maroc pour les Entreprises & l'Hôtellerie
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary max-w-5xl leading-tight md:leading-tight mb-8" id="hero-h1-fr">
            Augmentez vos <span className="text-accent italic font-semibold">réservations directes</span> — Agence Web, SEO & Marketing Digital au Maroc
          </h1>
          <p className="text-lg md:text-xl text-primary/70 max-w-3xl font-light leading-relaxed mb-12" id="hero-subtext-fr">
            Urunk accompagne les hôtels, riads, agences de voyage et entreprises marocaines avec des sites web haute performance, du SEO local, de l'optimisation Google Maps et des stratégies d'acquisition digitale à fort ROI pour s'affranchir des commissions élevées des OTA.
          </p>
          
          <div className="flex flex-col items-center gap-4" id="hero-actions-container-fr">
            <div className="flex flex-col sm:flex-row items-center gap-4" id="hero-actions-fr">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 transform hover:-translate-y-0.5"
                id="hero-cta-btn-fr"
              >
                Demander mon Devis Gratuit <ArrowRight size={18} />
              </Link>
              <a 
                href="https://wa.me/212668802096" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-accent/30 hover:text-accent transition-all"
                id="hero-whatsapp-btn-fr"
              >
                Discuter sur WhatsApp
              </a>
            </div>
            
            {/* Phase 4 item 2: Trust strip under CTAs */}
            <div className="mt-4 text-xs text-primary/60 font-medium tracking-wide flex flex-wrap justify-center gap-x-4 gap-y-1" id="hero-trust-strip-fr">
              <span>✓ Garantie de Croissance sous 90 Jours</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ Transfert de Propriété 100%</span>
              <span className="hidden sm:inline">•</span>
              <span>✓ Sans Engagement Forcé</span>
            </div>
          </div>

          {/* Majestic Hero Image Showcase */}
          <div className="mt-16 w-full max-w-5xl rounded-2xl overflow-hidden border border-primary/10 shadow-2xl relative group aspect-video md:aspect-[21/9]" id="hero-image-container-fr">
            <ImageWithSkeleton 
              src="/images/optimized/art-house-hero-800.jpg"
              imageName="art-house-hero"
              alt="Urunk Agence Digitale Maroc" 
              className="w-full h-full"
              imgClassName="object-cover group-hover:scale-102 transition-transform duration-700"
              priority={true}
              loading="eager"
              fetchPriority="high"
              width={1200}
              height={514}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap justify-between items-center gap-4 text-white">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium tracking-wide drop-shadow-sm">Développement Web Performance & Référencement Avancé</span>
              </div>
              <span className="text-xs text-white/75 font-mono drop-shadow-sm">EST. 2026 / MAROC</span>
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t border-primary/10 w-full max-w-4xl flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale" id="hero-quick-capabilities-fr">
             <div className="flex items-center gap-2 font-bold text-primary/80"><Globe size={20} /> Création de Site Internet</div>
             <div className="flex items-center gap-2 font-bold text-primary/80"><Search size={20} /> SEO Local & National</div>
             <div className="flex items-center gap-2 font-bold text-primary/80"><TrendingUp size={20} /> Gestion Google Ads</div>
          </div>
        </div>
      </section>

      {/* 2. OTA-Dependency Section (Alternative Directe) */}
      <section className="bg-primary text-white py-24 px-6 relative overflow-hidden" id="ota-dependence-section-fr">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_60%)]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
                Spécialisation Hôtelière
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Réduisez votre dépendance aux <span className="text-yellow-400 italic font-semibold">Commissions OTA</span>
              </h2>
              <p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                Dépendre uniquement de Booking.com ou d'Expedia limite votre rentabilité nette. Chez Urunk, nous créons des architectures digitales qui vous aident à augmenter la part des réservations générées directement.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Intégrations sur mesure des moteurs de réservation (Cloudbeds, Mews, etc.)",
                  "Expérience utilisateur mobile-first et intuitive pour les voyageurs",
                  "Conçus et optimisés pour d'excellentes performances Core Web Vitals",
                  "SEO local pour optimiser Google Maps et valoriser TripAdvisor"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90 font-light">
                    <Check className="text-yellow-400 mt-0.5 shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/marketing-digital-hotelier" 
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-bg-alt transition-colors"
              >
                Découvrir Nos Solutions <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6" id="ota-panels-container-fr">
              {/* LEFT Panel (Muted Red) */}
              <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl flex flex-col justify-between h-full min-h-[220px]">
                <div>
                  <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white mb-2">Via OTA</h3>
                  <p className="text-sm text-white/85 font-light leading-relaxed">
                    15–25 % de commission par réservation.
                  </p>
                </div>
                <span className="text-[11px] text-red-300/60 mt-4 block italic">
                  Les taux varient selon les plateformes et contrats.
                </span>
              </div>

              {/* RIGHT Panel (Muted Green) */}
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-2xl flex flex-col justify-between h-full min-h-[220px]">
                <div>
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-emerald-300 mb-2">En direct avec Urunk</h3>
                  <p className="text-sm text-white/95 font-medium leading-relaxed">
                    0 % de commission OTA.
                  </p>
                </div>
                <span className="text-[11px] text-emerald-300/60 mt-4 block font-semibold uppercase tracking-wider">
                  Canal direct optimisé
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center border-t border-white/10 pt-8">
            <p className="text-sm text-white/70">
              Nous concevons des stratégies d'acquisition directes pour capturer la demande à la source.{" "}
              <Link to="/realisations" className="text-accent hover:underline font-semibold inline-flex items-center gap-1.5 ml-1">
                Voir nos réalisations <ArrowRight size={14} />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Services / "Nos Solutions" */}
      <section className="py-24 bg-white relative border-t border-primary/10" id="services-block-fr">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-6 border border-accent/20" id="services-eyebrow-fr">
              Nos Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6" id="services-title-fr">
              Création de Site Web, SEO & Marketing Digital au Maroc
            </h2>
            <p className="text-lg text-primary/70 max-w-4xl mx-auto font-light leading-relaxed" id="services-intro-paragraph-fr">
              Urunk conçoit des sites internet, déploie des stratégies de référencement naturel (SEO) local, d'optimisation de fiches Google Business Profile, et gère vos campagnes publicitaires sur Google Ads et Meta Ads. Notre expertise distinctive permet aux riads, hôtels, agences de voyage et entreprises d'accroître leur trafic qualifié et leurs réservations directes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid-fr">
            {[
              {
                title: "Création Site Web & WordPress",
                desc: "Nous concevons des sites internet ultra-rapides et hautement convertisseurs, parfaitement intégrés aux outils de réservation directe pour d'excellents Core Web Vitals.",
                icon: <Smartphone size={24} />,
                link: "/services/creation-site-web"
              },
              {
                title: "SEO Local & Google Maps",
                desc: "Dominez les résultats locaux de Google et capturez les voyageurs et prospects de votre région au moment précis où ils cherchent vos services.",
                icon: <Search size={24} />,
                link: "/agence-seo-maroc"
              },
              {
                title: "Google Ads & Meta Ads",
                desc: "Générez un flux immédiat et mesurable d'opportunités commerciales et de réservations directes grâce à des campagnes publicitaires ciblées.",
                icon: <Globe size={24} />,
                link: "/google-ads-maroc"
              }
            ].map((service, idx) => (
              <Link key={idx} to={service.link} className="block group" id={`service-link-fr-${idx}`}>
                <div className="bg-bg p-8 rounded-2xl border border-primary/10 hover:border-accent/40 transition-all h-full shadow-xs hover:shadow-sm">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent mb-6 shadow-xs border border-primary/5 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-primary/70 font-light leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <span className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                    Explorer ce Service <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Region/niche intent as chip row below */}
          <div className="mt-16 text-center border-t border-primary/5 pt-10" id="city-intent-chips-fr">
            <p className="text-xs text-primary/50 font-bold uppercase tracking-wider mb-4">Recherches Populaires & Expertises Régionales</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "SEO Riad Marrakech", path: "/seo-riad-marrakech" },
                { name: "SEO Casablanca", path: "/referencement-local-casablanca" },
                { name: "SEO Hôtelier", path: "/seo-hotel" },
                { name: "TripAdvisor Ads", path: "/services/tripadvisor-ads" }
              ].map((chip, idx) => (
                <Link 
                  key={idx}
                  to={chip.path}
                  className="px-4 py-2 rounded-full bg-bg border border-primary/10 hover:border-accent hover:text-accent text-sm font-semibold text-primary/80 transition-all shadow-xs hover:scale-[1.03]"
                >
                  {chip.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3b. 3 Simple Steps Section (Horizontal Steps) */}
      <section className="py-24 bg-bg border-t border-primary/10" id="three-steps-section-fr">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-6 border border-accent/20">
              Notre Fonctionnement
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              Votre Transition Directe en <span className="text-accent italic font-semibold">3 Étapes Simples</span>
            </h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light">
              Un parcours transparent et rigoureux, conçu pour sécuriser votre investissement à chaque étape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              {
                step: "01",
                title: "Audit Technique de Performance",
                desc: "Analyse complète et gratuite de vos performances actuelles, de votre visibilité SEO locale et des opportunités d'optimisation de vos conversions."
              },
              {
                step: "02",
                title: "Déploiement de l'Infrastructure",
                desc: "Création de votre site web haute performance ou de vos campagnes publicitaires ciblées, avec intégration transparente de votre moteur de réservation."
              },
              {
                step: "03",
                title: "Optimisation & Rentabilité",
                desc: "Pilotage continu et optimisation quotidienne pour maximiser votre taux d'acquisition directe, sans commission tierce."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-primary/10 flex flex-col justify-between shadow-xs hover:shadow-sm transition-all relative">
                <div>
                  <span className="text-5xl font-serif font-bold text-accent/20 block mb-6">{item.step}</span>
                  <h3 className="text-xl font-bold text-primary mb-3 font-serif">{item.title}</h3>
                  <p className="text-sm text-primary/70 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why-Us Section (Redesigned Editorial Bento Grid) */}
      <section className="py-24 bg-white border-t border-primary/10 relative overflow-hidden" id="why-urunk-block-fr">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-5 border border-accent/20">
              <Sparkles className="w-3.5 h-3.5" />
              Pourquoi Choisir Urunk
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
              Une Stratégie Conçue pour <span className="text-accent italic font-semibold">Votre Croissance Réelle</span>
            </h2>
            <p className="text-lg text-primary/70 font-light leading-relaxed">
              Nous combinons un design exigeant avec une ingénierie SEO et de conversion ultra-performante, dédiée exclusivement au développement de vos réservations directes et prospects qualifiés au Maroc.
            </p>
          </div>

          {/* Cards Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8" id="why-urunk-list-fr">
            {/* Card 1: Results-oriented (lg:col-span-7) */}
            <div className="lg:col-span-7 p-8 md:p-10 rounded-2xl bg-bg border border-primary/10 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 shadow-xs group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono font-bold tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                    01 • FOCUS ROI
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent/15 group-hover:text-accent transition-colors">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  Approche Axée sur le Retour sur Investissement
                </h3>
                <p className="text-base text-primary/70 font-light leading-relaxed mb-8">
                  Nous nous concentrons exclusivement sur des résultats tangibles : acquisition de prospects qualifiés, réservations directes et accélération mesurable de votre chiffre d'affaires. Chaque action vise la rentabilité.
                </p>
              </div>
              <div className="pt-6 border-t border-primary/10 flex flex-wrap gap-2 text-xs font-medium text-primary/80">
                <span className="px-3 py-1 rounded-md bg-white border border-primary/10">Moteurs de Réservation Directe</span>
                <span className="px-3 py-1 rounded-md bg-white border border-primary/10">Trafic à Forte Intention</span>
                <span className="px-3 py-1 rounded-md bg-white border border-primary/10">Suivi Analytique du ROI</span>
              </div>
            </div>

            {/* Card 2: Local presence (lg:col-span-5) */}
            <div className="lg:col-span-5 p-8 md:p-10 rounded-2xl bg-bg border border-primary/10 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 shadow-xs group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono font-bold tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                    02 • ANCRAGE RÉGIONAL
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent/15 group-hover:text-accent transition-colors">
                    <Compass className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  Maîtrise Complète du Marché Marocain
                </h3>
                <p className="text-base text-primary/70 font-light leading-relaxed mb-8">
                  Une expertise approfondie des dynamiques locales à Marrakech, Casablanca, Tanger et Agadir. Nous ciblons les comportements de recherche multilingues (FR/EN/AR) pour capturer les clients les plus rentables.
                </p>
              </div>
              <div className="pt-6 border-t border-primary/10 flex flex-wrap gap-2 text-xs font-medium text-primary/80">
                <span className="px-3 py-1 rounded-md bg-white border border-primary/10">Ciblage Géolocalisé</span>
                <span className="px-3 py-1 rounded-md bg-white border border-primary/10">Référencement Régional</span>
              </div>
            </div>

            {/* Card 3: Technical excellence (lg:col-span-4) */}
            <div className="lg:col-span-4 p-8 rounded-2xl bg-bg border border-primary/10 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 shadow-xs group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                    03 • RAPIDITÉ
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent/15 group-hover:text-accent transition-colors">
                    <Zap className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  Ingénierie & Performance Web
                </h3>
                <p className="text-sm text-primary/70 font-light leading-relaxed mb-6">
                  Des sites légers et ultra-rapides (moins d'une seconde de chargement). Nous visons un score Core Web Vitals de 95+ pour maximiser vos positions Google et la conversion sur mobile.
                </p>
              </div>
              <div className="pt-4 border-t border-primary/10 text-xs font-semibold text-accent uppercase tracking-wider flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-accent" />
                <span>Score Lighthouse 95+</span>
              </div>
            </div>

            {/* Card 4: Transparency & Integrity (lg:col-span-4) */}
            <div className="lg:col-span-4 p-8 rounded-2xl bg-bg border border-primary/10 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 shadow-xs group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                    04 • AUTONOMIE
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent/15 group-hover:text-accent transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  Transparence & 100% Propriété
                </h3>
                <p className="text-sm text-primary/70 font-light leading-relaxed mb-6">
                  Aucun engagement captif, aucun frais caché. Vous conservez l'entière propriété juridique de vos noms de domaine, code source, comptes d'hébergement et données analytiques.
                </p>
              </div>
              <div className="pt-4 border-t border-primary/10 text-xs font-semibold text-accent uppercase tracking-wider flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-accent" />
                <span>Contrat Sans Engagement Caché</span>
              </div>
            </div>

            {/* Card 5: Commission-free channels (lg:col-span-4) */}
            <div className="lg:col-span-4 p-8 rounded-2xl bg-bg border border-primary/10 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 shadow-xs group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                    05 • MARGES
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent/15 group-hover:text-accent transition-colors">
                    <Percent className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  Canaux Sans Commission
                </h3>
                <p className="text-sm text-primary/70 font-light leading-relaxed mb-6">
                  Nous concevons vos propres systèmes de vente directe pour réduire structurellement votre dépendance aux 15%–25% de commissions prélevées par les plateformes intermédiaires.
                </p>
              </div>
              <div className="pt-4 border-t border-primary/10 text-xs font-semibold text-accent uppercase tracking-wider flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-accent" />
                <span>Conservez 100% de Vos Marges</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. New PROOF Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <ProofSectionFR />
      </Suspense>

      {/* 5b. Témoignages & Garanties Section */}
      <section className="py-24 bg-white border-t border-primary/10" id="testimonials-guarantees-section-fr">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-6 border border-accent/20">
              Garanties Contractuelles
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              Notre Engagement : <span className="text-accent italic font-semibold">Zéro Risque</span>
            </h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light">
              Parce que nous sommes certains de l'efficacité de nos stratégies, chaque contrat est assorti de garanties juridiques et commerciales strictes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-bg border border-primary/10 flex flex-col justify-between shadow-xs" id="guarantee-card-1-fr">
              <div>
                <span className="text-accent font-serif font-bold text-lg block mb-4">Garantie Performance</span>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">Croissance sous 90 Jours</h3>
                <p className="text-sm text-primary/70 font-light leading-relaxed">
                  Si nous n'augmentons pas vos réservations directes ou votre trafic organique sous 90 jours, nous vous remboursons l'intégralité de nos honoraires.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-primary/50 font-semibold uppercase tracking-wider">
                Garantie 90 Jours
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-bg border border-primary/10 flex flex-col justify-between shadow-xs" id="guarantee-card-2-fr">
              <div>
                <span className="text-accent font-serif font-bold text-lg block mb-4">Flexibilité Totale</span>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">15 Jours de Préavis</h3>
                <p className="text-sm text-primary/70 font-light leading-relaxed">
                  Aucun engagement forcé à long terme. Vous pouvez suspendre ou résilier notre collaboration avec un préavis simple de 15 jours.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-primary/50 font-semibold uppercase tracking-wider">
                Sans Engagement Forcé
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-bg border border-primary/10 flex flex-col justify-between shadow-xs" id="guarantee-card-3-fr">
              <div>
                <span className="text-accent font-serif font-bold text-lg block mb-4">Zéro Barrière</span>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">0 DH Frais de Configuration</h3>
                <p className="text-sm text-primary/70 font-light leading-relaxed">
                  Nous croyons en notre valeur ajoutée. C'est pourquoi nous ne facturons aucun frais d'installation ou de configuration initiale cachés.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-primary/50 font-semibold uppercase tracking-wider">
                0 Setup Fees
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Merged Sectors + Zones Section */}
      <Suspense fallback={<SectionSkeleton />}>
        <SectorsAndHubsFR />
      </Suspense>

      {/* 7. Strategy Examples */}
      <Suspense fallback={<SectionSkeleton />}>
        <PortfolioSectionFR />
      </Suspense>

      {/* 8. Pricing */}
      <Suspense fallback={<SectionSkeleton />}>
        <PricingSectionFR />
      </Suspense>

      {/* 9. FAQ */}
      <Suspense fallback={<SectionSkeleton />}>
        <FaqSectionFR />
      </Suspense>

      {/* 10. CTA */}
      <Suspense fallback={<SectionSkeleton />}>
        <BottomFormSectionFR />
      </Suspense>
    </div>
  );
}
