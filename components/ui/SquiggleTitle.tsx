import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  color: string;
  className?: string;
};

export default function SquiggleTitle({ children, color, className = "" }: Props) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="inline-flex flex-col items-stretch gap-2">
        <h2 className="font-fredoka text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide text-center">
          {children}
        </h2>
        <svg
          viewBox="0 0 240 14"
          preserveAspectRatio="none"
          className="w-0 min-w-full h-3.5"
          aria-hidden="true"
        >
          <path
            d="M2 8 Q 22 1, 42 8 T 82 8 T 122 8 T 162 8 T 202 8 T 238 8"
            stroke={color}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
