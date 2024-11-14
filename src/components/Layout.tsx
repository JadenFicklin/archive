import React from "react";
import { Categories } from "~/pages/landing/components/Categories";
import Header from "~/pages/landing/components/Header";
import SubHeader from "~/pages/landing/components/SubHeader";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className="dark:bg-black">
      <Header />
      <SubHeader />
      <div className="mx-auto grid w-full max-w-[88rem] grid-cols-[25%_75%]">
        <Categories />
        {children}
      </div>
    </div>
  );
};

export default Layout;
