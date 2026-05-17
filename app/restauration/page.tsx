import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Doodle from "@/components/Doodle";
import FadeInUp from "@/components/ui/FadeInUp";
import FadeInOnMount from "@/components/ui/FadeInOnMount";
import SquiggleTitle from "@/components/ui/SquiggleTitle";
import CategoryCard from "@/components/restauration/CategoryCard";
import { CATEGORIES } from "@/components/restauration/data";

export const metadata = {
  title: "Restauration – Ludy'cafet · Ludykid Le Mans",
  description:
    "Découvrez Ludy'cafet : boissons fraîches, boissons chaudes, plaisirs sucrés et plaisirs salés à déguster pendant votre visite chez Ludykid.",
};

export default function RestaurationPage() {
  return (
    <main className="bg-[#F4FBF4] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute top-12 left-8 opacity-20 animate-float pointer-events-none">
          <Doodle type="star" color="#2E9E2E" size={65} />
        </div>
        <div className="absolute top-24 right-12 opacity-15 animate-float-slow pointer-events-none">
          <Doodle type="cloud" color="#E8731A" size={80} />
        </div>
        <div className="absolute bottom-6 left-16 opacity-20 animate-wiggle pointer-events-none">
          <Doodle type="heart" color="#FFD600" size={56} />
        </div>
        <div className="absolute top-32 right-24 opacity-15 animate-spin-slow pointer-events-none">
          <Doodle type="circle" color="#7B35A0" size={50} />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <FadeInUp className="mb-10">
            <SquiggleTitle color="#2E9E2E">Ludy&apos;cafet 🍴</SquiggleTitle>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="bg-white rounded-clay-lg p-8 shadow-clay text-center">
              <p className="font-nunito text-gray-700 text-base md:text-lg leading-relaxed mb-3">
                Retrouvez ici la carte des consommations : boissons fraîches, boissons chaudes, plaisirs sucrés ou salés…
              </p>
              <p className="font-nunito text-gray-600 text-sm md:text-base italic">
                Nous vous rappelons que les goûters et boissons apportés de l&apos;extérieur sont interdits dans l&apos;enceinte du parc !
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Grid de catégories */}
      <section className="pb-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATEGORIES.map((cat, i) => (
            <FadeInOnMount
              key={cat.slug}
              delay={i * 0.08}
              className={i === CATEGORIES.length - 1 && CATEGORIES.length % 2 === 1 ? "md:col-span-2 md:max-w-md md:mx-auto md:w-full" : ""}
            >
              <CategoryCard cat={cat} />
            </FadeInOnMount>
          ))}
        </div>
      </section>

      {/* Paiements acceptés */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-clay p-5 shadow-clay-sm text-center">
            <p className="font-fredoka text-gray-700 text-base md:text-lg">
              <span className="font-extrabold text-lk-green">Paiements acceptés :</span>{" "}
              Carte bancaire · Espèces · Chèques vacances
            </p>
          </div>
        </div>
      </section>

      <Footer waveBg="#F4FBF4" />
    </main>
  );
}
