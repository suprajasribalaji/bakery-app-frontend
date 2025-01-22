import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "var(--color-black)",
        white: "var(--color-white)",
        chineseSilver: "var(--color-chineseSilver)",
        cloudGray: "var(--color-cloudGray)",
        brightRed: "var(--color-brightRed)",
        emeraldGreen600: "var(--color-emeraldGreen600)",
        emeraldGreen700: "var(--color-emeraldGreen700)",
        oliveGreen: "var(--color-oliveGreen)",
        darkOliveGreen: "var(--color-darkOliveGreen)",
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
