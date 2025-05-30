import React from "react";
import zamin from "../../public/images/zamin.png";
import address from "../../public/images/address.png";
import email from "../../public/images/email.png";
import phone from "../../public/images/phone.png";
import instagram from "../../public/images/Instagram.png";
import linkedin from "../../public/images/linkedin black.1.png";
import twitter from "../../public/images/twitter black.1.png";

import Image from "next/image";

function Footer() {
  return (
    <div className="relative w-full h-[443px] mt-32 bg-white md:px-[90px] xl:px-[357px]">
      <div className="before:w-[50%] before:absolute before:left-[25%] before:top-0 before:bg-[#DBDBDB] before:h-0.5"></div>
      <footer className="flex flex-col w-full pt-[92px] h-full" dir="rtl">
        <div className="w-full h-[128px] mt-20  flex flex-col-reverse items-center sm:flex-row">
          {/* right side */}
          <div className="w-[60%] pt-6 sm:pt-0">
            {/* address */}
            <div className=" flex h-[24px] items-center gap-3 font-normal text-[14px]">
              <div className="w-[22px]">
                <Image src={address} alt="address" />
              </div>

              <address className="text-[10px] text-center sm:text-[14px]">
                تهران، حقانی، باغ کتاب، مرکز نوآوری پارادایس‌هاب، آژانس زمین
              </address>
            </div>
            {/* email phone */}
            <div className="w-full flex justify-between h-[24px] mt-[16px]">
              <div className="w-[40%] flex items-center  gap-4">
                <Image src={email} alt="email" />
                <span className="text-[14px] sm:text-[17px]">
                  info@zaminweb.ir
                </span>
              </div>
              <div className="w-[40%] flex items-center gap-4">
                <Image src={phone} alt="phone" />
                <span className="text-[14px] sm:text-[17px]">09384547055</span>
              </div>
            </div>
            {/* email phone end*/}
            {/* social */}
            <div className="flex justify-between mt-[40px] h-[24px]">
              <span>ما را دنبال کنید</span>
              <div className="flex items-center justify-between w-[120px] h-[24px]">
                <Image src={instagram} alt="phone" />
                <Image src={linkedin} alt="phone" />
                <Image src={twitter} alt="phone" />
              </div>
            </div>
            {/* social end */}
          </div>
          {/* right side end */}
          {/* left side */}
          <div className="w-[40%] flex items-center justify-end gap-3 bg">
            <div className="w-[202px] h-[89px]">
              <Image src={zamin} alt="logo" />
            </div>
          </div>
          {/* left side end */}
        </div>
        {/* copright */}
        <div className="mt-[80px]">
          <hr className="opacity-20" />
          <p className="text-center mt-[25px] opacity-65">
            Copyright © 2022 • Zamin Agency
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
