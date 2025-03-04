import React from "react";
import AlanyaKebab from "../../assets/AlanyaKebab.png";
import OsmanGndz from "../../assets/OsmanGndzWebsite.png";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id:"alanyakebab",
    title: "Alanya Kebab Website",
    description: "This is project 1",
    picture: AlanyaKebab,
  },
  {
    id:"osmangndzportfolio",
    title: "OsmanGndz Portfolio Website",
    description: "This is project 2",
    picture: OsmanGndz,
  },
  {
    id:"project3",
    title: "Project 3",
    description: "This is project 3",
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
            onClick={()=> navigate(`/projects/${project.id}`) }
            className={`relative flex flex-col rounded-xl shadow-md max-w-full h-72 p-2 pr-4 pb-4 cursor-pointer hover:scale-103 transform duration-500 ${
              project.title === "Alanya Kebab Website"
                ? "shadow-orange-500"
                : ""
            }
            ${
              project.title === "OsmanGndz Portfolio Website"
                ? "shadow-blue-500"
                : ""
            }`}
          >
            {/* Arka plana sabitlenen daire */}
            <div
              className={`absolute top-8 left-4 w-40 h-40 rounded-full z-10 ${
                project.title === "Alanya Kebab Website"
                  ? "bg-orange-300/30"
                  : ""
              }
                ${
                  project.title === "OsmanGndz Portfolio Website"
                    ? "bg-blue-300/30"
                    : ""
                }`}
            />

            <h1
              className={`mb-auto text-[25px] font-semibold pt-2 pl-2 z-15, ${
                project.title === "Alanya Kebab Website"
                  ? "text-orange-600"
                  : ""
              }
                ${
                  project.title === "OsmanGndz Portfolio Website"
                    ? "text-blue-600"
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
