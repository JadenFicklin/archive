import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        gray: "#272727",
        lightGray: "#808080",
        accent: "#EAEAEA",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "spin-slow-reverse": "spin-reverse 10s linear infinite",
      },
      keyframes: {
        "spin-reverse": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
