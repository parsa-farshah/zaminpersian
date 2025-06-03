import Image from "next/image";
import React from "react";
import dotWork from "../../public/images/dotsWork.svg";
import younes from "../../public/images/younesImage.png";
import cafino from "../../public/images/cafino.png";
import vender from "../../public/images/vender.png";
import cafino2 from "../../public/images/cafino2.png";
import cafino3 from "../../public/images/cafino3.png";
import cafino4 from "../../public/images/cafino4.png";
import bg from "../../public/images/bg-portfolio2.png";

function PortfolioRecent() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <Image
          className="object-cover absolute top-0 left-0 w-full h-[448px] "
          src={bg}
          alt="haeder Image Xl"
        />
      </div>
      <main className="mt-[250px] relative z-10">
        <div className="w-full flex items-center justify-between gap-2 pt-8 sm:pt-4 z-60">
          <div className="bg-[#EAEAEA] w-full h-0.5"></div>
          <div className="flex gap-3">
            <div className="w-full flex justify-center">
              <button className="w-[131px] flex justify-center rounded-[12px] items-center h-9 bg-[#EBEBEB] font-semibold  text-sm text-center  ">
                <Image className="w-[17px] mx-2" src={dotWork} alt="" />
                نمونه کارها
                <Image className="w-[17px] mx-2" src={dotWork} alt="" />
              </button>
            </div>
          </div>
          <div className="bg-[#EAEAEA] w-full h-0.5"></div>
        </div>
        <div className="flex flex-col items-center justify-center mt-6">
          <h5 className="font-medium text-black text-center text-[17px] ">
            نمونه کارهای اخیر
          </h5>
          <p className="text-center text-[#727272] text-[14px] pt-2 font-light">
            جایی که حتی یک پیکسل‌هم با دقت <br />
            جایگذاری شده است
          </p>
        </div>
        {/* image section */}
        <div className="pt-11">
          <div className="bg-white rounded-2xl h-[497px]">
            <Image
              className="object-cover w-[97%] mx-auto pt-2 h-[400px]"
              src={cafino}
              alt="image work"
            />
            {/* under image text */}
            <div className="flex justify-between sm:justify-between items-center w-full h-[57px] relative p-3 mt-3">
              <div className="pt-5 flex flex-col justify-end items-end">
                <div>
                  <h3 className="font-inter flex justify-end font-bold text-[10px]  text-[#C3C3C3] font-vazir absolute left-[2%] top-2 ">
                    اعضا
                  </h3>
                </div>
                {/* 4image  */}
                <div className="flex justify-end items-end pt-1 sm:pt-1 absolute left-0 top-7 ">
                  <div className="z-1 bg-amber-800 relative left-[5px] w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      alt="imageYounes"
                      src={younes}
                      layout="responsive"
                    />
                  </div>
                  <div className="z-2 relative right-[20px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-3 relative right-[40px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-4 relative right-[60px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="hidden sm:block relative left-[40px]">
                <h3 className="font-inter flex justify-end font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir relative right-7">
                  تکنولوژی ها
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 relative left-4">
                  Figma - next js - python
                </p>
              </div>
              <div>
                <h3 className="font-inter font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir absolute bottom-8 right-[2%]">
                  نام پروژه
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 font-vazir relative top-4">
                  وبسایت کافه‌یاب کافینو
                </p>
              </div>
            </div>
            {/* end under image */}
          </div>
          {/* image 2 */}
          <div className="bg-white rounded-2xl h-[497px] mt-6">
            <Image
              className="object-cover w-[97%] mx-auto pt-2 h-[400px]"
              src={vender}
              alt="image work"
            />
            {/* under image text */}
            <div className="flex justify-between sm:justify-between items-center w-full h-[57px] relative p-3 mt-3">
              <div className="pt-5 flex flex-col justify-end items-end">
                <div>
                  <h3 className="font-inter flex justify-end font-bold text-[10px]  text-[#C3C3C3] font-vazir absolute left-[2%] top-2 ">
                    اعضا
                  </h3>
                </div>
                {/* 4image  */}
                <div className="flex justify-end items-end pt-1 sm:pt-1 absolute left-0 top-7 ">
                  <div className="z-1 bg-amber-800 relative left-[5px] w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      alt="imageYounes"
                      src={younes}
                      layout="responsive"
                    />
                  </div>
                  <div className="z-2 relative right-[20px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-3 relative right-[40px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-4 relative right-[60px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="hidden sm:block relative left-[40px]">
                <h3 className="font-inter flex justify-end font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir relative right-7">
                  تکنولوژی ها
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 relative left-4">
                  Figma - next js - python
                </p>
              </div>
              <div>
                <h3 className="font-inter font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir absolute bottom-8 right-[2%]">
                  نام پروژه
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 font-vazir relative top-4">
                  وبسایت کافه‌یاب کافینو
                </p>
              </div>
            </div>
            {/* end under image */}
          </div>
          {/* image 3 */}
          <div className="bg-white rounded-2xl h-[497px] mt-6">
            <Image
              className="object-cover w-[97%] mx-auto pt-2 h-[400px]"
              src={cafino2}
              alt="image work"
            />
            {/* under image text */}
            <div className="flex justify-between sm:justify-between items-center w-full h-[57px] relative p-3 mt-3">
              <div className="pt-5 flex flex-col justify-end items-end">
                <div>
                  <h3 className="font-inter flex justify-end font-bold text-[10px]  text-[#C3C3C3] font-vazir absolute left-[2%] top-2 ">
                    اعضا
                  </h3>
                </div>
                {/* 4image  */}
                <div className="flex justify-end items-end pt-1 sm:pt-1 absolute left-0 top-7 ">
                  <div className="z-1 bg-amber-800 relative left-[5px] w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      alt="imageYounes"
                      src={younes}
                      layout="responsive"
                    />
                  </div>
                  <div className="z-2 relative right-[20px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-3 relative right-[40px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-4 relative right-[60px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="hidden sm:block relative left-[40px]">
                <h3 className="font-inter flex justify-end font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir relative right-7">
                  تکنولوژی ها
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 relative left-4">
                  Figma - next js - python
                </p>
              </div>
              <div>
                <h3 className="font-inter font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir absolute bottom-8 right-[2%]">
                  نام پروژه
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 font-vazir relative top-4">
                  وبسایت کافه‌یاب کافینو
                </p>
              </div>
            </div>
            {/* end under image */}
          </div>
          {/* image3 end */}
          {/* image 4 */}
          <div className="bg-white rounded-2xl h-[497px] mt-6">
            <Image
              className="object-cover w-[97%] mx-auto pt-2 h-[400px]"
              src={cafino3}
              alt="image work"
            />
            {/* under image text */}
            <div className="flex justify-between sm:justify-between items-center w-full h-[57px] relative p-3 mt-3">
              <div className="pt-5 flex flex-col justify-end items-end">
                <div>
                  <h3 className="font-inter flex justify-end font-bold text-[10px]  text-[#C3C3C3] font-vazir absolute left-[2%] top-2 ">
                    اعضا
                  </h3>
                </div>
                {/* 4image  */}
                <div className="flex justify-end items-end pt-1 sm:pt-1 absolute left-0 top-7 ">
                  <div className="z-1 bg-amber-800 relative left-[5px] w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      alt="imageYounes"
                      src={younes}
                      layout="responsive"
                    />
                  </div>
                  <div className="z-2 relative right-[20px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-3 relative right-[40px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-4 relative right-[60px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="hidden sm:block relative left-[40px]">
                <h3 className="font-inter flex justify-end font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir relative right-7">
                  تکنولوژی ها
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 relative left-4">
                  Figma - next js - python
                </p>
              </div>
              <div>
                <h3 className="font-inter font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir absolute bottom-8 right-[2%]">
                  نام پروژه
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 font-vazir relative top-4">
                  وبسایت کافه‌یاب کافینو
                </p>
              </div>
            </div>
            {/* end under image */}
          </div>
          {/* image4 end */}
          {/* image 5 */}
          <div className="bg-white rounded-2xl h-[497px] mt-6">
            <Image
              className="object-cover w-[97%] mx-auto pt-2 h-[400px]"
              src={cafino4}
              alt="image work"
            />
            {/* under image text */}
            <div className="flex justify-between sm:justify-between items-center w-full h-[57px] relative p-3 mt-3">
              <div className="pt-5 flex flex-col justify-end items-end">
                <div>
                  <h3 className="font-inter flex justify-end font-bold text-[10px]  text-[#C3C3C3] font-vazir absolute left-[2%] top-2 ">
                    اعضا
                  </h3>
                </div>
                {/* 4image  */}
                <div className="flex justify-end items-end pt-1 sm:pt-1 absolute left-0 top-7 ">
                  <div className="z-1 bg-amber-800 relative left-[5px] w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      alt="imageYounes"
                      src={younes}
                      layout="responsive"
                    />
                  </div>
                  <div className="z-2 relative right-[20px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-3 relative right-[40px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-4 relative right-[60px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="hidden sm:block relative left-[40px]">
                <h3 className="font-inter flex justify-end font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir relative right-7">
                  تکنولوژی ها
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 relative left-4">
                  Figma - next js - python
                </p>
              </div>
              <div>
                <h3 className="font-inter font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir absolute bottom-8 right-[2%]">
                  نام پروژه
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 font-vazir relative top-4">
                  وبسایت کافه‌یاب کافینو
                </p>
              </div>
            </div>
            {/* end under image */}
          </div>
          {/* image5 end */}
        </div>
      </main>
    </div>
  );
}

export default PortfolioRecent;
