import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Wave from "@/components/Wave";
import Garderie from "@/components/Garderie";

export const metadata = {
  title: "La Garderie – Ludykid Le Mans",
  description: "Service garderie dès 4 ans chez Ludykid. Vos enfants sont encadrés par nos animateurs pendant que vous soufflez. 1h à partir de 10€.",
};

export default function GarderiePage() {
  return (
    <main className="bg-[#E8F7FF] min-h-screen">
      <Navbar />
      <div className="pt-24" />
      <Garderie />
      <Wave fill="#F9FAFB" bg="#E8F7FF" />
      <Footer waveBg="#F9FAFB" />
    </main>
  );
}
