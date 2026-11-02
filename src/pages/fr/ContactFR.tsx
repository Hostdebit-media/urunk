import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SEO from "../../components/SEO";
import { Loader2 } from "lucide-react";
import { trackEvent } from "../../utils/analytics";
import { submitContactLead } from "../../utils/contactClient";
import Section from "../../components/ui/Section";
import Hairline from "../../components/ui/Hairline";

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://urunk.com/contact#contactpage",
  "url": "https://urunk.com/contact",
  "name": "Contactez l'agence Urunk",
  "description": "Contactez l'équipe croissance digitale hôtelière d'Urunk au Maroc pour vos projets de création de site web, SEO local et Google Ads.",
  "mainEntity": { "@id": "https://urunk.com/#service" }
};

export default function ContactFR() {
  const navigate = useNavigate();
  const submittingRef = useRef(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [showDirectFallback, setShowDirectFallback] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const whatsappUrl = `https://wa.me/212668802096?text=${encodeURIComponent("Bonjour Urunk, je souhaite obtenir un devis gratuit pour mon entreprise touristique.")}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submittingRef.current) return;
    setErrorMsg("");
    setFieldErrors({});
    setShowDirectFallback(false);
    setSuccessMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = ((formData.get("name") as string) || "").trim();
    const contactValue = ((formData.get("email") as string) || "").trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue);
    const isValidPhone =
      /^[+\d][\d\s().-]{7,24}$/.test(contactValue) &&
      contactValue.replace(/\D/g, "").length >= 8;
    const business = ((formData.get("business") as string) || "").trim();
    const service = ((formData.get("service") as string) || "").trim();
    const message = ((formData.get("message") as string) || "").trim();

    const nextFieldErrors: Record<string, string> = {};

    if (name.length < 2) {
      nextFieldErrors.name = "Veuillez entrer votre nom complet (au moins 2 caractères).";
    }
    if (!isValidEmail && !isValidPhone) {
      nextFieldErrors.email =
        "Veuillez entrer une adresse e-mail valide ou un numéro WhatsApp (ex: +212 600-000000).";
    }
    if (business.length < 2) {
      nextFieldErrors.business = "Veuillez indiquer le nom de votre établissement.";
    }
    if (!service) {
      nextFieldErrors.service = "Veuillez sélectionner le service souhaité.";
    }
    if (message.length > 3000) {
      nextFieldErrors.message =
        "Votre message dépasse la limite autorisée (3 000 caractères maximum).";
    }
    if (!privacyAgreed) {
      nextFieldErrors.consent =
        "Veuillez accepter la politique de confidentialité pour soumettre votre demande.";
    }

    if (Object.keys(nextFieldErrors).length > 0) {
      setFieldErrors(nextFieldErrors);
      setErrorMsg(Object.values(nextFieldErrors)[0]);
      return;
    }

    const lastSubmit = localStorage.getItem("form_last_submit");
    const now = Date.now();
    if (lastSubmit && now - parseInt(lastSubmit, 10) < 10000) {
      setErrorMsg("Veuillez patienter quelques secondes avant de soumettre à nouveau.");
      return;
    }

    submittingRef.current = true;
    setIsSubmitting(true);

    try {
      const result = await submitContactLead({
        lang: "fr",
        source: "contact_page_fr",
        name,
        contact: contactValue,
        business,
        service,
        message,
        privacyAccepted: privacyAgreed,
        _gotcha: ((formData.get("_gotcha") as string) || "").trim()
      });

      if (result.ok) {
        trackEvent("quote_form_submit", {
          service,
          business,
          language: "fr"
        });
        localStorage.setItem("form_last_submit", Date.now().toString());
        setSuccessMsg("Votre demande a bien été transmise à notre équipe ! Redirection...");
        setTimeout(() => {
          navigate("/merci");
        }, 1200);
      } else {
        setErrorMsg(result.userMessage);
        setShowDirectFallback(result.showDirectFallback);
      }
    } finally {
      submittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-bg-light text-primary">
      <SEO
        schema={contactPageSchema}
        title="Contact Urunk : Audit SEO & Web Offert | Urunk"
        description="Prêt à diviser vos commissions d'OTAs ? Contactez-nous dès aujourd'hui pour obtenir votre audit de performance, vitesse et SEO local gratuit."
      />

      {/* Hero Section */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-4xl">
          <p className="text-sm font-medium text-bg-light/75 mb-4">Contactez-nous</p>
          <h1 className="font-serif text-bg-light mb-6 text-balance">
            Prêt à <span className="italic">obtenir plus de réservations directes</span> et réduire les coûts OTA ?
          </h1>
          <p className="text-bg-light/85 text-lg md:text-xl max-w-[62ch] leading-relaxed">
            Parlez-nous de votre établissement. Sous [À CONFIRMER], nous vous enverrons un devis clair et fixe ainsi que les étapes à suivre — sans engagement.
          </p>
        </div>
      </Section>

      {/* Main Content & Form */}
      <Section tone="light">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="text-xs font-medium text-primary/60 mb-1">E-mail</dt>
                <dd>
                  <a
                    href="mailto:contact@urunk.com"
                    onClick={() => trackEvent("email_click", { email: "contact@urunk.com" })}
                    className="text-base font-medium"
                  >
                    contact@urunk.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-primary/60 mb-1">Téléphone</dt>
                <dd>
                  <a
                    href="tel:+212668802096"
                    onClick={() => trackEvent("call_click", { phone: "+212668802096" })}
                    className="text-base font-medium tabular-nums"
                  >
                    (+212)0668802096
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-primary/60 mb-1">Adresse</dt>
                <dd className="text-primary font-medium">
                  3 Rue El Kadi Lass, Maarif, Casablanca, Maroc
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-primary/60 mb-1">Messagerie directe</dt>
                <dd>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("whatsapp_click", { source: "contact_page_fr" })}
                    className="text-base font-medium"
                  >
                    Nous contacter sur WhatsApp
                  </a>
                </dd>
              </div>
            </dl>

            <Hairline />

            <div>
              <h3 className="font-serif text-[22px] text-primary mb-2">
                Tarification transparente &amp; Garanties
              </h3>
              <p className="text-sm text-primary/75 leading-relaxed">
                Devis clair, périmètre défini et garantie d&apos;optimisation des performances. Sans frais cachés.
              </p>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-7">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="bg-bg-card border border-border-subtle rounded-sm p-8 md:p-10 text-primary space-y-5"
            >
              <h2 className="font-serif text-[28px] text-primary mb-4">
                Obtenir mon <span className="italic">devis gratuit</span>
              </h2>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                  Votre nom *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Omar Aziz"
                  aria-invalid={Boolean(fieldErrors.name)}
                  className="w-full border border-border-subtle rounded-sm px-4 py-3 focus:outline-none focus:border-accent bg-bg-light text-sm"
                />
                {fieldErrors.name && (
                  <p className="mt-1.5 text-xs text-red-700">{fieldErrors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  Numéro WhatsApp ou E-mail *
                </label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  required
                  placeholder="+212 600-000000 ou vous@etablissement.com"
                  aria-invalid={Boolean(fieldErrors.email)}
                  className="w-full border border-border-subtle rounded-sm px-4 py-3 focus:outline-none focus:border-accent bg-bg-light text-sm"
                />
                {fieldErrors.email && (
                  <p className="mt-1.5 text-xs text-red-700">{fieldErrors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="business" className="block text-sm font-medium text-primary mb-2">
                  Nom de l&apos;établissement *
                </label>
                <input
                  id="business"
                  type="text"
                  name="business"
                  required
                  placeholder="Riad Atlas"
                  aria-invalid={Boolean(fieldErrors.business)}
                  className="w-full border border-border-subtle rounded-sm px-4 py-3 focus:outline-none focus:border-accent bg-bg-light text-sm"
                />
                {fieldErrors.business && (
                  <p className="mt-1.5 text-xs text-red-700">{fieldErrors.business}</p>
                )}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-primary mb-2">
                  Service souhaité *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  aria-invalid={Boolean(fieldErrors.service)}
                  className="w-full border border-border-subtle rounded-sm px-4 py-3 focus:outline-none focus:border-accent bg-bg-light cursor-pointer text-sm"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="Pack Site Web">Pack Site Web (À partir de 12 000 MAD)</option>
                  <option value="Gestion Google Ads">Gestion Google Ads (À partir de 4 000 MAD/mois)</option>
                  <option value="Gestion Meta Ads">Gestion Meta Ads (À partir de 4 000 MAD/mois)</option>
                  <option value="Gestion TripAdvisor Ads">Gestion TripAdvisor Ads (À partir de 3 000 MAD/mois)</option>
                  <option value="Pack Complet (Site + 1 Canal Ads)">Pack Complet Site + 1 Canal Ads (Meilleur rapport qualité-prix)</option>
                </select>
                {fieldErrors.service && (
                  <p className="mt-1.5 text-xs text-red-700">{fieldErrors.service}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  Message facultatif (site actuel, budget publicitaire, objectifs de réservation)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="URL du site actuel, budget publicitaire, principaux défis..."
                  aria-invalid={Boolean(fieldErrors.message)}
                  className="w-full border border-border-subtle rounded-sm px-4 py-3 focus:outline-none focus:border-accent bg-bg-light resize-none text-sm"
                ></textarea>
                {fieldErrors.message && (
                  <p className="mt-1.5 text-xs text-red-700">{fieldErrors.message}</p>
                )}
              </div>

              {/* Anti-spam honeypot */}
              <div className="absolute -left-[9999px] -top-[9999px] opacity-0 pointer-events-none w-0 h-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="contact_fr_website_hp">Site Web</label>
                <input id="contact_fr_website_hp" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
              </div>

              <div>
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="consent_fr"
                    checked={privacyAgreed}
                    onChange={(e) => setPrivacyAgreed(e.target.checked)}
                    className="mt-1 rounded-sm border-border-subtle text-accent focus:ring-accent cursor-pointer"
                    required
                  />
                  <label htmlFor="consent_fr" className="text-xs text-primary/75 cursor-pointer leading-relaxed">
                    En soumettant ce formulaire, vous acceptez notre <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>.
                  </label>
                </div>
                {fieldErrors.consent && (
                  <p className="mt-1.5 text-xs text-red-700">{fieldErrors.consent}</p>
                )}
              </div>

              {errorMsg && Object.keys(fieldErrors).length === 0 && (
                <div role="alert" aria-live="polite" className="p-4 bg-bg-alt text-red-800 rounded-sm border border-border-subtle text-sm space-y-2">
                  <p>{errorMsg}</p>
                  {showDirectFallback && (
                    <div className="flex flex-wrap gap-4 pt-1 text-xs">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium"
                      >
                        WhatsApp (+212 668-802096)
                      </a>
                      <a href="mailto:contact@urunk.com" className="font-medium">
                        contact@urunk.com
                      </a>
                    </div>
                  )}
                </div>
              )}

              {successMsg && (
                <div role="status" aria-live="polite" className="p-4 bg-bg-alt text-primary rounded-sm border border-border-subtle text-sm font-medium">
                  {successMsg}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent-hover text-bg-card py-3.5 px-6 rounded-sm font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer text-[15px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Envoi en cours...
                    </>
                  ) : (
                    <span>Obtenir mon devis gratuit</span>
                  )}
                </button>
                <p className="text-xs text-primary/65 mt-3 leading-relaxed">
                  Vos données sont en sécurité. Nous ne partageons jamais vos informations. Nous répondons sous [À CONFIRMER] avec un devis clair et les étapes suivantes. Sans engagement.
                </p>
              </div>
            </form>
          </div>
        </div>
      </Section>

      {/* Processus, Bureaux & Checklist */}
      <Section tone="alt" className="border-t border-border-subtle">
        <div className="space-y-16">
          <div>
            <div className="max-w-[68ch] mb-12">
              <p className="text-accent font-medium text-sm mb-2">Processus Transparent</p>
              <h2 className="font-serif text-primary mb-3 text-balance">
                À quoi s&apos;attendre : Notre processus d&apos;intégration en 3 étapes
              </h2>
              <p className="text-primary/75">
                Nous respectons votre temps. Voici notre calendrier de prise en charge, du premier contact au lancement des campagnes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 border-t border-border-subtle pt-10">
              <div>
                <p className="tabular-nums text-sm font-medium text-accent mb-2">01</p>
                <h3 className="font-serif text-primary mb-3">
                  Audit &amp; Découverte (20 Min)
                </h3>
                <p className="text-sm text-primary/80 leading-relaxed">
                  Nous réalisons une analyse technique de 20 minutes pour évaluer la vitesse de votre site, sa visibilité SEO, l&apos;expérience mobile et les fuites de commissions vers les OTA.
                </p>
              </div>
              <div>
                <p className="tabular-nums text-sm font-medium text-accent mb-2">02</p>
                <h3 className="font-serif text-primary mb-3">
                  Devis sur mesure fixe sous 48h
                </h3>
                <p className="text-sm text-primary/80 leading-relaxed">
                  Sous 48 heures, vous recevez une proposition claire et forfaitaire : création web WordPress (dès 12 000 MAD / ≈1 100 €) ou gestion publicitaire (4 000 MAD/mois / ≈370 €).
                </p>
              </div>
              <div>
                <p className="tabular-nums text-sm font-medium text-accent mb-2">03</p>
                <h3 className="font-serif text-primary mb-3">
                  Exécution fluide en 4 à 6 semaines
                </h3>
                <p className="text-sm text-primary/80 leading-relaxed">
                  Notre équipe senior développe et déploie votre site et vos campagnes publicitaires, avec notre garantie de croissance 90 jours et préavis flexible de 15 jours.
                </p>
              </div>
            </div>
          </div>

          <Hairline />

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-4 max-w-[60ch]">
              <h3 className="font-serif text-primary">Bureaux &amp; Disponibilité</h3>
              <p className="text-primary/80 text-sm leading-relaxed">
                Depuis notre bureau situé au <strong>3 Rue El Kadi Lass, Maarif, Casablanca, Maroc</strong>, avec une couverture opérationnelle dédiée à <strong>Marrakech, Rabat et Agadir</strong>, notre équipe est disponible pour des réunions en personne ou des échanges en visioconférence via Google Meet pour nos clients internationaux.
              </p>
              <ul className="space-y-2 text-sm text-primary/80 list-disc pl-5">
                <li>
                  <strong>Garantie de réponse :</strong> Toute demande professionnelle reçoit une réponse sous [À CONFIRMER].
                </li>
                <li>
                  <strong>Horaires :</strong> Du lundi au vendredi, de 09h00 à 18h00 (GMT+1).
                </li>
                <li>
                  <strong>Langues :</strong> Français commercial, Anglais et Darija marocaine.
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 space-y-4 max-w-[60ch]">
              <h3 className="font-serif text-primary">
                Checklist de préparation pour hôteliers
              </h3>
              <p className="text-primary/80 text-sm leading-relaxed">
                Afin de maximiser la valeur de notre premier échange de 20 minutes, nous vous conseillons de préparer les éléments suivants :
              </p>
              <ul className="space-y-2 text-sm text-primary/80 list-disc pl-5">
                <li>
                  <strong>Accès site &amp; domaine :</strong> L&apos;URL de votre site web actuel et vos accès administrateur (si disponible).
                </li>
                <li>
                  <strong>Logiciel PMS &amp; Moteur de réservation :</strong> Les références de votre logiciel actuel (Cloudbeds, Mews, Little Hotelier, Sirvoy...).
                </li>
                <li>
                  <strong>Visuels &amp; médias :</strong> Photos haute résolution de vos chambres, suites, espaces communs et équipements.
                </li>
                <li>
                  <strong>Niveau de dépendance OTA :</strong> Le pourcentage approximatif de vos réservations provenant des plateformes (taux de commission [À CONFIRMER]).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact FAQ */}
      <Section tone="light" className="border-t border-border-subtle">
        <div className="max-w-[68ch]">
          <p className="text-accent font-medium text-sm mb-2">Foire Aux Questions</p>
          <h2 className="font-serif text-primary mb-10 text-balance">
            Que se passe-t-il après avoir pris contact ?
          </h2>

          <div className="border-t border-border-subtle">
            <div className="py-6 border-b border-border-subtle">
              <h3 className="font-serif text-[22px] text-primary mb-2">
                1. Quand recevrai-je mon audit gratuit ?
              </h3>
              <p className="text-primary/80 text-sm leading-relaxed">
                Notre équipe technique réalise un diagnostic complet et manuel de votre présence digitale sous [À CONFIRMER], analysant la vitesse mobile, les mots-clés et l&apos;entonnoir de réservation directe.
              </p>
            </div>
            <div className="py-6 border-b border-border-subtle">
              <h3 className="font-serif text-[22px] text-primary mb-2">
                2. Devons-nous nous rencontrer en personne ou à distance ?
              </h3>
              <p className="text-primary/80 text-sm leading-relaxed">
                Notre siège est situé au 3 Rue El Kadi Lass, Maarif, Casablanca, Maroc pour des rendez-vous sur place, et nous organisons plus de 90 % de nos réunions de cadrage à Marrakech, partout au Maroc et à l&apos;international via Google Meet ou Zoom.
              </p>
            </div>
            <div className="py-6 border-b border-border-subtle">
              <h3 className="font-serif text-[22px] text-primary mb-2">
                3. Y a-t-il un engagement après la réception de l&apos;audit ?
              </h3>
              <p className="text-primary/80 text-sm leading-relaxed">
                Absolument aucun. L&apos;audit vous est offert à 100% de manière gracieuse. Les recommandations formulées vous appartiennent et vous êtes libre de les implémenter seul ou de nous confier leur exécution.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
