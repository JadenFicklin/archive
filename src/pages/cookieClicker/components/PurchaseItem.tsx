type PurchaseItemProps = {
  name: string; // Name of the item (e.g., Grandma, Factory, Bakery)
  purchasePrice: number; // Cost to buy the item
  incrementPerSecond: number; // Coins added per second by each item
  coins: number; // Current coin count
  onPurchase: (price: number, increment: number) => void; // Purchase handler
  disabled: boolean; // Whether the item is purchasable
};

export const PurchaseItem = ({
  name,
  purchasePrice,
  incrementPerSecond,
  coins,
  onPurchase,
  disabled,
}: PurchaseItemProps) => {
  return (
    <div
      className={`cursor-pointer dark:text-white ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      }`}
      onClick={
        !disabled
          ? () => onPurchase(purchasePrice, incrementPerSecond)
          : undefined
      }
    >
      {name}: purchase price{" "}
      <span className="text-red-600 dark:text-red-400">{purchasePrice}</span> |
      +{incrementPerSecond} coins/sec
    </div>
  );
};
