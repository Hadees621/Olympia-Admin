import React, { useState } from "react";
import Button from "components/Button";
import SelectField from "components/SelectField";
import SearchField from "pages/home/components/SearchField";
import Remaindered from "../editorial/components/Remaindered";
import EditorialNotes from "../editorial/components/EditorialNotes";
import EditorialBookInformation from "../editorial/components/EditorialBookInformation";
import { bookInfo } from "../editorial/utils/utils";
import EditableForm from "./components/EditableForm.js/EditableForm";

const Publicity = () => {
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

  const placeholders = ["Please Select Author", "Select Book"];

  const handleSave = (formData) => {
    console.log("Saved data:", formData);
    // Implement save logic here (e.g., API call)
  };

  return (
    <div className="w-full text-start items-center m-4">
      {/* header */}
      <>
        <p className="text-3xl font-semibold mt-8 ml-8">
          Welcome to Olympia Portal (olympia admin)
        </p>
        <div className="flex items-center mt-8 gap-3">
          <SearchField placeholder="Book Title" />
          <SearchField placeholder="Pen name/Author name" />
          <Button title="Search" text="text-[12px]" />
          <Button title="Clear" text="text-[12px]" />
          <Button title="ISBN Search" text="text-[12px]" />
        </div>
        <div className="flex gap-2 justify-start mt-3 items-center w-full">
          <p className="text-md font-semibold text-gray-500">Pen Name:</p>
          {placeholders.map((placeholder, index) => (
            <SelectField
              key={index}
              placeholder={placeholder}
              value={selectedValues[index]}
              onChange={(e) => handleSelectChange(index, e)}
              options={options}
            />
          ))}
          <Button title="Clear" text="text-[12px]" />
        </div>
      </>

      <Remaindered />

      {/* <div className="flex gap-4 border border-black">
        <div className="w-full">
          <EditorialBookInformation title="About book" info={bookInfo} />
        </div>
        <div className="w-full">
          <EditorialNotes />
        </div>
      </div> */}

      <div className="flex gap-4 pt-4">
        <div className="w-full">
          <EditableForm
            title="About Author"
            fields={[
              { name: "dateCompleted", label: "Date Completed" },
              { name: "placeOfBirth", label: "Place of Birth" },
              { name: "nationality", label: "Nationality" },
              { name: "occupation", label: "Occupation" },
              {
                name: "yearsAtAddress",
                label: "How long have you lived at your current address?",
              },
              { name: "previousAddress", label: "Previous Address" },
              { name: "hobbies", label: "Hobbies" },
              { name: "autobiography", label: "Autobiography" },
              {
                name: "whyWriting",
                label: "Why did you choose to start writing?",
              },
              {
                name: "publishingGoal",
                label: "What do you hope to achieve from publishing this book?",
              },
            ]}
            initialData={{
              dateCompleted: "08-06-2022",
              placeOfBirth: "Test222",
              nationality: "Test222",
              occupation: "Test222",
              yearsAtAddress: "20 years",
              previousAddress: "test",
              hobbies: "test",
              autobiography: "test",
              whyWriting: "test",
              publishingGoal: "test",
            }}
            onSave={handleSave}
          />
        </div>
        <div className="w-full">
          <EditableForm
            title="About Book"
            fields={[
              { name: "targetAudience", label: "Target Audience" },
              {
                name: "describeAudience",
                label: "Describe your target audience",
              },
              { name: "bookDescription", label: "Book Description" },
              {
                name: "similarBooks",
                label: "Are there any books that are similar to yours?",
              },
            ]}
            initialData={{
              targetAudience: "20-40 years",
              describeAudience: "asd",
              bookDescription: "test disable",
              similarBooks: "asd",
            }}
            onSave={handleSave}
          />
        </div>

        {/* <div className="w-full">
          <EditableForm
            title="About Book"
            fields={[
              { name: "targetAudience", label: "Target Audience" },
              {
                name: "describeAudience",
                label: "Describe your target audience",
              },
              { name: "bookDescription", label: "Book Description" },
              {
                name: "similarBooks",
                label: "Are there any books that are similar to yours?",
              },
            ]}
            initialData={{
              targetAudience: "20-40 years",
              describeAudience: "asd",
              bookDescription: "test disable",
              similarBooks: "asd",
            }}
            onSave={handleSave}
          />
        </div>
        <div className="w-full">
          <EditableForm
            title="About Book"
            fields={[
              { name: "targetAudience", label: "Target Audience" },
              {
                name: "describeAudience",
                label: "Describe your target audience",
              },
              { name: "bookDescription", label: "Book Description" },
              {
                name: "similarBooks",
                label: "Are there any books that are similar to yours?",
              },
            ]}
            initialData={{
              targetAudience: "20-40 years",
              describeAudience: "asd",
              bookDescription: "test disable",
              similarBooks: "asd",
            }}
            onSave={handleSave}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Publicity;
