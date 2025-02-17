import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#DFE8E7',
        font_standard: '#002A3E',
        font_main: '#6D7F8B',
        font_black: '#001620',
        foreground: 'var(--foreground)',
      },
      boxShadow: {
        'custom-1': '0px 0px 4px 0px #00000040 inset',
        'custom-2': '0px 4px 9.6px 0px #FFFFFF40 inset',
        'custom-3': '0px 0px 0px 1px #595BEB',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        ['Familjen-Grotesk']: ['Familjen Grotesk', 'sans-serif'],
        Trap: ['var(--font-trap)'],
        ['Trap-300']: ['var(--font-trap-300)'],
        ['Trap-400']: ['var(--font-trap)'],
        ['Trap-500']: ['var(--font-trap-500)'],
        ['Trap-600']: ['var(--font-trap-600)'],
        ['Trap-700']: ['var(--font-trap-700)'],
        ['Trap-800']: ['var(--font-trap-800)'],
        ['Trap-900']: ['var(--font-trap-900)'],
      },
      utilities: {
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
export default config;
