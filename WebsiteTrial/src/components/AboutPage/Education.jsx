import {
  faBookOpenReader,
  faCalendarDays,
  faMapLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {useTranslation} from "react-i18next"


const Education = () => {
  const {t} = useTranslation();
  const EducationInfo = [
    {
      name: t("Konya Food And Agriculture University"),
      location: "Melikşah, Beyşehir Cd. No:9, 42080 Meram/Konya",
      field: t("Computer Engineering (English)"),
      startYear: "2020",
      finishYear: "2025",
      gpa: "3.70 / 4",
      degree: t("Bachelor's degree"),
    },
    {
      name: "Josip Juraj Strossmayer University of Osijek",
      location: "Trg Svetog Trojstva 3, 31000, Osijek, Hırvatistan",
      field: t("Computer Engineering (English)"),
      startYear: "03/2024",
      finishYear: "07/2024",
      gpa: "3.78 / 4",
      degree: t("Erasmus Student Mobility"),
    },
  ];
  
  return (
    <div className="w-full flex flex-col">
      <h1 className="w-full text-[24px] lg:text-[32px] font-semibold text-blue-600 dark:text-blue-500">
        {t("My Academic Life")}
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-8 pt-8 text-black dark:text-zinc-100">
        {EducationInfo.map((Education, index) => (
          <div className="w-full flex flex-col gap-2 shadow-md shadow-gray-300 dark:shadow-gray-600 p-4 rounded-xl hover:scale-102 transform duration-500 bg-white dark:bg-neutral-800">
            <h1 className="text-[20px] font-semibold">{Education.name}</h1>
            <hr />
            <p>
              <FontAwesomeIcon
                icon={faMapLocationDot}
                className="pr-4 pt-4 text-blue-500"
              />
              {Education.location}
            </p>
            <p>
              <FontAwesomeIcon
                icon={faBookOpenReader}
                className="pr-4 text-red-500"
              />{" "}
              {Education.field} - {Education.degree}
            </p>
            <p>
              <FontAwesomeIcon icon={faCalendarDays} className="pr-4" />
              {Education.startYear} - {Education.finishYear}
            </p>
            <p>
              <FontAwesomeIcon icon={faStar} className="pr-4 text-yellow-400"/>
              {Education.gpa}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
