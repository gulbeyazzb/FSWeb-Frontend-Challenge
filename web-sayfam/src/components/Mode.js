import { useState } from "react";

export default function Mode() {
  const [toggle, setToggle] = useState(false);
  const [dark, setDark] = useState(true);
  const toggleClass = " transform  translate-x-5";

  const changeDarkMode = () => {
    setToggle(!toggle);
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };
  const changeLanguageMode = () => {};

  return (
    <div>
      <button
        className="float-right ps-2 text-[#777777] font-bold text-base"
        onClick={changeLanguageMode}
      >
        <button className="dark:text-[#BAB2E7] text-[#4731D3]">Türkçe</button>
        'ye Geç
      </button>
      <span className="float-right text-[#777777]">|</span>
      <div className=" flex items-center gap-3 float-right pe-3 text-[#777777] dark:text-[#D9D9D9] font-bold text-base">
        <div className="flex flex-col justify-center items-center ">
          <div
            className="md:w-14 md:h-7 w-12 h-6 flex items-center dark:bg-[#3A3A3A] bg-[#4731D3] rounded-full p-1 cursor-pointer duration-700 ease-in-out "
            onClick={changeDarkMode}
          >
            {!dark && (
              <i
                class={
                  "bx bxs-moon text-[#FFE86E]  md:w-6 md:h-6 text-2xl pb-8 shadow-md transform  duration-700 ease-in-out " +
                  (toggle ? null : toggleClass)
                }
              ></i>
            )}
            {dark && (
              <i
                class={
                  " bx bxs-sun text-[#FFE86E]  md:w-6 md:h-6 text-2xl pb-8  transform  duration-700 ease-in-out " +
                  (toggle ? null : toggleClass)
                }
              ></i>
            )}
          </div>
        </div>
        {dark ? "DarkMode'a Geç" : "LightMode'a Geç"}
      </div>
    </div>
  );
}
