import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SubMenu from "./SubMenu";

const SidebarMenuItem = ({ to, label, submenuItems }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer font-normal text-[16px] p-3 hover:text-[#001C4E] hover:bg-[#001C4E1F]"
        onClick={toggleSubmenu}
      >
        {submenuItems ? (
          <>
            <span className="flex-grow">{label}</span>
            {isSubmenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="rotate-180"
              >
                <path fill="black" d="m7 10l5 5l5-5z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path fill="black" d="m7 10l5 5l5-5z" />
              </svg>
            )}
          </>
        ) : (
          <NavLink
            to={to}
            className="flex-grow"
            activeClassName="active-sidebarmenu"
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
