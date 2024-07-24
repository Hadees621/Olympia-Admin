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
import Modal from "components/modals/Modal";

const Author = () => {
  const [selectedValues, setSelectedValues] = useState(["", ""]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleSelectChange = (index, e) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = e.target.value;
    setSelectedValues(newSelectedValues);
  };

  const placeholders = ["Please Select Author", "Select Book"];

  const handleSaveChanges = () => {
    setIsEditMode(false);
    setIsModalVisible(false)
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

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
          <Button title="Edit" onClick={openModal} />
        </div>
      </>

      <div className="mt-4 m-4">
        <Remaindered />
      </div>

      <div className="m-4 gap-3 grid grid-cols-2">
        <div className="space-y-4">
          <InformationSection
            title="Author Information"
            info={authorInfo}
            imageUrl="https://picsum.photos/200/300?grayscale"
            bookFlag={false}
            isEditable={isEditMode}
          />
          <NoteCard title="Important note" content="Wants it ready for the London marathon - early April" isEditable={isEditMode} />
        </div>
        <div className="space-y-4">
          <ContactInformation contactDetails={contactDetails} isEditable={isEditMode} />
          <NoteCard title="Author notes" content="NA" isEditable={isEditMode} />
        </div>
      </div>

      {/* Modal */}
      <Modal isVisible={isModalVisible} onClose={closeModal} onSave={handleSaveChanges} title="Edit Author Information">
        <div className="m-4 gap-3 grid grid-cols-2">
          <div className="space-y-4">
            <InformationSection
              title="Author Information"
              info={authorInfo}
              imageUrl="https://picsum.photos/200/300?grayscale"
              bookFlag={false}
              isEditable={true}
            />
            <NoteCard title="Important note" content="Wants it ready for the London marathon - early April" isEditable={true} />
          </div>
          <div className="space-y-4">
            <ContactInformation contactDetails={contactDetails} isEditable={true} />
            <NoteCard title="Author notes" content="NA" isEditable={true} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Author;
