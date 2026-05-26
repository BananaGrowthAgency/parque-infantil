import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroAccro from "@/components/accrobranche/HeroAccro";
import AccroIntro from "@/components/accrobranche/AccroIntro";
import ActivitiesGrid from "@/components/accrobranche/ActivitiesGrid";
import Cumple from "@/components/Cumple";
import Testimonios from "@/components/Testimonios";
import Galerie from "@/components/Galerie";
import InfosPratiques from "@/components/InfosPratiques";

export const metadata = {
  title: "Accrobranche enfant au Mans · Ludykid",
  description:
    "Accrobranche indoor pour enfants chez Ludykid Le Mans. Parcours adapté 4–12 ans, passerelles, ponts et obstacles en hauteur. Inclus dans la structure de jeux.",
};

export default function AccrobranchePage() {
  return (
    <main className="bg-[#FFF8CC]">
      <Navbar />
      <HeroAccro />
      <AccroIntro />
      <Cumple />
      <Testimonios />
      <ActivitiesGrid />
      <Galerie />
      <InfosPratiques />
      <Footer />
    </main>
  );
}
