import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/walecrownData';

export const ContactCta: React.FC = () => {
  return (
    <section id="contact-cta-section" className="py-24 md:py-36 px-6 md:px-12 bg-[#09090B] border-b border-[#ECE7DE]/10">
      <div className="max-w-4xl mx-auto text-left">
        {/* Subtle Label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-[1px] w-8 bg-[#C5A880]" />
          <span className="font-mono text-xs tracking-[0.25em] text-[#C5A880] uppercase">
            COMMISSION & BOOKINGS
          </span>
        </div>

        {/* Large Text */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#ECE7DE] uppercase leading-[1.05] tracking-tight mb-8">
          Let’s build
          <br />
          <span className="italic text-[#C5A880]">your event.</span>
        </h2>

        {/* Supporting Text */}
        <p className="text-lg sm:text-xl text-[#8A867E] font-light max-w-xl mb-12">
          Tell us what you’re planning. We’ll take it from there.
        </p>

        {/* Conversation Triggers */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-16">
          <Link
            to="/contact"
            id="start-conversation-btn"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ECE7DE] text-[#09090B] font-mono text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C5A880] transition-colors duration-200"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={COMPANY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-us-btn"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#ECE7DE]/30 text-[#ECE7DE] font-mono text-xs uppercase tracking-[0.2em] hover:border-[#C5A880] hover:text-[#C5A880] transition-colors duration-200"
          >
            <MessageCircle className="w-4 h-4 text-[#C5A880]" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Verified Business Contact Detail Strip */}
        <div className="pt-8 border-t border-[#ECE7DE]/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-mono text-xs text-[#8A867E]">
          <div>
            <span className="text-[#ECE7DE] block mb-1">DIRECT TELEPHONE</span>
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-[#C5A880] transition-colors">
              {COMPANY_INFO.phone}
            </a>
          </div>
          <div>
            <span className="text-[#ECE7DE] block mb-1">ABUJA LOCATION</span>
            <span>{COMPANY_INFO.location}</span>
          </div>
          <div>
            <span className="text-[#ECE7DE] block mb-1">SERVICES</span>
            <span>Planning & Fabrication</span>
          </div>
        </div>
      </div>
    </section>
  );
};
