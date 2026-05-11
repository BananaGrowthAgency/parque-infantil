import Image from "next/image";
import Doodle from "./Doodle";

const secciones = [
  {
    numero: "01",
    titulo: "Para los más pequeños (1–3 años)",
    descripcion:
      "Vuestros hijos descubren el parque interior, exploran y se divierten con total seguridad, a su ritmo… Y vosotros aprovecháis un momento de tranquilidad.",
    items: [
      { icon: "🧩", label: "Motricidad", desc: "circuito adaptado, juegos de construcción" },
      { icon: "🟡", label: "Estimulación sensorial", desc: "piscina de bolas" },
      { icon: "🛝", label: "Toboganes suaves", desc: "adaptados a su altura" },
      { icon: "🛵", label: "Juegos móviles", desc: "motos y correpasillos" },
    ],
    precio: "Desde 3,50€ / niño",
    imagen: "/images/seccion1.jpg",
    alt: "Bebé en piscina de bolas",
    invertida: false,
    color: "#E8731A",
    bgLight: "#FFF4EC",
    doodle: { type: "star" as const, color: "#E8731A", position: "top-4 right-4" },
  },
  {
    numero: "02",
    titulo: "Estructura multijuegos: ¡aventura en altura!",
    descripcion:
      "Tres niveles de pasarelas, redes, túneles y toboganes que desafían a los niños de 4 a 12 años. El corazón del parque y el favorito de todos.",
    items: [
      { icon: "🏗️", label: "3 niveles", desc: "de pasarelas y estructuras" },
      { icon: "🕳️", label: "Túneles", desc: "laberintos y zonas de gateo" },
      { icon: "🛝", label: "Toboganes grandes", desc: "de tubo y abiertos" },
      { icon: "🧗", label: "Escalada", desc: "muros de distintas dificultades" },
    ],
    precio: "Desde 5€ / niño",
    imagen: "/images/seccion2.jpg",
    alt: "Niña en estructura multijuegos",
    invertida: true,
    color: "#7B35A0",
    bgLight: "#F5EEFF",
    doodle: { type: "swirl" as const, color: "#7B35A0", position: "bottom-6 left-6" },
  },
  {
    numero: "03",
    titulo: "¡Los trampolines: salta hasta el cielo!",
    descripcion:
      "Una zona de trampolines individuales donde los niños desafían la gravedad. Perfecto para desarrollar equilibrio y coordinación con una enorme sonrisa.",
    items: [
      { icon: "⬆️", label: "Salto libre", desc: "trampolines individuales" },
      { icon: "🏀", label: "Basket trampoline", desc: "canasta con red" },
      { icon: "🎯", label: "Zonas de caída", desc: "colchonetas de seguridad" },
      { icon: "👨‍👩‍👧", label: "Adultos bienvenidos", desc: "¡a saltar con ellos!" },
    ],
    precio: "Desde 4€ / niño",
    imagen: "/images/seccion3.jpg",
    alt: "Niño saltando en trampolín",
    invertida: false,
    color: "#2E9E2E",
    bgLight: "#EDFAED",
    doodle: { type: "zigzag" as const, color: "#2E9E2E", position: "top-6 right-4" },
  },
  {
    numero: "04",
    titulo: "El espacio familiar: los padres también descansan",
    descripcion:
      "Mientras los niños juegan, los padres disfrutan de nuestra zona de restauración con café, snacks y menús. Confort y vistas a todas las atracciones.",
    items: [
      { icon: "☕", label: "Cafetería", desc: "café, tés e infusiones" },
      { icon: "🥪", label: "Menús", desc: "snacks, bocadillos y menú del día" },
      { icon: "📡", label: "WiFi gratuito", desc: "para los padres" },
      { icon: "👁️", label: "Vista total", desc: "al área de juegos" },
    ],
    precio: "Entrada adultos: gratuita",
    imagen: "/images/seccion4.png",
    alt: "Zona de restauración familiar",
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
          {/* Imagen */}
          <div className="relative w-full md:w-1/2 min-h-[320px]">
            <Image
              src={s.imagen} alt={s.alt} fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2 flex items-center relative overflow-hidden" style={{ backgroundColor: s.bgLight }}>
            {/* Número grande decorativo */}
            <span className="absolute top-2 right-4 font-fredoka text-[120px] font-700 leading-none opacity-[0.06] select-none"
              style={{ color: s.color }}>
              {s.numero}
            </span>

            {/* Doodle decorativo */}
            <div className={`absolute ${s.doodle.position} opacity-50`}>
              <Doodle type={s.doodle.type} color={s.doodle.color} size={55} />
            </div>

            <div className="relative px-8 md:px-12 py-10 max-w-lg">
              {/* Badge número */}
              <span className="inline-block font-fredoka font-600 text-white text-sm px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: s.color }}>
                {s.numero}
              </span>

              <h2 className="font-fredoka text-2xl md:text-3xl font-600 text-gray-800 mb-3 leading-snug">
                {s.titulo}
              </h2>
              <p className="font-nunito text-gray-500 leading-relaxed mb-5 text-sm">{s.descripcion}</p>

              {/* Lista de items */}
              <ul className="space-y-2 mb-5">
                {s.items.map((item) => (
                  <li key={item.label} className="flex items-center gap-2 text-sm font-nunito text-gray-700">
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-700" style={{ color: s.color }}>{item.label}</span>
                    <span className="text-gray-400">: {item.desc}</span>
                  </li>
                ))}
              </ul>

              {/* Precio */}
              <p className="font-fredoka text-sm font-600 mb-5" style={{ color: s.color }}>
                👉 {s.precio}
              </p>

              <a href="#infos"
                className="inline-block font-fredoka font-600 text-white px-6 py-2.5 rounded-full text-base transition-transform hover:scale-105 shadow-md"
                style={{ backgroundColor: s.color }}>
                Reservar entrada →
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
