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
    },
  },
  plugins: [],
} satisfies Config;
