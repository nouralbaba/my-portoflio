import type { Config } from "tailwindcss";



const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    
  ],
  
  
  theme: {
    
    
    extend: {

      animation: {
        'fade-in-up': 'fadeInUp 1.5s forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        roboto: ["Oswald", "sans-serif"],
      },

      
      
    },
    container: {
      padding: '1rem',
      center: true,

      
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  
};




export default config;

