import React from "react";
import { useSelector } from "react-redux";

export default function Footer() {
  const FooterData = useSelector((store) => store.footerData);
  return (
    <div>
      <div className="dark:bg-[#141414]  m-auto md:p-[5.5rem] p-8 bg-[#F9F9F9] ">
        <h1 className="dark:text-[#AEBCCF] md:font-semibold  font-medium text-[#1F2937] md:text-[42px] text-3xl pb-6 mb-6 md:w-[500px] text-center md:text-left">
          {FooterData.footerHeader}
        </h1>
        <div className="flex md:flex-row flex-col justify-between items-center gap-4 md:gap-0">
          <a
            href="mailto:glbzbayram@gmail.com"
            target="_blank"
            className="dark:text-[#BAB2E7] text-[#AF0C48] font-medium text-xl"
          >
            👉 glbzbayram@gmail.com
          </a>
          <div className="flex mt-6 md:mt-0 justify-between gap-6">
            <a
              href="http://localhost:3000/"
              className="dark:text-[#E1E1FF] text-[#0A0A14] font-medium text-lg"
            >
              Personal Blog
            </a>
            <a
              href="https://github.com/gulbeyazzb"
              className="text-[#17D18B] font-medium text-lg"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/g%C3%BClbeyaz-bayram-%C3%B6zer-4a6454159/"
              className="text-[#0BA6F6] font-medium text-lg"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
