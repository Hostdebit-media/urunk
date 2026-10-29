import React from 'react';
import { Shield, FileText, CheckCircle2, Scale } from 'lucide-react';
import SEO from '../components/SEO';

export default function TermsOfService() {
  return (
    <div className="w-full bg-bg text-primary pb-24">
      <SEO
        title="Terms of Service & Client Agreement | Urunk"
        description="Read the terms of service for Urunk Agency, outlining client expectations, billing cycles, and web design service agreements."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-primary text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,110,85,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-yellow-400 text-xs font-bold tracking-wider uppercase mb-6 border border-white/10">
            Legal Agreement
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-base md:text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            Last updated: August 2026. Please read these terms carefully before engaging Urunk for digital marketing or web development services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto space-y-12">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-primary/10 shadow-sm space-y-8 text-primary/80 font-light leading-relaxed">
          
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4 flex items-center gap-3">
              <Scale className="text-accent" size={24} /> 1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website (urunk.com) or engaging Urunk for digital marketing, custom website design, search engine optimization (SEO), or paid advertising management, you agree to be bound by these Terms of Service, all applicable laws, and local regulations in Morocco. If you do not agree with any of these terms, you are prohibited from using or accessing our website or services. The materials contained in this website are protected by applicable copyright and trademark law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4 flex items-center gap-3">
              <FileText className="text-accent" size={24} /> 2. Scope of Services & Deliverables
            </h2>
            <p className="mb-3">
              Urunk provides highly specialized digital growth services specifically designed for the hospitality, tourism, and corporate sectors in Morocco and internationally. Our core offerings include, but are not limited to:
            </p>
            <ul className="space-y-2 pl-6 list-disc mb-4">
              <li><strong>Custom Website Design:</strong> Tailored, ultra-fast WordPress websites integrated with Property Management Systems (PMS).</li>
              <li><strong>Search Engine Optimization:</strong> Hyper-local SEO strategies, technical code audits, schema markups, and local search visibility.</li>
              <li><strong>Paid Advertising Management:</strong> Professional campaign curation on Google Ads, Meta Ads (Facebook & Instagram), and TripAdvisor Sponsored Placements.</li>
              <li><strong>AI & Reputation Audits:</strong> Comprehensive audits of digital profiles, direct booking funnels, and customer review systems.</li>
            </ul>
            <p>
              All projects are subject to a detailed, written scope of work (SOW) or proposal. Any modifications to deliverables, timelines, or requirements must be mutually agreed upon in writing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">3. Payment Terms & Billing Structure</h2>
            <p className="mb-3">
              Our professional billing structure is designed to guarantee clarity, trust, and mutual commitment on every digital project:
            </p>
            <ul className="space-y-2 pl-6 list-disc mb-4">
              <li><strong>Fixed-Price Projects (Web Design):</strong> A non-refundable 50% deposit is required before development begins. The remaining 50% balance is invoiced and payable upon final project completion and before the website is launched on your production domain.</li>
              <li><strong>Retainer Services (Ads & SEO Management):</strong> Management fees are billed monthly in advance. Ad spend is paid directly to the respective ad networks (Google, Meta, TripAdvisor) and is not included in our agency management fees.</li>
              <li><strong>Payment Methods:</strong> We accept direct bank transfers to our Moroccan corporate bank accounts, international bank transfers, and verified corporate credit cards.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">4. Intellectual Property & Asset Ownership</h2>
            <p>
              Upon full and final payment of all agreed project milestones, Urunk transfers 100% ownership of the final custom design, layout, content assets, and custom code to the client. This includes complete administrative access to WordPress dashboards and configured advertising accounts. Urunk retains the intellectual property rights to pre-existing coding frameworks, proprietary agency templates, internal development toolsets, and third-party license configurations utilized during the build process.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">5. Client Responsibilities & Operational Timelines</h2>
            <p>
              To ensure timely project delivery and campaign execution, clients agree to cooperate fully with Urunk by providing all necessary assets within agreed timelines. These include, but are not limited to, high-resolution photography, copywriting resources, branding style guides, PMS API credentials, and prompt feedback on design drafts. Delays in asset provision or milestone feedback exceeding 15 business days may result in project suspension or rescheduling fees.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">6. Cancellation & Termination Terms</h2>
            <p>
              We believe in building partnerships based on performance rather than rigid commitments. For ongoing retainer services (such as monthly Google Ads or SEO management), clients may terminate their agreement at any time by providing a written 15-day notice before the next monthly billing cycle begins. For fixed-price projects, either party may terminate the agreement due to material breach of contract, subject to a 10-day written cure period.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">7. Limitation of Liability</h2>
            <p>
              In no event shall Urunk, its directors, or its team be liable for any indirect, incidental, special, or consequential damages resulting from third-party platform algorithm changes (such as sudden Google or Meta ranking shifts), host server outages, or performance limitations of third-party PMS providers. Our total liability for any claim arising out of our services shall not exceed the total amount paid by the client to Urunk during the preceding three-month period.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">8. Governing Law & Local Jurisdiction</h2>
            <p>
              These Terms of Service and any dispute or claim arising out of or in connection with them shall be governed by, interpreted, and enforced in accordance with the laws of the Kingdom of Morocco. Any legal action or proceeding arising under these terms shall be brought exclusively in the commercial courts of Casablanca or Marrakech, Morocco.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">9. Contact Us</h2>
            <p>
              <strong>Address:</strong> 3 Rue El Kadi Lass, Maarif, Casablanca, Morocco
              <br />
              <strong>Email:</strong> contact@urunk.com
              <br />
              <strong>Phone:</strong> +212 668-802096
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
