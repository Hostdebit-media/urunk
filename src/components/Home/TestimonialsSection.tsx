import React from 'react';
import { ShieldCheck, Zap, Layers, BarChart3, Clock, CheckCircle } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white border-b border-primary/10 text-primary">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} />
            Our Operating Standards
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Engineering & Strategic Commitments
          </h2>
          <p className="text-lg text-primary/75 max-w-2xl mx-auto font-light leading-relaxed">
            We don't ask for trust on faith — we deliver verifiable technical performance, transparent fee structures, and commission-free direct booking systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Commitment 1 */}
          <div className="bg-bg-alt p-8 rounded-2xl border border-primary/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Zero-Commission Architecture</h3>
              <p className="text-sm text-primary/80 leading-relaxed mb-6 font-light">
                Every direct booking engine and inquiry path we engineer is 100% owned by your property. No commission cuts on guest stays, no third-party lock-in.
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-primary/10 text-xs text-primary/80">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-accent shrink-0" />
                <span>Full guest data ownership</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-accent shrink-0" />
                <span>Direct WhatsApp & PMS integration</span>
              </li>
            </ul>
          </div>

          {/* Commitment 2 */}
          <div className="bg-bg-alt p-8 rounded-2xl border border-primary/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Core Web Vitals Velocity</h3>
              <p className="text-sm text-primary/80 leading-relaxed mb-6 font-light">
                Speed directly drives booking conversions. All websites are optimized for sub-2-second mobile load times across 4G and 5G cellular networks.
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-primary/10 text-xs text-primary/80">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-accent shrink-0" />
                <span>High-Speeds First Contentful Paint</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-accent shrink-0" />
                <span>Mobile-first touch target layouts</span>
              </li>
            </ul>
          </div>

          {/* Commitment 3 */}
          <div className="bg-bg-alt p-8 rounded-2xl border border-primary/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Transparent Reporting</h3>
              <p className="text-sm text-primary/80 leading-relaxed mb-6 font-light">
                No vanity metrics or vague impressions. We track qualified inquiry volume, direct booking conversion rate, and acquisition cost per lead.
              </p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-primary/10 text-xs text-primary/80">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-accent shrink-0" />
                <span>Google Analytics 4 event tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-accent shrink-0" />
                <span>Flat management fee model</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
