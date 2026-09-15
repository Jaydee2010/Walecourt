import React, { useState } from 'react';
import { EVENT_CATEGORIES } from '../data/walecrownData';
import { SectionLabel } from './SectionLabel';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EventTypeList: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const activeCategory = EVENT_CATEGORIES[activeCategoryIndex] || EVENT_CATEGORIES[0];

  return (
    <section id="event-types-section" className="relative py-24 md:py-32 px-6 md:px-12 border-b border-[#ECE7DE]/10 bg-[#0B0B0E] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <SectionLabel text="TYPOLOGIES" subtext="SECTION 06" />
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#ECE7DE] uppercase leading-[1.1]">
            What are you
            <br />
            <span className="italic text-[#C5A880]">planning?</span>
          </h2>
          <p className="mt-3 text-sm font-mono text-[#8A867E] uppercase tracking-wider">
            Verified event specializations undertaken by WALECROWN in Abuja
          </p>
        </div>

        {/* Desktop Interactive Layout: Editorial List on Left, Changing Background/Preview on Right */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
          {/* Left Column: Large Interactive Text List */}
          <div className="col-span-6 space-y-4">
            {EVENT_CATEGORIES.map((category, index) => {
              const isActive = activeCategoryIndex === index;
              return (
                <div
                  key={category.id}
                  onMouseEnter={() => setActiveCategoryIndex(index)}
                  className={`group py-6 border-b border-[#ECE7DE]/10 cursor-pointer transition-all duration-300 ${
                    isActive ? 'pl-4 border-[#C5A880]' : 'hover:pl-2'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-xs text-[#C5A880] tracking-widest uppercase block mb-1">
                        0{index + 1}
                      </span>
                      <h3
                        className={`font-serif text-3xl xl:text-4xl uppercase tracking-wide transition-colors ${
                          isActive ? 'text-[#ECE7DE]' : 'text-[#8A867E] group-hover:text-[#ECE7DE]'
                        }`}
                      >
                        {category.title}
                      </h3>
                      <p className="font-mono text-xs text-[#8A867E] mt-1 tracking-wider">
                        {category.subtitle}
                      </p>
                    </div>

                    <ArrowUpRight
                      className={`w-6 h-6 transition-all ${
                        isActive
                          ? 'text-[#C5A880] translate-x-1 -translate-y-1'
                          : 'text-[#8A867E]/40 group-hover:text-[#ECE7DE]'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Editorial Preview Display */}
          <div className="col-span-6">
            <div className="relative aspect-[4/3] bg-[#18181C] border border-[#ECE7DE]/15 overflow-hidden shadow-2xl">
              <img
                src={activeCategory.image}
                alt={activeCategory.imageAlt}
                key={activeCategory.id}
                className="w-full h-full object-cover grayscale-[15%] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#09090B]/90 backdrop-blur-sm border border-[#ECE7DE]/10">
                <div className="flex items-center justify-between text-xs font-mono text-[#C5A880] mb-2">
                  <span>SCALE: {activeCategory.typicalScale}</span>
                  <span className="uppercase">ABUJA, NG</span>
                </div>
                <p className="text-xs text-[#ECE7DE]/90 font-light leading-relaxed mb-4">
                  {activeCategory.description}
                </p>
                <div className="pt-2 border-t border-[#ECE7DE]/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#8A867E]">
                    FOCUS: {activeCategory.focus}
                  </span>
                  <Link
                    to="/contact"
                    className="text-xs font-mono uppercase tracking-wider text-[#C5A880] hover:text-white flex items-center gap-1"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Horizontal Image Sections with Clear Layout */}
        <div className="lg:hidden space-y-8">
          {EVENT_CATEGORIES.map((category, index) => (
            <div
              key={category.id}
              className="bg-[#141418] border border-[#ECE7DE]/10 overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.imageAlt}
                  className="w-full h-full object-cover grayscale-[15%]"
                />
                <div className="absolute top-3 left-3 font-mono text-[10px] text-[#C5A880] bg-[#09090B]/80 px-2 py-0.5 border border-[#ECE7DE]/10 uppercase">
                  0{index + 1} • {category.typicalScale}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-[#ECE7DE] uppercase tracking-wide mb-1">
                  {category.title}
                </h3>
                <p className="font-mono text-xs text-[#C5A880] tracking-wider uppercase mb-3">
                  {category.subtitle}
                </p>
                <p className="text-xs text-[#8A867E] leading-relaxed mb-4">
                  {category.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#ECE7DE] border border-[#ECE7DE]/20 px-3 py-2 hover:border-[#C5A880]"
                >
                  <span>Plan this type</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
