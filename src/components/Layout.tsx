import React, { useEffect, lazy, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import LanguageBanner from './LanguageBanner';
import Breadcrumbs from './Breadcrumbs';
import StickyMobileCTA from './StickyMobileCTA';
import Header from './Header';

// Code-split below-the-fold components to reduce initial JS execution and TBT
const FooterNav = lazy(() => import('./navigation/FooterNav'));
const CookieConsent = lazy(() => import('./CookieConsent'));

export default function Layout() {
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');

  const localBusinessSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://urunk.com/#casablanca",
      "name": "Urunk Casablanca",
      "image": "https://urunk.com/logo.png",
      "url": "https://urunk.com",
      "telephone": "+212668802096",
      "email": "urunkagency@gmail.com",
      "priceRange": "$$$",
      "description": isFrench 
        ? "Agence de création de site web hôtelier et gestion Google Ads & TripAdvisor à Casablanca, Maroc."
        : "Hotel website design and Google Ads & TripAdvisor management agency in Casablanca, Morocco.",
      "sameAs": [
        "https://facebook.com/urunk",
        "https://instagram.com/urunk",
        "https://linkedin.com/company/urunk",
        "https://maps.google.com/?cid=urunk-casablanca"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "114, Angle Boulevard 11 Janvier et Rue Mustapha El Maani, 6ème Étage N°32",
        "addressLocality": "Casablanca",
        "addressRegion": "Casablanca-Settat",
        "postalCode": "20250",
        "addressCountry": "MA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 33.589886,
        "longitude": -7.616644
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "areaServed": [
        { "@type": "Country", "name": isFrench ? "Maroc" : "Morocco" },
        { "@type": "AdministrativeArea", "name": isFrench ? "Monde entier" : "Worldwide" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://urunk.com/#marrakech",
      "name": "Urunk Marrakech",
      "image": "https://urunk.com/logo.png",
      "url": "https://urunk.com",
      "telephone": "+212668802096",
      "email": "contact@urunk.com",
      "priceRange": "$$$",
      "description": isFrench
        ? "Agence marketing hôtellerie & riads à Marrakech, spécialiste réservations directes et Google Ads."
        : "Hospitality & riad marketing agency in Marrakech, specializing in direct bookings and Google Ads.",
      "sameAs": [
        "https://facebook.com/urunk",
        "https://instagram.com/urunk",
        "https://linkedin.com/company/urunk",
        "https://maps.google.com/?cid=urunk-marrakech"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2ème Étage, N°19, Immeuble 35, Lotissement Al Massar",
        "addressLocality": "Marrakech",
        "addressRegion": "Marrakech-Safi",
        "postalCode": "40100",
        "addressCountry": "MA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 31.629472,
        "longitude": -7.981084
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "areaServed": [
        { "@type": "Country", "name": isFrench ? "Maroc" : "Morocco" },
        { "@type": "AdministrativeArea", "name": isFrench ? "Monde entier" : "Worldwide" }
      ]
    }
  ];

  useEffect(() => {
    // Scroll to top of page on route / language change
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    // Track page views in Google Analytics on SPA route navigation
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('config', 'G-Z2PDXKNQT8', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-screen flex flex-col bg-bg-light font-sans antialiased text-primary selection:bg-accent/20 selection:text-accent w-full overflow-x-hidden">
      {/* Skip to Main Content Link (WCAG 2.2 AA) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2.5 focus:bg-accent focus:text-white focus:font-bold focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white transition-all text-xs uppercase tracking-wider"
      >
        {isFrench ? "Aller au contenu principal" : "Skip to main content"}
      </a>

      <Helmet>
        <html lang={isFrench ? 'fr' : 'en'} />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchemas)}
        </script>
      </Helmet>

      <div className="print:hidden w-full overflow-hidden">
        <LanguageBanner />
      </div>
      
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Content View Container */}
      <main id="main-content" tabIndex={-1} className="flex-grow w-full overflow-x-hidden focus:outline-none">
        <Breadcrumbs />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.95 }}
            transition={{ duration: 0.15 }}
            className="w-full overflow-x-hidden"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <StickyMobileCTA />

      {/* Enterprise Footer Navigation - Lazy loaded below the fold */}
      <Suspense fallback={<div className="h-40 bg-bg-light" />}>
        <FooterNav isFrench={isFrench} />
      </Suspense>

      {/* GDPR / Privacy Cookie Consent Banner - Deferred until needed */}
      <Suspense fallback={null}>
        <CookieConsent />
      </Suspense>
    </div>
  );
}
