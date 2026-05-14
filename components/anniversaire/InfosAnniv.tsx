"use client";

import { useState } from "react";
import Doodle from "../Doodle";

const HORARIOS = [
  {
    dia: "PERIODE SCOLAIRE",
    hora: "Mercredi, Samedi, Dimanche 10h–19h\nVendredi 15h–19h",
  },
  {
    dia: "VACANCES SCOLAIRES",
    hora:
      "Tous les jours 10h–19h\n(Fermé les 24, 25 et 31 décembre et le 1er janvier)\nJuillet et août : 10h–18h, fermé le dimanche",
  },
  { dia: "JOURS FÉRIÉS", hora: "Nous consulter" },
];

const ASABER = [
  { icon: "🧦", text: "Chaussettes obligatoires" },
  { icon: "👨‍👩‍👧", text: "Un adulte accompagnant obligatoire" },
  { icon: "🍰", text: "Goûter autorisé uniquement pour les anniversaires" },
  { icon: "🚫", text: "Pas de nourriture extérieure (hors formules autorisées)" },
];

const FAQS = [
  {
    q: "Comment réserver un anniversaire chez Ludykid ?",
    a: "Vous pouvez nous contacter par téléphone, e-mail ou directement en ligne. Nous recommandons de réserver au moins 3 semaines à l'avance.",
  },
  {
    q: "Combien de temps à l'avance faut-il réserver ?",
    a: "L'idéal est de réserver 3 à 4 semaines avant la date souhaitée, surtout pour les weekends et vacances scolaires.",
  },
  {
    q: "Peut-on modifier ou annuler une réservation ?",
    a: "Oui, les modifications sont possibles jusqu'à 7 jours avant la date. Au-delà, contactez-nous directement.",
  },
  {
    q: "Les parents doivent-ils rester sur place ?",
    a: "Pour les formules MaxiLudy, Ludykid et Libre, la présence d'un adulte est obligatoire. La formule Ludynight permet de déposer les enfants.",
  },
  {
    q: "Est-ce qu'un animateur est présent ?",
    a: "Oui, un animateur encadre les jeux et activités pour les formules MaxiLudy et Ludykid.",
  },
  {
    q: "Peut-on apporter son propre gâteau ou des collations ?",
    a: "Le gâteau est inclus dans les formules MaxiLudy et Ludykid. La formule Libre permet d'apporter son propre gâteau.",
  },
];

export default function InfosAnniv() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="infos" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-8 right-8 opacity-15 animate-float">
        <Doodle type="star" color="#FFD600" size={70} />
      </div>
      <div className="absolute bottom-10 left-6 opacity-15 animate-wiggle">
        <Doodle type="heart" color="#7B35A0" size={56} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-block relative mb-3">
            <div
              className="absolute inset-0 -skew-x-6 rounded"
              style={{ backgroundColor: "#E8731A" }}
            />
            <h2 className="relative font-fredoka text-3xl md:text-4xl font-700 text-white px-8 py-2 tracking-wide">
              INFOS PRATIQUES
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div
            className="rounded-3xl p-7 border-2"
            style={{ backgroundColor: "#FFF4EC", borderColor: "#E8731A40" }}
          >
            <h3 className="font-fredoka text-xl font-600 mb-5 flex items-center gap-2">
              <span className="text-2xl">🕐</span>
              <span style={{ color: "#E8731A" }}>Horaires</span>
            </h3>
            <ul className="space-y-4">
              {HORARIOS.map((h) => (
                <li key={h.dia}>
                  <p className="font-fredoka font-700 text-sm" style={{ color: "#E8731A" }}>
                    {h.dia}
                  </p>
                  <p className="font-nunito text-sm text-gray-600 whitespace-pre-line">
                    {h.hora}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-3xl p-7 border-2"
            style={{ backgroundColor: "#F5EEFF", borderColor: "#7B35A040" }}
          >
            <h3 className="font-fredoka text-xl font-600 mb-5 flex items-center gap-2">
              <span className="text-2xl">💡</span>
              <span style={{ color: "#7B35A0" }}>À savoir</span>
            </h3>
            <ul className="space-y-3">
              {ASABER.map((it) => (
                <li
                  key={it.text}
                  className="flex items-start gap-3 font-nunito text-sm text-gray-700"
                >
                  <span
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#7B35A020" }}
                  >
                    {it.icon}
                  </span>
                  {it.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="rounded-3xl p-7 border-2"
            style={{ backgroundColor: "#EDFAED", borderColor: "#2E9E2E40" }}
          >
            <h3 className="font-fredoka text-xl font-600 mb-5 flex items-center gap-2">
              <span className="text-2xl">📍</span>
              <span style={{ color: "#2E9E2E" }}>Adresse</span>
            </h3>
            <div className="font-nunito text-sm text-gray-600 mb-5 leading-relaxed">
              <p className="font-fredoka font-700 text-gray-800 text-base">Ruaudin, 72230</p>
              <p>Rte du Petit Bel Oeuvre</p>
              <p>ZAC des Hunaudières</p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 border-2 transition-transform hover:scale-105"
              style={{ borderColor: "#2E9E2E30" }}
            >
              <span className="text-2xl">🗺️</span>
              <span
                className="font-fredoka text-sm font-600"
                style={{ color: "#2E9E2E" }}
              >
                Voir sur Google Maps →
              </span>
            </a>
          </div>

          <div
            className="rounded-3xl p-7 border-2"
            style={{ backgroundColor: "#FFF8DB", borderColor: "#E8731A40" }}
          >
            <h3 className="font-fredoka text-xl font-600 mb-5 flex items-center gap-2">
              <span className="text-2xl">❓</span>
              <span style={{ color: "#E8731A" }}>Questions ?</span>
            </h3>
            <div className="space-y-2">
              {FAQS.map((f, i) => (
                <div
                  key={f.q}
                  className="rounded-2xl overflow-hidden bg-white border"
                  style={{ borderColor: "#E8731A25" }}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full text-left px-4 py-3 flex items-center justify-between gap-3 hover:bg-orange-50 transition-colors"
                    aria-expanded={open === i}
                  >
                    <span className="font-fredoka text-sm font-500 text-gray-800 leading-snug">
                      {f.q}
                    </span>
                    <span
                      className="font-fredoka font-700 flex-shrink-0 text-lg transition-transform"
                      style={{
                        color: "#E8731A",
                        transform: open === i ? "rotate(45deg)" : "none",
                      }}
                    >
                      +
                    </span>
                  </button>
                  {open === i && (
                    <div
                      className="px-4 pb-4 font-nunito text-sm text-gray-500 leading-relaxed border-t"
                      style={{ borderColor: "#E8731A25" }}
                    >
                      <p className="pt-3">{f.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
