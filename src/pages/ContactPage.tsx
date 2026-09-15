import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/walecrownData';
import { SectionLabel } from '../components/SectionLabel';
import { ContactBriefForm } from '../types';
import { MessageCircle, Phone, MapPin, ArrowUpRight, Check, AlertCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactBriefForm>({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding',
    eventDate: '',
    expectedGuestCount: '',
    location: '',
    estimatedBudget: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactBriefForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactBriefForm, string>> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name or representative title.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'A valid phone number is required for follow-up.';
    } else if (formData.phone.replace(/[^0-9+]/g, '').length < 8) {
      errs.phone = 'Please provide a valid phone number (e.g. +234 810 172 5545).';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required for sending the proposal document.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please share brief details regarding your event vision or requirements.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate immediate submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  // Generate a pre-filled WhatsApp inquiry link with the form data if the user wants instant delivery
  const generateWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hello WALECROWN,\n\nI would like to submit an event brief:\n- Name: ${formData.name || 'Client'}\n- Event Type: ${formData.eventType}\n- Date: ${formData.eventDate || 'TBD'}\n- Guest Count: ${formData.expectedGuestCount || 'TBD'}\n- Location: ${formData.location || 'Abuja'}\n- Budget Range: ${formData.estimatedBudget || 'Flexible'}\n- Notes: ${formData.message || 'General inquiry'}`
    );
    return `https://wa.me/2348101725545?text=${text}`;
  };

  return (
    <main id="contact-page-main" className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#09090B]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <SectionLabel text="COMMISSION AN EVENT" subtext="ABUJA DIRECT" />
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#ECE7DE] uppercase leading-[1.05] tracking-tight">
            Start the
            <br />
            <span className="italic text-[#C5A880]">conversation.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#8A867E] font-light max-w-xl">
            Submit your event brief below. We review spatial requirements, fabrication feasibility, and scheduling availability before arranging a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Event Brief Form */}
          <div className="lg:col-span-7 bg-[#121216] border border-[#ECE7DE]/10 p-6 sm:p-10">
            {submitted ? (
              <div id="contact-form-success" className="py-12 text-center space-y-6">
                <div className="w-14 h-14 bg-[#C5A880]/15 border border-[#C5A880] rounded-full mx-auto flex items-center justify-center text-[#C5A880]">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-3xl text-[#ECE7DE] uppercase">
                  Event Brief Received
                </h3>
                <p className="text-sm text-[#8A867E] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#ECE7DE]">{formData.name}</strong>. Our production team will review your requirements and reach out via {formData.phone} or {formData.email} within 24 hours.
                </p>

                <div className="pt-6 border-t border-[#ECE7DE]/10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A880] text-[#09090B] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#dfcaab] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Also Send via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        eventType: 'Wedding',
                        eventDate: '',
                        expectedGuestCount: '',
                        location: '',
                        estimatedBudget: '',
                        message: '',
                      });
                    }}
                    className="text-xs font-mono uppercase tracking-widest text-[#8A867E] hover:text-[#ECE7DE]"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form id="event-brief-form" onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="border-b border-[#ECE7DE]/10 pb-4 mb-6">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A880]">
                    Event Brief Questionnaire
                  </span>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="client-name" className="block text-xs font-mono uppercase tracking-wider text-[#ECE7DE] mb-2">
                      Full Name *
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Aliko / Amina Bello"
                      className={`w-full bg-[#09090B] border px-4 py-3 text-sm text-[#ECE7DE] focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-[#ECE7DE]/15 focus:border-[#C5A880]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="client-phone" className="block text-xs font-mono uppercase tracking-wider text-[#ECE7DE] mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="client-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +234 810 172 5545"
                      className={`w-full bg-[#09090B] border px-4 py-3 text-sm text-[#ECE7DE] focus:outline-none transition-colors ${
                        errors.phone ? 'border-rose-500' : 'border-[#ECE7DE]/15 focus:border-[#C5A880]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Event Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="client-email" className="block text-xs font-mono uppercase tracking-wider text-[#ECE7DE] mb-2">
                      Email Address *
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@organization.com"
                      className={`w-full bg-[#09090B] border px-4 py-3 text-sm text-[#ECE7DE] focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-[#ECE7DE]/15 focus:border-[#C5A880]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="event-type-select" className="block text-xs font-mono uppercase tracking-wider text-[#ECE7DE] mb-2">
                      Event Type
                    </label>
                    <select
                      id="event-type-select"
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-[#09090B] border border-[#ECE7DE]/15 px-4 py-3 text-sm text-[#ECE7DE] focus:outline-none focus:border-[#C5A880]"
                    >
                      <option value="Wedding">Wedding Reception / Ceremony</option>
                      <option value="Corporate Event">Corporate Summit / Gala</option>
                      <option value="Private Celebration">Private Celebration / Milestone Dinner</option>
                      <option value="Social Event">Social Soiree / Cocktail</option>
                      <option value="Fabrication Only">Fabrication & Staging Only</option>
                    </select>
                  </div>
                </div>

                {/* Date & Guest Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="event-date" className="block text-xs font-mono uppercase tracking-wider text-[#ECE7DE] mb-2">
                      Event Date / Proposed Window
                    </label>
                    <input
                      id="event-date"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full bg-[#09090B] border border-[#ECE7DE]/15 px-4 py-3 text-sm text-[#ECE7DE] focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div>
                    <label htmlFor="guest-count" className="block text-xs font-mono uppercase tracking-wider text-[#ECE7DE] mb-2">
                      Expected Guest Count
                    </label>
                    <input
                      id="guest-count"
                      type="text"
                      value={formData.expectedGuestCount}
                      onChange={(e) => setFormData({ ...formData, expectedGuestCount: e.target.value })}
                      placeholder="e.g. 350 Guests"
                      className="w-full bg-[#09090B] border border-[#ECE7DE]/15 px-4 py-3 text-sm text-[#ECE7DE] focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>
                </div>

                {/* Venue Location & Estimated Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="venue-location" className="block text-xs font-mono uppercase tracking-wider text-[#ECE7DE] mb-2">
                      Target Venue / Location
                    </label>
                    <input
                      id="venue-location"
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Maitama / ICC / Transcorp Hilton"
                      className="w-full bg-[#09090B] border border-[#ECE7DE]/15 px-4 py-3 text-sm text-[#ECE7DE] focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget-range" className="block text-xs font-mono uppercase tracking-wider text-[#ECE7DE] mb-2">
                      Estimated Production Budget
                    </label>
                    <input
                      id="budget-range"
                      type="text"
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      placeholder="e.g. ₦10M - ₦30M / Premium"
                      className="w-full bg-[#09090B] border border-[#ECE7DE]/15 px-4 py-3 text-sm text-[#ECE7DE] focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="event-details" className="block text-xs font-mono uppercase tracking-wider text-[#ECE7DE] mb-2">
                    Tell us about your event *
                  </label>
                  <textarea
                    id="event-details"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your creative vision, custom fabrication desires, specific venue constraints, or key milestones..."
                    className={`w-full bg-[#09090B] border px-4 py-3 text-sm text-[#ECE7DE] focus:outline-none transition-colors ${
                      errors.message ? 'border-rose-500' : 'border-[#ECE7DE]/15 focus:border-[#C5A880]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    id="submit-event-brief-button"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-[#ECE7DE] text-[#09090B] font-mono text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C5A880] transition-colors duration-200 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? 'PROCESSING BRIEF...' : 'SEND EVENT BRIEF'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels, Phone, Location & Maps */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Contact Card */}
            <div className="bg-[#121216] border border-[#ECE7DE]/10 p-8 space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A880] block">
                Direct Channels
              </span>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#C5A880] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-[#8A867E] uppercase block">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="font-mono text-base text-[#ECE7DE] hover:text-[#C5A880] transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="w-5 h-5 text-[#C5A880] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-[#8A867E] uppercase block">
                      WhatsApp Inquiries
                    </span>
                    <a
                      href={COMPANY_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-sm text-[#ECE7DE] hover:text-[#C5A880] transition-colors"
                    >
                      <span>Connect with Production Desk</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#C5A880] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-[#8A867E] uppercase block">
                      Operating Studio & Workshop
                    </span>
                    <p className="text-sm text-[#ECE7DE] leading-relaxed">
                      {COMPANY_INFO.location}
                    </p>
                    <a
                      href={COMPANY_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#C5A880] hover:underline mt-1"
                    >
                      <span>View on Google Maps</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Business Verification Badge */}
              <div className="pt-6 border-t border-[#ECE7DE]/10 flex items-center justify-between text-xs font-mono text-[#8A867E]">
                <span>GOOGLE VERIFIED BUSINESS</span>
                <span className="text-[#C5A880]">5.0 ★ (8 REVIEWS)</span>
              </div>
            </div>

            {/* Subtle Guidance Note */}
            <div className="p-6 bg-[#0E0E12] border border-[#ECE7DE]/10 text-xs font-mono text-[#8A867E] space-y-2">
              <span className="text-[#ECE7DE] block uppercase tracking-wider">
                Planning Lead Time Notice
              </span>
              <p className="leading-relaxed">
                Because custom stage and architectural fabrications are constructed in our Abuja shop, we recommend engaging WALECROWN at least 4 to 8 weeks prior to major matrimonial or corporate gala dates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
