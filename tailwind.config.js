/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'claw-red': '#D00000', // Red
        'claw-dark-red': '#6A040F', // Dark Red
        'claw-black': '#03071E', // Almost Black
        'claw-white': '#F1FAEE',
        'claw-yellow': '#FFBA08', // Yellow
      },
    },
  },
  plugins: [],
}
