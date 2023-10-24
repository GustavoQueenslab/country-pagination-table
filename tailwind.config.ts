import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        water: "url('/water.png')",
      },
      colors: {
        primary: "#F0F5F5",
        dark: "#48484B",
      },
    },
  },
  plugins: [],
};
export default config;
