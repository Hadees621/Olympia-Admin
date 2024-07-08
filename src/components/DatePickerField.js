import React from "react";

const DatePickerField = ({ placeholder, ...props }) => {
  return (
    <div className="flex-grow">
      <input
        type="date"
        placeholder="Select date"
        className="shadow appearance-none bg-[#F7F7F7] rounded w-full p-2.5 text-gray-700 leading-tight focus:outline-none"
        {...props}
      />
    </div>
  );
};

export default DatePickerField;
