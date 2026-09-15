import React from 'react';
import { SectionLabel } from './SectionLabel';
import { COMPANY_INFO } from '../data/walecrownData';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-24 md:py-32 px-6 md:px-12 border-b border-[#ECE7DE]/10 bg-[#0B0B0E]">
      <div className="max-w-7xl mx-auto">
        <SectionLabel text="STUDIO PROFILE" subtext="SECTION 08" />

        {/* Large Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Dramatic Headline */}
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#ECE7DE] uppercase leading-[1.08]">
              The team
              <br />
              behind the
              <br />
              <span className="italic text-[#C5A880]">experience.</span>
            </h2>

            <div className="mt-8 pt-8 border-t border-[#ECE7DE]/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C5A880] uppercase tracking-widest">
                <MapPin className="w-3.5 h-3.5" />
                <span>GARKI 2, ABUJA, NIGERIA</span>
              </div>
              <p className="text-xs font-mono text-[#8A867E]">
                Operating address: Lagos Crescent, Garki 2, Abuja
              </p>
            </div>
          </div>

          {/* Right: Authentic Company Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-[#8A867E] text-base sm:text-lg font-light leading-relaxed">
            <p className="text-[#ECE7DE]">
              <strong className="text-[#ECE7DE] font-normal">WALECROWN</strong> is an event planning and event fabrication company rooted in Garki 2, Abuja. We operate at the intersection of logistical precision and tangible physical production.
            </p>

            <p>
              Where most planners rely purely on rental catalogs, WALECROWN maintains a dedicated fabrication workshop. This allows us to manufacture bespoke stage risers, custom acoustic backdrops, sculptural ceiling installations, and branded furniture pieces that exist solely for your occasion.
            </p>

            <p>
              Our philosophy centers on calm, decisive execution. An extraordinary event in Abuja should not feel frantic behind the scenes. From the first structural calculation to the minute-by-minute protocol schedule, our directors ensure that every detail works harmoniously in service of the guest experience.
            </p>

            <div className="pt-6 border-t border-[#ECE7DE]/10 flex flex-wrap items-center gap-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#ECE7DE] hover:text-[#C5A880] transition-colors"
              >
                <span>Read Studio Philosophy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#8A867E] hover:text-[#ECE7DE] transition-colors"
              >
                <span>Workshop Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
