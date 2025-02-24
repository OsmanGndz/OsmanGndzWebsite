import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const headerTabs = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-row justify-between items-center">
      <div className="cursor-pointer" onClick={() => navigate("/home")}>
        <h1 className="text-blue-500 font-bold text-[28px]">
          Osman
          <span className="text-blue-400 font-semibold">Gndz</span>
        </h1>
      </div>
      <div className="flex flex-row gap-20 font-semibold text-[16px]">
        {headerTabs.map((tab, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => navigate(tab.link)}
          >
            {tab.title}
          </div>
        ))}
        <div className="cursor-pointer">En</div>
      </div>
    </div>
  );
};

export default Header;
