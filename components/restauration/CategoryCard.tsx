import type { Categorie } from "./data";

type Props = {
  cat: Categorie;
  compact?: boolean;
};

export default function CategoryCard({ cat, compact = false }: Props) {
  return (
    <div
      className={`h-full rounded-clay-lg ${compact ? "p-6" : "p-8"} ${cat.shadow} bg-white transition-transform duration-300 hover:-translate-y-1`}
    >
      <div
        className={`flex items-center justify-center mb-4 ${compact ? "min-h-[3.5rem]" : "min-h-[4.5rem]"}`}
      >
        <h3
          className={`font-fredoka ${compact ? "text-lg md:text-xl" : "text-2xl md:text-3xl"} font-extrabold text-gray-800 text-center leading-tight`}
        >
          {cat.label}
        </h3>
      </div>
      <div className={`flex justify-center ${compact ? "mb-4" : "mb-6"}`}>
        <div
          className={`${compact ? "w-20 h-20 text-4xl" : "w-28 h-28 text-5xl"} rounded-full flex items-center justify-center shadow-clay-inset`}
          style={{ backgroundColor: cat.softBg }}
          aria-hidden="true"
        >
          {cat.emoji}
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href={`/restauration/${cat.slug}`}
          className={`font-fredoka font-semibold ${compact ? "px-5 py-1.5 text-sm" : "px-6 py-2"} rounded-full text-white shadow-clay-sm transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5`}
          style={{ backgroundColor: cat.color }}
        >
          En savoir plus
        </a>
      </div>
    </div>
  );
}
