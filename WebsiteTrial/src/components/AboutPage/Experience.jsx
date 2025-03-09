import { faBookOpenReader, faCalendarDays, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {useTranslation} from "react-i18next"



const Experience = () => {

  const {t} = useTranslation();

  const ExperienceInfo = [
    {
      name: "Tubitak",
      location: t("Tubitak - Turkey"),
      field: t("Scholarship"),
      startYear: "11/2024",
      finishYear: t("ongoing"),
      area: t("Scholar"),
    },
    {
      name: "Cesa Yazılım",
      location: "Yolkent sitesi, Duraliler, 4583. Sk. No:39, 07220 Kepez/Antalya",
      field: t("Intern"),
      startYear: "08/2024",
      finishYear: "09/2024",
      area: t("Front-end Developer"),
    },
    {
      name: "Disti Bilişim",
      location:
        "Mustafa Kemal Mh. Dumlupınar Blv. No:266A İç Kapı No:18 06510 Çankaya/Ankara",
      field: t("Intern"),
      startYear: "07/2024",
      finishYear: "08/2024",
      area: t("Software Technical Support"),
    },
  ];
  return (
    <div className="w-ful flex flex-col">
      <h1 className="w-full text-[24px] lg:text-[32px] font-semibold text-blue-600 dark:text-blue-500">
        {t("My Experiences")}
      </h1>
      <div className="w-full grid md:grid-cols-2 gap-8 pt-8 text-black dark:text-zinc-100">
        {ExperienceInfo.map((experience, index) => (
          <div key={index} className="w-full shadow-md shadow-gray-300 dark:shadow-gray-600 p-4 rounded-xl flex flex-col gap-2 hover:scale-103 transform duration-500 bg-white dark:bg-neutral-800">
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
                icon={faCalendarDays}
                className="pr-4"
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
