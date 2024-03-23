/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#f3f2f0",
        // "secondary": "#1a203f",
        "secondary": "#253840",
        "third": "#838382",
        "forth": "#faf7f7",
        "fifth": "#edecea",
        "sixth": "#9dbe89",
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
    screens: {
      'lg': { 'max': '2023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '1150px' },
      // => @media (max-width: 767px) { ... }
      'smd': { 'max': '900px' },

      'sm': { 'max': '600px' },
      // => @media (max-width: 639px) { ... }
      'vsm': { 'max': '450px' },
      // => @media (max-width: 400px) { ... }
    }
  },
  plugins: [],
}
