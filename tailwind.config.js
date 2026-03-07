/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004de6', // Brand Blue from logo
          light: '#2a6df0',
        },
        secondary: {
          DEFAULT: '#33bbff', // Accent Light Blue from logo
          light: '#66ccff',
        },
        brand: {
          red: '#D32F2F', // Accessing standard paint brand colors if needed
          blue: '#004de6',
        },
        // Custom grays for industrial feel
        industrial: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Need to import Inter in index.css
      }
    },
  },
  plugins: [],
}
