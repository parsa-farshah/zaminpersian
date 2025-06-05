import Image from "next/image";
import React from "react";
import dotWork from "../../public/images/dotsWork.svg";
import cafino from "../../public/images/cafino.png";
import vender from "../../public/images/vender.png";
import cafino2 from "../../public/images/cafino2.png";
import cafino3 from "../../public/images/cafino3.png";
import cafino4 from "../../public/images/cafino4.png";
import younes from "../../public/images/younesImage.png";
import Link from "next/link";
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
            <Image className="object-cover" src={cafino} alt="image work" />
            {/* under image text */}
            <div className="flex justify-between sm:justify-between items-center w-full h-[57px] relative p-3">
              <div className="pt-5 flex flex-col justify-end items-end">
                <div>
                  <h3 className="font-inter flex justify-end font-bold text-[10px]  text-[#C3C3C3] font-vazir absolute left-[2%] top-2 ">
                    اعضا
                  </h3>
                </div>
                {/* 4image  */}
                <div className="flex justify-end items-end pt-1 sm:pt-1 absolute left-0 top-7 ">
                  <div className="z-1 bg-amber-800 relative left-[0px] w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
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
          <div className="pt-11">
            <Image className="object-cover" src={vender} alt="image work" />
            {/* under image text */}
            <div className="flex justify-between sm:justify-between items-center w-full h-[57px] relative p-3">
              <div className="pt-5 flex flex-col justify-end items-end">
                <div>
                  <h3 className="font-inter flex justify-end font-bold text-[10px]  text-[#C3C3C3] font-vazir absolute left-[2%] top-2 ">
                    اعضا
                  </h3>
                </div>
                {/* 4image  */}
                <div className="flex justify-end items-end pt-1 sm:pt-1 absolute left-0 top-7 ">
                  <div className="z-1 bg-amber-800 relative left-[0px] w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
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
                <h3 className="font-inter flex justify-end font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir relative right-5">
                  تکنولوژی ها
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 relative left-5">
                  Figma - next js - django
                </p>
              </div>
              <div>
                <h3 className="font-inter font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir absolute bottom-8 right-[2%]">
                  نام پروژه
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 font-vazir relative top-4">
                  وندور برای مدیریت رستوران
                </p>
              </div>
            </div>
          </div>
          {/* image 3 */}
          <div className="pt-11">
            <Image className="object-cover" src={cafino2} alt="image work" />
            {/* under image text */}
            <div className="flex justify-between sm:justify-between items-center w-full h-[57px] relative p-3">
              <div className="pt-5 flex flex-col justify-end items-end">
                <div>
                  <h3 className="font-inter flex justify-end font-bold text-[10px]  text-[#C3C3C3] font-vazir absolute left-[2%] top-2 ">
                    اعضا
                  </h3>
                </div>
                {/* 4image  */}
                <div className="flex justify-end items-end pt-1 sm:pt-1 absolute left-0 top-7 ">
                  <div className="z-1 bg-amber-800 relative left-[0px] w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
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
                <h3 className="font-inter flex justify-end font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir relative right-12">
                  تکنولوژی ها
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 relative right-7">
                  Figma - next js
                </p>
              </div>
              <div>
                <h3 className="font-inter font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir absolute bottom-8 right-[2%]">
                  نام پروژه
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 font-vazir relative top-4">
                  کافینو
                </p>
              </div>
            </div>
          </div>
          {/* image3 end */}
          {/* image 4 */}
          <div className="pt-11">
            <Image className="object-cover" src={cafino3} alt="image work" />
            {/* under image text */}
            <div className="flex justify-between sm:justify-between items-center w-full h-[57px] relative p-3">
              <div className="pt-5 flex flex-col justify-end items-end">
                <div>
                  <h3 className="font-inter flex justify-end font-bold text-[10px]  text-[#C3C3C3] font-vazir absolute left-[2%] top-2 ">
                    اعضا
                  </h3>
                </div>
                {/* 4image  */}
                <div className="flex justify-end items-end pt-1 sm:pt-1 absolute left-0 top-7 ">
                  <div className="z-1 bg-amber-800 relative left-[0px] w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
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
                <h3 className="font-inter flex justify-end font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir relative right-12">
                  تکنولوژی ها
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 relative right-6">
                  Figma - next js
                </p>
              </div>
              <div>
                <h3 className="font-inter font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir absolute bottom-8 right-[2%]">
                  نام پروژه
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 font-vazir relative top-4">
                  کافینو
                </p>
              </div>
            </div>
          </div>
          {/* image4 end */}
          {/* image 5 */}
          <div className="pt-11">
            <Image className="object-cover" src={cafino4} alt="image work" />
            {/* under image text */}
            <div className="flex justify-between sm:justify-between items-center w-full h-[57px] relative p-3">
              <div className="pt-5 flex flex-col justify-end items-end">
                <div>
                  <h3 className="font-inter flex justify-end font-bold text-[10px]  text-[#C3C3C3] font-vazir absolute left-[2%] top-2 ">
                    اعضا
                  </h3>
                </div>
                {/* 4image  */}
                <div className="flex justify-end items-end pt-1 sm:pt-1 absolute left-0 top-7 ">
                  <div className="z-1 bg-amber-800 relative left-[0px] w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
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
                <h3 className="font-inter flex justify-end font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir relative right-12">
                  تکنولوژی ها
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 relative right-6">
                  Figma - next js
                </p>
              </div>
              <div>
                <h3 className="font-inter font-bold text-[10px] text-[#C3C3C3] pt-4 font-vazir absolute bottom-8 right-[2%]">
                  نام پروژه
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4 font-vazir relative top-4">
                  کافینو
                </p>
              </div>
            </div>
          </div>
          {/* image5 end */}
        </div>
      </div>
      <div className="pt-14">
        <div className="w-full max-w-[1400px] flex items-center justify-between gap-2 sm:pt-4">
          <div className="bg-[#EAEAEA] w-full h-0.5"></div>
          <div className="flex gap-3">
            <div className="w-full flex justify-center">
              <Link href="/portfolio">
                <button className="w-[138px] cursor-pointer flex justify-center text-sm items-center h-9 text-black bg-[white] font-medium rounded-lg text-center font-vazir border-2 border-[#EAEAEA]">
                  نمونه کارهای بیشتر
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-[#EAEAEA] w-full h-0.5"></div>
        </div>
      </div>
    </div>
  );
}

export default Work;
