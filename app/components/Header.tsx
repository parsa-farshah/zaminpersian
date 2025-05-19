import Image from "next/image";
import React from "react";
import headerXl from "../../public/images/Desktop and tablet.webp";
import headerMobile from "../../public/images/mobile.webp";
import younes from "../../public/images/younesImage.png";

function Header() {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-[50px]">
      <div className="w-full flex justify-center">
        <Image
          className="object-contain hidden sm:block max-w-[1200px]  w-full h-full "
          src={headerXl}
          alt="haeder Image Xl"
        />
        <Image
          className="object-contain sm:hidden w-full h-full pt-3"
          src={headerMobile}
          alt="haeder Image Xl"
        />
      </div>
      <div className="pt-1">
        <h1 className="text-center font-roboto text-[#282828] pt-6 sm:pt-0 text-[28px] sm:text-[38px] leading-11 sm:leading-13 font-extrabold sm:font-bold font-vazir">
          طراحی و توسعه وبسایت در کلاس جهانی
          <br className="lg:block hidden" /> برای متفاوت دیده شدن
        </h1>
        <p className="pt-3 sm:pt-2 text-[14px] font-inter font-normal text-[#717171] leading-6 text-center font-vazir">
          تیم زمین آمده است تا برای طراحی و توسعه یک وبسایت دوستانه و مدرن در
          کنار شما
          <br />
          باشد تا بتوانید از رقبای خود متمایز دیده شوید
        </p>
      </div>
      {/* button */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px] flex items-center justify-between gap-2 pt-8 sm:pt-4">
          <div className="bg-[#BFBFBF] w-full h-0.5"></div>
          <div className="flex gap-3">
            <div className="w-full flex justify-center">
              <button className="w-[131px] cursor-pointer flex justify-center items-center h-9 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-md shadow-blue-100/20 dark:shadow-md dark:shadow-blue-300/80 font-medium rounded-lg text-sm text-center font-vazir">
                اطلاعات بیشتر
              </button>
            </div>
            <div className="w-full flex justify-center">
              <button className="w-[131px] cursor-pointer flex  justify-center text-sm items-center h-9 text-[#1B1B1B] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-350 hover:bg-gradient-to-br shadow-md shadow-gray-100/20 dark:shadow-md dark:shadow-gray-300/80 font-medium rounded-lg text-center font-vazir ">
                ثبت درخواست
              </button>
            </div>
          </div>
          <div className="bg-[#BFBFBF] w-full h-0.5"></div>
        </div>
      </div>
      {/* 4image  */}
      <div className="flex flex-row-reverse justify-center pt-7 sm:pt-5 pr-[40px]">
        <div className="z-40 bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
          <Image
            className="rounded-2xl"
            alt="imageYounes"
            src={younes}
            layout="responsive"
          />
        </div>
        <div className="z-30 relative left-[12px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
          <Image
            className="rounded-2xl"
            src={younes}
            alt="imageYounes"
            layout="responsive"
          />
        </div>
        <div className="z-20 relative left-[24px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
          <Image
            className="rounded-2xl"
            src={younes}
            alt="imageYounes"
            layout="responsive"
          />
        </div>
        <div className="z-10 relative left-[36px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
          <Image
            className="rounded-2xl"
            src={younes}
            alt="imageYounes"
            layout="responsive"
          />
        </div>
      </div>

      {/* end 4image */}
      <div className="flex justify-center items-center gap-2 pt-3">
        <p className="font-inter text-[12px] font-medium font-vazir">
          {" "}
          آماده به کار
        </p>
        <span className=" relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
        </span>
      </div>
    </div>
  );
}

export default Header;
