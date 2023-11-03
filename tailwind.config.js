/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "Grayish-blue": "hsl(220, 15%, 55%)",
        "Light-gray": "hsl(212, 45%, 89%)",
        "Dark-blue": "hsl(218, 44%, 22%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
