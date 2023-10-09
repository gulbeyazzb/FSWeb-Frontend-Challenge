import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function Footer() {
  return (
    <div className="dark:bg-[#141414] m-auto p-[5.5rem]  ">
      <h1 className="dark:text-[#AEBCCF] font-semibold  text-[42px] pb-6 mb-6 w-[500px]">
        Let’s work together on your next product.
      </h1>
      <div className="flex justify-between">
        <a
          href="https://mail.google.com/mail/u/0/?hl=tr#inbox?compose=new"
          target="_blank"
          className="dark:text-[#BAB2E7] font-medium text-xl"
        >
          👉 glbzbayram@gmail.com
        </a>
        <div className="flex justify-between gap-6">
          <a
            href="http://localhost:3000/"
            className="dark:text-[#E1E1FF] font-medium text-lg"
          >
            Personal Blog
          </a>
          <a
            href="https://github.com/gulbeyazzb"
            className="dark:text-[#17D18B] font-medium text-lg"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/g%C3%BClbeyaz-bayram-%C3%B6zer-4a6454159/"
            className="dark:text-[#0BA6F6] font-medium text-lg"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
