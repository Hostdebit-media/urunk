import React, { useEffect, lazy, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import LanguageBanner from './LanguageBanner';
import Breadcrumbs from './Breadcrumbs';
import StickyMobileCTA from './StickyMobileCTA';
import Header from './Header';

const FooterNav = lazy(() => import('./navigation/FooterNav'));
const CookieConsent = lazy(() => import('./CookieConsent'));

export default function Layout() {
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('config', 'G-Z2PDXKNQT8', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-screen flex flex-col bg-bg-light font-sans antialiased text-primary selection:bg-accent/20 selection:text-primary w-full overflow-x-clip">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2.5 focus:bg-accent focus:text-white focus:font-semibold focus:rounded-sm focus:no-underline text-sm"
      >
        {isFrench ? 'Aller au contenu principal' : 'Skip to main content'}
      </a>

      <Helmet>
        <html lang={isFrench ? 'fr' : 'en'} />
      </Helmet>

      <div className="print:hidden w-full overflow-hidden">
        <LanguageBanner />
      </div>

      <Header />

      <main id="main-content" tabIndex={-1} className="flex-grow w-full overflow-x-hidden focus:outline-none">
        <Breadcrumbs />
        <div className="w-full overflow-x-hidden">
          <Outlet />
        </div>
      </main>

      <StickyMobileCTA />

      <Suspense fallback={<div className="h-40 bg-primary" />}>
        <FooterNav isFrench={isFrench} />
      </Suspense>

      <Suspense fallback={null}>
        <CookieConsent />
      </Suspense>
    </div>
  );
}
