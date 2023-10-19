import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { ProjectsData } from "../mocks/ProjectsData";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProjectsCards = () => {
  const [showModal, setShowModal] = useState(false);
  const [newModalData, setNewModalData] = useState();

  const showImgModal = (id) => {
    const modalData = ProjectsData.find((project) => project.id === Number(id));
    setNewModalData(modalData);
    console.log(newModalData);
    setShowModal(true);
  };
  const ProjectsData = useSelector((store) => store.projectsData);
  return (
    <div className="py-4">
      <div className="flex flex-col gap-6 ">
        {ProjectsData.map((data) => (
          <div className="hover-card  rounded-xl shadow-md dark:shadow-white shadow-black flex flex-col md:flex-row gap-6 items-center  dark:bg-white bg-[#3730A3] dark:text-black text-white">
            <div className="">
              <button onClick={() => showImgModal(data.id)}>
                <img
                  src={data.image}
                  alt="card-image"
                  className="w-[1100px] h-[300px] object-cover rounded-xl"
                />
              </button>

              {showModal && (
                <button
                  className="text-danger-700 text-lg e font-medium"
                  onClick={() => setShowModal(false)}
                >
                  <div className=" fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex flex-col justify-center items-center">
                    <div className="text-right">
                      <img
                        src={newModalData.image}
                        alt="card-image"
                        className="p-[610px]"
                      />
                    </div>
                  </div>
                </button>
              )}
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex md:flex-row flex-col md:justify-between items-center">
                  {" "}
                  <Typography
                    variant="h5"
                    className="font-medium text-3xl dark:text-[#9b95e1] pb-6 mb-2"
                  >
                    {data.projectHeader}
                  </Typography>
                  <div className="hidden md:flex gap-4 px-8 flex-end underline dark:text-[#3730A3]">
                    <a href={data.github} target="_blank">
                      Github
                    </a>
                    <a href={data.website} target="_blank">
                      Website
                    </a>
                  </div>
                </div>

                <Typography>{data.introduction}</Typography>
              </div>
              <div className="flex md:flex-row flex-wrap gap-3">
                {data.techStack.map((tech) => (
                  <p className="border-solid border border-white bg-white text-[#3730A3]  flex items-center gap-2  dark:bg-[#383838] dark:text-[#E1E1FF] w-[131px] dark:border-[#E1E1FF] text-sm font-medium pl-5 rounded-md  h-12">
                    {tech}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex md:hidden gap-4 px-8 flex-end text-[#3730A3] underline">
              <a href={data.github} target="_blank">
                Github
              </a>
              <a href={data.website} target="_blank">
                Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectsCards;
