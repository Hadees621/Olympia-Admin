import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SubMenu from "./SubMenu";
import SidebarDropdown from "../../../utils/icons/SidebarDropdown";

const SidebarMenuItem = ({ to, label, submenuItems }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const location = useLocation();

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const isActive = location.pathname === to || submenuItems?.some((item) => location.pathname === item.to);

  return (
    <div>
      <div
        className={`flex items-center justify-between cursor-pointer font-semibold text-[14px] p-2.5 hover:text-[#001C4E] hover:bg-[#001C4E1F] ${
          isActive ? "text-[#001C4E] bg-[#001C4E1F]" : ""
        }`}
        onClick={submenuItems ? toggleSubmenu : null}
      >
        {submenuItems ? (
          <>
            <span className="flex-grow">{label}</span>
            <SidebarDropdown classes={isSubmenuOpen ? "rotate-180" : ""} />
          </>
        ) : (
          <NavLink
            to={to}
            className={`flex-grow ${isActive ? "text-[#001C4E]" : ""}`}
          >
            {label}
          </NavLink>
        )}
      </div>
      {submenuItems && <SubMenu items={submenuItems} isOpen={isSubmenuOpen} />}
    </div>
  );
};

export default SidebarMenuItem;

