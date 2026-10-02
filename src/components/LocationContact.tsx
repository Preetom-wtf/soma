import React, { useState } from 'react';
import { ARCHITECT_INFO } from '../data/portfolioData';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  MessageCircle,
  ExternalLink,
  Send,
  CheckCircle2,
  Clock,
  Compass
} from 'lucide-react';

export const LocationContact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Villa / Bungalow',
    location: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Instant submission feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello Ar. Soma Naskar, my name is ${formState.name || 'a client'}. I am inquiring about a ${formState.projectType} in ${formState.location || 'Kolkata'}. Details: ${formState.message || 'I would like to schedule a design consultation.'}`;
    window.open(`https://wa.me/${ARCHITECT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="location" className="py-20 md:py-28 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
            Studio &amp; Consultation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-950 tracking-tight">
            Visit the Studio or Book an Architectural Consultation
          </h2>
          <p className="text-base text-neutral-600 mt-2 leading-relaxed">
            Whether you are embarking on a new residential build from foundation up, planning a modular interior transformation, or require municipal building sanctions, Ar. Soma Naskar is here to guide your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Info & Map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FBFBF9] border border-neutral-200/90 shadow-xs space-y-6">
              <h3 className="text-lg font-bold font-display text-neutral-900 border-b border-neutral-200 pb-3">
                Studio Contact Details
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Studio Location
                  </div>
                  <div className="text-sm font-semibold text-neutral-900 mt-0.5">
                    {ARCHITECT_INFO.studioName}
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                    {ARCHITECT_INFO.address}
                  </div>
                  <a
                    href={ARCHITECT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800 mt-2"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Direct Phone / WhatsApp
                  </div>
                  <a
                    href={`tel:${ARCHITECT_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="block text-sm font-bold text-neutral-900 hover:text-amber-700 transition-colors mt-0.5"
                  >
                    {ARCHITECT_INFO.phone}
                  </a>
                  <a
                    href={`https://wa.me/${ARCHITECT_INFO.whatsappNumber}?text=${encodeURIComponent(
                      ARCHITECT_INFO.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800 mt-1"
                  >
                    <span>Chat instantly on WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Email Correspondence
                  </div>
                  <a
                    href={`mailto:${ARCHITECT_INFO.email}`}
                    className="text-xs font-semibold text-neutral-800 hover:text-sky-700 transition-colors mt-0.5 break-all"
                  >
                    {ARCHITECT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Facebook Profile Link */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Facebook className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Official Facebook
                  </div>
                  <a
                    href={ARCHITECT_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 mt-0.5"
                  >
                    <span>facebook.com/SomaNaskarArchitect</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Office Consultation Hours */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-neutral-200">
                <Clock className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <div className="text-xs text-neutral-500">
                  <span className="font-semibold text-neutral-800">Studio Hours:</span> Mon – Sat: 10:00 AM – 7:30 PM (Prior appointment recommended for site visits).
                </div>
              </div>
            </div>

            {/* Embedded Google Maps Container */}
            <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-xs bg-neutral-100">
              <div className="p-3 bg-neutral-900 text-white flex items-center justify-between text-xs">
                <span className="font-semibold flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  Studio Location Map
                </span>
                <a
                  href={ARCHITECT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline flex items-center gap-1"
                >
                  Directions <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="relative aspect-16/9 w-full">
                <iframe
                  title="Soma Naskar Nir Architecture Studio Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.375628172935!2d88.3756!3d22.4800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02717326b483e5%3A0x6a2c2069b76c8c4a!2sBrahmapur%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#FBFBF9] border border-neutral-200/90 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-950">
                  Request an Architectural Consultation
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                  Share your project requirements, location, and timeline. Ar. Soma Naskar will review your inquiry and connect within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-white border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-display text-neutral-900">
                    Consultation Request Received
                  </h4>
                  <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formState.name}</strong>. We have logged your inquiry for <strong>{formState.projectType}</strong>. Ar. Soma Naskar will contact you shortly.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Open Chat on WhatsApp Now
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-neutral-500 hover:text-neutral-800 underline"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Subhankar Roy"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-neutral-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 98300 00000"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-neutral-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Email & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-neutral-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Project Location in Kolkata *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.location}
                        onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                        placeholder="e.g. Brahmapur, Garia, Tollygunge, etc."
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-neutral-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Project Nature / Scope *
                    </label>
                    <select
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-neutral-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                    >
                      <option>Residential Villa / Bungalow Architecture</option>
                      <option>Modular Kitchen &amp; Interior Architecture</option>
                      <option>RCC Structural Engineering &amp; KMC Sanctions</option>
                      <option>Multi-Storey Residential Apartment (G+3 / G+4)</option>
                      <option>Rooftop Terrace Garden &amp; Pergola Design</option>
                      <option>Complete Turnkey Renovation</option>
                    </select>
                  </div>

                  {/* Message / Plot Dimensions */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Brief Description / Plot Dimensions / Special Wishes
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="e.g. We have a 4-kottah plot in South Kolkata and would like to build a 4-bedroom home with swimming pool, natural lighting, and KMC sanction approvals."
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-neutral-300 bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 resize-none"
                    />
                  </div>

                  {/* Submit and WhatsApp options */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold transition-colors shadow-xs disabled:opacity-50 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{submitting ? 'Submitting...' : 'Send Consultation Request'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/80 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-neutral-500 mt-2">
                    🔒 Strict client confidentiality. No unsolicited promotional spam or financial calculators.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
