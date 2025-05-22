import Image from "next/image";
import React from "react";
import dotWork from "../../public/images/dotsWork.svg";
import imageWork from "../../public/images/imageWork2.svg";
import younes from "../../public/images/younesImage.png";
function Work() {
  return (
    <div className="flex flex-col justify-center pt-[100px]" id="nemoone">
      <div className="w-full max-w-[1400px] flex items-center justify-between gap-2 pt-8 sm:pt-4">
        <div className="bg-[#EAEAEA] w-full h-0.5"></div>
        <div className="flex gap-3">
          <div className="w-full flex justify-center">
            <button className="w-[131px] flex justify-center rounded-[12px] items-center h-9 bg-[#EBEBEB] font-semibold  text-sm text-center">
              <Image className="w-[17px] mx-2" src={dotWork} alt="" />
              نمونه کارها
              <Image className="w-[17px] mx-2" src={dotWork} alt="" />
            </button>
          </div>
        </div>
        <div className="bg-[#EAEAEA] w-full h-0.5"></div>
      </div>
      <div className="pt-6 flex flex-col items-center justify-center">
        <h3 className="font-inter font-medium text-2xl text-black font-vazir">
          برخی از نمونه کارهای ما
        </h3>
        <p className="font-inter font-light text-[14px] text-[#727272] text-center pt-3 font-vazir">
          جایی که حتی یک پیکسل‌هم با دقت <br /> جایگذاری شده است
        </p>
        {/* image section */}
        <div className="pt-11">
          <div className="pt-11">
            <Image className="object-cover" src={imageWork} alt="image work" />
            {/* under image text */}
            <div className="flex justify-between sm:justify-between items-center w-full h-[57px]">
              <div className="pt-5 flex flex-col justify-end items-end">
                <div>
                  <h3 className="font-inter flex justify-end font-bold text-[10px]  text-[#C3C3C3] font-vazir">
                    اعضا
                  </h3>
                </div>
                {/* 4image  */}
                <div className="flex justify-end items-end pt-1 sm:pt-1">
                  <div className="z-30 bg-amber-800 relative right-[-45px] w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      alt="imageYounes"
                      src={younes}
                      layout="responsive"
                    />
                  </div>
                  <div className="z-20 relative right-[-30px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-10 relative right-[-15px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-0 relative left-[0px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <h3 className="font-inter flex justify-end font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir">
                  تکنولوژی ها
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4">
                  Figma - next js
                </p>
              </div>
              <div>
                <h3 className="font-inter font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir">
                  نام پروژه
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 font-vazir">
                  کافینو
                </p>
              </div>
            </div>
            {/* end under image */}
          </div>
          {/* image 2 */}
          <div className="pt-11">
            <Image className="object-cover" src={imageWork} alt="image work" />
            {/* under image text */}
            <div className="flex justify-between sm:justify-between items-center w-full h-[57px]">
              <div className="pt-5 flex flex-col justify-end items-end">
                <div>
                  <h3 className="font-inter flex justify-end font-bold text-[10px]  text-[#C3C3C3] font-vazir">
                    اعضا
                  </h3>
                </div>
                {/* 4image  */}
                <div className="flex justify-end items-end pt-1 sm:pt-1">
                  <div className="z-30 bg-amber-800 relative right-[-45px] w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      alt="imageYounes"
                      src={younes}
                      layout="responsive"
                    />
                  </div>
                  <div className="z-20 relative right-[-30px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-10 relative right-[-15px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-0 relative left-[0px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <h3 className="font-inter flex justify-end font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir">
                  تکنولوژی ها
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4">
                  Figma - next js
                </p>
              </div>
              <div>
                <h3 className="font-inter font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir">
                  نام پروژه
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 font-vazir">
                  کافینو
                </p>
              </div>
            </div>
            {/* end under image */}
          </div>
        </div>
      </div>
      <div className="pt-14">
        <div className="w-full max-w-[1400px] flex items-center justify-between gap-2 sm:pt-4">
          <div className="bg-[#EAEAEA] w-full h-0.5"></div>
          <div className="flex gap-3">
            <div className="w-full flex justify-center">
              <button className="w-[138px] cursor-pointer flex justify-center text-sm items-center h-9 text-black bg-[white] font-medium rounded-lg text-center font-vazir border-2 border-[#EAEAEA]">
                نمونه کارهای بیشتر
              </button>
            </div>
          </div>
          <div className="bg-[#EAEAEA] w-full h-0.5"></div>
        </div>
      </div>
    </div>
  );
}

export default Work;
