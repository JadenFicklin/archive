import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "~/assets/images/logo.png";

export default function SubHeader() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`top-0 z-[50] w-full border-b ${
        isSticky
          ? "sticky border-neutral-200 bg-white dark:border-white/[0.1] dark:bg-black"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="absolute -bottom-6 right-5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-xs text-transparent">
        Coins: 0
      </div>

      <div className="mx-auto flex h-16 w-full max-w-[88rem] items-center px-8">
        <div className="mr-4 hidden w-full md:flex">
          <div className="text-gray mr-10 flex items-center justify-center space-x-2 py-6 text-center text-2xl font-bold">
            <Image
              src={logo}
              alt="Logo"
              className="relative flex h-8 w-8 items-center justify-center rounded-md border md:h-6 md:w-6"
            />
            <p>Archive js</p>
          </div>
          <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end">
            <button className="ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground flex h-10 items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium outline-none transition-colors focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:outline-none active:ring-0 disabled:pointer-events-none disabled:opacity-50">
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
                className="lucide lucide-moon h-4 w-4 text-neutral-500 dark:text-neutral-500"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </button>
            <button className="text-muted-foreground dark:bg-brand relative flex w-fit items-center justify-start rounded-xl border border-transparent bg-white px-4 py-2 text-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2]">
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
                className="h-4 w-4 text-neutral-500"
              >
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
              </svg>
              <span className="hover:text-foreground/80 text-foreground/60 pl-2 pr-4 text-xs font-medium transition-colors sm:text-sm">
                Search{" "}
                <span className="hidden xl:inline-block">Components</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
