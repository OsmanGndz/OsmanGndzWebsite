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
        ref={sidebarRef}
        className={`fixed z-20 sm:hidden top-0 right-0 bg-white shadow-md shadow-blue-600 w-[70%] h-[100dvh] flex flex-col transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Kapatma Butonu */}
        <div className="w-full bg-blue-200 px-4 h-16 items-center flex justify-between shrink-0">
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
        <div className="flex flex-col w-full min-h-0 flex-1">
          <div className="flex-1 overflow-y-auto">
            <div className="w-full flex flex-col text-[18px] font-semibold">
              {headerTabs.map((tab, index) => (
                <div
                  key={index}
                  className={`cursor-pointer flex flex-row items-center gap-4 p-4 ${
                    selectedMenu === tab.name ? "bg-blue-300" : ""
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
          <div className="w-full border-t border-gray-200 bg-gray-50 p-4 shrink-0">
            <div
              ref={mobileLangRef}
              className="cursor-pointer relative w-full flex justify-center"
              onClick={() => setMobileLanguageToggle(!mobileLanguageToggle)}
            >
              <div
                ref={langButtonRef}
                className="flex flex-row items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-sm"
              >
                <img src={langIcon} alt="flag" className="w-6" />
                <p className="font-medium">{lang}</p>
                {!mobileLanguageToggle ? (
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className="text-gray-500"
                  />
                ) : (
                  <FontAwesomeIcon icon={faCaretUp} className="text-gray-500" />
                )}
              </div>
              {mobileLanguageToggle && (
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-40 border border-gray-200 bg-white flex flex-col gap-1 p-2 rounded-lg shadow-lg z-30">
                  {languages.map((language, i) => (
                    <div
                      key={i}
                      className={`w-full flex items-center gap-3 p-2.5 hover:bg-gray-50 cursor-pointer rounded-md transition-colors ${
                        lang === language.name ? "bg-blue-50 text-blue-600" : ""
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
