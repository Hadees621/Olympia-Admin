import React, { useState } from "react";
import Button from "components/Button";
import NoteCard from "./components/NoteCard";
import { contactDetails } from "./utils/utils";
import SelectField from "components/SelectField";
import { authorInfo } from "../contract/utils/utils";
import SearchField from "pages/home/components/SearchField";
import { ContactInformation } from "components/ContactInformation.";
import { InformationSection } from "components/InformationSection";
import Remaindered from "../editorial/components/Remaindered";

const Author = () => {
  const [selectedValues, setSelectedValues] = useState(["", ""]);

  const handleSelectChange = (index, e) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = e.target.value;
    setSelectedValues(newSelectedValues);
  };

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
            />
          ))}
          <Button title="Clear" />
          <Button title="Normal view" />
          <Button title="Edit" />
        </div>
      </>

      <div className="mt-4 m-4">
        <Remaindered />
      </div>

      <div className="m-4 gap-3 flex">
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
