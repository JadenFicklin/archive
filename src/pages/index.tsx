import Header from "~/pages/landing/Header";
import SubHeader from "~/pages/landing/SubHeader";

export default function Home() {
  return (
    <div>
      <Header />
      <SubHeader />
      <h2 className="h-screen w-full">hello world!</h2>
    </div>
  );
}
