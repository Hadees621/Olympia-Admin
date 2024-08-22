import React, { useState } from "react";

const NoteCard = ({ title, content, isEditable, onChange }) => {
  const [editableContent, setEditableContent] = useState(content);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setEditableContent(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="w-full shadow-md bg-[#F7F7F7]">
      <div className="border-b mx-4">
        <h2 className="text-lg font-semibold p-3">{title}</h2>
      </div>
      <div className="p-5">
        {isEditable ? (
          <textarea
            value={editableContent}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        ) : (
          <p className="text-md">{content}</p>
        )}
      </div>
    </div>
  );
};

export default NoteCard;
