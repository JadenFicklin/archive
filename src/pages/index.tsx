import Header from "~/pages/landing/Header";
import SubHeader from "~/pages/landing/SubHeader";

export default function Home() {
  return (
    <div>
      <Header />
      <SubHeader />
      {/* content */}
      <div className="mx-auto w-full max-w-[88rem]">
        <h2 className="h-screen w-full text-gray-800 dark:bg-black dark:text-white">
          hello world!
        </h2>
      </div>
    </div>
  );
}
