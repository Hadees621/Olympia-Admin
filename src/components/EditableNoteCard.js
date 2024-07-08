import { PenIcon } from "utils/icons/PenIcon";
import React, { useState } from "react";

const EditableNoteCard = ({ title, initialContent }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="w-full shadow-md bg-[#F7F7F7]">
      <div className="border-b flex items-center mx-4 justify-between">
        <h2 className="text-lg font-semibold p-3">{title}</h2>
        <PenIcon onClick={handleEditClick} />
      </div>
      <div className="p-5">
        {isEditing ? (
          <div>
            <textarea
              className="text-lg border w-full"
              value={content}
              onChange={handleContentChange}
              rows={3}
            />
            <button
              onClick={handleSaveClick}
              className="bg-[#001C4E1F] text-[#001C4E] font-bold px-8 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        ) : content ? (
          <p className="text-lg">{content}</p>
        ) : (
          <h1 className="text-lg">{initialContent}</h1>
        )}
      </div>
    </div>
  );
};

export default EditableNoteCard;
