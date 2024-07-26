/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Anton" : ['Anton SC', 'sans-serif'],
        "Kalnia" : ['Kalnia Glaze', 'serif'],
        "Bebas" : ['Bebas Neue', 'sans-serif'],
        "Space" : ['Space Grotesk', 'sans-serif'],
        
      },
    },
  },
  plugins: [animations],
}