"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig as c, tel, mailto, whatsappUrl, bookingWhatsappUrl, img, services, gallery } from "@/lib/site-config";
const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

function WhatsAppIcon({ className = "btn-icon" }: { className?: string }) {
  return <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.1 11.7a8.1 8.1 0 0 1-11.9 7.1L4 20l1.2-4.1A8.1 8.1 0 1 1 20.1 11.7Z" />
    <path d="M9 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4 0 .6.6 1 1.4 1.7 2.4 2.2.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.3.6-.1.5-.4 1.1-.8 1.4-.5.4-1.1.6-1.8.5-1-.1-2.3-.7-3.5-1.7-1.3-1.1-2.2-2.5-2.5-3.5-.3-1.2.1-2.2.6-2.8Z" />
  </svg>;
}

function PhoneIcon() {
  return <svg className="btn-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 8.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" />
  </svg>;
}

function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [ok, setOk] = useState(true);
  return (<div className={`ph ${className}`}>{ok && <img src={src} alt={alt} loading="lazy" onError={() => setOk(false)} />}</div>);
}
const nav = [["Home","#home"],["About","#about"],["Services","#services"],["Workshop","#workshop"],["Gallery","#gallery"],["Contact","#contact"]];

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    addEventListener("keydown", closeMenu);
    return () => removeEventListener("keydown", closeMenu);
  }, []);
  const { scrollY } = useScroll(); const y = useTransform(scrollY, [0, 700], [0, 120]);
  return (
    <section id="home" className="hero">
      <motion.div className="hero-bg" style={{ y }}><Photo src={img.hero} alt="Premium automotive workshop with a vehicle and open bonnet" /></motion.div>
      <div className="hero-shade" />
      <header className="top"><a href="#home" className="logo">JHANSI <span>AUTOMOBILES</span></a>
        <nav id="primary-navigation" aria-label="Main navigation" className={menuOpen ? "is-open" : ""}>{nav.map(([n, h]) => <a key={n} href={h} onClick={() => setMenuOpen(false)}>{n}</a>)}<a className="mobile-call" href={tel}><PhoneIcon />{c.phone}</a></nav>
        <a className="btn ghost sm header-call" href={tel}><PhoneIcon />{c.phone}</a>
        <button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "CLOSE" : "MENU"}</button></header>
      <div className="wrap hero-in">
        <motion.p className="kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}>15 YEARS OF AUTOMOTIVE EXPERIENCE</motion.p>
        <motion.h1 className="hero-title" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .35 }}>
          <span className="hero-title-primary">JHANSI AUTOMOBILES</span>
          <span className="hero-title-secondary">ENGINEERING WORKS</span>
        </motion.h1>
        <motion.p className="hero-support" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }}>ENGINEERED WITH EXPERIENCE</motion.p>
        <motion.p className="lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}>Professional automobile service and engineering solutions backed by 15 years of experience.</motion.p>
        <motion.div className="ctas" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <a className="btn" href={bookingWhatsappUrl} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />BOOK A SERVICE</a><a className="btn ghost" href="#services">EXPLORE SERVICES</a><a className="btn ghost" href={tel}><PhoneIcon />{c.phone}</a></motion.div>
      </div>
    </section>);
}
const Strip = () => (<div className="strip"><div className="wrap strip-in">
  <div><b>15+</b><span>YEARS OF EXPERIENCE</span></div><div><b>AUTOMOTIVE</b><span>SERVICE & ENGINEERING</span></div>
  <div><b>PROFESSIONAL</b><span>WORKSHOP</span></div><div><a href={tel}><b>{c.phone}</b></a><span>CALL FOR SERVICE</span></div></div></div>);

const About = () => (<section id="about" className="sec"><div className="wrap two">
  <div><h2>15 YEARS OF AUTOMOTIVE EXPERIENCE</h2>
    <p>Jhansi Automobiles Engineering Works brings 15 years of experience in automobile service and engineering. Our workshop is focused on professional vehicle maintenance, diagnostics, repairs and engineering solutions.</p></div>
  <div className="about-img"><Photo src={img.about} alt="Inside the workshop" />
    <svg className="tech" viewBox="0 0 200 200" fill="none" stroke="currentColor"><circle cx="100" cy="100" r="80" strokeDasharray="4 6" /><circle cx="100" cy="100" r="50" /><path d="M100 10v30M100 160v30M10 100h30M160 100h30" /></svg></div></div></section>);

const Services = () => (<section id="services" className="sec alt"><div className="wrap"><h2>SERVICES</h2>
  <div className="grid">{services.map(([t, f, d], i) => (
    <motion.a href={whatsappUrl(`Hello Jhansi Automobiles Engineering Works, I would like to book the following service: ${t}. Please share the available appointment details.`)} target="_blank" rel="noopener noreferrer" key={t} className="card" whileHover={{ y: -6 }}>
      <Photo src={`/images/${f}`} alt={t} className="card-img" />
      <div className="card-b"><i>{String(i + 1).padStart(2, "0")}</i><h3>{t}</h3><p>{d}</p><span className="arrow"><WhatsAppIcon className="wa-card-icon" /></span></div></motion.a>))}</div></div></section>);

function Engineered() {
  const [big, setBig] = useState(false);
  useEffect(() => { const m = matchMedia("(min-width:900px) and (prefers-reduced-motion:no-preference)"); setBig(m.matches); const f = () => setBig(m.matches); m.addEventListener("change", f); return () => m.removeEventListener("change", f); }, []);
  const call = ["15 YEARS|EXPERIENCE", "PRECISION|ENGINEERING", "VEHICLE|DIAGNOSTICS", "PROFESSIONAL|SERVICE"];
  return (<section id="workshop" className="sec dark3d engineered"><div className="wrap"><h2 className="engineered-title">ENGINEERED WITH EXPERIENCE</h2>
    <div className="stage">{big ? <Scene3D /> : <svg className="fallback" viewBox="0 0 200 200" fill="none" stroke="#f59e0b"><circle cx="100" cy="100" r="80" strokeWidth="6" /><circle cx="100" cy="100" r="30" strokeWidth="4" />{Array.from({ length: 12 }).map((_, i) => <circle key={i} cx={100 + 62 * Math.cos(i * Math.PI / 6)} cy={100 + 62 * Math.sin(i * Math.PI / 6)} r="3" />)}</svg>}</div>
    <div className="callouts">{call.map(x => { const [a, b] = x.split("|"); return <div key={x}><b>{a}</b><span>{b}</span></div>; })}</div></div></section>);
}
const why = ["15 YEARS OF EXPERIENCE", "PROFESSIONAL AUTOMOTIVE SERVICE", "ENGINEERING-FOCUSED APPROACH", "VEHICLE DIAGNOSTICS", "MAINTENANCE & REPAIR"];
const Why = () => (<section className="sec"><div className="wrap"><h2>WHY CHOOSE US</h2><ul className="why">{why.map(w => <li key={w}>{w}</li>)}</ul></div></section>);
const steps = ["VEHICLE INSPECTION", "DIAGNOSIS", "SERVICE DISCUSSION", "REPAIR / MAINTENANCE", "QUALITY CHECK", "VEHICLE DELIVERY"];
const Process = () => (<section className="sec alt"><div className="wrap"><h2>SERVICE PROCESS</h2><div className="steps">
  {steps.map((s, i) => (<motion.div key={s} className="step" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>
    <motion.span className="line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: i * .08, duration: .7 }} />
    <b>{String(i + 1).padStart(2, "0")}</b><h3>{s}</h3></motion.div>))}</div></div></section>);

function Gallery() {
  const [o, setO] = useState<number | null>(null);
  useEffect(() => { const k = (e: KeyboardEvent) => { if (o === null) return; if (e.key === "Escape") setO(null); if (e.key === "ArrowRight") setO((o + 1) % gallery.length); if (e.key === "ArrowLeft") setO((o + gallery.length - 1) % gallery.length); }; addEventListener("keydown", k); return () => removeEventListener("keydown", k); }, [o]);
  return (<section id="gallery" className="sec"><div className="wrap"><h2>GALLERY</h2>
    <div className="gal">{gallery.map((g, i) => <button key={g.title} onClick={() => setO(i)} aria-label={`Open ${g.title}`}><Photo src={g.src} alt={g.title} /><span>{g.title}</span></button>)}</div></div>
    {o !== null && <div className="lb" role="dialog" aria-modal onClick={() => setO(null)}>
      <button className="x" aria-label="Close">×</button><button className="nv l" aria-label="Previous" onClick={e => { e.stopPropagation(); setO((o + gallery.length - 1) % gallery.length); }}>‹</button>
      <div className="lb-content" onClick={e => e.stopPropagation()}><Photo src={gallery[o].src} alt={gallery[o].title} className="lb-img" /><p>{gallery[o].title}</p></div>
      <button className="nv r" aria-label="Next" onClick={e => { e.stopPropagation(); setO((o + 1) % gallery.length); }}>›</button></div>}</section>);
}

function Field({ n, l, t = "text", req, err }: { n: string; l: string; t?: string; req?: boolean; err?: string }) {
  return (<label>{l}{req && " *"}<input name={n} type={t} aria-invalid={!!err} /><em>{err}</em></label>);
}
function Contact() {
  const [err, setErr] = useState<Record<string, string>>({}); const [sent, setSent] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>; const x: Record<string, string> = {};
    if (!d.name?.trim()) x.name = "Enter your name.";
    if (!/^[+]?[0-9\s-]{10,14}$/.test(d.phone?.trim() || "")) x.phone = "Enter a valid phone number (10 digits).";
    if (d.email && !/^\S+@\S+\.\S+$/.test(d.email)) x.email = "Enter a valid email address.";
    if (!d.vehicle?.trim()) x.vehicle = "Enter your vehicle make and model.";
    if (!d.service) x.service = "Choose a service.";
    setErr(x); if (Object.keys(x).length) return;
    const body = `Name: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email}\nVehicle: ${d.vehicle}\nService: ${d.service}\n\n${d.message}`;
    window.open(whatsappUrl(`Hello Jhansi Automobiles Engineering Works, I would like to book a service.\n\n${body}`), "_blank", "noopener,noreferrer");
    setSent(true);
  }
  return (<section id="contact" className="sec alt"><div className="wrap two">
    <div><h2>CONTACT</h2><dl className="info"><dt>Business</dt><dd>{c.businessName}</dd><dt>Experience</dt><dd>{c.experience}</dd>
      <dt>Phone</dt><dd><a href={tel}>{c.phone}</a></dd><dt>Email</dt><dd><a href={mailto}>{c.email}</a></dd><dt>Address</dt><dd>{c.address}</dd><dt>Business Hours</dt><dd>{c.businessHours}</dd></dl>
      <div className="ctas"><a className="btn" href={tel}><PhoneIcon />CALL NOW</a><a className="btn ghost" href={mailto}>EMAIL US</a><a className="btn ghost" href={bookingWhatsappUrl} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />BOOK A SERVICE</a></div></div>
    <form id="form" noValidate onSubmit={submit}>
      <Field n="name" l="Name" req err={err.name} /><Field n="phone" l="Phone" t="tel" req err={err.phone} /><Field n="email" l="Email" t="email" err={err.email} /><Field n="vehicle" l="Vehicle" req err={err.vehicle} />
      <label>Service Required *<select name="service" defaultValue="" aria-invalid={!!err.service}><option value="" disabled>Select a service</option>{services.map(s => <option key={s[0]}>{s[0]}</option>)}<option>Other</option></select><em>{err.service}</em></label>
      <label>Message<textarea name="message" rows={4} /></label>
      <button className="btn" type="submit"><WhatsAppIcon />REQUEST SERVICE</button>
      {sent && <p className="ok" role="status">WhatsApp will open with your service request ready to send.</p>}</form></div></section>);
}
const Footer = () => (<footer><div className="wrap foot"><div><div className="logo">JHANSI <span>AUTOMOBILES</span><br />ENGINEERING WORKS</div><p>15 years of automotive experience in professional vehicle service and engineering.</p></div>
  <nav>{nav.map(([n, h]) => <a key={n} href={h}>{n}</a>)}</nav><div><a href={tel}>{c.phone}</a><br /><a href={mailto}>{c.email}</a></div></div>
  <p className="copy">© 2026 Jhansi Automobiles Engineering Works. All Rights Reserved.</p></footer>);
export default function Site() { return (<main><Hero /><Strip /><About /><Services /><Engineered /><Why /><Process /><Gallery /><Contact /><Footer /></main>); }
