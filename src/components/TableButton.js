import React from "react";

const TableButton = ({ title, text, bg = "bg-[#001C4E1F]", onClick }) => {
  const textClass = text;
  const backgroundColor = bg;
  return (
    <button
      onClick={onClick}
      className={`${backgroundColor} ${textClass} border rounded-md text-[#001C4E] font-bold px-4 py-2 text-[10px]`}
    >
      {title}
    </button>
  );
};

export default TableButton;
