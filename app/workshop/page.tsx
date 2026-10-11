import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import WorkshopVisual from "@/components/WorkshopVisual";
import { ContactCta, Process, Reveal } from "@/components/sections";

export const metadata: Metadata = {
  title: "Our Automobile Engineering Workshop",
  description: "Inside the Jhansi Automobiles Engineering Works workshop in Visakhapatnam — diagnostics, mechanical engineering, maintenance and repair backed by 30+ years of experience.",
  alternates: { canonical: "/workshop" },
  openGraph: {
    title: "Our Automobile Engineering Workshop",
    description: "Inside the Jhansi Automobiles Engineering Works workshop in Visakhapatnam — diagnostics, mechanical engineering, maintenance and repair backed by 30+ years of experience.",
    url: "/workshop",
  },
  twitter: {
    title: "Our Automobile Engineering Workshop",
    description: "Inside the Jhansi Automobiles Engineering Works workshop in Visakhapatnam — diagnostics, mechanical engineering, maintenance and repair backed by 30+ years of experience.",
  },
};

const capabilities = [
  { title: "Diagnostics", image: "/images/workshop/engine-diagnostics.jpeg", text: "Systematic checks to locate the real cause of engine, electrical and performance problems before any work starts." },
  { title: "Mechanical Engineering", image: "/images/workshop/engine-block.jpeg", text: "Engineering-led solutions for mechanical problems that go beyond routine part replacement." },
  { title: "Maintenance", image: "/images/workshop/periodic-maintenance.webp", text: "Periodic servicing and preventive maintenance to keep your vehicle reliable and road-ready." },
  { title: "Repair", image: "/images/workshop/engine-repair.jpeg", text: "Careful repair work on engines, brakes, suspension, AC and electrical systems." },
];

const photos = [
  { src: "/images/workshop/workshop-interior.webp", alt: "Workshop interior" },
  { src: "/images/workshop/service-bay.webp", alt: "Service bay" },
  { src: "/images/workshop/workshop-vehicles.webp", alt: "Vehicles in the workshop" },
];

export default function WorkshopPage() {
  return (
    <>
      <PageHero kicker="Professional Automotive Workshop" title="OUR WORKSHOP" image="/images/workshop/workshop-exterior.webp"
        lead="A dedicated service environment for diagnostics, maintenance, repair and mechanical engineering." />
      <section className="sec" aria-labelledby="env-title"><div className="wrap two">
        <Reveal>
          <p className="eyebrow">Service Environment</p>
          <h2 id="env-title">PROFESSIONAL AUTOMOTIVE WORKSHOP</h2>
          <p className="body-copy">Our workshop is set up for organised, methodical vehicle care. Each vehicle is inspected, diagnosed and discussed with its owner before maintenance or repair begins.</p>
          <p className="body-copy">With 30+ years of automotive experience, our team combines practical mechanical skill with an engineering-focused approach to every job.</p>
        </Reveal>
        <div className="about-img"><Photo src="/images/workshop/workshop-exterior.webp" alt="Jhansi Automobiles workshop exterior" /></div>
      </div></section>
      <section className="sec alt" aria-labelledby="cap-title"><div className="wrap">
        <h2 id="cap-title">WHAT WE HANDLE</h2>
        <div className="cap-grid">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} className="cap" delay={i * 0.06}>
              <Photo src={cap.image} alt={cap.title} className="card-img" />
              <div className="card-b"><h3>{cap.title}</h3><p>{cap.text}</p></div>
            </Reveal>
          ))}
        </div>
      </div></section>
      <section className="sec visual-sec" aria-labelledby="precision-title"><div className="wrap two">
        <Reveal>
          <p className="eyebrow">Our Approach</p>
          <h2 id="precision-title">PRECISION IN EVERY JOB</h2>
          <p className="body-copy">From brake components to engine internals, we treat every part as part of a working system — so repairs restore performance, not just function.</p>
        </Reveal>
        <WorkshopVisual />
      </div></section>
      <Process title="OUR REPAIR WORKFLOW" />
      <section className="sec" aria-labelledby="photos-title"><div className="wrap">
        <h2 id="photos-title">AROUND THE WORKSHOP</h2>
        <div className="photo-row">
          {photos.map((p) => <Photo key={p.src} src={p.src} alt={p.alt} className="photo-tile" />)}
        </div>
      </div></section>
      <ContactCta />
    </>
  );
}
