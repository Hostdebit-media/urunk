import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Section from '../components/ui/Section';
import Hairline from '../components/ui/Hairline';
import Button from '../components/ui/Button';
import { trackEvent } from '../utils/analytics';

export default function ThankYou() {
  useEffect(() => {
    trackEvent('conversion_thank_you_view', { page: '/thank-you' });
  }, []);

  const whatsappUrl = `https://wa.me/212668802096?text=${encodeURIComponent("Hello Urunk, I just requested a quote on your website and want to chat directly.")}`;

  return (
    <Section tone="light" className="pt-28 md:pt-36">
      <SEO
        title="Thank You | Urunk"
        description="Your quote request has been received."
        noindex={true}
      />

      <div className="max-w-[68ch] space-y-8">
        <div>
          <p className="text-sm font-medium text-accent mb-4">Request Confirmed</p>
          <h1 className="mb-6 text-primary">
            Thank You! Your Request Has Been Received.
          </h1>
          <p className="text-lg text-primary/85 leading-relaxed">
            We have received your details. Our tourism digital strategy team will review your website and requirements and send you a custom quote within [À CONFIRMER].
          </p>
        </div>

        <Hairline />

        <div className="bg-bg-alt border border-border-subtle rounded-sm p-6 md:p-8 space-y-4">
          <h2 className="text-primary text-2xl">What happens next?</h2>
          <ol className="space-y-3 text-base text-primary/85 list-decimal list-inside leading-relaxed">
            <li><strong>Initial Review:</strong> We analyze your current website speed, OTA positioning, and ad performance.</li>
            <li><strong>Custom Quote:</strong> We prepare a clear, fixed-price proposal with defined deliverables.</li>
            <li><strong>Quick Call / Email:</strong> We send the quote directly to your inbox or WhatsApp with optional call booking.</li>
          </ol>
        </div>

        <div className="flex flex-wrap items-center gap-8 pt-2">
          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { source: 'thank_you_page' })}
            variant="primary"
          >
            Need a Faster Response? Chat on WhatsApp
          </Button>

          <Link to="/en/work" className="font-medium text-accent">
            Tourism Strategy Examples
          </Link>
        </div>
      </div>
    </Section>
  );
}