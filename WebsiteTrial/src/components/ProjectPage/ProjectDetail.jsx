import React from "react";
import { useParams } from "react-router-dom";

import AlanyaKebab from "../../assets/AlanyaKebab.png";
import OsmanGndz from "../../assets/OsmanGndzWebsite.png";

import {
  faJs,
  faReact,
  faGithub,
  faGit,
  faFontAwesome,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projects = [
  {
    id: "alanyakebab",
    title: "Alanya Kebab Website",
    picture: AlanyaKebab,
    description:
      "Alanya Kebab web sitesi, restoranın menüsünü, hizmetlerini ve iletişim bilgilerini tanıtmak için hazırlanmış bir platformdur. Kullanıcı dostu bir arayüze sahip olan site, müşterilere restoran hakkında bilgi verirken aynı zamanda online sipariş veya rezervasyon imkanı da sunabilir.",
    link: "https://www.alanyakebab.com/",
    technologies: [
      {
        name: "JavaScript",
        icon: (
          <FontAwesomeIcon icon={faJs} className="text-yellow-500" />
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <FontAwesomeIcon icon={faCode} className="text-blue-500" />
        ),
      },
      {
        name: "React",
        icon: (
          <FontAwesomeIcon icon={faReact} className="text-cyan-500" />
        ),
      },
      {
        name: "Tailwind CSS",
        icon: (
          <FontAwesomeIcon icon={faCode} className="text-teal-500" />
        ),
      },
      {
        name: "FontAwesome",
        icon: (
          <FontAwesomeIcon
            icon={faFontAwesome}
            className="text-gray-500"
          />
        ),
      },
      {
        name: "GitHub",
        icon: (
          <FontAwesomeIcon icon={faGithub} className="text-black" />
        ),
      },
      {
        name: "Git",
        icon: (
          <FontAwesomeIcon icon={faGit} className="text-red-500" />
        ),
      },
    ],
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  return (
    <div>
      {id === "alanyakebab" && (
        <div className="w-full flex flex-col gap-12 text-[18px] text-gray-700">
          <h1 className="font-bold text-[30px] w-fit bg-orange-500 text-white px-4 py-2 rounded-xl">
            {projects[0].title}
          </h1>
          <div className="w-full flex flex-row gap-8">
            <div className="w-1/2 flex flex-col gap-8">
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
                <strong>admin paneli</strong> bulunmaktadır. Bu panel
                aracılığıyla menü güncellemeleri yapılabilir, siparişler
                yönetilebilir ve müşteri geri bildirimleri takip edilebilir.
              </p>
              <p>
                <strong>Mobil uyumlu</strong> ve minimalist bir tasarıma sahip
                olan site, her cihazda sorunsuz bir deneyim sunmak üzere
                geliştirilmiştir. Daha fazla bilgi almak veya detayları
                keşfetmek için siteyi ziyaret edebilirsin!
              </p>
            </div>
            <div className="w-1/2 flex flex-col gap-8">
              <img
                src={projects[0].picture}
                alt={projects[0].title}
                className="w-full rounded-xl"
              />
              <a
                href={projects[0].link}
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                {projects[0].link}
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col gap-12">
            <h1 className="bg-green-500 w-fit text-white px-4 py-2 text-[28px] font-semibold rounded-xl">
              Front end part
            </h1>
            <div className="w-full grid grid-cols-4 text-[60px]">
              {projects[0].technologies.map((tech, index) => (
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
      )}
    </div>
  );
};

export default ProjectDetail;
