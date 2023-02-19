/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient1:
          "linear-gradient(180deg, #7755FF 0%, #6943FF 0.01%, #2F2CE9 100%)",
        gradient2:
          "linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0) 100%, rgba(37, 33, 201, 0) 100%)",
      },
      boxShadow: {
        main: "0px 30px 60px rgba(61, 108, 236, 0.15)",
      },
      screens: {
        sm: "737px",
      },
      colors: {
        "my-yellow-700": "hsl(39, 100%, 56%)",
        "my-yellow-50": "#FEFBF5",
        "my-blue-700": "hsl(234, 85%, 45%)",
        "my-blue-300": "#CAC9FF",
        "my-blue-100": "#EDF2FE",
        "my-blue-50": "#F3F4FC",
        "my-green-700": "hsl(166, 100%, 37%)",
        "my-green-50": "#F4FCF9",
        "my-red-700": "hsl(0, 100%, 67%)",
        "my-red-50": "#FDF6F6",
        "my-navy-900": "#323b57",
      },
      fontFamily: {
        sans: ["Hanken Grotesk", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        "4xl": "32px",
      },
      width: {
        35: "8.75rem",
        50: "12.5rem",
        92: "23rem",
      },
      height: {
        35: "8.75rem",
        50: "12.5rem",
        92: "23rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
