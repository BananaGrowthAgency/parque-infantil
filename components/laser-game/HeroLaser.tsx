"use client";

import { motion, useReducedMotion } from "framer-motion";
import ClayButton from "../ui/ClayButton";

export default function HeroLaser() {
  const reduce = useReducedMotion();

  return (
    <section id="hero-laser" className="relative pt-16 bg-[#F5EEFF]">
      <div className="relative h-[68vh] min-h-[460px] overflow-hidden">
        <video
          src="/images/anniv-laser.mp4"
          poster="/images/seccion2.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Laser game enfant chez Ludykid"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 88%, rgba(0,0,0,0.55) 96%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 88%, rgba(0,0,0,0.55) 96%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-20 sm:h-28 bg-gradient-to-b from-transparent to-[#F5EEFF] pointer-events-none" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-3xl">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="font-fredoka text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5"
              style={{ textShadow: "0 0 6px rgba(0,0,0,0.9), 1px 1px 4px rgba(0,0,0,0.7)" }}
            >
              Ludykid |{" "}
              <span className="inline-block px-3 py-1 rounded-clay bg-lk-yellow text-[#3A2A00] -rotate-2 shadow-clay-yellow" style={{ textShadow: "none" }}>
                Laser Game
              </span>{" "}
              Enfant Le Mans
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
              className="font-nunito text-white/95 text-base md:text-lg max-w-2xl mx-auto mb-7 leading-relaxed"
              style={{ textShadow: "0 0 5px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)" }}
            >
              À la recherche d&apos;un laser game pour votre enfant au Mans ? Offrez-lui une activité ludique qui développe esprit d&apos;équipe et coordination chez Ludykid.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex items-center justify-center gap-3 flex-wrap"
            >
              <ClayButton href="https://ludykid.qweekle.com/shop/ludykid/anniversaires?lang=fr" tone="orange" size="lg" target="_blank" rel="noopener noreferrer">
                Réserver votre anniversaire
              </ClayButton>
              <ClayButton href="https://ludykid.qweekle.com/shop/ludykid/ticketing?lang=fr" tone="purple" size="lg" target="_blank" rel="noopener noreferrer">
                Billetterie
              </ClayButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
