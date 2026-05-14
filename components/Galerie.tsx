"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type Slide =
  | { type?: "image"; src: string; alt: string }
  | { type: "video"; src: string; alt: string };

const photos: Slide[] = [
  { src: "/images/tobogan-azul.jpg", alt: "Toboggans bleus" },
  { src: "/images/pelotas2.jpg",     alt: "Piscine à balles interactive" },
  { src: "/images/IMG_20251018_113459_1.jpg", alt: "Ludykid en action" },
  { src: "/images/seccion2.jpg",     alt: "Structure multi-jeux" },
  { src: "/images/autos.jpg",        alt: "Autos tamponneuses" },
  { src: "/images/1740403305572.jpg", alt: "Ambiance Ludykid" },
  { src: "/images/seccion1.jpg",     alt: "Bébé dans les balles" },
  { src: "/images/tunel.jpg",        alt: "Tunnel d'exploration" },
  { type: "video", src: "/images/VID_20260404_120342.mp4", alt: "Visite du parc" },
  { src: "/images/seccion3.jpg",     alt: "Trampolines" },
  { src: "/images/tobogan-tubo.jpg", alt: "Toboggan tube" },
  { src: "/images/cumple.png",       alt: "Fête d'anniversaire" },
  { src: "/images/107904131_565022047520507_1011703251537892967_n.jpg", alt: "Moments en famille" },
  { src: "/images/logo-foto.jpg",    alt: "Ludykid" },
  { src: "/images/seccion4.png",     alt: "Espace famille" },
];

const BRAND = "#2E9E2E";
const AUTOPLAY_MS = 4000;
const SWIPE_THRESHOLD = 60;

// Dimensiones paisaje (16:9 aprox)
const CARD_W = 580;
const CARD_H = 340;

export default function Galerie() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [drag, setDrag] = useState<{ startX: number; dx: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = photos.length;

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + total) % total),
    [total]
  );
  const goTo = useCallback((i: number) => setIndex(((i % total) + total) % total), [total]);

  // Autoplay
  useEffect(() => {
    if (paused || drag) return;
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, drag, go]);

  // Keyboard
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [go]);

  // Pointer / touch drag
  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setDrag({ startX: e.clientX, dx: 0 });
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag) return;
    setDrag({ ...drag, dx: e.clientX - drag.startX });
  };
  const onPointerUp = () => {
    if (!drag) return;
    if (drag.dx > SWIPE_THRESHOLD) go(-1);
    else if (drag.dx < -SWIPE_THRESHOLD) go(1);
    setDrag(null);
  };

  const offsetOf = (i: number) => {
    let d = i - index;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  };

  return (
    <section
      className="relative py-16 overflow-hidden bg-white"
    >
      {/* Halo verde suave detrás del carrusel — sin tocar el borde superior */}
      <div
        aria-hidden
        className="absolute inset-x-0 pointer-events-none"
        style={{
          top: "120px",
          bottom: "60px",
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, #eaf8ea 0%, transparent 70%)",
        }}
      />
      {/* Título — centrado, ancho contenido */}
      <div className="flex justify-center mb-10 px-6">
        <div className="inline-block relative">
          <div
            className="absolute inset-0 -skew-x-6 rounded shadow-lg"
            style={{ backgroundColor: BRAND }}
          />
          <h2 className="relative font-fredoka text-2xl md:text-3xl font-700 text-white px-8 py-2 tracking-wide">
            Ludykid en photos 📸
          </h2>
        </div>
      </div>

      {/* Carrusel — ancho total */}
      <div
        ref={containerRef}
        tabIndex={0}
        aria-roledescription="carousel"
        aria-label="Galerie Ludykid"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="relative outline-none select-none touch-pan-y w-full"
        style={{ height: CARD_H + 80, perspective: "1800px" }}
      >
        {/* Track 3D */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {photos.map((photo, i) => {
            const off = offsetOf(i);
            const abs = Math.abs(off);
            if (abs > 2) return null;

            const dragShift = drag ? drag.dx * 0.35 : 0;
            const translateX = off * (CARD_W * 0.72) + dragShift;
            const rotateY = off * -18;
            const scale = abs === 0 ? 1 : abs === 1 ? 0.84 : 0.68;
            const translateZ = abs === 0 ? 0 : -180 * abs;
            const opacity = abs === 0 ? 1 : abs === 1 ? 0.72 : 0.38;
            const zIndex = 10 - abs;
            const isCenter = off === 0;

            return (
              <button
                key={photo.src}
                type="button"
                onClick={() => (isCenter ? undefined : goTo(i))}
                aria-label={photo.alt}
                aria-current={isCenter}
                tabIndex={isCenter ? 0 : -1}
                className="absolute rounded-2xl overflow-hidden shadow-2xl bg-black cursor-pointer group"
                style={{
                  width: CARD_W,
                  height: CARD_H,
                  zIndex,
                  opacity,
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  transition: drag
                    ? "none"
                    : "transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease",
                  boxShadow: isCenter
                    ? "0 32px 64px -16px rgba(46,158,46,0.4), 0 20px 40px -20px rgba(0,0,0,0.35)"
                    : "0 16px 40px -16px rgba(0,0,0,0.45)",
                }}
              >
                {photo.type === "video" ? (
                  <video
                    src={photo.src}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay={isCenter}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    draggable={false}
                  />
                ) : (
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 580px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={i === 0}
                    draggable={false}
                  />
                )}

                {/* Icono play en vídeo lateral */}
                {photo.type === "video" && !isCenter && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-6 h-6 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Caption */}
                <div
                  className={`absolute inset-x-0 bottom-0 px-6 py-4 text-white font-fredoka text-base transition-opacity duration-500 ${
                    isCenter ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
                  }}
                >
                  {photo.alt}
                </div>

                {/* Borde brillante centro */}
                {isCenter && (
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none ring-4 ring-white/50"
                    aria-hidden
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Flecha izquierda */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Précédent"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg hover:scale-110 active:scale-95 transition-transform"
          style={{ backgroundColor: BRAND }}
        >
          ‹
        </button>

        {/* Flecha derecha */}
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Suivant"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg hover:scale-110 active:scale-95 transition-transform"
          style={{ backgroundColor: BRAND }}
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6 px-6" role="tablist" aria-label="Sélection photo">
        {photos.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              role="tab"
              aria-selected={active}
              aria-label={`Aller à la photo ${i + 1}`}
              onClick={() => goTo(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: active ? 28 : 8,
                backgroundColor: active ? BRAND : "#cfe9cf",
              }}
            />
          );
        })}
      </div>

      {/* Contador */}
      <div className="text-center mt-3 font-fredoka text-sm text-gray-400">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
    </section>
  );
}
