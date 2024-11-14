import React from "react";

interface DisplayProps {
  name?: string;
  page?: React.ReactNode;
}

export const Display: React.FC<DisplayProps> = ({ name, page }) => {
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
      <div className="h-min w-full bg-blue-200">{page}</div>{" "}
    </div>
  );
};
