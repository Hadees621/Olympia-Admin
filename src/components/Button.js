import React from "react";

const Button = ({ title, text, bg = "bg-[#001C4E1F]", href = "#", onClick, width, type, hover = "hover:bg-gray-300", download }) => {
  const textClass = text;
  const backgroundColor = bg;

  return (
    <a
      href={href}
      download={download ? true : undefined}
      onClick={onClick}
      className={`${backgroundColor} ${hover} ${textClass} ${width} rounded-md text-[#001C4E] font-bold px-8 py-2 text-[12px]`}
    >
      {title}
    </a>
  );
};

export default Button;
