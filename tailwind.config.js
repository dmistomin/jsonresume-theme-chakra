/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.html",
  ],
  theme: {
    colors: {
      'offwhite': '#F7FAFC',
      'midnight': '#171923',
      'night': '#1A202C',
      'twilight': '#4A5568',
      'evening': '#718096',
      'fog': '#A0AEC0',
      'lightgrey': '#E2E8F0',
      'highlight': '#C53030',
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
      display: ['IBM Plex Sans Condensed', 'sans-serif'],
    },
    listStyleType: {
      square: 'square',
    }
  },
  plugins: [],
}
