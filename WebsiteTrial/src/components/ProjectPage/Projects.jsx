import React from "react";
import AlanyaKebabImg from "../../assets/Project/AlanyaKebabImg.png";
import OsmanGndz from "../../assets/Project/OsmanGndzWebsite.png";
import DataSetAnalysis from "../../assets/Project/DataSetAnalysis.png";
import channel from "../../assets/Project/channel.png";
import plot from "../../assets/Project/plot.png";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "alanyakebab",
    title: "Alanya Kebab Website",
    picture: AlanyaKebabImg,
  },
  {
    id: "portfolio",
    title: "OsmanGndz Portfolio Website",
    picture: OsmanGndz,
  },
  {
    id: "plotdraw",
    title: "Drawing Plot ",
    picture: plot,
  },
  {
    id: "datasetanalysis",
    title: "Dataset Analysis",
    picture: DataSetAnalysis,
  },
  {
    id: "youtubechannels",
    title: "The Famous Youtube Channels",
    picture: channel,
  },
];

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <h1 className="text-[30px] font-bold bg-gray-600 w-fit px-4 py-2 rounded-xl text-white">
        My Projects
      </h1>
      <div className="w-full pt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => navigate(`/projects/${project.id}`)}
            className={`relative flex flex-col rounded-xl shadow-md max-w-full h-72 p-2 pr-4 pb-4 cursor-pointer hover:scale-103 transform duration-500 ${
              index % 3 === 0 ? "shadow-orange-500" : ""
            }
            ${index % 3 === 1 ? "shadow-blue-500" : ""}
            ${index % 3 === 2 ? "shadow-green-500" : ""}`}
          >
            {/* Arka plana sabitlenen daire */}
            <div
              className={`absolute top-8 left-4 w-40 h-40 rounded-full z-10 ${
                index % 3 === 0 ? "bg-orange-300/30" : ""
              }
                ${
                  index % 3 === 1
                    ? "bg-blue-300/30"
                    : ""
                }
                ${
                  index % 3 === 2
                    ? "bg-green-300/30"
                    : ""
                }`}
            />

            <h1
              className={`mb-auto text-[25px] font-semibold pt-2 pl-2 z-15, ${
                index % 3 === 0
                  ? "text-orange-600"
                  : ""
              }
                ${
                  index % 3 === 1
                    ? "text-blue-600"
                    : ""
                }
                 ${
                  index % 3 === 2
                    ? "text-green-600"
                    : ""
                }`}
            >
              {project.title}
            </h1>
            <div className="flex items-end justify-end w-full z-15">
              <img
                src={project.picture}
                alt="sdas"
                className="w-[85%] h-44 rounded-lg shadow-md shadow-gray-400"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
