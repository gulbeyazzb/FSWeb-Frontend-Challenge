import { useState } from "react";

export default function Navbar() {
  return (
    <div className="flex md:justify-between justify-around w-96 items-center">
      <a href="" className="text-[#6B7280] font-medium text-lg">
        Skills
      </a>
      <button className="text-center md:hidden text-[#3730A3] bg-white border-solid border border-[#3730A3] dark:border-none rounded-md font-medium text-lg  w-[120px] h-10">
        Hire Me
      </button>
      <a href="" className="text-[#6B7280] font-medium text-lg">
        Projects
      </a>
      <button className="text-center hidden md:inline-block text-[#3730A3] bg-white border-solid border-2 border-[#3730A3] dark:border-none rounded-md font-medium text-lg  w-[131px] h-12">
        Hire Me
      </button>
    </div>
  );
}
