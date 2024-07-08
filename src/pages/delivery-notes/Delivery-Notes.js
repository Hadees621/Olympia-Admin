import React, { useState } from "react";
import Button from "components/Button";
import SelectField from "components/SelectField";
import SearchField from "pages/home/components/SearchField";
import Remaindered from "../editorial/components/Remaindered";
import DatePickerField from "components/DatePickerField";

const DeliveryNotes = () => {
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
    <div className="w-full text-start items-center m-4">
      {/* header */}
      <>
        <p className="text-3xl font-semibold mt-8 ml-8">
          Welcome to Olympia Portal (olympia admin)
        </p>
        <div className="flex items-center mt-8 gap-3">
          <SearchField placeholder="Reference" />
          <SelectField placeholder={"Select Author"} options={options} />
          <DatePickerField />
          <Button title="Search" />
          <Button title="ISBN Search" />
        </div>

        <div className="flex items-center mt-3 gap-3">
          <SearchField placeholder="Reference" />
          <SelectField placeholder={"Select Author"} options={options} />
          <DatePickerField />
          <SelectField placeholder={"DN"} options={options} />
          <Button title="Add" bg="bg-green-600 text-white" />
        </div>
      </>

      <Remaindered />
    </div>
  );
};

export default DeliveryNotes;
