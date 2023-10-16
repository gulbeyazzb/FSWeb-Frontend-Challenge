import "./App.css";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import { animateScroll as scroll } from "react-scroll";
import Mode from "./components/Mode";
import Header from "./layouts/Header";

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className=" dark:bg-[#252128]">
      <div className=" flex flex-col pt-6 sm:px-20 px-2 md:w-[1100px] md:m-auto">
        <Mode />
        <Header />
      </div>
      <div className=" flex flex-col pt-6 sm:px-20 px-2 h-full md:w-[1100px] md:m-auto ">
        <Main />
      </div>

      <Footer />
      <a
        onClick={scrollToTop}
        className="fixed right-10 bottom-2 rounded-[100%]"
      >
        <i class="bx bx-up-arrow-circle text-[#7673a6] text-4xl hover:text-[#3730A3]"></i>
      </a>
    </div>
  );
}

export default App;
