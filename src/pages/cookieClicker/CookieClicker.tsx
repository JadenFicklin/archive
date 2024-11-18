import { useState, useEffect } from "react";
import { PurchaseItem } from "~/pages/cookieClicker/components/PurchaseItem";
import { cn } from "~/utils/cn";
import { buildings } from "~/pages/cookieClicker/data/buildings";
export const CookieClicker = () => {
  const [coins, setCoins] = useState(() => {
    // Initialize from local storage or default to 0
    const savedCoins = localStorage.getItem("coins");
    return savedCoins ? parseFloat(savedCoins) : 0;
  });

  const [incrementRate, setIncrementRate] = useState(() => {
    // Initialize from local storage or default to 0
    const savedIncrementRate = localStorage.getItem("incrementRate");
    return savedIncrementRate ? parseFloat(savedIncrementRate) : 0;
  });

  const [purchasedBuildings, setPurchasedBuildings] = useState(() => {
    // Initialize from local storage or default to an array of 0s
    const savedBuildings = localStorage.getItem("purchasedBuildings");
    return savedBuildings ? JSON.parse(savedBuildings) : buildings.map(() => 0);
  });

  // Save coins, increment rate, and purchased buildings to local storage when they change
  useEffect(() => {
    localStorage.setItem("coins", coins.toString());
  }, [coins]);

  useEffect(() => {
    localStorage.setItem("incrementRate", incrementRate.toString());
  }, [incrementRate]);

  useEffect(() => {
    localStorage.setItem(
      "purchasedBuildings",
      JSON.stringify(purchasedBuildings),
    );
  }, [purchasedBuildings]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (incrementRate > 0) {
        setCoins((prevCoins) => prevCoins + incrementRate);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [incrementRate]);

  const handlePurchase = (index: number, price: number, increment: number) => {
    if (coins >= price) {
      setCoins((prevCoins) => prevCoins - price);
      setIncrementRate((prevRate) => prevRate + increment);
      setPurchasedBuildings((prevBuildings: any) => {
        const newBuildings = [...prevBuildings];
        newBuildings[index] = (newBuildings[index] || 0) + 1;
        return newBuildings;
      });
    }
  };

  const calculatePrice = (basePrice: number, quantity: number): number => {
    return Math.ceil(basePrice * Math.pow(1.15, quantity));
  };

  return (
    <div className="relative p-4">
      <h1
        className={`relative flex w-min text-3xl duration-150 dark:text-white`}
      >
        Coins:{" "}
        <div className={cn("relative left-1 top-0 duration-75")}>
          <span>{Math.round(coins)}</span>
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

      <div className="">
        Increment Rate:{" "}
        <span className="font-bold">{incrementRate.toFixed(1)}</span> coins/sec
      </div>
      <div className="mt-32 space-y-4">
        {buildings.map((building, index) => {
          const currentPrice = calculatePrice(
            building.basePrice,
            purchasedBuildings[index] ?? 0,
          );
          return (
            <PurchaseItem
              key={building.name}
              name={`${building.name} (x${purchasedBuildings[index] ?? 0})`}
              purchasePrice={currentPrice}
              incrementPerSecond={building.cps}
              coins={coins}
              onPurchase={() =>
                handlePurchase(index, currentPrice, building.cps)
              }
              disabled={coins < currentPrice}
            />
          );
        })}
      </div>
    </div>
  );
};
