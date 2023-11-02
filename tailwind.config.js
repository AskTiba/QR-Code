/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'Grayish-blue': 'hsl(220, 15%, 55%)',
      },
    },
  },
  plugins: [],
}