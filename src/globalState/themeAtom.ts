import { atom } from "jotai";

export const themeAtom = atom<"light" | "dark">("light");

export const toggleThemeAtom = atom(
  (get) => get(themeAtom),
  (get, set) => {
    const newTheme = get(themeAtom) === "light" ? "dark" : "light";
    set(themeAtom, newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  },
);
