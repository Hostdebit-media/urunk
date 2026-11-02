import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { getCookieConsent, setCookieConsent } from '../utils/analytics';

export default function CookieConsent() {
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 10000);
      const handleScroll = () => {
        if (window.scrollY > 320) {
          setVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        clearTimeout(timer);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    const handleReopen = () => {
      setVisible(true);
    };
    window.addEventListener('open_cookie_banner', handleReopen);
    return () => window.removeEventListener('open_cookie_banner', handleReopen);
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    setCookieConsent(true);
    setVisible(false);
  };

  const handleDecline = () => {
    setCookieConsent(false);
    setVisible(false);
  };

  return (
    <aside
      aria-label={isFrench ? 'Gestion du consentement aux cookies' : 'Cookie consent management'}
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-primary text-bg-light p-6 rounded-sm border border-border-subtle/30"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-4">
          <p className="font-serif text-lg font-normal text-bg-light m-0">
            {isFrench ? 'Vie Privée & Cookies' : 'Privacy & Cookies'}
          </p>
          <button
            type="button"
            onClick={handleDecline}
            aria-label={isFrench ? 'Fermer et refuser' : 'Close and decline'}
            className="text-bg-light/70 hover:text-bg-light p-1 rounded-sm transition-colors -mr-1 cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>
        <p className="text-xs text-bg-light/85 leading-relaxed m-0">
          {isFrench
            ? "Nous utilisons des cookies analytiques anonymisés pour mesurer l'audience et perfectionner notre service. Vous pouvez choisir d'accepter ou refuser."
            : 'We use anonymized analytics cookies to measure site performance and enhance your browsing experience. You can accept or decline at any time.'}
        </p>
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleAccept}
            className="bg-accent hover:bg-accent-hover text-white text-xs font-semibold px-4 py-2 rounded-sm transition-colors cursor-pointer"
          >
            {isFrench ? 'Tout accepter' : 'Accept All'}
          </button>
          <button
            type="button"
            onClick={handleDecline}
            className="bg-transparent hover:bg-bg-light/10 text-bg-light text-xs font-medium px-3.5 py-2 rounded-sm transition-colors border border-bg-light/25 cursor-pointer"
          >
            {isFrench ? 'Refuser' : 'Decline'}
          </button>
          <Link
            to={isFrench ? '/politique-de-confidentialite' : '/en/privacy-policy'}
            className="text-xs text-bg-light/85 hover:text-bg-light underline underline-offset-4 ml-auto py-1"
          >
            {isFrench ? 'Politique de confidentialité' : 'Privacy policy'}
          </Link>
        </div>
      </div>
    </aside>
  );
}
