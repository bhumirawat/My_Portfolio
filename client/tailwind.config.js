/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx}"
  ],
  theme: { 
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.scrollbar-default': {
          /* IE and Edge */
          '-ms-overflow-style': 'auto',
          /* Firefox */
          'scrollbar-width': 'auto',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'block'
          }
        }
      })
    }
  ],
}