import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-black dark:text-zinc-100">
      <h1 className="text-[24px] font-semibold text-blue-700 dark:text-blue-500">
        404
      </h1>
      <h1 className="text-[60px] font-bold">{t("Page not found")}</h1>
      <p className="text-[20px] font-semibold text-gray-600 dark:text-zinc-400 py-4">
        {t("Sorry, we could not find the page you are looking for.")}
      </p>
      <button
        className="bg-blue-600 dark:bg-blue-800 py-2 px-4 rounded-xl text-white font-semibold cursor-pointer"
        onClick={() => {
          navigate("/home");
        }}
      >
        {t("Go back home")}
      </button>
    </div>
  );
};

export default NotFound;
