import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
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

    const form = e.currentTarget;
    const formData = new FormData(form);
    const gotcha = formData.get('_gotcha');
    if (gotcha) {
      setFormSuccess('Merci ! Votre demande a bien été envoyée.');
      return;
    }

    const lastSubmit = localStorage.getItem('form_last_submit');
    const now = Date.now();
    if (lastSubmit && now - parseInt(lastSubmit, 10) < 10000) {
      setFormError('Veuillez patienter quelques secondes avant un nouvel envoi.');
      return;
    }

    if (!privacyAgreed) {
      setFormError('Veuillez accepter la politique de confidentialité pour continuer.');
      return;
    }

    localStorage.setItem('form_last_submit', now.toString());
    setFormSubmitting(true);

    trackEvent('quote_form_submit', { source: 'homepage_bottom_form', service: formData.get('establishment_type') });

    try {
      const res = await fetch('https://formsubmit.co/ajax/contact@urunk.com', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        setFormSuccess('Merci ! Votre demande a été envoyée. Redirection en cours...');
        setTimeout(() => {
          window.location.href = '/merci';
        }, 1200);
      } else {
        form.submit();
      }
    } catch {
      form.submit();
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <section className="bg-primary text-white py-16 md:py-20 px-6" id="contact-audit-fr">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-6 pt-1">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold mb-5 text-white leading-[1.12] [text-wrap:balance]">
            Demandez un audit gratuit de votre site et de votre fiche Google Maps
          </h2>
          <p className="text-white/85 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
            Indiquez le nom de votre établissement ou l'adresse de votre site actuel. Vous recevez par écrit sous 24 heures ouvrées nos observations techniques et une proposition forfaitaire claire.
          </p>

          <address className="not-italic space-y-2 pt-6 border-t border-white/15 text-sm text-white/85 leading-relaxed">
            <p className="font-semibold text-white">Urunk · Bureau de Casablanca</p>
            <p>3 Rue El Kadi Lass, Maarif, Casablanca, Maroc</p>
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
            action="https://formsubmit.co/contact@urunk.com"
            method="POST"
            onSubmit={handleFormSubmit}
            className="bg-white rounded-xl p-6 sm:p-8 text-primary"
          >
            <h3 className="text-xl font-serif font-bold mb-5">
              Envoyer les informations de votre établissement
            </h3>

            {formError && (
              <div role="alert" aria-live="polite" className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-xs font-medium">
                {formError}
              </div>
            )}
            {formSuccess && (
              <div role="status" aria-live="polite" className="mb-4 p-3 bg-green-50 text-green-800 rounded-lg text-xs font-medium">
                {formSuccess}
              </div>
            )}

            <div className="space-y-4 text-xs">
              <div>
                <label htmlFor="home_fr_name" className="block font-medium mb-1.5">Nom et établissement *</label>
                <input
                  id="home_fr_name"
                  type="text"
                  name="name"
                  required
                  placeholder="Ex. Karim Benali, Riad Dar..."
                  className="w-full border border-primary/20 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="home_fr_contact" className="block font-medium mb-1.5">E-mail ou numéro WhatsApp *</label>
                <input
                  id="home_fr_contact"
                  type="text"
                  name="contact"
                  required
                  placeholder="+212 600-000000 ou contact@domaine.ma"
                  className="w-full border border-primary/20 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="home_fr_establishment" className="block font-medium mb-1.5">Activité principale *</label>
                <select
                  id="home_fr_establishment"
                  name="establishment_type"
                  required
                  className="w-full border border-primary/20 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-primary transition-colors cursor-pointer text-sm bg-white"
                >
                  <option value="">Sélectionnez votre activité</option>
                  <option value="Riad & Maison d'hôtes">Riad ou maison d'hôtes</option>
                  <option value="Hôtel & Resort">Hôtel ou complexe</option>
                  <option value="Agence de voyage & Tour-opérateur">Agence d'excursions ou tour-opérateur</option>
                  <option value="Restaurant & Traiteur">Restaurant ou traiteur</option>
                  <option value="PME & Entreprise">PME ou cabinet de services</option>
                </select>
              </div>

              <div className="absolute -left-[9999px] -top-[9999px] opacity-0 pointer-events-none w-0 h-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="home_fr_website_hp">Site web</label>
                <input id="home_fr_website_hp" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="home_fr_consent"
                  checked={privacyAgreed}
                  onChange={(e) => setPrivacyAgreed(e.target.checked)}
                  className="mt-0.5 rounded border-primary/20 text-accent cursor-pointer"
                  required
                />
                <label htmlFor="home_fr_consent" className="text-[11px] text-primary/70 cursor-pointer leading-snug">
                  J'accepte le traitement de ces données pour répondre à ma demande selon la{' '}
                  <Link to="/politique-de-confidentialite" className="underline text-accent">
                    politique de confidentialité
                  </Link>.
                </label>
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  <span>Envoyer ma demande d'audit</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
