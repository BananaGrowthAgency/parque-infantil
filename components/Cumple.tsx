import Image from "next/image";
import Doodle from "./Doodle";

const planes = [
  {
    nombre: "Basique",
    emoji: "🎈",
    precio: "15",
    color: "#2E6FCC",
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
      <div className="absolute top-6 left-4 opacity-30 animate-float">
        <Doodle type="star" color="#E8409A" size={60} />
      </div>
      <div className="absolute top-16 right-10 opacity-25 animate-wiggle">
        <Doodle type="heart" color="#7B35A0" size={55} />
      </div>
      <div className="absolute bottom-8 left-16 opacity-20 animate-float" style={{ animationDelay: "1s" }}>
        <Doodle type="star2" color="#E8731A" size={48} />
      </div>
      <div className="absolute bottom-4 right-24 opacity-30 animate-wiggle" style={{ animationDelay: "0.6s" }}>
        <Doodle type="swirl" color="#2E9E2E" size={52} />
      </div>

      <div className="flex flex-col md:flex-row min-h-[460px]">
        <div className="relative w-full md:w-1/2 min-h-[320px]">
          <Image src="/images/cumple.png" alt="Anniversaire enfant chez Ludykid" fill
            className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute bottom-5 left-5">
            <span className="font-fredoka font-600 text-white text-base px-4 py-2 rounded-full shadow-lg animate-float"
              style={{ backgroundColor: "#D93030" }}>
              🎉 –20 % en janvier
            </span>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center px-8 md:px-12 py-12">
          <div className="max-w-lg">
            <span className="inline-block font-fredoka font-600 text-white text-sm px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: "#E8409A" }}>
              🎂 Anniversaire
            </span>
            <h2 className="font-fredoka text-3xl md:text-4xl font-600 text-gray-800 mb-4 leading-snug">
              L&apos;anniversaire préféré des enfants
            </h2>
            <p className="font-nunito text-gray-500 leading-relaxed mb-5 text-sm">
              Vous souhaitez organiser un anniversaire unique et inoubliable ? Chez Ludykid,
              on s&apos;occupe de tout pour que vous profitiez pleinement du moment en famille.
              Salle privée décorée, animation, menus et beaucoup de fun.
            </p>
            <ul className="space-y-2.5 mb-6">
              {[
                { icon: "🎨", text: "Salles privées entièrement décorées" },
                { icon: "🤹", text: "Animateurs professionnels inclus" },
                { icon: "🍰", text: "Menus et gâteaux adaptés à tous" },
                { icon: "👨‍👩‍👧‍👦", text: "Jusqu'à 30 invités" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2.5 font-nunito text-gray-700 text-sm">
                  <span className="text-lg">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
            <a href="#infos"
              className="inline-block font-fredoka font-600 text-white px-7 py-3 rounded-full text-base transition-transform hover:scale-105 shadow-md"
              style={{ backgroundColor: "#E8409A" }}>
              Vérifier les disponibilités →
            </a>
          </div>
        </div>
      </div>

      <div id="precios" className="max-w-6xl mx-auto px-6 py-16 relative">
        <div className="text-center mb-10">
          <h3 className="font-fredoka text-3xl md:text-4xl font-600 text-gray-800 mb-2">
            Nos formules anniversaire
          </h3>
          <p className="font-nunito text-gray-500 text-sm">Minimum 10 enfants · TVA incluse</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {planes.map((plan) => (
            <div
              key={plan.nombre}
              className={`relative bg-white rounded-3xl p-7 flex flex-col border-2 ${plan.popular ? "md:scale-105 shadow-2xl" : "shadow-md"}`}
              style={{ borderColor: plan.popular ? plan.color : "#e5e7eb" }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="font-fredoka font-600 text-white text-sm px-4 py-1.5 rounded-full shadow-md"
                    style={{ backgroundColor: plan.color }}>
                    ⭐ La plus populaire
                  </span>
                </div>
              )}

              <div className="text-4xl mb-3">{plan.emoji}</div>
              <h4 className="font-fredoka text-xl font-600 text-gray-800 mb-1">{plan.nombre}</h4>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="font-fredoka text-4xl font-700" style={{ color: plan.color }}>
                  {plan.precio} €
                </span>
                <span className="font-nunito text-gray-400 text-sm">/ enfant</span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
