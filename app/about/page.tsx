import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { Reveal, Why } from "@/components/sections";
import { ArrowIcon, PhoneIcon } from "@/components/icons";
import { siteConfig as c, img, tel } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Jhansi Automobiles Engineering Works, Visakhapatnam — 30+ years of automotive experience in vehicle service, diagnostics, repair and engineering.",
  alternates: { canonical: "/about" },
};

const pillars = [
  { title: "Service Philosophy", text: "Every vehicle is inspected and discussed with its owner before work begins, so you understand what is needed and why." },
  { title: "Professional Approach", text: "Work is carried out in an organised workshop with clear communication from inspection through to delivery." },
  { title: "Engineering-Focused", text: "We look beyond replacing parts — mechanical problems are understood at the root so the fix lasts." },
  { title: "Vehicle Diagnostics", text: "Systematic checks help find the real cause of engine, electrical and performance issues." },
  { title: "Maintenance & Repair", text: "From periodic servicing to major mechanical repair, your vehicle is cared for at every stage." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero kicker="30+ Years of Automotive Experience" title="ABOUT US" image={img.about}
        lead={`${c.businessName} provides automobile service, diagnostics, repair, maintenance and engineering-focused solutions.`} />
      <section className="sec" aria-labelledby="intro-title"><div className="wrap two">
        <Reveal>
          <p className="eyebrow">Who We Are</p>
          <h2 id="intro-title">30+ YEARS OF AUTOMOTIVE EXPERIENCE</h2>
          <p className="body-copy">{c.businessName} brings more than 30 years of hands-on experience in automobile service and engineering. Our workshop focuses on professional vehicle maintenance, accurate diagnostics, dependable repairs and practical engineering solutions.</p>
          <p className="body-copy">That experience shapes how we work: careful inspection first, an honest discussion of what your vehicle needs, and quality checks before every vehicle is handed back.</p>
        </Reveal>
        <div className="about-img"><Photo src={img.about} alt="Inside the Jhansi Automobiles workshop" /></div>
      </div></section>
      <section className="sec alt" aria-labelledby="approach-title"><div className="wrap">
        <h2 id="approach-title">OUR APPROACH</h2>
        <div className="pillars">
          {pillars.map((p, i) => (
            <Reveal key={p.title} className="pillar" delay={i * 0.06}>
              <i>{String(i + 1).padStart(2, "0")}</i><h3>{p.title}</h3><p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div></section>
      <Why />
      <section className="sec alt" aria-labelledby="about-cta-title"><div className="wrap">
        <Reveal className="cta-box">
          <div className="cta-copy">
            <h2 id="about-cta-title">READY TO BOOK A SERVICE?</h2>
            <p className="body-copy">Get in touch with our team for servicing, diagnostics or repairs.</p>
          </div>
          <div className="ctas cta-actions">
            <Link className="btn" href="/contact">CONTACT PAGE<ArrowIcon /></Link>
            <a className="btn ghost" href={tel}><PhoneIcon />CALL NOW</a>
          </div>
        </Reveal>
      </div></section>
    </>
  );
}
