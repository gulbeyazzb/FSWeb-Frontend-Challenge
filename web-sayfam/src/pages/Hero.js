import line from "../Assets/Line 11.png";
import mePhoto from "../Assets/9C6BB119-4D9F-45F0-B1FD-9E332E9EF7BA-35928-0000062DD430959D (1).jpg";
import github from "../Assets/github.png";
import Linkedin from "../Assets/LinkedIn.png";

export default function Hero() {
  return (
    <div className="">
      <img className="w-[300px] float-right rounded-md" src={mePhoto}></img>

      <div className="flex items-center gap-2 pb-6">
        <img src={line}></img>
        <p className="text-[#B7AAFF] font-medium text-xl ">
          Gülbeyaz BAYRAM ÖZER
        </p>
      </div>
      <h2 className="dark:text-[#AEBCCF] font-bold text-7xl pb-6">
        Creative thinker Minimalism lover
      </h2>
      <p className="dark:text-white font-normal text-lg w-[553px] pb-6">
        Hi, I’m Almila. I’m a full-stack developer. If you are looking for a
        Developer who to craft solid and scalable frontend products with great
        user experiences. Let’s shake hands with me.
      </p>
      <div className="flex gap-2 items-center">
        <button className="text-[#3730A3] dark:bg-[#E1E1FF] dark:text-[#000000] text-xs font-medium py-3 px-8  rounded-md w-[131px] h-12">
          Hire Me
        </button>
        <button className="flex items-center gap-2 text-[#3730A3] dark:bg-[#383838] dark:text-[#E1E1FF] text-xs font-medium py-3 px-8  rounded-md w-[131px] h-12">
          <img src={github}></img>
          GitHub
        </button>
        <button className=" flex items-center gap-2 text-[#3730A3] dark:bg-[#383838] dark:text-[#E1E1FF] text-xs font-medium py-3 px-8  rounded-md w-[131px] h-12">
          <img src={Linkedin}></img>
          Linkedin
        </button>
      </div>
    </div>
  );
}
