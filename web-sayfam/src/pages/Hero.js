import line from "../Assets/Line 11.png";
import mePhoto from "../Assets/9C6BB119-4D9F-45F0-B1FD-9E332E9EF7BA-35928-0000062DD430959D (1).jpg";
import { Data } from "../mocks/HeroData";

export default function Hero() {
  console.log(Data.name);
  return (
    <div>
      <div>
        <img
          className="md:w-[300px] w-52 md:float-right m-auto rounded-md"
          src={mePhoto}
        ></img>

        <div className="flex justify-center md:justify-start md:items-center md:gap-2 pb-6">
          <img src={line} className="hidden md:inline-block"></img>
          <p className="text-navy-blue-600 dark:text-navy-blue-100 font-medium text-xl ">
            {Data.name}
            <p className="text-center">{Data.role}</p>
          </p>
        </div>
        <h2 className="dark:text-[#AEBCCF] text-[#1F2937] md:font-bold md:text-7xl text-xl font-bold md:pb-6 ">
          {Data.about}
        </h2>
        <p className="dark:text-white text-[#6B7280] font-normal text-lg md:w-[553px]  pb-6">
          Hi, I’m Almila. I’m a full-stack developer. If you are looking for a
          Developer who to craft solid and scalable frontend products with great
          user experiences. Let’s shake hands with me.
        </p>
        <div className="flex md:gap-2 items-center justify-evenly md:justify-start">
          <button className="hidden md:inline-block bg-[#3730A3] text-[#FFFFFF] dark:text-[#3730A3] dark:bg-[#E1E1FF] text-lg font-medium md:py-3 py-2 px-6 md:px-8  rounded-md h-12">
            Hire Me
          </button>
          <button className="border-solid border border-[#3730A3] flex items-center gap-2 text-[#3730A3] dark:bg-[#383838] dark:text-[#E1E1FF] md:w-[131px] dark:border-[#E1E1FF] text-lg font-medium  rounded-md  md:py-4 py-2 px-2 md:pl-4 h-12">
            <i class="bx bxl-github text-[#3730A3] dark:text-[#E1E1FF] text-2xl"></i>
            Github
          </button>
          <button className="md:hidden bg-[#3730A3] text-[#FFFFFF] dark:text-[#3730A3] dark:bg-[#E1E1FF] text-lg font-medium md:py-3 py-2 px-6 md:px-8  rounded-md h-12">
            Hire Me
          </button>
          <button className="border-solid border border-[#3730A3] flex items-center gap-2 text-[#3730A3] dark:bg-[#383838] dark:text-[#E1E1FF] md:w-[131px] dark:border-[#E1E1FF] text-lg font-medium md:py-4 py-2 md:pl-4 px-2 rounded-md  h-12">
            <i class="bx bxl-linkedin text-[#3730A3] dark:text-[#E1E1FF] text-2xl"></i>{" "}
            Linkedin
          </button>
        </div>
      </div>
    </div>
  );
}
