const SBCOLOR = "#E8731A";

function PngIcon({ src, size = 56 }: { src: string; size?: number }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        backgroundColor: SBCOLOR,
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
  { icon: <PngIcon src="/images/medaille.png" />,      label: "Depuis 15 ans" },
  { icon: <PngIcon src="/images/etoile.png" />,        label: "200+ Avis 5/5" },
  { icon: <PngIcon src="/images/reseau.png" />,        label: "1200 m2" },
  { icon: <PngIcon src="/images/enfants.png" />,       label: "1 à 12 ans" },
  { icon: <PngIcon src="/images/faire-la-fete.png" />, label: "Anniversaire\nclé en main" },
];

export default function StatsBar() {
  return (
    <div className="relative z-10 -mt-8 px-4 sm:px-8 lg:px-16">
      <div className="max-w-full">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="h-1 flex">
            {["#E8731A", "#7B35A0", "#2E9E2E", "#FFD600"].map((c, i) => (
              <div key={i} className="flex-1" style={{ backgroundColor: c }} />
            ))}
          </div>

          <div className="flex items-stretch divide-x divide-gray-100">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center gap-3 flex-1 px-3 py-6 hover:bg-orange-50 transition-colors duration-200 cursor-default"
              >
                {s.icon}
                <p className="font-fredoka font-600 text-gray-800 text-sm text-center leading-snug whitespace-pre-line">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
