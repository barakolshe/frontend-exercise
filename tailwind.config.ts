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
      spacing: {
        "modal-size": "calc(100% - 200px)",
      },
      minHeight: {
        "modal-size": "calc(100% - 200px)",
      },
      colors: {
        modal: {
          foreground: "hsla(0, 0%, 30%, 0.5)",
          background: "white",
          text: "black",
        },
      },
    },
  },
  plugins: [],
};
export default config;
