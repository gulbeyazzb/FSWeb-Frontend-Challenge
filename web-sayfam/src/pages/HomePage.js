import React from "react";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Profile from "../components/Profile";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Profile />
      <Projects />
    </>
  );
};
