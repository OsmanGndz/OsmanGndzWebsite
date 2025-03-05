import React from "react";
import AlanyaKebabImg from "../../assets/Project/AlanyaKebabImg.png";

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
    name: "TypeScript",
    icon: <FontAwesomeIcon icon={faCode} className="text-blue-500" />,
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
const AlanyaKebab = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-12 text-[18px] text-gray-700">
        <h1 className="font-bold text-[24px] md:text-[30px] w-fit bg-orange-500 text-white px-4 py-2 rounded-xl">
          Alanya Kebab Website
        </h1>
        <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:hidden">
            <img
              src={AlanyaKebabImg}
              alt="Alanya Kebab Website"
              className="w-full rounded-xl"
            />
            <a
              href="https://www.alanyakebab.com/"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              alanyakebab.com
            </a>
          </div>
        <div className="w-full flex flex-row gap-8">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <p>
              Alanya Kebab web sitesi, restoranın menüsünü, sunduğu hizmetleri
              ve iletişim bilgilerini tanıtmak amacıyla tasarlanmış modern bir
              platformdur. Kullanıcı dostu arayüzü sayesinde ziyaretçiler,
              restoran hakkında detaylı bilgi edinebilir, online sipariş
              verebilir veya rezervasyon yaparak keyifli bir yemek deneyimi
              planlayabilirler.
            </p>
            <p>
              Ayrıca, yönetici yetkisine sahip kullanıcılar için özel bir{" "}
              <strong>admin paneli</strong> bulunmaktadır. Bu panel aracılığıyla
              menü güncellemeleri yapılabilir, siparişler yönetilebilir ve
              müşteri geri bildirimleri takip edilebilir.
            </p>
            <p>
              <strong>Mobil uyumlu</strong> ve minimalist bir tasarıma sahip
              olan site, her cihazda sorunsuz bir deneyim sunmak üzere
              geliştirilmiştir. Daha fazla bilgi almak veya detayları keşfetmek
              için siteyi ziyaret edebilirsin!
            </p>
          </div>
          <div className="w-1/2 hidden lg:flex flex-col gap-8">
            <img
              src={AlanyaKebabImg}
              alt="Alanya Kebab Website"
              className="w-full rounded-xl"
            />
            <a
              href="https://www.alanyakebab.com/"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              alanyakebab.com
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col gap-12">
          <h1 className="bg-green-500 w-fit text-white px-4 py-2 text-[20px] md:text-[28px] font-semibold rounded-xl">
            Front end part
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

export default AlanyaKebab;
