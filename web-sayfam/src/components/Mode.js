import { useState } from "react";
import { useDispatch } from "react-redux";
import { enAction, trAction } from "../actions/languageAction";

export default function Mode() {
  const [toggle, setToggle] = useState(false);
  const [dark, setDark] = useState(true);
  const toggleClass = " transform translate-x-5 sm:translate-x-6";
  const dispatch = useDispatch();
  const [en, setEn] = useState(true);

  const changeDarkMode = () => {
    setToggle(!toggle);
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };
  const changeLanguageMode = () => {
    en ? dispatch(trAction()) : dispatch(enAction());
    setEn(!en);
  };

  return (
    <div className="flex flex-row-reverse justify-between md:block">
      <div className="float-right ps-2 text-[#777777] font-bold text-base">
        <button
          onClick={changeLanguageMode}
          className="dark:text-[#BAB2E7] text-[#4731D3]"
        >
          {en ? "Türkçe" : "English"}
        </button>
      </div>
      <span className="md:float-right hidden md:inline-block text-[#777777] ">
        |
      </span>
      <div className="flex float-left items-center md:gap-3 md:float-right pe-3 text-[#777777] dark:text-[#D9D9D9] font-bold text-base">
        <div className="flex flex-col justify-center items-center ">
          <button
            className="md:w-14 md:h-7 w-12 h-6 flex items-center dark:bg-[#3A3A3A] bg-[#4731D3] rounded-full sm:p-1 cursor-pointer duration-700 ease-in-out "
            onClick={changeDarkMode}
          >
            {!dark && (
              <i
                class={
                  "bx bxs-moon text-[#FFE86E]  md:w-6 md:h-6 text-2xl sm:pb-8  transform  duration-700 ease-in-out " +
                  (toggle ? null : toggleClass)
                }
              ></i>
            )}
            {dark && (
              <i
                class={
                  " bx bxs-sun text-[#FFE86E]  md:w-6 md:h-6 text-2xl sm:pb-8  transform  duration-700 ease-in-out " +
                  (toggle ? null : toggleClass)
                }
              ></i>
            )}
          </button>
        </div>
        {dark ? "DarkMode" : "LightMode"}
      </div>
    </div>
  );
}
