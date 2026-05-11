"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const photos = [
  { src: "/images/tobogan-azul.jpg",  alt: "Toboggans bleus" },
  { src: "/images/pelotas2.jpg",      alt: "Piscine à balles interactive" },
  { src: "/images/seccion2.jpg",      alt: "Structure multi-jeux" },
  { src: "/images/autos.jpg",         alt: "Autos tamponneuses" },
  { src: "/images/seccion1.jpg",      alt: "Bébé dans les balles" },
  { src: "/images/tunel.jpg",         alt: "Tunnel d'exploration" },
  { src: "/images/seccion3.jpg",      alt: "Trampolines" },
  { src: "/images/tobogan-tubo.jpg",  alt: "Toboggan tube" },
  { src: "/images/cumple.png",        alt: "Fête d'anniversaire" },
  { src: "/images/logo-foto.jpg",     alt: "Ludykid" },
  { src: "/images/seccion4.png",      alt: "Espace famille" },
];

const CARD_W = 320; // px
const GAP    = 20;  // px — gap entre cards

export default function Galerie() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const scroll = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "next" ? CARD_W + GAP : -(CARD_W + GAP), behavior: "smooth" });
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 10);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Título centrado */}
        <div className="flex justify-center mb-10">
          <div className="inline-block relative">
            <div className="absolute inset-0 -skew-x-6 rounded" style={{ backgroundColor: "#2E6FCC" }} />
            <h2 className="relative font-fredoka text-2xl md:text-3xl font-700 text-white px-8 py-2 tracking-wide">
              Ludykid en photos 📸
            </h2>
          </div>
        </div>

        {/* Carrusel con flechas a los lados */}
        <div className="flex items-center gap-3">

          {/* Flecha izquierda */}
          <button
            onClick={() => scroll("prev")}
            disabled={!canPrev}
            className="w-11 h-11 flex-shrink-0 rounded-full flex items-center justify-center text-xl font-bold text-white transition-all disabled:opacity-25 hover:scale-110"
            style={{ backgroundColor: "#2E6FCC" }}
            aria-label="Précédent"
          >
            ‹
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="flex gap-5 overflow-x-auto pb-2 scroll-smooth flex-1"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {photos.map((photo, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
                style={{ width: CARD_W, height: 240, scrollSnapAlign: "start" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                  <span className="w-full text-center font-fredoka text-white text-sm py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {photo.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            onClick={() => scroll("next")}
            disabled={!canNext}
            className="w-11 h-11 flex-shrink-0 rounded-full flex items-center justify-center text-xl font-bold text-white transition-all disabled:opacity-25 hover:scale-110"
            style={{ backgroundColor: "#2E6FCC" }}
            aria-label="Suivant"
          >
            ›
          </button>

        </div>

        {/* Scrollbar invisible en WebKit */}
        <style>{`.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>
      </div>
    </section>
  );
}
