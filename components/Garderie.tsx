"use client";

import Doodle from "./Doodle";
import Wave from "./Wave";
import FadeInUp from "./ui/FadeInUp";
import SquiggleTitle from "./ui/SquiggleTitle";
import ClayButton from "./ui/ClayButton";

const TARIFS = [
  { duration: "1 heure",   price: "10,00 €", note: "tarifs dégressifs" },
  { duration: "2 heures",  price: "18,00 €", note: "tarifs dégressifs" },
  { duration: "3 heures",  price: "24,00 €", note: "tarifs dégressifs" },
];


export default function Garderie() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#E8F7FF] pb-0">
        {/* Doodles */}
        <div className="absolute top-6 left-4 opacity-20 animate-float pointer-events-none">
          <Doodle type="star" color="#1877F2" size={64} />
        </div>
        <div className="absolute top-12 right-10 opacity-15 animate-wiggle pointer-events-none">
          <Doodle type="circle" color="#E8731A" size={52} />
        </div>
        <div className="absolute bottom-16 left-16 opacity-15 animate-float-slow pointer-events-none">
          <Doodle type="swirl" color="#2E9E2E" size={50} />
        </div>
        <div className="absolute bottom-8 right-20 opacity-20 animate-wiggle pointer-events-none" style={{ animationDelay: "0.6s" }}>
          <Doodle type="star2" color="#FFD600" size={48} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-16">
          {/* Accroche */}
          <FadeInUp y={16} delay={0.1} className="text-center mb-10 max-w-xl mx-auto">
            <p className="font-fredoka text-xl md:text-2xl text-gray-700 font-bold mb-3">
              Besoin de prendre du temps pour vous ?
            </p>
            <p className="font-nunito text-gray-500 text-base leading-relaxed">
              Dès 4 ans, un service garderie vous est proposé. Vos enfants seront sous la surveillance de nos animateurs pendant que vous soufflez.
            </p>
          </FadeInUp>

          {/* Carte tarifs */}
          <FadeInUp y={20} delay={0.35}>
            <div className="rounded-clay-lg border-[3px] border-[#1877F2] bg-white shadow-clay-blue overflow-hidden">
              {/* Header */}
              <div className="bg-[#1877F2] px-6 py-4 flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <h2 className="font-fredoka font-extrabold text-white text-xl">Tarifs</h2>
              </div>

              <div className="p-6 space-y-4">
                {TARIFS.map((t) => (
                  <div
                    key={t.duration}
                    className="flex items-center justify-between rounded-clay border-2 border-[#1877F2]/15 bg-[#F0F7FF] px-5 py-3"
                  >
                    <span className="font-fredoka font-bold text-gray-700 text-base">{t.duration}</span>
                    <div className="text-right">
                      <span className="font-fredoka font-extrabold text-[#1877F2] text-xl">{t.price}</span>
                      <span className="block font-nunito text-gray-400 text-xs">({t.note})</span>
                    </div>
                  </div>
                ))}

                <div className="rounded-clay border-2 border-lk-orange/25 bg-[#FFF8F0] px-5 py-3 flex items-start gap-3">
                  <span className="text-lg mt-0.5">ℹ️</span>
                  <div className="space-y-1">
                    <p className="font-nunito text-sm text-gray-600">
                      Renseignements à l&apos;accueil
                    </p>
                    <p className="font-nunito text-sm text-gray-500 italic">
                      L&apos;entrée du parc est comprise dans les tarifs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* CTA */}
          <FadeInUp y={12} delay={0.42} className="flex justify-center mt-10">
            <ClayButton href="/contact" tone="blue" size="lg">
              Renseignements
            </ClayButton>
          </FadeInUp>
        </div>
      </section>

      <Wave fill="#FFF8EC" bg="#E8F7FF" />

      {/* ── LES JEUDIS DES NOUNOUS ───────────────────────────── */}
      <section className="relative bg-[#FFF8EC] py-16 overflow-hidden">
        <div className="absolute top-6 right-8 opacity-15 animate-float pointer-events-none">
          <Doodle type="star" color="#E8731A" size={58} />
        </div>
        <div className="absolute bottom-8 left-10 opacity-15 animate-wiggle pointer-events-none">
          <Doodle type="heart" color="#7B35A0" size={50} />
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <FadeInUp y={18} className="text-center mb-8">
            <SquiggleTitle color="#E8731A">Les jeudis des Nounous 👩‍🍼</SquiggleTitle>
          </FadeInUp>

          <div className="flex flex-col md:flex-row gap-6 items-stretch">

            {/* Description */}
            <FadeInUp y={20} delay={0.1} className="w-full md:w-1/2">
              <div className="rounded-clay-lg border-[3px] border-lk-orange/30 bg-white shadow-clay-orange p-6 h-full space-y-4">
                <p className="font-nunito text-gray-600 text-base leading-relaxed">
                  Nous proposons aux assistantes maternelles un jeudi matin par mois l&apos;accès à notre parc
                  sur un temps qui leur est réservé, au tarif de 6&nbsp;€ par enfant de plus d&apos;un an.
                </p>
                <div className="flex items-center gap-3 rounded-clay border-2 border-lk-orange/20 bg-[#FFF4EC] px-4 py-3">
                  <span className="text-2xl">🕤</span>
                  <span className="font-fredoka font-bold text-gray-700 text-base">De 9h30 à 11h30</span>
                </div>
                <div className="flex items-start gap-3 rounded-clay border-2 border-[#7B35A0]/20 bg-[#F9F0FF] px-4 py-3">
                  <span className="text-2xl">📅</span>
                  <div>
                    <p className="font-fredoka font-bold text-[#7B35A0] text-sm uppercase tracking-wide mb-0.5">Prochaines dates</p>
                    <p className="font-nunito text-gray-700 text-sm font-bold">Jeudi 21 mai · Jeudi 16 juin</p>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Tarif + infos */}
            <FadeInUp y={20} delay={0.18} className="w-full md:w-1/2">
              <div className="rounded-clay-lg border-[3px] border-lk-orange bg-white shadow-clay-orange overflow-hidden h-full">
                <div className="bg-lk-orange px-6 py-4 flex items-center gap-3">
                  <span className="text-2xl">💰</span>
                  <h3 className="font-fredoka font-extrabold text-white text-xl">Tarif</h3>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between rounded-clay border-2 border-lk-orange/15 bg-[#FFF4EC] px-5 py-4">
                    <span className="font-fredoka font-bold text-gray-700 text-base">Par enfant</span>
                    <span className="font-fredoka font-extrabold text-lk-orange text-2xl">6,00 €</span>
                  </div>
                  <p className="font-nunito text-gray-400 text-xs italic text-center">
                    Pour les enfants de plus d&apos;un an
                  </p>
                  <div className="flex items-start gap-3 rounded-clay border-2 border-[#2E9E2E]/20 bg-[#EDFAED] px-4 py-3">
                    <span className="text-lg mt-0.5">ℹ️</span>
                    <p className="font-nunito text-sm text-gray-600">
                      Créneau réservé exclusivement aux assistantes maternelles et leurs enfants.
                    </p>
                  </div>
                  <div className="flex justify-center pt-2">
                    <ClayButton href="/contact" tone="orange" size="md">
                      Se renseigner
                    </ClayButton>
                  </div>
                </div>
              </div>
            </FadeInUp>

          </div>
        </div>
      </section>
    </>
  );
}
