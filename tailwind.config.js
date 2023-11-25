/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alice: ["Alice, sans-serif"],
        pacifico: ["Pacifico, sans-serif"],
      },
    },
  },
  plugins: [],
};
