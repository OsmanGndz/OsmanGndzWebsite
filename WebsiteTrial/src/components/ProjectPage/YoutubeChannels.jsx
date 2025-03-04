import React from "react";
import channel from "../../assets/channel.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const technologies = [
  {
    name: "JavaScript",
    icon: <FontAwesomeIcon icon={faJs} className="text-yellow-500" />,
  },
  {
    name: "Bootstrap",
    icon: <FontAwesomeIcon icon={faBootstrap} className="text-purple-600" />,
  },
  {
    name: "CSS",
    icon: <FontAwesomeIcon icon={faCode} className="text-blue-500" />,
  },
  {
    name: "D3.js",
    icon: <FontAwesomeIcon icon={faCode} className="text-green-500" />,
  },
];

const YoutubeChannels = () => {
  return (
    <div>
      <div className="w-full flex flex-col gap-12 text-[18px] text-gray-700">
        <h1 className="font-bold text-[30px] w-fit bg-orange-500 text-white px-4 py-2 rounded-xl">
          The Famous Youtube Channels
        </h1>
        <div className="w-full flex flex-row gap-8">
          <div className="w-1/2 flex flex-col gap-8">
            <p>
              Bu GitHub reposu, dünyanın en ünlü YouTube kanallarına dair
              çeşitli verilerin toplandığı bir projeyi içermektedir. Proje,
              popüler YouTube kanallarının izlenme sayıları, abone sayıları,
              içerik türleri ve diğer önemli metrikleri analiz ederek YouTube
              platformundaki trendleri anlamayı amaçlamaktadır.
            </p>
          </div>
          <div className="w-1/2 flex flex-col gap-8">
            <img src={channel} alt="channel" className="w-full rounded-xl" />
            <a
              href="https://github.com/OsmanGndz/The-Famous-Youtube-Channels"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/OsmanGndz/The-Famous-Youtube-Channels
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

export default YoutubeChannels;
