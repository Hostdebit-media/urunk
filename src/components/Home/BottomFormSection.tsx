import React, { useState } from 'react';
import { ArrowRight, Loader2, Mail, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { trackEvent } from '../../utils/analytics';
import { submitContactLead } from '../../utils/contactClient';

export default function BottomFormSection() {
  const navigate = useNavigate();
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState('');
  const [formError, setFormError] = useState('');
  const [showDirectFallback, setShowDirectFallback] = useState(false);

  const whatsappUrl = `https://wa.me/212668802096?text=${encodeURIComponent("Hello Urunk, I would like to request a free audit for my property.")}`;

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

    setFormSubmitting(true);
    trackEvent('quote_form_submit', { source: 'homepage_bottom_form_en', service: establishmentType });

    const result = await submitContactLead({
      lang: 'en',
      source: 'home_audit_en',
      name,
      contact: contactValue,
      service: establishmentType,
      privacyAccepted: privacyAgreed,
      _gotcha: ((formData.get('_gotcha') as string) || '').trim()
    });

    setFormSubmitting(false);

    if (result.ok) {
      localStorage.setItem('form_last_submit', Date.now().toString());
      setFormSuccess('Thank you! Your request has been received. Redirecting...');
      setTimeout(() => {
        navigate('/en/thank-you');
      }, 1200);
    } else {
      setFormError(result.userMessage);
      setShowDirectFallback(result.showDirectFallback);
    }
  };

  return (
    <section className="bg-primary text-white py-16 md:py-20 px-6" id="contact-audit">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-6 pt-1">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold mb-5 text-white leading-[1.12] [text-wrap:balance]">
            Request a free audit of your website and Google Maps listing
          </h2>
          <p className="text-white/85 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
            Share the name of your property or your current website URL. Within 24 business hours, we will send written technical notes and a clear fixed-price quote.
          </p>

          <address className="not-italic space-y-2 pt-6 border-t border-white/15 text-sm text-white/85 leading-relaxed">
            <p className="font-semibold text-white">Urunk · Casablanca Office</p>
            <p>3 Rue El Kadi Lass, Maarif, Casablanca, Morocco</p>
            <p>
              <a
                href="mailto:contact@urunk.com"
                onClick={() => trackEvent('email_click', { email: 'contact@urunk.com' })}
                className="underline underline-offset-4 hover:text-yellow-400 transition-colors"
              >
                contact@urunk.com
              </a>
              {' · '}
              <a
                href="tel:+212668802096"
                onClick={() => trackEvent('call_click', { phone: '+212668802096' })}
                className="underline underline-offset-4 hover:text-yellow-400 transition-colors"
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
            className="bg-white rounded-xl p-6 sm:p-8 text-primary"
          >
            <h3 className="text-xl font-serif font-bold mb-5">
              Send your property or business details
            </h3>

            {formError && (
              <div role="alert" aria-live="polite" className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200 text-xs font-medium space-y-2">
                <p>{formError}</p>
                {showDirectFallback && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-[#25D366] text-white px-2.5 py-1.5 rounded-md font-bold hover:bg-[#1ebd5a] transition-colors"
                    >
                      <MessageCircle size={13} /> WhatsApp
                    </a>
                    <a
                      href="mailto:contact@urunk.com"
                      className="inline-flex items-center gap-1 bg-primary text-white px-2.5 py-1.5 rounded-md font-bold hover:bg-primary/90 transition-colors"
                    >
                      <Mail size={13} /> contact@urunk.com
                    </a>
                  </div>
                )}
              </div>
            )}
            {formSuccess && (
              <div role="status" aria-live="polite" className="mb-4 p-3 bg-green-50 text-green-800 rounded-lg text-xs font-medium">
                {formSuccess}
              </div>
            )}

            <div className="space-y-4 text-xs">
              <div>
                <label htmlFor="home_en_name" className="block font-medium mb-1.5">Name and property / company *</label>
                <input
                  id="home_en_name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Karim Benali, Riad Dar..."
                  className="w-full border border-primary/20 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="home_en_contact" className="block font-medium mb-1.5">Email or WhatsApp number *</label>
                <input
                  id="home_en_contact"
                  type="text"
                  name="contact"
                  required
                  placeholder="+212 600-000000 or contact@domain.ma"
                  className="w-full border border-primary/20 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="home_en_establishment" className="block font-medium mb-1.5">Business type *</label>
                <select
                  id="home_en_establishment"
                  name="establishment_type"
                  required
                  className="w-full border border-primary/20 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-primary transition-colors cursor-pointer text-sm bg-white"
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

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="home_en_consent"
                  checked={privacyAgreed}
                  onChange={(e) => setPrivacyAgreed(e.target.checked)}
                  className="mt-0.5 rounded border-primary/20 text-accent cursor-pointer"
                  required
                />
                <label htmlFor="home_en_consent" className="text-[11px] text-primary/70 cursor-pointer leading-snug">
                  I agree to the processing of this information to answer my request under the{' '}
                  <Link to="/en/privacy-policy" className="underline text-accent">
                    privacy policy
                  </Link>.
                </label>
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {formSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send audit request</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
