import React from "react";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Profile from "../components/Profile";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export const HomePage = () => {
  return (
    <>
      <div className="dark:invisible md:dark:visible absolute top-96 right-0 z-0 p-32 bg-[#a7a5cb] md:bg-[#7673a6] rounded-l-full w-2"></div>
      <div className="dark:invisible md:dark:visible absolute top-0 left-[-300px] z-0 p-60 bg-[#a7a5cb] md:bg-[#7673a6] rounded-full w-20"></div>
      <div className="relative z-50 flex flex-col pt-6 sm:px-20 px-2 h-full md:w-[1100px] md:m-auto ">
        <Header />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </div>
      <Footer />
    </>
  );
};
