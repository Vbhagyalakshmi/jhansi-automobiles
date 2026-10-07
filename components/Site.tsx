"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { tel, bookingWhatsappUrl, img } from "@/lib/site-config";
import Photo from "./Photo";
import ServicesCarousel from "./ServicesCarousel";
import Gallery from "./Gallery";
import { AboutPreview, ContactCta, Process, Strip, Why } from "./sections";
import { ArrowIcon, PhoneIcon, WhatsAppIcon } from "./icons";

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 120]);
  return (
    <section className="hero" aria-labelledby="hero-title">
      <motion.div className="hero-bg" style={{ y }}><Photo src={img.hero} alt="Automotive workshop with a vehicle and open bonnet" eager /></motion.div>
      <div className="hero-shade" />
      <div className="wrap hero-in">
        <motion.p className="kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>30+ YEARS OF AUTOMOTIVE EXPERIENCE</motion.p>
        <motion.h1 id="hero-title" className="hero-title" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35 }}>
          <span className="hero-title-primary">JHANSI AUTOMOBILES</span>
          <span className="hero-title-secondary">ENGINEERING WORKS</span>
        </motion.h1>
        <motion.p className="lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>Professional automobile service and engineering solutions backed by 30+ years of experience.</motion.p>
        <motion.div className="ctas" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <a className="btn" href={bookingWhatsappUrl} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />BOOK A SERVICE</a>
          <Link className="btn ghost" href="/services">EXPLORE SERVICES</Link>
          <a className="btn ghost" href={tel}><PhoneIcon />CONTACT US</a>
        </motion.div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  return (
    <section className="sec" aria-labelledby="gallery-title"><div className="wrap">
      <div className="sec-head">
        <div><p className="eyebrow">Inside the Workshop</p><h2 id="gallery-title">GALLERY</h2></div>
        <Link className="btn ghost sm" href="/gallery">VIEW FULL GALLERY<ArrowIcon /></Link>
      </div>
      <Gallery limit={6} />
    </div></section>
  );
}

export default function Site() {
  return (
    <>
      <Hero />
      <Strip />
      <AboutPreview />
      <ServicesCarousel />
      <Why />
      <Process />
      <GalleryPreview />
      <ContactCta />
    </>
  );
}
