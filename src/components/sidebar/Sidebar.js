import React from "react";
import SidebarMenuItem from "./components/SidebarMenuItem";
import { menuItems } from "./utils/utils";
import Logo from "../Logo";
import LogoutButton from "./components/LogoutButton";

const Sidebar = () => {
  return (
    <div className="w-[18%]">
      <div className="bg-[#EEEEEE] shadow text-xl rounded-b-2xl grid p-3">
        <Logo />
        {menuItems.map((item, index) => (
          <SidebarMenuItem key={index} href={item.href} label={item.label} />
        ))}
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
