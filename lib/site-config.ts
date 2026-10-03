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
  ["General Car Service","service-general.jpg","Routine servicing to keep your vehicle running reliably."],
  ["Engine Diagnostics","service-diagnostics.jpg","Systematic checks to find the cause of engine and performance issues."],
  ["Engine Repair","service-engine.jpg","Mechanical repair work carried out with an engineering mindset."],
  ["Brake Service","service-brake.jpg","Inspection and servicing of brake components and braking performance."],
  ["Suspension & Steering","service-suspension.jpg","Checks and repairs for ride comfort, handling and steering response."],
  ["AC & Climate Service","service-ac.jpg","Service and repair for in-car cooling and climate systems."],
  ["Electrical & Battery","service-electrical.jpg","Battery, wiring and electrical system inspection and repair."],
  ["Periodic Maintenance","service-maintenance.jpg","Scheduled maintenance to prevent small issues becoming big ones."],
  ["Mechanical Engineering","service-mechanical.jpg","Engineering solutions for mechanical problems beyond routine repair."],
  ["Vehicle Inspection","service-inspection.jpg","A thorough check of your vehicle's condition and what needs attention."],
] as const;
export const gallery = ["Workshop exterior","Workshop interior","Service bay","Car service","Engine","Brake system","Diagnostic equipment","Mechanical tools","Vehicle lift","Automotive components"]
  .map((t,i)=>({title:t,src:`/images/gallery-${i+1}.jpg`}));
