import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroTrampoline from "@/components/trampoline/HeroTrampoline";
import TrampolineIntro from "@/components/trampoline/TrampolineIntro";
import ActivitiesGrid from "@/components/trampoline/ActivitiesGrid";
import Cumple from "@/components/Cumple";
import Testimonios from "@/components/Testimonios";
import Galerie from "@/components/Galerie";
import InfosPratiques from "@/components/InfosPratiques";

export const metadata = {
  title: "Ludykid | Espace Trampoline Enfant Le Mans",
  description:
    "À la recherche d'un espace trampoline pour votre enfant au Mans ? Offrez-lui un espace ludique et sécurisé pour se dépenser et s'amuser chez Ludykid.",
};

export default function TrampolinePage() {
  return (
    <main className="bg-[#FFF8EC] min-h-screen">
      <Navbar />
      <HeroTrampoline />
      <TrampolineIntro nextBg="#EDFAED" />
      <Cumple nextBg="white" tone="purple" />
      <Testimonios nextBg="white" />
      <ActivitiesGrid />
      <Galerie />
      <InfosPratiques />
      <Footer waveBg="#F9FAFB" />
    </main>
  );
}
