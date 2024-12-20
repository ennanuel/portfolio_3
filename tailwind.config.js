/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,css}", "./concept/**/*.{html,js,css}"],
  theme: {
    extend: {
      screens: {
        'sm': '400px',
        'md': '768px',
        'lg': '1048px',
        'h-sm': {
          raw: '(max-height: 800px)'
        }
      },
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
        secondary: "#e2e2e0",
        orange: "rgb(255,159,0)",
        dark: "rgb(18,18,18)",
        light: "rgb(239,239,236)",
        black: {
          10: "#d0d0d0",
          25: "#a0a0a0",
          50: "#717171",
          75: "#414141",
          90: "#121212",
          100: "#0e0e0e"
        },
        brown: {
            100: "#f6f1ec",
            200: "#ede4d8",
            300: "#e3d6c5",
            400: "#dac9b1",
            500: "#d1bb9e",
            600: "#a7967e",
            700: "#7d705f",
            800: "#544b3f",
            900: "#2a2520"
        },
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
      transitionTimingFunction: {
        'expo': 'cubic-bezier(.16,1,.3,1)'
      }
    },
  },
  plugins: [],
}