import Image from "next/image";
import Doodle from "../Doodle";
import FadeInUp from "../ui/FadeInUp";
import ClayCard from "../ui/ClayCard";
import ClayButton from "../ui/ClayButton";
import Wave from "../Wave";

const FEATURES = [
  {
    icon: "👦",
    label: "De 4 à 12 ans",
    desc: "Un parcours adapté aux enfants de 4 à 12 ans.",
  },
  {
    icon: "🌲",
    label: "Parcours ludique en hauteur",
    desc: "Ils évoluent au-dessus de la piste de bumpers dans un univers fun.",
  },
  {
    icon: "🌉",
    label: "Plusieurs éléments d'équilibre",
    desc: "Passerelles, ponts et obstacles pour se dépasser en s'amusant.",
  },
  {
    icon: "🛡️",
    label: "Sécurité ++",
    desc: "Un environnement pensé pour jouer en toute tranquillité.",
  },
  {
    icon: "🎟️",
    label: "Inclus dans la structure de jeux 4–12 ans",
    desc: "Accès libre pour prolonger le plaisir sans limite.",
  },
];

export default function AccroIntro({ nextBg = "#FFF8CC" }: { nextBg?: string }) {
  return (
    <section className="relative pt-16 overflow-hidden" style={{ backgroundColor: "#FFF8CC" }}>
      <div className="absolute top-6 left-4 opacity-30 animate-float pointer-events-none">
        <Doodle type="star" color="#FFD600" size={64} />
      </div>
      <div className="absolute top-12 right-8 opacity-25 animate-wiggle pointer-events-none">
        <Doodle type="swirl" color="#FFD600" size={70} />
      </div>
      <div className="absolute bottom-8 left-20 opacity-25 animate-float pointer-events-none" style={{ animationDelay: "1s" }}>
        <Doodle type="circle" color="#FFD600" size={48} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-10 sm:pb-16 relative">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-8 items-stretch">
          {/* Image gauche */}
          <FadeInUp className="w-full md:w-1/2" y={28}>
            <div className="group relative h-full min-h-[240px] sm:min-h-[420px] rounded-clay-lg overflow-hidden shadow-clay-yellow transition-transform duration-500 hover:-translate-y-1">
              <Image
                src="/images/home/accrobranche-section1.jpg"
                alt="Accrobranche enfant chez Ludykid Le Mans"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-5 left-5">
                <span
                  className="font-fredoka font-bold text-white text-sm px-5 py-2.5 rounded-full shadow-clay-sm animate-float inline-flex items-center gap-2"
                  style={{ backgroundColor: "#B8940A" }}
                >
                  🧗 Activité dès 4 ans
                </span>
              </div>
            </div>
          </FadeInUp>

          {/* Contenu droit */}
          <FadeInUp className="w-full md:w-1/2" delay={0.15} y={28}>
            <ClayCard size="lg" tone="white" className="relative h-full overflow-hidden">
              <div className="absolute top-5 right-5 opacity-30">
                <Doodle type="star" color="#FFD600" size={56} />
              </div>

              <h2 className="font-fredoka text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-snug">
                Offrez à votre enfant
                <br />
                une aventure fun et sécurisée !
              </h2>
              <p className="font-nunito text-gray-600 leading-relaxed mb-6 text-sm">
                Chez Ludykid au Mans, vos enfants prennent de la hauteur et vivent une aventure unique sur notre parcours d&apos;accrobranche indoor.
                <br />
                Équilibre, agilité et dépassement de soi sont au rendez-vous !
                <br />
                Une activité ludique, accessible et pensée pour s&apos;amuser en toute sécurité.
              </p>

              <ul className="space-y-3 mb-7">
                {FEATURES.map((f, i) => (
                  <FadeInUp key={f.label} delay={0.2 + i * 0.05} y={12}>
                    <li className="flex items-start gap-3">
                      <span
                        className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg flex-shrink-0 shadow-clay-inset"
                        style={{ backgroundColor: "#2E9E2E1F" }}
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

              <ClayButton href="https://ludykid.qweekle.com/shop/ludykid/ticketing?lang=fr" tone="yellow" size="md" className="w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
                Réserver
              </ClayButton>
            </ClayCard>
          </FadeInUp>
        </div>
      </div>
      <Wave fill={nextBg} bg="#FFF8CC" />
    </section>
  );
}
