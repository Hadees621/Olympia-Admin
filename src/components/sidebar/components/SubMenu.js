import React from "react";
import { NavLink } from "react-router-dom";

const SubMenu = ({ items, isOpen }) => {
  return (
    <div className={`ml-4 ${isOpen ? "block" : "hidden"}`}>
      {items.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          className="flex items-center cursor-pointer font-normal text-[14px] p-2.5 hover:text-[#001C4E] hover:bg-[#001C4E1F]"
          activeClassName="active-sidebarmenu"
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default SubMenu;
