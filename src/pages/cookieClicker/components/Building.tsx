import pannelHorizontal from "~/pages/cookieClicker/assets/panelHorizontal.png";
import Image, { StaticImageData } from "next/image";

type PurchaseItemProps = {
  amount: number; // Number of buildings
  background?: StaticImageData; // Optional background for the building
  backgroundIcon?: StaticImageData; // Optional background icon for the building
};

export const Building = ({
  amount,
  background,
  backgroundIcon,
}: PurchaseItemProps) => {
  return (
    <>
      {amount ? (
        <div className="relative mx-auto ml-3 h-20 p-2 pt-3">
          {/* Panel */}
          <Image
            src={pannelHorizontal}
            alt="pannel"
            className="absolute left-0 top-0 z-10 h-3 w-full"
          />

          {/* Optional Background */}
          {background && (
            <div
              className="absolute left-0 top-0 z-0 h-full w-full bg-repeat"
              style={{ backgroundImage: `url(${background.src})` }}
            ></div>
          )}

          {/* Background Icons */}
          {backgroundIcon && (
            <div className="relative z-20 h-[113%] w-full overflow-hidden">
              {Array.from({ length: amount }).map((_, index) => {
                // Calculate row and column
                const row = Math.floor(index / 12);
                const column = index % 12;

                return (
                  <Image
                    key={index}
                    src={backgroundIcon}
                    alt="building-background-icon"
                    className="absolute size-12"
                    style={{
                      top: `${row * 20}px`,
                      left: `${column * 25}px`,
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
