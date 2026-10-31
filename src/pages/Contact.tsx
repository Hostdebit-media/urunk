import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, ArrowRight, Loader2, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { trackEvent } from '../utils/analytics';
import { submitContactLead } from '../utils/contactClient';

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://urunk.com/en/contact#contactpage",
  "url": "https://urunk.com/en/contact",
  "name": "Contact Urunk Digital Agency",
  "description": "Contact Urunk's hospitality digital growth team for direct booking websites, SEO, and Google Ads management in Morocco.",
  "mainEntity": { "@id": "https://urunk.com/#service" }
};

export default function Contact() {
  const submittingRef = useRef(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showDirectFallback, setShowDirectFallback] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    property: '',
    phone: '',
    service: 'website-design',
    message: ''
  });

  const whatsappUrl = `https://wa.me/212668802096?text=${encodeURIComponent("Hello Urunk, I would like a free audit and quote for my hospitality property.")}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submittingRef.current) return;
    setErrorMsg('');
    setShowDirectFallback(false);

    if (!privacyAgreed) {
      setErrorMsg('Please agree to the privacy policy to submit your inquiry.');
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    if (formData.name.trim().length < 2) {
      setErrorMsg('Please enter your full name (at least 2 characters).');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setErrorMsg('Please enter a valid professional email address.');
      return;
    }

    if (formData.property.trim().length < 2) {
      setErrorMsg('Please enter your hotel, riad, or property name.');
      return;
    }

    const trimmedPhone = formData.phone.trim();
    if (
      trimmedPhone &&
      (!/^[+\d][\d\s().-]{7,24}$/.test(trimmedPhone) ||
        trimmedPhone.replace(/\D/g, '').length < 8)
    ) {
      setErrorMsg('Please enter a valid phone or WhatsApp number (e.g. +212 600-000000).');
      return;
    }

    if (formData.message.trim().length > 3000) {
      setErrorMsg('Your message exceeds the maximum length (3,000 characters).');
      return;
    }

    const lastSubmit = localStorage.getItem('form_last_submit');
    const now = Date.now();
    if (lastSubmit && now - parseInt(lastSubmit, 10) < 10000) {
      setErrorMsg('Please wait a few seconds before submitting again.');
      return;
    }

    submittingRef.current = true;
    setIsSubmitting(true);
    try {
      trackEvent('quote_form_submit', {
        service: formData.service,
        property: formData.property,
        language: 'en'
      });

      const result = await submitContactLead({
        lang: 'en',
        source: 'contact_page_en',
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: trimmedPhone || undefined,
        business: formData.property.trim(),
        service: formData.service,
        message: formData.message.trim(),
        privacyAccepted: privacyAgreed,
        _gotcha: ((data.get('_gotcha') as string) || '').trim()
      });

      if (result.ok) {
        localStorage.setItem('form_last_submit', Date.now().toString());
        setSubmitted(true);
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
    <div className="w-full bg-bg text-primary">
      <SEO
        title="Contact Our Search Experts: Get Your Free Audit | Urunk"
        description="Ready to stop losing OTA commissions? Contact our team for a free website performance, speed, and local SEO diagnostic audit today."
        schema={contactPageSchema}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-primary text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Let's Scale Your <span className="text-yellow-400 italic">Direct Bookings</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            Ready to reduce OTA commissions and maximize your hotel or riad's revenue? Schedule a consultation or request your complimentary digital audit.
          </p>
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-primary/10 shadow-sm space-y-6">
              <h2 className="text-2xl font-serif font-bold text-primary">Direct Contact Channels</h2>
              <p className="text-primary/70 text-sm leading-relaxed font-light">
                Our senior hospitality strategists respond to all inquiries within 24 business hours. We work with luxury riads, boutique hotels, and tour operators across Morocco and internationally.
              </p>

              <div className="space-y-6 pt-4 border-t border-primary/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-primary/60 uppercase tracking-wider font-semibold">Email Us</span>
                    <a href="mailto:contact@urunk.com" className="text-base font-bold text-primary hover:text-accent transition-colors block">
                      contact@urunk.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-primary/60 uppercase tracking-wider font-semibold">Call / WhatsApp</span>
                    <a href="tel:+212668802096" className="text-base font-bold text-primary hover:text-accent transition-colors block">
                      (+212)0668802096
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-primary/60 uppercase tracking-wider font-semibold">Agency Address</span>
                    <p className="text-sm font-medium text-primary">
                      3 Rue El Kadi Lass, Maarif, Casablanca, Morocco
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-primary/60 uppercase tracking-wider font-semibold">Business Hours</span>
                    <p className="text-sm font-medium text-primary">
                      Monday – Friday: 9:00 AM – 6:00 PM (GMT+1)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-primary/10 bg-primary/5 -mx-8 -mb-8 p-8 rounded-b-3xl">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="text-accent" size={20} />
                  <h3 className="font-bold text-primary text-sm">Free Audit Guarantee</h3>
                </div>
                <p className="text-xs text-primary/70 font-light leading-relaxed">
                  Every inquiry includes a complimentary technical SEO and direct booking funnel review of your existing property website.
                </p>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl border border-primary/10 shadow-sm">
            {submitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-serif font-bold text-primary">Message Received!</h3>
                <p className="text-primary/70 font-light max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. One of our senior hospitality growth strategists is reviewing your property and will get back to you within 24 hours with your complimentary audit.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all text-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-primary mb-2">Request Your Strategy Session</h2>
                  <p className="text-primary/70 text-sm font-light">
                    Fill out the details below so we can tailor our initial analysis to your specific property type and goals.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact_name_en" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">Your Full Name *</label>
                    <input
                      id="contact_name_en"
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Karim Bennani"
                      className="w-full px-4 py-3.5 rounded-xl border border-primary/20 focus:border-accent focus:outline-none text-sm bg-bg/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact_email_en" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">Professional Email *</label>
                    <input
                      id="contact_email_en"
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. karim@riadmamarrakech.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-primary/20 focus:border-accent focus:outline-none text-sm bg-bg/50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact_property_en" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">Hotel / Riad / Property Name *</label>
                    <input
                      id="contact_property_en"
                      type="text"
                      required
                      name="property"
                      value={formData.property}
                      onChange={(e) => setFormData({...formData, property: e.target.value})}
                      placeholder="e.g. Riad Mamounia Palace"
                      className="w-full px-4 py-3.5 rounded-xl border border-primary/20 focus:border-accent focus:outline-none text-sm bg-bg/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact_phone_en" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">Phone / WhatsApp Number</label>
                    <input
                      id="contact_phone_en"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+212 6..."
                      className="w-full px-4 py-3.5 rounded-xl border border-primary/20 focus:border-accent focus:outline-none text-sm bg-bg/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact_service_en" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">Primary Area of Interest</label>
                  <select
                    id="contact_service_en"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-primary/20 focus:border-accent focus:outline-none text-sm bg-bg/50"
                  >
                    <option value="website-design">Custom Website Design & Direct Booking Engine</option>
                    <option value="hotel-seo">Hotel & Riad SEO (Organic Rankings)</option>
                    <option value="google-ads">Google Ads & Search Campaigns</option>
                    <option value="meta-ads">Meta Ads (Instagram & Facebook)</option>
                    <option value="tripadvisor">TripAdvisor Ads Optimization</option>
                    <option value="bundle">Complete Hospitality Growth Bundle</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact_message_en" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">Tell Us About Your Goals & Current Challenges</label>
                  <textarea
                    id="contact_message_en"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe your current OTA commission percentage, occupancy rates, or website speed issues..."
                    className="w-full px-4 py-3.5 rounded-xl border border-primary/20 focus:border-accent focus:outline-none text-sm bg-bg/50"
                  ></textarea>
                </div>

                {/* Anti-spam honeypot (off-screen, invisible to humans, traps spam bots) */}
                <div className="absolute -left-[9999px] -top-[9999px] opacity-0 pointer-events-none w-0 h-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="contact_website_hp">Website URL</label>
                  <input id="contact_website_hp" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input 
                    type="checkbox" 
                    id="contact_consent_en" 
                    checked={privacyAgreed}
                    onChange={(e) => setPrivacyAgreed(e.target.checked)}
                    className="mt-1 rounded border-primary/20 text-accent focus:ring-accent cursor-pointer"
                    required
                  />
                  <label htmlFor="contact_consent_en" className="text-xs text-primary/70 cursor-pointer leading-tight">
                    By submitting this form, you agree to our <Link to="/en/privacy-policy" className="underline text-accent">Privacy Policy</Link>.
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-all flex items-center justify-center gap-2 shadow-lg text-base disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Processing...
                    </>
                  ) : (
                    <>
                      Request Free Audit & Consultation <Send size={18} />
                    </>
                  )}
                </button>
                <p className="text-xs text-primary/60 text-center font-light">
                  🔒 We respect your privacy. Your property information is strictly confidential.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Expanded Framework Sections: What to Expect, Offices & Prep Checklist */}
      <section className="py-20 bg-white px-6 border-t border-primary/10">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* 1. What to Expect (3-Step Process) */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider font-mono">Transparent Intake</span>
              <h2 className="text-3xl font-serif font-bold text-primary mt-2">What to Expect: Our 3-Step Onboarding Process</h2>
              <p className="text-primary/70 font-light text-sm mt-2">
                We respect your time. Here is our straightforward intake timeline from initial contact to campaign launch.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-serif font-bold text-primary">20-Min Audit & Discovery Call</h3>
                <p className="text-sm font-light text-primary/80 leading-relaxed">
                  We conduct a 20-minute technical review analyzing your existing website speed, SEO visibility, mobile UX, and OTA commission leaks.
                </p>
              </div>
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-serif font-bold text-primary">48h Fixed Custom Proposal</h3>
                <p className="text-sm font-light text-primary/80 leading-relaxed">
                  Within 48 hours, you receive a transparent fixed quote—whether for custom WordPress engineering (12,000 MAD / ≈€1,100) or ad retainer management (4,000 MAD/mo / ≈€370).
                </p>
              </div>
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-serif font-bold text-primary">4–6 Week Seamless Execution</h3>
                <p className="text-sm font-light text-primary/80 leading-relaxed">
                  Our senior engineering team builds and deploys your site and ad campaigns, backed by our 90-day growth guarantee and flexible 15 days' notice term.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Office & Availability + Preparation Checklist Grid */}
          <div className="grid lg:grid-cols-12 gap-12 pt-8">
            <div className="lg:col-span-6 bg-primary text-white p-8 md:p-10 rounded-3xl space-y-6">
              <h3 className="text-2xl font-serif font-bold text-white">Office & Availability</h3>
              <p className="text-white/80 font-light text-sm leading-relaxed">
                Headquartered at <strong>3 Rue El Kadi Lass, Maarif, Casablanca, Morocco</strong>, with dedicated hospitality coverage across <strong>Marrakech, Rabat, and Agadir</strong>, our team is readily accessible for in-person consultations with property owners across Morocco or seamless virtual sessions via Google Meet for international clients.
              </p>
              <div className="space-y-3 text-xs text-white/90 font-light">
                <p className="flex items-center gap-2"><CheckCircle2 className="text-yellow-400" size={16} /> <strong>Response Guarantee:</strong> All business inquiries receive a response within 24 business hours.</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="text-yellow-400" size={16} /> <strong>Working Hours:</strong> Monday through Friday, 9:00 AM – 6:00 PM (GMT+1).</p>
                <p className="flex items-center gap-2"><CheckCircle2 className="text-yellow-400" size={16} /> <strong>Languages Spoken:</strong> Fluent Commercial English, French, and Moroccan Arabic.</p>
              </div>
            </div>

            <div className="lg:col-span-6 bg-primary/5 p-8 md:p-10 rounded-3xl border border-primary/10 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-primary">Preparation Checklist</h3>
              <p className="text-primary/80 font-light text-sm leading-relaxed">
                To maximize the productivity of our initial 20-minute strategy call, we recommend having the following information accessible:
              </p>
              <ul className="space-y-3 text-xs text-primary/80 font-light">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Domain & Website Details:</strong> Your current website URL and administrative CMS access (if applicable).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>PMS & Booking Engine Provider:</strong> Details on your active software (e.g., Cloudbeds, Mews, Little Hotelier, Sirvoy).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Media Assets:</strong> High-resolution photography or video footage of your rooms, suites, amenities, and location.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                  <span><strong>Current OTA Baseline:</strong> Approximate percentage of bookings originating from OTAs (15% to 25% commission rate).</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Expanded FAQ section for Contact page to ensure high word count */}
      <section className="py-20 bg-primary/5 px-6 border-t border-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Frequently Asked Questions</span>
            <h2 className="text-3xl font-serif font-bold text-primary mt-2">What Happens After You Reach Out?</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-primary/10">
              <h3 className="font-bold text-lg text-primary mb-2">1. How fast will I receive my free audit?</h3>
              <p className="text-primary/70 text-sm leading-relaxed font-light">
                Our technical team runs an automated and manual diagnostic on your domain within 24 hours, evaluating mobile speed, SEO rankings, and booking funnel friction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-primary/10">
              <h3 className="font-bold text-lg text-primary mb-2">2. Do I need to meet in person, or can we connect remotely?</h3>
              <p className="text-primary/70 text-sm leading-relaxed font-light">
                While our physical headquarters is located at 3 Rue El Kadi Lass, Maarif, Casablanca, Morocco for in-person meetings, 90% of our discovery sessions across Marrakech, Morocco, and abroad are conducted via Google Meet or Zoom for maximum convenience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-primary/10">
              <h3 className="font-bold text-lg text-primary mb-2">3. Is there any obligation to purchase services after the audit?</h3>
              <p className="text-primary/70 text-sm leading-relaxed font-light">
                None whatsoever. The audit is 100% complimentary and provides actionable insights you can implement immediately to improve your direct booking revenue.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
