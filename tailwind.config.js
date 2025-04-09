/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        netflixRed: '#E50914',
        netflixBlack: '#141414',
        netflixGray: '#303030',
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}