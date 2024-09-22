import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/view/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8132C5",
          darker: "#4C0677",
        },
        separator: {
          primary: "#00000026",
        },
      },
      backgroundImage: {
        "home-image":
          "url('https://tinder.com/static/build/590275fec8cbbb0de80caa66c8450906.webp')",
        "home-overlay":
          "linear-gradient(to bottom, #000000e0, #00000080, #000000e0)",
      },
    },
  },
  plugins: [],
};
export default config;
