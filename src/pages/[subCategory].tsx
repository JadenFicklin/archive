import { useRouter } from "next/router";
import { FC } from "react";
import { Categories } from "~/pages/landing/components/Categories";
import { Display } from "~/pages/landing/components/Display";
import Header from "~/pages/landing/Header";
import SubHeader from "~/pages/landing/SubHeader";

const SubCategoryPage: FC = () => {
  const router = useRouter();
  const { subCategory } = router.query;

  // Ensure `subCategory` is a string before passing it to `Display`
  const displayName = typeof subCategory === "string" ? subCategory : undefined;

  return (
    <div>
      <Header />
      <SubHeader />

      <div className="mx-auto grid w-full max-w-[88rem] grid-cols-[25%_75%]">
        <Categories />
        <Display name={displayName} />
      </div>
    </div>
  );
};

export default SubCategoryPage;
