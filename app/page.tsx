import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Work from "./components/Work";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center px-4 md:px-[90px] xl:px-[357px]">
      <Navbar />
      <Header />
      <Work />
      <Price />
    </div>
  );
}
