/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['DM Sans', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        ink: '#0a0e1a',
        ink2: '#141928',
        card: '#131826',
        teal: '#00c8a0',
        teal2: '#00a882',
        sky: '#0ea5e9',
        accent: '#f97316',
        muted: '#8892aa',
      },
      animation: {
        'pulse-slow': 'pulse 6s ease-in-out infinite alternate',
        'blink': 'blink 1.5s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.2 },
        }
      }
    },
  },
  plugins: [],
}
