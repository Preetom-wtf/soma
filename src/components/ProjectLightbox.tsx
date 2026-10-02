import React, { useEffect } from 'react';
import { ArchitecturalVisual } from './ArchitecturalVisual';
import { ARCHITECT_INFO } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight, MessageCircle, MapPin, Layers, Camera, Check } from 'lucide-react';

export interface LightboxItem {
  id: string;
  title: string;
  categoryLabel: string;
  location: string;
  year?: string;
  plotOrArea?: string;
  description: string;
  highlights: string[];
  filename: string;
  fallbackType: 'floorplan' | 'living' | 'kitchen-white' | 'kitchen-dark' | 'elevation' | 'terrace' | 'site-slab' | 'site-masonry' | 'site-terrace';
}

interface ProjectLightboxProps {
  project: LightboxItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  customImages?: Record<string, string>;
  onImageChange?: (filename: string, dataUrl: string) => void;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  project,
  onClose,
  onPrev,
  onNext,
  customImages = {},
  onImageChange,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose, onPrev, onNext]);

  if (!project) return null;

  const imageSrc = customImages[project.filename] || `/assets/${project.filename}`;
  const whatsappUrl = `https://wa.me/${ARCHITECT_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Ar. Soma Naskar, I saw the "${project.title}" (${project.categoryLabel}) on your portfolio and would like to discuss a similar project.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-neutral-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-neutral-800/90 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Container */}
        <div className="relative w-full lg:w-3/5 bg-neutral-950 min-h-[320px] lg:min-h-[540px] flex items-center justify-center">
          <ArchitecturalVisual
            type={project.fallbackType}
            src={imageSrc}
            alt={project.title}
            className="w-full h-full min-h-[320px] lg:min-h-[540px]"
          />

          {/* Navigation Controls */}
          <button
            onClick={onPrev}
            aria-label="Previous project"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 transition-colors border border-neutral-700 shadow-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={onNext}
            aria-label="Next project"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 transition-colors border border-neutral-700 shadow-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Image Filename hint badge & Direct Upload Original Action */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-20">
            <div className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-xs text-[11px] text-neutral-300 font-mono flex items-center gap-1.5 border border-neutral-800">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>{project.filename}</span>
            </div>

            {onImageChange && (
              <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs transition-colors cursor-pointer shadow-md">
                <Camera className="w-3.5 h-3.5" />
                <span>{customImages[project.filename] ? 'Swap Photo' : 'Upload Original Photo'}</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (ev) => {
                        if (ev.target?.result) {
                          onImageChange(project.filename, ev.target.result as string);
                        }
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>
            )}
          </div>
        </div>

        {/* Information Panel */}
        <div className="w-full lg:w-2/5 p-6 md:p-8 flex flex-col justify-between text-neutral-200">
          <div>
            {/* Category & Status */}
            <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3">
              <span className="text-amber-400 font-semibold tracking-wider uppercase">
                {project.categoryLabel}
              </span>
              <span aria-hidden="true">·</span>
              <span>{project.year || 'Current'}</span>
            </div>

            {/* Title */}
            <h3 id="lightbox-project-title" className="text-xl md:text-2xl font-bold font-display text-white mb-3">
              {project.title}
            </h3>

            {/* Location & Area Metadata */}
            <div className="space-y-1.5 text-xs text-neutral-400 mb-5 pb-5 border-b border-neutral-800">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{project.location}</span>
              </div>
              {project.plotOrArea && (
                <div className="flex items-start gap-2">
                  <Layers className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className="font-mono text-neutral-300">{project.plotOrArea}</span>
                </div>
              )}
            </div>

            {/* Narrative Description */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                Design &amp; Structural Concept
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Architectural Highlights */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2.5">
                Key Architectural Highlights
              </h4>
              <ul className="space-y-2 text-xs text-neutral-300">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-sm transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              Discuss Similar Project on WhatsApp
            </a>
            <p className="text-[11px] text-center text-neutral-500">
              Direct consultation with Ar. Soma Naskar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
