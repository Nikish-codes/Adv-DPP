/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8',
        secondary: '#5f6368',
        accent: '#4285f4',
        background: {
          primary: '#ffffff',
          secondary: '#f8f9fa',
          tertiary: '#f1f3f4',
        },
        text: {
          primary: '#202124',
          secondary: '#5f6368',
        },
        success: '#34a853',
        warning: '#fbbc04',
        error: '#ea4335',
        info: '#4285f4',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontFamily: {
        sans: ['Google Sans', 'Roboto', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
        DEFAULT: '0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)',
        md: '0 2px 6px 2px rgba(60,64,67,0.15), 0 1px 2px 0 rgba(60,64,67,0.3)',
        lg: '0 2px 8px 4px rgba(60,64,67,0.15), 0 1px 3px 0 rgba(60,64,67,0.3)',
        xl: '0 4px 16px 8px rgba(60,64,67,0.15), 0 2px 4px 0 rgba(60,64,67,0.3)',
      },
      borderRadius: {
        'sm': '0.25rem',
        DEFAULT: '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
      },
    },
  },
  plugins: [],
}