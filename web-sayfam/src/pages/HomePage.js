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
      <div className=" flex flex-col pt-6 sm:px-20 px-2 h-full md:w-[1100px] md:m-auto ">
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
