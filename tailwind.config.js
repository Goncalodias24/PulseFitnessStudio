/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f1115',
          card: '#181b20',
          alt: '#131519',
          border: '#2a2e35',
          red: '#ff3b30',
          'red-hover': '#e02d22',
        }
      }
    },
  },
  plugins: [],
}