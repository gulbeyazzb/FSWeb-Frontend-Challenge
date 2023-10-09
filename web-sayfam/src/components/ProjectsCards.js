import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Data } from "../Data";

const ProjectsCards = () => {
  const changeImgSize = (e) => {};
  return (
    <div className="flex gap-6 items-center justify-center">
      {Data.map((data) => (
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <button onClick={changeImgSize}>
              <img id="a" src={data.image} alt="card-image" />
            </button>
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
            {data.techStack.map((d) => (
              <p
                className="flex items-center justify-center gap-2 text-[#3730A3] dark:bg-[#383838]
          dark:text-[#E1E1FF] text-sm font-medium py-2 px-1 rounded-md w-[131px]
          h-12"
              >
                {d}
              </p>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
export default ProjectsCards;
