import line from "../Assets/Line 11.png";
import mePhoto from "../Assets/9C6BB119-4D9F-45F0-B1FD-9E332E9EF7BA-35928-0000062DD430959D (1).jpg";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { useSelector } from "react-redux";

export default function Hero() {
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  const HeroData = useSelector((store) => store.heroData);

  return (
    <div>
      <div className="md:flex md:items-center gap-20">
        <div>
          <div className="flex justify-center md:justify-start md:items-center md:gap-2 pb-6">
            <img src={line} className="hidden md:inline-block"></img>
            <p className="text-navy-blue-600 dark:text-navy-blue-100 font-medium text-xl ">
              {HeroData.name}
              <p className="text-center">{HeroData.role}</p>
            </p>
          </div>
          <img
            className="md:w-[300px] w-52 md:float-right m-auto rounded-md"
            src={mePhoto}
          ></img>
          <h2 className="dark:text-[#AEBCCF] text-[#1F2937] md:font-bold md:text-7xl text-xl font-bold md:pb-6 ">
            {HeroData.aboutHeader}
          </h2>
          <p className="dark:text-white text-[#6B7280] font-normal text-lg md:w-[553px]  pb-6">
            {HeroData.aboutBody}
          </p>
          <div className="flex md:gap-2 items-center justify-evenly md:justify-start">
            <Link
              to="/contact"
              exact
              onClick={scrollToBottom}
              className="hidden md:inline-block bg-[#3730A3] text-[#FFFFFF] dark:text-[#3730A3] dark:bg-[#E1E1FF] text-lg font-medium md:py-3 py-2 px-6 md:px-8  rounded-md h-12"
            >
              Hire me
            </Link>
            <a
              href="https://github.com/gulbeyazzb"
              target="_blank"
              className="border-solid border border-[#3730A3] flex items-center gap-2 text-[#3730A3] dark:bg-[#383838] dark:text-[#E1E1FF] md:w-[131px] dark:border-[#E1E1FF] text-lg font-medium  rounded-md  md:py-4 py-2 px-2 md:pl-4 h-12"
            >
              <i class="bx bxl-github text-[#3730A3] dark:text-[#E1E1FF] text-2xl"></i>
              Github
            </a>
            <Link
              to="/contact"
              className="md:hidden bg-[#3730A3] text-[#FFFFFF] dark:text-[#3730A3] dark:bg-[#E1E1FF] text-lg font-medium md:py-3 py-2 px-6 md:px-8  rounded-md h-12"
            >
              Hire Me
            </Link>
            <a
              href="https://www.linkedin.com/in/g%C3%BClbeyaz-bayram-%C3%B6zer-4a6454159/"
              target="_blank"
              className="border-solid border border-[#3730A3] flex items-center gap-2 text-[#3730A3] dark:bg-[#383838] dark:text-[#E1E1FF] md:w-[131px] dark:border-[#E1E1FF] text-lg font-medium md:py-4 py-2 md:pl-4 px-2 rounded-md  h-12"
            >
              <i class="bx bxl-linkedin text-[#3730A3] dark:text-[#E1E1FF] text-2xl"></i>{" "}
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
