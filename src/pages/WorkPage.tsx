import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/walecrownData';
import { ProjectCategory } from '../types';
import { SectionLabel } from '../components/SectionLabel';
import { ArrowUpRight } from 'lucide-react';

export const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | ProjectCategory>('ALL');

  const filters: ('ALL' | ProjectCategory)[] = [
    'ALL',
    'WEDDINGS',
    'CORPORATE',
    'SOCIAL',
    'FABRICATION',
  ];

  const filteredProjects = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <main id="work-page-main" className="min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <SectionLabel text="ARCHIVE & PORTFOLIO" subtext="ABUJA PRODUCTIONS" />
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#ECE7DE] uppercase leading-[1.05] tracking-tight">
            Selected
            <br />
            <span className="italic text-[#C5A880]">productions.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#8A867E] font-light max-w-xl">
            A visual documentation of custom stages, spatial architecture, atmospheric lighting, and meticulous event coordination engineered across Abuja.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 pb-8 mb-12 border-b border-[#ECE7DE]/10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8A867E] mr-2">
            Filter:
          </span>
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-200 ${
                  isActive
                    ? 'bg-[#ECE7DE] text-[#09090B] font-semibold'
                    : 'text-[#8A867E] hover:text-[#ECE7DE] border border-[#ECE7DE]/10 hover:border-[#ECE7DE]/30'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry-Style Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`group flex flex-col ${
                idx % 3 === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <Link
                to={`/work/${project.id}`}
                className="relative block overflow-hidden bg-[#18181C] border border-[#ECE7DE]/10"
              >
                <div
                  className={`relative w-full overflow-hidden ${
                    idx % 3 === 0
                      ? 'aspect-[16/9] sm:aspect-[21/9]'
                      : 'aspect-[4/3] sm:aspect-[3/2]'
                  }`}
                >
                  <img
                    src={project.coverImage}
                    alt={project.coverImageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[10%] group-hover:scale-[1.03] group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

                  {/* Year & Category Badge */}
                  <div className="absolute top-4 left-4 flex gap-2 font-mono text-[10px] tracking-widest uppercase">
                    <span className="px-2.5 py-1 bg-[#09090B]/80 text-[#C5A880] border border-[#ECE7DE]/10">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 bg-[#09090B]/80 text-[#ECE7DE] border border-[#ECE7DE]/10">
                      {project.year}
                    </span>
                  </div>

                  {/* Corner Action */}
                  <div className="absolute top-4 right-4 w-9 h-9 border border-[#ECE7DE]/20 bg-[#09090B]/80 rounded-full flex items-center justify-center text-[#ECE7DE] group-hover:border-[#C5A880] group-hover:text-[#C5A880] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              {/* Project Meta Information */}
              <div className="pt-5 pb-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#ECE7DE] uppercase tracking-wide group-hover:text-[#C5A880] transition-colors">
                      <Link to={`/work/${project.id}`}>{project.name}</Link>
                    </h2>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A880] mt-1">
                    {project.eventType} • {project.location}
                  </p>
                </div>

                <p className="text-xs text-[#8A867E] max-w-sm font-light mt-2 sm:mt-0">
                  {project.shortDescription}
                </p>
              </div>

              {/* Placeholder indicator */}
              <span className="text-[10px] font-mono text-[#8A867E]/60 uppercase pt-1">
                [Client Portfolio Placeholder Archive]
              </span>
            </div>
          ))}
        </div>

        {/* Commission Note */}
        <div className="mt-20 p-8 bg-[#121215] border border-[#ECE7DE]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-[#ECE7DE] uppercase">
              Commissioning a new production in Abuja?
            </h3>
            <p className="text-sm text-[#8A867E] mt-1">
              We consult directly on venue spatial limitations, custom fabrication feasibility, and overall production schedules.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-[#ECE7DE] text-[#09090B] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A880] transition-colors"
          >
            Start Event Brief
          </Link>
        </div>
      </div>
    </main>
  );
};
