import React, { useState } from "react";
import Button from "components/Button";
import SelectField from "components/SelectField";
import SearchField from "../home/components/SearchField";
import Pagination from "components/Pagination";
import Table from "./components/Table";

const Archive = () => {
  const [selectedValues, setSelectedValues] = useState(["", ""]);

  const handleSelectChange = (index, e) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = e.target.value;
    setSelectedValues(newSelectedValues);
  };

  const placeholders = ["Please Select Author", "Select Book"];
  return (
    <div className="w-full">
      <p className="text-3xl font-semibold mt-8 ml-6">
        Welcome to Olympia Portal (olympia admin)
      </p>

      <div className="mt-3 w-full m-6 font-semibold text-lg">
        <p>Total Records Found: 0</p>
        <p className="text-green-600">Fully paid: 113</p>
        <p className="text-red-600">Over due: 137</p>
        <p className="text-orange-600">Remaining: 10</p>
      </div>

      <div className="flex gap-2 justify-start mt-8 items-center w-full px-6">
        <p className="text-md font-semibold text-gray-500">Pen Name:</p>
        {placeholders.map((placeholder, index) => (
          <SelectField
            key={index}
            placeholder={placeholder}
            value={selectedValues[index]}
            onChange={(e) => handleSelectChange(index, e)}
          />
        ))}
        <Button title="Clear" />
      </div>
      <div className="flex items-center mt-3 gap-3 px-6">
        <SelectField placeholder={"All"} />
        <SearchField placeholder="Book Title" />
        <SearchField placeholder="Pen name/Author name" />
        <Button title="Search" />
        <Button title="Clear" />
        <Button title="Add New Record" bg="bg-green-500" hover="hover:bg-green-600" text={"text-white"} />
        <Button title="ISBN Search" href="/isbn-search" />
      </div>

      <Pagination num={12} />

      <Table />
    </div>
  );
};

export default Archive;
