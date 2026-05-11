import Image from "next/image";
import Doodle from "./Doodle";

const secciones = [
  {
    numero: "01",
    titulo: "Pour les petits (1–3 ans)",
    descripcion:
      "Vos enfants découvrent le parc intérieur, explorent et s'amusent en toute sécurité, à leur rythme… Et vous profitez d'un moment de tranquillité.",
    items: [
      { icon: "🧩", label: "Motricité", desc: "parcours adapté, jeux de construction" },
      { icon: "🟡", label: "Éveil sensoriel", desc: "piscine à balles" },
      { icon: "🛝", label: "Glisse douce", desc: "toboggans adaptés" },
      { icon: "🛵", label: "Jeux mobiles", desc: "petites motos" },
    ],
    precio: "Dès 3,50 € / enfant",
    imagen: "/images/seccion1.jpg",
    alt: "Bébé dans la piscine à balles",
    invertida: false,
    color: "#E8731A",
    bgLight: "#FFF4EC",
    doodle: { type: "star" as const, color: "#E8731A", position: "top-4 right-4" },
  },
  {
    numero: "02",
    titulo: "Structure multi-jeux : l'aventure en hauteur !",
    descripcion:
      "Trois niveaux de passerelles, filets, tunnels et toboggans qui challengent les enfants de 4 à 12 ans. Le cœur du parc et le préféré de tous.",
    items: [
      { icon: "🏗️", label: "3 niveaux", desc: "de passerelles et structures" },
      { icon: "🕳️", label: "Tunnels", desc: "labyrinthes et espaces de glisse" },
      { icon: "🛝", label: "Grands toboggans", desc: "en tube et ouverts" },
      { icon: "🧗", label: "Escalade", desc: "murs de différentes difficultés" },
    ],
    precio: "Dès 5 € / enfant",
    imagen: "/images/seccion2.jpg",
    alt: "Fille sur la structure multi-jeux",
    invertida: true,
    color: "#7B35A0",
    bgLight: "#F5EEFF",
    doodle: { type: "swirl" as const, color: "#7B35A0", position: "bottom-6 left-6" },
  },
  {
    numero: "03",
    titulo: "Les trampolines : sauter jusqu'au ciel !",
    descripcion:
      "Une zone de trampolines individuels où les enfants défient la gravité. Idéal pour développer l'équilibre et la coordination avec un grand sourire.",
    items: [
      { icon: "⬆️", label: "Saut libre", desc: "trampolines individuels" },
      { icon: "🏀", label: "Basket trampoline", desc: "panier avec filet" },
      { icon: "🎯", label: "Zones de réception", desc: "tapis de sécurité" },
      { icon: "👨‍👩‍👧", label: "Adultes bienvenus", desc: "sautez avec eux !" },
    ],
    precio: "Dès 4 € / enfant",
    imagen: "/images/seccion3.jpg",
    alt: "Enfant qui saute sur un trampoline",
    invertida: false,
    color: "#2E9E2E",
    bgLight: "#EDFAED",
    doodle: { type: "zigzag" as const, color: "#2E9E2E", position: "top-6 right-4" },
  },
  {
    numero: "04",
    titulo: "L'espace famille : les parents aussi se reposent",
    descripcion:
      "Pendant que les enfants jouent, les parents profitent de notre espace restauration avec café, snacks et menus. Confort et vue sur toutes les attractions.",
    items: [
      { icon: "☕", label: "Cafétéria", desc: "cafés, thés et infusions" },
      { icon: "🥪", label: "Menus", desc: "snacks, sandwichs et plat du jour" },
      { icon: "📡", label: "WiFi gratuit", desc: "pour les parents" },
      { icon: "👁️", label: "Vue totale", desc: "sur l'espace de jeux" },
    ],
    precio: "Entrée adultes : gratuite",
    imagen: "/images/seccion4.png",
    alt: "Espace restauration familiale",
    invertida: true,
    color: "#D93030",
    bgLight: "#FFF0F0",
    doodle: { type: "dots" as const, color: "#D93030", position: "top-4 left-8" },
  },
];

export default function Atracciones() {
  return (
    <section id="atracciones">
      {secciones.map((s) => (
        <div key={s.numero} className={`flex flex-col ${s.invertida ? "md:flex-row-reverse" : "md:flex-row"} min-h-[460px]`}>
          <div className="relative w-full md:w-1/2 min-h-[320px]">
            <Image
              src={s.imagen} alt={s.alt} fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="w-full md:w-1/2 flex items-center relative overflow-hidden" style={{ backgroundColor: s.bgLight }}>
            <span className="absolute top-2 right-4 font-fredoka text-[120px] font-700 leading-none opacity-[0.06] select-none"
              style={{ color: s.color }}>
              {s.numero}
            </span>

            <div className={`absolute ${s.doodle.position} opacity-50`}>
              <Doodle type={s.doodle.type} color={s.doodle.color} size={55} />
            </div>

            <div className="relative px-8 md:px-12 py-10 max-w-lg">
              <span className="inline-block font-fredoka font-600 text-white text-sm px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: s.color }}>
                {s.numero}
              </span>

              <h2 className="font-fredoka text-2xl md:text-3xl font-600 text-gray-800 mb-3 leading-snug">
                {s.titulo}
              </h2>
              <p className="font-nunito text-gray-500 leading-relaxed mb-5 text-sm">{s.descripcion}</p>

              <ul className="space-y-2 mb-5">
                {s.items.map((item) => (
                  <li key={item.label} className="flex items-center gap-2 text-sm font-nunito text-gray-700">
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-700" style={{ color: s.color }}>{item.label}</span>
                    <span className="text-gray-400">: {item.desc}</span>
                  </li>
                ))}
              </ul>

              <p className="font-fredoka text-sm font-600 mb-5" style={{ color: s.color }}>
                👉 {s.precio}
              </p>

              <a href="#infos"
                className="inline-block font-fredoka font-600 text-white px-6 py-2.5 rounded-full text-base transition-transform hover:scale-105 shadow-md"
                style={{ backgroundColor: s.color }}>
                Réserver →
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
