import React from "react";

const SearchField = ({ placeholder, ...props }) => {
  return (
    <div className="flex-grow">
      <input
        type="text"
        placeholder={placeholder}
        className="shadow appearance-none bg-[#F7F7F7] rounded w-full p-2.5 text-gray-700 leading-tight focus:outline-none"
        {...props}
      />
    </div>
  );
};

export default SearchField;
