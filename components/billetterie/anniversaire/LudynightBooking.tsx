"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const TODAY = new Date().toISOString().split("T")[0];
const PRICE = 11;
const SLOT_START = "19:30";
const SLOT_END = "22:00";

function getNextLuydnight(): string {
  if (isLudynightDate(TODAY)) return TODAY;
  return nextLudynightAfter(addDays(TODAY, -1));
}

/* First Friday of the given month */
function firstFridayOfMonth(year: number, month: number): Date {
  const d = new Date(year, month, 1);
  const dow = d.getDay(); // 0=Sun … 5=Fri
  d.setDate(1 + ((5 - dow + 7) % 7));
  return d;
}

function isLudynightDate(dateStr: string): boolean {
  const d = new Date(dateStr + "T00:00:00");
  const ff = firstFridayOfMonth(d.getFullYear(), d.getMonth());
  return d.toDateString() === ff.toDateString();
}

function toDateStr(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function nextLudynightAfter(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  let ff = firstFridayOfMonth(d.getFullYear(), d.getMonth());
  if (ff <= d) {
    ff = firstFridayOfMonth(d.getFullYear(), d.getMonth() + 1);
  }
  return toDateStr(ff);
}

function addDays(dateStr: string, n: number): string {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + n);
  return toDateStr(d);
}

function formatDateLong(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("fr-FR", {
    weekday: "long", day: "numeric", month: "long",
  });
}

const NAVY = "#1877F2";

export default function LudynightBooking() {
  const [participants, setParticipants] = useState(15);
  const [date, setDate] = useState(getNextLuydnight);
  const [selected, setSelected] = useState(false);
  const dateRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const prevDay = addDays(date, -1);
  const nextDay = addDays(date, 1);
  const hasSlot = isLudynightDate(date);
  const nextLudy = nextLudynightAfter(date);

  function goToReservation() {
    const params = new URLSearchParams({
      date,
      slot: SLOT_START,
      end: SLOT_END,
      participants: String(participants),
    });
    router.push(`/billetterie/anniversaire/ludynight/reservation?${params.toString()}`);
  }

  return (
    <div className="space-y-8">

      {/* Participants */}
      <div className="flex items-center gap-5 flex-wrap">
        <span className="font-fredoka font-extrabold text-sm uppercase tracking-widest text-gray-500">
          Nombre de participants
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setParticipants((p) => Math.max(15, p - 1))}
            className="w-10 h-10 rounded-full text-white font-extrabold text-xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
            style={{ backgroundColor: NAVY, boxShadow: `0 4px 0 0 color-mix(in srgb, ${NAVY} 55%, black)` }}
          >
            −
          </button>
          <span className="w-12 text-center font-fredoka font-extrabold text-2xl" style={{ color: NAVY }}>
            {participants}
          </span>
          <button
            type="button"
            onClick={() => setParticipants((p) => p + 1)}
            className="w-10 h-10 rounded-full text-white font-extrabold text-xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
            style={{ backgroundColor: NAVY, boxShadow: `0 4px 0 0 color-mix(in srgb, ${NAVY} 55%, black)` }}
          >
            +
          </button>
        </div>
        <span className="font-nunito text-sm text-gray-400">(min. 15 enfants)</span>
      </div>

      {/* Date */}
      <div className="flex items-center gap-4 flex-wrap">
        <span className="font-fredoka font-extrabold text-sm uppercase tracking-widest text-gray-500">
          Choisissez votre date
        </span>
        <button
          type="button"
          onClick={() => dateRef.current?.showPicker()}
          className="flex items-center gap-2 text-white font-fredoka font-bold px-4 py-2 rounded-clay cursor-pointer hover:scale-[1.02] transition-transform select-none"
          style={{ backgroundColor: NAVY, boxShadow: `0 4px 0 0 color-mix(in srgb, ${NAVY} 55%, black)` }}
        >
          <span>📅</span>
          <input
            ref={dateRef}
            type="date"
            value={date}
            min={TODAY}
            onChange={(e) => { setDate(e.target.value); setSelected(false); }}
            onClick={(e) => e.stopPropagation()}
            className="bg-transparent border-none outline-none text-white font-fredoka font-bold cursor-pointer w-full pointer-events-none"
          />
        </button>
      </div>

      {/* Créneaux */}
      <div className="rounded-clay-lg border-[3px] overflow-hidden" style={{ borderColor: NAVY }}>

        {/* Navigation haut */}
        <div className="px-5 py-3 flex items-center justify-between gap-3" style={{ backgroundColor: `${NAVY}18` }}>
          <button
            type="button"
            onClick={() => { setDate(prevDay); setSelected(false); }}
            className="font-fredoka font-bold text-sm text-white px-4 py-1.5 rounded-clay hover:scale-105 transition-transform"
            style={{ backgroundColor: NAVY, boxShadow: `0 3px 0 0 color-mix(in srgb, ${NAVY} 55%, black)` }}
          >
            « {formatDateLong(prevDay)}
          </button>
          <button
            type="button"
            onClick={() => { setDate(nextDay); setSelected(false); }}
            className="font-fredoka font-bold text-sm text-white px-4 py-1.5 rounded-clay hover:scale-105 transition-transform"
            style={{ backgroundColor: NAVY, boxShadow: `0 3px 0 0 color-mix(in srgb, ${NAVY} 55%, black)` }}
          >
            {formatDateLong(nextDay)} »
          </button>
        </div>

        {/* Contenu */}
        <div className="p-6">
          {hasSlot ? (
            <div className="flex flex-col items-center gap-4">
              <p className="font-fredoka font-bold text-gray-700">
                Créneau disponible le{" "}
                <strong style={{ color: NAVY }}>{formatDateLong(date)}</strong>
              </p>
              <button
                type="button"
                onClick={() => { setSelected(true); goToReservation(); }}
                className={`flex flex-col items-center gap-1 px-8 py-4 rounded-clay border-2 font-fredoka transition-all duration-200 hover:scale-[1.03] active:scale-95 ${
                  selected ? "text-white" : "bg-white hover:border-opacity-100"
                }`}
                style={selected
                  ? { backgroundColor: NAVY, borderColor: NAVY }
                  : { borderColor: `${NAVY}55`, color: NAVY }}
              >
                <span className="font-extrabold text-lg">{SLOT_START}</span>
                <span className="text-sm opacity-70">→ {SLOT_END}</span>
                <span className={`text-sm font-bold mt-1 ${selected ? "text-white/80" : "text-gray-400"}`}>
                  {PRICE.toFixed(2).replace(".", ",")} €/pers.
                </span>
              </button>
            </div>
          ) : (
            <div className="text-center space-y-3 py-4">
              <p className="font-fredoka font-bold text-gray-600 text-base">
                Pas de créneau disponible le{" "}
                <strong style={{ color: NAVY }}>{formatDateLong(date)}</strong>
              </p>
              <p className="font-nunito text-sm text-gray-500">
                Prochaines disponibilités le{" "}
                <button
                  type="button"
                  onClick={() => { setDate(nextLudy); setSelected(false); }}
                  className="font-bold underline transition-opacity hover:opacity-70"
                  style={{ color: NAVY }}
                >
                  « {formatDateLong(nextLudy)} »
                </button>
              </p>
            </div>
          )}
        </div>

        {/* Navigation bas */}
        <div className="px-5 py-3 flex items-center justify-between gap-3 border-t border-gray-100">
          <button
            type="button"
            onClick={() => { setDate(prevDay); setSelected(false); }}
            className="font-fredoka font-bold text-sm text-white px-4 py-1.5 rounded-clay hover:scale-105 transition-transform"
            style={{ backgroundColor: NAVY, boxShadow: `0 3px 0 0 color-mix(in srgb, ${NAVY} 55%, black)` }}
          >
            « {formatDateLong(prevDay)}
          </button>
          <button
            type="button"
            onClick={() => { setDate(nextDay); setSelected(false); }}
            className="font-fredoka font-bold text-sm text-white px-4 py-1.5 rounded-clay hover:scale-105 transition-transform"
            style={{ backgroundColor: NAVY, boxShadow: `0 3px 0 0 color-mix(in srgb, ${NAVY} 55%, black)` }}
          >
            {formatDateLong(nextDay)} »
          </button>
        </div>
      </div>
    </div>
  );
}
