import React from "react";
import Intro from "./Intro";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
const About = () => {
  return (
    <div className="w-full flex flex-col gap-20">
      <div className="w-full">
        <Intro />
      </div>
      <div className="w-full">
        <Education />
      </div>
      <div className="w-full">
        <Skills />
      </div>
      <div className="w-full">
        <Experience />
      </div>
    </div>
  );
};

export default About;
