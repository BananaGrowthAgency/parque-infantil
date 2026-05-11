import Image from "next/image";
import Doodle from "./Doodle";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-16">
      <div className="relative h-[78vh] min-h-[520px] overflow-hidden">
        <Image
          src="/images/tobogan-azul.jpg"
          alt="Enfants qui s'amusent à Ludykid"
          fill className="object-cover object-center" priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

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

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 mb-4">
                <span className="text-sm">🎉</span>
                <span className="text-white font-fredoka text-sm font-500">Le parc indoor préféré des enfants</span>
              </div>
              <h1 className="font-fredoka text-5xl md:text-6xl font-700 text-white leading-tight mb-5 drop-shadow-lg">
                Plus de{" "}
                <span style={{ color: "#FFD600" }}>1 500 m²</span>{" "}
                de pure{" "}
                <span style={{ color: "#FFD600" }}>aventure</span>
              </h1>
              <p className="text-white/90 text-lg mb-8 leading-relaxed font-nunito">
                Des attractions pour tous les âges, des anniversaires inoubliables
                et des moments que vos enfants chériront toute leur vie.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#atracciones"
                  className="font-fredoka font-600 text-white px-7 py-3.5 rounded-full text-lg shadow-xl transition-transform hover:scale-105"
                  style={{ backgroundColor: "#E8731A" }}>
                  Découvrir les attractions
                </a>
                <a href="#cumple"
                  className="font-fredoka font-600 bg-white/20 backdrop-blur border-2 border-white text-white hover:bg-white hover:text-gray-800 px-7 py-3.5 rounded-full text-lg transition-all hover:scale-105">
                  🎂 Organiser un anniversaire
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
