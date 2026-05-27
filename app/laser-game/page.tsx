import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroLaser from "@/components/laser-game/HeroLaser";
import LaserIntro from "@/components/laser-game/LaserIntro";
import ActivitiesGrid from "@/components/laser-game/ActivitiesGrid";
import Cumple from "@/components/Cumple";
import Testimonios from "@/components/Testimonios";
import Galerie from "@/components/Galerie";
import InfosPratiques from "@/components/InfosPratiques";

export const metadata = {
  title: "Laser Game enfant au Mans · Ludykid",
  description:
    "Laser Game enfant chez Ludykid Le Mans. Dès 5 ans, en équipe, dans un univers futuriste. À partir de 3 € la partie.",
};

export default function LaserGamePage() {
  return (
    <main className="bg-[#F5EEFF]">
      <Navbar />
      <HeroLaser />
      <LaserIntro />
      <Cumple nextBg="white" />
      <Testimonios nextBg="white" />
      <ActivitiesGrid />
      <Galerie />
      <InfosPratiques />
      <Footer />
    </main>
  );
}
