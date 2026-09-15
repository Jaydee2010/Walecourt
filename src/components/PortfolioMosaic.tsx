import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/walecrownData';
import { SectionLabel } from './SectionLabel';

export const PortfolioMosaic: React.FC = () => {
  const [featured, vertical, horizontal, detailProject] = PROJECTS;

  return (
    <section id="selected-work-section" className="py-24 md:py-32 px-6 md:px-12 border-b border-[#ECE7DE]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <SectionLabel text="SELECTED WORK" subtext="PORTFOLIO" />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#ECE7DE] uppercase leading-[1.1]">
              The details are
              <br />
              <span className="italic text-[#C5A880]">the difference.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <Link
              to="/work"
              id="view-all-projects-link"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#ECE7DE] hover:text-[#C5A880] transition-colors py-2"
            >
              <span>View All Projects (Archive)</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <p className="text-[11px] font-mono text-[#8A867E] uppercase tracking-wider mt-1">
              [Placeholders marked until client case-study submission]
            </p>
          </div>
        </div>

        {/* Asymmetrical Portfolio Composition */}
        <div className="space-y-12">
          {/* Row 1: One Large Featured Project + One Smaller Vertical Project */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Project 1: Large Featured (8 columns) */}
            {featured && (
              <div className="lg:col-span-8">
                <Link
                  to={`/work/${featured.id}`}
                  className="group block relative overflow-hidden bg-[#18181C] border border-[#ECE7DE]/10 h-full"
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                    <img
                      src={featured.coverImage}
                      alt={featured.coverImageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale-[10%] group-hover:scale-[1.03] group-hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Badge */}
                    <div className="absolute top-6 left-6 font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 bg-[#09090B]/80 backdrop-blur-sm border border-[#ECE7DE]/15 text-[#C5A880]">
                      Featured Production
                    </div>

                    {/* Project Meta overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A880] mb-2">
                            {featured.eventType} • {featured.location}
                          </p>
                          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#ECE7DE] tracking-wide uppercase group-hover:translate-x-1 transition-transform">
                            {featured.name}
                          </h3>
                        </div>
                        <div className="w-10 h-10 border border-[#ECE7DE]/20 rounded-full flex items-center justify-center text-[#ECE7DE] group-hover:border-[#C5A880] group-hover:text-[#C5A880] transition-colors">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Project 2: Smaller Vertical Project (4 columns) */}
            {vertical && (
              <div className="lg:col-span-4 flex flex-col justify-between">
                <Link
                  to={`/work/${vertical.id}`}
                  className="group block relative overflow-hidden bg-[#18181C] border border-[#ECE7DE]/10 h-full"
                >
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:h-full min-h-[380px] w-full overflow-hidden">
                    <img
                      src={vertical.coverImage}
                      alt={vertical.coverImageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale-[10%] group-hover:scale-[1.03] group-hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A880] mb-2">
                        {vertical.eventType} • {vertical.location}
                      </p>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#ECE7DE] tracking-wide uppercase group-hover:translate-x-1 transition-transform">
                        {vertical.name}
                      </h3>
                      <p className="font-mono text-[11px] text-[#8A867E] tracking-wider uppercase mt-2">
                        Stage & Acoustic Fabrication
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Row 2: One Wide Horizontal Project + One Cropped Editorial Project */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Project 3: One cropped / vertical project (5 columns) */}
            {detailProject && (
              <div className="lg:col-span-5 order-2 lg:order-1">
                <Link
                  to={`/work/${detailProject.id}`}
                  className="group block relative overflow-hidden bg-[#18181C] border border-[#ECE7DE]/10 h-full"
                >
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[340px] w-full overflow-hidden">
                    <img
                      src={detailProject.coverImage}
                      alt={detailProject.coverImageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale-[10%] group-hover:scale-[1.03] group-hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/30 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <span className="inline-block mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[#C5A880] px-2 py-0.5 border border-[#C5A880]/30 bg-[#09090B]/60">
                        Fabrication Division
                      </span>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#8A867E] mb-1">
                        {detailProject.eventType}
                      </p>
                      <h3 className="font-serif text-2xl text-[#ECE7DE] tracking-wide uppercase">
                        {detailProject.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Project 4: One Wide Horizontal Project (7 columns) */}
            {horizontal && (
              <div className="lg:col-span-7 order-1 lg:order-2">
                <Link
                  to={`/work/${horizontal.id}`}
                  className="group block relative overflow-hidden bg-[#18181C] border border-[#ECE7DE]/10 h-full"
                >
                  <div className="relative aspect-[16/9] lg:aspect-auto lg:h-full min-h-[340px] w-full overflow-hidden">
                    <img
                      src={horizontal.coverImage}
                      alt={horizontal.coverImageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale-[10%] group-hover:scale-[1.03] group-hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/30 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A880] mb-2">
                            {horizontal.eventType} • {horizontal.location}
                          </p>
                          <h3 className="font-serif text-2xl sm:text-3xl text-[#ECE7DE] tracking-wide uppercase group-hover:translate-x-1 transition-transform">
                            {horizontal.name}
                          </h3>
                        </div>
                        <div className="w-10 h-10 border border-[#ECE7DE]/20 rounded-full flex items-center justify-center text-[#ECE7DE] group-hover:border-[#C5A880] group-hover:text-[#C5A880] transition-colors">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Centralized Portfolio Note */}
        <div className="mt-12 p-4 bg-[#121215] border border-[#ECE7DE]/10 text-xs font-mono text-[#8A867E] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>NOTICE: Project entries shown above are placeholders until WALECROWN archives are integrated.</span>
          <span className="text-[#C5A880]">LOCATION: ABUJA, NIGERIA</span>
        </div>
      </div>
    </section>
  );
};
