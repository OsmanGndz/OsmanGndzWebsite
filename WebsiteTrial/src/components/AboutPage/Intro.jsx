import React from "react";
import Personal_photo_Cropped from "../../assets/Personal_photo_Cropped.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();

  const contacts = [
    {
      address: "https://www.linkedin.com/in/osman-g%C3%BCnd%C3%BCz-2084a521b/",
      icon: (
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-[20px] md:text-[25px] "
        />
      ),
      text: t("Follow on linkedin"),
      action: (address) => window.open(address, "_blank"),
    },
    {
      address: "https://github.com/OsmanGndz",
      icon: (
        <FontAwesomeIcon
          icon={faGithub}
          className="text-[20px] md:text-[25px]"
        />
      ),
      text: t("Follow on Github"),
      action: (address) => window.open(address, "_blank"),
    },
    {
      address: "osmangunduz517@gmail.com",
      icon: (
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-[20px] md:text-[25px]"
        />
      ),
      text: t("Send an email to me"),
      action: (address) => (window.location.href = `mailto:${address}`),
    },
  ];
  return (
    <div className="w-full flex flex-row">
      <div className="w-full sm:w-[55%] flex flex-col gap-12 text-[18px] text-gray-700 pr-0 lg:pr-12">
        <div className="w-full flex justify-center sm:hidden">
          <img
            src={Personal_photo_Cropped}
            alt="Personal_photo_Cropped"
            className="w-[60%] object-cover rounded-[35px] rotate-4 shadow-md shadow-gray-500"
          />
        </div>
        <h1 className="text-[30px] lg:text-[35px] font-bold text-black">
          {t("I Am")} <span className="bg-amber-300 px-2">Osman Gündüz.</span>
        </h1>
        <p>{t("AboutPart1")}</p>
        <p>{t("AboutPart2")}</p>
        <p>
        <p>{t("AboutPart3")}</p>
        </p>
        <p>
        <p>{t("AboutPart4")}</p>
        </p>
      </div>
      <div className="w-[45%] pt-12 flex-col gap-12 hidden sm:flex">
        <div className="w-full flex justify-end">
          <img
            src={Personal_photo_Cropped}
            alt="Personal_photo_Cropped"
            className="w-[70%] object-cover rounded-[35px] rotate-4 shadow-md shadow-gray-500"
          />
        </div>
        <div className="w-full px-20 flex flex-col gap-4 items-center font-semibold text-gray-800">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="w-full flex gap-4 items-center cursor-pointer hover:text-blue-500"
              onClick={() => contact.action(contact.address)}
            >
              {contact.icon}
              <p>{contact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
