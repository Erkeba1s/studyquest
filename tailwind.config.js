/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F7F4',
        sage: '#8BAF9A',
        lavender: '#B8A9D4',
        peach: '#E9B89B',
        ink: '#30343B'
      }
    }
  },
  plugins: [],
}
