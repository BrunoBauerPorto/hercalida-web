/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        herFundo: '#FAF6F2',
        herPrincipal: '#EFC7D7',
        herSecundaria: '#C8DCEB',
        herDestaque: '#B57BA6',
        herTexto: '#555555',
      },
    },
  },
  plugins: [],
};