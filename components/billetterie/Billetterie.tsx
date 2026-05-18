"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import BilletterieHeader from "./BilletterieHeader";

type Ticket = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  emoji: string;
  accent: string;
  bg: string;
  border: string;
  shadow: string;
};

const TICKETS: Ticket[] = [
  {
    id: "carte-1-3",
    title: "Carte 10 entrées",
    subtitle: "1 à 3 ans",
    description: "Carte de 10 entrées pour les 1–3 ans. Pensez à l'imprimer ou à la conserver sur votre smartphone !",
    price: 65,
    emoji: "🎟️",
    accent: "#7B35A0",
    bg: "#F5EEFF",
    border: "border-lk-purple",
    shadow: "shadow-clay-purple",
  },
  {
    id: "carte-4-12",
    title: "Carte 10 entrées",
    subtitle: "4 à 12 ans",
    description: "Carte de 10 entrées pour les 4–12 ans. Pensez à l'imprimer ou à la conserver sur votre smartphone !",
    price: 90,
    emoji: "🎟️",
    accent: "#2E9E2E",
    bg: "#EAF8EA",
    border: "border-lk-green",
    shadow: "shadow-clay-green",
  },
  {
    id: "accompagnateur",
    title: "Entrée accompagnateur",
    subtitle: "Web",
    description: "Billet accompagnateur — utilisable n'importe quel jour, pour la durée de votre choix. Valable 1 an à partir de la date d'achat.",
    price: 1,
    emoji: "👨‍👩‍👧",
    accent: "#E8731A",
    bg: "#FFF4EC",
    border: "border-lk-orange",
    shadow: "shadow-clay-orange",
  },
  {
    id: "entree-4-12",
    title: "Entrée 4–12 ans",
    subtitle: "Web · Durée illimitée",
    description: "Billet pour les enfants de 4 à 12 ans. Utilisable n'importe quel jour, pour la durée de votre choix. Valable 1 an à partir de la date d'achat.",
    price: 10.5,
    emoji: "🧗",
    accent: "#2E9E2E",
    bg: "#EAF8EA",
    border: "border-lk-green",
    shadow: "shadow-clay-green",
  },
  {
    id: "entree-1-3",
    title: "Entrée 1–3 ans",
    subtitle: "Web · Durée illimitée",
    description: "Billet pour les enfants de 1 à 3 ans. Utilisable n'importe quel jour, pour la durée de votre choix. Valable 1 an à partir de la date d'achat.",
    price: 7.5,
    emoji: "🧒",
    accent: "#7B35A0",
    bg: "#F5EEFF",
    border: "border-lk-purple",
    shadow: "shadow-clay-purple",
  },
];

export default function Billetterie() {
  const pathname = usePathname();
  const [qtys, setQtys] = useState<Record<string, number>>(
    Object.fromEntries(TICKETS.map((t) => [t.id, 0]))
  );

  const change = (id: string, delta: number) =>
    setQtys((prev) => ({ ...prev, [id]: Math.max(0, prev[id] + delta) }));

  const total = TICKETS.reduce((sum, t) => sum + t.price * qtys[t.id], 0);
  const totalItems = Object.values(qtys).reduce((a, b) => a + b, 0);

  return (
    <div className="max-w-5xl mx-auto px-6 pb-20">

      <BilletterieHeader />

      <div className="flex flex-col lg:flex-row gap-8 items-start">

        {/* Liste de billets */}
        <div className="flex-1 space-y-4">
          {TICKETS.map((ticket, i) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className={`rounded-clay-lg border-[3px] ${ticket.border} ${ticket.shadow} overflow-hidden`}
              style={{ backgroundColor: ticket.bg }}
            >
              <div className="flex items-start gap-4 p-5">
                {/* Emoji / icono */}
                <div
                  className="shrink-0 w-14 h-14 rounded-clay flex items-center justify-center text-2xl shadow-clay-inset bg-white/70"
                >
                  {ticket.emoji}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-fredoka font-extrabold text-lg leading-tight" style={{ color: ticket.accent }}>
                    {ticket.title}
                  </p>
                  <p className="font-fredoka font-bold text-sm mb-1" style={{ color: ticket.accent + "BB" }}>
                    {ticket.subtitle}
                  </p>
                  <p className="font-nunito text-sm text-gray-600 leading-relaxed">
                    {ticket.description}
                  </p>
                </div>

                {/* Precio + cantidad */}
                <div className="shrink-0 flex flex-col items-end gap-3">
                  <span className="font-fredoka font-extrabold text-xl" style={{ color: ticket.accent }}>
                    {ticket.price % 1 === 0 ? ticket.price : ticket.price.toFixed(2).replace(".", ",")} €
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => change(ticket.id, -1)}
                      disabled={qtys[ticket.id] === 0}
                      className="w-9 h-9 rounded-full font-extrabold text-white text-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-30"
                      style={{ backgroundColor: ticket.accent }}
                      aria-label="Diminuer"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-fredoka font-bold text-lg" style={{ color: ticket.accent }}>
                      {qtys[ticket.id]}
                    </span>
                    <button
                      type="button"
                      onClick={() => change(ticket.id, 1)}
                      className="w-9 h-9 rounded-full font-extrabold text-white text-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                      style={{ backgroundColor: ticket.accent }}
                      aria-label="Augmenter"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total sticky */}
        <div className="lg:w-64 w-full lg:sticky lg:top-24">
          <div className="rounded-clay-lg border-[3px] border-lk-yellow shadow-clay-yellow bg-[#FFF8CC] p-6">
            <h3 className="font-fredoka font-extrabold text-xl text-[#3A2A00] mb-4 flex items-center gap-2">
              🛒 Total
            </h3>

            <div className="space-y-2 mb-5">
              <AnimatePresence>
                {TICKETS.filter((t) => qtys[t.id] > 0).map((t) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex justify-between items-center text-sm font-nunito text-gray-700 overflow-hidden"
                  >
                    <span className="truncate pr-2">
                      {qtys[t.id]}× {t.title} ({t.subtitle})
                    </span>
                    <span className="font-bold shrink-0" style={{ color: t.accent }}>
                      {(t.price * qtys[t.id]).toFixed(2).replace(".", ",")} €
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>

              {totalItems === 0 && (
                <p className="font-nunito text-sm text-gray-400 italic text-center py-2">
                  Aucun billet sélectionné
                </p>
              )}
            </div>

            <div className="border-t-2 border-[#E8C800] pt-4 flex justify-between items-center mb-5">
              <span className="font-fredoka font-bold text-[#3A2A00]">Total</span>
              <span className="font-fredoka font-extrabold text-2xl text-[#3A2A00]">
                {total.toFixed(2).replace(".", ",")} €
              </span>
            </div>

            <button
              type="button"
              disabled={totalItems === 0}
              className="w-full py-3 rounded-clay font-fredoka font-extrabold text-base text-[#3A2A00] shadow-clay-yellow transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ backgroundColor: "#FFD600" }}
            >
              {totalItems === 0 ? "Sélectionnez vos billets" : `Commander — ${total.toFixed(2).replace(".", ",")} €`}
            </button>

            <p className="font-nunito text-xs text-gray-400 text-center mt-3">
              Paiement sécurisé · CB, espèces, chèques vacances
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
