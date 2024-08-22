import Title from "components/Title";
import Button from "components/Button";
import React, { useState } from "react";
import SelectField from "components/SelectField";
import Remaindered from "components/Remaindered";
import EditorialNotes from "components/EditorialNotes";
import SearchField from "pages/home/components/SearchField";
import EditableForm from "./components/EditableForm.js/EditableForm";
import {
  authorFormData,
  authorFormFields,
  bookFormData,
  bookFormFields,
  buyLinksFormData,
  buyLinksFormFields,
  promotionsFormData,
  promotionsFormFields,
} from "./utils/utils";

const Publicity = () => {
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
    <div className="w-full text-start items-center m-4">
      <Title />

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

      <Remaindered />

      <div className="gap-4 my-4 flex">
        <div className="space-y-5 w-full">
          <EditableForm
            title="About Author"
            fields={authorFormFields}
            initialData={authorFormData}
            onSave={handleSave}
          />
          <EditableForm
            title="About Book"
            fields={bookFormFields}
            initialData={bookFormData}
            onSave={handleSave}
          />
          <EditableForm
            title="Book Buy Links"
            fields={buyLinksFormFields}
            initialData={buyLinksFormData}
            onSave={handleSave}
          />
        </div>

        <div className="space-y-5 w-full">
          <EditorialNotes
            title={"Marketing/Publicity notes"}
            questionnaire={"/pending-publicity-questionnaire"}
            questionnaireType={"Pending publicity questionnaire"}
          />
          <EditableForm
            title="About Book"
            fields={bookFormFields}
            initialData={bookFormData}
            onSave={handleSave}
          />
          <EditableForm
            title="Promotions"
            fields={promotionsFormFields}
            initialData={promotionsFormData}
            onSave={handleSave}
          />
        </div>
      </div>
    </div>
  );
};

export default Publicity;
