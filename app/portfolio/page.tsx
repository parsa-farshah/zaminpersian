import React from "react";
import NavbarPort from "../components/NavbarPort";
import PortfolioRecent from "../components/PortfolioRecent";
import Footer from "../components/Footer";

function page() {
  return (
    <div>
      <div className="relative bg-[#F5F5F5] flex flex-col justify-center px-4 md:px-[90px] xl:px-[357px]">
        <NavbarPort />
        <PortfolioRecent />
      </div>
      <Footer />
    </div>
  );
}

export default page;
