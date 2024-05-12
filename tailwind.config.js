/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    gridTemplateColumns: {
      mob: "24px repeat(10,1fr) 24px",
      tab: "40px repeat(10,1fr) 40px",
      desk: "165px repeat(10,1fr) 165px",
    },
    fontFamily: {
      leagueSpartan: ["var(--font-leagueSpartan)"],
    },
    colors: {
      // base colours
      white: "#FFFFFF",
      offWhite: "#F3F5F8",
      black: "#000000",
      blackHover: "#141414",
      red: "#B54949",
      // Primary
      beaver: "#9e7f66",
      codGray: "#111111",
      // Secondary
      mirage: "#17192b",
      ebonyClay: "#242b37",
      shuttleGray: "#5c6779",
    },
    extend: {
      
    },
  },
  plugins: [],
};
