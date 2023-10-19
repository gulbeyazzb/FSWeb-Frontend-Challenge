import project1 from "../Assets/projectsImg/screencapture-fs-web-s3-g1-food-el-blog-vercel-app-2023-10-19-14_36_29.png";
import project2 from "../Assets/projectsImg/screencapture-fsweb-s7-challenge-pizza-taupe-vercel-app-2023-10-19-14_35_12.png";
import project3 from "../Assets/projectsImg/musicapp.png";
import project4 from "../Assets/projectsImg/screencapture-localhost-3000-2023-10-19-16_44_14.png";

export const ProjectsData = [
  {
    id: 1,
    image: project4,
    projectHeader: "E-commerce ",
    introduction:
      "This project, which is being developed using React on the front-end, was designed to be created using Java on the back-end. This project, which offers users a useful interface, has login/register management. Again, the entire process that users will be able to follow throughout the shopping process is included in the plan and therefore JWT (JSON Web Token) is used, prioritizing security. Worked with Tailwind on CSS side",
    techStack: ["React", "JavaScript", "Java"],
    github: "https://github.com/gulbeyazzb/e-commerceProject",
    website:
      "https://www.linkedin.com/in/g%C3%BClbeyaz-bayram-%C3%B6zer-4a6454159/",
  },
  {
    id: 2,
    image: project2,
    projectHeader: "Pizza Order",
    introduction:
      "The technologies actively used in a project developed with React continue to exist in this project. Thanks to the user-friendly interface, transitions between pages and the ordering process are fun. In addition, since validation control is carried out with Yup, it is checked that the user enters missing or incorrect information during the ordering process.",
    techStack: ["React", "JavaScript", "Yup"],
    github: "https://github.com/gulbeyazzb/fsweb-s7-challenge-pizza",
    website: "https://fsweb-s7-challenge-pizza-taupe.vercel.app/",
  },
  {
    id: 3,
    image: project1,
    projectHeader: "Portfolio",
    introduction:
      "Portfolio web page developed with React and enriched in design with Tailwind. It was developed to be responsive.",
    techStack: ["React", "Redux", "JavaScript", "Tailwind"],
    github: "https://github.com/gulbeyazzb/FSWeb-Frontend-Challenge",
    website: "https://gulbeyaz-bayram-ozer-portfolio.vercel.app/",
  },
  {
    id: 4,
    image: project3,
    projectHeader: "Music Player",
    introduction:
      "Music player web application developed with Javascript during the software development process.",
    techStack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/gulbeyazzb/MusicPlayerApp",
    website: "https://music-player-app-theta.vercel.app/",
  },
];
