

import { bookDetails, bookDetails2, bookDetails3 } from "pages/book/utils/utils";
import React from "react";

const BookInformation = ({ title, info, imageUrl, bookFlag, isEditable }) => (
  <div className="w-full shadow-md bg-[#F7F7F7]">
    <div className="p-5 mx-4 border-b">
      <p className="text-xl font-bold">{title}</p>
    </div>
    <div className="flex justify-between p-8">
      <div className="my-4 gap-4 grid">
        {info.map((item, index) => (
          <div key={index}>
            <p className="text-sm font-semibold text-gray-600">{item.label}</p>
            <p className="text-lg font-semibold text-black">{item.value}</p>
          </div>
        ))}
        {bookFlag && (
          <button className="shadow bg-[#D3D3D4] text-sm p-1 font-semibold">
            Download Cover
          </button>
        )}
      </div>
      {imageUrl && (
        <div>
          <p className="text-sm font-semibold text-gray-600">Book Cover:</p>
          <img src={imageUrl} alt="book cover" />
        </div>
      )}
    </div>

    <div className={`flex p-6 border-t mx-4 justify-between ${isEditable && "gap-12 p-6 text-sm"}`}>
      <div className="grid grid-cols-2 gap-4 px-2">
        {bookDetails.map((item, index) => (
          <React.Fragment key={index}>
            <div className="text-left font-medium text-gray-600">
              {item.type}
            </div>
            <p className="text-lg font-semibold text-black">{item.value}</p>
            <div className="text-left font-medium text-gray-600">
              ISBN
            </div>
            <p className="text-lg font-semibold text-black">{item.isbn}</p>
          </React.Fragment>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 px-2">
        {bookDetails2.map((item, index) => (
          <React.Fragment key={index}>
            <div className="text-left font-medium text-gray-600">
              {item.label}
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold text-black">{item.value}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>

    <div className="flex p-6 border-t mx-4 justify-start">
      <div className="grid grid-cols-2 gap-4 px-2">
        {bookDetails3.map((item, index) => (
          <React.Fragment key={index}>
            <div className="text-left font-medium text-gray-600">
              {item.label}
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold text-black">{item.value}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

export default BookInformation;
