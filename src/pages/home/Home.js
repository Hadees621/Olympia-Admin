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

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];

  const placeholders = ["All", "All", "Select Genre", "All Countries"];

  return (
    <div className="w-full text-start items-center ">
      <p className="text-3xl font-semibold mt-16 ml-8">
        Welcome to Olympia Portal (olympia admin)
      </p>

      <div className="flex items-center mt-16 gap-3 ml-5 pr-10">
        <SearchField placeholder="Book Title" />
        <SearchField placeholder="Pen name/Author name" />
        <Button title="Search" text="text-[12px]" />
        <Button title="Clear" text="text-[12px]" />
        <Button title="Add New Record" text="text-[12px]" />
        <Button title="ISBN Search" text="text-[12px]" />
      </div>

      <div className="flex gap-2 justify-start mt-6 items-center ml-5 w-full pr-10">
        {placeholders.map((placeholder, index) => (
          <SelectField
            key={index}
            placeholder={placeholder}
            value={selectedValues[index]}
            onChange={(e) => handleSelectChange(index, e)}
            options={options}
          />
        ))}
        <Button title="Filter" text="text-[12px]" />
        <Button title="Clear" text="text-[12px]" />
      </div>

      <Table />
    </div>
  );
};

export default Home;
