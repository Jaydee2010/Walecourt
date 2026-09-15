export type ProjectCategory = 'WEDDINGS' | 'CORPORATE' | 'SOCIAL' | 'FABRICATION';

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  eventType: string;
  location: string;
  year: string;
  coverImage: string;
  coverImageAlt: string;
  aspectRatio?: 'vertical' | 'horizontal' | 'square' | 'wide';
  featured?: boolean;
  shortDescription: string;
  fullDescription: string;
  fabricationScope: string[];
  servicesProvided: string[];
  gallery: {
    url: string;
    caption: string;
    type?: 'full' | 'split' | 'tall';
    alt: string;
  }[];
  isPlaceholder: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  scopeItems: string[];
  image: string;
  imageAlt: string;
  isConfirmed: boolean;
  isFabricationHighlight?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  eventType: string;
  location: string;
  rating: number;
  source: string;
  isPlaceholder: boolean;
}

export interface EventTypeItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  typicalScale: string;
  focus: string;
}

export interface ContactBriefForm {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  expectedGuestCount: string;
  location: string;
  estimatedBudget: string;
  message: string;
}
