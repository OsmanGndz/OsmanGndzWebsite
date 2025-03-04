import React from "react";
import plot from "../../assets/plot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCuttlefish, faPython } from "@fortawesome/free-brands-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

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
  return (
    <div>
      <div className="w-full flex flex-col gap-12 text-[18px] text-gray-700">
        <h1 className="font-bold text-[30px] w-fit bg-green-500 text-white px-4 py-2 rounded-xl">
          Drawing Plot By Using C# and Python
        </h1>
        <div className="w-full flex flex-row gap-8">
          <div className="w-1/2 flex flex-col gap-8">
            <p>
              Draw-Plot GitHub reposu, kullanıcıların veri görselleştirmesi
              yapabilmesi için geliştirilen bir projedir. Bu repo, özellikle
              grafik çizimleri ve veri analizi yapmak isteyenler için kullanıcı
              dostu bir arayüz sunar. Kullanıcılar, belirli parametreler girerek
              verilerini grafikler üzerinde görselleştirebilirler. Proje, farklı
              veri türlerini kullanarak çizilen grafiklerin hızlı ve etkili bir
              şekilde oluşturulmasını sağlar.
            </p>
          </div>
          <div className="w-1/2 flex flex-col gap-8">
            <img src={plot} alt="plot" className="w-full rounded-xl" />
            <a
              href="https://github.com/OsmanGndz/Draw-Plot"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/OsmanGndz/Draw-Plot
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col gap-12">
          <h1 className="bg-blue-500 w-fit text-white px-4 py-2 text-[28px] font-semibold rounded-xl">
            Tools
          </h1>
          <div className="w-full grid grid-cols-4 text-[60px]">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="w-full pb-12 flex gap-4 items-center hover:scale-104 transform duration-400"
              >
                {tech.icon}
                <p className="text-[20px]">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlotDraw;
