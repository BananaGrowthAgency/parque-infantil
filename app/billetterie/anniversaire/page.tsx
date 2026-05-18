import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Doodle from "@/components/Doodle";
import FadeInUp from "@/components/ui/FadeInUp";
import SquiggleTitle from "@/components/ui/SquiggleTitle";
import BilletterieHeader from "@/components/billetterie/BilletterieHeader";
import ClayButton from "@/components/ui/ClayButton";

export const metadata = {
  title: "Réservations Anniversaire · Ludykid Le Mans",
  description:
    "Choisissez votre formule d'anniversaire chez Ludykid : MaxiLudy, Ludykid, Libre ou Ludynight.",
};

const FORMULES = [
  {
    name: "Formule MaxiLudy",
    emoji: "🎂",
    price: "17,50 €",
    unit: "par enfant",
    note: "De 4 à 15 enfants",
    description:
      "La formule XXL pour des souvenirs inoubliables ! Gâteau, Champomy et bonbons. Table décorée, photo souvenir et animation fun. En bonus : une entrée offerte pour l'enfant fêté et un jeton de bumper pour chaque enfant. Ambiance garantie !",
    accent: "#E8731A",
    bg: "#FFF4EC",
    border: "border-lk-orange",
    shadow: "shadow-clay-orange",
    headerBg: "#E8731A",
  },
  {
    name: "Formule Ludykid",
    emoji: "🎉",
    price: "14,50 €",
    unit: "par enfant",
    note: "De 4 à 15 enfants",
    description:
      "La formule tout inclus, pour un anniversaire réussi ! Sirops à l'eau à volonté, un bol de bonbons (environ 50g par enfant), une part de gâteau, table dressée, une animation au choix.",
    accent: "#7B35A0",
    bg: "#F5EEFF",
    border: "border-lk-purple",
    shadow: "shadow-clay-purple",
    headerBg: "#7B35A0",
  },
  {
    name: "Formule Libre",
    emoji: "🎈",
    price: "10,50 €",
    unit: "par enfant",
    note: "De 8 à 15 enfants",
    description:
      "La formule idéale pour personnaliser l'anniversaire à votre guise ! Nous vous fournissons la table et les cartons d'invitation, vous vous occupez de tout le reste !",
    accent: "#2E9E2E",
    bg: "#EAF8EA",
    border: "border-lk-green",
    shadow: "shadow-clay-green",
    headerBg: "#2E9E2E",
  },
  {
    name: "Ludynight",
    emoji: "🌙",
    price: "11,00 €",
    unit: "par enfant",
    note: "Minimum 15 enfants · dès 9 ans",
    description:
      "Un vendredi par mois pour faire la fête entre petits potes ! Nous vous fournissons la table et les cartons d'invitation, vous vous occupez du reste !",
    accent: "#1A1A6E",
    bg: "#EEEEFF",
    border: "border-[#1A1A6E]",
    shadow: "shadow-clay",
    headerBg: "#1A1A6E",
  },
];

export default function AnniversaireReservationPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-8 px-6 overflow-hidden">
        <div className="absolute top-16 right-10 opacity-15 animate-float pointer-events-none">
          <Doodle type="star" color="#FFD600" size={65} />
        </div>
        <div className="absolute top-28 left-8 opacity-15 animate-wiggle pointer-events-none">
          <Doodle type="heart" color="#7B35A0" size={55} />
        </div>
        <FadeInUp>
          <SquiggleTitle color="#7B35A0">Réservations Anniversaire 🎂</SquiggleTitle>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="font-nunito text-center text-gray-600 text-base md:text-lg mt-4 max-w-xl mx-auto">
            Choisissez la formule qui correspond le mieux à votre fête et laissez-nous créer des souvenirs inoubliables !
          </p>
        </FadeInUp>
      </section>

      <BilletterieHeader />

      {/* Grille de formules */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FORMULES.map((f, i) => (
            <FadeInUp key={f.name} delay={i * 0.08}>
              <div className={`h-full flex flex-col rounded-clay-lg overflow-hidden border-[3px] ${f.border} ${f.shadow}`}
                style={{ backgroundColor: f.bg }}>

                {/* Header coloré */}
                <div
                  className="flex flex-col items-center justify-center gap-2 py-8 px-4"
                  style={{ backgroundColor: f.headerBg }}
                >
                  <span className="text-5xl drop-shadow-lg">{f.emoji}</span>
                  <h3 className="font-fredoka font-extrabold text-white text-center text-lg leading-tight">
                    {f.name}
                  </h3>
                  <span className="font-nunito text-xs text-white/75 text-center">{f.note}</span>
                </div>

                {/* Corps */}
                <div className="flex flex-col flex-1 p-5 gap-4">
                  <p className="font-nunito text-sm text-gray-600 leading-relaxed flex-1">
                    {f.description}
                  </p>

                  <div className="text-center">
                    <span className="font-fredoka font-extrabold text-2xl" style={{ color: f.accent }}>
                      {f.price}
                    </span>
                    <span className="font-nunito text-xs text-gray-400 block">{f.unit}</span>
                  </div>

                  <div className="flex justify-center">
                    <a
                      href={
                        f.name === "Formule MaxiLudy" ? "/billetterie/anniversaire/maxiludy"
                        : f.name === "Formule Ludykid" ? "/billetterie/anniversaire/ludykid"
                        : f.name === "Formule Libre" ? "/billetterie/anniversaire/libre"
                        : f.name === "Ludynight" ? "/billetterie/anniversaire/ludynight"
                        : "/anniversaire#formules"
                      }
                      className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-clay font-fredoka font-bold text-white text-sm transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95"
                      style={{
                        backgroundColor: f.headerBg,
                        boxShadow: `0 4px 0 0 color-mix(in srgb, ${f.headerBg} 55%, black)`,
                      }}
                    >
                      Choisir
                      <span
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-white transition-transform duration-300 group-hover:-rotate-45 group-hover:scale-110"
                        style={{ color: f.headerBg }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>

      <Footer waveBg="#F9FAFB" />
    </main>
  );
}
