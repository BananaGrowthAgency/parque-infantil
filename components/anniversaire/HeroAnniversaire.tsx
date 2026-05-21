"use client";

import { motion, useReducedMotion } from "framer-motion";
import ClayButton from "../ui/ClayButton";

export default function HeroAnniversaire() {
  const reduce = useReducedMotion();

  return (
    <section className="relative pt-16 bg-[#FFF8EC]">
      <div className="relative overflow-hidden" style={{ height: "72vh", minHeight: 500 }}>
        <video
          src="/images/hero-anniversaire.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Anniversaire enfant chez Ludykid"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 88%, rgba(0,0,0,0.55) 96%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 88%, rgba(0,0,0,0.55) 96%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(123,53,160,0.35) 60%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div className="absolute bottom-0 inset-x-0 h-20 sm:h-28 bg-gradient-to-b from-transparent to-[#FFF8EC] pointer-events-none" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-3xl">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="font-fredoka text-3xl md:text-5xl font-extrabold text-white leading-tight mb-10 md:mb-7 drop-shadow-xl"
            >
              Anniversaire enfant{" "}
              <span className="inline-block px-3 py-1 rounded-clay bg-lk-yellow text-[#3A2A00] -rotate-2 shadow-clay-yellow">
                Le Mans
              </span>{" "}
              chez Ludykid
            </motion.h1>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
              className="inline-flex"
            >
              <ClayButton href="#formules" tone="orange" size="lg">
                Choisissez votre formule
              </ClayButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
