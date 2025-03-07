import React from "react";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChartBar,
  faChartLine,
  faCode,
  faDatabase,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useTranslation } from "react-i18next"

const FrontSkills = [
  {
    name: "HTML",
    icon: <FontAwesomeIcon icon={faHtml5} className="text-orange-500" />,
  },
  {
    name: "CSS",
    icon: <FontAwesomeIcon icon={faCss3Alt} className="text-blue-500 " />,
  },
  {
    name: "JavaScript",
    icon: <FontAwesomeIcon icon={faJs} className="text-yellow-500 " />,
  },
  {
    name: "React",
    icon: <FontAwesomeIcon icon={faReact} className="text-blue-400 " />,
  },
  {
    name: "TailwindCSS",
    icon: <FontAwesomeIcon icon={faCss3Alt} className="text-teal-400 " />, // Tailwind için özel bir ikon yok
  },
  {
    name: "Bootstrap",
    icon: <FontAwesomeIcon icon={faBootstrap} className="text-purple-600 " />,
  },
  {
    name: "TypeScript",
    icon: <FontAwesomeIcon icon={faCode} className="text-blue-600 " />, // TypeScript için uygun ikon yok, alternatif olarak `faCode` kullandım
  },
];

const DataScienceSkills = [
  {
    name: "Python",
    icon: <FontAwesomeIcon icon={faPython} className="text-yellow-500" />,
  },
  {
    name: "SQL",
    icon: <FontAwesomeIcon icon={faDatabase} className="text-blue-500" />,
  },
  {
    name: "Pandas",
    icon: <FontAwesomeIcon icon={faTable} className="text-gray-500" />, // Veri çerçeveleri için tablo ikonu
  },
  {
    name: "NumPy",
    icon: <FontAwesomeIcon icon={faTable} className="text-blue-400" />, // Alternatif olarak tablo ikonu kullanılabilir
  },
  {
    name: "Scikit-Learn",
    icon: <FontAwesomeIcon icon={faChartLine} className="text-orange-500" />, // Makine öğrenmesi için alternatif ikon
  },
  {
    name: "Matplotlib",
    icon: <FontAwesomeIcon icon={faChartBar} className="text-green-500" />, // Grafik kütüphanesi için alternatif ikon
  },
  {
    name: "Seaborn",
    icon: <FontAwesomeIcon icon={faChartBar} className="text-teal-500" />, // Görselleştirme için alternatif ikon
  },
];

const Skills = () => {
  const {t} = useTranslation();
  return (
    <div className="w-full flex flex-col gap-8">
      <h1 className="text-[24px] lg:text-[32px] font-semibold text-blue-600">
        {t("What Is My Skills?")}
      </h1>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-[24px] lg:text-[32px] bg-green-500 w-fit px-4 py-2 rounded-xl text-white font-bold">
          Front-end
        </h1>
        <div className="pt-12 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-[32px] sm:text-[40px] lg:text-[60px]">
          {FrontSkills.map((skill, index) => (
            <div
              className="w-full pb-12 flex gap-4 items-center hover:scale-104 transform duration-400"
              key={index}
            >
              {skill.icon}
              <p className="text-[18px] sm:text-[20px] font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-[24px] lg:text-[32px] bg-blue-500 w-fit px-4 py-2 rounded-xl text-white font-bold">
          Data Science
        </h1>
        <div className="pt-12 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-[32px] sm:text-[40px] lg:text-[60px]">
          {DataScienceSkills.map((skill, index) => (
            <div
              className="w-full pb-12 flex gap-4 items-center hover:scale-102 transform duration-400"
              key={index}
            >
              {skill.icon}
              <p className="text-[18px] sm:text-[20px] font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
