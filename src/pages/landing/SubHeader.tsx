import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "~/assets/images/logo.png";
import { useAtom } from "jotai";
import { toggleThemeAtom } from "~/globalState/themeAtom";

export default function SubHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const [theme, toggleTheme] = useAtom(toggleThemeAtom);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`relative top-0 z-[50] w-full border-b ${
        isSticky
          ? "sticky border-neutral-200 bg-white dark:border-white/[0.1] dark:bg-black"
          : "border-transparent bg-transparent dark:bg-black"
      }`}
    >
      <div
        className={`absolute right-2 top-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-xs text-transparent`}
      >
        Coins: 0
      </div>

      <div
        className={`mx-auto mt-2 flex h-16 w-full max-w-[88rem] items-center px-6 duration-100`}
      >
        <div className="flex w-full">
          <div className="flex items-center space-x-2 text-center text-2xl font-bold text-gray dark:text-white">
            <Image
              src={logo}
              alt="Logo"
              className="relative flex h-8 w-8 items-center justify-center rounded-md border md:h-6 md:w-6"
            />
            <p>Archive js</p>
          </div>
          <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end">
            {/* Light and Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ring-offset-background focus-visible:ring-ring flex h-10 items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium outline-none transition-colors hover:bg-slate-200 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:outline-none active:ring-0 disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-zinc-800"
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-moon h-4 w-4 text-neutral-500"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sun h-4 w-4 text-neutral-500"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
