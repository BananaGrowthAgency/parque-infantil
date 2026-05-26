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

// Icônes SVG (style outline vert, simples)
const IconLaser = (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 16h14l3 2v3h-3l-2-2h-3l-2 2H7l-3-2v-3z" />
    <path d="M22 11l3-2M25 14h3M22 17l3 2" />
    <circle cx="8" cy="18.5" r="0.8" fill="currentColor" />
  </svg>
);

const IconAccrobranche = (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 16l2-4 2 4h-1v4H8v-4H7zM21 16l2-4 2 4h-1v4h-2v-4h-1zM15 16l2-4 2 4h-1v4h-2v-4h-1z" />
    <path d="M5 20h22M5 23l22 0" strokeDasharray="2 2" />
  </svg>
);

const IconTrampoline = (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="9" r="2" />
    <path d="M16 11v5M13 14l3 -2 3 2M13 18l3 -2 3 2" />
    <ellipse cx="16" cy="22" rx="9" ry="2" />
    <path d="M9 23v3M23 23v3M16 24v2" />
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
    title: "Laser game",
    desc: "Vos enfants s'éclatent en équipe dans un jeu d'aventure 100% fun et immersif !",
    image: "/images/seccion2.jpg",
    alt: "Laser game chez Ludykid",
    href: "/billetterie",
    icon: IconLaser,
  },
  {
    title: "Accrobranche",
    desc: "Vos enfants prennent de la hauteur, se dépassent et gagnent en confiance !",
    image: "/images/seccion2.jpg",
    alt: "Accrobranche indoor chez Ludykid",
    href: "/billetterie",
    icon: IconAccrobranche,
  },
  {
    title: "Espace trampoline",
    desc: "Sauter, rebondir, jouer… Vos enfants se défoulent en toute sécurité !",
    image: "/images/seccion3.jpg",
    alt: "Trampoline park chez Ludykid",
    href: "/trampoline-park",
    icon: IconTrampoline,
  },
  {
    title: "Restauration",
    desc: "Une pause gourmande bien méritée pour reprendre des forces entre deux activités !",
    image: "/images/bar.png",
    alt: "Ludy'cafet chez Ludykid",
    href: "/restauration",
    icon: IconResto,
  },
];

export default function ActivitiesGrid() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Doodles décoratifs */}
      <div className="absolute top-10 left-6 opacity-30 pointer-events-none">
        <Doodle type="zigzag" color="#2E9E2E" size={64} />
      </div>
      <div className="absolute top-12 right-8 opacity-25 pointer-events-none">
        <Doodle type="star" color="#2E9E2E" size={48} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Titre */}
        <FadeInUp>
          <h2 className="text-center font-fredoka font-extrabold text-3xl md:text-5xl tracking-tight">
            <span className="text-[#0F1B5C]">Ludykid </span>
            <span className="text-lk-green">c&apos;est aussi :</span>
          </h2>
        </FadeInUp>

        {/* Carrousel/Grid avec flèches latérales */}
        <div className="relative mt-12">
          {/* Flèche gauche (décorative pour l'instant — JS scroll à brancher quand vraies données) */}
          <button
            type="button"
            aria-label="Précédent"
            className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-clay items-center justify-center text-lk-green hover:scale-110 transition-transform"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Suivant"
            className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-clay items-center justify-center text-lk-green hover:scale-110 transition-transform"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACTIVITIES.map((a, i) => (
              <FadeInUp key={a.title} delay={0.08 + i * 0.07}>
                <div className="h-full flex flex-col">
                  {/* Card principale */}
                  <div className="relative bg-white rounded-clay-lg shadow-clay flex flex-col h-full overflow-hidden">
                    {/* Image */}
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={a.image}
                        alt={a.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    {/* Cercle blanc avec icône verte (chevauche image / bloc texte) */}
                    <div className="relative -mt-9 mx-auto z-10">
                      <div className="w-[72px] h-[72px] rounded-full bg-white shadow-clay-sm flex items-center justify-center text-lk-green">
                        <div className="w-9 h-9">{a.icon}</div>
                      </div>
                    </div>

                    {/* Texte + bouton */}
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
                          className="group inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-lk-green text-white font-fredoka font-extrabold text-sm shadow-clay-green transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95"
                        >
                          Découvrir
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-lk-green shadow-clay-inset transition-transform duration-300 group-hover:-rotate-45">
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

          {/* Dots indicateurs (purement visuels pour l'instant) */}
          <div className="lg:hidden flex justify-center gap-2 mt-8">
            {ACTIVITIES.map((_, i) => (
              <span
                key={i}
                className={`block h-1.5 rounded-full transition-all ${i === 0 ? "w-6 bg-lk-green" : "w-1.5 bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
