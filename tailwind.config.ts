import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0B0A10",
          soft: "#12111A",
          card: "#17151F",
          line: "#2A2735",
        },
        champagne: {
          DEFAULT: "#E4C580",
          bright: "#F3DCA6",
          deep: "#B9944E",
          dim: "#8C6F3B",
        },
        bordeaux: {
          DEFAULT: "#8E2A3C",
          deep: "#5C1B28",
          glow: "#C13B54",
        },
        ivory: {
          DEFAULT: "#F4EFE6",
          dim: "#C9C2B4",
          faint: "#948D7F",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "gold-radial":
          "radial-gradient(ellipse at top, rgba(228,197,128,0.14), transparent 60%)",
        "bordeaux-radial":
          "radial-gradient(ellipse at bottom right, rgba(142,42,60,0.18), transparent 55%)",
        "gold-line":
          "linear-gradient(90deg, transparent, rgba(228,197,128,0.7), transparent)",
        "card-sheen":
          "linear-gradient(135deg, rgba(228,197,128,0.08) 0%, rgba(255,255,255,0.02) 40%, rgba(142,42,60,0.06) 100%)",
      },
      boxShadow: {
        gold: "0 0 40px -12px rgba(228,197,128,0.35)",
        "gold-soft": "0 0 24px -10px rgba(228,197,128,0.25)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.06), 0 20px 50px -20px rgba(0,0,0,0.7)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-gold": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(228,197,128,0.35)" },
          "50%": { boxShadow: "0 0 0 10px rgba(228,197,128,0)" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        "pulse-gold": "pulse-gold 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
