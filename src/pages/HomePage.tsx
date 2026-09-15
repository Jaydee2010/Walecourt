import React from 'react';
import { EditorialHero } from '../components/EditorialHero';
import { PortfolioMosaic } from '../components/PortfolioMosaic';
import { ServiceList } from '../components/ServiceList';
import { ProcessSection } from '../components/ProcessSection';
import { FabricationFeature } from '../components/FabricationFeature';
import { EventTypeList } from '../components/EventTypeList';
import { TestimonialSection } from '../components/TestimonialSection';
import { AboutSection } from '../components/AboutSection';
import { ContactCta } from '../components/ContactCta';

export const HomePage: React.FC = () => {
  return (
    <main id="homepage-main" className="min-h-screen">
      {/* SECTION 01 — OPENING STATEMENT */}
      <EditorialHero />

      {/* SECTION 02 — SELECTED WORK */}
      <PortfolioMosaic />

      {/* SECTION 03 — SERVICES ("WHAT WE ACTUALLY HANDLE") */}
      <ServiceList />

      {/* SECTION 04 — THE WALECROWN METHOD */}
      <ProcessSection />

      {/* SECTION 05 — FABRICATION FEATURE */}
      <FabricationFeature />

      {/* SECTION 06 — EVENT TYPES */}
      <EventTypeList />

      {/* SECTION 07 — SOCIAL PROOF */}
      <TestimonialSection />

      {/* SECTION 08 — ABOUT WALECROWN */}
      <AboutSection />

      {/* SECTION 14 — CONTACT / BOOKING */}
      <ContactCta />
    </main>
  );
};
