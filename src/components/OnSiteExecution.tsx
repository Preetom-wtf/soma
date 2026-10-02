import React, { useState } from 'react';
import { SITE_PHOTOS } from '../data/portfolioData';
import { ArchitecturalVisual } from './ArchitecturalVisual';
import { HardHat, ShieldCheck, Ruler, CheckCircle2, Maximize2, MapPin, Upload, Camera, Check } from 'lucide-react';
import { SitePhoto } from '../types';

interface OnSiteExecutionProps {
  onSelectSitePhoto: (photo: SitePhoto) => void;
  customImages?: Record<string, string>;
  onImageChange?: (filename: string, dataUrl: string) => void;
}

export const OnSiteExecution: React.FC<OnSiteExecutionProps> = ({
  onSelectSitePhoto,
  customImages = {},
  onImageChange,
}) => {
  const [dragOverId, setDragOverId] = useState<string | null>(null);
  const [activeCardId, setActiveCardId] = useState<string>('site-field-measurement');

  // Clipboard paste support: allowing users to Ctrl+V / Cmd+V an image directly!
  React.useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items || !onImageChange) return;

      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const file = items[i].getAsFile();
          if (file) {
            const targetItem = SITE_PHOTOS.find((p) => p.id === activeCardId) || SITE_PHOTOS[0];
            const reader = new FileReader();
            reader.onload = (event) => {
              if (event.target?.result) {
                onImageChange(targetItem.filename, event.target.result as string);
              }
            };
            reader.readAsDataURL(file);
            break;
          }
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [activeCardId, onImageChange]);

  const handleFileDrop = (e: React.DragEvent, filename: string, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOverId(null);
    setActiveCardId(id);
    const file = e.dataTransfer.files?.[0];
    if (file && onImageChange) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageChange(filename, event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>, filename: string) => {
    const file = e.target.files?.[0];
    if (file && onImageChange) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageChange(filename, event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="field-work" className="py-20 md:py-28 bg-[#F4F4F0] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
              <HardHat className="w-4 h-4 text-amber-600" />
              <span>Uncompromising On-Site Presence</span>
              <span aria-hidden="true" className="text-amber-500">/</span>
              <span>Field Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-950 tracking-tight">
              Hands-On Field Leadership &amp; Relentless Work Ethic
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 mt-3 leading-relaxed">
              True architectural longevity is not forged behind an air-conditioned desk. Ar. Soma Naskar personally commands the job site — walking rebar decks, inspecting load-bearing bamboo formwork, and taking precision tape measurements in the hot sun.
            </p>
          </div>

          {/* Quick Work Ethic Metric */}
          <div className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-2xs flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-lg bg-amber-500 text-neutral-950 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-xs">
              <div className="font-bold text-neutral-950 text-sm">100% On-Site Audited</div>
              <div className="text-neutral-500">No delegated casting milestones</div>
            </div>
          </div>
        </div>

        {/* 2 Authentic Field Photos Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SITE_PHOTOS.map((item) => {
            const hasCustomImage = !!customImages[item.filename];
            const imageSrc = customImages[item.filename] || `/assets/${item.filename}`;
            const isDragging = dragOverId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => onSelectSitePhoto(item)}
                onMouseEnter={() => setActiveCardId(item.id)}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOverId(item.id);
                  setActiveCardId(item.id);
                }}
                onDragLeave={() => setDragOverId(null)}
                onDrop={(e) => handleFileDrop(e, item.filename, item.id)}
                className={`group relative flex flex-col bg-white rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                  isDragging
                    ? 'border-amber-500 ring-4 ring-amber-400/30 scale-[1.01]'
                    : 'border-neutral-200/90 shadow-xs hover:shadow-xl'
                }`}
              >
                {/* Visual Image Frame - Click to upload when not set or click to view */}
                <div
                  className="relative overflow-hidden bg-neutral-900 aspect-3/4 group/visual"
                  onClick={(e) => {
                    if (!hasCustomImage) {
                      e.stopPropagation();
                      // trigger file input
                      const fileInput = document.getElementById(`file-input-${item.id}`) as HTMLInputElement;
                      if (fileInput) fileInput.click();
                    }
                  }}
                >
                  <input
                    id={`file-input-${item.id}`}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileInput(e, item.filename)}
                  />

                  <ArchitecturalVisual
                    type={item.fallbackType}
                    src={imageSrc}
                    alt={item.title}
                    interactive={true}
                    className="w-full h-full"
                  />

                  {/* Scrim Overlay: Crystal-clear bottom gradient preserving original photograph clarity */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent pointer-events-none transition-opacity" />

                  {/* Milestone Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium border border-white/10 z-10">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>{item.stage}</span>
                  </div>

                  {/* Top Right Expand Action */}
                  <div
                    className="absolute top-3 right-3 flex items-center gap-1.5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectSitePhoto(item);
                      }}
                      aria-label="View full screen"
                      className="p-1.5 rounded-lg bg-black/60 text-white hover:bg-black/80 transition-colors backdrop-blur-xs"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-5 sm:p-6 flex flex-col justify-between grow">
                  <div>
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{item.location}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold font-display text-neutral-950 group-hover:text-amber-700 transition-colors mb-1">
                      {item.title}
                    </h3>

                    {/* Subtitle */}
                    <div className="text-xs font-semibold text-amber-800 mb-3">
                      {item.subtitle}
                    </div>

                    {/* Narrative Description */}
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Work Highlights List */}
                  <div className="pt-3 border-t border-neutral-100">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                      Demonstrated Field Vigilance
                    </div>
                    <ul className="space-y-1.5 text-xs text-neutral-700">
                      {item.workHighlights.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                          <span className="leading-tight">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Structural Commitment Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-800">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Ruler className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold font-display text-white">
                Why Hard-Working Field Supervision Matters
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl leading-relaxed">
                Most structural failures and cost escalations occur because design architects rarely step foot on active casting decks. Ar. Soma Naskar personally oversees concrete slump tests, rebar cover clearances, and staging props to ensure your home lasts a lifetime without cracks or settling.
              </p>
            </div>
          </div>

          <a
            href="#location"
            className="px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Schedule Site Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

