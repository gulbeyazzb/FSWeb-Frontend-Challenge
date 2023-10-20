import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Footer() {
  const FooterData = useSelector((store) => store.footerData);
  return (
    <div>
      <div className="relative z-50 dark:bg-[#141414] md:p-[5.5rem] p-8 bg-[#F9F9F9] flex flex-col gap-6">
        <Link
          to="/contact"
          className="hover-footer-text dark:text-[#AEBCCF] md:font-semibold  font-medium text-[#1F2937] md:text-5xl text-3xl pb-6 mb-6 md:w-[500px] text-center md:text-left"
        >
          {FooterData.footerHeader}
        </Link>
        <div className="flex md:flex-row flex-col justify-between items-center gap-4 md:gap-0">
          <a
            href="mailto:glbzbayram@gmail.com"
            target="_blank"
            className="dark:text-[#BAB2E7] text-[#AF0C48] font-medium text-xl hover-footer-text"
          >
            👉 glbzbayram@gmail.com
          </a>
          <div className="flex mt-6 md:mt-0 justify-between gap-6">
            <a
              href="https://github.com/gulbeyazzb"
              className="text-[#17D18B] font-medium text-2xl hover-footer-text"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/g%C3%BClbeyaz-bayram-%C3%B6zer-4a6454159/"
              className="text-[#0BA6F6] font-medium text-2xl hover-footer-text"
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
