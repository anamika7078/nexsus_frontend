/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Responsive grid classes
    'lg:grid-cols-2',
    'lg:pt-48',
    'lg:pb-32',
    'lg:text-7xl',
    'lg:h-[500px]',
    'lg:w-[400px]',
    'lg:h-[400px]',
    'lg:w-[300px]',
    'lg:h-[300px]',
    'lg:mt-0',
    'lg:left-0',
    'lg:right-0',
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
