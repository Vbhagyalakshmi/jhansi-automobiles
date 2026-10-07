"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Photo from "./Photo";
import { ArrowIcon, ClockIcon, PhoneIcon, PinIcon } from "./icons";
import { siteConfig as c, tel, img, hours, mapsUrl } from "@/lib/site-config";

export function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

export function Strip() {
  return (
    <div className="strip"><div className="wrap strip-in">
      <div><b>30+</b><span>YEARS OF EXPERIENCE</span></div>
      <div><b>AUTOMOTIVE</b><span>SERVICE & ENGINEERING</span></div>
      <div><b>PROFESSIONAL</b><span>WORKSHOP</span></div>
      <div><a href={tel} className="strip-call"><b>CALL NOW</b></a><span>FOR SERVICE BOOKINGS</span></div>
    </div></div>
  );
}

export function AboutPreview() {
  return (
    <section className="sec" aria-labelledby="about-preview-title"><div className="wrap two">
      <Reveal>
        <p className="eyebrow">About Us</p>
        <h2 id="about-preview-title">30+ YEARS OF AUTOMOTIVE EXPERIENCE</h2>
        <p className="body-copy">{c.businessName} brings 30+ years of experience in automobile service and engineering. Our workshop is focused on professional vehicle maintenance, diagnostics, repairs and engineering solutions.</p>
        <Link className="btn ghost" href="/about">MORE ABOUT US<ArrowIcon /></Link>
      </Reveal>
      <div className="about-img">
        <Photo src={img.about} alt="Inside the Jhansi Automobiles workshop" />
        <svg className="tech" aria-hidden="true" viewBox="0 0 200 200" fill="none" stroke="currentColor"><circle cx="100" cy="100" r="80" strokeDasharray="4 6" /><circle cx="100" cy="100" r="50" /><path d="M100 10v30M100 160v30M10 100h30M160 100h30" /></svg>
      </div>
    </div></section>
  );
}

const whyPoints = ["30+ YEARS OF EXPERIENCE", "PROFESSIONAL AUTOMOTIVE SERVICE", "ENGINEERING-FOCUSED APPROACH", "VEHICLE DIAGNOSTICS", "MAINTENANCE & REPAIR"];
export function Why() {
  return (
    <section className="sec" aria-labelledby="why-title"><div className="wrap">
      <h2 id="why-title">WHY CHOOSE US</h2>
      <ul className="why">{whyPoints.map((w, i) => (
        <motion.li key={w} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>{w}</motion.li>
      ))}</ul>
    </div></section>
  );
}

const steps = ["VEHICLE INSPECTION", "DIAGNOSIS", "SERVICE DISCUSSION", "REPAIR / MAINTENANCE", "QUALITY CHECK", "VEHICLE DELIVERY"];
export function Process({ title = "SERVICE PROCESS" }: { title?: string }) {
  return (
    <section className="sec alt" aria-labelledby="process-title"><div className="wrap">
      <h2 id="process-title">{title}</h2>
      <ol className="steps">{steps.map((s, i) => (
        <motion.li key={s} className="step" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
          <motion.span className="line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.7 }} />
          <b>{String(i + 1).padStart(2, "0")}</b><h3>{s}</h3>
        </motion.li>
      ))}</ol>
    </div></section>
  );
}

export function ContactCta() {
  return (
    <section className="sec" aria-labelledby="cta-title"><div className="wrap">
      <Reveal className="cta-box">
        <div className="cta-copy">
          <h2 id="cta-title">BOOK YOUR NEXT SERVICE</h2>
          <p className="body-copy">Talk to our team about servicing, diagnostics or repairs for your vehicle.</p>
          <ul className="cta-meta">
            <li><PinIcon /><a href={mapsUrl} target="_blank" rel="noopener noreferrer">{c.address}</a></li>
            <li><ClockIcon /><span>{hours.map((h) => `${h.days}: ${h.time}`).join(" · ")}</span></li>
          </ul>
        </div>
        <div className="ctas cta-actions">
          <a className="btn" href={tel}><PhoneIcon />CONTACT US</a>
          <Link className="btn ghost" href="/contact">BOOK A SERVICE</Link>
        </div>
      </Reveal>
    </div></section>
  );
}
