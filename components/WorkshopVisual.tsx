"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

export default function WorkshopVisual() {
  const [big, setBig] = useState(false);
  useEffect(() => {
    const m = matchMedia("(min-width:900px) and (prefers-reduced-motion:no-preference)");
    const update = () => setBig(m.matches);
    update();
    m.addEventListener("change", update);
    return () => m.removeEventListener("change", update);
  }, []);
  return (
    <div className="stage" aria-hidden="true">
      {big ? <Scene3D /> : (
        <svg className="fallback" viewBox="0 0 200 200" fill="none" stroke="#F59E0B">
          <circle cx="100" cy="100" r="80" strokeWidth="6" /><circle cx="100" cy="100" r="30" strokeWidth="4" />
          {Array.from({ length: 12 }).map((_, i) => <circle key={i} cx={100 + 62 * Math.cos(i * Math.PI / 6)} cy={100 + 62 * Math.sin(i * Math.PI / 6)} r="3" />)}
        </svg>
      )}
    </div>
  );
}
