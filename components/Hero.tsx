"use client";

import { motion, useReducedMotion } from "framer-motion";
import ClayButton from "./ui/ClayButton";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="inicio" className="relative pt-16 bg-[#FFF4EC]">
      <div className="relative h-[78vh] min-h-[520px] overflow-hidden">
        <video
          src="/images/hero-header.mp4"
          poster="/images/autos.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Enfants qui s'amusent à Ludykid"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 88%, rgba(0,0,0,0.55) 96%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 88%, rgba(0,0,0,0.55) 96%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-20 sm:h-28 bg-gradient-to-b from-transparent to-[#FFF4EC] pointer-events-none" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-3xl">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="font-fredoka text-4xl md:text-6xl font-extrabold text-white leading-tight mb-7 drop-shadow-xl"
            >
              Le parc indoor préféré des{" "}
              <span className="inline-block px-3 py-1 rounded-clay bg-lk-yellow text-[#3A2A00] -rotate-2 shadow-clay-yellow">
                enfants
              </span>{" "}
              au Mans
            </motion.h1>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex items-center justify-center gap-3 flex-wrap"
            >
              <ClayButton href="/anniversaire" tone="purple" size="lg">
                Réserver votre anniversaire
              </ClayButton>
              <ClayButton href="/billetterie" tone="orange" size="lg">
                Billetterie
              </ClayButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
