import { useSelector } from "react-redux";

const Skills = () => {
  const SkillsData = useSelector((store) => store.skillsData);
  return (
    <div className="md:my-10 my-2">
      <h2 className="dark:text-[#AEBCCF] text-[#1F2937] font-semibold md:text-5xl text-4xl py-6 ">
        {SkillsData.header}
      </h2>

      <div className="grid grid-rows-6 gap-4 grid-flow-col font-medium md:text-3xl text-xl text-[#4338CA] dark:text-[#B7AAFF] pb-6">
        {SkillsData.skills.map((skill) => (
          <div className="flex gap-4 items-center">{skill}</div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
