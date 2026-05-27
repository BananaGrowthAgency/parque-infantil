"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import ClayButton from "@/components/ui/ClayButton";

export default function HeroGarderie() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-[#FFF8EC]">
      {/* Imagen única — cubre los 64 px del navbar */}
      <div className="relative overflow-hidden" style={{ height: "calc(72vh + 64px)", minHeight: "calc(500px + 64px)" }}>
        <Image
          src="/images/garderie-hero.jpg"
          alt="Enfant dans la piscine à balles chez Ludykid"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 15%" }}
          sizes="100vw"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 55%, rgba(255,248,236,0) 100%)",
          }}
        />

        {/* Fade hacia la sección naranja — dentro del overflow-hidden para no tapar el contenido */}
        <div
          className="pointer-events-none absolute bottom-0 inset-x-0 z-10"
          style={{
            height: "min(200px, 30vh)",
            background: "linear-gradient(to bottom, rgba(255,248,236,0), #FFF8EC 85%)",
          }}
        />

        {/* Contenido centrado — z-20 para quedar por encima del gradiente */}
        <div className="absolute inset-0 pt-16 flex items-center justify-center z-20">
          <div className="text-center px-6 max-w-3xl">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="font-fredoka text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4"
              style={{ textShadow: "0 0 6px rgba(0,0,0,0.9), 1px 1px 4px rgba(0,0,0,0.7)" }}
            >
              Ludykid Le Mans | Garderie enfant parc indoor dès 4 ans
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="font-nunito text-white/90 text-base md:text-lg leading-relaxed mb-8"
              style={{ textShadow: "0 0 5px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)" }}
            >
              À la recherche d&apos;une garderie au Mans&nbsp;? Confiez votre enfant dès&nbsp;4&nbsp;ans
              à un parc indoor sécurisé avec jeux, activités ludiques et animateurs.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
            >
              <ClayButton href="/contact" tone="orange" size="lg">
                Profitez de l&apos;offre sur place
              </ClayButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
