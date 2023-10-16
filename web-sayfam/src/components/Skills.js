import { Data } from "../mocks/SkillsData";

const Skills = () => {
  return (
    <div className="md:my-10 my-2">
      <h2 className="dark:text-[#AEBCCF] text-[#1F2937] font-semibold md:text-5xl text-4xl py-6 ">
        Skills
      </h2>

      <div className="grid grid-rows-6 gap-4 grid-flow-col font-medium md:text-3xl text-xl text-[#4338CA] dark:text-[#B7AAFF] pb-6">
        {Data.map((data) => (
          <div className="flex gap-4 items-center">{data}</div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
