"use client";
import { motion } from "framer-motion";
import Photo from "./Photo";

export default function PageHero({ kicker, title, lead, image }: { kicker: string; title: string; lead: string; image: string }) {
  return (
    <section className="page-hero">
      <Photo src={image} alt="" className="page-hero-bg" eager />
      <div className="page-hero-shade" />
      <div className="wrap page-hero-in">
        <motion.p className="kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>{kicker}</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>{title}</motion.h1>
        <motion.p className="lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>{lead}</motion.p>
      </div>
    </section>
  );
}
