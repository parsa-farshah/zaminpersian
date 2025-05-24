import React from "react";
import dotWork from "../../public/images/dotsWork.svg";
import tick from "../../public/images/tick.svg";
import Image from "next/image";

function Price() {
  return (
    <div
      className="flex flex-col justify-center pt-24 max-w-[1400px]"
      id="price"
    >
      <div className="w-full max-w-[1400px] flex items-center justify-between gap-2 pt-8 sm:pt-4">
        <div className="bg-[#EAEAEA] w-full h-0.5"></div>
        <div className="flex gap-3">
          <div className="w-full flex justify-center">
            <button className="w-[131px] flex justify-center rounded-[12px] items-center h-9 bg-[#EBEBEB] font-semibold  text-sm text-center font-inter ">
              <Image className="w-[17px] mx-2" src={dotWork} alt="" />
              قیمت ها
              <Image className="w-[17px] mx-2" src={dotWork} alt="" />
            </button>
          </div>
        </div>
        <div className="bg-[#EAEAEA] w-full h-0.5"></div>
      </div>
      {/* cards */}
      <div className="flex flex-col items-center sm:flex-row pt-11 gap-6 justify-center">
        {/* first */}
        <div className="w-[262px] h-auto bg-[#FFFFFF] rounded-[20px] pt-[32px] px-4 pb-[16px] text-right">
          <h1 className="font-inter font-semibold text-[16px] ">
            طراحی صفحه فرود
          </h1>
          <div className="flex pt-4 items-center flex-row-reverse">
            <h1 className="font-inter font-extrabold text-[26px]">3.000.000</h1>
            <div className="pl-2">
              <p className="font-inter font-normal text-[12px] text-gray-400">
                تومان
              </p>
              <p className="font-inter font-normal text-[12px] text-gray-400">
                پرداخت سه مرحله ایی
              </p>
            </div>
          </div>
          <div className="flex-col gap-3 pt-6 pl-2 hidden sm:flex">
            <div className="flex gap-2 justify-end">
              <p className="font-inter font-light text-[14px]">
                نسبت به ابعاد پروژه
              </p>
              <Image src={tick} alt="tick" />
            </div>
            <div className="flex gap-2 justify-end">
              <p className="font-inter font-light text-[14px]">
                دسترسی کامل به سورس و طرح‌ها
              </p>
              <Image src={tick} alt="tick" />
            </div>
            <div className="flex justify-end gap-2">
              <p className="font-inter font-light text-[14px]">
                آپشن سومی که بهش میدیم
              </p>
              <Image src={tick} alt="tick" />
            </div>
            <div className="flex justify-end gap-2">
              <p className="font-inter font-light text-[14px]">
                آپشن سومی که بهش میدیم
              </p>
              <Image src={tick} alt="tick" />
            </div>
            <div className="flex justify-end gap-2">
              <p className="font-inter font-light text-[14px]">
                آپشن سومی که بهش میدیم
              </p>
              <Image src={tick} alt="tick" />
            </div>
          </div>
          <div className="pt-10 sm:pt-28">
            <button className="w-full cursor-pointer flex justify-center  items-center h-9 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-md shadow-blue-100/20 dark:shadow-md dark:shadow-blue-300/80 font-medium rounded-lg text-sm  text-center font-inter ">
              ثبت درخواست
            </button>
          </div>
        </div>
        {/* second */}
        <div className="w-[262px] h-auto bg-[#FFFFFF] rounded-[20px] pt-[32px] px-4 pb-[16px]">
          <h1 className="font-inter font-semibold text-[16px] ">
            Landing Page
          </h1>
          <div className="flex pt-4 items-center">
            <h1 className="font-inter font-extrabold text-[26px] ">$199</h1>
            <div className="pl-2">
              <p className="font-inter font-normal text-[12px] text-gray-400">
                per month
              </p>
              <p className="font-inter font-normal text-[12px] text-gray-400">
                billed monthly
              </p>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-3 pt-6 pl-2">
            <div className="flex gap-2">
              <Image src={tick} alt="tick" />
              <p className="font-inter font-light text-[14px]">
                7-12 Days turnaround time
              </p>
            </div>
            <div className="flex gap-2">
              <Image src={tick} alt="tick" />
              <p className="font-inter font-light text-[14px]">
                3 Design Concepts
              </p>
            </div>
            <div className="flex gap-2">
              <Image src={tick} alt="tick" />
              <p className="font-inter font-light text-[14px]">
                Access to member gallery
              </p>
            </div>
            <div className="flex gap-2">
              <Image src={tick} alt="tick" />
              <p className="font-inter font-light text-[14px]">
                Optional credit top ups
              </p>
            </div>
            <div className="flex gap-2">
              <Image src={tick} alt="tick" />
              <p className="font-inter font-light text-[14px]">
                3 concurrent fast jobs
              </p>
            </div>
          </div>
          <div className="pt-10 sm:pt-28">
            <button className="w-full cursor-pointer flex justify-center  items-center h-9 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-md shadow-blue-100/20 dark:shadow-md dark:shadow-blue-300/80 font-medium rounded-lg text-sm  text-center font-inter ">
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
