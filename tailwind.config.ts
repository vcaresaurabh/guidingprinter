import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
          light: '#3B82F6',
          50: '#EFF6FF',
          100: '#DBEAFE',
        },
        accent: {
          DEFAULT: '#0EA5E9',
          dark: '#0284C7',
        },
        surface: {
          DEFAULT: '#F8FAFC',
          card: '#FFFFFF',
        },
        brand: {
          text: '#0F172A',
          muted: '#64748B',
          border: '#E2E8F0',
          success: '#10B981',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-sm': ['2.5rem', { lineHeight: '1.15', fontWeight: '700' }],
      },
      spacing: {
        section: '5rem',
        'section-sm': '3rem',
        'section-lg': '8rem',
      },
      maxWidth: {
        container: '80rem',
        'container-sm': '48rem',
        'container-md': '64rem',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)',
        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        header: '0 1px 3px 0 rgb(0 0 0 / 0.06)',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#0F172A',
            maxWidth: 'none',
            a: { color: '#2563EB', textDecoration: 'underline' },
            h2: { color: '#0F172A', fontWeight: '700' },
            h3: { color: '#0F172A', fontWeight: '600' },
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
