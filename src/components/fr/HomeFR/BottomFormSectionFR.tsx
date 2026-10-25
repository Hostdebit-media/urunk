import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
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
    <section className="bg-primary text-white py-20 px-6" id="contact-audit-fr">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-6 pt-2">
          <p className="text-sm font-medium text-yellow-400 mb-3">
            Premier échange et diagnostic
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 text-white leading-tight">
            Demandez un audit de votre site et de votre visibilité locale
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
            Indiquez le nom de votre établissement ou de votre entreprise. Nous vous répondons sous 24 heures ouvrées avec une analyse claire des points à corriger et un devis forfaitaire sans obligation d'engagement.
          </p>

          <div className="space-y-3.5 pt-6 border-t border-white/15 text-sm text-white/85">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-yellow-400 shrink-0 mt-0.5" />
              <span>3 Rue El Kadi Lass, Maarif, Casablanca, Maroc</span>
            </div>
            <a
              href="mailto:contact@urunk.com"
              onClick={() => trackEvent('email_click', { email: 'contact@urunk.com' })}
              className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
            >
              <Mail size={18} className="text-yellow-400 shrink-0" />
              <span>contact@urunk.com</span>
            </a>
            <a
              href="tel:+212668802096"
              onClick={() => trackEvent('call_click', { phone: '+212668802096' })}
              className="flex items-center gap-3 hover:text-yellow-400 transition-colors"
            >
              <Phone size={18} className="text-yellow-400 shrink-0" />
              <span>+212 668-802096 (Appel ou WhatsApp)</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 w-full">
          <form
            action="https://formsubmit.co/contact@urunk.com"
            method="POST"
            onSubmit={handleFormSubmit}
            className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 text-primary"
          >
            <h3 className="text-2xl font-serif font-bold mb-6">
              Recevoir mon diagnostic gratuit
            </h3>

            {formError && (
              <div role="alert" aria-live="polite" className="mb-4 p-3 bg-red-50 text-red-700 rounded-xl text-xs font-medium">
                {formError}
              </div>
            )}
            {formSuccess && (
              <div role="status" aria-live="polite" className="mb-4 p-3 bg-green-50 text-green-800 rounded-xl text-xs font-medium">
                {formSuccess}
              </div>
            )}

            <div className="space-y-4 text-xs">
              <div>
                <label htmlFor="home_fr_name" className="block font-medium mb-1.5">Votre nom *</label>
                <input
                  id="home_fr_name"
                  type="text"
                  name="name"
                  required
                  placeholder="Ex. Karim Benali"
                  className="w-full border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="home_fr_contact" className="block font-medium mb-1.5">Email ou numéro WhatsApp *</label>
                <input
                  id="home_fr_contact"
                  type="text"
                  name="contact"
                  required
                  placeholder="+212 600-000000 ou contact@etablissement.ma"
                  className="w-full border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="home_fr_establishment" className="block font-medium mb-1.5">Votre activité *</label>
                <select
                  id="home_fr_establishment"
                  name="establishment_type"
                  required
                  className="w-full border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors cursor-pointer text-sm bg-white"
                >
                  <option value="">Sélectionnez votre activité</option>
                  <option value="Riad & Maison d'hôtes">Riad ou maison d'hôtes</option>
                  <option value="Hôtel & Resort">Hôtel ou resort</option>
                  <option value="Agence de voyage & Tour-opérateur">Agence de voyage ou excursions</option>
                  <option value="Restaurant & Traiteur">Restaurant ou traiteur</option>
                  <option value="PME & Entreprise">PME ou cabinet B2B</option>
                </select>
              </div>

              <div className="absolute -left-[9999px] -top-[9999px] opacity-0 pointer-events-none w-0 h-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="home_fr_website_hp">Site Web</label>
                <input id="home_fr_website_hp" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="home_fr_consent"
                  checked={privacyAgreed}
                  onChange={(e) => setPrivacyAgreed(e.target.checked)}
                  className="mt-1 rounded border-primary/20 text-accent cursor-pointer"
                  required
                />
                <label htmlFor="home_fr_consent" className="text-[11px] text-primary/70 cursor-pointer leading-tight">
                  J'accepte que ces informations soient utilisées pour traiter ma demande conformément à la{' '}
                  <Link to="/politique-de-confidentialite" className="underline text-accent">
                    Politique de confidentialité
                  </Link>.
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full bg-accent hover:bg-accent-hover text-white py-3.5 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  <span>Envoyer ma demande d'audit</span>
                  <ArrowRight size={16} />
                </button>
                <p className="text-[11px] text-primary/60 text-center mt-3">
                  Réponse écrite sous 24 heures ouvrées. Aucune relance commerciale abusive.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
