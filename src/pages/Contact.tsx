import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import SEO from '../components/SEO';
import { trackEvent } from '../utils/analytics';
import { submitContactLead } from '../utils/contactClient';
import Section from '../components/ui/Section';
import Hairline from '../components/ui/Hairline';

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
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
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
    setFieldErrors({});
    setShowDirectFallback(false);

    const nextFieldErrors: Record<string, string> = {};

    if (formData.name.trim().length < 2) {
      nextFieldErrors.name = 'Please enter your full name (at least 2 characters).';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextFieldErrors.email = 'Please enter a valid professional email address.';
    }

    if (formData.property.trim().length < 2) {
      nextFieldErrors.property = 'Please enter your hotel, riad, or property name.';
    }

    const trimmedPhone = formData.phone.trim();
    if (
      trimmedPhone &&
      (!/^[+\d][\d\s().-]{7,24}$/.test(trimmedPhone) ||
        trimmedPhone.replace(/\D/g, '').length < 8)
    ) {
      nextFieldErrors.phone = 'Please enter a valid phone or WhatsApp number (e.g. +212 600-000000).';
    }

    if (formData.message.trim().length > 3000) {
      nextFieldErrors.message = 'Your message exceeds the maximum length (3,000 characters).';
    }

    if (!privacyAgreed) {
      nextFieldErrors.consent = 'Please agree to the privacy policy to submit your inquiry.';
    }

    if (Object.keys(nextFieldErrors).length > 0) {
      setFieldErrors(nextFieldErrors);
      setErrorMsg(Object.values(nextFieldErrors)[0]);
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    const lastSubmit = localStorage.getItem('form_last_submit');
    const now = Date.now();
    if (lastSubmit && now - parseInt(lastSubmit, 10) < 10000) {
      setErrorMsg('Please wait a few seconds before submitting again.');
      return;
    }

    submittingRef.current = true;
    setIsSubmitting(true);
    try {
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
        trackEvent('quote_form_submit', {
          service: formData.service,
          property: formData.property,
          language: 'en'
        });
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
    <div className="w-full bg-bg-light text-primary">
      <SEO
        title="Contact Our Search Experts: Get Your Free Audit | Urunk"
        description="Ready to stop losing OTA commissions? Contact our team for a free website performance, speed, and local SEO diagnostic audit today."
        schema={contactPageSchema}
      />

      {/* Hero Section */}
      <Section tone="dark" className="pt-28 md:pt-36">
        <div className="max-w-4xl">
          <p className="text-sm font-medium text-bg-light/75 mb-4">Get In Touch</p>
          <h1 className="font-serif text-bg-light mb-6 text-balance">
            Let&apos;s Scale Your <span className="italic">Direct Bookings</span>
          </h1>
          <p className="text-lg md:text-xl text-bg-light/85 leading-relaxed max-w-[62ch]">
            Ready to reduce OTA commissions and maximize your hotel or riad&apos;s revenue? Schedule a consultation or request your complimentary digital audit.
          </p>
        </div>
      </Section>

      {/* Main Content & Form */}
      <Section tone="light">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-serif text-[28px] text-primary mb-3">
                Direct Contact Channels
              </h2>
              <p className="text-primary/80 leading-relaxed">
                Our senior hospitality strategists respond to all inquiries ([À CONFIRMER]). We work with luxury riads, boutique hotels, and tour operators across Morocco and internationally.
              </p>
            </div>

            <Hairline />

            <dl className="space-y-5 text-sm">
              <div>
                <dt className="text-xs font-medium text-primary/60 mb-1">Email Us</dt>
                <dd>
                  <a href="mailto:contact@urunk.com" className="text-base font-medium">
                    contact@urunk.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-primary/60 mb-1">Call / WhatsApp</dt>
                <dd>
                  <a href="tel:+212668802096" className="text-base font-medium tabular-nums">
                    (+212)0668802096
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-primary/60 mb-1">Agency Address</dt>
                <dd className="text-primary font-medium">
                  3 Rue El Kadi Lass, Maarif, Casablanca, Morocco
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-primary/60 mb-1">Business Hours</dt>
                <dd className="text-primary font-medium">
                  Monday – Friday: 9:00 AM – 6:00 PM (GMT+1)
                </dd>
              </div>
            </dl>

            <Hairline />

            <div>
              <h3 className="font-serif text-[22px] text-primary mb-2">
                Free Audit Guarantee
              </h3>
              <p className="text-sm text-primary/75 leading-relaxed">
                Every inquiry includes a complimentary technical SEO and direct booking funnel review of your existing property website.
              </p>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-7 bg-bg-card p-8 md:p-10 rounded-sm border border-border-subtle">
            {submitted ? (
              <div className="py-12 space-y-6 max-w-[54ch]">
                <h3 className="font-serif text-[30px] text-primary">Message Received</h3>
                <p className="text-primary/80 leading-relaxed">
                  Thank you for reaching out. One of our senior hospitality growth strategists is reviewing your property and will get back to you ([À CONFIRMER]) with your complimentary audit.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center justify-center bg-primary text-bg-light px-6 py-3 rounded-sm font-medium hover:bg-primary-light transition-colors text-sm cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="font-serif text-[28px] text-primary mb-2">
                    Request Your Strategy Session
                  </h2>
                  <p className="text-primary/75 text-sm">
                    Fill out the details below so we can tailor our initial analysis to your specific property type and goals.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact_name_en"
                      className="block text-sm font-medium text-primary mb-2"
                    >
                      Your Full Name *
                    </label>
                    <input
                      id="contact_name_en"
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Karim Bennani"
                      aria-invalid={Boolean(fieldErrors.name)}
                      className="w-full px-4 py-3 rounded-sm border border-border-subtle focus:border-accent focus:outline-none text-sm bg-bg-light"
                    />
                    {fieldErrors.name && (
                      <p className="mt-1.5 text-xs text-red-700">{fieldErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact_email_en"
                      className="block text-sm font-medium text-primary mb-2"
                    >
                      Professional Email *
                    </label>
                    <input
                      id="contact_email_en"
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. karim@riadmamarrakech.com"
                      aria-invalid={Boolean(fieldErrors.email)}
                      className="w-full px-4 py-3 rounded-sm border border-border-subtle focus:border-accent focus:outline-none text-sm bg-bg-light"
                    />
                    {fieldErrors.email && (
                      <p className="mt-1.5 text-xs text-red-700">{fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact_property_en"
                      className="block text-sm font-medium text-primary mb-2"
                    >
                      Hotel / Riad / Property Name *
                    </label>
                    <input
                      id="contact_property_en"
                      type="text"
                      required
                      name="property"
                      value={formData.property}
                      onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                      placeholder="e.g. Riad Mamounia Palace"
                      aria-invalid={Boolean(fieldErrors.property)}
                      className="w-full px-4 py-3 rounded-sm border border-border-subtle focus:border-accent focus:outline-none text-sm bg-bg-light"
                    />
                    {fieldErrors.property && (
                      <p className="mt-1.5 text-xs text-red-700">{fieldErrors.property}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact_phone_en"
                      className="block text-sm font-medium text-primary mb-2"
                    >
                      Phone / WhatsApp Number
                    </label>
                    <input
                      id="contact_phone_en"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+212 6..."
                      aria-invalid={Boolean(fieldErrors.phone)}
                      className="w-full px-4 py-3 rounded-sm border border-border-subtle focus:border-accent focus:outline-none text-sm bg-bg-light"
                    />
                    {fieldErrors.phone && (
                      <p className="mt-1.5 text-xs text-red-700">{fieldErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact_service_en"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Primary Area of Interest
                  </label>
                  <select
                    id="contact_service_en"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm border border-border-subtle focus:border-accent focus:outline-none text-sm bg-bg-light"
                  >
                    <option value="website-design">Custom Website Design &amp; Direct Booking Engine</option>
                    <option value="hotel-seo">Hotel &amp; Riad SEO (Organic Rankings)</option>
                    <option value="google-ads">Google Ads &amp; Search Campaigns</option>
                    <option value="meta-ads">Meta Ads (Instagram &amp; Facebook)</option>
                    <option value="tripadvisor">TripAdvisor Ads Optimization</option>
                    <option value="bundle">Complete Hospitality Growth Bundle</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact_message_en"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Tell Us About Your Goals &amp; Current Challenges
                  </label>
                  <textarea
                    id="contact_message_en"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current OTA commission percentage, occupancy rates, or website speed issues..."
                    aria-invalid={Boolean(fieldErrors.message)}
                    className="w-full px-4 py-3 rounded-sm border border-border-subtle focus:border-accent focus:outline-none text-sm bg-bg-light"
                  ></textarea>
                  {fieldErrors.message && (
                    <p className="mt-1.5 text-xs text-red-700">{fieldErrors.message}</p>
                  )}
                </div>

                {/* Anti-spam honeypot */}
                <div className="absolute -left-[9999px] -top-[9999px] opacity-0 pointer-events-none w-0 h-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="contact_website_hp">Website URL</label>
                  <input id="contact_website_hp" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                </div>

                <div>
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="contact_consent_en"
                      checked={privacyAgreed}
                      onChange={(e) => setPrivacyAgreed(e.target.checked)}
                      className="mt-1 rounded-sm border-border-subtle text-accent focus:ring-accent cursor-pointer"
                      required
                    />
                    <label htmlFor="contact_consent_en" className="text-xs text-primary/75 cursor-pointer leading-relaxed">
                      By submitting this form, you agree to our <Link to="/en/privacy-policy">Privacy Policy</Link>.
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-accent text-bg-card font-medium rounded-sm hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 text-[15px] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Processing...
                    </>
                  ) : (
                    <span>Request Free Audit &amp; Consultation</span>
                  )}
                </button>
                <p className="text-xs text-primary/65">
                  We respect your privacy. Your property information is strictly confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* Onboarding & Preparation */}
      <Section tone="alt" className="border-t border-border-subtle">
        <div className="space-y-16">
          <div>
            <div className="max-w-[68ch] mb-12">
              <p className="text-accent font-medium text-sm mb-2">Transparent Intake</p>
              <h2 className="font-serif text-primary mb-3 text-balance">
                What to Expect: Our 3-Step Onboarding Process
              </h2>
              <p className="text-primary/75">
                We respect your time. Here is our straightforward intake timeline from initial contact to campaign launch.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 border-t border-border-subtle pt-10">
              <div>
                <p className="tabular-nums text-sm font-medium text-accent mb-2">01</p>
                <h3 className="font-serif text-primary mb-3">
                  20-Min Audit &amp; Discovery Call
                </h3>
                <p className="text-sm text-primary/80 leading-relaxed">
                  We conduct a 20-minute technical review analyzing your existing website speed, SEO visibility, mobile UX, and OTA commission leaks.
                </p>
              </div>
              <div>
                <p className="tabular-nums text-sm font-medium text-accent mb-2">02</p>
                <h3 className="font-serif text-primary mb-3">
                  48h Fixed Custom Proposal
                </h3>
                <p className="text-sm text-primary/80 leading-relaxed">
                  Within 48 hours, you receive a transparent fixed quote—whether for custom WordPress engineering (12,000 MAD / ≈€1,100) or ad retainer management (4,000 MAD/mo / ≈€370).
                </p>
              </div>
              <div>
                <p className="tabular-nums text-sm font-medium text-accent mb-2">03</p>
                <h3 className="font-serif text-primary mb-3">
                  4–6 Week Seamless Execution
                </h3>
                <p className="text-sm text-primary/80 leading-relaxed">
                  Our senior engineering team builds and deploys your site and ad campaigns, backed by our 90-day growth guarantee and flexible 15 days&apos; notice term.
                </p>
              </div>
            </div>
          </div>

          <Hairline />

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-4 max-w-[60ch]">
              <h3 className="font-serif text-primary">Office &amp; Availability</h3>
              <p className="text-primary/80 text-sm leading-relaxed">
                Headquartered at <strong>3 Rue El Kadi Lass, Maarif, Casablanca, Morocco</strong>, with dedicated hospitality coverage across <strong>Marrakech, Rabat, and Agadir</strong>, our team is readily accessible for in-person consultations with property owners across Morocco or seamless virtual sessions via Google Meet for international clients.
              </p>
              <ul className="space-y-2 text-sm text-primary/80 list-disc pl-5">
                <li>
                  <strong>Response Guarantee:</strong> All business inquiries receive a response ([À CONFIRMER]).
                </li>
                <li>
                  <strong>Working Hours:</strong> Monday through Friday, 9:00 AM – 6:00 PM (GMT+1).
                </li>
                <li>
                  <strong>Languages Spoken:</strong> Fluent Commercial English, French, and Moroccan Arabic.
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 space-y-4 max-w-[60ch]">
              <h3 className="font-serif text-primary">Preparation Checklist</h3>
              <p className="text-primary/80 text-sm leading-relaxed">
                To maximize the productivity of our initial 20-minute strategy call, we recommend having the following information accessible:
              </p>
              <ul className="space-y-2 text-sm text-primary/80 list-disc pl-5">
                <li>
                  <strong>Domain &amp; Website Details:</strong> Your current website URL and administrative CMS access (if applicable).
                </li>
                <li>
                  <strong>PMS &amp; Booking Engine Provider:</strong> Details on your active software (e.g., Cloudbeds, Mews, Little Hotelier, Sirvoy).
                </li>
                <li>
                  <strong>Media Assets:</strong> High-resolution photography or video footage of your rooms, suites, amenities, and location.
                </li>
                <li>
                  <strong>Current OTA Baseline:</strong> Approximate percentage of bookings originating from OTAs ([À CONFIRMER] commission rate).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact FAQ */}
      <Section tone="light" className="border-t border-border-subtle">
        <div className="max-w-[68ch]">
          <p className="text-accent font-medium text-sm mb-2">Frequently Asked Questions</p>
          <h2 className="font-serif text-primary mb-10 text-balance">
            What Happens After You Reach Out?
          </h2>

          <div className="border-t border-border-subtle">
            <div className="py-6 border-b border-border-subtle">
              <h3 className="font-serif text-[22px] text-primary mb-2">
                1. How fast will I receive my free audit?
              </h3>
              <p className="text-primary/80 text-sm leading-relaxed">
                Our technical team runs an automated and manual diagnostic on your domain ([À CONFIRMER]), evaluating mobile speed, SEO rankings, and booking funnel friction.
              </p>
            </div>
            <div className="py-6 border-b border-border-subtle">
              <h3 className="font-serif text-[22px] text-primary mb-2">
                2. Do I need to meet in person, or can we connect remotely?
              </h3>
              <p className="text-primary/80 text-sm leading-relaxed">
                While our physical headquarters is located at 3 Rue El Kadi Lass, Maarif, Casablanca, Morocco for in-person meetings, 90% of our discovery sessions across Marrakech, Morocco, and abroad are conducted via Google Meet or Zoom for maximum convenience.
              </p>
            </div>
            <div className="py-6 border-b border-border-subtle">
              <h3 className="font-serif text-[22px] text-primary mb-2">
                3. Is there any obligation to purchase services after the audit?
              </h3>
              <p className="text-primary/80 text-sm leading-relaxed">
                None whatsoever. The audit is 100% complimentary and provides actionable insights you can implement immediately to improve your direct booking revenue.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
