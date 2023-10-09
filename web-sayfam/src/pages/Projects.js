import line from "../Assets/Vector 2.png";
import ProjectsCards from "../components/ProjectsCards";

export default function Projects() {
  return (
    <div className="my-10">
      <img src={line}></img>
      <h2 className="dark:text-[#AEBCCF] font-semibold text-5xl py-6 ">
        Projects
      </h2>
      <ProjectsCards />
      {/* <div className="flex">
        <div>
          <h6 className="font-medium text-3xl dark:text-[#B7AAFF] pb-6">
            JavaScript
          </h6>
          <p className="font-normal text-xs dark:text-white">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <h6 className="font-medium text-3xl dark:text-[#B7AAFF] pb-6">
            React.Js
          </h6>
          <p className="font-normal text-xs dark:text-white">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <h6 className="font-medium text-3xl dark:text-[#B7AAFF] pb-6">
            Node.Js
          </h6>
          <p className="font-normal text-xs dark:text-white">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div> */}
    </div>
  );
}
