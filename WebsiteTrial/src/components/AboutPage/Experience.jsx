import { faBookOpenReader, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ExperienceInfo = [
  {
    name: "Tubitak",
    location: "Tubitak - Turkey",
    field: "Scholarship",
    startYear: "11/2024",
    finishYear: "ongoing",
    area: "Scholar",
  },
  {
    name: "Cesa Yazılım",
    location: "Yolkent sitesi, Duraliler, 4583. Sk. No:39, 07220 Kepez/Antalya",
    field: "Intern",
    startYear: "08/2024",
    finishYear: "09/2024",
    area: "Front-end Developer",
  },
  {
    name: "Disti Bilişim",
    location:
      "Mustafa Kemal Mh. Dumlupınar Blv. No:266A İç Kapı No:18 06510 Çankaya/Ankara",
    field: "Intern",
    startYear: "07/2024",
    finishYear: "08/2024",
    area: "Software Technical Support",
  },
];

const Experience = () => {
  return (
    <div className="w-ful flex flex-col">
      <h1 className="w-full text-[32px] font-semibold text-blue-600">
        My Experiences
      </h1>
      <div className="w-full grid grid-cols-2 gap-8 pt-8">
        {ExperienceInfo.map((experience, index) => (
          <div key={index} className="w-full shadow-md p-4 rounded-xl flex flex-col gap-2 hover:scale-103 transform duration-500">
            <h1 className="text-[20px] font-semibold">{experience.name}</h1>
            <hr />
            <p>
              <FontAwesomeIcon
                icon={faMapLocationDot}
                className="pr-4 pt-4 text-blue-500"
              />
              {experience.location}
            </p>
            <p>
              <FontAwesomeIcon
                icon={faBookOpenReader}
                className="pr-4 text-red-500"
              />
              {experience.field} - {experience.area}
            </p>
            <p>
              <FontAwesomeIcon
                icon={faMapLocationDot}
                className="pr-4 text-blue-500"
              />
              {experience.startYear} - {experience.finishYear}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
