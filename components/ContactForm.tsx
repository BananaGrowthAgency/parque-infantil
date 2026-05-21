"use client";

import { useState } from "react";
import Doodle from "./Doodle";
import SquiggleTitle from "./ui/SquiggleTitle";
import ClayButton from "./ui/ClayButton";
import FadeInUp from "./ui/FadeInUp";
export default function ContactForm() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="relative max-w-2xl mx-auto px-6">
      {/* Doodles décoratifs */}
      <div className="absolute -top-4 -left-8 opacity-20 animate-float pointer-events-none">
        <Doodle type="star" color="#E8731A" size={64} />
      </div>
      <div className="absolute top-20 -right-6 opacity-15 animate-wiggle pointer-events-none">
        <Doodle type="circle" color="#7B35A0" size={52} />
      </div>
      <div className="absolute bottom-10 -left-4 opacity-15 animate-float-slow pointer-events-none">
        <Doodle type="swirl" color="#2E9E2E" size={48} />
      </div>

      <FadeInUp y={20} className="mb-10 text-center">
        <SquiggleTitle color="#E8731A">Nous contacter 💬</SquiggleTitle>
        <p className="font-nunito text-gray-500 text-sm mt-3">
          Une question ? Une demande spéciale ? On vous répond vite !
        </p>
      </FadeInUp>

      {sent ? (
        <FadeInUp y={16}>
          <div className="rounded-clay-lg border-[3px] border-[#2E9E2E] bg-white shadow-clay-green p-10 text-center space-y-4">
            <span className="text-6xl">🎉</span>
            <p className="font-fredoka font-extrabold text-2xl text-[#2E9E2E]">
              Message envoyé !
            </p>
            <p className="font-nunito text-gray-500 text-sm">
              Merci {nom}, on reviendra vers vous très vite.
            </p>
          </div>
        </FadeInUp>
      ) : (
        <FadeInUp y={24} delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-clay-lg border-[3px] border-lk-orange/30 bg-white shadow-clay-orange p-8 space-y-6"
          >
            {/* Nom */}
            <div className="space-y-1.5">
              <label className="font-fredoka font-bold text-gray-700 text-sm" htmlFor="nom">
                Votre nom <span className="text-red-400">*</span>
              </label>
              <input
                id="nom"
                type="text"
                required
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="ex. Marie Dupont"
                className="w-full rounded-clay border-2 border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-800 placeholder-gray-300 outline-none transition-all focus:border-lk-orange focus:bg-white focus:shadow-clay-sm"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="font-fredoka font-bold text-gray-700 text-sm" htmlFor="email">
                Adresse email <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ex. marie@email.com"
                className="w-full rounded-clay border-2 border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-800 placeholder-gray-300 outline-none transition-all focus:border-lk-orange focus:bg-white focus:shadow-clay-sm"
              />
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="font-fredoka font-bold text-gray-700 text-sm" htmlFor="message">
                Votre message
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Écrivez votre message ici…"
                className="w-full rounded-clay border-2 border-gray-200 bg-gray-50 px-4 py-3 font-nunito text-sm text-gray-800 placeholder-gray-300 outline-none transition-all focus:border-lk-orange focus:bg-white focus:shadow-clay-sm resize-none"
              />
            </div>

            <div className="flex justify-end">
              <ClayButton type="submit" tone="orange" size="md">
                Valider ✉️
              </ClayButton>
            </div>
          </form>
        </FadeInUp>
      )}
    </section>
  );
}
