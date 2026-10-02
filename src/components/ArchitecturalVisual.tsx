import React, { useState } from 'react';

interface ArchitecturalVisualProps {
  type: 'floorplan' | 'living' | 'kitchen-white' | 'kitchen-dark' | 'elevation' | 'terrace' | 'portrait' | 'site-slab' | 'site-masonry' | 'site-terrace';
  src?: string;
  alt: string;
  className?: string;
  interactive?: boolean;
}

export const ArchitecturalVisual: React.FC<ArchitecturalVisualProps> = ({
  type,
  src,
  alt,
  className = '',
  interactive = false,
}) => {
  const [hasError, setHasError] = useState(false);

  // If a valid src is given and hasn't errored, display the image
  if (src && !hasError) {
    return (
      <div className={`relative overflow-hidden w-full h-full bg-neutral-900 ${className}`}>
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
            interactive ? 'group-hover:scale-105' : ''
          }`}
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  // High-Fidelity Domain-Authentic Fallbacks based on the user's exact uploaded images
  return (
    <div
      className={`relative overflow-hidden w-full h-full select-none bg-neutral-900 flex items-center justify-center ${className}`}
    >
      {type === 'portrait' && (
        <svg
          viewBox="0 0 400 520"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Contemporary Studio Office Background */}
          <rect width="400" height="520" fill="#eef2f6" />
          
          {/* Depth - Distant Studio Interior Wall with Warm Wood Accent */}
          <rect x="220" y="80" width="160" height="340" fill="#e2d9cc" rx="4" />
          <rect x="250" y="140" width="85" height="50" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" rx="2" />
          {/* Architectural Firm Logo Plaque in Background */}
          <rect x="260" y="152" width="22" height="26" fill="#0284c7" opacity="0.8" rx="2" />
          <line x1="288" y1="160" x2="325" y2="160" stroke="#64748b" strokeWidth="2" />
          <line x1="288" y1="168" x2="315" y2="168" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Office Indoor Greenery / Planter Box */}
          <rect x="235" y="240" width="90" height="20" fill="#cbd5e1" rx="3" />
          <path d="M 240 240 Q 245 220 255 210 Q 265 220 270 240" fill="#15803d" />
          <path d="M 265 240 Q 275 215 285 205 Q 295 215 305 240" fill="#16a34a" />
          <path d="M 295 240 Q 305 220 315 210 Q 325 220 330 240" fill="#22c55e" />

          {/* Architectural Glass Partition with Frosted Privacy Bands */}
          <rect x="20" y="0" width="360" height="520" fill="#bae6fd" opacity="0.18" />
          {[60, 95, 130, 165, 200, 235, 270, 305, 340, 375].map((y, i) => (
            <rect key={i} x="10" y={y} width="380" height="18" fill="#ffffff" opacity="0.65" rx="1" />
          ))}

          {/* Ar. Soma Naskar Standing Figure - Centered Portrait */}
          <g transform="translate(200, 260)">
            {/* Hair - Neat Ponytail & Voluminous Crown */}
            <ellipse cx="0" cy="-175" rx="46" ry="50" fill="#111827" />
            <path d="M -45 -180 Q 0 -220 45 -180 Q 50 -130 35 -110 Q 0 -130 -35 -110 Q -50 -130 -45 -180 Z" fill="#0f172a" />
            {/* Ponytail behind neck */}
            <path d="M 25 -140 Q 40 -90 30 -50" stroke="#0f172a" strokeWidth="22" strokeLinecap="round" fill="none" />

            {/* Neck & Throat */}
            <rect x="-18" y="-120" width="36" height="42" fill="#d99b77" rx="6" />

            {/* Face Oval */}
            <ellipse cx="0" cy="-145" rx="38" ry="44" fill="#deb887" />
            {/* Subtle Bindi */}
            <circle cx="0" cy="-156" r="1.5" fill="#dc2626" />

            {/* Eyebrows */}
            <path d="M -26 -162 Q -16 -167 -6 -163" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 6 -163 Q 16 -167 26 -162" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Gold / Metallic Wireframe Spectacles */}
            <rect x="-30" y="-158" width="26" height="20" rx="6" fill="#f8fafc" fillOpacity="0.15" stroke="#d97706" strokeWidth="1.8" />
            <rect x="4" y="-158" width="26" height="20" rx="6" fill="#f8fafc" fillOpacity="0.15" stroke="#d97706" strokeWidth="1.8" />
            <line x1="-4" y1="-148" x2="4" y2="-148" stroke="#d97706" strokeWidth="2" />
            <line x1="-30" y1="-150" x2="-36" y2="-152" stroke="#d97706" strokeWidth="1.5" />
            <line x1="30" y1="-150" x2="36" y2="-152" stroke="#d97706" strokeWidth="1.5" />

            {/* Warm Friendly Eyes */}
            <ellipse cx="-17" cy="-148" rx="5" ry="3.5" fill="#1e293b" />
            <circle cx="-16" cy="-149" r="1.5" fill="#ffffff" />
            <ellipse cx="17" cy="-148" rx="5" ry="3.5" fill="#1e293b" />
            <circle cx="18" cy="-149" r="1.5" fill="#ffffff" />

            {/* Nose */}
            <path d="M 0 -148 L 0 -133 Q 3 -130 5 -133" stroke="#b45309" strokeWidth="1.2" strokeLinecap="round" fill="none" />

            {/* Welcoming Smiling Lips */}
            <path d="M -14 -123 Q 0 -115 14 -123" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M -10 -123 Q 0 -119 10 -123" fill="#ffffff" />

            {/* Vivid Crimson Inner Shirt / Collar Accent */}
            <polygon points="-22,-98 0,-62 22,-98 12,-105 -12,-105" fill="#dc2626" />

            {/* Tailored Black Executive Blazer Jacket */}
            <path d="M -75 -70 Q -45 -90 0 -90 Q 45 -90 75 -70 L 95 180 L -95 180 Z" fill="#09090b" stroke="#000000" strokeWidth="2" />

            {/* Left and Right Notched Blazer Lapels */}
            <polygon points="-65,-75 -24,-20 0,-60 -35,-85" fill="#18181b" stroke="#000000" strokeWidth="1" />
            <polygon points="65,-75 24,-20 0,-60 35,-85" fill="#18181b" stroke="#000000" strokeWidth="1" />

            {/* Center Front Buttons */}
            <circle cx="0" cy="10" r="4.5" fill="#27272a" stroke="#09090b" strokeWidth="1.5" />
            <circle cx="0" cy="55" r="4.5" fill="#27272a" stroke="#09090b" strokeWidth="1.5" />

            {/* Sleeves angled toward waist */}
            <path d="M -75 -70 L -105 50 L -45 110" stroke="#09090b" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M 75 -70 L 105 50 L 45 110" stroke="#09090b" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" fill="none" />

            {/* Clasped Hands in Front */}
            <ellipse cx="0" cy="115" rx="25" ry="16" fill="#deb887" />
            <ellipse cx="-12" cy="118" rx="14" ry="12" fill="#d99b77" />
            <ellipse cx="12" cy="118" rx="14" ry="12" fill="#deb887" />

            {/* Gold Bracelet / Bangle on Left Wrist */}
            <ellipse cx="36" cy="106" rx="6" ry="10" fill="none" stroke="#fbbf24" strokeWidth="3" transform="rotate(-15 36 106)" />
          </g>

          {/* Professional Overlay Badge */}
          <rect x="20" y="460" width="360" height="46" rx="8" fill="#0f172a" opacity="0.95" />
          <text x="35" y="480" fontSize="11" fontWeight="bold" fill="#ffffff">
            AR. SOMA NASKAR · PRINCIPAL ARCHITECT &amp; STRUCTURAL ENGINEER
          </text>
          <text x="35" y="495" fontSize="8.5" fill="#fbbf24">
            Nir Architecture &amp; Interiors · Kolkata, West Bengal
          </text>
        </svg>
      )}

      {type === 'floorplan' && (
        <svg
          viewBox="0 0 600 650"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Clean Engineering Grid Background */}
          <rect width="600" height="650" fill="#f8fafc" />
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="600" height="650" fill="url(#smallGrid)" />

          {/* Site Boundary & Outer Landscape */}
          <rect x="30" y="30" width="460" height="480" fill="#f1f5f9" stroke="#0f172a" strokeWidth="3" />
          
          {/* North Direction Arrow */}
          <g transform="translate(530, 70)">
            <circle cx="0" cy="0" r="24" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
            <polygon points="0,-18 7,12 0,6 -7,12" fill="#0f172a" />
            <text x="0" y="-24" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#0f172a">N</text>
          </g>

          {/* Project Header Info Box */}
          <text x="260" y="22" fontSize="13" fontWeight="bold" textAnchor="middle" fill="#0f172a" letterSpacing="0.05em">
            16 KHANPUR ROAD — RESIDENTIAL LAYOUT
          </text>

          {/* Specifications Sidebar on the right */}
          <g transform="translate(500, 130)">
            <text x="0" y="0" fontSize="9" fontWeight="bold" fill="#0f172a">PLOT SIZE</text>
            <text x="0" y="14" fontSize="8.5" fill="#334155">14478 (47&apos;-5&quot;)</text>
            <text x="0" y="26" fontSize="8.5" fill="#334155">X 14208 (46&apos;-6&quot;)</text>

            <text x="0" y="50" fontSize="9" fontWeight="bold" fill="#0f172a">SPECIFICATIONS</text>
            <text x="0" y="66" fontSize="8" fill="#475569">· 5 BEDROOMS</text>
            <text x="0" y="80" fontSize="8" fill="#475569">· SWIMMING POOL</text>
            <text x="0" y="94" fontSize="8" fill="#475569">· 2-CAR PARKING</text>
            <text x="0" y="108" fontSize="8" fill="#475569">· PERIMETER GARDEN</text>
            <text x="0" y="122" fontSize="8" fill="#475569">· DOUBLE LIVING & DINING</text>
            <text x="0" y="136" fontSize="8" fill="#475569">· PUJA STHANA</text>

            {/* Nir Logo Vector Snippet */}
            <g transform="translate(0, 175)">
              <text x="0" y="16" fontSize="18" fontFamily="serif" fontStyle="italic" fill="#0f172a" fontWeight="bold">Nir</text>
              <text x="0" y="28" fontSize="6.5" fill="#64748b" letterSpacing="0.08em">ARCHITECTURE &amp; INTERIORS</text>
              <text x="0" y="44" fontSize="6.5" fontStyle="italic" fill="#94a3b8">&quot;A home designed for a better tomorrow...&quot;</text>
            </g>
          </g>

          {/* Swimming Pool Section */}
          <rect x="50" y="380" width="180" height="110" fill="#0284c7" rx="3" stroke="#0369a1" strokeWidth="2" />
          {/* Water caustic ripples */}
          <path d="M 60 410 Q 100 400 140 410 Q 180 420 220 410" stroke="#38bdf8" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M 60 440 Q 100 450 140 440 Q 180 430 220 440" stroke="#38bdf8" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M 60 470 Q 100 460 140 470 Q 180 480 220 470" stroke="#38bdf8" strokeWidth="2" fill="none" opacity="0.6" />
          <text x="140" y="435" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#ffffff" letterSpacing="0.05em">
            SWIMMING POOL (20&apos; x 10&apos;)
          </text>
          {/* Pool umbrella */}
          <circle cx="75" cy="470" r="14" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
          <path d="M 75 456 L 75 484 M 61 470 L 89 470" stroke="#cbd5e1" strokeWidth="1" />

          {/* Paved Parking with 2 Cars */}
          <rect x="250" y="380" width="160" height="110" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* Car 1 */}
          <rect x="265" y="405" width="45" height="75" rx="10" fill="#1e293b" />
          <rect x="270" y="420" width="35" height="35" rx="4" fill="#475569" />
          <circle cx="272" cy="410" r="3" fill="#fef08a" />
          <circle cx="303" cy="410" r="3" fill="#fef08a" />
          {/* Car 2 */}
          <rect x="330" y="405" width="45" height="75" rx="10" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
          <rect x="335" y="420" width="35" height="35" rx="4" fill="#cbd5e1" />
          <circle cx="337" cy="410" r="3" fill="#fef08a" />
          <circle cx="368" cy="410" r="3" fill="#fef08a" />

          {/* Interior Rooms Layout */}
          {/* Bedroom 4 & Toilet */}
          <rect x="50" y="50" width="90" height="85" fill="#fef3c7" stroke="#334155" strokeWidth="1.5" />
          <text x="95" y="85" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#1e293b">BEDROOM 4</text>
          <text x="95" y="96" fontSize="7" textAnchor="middle" fill="#64748b">12&apos;0&quot; x 14&apos;0&quot;</text>
          <rect x="65" y="55" width="40" height="25" fill="#f8fafc" stroke="#cbd5e1" rx="2" />

          {/* Kitchen */}
          <rect x="200" y="50" width="85" height="85" fill="#e0f2fe" stroke="#334155" strokeWidth="1.5" />
          <text x="242" y="88" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#1e293b">KITCHEN</text>
          <text x="242" y="99" fontSize="7" textAnchor="middle" fill="#64748b">10&apos;0&quot; x 12&apos;0&quot;</text>

          {/* Bedroom 5 */}
          <rect x="340" y="50" width="90" height="85" fill="#fef3c7" stroke="#334155" strokeWidth="1.5" />
          <text x="385" y="85" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#1e293b">BEDROOM 5</text>
          <text x="385" y="96" fontSize="7" textAnchor="middle" fill="#64748b">12&apos;0&quot; x 14&apos;0&quot;</text>
          <rect x="355" y="55" width="40" height="25" fill="#f8fafc" stroke="#cbd5e1" rx="2" />

          {/* Dining Room */}
          <rect x="180" y="145" width="110" height="75" fill="#f1f5f9" stroke="#334155" strokeWidth="1.5" />
          <text x="235" y="175" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#1e293b">DINING</text>
          <text x="235" y="186" fontSize="7" textAnchor="middle" fill="#64748b">16&apos;0&quot; x 14&apos;0&quot;</text>
          {/* Dining Table with 6 Chairs */}
          <rect x="210" y="152" width="50" height="20" rx="3" fill="#d97706" />

          {/* Puja Room */}
          <rect x="310" y="160" width="45" height="45" fill="#fef08a" stroke="#d97706" strokeWidth="1.5" />
          <text x="332" y="182" fontSize="7.5" fontWeight="bold" textAnchor="middle" fill="#b45309">PUJA</text>
          <text x="332" y="192" fontSize="6.5" textAnchor="middle" fill="#b45309">6&apos;0&quot; x 6&apos;0&quot;</text>

          {/* Living Area */}
          <rect x="140" y="230" width="130" height="90" fill="#f8fafc" stroke="#334155" strokeWidth="1.5" />
          <text x="205" y="270" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#1e293b">LIVING</text>
          <text x="205" y="282" fontSize="7.5" textAnchor="middle" fill="#64748b">16&apos;0&quot; x 18&apos;0&quot;</text>

          {/* Bedroom 1 (Master) */}
          <rect x="290" y="235" width="120" height="110" fill="#fef3c7" stroke="#334155" strokeWidth="1.5" />
          <text x="350" y="280" fontSize="8.5" fontWeight="bold" textAnchor="middle" fill="#1e293b">BEDROOM 1</text>
          <text x="350" y="292" fontSize="7.5" textAnchor="middle" fill="#64748b">14&apos;0&quot; x 16&apos;0&quot;</text>
          <rect x="325" y="295" width="50" height="40" rx="2" fill="#ffffff" stroke="#cbd5e1" />

          {/* Bedroom 2 */}
          <rect x="50" y="235" width="90" height="110" fill="#fef3c7" stroke="#334155" strokeWidth="1.5" />
          <text x="95" y="280" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#1e293b">BEDROOM 2</text>
          <text x="95" y="292" fontSize="7" textAnchor="middle" fill="#64748b">14&apos;0&quot; x 16&apos;0&quot;</text>

          {/* Front Road Boundary */}
          <rect x="0" y="520" width="600" height="60" fill="#334155" />
          <line x1="30" y1="550" x2="570" y2="550" stroke="#f8fafc" strokeWidth="2" strokeDasharray="15,15" />
          <text x="300" y="575" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#ffffff" letterSpacing="0.08em">
            6.096 M (20&apos;-0&quot;) WIDE N.S.C BOSE ROAD
          </text>
        </svg>
      )}

      {type === 'living' && (
        <svg
          viewBox="0 0 600 450"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Room Background */}
          <rect width="600" height="450" fill="#f5f2eb" />
          {/* High gloss marble tile reflection lines */}
          <line x1="0" y1="360" x2="600" y2="360" stroke="#e7e0d3" strokeWidth="1" />
          <line x1="200" y1="360" x2="160" y2="450" stroke="#e7e0d3" strokeWidth="1" />
          <line x1="420" y1="360" x2="480" y2="450" stroke="#e7e0d3" strokeWidth="1" />

          {/* False Ceiling with Cove Lighting */}
          <rect x="80" y="20" width="440" height="70" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          {/* Warm Cove Glow */}
          <rect x="88" y="26" width="424" height="58" rx="3" fill="#fef3c7" opacity="0.6" />
          {/* Ceiling Fan */}
          <circle cx="300" cy="55" r="8" fill="#b45309" />
          <ellipse cx="250" cy="55" rx="38" ry="5" fill="#d97706" />
          <ellipse cx="350" cy="55" rx="38" ry="5" fill="#d97706" />

          {/* Wooden Louvered Room Partition with Wine Rack */}
          <g transform="translate(180, 110)">
            {/* Outer Wooden Frame */}
            <rect x="0" y="0" width="160" height="250" fill="#78350f" opacity="0.1" stroke="#78350f" strokeWidth="3" rx="2" />
            {/* Vertical Louver Slats */}
            {[10, 25, 40, 55, 70, 85, 100, 115, 130, 145].map((x, i) => (
              <line key={i} x1={x} y1="0" x2={x} y2="100" stroke="#78350f" strokeWidth="3" />
            ))}
            {/* Built-in Diamond Wine Rack Section */}
            <rect x="8" y="100" width="144" height="60" fill="#451a03" rx="1" />
            {/* Wine diamond diagonals */}
            <line x1="8" y1="100" x2="152" y2="160" stroke="#92400e" strokeWidth="1.5" />
            <line x1="8" y1="160" x2="152" y2="100" stroke="#92400e" strokeWidth="1.5" />
            {/* Bottom Enclosed Storage Base */}
            <rect x="0" y="160" width="160" height="90" fill="#5c2605" rx="1" />
            <line x1="80" y1="160" x2="80" y2="250" stroke="#78350f" strokeWidth="2" />
          </g>

          {/* Wall Shelves & White Acrylic Credenza on Left */}
          <rect x="30" y="120" width="110" height="220" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" rx="2" />
          <rect x="30" y="270" width="110" height="70" fill="#78350f" />
          <line x1="85" y1="270" x2="85" y2="340" stroke="#92400e" strokeWidth="1" />

          {/* Solid Teak Dining Table & Chairs on Right */}
          <g transform="translate(360, 200)">
            {/* Dining Table */}
            <rect x="20" y="70" width="160" height="85" rx="3" fill="#78350f" />
            <rect x="25" y="155" width="10" height="40" fill="#5c2605" />
            <rect x="165" y="155" width="10" height="40" fill="#5c2605" />
            {/* Dining Chairs */}
            <rect x="40" y="25" width="30" height="50" rx="3" fill="#92400e" />
            <rect x="42" y="55" width="26" height="20" rx="2" fill="#fef3c7" />
            <rect x="100" y="25" width="30" height="50" rx="3" fill="#92400e" />
            <rect x="102" y="55" width="26" height="20" rx="2" fill="#fef3c7" />
          </g>

          {/* Architectural Overlay Label */}
          <rect x="20" y="390" width="280" height="40" rx="4" fill="#0f172a" opacity="0.85" />
          <text x="35" y="408" fontSize="10" fontWeight="bold" fill="#ffffff">COMPLETED LIVING &amp; DINING</text>
          <text x="35" y="422" fontSize="8" fill="#cbd5e1">Bespoke Louver Partition · Brahmapur, Kolkata</text>
        </svg>
      )}

      {type === 'kitchen-white' && (
        <svg
          viewBox="0 0 600 450"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Clean White Kitchen Wall */}
          <rect width="600" height="450" fill="#f8fafc" />
          
          {/* Tiled Backsplash */}
          <rect x="0" y="180" width="600" height="110" fill="#f1f5f9" />
          {[200, 230, 260].map((y, i) => (
            <line key={i} x1="0" y1={y} x2="600" y2={y} stroke="#e2e8f0" strokeWidth="1" />
          ))}

          {/* Under-cabinet Warm Glow */}
          <rect x="0" y="175" width="600" height="25" fill="#fef08a" opacity="0.35" />

          {/* Overhead White Acrylic Cabinets with Frosted Glass Panels */}
          <rect x="40" y="30" width="520" height="150" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" rx="2" />
          {[120, 200, 280, 360, 440].map((x, i) => (
            <line key={i} x1={x} y1="30" x2={x} y2="180" stroke="#cbd5e1" strokeWidth="1.5" />
          ))}
          {/* Frosted Glass Panes */}
          <rect x="290" y="45" width="60" height="110" fill="#e2e8f0" rx="1" stroke="#94a3b8" strokeWidth="1" opacity="0.7" />
          <rect x="370" y="45" width="60" height="110" fill="#e2e8f0" rx="1" stroke="#94a3b8" strokeWidth="1" opacity="0.7" />
          
          {/* Integrated Modern Black Chimney */}
          <polygon points="230,60 250,60 270,165 210,165" fill="#0f172a" />
          <rect x="210" y="165" width="60" height="10" fill="#1e293b" />

          {/* Polished Countertop */}
          <rect x="20" y="280" width="560" height="18" fill="#334155" rx="1" />

          {/* Stainless Steel Sink & Faucet */}
          <rect x="80" y="285" width="100" height="8" fill="#94a3b8" />
          <path d="M 125 285 L 125 245 Q 125 235 140 235 L 150 235" stroke="#94a3b8" strokeWidth="4" fill="none" strokeLinecap="round" />

          {/* Lower Base Cabinets with Modern Black Bar Handles */}
          <rect x="40" y="298" width="520" height="135" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          {[120, 200, 280, 360, 440].map((x, i) => (
            <g key={i}>
              <line x1={x} y1="298" x2={x} y2="433" stroke="#cbd5e1" strokeWidth="1.5" />
              {/* Modern Matte Black Handle */}
              <rect x={x - 25} y="315" width="16" height="3" rx="1" fill="#0f172a" />
            </g>
          ))}

          {/* Architectural Overlay Label */}
          <rect x="20" y="390" width="280" height="40" rx="4" fill="#0f172a" opacity="0.85" />
          <text x="35" y="408" fontSize="10" fontWeight="bold" fill="#ffffff">SCANDINAVIAN MODULAR KITCHEN</text>
          <text x="35" y="422" fontSize="8" fill="#cbd5e1">High-Gloss White Acrylic &amp; Fluted Glass · Kolkata</text>
        </svg>
      )}

      {type === 'kitchen-dark' && (
        <svg
          viewBox="0 0 600 450"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Warm Dark Kitchen Ambient */}
          <rect width="600" height="450" fill="#1e1e24" />
          
          {/* Granite Backsplash with Warm Lighting */}
          <rect x="0" y="170" width="600" height="120" fill="#2d2d35" />
          <rect x="0" y="170" width="600" height="35" fill="#f59e0b" opacity="0.25" />

          {/* Upper Walnut Wall Cabinets */}
          <rect x="30" y="20" width="540" height="150" fill="#451a03" stroke="#78350f" strokeWidth="2" rx="2" />
          {[120, 210, 300, 390, 480].map((x, i) => (
            <line key={i} x1={x} y1="20" x2={x} y2="170" stroke="#78350f" strokeWidth="2" />
          ))}

          {/* Jet Black Polished Granite Counter */}
          <rect x="10" y="280" width="580" height="22" fill="#09090b" rx="2" stroke="#27272a" strokeWidth="1" />

          {/* Lower Walnut Base Drawers */}
          <rect x="30" y="302" width="540" height="135" fill="#3b1703" stroke="#78350f" strokeWidth="2" />
          {[120, 210, 300, 390, 480].map((x, i) => (
            <g key={i}>
              <line x1={x} y1="302" x2={x} y2="437" stroke="#78350f" strokeWidth="2" />
              <rect x={x - 30} y="320" width="20" height="3" rx="1" fill="#f59e0b" />
            </g>
          ))}

          {/* Architectural Overlay Label */}
          <rect x="20" y="390" width="280" height="40" rx="4" fill="#0f172a" opacity="0.9" />
          <text x="35" y="408" fontSize="10" fontWeight="bold" fill="#ffffff">WARM WALNUT &amp; GRANITE KITCHEN</text>
          <text x="35" y="422" fontSize="8" fill="#f59e0b">Ambient Task Lighting &amp; Marine Ply · Garia, Kolkata</text>
        </svg>
      )}

      {type === 'elevation' && (
        <svg
          viewBox="0 0 600 450"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Twilight Sky */}
          <rect width="600" height="450" fill="#0f172a" />
          <circle cx="480" cy="80" r="30" fill="#fef08a" opacity="0.1" />

          {/* Modern Building Facade (G+4 Nir Horizon) */}
          <rect x="140" y="50" width="320" height="360" fill="#1e293b" stroke="#334155" strokeWidth="2" />
          
          {/* Terracotta Louver Panels */}
          <rect x="160" y="80" width="70" height="280" fill="#9a3412" opacity="0.85" />
          {[90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350].map((y, i) => (
            <line key={i} x1="160" y1={y} x2="230" y2={y} stroke="#7c2d12" strokeWidth="2" />
          ))}

          {/* Cantilevered Glass Balconies */}
          {[100, 170, 240, 310].map((y, i) => (
            <g key={i}>
              <rect x="250" y={y} width="180" height="50" fill="#38bdf8" opacity="0.15" stroke="#38bdf8" strokeWidth="1" />
              <rect x="250" y={y + 35} width="180" height="15" fill="#0284c7" opacity="0.4" />
              {/* Warm interior lighting through glass */}
              <circle cx="320" cy={y + 20} r="15" fill="#fef08a" opacity="0.4" />
            </g>
          ))}

          {/* Rooftop Solar Pergola */}
          <line x1="120" y1="50" x2="480" y2="50" stroke="#f59e0b" strokeWidth="3" />
          <rect x="160" y="35" width="280" height="15" fill="#0f766e" opacity="0.8" rx="2" />

          {/* Ground Stilt Entry & Greenery */}
          <rect x="0" y="410" width="600" height="40" fill="#022c22" />
          <rect x="200" y="360" width="80" height="50" fill="#042f2e" />

          {/* Architectural Overlay Label */}
          <rect x="20" y="390" width="310" height="40" rx="4" fill="#0f172a" opacity="0.9" />
          <text x="35" y="408" fontSize="10" fontWeight="bold" fill="#ffffff">NIR 4-STOREY LUXURY VILLA &amp; POOL</text>
          <text x="35" y="422" fontSize="8" fill="#38bdf8">3D Architectural Visualization &amp; Construction · Kolkata</text>
        </svg>
      )}

      {type === 'terrace' && (
        <svg
          viewBox="0 0 600 450"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sunset Sky */}
          <rect width="600" height="450" fill="#451a03" />
          {/* Warm Gradient Overlays */}
          <rect width="600" height="300" fill="#b45309" opacity="0.5" />
          <rect width="600" height="180" fill="#f59e0b" opacity="0.3" />

          {/* Modern Steel & Glass Pergola */}
          <rect x="80" y="80" width="440" height="15" fill="#0f172a" />
          {[120, 200, 280, 360, 440].map((x, i) => (
            <rect key={i} x={x} y="95" width="8" height="240" fill="#1e293b" />
          ))}
          {/* Pergola cross rafters */}
          {[110, 140, 170, 200, 230, 260, 290, 320, 350, 380, 410, 440, 470, 500].map((x, i) => (
            <line key={i} x1={x} y1="65" x2={x - 20} y2="95" stroke="#334155" strokeWidth="2.5" />
          ))}

          {/* Composite Timber Decking */}
          <rect x="40" y="320" width="520" height="100" fill="#78350f" rx="3" />
          {[340, 360, 380, 400].map((y, i) => (
            <line key={i} x1="40" y1={y} x2="560" y2={y} stroke="#92400e" strokeWidth="1" />
          ))}

          {/* Integrated Outdoor Lounge & Planter Boxes */}
          <rect x="70" y="270" width="80" height="50" rx="3" fill="#ffffff" opacity="0.9" />
          <rect x="380" y="250" width="140" height="70" rx="3" fill="#065f46" />
          {/* Foliage */}
          <circle cx="410" cy="235" r="22" fill="#10b981" />
          <circle cx="450" cy="225" r="28" fill="#059669" />
          <circle cx="490" cy="235" r="20" fill="#10b981" />

          {/* Architectural Overlay Label */}
          <rect x="20" y="390" width="280" height="40" rx="4" fill="#0f172a" opacity="0.9" />
          <text x="35" y="408" fontSize="10" fontWeight="bold" fill="#ffffff">PENTHOUSE TERRACE &amp; PERGOLA</text>
          <text x="35" y="422" fontSize="8" fill="#fcd34d">Biophilic Winter Deck · South City Vicinity, Kolkata</text>
        </svg>
      )}

      {type === 'site-slab' && (
        <svg
          viewBox="0 0 450 600"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Overcast Monsoonal Sky */}
          <rect width="450" height="600" fill="#cbd5e1" />
          <path d="M 0 100 Q 150 70 300 110 Q 400 90 450 120 L 450 250 L 0 250 Z" fill="#94a3b8" opacity="0.4" />

          {/* Background Palm & Coconut Trees and Village Environs */}
          <g transform="translate(0, 100)">
            <ellipse cx="60" cy="50" rx="45" ry="40" fill="#15803d" />
            <ellipse cx="140" cy="40" rx="55" ry="45" fill="#166534" />
            <ellipse cx="230" cy="55" rx="60" ry="40" fill="#14532d" />
            <ellipse cx="340" cy="45" rx="50" ry="45" fill="#15803d" />
            <ellipse cx="420" cy="50" rx="45" ry="40" fill="#166534" />
            {/* Betel nut palm trunks */}
            <line x1="240" y1="20" x2="240" y2="120" stroke="#713f12" strokeWidth="2.5" />
            <line x1="360" y1="15" x2="360" y2="120" stroke="#713f12" strokeWidth="2.5" />
            {/* Distant house with blue tin roof */}
            <polygon points="70,105 120,95 140,110 90,120" fill="#0284c7" />
            <rect x="75" y="115" width="40" height="25" fill="#e2e8f0" />
          </g>

          {/* Shuttering Wooden Slab Deck Base */}
          <polygon points="0,240 450,240 450,600 0,600" fill="#a1a1aa" />
          <polygon points="0,240 450,240 450,600 0,600" fill="#d4d4d8" opacity="0.7" />

          {/* Dense Steel Rebar Mesh Grid (Reinforcement Bars) */}
          {/* Longitudinal rebars */}
          {[20, 50, 80, 110, 140, 170, 200, 230, 260, 290, 320, 350, 380, 410, 440].map((x, i) => (
            <line key={`x-${i}`} x1={x} y1="240" x2={x - 40} y2="600" stroke="#52525b" strokeWidth="2" />
          ))}
          {/* Transverse rebars */}
          {[260, 285, 310, 335, 360, 390, 420, 455, 490, 530, 570].map((y, i) => (
            <line key={`y-${i}`} x1="0" y1={y} x2="450" y2={y - 20} stroke="#3f3f46" strokeWidth="2" />
          ))}
          {/* Rebar binding wires and cranked bars */}
          {[280, 350, 430, 510].map((y, i) => (
            <line key={`wire-${i}`} x1="50" y1={y} x2="400" y2={y - 15} stroke="#71717a" strokeWidth="1.5" strokeDasharray="6,4" />
          ))}

          {/* Site Supervisor / Contractor in Blue Polo Shirt */}
          <g transform="translate(160, 130)">
            {/* Head & Hair */}
            <circle cx="45" cy="50" r="14" fill="#522f18" />
            <ellipse cx="45" cy="53" rx="11" ry="12" fill="#8c5836" />
            {/* Hand on head scratching in thought */}
            <path d="M 45 42 Q 35 30 25 45 L 35 70" stroke="#8c5836" strokeWidth="5" fill="none" strokeLinecap="round" />
            {/* Royal Blue Polo Shirt */}
            <path d="M 30 70 L 60 70 L 65 135 L 25 135 Z" fill="#1d4ed8" />
            {/* Left arm resting on hip */}
            <path d="M 60 75 L 75 100 L 65 118" stroke="#8c5836" strokeWidth="5" fill="none" strokeLinecap="round" />
            {/* Dark Trousers */}
            <rect x="27" y="135" width="16" height="120" fill="#1e293b" rx="2" />
            <rect x="47" y="135" width="16" height="120" fill="#1e293b" rx="2" />
            {/* Slippers on rebar */}
            <ellipse cx="35" cy="255" rx="10" ry="4" fill="#0284c7" />
            <ellipse cx="55" cy="255" rx="10" ry="4" fill="#0284c7" />
          </g>

          {/* Ar. Soma Naskar Standing on the Rebar Grid */}
          <g transform="translate(250, 130)">
            {/* Hair tied in Ponytail */}
            <ellipse cx="60" cy="52" rx="14" ry="15" fill="#18181b" />
            <path d="M 68 55 Q 85 70 80 95" stroke="#18181b" strokeWidth="8" fill="none" strokeLinecap="round" />
            {/* Face profile */}
            <ellipse cx="55" cy="54" rx="12" ry="13" fill="#d49a72" />
            <circle cx="50" cy="52" r="2.5" fill="#18181b" />
            
            {/* Light Blue Patterned Chikankari Kurta */}
            <path d="M 40 75 Q 60 70 75 75 L 85 185 L 35 185 Z" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="1" />
            {/* Hand-block print motif details */}
            <circle cx="50" cy="100" r="2" fill="#0284c7" />
            <circle cx="65" cy="115" r="2" fill="#0284c7" />
            <circle cx="52" cy="130" r="2" fill="#0284c7" />
            <circle cx="68" cy="145" r="2" fill="#0284c7" />
            <circle cx="54" cy="160" r="2" fill="#0284c7" />

            {/* Right Arm Gesturing / Giving Technical Directives */}
            <path d="M 42 80 L 15 110 L -5 115" stroke="#d49a72" strokeWidth="6" fill="none" strokeLinecap="round" />

            {/* Left Arm Holding Rolled Blueprints */}
            <path d="M 72 80 L 90 120 L 80 135" stroke="#d49a72" strokeWidth="6" fill="none" strokeLinecap="round" />
            {/* White/Cyan Blueprint Roll in Hand */}
            <rect x="75" y="125" width="38" height="18" rx="4" fill="#ffffff" stroke="#0284c7" strokeWidth="1.5" transform="rotate(25 75 125)" />
            <line x1="82" y1="130" x2="105" y2="142" stroke="#0284c7" strokeWidth="1" strokeDasharray="3,2" />

            {/* White Trousers / Churidar */}
            <rect x="42" y="180" width="14" height="100" fill="#f8fafc" stroke="#e2e8f0" rx="3" />
            <rect x="60" y="180" width="14" height="100" fill="#f8fafc" stroke="#e2e8f0" rx="3" />

            {/* Blue Flat Shoes / Loafers */}
            <ellipse cx="48" cy="280" rx="12" ry="5" fill="#1e40af" />
            <ellipse cx="68" cy="275" rx="12" ry="5" fill="#1e40af" />
          </g>

          {/* Technical Field Overlay Badge */}
          <rect x="15" y="535" width="420" height="50" rx="6" fill="#0f172a" opacity="0.92" />
          <text x="30" y="555" fontSize="11" fontWeight="bold" fill="#ffffff">
            ON-SITE REBAR &amp; SLAB REINFORCEMENT AUDIT
          </text>
          <text x="30" y="572" fontSize="8.5" fill="#38bdf8">
            Hands-on deck inspection before RCC casting · Direct contractor guidance
          </text>
        </svg>
      )}

      {type === 'site-masonry' && (
        <svg
          viewBox="0 0 450 600"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Monsoonal Gray / Construction Sky */}
          <rect width="450" height="600" fill="#d1d5db" />

          {/* Under-Construction Brick Building Facade */}
          <rect x="30" y="80" width="390" height="380" fill="#b45309" stroke="#78350f" strokeWidth="2" />
          {/* Brick masonry courses */}
          {[100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420].map((y, i) => (
            <line key={`brick-${i}`} x1="30" y1={y} x2="420" y2={y} stroke="#78350f" strokeWidth="1.5" />
          ))}
          {/* Window / Door Openings */}
          <rect x="180" y="160" width="100" height="160" fill="#1f2937" stroke="#4b5563" strokeWidth="2" />
          <rect x="170" y="150" width="120" height="15" fill="#9ca3af" /> {/* Concrete Lintel */}

          {/* Concrete Overhang Slab & Wooden Shuttering */}
          <rect x="15" y="65" width="420" height="30" fill="#713f12" />
          <rect x="20" y="50" width="410" height="18" fill="#a1a1aa" />

          {/* Heavy Bamboo Props (Vertical Load-Bearing Scaffolding) */}
          {[45, 95, 150, 220, 285, 350, 405].map((x, i) => (
            <g key={`bamboo-${i}`}>
              <line x1={x} y1="75" x2={x - 10 + (i % 3) * 8} y2="440" stroke="#d97706" strokeWidth="8" strokeLinecap="round" />
              {/* Bamboo nodes */}
              {[120, 190, 260, 330, 400].map((by, bi) => (
                <circle key={`node-${bi}`} cx={x - 5} cy={by} r="5" fill="#92400e" />
              ))}
            </g>
          ))}

          {/* Piled Construction Timber & Brick Stacks at Ground */}
          <g transform="translate(150, 410)">
            {/* Wooden planks */}
            <polygon points="30,40 180,30 200,50 50,60" fill="#78350f" />
            <polygon points="10,60 160,50 175,70 25,80" fill="#92400e" />
            <polygon points="40,80 190,70 210,90 60,100" fill="#5c2605" />
            {/* Cement mortar bags */}
            <rect x="180" y="70" width="45" height="30" rx="3" fill="#0284c7" />
            <rect x="220" y="75" width="45" height="28" rx="3" fill="#eab308" />
          </g>

          {/* Brick Stack on Left */}
          <g transform="translate(25, 410)">
            <rect x="0" y="40" width="60" height="40" fill="#b91c1c" stroke="#7f1d1d" strokeWidth="1" />
            <rect x="10" y="20" width="45" height="20" fill="#b91c1c" stroke="#7f1d1d" strokeWidth="1" />
          </g>

          {/* Ar. Soma Naskar Inspecting with Clipboard in Hand */}
          <g transform="translate(100, 300)">
            {/* Head & Spectacles Profile */}
            <ellipse cx="40" cy="50" rx="14" ry="16" fill="#18181b" />
            <path d="M 45 55 Q 55 65 52 85" stroke="#18181b" strokeWidth="6" fill="none" strokeLinecap="round" />
            <ellipse cx="38" cy="54" rx="11" ry="13" fill="#d49a72" />
            <circle cx="34" cy="52" r="4.5" fill="none" stroke="#334155" strokeWidth="1.5" />
            <circle cx="34" cy="52" r="1.5" fill="#18181b" />

            {/* Light Blue Patterned Kurta */}
            <path d="M 28 72 Q 42 68 55 72 L 65 190 L 20 190 Z" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="1" />
            {/* Hand block prints */}
            <circle cx="35" cy="100" r="2.5" fill="#0284c7" />
            <circle cx="48" cy="120" r="2.5" fill="#0284c7" />
            <circle cx="38" cy="140" r="2.5" fill="#0284c7" />
            <circle cx="50" cy="160" r="2.5" fill="#0284c7" />

            {/* Left Arm Holding Construction Clipboard */}
            <path d="M 52 75 L 70 115 L 85 110" stroke="#d49a72" strokeWidth="6" fill="none" strokeLinecap="round" />
            {/* Clipboard & Technical Drawing Sheets */}
            <rect x="75" y="90" width="38" height="52" rx="3" fill="#713f12" transform="rotate(-15 75 90)" />
            <rect x="78" y="93" width="32" height="46" rx="2" fill="#ffffff" transform="rotate(-15 75 90)" />
            <line x1="84" y1="102" x2="108" y2="102" stroke="#0284c7" strokeWidth="1.5" />
            <line x1="84" y1="112" x2="108" y2="112" stroke="#64748b" strokeWidth="1" strokeDasharray="3,2" />

            {/* Right Arm with Pen Taking Structural Notes */}
            <path d="M 30 75 L 50 110 L 80 112" stroke="#d49a72" strokeWidth="5" fill="none" strokeLinecap="round" />
            <line x1="78" y1="110" x2="88" y2="108" stroke="#18181b" strokeWidth="2" />

            {/* White Trousers */}
            <rect x="30" y="185" width="13" height="90" fill="#f8fafc" stroke="#e2e8f0" rx="3" />
            <rect x="45" y="185" width="13" height="90" fill="#f8fafc" stroke="#e2e8f0" rx="3" />

            {/* Blue Site Loafers */}
            <ellipse cx="36" cy="275" rx="12" ry="5" fill="#1d4ed8" />
            <ellipse cx="52" cy="270" rx="12" ry="5" fill="#1d4ed8" />
          </g>

          {/* Technical Field Overlay Badge */}
          <rect x="15" y="535" width="420" height="50" rx="6" fill="#0f172a" opacity="0.92" />
          <text x="30" y="555" fontSize="11" fontWeight="bold" fill="#ffffff">
            GROUND-LEVEL FORMWORK &amp; MASONRY AUDIT
          </text>
          <text x="30" y="572" fontSize="8.5" fill="#f59e0b">
            Scrutinizing vertical staging props &amp; brick bonds on rough terrain
          </text>
        </svg>
      )}

      {type === 'site-terrace' && (
        <svg
          viewBox="0 0 600 450"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Bright Sunlight Sky */}
          <rect width="600" height="450" fill="#93c5fd" />
          <circle cx="50" cy="50" r="35" fill="#fef08a" opacity="0.8" />

          {/* Background Greenery, Coconut Trees & Cables */}
          <g transform="translate(0, 40)">
            <ellipse cx="120" cy="80" rx="70" ry="60" fill="#15803d" />
            <ellipse cx="240" cy="70" rx="80" ry="60" fill="#166534" />
            <ellipse cx="380" cy="75" rx="90" ry="65" fill="#14532d" />
            <ellipse cx="500" cy="80" rx="70" ry="60" fill="#15803d" />
            {/* Overhead city utility lines */}
            <line x1="0" y1="120" x2="600" y2="105" stroke="#334155" strokeWidth="1.5" />
            <line x1="0" y1="140" x2="600" y2="125" stroke="#334155" strokeWidth="1.5" />
          </g>

          {/* Rooftop Water Storage Tank (Black Sintex Tank) */}
          <rect x="340" y="110" width="70" height="90" rx="8" fill="#18181b" stroke="#27272a" strokeWidth="2" />
          <line x1="340" y1="135" x2="410" y2="135" stroke="#3f3f46" strokeWidth="2" />
          <line x1="340" y1="160" x2="410" y2="160" stroke="#3f3f46" strokeWidth="2" />

          {/* Weathered Terrace Concrete Floor Surface */}
          <polygon points="0,200 600,180 600,450 0,450" fill="#e5e7eb" />
          {/* Weathering texture and expansion joints */}
          <line x1="0" y1="320" x2="600" y2="300" stroke="#d1d5db" strokeWidth="2" />
          <line x1="300" y1="190" x2="250" y2="450" stroke="#d1d5db" strokeWidth="2" />

          {/* Brick/Concrete Column Pedestal Being Surveyed */}
          <rect x="130" y="220" width="55" height="70" fill="#78350f" stroke="#451a03" strokeWidth="2" rx="2" />
          <rect x="125" y="215" width="65" height="12" fill="#9ca3af" />

          {/* Assistant / Surveyor in White Shirt Bending Down to Measure */}
          <g transform="translate(100, 150)">
            {/* Head & glasses */}
            <circle cx="65" cy="55" r="14" fill="#3f2314" />
            <circle cx="62" cy="57" r="4.5" fill="none" stroke="#64748b" strokeWidth="1.5" />
            {/* White Shirt Bending Torso */}
            <path d="M 50 65 Q 40 100 30 135 L 75 135 Q 75 90 75 65 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
            {/* Arms extending down with Measuring Tape */}
            <path d="M 40 85 L 45 130 L 40 145" stroke="#a16207" strokeWidth="6" fill="none" strokeLinecap="round" />
            {/* Gray Trousers */}
            <polygon points="30,135 15,190 35,190 50,135" fill="#475569" />
            <polygon points="50,135 45,190 65,190 75,135" fill="#475569" />
          </g>

          {/* Silver Measuring Tape Stretched Across Floor to Pillar */}
          <line x1="165" y1="285" x2="350" y2="285" stroke="#f59e0b" strokeWidth="3" />
          <circle cx="350" cy="285" r="5" fill="#dc2626" />

          {/* Ar. Soma Naskar Standing on Rooftop with Open Blueprint */}
          <g transform="translate(340, 90)">
            {/* Hair in Bun/Tie */}
            <ellipse cx="60" cy="50" rx="15" ry="16" fill="#18181b" />
            <ellipse cx="55" cy="52" rx="12" ry="13" fill="#d49a72" />
            <circle cx="50" cy="50" r="4" fill="none" stroke="#475569" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="1.5" fill="#18181b" />

            {/* Floral Printed Long Kurta (Yellow/Brown/Olive Botanical Print) */}
            <path d="M 42 70 Q 58 65 72 70 L 85 220 L 35 220 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
            {/* Botanical floral shapes */}
            <ellipse cx="50" cy="100" rx="6" ry="8" fill="#65a30d" opacity="0.7" />
            <ellipse cx="68" cy="130" rx="7" ry="10" fill="#d97706" opacity="0.7" />
            <ellipse cx="48" cy="160" rx="6" ry="8" fill="#65a30d" opacity="0.7" />
            <ellipse cx="65" cy="190" rx="7" ry="9" fill="#d97706" opacity="0.7" />

            {/* Large White Architectural Blueprint Held Open */}
            <path d="M 38 75 L 20 125 L 35 140" stroke="#d49a72" strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M 70 75 L 50 125 L 35 140" stroke="#d49a72" strokeWidth="6" fill="none" strokeLinecap="round" />
            
            {/* Wide Architectural Plan Sheet */}
            <polygon points="-30,120 40,115 45,180 -25,185" fill="#ffffff" stroke="#0284c7" strokeWidth="1.5" />
            {/* Floor plan room boxes on drawing */}
            <rect x="-15" y="128" width="20" height="20" fill="none" stroke="#0284c7" strokeWidth="1" />
            <rect x="8" y="128" width="22" height="20" fill="none" stroke="#0284c7" strokeWidth="1" />
            <rect x="-15" y="152" width="45" height="20" fill="none" stroke="#0284c7" strokeWidth="1" />

            {/* Blue Jeans / Dark Trousers */}
            <rect x="42" y="215" width="15" height="110" fill="#1e3a8a" rx="3" />
            <rect x="60" y="215" width="15" height="110" fill="#1e3a8a" rx="3" />

            {/* Summer Sandals */}
            <ellipse cx="48" cy="325" rx="13" ry="5" fill="#0f172a" />
            <ellipse cx="68" cy="320" rx="13" ry="5" fill="#0f172a" />
          </g>

          {/* Technical Field Overlay Badge */}
          <rect x="20" y="390" width="420" height="46" rx="6" fill="#0f172a" opacity="0.92" />
          <text x="35" y="410" fontSize="11" fontWeight="bold" fill="#ffffff">
            ROOFTOP STRUCTURAL SURVEY &amp; AXIS VERIFICATION
          </text>
          <text x="35" y="425" fontSize="8.5" fill="#fde047">
            Direct physical tape measurements under the Kolkata sun · Sanction reconciliation
          </text>
        </svg>
      )}
    </div>
  );
};
