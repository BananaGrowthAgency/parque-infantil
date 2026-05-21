import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EspacePetits from "@/components/EspacePetits";

export const metadata = {
  title: "Espace 1–3 ans – Ludykid Le Mans",
  description: "Un espace de jeux intérieur sécurisé dédié aux tout-petits de 1 à 3 ans : parcours de motricité, piscine à balles, toboggans et plus encore.",
};

export default function EspacePetitsPage() {
  return (
    <main className="bg-[#FFF4EC] min-h-screen">
      <Navbar />
      <div className="pt-24" />
      <EspacePetits />
      <Footer waveBg="#F9FAFB" />
    </main>
  );
}
