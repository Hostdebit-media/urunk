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

// Composant avis clients masqué par défaut et alimenté par une liste vide (Règle 4 & Tâche 5)
function ClientReviews() {
  const reviews: { author: string; text: string; rating: number }[] = [];
  if (reviews.length === 0) return null;
  return <div className="hidden" aria-hidden="true"></div>;
}

export default function HomeFR() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Agence Web & SEO Maroc pour Hôtels et Riads | Urunk</title>
        <meta name="description" content="Agence web et SEO au Maroc pour hôtels, riads et PME : sites ultra-rapides, Google Ads et SEO local à Casablanca et Marrakech. Audit gratuit." />
        <link rel="canonical" href="https://urunk.com/" />
        <link rel="alternate" hrefLang="en" href="https://urunk.com/en/" />
        <link rel="alternate" hrefLang="fr" href="https://urunk.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://urunk.com/en/" />
        <script type="application/ld+json">
          {`
            [
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://urunk.com/#organization",
                "name": "Urunk",
                "url": "https://urunk.com/",
                "logo": "https://urunk.com/logo.png",
                "sameAs": [
                  "[URL_LINKEDIN]",
                  "[URL_FACEBOOK]",
                  "[URL_INSTAGRAM]"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://urunk.com/#localbusiness-casablanca",
                "name": "Urunk Casablanca",
                "url": "https://urunk.com/zones/casablanca",
                "telephone": "[TELEPHONE]",
                "priceRange": "4000 MAD - 12000 MAD",
                "areaServed": "MA",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "[ADRESSE_CASABLANCA_ANFA]",
                  "addressLocality": "Casablanca",
                  "addressRegion": "Casablanca-Settat",
                  "postalCode": "20000",
                  "addressCountry": "MA"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://urunk.com/#localbusiness-marrakech",
                "name": "Urunk Marrakech",
                "url": "https://urunk.com/zones/marrakech",
                "telephone": "[TELEPHONE]",
                "priceRange": "4000 MAD - 12000 MAD",
                "areaServed": "MA",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "[ADRESSE_MARRAKECH_GUELIZ]",
                  "addressLocality": "Marrakech",
                  "addressRegion": "Marrakech-Safi",
                  "postalCode": "40000",
                  "addressCountry": "MA"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Création de Site Web pour Hôtels et Riads",
                "provider": { "@id": "https://urunk.com/#organization" },
                "areaServed": "MA",
                "offers": {
                  "@type": "Offer",
                  "price": "12000",
                  "priceCurrency": "MAD"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Référencement Naturel & SEO Local Maroc",
                "provider": { "@id": "https://urunk.com/#organization" },
                "areaServed": "MA"
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Gestion Publicitaire Google Ads Maroc",
                "provider": { "@id": "https://urunk.com/#organization" },
                "areaServed": "MA"
              }
            ]
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
            Croissance Digitale pour l'Hôtellerie au Maroc
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary max-w-5xl leading-tight md:leading-tight mb-8" id="hero-h1-fr">
            Agence web & SEO pour hôtels, riads et PME au Maroc
          </h1>
          <p className="text-lg md:text-xl text-primary/70 max-w-3xl font-light leading-relaxed mb-12" id="hero-subtext-fr">
            Nous accompagnons les établissements hôteliers, riads et entreprises marocaines dans la création d'écosystèmes digitaux rentables : plateformes de réservation directe sans commission, positionnement prioritaire sur les requêtes locales et campagnes d'acquisition à haut rendement.
          </p>
          
          <div className="flex flex-col items-center gap-4" id="hero-actions-container-fr">
            <div className="flex flex-col sm:flex-row items-center gap-4" id="hero-actions-fr">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 transform hover:-translate-y-0.5"
                id="hero-cta-btn-fr"
              >
                Demander un Audit Gratuit <ArrowRight size={18} />
              </Link>
              <a 
                href="https://wa.me/[NUMERO_SANS_ESPACES]?text=Bonjour%2C%20je%20souhaite%20un%20audit%20gratuit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-accent/30 hover:text-accent transition-all"
                id="hero-whatsapp-btn-fr"
              >
                Discuter sur WhatsApp
              </a>
            </div>
            
            <div className="mt-4 text-xs text-primary/60 font-medium tracking-wide flex flex-wrap justify-center gap-x-4 gap-y-1" id="hero-trust-strip-fr">
              <span>✓ Garantie de Performance sous 90 Jours [CONDITIONS_GARANTIE]</span>
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

      {/* 3. Thematic Capabilities / 4 Blocs Thématiques */}
      <section className="py-24 bg-white relative border-t border-primary/10" id="thematic-blocks-fr">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-6 border border-accent/20" id="services-eyebrow-fr">
              Pôles d'Intervention
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6" id="services-title-fr">
              Création de sites web et SEO pour hôtels et riads au Maroc
            </h2>
            <p className="text-lg text-primary/75 max-w-4xl mx-auto font-light leading-relaxed" id="services-intro-paragraph-fr">
              La création d'un site web hôtelier et le référencement naturel permettent aux hôtels et riads marocains de capter directement les voyageurs sur Google. En combinant un moteur de réservation sans commission, une vitesse de chargement optimale et un ciblage géographique précis, les établissements augmentent leur marge nette par nuitée vendue.
            </p>
          </div>

          {/* 4 Blocs Thématiques */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" id="thematic-quad-grid-fr">
            {/* Bloc 1: Hôtellerie */}
            <div className="bg-bg p-6 rounded-2xl border border-primary/10 flex flex-col justify-between shadow-xs hover:border-accent/30 transition-all">
              <div>
                <Link to="/secteurs/riads-maisons-hotes" className="group flex items-center justify-between pb-3 border-b border-primary/10 mb-4">
                  <h3 className="font-serif font-bold text-xl text-primary group-hover:text-accent transition-colors">Hôtellerie</h3>
                  <ArrowRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-xs text-primary/60 font-light mb-4">
                  Riads, maisons d'hôtes et hôtels indépendants au Maroc.
                </p>
                <ul className="space-y-2.5 text-xs font-medium text-primary/80">
                  <li>
                    <Link to="/seo-riad-marrakech" className="hover:text-accent transition-colors block py-0.5">
                      SEO Riads Marrakech
                    </Link>
                  </li>
                  <li>
                    <Link to="/site-web-hotel" className="hover:text-accent transition-colors block py-0.5">
                      Sites Web Hôtels
                    </Link>
                  </li>
                  <li>
                    <Link to="/reservation-directe" className="hover:text-accent transition-colors block py-0.5">
                      Réservation Directe
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-6 border-t border-primary/5 text-[11px] text-accent font-semibold">
                Hub Hôtellerie & Riads &rarr;
              </div>
            </div>

            {/* Bloc 2: Acquisition */}
            <div className="bg-bg p-6 rounded-2xl border border-primary/10 flex flex-col justify-between shadow-xs hover:border-accent/30 transition-all">
              <div>
                <Link to="/services" className="group flex items-center justify-between pb-3 border-b border-primary/10 mb-4">
                  <h3 className="font-serif font-bold text-xl text-primary group-hover:text-accent transition-colors">Acquisition</h3>
                  <ArrowRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-xs text-primary/60 font-light mb-4">
                  Campagnes publicitaires payantes pour capter des réservations directes.
                </p>
                <ul className="space-y-2.5 text-xs font-medium text-primary/80">
                  <li>
                    <Link to="/google-ads-maroc" className="hover:text-accent transition-colors block py-0.5">
                      Google Ads Maroc
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/gestion-publicites-meta" className="hover:text-accent transition-colors block py-0.5">
                      Meta Ads Hôtellerie
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/tripadvisor-ads" className="hover:text-accent transition-colors block py-0.5">
                      TripAdvisor Ads
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-6 border-t border-primary/5 text-[11px] text-accent font-semibold">
                Hub Services Publicité &rarr;
              </div>
            </div>

            {/* Bloc 3: SEO local */}
            <div className="bg-bg p-6 rounded-2xl border border-primary/10 flex flex-col justify-between shadow-xs hover:border-accent/30 transition-all">
              <div>
                <Link to="/zones/casablanca" className="group flex items-center justify-between pb-3 border-b border-primary/10 mb-4">
                  <h3 className="font-serif font-bold text-xl text-primary group-hover:text-accent transition-colors">SEO Local</h3>
                  <ArrowRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-xs text-primary/60 font-light mb-4">
                  Visibilité sur Google Maps et requêtes géolocalisées.
                </p>
                <ul className="space-y-2.5 text-xs font-medium text-primary/80">
                  <li>
                    <Link to="/referencement-local-casablanca" className="hover:text-accent transition-colors block py-0.5">
                      SEO Local Casablanca
                    </Link>
                  </li>
                  <li>
                    <Link to="/seo-riad-marrakech" className="hover:text-accent transition-colors block py-0.5">
                      SEO Local Marrakech
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/google-business-profile" className="hover:text-accent transition-colors block py-0.5">
                      Google Business Profile
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-6 border-t border-primary/5 text-[11px] text-accent font-semibold">
                Hub Local Casablanca &rarr;
              </div>
            </div>

            {/* Bloc 4: Création web */}
            <div className="bg-bg p-6 rounded-2xl border border-primary/10 flex flex-col justify-between shadow-xs hover:border-accent/30 transition-all">
              <div>
                <Link to="/zones/marrakech" className="group flex items-center justify-between pb-3 border-b border-primary/10 mb-4">
                  <h3 className="font-serif font-bold text-xl text-primary group-hover:text-accent transition-colors">Création Web</h3>
                  <ArrowRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-xs text-primary/60 font-light mb-4">
                  Sites hôteliers performants et portails professionnels.
                </p>
                <ul className="space-y-2.5 text-xs font-medium text-primary/80">
                  <li>
                    <Link to="/creation-site-web" className="hover:text-accent transition-colors block py-0.5">
                      Création Site Web
                    </Link>
                  </li>
                  <li>
                    <Link to="/agence-web-casablanca" className="hover:text-accent transition-colors block py-0.5">
                      Agence Web Casablanca
                    </Link>
                  </li>
                  <li>
                    <Link to="/site-web-riad-marrakech" className="hover:text-accent transition-colors block py-0.5">
                      Site Web Riad Marrakech
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-6 border-t border-primary/5 text-[11px] text-accent font-semibold">
                Hub Local Marrakech &rarr;
              </div>
            </div>
          </div>

          {/* Section Présence à Casablanca et Marrakech (Tâche 2) */}
          <div className="bg-bg p-8 md:p-12 rounded-3xl border border-primary/10 mb-16" id="presence-casa-marrakech-fr">
            <div className="max-w-3xl mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-accent/20">
                <MapPin size={14} /> Ancrage Régional
              </span>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-4">
                Présence à Casablanca et Marrakech
              </h2>
              <p className="text-base text-primary/75 font-light leading-relaxed">
                Notre agence intervient auprès des entreprises et professionnels du tourisme à Casablanca et Marrakech. À Casablanca, nous développons des sites web B2B et du référencement local pour les PME. À Marrakech, nous accompagnons les riads et hôtels de la Médina dans leur stratégie d'acquisition directe et Google Maps.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/zones/casablanca" className="p-6 bg-white rounded-2xl border border-primary/10 hover:border-accent/40 transition-all block group">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif font-bold text-xl text-primary group-hover:text-accent transition-colors">
                    Casablanca
                  </h3>
                  <ArrowRight size={18} className="text-accent group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-primary/65 font-light mb-3">
                  Pôle d'affaires B2B, cabinets et PME casablancaises.
                </p>
                <p className="text-xs font-mono text-primary/70">
                  [ADRESSE_CASABLANCA_ANFA]
                </p>
              </Link>

              <Link to="/zones/marrakech" className="p-6 bg-white rounded-2xl border border-primary/10 hover:border-accent/40 transition-all block group">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif font-bold text-xl text-primary group-hover:text-accent transition-colors">
                    Marrakech
                  </h3>
                  <ArrowRight size={18} className="text-accent group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-xs text-primary/65 font-light mb-3">
                  Hôtellerie de charme, riads en Médina et tour-opérateurs.
                </p>
                <p className="text-xs font-mono text-primary/70">
                  [ADRESSE_MARRAKECH_GUELIZ]
                </p>
              </Link>
            </div>
          </div>

          {/* Section Autres Services & Ressources (Tâche 4) */}
          <div className="grid lg:grid-cols-2 gap-8 pt-8 border-t border-primary/10" id="secondary-links-fr">
            {/* Autres Services */}
            <div className="p-6 rounded-2xl bg-bg border border-primary/10">
              <h3 className="font-serif font-bold text-lg text-primary mb-3">
                Autres services digitaux
              </h3>
              <p className="text-xs text-primary/65 font-light mb-4">
                Prestations complémentaires d'ingénierie web et d'optimisation technique.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <Link to="/services/wordpress-seo" className="px-3.5 py-1.5 rounded-lg bg-white border border-primary/10 text-xs font-medium text-primary hover:border-accent hover:text-accent transition-colors">
                  SEO WordPress
                </Link>
                <Link to="/services/ecommerce-seo" className="px-3.5 py-1.5 rounded-lg bg-white border border-primary/10 text-xs font-medium text-primary hover:border-accent hover:text-accent transition-colors">
                  SEO E-commerce
                </Link>
                <Link to="/services/ai-seo-optimization" className="px-3.5 py-1.5 rounded-lg bg-white border border-primary/10 text-xs font-medium text-primary hover:border-accent hover:text-accent transition-colors">
                  Optimisation SEO IA
                </Link>
                <Link to="/services/bundle-site-ads" className="px-3.5 py-1.5 rounded-lg bg-white border border-primary/10 text-xs font-medium text-primary hover:border-accent hover:text-accent transition-colors">
                  Pack Site & Publicité
                </Link>
              </div>
            </div>

            {/* Ressources */}
            <div className="p-6 rounded-2xl bg-bg border border-primary/10">
              <h3 className="font-serif font-bold text-lg text-primary mb-3">
                Ressources & Guides Stratégiques
              </h3>
              <p className="text-xs text-primary/65 font-light mb-4">
                Analyses pratiques pour optimiser votre visibilité hôtelière et vos marges directes.
              </p>
              <ul className="space-y-2 text-xs font-medium text-primary/80">
                <li>
                  <Link to="/blog/reduire-commissions-ota" className="hover:text-accent transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span>Réduire les commissions OTA : Stratégies directes</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blog/tripadvisor-vs-google-ads" className="hover:text-accent transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span>Comparatif TripAdvisor Ads vs Google Ads pour hôtels</span>
                  </Link>
                </li>
                <li>
                  <Link to="/blog/guide-seo-hotellerie-maroc" className="hover:text-accent transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span>Guide complet du SEO hôtelier au Maroc</span>
                  </Link>
                </li>
              </ul>
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
                  Si nous n'augmentons pas vos réservations directes ou votre trafic organique sous 90 jours, nous appliquons notre garantie de performance soumise aux [CONDITIONS_GARANTIE].
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-primary/50 font-semibold uppercase tracking-wider">
                Garantie 90 Jours [CONDITIONS_GARANTIE]
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

      {/* Client Reviews (Hidden / No fake reviews) */}
      <ClientReviews />
    </div>
  );
}
