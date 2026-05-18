"use client";

import { useState } from "react";
import BilletterieHeader from "../BilletterieHeader";

const PRICE_BASE = 10.5;
const PRICE_PHOTO = 2.5;
const PRICE_KIT = 1.5;
const PRICE_BONBONS = 2;

/* ─── DATA ─────────────────────────────────────────────── */

const PHOTO_OPTIONS = [
  { id: "non",   label: "Non merci !",        emoji: "✕",  extra: 0          },
  { id: "photo", label: "Photo anniversaire", emoji: "📸", extra: PRICE_PHOTO },
];

const KITS = [
  { id: "non",        label: "Non merci !",             emoji: "✕",  extra: 0        },
  { id: "princesse",  label: "Kit a/v/s princesse",     emoji: "👸", extra: PRICE_KIT },
  { id: "kpop",       label: "Kit a/v/s k-pop",         emoji: "🎤", extra: PRICE_KIT },
  { id: "football",   label: "Kit a/v/s football",      emoji: "⚽", extra: PRICE_KIT },
  { id: "vaiana",     label: "Kit a/v/s vaiana",         emoji: "🌺", extra: PRICE_KIT },
  { id: "stitch",     label: "Kit a/v/s stitch",         emoji: "💙", extra: PRICE_KIT },
  { id: "avengers",   label: "Kit a/v/s avengers",       emoji: "🦸", extra: PRICE_KIT },
  { id: "minecraft",  label: "Kit a/v/s minecraft",      emoji: "⛏️", extra: PRICE_KIT },
  { id: "licorne",    label: "Kit a/v/s licorne",        emoji: "🦄", extra: PRICE_KIT },
  { id: "gabbys",     label: "Kit a/v/s gabby's",        emoji: "🐱", extra: PRICE_KIT },
  { id: "spiderman",  label: "Kit a/v/s spiderman",      emoji: "🕷️", extra: PRICE_KIT },
  { id: "harry",      label: "Kit a/v/s harry potter",   emoji: "⚡", extra: PRICE_KIT },
  { id: "pokemon",    label: "Kit a/v/s pokémon",        emoji: "⚡", extra: PRICE_KIT },
  { id: "neiges",     label: "Kit a/v/s reine des neiges",emoji: "❄️", extra: PRICE_KIT },
  { id: "patrouille", label: "Kit a/v/s pat patrouille", emoji: "🐾", extra: PRICE_KIT },
];

const ANIMATIONS = [
  { id: "non",      label: "Non merci !",                          emoji: "✕",  extra: 0    },
  { id: "tresors",  label: "Chasse aux trésors (savoir lire)",      emoji: "🗺️", extra: 2.5  },
  { id: "escape",   label: "Animation escape game (à partir de 7 ans)", emoji: "🔐", extra: 2.5 },
  { id: "parcours", label: "Animation parcours interactifs",        emoji: "🏃", extra: 2.5  },
  { id: "peche",    label: "Animation pêche à la ligne",            emoji: "🎣", extra: 2.0  },
  { id: "bumper",   label: "Animation bumper",                      emoji: "🚗", extra: 2.0  },
  { id: "laser",    label: "Animation laser game",                  emoji: "🎯", extra: 2.5  },
];

const BONBONS_OPTIONS = [
  { id: "non",    label: "Non merci !",       emoji: "✕",  extra: 0            },
  { id: "sachet", label: "Sachet de bonbons", emoji: "🍬", extra: PRICE_BONBONS },
];

/* ─── SUB-COMPONENTS ───────────────────────────────────── */

function OptionCard({
  emoji, label, selected, extra, onClick,
}: {
  emoji: string; label: string; selected: boolean; extra?: number; onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center gap-1.5 p-2 rounded-clay border-2 text-center transition-all duration-200 hover:scale-[1.04] active:scale-95 min-w-[80px] ${
        selected ? "border-[#1877F2] bg-[#1877F2]/10 ring-2 ring-[#1877F2]/30" : "border-gray-200 bg-white hover:border-[#1877F2]/40"
      }`}
    >
      <span className="text-2xl leading-none">{emoji}</span>
      <span className={`font-nunito text-[10px] leading-tight ${selected ? "text-[#1877F2] font-bold" : "text-gray-600"}`}>
        {label}
      </span>
      {extra ? (
        <span className="font-fredoka font-bold text-[9px] text-lk-orange">+{extra.toFixed(2)} €</span>
      ) : null}
    </button>
  );
}

function SectionHeader({ title, right }: { title: string; right?: string }) {
  return (
    <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2 mb-4">
      <h3 className="font-fredoka font-extrabold text-gray-800 text-base">{title}</h3>
      {right && <span className="font-nunito text-sm text-gray-500">{right}</span>}
    </div>
  );
}

/* ─── MAIN COMPONENT ────────────────────────────────────── */

export default function ReservationLibreDetails({
  date, slot, slotEnd, participants: initParticipants,
}: {
  date: string; slot: string; slotEnd: string; participants: number;
}) {
  const [participants, setParticipants] = useState(initParticipants);
  const [photo, setPhoto] = useState("non");
  const [kit, setKit] = useState("non");
  const [animation, setAnimation] = useState("non");
  const [bonbons, setBonbons] = useState("non");

  const extraPhoto = photo !== "non" ? PRICE_PHOTO : 0;
  const extraKitTotal = kit !== "non" ? participants * PRICE_KIT : 0;
  const extraAnimation = ANIMATIONS.find(a => a.id === animation)?.extra ?? 0;
  const extraBonbons = bonbons !== "non" ? participants * PRICE_BONBONS : 0;
  const total = participants * PRICE_BASE + extraPhoto + extraKitTotal + extraAnimation + extraBonbons;

  const dateLabel = new Date(date + "T00:00:00").toLocaleDateString("fr-FR", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  return (
    <>
      <BilletterieHeader />

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-6">

        {/* Résumé réservation */}
        <div className="rounded-clay-lg border-[3px] border-[#1877F2] shadow-clay-blue bg-white overflow-hidden">
          <div className="bg-[#1877F2]/10 px-6 py-3 border-b border-[#1877F2]/20">
            <h2 className="font-fredoka font-extrabold text-[#1877F2] text-lg">Votre réservation</h2>
          </div>
          <div className="p-6 flex gap-5 flex-wrap">
            <div className="rounded-clay overflow-hidden shrink-0 border-2 border-lk-green/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/cumple.png" alt="Formule Libre" className="w-28 h-28 object-cover" />
            </div>
            <div className="flex-1 min-w-0 space-y-1">
              <p className="font-fredoka font-extrabold text-gray-900 text-lg">Formule Libre</p>
              <p className="font-nunito text-sm text-[#1877F2] font-bold">
                {dateLabel.charAt(0).toUpperCase() + dateLabel.slice(1)} · {slot}
              </p>
              <p className="font-nunito text-sm text-gray-600">
                La formule idéale pour personnaliser l'anniversaire à votre guise !
              </p>
              <p className="font-nunito text-xs text-gray-500">
                Nous vous fournissons la table et les cartons d'invitation, vous vous occupez de tout le reste !
              </p>
              <p className="font-nunito text-xs text-gray-400 mt-1">(10,50 € par enfant)</p>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="font-fredoka font-extrabold text-xs uppercase tracking-widest text-gray-500">
                Nombre de participants
              </span>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => setParticipants(p => Math.max(8, p - 1))}
                  className="w-8 h-8 rounded-full bg-[#1877F2] text-white font-extrabold text-lg flex items-center justify-center hover:scale-110 transition-transform">−</button>
                <span className="w-8 text-center font-fredoka font-extrabold text-xl text-[#1877F2]">{participants}</span>
                <button type="button" onClick={() => setParticipants(p => Math.min(15, p + 1))}
                  className="w-8 h-8 rounded-full bg-[#1877F2] text-white font-extrabold text-lg flex items-center justify-center hover:scale-110 transition-transform">+</button>
              </div>
            </div>
            <div className="text-right">
              <p className="font-nunito text-xs text-gray-400">Total</p>
              <p className="font-fredoka font-extrabold text-3xl text-gray-900">
                {total.toFixed(2).replace(".", ",")} €
              </p>
            </div>
          </div>
        </div>

        {/* Option Photo */}
        <div className="rounded-clay-lg border-[3px] border-gray-200 shadow-clay bg-white p-6">
          <SectionHeader title="Option Photo" right={PHOTO_OPTIONS.find(p => p.id === photo)?.label} />
          <p className="font-nunito text-xs text-gray-400 mb-4">*Inclus dans l'offre</p>
          <div className="flex flex-wrap gap-3">
            {PHOTO_OPTIONS.map(p => (
              <OptionCard key={p.id} emoji={p.emoji} label={p.label} extra={p.extra || undefined}
                selected={photo === p.id} onClick={() => setPhoto(p.id)} />
            ))}
          </div>
        </div>

        {/* Option Kit */}
        <div className="rounded-clay-lg border-[3px] border-gray-200 shadow-clay bg-white p-6">
          <SectionHeader title="Option Kit Assiette Verre Serviette"
            right={KITS.find(k => k.id === kit)?.label} />
          <div className="flex flex-wrap gap-3">
            {KITS.map(k => (
              <OptionCard key={k.id} emoji={k.emoji} label={k.label} extra={k.extra || undefined}
                selected={kit === k.id} onClick={() => setKit(k.id)} />
            ))}
          </div>
        </div>

        {/* Option Animation */}
        <div className="rounded-clay-lg border-[3px] border-gray-200 shadow-clay bg-white p-6">
          <SectionHeader title="Option Animation"
            right={ANIMATIONS.find(a => a.id === animation)?.label} />
          <div className="flex flex-wrap gap-3">
            {ANIMATIONS.map(a => (
              <OptionCard key={a.id} emoji={a.emoji} label={a.label} extra={a.extra || undefined}
                selected={animation === a.id} onClick={() => setAnimation(a.id)} />
            ))}
          </div>
        </div>

        {/* Option Bonbons */}
        <div className="rounded-clay-lg border-[3px] border-gray-200 shadow-clay bg-white p-6">
          <SectionHeader title="Option Sachets de Bonbons (130g)"
            right={BONBONS_OPTIONS.find(b => b.id === bonbons)?.label} />
          <div className="flex flex-wrap gap-3">
            {BONBONS_OPTIONS.map(b => (
              <OptionCard key={b.id} emoji={b.emoji} label={b.label} extra={b.extra || undefined}
                selected={bonbons === b.id} onClick={() => setBonbons(b.id)} />
            ))}
          </div>
        </div>

        {/* Barre CTA fixe */}
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-sm border-t-2 border-gray-100 shadow-clay px-6 py-4 flex items-center justify-center gap-8">
          <div className="text-right">
            <p className="font-nunito text-xs text-gray-400 uppercase tracking-wide">Total</p>
            <p className="font-fredoka font-extrabold text-2xl text-gray-900">
              {total.toFixed(2).replace(".", ",")} €
            </p>
          </div>
          <button
            type="button"
            className="group inline-flex items-center gap-2 pl-6 pr-2.5 py-2.5 rounded-full bg-[#1877F2] shadow-clay-blue font-fredoka font-extrabold text-white text-base hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 active:scale-100"
          >
            🛒 Ajouter au panier
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-[#1877F2] transition-transform duration-300 group-hover:-rotate-45 group-hover:scale-110">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </button>
        </div>

      </div>
    </>
  );
}
