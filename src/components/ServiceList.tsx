import React, { useState } from 'react';
import { SERVICES } from '../data/walecrownData';
import { SectionLabel } from './SectionLabel';
import { ArrowUpRight, Plus, Minus, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServiceList: React.FC = () => {
  // Default to 03 (Fabrication) or 01 to start
  const [activeServiceId, setActiveServiceId] = useState<string>('event-fabrication');

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section id="services-section" className="py-24 md:py-32 px-6 md:px-12 border-b border-[#ECE7DE]/10 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <SectionLabel text="CAPABILITIES" subtext="SECTION 03" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#ECE7DE] uppercase leading-[1.1]">
            From concept
            <br />
            <span className="italic text-[#C5A880]">to final guest.</span>
          </h2>
          <p className="mt-4 text-[#8A867E] max-w-xl text-base font-light">
            Comprehensive production capabilities managed under one roof in Abuja—unifying architectural fabrication with disciplined event execution.
          </p>
        </div>

        {/* Split Editorial Structure: Vertical List on Left / Active Visual & Scope on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Large Vertical Editorial List */}
          <div className="lg:col-span-7 space-y-0 divide-y divide-[#ECE7DE]/10">
            {SERVICES.map((service) => {
              const isActive = activeServiceId === service.id;
              return (
                <div
                  key={service.id}
                  id={`service-row-${service.id}`}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group py-7 sm:py-8 cursor-pointer transition-all duration-300 ${
                    isActive ? 'bg-[#18181C]/40 px-4 -mx-4' : 'hover:bg-[#141417]/20'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-6 sm:gap-8">
                      <span
                        className={`font-mono text-sm sm:text-base transition-colors ${
                          isActive ? 'text-[#C5A880]' : 'text-[#8A867E]'
                        }`}
                      >
                        {service.number}
                      </span>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3
                            className={`font-serif text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide transition-colors ${
                              isActive
                                ? 'text-[#ECE7DE]'
                                : 'text-[#8A867E] group-hover:text-[#ECE7DE]'
                            }`}
                          >
                            {service.title}
                          </h3>
                          {service.isFabricationHighlight && (
                            <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-[#C5A880] border border-[#C5A880]/40 px-2 py-0.5 bg-[#C5A880]/10">
                              <Wrench className="w-2.5 h-2.5" />
                              Workshop
                            </span>
                          )}
                        </div>
                        <p
                          className={`mt-2 text-sm text-[#8A867E] max-w-lg transition-opacity duration-300 ${
                            isActive ? 'opacity-100' : 'opacity-60 hidden sm:block'
                          }`}
                        >
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 text-[#8A867E] group-hover:text-[#C5A880] transition-colors">
                      {isActive ? (
                        <Minus className="w-5 h-5 text-[#C5A880]" />
                      ) : (
                        <Plus className="w-5 h-5 opacity-40 group-hover:opacity-100" />
                      )}
                    </div>
                  </div>

                  {/* Mobile expanded content */}
                  {isActive && (
                    <div className="lg:hidden mt-6 pt-4 border-t border-[#ECE7DE]/10 space-y-4">
                      <div className="aspect-[16/10] overflow-hidden bg-[#18181C]">
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-2">
                        <span className="font-mono text-[10px] tracking-widest text-[#C5A880] uppercase">
                          Scope & Execution:
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#ECE7DE]/80">
                          {service.scopeItems.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-1 h-1 bg-[#C5A880] rounded-full" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Sticky Editorial Service Reveal on Desktop */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="bg-[#141418] border border-[#ECE7DE]/10 p-6 space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#09090B]">
                <img
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  key={activeService.id}
                  className="w-full h-full object-cover grayscale-[15%] transition-all duration-500 ease-out"
                />
                <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1 bg-[#09090B]/90 text-[#C5A880] border border-[#ECE7DE]/10">
                  {activeService.number} / {activeService.title}
                </div>
              </div>

              <div>
                <p className="font-mono text-xs text-[#C5A880] tracking-wider uppercase mb-1">
                  Abuja Direct Execution
                </p>
                <h4 className="font-serif text-2xl text-[#ECE7DE] uppercase">
                  {activeService.tagline}
                </h4>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-[#ECE7DE]/10">
                <span className="font-mono text-[10px] tracking-widest text-[#8A867E] uppercase block">
                  Delivered In This Phase:
                </span>
                <ul className="space-y-2 text-xs font-sans text-[#ECE7DE]/85">
                  {activeService.scopeItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#C5A880] mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#C5A880] hover:text-white transition-colors"
                >
                  <span>Explore full service specifications</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
