"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, tel, img, siteConfig as c } from "@/lib/site-config";
import { MenuIcon, PhoneIcon } from "./icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const links = navLinks.map(({ label, href }) => (
    <Link key={href} href={href} aria-current={isActive(href) ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>
  ));

  return (
    <header className="top">
      <div className="top-in">
        <Link href="/" className="logo" aria-label={`${c.businessName} home`} onClick={() => setOpen(false)}>
          <img src={img.logo} alt={c.businessName} width={2083} height={755} />
        </Link>
        <nav aria-label="Main navigation" className="desk-nav">{links}</nav>
        <a className="btn dark sm header-call" href={tel}><PhoneIcon />CONTACT US</a>
        <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation menu" : "Open navigation menu"} onClick={() => setOpen(!open)}>
          <MenuIcon open={open} />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav"
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeOut" }}>
            <div className="mobile-nav-in">{links}<a className="btn dark" href={tel}><PhoneIcon />CONTACT US</a></div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
