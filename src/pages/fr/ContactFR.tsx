import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SEO from "../../components/SEO";
import { Mail, Phone, MapPin, ArrowRight, Check, Loader2, MessageCircle, ShieldCheck } from "lucide-react";
import { trackEvent } from "../../utils/analytics";
import { submitContactLead } from "../../utils/contactClient";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showDirectFallback, setShowDirectFallback] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const whatsappUrl = `https://wa.me/212668802096?text=${encodeURIComponent("Bonjour Urunk, je souhaite obtenir un devis gratuit pour mon entreprise touristique.")}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");
    setShowDirectFallback(false);
    setSuccessMsg("");

    if (!privacyAgreed) {
      setErrorMsg("Veuillez accepter la politique de confidentialité pour soumettre votre demande.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = ((formData.get("name") as string) || "").trim();
    if (name.length < 2) {
      setErrorMsg("Veuillez entrer votre nom complet (au moins 2 caractères).");
      return;
    }

    const contactValue = ((formData.get("email") as string) || "").trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue);
    const isValidPhone = /^[+\d][\d\s().-]{7,24}$/.test(contactValue) && contactValue.replace(/\D/g, "").length >= 8;
    if (!isValidEmail && !isValidPhone) {
      setErrorMsg("Veuillez entrer une adresse e-mail valide ou un numéro WhatsApp (ex: +212 600-000000).");
      return;
    }

    const business = ((formData.get("business") as string) || "").trim();
    if (business.length < 2) {
      setErrorMsg("Veuillez indiquer le nom de votre établissement.");
      return;
    }

    const service = ((formData.get("service") as string) || "").trim();
    if (!service) {
      setErrorMsg("Veuillez sélectionner le service souhaité.");
      return;
    }

    const message = ((formData.get("message") as string) || "").trim();
    if (message.length > 3000) {
      setErrorMsg("Votre message dépasse la limite autorisée (3 000 caractères maximum).");
      return;
    }

    const lastSubmit = localStorage.getItem("form_last_submit");
    const now = Date.now();
    if (lastSubmit && now - parseInt(lastSubmit, 10) < 10000) {
      setErrorMsg("Veuillez patienter quelques secondes avant de soumettre à nouveau.");
      return;
    }

    setIsSubmitting(true);

    trackEvent("quote_form_submit", {
      service,
      business,
      language: "fr"
    });

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

    setIsSubmitting(false);

    if (result.ok) {
      localStorage.setItem("form_last_submit", Date.now().toString());
      setSuccessMsg("Votre demande a bien été transmise à notre équipe ! Redirection...");
      setTimeout(() => {
        navigate("/merci");
      }, 1200);
    } else {
      setErrorMsg(result.userMessage);
      setShowDirectFallback(result.showDirectFallback);
    }
  };

  return (
    <div className="w-full pb-20">
      <SEO
        schema={contactPageSchema}
        title="Contact Urunk : Audit SEO & Web Offert | Urunk"
        description="Prêt à diviser vos commissions d'OTAs ? Contactez-nous dès aujourd'hui pour obtenir votre audit de performance, vitesse et SEO local gratuit."
      />

      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="flex-1 pt-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-yellow-400 text-sm font-medium mb-6">
              Contactez-nous
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 max-w-lg leading-tight font-serif text-white">
              Prêt à <span className="text-yellow-400 italic font-semibold">obtenir plus de réservations directes</span> et réduire les coûts OTA ?
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-md font-light leading-relaxed">
              Parlez-nous de votre établissement. Sous 24 heures, nous vous
              enverrons un devis clair et fixe ainsi que les étapes à suivre — sans engagement.
            </p>

            <div className="space-y-4 mb-10">
              <a
                href="mailto:contact@urunk.com"
                onClick={() => trackEvent('email_click', { email: 'contact@urunk.com' })}
                className="flex items-center gap-4 hover:text-accent transition-colors text-lg"
              >
                <div className="bg-white/10 p-3 rounded-full">
                  <Mail size={22} />
                </div>
                contact@urunk.com
              </a>
              <a
                href="tel:+212668802096"
                onClick={() => trackEvent('call_click', { phone: '+212668802096' })}
                className="flex items-center gap-4 hover:text-accent transition-colors text-lg"
              >
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone size={22} />
                </div>
                (+212)0668802096
              </a>
              <div className="flex items-center gap-4 text-white/90 text-base">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <MapPin size={22} />
                </div>
                <span>3 Rue El Kadi Lass, Maarif, Casablanca, Maroc</span>
              </div>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { source: 'contact_page_fr' })}
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-5 py-3 rounded-xl font-bold text-sm transition-colors mt-2"
              >
                <MessageCircle size={18} />
                <span>Nous contacter sur WhatsApp</span>
              </a>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-xs text-white/80 space-y-2">
              <div className="flex items-center gap-2 font-bold text-yellow-400">
                <ShieldCheck size={16} /> Tarification transparente & Garanties
              </div>
              <p className="leading-relaxed">
                Devis clair, périmètre défini et garantie d'optimisation des performances. Sans frais cachés.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 md:p-10 text-primary shadow-md"
            >
              <h2 className="text-2xl font-serif font-bold mb-6">Obtenir mon <span className="text-accent italic font-semibold">devis gratuit</span></h2>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Votre nom *
                  </label>
                  <input id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Omar Aziz"
                    className="w-full border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors bg-white text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Numéro WhatsApp ou E-mail *
                  </label>
                  <input id="email"
                    type="text"
                    name="email"
                    required
                    placeholder="+212 600-000000 ou vous@etablissement.com"
                    className="w-full border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors bg-white text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium mb-1.5">
                    Nom de l'établissement *
                  </label>
                  <input id="business"
                    type="text"
                    name="business"
                    required
                    placeholder="Riad Atlas"
                    className="w-full border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors bg-white text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-1.5">
                    Service souhaité *
                  </label>
                  <select id="service"
                    name="service"
                    required
                    className="w-full border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors bg-white appearance-none cursor-pointer text-sm"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="Pack Site Web">Pack Site Web (À partir de 12 000 MAD)</option>
                    <option value="Gestion Google Ads">Gestion Google Ads (À partir de 4 000 MAD/mois)</option>
                    <option value="Gestion Meta Ads">Gestion Meta Ads (À partir de 4 000 MAD/mois)</option>
                    <option value="Gestion TripAdvisor Ads">Gestion TripAdvisor Ads (À partir de 3 000 MAD/mois)</option>
                    <option value="Pack Complet (Site + 1 Canal Ads)">Pack Complet Site + 1 Canal Ads (Meilleur rapport qualité-prix)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Message facultatif (site actuel, budget publicitaire, objectifs de réservation)
                  </label>
                  <textarea id="message"
                    name="message"
                    rows={3}
                    placeholder="URL du site actuel, budget publicitaire, principaux défis..."
                    className="w-full border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors bg-white resize-none text-sm"
                  ></textarea>
                </div>

                {/* Anti-spam honeypot (off-screen, invisible to humans, traps spam bots) */}
                <div className="absolute -left-[9999px] -top-[9999px] opacity-0 pointer-events-none w-0 h-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="contact_fr_website_hp">Site Web</label>
                  <input id="contact_fr_website_hp" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input 
                    type="checkbox" 
                    id="consent_fr" 
                    checked={privacyAgreed}
                    onChange={(e) => setPrivacyAgreed(e.target.checked)}
                    className="mt-1 rounded border-primary/20 text-accent focus:ring-accent cursor-pointer"
                    required
                  />
                  <label htmlFor="consent_fr" className="text-xs text-primary/70 cursor-pointer leading-tight">
                    En soumettant ce formulaire, vous acceptez notre <Link to="/politique-de-confidentialite" className="underline text-accent">Politique de confidentialité</Link>.
                  </label>
                </div>

                {errorMsg && (
                  <div role="alert" aria-live="polite" className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200 text-sm font-medium space-y-2">
                    <p>{errorMsg}</p>
                    {showDirectFallback && (
                      <div className="flex flex-wrap gap-3 pt-1 text-xs">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#25D366] text-white px-3 py-1.5 rounded-lg font-bold hover:bg-[#1ebd5a] transition-colors"
                        >
                          <MessageCircle size={14} /> WhatsApp (+212 668-802096)
                        </a>
                        <a
                          href="mailto:contact@urunk.com"
                          className="inline-flex items-center gap-1.5 bg-primary text-white px-3 py-1.5 rounded-lg font-bold hover:bg-primary/90 transition-colors"
                        >
                          <Mail size={14} /> contact@urunk.com
                        </a>
                      </div>
                    )}
                  </div>
                )}
                {successMsg && (
                  <div role="status" aria-live="polite" className="p-4 bg-green-50 text-green-700 rounded-xl border border-green-100 text-sm font-medium">
                    {successMsg}
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" /> Envoi en cours...
                      </>
                    ) : (
                      <>
                        <span>Obtenir mon devis gratuit</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-primary/60 text-center mt-3 font-medium">
                    Vos données sont en sécurité. Nous ne partageons jamais vos informations. Nous répondons sous 24h avec un devis clair et les étapes suivantes. Sans engagement.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Expanded Framework Sections: À quoi s'attendre, Bureaux & Checklist */}
      <section className="py-20 bg-white px-6 border-t border-primary/10">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* 1. À quoi s'attendre (Processus en 3 étapes) */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider font-mono">Processus Transparent</span>
              <h2 className="text-3xl font-serif font-bold text-primary mt-2">À quoi s'attendre : Notre processus d'intégration en 3 étapes</h2>
              <p className="text-primary/70 font-light text-sm mt-2">
                Nous respectons votre temps. Voici notre calendrier de prise en charge, du premier contact au lancement des campagnes.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-serif font-bold text-primary">Audit & Découverte (20 Min)</h3>
                <p className="text-sm font-light text-primary/80 leading-relaxed">
                  Nous réalisons une analyse technique de 20 minutes pour évaluer la vitesse de votre site, sa visibilité SEO, l'expérience mobile et les fuites de commissions vers les OTA.
                </p>
              </div>
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-serif font-bold text-primary">Devis sur mesure fixe sous 48h</h3>
                <p className="text-sm font-light text-primary/80 leading-relaxed">
                  Sous 48 heures, vous recevez une proposition claire et forfaitaire : création web WordPress (dès 12 000 MAD / ≈1 100 €) ou gestion publicitaire (4 000 MAD/mois / ≈370 €).
                </p>
              </div>
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-serif font-bold text-primary">Exécution fluide en 4 à 6 semaines</h3>
                <p className="text-sm font-light text-primary/80 leading-relaxed">
                  Notre équipe senior développe et déploie votre site et vos campagnes publicitaires, avec notre garantie de croissance 90 jours et préavis flexible de 15 jours.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Bureaux & Disponibilité + Checklist de préparation */}
          <div className="grid lg:grid-cols-12 gap-12 pt-8">
            <div className="lg:col-span-6 bg-primary text-white p-8 md:p-10 rounded-3xl space-y-6">
              <h3 className="text-2xl font-serif font-bold text-white">Bureaux & Disponibilité</h3>
              <p className="text-white/80 font-light text-sm leading-relaxed">
                Depuis notre bureau situé au <strong>3 Rue El Kadi Lass, Maarif, Casablanca, Maroc</strong>, avec une couverture opérationnelle dédiée à <strong>Marrakech, Rabat et Agadir</strong>, notre équipe est disponible pour des réunions en personne ou des échanges en visioconférence via Google Meet pour nos clients internationaux.
              </p>
              <div className="space-y-3 text-xs text-white/90 font-light">
                <p className="flex items-center gap-2"><ShieldCheck className="text-yellow-400" size={16} /> <strong>Garantie de réponse :</strong> Toute demande professionnelle reçoit une réponse sous 24h ouvrées.</p>
                <p className="flex items-center gap-2"><ShieldCheck className="text-yellow-400" size={16} /> <strong>Horaires :</strong> Du lundi au vendredi, de 09h00 à 18h00 (GMT+1).</p>
                <p className="flex items-center gap-2"><ShieldCheck className="text-yellow-400" size={16} /> <strong>Langues :</strong> Français commercial, Anglais et Darija marocaine.</p>
              </div>
            </div>

            <div className="lg:col-span-6 bg-primary/5 p-8 md:p-10 rounded-3xl border border-primary/10 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary">Checklist de préparation pour hôteliers</h3>
              <p className="text-primary/80 font-light text-sm leading-relaxed">
                Afin de maximiser la valeur de notre premier échange de 20 minutes, nous vous conseillons de préparer les éléments suivants :
              </p>
              <ul className="space-y-3 text-xs text-primary/80 font-light">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Accès site & domaine :</strong> L'URL de votre site web actuel et vos accès administrateur (si disponible).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Logiciel PMS & Moteur de réservation :</strong> Les références de votre logiciel actuel (Cloudbeds, Mews, Little Hotelier, Sirvoy...).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Visuels & médias :</strong> Photos haute résolution de vos chambres, suites, espaces communs et équipements.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Niveau de dépendance OTA :</strong> Le pourcentage approximatif de vos réservations provenant des plateformes (taux de commission 15% à 25%).</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Expanded FAQ section for French Contact page */}
      <section className="py-20 bg-primary/5 px-6 border-t border-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Foire Aux Questions</span>
            <h2 className="text-3xl font-serif font-bold text-primary mt-2">Que se passe-t-il après avoir pris contact ?</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-primary/10">
              <h3 className="font-bold text-lg text-primary mb-2">1. Quand recevrai-je mon audit gratuit ?</h3>
              <p className="text-primary/70 text-sm leading-relaxed font-light">
                Notre équipe technique réalise un diagnostic complet et manuel de votre présence digitale sous 24 heures ouvrées, analysant la vitesse mobile, les mots-clés et l'entonnoir de réservation directe.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-primary/10">
              <h3 className="font-bold text-lg text-primary mb-2">2. Devons-nous nous rencontrer en personne ou à distance ?</h3>
              <p className="text-primary/70 text-sm leading-relaxed font-light">
                Notre siège est situé au 3 Rue El Kadi Lass, Maarif, Casablanca, Maroc pour des rendez-vous sur place, et nous organisons plus de 90 % de nos réunions de cadrage à Marrakech, partout au Maroc et à l'international via Google Meet ou Zoom.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-primary/10">
              <h3 className="font-bold text-lg text-primary mb-2">3. Y a-t-il un engagement après la réception de l'audit ?</h3>
              <p className="text-primary/70 text-sm leading-relaxed font-light">
                Absolument aucun. L'audit vous est offert à 100% de manière gracieuse. Les recommandations formulées vous appartiennent et vous êtes libre de les implémenter seul ou de nous confier leur exécution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
