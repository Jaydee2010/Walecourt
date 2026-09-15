import React from 'react';
import { SERVICES } from '../data/walecrownData';
import { SectionLabel } from '../components/SectionLabel';
import { ArrowRight, Wrench, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  return (
    <main id="services-page-main" className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#09090B]">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="max-w-3xl mb-20">
          <SectionLabel text="SERVICES & FABRICATION" subtext="ABUJA CAPABILITIES" />
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#ECE7DE] uppercase leading-[1.05] tracking-tight">
            What we
            <br />
            <span className="italic text-[#C5A880]">actually handle.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#8A867E] font-light max-w-2xl leading-relaxed">
            From preliminary brief to the last departing guest. We unite event logistics, on-site fabrication carpentry, sound and lighting engineering, and bespoke floral styling into one coherent discipline.
          </p>
        </div>

        {/* Large Editorial Sections (One by One, Not Cards) */}
        <div className="space-y-28 md:space-y-36">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <section
                key={service.id}
                id={`service-detail-${service.id}`}
                className="pt-8 border-t border-[#ECE7DE]/10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                  {/* Large Number & Title Column */}
                  <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif text-6xl sm:text-8xl font-light text-[#8A867E]/30">
                        {service.number}
                      </span>
                      {service.isFabricationHighlight && (
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#C5A880] border border-[#C5A880]/40 px-3 py-1 uppercase tracking-widest bg-[#C5A880]/10">
                          <Wrench className="w-3.5 h-3.5" />
                          <span>Workshop Division</span>
                        </span>
                      )}
                    </div>

                    <div>
                      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#ECE7DE] uppercase tracking-wide">
                        {service.title}
                      </h2>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A880] mt-2">
                        {service.tagline}
                      </p>
                    </div>

                    <p className="text-base text-[#8A867E] font-light leading-relaxed">
                      {service.description}
                    </p>

                    {/* What WALECROWN Handles Breakdown */}
                    <div className="pt-6 border-t border-[#ECE7DE]/10 space-y-3">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ECE7DE] block">
                        What WALECROWN Handles:
                      </span>
                      <ul className="space-y-2.5">
                        {service.scopeItems.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-[#8A867E]">
                            <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                            <span className="text-[#ECE7DE]/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#C5A880] hover:text-white transition-colors"
                      >
                        <span>Inquire regarding {service.title.toLowerCase()}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Supporting Image Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[#18181C] border border-[#ECE7DE]/15 shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale-[15%] hover:scale-[1.02] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#09090B]/90 backdrop-blur-sm border border-[#ECE7DE]/10 text-xs font-mono text-[#8A867E] flex items-center justify-between">
                        <span>ABUJA ONSITE EXECUTION</span>
                        <span className="text-[#C5A880]">[PHOTO PLACEHOLDER]</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom Booking Strip */}
        <div className="mt-28 p-8 md:p-12 bg-[#121216] border border-[#ECE7DE]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A880] block mb-1">
              CUSTOM PACKAGING
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#ECE7DE] uppercase">
              Need integrated planning and fabrication?
            </h3>
            <p className="text-sm text-[#8A867E] mt-2">
              Most clients engage WALECROWN for combined planning, staging fabrication, and event coordination to ensure single-point accountability.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 bg-[#ECE7DE] text-[#09090B] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A880] transition-colors"
          >
            Start Event Inquiry
          </Link>
        </div>
      </div>
    </main>
  );
};
