import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const ProjectsCards = () => {
  const [showModal, setShowModal] = useState(false);
  const [newModalData, setNewModalData] = useState();

  const showImgModal = (id) => {
    const modalData = ProjectsData.find((project) => project.id === Number(id));
    setNewModalData(modalData);
    setShowModal(true);
  };
  const ProjectsData = useSelector((store) => store.projectsData);
  return (
    <div className="py-4">
      <div className="flex flex-col md:w-[950px] gap-6 ">
        {ProjectsData.map((data) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hover-card md:w-[950px] rounded-xl shadow-md dark:shadow-white shadow-black flex flex-col md:flex-row gap-6 items-center p-2  dark:bg-white bg-[#7673a6] dark:text-black text-white"
          >
            <div className="md:w-[350px] p-1">
              <button onClick={() => showImgModal(data.id)}>
                <img
                  src={data.image}
                  alt="card-image"
                  className="overflow-hidden rounded-b-none rounded-l-none w-[1100px] h-[300px] object-cover md:rounded-xl"
                />
              </button>

              {showModal && (
                <button
                  className="object-contain text-danger-700 text-lg e font-medium"
                  onClick={() => setShowModal(false)}
                >
                  <div className="object-contain fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex flex-col md:justify-center md:items-center">
                    <div className="md:text-right">
                      <img
                        src={newModalData.image}
                        alt="card-image"
                        className="object-contain md:p-[610px]"
                      />
                    </div>
                  </div>
                </button>
              )}
            </div>
            <div className="md:w-[600px]">
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default ProjectsCards;
