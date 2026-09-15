import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/walecrownData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090B]/95 backdrop-blur-md border-b border-[#ECE7DE]/10 py-4 shadow-sm'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo / Wordmark */}
        <Link
          to="/"
          id="nav-logo"
          className="group flex flex-col tracking-wider"
          aria-label="WALECROWN Home"
        >
          <span className="font-serif text-2xl md:text-3xl font-light tracking-[0.18em] text-[#ECE7DE] group-hover:text-[#C5A880] transition-colors">
            WALECROWN
          </span>
          <span className="text-[9px] font-mono tracking-[0.25em] text-[#8A867E] uppercase -mt-1">
            Abuja • Planning & Fabrication
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10 text-sm tracking-widest font-mono uppercase">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                id={`nav-link-${link.name.toLowerCase()}`}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? 'text-[#ECE7DE] font-medium'
                    : 'text-[#8A867E] hover:text-[#ECE7DE]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A880]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/contact"
            id="nav-cta-button"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] px-5 py-2.5 border border-[#C5A880]/50 text-[#ECE7DE] hover:bg-[#C5A880] hover:text-[#09090B] transition-all duration-300"
          >
            <span>Plan an Event</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          id="mobile-menu-toggle"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#ECE7DE] hover:text-[#C5A880] focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="md:hidden fixed inset-0 top-[72px] bg-[#09090B] z-40 px-6 py-10 flex flex-col justify-between border-t border-[#ECE7DE]/10 overflow-y-auto"
        >
          <nav className="flex flex-col space-y-6 pt-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-serif text-3xl tracking-wide transition-colors ${
                    isActive ? 'text-[#C5A880]' : 'text-[#ECE7DE] hover:text-[#C5A880]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-between w-full p-4 border border-[#C5A880] text-sm font-mono tracking-widest uppercase text-[#ECE7DE] hover:bg-[#C5A880] hover:text-[#09090B] transition-colors"
            >
              <span>PLAN AN EVENT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </nav>

          <div className="pt-8 border-t border-[#ECE7DE]/10 space-y-3 font-mono text-xs text-[#8A867E]">
            <p className="text-[#ECE7DE]">{COMPANY_INFO.location}</p>
            <p>Direct: {COMPANY_INFO.phone}</p>
            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C5A880] hover:underline"
              >
                <span>Direct WhatsApp Inquiries →</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
