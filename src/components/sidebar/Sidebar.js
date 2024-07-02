import React from "react";
import SidebarMenuItem from "./components/SidebarMenuItem";
import { menuItems } from "./utils/utils";
import Logo from "../Logo";
import LogoutButton from "./components/LogoutButton";
import Button from "../Button";

const Sidebar = () => {
  return (
    <div className="w-[20%]">
      <div className="bg-[#EEEEEE] shadow text-xl rounded-b-2xl grid p-3">
        <Logo />
        {menuItems.map((item, index) => (
          <SidebarMenuItem
            key={index}
            to={item.to}
            label={item.label}
            submenuItems={item.submenuItems}
          />
        ))}
        <div className="mt-4 grid">
          <button
            className={`border bg-[#001C4E1F] rounded-3xl text-[#001C4E] font-bold px-8 py-2 m-2`}
          >
            ISBN Search
          </button>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
