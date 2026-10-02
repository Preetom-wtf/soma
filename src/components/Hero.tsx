import React from 'react';
import { ARCHITECT_INFO } from '../data/portfolioData';
import { ArchitecturalVisual } from './ArchitecturalVisual';
import { ArrowRight, Compass, ShieldCheck, Award, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  customHeroImage?: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, customHeroImage }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-neutral-200/80">
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-6 md:grid-cols-12 gap-4 px-4 sm:px-6 lg:px-8 border-x border-neutral-200/50">
          <div className="h-full border-r border-neutral-200/50 col-span-1 hidden lg:block" />
          <div className="h-full border-r border-neutral-200/50 col-span-2 hidden lg:block" />
          <div className="h-full border-r border-neutral-200/50 col-span-4" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quiet 1-line text kicker without pill boxes */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-4">
              <span>Ar. Soma Naskar</span>
              <span aria-hidden="true" className="text-amber-500">/</span>
              <span>Kolkata, West Bengal</span>
              <span aria-hidden="true" className="text-amber-500">/</span>
              <span>12+ Years Practice</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-neutral-950 tracking-tight leading-[1.08] mb-6 text-balance">
              Designing Spaces That Inspire — Architecture &amp; Structural Engineering.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 max-w-2xl">
              Over a decade of architectural mastery and personalized structural solutions in Kolkata. From bespoke luxury villas and earthquake-resilient engineering to sculptural interior woodwork and end-to-end site execution.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-all shadow-sm active:scale-98"
              >
                <span>Explore Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-sm active:scale-98 cursor-pointer"
              >
                <span>Book Design Consultation</span>
              </button>
            </div>

            {/* Core Architectural Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-200/80">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-neutral-950 tabular-nums">
                  12+
                </div>
                <div className="text-xs text-neutral-500 mt-1">
                  Years Design &amp; Engineering Experience
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-neutral-950 tabular-nums">
                  160+
                </div>
                <div className="text-xs text-neutral-500 mt-1">
                  Residential &amp; Interior Works Completed
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-neutral-950 tabular-nums">
                  100%
                </div>
                <div className="text-xs text-neutral-500 mt-1">
                  KMC &amp; Structural Sanction Compliance
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-900 aspect-4/3 sm:aspect-5/4 lg:aspect-4/5 group">
              <ArchitecturalVisual
                type="floorplan"
                src={customHeroImage || '/assets/upcoming-16-khanpur-road.png'}
                alt="16 Khanpur Road residential layout plan by Soma Naskar"
                className="w-full h-full"
              />

              {/* Scrim and Floating Project Tag */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-neutral-950/95 via-neutral-950/60 to-transparent flex flex-col justify-end text-white">
                <div className="flex items-center justify-between text-xs text-neutral-300 mb-1">
                  <span className="font-semibold text-amber-400 tracking-wider uppercase text-[10px]">
                    Featured Upcoming Project
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    Khanpur Road, Kolkata
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold font-display text-white">
                  16 Khanpur Road — 5-BHK Luxury Villa &amp; Pool
                </h3>
                <p className="text-xs text-neutral-300 mt-1 line-clamp-1">
                  Plot: 47&apos;-5&quot; x 46&apos;-6&quot; · Swimming Pool · 2-Car Driveway · Private Garden
                </p>
              </div>

              {/* Studio Stamp Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-neutral-900 px-3 py-1.5 rounded-md border border-neutral-200 text-xs font-semibold shadow-xs flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-amber-600" />
                <span>Nir Architecture &amp; Interiors</span>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white border border-neutral-200/90 rounded-xl p-3.5 shadow-lg items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-neutral-900">Registered Architect &amp; Engineer</div>
                <div className="text-neutral-500">Council of Architecture &amp; KMC Registered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
