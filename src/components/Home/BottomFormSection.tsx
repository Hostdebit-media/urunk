import React, { useRef, useState } from 'react';
import { Loader2, Mail, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { trackEvent } from '../../utils/analytics';
import { submitContactLead } from '../../utils/contactClient';
import Section from '../ui/Section';
import Button from '../ui/Button';

export default function BottomFormSection() {
  const navigate = useNavigate();
  const submittingRef = useRef(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState('');
  const [formError, setFormError] = useState('');
  const [showDirectFallback, setShowDirectFallback] = useState(false);

  const whatsappUrl = `https://wa.me/212668802096?text=${encodeURIComponent('Hello Urunk, I would like to request a free audit for my property.')}`;

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submittingRef.current) return;
    setFormError('');
    setShowDirectFallback(false);
    setFormSuccess('');

    if (!privacyAgreed) {
      setFormError('Please agree to the privacy policy to continue.');
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = ((formData.get('name') as string) || '').trim();
    const contactValue = ((formData.get('contact') as string) || '').trim();
    const establishmentType = ((formData.get('establishment_type') as string) || '').trim();

    if (name.length < 2) {
      setFormError('Please enter your name and property or company name.');
      return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue);
    const isValidPhone = /^[+\d][\d\s().-]{7,24}$/.test(contactValue) && contactValue.replace(/\D/g, '').length >= 8;
    if (!isValidEmail && !isValidPhone) {
      setFormError('Please enter a valid email address or WhatsApp number (e.g. +212 600-000000).');
      return;
    }

    if (!establishmentType) {
      setFormError('Please select your business type.');
      return;
    }

    const lastSubmit = localStorage.getItem('form_last_submit');
    const now = Date.now();
    if (lastSubmit && now - parseInt(lastSubmit, 10) < 10000) {
      setFormError('Please wait a few seconds before submitting again.');
      return;
    }

    submittingRef.current = true;
    setFormSubmitting(true);
    try {
      const result = await submitContactLead({
        lang: 'en',
        source: 'home_audit_en',
        name,
        contact: contactValue,
        service: establishmentType,
        privacyAccepted: privacyAgreed,
        _gotcha: ((formData.get('_gotcha') as string) || '').trim(),
      });

      if (result.ok) {
        trackEvent('quote_form_submit', { source: 'homepage_bottom_form_en', service: establishmentType });
        localStorage.setItem('form_last_submit', Date.now().toString());
        setFormSuccess('Thank you! Your request has been received. Redirecting...');
        setTimeout(() => {
          navigate('/en/thank-you');
        }, 1200);
      } else {
        setFormError(result.userMessage);
        setShowDirectFallback(result.showDirectFallback);
      }
    } finally {
      submittingRef.current = false;
      setFormSubmitting(false);
    }
  };

  return (
    <Section tone="dark" id="contact-audit">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-6 pt-1">
          <h2 className="mb-5 text-bg-light">
            Request a free audit of your website and Google Maps listing
          </h2>
          <p className="text-bg-light/85 text-lg mb-8 leading-relaxed max-w-xl">
            Share the name of your property or your current website URL. Within [À CONFIRMER], we will send written technical notes and a clear fixed-price quote.
          </p>

          <address className="not-italic space-y-2 pt-6 border-t border-bg-light/20 text-sm text-bg-light/85 leading-relaxed">
            <p className="font-semibold text-bg-light m-0">Urunk, Casablanca Office</p>
            <p className="m-0">3 Rue El Kadi Lass, Maarif, Casablanca, Morocco</p>
            <p className="m-0 flex flex-wrap gap-x-5 gap-y-1">
              <a
                href="mailto:contact@urunk.com"
                onClick={() => trackEvent('email_click', { email: 'contact@urunk.com' })}
                className="text-bg-light hover:text-white"
              >
                contact@urunk.com
              </a>
              <a
                href="tel:+212668802096"
                onClick={() => trackEvent('call_click', { phone: '+212668802096' })}
                className="text-bg-light hover:text-white"
              >
                +212 668-802096
              </a>
            </p>
          </address>
        </div>

        <div className="lg:col-span-6 w-full">
          <form
            noValidate
            onSubmit={handleFormSubmit}
            className="bg-bg-card rounded-sm p-7 sm:p-9 text-primary border border-border-subtle"
          >
            <h3 className="mb-6">
              Send your property or business details
            </h3>

            {formError && (
              <div role="alert" aria-live="polite" className="mb-5 p-4 bg-bg-alt text-primary rounded-sm border border-accent text-sm space-y-2">
                <p className="m-0">{formError}</p>
                {showDirectFallback && (
                  <div className="flex flex-wrap gap-3 pt-1">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-primary text-white px-3 py-1.5 rounded-sm no-underline font-medium hover:bg-primary-light transition-colors"
                    >
                      <MessageCircle size={14} /> WhatsApp
                    </a>
                    <a
                      href="mailto:contact@urunk.com"
                      className="inline-flex items-center gap-1.5 bg-primary text-white px-3 py-1.5 rounded-sm no-underline font-medium hover:bg-primary-light transition-colors"
                    >
                      <Mail size={14} /> contact@urunk.com
                    </a>
                  </div>
                )}
              </div>
            )}
            {formSuccess && (
              <div role="status" aria-live="polite" className="mb-5 p-4 bg-bg-alt text-primary rounded-sm border border-border-subtle text-sm font-medium">
                {formSuccess}
              </div>
            )}

            <div className="space-y-5 text-sm">
              <div>
                <label htmlFor="home_en_name" className="block font-medium mb-1.5 text-primary">
                  Name and property / company *
                </label>
                <input
                  id="home_en_name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Karim Benali, Riad Dar..."
                  className="w-full border border-border-subtle rounded-sm px-3.5 py-3 bg-bg-card text-primary transition-colors text-base"
                />
              </div>
              <div>
                <label htmlFor="home_en_contact" className="block font-medium mb-1.5 text-primary">
                  Email or WhatsApp number *
                </label>
                <input
                  id="home_en_contact"
                  type="text"
                  name="contact"
                  required
                  placeholder="+212 600-000000 or contact@domain.ma"
                  className="w-full border border-border-subtle rounded-sm px-3.5 py-3 bg-bg-card text-primary transition-colors text-base"
                />
              </div>
              <div>
                <label htmlFor="home_en_establishment" className="block font-medium mb-1.5 text-primary">
                  Business type *
                </label>
                <select
                  id="home_en_establishment"
                  name="establishment_type"
                  required
                  className="w-full border border-border-subtle rounded-sm px-3.5 py-3 bg-bg-card text-primary transition-colors cursor-pointer text-base"
                >
                  <option value="">Select your business type</option>
                  <option value="Riad & Guesthouse">Riad or guesthouse</option>
                  <option value="Hotel & Resort">Hotel or resort</option>
                  <option value="Tour Operator & Travel Agency">Tour operator or excursions</option>
                  <option value="Restaurant & Catering">Restaurant or catering</option>
                  <option value="Corporate & SME">SME or B2B firm</option>
                </select>
              </div>

              <div className="absolute -left-[9999px] -top-[9999px] opacity-0 pointer-events-none w-0 h-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="home_en_website_hp">Website</label>
                <input id="home_en_website_hp" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="home_en_consent"
                  checked={privacyAgreed}
                  onChange={(e) => setPrivacyAgreed(e.target.checked)}
                  className="mt-1 rounded-sm border-border-subtle text-accent cursor-pointer"
                  required
                />
                <label htmlFor="home_en_consent" className="text-xs text-primary/75 cursor-pointer leading-relaxed">
                  I agree to the processing of this information to answer my request under the{' '}
                  <Link to="/en/privacy-policy">privacy policy</Link>.
                </label>
              </div>

              <div className="pt-1">
                <Button
                  type="submit"
                  disabled={formSubmitting}
                  variant="primary"
                  className="w-full gap-2"
                >
                  {formSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send audit request</span>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
