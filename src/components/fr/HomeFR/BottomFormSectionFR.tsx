import React, { useState } from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../../utils/analytics';

export default function BottomFormSectionFR() {
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
      setFormSuccess('Merci ! Votre demande a été envoyée avec succès.');
      return;
    }

    // Rate limiting check
    const lastSubmit = localStorage.getItem('form_last_submit');
    const now = Date.now();
    if (lastSubmit && now - parseInt(lastSubmit, 10) < 10000) {
      setFormError('Veuillez patienter quelques secondes avant de soumettre à nouveau.');
      return;
    }

    if (!privacyAgreed) {
      setFormError('Veuillez accepter la politique de confidentialité pour continuer.');
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
        setFormSuccess('Merci ! Votre demande a été envoyée avec succès. Redirection en cours...');
        setTimeout(() => {
          window.location.href = '/merci';
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
            Demandez Votre Devis
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-white leading-tight">
            Prêt à <span className="text-yellow-400 italic font-semibold">multiplier vos réservations directes ?</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 font-light leading-relaxed">
            Parlez-nous de votre établissement. Nous vous répondrons sous 24h avec un devis clair, forfaitaire et un plan d'action personnalisé — sans engagement.
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
            <h3 className="text-2xl font-serif font-bold mb-6">Demander un <span className="text-accent italic font-semibold">Audit Gratuit</span></h3>
            
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
                <label htmlFor="home_name" className="block font-medium mb-1">Votre Nom *</label>
                <input id="home_name" type="text" name="name" required placeholder="Omar Aziz" className="w-full border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm" />
              </div>
              <div>
                <label htmlFor="home_contact" className="block font-medium mb-1">Email ou WhatsApp *</label>
                <input id="home_contact" type="text" name="contact" required placeholder="+212 600-000000 ou vous@etablissement.com" className="w-full border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm" />
              </div>
              <div>
                <label htmlFor="home_establishment" className="block font-medium mb-1">Type d'établissement *</label>
                <select id="home_establishment" name="establishment_type" required className="w-full border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer text-sm bg-white">
                  <option value="">Sélectionnez votre type d'établissement</option>
                  <option value="Riad & Maison d'hôtes">Riad & Maison d'hôtes</option>
                  <option value="Hôtel & Resort">Hôtel & Resort</option>
                  <option value="Agence de voyage & Tour-opérateur">Agence de voyage & Tour-opérateur</option>
                  <option value="PME & Entreprise">PME & Entreprise</option>
                  <option value="Autre">Autre activité</option>
                </select>
              </div>

              {/* Anti-spam honeypot (off-screen, invisible to humans, traps spam bots) */}
              <div className="absolute -left-[9999px] -top-[9999px] opacity-0 pointer-events-none w-0 h-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="home_fr_website_hp">Site Web</label>
                <input id="home_fr_website_hp" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
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
                  En soumettant ce formulaire, vous acceptez notre <Link to="/politique-de-confidentialite" className="underline text-accent">Politique de Confidentialité</Link>.
                </label>
              </div>
              
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={formSubmitting}
                  className="w-full bg-accent hover:bg-accent-hover active:scale-[0.99] text-white py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-75"
                >
                  <span>Demander un Audit Gratuit</span>
                  <ArrowRight size={16} />
                </button>
                <p className="text-[11px] text-primary/60 text-center mt-3 font-medium">
                  Vos données sont confidentielles. Analyse personnalisée sous 24h sans engagement.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
