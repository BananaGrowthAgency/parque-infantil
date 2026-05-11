import Image from "next/image";
import Doodle from "./Doodle";

const planes = [
  {
    nombre: "Basique",
    emoji: "🎈",
    precio: "15",
    color: "#2E6FCC",
    imagen: "/images/tunel.jpg",
    alt: "Enfant dans le tunnel",
    caracteristicas: [
      "2h de jeu libre",
      "Salle privée 1h",
      "Invitations numériques",
      "Menu enfant inclus",
    ],
    popular: false,
  },
  {
    nombre: "Premium",
    emoji: "⭐",
    precio: "22",
    color: "#E8731A",
    imagen: "/images/cumple.png",
    alt: "Fête d'anniversaire chez Ludykid",
    caracteristicas: [
      "3h de jeu libre",
      "Salle privée 2h décorée",
      "Animateur dédié 1h",
      "Menu enfant + gâteau",
      "Souvenir photo",
    ],
    popular: true,
  },
  {
    nombre: "VIP",
    emoji: "👑",
    precio: "35",
    color: "#7B35A0",
    imagen: "/images/autos.jpg",
    alt: "Autos tamponneuses Ludykid",
    caracteristicas: [
      "Parc exclusif 3h",
      "Salle privée thématique",
      "Animateur tout l'événement",
      "Menu + gâteau personnalisé",
      "Photocall + photos imprimées",
      "Sachets surprises inclus",
    ],
    popular: false,
  },
];

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

      {/* ── Cards de precios con imagen ── */}
      <div id="precios" className="max-w-6xl mx-auto px-6 pb-16 relative">
        <div className="text-center mb-10">
          <h3 className="font-fredoka text-3xl md:text-4xl font-600 text-gray-800 mb-2">
            Nos formules anniversaire
          </h3>
          <p className="font-nunito text-gray-500 text-sm">Minimum 10 enfants · TVA incluse</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {planes.map((plan) => (
            <div
              key={plan.nombre}
              className={`relative bg-white rounded-3xl flex flex-col overflow-hidden border-2 ${plan.popular ? "md:-mt-4 shadow-2xl" : "shadow-md"}`}
              style={{ borderColor: plan.popular ? plan.color : "#e5e7eb" }}
            >
              {/* Badge popular */}
              {plan.popular && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="font-fredoka font-600 text-white text-xs px-3 py-1 rounded-full shadow"
                    style={{ backgroundColor: plan.color }}>
                    ⭐ Populaire
                  </span>
                </div>
              )}

              {/* Imagen en la card */}
              <div className="relative h-44 w-full flex-shrink-0">
                <Image
                  src={plan.imagen}
                  alt={plan.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay con degradado */}
                <div className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${plan.color}cc 0%, transparent 60%)` }} />
                {/* Precio sobre la imagen */}
                <div className="absolute bottom-3 left-4 flex items-baseline gap-1">
                  <span className="font-fredoka text-3xl font-700 text-white leading-none">{plan.precio} €</span>
                  <span className="font-nunito text-white/80 text-xs">/ enfant</span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{plan.emoji}</span>
                  <h4 className="font-fredoka text-xl font-600 text-gray-800">{plan.nombre}</h4>
                </div>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {plan.caracteristicas.map((c) => (
                    <li key={c} className="flex items-start gap-2 font-nunito text-sm text-gray-600">
                      <span className="font-700 mt-0.5 flex-shrink-0" style={{ color: plan.color }}>✓</span>
                      {c}
                    </li>
                  ))}
                </ul>

                <a href="#infos"
                  className="block text-center font-fredoka font-600 py-3 rounded-full text-base transition-all hover:opacity-90 hover:scale-105"
                  style={plan.popular
                    ? { backgroundColor: plan.color, color: "white" }
                    : { backgroundColor: "#f3f4f6", color: "#374151" }
                  }>
                  Choisir cette formule
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
