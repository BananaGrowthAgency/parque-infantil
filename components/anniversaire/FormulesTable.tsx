import Doodle from "../Doodle";
import FadeInUp from "../ui/FadeInUp";

const FORMULES = [
  {
    name: "MaxiLudy",
    price: "17,50€ / enfant",
    note: "De 4 à 15 enfants",
    color: "#E8731A",
    href: "/billetterie/anniversaire/maxiludy",
  },
  {
    name: "Ludykid",
    price: "14,50€ / enfant",
    note: "De 4 à 15 enfants",
    color: "#7B35A0",
    href: "/billetterie/anniversaire/ludykid",
  },
  {
    name: "Libre",
    price: "10,50€ /enfant",
    note: "De 8 à 15 enfants",
    color: "#2E9E2E",
    href: "/billetterie/anniversaire/libre",
  },
  {
    name: "Ludynight",
    price: "11,00€ / enfant",
    note: "Minimum 15 enfants",
    color: "#FFD600",
    textColor: "#3A2A00",
    href: "/billetterie/anniversaire/ludynight",
  },
];

// Convención de valores:
//   "✓"        → pastilla verde sola
//   "✕"        → pastilla roja sola
//   "✓ texto"  → pastilla verde + texto debajo
//   "texto"    → solo texto
const ROWS: { label: string; vals: string[] }[] = [
  { label: "Accès au parc", vals: ["Illimité", "Illimité", "Illimité", "Illimité"] },
  {
    label: "Animations",
    vals: [
      "Animation au choix (escape game, chasse au trésor, laser game…)",
      "Animation au choix (escape game, chasse au trésor, laser game…)",
      "✕",
      "✕",
    ],
  },
  {
    label: "Table",
    vals: [
      "✓ Table dressée avec thème au choix",
      "✓ Table dressée",
      "✓ Espace réservé",
      "✓ Espace réservé",
    ],
  },
  { label: "Cartons d'invitations", vals: ["✓", "✓", "✓", "✓"] },
  { label: "Gâteaux", vals: ["✓ Avec bougies scintillante", "✓ Avec bougies", "✕", "✕"] },
  {
    label: "Boissons",
    vals: [
      "✓ Sirop à l'eau a volonté + champomy 🍾",
      "✓ Sirop à l'eau a volonté",
      "✕",
      "✕",
    ],
  },
  { label: "Sachet de bonbon", vals: ["✓ 130g / enfants", "✓ 50g / enfants", "✕", "✕"] },
  { label: "Photo souvenir", vals: ["✓", "✕", "✕", "✕"] },
  { label: "1 jeton bumper offert / enfant", vals: ["✓", "✕", "✕", "✕"] },
  { label: "1 entrée offerte pour la star de la journée", vals: ["✓", "✕", "✕", "✕"] },
];

function CheckPill() {
  return (
    <span
      className="inline-flex items-center justify-center w-7 h-7 rounded-full text-white font-bold shadow-clay-sm"
      style={{ backgroundColor: "#2E9E2E" }}
    >
      ✓
    </span>
  );
}

function CrossPill() {
  return (
    <span
      className="inline-flex items-center justify-center w-7 h-7 rounded-full text-white font-bold shadow-clay-sm"
      style={{ backgroundColor: "#D93030" }}
    >
      ✕
    </span>
  );
}

function Cell({ v }: { v: string }) {
  if (v === "✓") return <CheckPill />;
  if (v === "✕") return <CrossPill />;
  if (v.startsWith("✓ ")) {
    return (
      <div className="flex flex-col items-center gap-2">
        <CheckPill />
        <span className="font-nunito text-xs text-gray-600 leading-snug text-center">
          {v.slice(2)}
        </span>
      </div>
    );
  }
  return <span className="font-nunito text-xs text-gray-600 leading-snug">{v}</span>;
}

export default function FormulesTable() {
  return (
    <section
      id="formules"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#FFF8EC" }}
    >
      <div className="absolute top-8 left-6 opacity-20 animate-float">
        <Doodle type="star" color="#E8731A" size={68} />
      </div>
      <div className="absolute top-20 right-12 opacity-15 animate-wiggle">
        <Doodle type="swirl" color="#7B35A0" size={70} />
      </div>
      <div className="absolute bottom-10 left-20 opacity-15 animate-float">
        <Doodle type="circle" color="#2E9E2E" size={50} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <FadeInUp delay={0.1}>
          <div className="bg-white rounded-clay-lg shadow-clay overflow-hidden">
            <div className="overflow-x-auto">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr style={{ backgroundColor: "#E8731A" }}>
                  <th className="text-left font-fredoka font-bold text-white px-5 py-4 text-sm">
                    Formules
                  </th>
                  {FORMULES.map((f) => (
                    <th
                      key={f.name}
                      className="px-3 py-4 text-center border-l border-white/20 align-top"
                    >
                      <div className="font-fredoka font-extrabold text-white text-base leading-tight">
                        {f.name}
                      </div>
                      <div className="font-fredoka font-bold text-white text-sm mt-1">
                        {f.price}
                      </div>
                      <div className="font-nunito text-white/85 text-[11px] mt-0.5">
                        {f.note}
                      </div>
                      <div className="mt-3 flex justify-center">
                        <a
                          href={f.href}
                          className="group inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-white font-fredoka font-bold text-[11px] leading-tight whitespace-nowrap transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 active:scale-95"
                          style={{
                            color: f.textColor ?? f.color,
                            boxShadow: `0 3px 0 0 color-mix(in srgb, ${f.color} 60%, black)`,
                          }}
                        >
                          Découvrir cette offre
                          <span
                            className="flex shrink-0 items-center justify-center w-4 h-4 rounded-full transition-transform duration-200 group-hover:-rotate-45"
                            style={{
                              backgroundColor: f.color,
                              color: f.textColor ?? "white",
                            }}
                          >
                            <svg
                              width="9"
                              height="9"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr key={r.label} className={i % 2 ? "bg-orange-50/40" : "bg-white"}>
                    <td className="px-5 py-3 font-fredoka font-bold text-gray-700 text-sm border-b border-gray-100 w-[22%]">
                      {r.label}
                    </td>
                    {r.vals.map((v, j) => (
                      <td
                        key={j}
                        className="px-4 py-3 text-center border-b border-gray-100 align-middle"
                      >
                        <Cell v={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <div className="mt-6 bg-white rounded-clay-lg shadow-clay-sm p-6 text-sm font-nunito text-gray-600 leading-relaxed">
            <p
              className="font-fredoka font-extrabold text-base md:text-lg leading-snug"
              style={{ color: "#E8731A" }}
            >
              Ludynight : Vendredi soir de 19h30 à 22h00
            </p>
            <p className="mt-2">
              Les parents peuvent apporter les collations, mais leur présence n&apos;est pas
              obligatoire : l&apos;animateur assure la surveillance des enfants.
            </p>
            <p
              className="mt-5 font-fredoka font-extrabold text-base md:text-lg leading-snug"
              style={{ color: "#E8731A" }}
            >
              MaxiLudy, Ludykid ou formule Libre
            </p>
            <p className="mt-2">
              La présence d&apos;un adulte accompagnant est obligatoire. 1€ par adulte
              supplémentaire au-delà de 2.
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
