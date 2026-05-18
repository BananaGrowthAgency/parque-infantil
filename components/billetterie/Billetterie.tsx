"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BilletterieHeader from "./BilletterieHeader";

type Option = {
  id: string;
  label: string;
  description: string;
  price: number;
};

type Group = {
  id: string;
  title: string;
  subtitle?: string;
  emoji: string;
  accent: string;
  bg: string;
  border: string;
  shadow: string;
  options: Option[];
};

const GROUPS: Group[] = [
  {
    id: "1-3",
    title: "Enfants 1 à 3 ans",
    subtitle: "Entrée individuelle ou carte 10 entrées",
    emoji: "🧒",
    accent: "#7B35A0",
    bg: "#F5EEFF",
    border: "border-lk-purple",
    shadow: "shadow-clay-purple",
    options: [
      {
        id: "entree-1-3",
        label: "Entrée 1–3 ans",
        description: "Web · Durée illimitée · Valable 1 an à partir de l'achat",
        price: 7.5,
      },
      {
        id: "carte-1-3",
        label: "Carte 10 entrées 1–3 ans",
        description: "10 entrées · à conserver sur smartphone ou imprimer",
        price: 65,
      },
    ],
  },
  {
    id: "4-12",
    title: "Enfants 4 à 12 ans",
    subtitle: "Entrée individuelle ou carte 10 entrées",
    emoji: "🧗",
    accent: "#2E9E2E",
    bg: "#EAF8EA",
    border: "border-lk-green",
    shadow: "shadow-clay-green",
    options: [
      {
        id: "entree-4-12",
        label: "Entrée 4–12 ans",
        description: "Web · Durée illimitée · Valable 1 an à partir de l'achat",
        price: 10.5,
      },
      {
        id: "carte-4-12",
        label: "Carte 10 entrées 4–12 ans",
        description: "10 entrées · à conserver sur smartphone ou imprimer",
        price: 90,
      },
    ],
  },
  {
    id: "accompagnateur",
    title: "Accompagnateur",
    subtitle: "Adulte accompagnant",
    emoji: "👨‍👩‍👧",
    accent: "#E8731A",
    bg: "#FFF4EC",
    border: "border-lk-orange",
    shadow: "shadow-clay-orange",
    options: [
      {
        id: "accompagnateur",
        label: "Entrée accompagnateur",
        description: "Web · n'importe quel jour · durée libre · valable 1 an",
        price: 1,
      },
    ],
  },
];

const ALL_OPTIONS = GROUPS.flatMap((g) =>
  g.options.map((o) => ({ ...o, groupTitle: g.title, accent: g.accent }))
);

function formatPrice(price: number): string {
  return price % 1 === 0 ? `${price}` : price.toFixed(2).replace(".", ",");
}

export default function Billetterie() {
  const [qtys, setQtys] = useState<Record<string, number>>(
    Object.fromEntries(ALL_OPTIONS.map((o) => [o.id, 0]))
  );

  const change = (id: string, delta: number) =>
    setQtys((prev) => ({ ...prev, [id]: Math.max(0, prev[id] + delta) }));

  const total = ALL_OPTIONS.reduce((sum, o) => sum + o.price * qtys[o.id], 0);
  const totalItems = Object.values(qtys).reduce((a, b) => a + b, 0);

  return (
    <div className="max-w-5xl mx-auto px-6 pb-20">
      <BilletterieHeader />

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Groupes de billets */}
        <div className="flex-1 space-y-5 w-full">
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className={`rounded-clay-lg border-[3px] ${group.border} ${group.shadow} overflow-hidden bg-white`}
            >
              {/* En-tête coloré */}
              <div
                className="px-5 py-4 flex items-center gap-4"
                style={{ backgroundColor: group.accent }}
              >
                <div className="shrink-0 w-12 h-12 rounded-clay flex items-center justify-center text-2xl bg-white/95 shadow-clay-inset">
                  {group.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-fredoka font-extrabold text-white text-lg leading-tight">
                    {group.title}
                  </p>
                  {group.subtitle && (
                    <p className="font-nunito text-white/80 text-xs">{group.subtitle}</p>
                  )}
                </div>
              </div>

              {/* Options */}
              <div className="divide-y divide-gray-100" style={{ backgroundColor: group.bg }}>
                {group.options.map((opt) => (
                  <div
                    key={opt.id}
                    className="flex items-center gap-4 px-5 py-4 flex-wrap sm:flex-nowrap"
                  >
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-fredoka font-bold text-base leading-tight"
                        style={{ color: group.accent }}
                      >
                        {opt.label}
                      </p>
                      <p className="font-nunito text-xs text-gray-600 mt-0.5 leading-snug">
                        {opt.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <span
                        className="font-fredoka font-extrabold text-lg"
                        style={{ color: group.accent }}
                      >
                        {formatPrice(opt.price)} €
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => change(opt.id, -1)}
                          disabled={qtys[opt.id] === 0}
                          className="w-8 h-8 rounded-full font-extrabold text-white text-base flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-30"
                          style={{ backgroundColor: group.accent }}
                          aria-label="Diminuer"
                        >
                          −
                        </button>
                        <span
                          className="w-7 text-center font-fredoka font-bold text-base"
                          style={{ color: group.accent }}
                        >
                          {qtys[opt.id]}
                        </span>
                        <button
                          type="button"
                          onClick={() => change(opt.id, 1)}
                          className="w-8 h-8 rounded-full font-extrabold text-white text-base flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                          style={{ backgroundColor: group.accent }}
                          aria-label="Augmenter"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
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
                {ALL_OPTIONS.filter((o) => qtys[o.id] > 0).map((o) => (
                  <motion.div
                    key={o.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex justify-between items-center text-sm font-nunito text-gray-700 overflow-hidden"
                  >
                    <span className="truncate pr-2">
                      {qtys[o.id]}× {o.label}
                    </span>
                    <span className="font-bold shrink-0" style={{ color: o.accent }}>
                      {(o.price * qtys[o.id]).toFixed(2).replace(".", ",")} €
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
              {totalItems === 0
                ? "Sélectionnez vos billets"
                : `Commander — ${total.toFixed(2).replace(".", ",")} €`}
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
