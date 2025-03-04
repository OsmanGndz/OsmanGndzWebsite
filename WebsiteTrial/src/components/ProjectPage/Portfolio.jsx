import React from "react";
import OsmanGndzWebsite from "../../assets/OsmanGndzWebsite.png";

import {
  faJs,
  faReact,
  faGithub,
  faGit,
  faFontAwesome,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const technologies = [
  {
    name: "JavaScript",
    icon: <FontAwesomeIcon icon={faJs} className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <FontAwesomeIcon icon={faReact} className="text-cyan-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <FontAwesomeIcon icon={faCode} className="text-teal-500" />,
  },
  {
    name: "FontAwesome",
    icon: <FontAwesomeIcon icon={faFontAwesome} className="text-gray-500" />,
  },
  {
    name: "GitHub",
    icon: <FontAwesomeIcon icon={faGithub} className="text-black" />,
  },
  {
    name: "Git",
    icon: <FontAwesomeIcon icon={faGit} className="text-red-500" />,
  },
];
const Portfolio = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-12 text-[18px] text-gray-700">
        <h1 className="font-bold text-[30px] w-fit bg-blue-500 text-white px-4 py-2 rounded-xl">
          Osman Gündüz Portfolyo Web Sitesi
        </h1>
        <div className="w-full flex flex-row gap-8">
          <div className="w-1/2 flex flex-col gap-8">
            <p>
              Osman Gündüz'ün kişisel web sitesi, yazılım alanındaki
              yeteneklerini, projelerini ve deneyimlerini sergilemek için
              geliştirilmiş modern bir platformdur. Kullanıcı dostu arayüzü
              sayesinde ziyaretçiler, Osman'ın yazılım yolculuğu hakkında bilgi
              edinebilir, portföyündeki projeleri keşfedebilir ve iletişim
              kurabilirler.
            </p>
            <p>
              Ayrıca, web sitesi, her cihazda sorunsuz bir deneyim sunacak
              şekilde <strong>mobil uyumlu</strong> ve minimalist bir tasarıma
              sahiptir. Kullanıcıların siteye erişimini kolaylaştıran düzeni ve
              net yapısı ile estetik bir görsel deneyim sağlar.
            </p>
            <p>
              Osman Gündüz Portföy Web Sitesi, yazılım geliştiricinin
              projelerini ve profesyonel geçmişini sergileyen bir vitrin olarak
              işlev görmektedir. Hem kişisel hem de işbirliği fırsatları için
              etkili bir araç sunmaktadır.
            </p>
          </div>
          <div className="w-1/2 flex flex-col gap-8">
            <img
              src={OsmanGndzWebsite}
              alt="OsmanGndzWebsite"
              className="w-full rounded-xl"
            />
            <a
              href="https://osmangndz.github.io/OsmanGndzWebsite/"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://osmangndz.github.io/OsmanGndzWebsite/
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col gap-12">
          <h1 className="bg-green-500 w-fit text-white px-4 py-2 text-[28px] font-semibold rounded-xl">
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

export default Portfolio;
