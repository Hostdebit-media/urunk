import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function StickyMobileCTA() {
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');
  
  // Hide on contact or thank you page to avoid redundant CTAs
  if (
    location.pathname === '/contact' || 
    location.pathname === '/en/contact' ||
    location.pathname === '/merci' || 
    location.pathname === '/en/thank-you'
  ) {
    return null;
  }

  const contactPath = isFrench ? '/contact' : '/en/contact';
  const whatsappMsg = isFrench 
    ? "Bonjour Urunk, je souhaite obtenir un devis gratuit pour mon entreprise touristique." 
    : "Hello Urunk, I want a free quote for my tourism business.";
  const whatsappUrl = `https://wa.me/212668802096?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div 
      id="sticky-mobile-cta"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-primary/10 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] shadow-[0_-4px_20px_rgba(0,0,0,0.07)] print:hidden"
    >
      <div className="max-w-md mx-auto flex items-center gap-2.5 w-full">
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_click', { source: 'mobile_sticky_bar' })}
          className="h-12 w-12 bg-[#25D366] hover:bg-[#1ebd5a] active:scale-95 text-white rounded-xl flex items-center justify-center shrink-0 transition-all shadow-xs"
          aria-label={isFrench ? "Discuter sur WhatsApp" : "Chat on WhatsApp"}
          title={isFrench ? "WhatsApp : (+212)0668802096" : "WhatsApp: (+212)0668802096"}
        >
          <MessageCircle size={22} className="stroke-[2.2]" />
        </a>

        <Link
          to={contactPath}
          onClick={() => trackEvent('service_cta_click', { cta_label: 'Get My Free Quote', source: 'mobile_sticky_bar' })}
          className="h-12 flex-1 bg-accent hover:bg-accent-hover active:scale-[0.98] text-white px-3 sm:px-4 rounded-xl font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow-sm shadow-accent/25 transition-all truncate"
        >
          <span className="truncate">{isFrench ? "Obtenir mon devis gratuit" : "Get My Free Quote"}</span>
          <ArrowRight size={16} className="shrink-0 stroke-[2.2]" />
        </Link>
      </div>
    </div>
  );
}
