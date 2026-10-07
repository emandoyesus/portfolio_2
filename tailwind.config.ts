import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080808",
        surface: "#0f0f0f",
        card: "#131313",
        wash: "#1a1a1a",
        chalk: "#f4f3f0",
        muted: "#888888",
        dim: "#555555",
        hairline: "rgba(255, 255, 255, 0.08)",
        "hairline-strong": "rgba(255, 255, 255, 0.18)",
        accent: "#707eff", // Cosmic indigo accent matching #181c66
        orange: {
          DEFAULT: "#f97316",
          bright: "#ff6b2c",
          glow: "rgba(249, 115, 22, 0.35)",
        },
        "accent-secondary": "#6b8f71", // Sage green
        positive: "#22c55e",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Playfair Display", "serif"],
      },
      keyframes: {
        "survey-breathe": {
          "0%, 100%": { opacity: "0.35", transform: "translate(-50%, -50%) scale(0.9)" },
          "50%": { opacity: "0.9", transform: "translate(-50%, -50%) scale(1.1)" },
        },
        "enter-rise": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "survey-breathe": "survey-breathe 8s ease-in-out infinite",
        "enter-rise": "enter-rise 0.7s ease-out forwards",
        marquee: "marquee 32s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
