/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ['Poppins']
    },
      colors: {
        Navbar: '#161616',
        TabColor:'#52EAFF',
        BackgroundColor1:'#343434',
        BackgroundColor2:'#161616',
        BackgroundColor3:'#473A12',
        BackgroundColor4:'#D4AF37',
        BackgroundColor5:'#E62117',
        BackgroundColor6:'#222222',
        BgCompColor3:'#131722',
        LableColor3:'#FF4040',
        textColor1: '#CCCCCC',
        textColor2: '#FFFFFF',
        textColor3: '#FFCC00',
        textColor4: '#E1C45B',
        textColor5: '#D9B934',
        textColor6: '#7B35E3',
        textColor7: '#000000',
        StarsColor: '#FF8800',
        IconColor: '#001833',
        ChackBox: '#4CAF50',
        PlaceholderColor: '#A0A4AC',
        InputFieldColor: '#F8F7FB',
        NavButtonBg: '#52EAFF',
      },
      boxShadow: {
        custom: '24px -22px 18px -5px rgba(225,196,91,0.72) inset',
        customHover: '0 6px 20px rgba(0, 0, 0, 0.5)',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      }
    },
   
  },
  plugins: [],
}