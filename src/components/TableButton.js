import React from "react";
import { Link } from "react-router-dom";

const TableButton = ({ title, text, bg = "bg-[#001C4E1F]", hover = "hover:bg-gray-300", onClick, href }) => {
  const textClass = text;
  const backgroundColor = bg;
  return (
    <Link to={href}>
      <button
        onClick={onClick}
        className={`${backgroundColor} ${hover} ${textClass} rounded-md text-[#001C4E] font-bold px-4 py-2 text-[10px]`}
      >
        {title}
      </button>
    </Link>
  );
};

export default TableButton;
