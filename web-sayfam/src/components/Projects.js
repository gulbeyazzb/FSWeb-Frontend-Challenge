import line from "../Assets/Vector 2.png";
import ProjectsCards from "./ProjectsCards";

export default function Projects() {
  return (
    <div className="md:my-10 my-6">
      <img src={line}></img>
      <h2 className="dark:text-[#AEBCCF] text-[#1F2937] font-semibold md:text-5xl text-4xl py-4 ">
        Projects
      </h2>
      <ProjectsCards />
    </div>
  );
}
