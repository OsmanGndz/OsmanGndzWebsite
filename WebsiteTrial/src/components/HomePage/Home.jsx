import React from "react";
import Intro from "./Intro";
import OtherInterestArea from "./OtherInterestArea";
import SomeProjects from "./SomeProjects";
import EmailContact from "./EmailContact";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-20">
      <motion.div
        initial={{ opacity: 0.8, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <Intro />
      </motion.div>

      <motion.div
        initial={{ opacity: 0.8, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="w-full"
      >
        <OtherInterestArea />
      </motion.div>

      <motion.div
        initial={{ opacity: 0.8, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="w-full"
      >
        <SomeProjects />
      </motion.div>

      <motion.div
        initial={{ opacity: 0.8, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="w-full"
      >
        <EmailContact />
      </motion.div>
    </div>
  );
};

export default Home;
