/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./index.jsx",
    "./pages/**/*.{js,ts,jsx,tsx}", // Yeh line pages folder ki files ko scan karegi
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}