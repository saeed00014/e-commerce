/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,tsx}", "*"],
  theme: {
    extend: {
      colors: {
        ship: "rgb(255, 255, 255)",
        dark: "rgb(0, 0, 0)",
        moon: "rgb(80, 80, 80)",
        lightMoon: "rgb(225, 225, 225)",
        blood: "rgb(252, 68, 68)",
        lightBlood: "rgb(252, 129, 129)",
        water: "#22d3ee",
        darkwater: "#0e7490",
        grass: "rgb(12, 209, 127)",
        darkgrass: "#4d7c0f",
        sun: "#fbbf24",
      },
      borderColor: {
        DEFAULT: "rgb(200, 200, 200)",
      },
      boxShadow: {
        btnHoverDark: "0 0 40px 40px rgba(0, 0, 0, .2) inset",
        btnHoverLight: "0 0 40px 40px rgba(255, 255, 255, .2) inset",
      },
      keyframes: {
        downUnFade: {
          "0%": {
            opacity: 0.5,
            top: "2.8rem",
          },
          "100%": {
            opacity: 1,
            top: "3.2rem",
          },
        },
      },
      screens: {
        sm: "320px",
        md: "640px",
        lg: "960px",
        xl: "1280px",
        xxl: "1780px",
      },
    },
  },
};

export default config;
