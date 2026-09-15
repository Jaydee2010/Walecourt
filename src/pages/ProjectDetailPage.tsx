import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../data/walecrownData';
import { SectionLabel } from '../components/SectionLabel';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/walecrownData';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  // Find next project for smooth navigation
  const currentIndex = PROJECTS.findIndex((p) => p.id === id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <main id="project-detail-main" className="min-h-screen bg-[#09090B]">
      {/* Editorial Top Bar / Back Link */}
      <div className="pt-28 px-6 md:px-12 max-w-7xl mx-auto">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#8A867E] hover:text-[#ECE7DE] transition-colors py-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Selected Work</span>
        </Link>
      </div>

      {/* Magazine Opening: Large Full-Screen Photograph with Hero Overlay */}
      <section className="relative px-6 md:px-12 pt-6 pb-16 max-w-7xl mx-auto">
        <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden bg-[#18181C] border border-[#ECE7DE]/15 shadow-2xl">
          <img
            src={project.coverImage}
            alt={project.coverImageAlt}
            className="w-full h-full object-cover grayscale-[10%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/30 to-transparent" />

          {/* Opening Typography Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-6 sm:p-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A880] block mb-2">
              PROJECT ARCHIVE / {project.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#ECE7DE] uppercase tracking-wide">
              {project.name}
            </h1>
          </div>
        </div>

        {/* Project Metadata Strip */}
        <div className="mt-8 py-6 border-y border-[#ECE7DE]/10 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
          <div>
            <span className="text-[#8A867E] uppercase block mb-1">EVENT TYPE</span>
            <span className="text-[#ECE7DE] uppercase font-medium">{project.eventType}</span>
          </div>
          <div>
            <span className="text-[#8A867E] uppercase block mb-1">LOCATION</span>
            <span className="text-[#ECE7DE] uppercase font-medium">{project.location}</span>
          </div>
          <div>
            <span className="text-[#8A867E] uppercase block mb-1">YEAR</span>
            <span className="text-[#ECE7DE] font-medium">{project.year}</span>
          </div>
          <div>
            <span className="text-[#8A867E] uppercase block mb-1">SERVICES</span>
            <span className="text-[#C5A880] uppercase font-medium">
              {project.servicesProvided.join(', ')}
            </span>
          </div>
        </div>
      </section>

      {/* Visual Magazine Story Flow */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-20">
        {/* Project Description Narrative */}
        <div className="space-y-6">
          <SectionLabel text="THE CONCEPT & EXECUTION" subtext="ABUJA PRODUCTION" />
          <h2 className="font-serif text-3xl sm:text-4xl text-[#ECE7DE] uppercase leading-snug">
            Turning the architectural canvas into an immersive environment.
          </h2>
          <p className="text-base sm:text-lg text-[#8A867E] font-light leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Story Part 1: Large Image with Short Caption */}
        {project.gallery[0] && (
          <div className="space-y-3">
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#18181C] border border-[#ECE7DE]/10">
              <img
                src={project.gallery[0].url}
                alt={project.gallery[0].alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-[#8A867E] pt-1">
              <span>{project.gallery[0].caption}</span>
              <span className="text-[#C5A880]">01 / VISUAL DIRECTION</span>
            </div>
          </div>
        )}

        {/* Fabrication Scope Breakdown */}
        <div className="p-8 sm:p-10 bg-[#121216] border border-[#ECE7DE]/10 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A880] block">
            Fabrication & Structural Engineering Scope
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {project.fabricationScope.map((scope, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-[#ECE7DE]/90">
                <span className="text-[#C5A880] font-mono text-xs mt-0.5">0{idx + 1}</span>
                <span>{scope}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Story Part 2: Two-Image Split */}
        {project.gallery.length >= 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="space-y-3">
              <div className="aspect-[4/3] overflow-hidden bg-[#18181C] border border-[#ECE7DE]/10">
                <img
                  src={project.gallery[1].url}
                  alt={project.gallery[1].alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs font-mono text-[#8A867E]">
                {project.gallery[1].caption}
              </p>
            </div>

            <div className="space-y-3">
              <div className="aspect-[4/3] overflow-hidden bg-[#18181C] border border-[#ECE7DE]/10">
                <img
                  src={project.gallery[2].url}
                  alt={project.gallery[2].alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs font-mono text-[#8A867E]">
                {project.gallery[2].caption}
              </p>
            </div>
          </div>
        )}

        {/* Story Part 3: Final Image */}
        {project.gallery[3] && (
          <div className="space-y-3">
            <div className="aspect-[21/9] overflow-hidden bg-[#18181C] border border-[#ECE7DE]/10">
              <img
                src={project.gallery[3].url}
                alt={project.gallery[3].alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-[#8A867E] pt-1">
              <span>{project.gallery[3].caption}</span>
              <span className="text-[#C5A880]">FINAL ATMOSPHERE</span>
            </div>
          </div>
        )}

        {/* Notice of placeholder status */}
        <div className="p-4 bg-[#0E0E11] border border-[#ECE7DE]/10 text-xs font-mono text-[#8A867E] text-center">
          Notice: This project portfolio entry represents a design placeholder. WALECROWN client case studies will be uploaded as confirmed.
        </div>
      </section>

      {/* Magazine Editorial Ending: Conversation Starter */}
      <section className="border-t border-[#ECE7DE]/10 py-24 px-6 md:px-12 bg-[#09090B]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A880] block">
            PLANNING SOMETHING OF YOUR OWN?
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#ECE7DE] uppercase">
            Start a conversation.
          </h2>
          <p className="text-base sm:text-lg text-[#8A867E] max-w-xl mx-auto font-light">
            Whether an intricate wedding in Maitama, a high-security summit in CBD, or a custom pavilion build in Guzape—let’s translate your vision into a real space.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#ECE7DE] text-[#09090B] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A880] transition-colors"
            >
              Start an Event Brief
            </Link>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#ECE7DE]/30 text-[#ECE7DE] font-mono text-xs uppercase tracking-widest hover:border-[#C5A880] hover:text-[#C5A880] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#C5A880]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Next Project Link */}
          {nextProject && (
            <div className="pt-16 border-t border-[#ECE7DE]/10 flex items-center justify-center">
              <Link
                to={`/work/${nextProject.id}`}
                className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#8A867E] hover:text-[#ECE7DE]"
              >
                <span>Next Production: {nextProject.name}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
