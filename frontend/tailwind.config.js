/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warmCream: '#FAF7F2',
        warmPeach: '#F4E4D7',
        warmTerra: '#C77D58',
        warmSienna: '#A85E3A',
        warmBrown: '#3D2E27',
      },
      fontFamily: {
        display: ['Crimson Pro', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 10px 40px rgba(61, 46, 39, 0.08)',
      },
    },
  },
  plugins: [],
}
