import React from "react";
import dotWork from "../../public/images/dotsWork.svg";
import Image from "next/image";

function form() {
  return (
    <div className="w-ful mt-10">
      <div className="w-full max-w-[1400px] flex items-center justify-between gap-2 pt-8 sm:pt-4">
        <div className="bg-[#EAEAEA] w-full h-0.5"></div>
        <div className="flex gap-3">
          <div className="w-full flex justify-center">
            <button className="w-[190px] flex justify-center rounded-[12px] items-center h-9 bg-[#EBEBEB] font-semibold  text-sm text-center">
              <Image className="w-[17px] mx-2" src={dotWork} alt="" />
              ثبت درخواست ها
              <Image className="w-[17px] mx-2" src={dotWork} alt="" />
            </button>
          </div>
        </div>
        <div className="bg-[#EAEAEA] w-full h-0.5"></div>
      </div>
      <div
        className="w-full h-[334px] bg-white mt-11 rounded-3xl p-5 gap-6 pb-[80px]"
        dir="rtl"
      >
        <form action="req.php" className="w-full">
          <label
            htmlFor="information"
            className="font-medium text-[14px] text-black"
          >
            اطلاعات
          </label>
          <div className="w-full flex justify-between mt-4">
            <input
              className="w-[48%] bg-[#F6F6F6] p-3 rounded-xl h-[42px] border-none"
              type="text"
              id="information"
              placeholder="نام و نام خانوادگی"
              name="email"
            />
            <input
              className="w-[48%] bg-[#F6F6F6] p-3 rounded-xl h-[42px] border-none"
              type="text"
              id="information"
              placeholder="ایمیل سازمانی"
              name="name"
            />
          </div>
          <textarea
            className="w-full h-28 bg-[#F6F6F6] mt-4 placeholder:p-4"
            name="aboutProject"
            id="information"
            placeholder="توضیحاتی درباره پروژه"
          ></textarea>

          <input
            type="submit"
            value="ثبت درخواست"
            className="w-full mt-6 cursor-pointer flex justify-center items-center h-9 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-md shadow-blue-100/20 dark:shadow-md dark:shadow-blue-300/80 font-medium rounded-lg text-sm text-center font-vazir"
          />
        </form>
      </div>
    </div>
  );
}

export default form;
