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
      "@id": "https://urunk.com/#localbusiness",
      "name": "Urunk",
      "legalName": "Urunk Digital Agency",
      "image": "https://urunk.com/logo.png",
      "url": "https://urunk.com",
      "telephone": "+212668802096",
      "email": "contact@urunk.com",
      "priceRange": "$$$",
      "description": isFrench 
        ? "Agence de création de site web hôtelier, SEO local et gestion Google Ads & TripAdvisor basée à Casablanca, Maroc."
        : "Hotel website design, local SEO, and Google Ads & TripAdvisor management agency based in Casablanca, Morocco.",
      "sameAs": [
        "https://facebook.com/urunk",
        "https://instagram.com/urunk",
        "https://linkedin.com/company/urunk"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3 Rue El Kadi Lass, Maarif",
        "addressLocality": "Casablanca",
        "addressRegion": "Casablanca-Settat",
        "postalCode": "20330",
        "addressCountry": "MA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 33.5855,
        "longitude": -7.6365
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "areaServed": [
        { "@type": "Country", "name": isFrench ? "Maroc" : "Morocco" },
        { "@type": "City", "name": "Casablanca" },
        { "@type": "City", "name": "Marrakech" },
        { "@type": "City", "name": "Rabat" },
        { "@type": "City", "name": "Agadir" },
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
    <div className="min-h-screen flex flex-col bg-bg-light font-sans antialiased text-primary selection:bg-accent/20 selection:text-accent w-full overflow-x-clip">
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
