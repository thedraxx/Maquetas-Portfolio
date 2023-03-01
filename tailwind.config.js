/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'sm': "360px",
      'md': "768px",
      'lg': "1024px",
    },

    extend: {
      scale: {
        '-100': '-1',
      }
    },
    colors: {
      primary: '#0D6EFD',
      black: "#1f2023",
      dark: "#2c2f33",
      white: "#F9FAFB",
      navbar: "#d6d6d6",
      red: "#F87171",
      button: "#E5FDD1",
      blue: "#60A5FA",
      gray: "#DFDFDE",
      darkblue: "#4E6E81"
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
    },
  },
  plugins: [],
}