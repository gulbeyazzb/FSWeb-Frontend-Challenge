import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ProjectsCards = () => {
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="font-medium text-3xl dark:text-[#CFCBFF] pb-6 mb-2"
        >
          UI/UX Review Check
        </Typography>
        <Typography>
          A simple, customizable, minimal setup cookie plugin that allows your
          users to select which cookies to accept or decline. This was created
          with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
          package and the git repository makes any type of customization to code
          and themes possible.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <button
          className="flex items-center justify-center gap-2 text-[#3730A3] dark:bg-[#383838]
          dark:text-[#E1E1FF] text-sm font-medium py-2 px-1 rounded-md w-[131px]
          h-12"
        >
          react
        </button>
      </CardFooter>
    </Card>
  );
};
export default ProjectsCards;
