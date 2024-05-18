/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,tsx}", "*"],
  theme: {
    extend: {
      colors: {
        ship: "rgb(255, 255, 255)",
        dark: "rgb(0, 0, 0)",
        moon: "rgb(80, 80, 80)",
        gray: "rgb(186, 186, 186)",
        lightBlood: "rgb(252, 129, 129)",
        water: "#22d3ee",
        darkwater: "#0e7490",
      },
    },
  },
};

export default config;
