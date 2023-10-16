import { animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const scrollTo = (px) => {
    scroll.scrollTo(px); // Scrolling to 100px from the top of the page.
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <div className="flex md:justify-between justify-around w-96 items-center">
      <a
        onClick={() => scrollTo(550)}
        className="text-[#6B7280] font-medium text-lg cursor-pointer"
      >
        Skills
      </a>
      <a
        onClick={scrollToBottom}
        className="cursor-pointer text-center md:hidden text-[#3730A3] bg-white border-solid border border-[#3730A3] dark:border-none rounded-md font-medium text-lg  w-[120px] h-10"
      >
        Hire Me
      </a>
      <a
        onClick={() => scrollTo(1600)}
        className="text-[#6B7280] font-medium text-lg cursor-pointer"
      >
        Projects
      </a>
      <a
        onClick={scrollToBottom}
        className="cursor-pointer md:py-3 py-4 px-6 md:px-8 text-center hidden md:inline-block text-[#3730A3] bg-white border-solid border-2 border-[#3730A3] dark:border-none rounded-md font-medium text-lg h-12"
      >
        Hire Me
      </a>
    </div>
  );
}
