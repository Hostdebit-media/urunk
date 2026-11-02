import React from 'react';
import SEO from '../components/SEO';
import Section from '../components/ui/Section';
import Hairline from '../components/ui/Hairline';

export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-bg-light text-primary">
      <SEO
        title="Privacy Policy & Data Protection Notice | Urunk"
        description="Read the privacy policy for Urunk Agency, detailing how we collect, store, protect, and use user information on our website."
      />

      {/* Hero Section */}
      <Section tone="alt" className="pt-28 md:pt-36 border-b border-border-subtle">
        <div className="max-w-[68ch]">
          <p className="text-sm font-medium text-accent mb-4">Legal &amp; Compliance</p>
          <h1 className="font-serif text-primary mb-4">Privacy Policy</h1>
          <p className="text-primary/75 leading-relaxed">
            Last updated: August 2026. We are committed to protecting your personal information and data privacy.
          </p>
        </div>
      </Section>

      {/* Content Section */}
      <Section tone="light">
        <div className="max-w-[68ch] space-y-10 text-primary/85 leading-relaxed">
          <div>
            <h2 className="font-serif text-primary mb-4">
              1. Introduction &amp; Commitment to Privacy
            </h2>
            <p>
              Urunk (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is dedicated to protecting your personal data and respecting your privacy. This Privacy Policy outlines our procedures regarding the collection, processing, usage, and security of your personal information when you visit our website (urunk.com), request a complimentary digital audit, or engage our agency for digital marketing and web design services. We strictly comply with both the European General Data Protection Regulation (GDPR) and Moroccan Law No. 09-08 relating to the protection of individuals with regard to the processing of personal data, as regulated by the CNDP (Commission Nationale de contrôle de la protection des Données à caractère Personnel).
            </p>
          </div>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">2. Personal Data We Collect</h2>
            <p className="mb-3">
              Personal data refers to any information that can be used to identify an individual. We may collect, store, and process various types of personal data when you interact with our website or submit forms:
            </p>
            <ul className="space-y-2 pl-6 list-disc">
              <li>
                <strong>Identity Data:</strong> Includes your full name, business or hotel name, and professional role.
              </li>
              <li>
                <strong>Contact Data:</strong> Includes your email address, phone number, and WhatsApp contact details.
              </li>
              <li>
                <strong>Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, operating system, geolocation settings, and browser cookies.
              </li>
              <li>
                <strong>Usage &amp; Navigation Data:</strong> Information about how you use our site, including page views, link clicks, navigation patterns, and response times.
              </li>
            </ul>
          </div>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">3. How We Use Collected Data</h2>
            <p className="mb-3">
              We process your personal information only when we have a lawful basis to do so under Moroccan Law 09-08 and GDPR. Most commonly, we use your data to:
            </p>
            <ul className="space-y-2 pl-6 list-disc">
              <li>
                Prepare and deliver your complimentary website performance, SEO, or direct booking funnel audit.
              </li>
              <li>
                Manage client communications, scheduling, and project onboarding for contracted digital services.
              </li>
              <li>
                Improve website functionality, page-load speed, accessibility, and overall user experience.
              </li>
              <li>
                Fulfill statutory, regulatory, and legal obligations under Moroccan jurisdiction.
              </li>
            </ul>
          </div>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">4. Cookie Policy &amp; Tracking</h2>
            <p className="mb-3">
              Our website uses cookies and tracking technologies to analyze web traffic and personalize content. A cookie is a small text file placed on your device to remember your preferences and evaluate user engagement. We use:
            </p>
            <ul className="space-y-2 pl-6 list-disc mb-4">
              <li>
                <strong>Essential Cookies:</strong> Required for the fundamental performance and navigation of our site.
              </li>
              <li>
                <strong>Analytical Cookies:</strong> Powered by privacy-compliant analytics platforms to collect anonymous technical and usage data. This helps us refine our responsive layout and typography structures.
              </li>
            </ul>
            <p>
              You can adjust your web browser settings to block or disable all or some browser cookies, although doing so may affect the responsiveness of certain interactive forms.
            </p>
          </div>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">
              5. Compliance with Moroccan Law 09-08 &amp; GDPR
            </h2>
            <p className="mb-3">
              Under Moroccan Law No. 09-08 and GDPR, you possess comprehensive rights regarding your personal data:
            </p>
            <ul className="space-y-2 pl-6 list-disc mb-4">
              <li>
                <strong>Right of Access:</strong> You can request a clear copy of all personal data we hold about you.
              </li>
              <li>
                <strong>Right of Rectification:</strong> You have the right to request the immediate correction of inaccurate or incomplete information.
              </li>
              <li>
                <strong>Right of Erasure (&quot;Right to be Forgotten&quot;):</strong> You may request the deletion of your personal data when it is no longer necessary for the purposes for which it was collected.
              </li>
              <li>
                <strong>Right to Object:</strong> You can object at any time to the processing of your data for direct marketing purposes.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please submit a written request to our data compliance team at{" "}
              <a href="mailto:contact@urunk.com">contact@urunk.com</a> or by mail at 3 Rue El Kadi Lass, Maarif, Casablanca, Morocco. We will respond within 30 days.
            </p>
          </div>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">6. Data Security Measures</h2>
            <p>
              Urunk implements strict technical and administrative security frameworks to protect your data from unauthorized access, accidental loss, disclosure, or modification. All contact forms are protected by end-to-end SSL encryption. Access to your personal data is strictly restricted to authorized employees who require the information to perform project evaluations or delivery.
            </p>
          </div>

          <Hairline />

          <div>
            <h2 className="font-serif text-primary mb-4">7. Contact Information</h2>
            <p>
              <strong>Address:</strong> 3 Rue El Kadi Lass, Maarif, Casablanca, Morocco
              <br />
              <strong>Email:</strong> contact@urunk.com
              <br />
              <strong>Phone:</strong> +212 668-802096
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
