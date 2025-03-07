import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en";
import tr from "./tr";

const resources = {
  en: { translation: en },
  tr: { translation: tr },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: localStorage.getItem("language") || "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
