"use client";

import { useState, useRef } from "react";

const SLOTS = [
  { start: "10:00", end: "12:30" },
  { start: "13:45", end: "17:00" },
  { start: "14:00", end: "17:15" },
  { start: "14:15", end: "17:30" },
  { start: "14:30", end: "17:30" },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
}

function nextDayLabel(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + 1);
  return d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
}

function nextDayValue(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

const TODAY = new Date().toISOString().split("T")[0];
const PRICE = 14.5;

export default function LudykidBooking() {
  const [participants, setParticipants] = useState(4);
  const [date, setDate] = useState(TODAY);
  const [selected, setSelected] = useState<string | null>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  function goToReservation() {
    window.open("https://ludykid.qweekle.com/shop/ludykid/booking?lang=fr", "_blank", "noopener,noreferrer");
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
            onClick={() => setParticipants((p) => Math.max(4, p - 1))}
            className="w-10 h-10 rounded-full bg-[#1877F2] text-white font-extrabold text-xl flex items-center justify-center shadow-clay-blue hover:scale-110 transition-transform active:scale-95"
          >
            −
          </button>
          <span className="w-12 text-center font-fredoka font-extrabold text-2xl text-[#1877F2]">
            {participants}
          </span>
          <button
            type="button"
            onClick={() => setParticipants((p) => Math.min(15, p + 1))}
            className="w-10 h-10 rounded-full bg-[#1877F2] text-white font-extrabold text-xl flex items-center justify-center shadow-clay-blue hover:scale-110 transition-transform active:scale-95"
          >
            +
          </button>
        </div>
        <span className="font-nunito text-sm text-gray-400">(min. 4 — max. 15 enfants)</span>
      </div>

      {/* Date */}
      <div className="flex items-center gap-4 flex-wrap">
        <span className="font-fredoka font-extrabold text-sm uppercase tracking-widest text-gray-500">
          Choisissez votre date
        </span>
        <button
          type="button"
          onClick={() => dateRef.current?.showPicker()}
          className="flex items-center gap-2 bg-[#1877F2] text-white font-fredoka font-bold px-4 py-2 rounded-clay shadow-clay-blue cursor-pointer hover:scale-[1.02] transition-transform select-none"
        >
          <span>📅</span>
          <input
            ref={dateRef}
            type="date"
            value={date}
            min={TODAY}
            onChange={(e) => { setDate(e.target.value); setSelected(null); }}
            onClick={(e) => e.stopPropagation()}
            className="bg-transparent border-none outline-none text-white font-fredoka font-bold cursor-pointer w-full pointer-events-none"
          />
        </button>
      </div>

      {/* Créneaux */}
      <div className="rounded-clay-lg border-[3px] border-[#1877F2] overflow-hidden shadow-clay-blue">
        <div className="bg-[#1877F2]/10 px-5 py-3 flex items-center justify-between flex-wrap gap-3">
          <p className="font-fredoka font-bold text-gray-700">
            Créneaux disponibles le{" "}
            <strong className="text-[#1877F2]">{formatDate(date)}</strong>
          </p>
          <button
            type="button"
            onClick={() => { setDate(nextDayValue(date)); setSelected(null); }}
            className="font-fredoka font-bold text-sm text-white bg-[#1877F2] px-4 py-1.5 rounded-clay shadow-clay-blue hover:scale-105 transition-transform"
          >
            {nextDayLabel(date)} »
          </button>
        </div>

        <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {SLOTS.map((slot) => {
            const key = slot.start;
            const isSelected = selected === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => { setSelected(key); goToReservation(); }}
                className={`flex flex-col items-center gap-1 px-3 py-3 rounded-clay border-2 font-fredoka transition-all duration-200 hover:scale-[1.03] active:scale-95 ${
                  isSelected
                    ? "bg-[#1877F2] border-[#1877F2] text-white shadow-clay-blue"
                    : "bg-white border-[#1877F2]/30 text-[#1877F2] hover:border-[#1877F2]"
                }`}
              >
                <span className="font-extrabold text-sm">{slot.start}</span>
                <span className="text-xs opacity-70">→ {slot.end}</span>
                <span className={`text-xs font-bold mt-1 ${isSelected ? "text-white/80" : "text-gray-400"}`}>
                  à partir de {PRICE.toFixed(2).replace(".", ",")} €/pers.
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex justify-end px-4 pb-4">
          <button
            type="button"
            onClick={() => { setDate(nextDayValue(date)); setSelected(null); }}
            className="font-fredoka font-bold text-sm text-white bg-[#1877F2] px-4 py-1.5 rounded-clay shadow-clay-blue hover:scale-105 transition-transform"
          >
            {nextDayLabel(date)} »
          </button>
        </div>
      </div>
    </div>
  );
}
