import React from "react";

const NoteCard = ({ title, content }) => (
  <div className="w-full shadow-lg">
    <div className="border-b pb-3 mb-3 mx-4">
      <h2 className="text-lg font-semibold mx-5 mt-4">{title}</h2>
    </div>
    <div className="p-5">
      <p className="text-lg">{content}</p>
    </div>
  </div>
);

export default NoteCard;
