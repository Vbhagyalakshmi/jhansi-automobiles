// Single source of truth for business details. Edit here only.
export const siteConfig = {
  businessName: "Jhansi Automobiles Engineering Works",
  experience: "30+ Years",
  phone: "9396296001",
  email: "sanyasiraovipparthi2607@gmail.com",
  address:
    "37-6-3, Satya Nagar, Manchukonda Gardens, Murali Nagar, Visakhapatnam - 530007 (Opposite the 5th Town Police Station), Andhra Pradesh.",
  businessHours: "Monday – Saturday: 9:00 AM – 8:00 PM; Sunday: Closed",
  url: "https://www.jhansiengineeringworks.in",
};

// Structured parts of the address above, used for schema.org data.
export const addressParts = {
  streetAddress: "37-6-3, Satya Nagar, Manchukonda Gardens, Murali Nagar (Opposite the 5th Town Police Station)",
  addressLocality: "Visakhapatnam",
  postalCode: "530007",
  addressRegion: "Andhra Pradesh",
  addressCountry: "IN",
};

export const hours = [
  { days: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
  { days: "Sunday", time: "Closed" },
];

export const tel = `tel:${siteConfig.phone}`;
export const mailto = `mailto:${siteConfig.email}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`;
export const whatsappUrl = (message: string) =>
  `https://wa.me/91${siteConfig.phone}?text=${encodeURIComponent(message)}`;
export const serviceEnquiryMessage =
  "Hello Jhansi Automobiles Engineering Works, I would like to book a service. Please share the available service options and appointment details.";
export const bookingWhatsappUrl = whatsappUrl(serviceEnquiryMessage);

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Workshop", href: "/workshop" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const img = {
  logo: "/images/logo.png",
  hero: "/images/hero-workshop.png",
  about: "/images/workshop/workshop-interior.webp",
};

export const services = [
  { slug: "general-car-service", title: "General Car Service", image: "/images/workshop/periodic-maintenance.webp", description: "Routine servicing to keep your vehicle running reliably." },
  { slug: "engine-diagnostics", title: "Engine Diagnostics", image: "/images/workshop/engine-diagnostics.jpeg", description: "Systematic checks to find the cause of engine and performance issues." },
  { slug: "engine-repair", title: "Engine Repair", image: "/images/workshop/engine-repair.jpeg", description: "Mechanical repair work carried out with an engineering mindset." },
  { slug: "brake-service", title: "Brake Service", image: "/images/workshop/brake-service.jpeg", description: "Inspection and servicing of brake components and braking performance." },
  { slug: "suspension-steering", title: "Suspension & Steering", image: "/images/workshop/brake-service.jpeg", description: "Checks and repairs for ride comfort, handling and steering response." },
  { slug: "ac-climate-service", title: "AC & Climate Service", image: "/images/workshop/ac-service.jpeg", description: "Service and repair for in-car cooling and climate systems." },
  { slug: "electrical-battery", title: "Electrical & Battery", image: "/images/workshop/dashboard-electrical-repair.jpeg", description: "Battery, wiring and electrical system inspection and repair." },
  { slug: "periodic-maintenance", title: "Periodic Maintenance", image: "/images/workshop/periodic-maintenance.webp", description: "Scheduled maintenance to prevent small issues becoming big ones." },
  { slug: "mechanical-engineering", title: "Mechanical Engineering", image: "/images/workshop/engine-block.jpeg", description: "Engineering solutions for mechanical problems beyond routine repair." },
  { slug: "vehicle-inspection", title: "Vehicle Inspection", image: "/images/workshop/service-bay.webp", description: "A thorough check of your vehicle's condition and what needs attention." },
] as const;

export const gallery = [
  { title: "Workshop exterior", src: "/images/workshop/workshop-exterior.webp" },
  { title: "Workshop interior", src: "/images/workshop/workshop-interior.webp" },
  { title: "Service bay", src: "/images/workshop/service-bay.webp" },
  { title: "Vehicles in the workshop", src: "/images/workshop/workshop-vehicles.webp" },
  { title: "Periodic maintenance", src: "/images/workshop/periodic-maintenance.webp" },
  { title: "Engine diagnostics", src: "/images/workshop/engine-diagnostics.jpeg" },
  { title: "Engine repair", src: "/images/workshop/engine-repair.jpeg" },
  { title: "Engine block inspection", src: "/images/workshop/engine-block.jpeg" },
  { title: "Brake service", src: "/images/workshop/brake-service.jpeg" },
  { title: "AC service", src: "/images/workshop/ac-service.jpeg" },
  { title: "Dashboard electrical repair", src: "/images/workshop/dashboard-electrical-repair.jpeg" },
  { title: "Dashboard and climate system repair", src: "/images/workshop/dashboard-climate-repair.jpeg" },
  { title: "Automotive training certificate", src: "/images/workshop/training-certificate.webp" },
];
