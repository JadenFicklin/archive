import purchaseBackground from "~/pages/cookieClicker/assets/purchaseBackground.png";
import { cn } from "~/utils/cn";
import cookie from "~/pages/cookieClicker/assets/cookie.png";
import Image, { StaticImageData } from "next/image";

type PurchaseItemProps = {
  name: string; // Name of the item (e.g., Grandma, Factory, Bakery)
  amount: number; // Number of buildings
  purchasePrice: number; // Cost to buy the item
  incrementPerSecond: number; // Coins added per second by each item
  icon: StaticImageData;
  coins: number; // Current coin count
  onPurchase: (price: number, increment: number) => void; // Purchase handler
  disabled: boolean; // Whether the item is purchasable
};

export const PurchaseItem = ({
  name,
  amount,
  purchasePrice,
  incrementPerSecond,
  icon,
  coins,
  onPurchase,
  disabled,
}: PurchaseItemProps) => {
  return (
    <div
      className="group relative h-[70px]"
      onClick={
        !disabled
          ? () => onPurchase(purchasePrice, incrementPerSecond)
          : undefined
      }
    >
      <div
        className={`relative z-10 h-full w-full cursor-pointer select-none ${
          disabled ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        <div className="ml-16 grid h-[88%] grid-rows-2 pt-2">
          <Image
            src={icon}
            alt="building-icon"
            className="absolute left-[6px] z-20 mx-auto h-[80%] w-max"
          />
          <div className="text-outline text-2xl font-semibold text-white">
            {name}
          </div>
          <div className="flex flex-wrap items-center space-x-1">
            <Image
              src={cookie}
              alt="cookie"
              className={cn(
                "rouned-full size-3",
                disabled
                  ? "opacity-60"
                  : "opacity-100 group-hover:brightness-125",
              )}
            />
            <span className="text-outline text-sm font-bold text-[#66FF66]">
              {purchasePrice.toLocaleString()}
            </span>
          </div>{" "}
        </div>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-5xl font-bold text-black text-opacity-30">
          {amount.toLocaleString()}
        </div>
      </div>
      <Image
        src={purchaseBackground}
        alt="purchase background"
        className={cn(
          "absolute left-0 top-0 h-full w-full cursor-pointer transition-all",
          disabled ? "opacity-60" : "opacity-100 group-hover:brightness-125",
        )}
      />
    </div>
  );
};
