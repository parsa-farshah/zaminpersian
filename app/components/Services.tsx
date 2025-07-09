import Image from "next/image";
import React from "react";
import dotWork from "../../public/images/dotsWork.svg";
import uxResearch from "../../public/images/uxResearch.svg";
import uiDesign from "../../public/images/uidesign.svg";
import frontEnd from "../../public/images/frontEnd.svg";
import backEnd from "../../public/images/backEnd.svg";

function Services() {
  return (
    <div
      className="flex flex-col justify-center mt-[100px] pt-[100px]"
      id="service"
    >
      <div className="w-full max-w-[1400px] flex items-center justify-between gap-2 pt-8 sm:pt-4">
        <div className="bg-[#EAEAEA] w-full h-0.5"></div>
        <div className="flex gap-3">
          <div className="w-full flex justify-center">
            <button className="w-[131px] flex justify-center rounded-[12px] items-center h-9 bg-[#EBEBEB] font-semibold  text-sm text-center  ">
              <Image className="w-[17px] mx-2" src={dotWork} alt="" />
              خدمات
              <Image className="w-[17px] mx-2" src={dotWork} alt="" />
            </button>
          </div>
        </div>
        <div className="bg-[#EAEAEA] w-full h-0.5"></div>
      </div>
      <div className="pt-6 flex flex-col items-center justify-center">
        <h1 className="font-medium text-2xl text-black text-center">
          🛠️ خدمات یکپارچه توسعه <br />
          وبسایت
        </h1>
      </div>
      {/* all services card */}
      <div className="w-full h-auto flex flex-col pt-11">
        {/* line 1 */}
        <div className="flex justify-between w-full">
          <div className=" bg-[#FFFFFF] rounded-3xl w-[100%] sm:w-[45%]">
            <div className="pr-6 py-6 flex flex-col items-end">
              <Image src={uiDesign} alt="servis image" />
              <h1 className=" font-semibold text-[16px] pt-[13px]" dir="rtl">
                طراحی UI
              </h1>
              <pre className="text-[#727272] text-[14px] font-normal text-right   pt-[13px] leading-6">
                طراحی رابط کاربری User Friendly برای <br />
                تعامل بهتر کاربر با محصول و افزایش <br /> رضایت مشتری.
              </pre>
            </div>
          </div>
          <div className=" bg-[#FFFFFF] rounded-3xl w-[45%] hidden sm:flex sm:justify-end pr-6">
            <div className="pl-9 pt-6 flex flex-col items-end">
              <Image src={uxResearch} alt="servis image" />
              <h1 className=" font-semibold text-[16px] pt-[13px]">
                کاربرپژوهی
              </h1>
              <p className="text-[#727272] text-right text-[14px] font-normal  pt-[13px]">
                تحقیق بر روی کاربران به هدف پیدا کردن <br /> فرصت‌ها و مشکلاتی
                کاربران در استفاده
                <br />
                از محصول
              </p>
            </div>
          </div>
        </div>
        {/* line 2 */}
        <div className="flex justify-between w-full pt-[34px]">
          <div className=" bg-[#FFFFFF] rounded-3xl w-[100%] sm:w-[45%]">
            <div className="pr-6 py-6 flex flex-col items-end">
              <Image src={frontEnd} alt="servis image" />
              <h1 className=" font-semibold text-[16px] pt-[13px]" dir="rtl">
                توسعه front-end
              </h1>
              <p
                className="text-[#727272] text-right text-[14px] font-normal pt-[13px] leading-6"
                dir="rtl"
              >
                توسعه سمت فرانت با زبان js و<br />
                تکنولوژی‌هایی مانند React, Next js , <br />
                Tailwind
              </p>
            </div>
          </div>
          <div className="bg-[#FFFFFF] rounded-3xl w-[45%] hidden sm:flex sm:justify-end pr-6">
            <div className="pl-13 pt-6 flex flex-col items-end">
              <Image src={backEnd} alt="servis image" />
              <h1 className=" font-semibold text-[16px] pt-[13px]" dir="rtl">
                توسعه Back-end
              </h1>
              <p
                className="text-[#727272] text-right text-[14px] font-normal  pt-[13px]"
                dir="rtl"
              >
                توسعه سمت سرور با زبان python به <br />
                کمک کتابخانه Django
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
