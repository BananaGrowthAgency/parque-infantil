const ITEMS = [
  "🎉 Mercredi en folie",
  "✨ 1 ENTRÉE ACHETÉE = 1 ENTRÉE OFFERTE",
  "📍 chez Ludykid",
];

const TEXT = ITEMS.join("   ·   ");

export default function PromoBanner() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] w-full overflow-hidden bg-lk-orange h-9 flex items-center"
      aria-label="Promotion Mercredi en folie"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Content duplicated so the loop is seamless */}
        {[0, 1].map((n) => (
          <span key={n} className="flex items-center gap-10 pr-10 font-fredoka font-bold text-white text-sm tracking-wide">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="shrink-0">
                {TEXT}
                <span className="mx-6 opacity-60">★</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
