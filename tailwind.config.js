/** @type {import('tailwindcss').Config} */
// W2 — the site's ONE theme is the PRODUCT's `.workboat-light` glossy identity (apps/web globals.css),
// so a visitor crossing from the site to /workboat-login feels zero theme shock. No dark mode.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Airy off-white surfaces, glossy white cards (workboat-light).
        surface: {
          0: '#F4F8FC',
          1: '#FFFFFF',
          2: '#EAF2F9',
          3: '#DCE8F3',
        },
        // Friendly sky / ocean blue — the product brand.
        brand: {
          primary: '#0EA5E9',
          hover: '#0284C7',
          muted: '#E0F2FE',
        },
        // Nova = the logo's cyan core (was violet). `cyan` is AA-on-white for text; `glow` is decorative.
        accent: {
          cyan: '#0891B2',
          glow: '#22D3EE',
        },
        text: {
          primary: '#0C2233', // deep navy-slate, warm — not pure black
          secondary: '#51647A',
          muted: '#8A9CAE',
          inverse: '#FFFFFF',
        },
        border: {
          subtle: '#E6EFF7',
          default: '#D5E3EF',
          strong: '#BFD3E3',
        },
        status: {
          success: '#16A34A',
          warning: '#D97706',
          error: '#DC2626',
          info: '#0EA5E9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
