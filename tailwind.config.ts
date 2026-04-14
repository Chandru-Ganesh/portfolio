import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Instrument Serif'", "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          soft: "#1A1A1A",
          muted: "#6B6B6B",
          faint: "#9A9A9A",
        },
        canvas: {
          DEFAULT: "#FAFAF8",
          warm: "#F5F4F0",
          card: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#2A5C45",
          light: "#3D7A5F",
          pale: "#E8F0EC",
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.02em",
        wide: "0.08em",
        wider: "0.12em",
        widest: "0.2em",
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "9xl": ["8rem", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display": ["6.5rem", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
