import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { CheckCircle2, FileCheck, Compass, HardHat } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
            Professional Disciplines
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-950 tracking-tight">
            Integrated Architectural Design &amp; Structural Engineering
          </h2>
          <p className="text-base text-neutral-600 mt-3 leading-relaxed">
            By combining aesthetic architectural sensibility with certified structural engineering calculations, Nir Architecture delivers seamless, code-compliant, and enduring built environments.
          </p>
        </div>

        {/* Services List with Editorial Numbering (01, 02, etc.) */}
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="py-10 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group"
            >
              {/* Number & Primary Title */}
              <div className="lg:col-span-5 flex items-start gap-4">
                <span className="text-2xl md:text-3xl font-bold font-display text-amber-600/70 font-mono shrink-0">
                  {service.number}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-display text-neutral-950 group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-1">
                    {service.subtitle}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="lg:col-span-4">
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="lg:col-span-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2.5">
                  Scope &amp; Deliverables
                </div>
                <ul className="space-y-2 text-xs text-neutral-700">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Structural Sanctions Callout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#FBFBF9] border border-neutral-200 flex items-start gap-4">
            <FileCheck className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
            <div>
              <div className="text-sm font-bold text-neutral-900 font-display">
                KMC &amp; KMDA Sanctions
              </div>
              <div className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Complete preparation and endorsement of building sanction drawings complying with all current local municipal bye-laws.
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#FBFBF9] border border-neutral-200 flex items-start gap-4">
            <HardHat className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
            <div>
              <div className="text-sm font-bold text-neutral-900 font-display">
                Seismic &amp; Foundation Safety
              </div>
              <div className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Soil investigation review, pile/strip foundation engineering, and structural column schedules ensuring seismic resilience.
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#FBFBF9] border border-neutral-200 flex items-start gap-4">
            <Compass className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
            <div>
              <div className="text-sm font-bold text-neutral-900 font-display">
                On-Site Milestone Vetting
              </div>
              <div className="text-xs text-neutral-600 mt-1 leading-relaxed">
                Direct site visits at critical casting milestones (shuttering, steel rebar reinforcement, concrete pour, and curing inspections).
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
