import React from "react";
import {
  editorialBookDetails,
  editorialBookDetails2,
  editorialBookDetails22,
  editorialBookDetails4,
  editorialBookDetails44,
  editorialBookDetails5,
  editorialBookDetails55,
  editorialBookDetails6,
  editorialBookDetails66,
} from "../utils/utils";

const EditorialBookInformation = ({ title, info, imageUrl, bookFlag }) => {
  return (
    <div className="w-full shadow-lg">
      <div className="-b pb-3 mb-3 mx-4">
        <p className="text-xl font-bold mx-5 mt-4">{title}</p>
      </div>
      <div className="flex justify-between p-8">
        <div className="my-4 gap-4 grid">
          {info.map((item, index) => (
            <div key={index}>
              <p className="text-sm font-semibold text-gray-600">
                {item.label}
              </p>
              <p className="text-lg font-semibold text-black font-semibold">
                {item.value}
              </p>
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
            <p className="text-sm font-semibold text-gray-600"> Book Cover:</p>
            <img src={imageUrl} alt="author" />
          </div>
        )}
      </div>

      <div className="flex p-6 border-t mx-4 justify-between">
        <div className="grid grid-cols-2 gap-4 px-2">
          {editorialBookDetails.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-left font-medium text-gray-600">
                {item.label}
              </div>
              <div className="text-left text-black font-semibold">
                {item.value}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 px-2">
          {editorialBookDetails.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-left font-medium text-gray-600">
                {item.label}
              </div>
              <div className="text-left text-black font-semibold">
                {item.value}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex p-6 border-t mx-4 gap-6 justify-between">
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          {editorialBookDetails2.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-left font-medium text-gray-600">
                {item.label}
              </div>
              <div className="text-left text-black font-semibold ">
                {item.value}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="grid gap-4 px-2 grid-cols-2 w-full">
          {editorialBookDetails22.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-left font-medium text-gray-600">
                {item.label}
              </div>
              <div className="text-left text-black font-semibold">
                {item.value}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex p-6 border-t mx-4 justify-between">
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          {editorialBookDetails2.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-left font-medium text-gray-600">
                {item.label}
              </div>
              <div className="text-left text-black font-semibold">
                {item.value}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="grid gap-4 grid-cols-2 px-2 w-full">
          {editorialBookDetails22.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-left font-medium text-gray-600">
                {item.label}
              </div>
              <div className="text-left text-black font-semibold">
                {item.value}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex p-4 border-t mx-2 gap-3 justify-between ">
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          {editorialBookDetails4.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-left font-medium text-gray-600">
                {item.label}
              </div>
              <div className="text-left text-black font-semibold">
                {item.value}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="grid grid-cols-2 px-2 w-full">
          {editorialBookDetails44.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-left font-medium text-gray-600">
                {item.label}
              </div>
              <div className="text-center text-black font-semibold">
                {item.value}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex p-2 border-t mx-2 gap-3 justify-between pt-7">
        <div className="grid gap-2 grid-cols-2 px-4 w-full border-r">
          {editorialBookDetails5.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-left font-medium text-gray-600">
                {item.label}
              </div>
              <div className="text-left text-black font-semibold">
                {item.value}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 px-4 w-full border-r">
          {editorialBookDetails55.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-left font-medium text-gray-600">
                {item.label}
              </div>
              <div className="text-left text-black font-semibold">
                {item.value}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="grid grid-cols-2 px-4 w-full ">
          {editorialBookDetails44.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-left font-medium text-gray-600">
                {item.label}
              </div>
              <div className="text-left text-black font-semibold">
                {item.value}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex p-4 border-t mx-4 justify-between py-4">
        <div className="grid grid-cols-2 gap-4 px-2">
          {editorialBookDetails6.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-left font-medium text-gray-600">
                {item.label}
              </div>
              <div className="text-left text-black font-semibold">
                {item.value}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 px-2">
          {editorialBookDetails66.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-left font-medium text-gray-600">
                {item.label}
              </div>
              <div className="text-left text-black font-semibold">
                {item.value}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditorialBookInformation;
