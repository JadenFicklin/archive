import { useState, useEffect } from "react";
import { cn } from "~/utils/cn";

export const CookieClicker = () => {
  const [coins, setCoins] = useState(0);
  const [cookieClicked, setCookieClicked] = useState(false);

  useEffect(() => {
    setCookieClicked(true);
    const timer = setTimeout(() => setCookieClicked(false), 50);
    return () => clearTimeout(timer);
  }, [coins]);

  return (
    <div className="relative">
      <h1
        className={`relative flex w-min p-4 text-3xl duration-150 dark:bg-[#0e0e0e] dark:text-white`}
      >
        Coins:{" "}
        <div
          className={cn(
            "relative left-1 top-0 duration-75",
            cookieClicked ? "-top-1" : "top-0",
          )}
        >
          {coins}
        </div>
      </h1>
      <div
        className={cn(
          "absolute left-5 top-20 size-20 cursor-pointer rounded-full bg-amber-900 duration-150 hover:scale-105 active:scale-110",
        )}
        onClick={() => setCoins(coins + 1)}
      >
        <div className="absolute left-2 top-8 size-2 -rotate-12 bg-black"></div>
        <div className="absolute left-5 top-4 size-3 rotate-12 bg-black"></div>
        <div className="absolute bottom-4 left-3 size-3 -rotate-45 bg-black"></div>
        <div className="absolute right-8 top-9 size-3 rotate-[60deg] bg-black"></div>
        <div className="absolute right-2 top-9 size-3 -rotate-[60deg] bg-black"></div>
        <div className="absolute right-6 top-4 size-2 -rotate-12 bg-black"></div>
        <div className="absolute bottom-3 right-7 size-2 -rotate-45 bg-black"></div>
      </div>
    </div>
  );
};
