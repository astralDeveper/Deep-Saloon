/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        secular: ['"Secular One"', 'sans-serif'],
      },
      colors: {
        Navbar: '#161616',
        TabColor:'#52EAFF',
        BackgroundColor1:'#343434',
        BackgroundColor2:'#161616',
        BackgroundColor3:'#473A12',
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
    },
  },
  plugins: [],
}