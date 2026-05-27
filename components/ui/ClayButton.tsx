import { AnchorHTMLAttributes, ReactNode } from "react";

type Tone = "orange" | "purple" | "green" | "yellow" | "white" | "blue" | "orange-outline";
type Size = "sm" | "md" | "lg";

const tones: Record<
  Tone,
  { bg: string; text: string; shadow: string; dotBg: string; dotText: string; ring: string }
> = {
  orange: {
    bg: "bg-lk-orange",
    text: "text-white",
    shadow: "shadow-clay-orange",
    dotBg: "bg-white",
    dotText: "text-lk-orange",
    ring: "ring-white/40",
  },
  purple: {
    bg: "bg-lk-purple",
    text: "text-white",
    shadow: "shadow-clay-purple",
    dotBg: "bg-white",
    dotText: "text-lk-purple",
    ring: "ring-white/40",
  },
  green: {
    bg: "bg-lk-green",
    text: "text-white",
    shadow: "shadow-clay-green",
    dotBg: "bg-white",
    dotText: "text-lk-green",
    ring: "ring-white/40",
  },
  yellow: {
    bg: "bg-lk-yellow",
    text: "text-[#3A2A00]",
    shadow: "shadow-clay-yellow",
    dotBg: "bg-[#3A2A00]",
    dotText: "text-lk-yellow",
    ring: "ring-[#3A2A00]/30",
  },
  white: {
    bg: "bg-white",
    text: "text-gray-800",
    shadow: "shadow-clay",
    dotBg: "bg-lk-orange",
    dotText: "text-white",
    ring: "ring-lk-orange/30",
  },
  blue: {
    bg: "bg-[#1877F2]",
    text: "text-white",
    shadow: "shadow-clay-blue",
    dotBg: "bg-white",
    dotText: "text-[#1877F2]",
    ring: "ring-white/40",
  },
  "orange-outline": {
    bg: "bg-white border-2 border-lk-orange",
    text: "text-lk-orange",
    shadow: "shadow-clay-orange",
    dotBg: "bg-lk-orange",
    dotText: "text-white",
    ring: "ring-lk-orange/30",
  },
};

const sizes: Record<Size, { pad: string; text: string; dot: string; iconSize: string }> = {
  sm: { pad: "pl-5 pr-2 py-1.5",  text: "text-sm",  dot: "w-7 h-7",  iconSize: "w-3.5 h-3.5" },
  md: { pad: "pl-6 pr-2.5 py-2.5", text: "text-base", dot: "w-9 h-9",  iconSize: "w-4 h-4" },
  lg: { pad: "pl-8 pr-3 py-3",     text: "text-lg",  dot: "w-11 h-11", iconSize: "w-5 h-5" },
};

type ClayButtonProps = {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  tone?: Tone;
  size?: Size;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  dotContent?: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick" | "className" | "children" | "aria-label">;

export default function ClayButton({
  href,
  onClick,
  type = "button",
  tone = "orange",
  size = "md",
  children,
  className = "",
  ariaLabel,
  dotContent,
  ...rest
}: ClayButtonProps) {
  const t = tones[tone];
  const sz = sizes[size];

  const inner = (
    <>
      <span className={`flex-1 text-center font-fredoka font-extrabold ${sz.text} ${t.text} tracking-wide`}>
        {children}
      </span>
      <span
        className={`flex shrink-0 items-center justify-center rounded-full ${t.dotBg} ${t.dotText} ${sz.dot} ring-2 ${t.ring} shadow-clay-inset transition-transform duration-300 ease-out group-hover:scale-110 group-active:scale-95`}
        aria-hidden="true"
      >
        {dotContent ?? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={sz.iconSize}
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        )}
      </span>
    </>
  );

  const base = `group inline-flex items-center justify-between gap-3 rounded-full ${t.bg} ${t.shadow} ${sz.pad} transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] active:translate-y-0 active:scale-100 ${className}`;

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className={base} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel} className={base}>
      {inner}
    </button>
  );
}
