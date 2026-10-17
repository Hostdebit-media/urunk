import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import { CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function ThankYou() {
  useEffect(() => {
    trackEvent('conversion_thank_you_view', { page: '/thank-you' });
  }, []);

  const whatsappUrl = `https://wa.me/212668802096?text=${encodeURIComponent("Hello Urunk, I just requested a quote on your website and want to chat directly.")}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-16 px-6 max-w-3xl mx-auto">
      <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
      <SEO 
        title="Thank You | Urunk"
        description="Your quote request has been received."
      />
      
      <div className="bg-green-50 text-accent p-4 rounded-full mb-6">
        <CheckCircle2 size={48} />
      </div>

      <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 text-center">
        Thank You! Your Request Has Been Received.
      </h1>
      
      <p className="text-lg text-primary/80 text-center mb-8 max-w-lg font-light leading-relaxed">
        We have received your details. Our tourism digital strategy team will review your website and requirements and send you a custom quote within 24 hours.
      </p>

      {/* Next Steps Card */}
      <div className="w-full bg-bg-alt border border-primary/10 rounded-2xl p-6 md:p-8 mb-8 space-y-4">
        <h2 className="font-serif font-bold text-xl text-primary flex items-center gap-2">
          <Clock size={20} className="text-accent" /> What happens next?
        </h2>
        <ol className="space-y-3 text-sm text-primary/80 list-decimal list-inside leading-relaxed">
          <li><strong>Initial Review:</strong> We analyze your current website speed, OTA positioning, and ad performance.</li>
          <li><strong>Custom Quote:</strong> We prepare a clear, fixed-price proposal with defined deliverables.</li>
          <li><strong>Quick Call / Email:</strong> We send the quote directly to your inbox or WhatsApp with optional call booking.</li>
        </ol>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_click', { source: 'thank_you_page' })}
          className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebd5a] text-white px-6 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
        >
          <MessageCircle size={20} />
          <span>Need a Faster Response? Chat on WhatsApp</span>
        </a>
        
        <Link 
          to="/en/work" 
          className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-6 py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
        >
          <span>Explore Tourism Strategy Examples</span>
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}