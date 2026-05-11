import Image from "next/image";
import Doodle from "./Doodle";

const stats = [
  { icon: "⭐", value: "4.9/5", label: "Valoración", bg: "#E8731A" },
  { icon: "👶", value: "1 – 12 años", label: "Edades", bg: "#7B35A0" },
  { icon: "📅", value: "7 días / 7", label: "Abierto", bg: "#2E9E2E" },
  { icon: "📐", value: "1.500 m²", label: "Superficie", bg: "#D93030" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-16">
      {/* Imagen hero */}
      <div className="relative h-[78vh] min-h-[520px] overflow-hidden">
        <Image
          src="/images/tobogan-azul.jpg"
          alt="Niños disfrutando en Ludykid"
          fill className="object-cover object-center" priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

        {/* Doodles decorativos */}
        <div className="absolute top-8 right-12 opacity-70 animate-wiggle">
          <Doodle type="star" color="#FFD600" size={70} />
        </div>
        <div className="absolute top-24 right-40 opacity-50 animate-float" style={{ animationDelay: "0.5s" }}>
          <Doodle type="star2" color="#ffffff" size={45} />
        </div>
        <div className="absolute bottom-32 right-16 opacity-60 animate-float" style={{ animationDelay: "1s" }}>
          <Doodle type="heart" color="#E8409A" size={50} />
        </div>
        <div className="absolute bottom-20 right-48 opacity-40 animate-wiggle" style={{ animationDelay: "0.8s" }}>
          <Doodle type="circle" color="#ffffff" size={40} />
        </div>

        {/* Texto */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 mb-4">
                <span className="text-sm">🎉</span>
                <span className="text-white font-fredoka text-sm font-500">El parque indoor favorito de los niños</span>
              </div>
              <h1 className="font-fredoka text-5xl md:text-6xl font-700 text-white leading-tight mb-5 drop-shadow-lg">
                Más de{" "}
                <span style={{ color: "#FFD600" }}>1.500 m²</span>{" "}
                de pura{" "}
                <span style={{ color: "#FFD600" }}>diversión</span>
              </h1>
              <p className="text-white/90 text-lg mb-8 leading-relaxed font-nunito">
                Atracciones para todas las edades, cumpleaños únicos y
                momentos que tus hijos recordarán para siempre.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#atracciones"
                  className="font-fredoka font-600 text-white px-7 py-3.5 rounded-full text-lg shadow-xl transition-transform hover:scale-105"
                  style={{ backgroundColor: "#E8731A" }}>
                  Descubrir atracciones
                </a>
                <a href="#cumple"
                  className="font-fredoka font-600 bg-white/20 backdrop-blur border-2 border-white text-white hover:bg-white hover:text-gray-800 px-7 py-3.5 rounded-full text-lg transition-all hover:scale-105">
                  🎂 Organizar un cumpleaños
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de stats multicolor */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="py-5 px-4 text-center text-white" style={{ backgroundColor: s.bg }}>
            <div className="text-3xl mb-1">{s.icon}</div>
            <div className="font-fredoka text-xl font-600 leading-tight">{s.value}</div>
            <div className="font-nunito text-xs font-600 mt-0.5 uppercase tracking-wider opacity-80">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
