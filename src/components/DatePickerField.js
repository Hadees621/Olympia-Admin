import React from "react";

const DatePickerField = ({ placeholder, name, value, onChange, ...props }) => {
  return (
    <div className="flex-grow">
      <input
        name={name}
        value={value}
        onChange={onChange}
        type="date"
        placeholder={placeholder || "Select date"}
        className="shadow appearance-none bg-[#F7F7F7] rounded w-full p-2.5 text-gray-700 leading-tight focus:outline-none"
        {...props}
      />
    </div>
  );
};

export default DatePickerField;
