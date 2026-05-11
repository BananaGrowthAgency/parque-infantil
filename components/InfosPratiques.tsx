"use client";

import { useState } from "react";
import Doodle from "./Doodle";

const horarios = [
  { dia: "Lundi – Vendredi", hora: "14h00 – 19h30" },
  { dia: "Samedi", hora: "10h00 – 20h00" },
  { dia: "Dimanche", hora: "10h00 – 19h00" },
  { dia: "Jours fériés", hora: "10h00 – 20h00" },
  { dia: "Vacances scolaires", hora: "10h00 – 20h00" },
];

const asaber = [
  "Chaussettes obligatoires pour tous (disponibles à la caisse)",
  "Les adultes accompagnants entrent gratuitement",
  "Moins d'1 an : entrée gratuite",
  "Nourriture extérieure non autorisée",
  "Casiers gratuits à l'accueil",
  "Parking gratuit avec 200 places",
];

const faqs = [
  {
    pregunta: "Puis-je rester à l'intérieur du parc avec mon enfant ?",
    respuesta: "Oui. Les adultes accompagnants entrent gratuitement et ont accès à l'espace restauration. L'accès aux attractions est en supplément (5 €).",
  },
  {
    pregunta: "Y a-t-il une limite de capacité ?",
    respuesta: "Oui, nous limitons la capacité pour garantir la sécurité et le confort de tous. En haute saison, nous recommandons de réserver à l'avance.",
  },
  {
    pregunta: "Les attractions sont-elles adaptées aux bébés ?",
    respuesta: "Nous disposons d'un espace spécifique entièrement adapté aux enfants de 1 à 3 ans, séparé des attractions pour les plus grands.",
  },
  {
    pregunta: "Comment réserver un anniversaire ?",
    respuesta: "Vous pouvez nous contacter par téléphone, e-mail ou réseaux sociaux. Nous recommandons de réserver au moins 3 semaines à l'avance.",
  },
];

const bloques = [
  { emoji: "🕐", titulo: "Horaires", color: "#E8731A", bg: "#FFF4EC" },
  { emoji: "💡", titulo: "Bon à savoir", color: "#7B35A0", bg: "#F5EEFF" },
  { emoji: "📍", titulo: "Comment venir", color: "#2E9E2E", bg: "#EDFAED" },
  { emoji: "❓", titulo: "Questions fréquentes", color: "#2E6FCC", bg: "#EEF4FF" },
];

export default function InfosPratiques() {
  const [abierto, setAbierto] = useState<number | null>(null);

  return (
    <section id="infos" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-6 right-8 opacity-20 animate-float">
        <Doodle type="star" color="#FFD600" size={70} />
      </div>
      <div className="absolute bottom-8 left-6 opacity-15 animate-wiggle">
        <Doodle type="heart" color="#E8409A" size={60} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-block relative mb-4">
            <div className="absolute inset-0 -skew-x-6 rounded" style={{ backgroundColor: "#E8731A" }} />
            <h2 className="relative font-fredoka text-3xl md:text-4xl font-700 text-white px-8 py-2 tracking-wide">
              INFOS PRATIQUES
            </h2>
          </div>
          <p className="font-nunito text-gray-500 mt-3">Tout ce que vous devez savoir avant de venir</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Horaires */}
          <div className="rounded-3xl p-7 border-2" style={{ backgroundColor: bloques[0].bg, borderColor: bloques[0].color + "40" }}>
            <h3 className="font-fredoka text-xl font-600 text-gray-800 mb-5 flex items-center gap-2">
              <span className="text-2xl">{bloques[0].emoji}</span>
              <span style={{ color: bloques[0].color }}>{bloques[0].titulo}</span>
            </h3>
            <table className="w-full">
              <tbody>
                {horarios.map((h) => (
                  <tr key={h.dia} className="border-b border-orange-100 last:border-0">
                    <td className="py-2.5 font-nunito text-gray-600 text-sm">{h.dia}</td>
                    <td className="py-2.5 text-right font-fredoka font-600 text-sm" style={{ color: bloques[0].color }}>
                      {h.hora}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bon à savoir */}
          <div className="rounded-3xl p-7 border-2" style={{ backgroundColor: bloques[1].bg, borderColor: bloques[1].color + "40" }}>
            <h3 className="font-fredoka text-xl font-600 text-gray-800 mb-5 flex items-center gap-2">
              <span className="text-2xl">{bloques[1].emoji}</span>
              <span style={{ color: bloques[1].color }}>{bloques[1].titulo}</span>
            </h3>
            <ul className="space-y-3">
              {asaber.map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-nunito text-sm text-gray-600">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-fredoka font-700 text-white flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: bloques[1].color }}>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Comment venir */}
          <div className="rounded-3xl p-7 border-2" style={{ backgroundColor: bloques[2].bg, borderColor: bloques[2].color + "40" }}>
            <h3 className="font-fredoka text-xl font-600 text-gray-800 mb-5 flex items-center gap-2">
              <span className="text-2xl">{bloques[2].emoji}</span>
              <span style={{ color: bloques[2].color }}>{bloques[2].titulo}</span>
            </h3>
            <div className="space-y-3 font-nunito text-sm text-gray-600 mb-5">
              <div>
                <p className="font-700 text-gray-800">Adresse</p>
                <p>123 Avenue de l&apos;Aventure, 72000 Le Mans</p>
              </div>
              <div>
                <p className="font-700 text-gray-800">Téléphone</p>
                <p>+33 2 43 00 00 00</p>
              </div>
              <div>
                <p className="font-700 text-gray-800">E-mail</p>
                <p>contact@ludykid.fr</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden bg-white h-36 flex items-center justify-center border-2"
              style={{ borderColor: bloques[2].color + "30" }}>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 transition-transform hover:scale-105">
                <span className="text-4xl">🗺️</span>
                <span className="font-fredoka text-sm font-600" style={{ color: bloques[2].color }}>Voir sur Google Maps →</span>
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="rounded-3xl p-7 border-2" style={{ backgroundColor: bloques[3].bg, borderColor: bloques[3].color + "40" }}>
            <h3 className="font-fredoka text-xl font-600 text-gray-800 mb-5 flex items-center gap-2">
              <span className="text-2xl">{bloques[3].emoji}</span>
              <span style={{ color: bloques[3].color }}>{bloques[3].titulo}</span>
            </h3>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl overflow-hidden bg-white border" style={{ borderColor: bloques[3].color + "25" }}>
                  <button onClick={() => setAbierto(abierto === i ? null : i)}
                    className="w-full text-left px-4 py-3 flex items-center justify-between gap-3 hover:bg-blue-50 transition-colors">
                    <span className="font-fredoka text-sm font-500 text-gray-800 leading-snug">{faq.pregunta}</span>
                    <span className="font-fredoka font-700 flex-shrink-0 text-lg transition-transform"
                      style={{ color: bloques[3].color, transform: abierto === i ? "rotate(45deg)" : "none" }}>
                      +
                    </span>
                  </button>
                  {abierto === i && (
                    <div className="px-4 pb-4 font-nunito text-sm text-gray-500 leading-relaxed border-t"
                      style={{ borderColor: bloques[3].color + "25" }}>
                      <p className="pt-3">{faq.respuesta}</p>
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
