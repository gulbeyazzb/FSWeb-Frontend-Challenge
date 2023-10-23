import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { enAction, trAction } from "../actions/languageAction";

export default function Mode() {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "Light" ? "Dark" : "Light" //MODE'A GEÇ YAZISI İÇİN TERS İŞLEM
  );
  const [switchIcon, setSwitchIcon] = useState(
    localStorage.getItem("switchIcon")
  );

  const dispatch = useDispatch();
  const [lang, setLang] = useState("English");

  const toggleButtonClass =
    "scroll-smooth  transform translate-x-5 md:translate-x-6";

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
  }, [theme]);

  const changeTheme = () => {
    setToggle(!toggle);
    setTheme(theme === "Light" ? "Dark" : "Light");
    setSwitchIcon(switchIcon === "sun" ? "moon" : "sun");
    if (theme === "Dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "Dark");
      localStorage.setItem("switchIcon", "sun");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "Light");
      localStorage.setItem("switchIcon", "moon");
    }
  };

  const changeLanguageMode = () => {
    setLang(lang === "English" ? "Türkçe" : "English");
    if (lang === "Türkçe") {
      dispatch(trAction());
      localStorage.setItem("lang", "Türkçe");
    } else {
      dispatch(enAction());
      localStorage.setItem("lang", "English");
    }
  };

  return (
    <div className="relative z-50 flex flex-row-reverse justify-between md:block pt-4">
      <div className="float-right ps-2 text-[#777777] font-bold text-lg">
        <button
          onClick={changeLanguageMode}
          className="dark:text-[#BAB2E7] text-[#4731D3]"
        >
          {lang}
        </button>
      </div>
      <span className="md:float-right hidden md:inline-block text-[#777777] ">
        |
      </span>
      <div className="hover-text hover-dark-text flex float-left items-center md:gap-3 md:float-right pe-3 text-[#777777] dark:text-[#D9D9D9] font-bold text-base">
        <div className="flex flex-col items-center ">
          <button
            className="w-14 h-7  flex  items-center gap-7 text-lg dark:bg-[#3A3A3A] bg-[#4731D3] rounded-full sm:p-1 cursor-pointer duration-700 ease-in-out   "
            onClick={changeTheme}
          >
            {theme === "Dark" && (
              <i
                class={
                  `bx bxs-${switchIcon} text-[#FFE86E]  md:w-6 md:h-6 text-2xl  md:pb-8 transform  duration-700 ease-in-out py-[0.03] px-1 rounded-full bg-[#4c4867] md:border-none md:p-0 md:bg-transparent  md:rounded-none  ` +
                  (toggle ? null : toggleButtonClass)
                }
              ></i>
            )}
            {theme === "Light" && (
              <i
                class={
                  `bx bxs-${switchIcon} text-[#FFE86E] text-2xl  md:w-6 md:h-6 transform md:pb-8  duration-700 ease-in-out p-[0.03rem] px-1 rounded-full bg-[#4731D3] border  md:border-none md:p-0 md:bg-transparent md:rounded-none ` +
                  (toggle ? null : toggleButtonClass)
                }
              ></i>
            )}
          </button>
        </div>
        <button onClick={changeTheme}> {theme}Mode</button>
      </div>
    </div>
  );
}
