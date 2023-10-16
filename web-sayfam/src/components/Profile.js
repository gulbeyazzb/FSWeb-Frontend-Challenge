import line from "../Assets/Vector 2.png";
import { Data } from "../mocks/ProfileData";

export default function Profile() {
  return (
    <div className="md:my-4">
      <img src={line}></img>
      <h2 className="dark:text-[#AEBCCF] text[#1F2937] font-semibold md:text-5xl text-4xl py-6">
        Profile
      </h2>
      <div className="md:flex md:justify-between">
        <div className="flex ">
          <div className="md:w-3/4">
            <h6 className="font-medium md:text-3xl text-xl text-[#4338CA] dark:text-[#B7AAFF] pb-6">
              Profile
            </h6>
            <div className="grid grid-rows-4 gap-4 grid-flow-col items-start">
              <div className=" dark:text-white font-semibold text-lg">
                Birthday Date:
              </div>
              <div className=" dark:text-white font-semibold text-lg">
                City:
              </div>
              <div className=" dark:text-white font-semibold text-lg">
                Education:
              </div>
              <div className=" dark:text-white font-semibold text-lg">
                Preferred Role:
              </div>
              <div className=" dark:text-white font-normal text-sm">
                {Data.birthDate}
              </div>
              <div className=" dark:text-white font-normal text-sm">
                {Data.city}
              </div>
              <div className=" dark:text-white font-normal text-sm">
                {Data.education}
              </div>
              <div className=" dark:text-white font-normal text-sm">
                {Data.role}
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[576.9px] md:mt-0 mt-5">
          <h6 className="font-medium md:text-3xl text-xl text-[#4338CA] dark:text-[#B7AAFF] pb-6">
            About Me
          </h6>
          {Data.about.map((p) => (
            <p className="flex gap-3 font-normal text-lg text-[#6B7280] dark:text-white w-[400px]">
              <br /> {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
