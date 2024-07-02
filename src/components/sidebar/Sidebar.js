import React from "react";
import SidebarMenuItem from "./components/SidebarMenuItem";
import { menuItems } from "./utils/utils";
import Logo from "../Logo";
import LogoutButton from "./components/LogoutButton";

const Sidebar = () => {
  return (
    <div className="w-[20%]">
      <div className="bg-[#EEEEEE] shadow text-[11px] rounded-b-2xl grid p-3">
        <Logo />
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
          <button
            className={`border bg-[#001C4E1F] rounded-3xl text-[#001C4E] font-bold px-8 py-2 m-2 text-[11px]`}
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
