import React from "react";
import dotWork from "../../public/images/dotsWork.svg";
import AboutUsImg from "../../public/images/abouUsImg.png";
import parsaImage from "../../public/images/parsa.png";
import Image from "next/image";
function AboutUs() {
  return (
    <div id="aboutUs" className="w-full h-[597px] sm:h-[80vh] pt-[80px]">
      <div className="w-full max-w-[1400px] flex items-center justify-between gap-2 pt-8 sm:pt-4">
        <div className="bg-[#EAEAEA] w-full h-0.5"></div>
        <div className="flex gap-3">
          <div className="w-full flex justify-center">
            <button className="w-[131px] flex justify-center rounded-[12px] items-center h-9 bg-[#EBEBEB] font-semibold  text-sm text-center  ">
              <Image className="w-[17px] mx-2" src={dotWork} alt="" />
              درباره ما
              <Image className="w-[17px] mx-2" src={dotWork} alt="" />
            </button>
          </div>
        </div>
        <div className="bg-[#EAEAEA] w-full h-0.5"></div>
      </div>
      {/* end first row */}
      <div className="flex flex-col items-center pt-10">
        <figure className="w-[151px] h-[122px]">
          <Image
            className="h-full w-full rounded-[160px]"
            src={AboutUsImg}
            alt=""
          />
        </figure>
        <p
          className="w-[96%] sm:w-[70%] text-center text-[24px] font-medium pt-6 font-sans"
          dir="rtl"
        >
          ✨تیم جوان و با انگیزه آژانس زمین آمده است تا باکیفیت بالا پروژه‌های
          شما را انجام دهد✔
        </p>
        {/* images */}
        <div className="w-full pt-6 flex justify-between flex-wrap gap-2">
          {/* 1 */}
          <div
            className="w-full sm:w-[32%] h-[60px] bg-[#FFFFFF] rounded-[40px] p-2 gap-3 flex"
            dir="rtl"
          >
            <figure className="w-10 h-10">
              <Image
                className="w-full h-full rounded-[56px]"
                src={parsaImage}
                alt=""
              />
            </figure>
            <div>
              <span className="text-[17px] font-normal">پارسا </span>
              <h5 className="text-[10px] text-[#625B71] font-bold">
                front-end Dev
              </h5>
            </div>
          </div>
          {/* 2 */}
          <div
            className="w-full sm:w-[32%] h-[60px] bg-[#FFFFFF] rounded-[40px] p-2 gap-3 flex"
            dir="rtl"
          >
            <figure className="w-10 h-10">
              <Image
                className="w-full h-full rounded-[56px]"
                src={parsaImage}
                alt=""
              />
            </figure>
            <div>
              <span className="text-[17px] font-normal">پارسا </span>
              <h5 className="text-[10px] text-[#625B71] font-bold">
                front-end Dev
              </h5>
            </div>
          </div>
          {/* 3 */}
          <div
            className="w-full sm:w-[32%] h-[60px] bg-[#FFFFFF] rounded-[40px] p-2 gap-3 flex"
            dir="rtl"
          >
            <figure className="w-10 h-10">
              <Image
                className="w-full h-full rounded-[56px]"
                src={parsaImage}
                alt=""
              />
            </figure>
            <div>
              <span className="text-[17px] font-normal">پارسا </span>
              <h5 className="text-[10px] text-[#625B71] font-bold">
                front-end Dev
              </h5>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center p-2 ">
          {/* 4 */}
          <div
            className="w-full sm:w-[32%] h-[60px] bg-[#FFFFFF] rounded-[40px] p-2 gap-3 flex"
            dir="rtl"
          >
            <figure className="w-10 h-10">
              <Image
                className="w-full h-full rounded-[56px]"
                src={parsaImage}
                alt=""
              />
            </figure>
            <div>
              <span className="text-[17px] font-normal">پارسا </span>
              <h5 className="text-[10px] text-[#625B71] font-bold">
                front-end Dev
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
