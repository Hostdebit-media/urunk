import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function StickyMobileCTA() {
  const location = useLocation();
  const isFrench = !location.pathname.startsWith('/en');

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
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-bg-light border-t border-border-subtle px-4 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] print:hidden"
    >
      <div className="max-w-md mx-auto flex items-center gap-2.5 w-full">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_click', { source: 'mobile_sticky_bar' })}
          className="h-11 w-11 bg-primary hover:bg-primary-light text-white rounded-sm no-underline flex items-center justify-center shrink-0 transition-colors"
          aria-label={isFrench ? 'Discuter sur WhatsApp' : 'Chat on WhatsApp'}
        >
          <MessageCircle size={19} />
        </a>

        <Link
          to={contactPath}
          onClick={() => trackEvent('service_cta_click', { cta_label: 'Request Audit', source: 'mobile_sticky_bar' })}
          className="h-11 flex-1 bg-accent hover:bg-accent-hover text-white px-4 rounded-sm no-underline font-semibold text-sm text-center flex items-center justify-center transition-colors truncate"
        >
          <span className="truncate">{isFrench ? 'Demander un audit gratuit' : 'Request a free audit'}</span>
        </Link>
      </div>
    </div>
  );
}
