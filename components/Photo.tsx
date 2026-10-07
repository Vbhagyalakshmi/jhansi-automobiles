"use client";
import { useState } from "react";

export default function Photo({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  const [ok, setOk] = useState(true);
  return (
    <div className={`ph ${className}`}>
      {ok && <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} draggable={false} onError={() => setOk(false)} />}
    </div>
  );
}
