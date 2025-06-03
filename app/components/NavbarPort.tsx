import React from "react";

function NavbarPort() {
  return (
    <nav className="flex justify-center" dir="rtl">
      <div
        className="w-full absolute top-0 left-0 h-screen bg-cover bg-center z-2"
        style={{ backgroundImage: "url('/images/bg-portfolio2.png')" }}
      ></div>
      <div className="bg-gradient-to-r from-[#383838] via-[#000000] to-[#383838] w-[353px] md:w-[429px] h-[56px] fixed top-[16px] rounded-[19px] shadow flex justify-between  mt-[37px] items-center  z-60">
        <div className="flex justify-between items-center w-full h-full  p-3">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
            >
              <path
                d="M1 7H17M17 7L11 1M17 7L11 13"
                stroke="#F5F5F5"
                strokeWidth="1.5"
              />
            </svg>
            <span className="text-[13px] font-normal text-white pr-2">
              بازگشت
            </span>
          </div>
          <div className="w-[100px] h-[32px] bg-white flex justify-center items-center rounded-[8px] text-[12px] font-semibold">
            ثبت درخواست
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarPort;
