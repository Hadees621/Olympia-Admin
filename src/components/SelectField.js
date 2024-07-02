import React from "react";
import Dropdown from "../icons/Dropdown";

const SelectField = ({
  placeholder,
  value,
  onChange,
  width = "100%",
  options = [],
  ...props
}) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="shadow appearance-none border bg-[#F7F7F7] rounded w-full p-2.5 text-gray-400 leading-tight focus:outline-none"
        style={{ width }}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
        <Dropdown />
      </div>
    </div>
  );
};

export default SelectField;
