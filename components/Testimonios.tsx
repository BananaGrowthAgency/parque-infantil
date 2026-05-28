"use client";

import { useEffect, useRef, useState } from "react";
import Doodle from "./Doodle";
import Wave from "./Wave";
import FadeInUp from "./ui/FadeInUp";
import SquiggleTitle from "./ui/SquiggleTitle";

export default function Testimonios({ nextBg = "#FFF4EC" }: { nextBg?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [load, setLoad] = useState(false);

  // Charge le widget Google Reviews (637 Ko) seulement quand la section approche du viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || load) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoad(true);
          obs.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [load]);

  // Injecte / réinitialise le script Elfsight une fois déclenché
  useEffect(() => {
    if (!load) return;
    const w = window as Window & { eapps?: { reinit?: () => void } };
    const existing = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (existing) {
      w.eapps?.reinit?.();
    } else {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [load]);

  return (
    <section ref={sectionRef} className="pt-20 pb-0 bg-white relative overflow-hidden">
      <div className="absolute top-8 left-6 opacity-20 animate-float">
        <Doodle type="star" color="#FFD600" size={65} />
      </div>
      <div className="absolute bottom-10 right-8 opacity-15 animate-float-slow">
        <Doodle type="cloud" color="#2E9E2E" size={80} />
      </div>
      <div className="absolute top-20 right-20 opacity-15 animate-spin-slow">
        <Doodle type="circle" color="#7B35A0" size={55} />
      </div>

      <FadeInUp className="mb-12 px-6">
        <SquiggleTitle color="#7B35A0">
          Les parents parlent mieux que nous{" "}
          <span style={{ color: "#FFD600" }}>💬</span>
        </SquiggleTitle>
      </FadeInUp>

      <div className="w-full px-0 relative z-10 min-h-[400px]">
        {load && <div className="elfsight-app-82bae877-7f5c-4732-ac4f-3cea8aa6ed5a" />}
      </div>

      <Wave fill={nextBg} bg="white" />
    </section>
  );
}
