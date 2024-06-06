/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
    './src/presentation/**/*.{js,ts,jsx,tsx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
    './node_modules/@clv-factory/factory-common-ui/dist/**/*.js',
  ],
  theme: {
    extend: {
      fontSize: {
        base: '13px',
      },
      colors: {
        main: {
          600: '#2D6B9E',
        },
        royalBlue: {
          200: '#268fd5',
          500: '#3498db',
          600: '#3f6aae',
          700: '#2d5698',
        },
        lightGray: {
          200: '#e9e9e9',
          400: '#aaa',
          500: '#666',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
      gridTemplateColumns: {
        sidebar: '300px auto', //for sidebar layout
        'sidebar-collapsed': '64px auto', //for collapsed sidebar layout
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
