import { useState } from "react";
import { Drawer } from "~/components/Drawer";
import { FaChevronDown } from "react-icons/fa6";
import { cn } from "~/utils/cn";

export const Categories = () => {
  const [categoryClicked, setCategoryClicked] = useState(false);

  return (
    <div className="mt-10 h-screen w-full space-y-2 px-6">
      <div
        className="relative cursor-pointer rounded-lg p-1 pl-2 text-sm font-bold hover:bg-[#f5f5f5] dark:text-white dark:hover:bg-[#1b1b1b]"
        onClick={() => setCategoryClicked(!categoryClicked)}
      >
        Arcade
        <FaChevronDown
          className={cn(
            "absolute right-3 top-1/2 -translate-y-1/2 duration-300",
            categoryClicked && "rotate-180",
          )}
        />
      </div>
      <Drawer show={!categoryClicked} duration={"250ms"}>
        <p className="cursor-pointer rounded-lg p-1 pl-2 text-sm text-lightGray duration-300 hover:pl-4 hover:text-blue-500 dark:hover:text-green-500">
          Cookie Clicker
        </p>
        <p className="cursor-pointer rounded-lg p-1 pl-2 text-sm text-lightGray duration-300 hover:pl-4 hover:text-blue-500 dark:hover:text-green-500">
          Rock Paper Scissors
        </p>
        <p className="cursor-pointer rounded-lg p-1 pl-2 text-sm text-lightGray duration-300 hover:pl-4 hover:text-blue-500 dark:hover:text-green-500">
          Balloon Pop
        </p>
      </Drawer>
    </div>
  );
};
