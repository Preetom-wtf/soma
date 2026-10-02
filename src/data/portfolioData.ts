import { Project, Testimonial, ServiceItem } from '../types';

export const ARCHITECT_INFO = {
  name: 'Soma Naskar',
  role: 'Architect & Structural Engineer',
  studioName: 'Nir Architecture & Interiors',
  motto: 'Nir — shape y/our home',
  tagline: 'Designing Dreams, Building Better Tomorrows',
  experienceYears: '12+',
  projectsCompleted: '160+',
  address: 'V-54/32, South, Baishali Park, Brahmapur, Kolkata - 700096, West Bengal',
  landmark: 'Near Baishali Park, Brahmapur',
  city: 'Kolkata, India',
  phone: '+91 98305 74123',
  whatsappNumber: '919830574123',
  whatsappMessage: 'Hello Ar. Soma Naskar, I would like to consult with you regarding an architectural and engineering project.',
  email: 'soma.naskar.architect@gmail.com',
  facebookUrl: 'https://www.facebook.com/profile.php?id=100054513938604',
  googleMapsUrl: 'https://maps.app.goo.gl/sSH2UBDj9M69Wa6g8',
  googleMapsEmbedQuery: 'V-54/32, South, Baishali Park, Brahmapur, Kolkata, West Bengal 700096',
  founderPortraitFilename: 'soma-naskar-portrait.png',
  logoFilename: 'nir-logo.png',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'res-arch',
    number: '01',
    title: 'Residential Architecture',
    subtitle: 'Bespoke Luxury Villas & Private Homes',
    description: 'Context-sensitive residential planning from plot orientation and natural windward solar analysis to functional spatial circulation and custom elevations.',
    deliverables: [
      'Comprehensive 2D Architectural Floor Plans',
      'Photorealistic 3D Facade & Exterior Elevation',
      'Cross-Ventilation & Solar Insolation Optimization',
      'Vastu-Compliant Space Zoning'
    ]
  },
  {
    id: 'struct-eng',
    number: '02',
    title: 'Structural Engineering & Sanctions',
    subtitle: 'RCC Design & Municipal Approvals',
    description: 'Rigorous engineering safety calculations, soil-load bearing structural integrity, seismic compliance, and official regulatory drawings for swift municipality clearance.',
    deliverables: [
      'KMC / KMDA / Panchayat Municipal Sanction Drawings',
      'Seismic-Resistant RCC Framing & Column Sizing',
      'Foundation & Soil-Load Structural Vetting',
      'Structural Stability & Completion Certificates'
    ]
  },
  {
    id: 'interior-arch',
    number: '03',
    title: 'Interior Architecture & Bespoke Styling',
    subtitle: 'Modular Spaces, False Ceilings & Partitions',
    description: 'High-utility, elegant residential and commercial interiors crafted with curated materiality, concealed acoustic partitions, ambient lighting, and ergonomic cabinetry.',
    deliverables: [
      'Custom Slatted Wood Partitions & Wall Panelling',
      'Modular Kitchen Layouts & Hardware Detailing',
      'Integrated False Ceiling & Cove Lighting Schemes',
      'Material Selection, Teak Joinery & Finishes'
    ]
  },
  {
    id: 'sustainable-design',
    number: '04',
    title: 'Sustainable & Biophilic Construction',
    subtitle: 'Low-Carbon, Climate-Adaptive Architecture',
    description: 'Designing buildings that breathe with Kolkata’s humid subtropical climate, prioritizing passive cooling, natural daylighting, and energy efficiency.',
    deliverables: [
      'Passive Thermal Insulation & Shading Louvers',
      'Rainwater Harvesting & Ground Recharge Systems',
      'Rooftop Greenery & Biophilic Balcony Integration',
      'Locally Sourced Stone, Brick & Eco-Friendly Mortars'
    ]
  },
  {
    id: 'turnkey-execution',
    number: '05',
    title: 'End-to-End On-Site Execution',
    subtitle: 'Precision Quality Assurance & Supervision',
    description: 'Seamless translation from blueprints to finished reality through rigorous site inspection, contractor alignment, timeline monitoring, and material vetting.',
    deliverables: [
      'Detailed Bill of Quantities (BOQ) & Material Specs',
      'Phase-by-Phase Structural Milestone Inspections',
      'Vendor & Specialist Contractor Coordination',
      'Snag-List Rectification & Handover Assurance'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'khanpur-road-villa',
    title: '16 Khanpur Road — Luxury 5-BHK Residence with Swimming Pool',
    category: 'upcoming',
    categoryLabel: 'Upcoming Master Plan',
    location: '16 Khanpur Road, N.S.C. Bose Road, Kolkata',
    plotOrArea: "Plot: 47'-5\" x 46'-6\" (approx 2,210 sq.ft footprint)",
    year: '2026',
    description: 'An architectural masterclass in urban spatial optimization. Designed for a 47\'-5" x 46\'-6" plot fronting a 20\'-0" wide N.S.C. Bose Road, this multi-level modern residence integrates a 20\' x 10\' private swimming pool, two-car driveway, dedicated puja alcove, open-concept double-height living-dining pavilion, and five expansive ensuite bedrooms.',
    highlights: [
      '20ft x 10ft Private Swimming Pool with Sun Deck',
      'Dual-Vehicle Paved Driveway & Integrated Landscaping',
      'Open-to-Sky Side Setback with Lush Vertical Garden',
      'Vastu-Optimized Kitchen & East-Facing Puja Sthana',
      'Spacious 5-Bedroom Layout with Dedicated Walk-in Dressers'
    ],
    filename: 'upcoming-16-khanpur-road.png',
    fallbackType: 'floorplan'
  },
  {
    id: 'nir-villa-elevation',
    title: 'Nir Luxury 4-Storey Contemporary Villa & Pool',
    category: 'upcoming',
    categoryLabel: 'Upcoming 3D Architecture',
    location: 'South Kolkata Residential Enclave',
    plotOrArea: '4 Floors Built-Up Architecture',
    year: '2026',
    description: 'A photorealistic architectural visualization showcasing Nir Architecture\'s flagship contemporary villa. Features a 4-storey modern facade with warm brickwork pilasters, deep-set cantilevered balconies with glass railings, landscaped private plunge pool with water wall, stilt vehicle parking, rooftop pergola garden, and signature Nir boundary gateway.',
    highlights: [
      '4-Storey Contemporary Facade with Integrated Warm Architectural Lighting',
      'Private Swimming Pool with Timber Deck & Decorative Water Feature',
      'Full-Height Floor-to-Ceiling Thermal Glazing & Planted Balconies',
      'Covered Ground Floor Stilt Garage & Landscaped Perimeter Garden',
      'Rooftop Pergola Lounge for Climate-Adaptive Outdoor Living'
    ],
    filename: 'upcoming-nir-villa-elevation.png',
    fallbackType: 'elevation'
  },
  {
    id: 'living-dining-partition',
    title: 'Contemporary Living & Dining with Bespoke Wood Partition',
    category: 'completed',
    categoryLabel: 'Completed Work',
    location: 'Brahmapur, South Kolkata',
    plotOrArea: '1,450 sq.ft Interior Area',
    year: '2025',
    description: 'A refined contemporary apartment interior transformation. Features a custom hand-finished teak acoustic wood louvered partition with an integrated diamond wine rack and display vitrine that divides the foyer from the dining space without obstructing visual flow or ambient illumination.',
    highlights: [
      'Bespoke Teak Wood Slat Divider with Built-In Wine Caddy',
      'Multi-Tier False Ceiling with Recessed Warm 3000K LED Coves',
      'Custom 6-Seater Solid Teakwood Dining Table & Ergonomic Chairs',
      'High-Gloss Acrylic Floating Credenza & Media Console Unit'
    ],
    filename: 'completed-living-dining-partition.png',
    fallbackType: 'living'
  },
  {
    id: 'scandinavian-modular-kitchen',
    title: 'Modern Scandinavian White Acrylic Modular Kitchen',
    category: 'completed',
    categoryLabel: 'Completed Work',
    location: 'Tollygunge, Kolkata',
    plotOrArea: '180 sq.ft Kitchen',
    year: '2025',
    description: 'Ultra-clean, modern Scandinavian modular kitchen engineering. Engineered with antimicrobial high-gloss white acrylic cabinetry, frosted glass overhead display units, integrated baffle filter chimney, and stain-resistant quartz countertops.',
    highlights: [
      'Soft-Close Blum Tandembox Drawer Organizers',
      'Frosted Fluted Glass Overhead Cabinets with Aluminum Edge Profiles',
      'High-Efficiency Integrated Suction Chimney & 3-Burner Cooktop',
      'Seamless Vitrified Tile Backsplash with Hidden Power Points'
    ],
    filename: 'completed-scandinavian-kitchen.png',
    fallbackType: 'kitchen-white'
  },
  {
    id: 'walnut-chef-kitchen',
    title: 'Warm Walnut & Jet Black Granite Contemporary Kitchen',
    category: 'completed',
    categoryLabel: 'Completed Work',
    location: 'Garia, Kolkata',
    plotOrArea: '160 sq.ft Kitchen',
    year: '2024',
    description: 'A warm, tactile culinary sanctuary featuring dark walnut laminate lower bases, under-cabinet task illumination, and heavy-duty jet-black polished granite counters tailored for rigorous Indian cuisine preparation.',
    highlights: [
      'Warm Under-Cabinet Linear LED Task Illumination',
      'Deep Dark Walnut Textured Marine-Grade Plywood Finishes',
      'Double Bowl Heavy-Gauge Stainless Sink with 360° Swivel Spout',
      'Corner Magic Pull-Out Storage for 100% Corner Utility'
    ],
    filename: 'completed-walnut-kitchen.png',
    fallbackType: 'kitchen-dark'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'review-1',
    clientName: 'Anirban Mukherjee',
    projectType: 'Luxury 5-BHK Residence Design (Khanpur Road)',
    location: 'Kolkata',
    quote: 'Ar. Soma Naskar has an extraordinary gift for spatial planning. When we showed her our plot on Khanpur Road, we had ambitious wishes: a private plunge pool, 5 full bedrooms, car parking, and open green setbacks. She synthesized all of it with sublime structural harmony and daylight efficiency. Truly Kolkata’s finest architect.',
    rating: 5,
    date: 'February 2026'
  },
  {
    id: 'review-2',
    clientName: 'Deblina Sen & Dr. P. K. Sen',
    projectType: 'Complete Interior & Partition Styling',
    location: 'Brahmapur, Kolkata',
    quote: 'The bespoke wooden slatted divider and false ceiling that Soma-di designed for our living-dining area became the absolute centerpiece of our home. Every guest compliments the warm lighting and fine woodworking. She supervised contractors with extreme precision.',
    rating: 5,
    date: 'December 2025'
  },
  {
    id: 'review-3',
    clientName: 'Subhashish Roy',
    projectType: 'G+3 Residential Building Sanction & Engineering',
    location: 'Garia, Kolkata',
    quote: 'Finding an architect who is equally brilliant at structural engineering and KMC sanction approvals is rare. Ar. Soma Naskar managed our municipal sanction drawings without a single hitch, and her structural column calculations saved us significant material costs while assuring complete earthquake safety.',
    rating: 5,
    date: 'November 2025'
  },
  {
    id: 'review-4',
    clientName: 'Pampa Banerjee',
    projectType: 'Modular Kitchen & Master Suite Renovation',
    location: 'Tollygunge, Kolkata',
    quote: 'Our modular kitchen is an absolute joy to cook in every single day. Soma-di’s ergonomic measurements, under-cabinet lighting placement, and cabinet drawer configuration make everything effortless. She delivers on time and within agreed budgets.',
    rating: 5,
    date: 'August 2025'
  }
];

export const SITE_PHOTOS = [
  {
    id: 'site-slab-inspection',
    title: 'RCC Roof Slab & Rebar Reinforcement Inspection',
    subtitle: 'Pre-Concrete Pour Technical Audit',
    stage: 'RCC Structural Deck',
    location: 'South Kolkata Residential Build',
    description: 'Ar. Soma Naskar standing directly atop the shuttering deck before concrete casting. She meticulously checks the steel rebar mesh spacing, beam bottom cover blocks, and electrical conduit routing while giving direct instructions to the contractor.',
    workHighlights: [
      'Climbing active shuttering decks for direct physical inspection',
      'Checking rebar diameter, crank bars, and tensile lap splices',
      'Ensuring cover blocks prevent steel exposure and rust',
      'Zero-compromise structural safety before concrete pour'
    ],
    filename: 'site-work-slab-inspection.png',
    fallbackType: 'site-slab' as const
  },
  {
    id: 'site-formwork-audit',
    title: 'Structural Shuttering & Brick Masonry Ground Audit',
    subtitle: 'Masonry & Vertical Staging Safety Verification',
    stage: 'Ground Floor Construction',
    location: 'Brahmapur / Garia Site',
    description: 'Standing on rough construction terrain reviewing architectural drawings in hand. Ar. Soma Naskar validates the vertical bamboo staging props, door lintel levels, and brick bond courses to ensure exact load paths and on-site worker safety.',
    workHighlights: [
      'Blueprints in hand on active, unpaved construction sites',
      'Testing load-bearing vertical bamboo prop stability',
      'Verifying plumb line and horizontal mortar joint thickness',
      'Hands-on problem solving directly with site masons'
    ],
    filename: 'site-work-formwork-audit.png',
    fallbackType: 'site-masonry' as const
  }
];

