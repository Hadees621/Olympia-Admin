import React from "react";
import { Link } from "react-router-dom";

const TableButton = ({ title, text, bg = "bg-[#001C4E1F]", onClick, href }) => {
  const textClass = text;
  const backgroundColor = bg;
  return (
    <Link to={href}>
      <button
        onClick={onClick}
        className={`${backgroundColor} ${textClass} border rounded-md text-[#001C4E] font-bold px-4 py-2 text-[10px]`}
      >
        {title}
      </button>
    </Link>
  );
};

export default TableButton;
