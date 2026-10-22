import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import URLNormalizer from './components/URLNormalizer';

// Lazy loading pages for optimal code splitting and performance
const Home = lazy(() => import('./pages/Home'));
const WebsiteDesign = lazy(() => import('./pages/Services/WebsiteDesign'));
const SeoMorocco = lazy(() => import('./pages/Services/SeoMorocco'));
const HotelSeo = lazy(() => import('./pages/Services/HotelSeo'));
const HotelDigitalMarketing = lazy(() => import('./pages/Services/HotelDigitalMarketing'));
const HotelWebsiteDesign = lazy(() => import('./pages/Services/HotelWebsiteDesign'));
const DirectBooking = lazy(() => import('./pages/Services/DirectBooking'));
const LocalSeoCasablanca = lazy(() => import('./pages/Services/LocalSeoCasablanca'));
const RiadSeoMarrakech = lazy(() => import('./pages/Services/RiadSeoMarrakech'));
const RiadWebsiteDesignMarrakech = lazy(() => import('./pages/Services/RiadWebsiteDesignMarrakech'));
const AgenceWebMaroc = lazy(() => import('./pages/fr/Services/AgenceWebMaroc'));
const CreationSiteWebFR = lazy(() => import('./pages/fr/Services/CreationSiteWebFR'));
const AgenceSeoMaroc = lazy(() => import('./pages/fr/Services/AgenceSeoMaroc'));
const AgenceSeoCasablanca = lazy(() => import('./pages/fr/Services/AgenceSeoCasablanca'));
const SeoHotel = lazy(() => import('./pages/fr/Services/SeoHotel'));
const MarketingDigitalHotelier = lazy(() => import('./pages/fr/Services/MarketingDigitalHotelier'));
const SiteWebHotel = lazy(() => import('./pages/fr/Services/SiteWebHotel'));
const ReservationDirecte = lazy(() => import('./pages/fr/Services/ReservationDirecte'));
const GoogleAdsMarocFR = lazy(() => import('./pages/fr/Services/GoogleAdsMarocFR'));
const ReferencementLocalCasablanca = lazy(() => import('./pages/fr/Services/ReferencementLocalCasablanca'));
const SeoRiadMarrakech = lazy(() => import('./pages/fr/Services/SeoRiadMarrakech'));
const SiteWebRiadMarrakech = lazy(() => import('./pages/fr/Services/SiteWebRiadMarrakech'));

const ServicesIndex = lazy(() => import('./pages/Services/Index'));
const GoogleAds = lazy(() => import('./pages/Services/GoogleAds'));
const MetaAds = lazy(() => import('./pages/Services/MetaAds'));
const TripadvisorAds = lazy(() => import('./pages/Services/TripadvisorAds'));
const Bundle = lazy(() => import('./pages/Services/Bundle'));

// Specialized service landing pages (English)
const WebDesignMorocco = lazy(() => import('./pages/Services/WebDesignMorocco'));
const WebDesignCasablanca = lazy(() => import('./pages/Services/WebDesignCasablanca'));
const SeoAgencyMorocco = lazy(() => import('./pages/Services/SeoAgencyMorocco'));
const SeoAgencyCasablanca = lazy(() => import('./pages/Services/SeoAgencyCasablanca'));
const LocalSeoMorocco = lazy(() => import('./pages/Services/LocalSeoMorocco'));
const GoogleBusinessProfile = lazy(() => import('./pages/Services/GoogleBusinessProfile'));
const GoogleAdsMorocco = lazy(() => import('./pages/Services/GoogleAdsMorocco'));
const AiSeoOptimization = lazy(() => import('./pages/Services/AiSeoOptimization'));
const WordPressSeo = lazy(() => import('./pages/Services/WordPressSeo'));
const EcommerceSeo = lazy(() => import('./pages/Services/EcommerceSeo'));

// Industry Landing Pages
const HotelsResorts = lazy(() => import('./pages/Industries/HotelsResorts'));
const RiadsBoutiqueStays = lazy(() => import('./pages/Industries/RiadsBoutiqueStays'));
const TourOperators = lazy(() => import('./pages/Industries/TourOperators'));
const Restaurants = lazy(() => import('./pages/Industries/Restaurants'));
const CorporateSMEs = lazy(() => import('./pages/Industries/CorporateSMEs'));

// Location Landing Pages
const LocationsIndex = lazy(() => import('./pages/Locations/LocationsIndex'));
const ZonesIndexFR = lazy(() => import('./pages/fr/ZonesIndexFR'));
const MoroccoLocation = lazy(() => import('./pages/Locations/Morocco'));
const CasablancaLocation = lazy(() => import('./pages/Locations/Casablanca'));
const MarrakechLocation = lazy(() => import('./pages/Locations/Marrakech'));
const RabatLocation = lazy(() => import('./pages/Locations/Rabat'));
const AgadirLocation = lazy(() => import('./pages/Locations/Agadir'));

const Pricing = lazy(() => import('./pages/Pricing'));
const WorkIndex = lazy(() => import('./pages/Work/Index'));
const CaseStudy = lazy(() => import('./pages/Work/CaseStudy'));
const About = lazy(() => import('./pages/About'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const BlogIndex = lazy(() => import('./pages/Blog/Index'));
const BlogPost = lazy(() => import('./pages/Blog/Post'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const ThankYou = lazy(() => import('./pages/ThankYou'));

const MatrixLandingPage = lazy(() => import('./pages/MatrixLandingPage'));

// French lazy loaded pages
const HomeFR = lazy(() => import('./pages/fr/HomeFR'));
const WebsiteDesignFR = lazy(() => import('./pages/fr/Services/WebsiteDesignFR'));
const ServicesIndexFR = lazy(() => import('./pages/fr/Services/IndexFR'));
const GoogleAdsFR = lazy(() => import('./pages/fr/Services/GoogleAdsFR'));
const MetaAdsFR = lazy(() => import('./pages/fr/Services/MetaAdsFR'));
const TripadvisorAdsFR = lazy(() => import('./pages/fr/Services/TripadvisorAdsFR'));
const BundleFR = lazy(() => import('./pages/fr/Services/BundleFR'));

// Specialized service landing pages (French)
const WebDesignCasablancaFR = lazy(() => import('./pages/fr/Services/WebDesignCasablancaFR'));
const LocalSeoMoroccoFR = lazy(() => import('./pages/fr/Services/LocalSeoMoroccoFR'));
const GoogleBusinessProfileFR = lazy(() => import('./pages/fr/Services/GoogleBusinessProfileFR'));
const AiSeoOptimizationFR = lazy(() => import('./pages/fr/Services/AiSeoOptimizationFR'));
const WordPressSeoFR = lazy(() => import('./pages/fr/Services/WordPressSeoFR'));
const EcommerceSeoFR = lazy(() => import('./pages/fr/Services/EcommerceSeoFR'));
const PricingFR = lazy(() => import('./pages/fr/PricingFR'));
const WorkFR = lazy(() => import('./pages/fr/WorkFR'));
const AboutFR = lazy(() => import('./pages/fr/AboutFR'));
const BlogFR = lazy(() => import('./pages/fr/BlogFR'));
const FAQFR = lazy(() => import('./pages/fr/FAQFR'));
const ContactFR = lazy(() => import('./pages/fr/ContactFR'));
const PrivacyPolicyFR = lazy(() => import('./pages/fr/PrivacyPolicyFR'));
const TermsOfServiceFR = lazy(() => import('./pages/fr/TermsOfServiceFR'));
const ThankYouFR = lazy(() => import('./pages/fr/ThankYouFR'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="w-10 h-10 border-3 border-accent/20 border-t-accent rounded-full animate-spin"></div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <URLNormalizer />
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* French Routes (Default / Primary Language at Root) */}
            <Route path="/" element={<Layout />}>
              <Route index element={<HomeFR />} />
              <Route path="expertise/:locationId/:industryId/:serviceId" element={<MatrixLandingPage lang="fr" />} />
              <Route path="expertise/:param1/:param2" element={<MatrixLandingPage lang="fr" />} />
              <Route path="a-propos" element={<AboutFR />} />
              <Route path="tarifs" element={<PricingFR />} />
              <Route path="services" element={<ServicesIndexFR />} />
              <Route path="services/creation-site-web" element={<WebsiteDesignFR />} />
              <Route path="creation-site-web" element={<CreationSiteWebFR />} />
              <Route path="agence-web-maroc" element={<AgenceWebMaroc />} />
              <Route path="agence-web-casablanca" element={<WebDesignCasablancaFR />} />
              <Route path="agence-seo-maroc" element={<AgenceSeoMaroc />} />
              <Route path="agence-seo-casablanca" element={<AgenceSeoCasablanca />} />
              <Route path="seo-hotel" element={<SeoHotel />} />
              <Route path="marketing-digital-hotelier" element={<MarketingDigitalHotelier />} />
              <Route path="site-web-hotel" element={<SiteWebHotel />} />
              <Route path="reservation-directe" element={<ReservationDirecte />} />
              <Route path="google-ads-maroc" element={<GoogleAdsMarocFR />} />
              <Route path="referencement-local-casablanca" element={<ReferencementLocalCasablanca />} />
              <Route path="seo-riad-marrakech" element={<SeoRiadMarrakech />} />
              <Route path="site-web-riad-marrakech" element={<SiteWebRiadMarrakech />} />

              {/* Core Services Routes FR */}
              <Route path="services/gestion-google-ads" element={<Navigate to="/google-ads-maroc" replace />} />
              <Route path="services/gestion-publicites-meta" element={<MetaAdsFR />} />
              <Route path="services/tripadvisor-ads" element={<TripadvisorAdsFR />} />
              <Route path="services/bundle-site-ads" element={<BundleFR />} />
              <Route path="services/bundle" element={<Navigate to="/services/bundle-site-ads" replace />} />
              <Route path="services/ai-seo-optimization" element={<AiSeoOptimizationFR />} />
              <Route path="services/wordpress-seo" element={<WordPressSeoFR />} />
              <Route path="services/ecommerce-seo" element={<EcommerceSeoFR />} />
              <Route path="services/google-business-profile" element={<GoogleBusinessProfileFR />} />
              <Route path="services/local-seo-morocco" element={<LocalSeoMoroccoFR />} />

              {/* Dedicated Industry Routes FR */}
              <Route path="secteurs/hotels-resorts" element={<HotelsResorts />} />
              <Route path="secteurs/riads-maisons-hotes" element={<RiadsBoutiqueStays />} />
              <Route path="secteurs/tour-operateurs" element={<TourOperators />} />
              <Route path="secteurs/restaurants-traiteurs" element={<Restaurants />} />
              <Route path="secteurs/pme-entreprises" element={<CorporateSMEs />} />
              <Route path="secteurs/ecommerce" element={<Navigate to="/secteurs/hotels-resorts" replace />} />

              {/* Dedicated Location Routes FR */}
              <Route path="zones" element={<ZonesIndexFR />} />
              <Route path="zones/maroc" element={<MoroccoLocation />} />
              <Route path="zones/casablanca" element={<CasablancaLocation />} />
              <Route path="zones/marrakech" element={<MarrakechLocation />} />
              <Route path="zones/rabat" element={<RabatLocation />} />
              <Route path="zones/agadir" element={<AgadirLocation />} />

              <Route path="realisations" element={<WorkFR />} />
              <Route path="realisations/:slug" element={<CaseStudy />} />
              <Route path="blog" element={<BlogFR />} />
              <Route path="blog/:slug" element={<BlogPost />} />
              <Route path="faq" element={<FAQFR />} />
              <Route path="contact" element={<ContactFR />} />
              <Route path="politique-de-confidentialite" element={<PrivacyPolicyFR />} />
              <Route path="conditions-generales" element={<TermsOfServiceFR />} />
              <Route path="plan-du-site" element={<Sitemap />} />
              <Route path="sitemap" element={<Sitemap />} />
              <Route path="merci" element={<ThankYouFR />} />
            </Route>

            {/* English Routes (Under /en/ - Secondary Language) */}
            <Route path="en" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="expertise/:locationId/:industryId/:serviceId" element={<MatrixLandingPage lang="en" />} />
              <Route path="expertise/:param1/:param2" element={<MatrixLandingPage lang="en" />} />
              <Route path="about" element={<About />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="services" element={<ServicesIndex />} />
              <Route path="services/website-design" element={<WebsiteDesign />} />
              <Route path="web-design-morocco" element={<WebDesignMorocco />} />
              <Route path="web-design-casablanca" element={<WebDesignCasablanca />} />
              <Route path="seo-morocco" element={<SeoMorocco />} />
              <Route path="seo-agency-morocco" element={<SeoAgencyMorocco />} />
              <Route path="seo-agency-casablanca" element={<SeoAgencyCasablanca />} />
              <Route path="hotel-seo" element={<HotelSeo />} />
              <Route path="hotel-digital-marketing" element={<HotelDigitalMarketing />} />
              <Route path="hotel-website-design" element={<HotelWebsiteDesign />} />
              <Route path="direct-booking" element={<DirectBooking />} />
              <Route path="google-ads-morocco" element={<GoogleAdsMorocco />} />
              <Route path="local-seo-casablanca" element={<LocalSeoCasablanca />} />
              <Route path="riad-seo-marrakech" element={<RiadSeoMarrakech />} />
              <Route path="riad-website-design-marrakech" element={<RiadWebsiteDesignMarrakech />} />
              
              {/* Core Services Routes EN */}
              <Route path="services/google-ads" element={<GoogleAds />} />
              <Route path="services/meta-ads" element={<MetaAds />} />
              <Route path="services/tripadvisor-ads" element={<TripadvisorAds />} />
              <Route path="services/bundle-site-ads" element={<Bundle />} />
              <Route path="services/bundle" element={<Navigate to="/en/services/bundle-site-ads" replace />} />
              <Route path="services/ai-seo-optimization" element={<AiSeoOptimization />} />
              <Route path="services/wordpress-seo" element={<WordPressSeo />} />
              <Route path="services/ecommerce-seo" element={<EcommerceSeo />} />
              <Route path="services/google-business-profile" element={<GoogleBusinessProfile />} />
              <Route path="services/local-seo-morocco" element={<LocalSeoMorocco />} />

              {/* Dedicated Industry Routes EN */}
              <Route path="industries/hotels-resorts" element={<HotelsResorts />} />
              <Route path="industries/riads-boutique-hotels" element={<RiadsBoutiqueStays />} />
              <Route path="industries/tour-operators" element={<TourOperators />} />
              <Route path="industries/restaurants-catering" element={<Restaurants />} />
              <Route path="industries/corporate-smes" element={<CorporateSMEs />} />
              <Route path="industries/ecommerce" element={<Navigate to="/en/industries/hotels-resorts" replace />} />

              {/* Dedicated Location Routes EN */}
              <Route path="locations" element={<LocationsIndex />} />
              <Route path="locations/morocco" element={<MoroccoLocation />} />
              <Route path="locations/casablanca" element={<CasablancaLocation />} />
              <Route path="locations/marrakech" element={<MarrakechLocation />} />
              <Route path="locations/rabat" element={<RabatLocation />} />
              <Route path="locations/agadir" element={<AgadirLocation />} />

              <Route path="work" element={<WorkIndex />} />
              <Route path="work/:slug" element={<CaseStudy />} />
              <Route path="blog" element={<BlogIndex />} />
              <Route path="blog/:slug" element={<BlogPost />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-of-service" element={<TermsOfService />} />
              <Route path="sitemap" element={<Sitemap />} />
              <Route path="html-sitemap" element={<Sitemap />} />
              <Route path="thank-you" element={<ThankYou />} />
            </Route>

            {/* Aliases for legacy /fr prefixed URLs -> redirect cleanly to root equivalents */}
            <Route path="fr" element={<Navigate to="/" replace />} />
            <Route path="fr/*" element={<Navigate to="/" replace />} />

            {/* 404 Catch-All */}
            <Route element={<Layout />}><Route path="*" element={<NotFound />} /></Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
