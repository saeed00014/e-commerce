/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,tsx}", "*"],
  theme: {
    extend: {
      colors: {
        ship: "rgb(255, 255, 255)",
        dark: "rgb(0, 0, 0)",
        moon: "rgb(80, 80, 80)",
        gray: "rgb(200, 200, 200)",
        lightBlood: "rgb(252, 129, 129)",
        water: "#22d3ee",
        darkwater: "#0e7490",
      },
      keyframes: {
        downUnFade: {
          "0%": {
            opacity: .5,
            top: "2.8rem"
          },
          "100%": {
            opacity: 1,
            top: "3.2rem"
          }
        }
      }
    },
  },
};

export default config;
