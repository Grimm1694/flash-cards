import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
        swap: {
          '50%': {
            transform: 'translate(-50%, calc(var(--y) - 250px)) scale(0.85) rotate(-5deg)',
            'animation-timing-function': 'ease-in',
          },
          '100%': {
            transform: 'translate(-50%, calc(var(--y) - 15px)) scale(0.85)',
            'z-index': '-1',
          },
        },
      },
      animation: {
        swap: 'swap 700ms forwards',
      },
    },
  plugins: [],
};
export default config;
