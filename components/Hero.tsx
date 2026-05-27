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
          <div className="text-center px-4 w-full max-w-4xl">

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
              className="font-fredoka text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4"
              style={{ textShadow: "0 0 6px rgba(0,0,0,0.9), 1px 1px 4px rgba(0,0,0,0.7)" }}
            >
              Ludykid Le Mans | Parc de jeux indoor{" "}
              <span className="inline-block px-3 py-1 rounded-clay bg-lk-yellow text-[#3A2A00] -rotate-2 shadow-clay-yellow" style={{ textShadow: "none" }}>
                enfants
              </span>{" "}
              (1–12 ans)
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="font-nunito text-sm md:text-base text-white/85 leading-relaxed max-w-2xl mx-auto mb-6"
              style={{ textShadow: "0 0 5px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)" }}
            >
              Plaine de jeux intérieure au Mans : Ludykid accueille les enfants de 1 à 12 ans avec 1200 m² d&apos;activités, anniversaires clé en main et espace restauration
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-xs sm:max-w-none mx-auto"
            >
              <ClayButton href="/anniversaire" tone="purple" size="lg" className="w-full sm:w-auto">
                Réserver votre anniversaire
              </ClayButton>
              <ClayButton href="https://ludykid.qweekle.com/shop/ludykid/ticketing?lang=fr" tone="orange" size="lg" className="w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
                Billetterie
              </ClayButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
