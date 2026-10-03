// Single source of truth for business details. Edit here only.
export const siteConfig = {
  businessName: "Jhansi Automobiles Engineering Works",
  experience: "15 Years",
  phone: "9396296001",
  email: "sanyasiraovipparthi2607@gmail.com",
  address: "[ADD BUSINESS ADDRESS]",
  businessHours: "[ADD BUSINESS HOURS]",
  url: "https://example.com", // TODO: replace with the real domain
};
export const tel = `tel:${siteConfig.phone}`;
export const mailto = `mailto:${siteConfig.email}`;
export const whatsappUrl = (message: string) =>
  `https://wa.me/91${siteConfig.phone}?text=${encodeURIComponent(message)}`;
export const serviceEnquiryMessage =
  "Hello Jhansi Automobiles Engineering Works, I would like to book a service. Please share the available service options and appointment details.";
export const bookingWhatsappUrl =
  "https://wa.me/919396296001?text=Hello%20Jhansi%20Automobiles%20Engineering%20Works%2C%20I%20would%20like%20to%20book%20a%20service.%20Please%20share%20the%20available%20service%20options%20and%20appointment%20details.";

// Drop photos into /public/images using these names. Missing files fall back to a dark placeholder panel.
export const img = { hero: "/images/hero-workshop.png", about: "/images/about-workshop.jpg" };
export const services = [
  ["General Car Service","workshop/periodic-maintenance.webp","Routine servicing to keep your vehicle running reliably."],
  ["Engine Diagnostics","workshop/engine-diagnostics.jpeg","Systematic checks to find the cause of engine and performance issues."],
  ["Engine Repair","workshop/engine-repair.jpeg","Mechanical repair work carried out with an engineering mindset."],
  ["Brake Service","workshop/brake-service.jpeg","Inspection and servicing of brake components and braking performance."],
  ["Suspension & Steering","workshop/brake-service.jpeg","Checks and repairs for ride comfort, handling and steering response."],
  ["AC & Climate Service","workshop/ac-service.jpeg","Service and repair for in-car cooling and climate systems."],
  ["Electrical & Battery","workshop/dashboard-electrical-repair.jpeg","Battery, wiring and electrical system inspection and repair."],
  ["Periodic Maintenance","workshop/periodic-maintenance.webp","Scheduled maintenance to prevent small issues becoming big ones."],
  ["Mechanical Engineering","workshop/engine-block.jpeg","Engineering solutions for mechanical problems beyond routine repair."],
  ["Vehicle Inspection","workshop/service-bay.webp","A thorough check of your vehicle's condition and what needs attention."],
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
