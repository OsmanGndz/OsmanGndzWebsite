import React, { useState } from "react";
import ManThinking from "../../assets/ManThinking.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const contacts = [
  {
    address: "osmangunduz517@gmail.com",
    icon: <FontAwesomeIcon icon={faEnvelope} className="text-[30px]" />,
    text: "Send an email to me",
    action: (address) => (window.location.href = `mailto:${address}`),
  },
  {
    address: "https://www.linkedin.com/in/osman-g%C3%BCnd%C3%BCz-2084a521b/",
    icon: <FontAwesomeIcon icon={faLinkedin} className="text-[30px] " />,
    text: "Send a message with linkedin",
    action: (address) => window.open(address, "_blank"),
  },
  {
    address: "https://github.com/OsmanGndz",
    icon: <FontAwesomeIcon icon={faGithub} className="text-[30px]" />,
    text: "Contact with Github",
    action: (address) => window.open(address, "_blank"),
  },
];

const EmailContact = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full text-center">
        <h1 className="text-[32px] font-bold">
          <span className="bg-gray-500 text-white px-4 py-2 rounded-xl">
            Contact
          </span>{" "}
          with me
        </h1>
      </div>
      <div className="w-full grid grid-cols-2 pt-8 gap-8">
        <div className="w-full">
          <h1 className="w-full text-[32px] font-semibold pb-8 text-blue-400">
            Do you need anything?
          </h1>
          <div className="w-full flex flex-col gap-8 text-[24px] font-semibold">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="cursor-pointer flex items-center gap-8 hover:text-blue-400"
                onClick={() => contact.action(contact.address)} // Tıklama olayında yönlendirme
              >
                {contact.icon}
                {contact.text}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[80%]">
          <img src={ManThinking} alt="ManThinking" className="w-[90%]" />
        </div>
      </div>
    </div>
  );
};

export default EmailContact;
