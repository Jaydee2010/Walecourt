import React from 'react';
import { COMPANY_INFO } from '../data/walecrownData';
import { SectionLabel } from '../components/SectionLabel';
import { MapPin, Wrench, ShieldCheck, Compass, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <main id="about-page-main" className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#09090B]">
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
        {/* Section 01: Opening Statement */}
        <section className="max-w-4xl">
          <SectionLabel text="ABOUT THE STUDIO" subtext="WALECROWN" />
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#ECE7DE] uppercase leading-[1.05] tracking-tight mb-8">
            Precision,
            <br />
            creativity &
            <br />
            <span className="italic text-[#C5A880]">physical production.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#8A867E] font-light leading-relaxed">
            WALECROWN is an event planning and event fabrication company operating from Garki 2, Abuja. We bridge the gap between creative event design and real-world structural manufacturing.
          </p>
        </section>

        {/* Section 02: Company Story & Operations */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 border-t border-[#ECE7DE]/10">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A880] block mb-2">
              ABUJA PRESENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#ECE7DE] uppercase leading-snug">
              Rooted on Lagos Crescent, Garki 2.
            </h2>
            <div className="mt-6 p-6 bg-[#121216] border border-[#ECE7DE]/10 space-y-2 font-mono text-xs text-[#8A867E]">
              <div className="flex items-center gap-2 text-[#ECE7DE]">
                <MapPin className="w-4 h-4 text-[#C5A880]" />
                <span>Operating Location:</span>
              </div>
              <p>{COMPANY_INFO.location}</p>
              <p>Telephone: {COMPANY_INFO.phone}</p>
              <p className="text-[#C5A880]">Google Rating: 5.0 ★ (8 Verified Reviews)</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[#8A867E] text-base sm:text-lg font-light leading-relaxed">
            <p className="text-[#ECE7DE]">
              Founded and based in the Federal Capital Territory, WALECROWN serves private families, diplomats, and corporate institutions who require seamless execution for significant gatherings.
            </p>
            <p>
              Rather than presenting clients with generic rental furniture or off-the-shelf staging that looks identical across venues, we operate our own fabrication shop. Our carpenters, welders, and finishing specialists craft bespoke staging, architectural entrances, illuminated backdrops, and custom tables tailored to the exact proportions of each venue.
            </p>
            <p>
              This hybrid model—combining top-tier logistical planning with physical carpentry and engineering—eliminates miscommunication between the design team and the builders. What is agreed upon during concept renders is built exactly as planned.
            </p>
          </div>
        </section>

        {/* Section 03: Core Pillars / Planning Philosophy & Fabrication Capability */}
        <section className="pt-12 border-t border-[#ECE7DE]/10">
          <div className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A880] block mb-2">
              OUR DUAL CAPABILITY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#ECE7DE] uppercase">
              The two pillars of WALECROWN.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Pillar 1: Planning Philosophy */}
            <div className="p-8 sm:p-10 bg-[#121215] border border-[#ECE7DE]/10 space-y-5">
              <div className="w-10 h-10 border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#ECE7DE] uppercase">
                Planning Philosophy
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider text-[#C5A880]">
                Calm Orchestration & Total Discretion
              </p>
              <p className="text-sm sm:text-base text-[#8A867E] font-light leading-relaxed">
                We manage events through a calm, highly organized operational structure. Every vendor is vetted, every protocol checkpoint is established, and run-of-show cues are measured to the minute. The result is an experience where the host never feels the weight of the machinery behind the celebration.
              </p>
            </div>

            {/* Pillar 2: Fabrication Capability */}
            <div className="p-8 sm:p-10 bg-[#121215] border border-[#ECE7DE]/10 space-y-5">
              <div className="w-10 h-10 border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880]">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#ECE7DE] uppercase">
                Fabrication Capability
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider text-[#C5A880]">
                In-House Custom Joinery & Scenic Staging
              </p>
              <p className="text-sm sm:text-base text-[#8A867E] font-light leading-relaxed">
                Our in-house fabrication facility in Abuja transforms raw timber, acrylic, metal frames, and lighting conduits into bespoke architectural elements. From curved stage steps to suspended botanical trusses, our structures are tested for stability and aesthetic finish before arriving at your venue.
              </p>
            </div>
          </div>
        </section>

        {/* Section 04: Service Area */}
        <section className="pt-12 border-t border-[#ECE7DE]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A880] block">
                TERRITORY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#ECE7DE] uppercase">
                Service Area & Reach.
              </h2>
              <p className="text-base text-[#8A867E] font-light leading-relaxed">
                WALECROWN actively coordinates and manufactures productions throughout the Federal Capital Territory—including Maitama, Asokoro, Guzape, Jabi, Central Business District, and Garki—as well as destination briefs across Nigeria upon request.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                {['Maitama', 'Asokoro', 'Guzape', 'CBD Abuja', 'Garki 2', 'Jabi', 'Nationwide Fabrication'].map((area) => (
                  <span key={area} className="px-3 py-1 bg-[#18181C] border border-[#ECE7DE]/10 text-[#ECE7DE]">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#18181C] border border-[#ECE7DE]/15">
                {/* PLACEHOLDER — REPLACE WITH WALECROWN EVENT PHOTO */}
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop"
                  alt="WALECROWN Abuja Production and Planning"
                  className="w-full h-full object-cover grayscale-[20%]"
                />
                <div className="absolute bottom-3 left-3 font-mono text-[10px] text-[#8A867E] bg-[#09090B]/80 px-2.5 py-1 border border-[#ECE7DE]/10">
                  [TEAM & PRODUCTION PHOTO PLACEHOLDER]
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 05: Contact CTA */}
        <section className="pt-16 border-t border-[#ECE7DE]/10 pb-12">
          <div className="p-8 sm:p-12 bg-[#121216] border border-[#ECE7DE]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A880] block mb-2">
                DIRECT INQUIRY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#ECE7DE] uppercase">
                Let’s discuss your upcoming event.
              </h2>
              <p className="text-sm text-[#8A867E] mt-2 max-w-lg">
                Reach our team directly on WhatsApp or submit a formal event brief with guest numbers and dates.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3.5 bg-[#ECE7DE] text-[#09090B] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A880] transition-colors"
              >
                Send Event Brief
              </Link>
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#ECE7DE]/30 text-[#ECE7DE] font-mono text-xs uppercase tracking-widest hover:border-[#C5A880] hover:text-[#C5A880] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
