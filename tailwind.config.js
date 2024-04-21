/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1020px',
        xl: '1440px',

      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        light_grayish_violet: 'hsl(270, 3%, 87%)',
        dark_grayish_violet: 'hsl(279, 6%, 55%)',
        very_dark_violet: 'hsl(278, 68%, 11%)',
        from: 'hsl(249, 99%, 64%)',
        to: 'hsl(278, 94%, 30%)',
        red: 'hsl(0, 100%, 66%)'
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

