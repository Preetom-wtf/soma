import React, { useState } from 'react';
import { Project, SitePhoto } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { OnSiteExecution } from './components/OnSiteExecution';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { ProjectLightbox, LightboxItem } from './components/ProjectLightbox';
import { ConsultationModal } from './components/ConsultationModal';
import { AssetMatcherBadge } from './components/AssetMatcherBadge';
import { PROJECTS, SITE_PHOTOS } from './data/portfolioData';

export default function App() {
  const [selectedItem, setSelectedItem] = useState<LightboxItem | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [customImages, setCustomImages] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('soma_naskar_custom_images');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const handleImageChange = (filename: string, dataUrl: string) => {
    setCustomImages((prev) => {
      const updated = { ...prev, [filename]: dataUrl };
      try {
        localStorage.setItem('soma_naskar_custom_images', JSON.stringify(updated));
      } catch {
        // quota handled gracefully
      }
      return updated;
    });

    // Persist directly to public/assets/ on disk via Vite middleware
    fetch('/api/save-asset', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename, dataUrl }),
    }).catch(() => {});
  };

  const handleResetImages = () => {
    setCustomImages({});
    try {
      localStorage.removeItem('soma_naskar_custom_images');
    } catch {
      // ignore
    }
  };

  // Unified list for Lightbox cycling
  const allLightboxItems: LightboxItem[] = [
    ...PROJECTS.map((p) => ({
      id: p.id,
      title: p.title,
      categoryLabel: p.categoryLabel,
      location: p.location,
      year: p.year,
      plotOrArea: p.plotOrArea,
      description: p.description,
      highlights: p.highlights,
      filename: p.filename,
      fallbackType: p.fallbackType,
    })),
    ...SITE_PHOTOS.map((s) => ({
      id: s.id,
      title: s.title,
      categoryLabel: `Hands-On Field Rigor · ${s.stage}`,
      location: s.location,
      description: s.description,
      highlights: s.workHighlights,
      filename: s.filename,
      fallbackType: s.fallbackType,
    })),
  ];

  const handleSelectProject = (project: Project) => {
    setSelectedItem({
      id: project.id,
      title: project.title,
      categoryLabel: project.categoryLabel,
      location: project.location,
      year: project.year,
      plotOrArea: project.plotOrArea,
      description: project.description,
      highlights: project.highlights,
      filename: project.filename,
      fallbackType: project.fallbackType,
    });
  };

  const handleSelectSitePhoto = (photo: SitePhoto) => {
    setSelectedItem({
      id: photo.id,
      title: photo.title,
      categoryLabel: `Hands-On Field Rigor · ${photo.stage}`,
      location: photo.location,
      description: photo.description,
      highlights: photo.workHighlights,
      filename: photo.filename,
      fallbackType: photo.fallbackType,
    });
  };

  const handlePrevItem = () => {
    if (!selectedItem) return;
    const currentIndex = allLightboxItems.findIndex((p) => p.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + allLightboxItems.length) % allLightboxItems.length;
    setSelectedItem(allLightboxItems[prevIndex]);
  };

  const handleNextItem = () => {
    if (!selectedItem) return;
    const currentIndex = allLightboxItems.findIndex((p) => p.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % allLightboxItems.length;
    setSelectedItem(allLightboxItems[nextIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-neutral-900 selection:bg-amber-100 selection:text-amber-900">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Main Content Area */}
      <main className="grow">
        {/* Hero Section */}
        <Hero
          onOpenConsultation={() => setConsultationOpen(true)}
          customHeroImage={customImages['upcoming-16-khanpur-road.png']}
        />

        {/* About the Architect */}
        <About
          customPortraitImage={customImages['soma-naskar-portrait.png']}
          onImageChange={handleImageChange}
        />

        {/* Portfolio Gallery */}
        <Portfolio
          onSelectProject={handleSelectProject}
          customImages={customImages}
        />

        {/* Hands-On Field Leadership & Work Ethic Section */}
        <OnSiteExecution
          onSelectSitePhoto={handleSelectSitePhoto}
          customImages={customImages}
          onImageChange={handleImageChange}
        />

        {/* Services & Structural Disciplines */}
        <Services />

        {/* Client Reviews & Social Proof */}
        <Testimonials />

        {/* Location, Studio Map & Contact Form */}
        <LocationContact />
      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Fullscreen Lightbox Modal */}
      <ProjectLightbox
        project={selectedItem}
        onClose={() => setSelectedItem(null)}
        onPrev={handlePrevItem}
        onNext={handleNextItem}
        customImages={customImages}
        onImageChange={handleImageChange}
      />

      {/* Quick Consultation Booking Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      {/* Local Asset Matcher Helper */}
      <AssetMatcherBadge
        customImages={customImages}
        onImageChange={handleImageChange}
        onResetImages={handleResetImages}
      />
    </div>
  );
}
