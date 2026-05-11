import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Atracciones from "@/components/Atracciones";
import Cumple from "@/components/Cumple";
import Galerie from "@/components/Galerie";
import Testimonios from "@/components/Testimonios";
import InfosPratiques from "@/components/InfosPratiques";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Atracciones />
      <Cumple />
      <Galerie />
      <Testimonios />
      <InfosPratiques />
      <Footer />
    </main>
  );
}
