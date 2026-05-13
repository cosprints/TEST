/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './App.tsx',
    './main.tsx',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cs: {
          blue: '#3956FF',
          'blue-hover': '#2a44e0',
          'blue-pressed': '#1f33b8',
          'blue-50': '#eaf0ff',
          'blue-100': '#d6e0ff',
          'blue-200': '#b8c7ff',
          'hero-from': '#d8e4ff',
          'hero-via': '#eaf0ff',
          'hero-to': '#f6f9ff',
          black: '#0a0a0a',
          ink: '#111315',
          'ink-2': '#2b2f33',
          'gray-50': '#f7f8fa',
          'gray-100': '#f1f3f6',
          'gray-200': '#e3e6ea',
          'gray-300': '#cdd1d6',
          'gray-400': '#a3a8af',
          'gray-500': '#7a818a',
          'gray-700': '#4a5159',
          orange: '#ff5a1f',
          fire: '#ff6b35',
        },
      },
      fontFamily: {
        display: ['Unbounded', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        body: ['"Inter Tight"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
        sans: ['"Inter Tight"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'cs-xs': '6px',
        'cs-sm': '10px',
        'cs-md': '14px',
        'cs-lg': '20px',
        'cs-xl': '28px',
        'cs-pill': '999px',
      },
      boxShadow: {
        'cs-xs': '0 1px 2px rgba(10, 10, 10, .04)',
        'cs-sm': '0 2px 6px rgba(10, 10, 10, .05), 0 1px 2px rgba(10, 10, 10, .04)',
        'cs-md': '0 8px 20px rgba(10, 10, 10, .07), 0 2px 6px rgba(10, 10, 10, .04)',
        'cs-lg': '0 18px 36px rgba(10, 10, 10, .08)',
      },
      letterSpacing: {
        'cs-display': '-0.02em',
        'cs-tight': '-0.01em',
      },
      maxWidth: {
        'cs-container': '1200px',
        'cs-narrow': '880px',
      },
      backgroundImage: {
        'cs-hero': 'linear-gradient(180deg, #d8e4ff 0%, #eaf0ff 50%, #f6f9ff 100%)',
      },
    },
  },
  plugins: [],
};
