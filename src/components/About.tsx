import React, { useState } from 'react';
import { ARCHITECT_INFO } from '../data/portfolioData';
import { ArchitecturalVisual } from './ArchitecturalVisual';
import { Check, Facebook, MessageCircle, Sparkles, Building2, DraftingCompass, TreePine, Camera, Upload, Maximize2 } from 'lucide-react';
import founderPortraitImg from '../assets/images/regenerated_image_1790932460802.png';

interface AboutProps {
  customPortraitImage?: string;
  onImageChange?: (filename: string, dataUrl: string) => void;
}

export const About: React.FC<AboutProps> = ({ customPortraitImage, onImageChange }) => {
  const [isDragging, setIsDragging] = useState(false);
  const hasCustomImage = !!customPortraitImage;

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && onImageChange) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageChange(ARCHITECT_INFO.founderPortraitFilename, event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onImageChange) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageChange(ARCHITECT_INFO.founderPortraitFilename, event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const highlights = [
    {
      title: 'Residential Architecture',
      desc: 'Custom contemporary villas, urban bungalows, and multi-family homes designed around natural solar orientation and ventilation.',
      icon: Building2,
    },
    {
      title: 'Commercial & Retail',
      desc: 'High-visibility retail storefronts, boutique healthcare clinics, and modern commercial offices with ergonomic layouts.',
      icon: DraftingCompass,
    },
    {
      title: 'Bespoke Interior Design',
      desc: 'Turnkey interior transformations including acoustic timber partitions, modular kitchens, cove lighting, and tailored joinery.',
      icon: Sparkles,
    },
    {
      title: 'Sustainable Construction',
      desc: 'Climate-adaptive building envelopes, rainwater harvesting, energy-saving shading louvers, and biophilic open courtyards.',
      icon: TreePine,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-neutral-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait Artwork & Framed Presence */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Layered Accent Frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-amber-300 rounded-2xl -z-10 hidden sm:block" />
              
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleFileDrop}
                onClick={() => {
                  const input = document.getElementById('founder-portrait-input') as HTMLInputElement;
                  if (input) input.click();
                }}
                title="Click or drag to update portrait photo"
                className={`relative rounded-2xl overflow-hidden shadow-xl border bg-neutral-900 aspect-3/4 group/portrait cursor-pointer transition-all ${
                  isDragging
                    ? 'border-amber-500 ring-4 ring-amber-400/40 scale-[1.01]'
                    : 'border-neutral-200'
                }`}
              >
                <input
                  id="founder-portrait-input"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileInput}
                />

                <ArchitecturalVisual
                  type="portrait"
                  src={customPortraitImage || founderPortraitImg}
                  alt="Portrait of Ar. Soma Naskar, Principal Architect & Structural Engineer"
                  className="w-full h-full"
                />

                {/* Subtle Hover Action Pill (Visible only on mouse hover) */}
                <div className="absolute top-3 right-3 opacity-0 group-hover/portrait:opacity-100 transition-opacity duration-200 z-20 pointer-events-none">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-xs text-white text-xs font-semibold shadow-md">
                    <Camera className="w-3.5 h-3.5 text-amber-400" />
                    <span>Change Photo</span>
                  </div>
                </div>

                {/* Overlay Quote banner at bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/65 to-transparent p-6 text-white pointer-events-none">
                  <div className="text-amber-400 font-serif italic text-base mb-1">
                    &ldquo;Good design creates happy spaces.&rdquo;
                  </div>
                  <div className="text-xs text-neutral-300 font-medium">
                    Ar. Soma Naskar — Principal Architect &amp; Structural Engineer
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Architectural Philosophy */}
          <div className="lg:col-span-7">
            {/* Header text kicker */}
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-800 mb-3">
              About the Architect
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-950 tracking-tight mb-6">
              Soma Naskar — Where Aesthetic Vision Meets Structural Rigor.
            </h2>

            <div className="prose text-neutral-600 space-y-4 text-base leading-relaxed mb-8">
              <p>
                Based in Kolkata, <strong>Ar. Soma Naskar</strong> is the founder and principal architect behind <strong>Nir Architecture &amp; Interiors</strong>. With over a decade of hands-on practice, she has established a reputation for creating residences that resonate with elegance, natural light, and structural durability.
              </p>
              <p>
                Holding rare dual expertise in both architectural design and structural engineering, Soma bridges the gap between imaginative conceptual drawings and on-site engineering reality. Every project balances aesthetic harmony with strict municipal sanctions (KMC, KMDA, Panchayat), foundation safety, and climate-conscious passive cooling.
              </p>
              <p className="italic text-neutral-800 border-l-2 border-amber-500 pl-4 py-1">
                &ldquo;Our philosophy is simple: A home is not merely a concrete box. It is a sanctuary that should inspire joy, foster well-being, and endure beautifully across generations.&rdquo;
              </p>
            </div>

            {/* Core Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-neutral-200/90 bg-[#FBFBF9] hover:border-amber-300 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-100/70 text-amber-800 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-neutral-900 font-display">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-600 leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Social & Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-200">
              <a
                href={ARCHITECT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-300 text-neutral-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 transition-colors text-xs font-semibold"
              >
                <Facebook className="w-4 h-4 text-blue-600" />
                <span>Visit Facebook Profile</span>
              </a>

              <a
                href={`https://wa.me/${ARCHITECT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  ARCHITECT_INFO.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Connect via WhatsApp</span>
              </a>

              <span className="text-xs text-neutral-400 ml-auto hidden sm:inline">
                Studio: Brahmapur, Kolkata
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
