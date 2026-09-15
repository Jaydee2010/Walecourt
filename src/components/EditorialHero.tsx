import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HERO_IMAGE } from '../data/walecrownData';

export const EditorialHero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-12 flex items-center border-b border-[#ECE7DE]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Editorial Content */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          {/* Small Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-[#C5A880]" />
            <span className="font-mono text-xs tracking-[0.25em] text-[#C5A880] uppercase">
              WALECROWN / ABUJA
            </span>
          </div>

          {/* Large Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light text-[#ECE7DE] leading-[1.08] tracking-tight uppercase mb-8">
            We don’t just
            <br />
            plan events.
            <br />
            <span className="italic font-serif text-[#C5A880]">We build</span> the
            <br />
            experience.
          </h1>

          {/* Short Supporting Copy */}
          <p className="text-base sm:text-lg text-[#8A867E] max-w-xl font-sans font-light leading-relaxed mb-10">
            From the first concept to the final detail, WALECROWN brings planning, production, and execution together to create events that feel intentional from every angle.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <Link
              to="/work"
              id="hero-cta-work"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#ECE7DE] text-[#09090B] font-mono text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C5A880] transition-colors duration-200"
            >
              View Our Work
            </Link>

            <Link
              to="/contact"
              id="hero-cta-plan"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#ECE7DE] hover:text-[#C5A880] transition-colors duration-200"
            >
              <span>Start Planning</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Location footnote */}
          <div className="mt-14 pt-6 border-t border-[#ECE7DE]/10 flex items-center gap-6 text-xs font-mono text-[#8A867E]">
            <span>GARKI 2, ABUJA</span>
            <span className="text-[#C5A880]">•</span>
            <span>CUSTOM FABRICATION</span>
            <span className="text-[#C5A880]">•</span>
            <span>SPATIAL DIRECTION</span>
          </div>
        </div>

        {/* Right Large Vertical Event Photograph (Extends beyond boundary) */}
        <div className="lg:col-span-5 relative mt-4 lg:mt-0">
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
            {/* Architectural Border & Offset Framing */}
            <div className="relative aspect-[3/4] overflow-hidden bg-[#18181C] border border-[#ECE7DE]/15 shadow-2xl">
              <img
                src={HERO_IMAGE.url}
                alt={HERO_IMAGE.alt}
                loading="eager"
                className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              {/* Subtle film grain/vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Metadata Label */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#09090B]/90 backdrop-blur-sm border border-[#ECE7DE]/15">
                <p className="font-mono text-[10px] tracking-[0.25em] text-[#C5A880] uppercase">
                  {HERO_IMAGE.label}
                </p>
                <p className="font-serif text-sm text-[#ECE7DE] tracking-wide mt-1">
                  Bespoke Architectural Staging & Structural Fabrication
                </p>
              </div>
            </div>

            {/* Subtle thin accent line */}
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-28 h-28 border-r border-b border-[#C5A880]/30 pointer-events-none -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};
