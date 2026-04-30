/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode Premium Palette
        'mm-bg': '#FCFAF8',
        'mm-card': '#FFFFFF',
        'mm-yellow': '#FEDB71',
        'mm-yellowHover': '#EBC155',
        'mm-textDark': '#140F1F',
        'mm-textMuted': 'rgba(20,15,31,0.55)',
        
        // Dark Mode Tactical Palette
        'mm-dark-bg': '#0d0d0c',
        'mm-dark-card': '#161614',
        'mm-dark-panel': '#0a0a0a',
        'mm-dark-border': '#1f1f1a',
        'mm-dark-yellow': '#ffc500',
        'mm-dark-yellowHover': '#e6b200',
        'mm-dark-textMuted': '#6b6b63',
        'mm-dark-textSubtle': '#a3a398',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Default for light mode
        mono: ['Poppins', 'sans-serif'], 
        'inter': ['Inter', 'sans-serif'], // Explicit for dark mode
        'jetbrains': ['JetBrains Mono', 'monospace'], // Explicit for dark mode
      },
      boxShadow: {
        'premium': '0 8px 30px rgba(20,15,31,0.06)',
      },
      borderRadius: {
        '4xl': '28px',
      }
    },
  },
  plugins: [],
}
