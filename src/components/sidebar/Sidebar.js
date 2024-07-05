import React, { useState } from "react";
import SidebarMenuItem from "./components/SidebarMenuItem";
import { menuItems } from "./utils/utils";
import Logo from "../Logo";
import LogoutButton from "./components/LogoutButton";
import Plus from "../../utils/icons/Plus";
import Minus from "../../utils/icons/Minus";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`transition-all duration-300 ${isOpen ? "w-[22%]" : "w-[4%]"}`}
    >
      <div
        className={`bg-[#EEEEEE] shadow text-[11px] rounded-b-2xl grid ${
          isOpen ? "p-3" : "p-1"
        } transition-all duration-300`}
      >
        <div className="flex items-center justify-between">
          {isOpen ? (
            <Logo />
          ) : (
            <div className="cursor-pointer" onClick={toggleSidebar}>
              <Plus />
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className={`focus:outline-none cursor-pointer ${
              isOpen ? "" : "hidden"
            }`}
          >
            <Minus />
          </button>
        </div>
        {isOpen && (
          <>
            <div className="mt-5">
              {menuItems.map((item, index) => (
                <SidebarMenuItem
                  key={index}
                  to={item.to}
                  label={item.label}
                  submenuItems={item.submenuItems}
                />
              ))}
            </div>
            <div className="mt-4 grid">
              <LogoutButton />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
