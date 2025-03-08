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
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import tr_flag from "../assets/Flags/tr_flag.png";
import uk_flag from "../assets/Flags/uk_flag.png";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

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
  const [menuPosition, setMenuPosition] = useState("bottom");
  const location = useLocation();
  const sidebarRef = useRef(null);
  const langButtonRef = useRef(null);
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
  const { theme, setTheme } = useTheme();

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

  useEffect(() => {
    const disableScroll = (e) => {
      e.preventDefault();
    };

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", disableScroll, { passive: false });
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("touchmove", disableScroll);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("touchmove", disableScroll);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleMenuPosition = () => {
      if (langButtonRef.current) {
        const buttonRect = langButtonRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const spaceBelow = windowHeight - buttonRect.bottom;

        // If space below is less than 200px, show menu above
        setMenuPosition(spaceBelow < 200 ? "top" : "bottom");
      }
    };

    if (mobileLanguageToggle) {
      handleMenuPosition();
      window.addEventListener("scroll", handleMenuPosition);
      window.addEventListener("resize", handleMenuPosition);
    }

    return () => {
      window.removeEventListener("scroll", handleMenuPosition);
      window.removeEventListener("resize", handleMenuPosition);
    };
  }, [mobileLanguageToggle]);

  return (
    <div className="w-full flex flex-row justify-between items-center relative">
      {menuOpen && (
        <div className="fixed sm:hidden inset-0 z-20 bg-blue-400/20 dark:bg-blue-900/20 bg-opacity-30 backdrop-blur-md transition-opacity duration-500" />
      )}
      {/* Logo */}
      <div className="cursor-pointer w-full" onClick={() => navigate("/home")}>
        <h1 className="text-blue-500 dark:text-blue-400 font-bold text-[28px]">
          Osman
          <span className="text-blue-400 dark:text-blue-200 font-semibold">
            Gndz
          </span>
        </h1>
      </div>

      {/* Desktop Menü */}
      <div className="w-full hidden sm:flex flex-row gap-4 md:gap-12 lg:gap-20 font-semibold text-[16px] items-center">
        {headerTabs.map((tab, index) => (
          <div
            key={index}
            className={`w-full min-w-[88px] cursor-pointer  hover:text-blue-500 dark:hover:text-blue-400 transition ${
              tab.name === selectedMenu
                ? "text-blue-500 dark:text-blue-400"
                : "text-black dark:text-zinc-100"
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
          <h1 className="flex flex-row items-center gap-2 text-black dark:text-zinc-100">
            <img src={langIcon} alt="flag" className="w-6" />
            {!languageToggle ? (
              <FontAwesomeIcon icon={faCaretDown} />
            ) : (
              <FontAwesomeIcon icon={faCaretUp} />
            )}
          </h1>
          {languageToggle && (
            <div className="absolute top-11 right-0 w-32 border border-gray-300 dark:border-gray-600 bg-white dark:bg-blue-900 flex flex-col gap-2 p-2 rounded-md shadow-md z-10">
              {languages.map((language, i) => (
                <div
                  key={i}
                  className={`w-full flex items-center gap-2 p-2 text-black dark:text-zinc-100 hover:bg-gray-100 hover:dark:bg-blue-500 hover:rounded-md cursor-pointer ${
                    lang === language.name
                      ? "bg-blue-200 dark:bg-blue-500 rounded-md"
                      : ""
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
        <div
          onClick={() => {
            theme === "light" ? setTheme("dark") : setTheme("light");
          }}
          className="text-[24px] cursor-pointer"
        >
          {theme === "light" ? (
            <FontAwesomeIcon icon={faMoon} className="text-blue-800" />
          ) : (
            <FontAwesomeIcon icon={faSun} className="text-amber-600" />
          )}
        </div>
      </div>

      {/* Mobile Menü Açma Butonu */}
      <div className="flex sm:hidden">
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          className="text-2xl cursor-pointer text-black dark:text-zinc-100"
          onClick={() => setMenuOpen(true)}
        />
      </div>

      {/* Mobile Sidebar Menü */}
      <div
        ref={sidebarRef}
        className={`fixed z-20 sm:hidden top-0 right-0 bg-white shadow-md shadow-blue-600 dark:shadow-blue-300 w-[70%] h-[100dvh] flex flex-col transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Kapatma Butonu */}
        <div className="w-full bg-blue-200 dark:bg-blue-950 px-4 h-20 items-center flex justify-between shrink-0">
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="text-2xl text-black dark:text-zinc-100 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
          <h1 className="text-blue-500 dark:text-blue-400 font-bold text-[24px]">
            Osman
            <span className="text-blue-400 dark:text-blue-200 font-semibold">
              Gndz
            </span>
          </h1>
        </div>

        {/* Menü Listesi */}
        <div className="flex flex-col w-full min-h-0 flex-1 bg-white dark:bg-blue-900">
          <div className="flex-1 overflow-y-auto">
            <div className="w-full flex flex-col text-[18px] font-semibold">
              {headerTabs.map((tab, index) => (
                <div
                  key={index}
                  className={`cursor-pointer text-black dark:text-zinc-100 flex flex-row items-center gap-4 p-4 ${
                    selectedMenu === tab.name
                      ? "bg-blue-300 dark:bg-blue-500"
                      : ""
                  }`}
                  onClick={() => handleMenuSelection(tab.link, tab.name)}
                >
                  {tab.picture}
                  {tab.title}
                </div>
              ))}
            </div>
          </div>

          {/* Dil Seçici - Sabit Alt Kısım */}
          <div className="w-full border-t border-gray-200 dark:border-gray-400 p-4 shrink-0 flex flex-col gap-4">
            <div
              ref={mobileLangRef}
              className="cursor-pointer relative w-full flex"
              onClick={() => setMobileLanguageToggle(!mobileLanguageToggle)}
            >
              <div
                ref={langButtonRef}
                className="flex flex-row items-center gap-3 bg-white dark:bg-blue-700 px-4 py-2 rounded-lg shadow-sm dark:shadow-blue-600"
              >
                <img src={langIcon} alt="flag" className="w-6" />
                <p className="font-medium text-black dark:text-zinc-100">
                  {lang}
                </p>
                {!mobileLanguageToggle ? (
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    className="text-gray-600 dark:text-zinc-100"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className="text-gray-600 dark:text-zinc-100"
                  />
                )}
              </div>
              {mobileLanguageToggle && (
                <div className="absolute bottom-full mb-2 left-[40%] -translate-x-1/2 w-40 border border-gray-200 dark:border-gray-600 bg-white dark:bg-blue-900 flex flex-col gap-1 p-2 rounded-lg shadow-lg z-30">
                  {languages.map((language, i) => (
                    <div
                      key={i}
                      className={`w-full flex items-center text-black dark:text-zinc-100 gap-3 p-2.5 cursor-pointer rounded-md transition-colors ${
                        lang === language.name
                          ? "bg-blue-200 dark:bg-blue-500"
                          : ""
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
                      <p className="font-medium">{language.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div
              onClick={() => {
                theme === "light" ? setTheme("dark") : setTheme("light");
              }}
              className=" cursor-pointer flex items-center w-full gap-3 px-2"
            >
              {theme === "light" ? (
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faMoon} className="text-blue-800 text-[24px]" />
                  <p className="text-black dark:text-white">Dark Theme</p>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faSun} className="text-amber-600 text-[24px]" />
                  <p className="text-black dark:text-white">Light Theme</p>
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
