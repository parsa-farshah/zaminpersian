import React from "react";
import logoZamin from "../../public/images/logoZamin.svg";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="flex justify-center">
      <div
        className="bg-white w-[361px] md:w-[537px] h-[56px] fixed top-[16px] rounded-[19px] shadow flex justify-between px-[12px] py-5 items-center  z-60
"
      >
        <div className="w-[86px] h-[36px] bg-[#F6F8FA] rounded-xl flex justify-around items-center  ">
          <button className="bg-[#FFFFFF] w-[37px] h-[28px] rounded-md shadow-2xs font-vazir">
            فا
          </button>
          <button>EN</button>
        </div>
        <div className="text-gray-500 hidden md:flex">
          <ul className="flex justify-between gap-[16px] text-sm font-inter cursor-pointer font-vazir">
            <li className="hover:text-black ">خدمات</li>
            <li className="hover:text-black">
              <a href="#nemoone">نمونه ها</a>
            </li>
            <li className="hover:text-black">قیمت</li>
            <li className="hover:text-black">درباره ما</li>
          </ul>
        </div>
        <div className="flex items-center gap-3 ">
          <h1 className="text-black font-bold font-inter font-vazir">زمین</h1>
          <Image src={logoZamin} alt="" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
