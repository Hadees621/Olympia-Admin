import React from "react";
import Logo from "../Logo";
import { menuItems } from "./utils/utils";
import useSidebarStore from "stores/States";
import LogoutButton from "./components/LogoutButton";
import SidebarMenuItem from "./components/SidebarMenuItem";
import Hamburger from "utils/icons/Hamburger";
import CloseCross from "utils/icons/CloseCross";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <div
      className={`transition-all duration-300 ${isOpen ? "w-[25%]" : "w-[4%]"}`}
    >
      <div
        className={`bg-[#EEEEEE] shadow rounded-b-2xl grid ${isOpen ? "py-1 px-2" : "h-full"
          } transition-all duration-300`}
      >
        <div className="flex order border-blac">
          {isOpen ? (
            <Logo />
          ) : (
            <div className="cursor-pointer w-full justify-center flex p-2" onClick={toggleSidebar}>
              <Hamburger />
            </div>
          )}
          <div className="mt-4">
            <button
              onClick={toggleSidebar}
              className={`focus:outline-none cursor-pointer ${isOpen ? "" : "hidden"
                }`}
            >
              <CloseCross />
            </button>
          </div>
        </div>
        {isOpen && (
          <>
            <div className="px-1">
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
