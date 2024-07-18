import React from "react";

const Button = ({ title, text, bg = "bg-[#001C4E1F]" , onClick }) => {
  const textClass = text;
  const backgroundColor = bg;
  return (
    <button onClick={onClick}
      className={` ${backgroundColor} ${textClass} rounded-md text-[#001C4E] font-bold px-8 py-2 text-[12px]`}
    >
      {title}
    </button>
  );
};

export default Button;
