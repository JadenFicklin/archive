import { useState, useEffect } from "react";
import { PurchaseItem } from "~/pages/cookieClicker/components/PurchaseItem";
import { cn } from "~/utils/cn";
import { buildings } from "~/pages/cookieClicker/data/buildings";
import cookie from "~/pages/cookieClicker/assets/cookie.png";
import background from "~/pages/cookieClicker/assets/background.jpg";
import Image from "next/image";

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
    <div className="relative grid grid-cols-[30%,35%,35%]">
      <div className="relative overflow-hidden">
        <div className="absolute z-20 w-full">
          <div className="mt-10 w-full bg-black bg-opacity-50">
            <h1 className={`text-center text-2xl font-semibold text-white`}>
              {Math.round(coins).toLocaleString()} cookies
            </h1>
            <h2 className="text-md -mt-1 text-center text-white text-opacity-80">
              per second: {incrementRate.toFixed(1).toLocaleString()}
            </h2>
          </div>
          <Image
            src={cookie}
            alt="cookie"
            className="mx-auto mt-12 size-48 cursor-pointer rounded-full duration-150 hover:scale-110 active:scale-125"
            onClick={() => setCoins(coins + 1)}
          />
        </div>
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-b from-black/0 to-black/90"></div>

        <Image
          src={background}
          alt="cookie"
          className="absolute left-0 top-0 h-full w-full"
          onClick={() => setCoins(coins + 1)}
        />
      </div>
      <div></div>
      <div className="relative">
        <div className="scrollbar-hide relative z-20 h-[700px] overflow-auto">
          {buildings.map((building, index) => {
            const currentPrice = calculatePrice(
              building.basePrice,
              purchasedBuildings[index] ?? 0,
            );
            return (
              <PurchaseItem
                key={building.name}
                name={`${building.name}`}
                amount={purchasedBuildings[index] ?? 0}
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
        <div>
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-black bg-opacity-70"></div>
          <Image
            src={background}
            alt="cookie"
            className="absolute left-0 top-0 h-full w-full"
            onClick={() => setCoins(coins + 1)}
          />
        </div>
      </div>
    </div>
  );
};
