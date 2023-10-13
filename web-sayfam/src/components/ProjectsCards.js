import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Data } from "../mocks/Data";
import { useState } from "react";

const ProjectsCards = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex md:flex-row flex-col container gap-2 m-auto items-center justify-between">
      {Data.map((data) => (
        <Card className="mt-6 w-[340px] m-auto py-10 pt-12 ">
          <CardHeader className="relative ">
            <button onClick={() => setShowModal(true)}>
              <img src={data.image} alt="card-image" />
            </button>

            {showModal && (
              <button
                className="text-danger-700 text-lg e font-medium"
                onClick={() => setShowModal(false)}
              >
                <div className=" fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex flex-col justify-center items-center">
                  <div className="text-right">
                    <img
                      src={data.image}
                      alt="card-image"
                      className="w-[90%] m-auto"
                    />
                  </div>
                </div>
              </button>
            )}
          </CardHeader>
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-medium text-3xl dark:text-[#CFCBFF] pb-6 mb-2"
            >
              {data.projectHeader}
            </Typography>
            <Typography>{data.introduction}</Typography>
          </CardBody>
          <CardFooter className="flex gap-3 pt-0">
            {data.techStack.map((tech) => (
              <p className="border-solid border border-[#3730A3] flex items-center gap-2 text-[#3730A3] dark:bg-[#383838] dark:text-[#E1E1FF] w-[131px] dark:border-[#E1E1FF] text-sm font-medium pl-5 rounded-md  h-12">
                {tech}
              </p>
            ))}
          </CardFooter>
          <div className="hidden md:flex justify-between px-8  text-[#3730A3] underline">
            <a href="https://github.com/gulbeyazzb" target="_blank">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/g%C3%BClbeyaz-bayram-%C3%B6zer-4a6454159/"
              target="_blank"
            >
              Website
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
};
export default ProjectsCards;
