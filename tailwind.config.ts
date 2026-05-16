import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["var(--font-fredoka)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      colors: {
        lk: {
          orange: "#E8731A",
          purple: "#7B35A0",
          green: "#2E9E2E",
          yellow: "#FFD600",
          red: "#E8731A",
          blue: "#2E9E2E",
          pink: "#7B35A0",
        },
      },
      borderRadius: {
        clay: "1.75rem",
        "clay-lg": "2.5rem",
        "clay-xl": "3rem",
      },
      boxShadow: {
        clay:
          "0 10px 20px -8px rgba(123, 53, 160, 0.18), 0 4px 8px -2px rgba(0,0,0,0.06), inset 0 -4px 0 0 rgba(0,0,0,0.06), inset 0 2px 0 0 rgba(255,255,255,0.55)",
        "clay-sm":
          "0 6px 12px -6px rgba(123, 53, 160, 0.18), 0 2px 4px -1px rgba(0,0,0,0.05), inset 0 -2px 0 0 rgba(0,0,0,0.05), inset 0 1px 0 0 rgba(255,255,255,0.5)",
        "clay-lg":
          "0 18px 32px -12px rgba(123, 53, 160, 0.22), 0 8px 16px -4px rgba(0,0,0,0.08), inset 0 -6px 0 0 rgba(0,0,0,0.07), inset 0 3px 0 0 rgba(255,255,255,0.6)",
        "clay-inset":
          "inset 0 4px 10px -2px rgba(0,0,0,0.18), inset 0 -2px 6px -2px rgba(255,255,255,0.4)",
        "clay-orange":
          "0 12px 24px -10px rgba(232, 115, 26, 0.45), 0 4px 8px -2px rgba(0,0,0,0.06), inset 0 -4px 0 0 rgba(0,0,0,0.08), inset 0 2px 0 0 rgba(255,255,255,0.5)",
        "clay-purple":
          "0 12px 24px -10px rgba(123, 53, 160, 0.45), 0 4px 8px -2px rgba(0,0,0,0.06), inset 0 -4px 0 0 rgba(0,0,0,0.08), inset 0 2px 0 0 rgba(255,255,255,0.5)",
        "clay-green":
          "0 12px 24px -10px rgba(46, 158, 46, 0.45), 0 4px 8px -2px rgba(0,0,0,0.06), inset 0 -4px 0 0 rgba(0,0,0,0.08), inset 0 2px 0 0 rgba(255,255,255,0.5)",
        "clay-yellow":
          "0 12px 24px -10px rgba(255, 214, 0, 0.55), 0 4px 8px -2px rgba(0,0,0,0.06), inset 0 -4px 0 0 rgba(0,0,0,0.08), inset 0 2px 0 0 rgba(255,255,255,0.6)",
        "clay-blue":
          "0 12px 24px -10px rgba(24, 119, 242, 0.45), 0 4px 8px -2px rgba(0,0,0,0.06), inset 0 -4px 0 0 rgba(0,0,0,0.08), inset 0 2px 0 0 rgba(255,255,255,0.5)",
        "clay-red":
          "0 12px 24px -10px rgba(255, 0, 51, 0.45), 0 4px 8px -2px rgba(0,0,0,0.06), inset 0 -4px 0 0 rgba(0,0,0,0.08), inset 0 2px 0 0 rgba(255,255,255,0.5)",
      },
      keyframes: {
        wiggle: {
          "0%,100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
        floatUp: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        popIn: {
          "0%": { transform: "scale(0.85)", opacity: "0" },
          "60%": { transform: "scale(1.04)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        wiggle: "wiggle 2.5s ease-in-out infinite",
        float: "floatUp 3s ease-in-out infinite",
        "float-slow": "floatUp 5s ease-in-out infinite",
        "spin-slow": "spinSlow 12s linear infinite",
        "pop-in": "popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
