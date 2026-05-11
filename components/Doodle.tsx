type DoodleProps = {
  type: "star" | "star2" | "heart" | "swirl" | "dots" | "cloud" | "zigzag" | "circle";
  color?: string;
  size?: number;
  className?: string;
  animate?: boolean;
};

export default function Doodle({
  type,
  color = "#E8731A",
  size = 60,
  className = "",
  animate = false,
}: DoodleProps) {
  const anim = animate ? "animate-wiggle" : "";

  const shapes: Record<string, JSX.Element> = {
    star: (
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none" className={`${anim} ${className}`}>
        <path
          d="M40 6 L47 30 L72 30 L52 46 L59 70 L40 55 L21 70 L28 46 L8 30 L33 30 Z"
          stroke={color} strokeWidth="3.5" strokeLinejoin="round"
          fill={color} fillOpacity="0.15"
        />
        <line x1="76" y1="16" x2="80" y2="12" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="70" y1="10" x2="74" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <line x1="73" y1="14" x2="78" y2="14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    star2: (
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none" className={`${anim} ${className}`}>
        <path
          d="M30 4 L34 22 L52 22 L38 34 L43 52 L30 42 L17 52 L22 34 L8 22 L26 22 Z"
          stroke={color} strokeWidth="3" strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
    heart: (
      <svg width={size} height={size} viewBox="0 0 70 70" fill="none" className={`${anim} ${className}`}>
        <path
          d="M35 58 C35 58 8 42 8 22 C8 12 16 6 24 8 C29 9 33 13 35 16 C37 13 41 9 46 8 C54 6 62 12 62 22 C62 42 35 58 35 58 Z"
          stroke={color} strokeWidth="3" strokeLinejoin="round"
          fill={color} fillOpacity="0.15"
        />
      </svg>
    ),
    swirl: (
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none" className={`${anim} ${className}`}>
        <path
          d="M60 40 C60 26 50 14 36 14 C22 14 10 24 10 40 C10 54 20 64 34 64 C46 64 54 56 54 46 C54 36 46 30 36 30 C26 30 22 38 22 44 C22 50 28 54 34 54"
          stroke={color} strokeWidth="3" strokeLinecap="round" fill="none"
        />
      </svg>
    ),
    dots: (
      <svg width={size} height={size * 0.6} viewBox="0 0 90 50" fill="none" className={`${anim} ${className}`}>
        <circle cx="10" cy="25" r="7" fill={color} fillOpacity="0.8"/>
        <circle cx="30" cy="12" r="5" fill={color} fillOpacity="0.6"/>
        <circle cx="50" cy="30" r="8" fill={color} fillOpacity="0.7"/>
        <circle cx="70" cy="15" r="4" fill={color} fillOpacity="0.5"/>
        <circle cx="85" cy="32" r="6" fill={color} fillOpacity="0.65"/>
      </svg>
    ),
    cloud: (
      <svg width={size} height={size * 0.65} viewBox="0 0 100 65" fill="none" className={`${anim} ${className}`}>
        <path
          d="M20 50 Q8 50 8 38 Q8 28 18 26 Q16 8 32 8 Q42 8 46 18 Q52 12 62 14 Q76 16 76 30 Q84 30 86 40 Q88 52 76 52 Z"
          stroke={color} strokeWidth="3" strokeLinejoin="round"
          fill={color} fillOpacity="0.1"
        />
      </svg>
    ),
    zigzag: (
      <svg width={size * 1.5} height={size * 0.4} viewBox="0 0 120 40" fill="none" className={`${anim} ${className}`}>
        <path
          d="M4 30 L20 10 L36 30 L52 10 L68 30 L84 10 L100 30 L116 10"
          stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
      </svg>
    ),
    circle: (
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none" className={`${anim} ${className}`}>
        <circle cx="30" cy="30" r="24"
          stroke={color} strokeWidth="3" strokeDasharray="8 5"
          fill={color} fillOpacity="0.1"
        />
      </svg>
    ),
  };

  return shapes[type] ?? null;
}
