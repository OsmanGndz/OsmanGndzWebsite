import React from "react";
import IntroPhoto from "../../assets/MyPictureCartoon.jpg";
import IntroPhotoBG from "../../assets/MyPictureCartoonWithoutBG.png";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-row h-full md:h-[380px] lg:h-full xl:h-[380px]">
      <div className="w-full md:w-1/2 hidden sm:flex flex-col gap-4 lg:gap-6">
        <h1 className="text-[20px] lg:text-[28px] font-semibold text-white bg-green-600 w-fit px-4 py-2 rounded-xl">
          Hello There!
        </h1>
        <h1 className="text-[20px] lg:text-[28px] font-semibold ">
          I Am{" "}
          <span className="text-white bg-blue-600 px-4 py-2 rounded-xl">
            Osman Gündüz.
          </span>
        </h1>
        <h1 className="font-semibold text-[20px] lg:text-[28px] pt-2">
          A Passionate{" "}
          <span className="text-white bg-stone-600 px-4 py-2 rounded-xl">
            Computer Engineer
          </span>
        </h1>
        <p className="text-gray-600 font-semibold pr-20 pt-8 text-[16px]">
          I am a dedicated computer engineer with a passion for building
          efficient and scalable applications. I enjoy solving complex problems,
          exploring new technologies, and continuously improving my skills.
        </p>
        <div
          className="bg-blue-500 w-fit px-4 py-2 rounded-md text-white cursor-pointer hover:scale-103 transform duration-500"
          onClick={() => navigate("/about")}
        >
          For more about me
        </div>
      </div>
      <div className="w-full flex sm:hidden flex-col gap-6">
        <h1 className="text-[20px] lg:text-[28px] font-semibold ">
          <span className="text-white bg-green-600 w-fit px-4 py-2 rounded-xl mr-2">
            Hello There!
          </span>
          I Am{" "}
        </h1>
        <h1 className="text-[20px] lg:text-[28px] font-semibold ">
          <span className="text-white bg-blue-600 px-4 py-2 rounded-xl mr-2">
            Osman Gündüz.
          </span>
          A Passionate{" "}
        </h1>
        <h1 className="font-semibold text-[20px] lg:text-[28px]">
          <span className="text-white bg-stone-600 px-4 py-2 rounded-xl">
            Computer Engineer
          </span>
        </h1>
        <p className="text-gray-600 font-semibold pr-0 md:pr-20 pt-8 text-[16px]">
          I am a dedicated computer engineer with a passion for building
          efficient and scalable applications. I enjoy solving complex problems,
          exploring new technologies, and continuously improving my skills.
        </p>
        <div
          className="bg-blue-500 w-fit px-4 py-2 rounded-md text-white cursor-pointer hover:scale-103 transform duration-500"
          onClick={() => navigate("/about")}
        >
          For more about me
        </div>
      </div>
      <div className="hidden md:block md:w-1/2">
        <img
          src={IntroPhotoBG}
          alt="IntoPoto"
          className="w-full h-full object-cover object-top rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Intro;
