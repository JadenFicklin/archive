import { Categories } from "~/pages/landing/components/Categories";
import { Display } from "~/pages/landing/components/Display";
import Header from "~/pages/landing/Header";
import SubHeader from "~/pages/landing/SubHeader";

export default function Home() {
  return (
    <div className="dark:bg-black">
      <Header />
      <SubHeader />
      {/* content */}
      <div className="mx-auto grid w-full max-w-[88rem] grid-cols-[25%_75%]">
        <Categories />
        <Display />
      </div>
    </div>
  );
}
