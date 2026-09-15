import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/walecrownData';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#09090B] border-t border-[#ECE7DE]/10 py-16 px-6 md:px-12 text-[#ECE7DE]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16">
          {/* Brand & Core Positioning */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-3xl font-light tracking-[0.18em] text-[#ECE7DE] block">
              WALECROWN
            </span>
            <p className="text-xs font-mono tracking-widest text-[#8A867E] uppercase">
              Event Planning & Event Fabrication
            </p>
            <p className="text-sm text-[#8A867E] max-w-sm leading-relaxed">
              Based in Garki 2, Abuja. Dedicated to turning briefs into fully realized events through precision planning, structural fabrication, and seamless production.
            </p>
            <div className="pt-2 text-xs font-mono text-[#8A867E]">
              <span>{COMPANY_INFO.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono tracking-[0.2em] text-[#C5A880] uppercase block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm font-mono tracking-wider uppercase text-[#8A867E]">
              <li>
                <Link to="/work" className="hover:text-[#ECE7DE] transition-colors">
                  Work / Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#ECE7DE] transition-colors">
                  Services & Fabrication
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#ECE7DE] transition-colors">
                  About the Studio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#ECE7DE] transition-colors">
                  Contact & Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact & Channels */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono tracking-[0.2em] text-[#C5A880] uppercase block">
              Direct Channels
            </span>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-[#ECE7DE] hover:text-[#C5A880] transition-colors"
                >
                  <span className="font-mono text-xs text-[#8A867E]">TEL:</span>
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#ECE7DE] hover:text-[#C5A880] transition-colors"
                >
                  <span className="font-mono text-xs text-[#8A867E]">CHAT:</span>
                  <span>WhatsApp Business Desk</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#8A867E] hover:text-[#ECE7DE] transition-colors"
                >
                  <span>Google Maps: Lagos Crescent, Garki 2</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
            <div className="pt-2 text-xs font-mono text-[#8A867E]">
              <span>Google Business Rating: 5.0 ★ (8 Verified Reviews)</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#ECE7DE]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8A867E]">
          <p>© {new Date().getFullYear()} WALECROWN. All Rights Reserved. Abuja, Nigeria.</p>
          <p className="tracking-widest uppercase text-[10px]">
            Event Planning • Event Fabrication
          </p>
        </div>
      </div>
    </footer>
  );
};
