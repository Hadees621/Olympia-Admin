import React, { useState } from "react";
import SearchField from "../home/components/SearchField";
import Button from "components/Button";
import SelectField from "components/SelectField";
import Remaindered from "../editorial/components/Remaindered";
import EditableForm from "../publicity/components/EditableForm.js/EditableForm";
import { authorFormData, authorFormFields } from "../publicity/utils/utils";
import {
  characterDescription,
  characterDescriptionData,
  illustrationsDescription,
  illustrationsDescriptionData,
} from "./utils/utils";
import Upload from "./components/Upload";
import FileUpload from "./components/FileUpload";

const Graphics = () => {
  const [selectedValues, setSelectedValues] = useState(["", ""]);

  const handleSelectChange = (index, e) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = e.target.value;
    setSelectedValues(newSelectedValues);
  };

  const placeholders = ["Please Select Author", "Select Book"];

  const handleSave = (formData) => {
    console.log("Saved data:", formData);
  };

  return (
    <div className="w-full text-start items-center">
      {/* header */}
      <>
        <p className="text-3xl font-semibold mt-8 ml-8">
          Welcome to Olympia Portal (olympia admin)
        </p>
        <div className="flex items-center mt-8 gap-3 m-4">
          <SearchField placeholder="Book Title" />
          <SearchField placeholder="Pen name/Author name" />
          <Button title="Search" />
          <Button title="Clear" />
          <Button title="ISBN Search" />
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
          <Button title="Clear" />
          <Button title="Normal view" />
          <Button title="Edit" />
        </div>
      </>

      <div className="mt-4 m-4">
        <Remaindered />
      </div>

      <div className="grid grid-cols-2 m-4 gap-4">
        <div className="w-full space-y-5">
          <div className="shadow-md bg-[#F7F7F7]">
            <div className="p-5 mx-4 border-b">
              <p className="text-xl font-bold">Illustrations information</p>
            </div>
            <div className="flex justify-between w-full p-8">
              <div className="my-4 gap-4 space-y-7">
                <div>
                  <p className="text-sm font-semibold text-gray-600">
                    illustrations provided by?
                  </p>
                  <p className="text-lg font-semibold text-black">NA</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600">
                    Illustrations description provided by
                  </p>
                  <p className="text-lg font-semibold text-black">NA</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600">
                    Colour or black and white illustrations
                  </p>
                  <p className="text-lg font-semibold text-black">NA</p>
                </div>{" "}
                <div>
                  <p className="text-sm font-semibold text-gray-600">
                    Total illustrations?
                  </p>
                  <p className="text-lg font-semibold text-black">NA</p>
                </div>{" "}
                <div>
                  <p className="text-sm font-semibold text-gray-600">
                    Book size:
                  </p>
                  <p className="text-lg font-semibold text-black">
                    234X156MM (Royal Portrait)
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600">Test</p>
                  <p className="text-lg font-semibold text-black">ullus</p>
                </div>
                <Button
                  title={"Download Cover"}
                  text={"text-sm text-green-500 mt-4 shadow"}
                  bg=""
                />
              </div>
              <div className="gap-4 grid w-[45%]">
                <p className="text-sm font-bold text-gray-600">
                  Illustrations style reference (Author):
                </p>
                <div className="">
                  <img
                    src={"https://picsum.photos/300/300?grayscale"}
                    alt="author"
                    className="w-full h-full rounded-full"
                  />
                </div>

                <Button
                  title={"Download style reference"}
                  text={"text-xs text-green-500 mt-4 shadow"}
                  bg=""
                />
                <div className="">
                  <img
                    src={"https://picsum.photos/300/300?grayscale"}
                    alt="author"
                    className="w-full h-full rounded-full"
                  />
                </div>

                <Button
                  title={"Download style reference"}
                  text={"text-xs text-green-500 mt-4 shadow"}
                  bg=""
                />

                <div className="">
                  <img
                    src={"https://picsum.photos/300/150?grayscale"}
                    alt="author"
                    className="w-full h-full"
                  />
                </div>

                <Button
                  title={"Download style reference"}
                  text={"text-xs text-green-500 mt-4 shadow"}
                  bg=""
                />

                <div className="">
                  <img
                    src={"https://picsum.photos/300/150?grayscale"}
                    alt="author"
                    className="w-full h-full"
                  />
                </div>
                <Button
                  title={"Download style reference"}
                  text={"text-xs text-green-500 mt-4 shadow"}
                  bg=""
                />
              </div>
            </div>
          </div>
          <div className="">
            <EditableForm
              title="Character description"
              fields={characterDescription}
              initialData={characterDescriptionData}
              onSave={handleSave}
              additionalbutton={"Download as PDF"}
              textAreaRows={13}
            />
          </div>
        </div>

        <div className="w-full space-y-4">
          <EditableForm
            title="illustrations description"
            fields={illustrationsDescription}
            initialData={illustrationsDescriptionData}
            onSave={handleSave}
            textAreaRows={4}
          />
          <div className="w-full shadow-md bg-[#F7F7F7]">
            <div className="border-b flex items-center mx-4 justify-between">
              <h2 className="text-xl font-semibold p-4">
                Upload illustrations (Only upload approved completed
                illustrations)
              </h2>
            </div>
            <div className="flex gap-3">
              <div className="w-full">
                <h2 className="text-md font-semibold p-3">
                  Uploaded illustration
                </h2>

                <Upload
                  filename={"1607067556(175389).jpg"}
                  timestamp={"04-12-2020 | 07:39"}
                />
                <Upload
                  filename={"1607067556(175389).jpg"}
                  timestamp={"04-12-2020 | 07:39"}
                />
                <Upload
                  filename={"1607067556(175389).jpg"}
                  timestamp={"04-12-2020 | 07:39"}
                />
                <Upload
                  filename={"1607067556(175389).jpg"}
                  timestamp={"04-12-2020 | 07:39"}
                />
                <Upload
                  filename={"1607067556(175389).jpg"}
                  timestamp={"04-12-2020 | 07:39"}
                />
              </div>
              <div className="w-full">
                <FileUpload />
              </div>
            </div>
          </div>

          <div className="w-full shadow-md bg-[#F7F7F7]">
            <div className="border-b flex items-center mx-4 justify-between">
              <h2 className="text-xl font-semibold p-4">
                Completed Illustrations Uploaded By Author
              </h2>
            </div>
            <div className="flex gap-3">
              <div className="w-full ">
                <h2 className="text-md font-semibold p-3">
                  Uploaded illustration
                </h2>

                <div className="px-5">
                  <Upload
                    filename={"1607067556(175389).jpg"}
                    timestamp={"04-12-2020 | 07:39"}
                  />
                  <Upload
                    filename={"1607067556(175389).jpg"}
                    timestamp={"04-12-2020 | 07:39"}
                  />
                  <Upload
                    filename={"1607067556(175389).jpg"}
                    timestamp={"04-12-2020 | 07:39"}
                  />
                  <Upload
                    filename={"1607067556(175389).jpg"}
                    timestamp={"04-12-2020 | 07:39"}
                  />
                  <Upload
                    filename={"1607067556(175389).jpg"}
                    timestamp={"04-12-2020 | 07:39"}
                  />
                  <Upload
                    filename={"1607067556(175389).jpg"}
                    timestamp={"04-12-2020 | 07:39"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphics;
