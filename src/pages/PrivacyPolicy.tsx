import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-bg text-primary pb-24">
      <Helmet>
        <title>Privacy Policy | Data Protection & GDPR Compliance | Urunk</title>
        <meta name="description" content="Read Urunk's Privacy Policy to understand how we collect, protect, and handle data for our website visitors, hospitality clients, and partners." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://urunk.com/en/privacy-policy" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-primary text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            Legal & Compliance
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            Last updated: August 2026. We are committed to protecting your personal information and data privacy.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto space-y-12">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-primary/10 shadow-sm space-y-8 text-primary/80 font-light leading-relaxed">
          
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4 flex items-center gap-3">
              <Shield className="text-accent" size={24} /> 1. Introduction & Commitment to Privacy
            </h2>
            <p>
              Urunk ("we," "our," or "us") is dedicated to protecting your personal data and respecting your privacy. This Privacy Policy outlines our procedures regarding the collection, processing, usage, and security of your personal information when you visit our website (urunk.com), request a complimentary digital audit, or engage our agency for digital marketing and web design services. We strictly comply with both the European General Data Protection Regulation (GDPR) and Moroccan Law No. 09-08 relating to the protection of individuals with regard to the processing of personal data, as regulated by the CNDP (Commission Nationale de contrôle de la protection des Données à caractère Personnel).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4 flex items-center gap-3">
              <Lock className="text-accent" size={24} /> 2. Personal Data We Collect
            </h2>
            <p className="mb-3">
              Personal data refers to any information that can be used to identify an individual. We may collect, store, and process various types of personal data when you interact with our website or submit forms:
            </p>
            <ul className="space-y-2 pl-6 list-disc mb-4">
              <li><strong>Identity Data:</strong> Includes your full name, business or hotel name, and professional role.</li>
              <li><strong>Contact Data:</strong> Includes your email address, phone number, and WhatsApp contact details.</li>
              <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, operating system, geolocation settings, and browser cookies.</li>
              <li><strong>Usage & Navigation Data:</strong> Information about how you use our site, including page views, link clicks, navigation patterns, and response times.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4 flex items-center gap-3">
              <FileText className="text-accent" size={24} /> 3. How We Use Collected Data
            </h2>
            <p className="mb-3">
              We process your personal information only when we have a lawful basis to do so under Moroccan Law 09-08 and GDPR. Most commonly, we use your data to:
            </p>
            <ul className="space-y-2 pl-6 list-disc mb-4">
              <li>Prepare and deliver your complimentary website performance, SEO, or direct booking funnel audit.</li>
              <li>Manage client communications, scheduling, and project onboarding for contracted digital services.</li>
              <li>Improve website functionality, page-load speed, accessibility, and overall user experience.</li>
              <li>Fulfill statutory, regulatory, and legal obligations under Moroccan jurisdiction.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">4. Cookie Policy & Tracking</h2>
            <p className="mb-3">
              Our website uses cookies and tracking technologies to analyze web traffic and personalize content. A cookie is a small text file placed on your device to remember your preferences and evaluate user engagement. We use:
            </p>
            <ul className="space-y-2 pl-6 list-disc mb-4">
              <li><strong>Essential Cookies:</strong> Required for the fundamental performance and navigation of our site.</li>
              <li><strong>Analytical Cookies:</strong> Powered by privacy-compliant analytics platforms to collect anonymous technical and usage data. This helps us refine our responsive layout and typography structures.</li>
            </ul>
            <p>
              You can adjust your web browser settings to block or disable all or some browser cookies, although doing so may affect the responsiveness of certain interactive forms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">5. Compliance with Moroccan Law 09-08 & GDPR</h2>
            <p className="mb-3">
              Under Moroccan Law No. 09-08 and GDPR, you possess comprehensive rights regarding your personal data:
            </p>
            <ul className="space-y-2 pl-6 list-disc mb-4">
              <li><strong>Right of Access:</strong> You can request a clear copy of all personal data we hold about you.</li>
              <li><strong>Right of Rectification:</strong> You have the right to request the immediate correction of inaccurate or incomplete information.</li>
              <li><strong>Right of Erasure ("Right to be Forgotten"):</strong> You may request the deletion of your personal data when it is no longer necessary for the purposes for which it was collected.</li>
              <li><strong>Right to Object:</strong> You can object at any time to the processing of your data for direct marketing purposes.</li>
            </ul>
            <p>
              To exercise any of these rights, please submit a written request to our data compliance team at <a href="mailto:contact@urunk.com" className="text-accent font-bold hover:underline">contact@urunk.com</a>. We will respond within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">6. Data Security Measures</h2>
            <p>
              Urunk implements strict technical and administrative security frameworks to protect your data from unauthorized access, accidental loss, disclosure, or modification. All contact forms are protected by end-to-end SSL encryption. Access to your personal data is strictly restricted to authorized employees who require the information to perform project evaluations or delivery.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
