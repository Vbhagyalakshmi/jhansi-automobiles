"use client";
import { useEffect, useRef, useState } from "react";
import Photo from "./Photo";
import { gallery } from "@/lib/site-config";

export default function Gallery({ limit }: { limit?: number }) {
  const items = limit ? gallery.slice(0, limit) : gallery;
  const n = items.length;
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const isOpen = open !== null;

  const close = () => { setOpen(null); opener.current?.focus(); };
  const prev = () => setOpen((p) => (p === null ? p : (p + n - 1) % n));
  const next = () => setOpen((p) => (p === null ? p : (p + 1) % n));

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(null); opener.current?.focus(); }
      if (e.key === "ArrowRight") setOpen((p) => (p === null ? p : (p + 1) % n));
      if (e.key === "ArrowLeft") setOpen((p) => (p === null ? p : (p + n - 1) % n));
    };
    addEventListener("keydown", onKey);
    return () => { removeEventListener("keydown", onKey); document.body.style.overflow = overflow; };
  }, [isOpen, n]);

  return (
    <>
      <div className="gal">
        {items.map((g, i) => (
          <button key={g.title} type="button" onClick={(e) => { opener.current = e.currentTarget; setOpen(i); }} aria-label={`Open ${g.title}`}>
            <Photo src={g.src} alt={g.title} /><span>{g.title}</span>
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="lb" role="dialog" aria-modal="true" aria-label={items[open].title} onClick={close}>
          <button ref={closeRef} type="button" className="x" aria-label="Close" onClick={close}>×</button>
          <button type="button" className="nv l" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
          <div className="lb-content" onClick={(e) => e.stopPropagation()}>
            <Photo src={items[open].src} alt={items[open].title} className="lb-img" eager />
            <p>{items[open].title} <span className="lb-count">{open + 1} / {n}</span></p>
          </div>
          <button type="button" className="nv r" aria-label="Next image" onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
        </div>
      )}
    </>
  );
}
