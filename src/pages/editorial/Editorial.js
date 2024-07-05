import React, { useState } from "react";
import Plus from "utils/icons/Plus";
import Button from "components/Button";
import { bookInfo, editableNotesData, noteCardsData } from "./utils/utils";
import SelectField from "components/SelectField";
import NoteCard from "../author/components/NoteCard";
import SearchField from "pages/home/components/SearchField";
import EditorialBookInformation from "./components/EditorialBookInformation";
import EditableNoteCard from "components/EditableNoteCard";

const Editorial = () => {
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
          <SearchField placeholder="Book Title" />
          <SearchField placeholder="Pen name/Author name" />
          <Button title="Search" text="text-[12px]" />
          <Button title="Clear" text="text-[12px]" />
          <Button title="ISBN Search" text="text-[12px]" />
        </div>
        <div className="flex gap-2 justify-start mt-3 items-center w-full">
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
          <Button title="Clear" text="text-[12px]" />
          <Button title="Normal view" text="text-[12px]" />
          <Button title="Edit Information" text="text-[12px]" />
        </div>
      </>
      {/* header */}

      <div className="shadow mt-4 bg-[#F7F7F7] p-3 flex justify-between items-center">
        <p className="text-md font-semibold text-gray-500">
          Aine By Yugtha YJ <span className="text-black"> Book No. </span> 1
        </p>
        <p className="text-md font-normal text-gray-500">Remaindered</p>
        <button className="status-button status-paid"> £ Paid in full</button>
        <div className="w-16">
          <Plus classes={"h-full w-full"} />
        </div>
      </div>

      <div className="w-full shadow-md bg-[#F7F7F7]">
        <EditorialBookInformation title="About book" info={bookInfo} />
      </div>

      <div className="flex my-4 gap-4">
        <div className="w-full space-y-3">
          {editableNotesData.map((note, index) => (
            <EditableNoteCard
              key={index}
              title={note.title}
              initialContent={note.initialContent}
            />
          ))}
        </div>
        <div className="w-full space-y-3">
          {noteCardsData.map((note, index) => (
            <NoteCard key={index} title={note.title} content={note.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Editorial;
