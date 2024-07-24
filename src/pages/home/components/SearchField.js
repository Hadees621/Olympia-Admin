import React from "react";

const SearchField = ({
  placeholder,
  background = "bg-[#F7F7F7]",
  name, value, onChange,
  ...props
}) => {
  return (
    <div className="flex-grow">
      <input
        type="text"
        placeholder={placeholder}
        className={`${background} shadow appearance-none rounded w-full p-2.5 text-gray-700 leading-tight focus:outline-none`}
        {...props}
      />
    </div>
  );
};

export default SearchField;
