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
        className="w-full h-[600px] bg-white mt-11 rounded-3xl p-5 gap-6"
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
              placeholder="ایمیل سازمانی"
              name="email"
            />
            <input
              className="w-[48%] bg-[#F6F6F6] p-3 rounded-xl h-[42px] border-none"
              type="text"
              id="information"
              placeholder="نام و نام خانوادگی"
              name="name"
            />
          </div>
          <textarea
            className="w-full h-28 bg-[#F6F6F6] mt-4 placeholder:p-4"
            name="aboutProject"
            id="information"
            placeholder="توضیحاتی درباره پروژه"
          ></textarea>
          <div className="mt-6">
            <h5 className="font-medium text-[14px] text-black">
              به چه کمک‌هایی نیاز دارید؟
            </h5>
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="tahghigh"
                  id="tahghigh"
                  className="w-5 h-5"
                />
                <label
                  htmlFor="tahghigh"
                  className="text-[#999999] font-medium text-[14px] pr-4 "
                >
                  تحقیق
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="design"
                  id="design"
                  className="w-5 h-5"
                />
                <label
                  htmlFor="design"
                  className="text-[#999999] font-medium text-[14px] pr-4 "
                >
                  طراحی
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="develop"
                  id="develop"
                  className="w-5 h-5"
                />
                <label
                  htmlFor="develop"
                  className="text-[#999999] font-medium text-[14px] pr-4 "
                >
                  توسعه
                </label>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="Budget">بودجه</label>
            <div className="mt-4">
              <input
                type="text"
                name="Budget"
                id="Budget"
                placeholder="از"
                className="w-full bg-[#F6F6F6] h-11 rounded-xl p-3 gap-4"
              />
            </div>
            <div className="mt-2">
              <input
                type="text"
                name="Budget"
                id="Budget"
                placeholder="تا"
                className="w-full bg-[#F6F6F6] h-11 rounded-xl p-3 gap-4"
              />
            </div>
          </div>
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
