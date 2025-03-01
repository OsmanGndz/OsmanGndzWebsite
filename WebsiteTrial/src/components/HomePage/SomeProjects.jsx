import React from "react";
import AlanyaKebab from "../../assets/AlanyaKebab.png";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Alanya Kebab Website",
    description: "This is project 1",
    picture: AlanyaKebab,
  },
  {
    title: "OsmanGndz Portfolio Website",
    description: "This is project 2",
    picture: "",
  },
  {
    title: "Project 3",
    description: "This is project 3",
  },
];
const SomeProjects = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="w-full text-[24px] lg:text-[32px] flex flex-row items-center justify-between">
        <div className="flex flex-col sm:flex-row items-center w-full justify-center font-bold pl-8">
          <p className="bg-blue-500 px-4 py-2 text-white rounded-xl">
            My Projects
          </p>{" "}
          <p className="pl-2">in Software</p>
        </div>
        <div className="w-32 justify-end items-end text-[16px] lg:text-[20px] bg-blue-100 inline-block text-center text-black rounded-xl shadow-md shadow-gray-400 cursor-pointer py-1 hover:scale-103 transform duration-500" onClick={()=> navigate("/projects")}>
          <h1>View all</h1>
        </div>
      </h1>
      <div className="w-full pt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative flex flex-col rounded-xl shadow-md max-w-full h-72 p-2 pr-4 pb-4 cursor-pointer ${
              project.title === "Alanya Kebab Website" && "shadow-orange-500"
            }`}
          >
            {/* Arka plana sabitlenen daire */}
            <div
              className={`absolute top-8 left-4 w-40 h-40 rounded-full z-10 ${
                project.title === "Alanya Kebab Website" && "bg-orange-300/30"
              }`}
            />

            <h1
              className={`mb-auto text-[25px] font-semibold pt-2 pl-2 z-15, ${
                project.title === "Alanya Kebab Website" && "text-orange-600"
              }`}
            >
              {project.title}
            </h1>
            <div className="flex items-end justify-end w-full z-15">
              <img
                src={project.picture}
                alt="sdas"
                className="w-[85%] h-48 rounded-lg shadow-md shadow-gray-400"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SomeProjects;
