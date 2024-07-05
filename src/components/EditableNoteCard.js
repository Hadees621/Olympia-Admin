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

  const PenIcon = () => (
    <div className="mx-5">
      <svg
        onClick={handleEditClick}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 cursor-pointer ml-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 3.487a1.875 1.875 0 012.65 2.65l-12.015 12.01a4.5 4.5 0 01-1.69.973l-4.95 1.237 1.237-4.95a4.5 4.5 0 01.973-1.69l12.015-12.01z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.98 5.994l-.705-.705"
        />
      </svg>
    </div>
  );

  return (
    <div className="w-full shadow-md bg-[#F7F7F7]">
      <div className="border-b flex items-center justify-between">
        <h2 className="text-lg font-semibold p-3 ">{title}</h2>
        <PenIcon />
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
          <h1 className="text-lg">NA</h1>
        )}
      </div>
    </div>
  );
};

export default EditableNoteCard;
