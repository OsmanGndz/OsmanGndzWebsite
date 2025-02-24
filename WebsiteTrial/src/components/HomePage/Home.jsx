import React from "react";
import Intro from "./Intro";
import OtherInterestArea from "./OtherInterestArea";
import SomeProjects from "./SomeProjects";
const Home = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full ">
        <Intro />
      </div>
      <div className="w-full">
        <OtherInterestArea />
      </div>
      <div className="w-full">
        <SomeProjects />
      </div>
    </div>
  );
};

export default Home;
