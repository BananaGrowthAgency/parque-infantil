import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/ui/FadeInUp";
import SquiggleTitle from "@/components/ui/SquiggleTitle";
import Menu from "@/components/restauration/Menu";
import InfosUtilesContent from "@/components/restauration/InfosUtilesContent";
import CategoryCard from "@/components/restauration/CategoryCard";
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
  const others = CATEGORIES.filter((c) => c.slug !== slug);

  return (
    <main style={{ backgroundColor: cat.softBg }} className="min-h-screen">
      <Navbar />

      <section className="relative pt-28 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInUp className="mb-6">
            <a
              href="/restauration"
              className="inline-flex items-center gap-2 font-fredoka font-semibold text-base md:text-lg text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span aria-hidden="true">←</span> Retour à Ludy&apos;cafet
            </a>
          </FadeInUp>

          <FadeInUp className="mb-8">
            <div className="flex flex-col items-center gap-5">
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center text-6xl shadow-clay-inset bg-white"
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
        <div className={`max-w-4xl mx-auto bg-white rounded-clay-lg p-8 md:p-12 ${cat.shadow}`}>
          {cat.alert && (
            <p
              className="mb-7 text-center font-fredoka font-extrabold text-lg md:text-xl tracking-wide"
              style={{ color: cat.color }}
              role="note"
            >
              {cat.alert}
            </p>
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
      </section>

      {/* À découvrir aussi — las otras 4 categorías */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeInUp className="mb-10">
            <SquiggleTitle color={cat.color}>À découvrir aussi</SquiggleTitle>
          </FadeInUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((other, i) => (
              <FadeInUp key={other.slug} delay={i * 0.06}>
                <CategoryCard cat={other} compact />
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <Footer waveBg={cat.softBg} />
    </main>
  );
}
