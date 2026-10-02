import React, { useState, useEffect } from 'react';
import { ARCHITECT_INFO } from '../data/portfolioData';
import { X, Send, MessageCircle, Phone, CheckCircle2, MapPin } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Residential Villa / Private House');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const message = `Hello Ar. Soma Naskar, my name is ${name || 'a client'}. I would like to book an architectural consultation regarding ${projectType}. My contact number is ${phone}.`;
    window.open(
      `https://wa.me/${ARCHITECT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
            Nir Architecture &amp; Interiors
          </div>
          <h3 id="consultation-modal-title" className="text-2xl font-bold font-display text-neutral-900">
            Book Architect Consultation
          </h3>
          <p className="text-xs text-neutral-600 mt-1">
            Connect directly with Ar. Soma Naskar for residential design, RCC structural vetting, or interior architecture in Kolkata.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-neutral-900 font-display">
              Request Sent Successfully
            </h4>
            <p className="text-xs text-neutral-600">
              Thank you, {name}. Ar. Soma Naskar will call you at {phone} to discuss your project.
            </p>
            <div className="pt-2">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Open WhatsApp Chat Now
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Debashis Roy"
                className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Phone Number (WhatsApp preferred) *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98300 00000"
                className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Project Category
              </label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500/50"
              >
                <option>Residential Villa / Private House</option>
                <option>Modular Kitchen &amp; Interior Woodwork</option>
                <option>KMC / Municipal Sanction &amp; RCC Engineering</option>
                <option>Commercial Showroom / Clinic</option>
                <option>Rooftop Terrace Garden &amp; Pergola</option>
              </select>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Confirm Consultation Request</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full py-2.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Quick WhatsApp Connect</span>
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-2 border-t border-neutral-100">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-600" />
                Brahmapur, Kolkata
              </span>
              <a
                href={`tel:${ARCHITECT_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="text-neutral-600 hover:text-neutral-900 flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                {ARCHITECT_INFO.phone}
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
