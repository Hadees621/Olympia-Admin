import React from "react";

const SearchField = ({ placeholder, width = "100%", ...props }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="shadow appearance-none border bg-[#F7F7F7] rounded w-full p-2.5 text-gray-700 leading-tight focus:outline-none"
        style={{ width }}
        {...props}
      />
    </div>
  );
};

export default SearchField;
