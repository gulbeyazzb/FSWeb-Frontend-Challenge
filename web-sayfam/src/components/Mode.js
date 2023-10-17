import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { enAction, trAction } from "../actions/languageAction";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Mode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "Light" ? "Dark" : "Light"
  );

  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const [en, setEn] = useState(true);

  const toggleButtonClass = " transform translate-x-5 sm:translate-x-6";

  useEffect(() => {
    if (
      localStorage.theme === "Dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const changeTheme = () => {
    setToggle(!toggle);
    setTheme(theme === "Light" ? "Dark" : "Light");
    if (theme === "Dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "Dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "Light");
    }
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
            onClick={changeTheme}
          >
            {theme === "Dark" && (
              <i
                class={
                  "bx bxs-moon text-[#FFE86E]  md:w-6 md:h-6 text-2xl sm:pb-8  transform  duration-700 ease-in-out " +
                  (toggle ? null : toggleButtonClass)
                }
              ></i>
            )}
            {theme === "Light" && (
              <i
                class={
                  " bx bxs-sun text-[#FFE86E]  md:w-6 md:h-6 text-2xl sm:pb-8  transform  duration-700 ease-in-out " +
                  (toggle ? null : toggleButtonClass)
                }
              ></i>
            )}
          </button>
        </div>
        {theme}Mode'a Geç
      </div>
    </div>
  );
}
