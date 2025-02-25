import React from "react";
import Intro from "./Intro";
import OtherInterestArea from "./OtherInterestArea";
import SomeProjects from "./SomeProjects";
import EmailContact from "./EmailContact";
const Home = () => {
  return (
    <div className="w-full flex flex-col gap-20">
      <div className="w-full ">
        <Intro />
      </div>
      <div className="w-full">
        <OtherInterestArea />
      </div>
      <div className="w-full">
        <SomeProjects />
      </div>
      <div className="w-full">
        <EmailContact />
      </div>
    </div>
  );
};

export default Home;
