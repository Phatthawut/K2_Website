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
      }
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

  screens: {
    '2xs': { min: '300px' },
    xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
    sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
    md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
    lg: { min: '1200px' }, // Desktop smallest.
    xl: { min: '1259px' }, // Desktop wide.
    '2xl': { min: '1359px' } // Desktop widescreen.
  },
}

