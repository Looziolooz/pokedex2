/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colori personalizzati per il tema Pokemon
        'primary': '#6e0a96',
        'pokemon': {
          'electric': '#F7D02C',
          'fire': '#EE8130',
          'water': '#6390F0',
          'grass': '#7AC74C',
          'psychic': '#F95587',
          'ice': '#96D9D6',
          'dragon': '#6F35FC',
          'dark': '#705746',
          'fairy': '#D685AD',
          'fighting': '#C22E28',
          'poison': '#A33EA1',
          'ground': '#E2BF65',
          'flying': '#A98FF3',
          'bug': '#A6B91A',
          'rock': '#B6A136',
          'ghost': '#735797',
          'steel': '#B7B7CE',
          'normal': '#A8A878'
        }
      },
      fontFamily: {
        'pokemon': ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'pokemon-hero': 'linear-gradient(-10deg, #C97FE4, #AECDF6)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'pokemon': '0 10px 25px -5px rgba(110, 10, 150, 0.1), 0 4px 6px -2px rgba(110, 10, 150, 0.05)',
        'pokemon-hover': '0 20px 40px -10px rgba(110, 10, 150, 0.2), 0 8px 16px -4px rgba(110, 10, 150, 0.1)',
      }
    },
  },
  plugins: [],
}