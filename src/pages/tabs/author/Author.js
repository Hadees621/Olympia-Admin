import Title from "components/Title";
import Button from "components/Button";
import React, { useState } from "react";
import Modal from "components/modals/Modal";
import NoteCard from "./components/NoteCard";
import { contactDetails } from "./utils/utils";
import SelectField from "components/SelectField";
import { authorInfo } from "../contract/utils/utils";
import SearchField from "pages/home/components/SearchField";
import Remaindered from "pages/editorial/components/Remaindered";
import { InformationSection } from "components/InformationSection";
import { ContactInformation } from "components/ContactInformation.";

const Author = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedValues, setSelectedValues] = useState(["", ""]);

  const handleSelectChange = (index, e) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = e.target.value;
    setSelectedValues(newSelectedValues);
  };

  const handleSaveChanges = () => {
    setIsEditMode(false);
    setIsModalVisible(false);
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

      <div className="gap-3 grid grid-cols-2">
        <div className="space-y-4">
          <InformationSection
            title="Author Information"
            info={authorInfo}
            imageUrl="https://picsum.photos/200/300?grayscale"
            bookFlag={false}
            isEditable={isEditMode}
          />
          <NoteCard
            title="Important note"
            content="Wants it ready for the London marathon - early April"
            isEditable={isEditMode}
          />
        </div>
        <div className="space-y-4">
          <ContactInformation
            contactDetails={contactDetails}
            isEditable={isEditMode}
          />
          <NoteCard title="Author notes" content="NA" isEditable={isEditMode} />
        </div>
      </div>

      <Modal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSave={handleSaveChanges}
        title="Edit Author Information"
      >
        <div className="m-4 gap-3 grid grid-cols-2">
          <div className="space-y-4">
            <InformationSection
              title="Author Information"
              info={authorInfo}
              imageUrl="https://picsum.photos/200/300?grayscale"
              bookFlag={false}
              isEditable={true}
            />
            <NoteCard
              title="Important note"
              content="Wants it ready for the London marathon - early April"
              isEditable={true}
            />
          </div>
          <div className="space-y-4">
            <ContactInformation
              contactDetails={contactDetails}
              isEditable={true}
            />
            <NoteCard title="Author notes" content="NA" isEditable={true} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Author;
