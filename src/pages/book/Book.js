import React, { useState } from "react";
import Button from "components/Button";
import SelectField from "components/SelectField";
import SearchField from "pages/home/components/SearchField";
import NoteCard from "../author/components/NoteCard";
import { bookInfo } from "./utils/utils";
import { BookInformation } from "components/BookInformation";
import Remaindered from "../editorial/components/Remaindered";

const Book = () => {
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
          <Button title="ISBN Search" href="/isbn-search" />
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
          <Button title="Edit Information" />
        </div>
      </>
      {/* header */}

      <div className="mt-4 m-4">
        <Remaindered />
      </div>

      <div className="m-4 gap-3 flex">
        <BookInformation
          title="Book Information"
          info={bookInfo}
          imageUrl="https://picsum.photos/200/300?grayscale"
          bookFlag={true}
        />
        <div className="space-y-3 w-full">
          <NoteCard title="Important note" content="NA" />
          <NoteCard title="Author notes" content="NA" />
        </div>
      </div>
    </div>
  );
};

export default Book;
