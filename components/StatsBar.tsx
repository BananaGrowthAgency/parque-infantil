const COLOR = "#E8731A";
const SW = 2.8; // strokeWidth base

const MedalIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Círculo exterior */}
    <circle cx="32" cy="26" r="18" stroke={COLOR} strokeWidth={SW} />
    {/* Estrella interior */}
    <path
      d="M32 16 L34.4 22.8 L41.6 22.8 L35.9 27 L38.2 33.8 L32 29.8 L25.8 33.8 L28.1 27 L22.4 22.8 L29.6 22.8 Z"
      stroke={COLOR} strokeWidth={2} strokeLinejoin="round"
    />
    {/* Cinta izquierda */}
    <path d="M24 43 L18 60 L32 52" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    {/* Cinta derecha */}
    <path d="M40 43 L46 60 L32 52" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32 6 L37.6 22.2 L55 22.2 L41.2 32.4 L46.8 48.6 L32 38.6 L17.2 48.6 L22.8 32.4 L9 22.2 L26.4 22.2 Z"
      stroke={COLOR} strokeWidth={SW} strokeLinejoin="round"
    />
  </svg>
);

const ResizeIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Rectángulo punteado */}
    <rect x="6" y="6" width="52" height="52" stroke={COLOR} strokeWidth={SW} strokeDasharray="7 4" rx="2" />
    {/* Flecha esquina superior-izquierda */}
    <polyline points="22,10 10,10 10,22" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    {/* Flecha esquina superior-derecha */}
    <polyline points="42,10 54,10 54,22" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    {/* Flecha esquina inferior-izquierda */}
    <polyline points="22,54 10,54 10,42" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    {/* Flecha esquina inferior-derecha */}
    <polyline points="42,54 54,54 54,42" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
    {/* Líneas diagonales cruzadas */}
    <line x1="10" y1="10" x2="54" y2="54" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" />
    <line x1="54" y1="10" x2="10" y2="54" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" />
  </svg>
);

const KidsIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Niña — cabeza */}
    <circle cx="20" cy="18" r="10" stroke={COLOR} strokeWidth={SW} />
    {/* Moños */}
    <circle cx="11" cy="10" r="4" stroke={COLOR} strokeWidth={2} />
    <circle cx="29" cy="10" r="4" stroke={COLOR} strokeWidth={2} />
    {/* Cuerpo niña */}
    <path d="M10 28 Q20 32 30 28 L28 50 L12 50 Z" stroke={COLOR} strokeWidth={SW} strokeLinejoin="round" />
    {/* Brazos niña */}
    <line x1="10" y1="30" x2="5" y2="42" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" />
    <line x1="30" y1="30" x2="35" y2="42" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" />

    {/* Niño — cabeza */}
    <circle cx="46" cy="18" r="10" stroke={COLOR} strokeWidth={SW} />
    {/* Cuerpo niño */}
    <path d="M36 28 Q46 32 56 28 L54 50 L38 50 Z" stroke={COLOR} strokeWidth={SW} strokeLinejoin="round" />
    {/* Brazos niño */}
    <line x1="36" y1="30" x2="31" y2="42" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" />
    <line x1="56" y1="30" x2="61" y2="42" stroke={COLOR} strokeWidth={SW} strokeLinecap="round" />
  </svg>
);

const PartyIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cuerpo del cucurucho */}
    <path d="M8 56 L48 16 L38 8 Z" stroke={COLOR} strokeWidth={SW} strokeLinejoin="round" />
    {/* Abertura del cucurucho (elipse) */}
    <ellipse cx="8" cy="56" rx="5" ry="4" stroke={COLOR} strokeWidth={SW} />
    {/* Líneas decorativas del cucurucho */}
    <line x1="18" y1="46" x2="38" y2="16" stroke={COLOR} strokeWidth={1.5} strokeLinecap="round" strokeDasharray="3 3" />
    {/* Confeti — puntos */}
    <circle cx="52" cy="10" r="3" fill={COLOR} />
    <circle cx="58" cy="24" r="2.5" fill={COLOR} />
    <circle cx="44" cy="6" r="2" fill={COLOR} />
    {/* Confeti — estrellita */}
    <path
      d="M56 34 L57.2 37.5 L61 37.5 L58.1 39.6 L59.3 43.1 L56 41 L52.7 43.1 L53.9 39.6 L51 37.5 L54.8 37.5 Z"
      fill={COLOR}
    />
    {/* Destello */}
    <line x1="60" y1="14" x2="60" y2="18" stroke={COLOR} strokeWidth={2} strokeLinecap="round" />
    <line x1="58" y1="16" x2="62" y2="16" stroke={COLOR} strokeWidth={2} strokeLinecap="round" />
  </svg>
);

const stats = [
  { icon: <MedalIcon />, label: "Depuis 15 ans" },
  { icon: <StarIcon />, label: "200+ Avis 5/5" },
  { icon: <ResizeIcon />, label: "1200 m2" },
  { icon: <KidsIcon />, label: "1 à 12 ans" },
  { icon: <PartyIcon />, label: "Anniversaire\nclé en main" },
];

export default function StatsBar() {
  return (
    <div className="bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="flex items-start justify-between gap-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 flex-1">
              <div className="flex items-center justify-center">{s.icon}</div>
              <p className="font-fredoka font-600 text-gray-800 text-sm text-center leading-snug whitespace-pre-line">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
