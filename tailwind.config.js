/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Anek:["Anek"],
        Arapey:["Arapey"],
        Domine:["Domine"],
        Rokkitt: ["Rokkitt"],
        OpenSans:["Open Sans"],
        NotoSans:["Noto Sans Thai"],
        Merriweather:["Merriweather"],
        BodoniModa:["Bodoni Moda"]
      },
      backgroundImage: {
        'detail-content': "url('/images/detail-content-BG.webp')"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'light'
    ]
  },
}
