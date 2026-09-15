import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/walecrownData';

export const WhatsAppButton: React.FC = () => {
  return (
    <>
      {/* Desktop Floating WhatsApp Button (bottom-right) */}
      <aside
        id="desktop-whatsapp-widget"
        className="hidden md:flex fixed bottom-8 right-8 z-40 items-center"
        aria-label="Direct WhatsApp Consultation"
      >
        <a
          href={COMPANY_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          id="desktop-whatsapp-link"
          className="group flex items-center gap-3 bg-[#18181C] hover:bg-[#202026] text-[#ECE7DE] border border-[#C5A880]/40 hover:border-[#C5A880] px-4 py-3 shadow-2xl transition-all duration-300"
          title="Direct WhatsApp Consultation with WALECROWN"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A880] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C5A880]"></span>
          </span>
          <MessageCircle className="w-4 h-4 text-[#C5A880]" />
          <span className="text-xs font-mono tracking-wider uppercase text-[#ECE7DE] group-hover:text-white transition-colors">
            WhatsApp Desk
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom CTA Bar */}
      <aside
        id="mobile-sticky-whatsapp-bar"
        className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-[#09090B]/95 backdrop-blur-md border-t border-[#ECE7DE]/15 p-3"
        aria-label="Direct Mobile WhatsApp Action"
      >
        <a
          href={COMPANY_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-whatsapp-cta-button"
          className="w-full flex items-center justify-center gap-2 bg-[#C5A880] text-[#09090B] font-mono text-xs font-semibold uppercase tracking-[0.2em] py-3.5 px-4 shadow-lg active:scale-[0.99] transition-transform"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WHATSAPP WALECROWN</span>
        </a>
      </aside>
    </>
  );
};
