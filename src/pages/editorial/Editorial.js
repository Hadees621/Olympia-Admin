import React, { useState } from "react";
import Button from "components/Button";
import { bookInfo, editableNotesData, noteCardsData } from "./utils/utils";
import SelectField from "components/SelectField";
import NoteCard from "../author/components/NoteCard";
import SearchField from "pages/home/components/SearchField";
import EditorialBookInformation from "./components/EditorialBookInformation";
import EditableNoteCard from "components/EditableNoteCard";
import EditorialNotes from "./components/EditorialNotes";
import UploadedFiles from "./components/UploadedFiles";
import Remaindered from "./components/Remaindered";

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
          <Button title="Search" />
          <Button title="Clear" />
          <Button title="ISBN Search" />
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
          <Button title="Clear" />
          <Button title="Normal view" />
          <Button title="Edit Information" />
        </div>
      </>

      <Remaindered status={"£ Paid in full"} />

      <EditorialBookInformation title="About book" info={bookInfo} />

      <div className="my-4 space-y-5">
        <EditorialNotes title={"Editorial notes"} />
        <UploadedFiles />
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
