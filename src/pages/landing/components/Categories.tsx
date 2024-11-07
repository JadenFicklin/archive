import { useState } from "react";
import { useRouter } from "next/router";
import { Drawer } from "~/components/Drawer";
import { FaChevronDown } from "react-icons/fa6";
import { cn } from "~/utils/cn";
import { categories } from "~/pages/landing/data/categories";

interface Category {
  category: string;
  categorySubs: {
    name: string;
  }[];
}

export const Categories: React.FC = () => {
  const [expandedCategories, setExpandedCategories] = useState<{
    [key: number]: boolean;
  }>({});
  const router = useRouter();

  const toggleCategory = (index: number) => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleSubItemClick = (name: string) => {
    router.push(`/${name.toLowerCase()}`);
  };

  return (
    <div className="mt-10 h-screen w-full select-none space-y-2 px-6">
      {categories.map((item: Category, index: number) => (
        <div key={index}>
          <div
            className="relative cursor-pointer rounded-lg p-1 pl-2 text-sm font-bold hover:bg-[#f5f5f5] dark:text-white dark:hover:bg-[#1b1b1b]"
            onClick={() => toggleCategory(index)}
          >
            {item.category}
            <FaChevronDown
              className={cn(
                "absolute right-3 top-1/2 -translate-y-1/2 duration-300",
                expandedCategories[index] && "rotate-180",
              )}
            />
          </div>
          <div>
            {item.categorySubs.map((subItem, subIndex) => (
              <div key={subIndex}>
                <Drawer show={!expandedCategories[index]} duration={"250ms"}>
                  <p
                    className="cursor-pointer rounded-lg p-1 pl-2 text-sm text-lightGray duration-300 hover:pl-4 hover:text-blue-500 dark:hover:text-green-500"
                    onClick={() => handleSubItemClick(subItem.name)}
                  >
                    {subItem.name}
                  </p>
                </Drawer>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
