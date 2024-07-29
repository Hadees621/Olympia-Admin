import React, { useState } from "react";
import Button from "components/Button";
import Modal from "components/modals/Modal";
import SelectField from "components/SelectField";
import Remaindered from "./components/Remaindered";
import NoteCard from "../author/components/NoteCard";
import UploadedFiles from "./components/UploadedFiles";
import EditorialNotes from "./components/EditorialNotes";
import EditableNoteCard from "components/EditableNoteCard";
import SearchField from "pages/home/components/SearchField";
import { bookInfo, editableNotesData, noteCardsData } from "./utils/utils";
import EditorialBookInformation from "./components/EditorialBookInformation";
import EditorialBookInformationEditable from "./components/EditorialBookInformationEditable";

const Editorial = () => {
  const [selectedValues, setSelectedValues] = useState(["", ""]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const handleSelectChange = (index, e) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = e.target.value;
    setSelectedValues(newSelectedValues);
  };

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
          <Button title="Edit Information" onClick={openModal} />
        </div>
      </>

      <Remaindered status={"£ Paid in full"} />

      <div className="pt-4">
        <EditorialBookInformation title="About book" info={bookInfo} />
      </div>

      <div className="my-4 space-y-5">
        <EditorialNotes title={"Editorial notes"}
          questionnaire={"/pending-production-questionnaires"} questionnaireType={"Pending Production questionnaire"}
        />
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

      <Modal isVisible={isModalVisible} onClose={closeModal} onSave={closeModal} title="Edit Contract Information">
        <EditorialBookInformationEditable title="About book" info={bookInfo} />
        <div className="grid space-y-4 mt-5">
          <NoteCard title={"Poster quotes"} isEditable={true} />
          <NoteCard title={"Book notes"} content={"Here are some notes and thing's Hello"} isEditable={true} />
          <NoteCard title={"Cover blurb"} isEditable={true} />
          <NoteCard title={"Author blurb"} isEditable={true} />
          <NoteCard title={"Copyrights Issues Inners:"} isEditable={true} />
          <NoteCard title={"Copyrights Issues Covers:"} isEditable={true} />
          <NoteCard title={"Copyrights Credit Inners:"} isEditable={true} />
          <NoteCard title={"Copyrights Credit Covers:"} isEditable={true} />
        </div>
      </Modal>
    </div>
  );
};

export default Editorial;
