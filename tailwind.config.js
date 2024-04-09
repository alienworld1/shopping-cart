/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mall': "url('/src/assets/mostafa-meraji-X0yKdR_F9rM-unsplash.jpg')",
      }
    },
  },
  plugins: [],
}

