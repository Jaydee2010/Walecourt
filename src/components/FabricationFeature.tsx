import React from 'react';
import { SectionLabel } from './SectionLabel';
import { FABRICATION_FEATURE } from '../data/walecrownData';
import { ArrowRight, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FabricationFeature: React.FC = () => {
  return (
    <section id="fabrication-feature-section" className="relative border-b border-[#ECE7DE]/10 bg-[#09090B] overflow-hidden">
      {/* Full-width visual showcase container */}
      <div className="relative min-h-[580px] md:min-h-[640px] flex items-center">
        {/* Background Full-Bleed Image with Editorial Grade Tint */}
        <div className="absolute inset-0 z-0">
          <img
            src={FABRICATION_FEATURE.image}
            alt={FABRICATION_FEATURE.imageAlt}
            loading="lazy"
            className="w-full h-full object-cover grayscale-[30%] brightness-[0.45] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-[#09090B]/60" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-[#C5A880]/15 border border-[#C5A880]/40 text-[#C5A880] text-xs font-mono tracking-[0.2em] uppercase">
              <Wrench className="w-3.5 h-3.5" />
              <span>THE FABRICATION WORKSHOP</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#ECE7DE] uppercase leading-[1.08] mb-6">
              From idea
              <br />
              <span className="italic text-[#C5A880]">to physical space.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#ECE7DE]/80 font-light leading-relaxed mb-10 max-w-xl">
              “Great event design is more than an idea on a screen. It has to exist in the real world.”
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#ECE7DE] text-[#ECE7DE] hover:bg-[#ECE7DE] hover:text-[#09090B] font-mono text-xs uppercase tracking-widest transition-colors"
              >
                <span>Fabrication Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Flow Diagram Strip */}
      <div className="bg-[#121216] border-t border-[#ECE7DE]/10 py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-[#ECE7DE]/10">
            {FABRICATION_FEATURE.stages.map((stage, idx) => (
              <div key={stage.title} className="pt-4 sm:pt-0 lg:px-6 first:pl-0 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#C5A880] mb-2">
                    <span>STEP 0{idx + 1}</span>
                    {idx < 3 && <ArrowRight className="w-3.5 h-3.5 hidden lg:block opacity-60" />}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#ECE7DE] uppercase tracking-wide mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-[#8A867E] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-[#ECE7DE]/10 flex items-center justify-between text-[11px] font-mono text-[#8A867E]">
            <span>LOCATION: GARKI 2, ABUJA WORKSHOP</span>
            <span className="text-[#C5A880]">[PLACEHOLDER FABRICATION PHOTO ARCHIVE]</span>
          </div>
        </div>
      </div>
    </section>
  );
};
