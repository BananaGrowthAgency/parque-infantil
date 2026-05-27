"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ClayButton from "../ui/ClayButton";

const SLIDES = [
  { src: "/images/home/trampoline.jpg",  alt: "Espace trampoline chez Ludykid Le Mans" },
  { src: "/images/home/trampoline2.jpg", alt: "Enfant qui saute sur le trampoline Ludykid" },
];

export default function HeroTrampoline() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % SLIDES.length);
        setFading(false);
      }, 500);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-16">
      <div className="relative overflow-hidden" style={{ height: "62vh", minHeight: 440 }}>
        {SLIDES.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover transition-opacity duration-500"
            style={{
              objectPosition: "center 30%",
              opacity: i === current ? (fading ? 0 : 1) : 0,
            }}
          />
        ))}

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(232,115,26,0.28) 60%, rgba(255,248,236,0) 100%)",
          }}
        />
        <div className="absolute bottom-0 inset-x-0 h-20 sm:h-28 bg-gradient-to-b from-transparent to-[#FFF8EC] pointer-events-none" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-3xl">
            <h1 className="font-fredoka text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-xl">
              Ludykid | Espace Trampoline Enfant{" "}
              <span className="inline-block px-3 py-1 rounded-clay bg-lk-yellow text-[#3A2A00] -rotate-2 shadow-clay-yellow">
                Le Mans
              </span>
            </h1>
            <p className="font-nunito text-white/95 text-base md:text-lg mt-5 drop-shadow-lg">
              À la recherche d&apos;un espace trampoline pour votre enfant au Mans ? Offrez-lui un espace ludique et sécurisé pour se dépenser et s&apos;amuser chez Ludykid.
            </p>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 inset-x-0 flex justify-center gap-2 z-10">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => { setFading(false); setCurrent(i); }}
              aria-label={`Slide ${i + 1}`}
              className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              style={{ backgroundColor: i === current ? "#E8731A" : "rgba(255,255,255,0.5)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
