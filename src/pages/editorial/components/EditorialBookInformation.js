import React, { useState } from "react";
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
  pricing,
} from "../utils/utils";
import SelectField from "components/SelectField";

const EditorialBookInformation = ({ title, info, bookFlag }) => {
  const [selectedValues, setSelectedValues] = useState(["", ""]);

  const handleSelectChange = (index, e) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = e.target.value;
    setSelectedValues(newSelectedValues);
  };
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];

  const placeholders = ["Please Select Author"];
  return (
    <div className="w-full ">
      <div className="-b pb-3 mb-3 mx-4 border-b">
        <p className="text-xl font-bold mx-5 mt-4">{title}</p>
      </div>
      <div className="flex justify-between px-8 pb-5">
        <div className="gap-4 grid w-full">
          {info.map((item, index) => (
            <div key={index}>
              <p className="text-sm font-semibold text-gray-600">
                {item.label}
              </p>
              <p className="text-lg font-semibold text-black">{item.value}</p>
            </div>
          ))}
          {bookFlag && (
            <button className="shadow bg-[#D3D3D4] text-sm p-1 font-semibold">
              Download Cover
            </button>
          )}
        </div>
        <div className="gap-4 grid w-full">
          <div>
            <p className="text-sm font-semibold text-gray-600">Book no:</p>
            <p className="text-lg font-semibold text-black">1</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">
              Contract Date:
            </p>
            <p className="text-lg font-semibold text-black">27-09-2007</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">
              Other books by this author:
            </p>
            {placeholders.map((placeholder, index) => (
              <SelectField
                key={index}
                placeholder={placeholder}
                value={selectedValues[index]}
                onChange={(e) => handleSelectChange(index, e)}
                options={options}
              />
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600">
              Ready for Publication:
            </p>
            <p className="text-lg font-semibold text-black">27-09-2007</p>
          </div>
        </div>
      </div>

      <div className="flex p-6 border-t mx-4 justify-between py-7">
        <div className="grid grid-cols-2 w-full">
          {editorialBookDetails.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-left font-medium text-gray-600 ">
                {item.label}
              </div>
              <div className="text-left text-black font-semibold ">
                {item.value}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 w-full py-7">
          {pricing.map((item, index) => (
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

      <div className="flex p-6 border-t mx-2 justify-between py-7">
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

      <div className="flex p-4 border-t mx-2 py-7">
        <div className="grid grid-cols-2 gap-3 px-2 w-full">
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

      <div className="flex p-2 border-t mx-5 pt-7 py-7">
        <div className="grid gap-2  grid-cols-2 w-full">
          {editorialBookDetails5.map((item, index) => (
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
        <div className="grid grid-cols-2 gap-2 w-full">
          {editorialBookDetails55.map((item, index) => (
            <React.Fragment key={index}>
              <div className="text-center font-medium text-gray-600">
                {item.label}
              </div>
              <div className="text-left text-black font-semibold">
                {item.value}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-y-2 w-full">
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

      <div className="flex p-2 border-t mx-2 justify-between py-7">
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
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
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
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
