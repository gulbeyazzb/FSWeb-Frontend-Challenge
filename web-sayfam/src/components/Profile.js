import line from "../Assets/Vector 2.png";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Profile() {
  const ProfileData = useSelector((store) => store.profileData);
  console.log(ProfileData);
  return (
    <div className="">
      <div className="md:my-4">
        <img src={line}></img>
        <h2 className="dark:text-[#AEBCCF] text[#1F2937] font-semibold md:text-5xl text-4xl py-6">
          {ProfileData.profileHeader}
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:flex md:justify-between"
        >
          <div className="flex ">
            <div className="md:w-3/4">
              <h6 className="font-medium md:text-3xl text-xl text-[#4338CA] dark:text-[#B7AAFF] pb-6">
                {ProfileData.profileHeader}
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
                  {ProfileData.birthDate}
                </div>
                <div className=" dark:text-white font-normal text-sm">
                  {ProfileData.city}
                </div>
                <div className=" dark:text-white font-normal text-sm">
                  {ProfileData.education}
                </div>
                <div className=" dark:text-white font-normal text-sm">
                  {ProfileData.role}
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[29rem] md:mt-0 mt-5">
            <h6 className="font-medium md:text-3xl text-xl text-[#4338CA] dark:text-[#B7AAFF] pb-6">
              {ProfileData.aboutHeader}
            </h6>
            {ProfileData.about.map((p) => (
              <p className="flex gap-3 font-normal text-lg text-[#6B7280] dark:text-white ">
                <br /> {p}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
