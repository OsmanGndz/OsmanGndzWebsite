import React from "react";
import AlanyaKebab from "../../assets/AlanyaKebab.png";

const projects = [
  {
    title: "Alanya Kebab Website",
    description: "This is project 1",
    picture: AlanyaKebab,
  },
  {
    title: "Project 2",
    description: "This is project 2",
  },
  {
    title: "Project 3",
    description: "This is project 3",
  },
];
const SomeProjects = () => {
  return (
    <div className="w-full flex flex-col items-center pt-16">
      <h1 className="text-[32px] font-bold">
        <span className="bg-blue-500 px-4 py-2 text-white rounded-xl">
          My Projects
        </span>{" "}
        in Software
      </h1>
      <div className="w-full pt-12 grid grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative flex flex-col rounded-xl shadow-md max-w-full h-72 p-2 pr-4 pb-4 cursor-pointer ${project.title === "Alanya Kebab Website" && "shadow-orange-500"}`}
          >
            {/* Arka plana sabitlenen daire */}
            <div className={`absolute top-8 left-4 w-40 h-40 rounded-full z-10 ${project.title === "Alanya Kebab Website" && "bg-orange-300/30"}`}/>

            <h1 className={`mb-auto text-[25px] font-semibold pt-2 pl-2 z-15, ${project.title === "Alanya Kebab Website" && "text-orange-600"}`}>
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
