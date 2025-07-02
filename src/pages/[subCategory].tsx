import { useRouter } from "next/router";
import { FC } from "react";
import Layout from "~/components/Layout";
import { Display } from "~/pages/landing/components/Display";
import { categories } from "~/pages/landing/data/categories";

const getPageComponent = (subCategoryName: string) => {
  for (const category of categories) {
    for (const sub of category.categorySubs) {
      if (sub.name.toLowerCase() === subCategoryName.toLowerCase()) {
        return {
          page: sub.page ? <sub.page /> : null,
          subHeader: sub.subHeader || "",
        };
      }
    }
  }
  return { page: null, subHeader: "" };
};

const SubCategoryPage: FC = () => {
  const router = useRouter();
  const { subCategory } = router.query;
  const displayName = typeof subCategory === "string" ? subCategory : undefined;

  if (!displayName) return null;

  const { page: PageComponent, subHeader } = getPageComponent(displayName);

  return (
    <Layout>
      <Display
        name={displayName}
        subHeader={subHeader ?? ""}
        page={PageComponent}
      />
    </Layout>
  );
};

export default SubCategoryPage;
