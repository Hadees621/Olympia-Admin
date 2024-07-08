import React, { useState } from "react";
import SearchField from "./components/SearchField";
import Button from "../../components/Button";
import SelectField from "../../components/SelectField";
import Table from "./components/Table";
const Home = () => {
  const [selectedValues, setSelectedValues] = useState(["", "", "", ""]);

  const handleSelectChange = (index, e) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = e.target.value;
    setSelectedValues(newSelectedValues);
  };

  const placeholders = ["All", "All", "All Countries", "Select Genre"];

  return (
    <div className="w-full text-start items-center">
      <p className="text-3xl font-semibold mt-8 ml-8">
        Welcome to Olympia Portal (olympia admin)
      </p>

      <div className="flex items-center mt-8 gap-3 ml-5 pr-10">
        <SearchField placeholder="Book Title" />
        <SearchField placeholder="Pen name/Author name" />
        <Button title="Search" />
        <Button title="Clear" />
        <Button title="Add New Record" />
        <Button title="ISBN Search" />
      </div>

      <div className="flex gap-2 justify-start mt-3 items-center ml-5 w-full pr-10">
        {placeholders.map((placeholder, index) => (
          <SelectField
            key={index}
            placeholder={placeholder}
            value={selectedValues[index]}
            onChange={(e) => handleSelectChange(index, e)}
            
          />
        ))}
        <Button title="Filter" />
        <Button title="Clear" />
      </div>

      <Table />
    </div>
  );
};

export default Home;
