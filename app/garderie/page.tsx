import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroGarderie from "@/components/garderie/HeroGarderie";
import Garderie from "@/components/Garderie";
import FadeInUp from "@/components/ui/FadeInUp";

const BLUE = "#1877F2";

const FEATURES = [
  { icon: "/images/iconos/enfants.png",                  label: "Dès 4 ans",            desc: "adapté aux tout-petits" },
  { icon: "/images/iconos/medaille.png",                 label: "Animateurs qualifiés", desc: "surveillance permanente" },
  { icon: "/images/iconos/garderie-icon-activites.png",  label: "Activités encadrées",  desc: "jeux, jeux de société" },
  { icon: "/images/iconos/garderie-icon-entree.png",     label: "Entrée incluse",       desc: "accès au parc compris" },
];

export const metadata = {
  title: "La Garderie – Ludykid Le Mans",
  description: "Service garderie dès 4 ans chez Ludykid. Vos enfants sont encadrés par nos animateurs pendant que vous soufflez. 1h à partir de 10€.",
};

export default function GarderiePage() {
  return (
    <main className="bg-[#E8F7FF] min-h-screen">
      <Navbar />
      <HeroGarderie />

      {/* Tarjetas montadas sobre el corte del hero — mismo patrón que StatsBar */}
      <div className="relative z-10 -mt-10 sm:-mt-14 px-4 sm:px-6 mb-0">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {FEATURES.map((f, i) => (
            <FadeInUp key={f.label} y={20} delay={0.08 + i * 0.08} className="h-full">
              <div className="h-full rounded-clay-lg border-2 border-[#1877F2]/20 bg-white shadow-clay p-4 text-center space-y-1.5">
                <div
                  aria-hidden="true"
                  className="mx-auto"
                  style={{
                    width: 64,
                    height: 64,
                    backgroundColor: BLUE,
                    WebkitMaskImage: `url(${f.icon})`,
                    maskImage: `url(${f.icon})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                  }}
                />
                <p className="font-fredoka font-extrabold text-[#1877F2] text-sm">{f.label}</p>
                <p className="font-nunito text-gray-400 text-xs">{f.desc}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>

      <Garderie />
      <Footer waveBg="#FFF8EC" />
    </main>
  );
}
