import React from "react";

const NoteCard = ({ title, content }) => (
  <div className="w-full shadow-md bg-[#F7F7F7]">
    <div className="border-b">
      <h2 className="text-lg font-semibold p-3">{title}</h2>
    </div>
    <div className="p-5">
      <p className="text-md">{content}</p>
    </div>
  </div>
);

export default NoteCard;
