import { ElementType, HTMLAttributes, ReactNode } from "react";

type ClayTone = "white" | "orange" | "purple" | "green" | "yellow" | "cream";
type ClaySize = "sm" | "md" | "lg";

const toneClasses: Record<ClayTone, string> = {
  white: "bg-white shadow-clay",
  cream: "bg-[#FFFAF2] shadow-clay",
  orange: "bg-lk-orange text-white shadow-clay-orange",
  purple: "bg-lk-purple text-white shadow-clay-purple",
  green: "bg-lk-green text-white shadow-clay-green",
  yellow: "bg-lk-yellow text-[#3A2A00] shadow-clay-yellow",
};

const sizeClasses: Record<ClaySize, string> = {
  sm: "rounded-clay p-4",
  md: "rounded-clay-lg p-6",
  lg: "rounded-clay-xl p-8",
};

type ClayCardProps<T extends ElementType = "div"> = {
  as?: T;
  tone?: ClayTone;
  size?: ClaySize;
  interactive?: boolean;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">;

export default function ClayCard<T extends ElementType = "div">({
  as,
  tone = "white",
  size = "md",
  interactive = false,
  className = "",
  children,
  ...rest
}: ClayCardProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const interactiveClasses = interactive
    ? "transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-100"
    : "";
  return (
    <Tag
      className={`${toneClasses[tone]} ${sizeClasses[size]} ${interactiveClasses} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
