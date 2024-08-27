/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "primary": {
          900: "#004d40",
          800: "#00695c",
          700: "#00796b",
          600: "#00897b",
          500: "#009688",
          400: "#26a69a",
          300: "#4db6ac",
          200: "#80cbc4",
          100: "#b2dfdb",
          50: "#e0f2f1"
        },
        "secondary": {
          900: "#b42700",
          800: "#cc3600",
          700: "#da3d00",
          600: "#e74400",
          500: "#f14a00",
          400: "#f6641a",
          300: "#fa7e46",
          200: "#ffa27a",
          100: "#ffc7ae",
          50: "#fde6e2"
        }
      },
      screens: {
        "md": "840px",
      },
      boxShadow: {
        "designProjectCard": ["rgba(0, 0, 0, 0.16) 0px 3px 6px", "0px 3px 6px rgba(0, 0, 0, 0.23)"],
        "reverseShadow": ["rgba(0, 0, 0, 0.25) 0px -4px 16px 4px"],
        "innerShadow": ["inset 0px 0px 8px 0px rgba(0, 0, 0, 0.25)", "rgba(0, 0, 0, 0.16) 0px 3px 6px"],
        "innerShadow2": ["inset 0px 0px 16px 0px rgba(0, 0, 0, 0.5)"]
      },
      backgroundImage: {
        "mobileHero": "radial-gradient(70% 10% at 35% 15%, #fde6e2 10%, #fde6e2 20%, white 60%)",
        "desktopHero": "radial-gradient(50% 20% at 50% 12%, #fde6e2 10%, #fde6e2 20%, white 60%)"
      }
    },
  },

  plugins: [],
}
