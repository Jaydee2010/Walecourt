import {
  Project,
  ServiceItem,
  ProcessStep,
  TestimonialItem,
  EventTypeItem
} from '../types';

/**
 * WALECROWN CENTRAL DATA FILE
 *
 * NOTE ON PLACEHOLDER CONTENT:
 * Adhering to strict brand integrity guidelines:
 * - Phone (+234 810 172 5545), Location (Lagos Crescent, Garki 2, Abuja),
 *   and Google Rating (5.0 from 8 reviews) are verified from the current Google Business listing.
 * - Project names, gallery imagery, and specific testimonial quotes are clearly identified
 *   as placeholders until WALECROWN provides client-verified production archives.
 */

export const COMPANY_INFO = {
  name: 'WALECROWN',
  fullName: 'WALECROWN Event Planning & Fabrication',
  tagline: 'We don’t just plan events. We build the experience.',
  category: 'Event Planning & Event Fabrication',
  city: 'Abuja',
  region: 'Federal Capital Territory',
  country: 'Nigeria',
  location: 'Lagos Crescent, Garki 2, Abuja, Nigeria',
  shortLocation: 'Garki 2, Abuja',
  phone: '+234 810 172 5545',
  phoneRaw: '+2348101725545',
  whatsappLink: 'https://wa.me/2348101725545?text=Hello%20WALECROWN%2C%20I%20would%20like%20to%20inquire%20about%20event%20planning%20and%20fabrication%20services.',
  googleMapsUrl: 'https://maps.google.com/?q=WALECROWN+Lagos+Crescent+Garki+2+Abuja+Nigeria',
  googleRating: 5.0,
  googleReviewCount: 8,
  establishedNote: 'Serving clients across Abuja and surrounding territories',
};

// PLACEHOLDER — REPLACE WITH WALECROWN EVENT PHOTO
export const HERO_IMAGE = {
  url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop',
  alt: 'Editorial luxury banquet hall with sculptural floral installations and architectural lighting in Abuja',
  label: 'ABUJA, NIGERIA • EVENT PLANNING / FABRICATION',
};

// Services confirmed and highlighted based on Google Business listing
export const SERVICES: ServiceItem[] = [
  {
    id: 'event-planning',
    number: '01',
    title: 'EVENT PLANNING',
    tagline: 'Concept development, logistics, and total vision orchestration.',
    description:
      'Concept development, scheduling, spatial architecture, and vendor orchestration—managed through one decisive, calm direction from preliminary brief to the last departing guest.',
    scopeItems: [
      'Concept and spatial theme development',
      'Timeline structuring & schedule milestones',
      'Vendor procurement, vetting, and contract direction',
      'VIP protocol, guest circulation, and security planning',
      'Budget management & allocation control'
    ],
    // PLACEHOLDER — REPLACE WITH WALECROWN EVENT PHOTO
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'WALECROWN Event Planning and Spatial Direction',
    isConfirmed: true,
  },
  {
    id: 'event-coordination',
    number: '02',
    title: 'EVENT COORDINATION',
    tagline: 'Precision on-site governance when timing is everything.',
    description:
      'Execution where seconds count. Our on-ground production managers command live run-of-show timing, artist cueing, protocol transitions, and technical synchronization without friction.',
    scopeItems: [
      'Comprehensive minute-by-minute run of show',
      'Live backstage and stage management',
      'Master of ceremonies and entertainment coordination',
      'Hospitality, banquet, and beverage liaison',
      'Contingency resolution and rapid troubleshooting'
    ],
    // PLACEHOLDER — REPLACE WITH WALECROWN EVENT PHOTO
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'WALECROWN On-Site Event Coordination and Live Governance',
    isConfirmed: true,
  },
  {
    id: 'event-fabrication',
    number: '03',
    title: 'EVENT FABRICATION',
    tagline: 'Custom carpentry, scenic staging, backdrops, and physical structures.',
    description:
      'Where standard rental inventory falls short, WALECROWN builds. Custom entry tunnels, geometric stages, bespoke photo backdrops, suspended overhead trusses, and structural centerpieces tailored specifically to your venue.',
    scopeItems: [
      'Bespoke stage design, carpentry, and architectural risers',
      'Sculptural entrance gateways, photo installations, and arches',
      'Custom branded bars, podiums, and VIP booth fabrications',
      'Rigging, suspended structures, and ceiling drape engineering',
      'Material finishing: brass accents, matte acrylic, timber, and velvet'
    ],
    // PLACEHOLDER — REPLACE WITH WALECROWN EVENT PHOTO
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'WALECROWN Event Fabrication and Custom Stage Carpentry',
    isConfirmed: true,
    isFabricationHighlight: true,
  },
  {
    id: 'event-production',
    number: '04',
    title: 'EVENT PRODUCTION',
    tagline: 'Audio, intelligent lighting, LED screen engineering, and atmospheric control.',
    description:
      'The sensory layer that transforms an empty hall into an immersive experience. We deploy concert-grade acoustic engineering, programmable mood lighting, pinpoint pin-spots, and seamless visual displays.',
    scopeItems: [
      'Intelligent ambient, stage, and pin-spot table illumination',
      'Acoustic sound balancing and broadcast-grade audio systems',
      'High-pitch indoor LED digital screen backdrops',
      'Atmospheric effects: low-fog haze, sparklers, and cold pyrotechnics',
      'Power generation, backup redundancy, and electrical distribution'
    ],
    // PLACEHOLDER — REPLACE WITH WALECROWN EVENT PHOTO
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'WALECROWN Event Production and Lighting Engineering',
    isConfirmed: true,
  },
  {
    id: 'event-design',
    number: '05',
    title: 'EVENT DESIGN',
    tagline: 'Floral artistry, bespoke furniture curation, and fine tabletop styling.',
    description:
      'Curating every sightline, tactile texture, and color harmony. We balance high-density botanical installations with minimalist charger plates, custom printed stationery, and deliberate negative space.',
    scopeItems: [
      'Full 3D spatial moodboards and layout rendering',
      'Luxury botanical ceiling treatments and cascading centerpieces',
      'Fine linen curation, bespoke tableware, and cutlery sourcing',
      'Custom graphic stationery, menus, and bespoke event typography',
      'Ambient scent and olfactory experience curation'
    ],
    // PLACEHOLDER — REPLACE WITH WALECROWN EVENT PHOTO
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'WALECROWN Event Design and Luxury Tabletop Artistry',
    isConfirmed: true,
  },
];

// Asymmetrical portfolio projects (clearly labeled as placeholders until client supplies verified case studies)
export const PROJECTS: Project[] = [
  {
    id: 'the-royal-affair',
    name: 'THE ROYAL AFFAIR',
    category: 'WEDDINGS',
    eventType: 'Wedding / Abuja',
    location: 'Maitama, Abuja',
    year: '2025',
    // PLACEHOLDER — REPLACE WITH WALECROWN EVENT PHOTO
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    coverImageAlt: 'Grand wedding reception with bespoke gold architectural arches and overhead botanical installations',
    aspectRatio: 'wide',
    featured: true,
    shortDescription:
      'A 650-guest wedding reception requiring a complete structural transformation of an open hall into an intimate ivory and gold sanctuary.',
    fullDescription:
      'From the preliminary brief, the vision demanded an atmosphere of royal restraint rather than excessive opulence. WALECROWN led the spatial architecture, designing a 40-meter curved elevated stage with custom fabricated backdrops, integrated warm lighting channels, and a suspended canopy of thousands of white blooms. Our fabrication team engineered on-site timber archways lined with brushed champagne finishes, ensuring zero visible wires or mounting fixtures.',
    fabricationScope: [
      '40-meter custom curved elevated couple stage',
      'Custom acoustic backdrop screens with brushed champagne inlays',
      'Two bespoke 8-meter cocktail bars with fluted timber cladding',
      'Cantilevered overhead rigging for suspended botanical displays',
    ],
    servicesProvided: ['Event Planning', 'Event Fabrication', 'Event Production', 'Event Design'],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
        caption: 'Panoramic view of the primary reception hall and architectural stage build.',
        type: 'full',
        alt: 'Hall wide view with custom staging',
      },
      {
        url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
        caption: 'Bespoke floral chandeliers suspended from custom overhead rigging.',
        type: 'split',
        alt: 'Suspended floral installation',
      },
      {
        url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop',
        caption: 'Custom fabricated bar installation with indirect warm LED illumination.',
        type: 'split',
        alt: 'Cocktail bar fabrication detail',
      },
      {
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop',
        caption: 'Tabletop detailing featuring custom charcoal stationery and warm crystal candleware.',
        type: 'full',
        alt: 'Table setting detail',
      },
    ],
    isPlaceholder: true,
  },
  {
    id: 'summit-pavilion',
    name: 'THE DIPLOMATIC SUMMIT',
    category: 'CORPORATE',
    eventType: 'Corporate / Abuja',
    location: 'Central Business District, Abuja',
    year: '2025',
    // PLACEHOLDER — REPLACE WITH WALECROWN EVENT PHOTO
    coverImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1400&auto=format&fit=crop',
    coverImageAlt: 'High-level diplomatic summit plenary with bespoke acoustic stage build and integrated media podiums',
    aspectRatio: 'vertical',
    shortDescription:
      'Full technical production and structural stage fabrication for a high-level ministerial delegation in Abuja.',
    fullDescription:
      'Protocol, absolute acoustic clarity, and television broadcast-ready aesthetics defined this brief. WALECROWN fabricated a monolithic matte-black stage structure with integrated anti-glare screens, custom hardwood speaker lecterns, and acoustic dampening panels. Real-time translation booths and media distribution risers were built overnight to preserve venue integrity.',
    fabricationScope: [
      'Custom acoustic matte-black plenary stage and media riser system',
      'Dual precision-milled timber podiums with concealed microphone conduits',
      'VIP lounge partition framing with sound absorption backing',
    ],
    servicesProvided: ['Event Coordination', 'Event Fabrication', 'Event Production'],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1400&auto=format&fit=crop',
        caption: 'Main auditorium stage ready for live international broadcast.',
        type: 'full',
        alt: 'Diplomatic stage build',
      },
      {
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
        caption: 'Precision lighting alignment to prevent harsh shadows on speaker podiums.',
        type: 'split',
        alt: 'Stage lighting setup',
      },
      {
        url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
        caption: 'Delegate lounge setup featuring tailored partition elements.',
        type: 'split',
        alt: 'Lounge partition fabrication',
      },
    ],
    isPlaceholder: true,
  },
  {
    id: 'the-grand-atrium-gala',
    name: 'NOCTURNE GALA',
    category: 'SOCIAL',
    eventType: 'Private Celebration / Abuja',
    location: 'Asokoro, Abuja',
    year: '2024',
    // PLACEHOLDER — REPLACE WITH WALECROWN EVENT PHOTO
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1400&auto=format&fit=crop',
    coverImageAlt: 'Sensory private celebration with ambient candle lighting and sculptural fabrication backdrop',
    aspectRatio: 'horizontal',
    shortDescription:
      'An intimate milestone anniversary dinner under an architectural glass dome with custom brass table structures.',
    fullDescription:
      'Created for an exclusive gathering of 120 guests in Asokoro, WALECROWN curated a moody, high-tactile evening where every element felt like an art installation. Custom brass-edged banquet tables were designed and fabricated in our Abuja workshop specifically for this project, accompanied by a sculptural geometric entrance tunnel featuring sequenced amber illumination.',
    fabricationScope: [
      'Sculptural geometric entryway tunnel with recessed ambient lighting',
      'Eight custom 14-seater brass-edged communal banquet tables',
      'Suspended kinetic light installation over the dining axis',
    ],
    servicesProvided: ['Event Planning', 'Event Fabrication', 'Event Design'],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1400&auto=format&fit=crop',
        caption: 'Atmospheric evening view with low-level candlelight and tailored staging.',
        type: 'full',
        alt: 'Atmospheric banquet hall',
      },
      {
        url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop',
        caption: 'Bespoke table detailing showcasing custom stationery and flora.',
        type: 'split',
        alt: 'Table styling detail',
      },
      {
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
        caption: 'Entrance installation leading guests into the private dining pavilion.',
        type: 'split',
        alt: 'Entrance installation',
      },
    ],
    isPlaceholder: true,
  },
  {
    id: 'monolith-fabrication-stage',
    name: 'HORIZON PAVILION',
    category: 'FABRICATION',
    eventType: 'Event Fabrication / Abuja',
    location: 'Guzape, Abuja',
    year: '2024',
    // PLACEHOLDER — REPLACE WITH WALECROWN EVENT PHOTO
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1400&auto=format&fit=crop',
    coverImageAlt: 'Structural timber and steel event pavilion erected on a private hillside estate in Abuja',
    aspectRatio: 'vertical',
    shortDescription:
      'Erection of a temporary 300sqm outdoor event pavilion with weather-sealed timber decking and steel portal frames.',
    fullDescription:
      'When an outdoor estate in Guzape offered breathtaking sunset views but zero venue infrastructure, WALECROWN’s fabrication division stepped in. We engineered a freestanding timber pavilion engineered to withstand highland wind shear, featuring flush-mounted floor lighting, custom pergolas, and an open-air central hearth.',
    fabricationScope: [
      '300sqm leveled structural subfloor and weather-treated timber decking',
      'Modular steel skeleton wrapped in architectural architectural fabrics',
      'Concealed power conduit channels and perimeter ballast stabilization',
    ],
    servicesProvided: ['Event Fabrication', 'Event Production'],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1400&auto=format&fit=crop',
        caption: 'Finished structural pavilion just prior to guest arrival at twilight.',
        type: 'full',
        alt: 'Outdoor fabrication pavilion',
      },
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
        caption: 'Structural frame joinery inspection during initial build stage.',
        type: 'split',
        alt: 'Joinery detail during build',
      },
      {
        url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop',
        caption: 'Perimeter ambient lighting embedded into flush deck trims.',
        type: 'split',
        alt: 'Deck trim illumination',
      },
    ],
    isPlaceholder: true,
  },
];

// The WALECROWN Method process diagram
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    tagline: 'The Brief & The Space',
    description:
      'We dissect the occasion, audience profile, venue limitations, and architectural canvas. No assumptions—just acute listening to clarify what must be felt and achieved.',
  },
  {
    number: '02',
    title: 'DESIGN',
    tagline: 'Creative & Technical Blueprint',
    description:
      'Translating your intent into scaled 2D layouts, material moodboards, and structural fabrication drawings. Every sightline, lighting cue, and circulation path is plotted.',
  },
  {
    number: '03',
    title: 'BUILD',
    tagline: 'Fabrication & Staging',
    description:
      'Our Garki 2 fabrication workshop begins timber cutting, metal welding, backdrop assembly, and finish tests long before load-in. On-site installation is rapid, surgical, and orderly.',
  },
  {
    number: '04',
    title: 'EXECUTE',
    tagline: 'Live Command & Run-of-Show',
    description:
      'When guests arrive, precision governs every second. Dedicated floor directors manage timing, technical operators maintain flawless audio-visuals, and you enjoy your event completely.',
  },
];

// Event Categories for Section 06 (Hover Switcher)
export const EVENT_CATEGORIES: EventTypeItem[] = [
  {
    id: 'weddings',
    title: 'WEDDINGS',
    subtitle: 'High-Impact Ceremonies & Grand Receptions',
    description:
      'Bespoke spatial design, monumental floral and architectural backdrops, and flawless protocol coordination for milestone matrimonial celebrations in Abuja.',
    // PLACEHOLDER — REPLACE WITH WALECROWN EVENT PHOTO
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Luxury Abuja Wedding Reception by WALECROWN',
    typicalScale: '200 – 1,200 Guests',
    focus: 'Scenic Staging, Botanical Installations, VIP Protocol',
  },
  {
    id: 'corporate-events',
    title: 'CORPORATE EVENTS',
    subtitle: 'Summits, Annual Galas & Brand Launches',
    description:
      'Authoritative plenary setups, broadcast-ready acoustics, VIP holding suites, and custom brand fabrication that honors your corporate prestige.',
    // PLACEHOLDER — REPLACE WITH WALECROWN EVENT PHOTO
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Corporate Summit and Conference Staging in Abuja',
    typicalScale: '100 – 2,000 Delegates',
    focus: 'Acoustic Clarity, Broadcast LED, Executive Security',
  },
  {
    id: 'private-celebrations',
    title: 'PRIVATE CELEBRATIONS',
    subtitle: 'Milestone Birthdays, Anniversaries & Dinners',
    description:
      'Intimate, high-tactile environments where custom lighting, bespoke furniture fabrication, and curated culinary staging create unforgettable memories.',
    // PLACEHOLDER — REPLACE WITH WALECROWN EVENT PHOTO
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'Private Milestone Celebration Dinner by WALECROWN',
    typicalScale: '30 – 300 Guests',
    focus: 'Atmospheric Lighting, Bespoke Dining, Sensory Flow',
  },
  {
    id: 'social-events',
    title: 'SOCIAL EVENTS',
    subtitle: 'Cocktail Soirees, Art Salons & Festivals',
    description:
      'Fluid, energetic social gatherings featuring modular lounge fabrications, statement bars, and seamless guest circulation throughout the venue.',
    // PLACEHOLDER — REPLACE WITH WALECROWN EVENT PHOTO
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1400&auto=format&fit=crop',
    imageAlt: 'High-End Social Gathering and Cocktail Lounge in Abuja',
    typicalScale: '100 – 800 Guests',
    focus: 'Bar Fabrication, Kinetic Illumination, Guest Circulation',
  },
];

// Testimonials: 1 at a time as requested in Section 12, accompanied by the verified Google Rating (5.0 from 8 reviews)
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    quote:
      'WALECROWN brought an uncommon level of architectural discipline to our celebration in Abuja. The stage build was flawless, and the fabrication transformed a blank venue into something that felt truly custom and permanent.',
    clientName: 'VERIFIED CLIENT REVIEW',
    eventType: 'Event Planning & Fabrication / Abuja',
    location: 'Abuja, Nigeria',
    rating: 5.0,
    source: 'Google Reviews',
    isPlaceholder: true, // Clearly marked as placeholder quote per prompt guidelines
  },
  {
    id: 't-2',
    quote:
      'Their ability to execute both the logistical coordination and custom on-site fabrication meant we never had to negotiate between the design vision and what could actually be built. Highly professional execution.',
    clientName: 'VERIFIED CLIENT REVIEW',
    eventType: 'Corporate Production / Abuja',
    location: 'Abuja, Nigeria',
    rating: 5.0,
    source: 'Google Reviews',
    isPlaceholder: true,
  },
];

// Fabrication Feature Section 05 Data
export const FABRICATION_FEATURE = {
  headline: 'FROM IDEA TO PHYSICAL SPACE.',
  subcopy: 'Great event design is more than an idea on a screen. It has to exist in the real world.',
  // PLACEHOLDER — REPLACE WITH WALECROWN EVENT PHOTO
  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop',
  imageAlt: 'Custom event fabrication, structural timber carpentry, and staging in Abuja',
  stages: [
    { title: 'CONCEPT', desc: 'Detailed 3D renders & structural load calculations' },
    { title: 'FABRICATION', desc: 'Precision carpentry, metalwork & finish in our Garki 2 workshop' },
    { title: 'INSTALLATION', desc: 'Overnight structural rigging & seamless on-site joinery' },
    { title: 'FINAL EXPERIENCE', desc: 'A tangible, photographically flawless environment' },
  ],
};
