const COLOR = "#E8731A";
const SW = 2.5;

const MedalIcon = () => (
  <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="26" r="18" stroke={COLOR} strokeWidth={SW} />
    <path d="M32 16 L34.4 22.8 L41.6 22.8 L35.9 27 L38.2 33.8 L32 29.8 L25.8 33.8 L28.1 27 L22.4 22.8 L29.6 22.8 Z"
      stroke={COLOR} strokeWidth={2} strokeLinejoin="round" />
    <path d="M24 43 L18 60 L32 52" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 43 L46 60 L32 52" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarIcon = () => (
  <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
    <path d="M32 6 L37.6 22.2 L55 22.2 L41.2 32.4 L46.8 48.6 L32 38.6 L17.2 48.6 L22.8 32.4 L9 22.2 L26.4 22.2 Z"
      stroke={COLOR} strokeWidth={SW} strokeLinejoin="round" />
  </svg>
);

const ResizeIcon = () => (
  <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
    <rect x="6" y="6" width="52" height="52" stroke={COLOR} strokeWidth={SW} strokeDasharray="7 4" rx="2" />
    <polyline points="22,10 10,10 10,22" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="42,10 54,10 54,22" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="22,54 10,54 10,42" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="42,54 54,54 54,42" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    <line x1="10" y1="10" x2="54" y2="54" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" />
    <line x1="54" y1="10" x2="10" y2="54" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" />
  </svg>
);

/* Niños: replica fiel de la imagen de referencia */
const KidsIcon = () => (
  <svg width="56" height="56" viewBox="0 0 72 60" fill="none">
    {/* ── Niña (izquierda) ── */}
    {/* Moños */}
    <circle cx="16" cy="7"  r="4.5" stroke={COLOR} strokeWidth={SW} />
    <circle cx="28" cy="7"  r="4.5" stroke={COLOR} strokeWidth={SW} />
    {/* Cabeza */}
    <circle cx="22" cy="17" r="10"  stroke={COLOR} strokeWidth={SW} />
    {/* Cuello */}
    <line x1="22" y1="27" x2="22" y2="31" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" />
    {/* Cuerpo (vestido) */}
    <path d="M12 31 Q22 35 32 31 L30 52 L14 52 Z" stroke={COLOR} strokeWidth={SW} strokeLinejoin="round" />
    {/* Brazos */}
    <line x1="13" y1="33" x2="7"  y2="45" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" />
    <line x1="31" y1="33" x2="37" y2="45" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" />

    {/* ── Niño (derecha) ── */}
    {/* Cabeza */}
    <circle cx="52" cy="17" r="10" stroke={COLOR} strokeWidth={SW} />
    {/* Cuello */}
    <line x1="52" y1="27" x2="52" y2="31" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" />
    {/* Cuerpo (pantalón + torso) */}
    <path d="M42 31 Q52 35 62 31 L60 52 L44 52 Z" stroke={COLOR} strokeWidth={SW} strokeLinejoin="round" />
    {/* Línea pantalón central */}
    <line x1="52" y1="40" x2="52" y2="52" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" />
    {/* Brazos */}
    <line x1="43" y1="33" x2="37" y2="45" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" />
    <line x1="61" y1="33" x2="67" y2="45" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" />
  </svg>
);

/* Cucurucho: replica fiel de la imagen de referencia */
const PartyIcon = () => (
  <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
    {/* Cuerpo del cucurucho / corneta */}
    <path d="M6 58 L50 14" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" />
    <path d="M6 58 L14 50 L50 14 L42 6 Z" stroke={COLOR} strokeWidth={SW} strokeLinejoin="round" />
    {/* Apertura de la boca (elipse inclinada) */}
    <ellipse cx="10" cy="54" rx="5" ry="4"
      transform="rotate(-45 10 54)"
      stroke={COLOR} strokeWidth={SW} />
    {/* Franja decorativa diagonal */}
    <line x1="18" y1="48" x2="44" y2="20" stroke={COLOR} strokeWidth={1.5} strokeLinecap="round" strokeDasharray="3 4" />
    {/* Confeti — círculos */}
    <circle cx="54" cy="10" r="3"   fill={COLOR} />
    <circle cx="58" cy="22" r="2.5" fill={COLOR} />
    <circle cx="44" cy="6"  r="2"   fill={COLOR} />
    {/* Confeti — estrella pequeña */}
    <path d="M56 32 L57.5 37 L62 37 L58.5 40 L60 45 L56 42 L52 45 L53.5 40 L50 37 L54.5 37 Z"
      fill={COLOR} />
    {/* Destellos de cruz */}
    <line x1="60" y1="12" x2="60" y2="17" stroke={COLOR} strokeWidth={2} strokeLinecap="round" />
    <line x1="57.5" y1="14.5" x2="62.5" y2="14.5" stroke={COLOR} strokeWidth={2} strokeLinecap="round" />
  </svg>
);

const stats = [
  { icon: <MedalIcon />,  label: "Depuis 15 ans" },
  { icon: <StarIcon />,   label: "200+ Avis 5/5" },
  { icon: <ResizeIcon />, label: "1200 m2" },
  { icon: <KidsIcon />,   label: "1 à 12 ans" },
  { icon: <PartyIcon />,  label: "Anniversaire\nclé en main" },
];

export default function StatsBar() {
  return (
    /* Card flotante que solapa ligeramente el hero */
    <div className="relative z-10 -mt-8 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Línea de color superior */}
          <div className="h-1 flex">
            {["#E8731A","#7B35A0","#2E9E2E","#FFD600","#E8409A"].map((c) => (
              <div key={c} className="flex-1" style={{ backgroundColor: c }} />
            ))}
          </div>

          {/* Contenido */}
          <div className="flex items-stretch divide-x divide-gray-100">
            {stats.map((s) => (
              <div key={s.label}
                className="flex flex-col items-center justify-center gap-3 flex-1 px-3 py-6 hover:bg-orange-50 transition-colors duration-200 cursor-default">
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
