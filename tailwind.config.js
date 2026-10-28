/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mist: '#f8fafc',
        ink: '#0f172a',
      },
    },
  },
  plugins: [],
}
