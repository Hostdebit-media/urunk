import React, { useState } from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../utils/analytics';

export default function BottomFormSection() {
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState('');
  const [formError, setFormError] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    // Honeypot check
    const form = e.currentTarget;
    const formData = new FormData(form);
    const gotcha = formData.get('_gotcha');
    if (gotcha) {
      setFormSuccess('Thank you! Your quote request has been sent.');
      return;
    }

    // Rate limiting check
    const lastSubmit = localStorage.getItem('form_last_submit');
    const now = Date.now();
    if (lastSubmit && now - parseInt(lastSubmit, 10) < 10000) {
      setFormError('Please wait a few seconds before submitting again.');
      return;
    }

    if (!privacyAgreed) {
      setFormError('Please agree to the privacy policy to submit.');
      return;
    }

    localStorage.setItem('form_last_submit', now.toString());
    setFormSubmitting(true);

    trackEvent('quote_form_submit', { source: 'homepage_bottom_form', service: formData.get('service') });

    try {
      const res = await fetch('https://formsubmit.co/ajax/contact@urunk.com', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        setFormSuccess('Thank you! Your quote request has been sent. Redirecting...');
        setTimeout(() => {
          window.location.href = '/en/thank-you';
        }, 1200);
      } else {
        form.submit();
      }
    } catch (err) {
      form.submit();
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <section className="bg-primary text-white py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div className="flex-1 pt-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            Start Your Quote
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-white leading-tight">
            Ready to <span className="text-yellow-400 italic font-semibold">increase your direct bookings?</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 font-light leading-relaxed">
            Tell us about your business goals. We will reply within 24 hours with a transparent, fixed quote and a simple step-by-step proposal — no obligation.
          </p>
          
          <div className="space-y-4 mb-8">
            <a 
              href="mailto:contact@urunk.com" 
              onClick={() => trackEvent('email_click', { email: 'contact@urunk.com' })}
              className="flex items-center gap-3 hover:text-yellow-400 transition-colors text-base"
            >
              <Mail size={18} /> contact@urunk.com
            </a>
            <a 
              href="tel:+212668802096" 
              onClick={() => trackEvent('call_click', { phone: '+212668802096' })}
              className="flex items-center gap-3 hover:text-yellow-400 transition-colors text-base"
            >
              <Phone size={18} /> (+212)0668802096
            </a>
          </div>
        </div>

        <div className="flex-1 w-full">
          <form action="https://formsubmit.co/contact@urunk.com" method="POST" onSubmit={handleFormSubmit} className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 text-primary shadow-xl">
            <h3 className="text-2xl font-serif font-bold mb-6">Request a <span className="text-accent italic font-semibold">Free Audit</span></h3>
            
            {formError && (
              <div role="alert" aria-live="polite" className="mb-4 p-3 bg-red-50 text-red-600 rounded-xl text-xs font-medium">
                {formError}
              </div>
            )}
            {formSuccess && (
              <div role="status" aria-live="polite" className="mb-4 p-3 bg-green-50 text-green-700 rounded-xl text-xs font-medium">
                {formSuccess}
              </div>
            )}

            <div className="space-y-4 text-xs">
              <div>
                <label htmlFor="home_name" className="block font-medium mb-1">Your Name *</label>
                <input id="home_name" type="text" name="name" required placeholder="Omar Aziz" className="w-full border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm" />
              </div>
              <div>
                <label htmlFor="home_contact" className="block font-medium mb-1">Email or WhatsApp *</label>
                <input id="home_contact" type="text" name="contact" required placeholder="+212 600-000000 or you@business.com" className="w-full border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm" />
              </div>
              <div>
                <label htmlFor="home_establishment" className="block font-medium mb-1">Property / Business Type *</label>
                <select id="home_establishment" name="establishment_type" required className="w-full border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer text-sm bg-white">
                  <option value="">Select your property type</option>
                  <option value="Riad & Boutique Stay">Riad & Boutique Stay</option>
                  <option value="Hotel & Resort">Hotel & Resort</option>
                  <option value="Tour Operator & Travel Agency">Tour Operator & Travel Agency</option>
                  <option value="Corporate & SME">Corporate & SME</option>
                  <option value="Other">Other Business</option>
                </select>
              </div>

              {/* Anti-spam honeypot (off-screen, invisible to humans, traps spam bots) */}
              <div className="absolute -left-[9999px] -top-[9999px] opacity-0 pointer-events-none w-0 h-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="home_website_hp">Website URL</label>
                <input id="home_website_hp" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input 
                  type="checkbox" 
                  id="home_consent" 
                  checked={privacyAgreed}
                  onChange={(e) => setPrivacyAgreed(e.target.checked)}
                  className="mt-1 rounded border-primary/20 text-accent cursor-pointer"
                  required
                />
                <label htmlFor="home_consent" className="text-[11px] text-primary/70 cursor-pointer leading-tight">
                  By submitting this form, you agree to our <Link to="/en/privacy-policy" className="underline text-accent">Privacy Policy</Link>.
                </label>
              </div>
              
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={formSubmitting}
                  className="w-full bg-accent hover:bg-accent-hover active:scale-[0.99] text-white py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-75"
                >
                  <span>Request a Free Audit</span>
                  <ArrowRight size={16} />
                </button>
                <p className="text-[11px] text-primary/60 text-center mt-3 font-medium">
                  Your data is secure. We provide a customized strategic review within 24 hours. No obligation.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
