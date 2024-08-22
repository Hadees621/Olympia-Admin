import Box from "./components/Box";
import Button from "components/Button";
import React, { useState } from "react";
import Upload from "./components/Upload";
import FileUpload from "./components/FileUpload";
import SelectField from "components/SelectField";
import Remaindered from "components/Remaindered";
import SearchField from "../home/components/SearchField";
import EditableForm from "../publicity/components/EditableForm.js/EditableForm";
import {
  characterDescription,
  characterDescriptionData,
  illustrationsDescription,
  illustrationsDescriptionData,
} from "./utils/utils";

const Graphics = () => {
  const [selectedValues, setSelectedValues] = useState(["", ""]);

  const handleSelectChange = (index, e) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = e.target.value;
    setSelectedValues(newSelectedValues);
  };

  const handleSave = (formData) => {
    console.log("Saved data:", formData);
  };

  const placeholders = ["Please Select Author", "Select Book"];

  return (
    <div className="w-full text-start m-4">
      <header>
        <p className="text-3xl font-semibold mt-8">
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
        </div>
      </header>

      <Remaindered />

      <div className="grid grid-cols-2 gap-4">
        <div className="w-full space-y-5">
          <Box />

          <EditableForm
            title="Character description"
            fields={characterDescription}
            initialData={characterDescriptionData}
            onSave={handleSave}
            additionalbutton={"Download as PDF"}
            textAreaRows={13}
          />
        </div>

        <div className="w-full space-y-4">
          <EditableForm
            title="illustrations description"
            fields={illustrationsDescription}
            initialData={illustrationsDescriptionData}
            onSave={handleSave}
            textAreaRows={4}
          />
          <section className="w-full shadow-md bg-[#F7F7F7]">
            <header className="border-b flex items-center justify-between">
              <h2 className="text-xl font-semibold p-4">
                Upload illustrations (Only upload approved completed
                illustrations)
              </h2>
            </header>
            <div className="flex gap-3">
              <div className="w-full">
                <h2 className="text-md font-semibold p-3">
                  Uploaded illustration
                </h2>
                {Array(5)
                  .fill({
                    filename: "1607067556(175389).jpg",
                    timestamp: "04-12-2020 | 07:39",
                  })
                  .map((file, idx) => (
                    <Upload
                      key={idx}
                      filename={file.filename}
                      timestamp={file.timestamp}
                    />
                  ))}
              </div>
              <div className="w-full">
                <FileUpload />
              </div>
            </div>
          </section>

          <section className="w-full shadow-md bg-[#F7F7F7]">
            <header className="border-b flex items-center mx-4 justify-between">
              <h2 className="text-xl font-semibold p-4">
                Completed Illustrations Uploaded By Author
              </h2>
            </header>
            <div className="flex gap-3">
              <div className="w-full">
                <h2 className="text-md font-semibold p-3">
                  Uploaded illustration
                </h2>
                <div className="px-5">
                  {Array(6)
                    .fill({
                      filename: "1607067556(175389).jpg",
                      timestamp: "04-12-2020 | 07:39",
                    })
                    .map((file, idx) => (
                      <Upload
                        key={idx}
                        filename={file.filename}
                        timestamp={file.timestamp}
                      />
                    ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Graphics;
