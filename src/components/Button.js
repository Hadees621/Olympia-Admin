import React from "react";

const Button = ({ title, text, bg = "bg-[#001C4E1F]" }) => {
  const textClass = text;
  const backgroundColor = bg;
  return (
    <button
      className={` ${backgroundColor} ${textClass} rounded-md text-[#001C4E] font-bold px-8 py-2 text-[12px]`}
    >
      {title}
    </button>
  );
};

export default Button;
