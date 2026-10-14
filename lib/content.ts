// Approved website copy (Bliss content handoff v1.0, 14 Oct 2026).
// This file is the single source of truth for public-facing text, prices and contact details.

export const BRAND = {
  name: "Bliss",
  descriptor: "Mobile Massage & Wellness",
  tagline: "Your Personal Wellness Escape",
  phoneDisplay: "+234 904 475 9926",
  phoneE164: "+2349044759926",
  whatsappNumber: "2349044759926",
  instagram: "blissmassageparlor_official",
  instagramUrl: "https://instagram.com/blissmassageparlor_official",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.blissmassageparlor.com",
} as const;

export const CITIES = ["Lagos", "Abuja", "Ibadan", "Uyo", "Port Harcourt"] as const;
export type City = (typeof CITIES)[number];

export type Service = {
  id: string;
  name: string;
  short: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const SERVICES: Service[] = [
  {
    id: "swedish",
    name: "Swedish massage",
    short: "Swedish",
    description: "A relaxing massage using flowing movements to help you unwind.",
    image: "/images/v2/swedish.jpg",
    imageAlt: "Therapist hands working across a client’s back",
  },
  {
    id: "deep-tissue",
    name: "Deep tissue massage",
    short: "Deep tissue",
    description:
      "Focused, firmer-pressure massage for areas of muscle tension. Pressure and suitability are discussed before the session.",
    image: "/images/v2/deep-tissue.jpg",
    imageAlt: "Therapist working on a client’s forearm",
  },
  {
    id: "hot-stone",
    name: "Hot stone massage",
    short: "Hot stone",
    description: "A warming massage experience using heated stones, where suitable.",
    image: "/images/v2/hot-stone.jpg",
    imageAlt: "Warm stones placed along a client’s spine",
  },
  {
    id: "couples",
    name: "Couples massage",
    short: "Couples",
    description: "A shared massage experience for two, subject to therapist and schedule availability.",
    image: "/images/v2/couples.jpg",
    imageAlt: "A client resting during a back massage",
  },
  {
    id: "four-hand",
    name: "Four-hand massage",
    short: "Four-hand",
    description: "A coordinated session with two therapists, subject to availability.",
    image: "/images/v2/four-hand.jpg",
    imageAlt: "Hands placing warm stones on a client’s back",
  },
];

export type Package = {
  id: string;
  name: string;
  price: number;
  featured?: boolean;
};

export const PACKAGES: Package[] = [
  { id: "executive-wellness", name: "Executive Wellness", price: 60000 },
  { id: "executive-plus", name: "Executive Plus", price: 85000, featured: true },
  { id: "executive-premium", name: "Executive Premium", price: 120000 },
];

export type BookableItem = { id: string; label: string; price?: number; kind: "package" | "service" };

export const BOOKABLE: BookableItem[] = [
  ...PACKAGES.map((p) => ({ id: p.id, label: p.name, price: p.price, kind: "package" as const })),
  ...SERVICES.map((s) => ({ id: s.id, label: s.name, kind: "service" as const })),
];

export const findBookable = (id?: string | null) => BOOKABLE.find((b) => b.id === id);

export const formatNaira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export const COPY = {
  ctaPrimary: "Book on WhatsApp",
  ctaSecondary: "Explore Packages",
  trust: ["Professional", "Private", "Personal"],
  home: {
    headline: "Premium Massage.",
    headlineAccent: "Delivered to You.",
    body: "Professional massage and wellness sessions brought to you in Lagos, Abuja, Ibadan, Uyo and Port Harcourt. Enjoy a personal wellness experience in a setting that works for you.",
    sectionHeading: "Wellness, made personal",
    sectionBody:
      "Choose a session that suits how you want to feel. We’ll discuss your needs, location and preferred time before confirming your appointment.",
    steps: [
      { title: "Tell us what you need", body: "Choose a service or package and share your city, area and preferred date." },
      { title: "Confirm the details", body: "We’ll confirm availability, the total price, any travel fee and the deposit required." },
      { title: "Make space to unwind", body: "Once your appointment is confirmed, we’ll share the arrangements for your session." },
    ],
  },
  services: {
    heading: "Massage, matched to",
    headingAccent: "how you feel",
    intro:
      "Explore our massage options. Message us to discuss the right session for your needs, availability and location.",
    cta: "Ask about this service",
  },
  packages: {
    heading: "Choose your",
    headingAccent: "wellness experience",
    intro:
      "Our Executive Wellness packages are designed for a more considered wellness experience. Message us for current inclusions, session duration and availability before booking.",
    packageNote:
      "Package prices are shown as listed. Any travel fee or additional charge will be explained and agreed with you before your appointment is confirmed.",
    giftNote: "Ask us on WhatsApp about prepaid session packs and gift options.",
    depositNote:
      "A deposit is required to secure an appointment. The amount and payment instructions will be confirmed in WhatsApp before payment.",
    cancellationNote: "Please ask us for the current cancellation and rescheduling terms before paying a deposit.",
  },
  mobile: {
    heading: "We come",
    headingAccent: "to you",
    intro:
      "Enjoy a professional massage session at a location agreed with Bliss. Tell us your city and area so we can confirm whether we can serve your address.",
    travelFee:
      "Travel fees depend on your location and will be confirmed with the total price before your appointment is finalised.",
    beforeSession:
      "Please arrange a clean, private and comfortable space for your session. We’ll confirm any other preparation details with you when your booking is discussed.",
    cta: "Check service availability",
  },
  corporate: {
    heading: "Wellness for",
    headingAccent: "your team",
    intro:
      "Bring a considered wellness experience to your workplace or event. Bliss can discuss an arrangement around your team size, location, date and schedule.",
    steps: [
      { title: "Share your brief", body: "Company, team size, city and preferred date." },
      { title: "We discuss your needs", body: "We talk through what would suit your team and schedule." },
      { title: "Receive a quote", body: "You receive a written scope and quote." },
      { title: "Delivery is arranged", body: "Delivery is arranged after approval." },
    ],
    cta: "Request a Corporate Quote on WhatsApp",
  },
  about: {
    heading: "Wellness, delivered",
    headingAccent: "with care",
    body: "Bliss brings mobile massage and wellness experiences closer to you. Our approach is personal, professional and respectful, with session details discussed in advance so you know what to expect.",
    pillars: [
      { title: "Professional", body: "We communicate clearly and treat every client with respect." },
      { title: "Private", body: "Your comfort, privacy and agreed boundaries matter." },
      { title: "Personal", body: "We discuss your preferences and needs before the session." },
    ],
    reviews:
      "Client feedback will be added only when genuine reviews have been received and permission to publish them has been obtained.",
  },
  book: {
    heading: "Book your",
    headingAccent: "session",
    intro:
      "Choose a package and share a few details. We’ll open WhatsApp with your information ready to send, then confirm availability and the final price with you.",
    button: "Confirm Availability on WhatsApp",
    important:
      "Sending a WhatsApp message is a booking request, not a confirmed appointment. Your booking is confirmed only after Bliss confirms the date and time, agrees the total price and travel fee, and explains the deposit required.",
  },
  footer: {
    line: "Bliss — Mobile Massage & Wellness",
    cta: "Ready to unwind?",
    ctaAccent: "Book on WhatsApp.",
  },
} as const;

export const NAV = [
  { href: "/massage-and-wellness", label: "Massage & Wellness", short: "Massage & Wellness" },
  { href: "/packages-and-pricing", label: "Packages & Pricing", short: "Packages & Pricing" },
  { href: "/mobile-massage", label: "Mobile Massage", short: "Mobile Massage" },
  { href: "/corporate-wellness", label: "Corporate Wellness", short: "Corporate" },
  { href: "/about", label: "About Bliss", short: "About" },
  { href: "/book", label: "Contact & Book", short: "Contact & Book" },
] as const;
