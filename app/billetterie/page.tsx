import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Doodle from "@/components/Doodle";
import FadeInUp from "@/components/ui/FadeInUp";
import SquiggleTitle from "@/components/ui/SquiggleTitle";
import Billetterie from "@/components/billetterie/Billetterie";

export const metadata = {
  title: "Billetterie · Ludykid Le Mans",
  description:
    "Achetez vos billets en ligne pour Ludykid : entrées 1–3 ans, 4–12 ans, cartes 10 entrées et accompagnateurs.",
};

export default function BilletteriePage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-8 px-6 overflow-hidden">
        <div className="absolute top-16 right-10 opacity-15 animate-float pointer-events-none">
          <Doodle type="star" color="#FFD600" size={65} />
        </div>
        <div className="absolute top-28 left-8 opacity-15 animate-wiggle pointer-events-none">
          <Doodle type="circle" color="#E8731A" size={55} />
        </div>
        <FadeInUp>
          <SquiggleTitle color="#E8731A">Billetterie 🎫</SquiggleTitle>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="font-nunito text-center text-gray-600 text-base md:text-lg mt-4 max-w-xl mx-auto">
            Sélectionnez vos billets, ajustez les quantités et finalisez votre commande en quelques clics.
          </p>
        </FadeInUp>
      </section>

      <Billetterie />

      <Footer waveBg="#F9FAFB" />
    </main>
  );
}
