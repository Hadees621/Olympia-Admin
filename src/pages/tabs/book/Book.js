import Title from "components/Title";
import Button from "components/Button";
import React, { useState } from "react";
import { bookInfo } from "./utils/utils";
import Modal from "components/modals/Modal";
import Remaindered from "components/Remaindered";
import SelectField from "components/SelectField";
import NoteCard from "../author/components/NoteCard";
import BookInformation from "components/BookInformation";
import SearchField from "pages/home/components/SearchField";
import BookInformationEditable from "./components/BookInformationEditable";

const Book = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedValues, setSelectedValues] = useState(["", ""]);

  const handleSelectChange = (index, e) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = e.target.value;
    setSelectedValues(newSelectedValues);
  };

  const placeholders = ["Please Select Author", "Select Book"];

  return (
    <div className="w-full text-start items-center m-4">
      <Title />

      <div className="flex items-center mt-8 gap-3">
        <SearchField placeholder="Book Title" />
        <SearchField placeholder="Pen name/Author name" />
        <Button title="Search" />
        <Button title="Clear" />
        <Button title="ISBN Search" href="/isbn-search" />
      </div>

      <div className="flex gap-2 justify-start mt-3 items-center w-full">
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
        <Button title="Edit" onClick={() => setIsModalVisible(true)} />
      </div>

      <Remaindered />

      <div className="flex gap-3">
        <BookInformation
          title="Edit Book Information"
          info={bookInfo}
          imageUrl="https://picsum.photos/200/300?random"
          bookFlag={true}
        />
        <div className="space-y-3 w-full">
          <NoteCard title="Important note" content="NA" />
          <NoteCard title="Author notes" content="NA" />
        </div>
      </div>

      <Modal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSave={() => setIsModalVisible(false)}
        title="Edit Book Information"
      >
        <BookInformationEditable
          title="Book Information"
          info={bookInfo}
          imageUrl="https://picsum.photos/200/300?random"
          bookFlag={true}
          isEditable={true}
        />
        <div className="space-y-3 w-full mt-4">
          <NoteCard title="Important note" content="NA" isEditable={true} />
          <NoteCard title="Author notes" content="NA" isEditable={true} />
        </div>
      </Modal>
    </div>
  );
};

export default Book;
