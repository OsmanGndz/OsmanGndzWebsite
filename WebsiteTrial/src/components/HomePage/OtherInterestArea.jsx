import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
} from "@fortawesome/free-solid-svg-icons"; // TypeScript için
import { useTranslation } from "react-i18next";
const Interests = [
  {
    name: "Front-End Developer",
    technologies: [
      {
        name: "HTML",
        icon: <FontAwesomeIcon icon={faHtml5} className="text-orange-500 " />,
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
        icon: (
          <FontAwesomeIcon icon={faBootstrap} className="text-purple-600 " />
        ),
      },
      {
        name: "TypeScript",
        icon: <FontAwesomeIcon icon={faCode} className="text-blue-600 " />, // TypeScript için uygun ikon yok, alternatif olarak `faCode` kullandım
      },
    ],
    picture:
      "https://www.alastyr.com/blog/wp-content/uploads/2021/09/front-end-developer-.jpg",
  },
  {
    name: "Data Scientist",
    technologies: [
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
        icon: (
          <FontAwesomeIcon icon={faChartLine} className="text-orange-500" />
        ), // Makine öğrenmesi için alternatif ikon
      },
      {
        name: "Matplotlib",
        icon: <FontAwesomeIcon icon={faChartBar} className="text-green-500" />, // Grafik kütüphanesi için alternatif ikon
      },
      {
        name: "Seaborn",
        icon: <FontAwesomeIcon icon={faChartBar} className="text-teal-500" />, // Görselleştirme için alternatif ikon
      },
    ],
    picture:
      "https://freedesignfile.com/upload/2019/09/Data-analysis-cartoon-illustration-vector.jpg",
  },
];
const OtherInterestArea = () => {
  const {t} = useTranslation();
  return (
    <div className="w-full flex flex-col items-center px-0 2xl:px-40 text-black dark:text-zinc-100">
      <h1 className="text-[24px] lg:text-[32px] font-bold flex flex-col sm:flex-none sm:flex-row items-center ">
        <span className="bg-green-600 dark:bg-green-800 px-4 py-2 text-white rounded-xl">
          {t("My Interesets")}
        </span>{" "}
        <p className="ml-0 sm:ml-2">{t("in Software")}</p>
      </h1>
      <div className="w-full pt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {Interests.map((interest, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md shadow-gray-500 dark:shadow-gray-600 max-w-full hover:scale-102 transition duration-500"
          >
            <div className="w-full">
              <img
                src={interest.picture}
                alt="Frontend Picture"
                className="rounded-t-xl h-52 w-full object-cover"
              />
            </div>
            <div className="w-full py-2 flex flex-col bg-white dark:bg-neutral-800">
              <h1 className="font-semibold text-[24px] text-center w-full pb-2">
                {interest.name}
              </h1>
              <hr className="text-gray-300" />
              <div className="w-full px-4 sm:px-8 py-4">
                <ul className="w-full grid grid-cols-2 text-[17px] font-semibold gap-1">
                  {interest.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="w-full flex flex-row items-center"
                    >
                      <div className="w-8">{tech.icon}</div>
                      <h1>{tech.name}</h1>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherInterestArea;
