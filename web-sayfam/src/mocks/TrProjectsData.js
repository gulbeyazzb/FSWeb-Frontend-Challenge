import project1 from "../Assets/projectsImg/screencapture-fs-web-s3-g1-food-el-blog-vercel-app-2023-10-19-14_36_29.png";
import project2 from "../Assets/projectsImg/screencapture-fsweb-s7-challenge-pizza-taupe-vercel-app-2023-10-19-14_35_12.png";
import project3 from "../Assets/projectsImg/musicapp.png";
import project4 from "../Assets/projectsImg/screencapture-localhost-3000-2023-10-19-16_44_14.png";

export const TrProjectsData = [
  {
    id: 1,
    image: project4,
    projectHeader: "E-Ticaret Web Uygulaması",
    introduction:
      "Front-end tarafında React kullanılarak geliştirilmekte olan bu proje, back-end tarafında Java kullanılarak oluşturulmak üzere tasarlandı. Kullanıcılara kullanışlı bir arayüz sunan bu projede, login/register yönetimi mevcuttur. Yine kullanıcıların alışveriş boyunca takipte kalacakları tüm süreç plana dahil edilerek geliştirilmekte ve bu sebeple güvenliğe öncelik verilerek JWT (JSON Web Token) kullanılmaktadır. CSS tarafında Tailwind ile çalışılmıştır",
    techStack: ["React", "JavaScript", "Java"],
    github: "https://github.com/gulbeyazzb/e-commerceProject",
    website:
      "https://www.linkedin.com/in/g%C3%BClbeyaz-bayram-%C3%B6zer-4a6454159/",
  },
  {
    id: 2,
    image: project2,
    projectHeader: "Pizza Siparişi",
    introduction:
      "React ile geliştirilen bir projede aktif olarak kullanılan teknolojiler yine bu projede varlığını sürdürmektedir.Kullanıcı dostu arayüzü sayesinde sayfalar arası geçişler ve sipariş süreci eğlencelidir.Ayrıca Yup ile validasyon kontrolü gerçekleştirildiğinden sipariş sürecinde kullanıcının eksik veya hatalı bilgi girmesi denetlenmektedir.",
    techStack: ["React", "JavaScript", "Yup"],
    github: "https://github.com/gulbeyazzb",
    website:
      "https://www.linkedin.com/in/g%C3%BClbeyaz-bayram-%C3%B6zer-4a6454159/",
  },
  {
    id: 3,
    image: project1,
    projectHeader: "Portföy",
    introduction:
      "Portfolio web page developed with React and enriched in design with Tailwind. It was developed to be responsive.",
    techStack: ["React", "Redux", "JavaScript", "Tailwind"],
    github: "https://github.com/gulbeyazzb/FSWeb-Frontend-Challenge",
    website: "https://gulbeyaz-bayram-ozer-portfolio.vercel.app/",
  },
  {
    id: 4,
    image: project3,
    projectHeader: "Müzik Çalar Web Uygulaması",
    introduction:
      " Yazılım gelişim sürecinde Javascript ile geliştirilmiş, müzik çalar web uygulaması.",
    techStack: ["JavaScript, HTML, CSS"],
    github: "https://github.com/gulbeyazzb/MusicPlayerApp",
    website: "https://music-player-app-theta.vercel.app/",
  },
];
