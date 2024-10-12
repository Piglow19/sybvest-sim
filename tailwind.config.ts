import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a079ee',
        secondary: '#e3de91',
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#FFFFFF',
            foreground: '#000000',

            default: {
              // Should be darker when descending
              DEFAULT: '#EDEDED',
              100: '#E5E5E5',
              200: '#D2D2D2',
              300: '#B3B3B3',
              400: '#9C9C9C',
              500: '#868686',
              600: '#737373',
              700: '#595959',
              800: '#404040',
              900: '#262626',
            },
          } 
        },
        dark: {
          colors: {
            background: '#000000',
            foreground: '#FFFFFF',
            default: {
              // Should be brighter when descending
              DEFAULT: '#121212',
              100: '#1A1A1A',
              200: '#2D2D2D',
              300: '#4C4C4C',
              400: '#636363',
              500: '#797979',
              600: '#8C8C8C',
              700: '#A6A6A6',
              800: '#BFBFBF',
              900: '#D9D9D9',
            },
          },
        },
      },
    }),
  ],
}
export default config
