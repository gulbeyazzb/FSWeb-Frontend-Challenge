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
      " E-ticaret web sitesi için ön uç React kullanılarak geliştirildi ve arka uç Java kullanılarak oluşturuldu. Kullanıcıların hesap oluşturmasına, sepete ürün eklemesine ve güvenli ödeme işlemlerini tamamlamasına olanak tanır. Kullanıcı kimlik doğrulaması ve oturum yönetimi, güvenlik ve kullanıcı deneyimine öncelik verilerek JWT (JSON Web Token) kullanılarak uygulandı.",
    techStack: ["React", "JavaScript", "Java", "Spring Boot"],
    github: "https://github.com/gulbeyazzb/e-commerceProject",
    website:
      "https://www.linkedin.com/in/g%C3%BClbeyaz-bayram-%C3%B6zer-4a6454159/",
  },
  {
    id: 2,
    image: project2,
    projectHeader: "Pizza Order",
    introduction:
      " React ile oluşturulan 'SPA', React projelerinde aktif olarak kullanılan çeşitli teknolojileri içerir. Ayrıca kullanıcı dostu arayüzü sayesinde sipariş süreci adım adım takip edilebilmektedir.",
    techStack: ["React", "JavaScript", "Axios"],
    github: "https://github.com/gulbeyazzb/fsweb-s7-challenge-pizza",
    website: "https://fsweb-s7-challenge-pizza-taupe.vercel.app/",
  },
  {
    id: 3,
    image: project1,
    projectHeader: "Portfolio",
    introduction:
      " Bu projede hazırladığım bölümler, yazılım yolculuğumda kaydırmalı gösterim, duyarlı tasarım ve tümü HTML, CSS ve JavaScript kullanılarak geliştirilen form öğelerinin birleşimini içeren ilk bölümlerdir.",
    techStack: ["React", "Redux", "JavaScript"],
    github: "https://github.com/gulbeyazzb/FSWeb-Frontend-Challenge",
    website:
      "https://www.linkedin.com/in/g%C3%BClbeyaz-bayram-%C3%B6zer-4a6454159/",
  },
  {
    id: 4,
    image: project3,
    projectHeader: "Music Player",
    introduction:
      " A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    techStack: ["React", "Redux", "JavaScript"],
    github: "https://github.com/gulbeyazzb/MusicPlayerApp",
    website: "https://music-player-app-theta.vercel.app/",
  },
];
