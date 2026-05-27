import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroEscape from "@/components/escape-game/HeroEscape";
import EscapeIntro from "@/components/escape-game/EscapeIntro";
import ActivitiesGrid from "@/components/escape-game/ActivitiesGrid";
import Cumple from "@/components/Cumple";
import Testimonios from "@/components/Testimonios";
import Galerie from "@/components/Galerie";
import InfosPratiques from "@/components/InfosPratiques";

export const metadata = {
  title: "Escape Game enfant au Mans · Ludykid",
  description:
    "Escape Game enfant en réalité augmentée chez Ludykid Le Mans. Dès 9 ans, énigmes à résoudre en équipe, sans les parents. 3 € la partie par enfant.",
};

export default function EscapeGamePage() {
  return (
    <main className="bg-[#F4FBF4]">
      <Navbar />
      <HeroEscape />
      <EscapeIntro />
      <Cumple nextBg="white" tone="purple" />
      <Testimonios nextBg="white" />
      <ActivitiesGrid />
      <Galerie />
      <InfosPratiques />
      <Footer />
    </main>
  );
}
