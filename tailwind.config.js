/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Dark-blue": "hsl(218, 44%, 22%)",
        "Grayish-blue": "hsl(220, 15%, 55%)",
      },
      backgroundColor: {
        "Light-gray": "hsl(212, 45%, 89%)",
        "White": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
