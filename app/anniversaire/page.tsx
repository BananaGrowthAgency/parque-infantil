import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Wave from "@/components/Wave";
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

// Colores de fondo por sección — referenciados aquí para las olas de transición
const BG_BODY = "#ffffff";
const BG_FORMULES = "#FFF8EC"; // crema-amarillo
const BG_DIMANCHE = "#F5EEFF"; // morado claro
const BG_AVIS = "#EDFAED"; // verde claro
const BG_PHOTOS = "#F8F4FF"; // morado claro alt
const BG_INFOS = "#F9FAFB"; // gris-50

export default function AnniversairePage() {
  return (
    <main>
      <Navbar />
      <HeroAnniversaire />
      <StatsBarAnniversaire />
      <Wave fill={BG_FORMULES} bg={BG_BODY} />
      <FormulesTable />
      <Wave fill={BG_DIMANCHE} bg={BG_FORMULES} />
      <Dimanche />
      <Wave fill={BG_AVIS} bg={BG_DIMANCHE} />
      <Avis />
      <Wave fill={BG_PHOTOS} bg={BG_AVIS} />
      <PhotosAnniv />
      <Wave fill={BG_INFOS} bg={BG_PHOTOS} />
      <InfosAnniv />
      <Footer />
    </main>
  );
}
