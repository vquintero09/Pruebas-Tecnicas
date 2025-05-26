/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        'mobile-410px' : '410px',
        'mobile-sm' : '415px',
        'mobile-md' : '430px'
      }
    },
  },
  plugins: [],
}

