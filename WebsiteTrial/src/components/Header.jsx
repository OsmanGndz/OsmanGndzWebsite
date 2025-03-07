import {
  faAddressCard,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faCaretUp,
  faCircleArrowLeft,
  faCircleArrowRight,
  faDumbbell,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import tr_flag from "../assets/Flags/tr_flag.png";
import uk_flag from "../assets/Flags/uk_flag.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const useClickOutside = (ref, state, setState) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setState(false);
        }
      };

      if (state) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }

      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [state, ref, setState]);
  };
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const location = useLocation();
  const sidebarRef = useRef(null);
  useClickOutside(sidebarRef, menuOpen, setMenuOpen);
  const currentPath = location.pathname.split("/").pop();
  const [lang, setLang] = useState(
    localStorage.getItem("language") === "en"
      ? "English"
      : "Türkçe" || "English"
  );
  const [langIcon, setLangIcon] = useState(
    localStorage.getItem("language") === "en" ? uk_flag : tr_flag || uk_flag
  );
  const [languageToggle, setLanguageToggle] = useState(false);
  const { t, i18n } = useTranslation();
  const desktopLangRef = useRef(null);
  useClickOutside(desktopLangRef, languageToggle, setLanguageToggle);
  const mobileLangRef = useRef(null);
  const [mobileLanguageToggle, setMobileLanguageToggle] = useState(false);
  useClickOutside(mobileLangRef, mobileLanguageToggle, setMobileLanguageToggle);

  const headerTabs = [
    {
      title: t("Home"),
      name: "Home",
      link: "/home",
      picture: <FontAwesomeIcon icon={faHouse} className="" />,
    },
    {
      title: t("About"),
      name: "About",
      link: "/about",
      picture: <FontAwesomeIcon icon={faAddressCard} className="" />,
    },
    {
      title: t("Projects"),
      name: "Projects",
      link: "/projects",
      picture: <FontAwesomeIcon icon={faDumbbell} className="" />,
    },
  ];

  const languages = [
    { name: "English", code: "en", icon: uk_flag },
    { name: "Türkçe", code: "tr", icon: tr_flag },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  useEffect(() => {
    setSelectedMenu(capitalizeFirstLetter(currentPath));
  }, [currentPath]);


  const capitalizeFirstLetter = (str) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleMenuSelection = (link, menu) => {
    navigate(link);
    setSelectedMenu(menu);
    setMenuOpen(false);
  };

  return (
    <div className="w-full flex flex-row justify-between items-center relative">
      {menuOpen && (
        <div className="fixed sm:hidden inset-0 z-20 bg-blue-400/20 bg-opacity-30 backdrop-blur-md transition-opacity duration-500" />
      )}
      {/* Logo */}
      <div className="cursor-pointer w-full" onClick={() => navigate("/home")}>
        <h1 className="text-blue-500 font-bold text-[28px]">
          Osman
          <span className="text-blue-400 font-semibold">Gndz</span>
        </h1>
      </div>

      {/* Desktop Menü */}
      <div className="w-full hidden sm:flex flex-row gap-8 md:gap-12 lg:gap-20 font-semibold text-[16px]">
        {headerTabs.map((tab, index) => (
          <div
            key={index}
            className={`w-full min-w-[88px] cursor-pointer hover:text-blue-500 transition ${
              tab.name === selectedMenu ? "text-blue-500" : ""
            }`}
            onClick={() => navigate(tab.link)}
          >
            {tab.title}
          </div>
        ))}
        <div
          ref={desktopLangRef}
          className="cursor-pointer relative w-full min-w-[50px] flex justify-end"
          onClick={() => setLanguageToggle(!languageToggle)}
        >
          <h1 className="flex flex-row items-center gap-2">
            <img src={langIcon} alt="flag" className="w-6" />
            {!languageToggle ? (
              <FontAwesomeIcon icon={faCaretDown} />
            ) : (
              <FontAwesomeIcon icon={faCaretUp} />
            )}
          </h1>
          {languageToggle && (
            <div className="absolute top-11 right-0 w-32 border border-gray-300 bg-white flex flex-col gap-2 p-2 rounded-md shadow-md z-10">
              {languages.map((language, i) => (
                <div
                  key={i}
                  className={`w-full flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer ${
                    lang === language.name ? "bg-blue-200 rounded-md" : ""
                  }`}
                  onClick={() => {
                    setLang(language.name);
                    setLangIcon(language.icon);
                    setLanguageToggle(false);
                    changeLanguage(language.code);
                  }}
                >
                  <img
                    src={language.icon}
                    alt={language.name}
                    className="w-6"
                  />
                  <p>{language.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menü Açma Butonu */}
      <div className="flex sm:hidden">
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          className="text-2xl cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
      </div>

      {/* Mobile Sidebar Menü */}
      <div
        ref={sidebarRef} // Sidebar'a referans ekledik
        className={`fixed z-20 sm:hidden top-0 right-0 bg-white shadow-md shadow-blue-600 w-[70%] h-screen flex flex-col transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Kapatma Butonu */}
        <div className="w-full bg-blue-200 px-4 h-16 items-center flex justify-between">
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="text-2xl text-black cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
          <h1 className="text-blue-500 font-bold text-[24px]">
            Osman
            <span className="text-blue-400 font-semibold">Gndz</span>
          </h1>
        </div>

        {/* Menü Listesi */}
        <div className="flex flex-col w-full h-full">
          <div className="w-full flex flex-col text-[18px] font-semibold">
            {headerTabs.map((tab, index) => (
              <div
                key={index}
                className={`cursor-pointer flex flex-row items-center gap-4 px-4 py-4 ${
                  selectedMenu === tab.name ? "bg-blue-300" : ""
                }`}
                onClick={() => handleMenuSelection(tab.link, tab.name)}
              >
                {tab.picture}
                {tab.title}
              </div>
            ))}
          </div>
          <div className="w-full border-t-1 p-6 flex flex-row mt-auto mb-8">
            <div
              ref={mobileLangRef}
              className="cursor-pointer relative w-full min-w-[50px] flex"
              onClick={() => setMobileLanguageToggle(!mobileLanguageToggle)}
            >
              <h1 className="flex flex-row items-center gap-2">
                {!mobileLanguageToggle ? (
                  <FontAwesomeIcon icon={faCaretUp} />
                ) : (
                  <FontAwesomeIcon icon={faCaretDown} />
                )}
                <img src={langIcon} alt="flag" className="w-6" />
              </h1>
              {mobileLanguageToggle && (
                <div className="absolute bottom-12 right-20 w-32 border border-gray-300 bg-white flex flex-col gap-2 p-2 rounded-md shadow-md z-10">
                  {languages.map((language, i) => (
                    <div
                      key={i}
                      className={`w-full flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer ${
                        lang === language.name ? "bg-blue-200 rounded-md" : ""
                      }`}
                      onClick={() => {
                        setLang(language.name);
                        setLangIcon(language.icon);
                        setMobileLanguageToggle(false);
                        changeLanguage(language.code);
                      }}
                    >
                      <img
                        src={language.icon}
                        alt={language.name}
                        className="w-6"
                      />
                      <p>{language.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
