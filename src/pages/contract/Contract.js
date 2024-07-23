import React, { useState } from "react";
import Plus from "utils/icons/Plus";
import Button from "components/Button";
import SelectField from "components/SelectField";
import SearchField from "pages/home/components/SearchField";
import { authorInfo, contractInfoLeft, contractInfoRight } from "./utils/utils";
import ContractInformation from "./components/ContactInformation";

const Contract = () => {
  const [selectedValues, setSelectedValues] = useState(["", ""]);
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };


  const handleSelectChange = (index, e) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = e.target.value;
    setSelectedValues(newSelectedValues);
  };

  const placeholders = ["Please Select Author", "Select Book"];

  const InformationSection = ({ title, info, imageUrl }) => (
    <div className="w-full shadow-md bg-[#F7F7F7]">
      <div className="p-5 mx-4 border-b">
        <p className="text-xl font-bold">{title}</p>
      </div>
      <div className="flex justify-between p-8">
        <div className="my-4 gap-4 grid">
          {info.map((item, index) => (
            <div key={index}>
              <p className="text-sm font-semibold text-gray-600">
                {item.label}
              </p>
              <p className="text-lg font-semibold text-black">{item.value}</p>
            </div>
          ))}
        </div>
        {imageUrl && (
          <div>
            <p className="text-sm font-semibold text-gray-600">
              Author Picture:
            </p>
            <img src={imageUrl} alt="author" />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full text-start items-center">
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
        <Button title="Search" />
        <Button title="Contract Accounts" />
        <Button title="Author Data Sheet" />
        <Button title="Edit" onClick={toggleEditMode} />
        {isEditMode && (<Button title="Save Changes" onClick={toggleEditMode} />)}
      </div>

      <div className="shadow mt-4 bg-[#F7F7F7] p-3 flex justify-between m-4 items-center">
        <p className="text-md font-semibold text-gray-500">
          Aine By Yugtha YJ <span className="text-black"> Book No. </span> 1
        </p>
        <p className="text-md font-normal text-gray-500">Remaindered</p>
        <div className="w-16">
          <Plus classes={"h-full w-full"} />
        </div>
      </div>

      <div className="m-4 grid grid-cols-2 gap-3">
        <div>
          <InformationSection
            title="Author Information"
            info={authorInfo}
            imageUrl="https://picsum.photos/200/300?grayscale"
          />
        </div>
        <div>
          <ContractInformation
            infoLeft={contractInfoLeft}
            infoRight={contractInfoRight}
            isEditable={isEditMode}
          />
        </div>
      </div>
    </div>
  );
};

export default Contract;
