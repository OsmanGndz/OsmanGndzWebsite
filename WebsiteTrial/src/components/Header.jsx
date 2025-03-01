import {
  faAddressCard,
  faCircleArrowLeft,
  faCircleArrowRight,
  faDumbbell,
  faHouse,
  faSatelliteDish,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const headerTabs = [
  {
    title: "Home",
    link: "/home",
    picture: <FontAwesomeIcon icon={faHouse} className="" />,
  },
  {
    title: "About",
    link: "/about",
    picture: <FontAwesomeIcon icon={faAddressCard} className="" />,
  },
  {
    title: "Projects",
    link: "/projects",
    picture: <FontAwesomeIcon icon={faDumbbell} className="" />,
  },
  {
    title: "Contact",
    link: "/contact",
    picture: <FontAwesomeIcon icon={faSatelliteDish} className="" />,
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const location = useLocation();
  const sidebarRef = useRef(null);
  const currentPath = location.pathname.split("/").pop();

  useEffect(() => {
    setSelectedMenu(capitalizeFirstLetter(currentPath));
  }, [currentPath]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

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
        <div className="fixed sm:hidden inset-0 bg-blue-400/20 bg-opacity-30 backdrop-blur-md transition-opacity duration-500" />
      )}
      {/* Logo */}
      <div className="cursor-pointer" onClick={() => navigate("/home")}>
        <h1 className="text-blue-500 font-bold text-[28px]">
          Osman
          <span className="text-blue-400 font-semibold">Gndz</span>
        </h1>
      </div>

      {/* Desktop Menü */}
      <div className="hidden sm:flex flex-row gap-8 md:gap-12 lg:gap-20 font-semibold text-[16px]">
        {headerTabs.map((tab, index) => (
          <div
            key={index}
            className="cursor-pointer hover:text-blue-500 transition"
            onClick={() => navigate(tab.link)}
          >
            {tab.title}
          </div>
        ))}
        <div className="cursor-pointer">En</div>
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
        className={`fixed sm:hidden top-0 right-0 bg-white shadow-md shadow-blue-600 w-[70%] h-screen flex flex-col transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Kapatma Butonu */}
        <div className="w-full bg-blue-300 px-4 h-16 items-center flex">
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="text-2xl text-black cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Menü Listesi */}
        <div className="w-full flex flex-col text-[18px] font-semibold">
          {headerTabs.map((tab, index) => (
            <div
              key={index}
              className={`cursor-pointer flex flex-row items-center gap-4 px-4 py-4 ${
                selectedMenu === tab.title ? "bg-blue-100" : ""
              }`}
              onClick={() => handleMenuSelection(tab.link, tab.title)}
            >
              {tab.picture}
              {tab.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
