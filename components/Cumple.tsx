import Image from "next/image";
import Doodle from "./Doodle";

export default function Cumple() {
  return (
    <section id="cumple" className="relative overflow-hidden" style={{ backgroundColor: "#FFF0FA" }}>
      {/* Doodles de fondo */}
      <div className="absolute top-6 left-4 opacity-25 animate-float">
        <Doodle type="star" color="#E8409A" size={60} />
      </div>
      <div className="absolute top-16 right-10 opacity-20 animate-wiggle">
        <Doodle type="heart" color="#7B35A0" size={55} />
      </div>
      <div className="absolute bottom-8 left-16 opacity-15 animate-float" style={{ animationDelay: "1s" }}>
        <Doodle type="star2" color="#E8731A" size={48} />
      </div>
      <div className="absolute bottom-4 right-24 opacity-20 animate-wiggle" style={{ animationDelay: "0.6s" }}>
        <Doodle type="swirl" color="#2E9E2E" size={52} />
      </div>

      {/* ── Hero anniversaire (mismo estilo que Atracciones) ── */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row gap-8 items-center">

          {/* Imagen redondeada */}
          <div className="w-full md:w-1/2 relative h-[380px] md:h-[440px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0">
            <Image
              src="/images/cumple.png"
              alt="Anniversaire enfant chez Ludykid"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4">
              <span className="font-fredoka font-600 text-white text-sm px-4 py-2 rounded-full shadow-lg animate-float"
                style={{ backgroundColor: "#D93030dd" }}>
                🎉 –20 % en janvier
              </span>
            </div>
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2 rounded-3xl p-8 md:p-10 relative overflow-hidden bg-white shadow-md">
            <div className="absolute top-4 right-4 opacity-25">
              <Doodle type="heart" color="#E8409A" size={52} />
            </div>

            <span className="inline-block font-fredoka font-600 text-white text-xs px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: "#E8409A" }}>
              🎂 Anniversaire
            </span>

            <h2 className="font-fredoka text-2xl md:text-3xl font-600 text-gray-800 mb-3 leading-snug">
              L&apos;anniversaire préféré des enfants
            </h2>
            <p className="font-nunito text-gray-500 leading-relaxed mb-6 text-sm">
              Vous souhaitez organiser un anniversaire unique et inoubliable ? Chez Ludykid,
              on s&apos;occupe de tout pour que vous profitiez pleinement du moment en famille.
              Salle privée décorée, animation, menus et beaucoup de fun.
            </p>

            <ul className="space-y-3 mb-7">
              {[
                { icon: "🎨", text: "Salles privées entièrement décorées" },
                { icon: "🤹", text: "Animateurs professionnels inclus" },
                { icon: "🍰", text: "Menus et gâteaux adaptés à tous" },
                { icon: "👨‍👩‍👧‍👦", text: "Jusqu'à 30 invités" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{ backgroundColor: "#E8409A20" }}>
                    {item.icon}
                  </span>
                  <span className="font-nunito text-sm text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>

            <a href="#precios"
              className="inline-flex items-center gap-2 font-fredoka font-600 text-white px-6 py-3 rounded-full text-base transition-all hover:scale-105 shadow-md"
              style={{ backgroundColor: "#E8409A" }}>
              Voir les formules <span>↓</span>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
