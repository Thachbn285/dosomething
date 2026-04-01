/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        'primary-dark': '#4338CA',
        'primary-light': '#818CF8',
        secondary: '#7C3AED',
        'secondary-dark': '#6D28D9',
        'secondary-light': '#A78BFA',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
        'gradient-primary-dark':
          'linear-gradient(135deg, #4338CA 0%, #6D28D9 100%)',
      },
    },
  },
  plugins: [],
};
