import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Cookie, X } from 'lucide-react';
import { getCookieConsent, setCookieConsent } from '../utils/analytics';

export default function CookieConsent() {
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check initial consent status
    const consent = getCookieConsent();
    if (!consent) {
      // Small delay for smooth entry after initial paint
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
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
      aria-label={isFrench ? "Gestion du consentement aux cookies" : "Cookie consent management"}
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-primary text-white p-5 sm:p-6 rounded-2xl shadow-2xl border border-white/15 backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
    >
      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5">
          <Cookie size={20} />
        </div>
        <div className="space-y-2 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-serif font-bold text-white flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-accent" />
              {isFrench ? "Vie Privée & Cookies" : "Privacy & Cookies"}
            </h3>
            <button
              onClick={handleDecline}
              aria-label={isFrench ? "Fermer et refuser" : "Close and decline"}
              className="text-white/60 hover:text-white p-1 rounded-lg transition-colors -mr-1"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-xs text-white/80 font-light leading-relaxed">
            {isFrench
              ? "Nous utilisons des cookies analytiques anonymisés pour mesurer l'audience et perfectionner notre service. Vous pouvez choisir d'accepter ou refuser."
              : "We use anonymized analytics cookies to measure site performance and enhance your browsing experience. You can accept or decline at any time."}
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <button
              onClick={handleAccept}
              className="bg-accent hover:bg-accent-hover text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-xs cursor-pointer"
            >
              {isFrench ? "Tout accepter" : "Accept All"}
            </button>
            <button
              onClick={handleDecline}
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-3.5 py-2 rounded-xl transition-colors border border-white/10 cursor-pointer"
            >
              {isFrench ? "Refuser" : "Decline"}
            </button>
            <Link
              to={isFrench ? "/politique-de-confidentialite" : "/en/privacy-policy"}
              className="text-[11px] text-white/70 hover:text-yellow-400 underline transition-colors ml-auto py-1"
            >
              {isFrench ? "En savoir plus" : "Learn More"}
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
