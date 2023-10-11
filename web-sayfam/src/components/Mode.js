import { useState } from "react";
import ellipse from "../Assets/Ellipse 1.png";
import rectangle from "../Assets/Rectangle 1.png";

export default function Mode() {
  const [dark, setDark] = useState(true);
  const changeDarkMode = () => {
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
      <button
        className="relative flex items-center float-right pe-3 text-[#777777] dark:text-[#D9D9D9] font-bold text-base"
        onClick={changeDarkMode}
      >
        <img className="relative me-1 h-[20px]" src={rectangle}></img>{" "}
        <img className="absolute left-7 h-[15px]" src={ellipse}></img>{" "}
        {dark ? "DarkMode" : "LightMode"}
      </button>
    </div>
  );
}
