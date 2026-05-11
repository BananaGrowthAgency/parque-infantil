"use client";

import { useState } from "react";
import Doodle from "./Doodle";

const horarios = [
  { dia: "Lunes – Viernes", hora: "14:00 – 19:30" },
  { dia: "Sábado", hora: "10:00 – 20:00" },
  { dia: "Domingo", hora: "10:00 – 19:00" },
  { dia: "Festivos", hora: "10:00 – 20:00" },
  { dia: "Vacaciones escolares", hora: "10:00 – 20:00" },
];

const asaber = [
  "Calcetines obligatorios para todos (disponibles en caja)",
  "Los adultos acompañantes entran gratis",
  "Menores de 1 año: acceso gratuito",
  "No se permite comida del exterior",
  "Taquillas gratuitas en recepción",
  "Aparcamiento gratuito con 200 plazas",
];

const faqs = [
  {
    pregunta: "¿Puedo quedarme dentro del parque con mi hijo?",
    respuesta: "Sí. Los adultos acompañantes entran gratis y tienen acceso a la zona de restauración. El acceso a las atracciones tiene un coste adicional de 5€.",
  },
  {
    pregunta: "¿Hay límite de aforo?",
    respuesta: "Sí, limitamos el aforo para garantizar la seguridad y comodidad de todos. En temporada alta recomendamos reservar con antelación.",
  },
  {
    pregunta: "¿Las atracciones son seguras para bebés?",
    respuesta: "Contamos con una zona específica adaptada para niños de 1 a 3 años, separada de las atracciones para mayores.",
  },
  {
    pregunta: "¿Cómo reservo un cumpleaños?",
    respuesta: "Puedes contactarnos por teléfono, email o redes sociales. Recomendamos reservar con al menos 3 semanas de antelación.",
  },
];

const bloques = [
  { emoji: "🕐", titulo: "Horarios", color: "#E8731A", bg: "#FFF4EC" },
  { emoji: "💡", titulo: "A saber", color: "#7B35A0", bg: "#F5EEFF" },
  { emoji: "📍", titulo: "Cómo llegar", color: "#2E9E2E", bg: "#EDFAED" },
  { emoji: "❓", titulo: "Preguntas frecuentes", color: "#2E6FCC", bg: "#EEF4FF" },
];

export default function InfosPratiques() {
  const [abierto, setAbierto] = useState<number | null>(null);

  return (
    <section id="infos" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Doodles */}
      <div className="absolute top-6 right-8 opacity-20 animate-float">
        <Doodle type="star" color="#FFD600" size={70} />
      </div>
      <div className="absolute bottom-8 left-6 opacity-15 animate-wiggle">
        <Doodle type="heart" color="#E8409A" size={60} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Título con el estilo "HORAIRES" del diseño */}
        <div className="text-center mb-12">
          <div className="inline-block relative mb-4">
            <div className="absolute inset-0 -skew-x-6 rounded" style={{ backgroundColor: "#E8731A" }} />
            <h2 className="relative font-fredoka text-3xl md:text-4xl font-700 text-white px-8 py-2 tracking-wide">
              INFORMACIÓN PRÁCTICA
            </h2>
          </div>
          <p className="font-nunito text-gray-500 mt-3">Todo lo que necesitas saber antes de venir</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Horarios */}
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

          {/* A saber */}
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
          {/* Dirección */}
          <div className="rounded-3xl p-7 border-2" style={{ backgroundColor: bloques[2].bg, borderColor: bloques[2].color + "40" }}>
            <h3 className="font-fredoka text-xl font-600 text-gray-800 mb-5 flex items-center gap-2">
              <span className="text-2xl">{bloques[2].emoji}</span>
              <span style={{ color: bloques[2].color }}>{bloques[2].titulo}</span>
            </h3>
            <div className="space-y-3 font-nunito text-sm text-gray-600 mb-5">
              <div>
                <p className="font-700 text-gray-800">Dirección</p>
                <p>Av. de la Diversión 123, 28001 Madrid</p>
              </div>
              <div>
                <p className="font-700 text-gray-800">Teléfono</p>
                <p>+34 900 123 456</p>
              </div>
              <div>
                <p className="font-700 text-gray-800">Email</p>
                <p>hola@ludykid.es</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden bg-white h-36 flex items-center justify-center border-2"
              style={{ borderColor: bloques[2].color + "30" }}>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 transition-transform hover:scale-105">
                <span className="text-4xl">🗺️</span>
                <span className="font-fredoka text-sm font-600" style={{ color: bloques[2].color }}>Ver en Google Maps →</span>
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
