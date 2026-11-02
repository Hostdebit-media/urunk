import React, { useRef, useState } from 'react';
import { Loader2, Mail, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { trackEvent } from '../../../utils/analytics';
import { submitContactLead } from '../../../utils/contactClient';
import Section from '../../ui/Section';
import Button from '../../ui/Button';

export default function BottomFormSectionFR() {
  const navigate = useNavigate();
  const submittingRef = useRef(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState('');
  const [formError, setFormError] = useState('');
  const [showDirectFallback, setShowDirectFallback] = useState(false);

  const whatsappUrl = `https://wa.me/212668802096?text=${encodeURIComponent('Bonjour Urunk, je souhaite demander un audit gratuit pour mon établissement.')}`;

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submittingRef.current) return;
    setFormError('');
    setShowDirectFallback(false);
    setFormSuccess('');

    if (!privacyAgreed) {
      setFormError('Veuillez accepter la politique de confidentialité pour continuer.');
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = ((formData.get('name') as string) || '').trim();
    const contactValue = ((formData.get('contact') as string) || '').trim();
    const establishmentType = ((formData.get('establishment_type') as string) || '').trim();

    if (name.length < 2) {
      setFormError('Veuillez indiquer votre nom et celui de votre établissement.');
      return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue);
    const isValidPhone = /^[+\d][\d\s().-]{7,24}$/.test(contactValue) && contactValue.replace(/\D/g, '').length >= 8;
    if (!isValidEmail && !isValidPhone) {
      setFormError('Veuillez saisir une adresse e-mail valide ou un numéro WhatsApp (ex: +212 600-000000).');
      return;
    }

    if (!establishmentType) {
      setFormError('Veuillez sélectionner votre activité principale.');
      return;
    }

    const lastSubmit = localStorage.getItem('form_last_submit');
    const now = Date.now();
    if (lastSubmit && now - parseInt(lastSubmit, 10) < 10000) {
      setFormError('Veuillez patienter quelques secondes avant un nouvel envoi.');
      return;
    }

    submittingRef.current = true;
    setFormSubmitting(true);
    try {
      const result = await submitContactLead({
        lang: 'fr',
        source: 'home_audit_fr',
        name,
        contact: contactValue,
        service: establishmentType,
        privacyAccepted: privacyAgreed,
        _gotcha: ((formData.get('_gotcha') as string) || '').trim(),
      });

      if (result.ok) {
        trackEvent('quote_form_submit', { source: 'homepage_bottom_form', service: establishmentType });
        localStorage.setItem('form_last_submit', Date.now().toString());
        setFormSuccess('Merci ! Votre demande a bien été transmise. Redirection en cours...');
        setTimeout(() => {
          navigate('/merci');
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
    <Section tone="dark" id="contact-audit-fr">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-6 pt-1">
          <h2 className="mb-5 text-bg-light">
            Demandez un audit gratuit de votre site et de votre fiche Google Maps
          </h2>
          <p className="text-bg-light/85 text-lg mb-8 leading-relaxed max-w-xl">
            Indiquez le nom de votre établissement ou l'adresse de votre site actuel. Vous recevez par écrit sous [À CONFIRMER] nos observations techniques et une proposition forfaitaire claire.
          </p>

          <address className="not-italic space-y-2 pt-6 border-t border-bg-light/20 text-sm text-bg-light/85 leading-relaxed">
            <p className="font-semibold text-bg-light m-0">Urunk, Bureau de Casablanca</p>
            <p className="m-0">3 Rue El Kadi Lass, Maarif, Casablanca, Maroc</p>
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
              Envoyer les informations de votre établissement
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
                <label htmlFor="home_fr_name" className="block font-medium mb-1.5 text-primary">
                  Nom et établissement *
                </label>
                <input
                  id="home_fr_name"
                  type="text"
                  name="name"
                  required
                  placeholder="Ex. Karim Benali, Riad Dar..."
                  className="w-full border border-border-subtle rounded-sm px-3.5 py-3 bg-bg-card text-primary transition-colors text-base"
                />
              </div>
              <div>
                <label htmlFor="home_fr_contact" className="block font-medium mb-1.5 text-primary">
                  E-mail ou numéro WhatsApp *
                </label>
                <input
                  id="home_fr_contact"
                  type="text"
                  name="contact"
                  required
                  placeholder="+212 600-000000 ou contact@domaine.ma"
                  className="w-full border border-border-subtle rounded-sm px-3.5 py-3 bg-bg-card text-primary transition-colors text-base"
                />
              </div>
              <div>
                <label htmlFor="home_fr_establishment" className="block font-medium mb-1.5 text-primary">
                  Activité principale *
                </label>
                <select
                  id="home_fr_establishment"
                  name="establishment_type"
                  required
                  className="w-full border border-border-subtle rounded-sm px-3.5 py-3 bg-bg-card text-primary transition-colors cursor-pointer text-base"
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

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="home_fr_consent"
                  checked={privacyAgreed}
                  onChange={(e) => setPrivacyAgreed(e.target.checked)}
                  className="mt-1 rounded-sm border-border-subtle text-accent cursor-pointer"
                  required
                />
                <label htmlFor="home_fr_consent" className="text-xs text-primary/75 cursor-pointer leading-relaxed">
                  J'accepte le traitement de ces données pour répondre à ma demande selon la{' '}
                  <Link to="/politique-de-confidentialite">politique de confidentialité</Link>.
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
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <span>Envoyer ma demande d'audit</span>
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
