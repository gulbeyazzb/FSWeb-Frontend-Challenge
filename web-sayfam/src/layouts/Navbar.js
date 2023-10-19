import { animateScroll as scroll } from "react-scroll";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const NavBarData = useSelector((store) => store.navBarData);

  const scrollTo = (px) => {
    scroll.scrollTo(px); // Scrolling to 100px from the top of the page.
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="flex md:justify-between justify-around w-96 items-center">
      <a
        onClick={() => scrollTo(650)}
        className="hover-link text-[#6B7280] font-medium text-lg cursor-pointer"
      >
        {NavBarData.skills}
      </a>
      <Link
        to="/contact"
        onClick={scrollToTop}
        className="hover-white-btn cursor-pointer text-center md:hidden text-secondary-blue-600 bg-white border-solid border border-secondary-blue-600 dark:border-none rounded-md font-medium text-lg  w-[120px] h-10"
      >
        {NavBarData.hireMe}
      </Link>
      <a
        onClick={() => scrollTo(1800)}
        className="hover-link text-[#6B7280] font-medium text-lg cursor-pointer"
      >
        {NavBarData.projects}
      </a>
      <Link
        to="/contact"
        onClick={scrollToTop}
        className="hover-white-btn cursor-pointer md:py-3 py-4 px-6 md:px-8 text-center hidden md:inline-block text-[#3730A3] bg-white border-solid border-2 border-[#3730A3] dark:border-none rounded-md font-medium text-lg h-12"
      >
        {NavBarData.hireMe}
      </Link>
    </div>
  );
}
