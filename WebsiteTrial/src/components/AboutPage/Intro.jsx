import React from "react";
import Personal_photo_Cropped from "../../assets/Personal_photo_Cropped.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const contacts = [
  {
    address: "https://www.linkedin.com/in/osman-g%C3%BCnd%C3%BCz-2084a521b/",
    icon: <FontAwesomeIcon icon={faLinkedin} className="text-[20px] md:text-[25px] " />,
    text: "Follow on linkedin",
    action: (address) => window.open(address, "_blank"),
  },
  {
    address: "https://github.com/OsmanGndz",
    icon: <FontAwesomeIcon icon={faGithub} className="text-[20px] md:text-[25px]" />,
    text: "Follow on Github",
    action: (address) => window.open(address, "_blank"),
  },
  {
    address: "osmangunduz517@gmail.com",
    icon: <FontAwesomeIcon icon={faEnvelope} className="text-[20px] md:text-[25px]" />,
    text: "Send an email to me",
    action: (address) => (window.location.href = `mailto:${address}`),
  },
];
const Intro = () => {
  return (
    <div className="w-full flex flex-row">
      <div className="w-[55%] flex flex-col gap-12 text-[18px] text-gray-700 pr-12">
        <h1 className="text-[35px] font-bold text-black">
          Ben <span className="bg-amber-300 px-2">Osman Gündüz.</span>
        </h1>
        <p>
          Merhaba, ben Osman. Yazılımın sınırsız dünyasına adım attığımda, bu
          alanın benim için doğru yer olduğunu hissettim ve büyük bir tutkuyla
          öğrenme yolculuğuma başladım. Teknolojiye olan ilgim, beni sürekli
          yeni şeyler keşfetmeye ve kendimi geliştirmeye motive ediyor.
        </p>
        <p>
          Şu ana kadar çeşitli yazılım alanlarını deneyimleme fırsatı buldum ve
          en çok web geliştirme beni heyecanlandırdı. Kullanıcı dostu, modern ve
          performanslı web uygulamaları geliştirmek benim için büyük bir tutku
          haline geldi.
        </p>
        <p>
          Şu an front-end odaklı olarak React, Tailwind CSS ve TypeScript gibi
          teknolojilerle projeler geliştiriyorum. Bunun yanı sıra, backend
          tarafında da kendimi geliştirmek için Python ve Node.js gibi
          teknolojilere yöneliyorum.
        </p>
        <p>
          Amacım, kullanıcı deneyimini ön planda tutarak etkileyici ve verimli
          web uygulamaları geliştirmek. Sürekli öğrenmeye ve kendimi her geçen
          gün daha da ileri taşımaya devam ediyorum.
        </p>
      </div>
      <div className="w-[45%] pt-12 flex flex-col gap-12">
        <div className="w-full flex justify-end">
          <img
            src={Personal_photo_Cropped}
            alt="Personal_photo_Cropped"
            className="w-[70%] object-cover rounded-[35px] rotate-4 shadow-md shadow-gray-500"
          />
        </div>
        <div className="w-full px-20 flex flex-col gap-4 items-center font-semibold text-gray-800">
          {contacts.map((contact, index)=>(
            <div key={index} className="w-full flex gap-4 items-center cursor-pointer hover:text-blue-500"
            onClick={() => contact.action(contact.address)}>
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
