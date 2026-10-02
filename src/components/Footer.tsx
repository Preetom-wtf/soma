import React from 'react';
import { NirLogo } from './NirLogo';
import { ARCHITECT_INFO } from '../data/portfolioData';
import { Facebook, MapPin, Phone, Mail, MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Info & Motto */}
          <div className="lg:col-span-5 space-y-4">
            <NirLogo size="lg" lightMode={true} />
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed mt-4">
              Nir Architecture &amp; Interiors is an architectural and structural engineering practice in Kolkata led by Ar. Soma Naskar. Dedicated to shaping enduring spaces through thoughtful planning, material integrity, and precision execution.
            </p>
            <div className="pt-2 text-xs text-amber-400/90 font-serif italic">
              &ldquo;{ARCHITECT_INFO.motto}&rdquo;
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-neutral-200 font-bold">
              Portfolio Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Soma Naskar
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Completed &amp; Upcoming Works
                </a>
              </li>
              <li>
                <a href="#field-work" className="hover:text-white transition-colors">
                  On-Site Field Supervision
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services &amp; Structural Sanctions
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Client Google Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Studio Location &amp; Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Contact & Social */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-neutral-200 font-bold">
              Studio &amp; Office
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {ARCHITECT_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${ARCHITECT_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white">
                  {ARCHITECT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${ARCHITECT_INFO.email}`} className="hover:text-white">
                  {ARCHITECT_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href={ARCHITECT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center transition-colors border border-neutral-800"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={ARCHITECT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Location"
                className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center transition-colors border border-neutral-800"
              >
                <MapPin className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${ARCHITECT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  ARCHITECT_INFO.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat"
                className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center transition-colors border border-neutral-800"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Soma Naskar. Nir Architecture &amp; Interiors, Kolkata. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-neutral-500">
              Architectural Design &amp; Structural Engineering
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
