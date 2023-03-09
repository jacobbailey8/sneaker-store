
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'large': '942px',

    },
    extend: {
      colors: {
        primary: '#FF613C',
        secondary: '#99331E',
        dark: '#201A1A',
        light: '#A18C8B',
        text: 'rgb(138, 136, 136)',
        overlay: 'rgba(0,0,0,0.5)',

      },
      
    },
  },
  plugins: [],
}
