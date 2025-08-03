/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Add this line if your index.html is now at the root
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}