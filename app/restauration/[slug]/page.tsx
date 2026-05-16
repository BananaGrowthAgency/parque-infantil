import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/ui/FadeInUp";
import SquiggleTitle from "@/components/ui/SquiggleTitle";
import Menu from "@/components/restauration/Menu";
import InfosUtilesContent from "@/components/restauration/InfosUtilesContent";
import { CATEGORIES } from "@/components/restauration/data";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: `${cat.label} – Ludy'cafet · Ludykid Le Mans`,
    description: `Carte ${cat.label.toLowerCase()} disponible chez Ludy'cafet, le coin gourmand de Ludykid Le Mans.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) notFound();

  const isInfos = slug === "infos-utiles";

  return (
    <main style={{ backgroundColor: cat.softBg }} className="min-h-screen">
      <Navbar />

      <section className="relative pt-28 pb-8 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeInUp className="mb-6">
            <a
              href="/restauration"
              className="inline-flex items-center gap-2 font-fredoka font-semibold text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span aria-hidden="true">←</span> Retour à Ludy&apos;cafet
            </a>
          </FadeInUp>

          <FadeInUp className="mb-8">
            <div className="flex flex-col items-center gap-5">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-5xl shadow-clay-inset bg-white"
                aria-hidden="true"
              >
                {cat.emoji}
              </div>
              <SquiggleTitle color={cat.color}>{cat.label}</SquiggleTitle>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="pb-20 px-6">
        <FadeInUp delay={0.1} className="max-w-3xl mx-auto">
          <div className={`bg-white rounded-clay-lg p-7 md:p-10 ${cat.shadow}`}>
            {cat.alert && (
              <div className="mb-7 flex justify-center" role="note">
                <div
                  className={`inline-block font-fredoka font-extrabold text-white px-6 py-3 rounded-full text-center text-sm md:text-base tracking-wide ${cat.shadow}`}
                  style={{ backgroundColor: cat.color }}
                >
                  {cat.alert}
                </div>
              </div>
            )}

            {isInfos ? (
              <InfosUtilesContent />
            ) : cat.sections ? (
              <Menu sections={cat.sections} color={cat.color} />
            ) : (
              <div className="py-12 text-center font-nunito italic text-gray-400">
                Carte à venir 🍴
              </div>
            )}
          </div>
        </FadeInUp>
      </section>

      <Footer waveBg={cat.softBg} />
    </main>
  );
}
