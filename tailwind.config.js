/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mob: "23.43em", // 375px
      lgMob: "27.5em", // 440px
      xtraSmTab: "35em", // 560px
      smTab: "41.25em", // 660px
    },
    backgroundImage: {
      // Hero Images
      heroImageMob: "url('/images/homepage/mobile/hero-bg-mobile.jpg')",
      heroImageMobLg: "url('/images/homepage/mobile/hero-bg-mobile@2x.jpg')",
      //
      heroImageTab: "url('/images/homepage/tablet/hero-bg-tablet.jpg')",
      heroImageTabLg: "url('/images/homepage/tablet/hero-bg-tablet@2x.jpg')",
      //
      heroImageDesk: "url('/images/homepage/desktop/hero-bg-desktop.jpg')",
      heroImageDeskLg: "url('/images/homepage/desktop/hero-bg-desktop@2x.jpg')",

      // Call to Action Images
      ctaBgImageMobLg: "url('/images/homepage/mobile/ready-bg-mobile@2x.jpg')",
      ctaBgImageTabLg: "url('/images/homepage/tablet/ready-bg-tablet@2x.jpg')",
    },
    gridTemplateColumns: {
      mob: "24px repeat(10,1fr) 24px",
      tab: "40px repeat(10,1fr) 40px",
      lap: "102.5px repeat(10,1fr) 102.5px",
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
    extend: {},
  },
  plugins: [],
};
