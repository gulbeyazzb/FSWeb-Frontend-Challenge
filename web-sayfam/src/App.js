import "./App.css";
import Main from "./layouts/Main";
import { animateScroll as scroll } from "react-scroll";
import Mode from "./components/Mode";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    toast("Welcome My Profile");
  }, []);

  return (
    <div className="relative dark:bg-[#252128] bg-white">
      <div className="hidden md:inline">
        <ToastContainer />
      </div>

      <div className=" flex flex-col sm:px-20 px-2 md:w-[1100px] md:m-auto">
        <Mode />
      </div>

      <Main />

      <a
        onClick={scrollToTop}
        className="animate-bounce  fixed md:right-10 right-52 bottom-2 rounded-[100%]"
      >
        <i class="bx bxs-chevron-up text-[#7673a6] text-4xl hover:text-[#3730A3]"></i>
      </a>
    </div>
  );
}

export default App;
