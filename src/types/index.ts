export interface SitePhoto {
  id: string;
  title: string;
  subtitle: string;
  stage: string;
  location: string;
  description: string;
  workHighlights: string[];
  filename: string;
  fallbackType: 'site-slab' | 'site-masonry' | 'site-terrace';
}

export interface Project {
  id: string;
  title: string;
  category: 'completed' | 'upcoming';
  categoryLabel: string;
  location: string;
  plotOrArea?: string;
  year?: string;
  description: string;
  highlights: string[];
  filename: string;
  fallbackType: 'floorplan' | 'living' | 'kitchen-white' | 'kitchen-dark' | 'elevation' | 'terrace' | 'site-slab' | 'site-masonry' | 'site-terrace';
}

export interface Testimonial {
  id: string;
  clientName: string;
  projectType: string;
  location: string;
  quote: string;
  rating: number;
  date: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  number: string;
}
