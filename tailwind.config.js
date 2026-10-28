/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mist: '#f8fafc', // or your desired custom color hex code
      },
    },
  },
  plugins: [],
}
