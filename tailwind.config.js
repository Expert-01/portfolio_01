/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'], // Custom font
        orbitron: ['Orbitron', 'monospace'], // Custom font for code
        mono: ['Share Tech Mono', 'monospace'], // Custom font for code
        azonix: ['Azonix', 'sans-serif'],

      },
    },
  },
  darkMode: 'class', // Enable dark mode support
  plugins: [],
}

