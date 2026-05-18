"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const VIDEOS = [
  "/images/resto-video-1.mp4",
  "/images/resto-video-2.mp4",
  "/images/resto-video-3.mp4",
];

const MASK = {
  WebkitMaskImage:
    "linear-gradient(to bottom, black 88%, rgba(0,0,0,0.55) 96%, transparent 100%)",
  maskImage:
    "linear-gradient(to bottom, black 88%, rgba(0,0,0,0.55) 96%, transparent 100%)",
};

export default function HeroRestauracion() {
  const reduce = useReducedMotion();
  const [vidIdx, setVidIdx] = useState(0);

  return (
    <section className="relative pt-16 bg-[#F4FBF4]">
      <div className="relative overflow-hidden" style={{ height: "72vh", minHeight: 500 }}>

        {/* Crossfade entre vídeos */}
        <AnimatePresence mode="sync">
          <motion.video
            key={vidIdx}
            src={VIDEOS[vidIdx]}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={() => setVidIdx((i) => (i + 1) % VIDEOS.length)}
            aria-label="Ludy'cafet chez Ludykid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={MASK}
          />
        </AnimatePresence>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(46,158,46,0.28) 60%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div className="absolute bottom-0 inset-x-0 h-20 sm:h-28 bg-gradient-to-b from-transparent to-[#F4FBF4] pointer-events-none" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-3xl">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="font-fredoka text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-xl"
            >
              Savourez la pause au{" "}
              <span className="inline-block px-3 py-1 rounded-clay bg-lk-yellow text-[#3A2A00] -rotate-2 shadow-clay-yellow">
                Ludy&apos;cafet
              </span>{" "}
              ☕
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
}
