/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom1: ['Bebas_Neue'], 
        custom2: ['Century_Gothic'],   
        custom3: ['Parkinsans'],   
      },
      colors: {
        'royal-blue': '#2563eb',
        'metallic-gray': '#a1a1aa',
      },
      backgroundImage: {
        'metallic-gradient': 'linear-gradient(135deg, #71717a 0%, #a1a1aa 50%, #71717a 100%)',
      },
      boxShadow: {
        'metallic': '0 4px 20px rgba(161, 161, 170, 0.1)',
        'metallic-lg': '0 8px 30px rgba(161, 161, 170, 0.15)',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': [
          {
            fontFamily: 'Bebas_Neue',
            src: 'url("/fonts/BebasNeue-Regular.woff2") format("woff2"), url("/fonts/BebasNeue-Regular.woff") format("woff")',
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
          {
            fontFamily: 'Century_Gothic',
            src: 'url("/fonts/Century%20Gothic.woff2") format("woff2"), url("/fonts/Century%20Gothic.woff") format("woff")',
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
          {
            fontFamily: 'Parkinsans',
            src: 'url("/fonts/Parkinsans-VariableFont_wght.woff") format("woff"), url("/fonts/Parkinsans-VariableFont_wght.woff2") format("woff2")',
            fontWeight: 'normal',
            fontStyle: 'normal',
          },
        ],
      });
    }),
  ],
};
