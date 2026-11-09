/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#dc2626',
          hover: '#b91c1c',
          light: '#ef4444',
          glow: 'rgba(220, 38, 38, 0.4)',
        },
        secondary: {
          DEFAULT: '#f97316',
          hover: '#ea580c',
        },
        special: {
          DEFAULT: '#fbbf24',
          hover: '#f59e0b',
        },
        dark: {
          950: '#0a0a0a',
          900: '#111111',
          850: '#1a1a1a',
          800: '#262626',
          700: '#333333',
        },
        slate: {
          950: '#0a0a0a',
          900: '#111111',
          800: '#1f1f1f',
          400: '#a3a3a3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Big Shoulders Display', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'rotate-border': 'rotate-border 3s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'rotate-border': {
          '0%': { '--angle': '0deg' },
          '100%': { '--angle': '360deg' },
        },
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(ellipse at center, rgba(220, 38, 38, 0.15), transparent)',
        'grid-pattern': 'linear-gradient(rgba(220, 38, 38, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.03) 1px, transparent 1px)',
      },
      boxShadow: {
        'glow-red': '0 0 30px rgba(220, 38, 38, 0.3)',
        'glow-red-lg': '0 0 60px rgba(220, 38, 38, 0.4)',
        'glow-amber': '0 0 30px rgba(251, 191, 36, 0.3)',
      },
    },
  },
  plugins: [],
}