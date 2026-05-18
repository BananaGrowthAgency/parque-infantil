"use client";

import { useState } from "react";
import BilletterieHeader from "../BilletterieHeader";

const PRICE_BASE = 11;

export default function ReservationLudynightDetails({
  date, slot, participants: initParticipants,
}: {
  date: string; slot: string; participants: number;
}) {
  const [participants, setParticipants] = useState(initParticipants);

  const total = participants * PRICE_BASE;

  const dateLabel = new Date(date + "T00:00:00").toLocaleDateString("fr-FR", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  return (
    <>
      <BilletterieHeader />

      <div className="max-w-4xl mx-auto px-6 pb-20 space-y-6">

        {/* Résumé réservation */}
        <div className="rounded-clay-lg border-[3px] border-[#1877F2] shadow-clay-blue bg-white overflow-hidden">
          <div className="bg-[#1877F2]/10 px-6 py-3 border-b border-[#1877F2]/20">
            <h2 className="font-fredoka font-extrabold text-[#1877F2] text-lg">Votre réservation</h2>
          </div>
          <div className="p-6 flex gap-5 flex-wrap">
            <div className="rounded-clay overflow-hidden shrink-0 border-2 border-[#1A1A6E]/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/cumple.png" alt="Ludynight" className="w-28 h-28 object-cover" />
            </div>
            <div className="flex-1 min-w-0 space-y-1">
              <p className="font-fredoka font-extrabold text-gray-900 text-lg">Ludynight</p>
              <p className="font-nunito text-sm text-[#1877F2] font-bold">
                {dateLabel.charAt(0).toUpperCase() + dateLabel.slice(1)} · {slot}
              </p>
              <p className="font-nunito text-sm text-gray-600">
                Un vendredi par mois pour faire la fête entre petits potes !
              </p>
              <p className="font-nunito text-xs text-gray-500">
                Nous vous fournissons la table et les cartons d'invitation, vous vous occupez du reste !
              </p>
              <div className="font-nunito text-xs text-gray-400 mt-1 space-y-0.5">
                <p>(minimum 9 ans)</p>
                <p>(11,00 € par enfant)</p>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <span className="font-fredoka font-extrabold text-xs uppercase tracking-widest text-gray-500">
                Nombre de participants
              </span>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => setParticipants(p => Math.max(15, p - 1))}
                  className="w-8 h-8 rounded-full bg-[#1877F2] text-white font-extrabold text-lg flex items-center justify-center hover:scale-110 transition-transform">−</button>
                <span className="w-8 text-center font-fredoka font-extrabold text-xl text-[#1877F2]">{participants}</span>
                <button type="button" onClick={() => setParticipants(p => p + 1)}
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

        {/* CTA */}
        <div className="rounded-clay-lg border-[3px] border-gray-200 shadow-clay bg-white p-6 flex flex-col items-center gap-4">
          <div className="text-center">
            <p className="font-nunito text-xs text-gray-400 uppercase tracking-wide">Total</p>
            <p className="font-fredoka font-extrabold text-3xl text-gray-900">
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
