import React, { useState } from 'react';
import { ARCHITECT_INFO, PROJECTS } from '../data/portfolioData';
import { Image, X, Upload, Check, FolderDown, Sparkles } from 'lucide-react';

interface AssetMatcherBadgeProps {
  customImages: Record<string, string>;
  onImageChange: (filename: string, dataUrl: string) => void;
  onResetImages: () => void;
}

export const AssetMatcherBadge: React.FC<AssetMatcherBadgeProps> = ({
  customImages,
  onImageChange,
  onResetImages,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const assetList = [
    {
      slot: 'Upcoming: 16 Khanpur Road Floor Plan',
      filename: 'upcoming-16-khanpur-road.png',
      description: 'Master plan with pool, 5 bedrooms, 2-car parking, 47\'-5" x 46\'-6" plot (830188837...)',
      usedIn: 'Hero & Portfolio Gallery',
    },
    {
      slot: 'Upcoming: 4-Storey Luxury Villa 3D Render',
      filename: 'upcoming-nir-villa-elevation.png',
      description: '4-storey modern residence with swimming pool, car, cantilevered balconies & Nir gate',
      usedIn: 'Portfolio Gallery',
    },
    {
      slot: 'Completed: Living & Dining with Wood Partition',
      filename: 'completed-living-dining-partition.png',
      description: 'Modern living room with vertical wood louver partition & diamond wine rack',
      usedIn: 'Portfolio Gallery',
    },
    {
      slot: 'Completed: Scandinavian White Modular Kitchen',
      filename: 'completed-scandinavian-kitchen.png',
      description: 'High-gloss white acrylic kitchen with fluted glass cabinets & chimney',
      usedIn: 'Portfolio Gallery',
    },
    {
      slot: 'Completed: Warm Walnut Modular Kitchen',
      filename: 'completed-walnut-kitchen.png',
      description: 'Dark walnut modular kitchen with warm ambient under-cabinet lighting',
      usedIn: 'Portfolio Gallery',
    },
    {
      slot: 'On-Site: RCC Roof Slab & Rebar Inspection',
      filename: 'site-work-slab-inspection.png',
      description: 'Soma Naskar walking on rebar deck with blueprints, discussing with contractor in blue polo',
      usedIn: 'Hands-On Field Leadership Section',
    },
    {
      slot: 'On-Site: Formwork & Brick Masonry Audit',
      filename: 'site-work-formwork-audit.png',
      description: 'Soma Naskar reviewing drawings in hand in front of bamboo staging & brick building',
      usedIn: 'Hands-On Field Leadership Section',
    },
    {
      slot: 'Architect Portrait Photo',
      filename: ARCHITECT_INFO.founderPortraitFilename,
      description: 'Illustration of Ar. Soma Naskar sitting at her wooden desk with plants and books',
      usedIn: 'About / Founder Section',
    },
    {
      slot: 'Company Logo',
      filename: ARCHITECT_INFO.logoFilename,
      description: 'Circular logo with pink building block, window, yellow & blue shapes',
      usedIn: 'Navbar & Footer',
    },
  ];

  const handleFileUpload = (filename: string, file: File) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      if (e.target?.result) {
        const dataUrl = e.target.result as string;
        onImageChange(filename, dataUrl);
        // Persist to disk via /api/save-asset
        try {
          await fetch('/api/save-asset', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename, dataUrl }),
          });
        } catch {
          // ignore
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleBatchUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    // Target slots in order of user upload
    const targetSlots = [
      'site-work-slab-inspection.png',
      'upcoming-16-khanpur-road.png',
      'site-work-formwork-audit.png',
      'upcoming-nir-villa-elevation.png',
      'completed-living-dining-partition.png',
      'completed-walnut-kitchen.png',
      'completed-scandinavian-kitchen.png',
    ];

    files.forEach((file, index) => {
      // Smart matching by filename
      let matchedSlot = '';
      const lower = file.name.toLowerCase();
      if (lower.includes('830188837') || lower.includes('khanpur')) {
        matchedSlot = 'upcoming-16-khanpur-road.png';
      } else if (lower.includes('r7fqjs') || lower.includes('gemini_generated') || lower.includes('portrait') || lower.includes('soma')) {
        matchedSlot = ARCHITECT_INFO.founderPortraitFilename;
      } else if (index < targetSlots.length) {
        matchedSlot = targetSlots[index];
      }

      if (matchedSlot) {
        handleFileUpload(matchedSlot, file);
      }
    });
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-900/90 hover:bg-neutral-900 text-white text-xs font-semibold shadow-lg backdrop-blur-md border border-neutral-700 hover:scale-105 transition-all cursor-pointer"
          title="View Asset Mapping & Match Local Files"
        >
          <Image className="w-3.5 h-3.5 text-amber-400" />
          <span>Asset Matcher</span>
          {Object.keys(customImages).length > 0 && (
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          )}
        </button>
      </div>

      {/* Asset Matcher Drawer / Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="asset-matcher-title"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-xl max-h-[85vh] overflow-y-auto p-5 sm:p-6 shadow-2xl border border-neutral-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
              <div className="flex items-center gap-2">
                <FolderDown className="w-5 h-5 text-amber-600" />
                <h3 id="asset-matcher-title" className="text-base font-bold font-display text-neutral-900">
                  Local Asset Matcher &amp; Preview
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-neutral-600 mt-2 mb-3 leading-relaxed">
              To match your local images, simply save your files in the <code className="px-1.5 py-0.5 bg-neutral-100 rounded text-neutral-900 font-mono text-[11px]">public/assets/</code> folder using the filenames below. You can also upload them here to test live immediately.
            </p>

            {/* Quick 1-Click Batch Importer */}
            <div className="mb-4 p-3.5 bg-amber-50/80 border border-amber-200/90 rounded-xl flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>1-Click Import All 7 Original Photos</span>
                </div>
                <div className="text-[11px] text-amber-800 mt-0.5">
                  Select your 7 downloaded photo files together to auto-populate the entire site
                </div>
              </div>
              <label className="px-3.5 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer shadow-xs whitespace-nowrap">
                <span>Select 7 Photos</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleBatchUpload}
                />
              </label>
            </div>

            <div className="space-y-3">
              {assetList.map((item, idx) => {
                const isLoaded = !!customImages[item.filename];
                return (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border border-neutral-200/90 bg-[#FBFBF9] flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="min-w-0">
                      <div className="font-bold text-neutral-900 flex items-center gap-1.5">
                        <span>{item.slot}</span>
                        <span className="text-[10px] text-neutral-400 font-normal">
                          ({item.usedIn})
                        </span>
                      </div>
                      <div className="font-mono text-amber-700 text-[11px] font-semibold mt-0.5">
                        {item.filename}
                      </div>
                      <div className="text-[11px] text-neutral-500 mt-0.5 line-clamp-1">
                        {item.description}
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      {isLoaded ? (
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                          <Check className="w-3 h-3" />
                          Loaded
                        </span>
                      ) : null}

                      <label className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded bg-neutral-900 hover:bg-neutral-800 text-white text-[11px] font-semibold cursor-pointer transition-colors shadow-2xs">
                        <Upload className="w-3 h-3" />
                        <span>Upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileUpload(item.filename, file);
                          }}
                        />
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>

            {Object.keys(customImages).length > 0 && (
              <div className="mt-4 pt-3 border-t border-neutral-200 flex justify-end">
                <button
                  onClick={onResetImages}
                  className="text-xs text-red-600 hover:text-red-700 underline"
                >
                  Reset custom uploads to built-in architectural illustrations
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
