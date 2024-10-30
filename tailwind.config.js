/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,css}", "./concept/**/*.{html,js,css}"],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.56rem',
        'sm': '0.75rem',
        'base': '1rem',
        'lg': '1.33rem',
        'xl': '1.78rem',
        '2xl': '2.37rem',
        '3xl': '3.15rem',
        '4xl': '4.21rem',
        '5xl': '5.61rem',
      },
      colors: {
        primary: "#c90604",
        secondary: "#d2d2d0",
        black: {
          '100': "#0d0a0a",
          '90': "#1a1717",
          '75': "#403939",
          '50': "#807575",
          '25': "#bfafaf",
          '10': "#d7d5d5"
        }
      },
      fontFamily: {
        'dm-sans': 'DM Sans',
        'handjet': 'Handjet',
        'helvetica': 'Helvetica',
        'merriweather': 'Merriweather',
        'montreal': 'Montreal',
        'ov-soge': 'OV Soge',
        'poppins': 'Poppins'
      },
      fontWeight: {
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '900': '900'
      },
    },
  },
  plugins: [],
}