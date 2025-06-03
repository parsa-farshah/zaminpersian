import React from "react";
import NavbarPort from "../components/NavbarPort";
import PortfolioRecent from "../components/PortfolioRecent";
import Footer from "../components/Footer";

function page() {
  return (
    <div>
      <div className="relative bg-[#F5F5F5] flex flex-col justify-center px-4 md:px-[90px] xl:px-[357px]">
        <div
          className="w-full absolute top-0 left-0 h-screen bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/bg-portfolio2.png')" }}
        ></div>
        <NavbarPort />
        <PortfolioRecent />
      </div>
      <Footer />
    </div>
  );
}

export default page;
