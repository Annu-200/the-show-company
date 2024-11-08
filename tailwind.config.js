/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
      'media560': '560px',
      'media360':'360px',
      'media440': '440px',
      },
    },
  },
  plugins: [],
}

