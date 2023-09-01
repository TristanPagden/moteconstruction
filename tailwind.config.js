/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'main': '#E79718',
      'light': '#4EA4B8',
      'lighter': '#F0EFEC',
      'dark' : '#A25622',
      'darker' : '#1D1C21',
      'hoverMain' : '#62caf5',
      'hoverLighter' : '#B8D7E2',
      'maroon' : '#AC2139',
      'darkBlue': '#1D275C',
      'pink' : '#DB727C',
    },
    fontFamily: {
      'links': ['Josefin Sans', 'sans-serif'],
      'info': ['Raleway', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
