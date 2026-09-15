import React from 'react';
import { SectionLabel } from './SectionLabel';
import { TESTIMONIALS, COMPANY_INFO } from '../data/walecrownData';
import { Star, ArrowUpRight } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  // Use one testimonial at a time (first one), clearly marked per instructions
  const testimonial = TESTIMONIALS[0];

  return (
    <section id="social-proof-section" className="py-24 md:py-32 px-6 md:px-12 border-b border-[#ECE7DE]/10 bg-[#09090B]">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="TRUST & SOCIAL PROOF" subtext="SECTION 07" />

        {/* Single Testimonial at a Time (No rotating carousel) */}
        <div className="pt-4 pb-16">
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#ECE7DE] leading-[1.3] tracking-wide mb-10">
            “{testimonial.quote}”
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-6 border-t border-[#ECE7DE]/10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A880]">
                {testimonial.clientName}
              </p>
              <p className="font-mono text-xs text-[#8A867E] tracking-wider uppercase mt-1">
                {testimonial.eventType} • {testimonial.location}
              </p>
            </div>

            <div className="text-[11px] font-mono text-[#8A867E] uppercase">
              [CLIENT-VERIFIED CASE STUDY PLACEHOLDER]
            </div>
          </div>
        </div>

        {/* Thin Horizontal Strip Containing Verified Google Reviews Info */}
        <div className="py-6 px-6 sm:px-8 bg-[#121216] border border-[#ECE7DE]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex text-[#C5A880]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ECE7DE]">
              5.0 GOOGLE REVIEWS
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#8A867E]">
            <span>Based on 8 verified Google business ratings</span>
            <span className="hidden sm:inline text-[#ECE7DE]/20">•</span>
            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#C5A880] hover:underline"
            >
              <span>View Business Profile</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
