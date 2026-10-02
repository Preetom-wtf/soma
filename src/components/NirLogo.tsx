import React, { useState } from 'react';

interface NirLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  lightMode?: boolean;
}

export const NirLogo: React.FC<NirLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  lightMode = false,
}) => {
  const [imageError, setImageError] = useState(false);

  const dimensionMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 md:w-11 md:h-11',
    lg: 'w-14 h-14 md:w-16 md:h-16',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Logo Emblem */}
      <div className={`relative ${dimensionMap[size]} shrink-0 rounded-full shadow-xs`}>
        {!imageError ? (
          <img
            src="/assets/nir-logo.png"
            alt="Nir - shape y/our home logo"
            className="w-full h-full object-contain rounded-full"
            onError={() => setImageError(true)}
          />
        ) : null}

        {/* High-Fidelity Vector Reproduction of user's uploaded logo */}
        {imageError && (
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-xs"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* White Circular Base */}
            <circle cx="100" cy="100" r="98" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
            
            {/* Sky Blue curved arc shape */}
            <path
              d="M 95 24 A 68 68 0 0 1 168 112 L 140 112 A 40 40 0 0 0 95 52 Z"
              fill="#0ea5e9"
            />
            
            {/* Yellow / Golden top accent */}
            <rect x="82" y="18" width="28" height="22" rx="2" fill="#eab308" />

            {/* Lime Green Accent Bottom-Right */}
            <rect x="124" y="120" width="36" height="38" rx="2" fill="#84cc16" opacity="0.9" />

            {/* Magenta / Pink Central Building Box */}
            <rect x="54" y="52" width="88" height="88" rx="2" fill="#db2777" />

            {/* 4-Pane Grid Window inside Magenta Block */}
            <rect x="100" y="66" width="14" height="14" rx="1" fill="#FFFFFF" />
            <rect x="118" y="66" width="14" height="14" rx="1" fill="#FFFFFF" />
            <rect x="100" y="84" width="14" height="14" rx="1" fill="#FFFFFF" />
            <rect x="118" y="84" width="14" height="14" rx="1" fill="#FFFFFF" />

            {/* Stylized Blue Pin / Compass Figure */}
            <circle cx="92" cy="136" r="6" fill="#1e3a8a" />
            <path d="M 92 142 L 89 164 M 92 142 L 95 164" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" />

            {/* Typography "N i R" */}
            {/* N */}
            <path d="M 66 162 L 66 146 Q 66 142 72 142 Q 78 142 78 146 L 78 162" stroke="#1e3a8a" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* R */}
            <path d="M 104 162 L 104 144 L 114 144 Q 118 144 118 150 Q 118 154 114 154 L 104 154 M 112 154 L 118 162" stroke="#1e3a8a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

            {/* Subtext "shape y/our home" */}
            <text
              x="100"
              y="178"
              textAnchor="middle"
              fill="#334155"
              fontSize="10"
              fontWeight="600"
              fontFamily="sans-serif"
              letterSpacing="0.05em"
            >
              shape y/our home
            </text>
          </svg>
        )}
      </div>

      {/* Brand Text Lockup */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span
              className={`text-base md:text-lg font-bold tracking-tight font-display ${
                lightMode ? 'text-white' : 'text-neutral-900'
              }`}
            >
              Soma Naskar
            </span>
            <span
              className={`text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-sm ${
                lightMode
                  ? 'bg-neutral-800 text-amber-300 border border-neutral-700'
                  : 'bg-amber-50 text-amber-900 border border-amber-200/80'
              }`}
            >
              Ar. & Eng.
            </span>
          </div>
          <span
            className={`text-[11px] md:text-xs tracking-wide ${
              lightMode ? 'text-neutral-400' : 'text-neutral-500'
            }`}
          >
            Nir Architecture & Interiors
          </span>
        </div>
      )}
    </div>
  );
};
