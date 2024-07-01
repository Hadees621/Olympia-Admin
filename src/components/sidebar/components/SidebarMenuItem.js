import React from "react";

const SidebarMenuItem = ({ href, label }) => {
  return (
    <a
      href={href}
      className="cursor-pointer flex font-normal text-[13px] items-center gap-3 p-2 hover:text-[#001C4E] hover:bg-[#001C4E1F] rounded"
    >
      <svg
        width="7"
        height="7"
        viewBox="0 0 5 5"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.5 0 L5 2.5 L2.5 5 L0 2.5 Z" />
      </svg>

      <div>{label}</div>
    </a>
  );
};

export default SidebarMenuItem;
