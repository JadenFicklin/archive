import React from "react";

interface DisplayProps {
  name?: string;
  subHeader?: string;
  page?: React.ReactNode;
}

export const Display: React.FC<DisplayProps> = ({ name, subHeader, page }) => {
  return (
    <div className="mx-auto mt-9 w-full">
      <h1 className="text-4xl font-bold text-gray dark:text-white">
        {name
          ?.split(" ")
          .map(
            (word) =>
              word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
          )
          .join(" ")}
      </h1>
      {subHeader && (
        <h2 className="dark:text-gray-400 mt-2 text-lg text-[#808080]">
          {subHeader}
        </h2>
      )}
      <div className="custom-shadow my-4 h-min min-h-[700px] w-full overflow-hidden rounded-[16px] border-[1px] border-[#e7e7e7] bg-[#f7f7f7] dark:border-[#1b1b1b] dark:bg-[#0e0e0e]">
        {page}
      </div>
    </div>
  );
};
