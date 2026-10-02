import React, { useState, useEffect } from 'react';
import { NirLogo } from './NirLogo';
import { ARCHITECT_INFO } from '../data/portfolioData';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Field Work', href: '#field-work' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Studio', href: '#location' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBFBF9]/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs'
          : 'bg-[#FBFBF9] border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single element / clean Brand Zone with Logo */}
        <a href="#" className="flex items-center group transition-transform active:scale-95">
          <NirLogo size="md" />
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-neutral-900 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-neutral-900 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://wa.me/${ARCHITECT_INFO.whatsappNumber}?text=${encodeURIComponent(
              ARCHITECT_INFO.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200/80 transition-colors whitespace-nowrap"
            title="Chat directly on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            <span>Consult Now</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenConsultation}
            className="p-2 text-xs font-semibold text-white bg-neutral-900 rounded-md"
            aria-label="Consult Now"
          >
            Consult
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-md focus:outline-hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBFBF9] border-b border-neutral-200 px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-neutral-800 hover:bg-neutral-100 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-200 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${ARCHITECT_INFO.whatsappNumber}?text=${encodeURIComponent(
                ARCHITECT_INFO.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-600 text-white font-medium text-sm shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Soma Naskar
            </a>
            <a
              href={`tel:${ARCHITECT_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-neutral-300 text-neutral-700 font-medium text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Studio ({ARCHITECT_INFO.phone})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
