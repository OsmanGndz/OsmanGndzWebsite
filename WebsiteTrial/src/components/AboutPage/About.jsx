import React from "react";
import Intro from "./Intro";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import {motion} from "framer-motion"
const About = () => {
  return (
    <div className="w-full flex flex-col gap-20">
      <motion.div
        initial={{ opacity: 0.8, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <Intro />
      </motion.div>
      <motion.div
        initial={{ opacity: 0.8, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <Education />
      </motion.div>
      <motion.div
        initial={{ opacity: 0.8, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <Skills />
      </motion.div>
      <motion.div
        initial={{ opacity: 0.8, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <Experience />
      </motion.div>
    </div>
  );
};

export default About;
