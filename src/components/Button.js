import React from "react";

const Button = ({ title, text }) => {
  const textClass = text;
  return (
    <button
      className={` bg-[#001C4E1F] rounded-md ${textClass} text-[#001C4E] font-bold px-8 py-2`}
    >
      {title}
    </button>
  );
};

export default Button;
