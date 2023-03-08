/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      }
    },
  },
  plugins: [],
}
