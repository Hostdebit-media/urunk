import React from 'react';
import { ShieldCheck, Calendar, DollarSign, Key, FileText, UserCheck, Briefcase } from 'lucide-react';
import OptimizedImage from '../OptimizedImage';

export default function ProofSection() {
  return (
    <section className="py-24 bg-white border-t border-primary/10" id="proof-section-en">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-6 border border-accent/20">
            Guarantees & Proof
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            Contractual Guarantees
          </h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto font-light">
            A transparent partnership protected by high-standard performance agreements.
          </p>
        </div>

        {/* 5 Proof Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" id="proof-grid-en">
          {/* Card 1: 90-day guarantee */}
          <div className="p-8 rounded-2xl bg-bg border border-primary/10 hover:border-accent/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent mb-6 shadow-xs border border-primary/5">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">90-Day Guarantee</h3>
              <p className="text-sm text-primary/70 font-light leading-relaxed">
                If your acquisition or booking performance does not improve after 90 days, we manage your campaigns free of charge until we reach the agreed targets.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-accent font-semibold uppercase tracking-wider">
              Performance Commitment
            </div>
          </div>

          {/* Card 2: Delivery date (4-6 weeks) */}
          <div className="p-8 rounded-2xl bg-bg border border-primary/10 hover:border-accent/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent mb-6 shadow-xs border border-primary/5">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Delivery in 4 to 6 Weeks</h3>
              <p className="text-sm text-primary/70 font-light leading-relaxed">
                A firm delivery date is contractually defined. In case of any delay due to our team, we waive the final project payment.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-accent font-semibold uppercase tracking-wider">
              On-Time Project Launch
            </div>
          </div>

          {/* Card 3: 0 setup fees */}
          <div className="p-8 rounded-2xl bg-bg border border-primary/10 hover:border-accent/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent mb-6 shadow-xs border border-primary/5">
                <DollarSign size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">0 Setup Fees</h3>
              <p className="text-sm text-primary/70 font-light leading-relaxed">
                Zero setup fees, no hidden margins. You know every single cost of your digital campaigns beforehand.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-accent font-semibold uppercase tracking-wider">
              Budget Transparency
            </div>
          </div>

          {/* Card 4: Full ownership */}
          <div className="p-8 rounded-2xl bg-bg border border-primary/10 hover:border-accent/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent mb-6 shadow-xs border border-primary/5">
                <Key size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Full Ownership</h3>
              <p className="text-sm text-primary/70 font-light leading-relaxed">
                You are the sole legal owner of your domain, advertising accounts, data, and the entire source code.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-accent font-semibold uppercase tracking-wider">
              Total Independence
            </div>
          </div>

          {/* Card 5: 15 days' notice */}
          <div className="p-8 rounded-2xl bg-bg border border-primary/10 hover:border-accent/40 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent mb-6 shadow-xs border border-primary/5">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">15 Days Notice</h3>
              <p className="text-sm text-primary/70 font-light leading-relaxed">
                Our monthly ad management retainers are fully flexible and can be paused or ended with a simple 15 days notice.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-primary/5 text-xs text-accent font-semibold uppercase tracking-wider">
              Operational Flexibility
            </div>
          </div>
        </div>

        {/* Bottom grid for Founder, Case studies and Moody Image */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Founder Credential Block */}
          <div className="p-8 rounded-3xl bg-bg border border-primary/10 flex flex-col justify-between" id="founder-block-en">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
                <UserCheck size={14} /> Leadership Profile
              </span>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Founder Profile</h3>
              <p className="text-sm text-primary/70 leading-relaxed font-light">
                Our agency applies high-precision marketing and engineering. To ensure a constant level of excellence, our audit and performance tracking methodologies rely on validated standards.
              </p>
            </div>
            <div className="mt-6 p-4 bg-white rounded-xl border border-primary/5 text-xs text-primary/70">
              <span className="font-bold text-accent block mb-1">Founding & Core Team Credentials</span>
              Led by growth specialists holding active certifications in Google Ads (Search & Performance Max), Google Analytics 4 (GA4), and advanced local search architecture, with over 8 years of hospitality optimization experience.
            </div>
          </div>

          {/* Case Studies Slot */}
          <div className="p-8 rounded-3xl bg-bg border border-primary/10 flex flex-col justify-between" id="case-studies-block-en">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/5 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
                <Briefcase size={14} /> Case Studies
              </span>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Real Results</h3>
              <p className="text-sm text-primary/70 leading-relaxed font-light">
                We rigorously analyze organic traffic progression and direct booking growth for our hospitality partners and corporate clients.
              </p>
            </div>
            <div className="mt-6 p-4 bg-white rounded-xl border border-primary/5 text-xs text-primary/70">
              <span className="font-bold text-accent block mb-1">Performance Tracking</span>
              We support hotels and riads across Morocco to expand their direct reservations and continuously strengthen their local search authority.
            </div>
          </div>

          {/* Moody Riad Image */}
          <div className="h-full min-h-[320px] rounded-3xl overflow-hidden relative border border-primary/10 shadow-xs">
            <OptimizedImage 
              src="/images/optimized/moroccan-riad-hospitality-800.jpg" 
              imageName="moroccan-riad-hospitality"
              alt="Traditional Moroccan Riad architecture and courtyard in Marrakech" 
              width={600}
              height={450}
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              imgClassName="object-cover filter brightness-[0.95] contrast-[1.05]"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
