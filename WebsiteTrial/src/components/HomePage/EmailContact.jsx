import React, { useState } from "react";
import ManThinking from "../../assets/ManThinking.png";

const EmailContact = () => {
  const [formData, setFormData] = useState({
    name_surname: "",
    mail: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name_surname: "",
      mail: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full text-center">
        <h1 className="text-[32px] font-bold">
          <span className="bg-gray-500 text-white px-4 py-2 rounded-xl">
            Text to
          </span>{" "}
          me
        </h1>
      </div>
      <div className="w-full grid grid-cols-2 pt-8">
        <form
          onSubmit={sendEmail}
          className="w-[90%] pr-8 pt-8 flex flex-col gap-4"
        >
          <h1 className="w-full text-[32px] font-semibold pb-8 text-blue-400">
            Do you need anything?
          </h1>
          <input
            type="text"
            value={formData.name_surname}
            onChange={(e) =>
              setFormData({ ...formData, name_surname: e.target.value })
            }
            className="w-full h-14 border-1 border-gray-500 rounded-md px-4 hover:border-blue-500 focus:border-blue-400 focus:border-2 outline-none"
            placeholder="Name-Surname"
          />
          <input
            type="text"
            value={formData.mail}
            onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
            className="w-full h-14 border-1 border-gray-500 rounded-md px-4 hover:border-blue-500 focus:border-blue-400 focus:border-2 outline-none"
            placeholder="E-mail"
          />
          <textarea
            type="text"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full h-32 border-1 border-gray-500 rounded-md px-4 pt-2 hover:border-blue-500 focus:border-blue-400 focus:border-2 outline-none"
            placeholder="Message"
          />
          <button
            type="submit"
            className="flex justify-end bg-blue-500 w-fit ml-auto px-8 py-2 text-white rounded-md text-[20px] font-semibold text-center cursor-pointer"
          >
            Send
          </button>
        </form>
        <div className="w-full">
          <img src={ManThinking} alt="ManThinking" className="w-[90%]"/>
        </div>
      </div>
    </div>
  );
};

export default EmailContact;
