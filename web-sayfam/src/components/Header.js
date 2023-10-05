import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark bg-black h-screen"}>
      <nav className="flex justify-end">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={darkMode ? "text-white" : "text-dark"}
        >
          darkMode
        </button>
      </nav>
    </div>
  );
};
export default Header;
