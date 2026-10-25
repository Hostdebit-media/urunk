import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function StickyMobileCTA() {
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');

  // Hide on homepages (which already have hero + inline audit form), contact, and thank-you pages
  if (
    location.pathname === '/' ||
    location.pathname === '/en' ||
    location.pathname === '/en/' ||
    location.pathname === '/contact' ||
    location.pathname === '/en/contact' ||
    location.pathname === '/merci' ||
    location.pathname === '/en/thank-you'
  ) {
    return null;
  }

  const contactPath = isFrench ? '/contact' : '/en/contact';
  const whatsappMsg = isFrench
    ? 'Bonjour Urunk, je souhaite demander un audit pour mon établissement.'
    : 'Hello Urunk, I would like to request an audit for my business.';
  const whatsappUrl = `https://wa.me/212668802096?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div
      id="sticky-mobile-cta"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-primary/10 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] print:hidden"
    >
      <div className="max-w-md mx-auto flex items-center gap-2.5 w-full">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_click', { source: 'mobile_sticky_bar' })}
          className="h-11 w-11 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-lg flex items-center justify-center shrink-0 transition-colors"
          aria-label={isFrench ? 'Discuter sur WhatsApp' : 'Chat on WhatsApp'}
        >
          <MessageCircle size={20} />
        </a>

        <Link
          to={contactPath}
          onClick={() => trackEvent('service_cta_click', { cta_label: 'Request Audit', source: 'mobile_sticky_bar' })}
          className="h-11 flex-1 bg-accent hover:bg-accent-hover text-white px-4 rounded-lg font-semibold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-colors truncate"
        >
          <span className="truncate">{isFrench ? 'Demander un audit gratuit' : 'Request a free audit'}</span>
          <ArrowRight size={15} className="shrink-0" />
        </Link>
      </div>
    </div>
  );
}
