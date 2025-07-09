"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import dotWork from "../../public/images/dotsWork.svg";
import Image from "next/image";

const faqItems = [
  {
    question: " چه نوع خدماتی ارائه می‌دهید؟",
    answer:
      "ما در آژانس Zamin خدمات طراحی و توسعه‌ی وب‌سایت ارائه می‌دهیم؛ شامل طراحی رابط کاربری (UI)، تجربه کاربری (UX)، توسعه فرانت‌اند (React, Next.js و...)، بک‌اند (Node.js, PHP و...) و همچنین توسعه اپلیکیشن اندروید. تمرکز ما روی ارائه راه‌حل‌های با کیفیت و منعطف برای استارتاپ‌ها و کسب‌وکارهای کوچک است.",
  },
  {
    question: "پروژه‌ها به چه صورت اجرا می‌شوند؟",
    answer:
      "ما به‌صورت پروژه‌محور فعالیت می‌کنیم. ابتدا یک جلسه اولیه برای بررسی نیازها و اهداف شما برگزار می‌شود. در صورت توافق، یک قرارداد رسمی همکاری تنظیم و امضا می‌شود. پس از آن با دریافت مبلغی اولیه (پیش‌پرداخت)، پروژه آغاز شده و پرداخت‌ها بر اساس مراحل پیشرفت پروژه انجام می‌شود.",
  },
  {
    question: "هزینه طراحی و توسعه چطور محاسبه می‌شود؟",
    answer:
      "هزینه هر پروژه به صورت سفارشی و متناسب با زمان مورد نیاز و حجم کار محاسبه می‌شود. ما تلاش می‌کنیم تعرفه‌ای منصفانه، شفاف و مرحله‌ای ارائه کنیم. پس از جلسه اولیه و شناخت نیازها، یک پیش‌فاکتور رسمی ارسال خواهد شد.",
  },
  {
    question: "آیا خدمات شما شامل پشتیبانی هم می‌شود؟",
    answer:
      "بله. ما پس از تحویل پروژه، تا مدتی مشخص پشتیبانی رایگان برای رفع ایرادات احتمالی ارائه می‌دهیم. همچنین در صورت نیاز به به‌روزرسانی یا توسعه‌های آتی، امکان تنظیم قرارداد پشتیبانی ماهانه یا ساعتی نیز وجود دارد.",
  },
  {
    question: "آیا می‌توانم ابتدا مشاوره اینکه هزینه‌ای پرداخت کنم؟",
    answer:
      "بله، جلسه اولیه‌ی مشاوره ما برای بررسی نیازهای شما و پیشنهاد راهکار مناسب رایگان است. در این جلسه درباره مسیر فنی، زمان‌بندی، هزینه و مراحل اجرا صحبت خواهیم کرد.",
  },
  {
    question: "چطور می‌توانم پروژه‌ای را ثبت کنم؟",
    answer:
      "کافی است از طریق فرم تماس یا راه‌های ارتباطی مثل ایمیل، واتساپ یا تماس مستقیم، با ما در ارتباط باشید. ما در اولین فرصت با شما تماس می‌گیریم و جلسه اولیه را هماهنگ خواهیم کرد.",
  },
];

function Question() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-[80px]">
      <div className="w-full max-w-[1400px] flex items-center justify-between gap-2 pt-8 sm:pt-4">
        <div className="bg-[#EAEAEA] w-full h-0.5"></div>
        <div className="flex gap-3">
          <div className="w-full flex justify-center">
            <button className="w-[190px] flex justify-center rounded-[12px] items-center h-9 bg-[#EBEBEB] font-semibold  text-sm text-center">
              <Image className="w-[17px] mx-2" src={dotWork} alt="" />
              سوالات متداول
              <Image className="w-[17px] mx-2" src={dotWork} alt="" />
            </button>
          </div>
        </div>
        <div className="bg-[#EAEAEA] w-full h-0.5"></div>
      </div>
      <h2 className="text-2xl font-bold text-center mb-6 mt-9">
        سوالاتی که دیگران پرسیده‌اند
      </h2>
      <div className="max-w-2xl mx-auto  mt-9">
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white  rounded-2xl overflow-hidden  text-justify"
              dir="rtl"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <p className="text-base font-medium text-right">
                  {item.question}
                </p>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-5 pb-5 text-gray-600 text-sm text-right"
                  dir="rtl"
                >
                  {item.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Question;
