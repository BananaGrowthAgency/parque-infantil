import Image from "next/image";
import Doodle from "../Doodle";
import FadeInUp from "../ui/FadeInUp";
import ClayCard from "../ui/ClayCard";
import ClayButton from "../ui/ClayButton";
import Wave from "../Wave";

const FEATURES = [
  {
    icon: "👦",
    label: "Pour les enfants dès 5 ans",
    desc: "Une activité adaptée et encadrée pour jouer en toute sécurité.",
  },
  {
    icon: "🤝",
    label: "Esprit d'équipe et stratégie",
    desc: "Ils apprennent à coopérer et à élaborer des tactiques ensemble.",
  },
  {
    icon: "⚡",
    label: "Action et adrénaline",
    desc: "Un jeu dynamique qui leur permet de se dépenser tout en s'amusant.",
  },
  {
    icon: "🙌",
    label: "Sans les parents",
    desc: "Les enfants vivent l'expérience entre eux, en toute autonomie.",
  },
  {
    icon: "🎂",
    label: "Idéal pour un anniversaire",
    desc: "Une activité originale pour célébrer un moment spécial.",
  },
];

const PRICES = [
  { qty: "1 partie", price: "3 €" },
  { qty: "5 parties", price: "14 €" },
  { qty: "8 parties", price: "20 €" },
];

export default function LaserIntro({ nextBg = "#F5EEFF" }: { nextBg?: string }) {
  return (
    <section className="relative pt-16 overflow-hidden" style={{ backgroundColor: "#F5EEFF" }}>
      <div className="absolute top-6 left-4 opacity-25 animate-float pointer-events-none">
        <Doodle type="star" color="#7B35A0" size={64} />
      </div>
      <div className="absolute top-12 right-8 opacity-20 animate-wiggle pointer-events-none">
        <Doodle type="swirl" color="#7B35A0" size={70} />
      </div>
      <div className="absolute bottom-8 left-20 opacity-20 animate-float pointer-events-none" style={{ animationDelay: "1s" }}>
        <Doodle type="circle" color="#7B35A0" size={48} />
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16 relative">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Image gauche */}
          <FadeInUp className="w-full md:w-1/2" y={28}>
            <div className="group relative h-full min-h-[360px] rounded-clay-lg overflow-hidden shadow-clay-purple transition-transform duration-500 hover:-translate-y-1">
              <Image
                src="/images/laser-game/laserSection1.jpg"
                alt="Laser game enfant chez Ludykid Le Mans"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-5 left-5">
                <span
                  className="font-fredoka font-bold text-white text-sm px-5 py-2.5 rounded-full shadow-clay-sm animate-float inline-flex items-center gap-2"
                  style={{ backgroundColor: "#7B35A0" }}
                >
                  💰 3 € la partie par enfant
                </span>
              </div>
            </div>
          </FadeInUp>

          {/* Contenu droit */}
          <FadeInUp className="w-full md:w-1/2" delay={0.15} y={28}>
            <ClayCard size="lg" tone="white" className="relative h-full overflow-hidden">
              <div className="absolute top-5 right-5 opacity-25">
                <Doodle type="star" color="#7B35A0" size={56} />
              </div>

              <h2 className="font-fredoka text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-snug">
                Offrez à votre enfant
                <br />
                une aventure fun et sécurisée !
              </h2>
              <p className="font-nunito text-gray-600 leading-relaxed mb-6 text-sm">
                Dans un univers futuriste, vos enfants vivent une expérience dynamique où coopération et stratégie sont essentielles pour marquer un maximum de points !
                <br />
                Idéal pour se défouler, s&apos;amuser et partager un moment inoubliable avec leurs amis.
              </p>

              <ul className="space-y-3 mb-6">
                {FEATURES.map((f, i) => (
                  <FadeInUp key={f.label} delay={0.2 + i * 0.05} y={12}>
                    <li className="flex items-start gap-3">
                      <span
                        className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg flex-shrink-0 shadow-clay-inset"
                        style={{ backgroundColor: "#7B35A01F" }}
                      >
                        {f.icon}
                      </span>
                      <span className="font-nunito text-sm text-gray-700 leading-snug">
                        <span className="font-bold block text-gray-800">{f.label}</span>
                        <span className="text-gray-500">{f.desc}</span>
                      </span>
                    </li>
                  </FadeInUp>
                ))}
              </ul>

              {/* Tarifs */}
              <FadeInUp delay={0.45} y={12}>
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {PRICES.map((p) => (
                    <div
                      key={p.qty}
                      className="rounded-clay border-2 border-gray-100 bg-gray-50 px-3 py-2.5 text-center"
                    >
                      <p className="font-nunito text-[11px] text-gray-500 leading-tight">
                        {p.qty}
                      </p>
                      <p className="font-fredoka font-extrabold text-lk-purple text-base leading-tight mt-0.5">
                        {p.price}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeInUp>

              <ClayButton href="https://ludykid.qweekle.com/shop/ludykid/ticketing?lang=fr" tone="purple" size="md" target="_blank" rel="noopener noreferrer">
                Réserver
              </ClayButton>
            </ClayCard>
          </FadeInUp>
        </div>
      </div>
      <Wave fill={nextBg} bg="#F5EEFF" />
    </section>
  );
}
