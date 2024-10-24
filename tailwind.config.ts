import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        grey: {
          50: 'var(--background-paper)',
          100: 'var(--secondary-main)',
        },
        black: {
          50: 'var(--text-primary)',
          100: 'var(--very-contrast)',
          150: 'var(--background-default)',
          200: 'var(--background-primary)',
          250: 'var(--background-secondary)',
          300: 'var(--very-contrast)',
          350: 'var(--very-revert-contrast)',
        },
        blue: {
          50: 'var(--primary-main)',
          100: 'var(--primary-light)',
        },
        green: {
          50: 'var(--success)',
        },
        yellow: {
          50: 'var(--warning)',
        },
        red: {
          50: 'var(--error)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
