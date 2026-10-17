import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { getEquivalentRoute } from '../data/slugMappings';

export default function LanguageBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [targetLang, setTargetLang] = useState<'en' | 'fr'>('en');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeenBanner = localStorage.getItem('urunk-lang-banner');
    const userPrefersLang = localStorage.getItem('urunk-lang');
    const isFrench = !location.pathname.startsWith('/en');
    
    if (!hasSeenBanner && !userPrefersLang) {
      const browserLang = (navigator.language || (navigator as any).userLanguage || '').toLowerCase();
      if (isFrench && browserLang.startsWith('en')) {
        setTargetLang('en');
        setShowBanner(true);
      } else if (!isFrench && browserLang.startsWith('fr')) {
        setTargetLang('fr');
        setShowBanner(true);
      }
    }
  }, [location.pathname]);

  if (!showBanner) return null;

  const handleSwitch = () => {
    localStorage.setItem('urunk-lang', targetLang);
    localStorage.setItem('urunk-lang-banner', 'dismissed');
    setShowBanner(false);
    
    const nextPath = getEquivalentRoute(location.pathname);
    const nextRoute = nextPath + location.search + location.hash;
    window.scrollTo(0, 0);
    navigate(nextRoute);
  };

  const dismissBanner = () => {
    localStorage.setItem('urunk-lang-banner', 'dismissed');
    setShowBanner(false);
  };

  return (
    <div className="bg-primary text-white py-2.5 px-4 sm:px-6 text-xs sm:text-sm flex flex-wrap justify-center items-center gap-2 sm:gap-4 relative z-[60] text-center pr-12 sm:pr-14 max-w-full overflow-hidden">
      <p className="font-medium">
        {targetLang === 'en' ? "Prefer to browse in English?" : "Vous préférez le français ?"}
      </p>
      <button 
        onClick={handleSwitch} 
        className="bg-accent hover:bg-accent-hover active:scale-95 text-white px-3.5 py-1.5 min-h-[36px] rounded-full font-semibold transition-all text-xs shadow-xs shrink-0 cursor-pointer"
      >
        {targetLang === 'en' ? "Continue in English →" : "Passer en Français →"}
      </button>
      <button 
        onClick={dismissBanner}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center hover:text-accent transition-colors cursor-pointer"
        aria-label="Fermer / Close"
      >
        <X size={18} />
      </button>
    </div>
  );
}
