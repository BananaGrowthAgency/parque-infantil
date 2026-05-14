import Image from "next/image";
import Doodle from "./Doodle";

const secciones = [
  {
    titulo: "Une aire de jeux intérieur pour les petits (1–3 ans)",
    descripcion:
      "Vos enfants découvrent le parc intérieur, explorent et s'amusent en toute sécurité, à leur rythme…\nEt vous profitez d'un moment de tranquillité.",
    items: [
      { icon: "🧩", label: "Motricité", desc: "parcours adapté, jeux de construction" },
      { icon: "🟡", label: "Éveil sensoriel", desc: "piscine à balles" },
      { icon: "🛝", label: "Glisse douce", desc: "toboggans" },
      { icon: "🛵", label: "Jeux mobiles", desc: "petites motos" },
      { icon: "🔒", label: "Exploration sécurisée", desc: "parcours aventures adapté" },
    ],
    precio: "Dès 3,50€ / enfant",
    imagen: "/images/seccion1.jpg",
    alt: "Bébé dans la piscine à balles",
    invertida: false,
    color: "#E8731A",
    bgLight: "#FFF4EC",
    doodle: { type: "star" as const, color: "#E8731A" },
    objectPosition: "center 35%",
    cta: "Réserver maintenant",
  },
  {
    titulo: "Un parc de jeux indoor pour les plus grands (4–12 ans)",
    descripcion:
      "Une aire de jeux intérieure géante pour se défouler : vos enfants grimpent, sautent, courent et relèvent des défis… sans jamais s'ennuyer.\nIci, ils dépensent toute leur énergie et ressortent avec des étoiles plein les yeux.",
    items: [
      { icon: "🏋️", label: "Aventure", desc: "parcours, accrobranche, pont de singe" },
      { icon: "⚡", label: "Fun & sensations", desc: "trampolines, toboggans, bouées" },
      { icon: "🧠", label: "Jeux & défis", desc: "laser game, escape game" },
      { icon: "🎮", label: "Interactif", desc: "aire de jeux digitale" },
    ],
    precio: "Dès 4,50€ / enfant",
    imagen: "/images/seccion2.jpg",
    alt: "Fille sur la structure multi-jeux",
    invertida: true,
    color: "#7B35A0",
    bgLight: "#F5EEFF",
    doodle: { type: "swirl" as const, color: "#7B35A0" },
    objectPosition: "center center",
    cta: "Réserver maintenant",
  },
  {
    titulo: "Un espace trampoline park unique au Mans",
    descripcion:
      "Sauts, rebonds, figures… les enfants adorent notre espace trampoline park.\n👉 Un terrain de jeu dynamique pour se dépenser à fond, en toute sécurité.",
    items: [
      { icon: "⚡", label: "Zones de trampolines", desc: "" },
      { icon: "🎂", label: "Activité idéale pour anniversaire", desc: "" },
      { icon: "🐣", label: "Adapté aux enfants", desc: "4–12 ans" },
      { icon: "🔒", label: "Encadré et sécurisé", desc: "" },
    ],
    precio: "Dès 4,50€ / enfant",
    imagen: "/images/seccion3.jpg",
    alt: "Enfant qui saute sur un trampoline",
    invertida: false,
    color: "#2E9E2E",
    bgLight: "#EDFAED",
    doodle: { type: "zigzag" as const, color: "#2E9E2E" },
    objectPosition: "center 20%",
    cta: "En savoir plus",
  },
  {
    titulo: "Restauration sur place pour une vraie pause gourmande",
    descripcion:
      "Installez-vous, profitez d'une pause gourmande… pendant que vos enfants s'amusent en toute sécurité.\n👉 Sur place, tout est prévu pour passer un vrai moment agréable en famille.",
    items: [
      { icon: "☕", label: "Café & boissons chaudes", desc: "thés, infusions" },
      { icon: "🧃", label: "Boissons fraîches", desc: "& gourmandises" },
      { icon: "🍟", label: "Snack", desc: "sur place" },
      { icon: "🍰", label: "Pause goûter", desc: "idéale en famille" },
      { icon: "👀", label: "Vue sur les enfants", desc: "depuis la cafétéria" },
    ],
    precio: "",
    imagen: "/images/bar.png",
    alt: "Espace restauration Ludykid",
    invertida: true,
    color: "#FFD600",
    bgLight: "#FFF6CC",
    doodle: { type: "dots" as const, color: "#FFD600" },
    objectPosition: "center center",
    cta: "En savoir plus",
  },
];

export default function Atracciones() {
  return (
    <section id="atracciones">
      {secciones.map((s, i) => (
        <div key={s.titulo} className="relative py-14" style={{ backgroundColor: s.bgLight }}>
          {/* Doodles de fondo */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-6 left-4 opacity-20 animate-float">
              <Doodle type={s.doodle.type} color={s.doodle.color} size={64} />
            </div>
            <div className="absolute top-10 right-8 opacity-15 animate-wiggle">
              <Doodle type="star" color={s.color} size={52} />
            </div>
            <div className="absolute bottom-6 left-20 opacity-15 animate-float" style={{ animationDelay: "1s" }}>
              <Doodle type="circle" color={s.color} size={44} />
            </div>
            <div className="absolute bottom-8 right-16 opacity-20 animate-wiggle" style={{ animationDelay: "0.6s" }}>
              <Doodle type={s.doodle.type} color={s.doodle.color} size={50} />
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 relative">
            <div className={`flex flex-col ${s.invertida ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-stretch`}>
              {/* Imagen */}
              <div className="w-full md:w-1/2 relative min-h-[340px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0 self-stretch">
                <Image
                  src={s.imagen}
                  alt={s.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  style={{ objectPosition: s.objectPosition }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {s.precio && (
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="font-fredoka font-600 text-white text-sm px-4 py-2 rounded-full shadow-lg backdrop-blur-sm"
                      style={{ backgroundColor: s.color + "dd" }}
                    >
                      👉 {s.precio}
                    </span>
                  </div>
                )}
              </div>

              {/* Texto */}
              <div className="w-full md:w-1/2 rounded-3xl p-8 md:p-10 relative overflow-hidden bg-white shadow-md">
                <div className="absolute top-4 right-4 opacity-30">
                  <Doodle type={s.doodle.type} color={s.doodle.color} size={52} />
                </div>

                <h2 className="font-fredoka text-2xl md:text-3xl font-600 text-gray-800 mb-3 leading-snug">
                  {s.titulo}
                </h2>
                <p className="font-nunito text-gray-500 leading-relaxed mb-6 text-sm whitespace-pre-line">
                  {s.descripcion}
                </p>

                <ul className="space-y-3 mb-7">
                  {s.items.map((item) => (
                    <li key={item.label} className="flex items-center gap-3">
                      <span
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                        style={{ backgroundColor: s.color + "20" }}
                      >
                        {item.icon}
                      </span>
                      <span className="font-nunito text-sm text-gray-700">
                        <span className="font-700" style={{ color: s.color }}>{item.label}</span>
                        {item.desc && <span className="text-gray-400"> — {item.desc}</span>}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#infos"
                  className="inline-flex items-center gap-2 font-fredoka font-600 text-white px-6 py-3 rounded-full text-base transition-all hover:scale-105 hover:shadow-lg shadow-md"
                  style={{ backgroundColor: s.color }}
                >
                  {s.cta} <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Ola hacia la siguiente sección */}
          <div className="absolute bottom-0 left-0 right-0 leading-none">
            <svg
              viewBox="0 0 1440 80"
              preserveAspectRatio="none"
              className="w-full h-16 block"
              fill={i < secciones.length - 1 ? secciones[i + 1].bgLight : "#FFF0FA"}
            >
              <path d="M0,40 C180,80 360,0 540,50 C720,80 900,0 1080,45 C1260,80 1380,10 1440,35 L1440,80 L0,80 Z" />
            </svg>
          </div>
        </div>
      ))}
    </section>
  );
}
