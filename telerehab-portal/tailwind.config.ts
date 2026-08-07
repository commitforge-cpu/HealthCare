import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light-blue "TeleRehab" theme palette
        brand: {
          50: "#f2f9fd",
          100: "#e3f1fb",
          200: "#c1e2f6",
          300: "#93cdef",
          400: "#5fb2e5",
          500: "#3897d6", // primary
          600: "#2679b3",
          700: "#1f5f8f",
          800: "#1c4e75",
          900: "#1a4262",
        },
        sky: {
          25: "#f7fbfe",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(56, 151, 214, 0.35)",
        card: "0 4px 20px rgba(56, 151, 214, 0.12)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #eaf6ff 0%, #cdeafd 50%, #a9dcfb 100%)",
        "hero-gradient": "linear-gradient(135deg, #3897d6 0%, #5fb2e5 50%, #93cdef 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 1.5s infinite",
        blob: "blob 12s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(20px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.97)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
