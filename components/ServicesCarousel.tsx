"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Photo from "./Photo";
import { ArrowIcon, ChevronIcon } from "./icons";
import { services } from "@/lib/site-config";

const SPEED = 36; // px per second
const RESUME_DELAY = 2500;
const items = [...services, ...services];

export default function ServicesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const hovering = useRef(false);
  const holdUntil = useRef(0);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  const hold = (ms = RESUME_DELAY) => { holdUntil.current = performance.now() + ms; };
  const loopWidth = (el: HTMLElement) => {
    const first = el.children[0] as HTMLElement | undefined;
    const clone = el.children[services.length] as HTMLElement | undefined;
    return first && clone ? clone.offsetLeft - first.offsetLeft : 0;
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let last = performance.now();
    let pos = el.scrollLeft;
    const tick = (now: number) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;
      const paused = hovering.current || drag.current.active || now < holdUntil.current || document.hidden;
      if (paused) {
        pos = el.scrollLeft;
      } else {
        if (Math.abs(el.scrollLeft - pos) > 1.5) pos = el.scrollLeft;
        const loop = loopWidth(el);
        pos += SPEED * dt;
        if (loop && pos >= loop) pos -= loop;
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const step = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[0] as HTMLElement;
    const distance = card.offsetWidth + 20;
    hold(RESUME_DELAY + 600);
    if (dir === -1 && el.scrollLeft < distance) el.scrollLeft += loopWidth(el);
    el.scrollBy({ left: dir * distance, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    holdUntil.current = Infinity;
    if (e.pointerType === "mouse" && e.button === 0 && trackRef.current) {
      drag.current = { active: true, startX: e.clientX, startScroll: trackRef.current.scrollLeft, moved: false };
    }
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!drag.current.active || !el) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 5) { drag.current.moved = true; el.classList.add("dragging"); }
    if (drag.current.moved) el.scrollLeft = drag.current.startScroll - dx;
  };
  const endDrag = () => {
    drag.current.active = false;
    trackRef.current?.classList.remove("dragging");
    hold();
  };

  return (
    <section className="sec alt" aria-labelledby="services-title">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="eyebrow">What We Do</p>
            <h2 id="services-title">SERVICES</h2>
          </div>
          <div className="car-controls">
            <button type="button" className="icon-btn" aria-label="Previous services" onClick={() => step(-1)}><ChevronIcon dir="left" /></button>
            <button type="button" className="icon-btn" aria-label="Next services" onClick={() => step(1)}><ChevronIcon /></button>
            <Link className="btn ghost sm" href="/services">ALL SERVICES</Link>
          </div>
        </div>
        <div
          ref={trackRef}
          className="car-track"
          role="region"
          aria-roledescription="carousel"
          aria-label="Our services. Scroll horizontally to see more."
          onPointerEnter={(e) => { if (e.pointerType === "mouse") hovering.current = true; }}
          onPointerLeave={() => { hovering.current = false; if (drag.current.active) endDrag(); }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onTouchStart={() => { holdUntil.current = Infinity; }}
          onTouchEnd={() => hold()}
          onWheel={() => hold()}
          onFocus={() => { holdUntil.current = Infinity; }}
          onBlur={() => hold()}
          onClickCapture={(e) => { if (drag.current.moved) { e.preventDefault(); e.stopPropagation(); drag.current.moved = false; } }}
        >
          {items.map((s, i) => {
            const clone = i >= services.length;
            return (
              <motion.div key={`${s.slug}-${i}`} className="car-item" whileHover={{ y: -6 }} aria-hidden={clone || undefined}>
                <Link href={`/services#${s.slug}`} className="card" tabIndex={clone ? -1 : undefined} draggable={false}>
                  <Photo src={s.image} alt={clone ? "" : s.title} className="card-img" />
                  <div className="card-b">
                    <i>{String((i % services.length) + 1).padStart(2, "0")}</i>
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                    <span className="arrow" aria-hidden="true"><ArrowIcon /></span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
