import React, { useState } from "react";
import Plus from "utils/icons/Plus";
import Button from "components/Button";
import NoteCard from "./components/NoteCard";
import { contactDetails } from "./utils/utils";
import SelectField from "components/SelectField";
import { authorInfo } from "../contract/utils/utils";
import SearchField from "pages/home/components/SearchField";
import { ContactInformation } from "components/ContactInformation.";
import { InformationSection } from "components/InformationSection";

const Author = () => {
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
      {/* header */}
      <>
        <p className="text-3xl font-semibold mt-8 ml-8">
          Welcome to Olympia Portal (olympia admin)
        </p>
        <div className="flex items-center mt-8 gap-3 m-4">
          <SearchField placeholder="Book Title" />
          <SearchField placeholder="Pen name/Author name" />
          <Button title="Search" />
          <Button title="Clear" />
          <Button title="ISBN Search" />
        </div>
        <div className="flex gap-2 justify-start mt-3 items-center w-full px-4">
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
          <Button title="Clear" />
          <Button title="Normal view" />
          <Button title="Edit" />
        </div>
      </>
      {/* header */}

      <div className="shadow mt-4 bg-[#F7F7F7] p-3 flex justify-between m-4 items-center">
        <p className="text-md font-semibold text-gray-500">
          Aine By Yugtha YJ <span className="text-black"> Book No. </span> 1
        </p>
        <p className="text-md font-normal text-gray-500">Remaindered</p>
        <div className="w-16">
          <Plus classes={"h-full w-full"} />
        </div>
      </div>

      <div className="m-4 gap-3 mt-8 flex">
        <InformationSection
          title="Author Information"
          info={authorInfo}
          imageUrl="https://picsum.photos/200/300?grayscale"
        />
        <ContactInformation contactDetails={contactDetails} />
      </div>

      <div className="m-4 gap-3 mt-8 flex">
        <NoteCard
          title="Important note"
          content="Wants it ready for the London marathon - early April"
        />
        <NoteCard title="Author notes" content="NA" />
      </div>
    </div>
  );
};

export default Author;
