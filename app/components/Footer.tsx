import React from "react";
import zamin from "../../public/images/zamin.png";
import instagram from "../../public/images/Instagram.png";
import linkedin from "../../public/images/linkedin black.1.png";
import twitter from "../../public/images/twitter black.1.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="relative w-full h-[311px] mt-38 bg-white md:px-[90px] xl:px-[357px]">
      <div className="before:w-[50%] before:absolute before:left-[25%] before:top-0 before:bg-[#DBDBDB] before:h-0.5"></div>
      <footer className="flex flex-col w-full pt-[26px] h-full" dir="rtl">
        <div className="w-full h-[128px] mt-[16px] flex flex-col items-center">
          {/* left side */}
          <div className="w-[40%] flex items-center justify-center gap-3">
            <div className="w-[96px] h-[42px]">
              <Image src={zamin} alt="logo" />
            </div>
          </div>
          {/* left side end */}
          {/* right side */}
          <div className="w-[60%] mt-6 sm:pt-6">
            {/* address */}
            <div className=" flex h-[24px] items-center gap-3 font-normal text-[14px]">
              <div className="w-[14px] h-[14px] sm:w-[18px] sm:h-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 13.17 14.58 18.92 12.77 21.11C12.37 21.59 11.64 21.59 11.24 21.11C9.42 18.92 5 13.17 5 9ZM9.5 9C9.5 10.38 10.62 11.5 12 11.5C13.38 11.5 14.5 10.38 14.5 9C14.5 7.62 13.38 6.5 12 6.5C10.62 6.5 9.5 7.62 9.5 9Z"
                    fill="#575757"
                  />
                </svg>
              </div>

              <address className="text-[10px] text-center sm:text-[14px]">
                تهران، حقانی، باغ کتاب، مرکز نوآوری پارادایس‌هاب، آژانس زمین
              </address>
            </div>
            {/* email phone */}
            <div className="w-full flex items-center justify-between h-[30px] mt-[16px]">
              <div className="flex items-center  gap-2">
                <div className="flex items-center w-[14px] h-[14px]  sm:w-[20px] sm:h-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
                      stroke="#727272"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[10px]  sm:text-[17px]">
                  info@zaminweb.ir
                </span>
              </div>
              <div className="flex  items-center gap-2">
                <div className="flex items-center w-[10px] h-[8px]  sm:w-[20px] sm:h-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.23 12.26L13.69 11.97C13.08 11.9 12.48 12.11 12.05 12.54L10.21 14.38C7.38004 12.94 5.06004 10.63 3.62004 7.79001L5.47004 5.94001C5.90004 5.51001 6.11004 4.91001 6.04004 4.30001L5.75004 1.78001C5.63004 0.77001 4.78004 0.0100098 3.76004 0.0100098H2.03004C0.900041 0.0100098 -0.0399593 0.95001 0.0300407 2.08001C0.560041 10.62 7.39004 17.44 15.92 17.97C17.05 18.04 17.99 17.1 17.99 15.97V14.24C18 13.23 17.24 12.38 16.23 12.26Z"
                      fill="#575757"
                    />
                  </svg>
                </div>

                <span className="text-[10px]  sm:text-[17px]">09384547055</span>
              </div>
            </div>
            {/* email phone end*/}
            {/* social */}
            <div className="flex justify-center items-center mt-[32px] h-[24px]">
              <div className="flex items-center justify-between w-[120px] h-[24px]">
                <Image src={instagram} alt="phone" />
                <Image src={linkedin} alt="phone" />
                <Image src={twitter} alt="phone" />
              </div>
            </div>
            {/* social end */}
          </div>
          {/* right side end */}
        </div>
        {/* copright */}
        <div className="mt-[100px]">
          <hr className="opacity-20" />
          <p className="text-center mt-[18px] opacity-65">
            Copyright © 2022 • Zamin Agency
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
