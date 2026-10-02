import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ArchitecturalVisual } from './ArchitecturalVisual';
import { Eye, MapPin, Maximize2, Compass } from 'lucide-react';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
  customImages?: Record<string, string>;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  onSelectProject,
  customImages = {},
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'completed' | 'upcoming'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#FBFBF9] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Tab Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
              Curated Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-950 tracking-tight">
              Selected Works &amp; Upcoming Visions
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 max-w-xl">
              From finished interior woodwork and modular culinary spaces to upcoming private residences and architectural blueprints across Kolkata.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented control button group) */}
          <div className="inline-flex p-1 bg-neutral-200/80 rounded-xl self-start md:self-auto border border-neutral-300/50 shadow-2xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-700 hover:text-neutral-950'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'completed'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-700 hover:text-neutral-950'
              }`}
            >
              Completed Work
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'upcoming'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-700 hover:text-neutral-950'
              }`}
            >
              Upcoming Projects
            </button>
          </div>
        </div>

        {/* Portfolio Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => {
            const imageSrc = customImages[project.filename] || `/assets/${project.filename}`;
            const isFeatured = project.id === 'khanpur-road-villa';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  isFeatured && activeTab !== 'completed' ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Visual Frame */}
                <div
                  className={`relative overflow-hidden bg-neutral-900 ${
                    isFeatured && activeTab !== 'completed'
                      ? 'aspect-16/9 md:aspect-21/10'
                      : 'aspect-4/3'
                  }`}
                >
                  <ArchitecturalVisual
                    type={project.fallbackType}
                    src={imageSrc}
                    alt={project.title}
                    interactive={true}
                    className="w-full h-full"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Category Indicator Stamp */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium border border-white/10">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        project.category === 'completed' ? 'bg-emerald-400' : 'bg-amber-400'
                      }`}
                    />
                    <span>{project.categoryLabel}</span>
                  </div>

                  {/* View Details Prompt on Hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-white/90 text-neutral-900 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Asset Filename Tag for User Matching */}
                  <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[10px] text-neutral-300 font-mono">
                    {project.filename}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 md:p-6 flex flex-col justify-between grow">
                  <div>
                    {/* Location Metadata */}
                    <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="truncate">{project.location}</span>
                      {project.year && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{project.year}</span>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold font-display text-neutral-900 group-hover:text-amber-700 transition-colors line-clamp-1 mb-2">
                      {project.title}
                    </h3>

                    {/* Description preview */}
                    <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Highlights & Trigger */}
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-neutral-500 font-mono text-[11px]">
                      {project.plotOrArea || 'Architectural Design'}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-neutral-900 group-hover:text-amber-700 transition-colors">
                      <span>View Specifications</span>
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architectural Footer Note */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm">Have a plot in Kolkata or West Bengal?</div>
              <div className="text-xs text-neutral-400">
                Get comprehensive municipal sanction plans, RCC structural engineering, and 3D architectural elevations.
              </div>
            </div>
          </div>
          <a
            href="#location"
            className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap"
          >
            Request Studio Consultation
          </a>
        </div>
      </div>
    </section>
  );
};
