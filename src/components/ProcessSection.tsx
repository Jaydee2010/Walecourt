import React from 'react';
import { SectionLabel } from './SectionLabel';
import { PROCESS_STEPS } from '../data/walecrownData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process-section" className="py-24 md:py-32 px-6 md:px-12 border-b border-[#ECE7DE]/10 bg-[#09090B]">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <SectionLabel text="THE WALECROWN METHOD" subtext="PROCESS DIAGRAM" />
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#ECE7DE] uppercase leading-[1.08]">
            A great event
            <br />
            doesn’t happen
            <br />
            <span className="italic text-[#C5A880]">by accident.</span>
          </h2>
        </div>

        {/* Editorial Process Diagram with Large Numbers */}
        <div className="relative">
          {/* Subtle connecting axis line across desktop */}
          <div className="hidden lg:block absolute top-[68px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ECE7DE]/20 to-transparent -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="group relative flex flex-col justify-between pt-6 border-t border-[#ECE7DE]/15 lg:border-t-0"
              >
                {/* Large Distinct Number */}
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-serif text-6xl sm:text-7xl font-light text-[#8A867E]/40 group-hover:text-[#C5A880] transition-colors duration-300">
                    {step.number}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-[#8A867E] uppercase">
                    Stage 0{idx + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl text-[#ECE7DE] uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#C5A880]">
                    {step.tagline}
                  </p>
                  <p className="text-sm text-[#8A867E] font-light leading-relaxed pt-2">
                    {step.description}
                  </p>
                </div>

                {/* Editorial Accent */}
                <div className="mt-8 pt-4 border-t border-[#ECE7DE]/10 flex items-center justify-between text-[11px] font-mono text-[#8A867E]/70 uppercase">
                  <span>Phase {step.number}</span>
                  <span className="w-1.5 h-1.5 bg-[#C5A880]/50 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Quote/Note */}
        <div className="mt-20 pt-8 border-t border-[#ECE7DE]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#8A867E]">
          <p>
            Fabrication staging and dry-runs conducted at our Garki 2 workshop prior to on-site assembly.
          </p>
          <span className="text-[#C5A880] uppercase tracking-widest">
            ZERO MARGIN FOR ERROR
          </span>
        </div>
      </div>
    </section>
  );
};
