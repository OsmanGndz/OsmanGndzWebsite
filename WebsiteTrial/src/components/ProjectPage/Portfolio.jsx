import React from "react";
import OsmanGndzWebsite from "../../assets/Project/OsmanGndzWebsite.png";

import {
  faJs,
  faReact,
  faGithub,
  faGit,
  faFontAwesome,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useTranslation} from "react-i18next"

const technologies = [
  {
    name: "JavaScript",
    icon: <FontAwesomeIcon icon={faJs} className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <FontAwesomeIcon icon={faReact} className="text-cyan-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <FontAwesomeIcon icon={faCode} className="text-teal-500" />,
  },
  {
    name: "FontAwesome",
    icon: <FontAwesomeIcon icon={faFontAwesome} className="text-gray-500" />,
  },
  {
    name: "GitHub",
    icon: <FontAwesomeIcon icon={faGithub} className="text-black dark:text-zinc-300" />,
  },
  {
    name: "Git",
    icon: <FontAwesomeIcon icon={faGit} className="text-red-500" />,
  },
];
const Portfolio = () => {
  const {t} = useTranslation();
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-12 text-[18px] text-gray-700 dark:text-zinc-300">
        <h1 className="font-bold text-[24px] md:text-[30px] w-fit bg-blue-500 dark:bg-blue-800 text-white px-4 py-2 rounded-xl">
          {t("OsmanGndz Portfolio Website")}
        </h1>
        <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:hidden">
            <img
              src={OsmanGndzWebsite}
              alt="OsmanGndzWebsite"
              className="w-full rounded-xl"
            />
            <a
              href="https://osmangndz.github.io/OsmanGndzWebsite/"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              OsmanGndzWebsite
            </a>
          </div>
        <div className="w-full flex flex-row gap-8">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <p>
              {t("PortfolioDescription1")}
            </p>
            <p>
            {t("PortfolioDescription2")}
            </p>
            <p>
            {t("PortfolioDescription3")}
            </p>
          </div>
          <div className="w-1/2 hidden lg:flex flex-col gap-8">
            <img
              src={OsmanGndzWebsite}
              alt="OsmanGndzWebsite"
              className="w-full rounded-xl"
            />
            <a
              href="https://osmangndz.github.io/OsmanGndzWebsite/"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              OsmanGndzWebsite
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col gap-12">
          <h1 className="bg-green-500 dark:bg-green-800 w-fit text-white px-4 py-2 text-[20px] md:text-[28px] font-semibold rounded-xl">
            {t("Tools")}
          </h1>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-[32px] sm:text-[40px] lg:text-[60px] text-black dark:text-zinc-100">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="w-full pb-12 flex gap-4 items-center hover:scale-104 transform duration-400"
              >
                {tech.icon}
                <p className="text-[18px] sm:text-[20px]">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
