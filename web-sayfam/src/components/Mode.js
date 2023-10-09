import { useState } from "react";

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
        className="float-right ps-2 dark:text-[#777777]"
        onClick={changeLanguageMode}
      >
        <span className="dark:text-[#BAB2E7]">Türkçe</span>'ye Geç
      </button>
      <span className="float-right dark:text-[#777777]">|</span>
      <button
        className="float-right pe-3 dark:text-[#D9D9D9]"
        onClick={changeDarkMode}
      >
        {dark ? "DarkMode" : "LightMode"}
      </button>
    </div>
  );
}
