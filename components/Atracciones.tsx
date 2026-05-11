import Image from "next/image";
import Doodle from "./Doodle";

const secciones = [
  {
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
    doodle: { type: "star" as const, color: "#E8731A" },
    bgSection: "bg-white",
    objectPosition: "center 35%",   // centra la cara del bebé
  },
  {
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
    doodle: { type: "swirl" as const, color: "#7B35A0" },
    bgSection: "bg-gray-50",
    objectPosition: "center center",
  },
  {
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
    doodle: { type: "zigzag" as const, color: "#2E9E2E" },
    bgSection: "bg-white",
    objectPosition: "center 20%",   // niño saltando visible completo
  },
  {
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
    doodle: { type: "dots" as const, color: "#D93030" },
    bgSection: "bg-gray-50",
    objectPosition: "center center",
  },
];

export default function Atracciones() {
  return (
    <section id="atracciones">
      {secciones.map((s) => (
        <div key={s.titulo} className={`${s.bgSection} py-14`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className={`flex flex-col ${s.invertida ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-stretch`}>

              {/* Imagen con radius — mismo alto que el panel de texto */}
              <div className="w-full md:w-1/2 relative min-h-[340px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0 self-stretch">
                <Image
                  src={s.imagen}
                  alt={s.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  style={{ objectPosition: s.objectPosition }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Pill de precio sobre la imagen */}
                <div className="absolute bottom-4 left-4">
                  <span className="font-fredoka font-600 text-white text-sm px-4 py-2 rounded-full shadow-lg backdrop-blur-sm"
                    style={{ backgroundColor: s.color + "dd" }}>
                    👉 {s.precio}
                  </span>
                </div>
              </div>

              {/* Texto */}
              <div className="w-full md:w-1/2 rounded-3xl p-8 md:p-10 relative overflow-hidden"
                style={{ backgroundColor: s.bgLight }}>

                {/* Doodle decorativo */}
                <div className="absolute top-4 right-4 opacity-30">
                  <Doodle type={s.doodle.type} color={s.doodle.color} size={52} />
                </div>

                {/* Tag de color */}
                <span className="inline-block font-fredoka font-600 text-white text-xs px-3 py-1 rounded-full mb-4"
                  style={{ backgroundColor: s.color }}>
                  Ludykid
                </span>

                <h2 className="font-fredoka text-2xl md:text-3xl font-600 text-gray-800 mb-3 leading-snug">
                  {s.titulo}
                </h2>
                <p className="font-nunito text-gray-500 leading-relaxed mb-6 text-sm">
                  {s.descripcion}
                </p>

                <ul className="space-y-3 mb-7">
                  {s.items.map((item) => (
                    <li key={item.label} className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                        style={{ backgroundColor: s.color + "20" }}>
                        {item.icon}
                      </span>
                      <span className="font-nunito text-sm text-gray-700">
                        <span className="font-700" style={{ color: s.color }}>{item.label}</span>
                        {" "}<span className="text-gray-400">— {item.desc}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <a href="#infos"
                  className="inline-flex items-center gap-2 font-fredoka font-600 text-white px-6 py-3 rounded-full text-base transition-all hover:scale-105 hover:shadow-lg shadow-md"
                  style={{ backgroundColor: s.color }}>
                  Réserver <span>→</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
