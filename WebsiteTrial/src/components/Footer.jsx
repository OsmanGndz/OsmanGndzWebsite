import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";

const contacts = [
  {
    address: "osmangunduz517@gmail.com",
    icon: <FontAwesomeIcon icon={faEnvelope} className="text-[25px]" />,
    action: (address) => window.location.href = `mailto:${address}`, 
  },
  {
    address: "https://www.linkedin.com/in/osman-g%C3%BCnd%C3%BCz-2084a521b/",
    icon: <FontAwesomeIcon icon={faLinkedin} className="text-[25px] " />,
    action: (address) => window.open(address, "_blank"), 
  },
  {
    address: "https://github.com/OsmanGndz",
    icon: <FontAwesomeIcon icon={faGithub} className="text-[25px]" />,
    action: (address) => window.open(address, "_blank"), 
  },
];

const Footer = () => {
  const {t} = useTranslation();
  return (
    <div className="w-full flex flex-col">
      <div className="text-[18px] w-full flex flex-row">
        <div className="w-full">
          <h1 className="text-blue-500 font-bold text-[28px]">
            Osman
            <span className="text-blue-400 font-semibold">Gndz</span>
          </h1>
          <h1 className="text-gray-600 font-semibold">{t("Computer Engineer")}</h1>
        </div>
        <div className="w-full flex justify-end flex-row gap-8 pt-8">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => contact.action(contact.address)}  // Tıklama olayında yönlendirme
            >
              {contact.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-gray-500 pt-4">
        <p>
          &copy; 2025. Made by{" "}
          <span className="font-semibold text-blue-500">Osman</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
