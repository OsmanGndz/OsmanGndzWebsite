import React from "react";
import plot from "../../assets/Project/plot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCuttlefish, faPython } from "@fortawesome/free-brands-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const technologies = [
  {
    name: "Python",
    icon: <FontAwesomeIcon icon={faPython} className="text-green-500" />,
  },
  {
    name: "Matplotlib Library",
    icon: <FontAwesomeIcon icon={faChartLine} className="text-red-500" />,
  },
  {
    name: "C# (Form Application)",
    icon: <FontAwesomeIcon icon={faCuttlefish} className="text-blue-500" />,
  },
];

const PlotDraw = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="w-full flex flex-col gap-12 text-[18px] text-gray-700 dark:text-zinc-300">
        <h1 className="font-bold text-[24px] md:text-[30px] w-fit bg-green-500 dark:bg-green-800 text-white px-4 py-2 rounded-xl">
          {t("Drawing Plot By Using C# and Python")}
        </h1>
        <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:hidden">
          <img src={plot} alt="plot" className="w-full rounded-xl" />
          <a
            href="https://github.com/OsmanGndz/Draw-Plot"
            className="text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Draw Plot Repository
          </a>
        </div>
        <div className="w-full flex flex-row gap-8">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <p>
              {t("PlotDescription1")}
            </p>
          </div>
          <div className="w-1/2 hidden lg:flex flex-col gap-8">
            <img src={plot} alt="plot" className="w-full rounded-xl" />
            <a
              href="https://github.com/OsmanGndz/Draw-Plot"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Draw Plot Repository
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col gap-12">
          <h1 className="bg-blue-500 dark:bg-blue-800 w-fit text-white px-4 py-2 text-[20px] md:text-[28px] font-semibold rounded-xl">
            {t("Tools")}
          </h1>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-[32px] sm:text-[40px] lg:text-[60px] text-black dark:text-zinc-100">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="w-full pb-12 flex gap-4 items-center hover:scale-104 transform duration-400"
              >
                {tech.icon}
                <p className="text-[18px] sm:text-[20px]">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlotDraw;
