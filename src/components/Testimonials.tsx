import React from 'react';
import { TESTIMONIALS, ARCHITECT_INFO } from '../data/portfolioData';
import { Star, ExternalLink, MessageSquareQuote, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FBFBF9] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Google Proof Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
              Client Testimonials &amp; Trust
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-950 tracking-tight">
              Endorsed by Homeowners &amp; Developers Across Kolkata
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 max-w-xl">
              Authentic feedback from clients whose residences, penthouses, and building sanction projects were brought to life by Ar. Soma Naskar.
            </p>
          </div>

          {/* Google Maps Reviews Badge Card */}
          <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200 flex flex-col items-center justify-center text-amber-700">
              <span className="text-sm font-bold font-mono">5.0</span>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2 h-2 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-neutral-900">Google Verified Reviews</span>
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
              </div>
              <a
                href={ARCHITECT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800 hover:underline mt-0.5"
              >
                <span>Read reviews on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-neutral-300" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-neutral-700 leading-relaxed mb-6 font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Client Meta */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 font-display">
                    {t.clientName}
                  </h4>
                  <div className="text-xs text-neutral-500">
                    {t.projectType} · {t.location}
                  </div>
                </div>
                <div className="text-[11px] text-neutral-400 font-mono">
                  {t.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps Direct CTA Banner */}
        <div className="mt-12 text-center">
          <a
            href={ARCHITECT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-300 hover:border-neutral-400 bg-white text-neutral-800 text-xs font-semibold hover:bg-neutral-50 transition-colors shadow-2xs"
          >
            <span>See Studio Location &amp; Ratings on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
