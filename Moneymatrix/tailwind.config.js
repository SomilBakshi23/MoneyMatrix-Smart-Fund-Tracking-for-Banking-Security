/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mm: {
          bg: '#161613',
          card: '#1d1d1a',
          input: '#262623',
          border: '#32322a',
          yellow: '#ffc500',
          yellowHover: '#e6b200',
          textMuted: '#a3a398',
          textSubtle: '#6b6b63'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
