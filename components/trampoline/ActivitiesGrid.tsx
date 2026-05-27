import Image from "next/image";
import { ReactNode } from "react";
import Doodle from "../Doodle";
import FadeInUp from "../ui/FadeInUp";

type Activity = {
  title: string;
  desc: string;
  image: string;
  alt: string;
  href: string;
  icon: ReactNode;
};

const IconEscape = (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="14" width="18" height="13" rx="2" />
    <path d="M11 14v-4a5 5 0 0 1 10 0v4" />
    <circle cx="16" cy="20" r="1.5" fill="currentColor" stroke="none" />
    <path d="M16 21.5v2" />
  </svg>
);

const IconAccrobranche = (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="7" r="2" />
    <path d="M16 9v5" />
    <path d="M10 14h12" />
    <path d="M10 14l-3 8h5l4-4 4 4h5l-3-8" />
    <path d="M8 22v4M24 22v4" />
  </svg>
);

const IconLaser = (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 16h14l3 2v3h-3l-2-2h-3l-2 2H7l-3-2v-3z" />
    <path d="M22 11l3-2M25 14h3M22 17l3 2" />
    <circle cx="8" cy="18.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const IconResto = (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 8h7l-1 3h-5z" />
    <path d="M8 11l1 13h4l1-13" />
    <path d="M11 6v2" />
    <path d="M18 18a4 4 0 0 1 8 0v1h-8z" />
    <path d="M17 20h10v2H17z" />
    <path d="M19 22l1 4h4l1-4" />
  </svg>
);

const ACTIVITIES: Activity[] = [
  {
    title: "Escape game",
    desc: "Résoudre des énigmes, coopérer et faire preuve de logique pour réussir à sortir avant la fin du temps !",
    image: "/images/escape-game/section1.jpg",
    alt: "Escape game enfant chez Ludykid",
    href: "/escape-game",
    icon: IconEscape,
  },
  {
    title: "Accrobranche",
    desc: "Un parcours indoor en hauteur pour se dépenser et gagner en confiance entre amis !",
    image: "/images/accrobranche.JPG",
    alt: "Accrobranche indoor chez Ludykid",
    href: "/accrobranche",
    icon: IconAccrobranche,
  },
  {
    title: "Laser game",
    desc: "Vos enfants s'éclatent en équipe dans un jeu d'aventure 100% fun et immersif !",
    image: "/images/laser-game/laserSection1.jpg",
    alt: "Laser game enfant chez Ludykid",
    href: "/laser-game",
    icon: IconLaser,
  },
  {
    title: "Restauration",
    desc: "Une pause gourmande bien méritée pour reprendre des forces entre deux activités !",
    image: "/images/home/bar.png",
    alt: "Ludy'cafet chez Ludykid",
    href: "/restauration",
    icon: IconResto,
  },
];

export default function ActivitiesGrid() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="absolute top-10 left-6 opacity-30 pointer-events-none">
        <Doodle type="zigzag" color="#E8731A" size={64} />
      </div>
      <div className="absolute top-12 right-8 opacity-25 pointer-events-none">
        <Doodle type="star" color="#E8731A" size={48} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <FadeInUp>
          <h2 className="text-center font-fredoka font-extrabold text-3xl md:text-5xl tracking-tight">
            <span className="text-[#0F1B5C]">Ludykid </span>
            <span className="text-lk-orange">c&apos;est aussi :</span>
          </h2>
        </FadeInUp>

        <div className="relative mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACTIVITIES.map((a, i) => (
              <FadeInUp key={a.title} delay={0.08 + i * 0.07}>
                <div className="h-full flex flex-col">
                  <div className="relative bg-white rounded-clay-lg shadow-clay flex flex-col h-full overflow-hidden">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={a.image}
                        alt={a.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    <div className="relative -mt-9 mx-auto z-10">
                      <div className="w-[72px] h-[72px] rounded-full bg-white shadow-clay-sm flex items-center justify-center text-lk-orange">
                        <div className="w-9 h-9">{a.icon}</div>
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 px-5 pt-3 pb-6 text-center">
                      <h3 className="font-fredoka font-extrabold text-[#0F1B5C] text-xl mb-3 leading-tight">
                        {a.title}
                      </h3>
                      <p className="font-nunito text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                        {a.desc}
                      </p>
                      <div className="flex justify-center">
                        <a
                          href={a.href}
                          className="group inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-lk-orange text-white font-fredoka font-extrabold text-sm shadow-clay-orange transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95"
                        >
                          Découvrir
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-lk-orange shadow-clay-inset transition-transform duration-300 group-hover:-rotate-45">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
