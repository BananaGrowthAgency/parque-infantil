const ORANGE = "#E8731A";

function PngIcon({ src, size = 52 }: { src: string; size?: number }) {
  return (
    <div
      aria-hidden
      style={{
        width: size,
        height: size,
        backgroundColor: ORANGE,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

const stats = [
  { src: "/images/faire-la-fete.png", label: "4 formules au choix" },
  { src: "/images/yoga.png", label: "100% fun 0% stress" },
  { src: "/images/etiquette-de-remise.png", label: "-20% sur les formules le dimanche" },
  { src: "/images/enfants.png", label: "1 à 12 ans" },
  { src: "/images/pile-de-pieces.png", label: "Dès 10,50€ /enfant" },
];

export default function StatsBarAnniversaire() {
  return (
    <div className="relative z-10 -mt-8 px-4 sm:px-8 lg:px-16">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="h-1 flex">
          {["#E8731A", "#7B35A0", "#2E9E2E", "#FFD600"].map((c, i) => (
            <div key={i} className="flex-1" style={{ backgroundColor: c }} />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center gap-3 px-3 py-6 hover:bg-orange-50 transition-colors"
            >
              <PngIcon src={s.src} />
              <p className="font-fredoka font-600 text-gray-800 text-sm text-center leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
