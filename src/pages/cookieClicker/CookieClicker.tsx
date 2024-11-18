import { useState, useEffect } from "react";
import { PurchaseItem } from "~/pages/cookieClicker/components/PurchaseItem";
import { cn } from "~/utils/cn";

export const CookieClicker = () => {
  const [coins, setCoins] = useState(0);
  const [cookieClicked, setCookieClicked] = useState(false);
  const [incrementRate, setIncrementRate] = useState(0); // Total coins per second from all items

  // Increase coins every second based on the increment rate
  useEffect(() => {
    const interval = setInterval(() => {
      if (incrementRate > 0) {
        setCoins((prevCoins) => prevCoins + incrementRate);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [incrementRate]);

  const handlePurchase = (price: number, increment: number) => {
    if (coins >= price) {
      setCoins((prevCoins) => prevCoins - price); // Deduct the price
      setIncrementRate((prevRate) => prevRate + increment); // Add to the increment rate
    }
  };

  useEffect(() => {
    setCookieClicked(true);
    const timer = setTimeout(() => setCookieClicked(false), 50);
    return () => clearTimeout(timer);
  }, [coins]);

  return (
    <div className="relative p-4">
      <h1
        className={`relative flex w-min text-3xl duration-150 dark:text-white`}
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

      <div className="mt-32 space-y-4">
        <PurchaseItem
          name="Grandma"
          purchasePrice={10}
          incrementPerSecond={1}
          coins={coins}
          onPurchase={handlePurchase}
          disabled={coins < 10}
        />
        <PurchaseItem
          name="Factory"
          purchasePrice={50}
          incrementPerSecond={5}
          coins={coins}
          onPurchase={handlePurchase}
          disabled={coins < 50}
        />
        <PurchaseItem
          name="Bakery"
          purchasePrice={100}
          incrementPerSecond={10}
          coins={coins}
          onPurchase={handlePurchase}
          disabled={coins < 100}
        />
      </div>

      <div className="mt-8">
        Increment Rate: <span className="font-bold">{incrementRate}</span>{" "}
        coins/sec
      </div>
    </div>
  );
};
