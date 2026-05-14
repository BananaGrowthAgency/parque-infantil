import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroAnniversaire from "@/components/anniversaire/HeroAnniversaire";
import StatsBarAnniversaire from "@/components/anniversaire/StatsBarAnniversaire";
import FormulesTable from "@/components/anniversaire/FormulesTable";
import Dimanche from "@/components/anniversaire/Dimanche";
import Avis from "@/components/anniversaire/Avis";
import PhotosAnniv from "@/components/anniversaire/PhotosAnniv";
import InfosAnniv from "@/components/anniversaire/InfosAnniv";

export const metadata = {
  title: "Anniversaire – Ludykid Le Mans",
  description:
    "Fêtez l'anniversaire de votre enfant chez Ludykid au Mans. 4 formules au choix, -20% le dimanche. Réservez en ligne.",
};

export default function AnniversairePage() {
  return (
    <main>
      <Navbar />
      <HeroAnniversaire />
      <StatsBarAnniversaire />
      <FormulesTable />
      <Dimanche />
      <Avis />
      <PhotosAnniv />
      <InfosAnniv />
      <Footer />
    </main>
  );
}
