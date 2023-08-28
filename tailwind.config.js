/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 10%': {
            transform: 'translateY(-1%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '10%': {
            transform: 'translateY(-1%)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        'ping-short': 'ping 1s cubic-bezier(0, 0, 0.2, 1) 5',
        'pulse-short': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) 2',
        wiggle: 'wiggle 1s  1;',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
