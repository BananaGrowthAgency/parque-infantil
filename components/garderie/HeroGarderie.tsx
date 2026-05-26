"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const IMAGES = [
  "/images/img_2469.jpg",
  "/images/img_2473.jpg",
  "/images/img_4094.jpg",
  "/images/img_4095.jpg",
  "/images/107518072_300358694337708_1572735779258761643_n.jpg",
];

const INTERVAL = 4500;

export default function HeroGarderie() {
  const reduce = useReducedMotion();
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setImgIdx((i) => (i + 1) % IMAGES.length), INTERVAL);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section className="relative bg-[#E8F7FF]">
      {/* La imagen cubre también los 64 px del navbar para evitar la franja de color en móvil */}
      <div className="relative overflow-hidden" style={{ height: "calc(72vh + 64px)", minHeight: "calc(500px + 64px)" }}>

        <AnimatePresence mode="sync" initial={false}>
          <motion.img
            key={imgIdx}
            src={IMAGES[imgIdx]}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.50) 0%, rgba(24,119,242,0.18) 60%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* pt-16 centra el texto en la zona visible debajo del navbar */}
        <div className="absolute inset-0 pt-16 flex items-center justify-center">
          <div className="text-center px-6 max-w-3xl">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="font-fredoka text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-xl"
            >
              La{" "}
              <span className="inline-block px-3 py-1 rounded-clay bg-lk-yellow text-[#3A2A00] -rotate-2 shadow-clay-yellow">
                garderie
              </span>{" "}
              🧸
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Gradiente FUERA del overflow-hidden — visible en todas las imágenes, sin recorte.
          rgba(232,247,255,0) = transparente exacto de #E8F7FF */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0"
        style={{
          height: "min(200px, 30vh)",
          background: "linear-gradient(to bottom, rgba(232,247,255,0), #E8F7FF 85%)",
        }}
      />
    </section>
  );
}
