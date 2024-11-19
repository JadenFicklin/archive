type PurchaseItemProps = {
  amount: number; // Number of buildings
};
import pannelHorizontal from "~/pages/cookieClicker/assets/panelHorizontal.png";
import Image from "next/image";

export const Building = ({ amount }: PurchaseItemProps) => {
  return (
    <>
      {" "}
      {amount ? (
        <div className="relative mx-auto ml-3 h-20 bg-black bg-opacity-30 p-2 pt-3">
          <Image
            src={pannelHorizontal}
            alt="pannel"
            className="absolute left-0 top-0 z-10 h-3 w-full"
          />
          <span className="text-white">{amount}</span>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
