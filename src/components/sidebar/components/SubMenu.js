import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ items, isOpen }) => {
  const location = useLocation();

  return (
    <div className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
      {items.map((item, index) => {
        const isActive = location.pathname === item.to;

        return (
          <NavLink
            key={index}
            to={item.to}
            className={`flex items-center cursor-pointer font-semibold text-[14px] p-2.5 hover:text-[#001C4E] hover:bg-[#001C4E1F] ${
              isActive ? "active-sidebarmenu" : ""
            }`}
          >
            {item.label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default SubMenu;
