import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "caveat": ["var(--font-caveat)"],
            },
      colors: {
        primary: {
          '50': '#f3faf7',
          '100': '#d6f1e6',
          '200': '#aee1cd',
          '300': '#76c8ab', // Couleur principale
          '400': '#52af91',
          '500': '#389478',
          '600': '#2b7660',
          '700': '#265f50',
          '800': '#224d42',
          '900': '#204139',
          '950': '#0e2520',
        },
      },
    },
  },
  plugins: [],
};

export default config;
