import React from "react";
import AlanyaKebabImg from "../../assets/Project/AlanyaKebabImg.png";
import OsmanGndz from "../../assets/Project/OsmanGndzWebsite.png";
import DataSetAnalysis from "../../assets/Project/DataSetAnalysis.png";
import channel from "../../assets/Project/channel.png";
import plot from "../../assets/Project/plot.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const projects = [
    {
      id: "alanyakebab",
      title: t("Alanya Kebab Website"),
      picture: AlanyaKebabImg,
    },
    {
      id: "portfolio",
      title: t("OsmanGndz Portfolio Website"),
      picture: OsmanGndz,
    },
    {
      id: "plotdraw",
      title: t("Drawing Plot By Using C# and Python"),
      picture: plot,
    },
    {
      id: "datasetanalysis",
      title: t("Dataset Analysis"),
      picture: DataSetAnalysis,
    },
    {
      id: "youtubechannels",
      title: t("The Famous Youtube Channels"),
      picture: channel,
    },
  ];
  return (
    <div className="w-full">
      <h1 className="text-[30px] font-bold bg-gray-600 dark:bg-gray-700 w-fit px-4 py-2 rounded-xl text-white">
        {t("My Projects")}
      </h1>
      <div className="w-full pt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => navigate(`/projects/${project.id}`)}
            className={`relative flex flex-col rounded-xl shadow-md max-w-full h-72 p-2 pr-4 pb-4 cursor-pointer hover:scale-103 transform duration-500 bg-white dark:bg-neutral-800 ${
              index % 3 === 0 ? "shadow-orange-500 dark:shadow-orange-300" : ""
            }
            ${index % 3 === 1 ? "shadow-blue-500 dark:shadow-blue-300" : ""}
            ${index % 3 === 2 ? "shadow-green-500 dark:shadow-green-300" : ""}`}
          >
            {/* Arka plana sabitlenen daire */}
            <div
              className={`absolute top-8 left-4 w-40 h-40 rounded-full z-10 ${
                index % 3 === 0 ? "bg-orange-300/30 dark:bg-orange-400/30" : ""
              }
                ${index % 3 === 1 ? "bg-blue-300/30 dark:bg-blue-400/30" : ""}
                ${
                  index % 3 === 2 ? "bg-green-300/30 dark:bg-green-400/30" : ""
                }`}
            />

            <h1
              className={`mb-auto text-[25px] font-semibold pt-2 pl-2 z-15, ${
                index % 3 === 0 ? "text-orange-600 dark:text-orange-400" : ""
              }
                ${index % 3 === 1 ? "text-blue-600 dark:text-blue-400" : ""}
                 ${
                   index % 3 === 2 ? "text-green-600 dark:text-green-400" : ""
                 }`}
            >
              {project.title}
            </h1>
            <div className="flex items-end justify-end w-full z-15">
              <img
                src={project.picture}
                alt="sdas"
                className="w-[85%] h-44 rounded-lg shadow-md shadow-gray-400 dark:shadow-gray-600"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
