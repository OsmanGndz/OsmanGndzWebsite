import React from "react";
import DataSetAnalysis from "../../assets/Project/DataSetAnalysis.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faChartBar, faTable } from "@fortawesome/free-solid-svg-icons";

const technologies = [
  {
    name: "Python",
    icon: <FontAwesomeIcon icon={faPython} className="text-yellow-500" />,
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
    name: "Matplotlib",
    icon: <FontAwesomeIcon icon={faChartBar} className="text-green-500" />, // Grafik kütüphanesi için alternatif ikon
  },
  {
    name: "Seaborn",
    icon: <FontAwesomeIcon icon={faChartBar} className="text-teal-500" />, // Görselleştirme için alternatif ikon
  },
];
const DataSet = () => {
  return (
    <div>
      <div className="w-full flex flex-col gap-12 text-[18px] text-gray-700">
        <h1 className="font-bold text-[24px] md:text-[30px] w-fit bg-orange-500 text-white px-4 py-2 rounded-xl">
          Analaysing Dataset
        </h1>
        <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:hidden">
          <img
            src={DataSetAnalysis}
            alt="DataSetAnalysis"
            className="w-full rounded-xl shadow-md"
          />
          <a
            href="https://github.com/OsmanGndz/Murders_of_Woman_Data_Set_Analys"
            className="text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Analysing Dataset Repository
          </a>
        </div>
        <div className="w-full flex flex-row gap-8">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <p>
              Bu GitHub reposu, dünya genelinde kadın cinayetlerinin analizine
              yönelik bir projeyi içermektedir. Proje, kadın cinayetlerine
              ilişkin verilerin toplandığı bir veri setini kullanarak çeşitli
              analizler yapmayı amaçlamaktadır. Veri seti, farklı ülkelerdeki
              kadın cinayetleriyle ilgili sayısal veriler ve bu cinayetlerin
              nedenleri hakkında derinlemesine bilgiler sunmaktadır.
            </p>
          </div>
          <div className="w-1/2 hidden lg:flex flex-col gap-8">
            <img
              src={DataSetAnalysis}
              alt="DataSetAnalysis"
              className="w-full rounded-xl shadow-md"
            />
            <a
              href="https://github.com/OsmanGndz/Murders_of_Woman_Data_Set_Analys"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Analysing Dataset Repository
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col gap-12">
          <h1 className="bg-blue-500 w-fit text-white px-4 py-2 text-[20px] md:text-[28px] font-semibold rounded-xl">
            Tools
          </h1>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-[32px] sm:text-[40px] lg:text-[60px]">
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

export default DataSet;
