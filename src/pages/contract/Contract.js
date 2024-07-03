import React, { useState } from "react";
import SearchField from "../home/components/SearchField";
import Button from "../../components/Button";
import SelectField from "../../components/SelectField";
import Plus from "../../utils/icons/Plus";

const Contract = () => {
  const [selectedValues, setSelectedValues] = useState(["", ""]);

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

  const placeholders = ["Please Select Author", "Select Book"];

  return (
    <div className="w-full text-start items-center">
      <p className="text-3xl font-semibold mt-8 ml-8">
        Welcome to Olympia Portal (olympia admin)
      </p>

      <div className="flex items-center mt-8 gap-3 ml-5 pr-10">
        <SearchField placeholder="Book Title" />
        <SearchField placeholder="Pen name/Author name" />
        <Button title="Search" text="text-[12px]" />
        <Button title="Clear" text="text-[12px]" />
        <Button title="ISBN Search" text="text-[12px]" />
      </div>

      <div className="flex gap-2 justify-start mt-3 items-center ml-5 w-full pr-10">
        <p className="text-md font-semibold text-gray-500">Pen Name:</p>
        {placeholders.map((placeholder, index) => (
          <SelectField
            key={index}
            placeholder={placeholder}
            value={selectedValues[index]}
            onChange={(e) => handleSelectChange(index, e)}
            options={options}
          />
        ))}
        <Button title="Search" text="text-[12px]" />
        <Button title="Normal view" text="text-[12px]" />
        <Button title="Edit" text="text-[12px]" />
        <Button title="Contract Accounts" text="text-[12px]" />
        <Button title="Author Data Sheet" text="text-[12px]" />
      </div>

      <div className="shadow mt-4 bg-[#F7F7F7] p-2 flex justify-between m-4 items-center px-4">
        <p className="text-md font-semibold text-gray-500">
          Aine By Yugtha YJ <span className="text-black"> Book No. </span> 1
        </p>

        <p className="text-md font-normal text-gray-500">Remaindered</p>

        <Plus classes={"w-16 h-16"} />
      </div>
    </div>
  );
};

export default Contract;
