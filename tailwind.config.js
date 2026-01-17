/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#141E30",
        secondary: "#3F5E96",
        textPrimary: "#FFFFFF",
        textSecondary: "#C7D2E8",
        muted: "#8FAADC",
        accent: "#6FA8FF"
      },
      backgroundImage: {
        cyberGradient:
          "linear-gradient(180deg, #141E30 0%, #3F5E96 100%)",
      },
      boxShadow: {
        glow: "0 0 25px rgba(111,168,255,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      }
    },
  },
  plugins: [],
}
