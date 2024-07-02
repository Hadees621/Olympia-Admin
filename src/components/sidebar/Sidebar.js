import React from "react";
import SidebarMenuItem from "./components/SidebarMenuItem";
import { menuItems } from "./utils/utils";
import Logo from "../Logo";
import LogoutButton from "./components/LogoutButton";

const Sidebar = () => {
  return (
    <div className="w-[22%]">
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
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
