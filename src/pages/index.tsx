import Header from "~/pages/landing/Header";
import SubHeader from "~/pages/landing/SubHeader";

export default function Home() {
  return (
    <div className="dark:bg-black">
      <Header />
      <SubHeader />
      {/* content */}
      <div className="mx-auto w-full max-w-[88rem]">
        <h2 className="mt-10 h-screen w-full space-y-2 px-6">
          <h3 className="text-sm font-bold dark:text-white">Arcade</h3>
          <p className="text-lightGray text-sm font-semibold">Cookie Clicker</p>
          <p className="text-lightGray text-sm font-semibold">
            Rock Paper Scissors
          </p>
          <p className="text-lightGray text-sm font-semibold">Balloon Pop</p>
        </h2>
      </div>
    </div>
  );
}
