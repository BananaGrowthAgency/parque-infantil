const letters = [
  { char: "L", bg: "#E8731A", shadow: "#b85510" },
  { char: "U", bg: "#7B35A0", shadow: "#5a2478" },
  { char: "D", bg: "#2E9E2E", shadow: "#1e6e1e" },
  { char: "Y", bg: "#FFD600", shadow: "#c8a800" },
  { char: "K", bg: "#D93030", shadow: "#a01e1e" },
  { char: "I", bg: "#2E6FCC", shadow: "#1e4e9a" },
  { char: "D", bg: "#E8409A", shadow: "#b02870" },
];

export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { letter: "text-2xl", padding: "px-1.5 py-0.5", gap: "gap-0.5" },
    md: { letter: "text-4xl", padding: "px-2 py-1", gap: "gap-1" },
    lg: { letter: "text-6xl", padding: "px-3 py-1.5", gap: "gap-1.5" },
  };
  const s = sizes[size];

  return (
    <span className={`flex items-center ${s.gap}`}>
      {letters.map((l, i) => (
        <span
          key={i}
          className={`font-fredoka font-700 leading-none ${s.letter} ${s.padding} rounded-lg text-white select-none`}
          style={{
            backgroundColor: l.bg,
            boxShadow: `0 3px 0 ${l.shadow}`,
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          {l.char}
        </span>
      ))}
    </span>
  );
}
