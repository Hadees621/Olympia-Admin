import React from "react";
import Dropdown from "../utils/icons/Dropdown";

const SelectField = ({
  placeholder,
  value,
  onChange,
  options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ],
  width = "w-full",
  name,
  ...props
}) => {
  return (
    <div className="relative flex-grow">
      <select
        value={value}
        onChange={onChange}
        className={` ${width} shadow appearance-none bg-[#F7F7F7] rounded w-full p-2.5 text-gray-400 leading-tight focus:outline-none`}
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
