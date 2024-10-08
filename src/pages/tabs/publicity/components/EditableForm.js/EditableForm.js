import { PenIcon } from "utils/icons/PenIcon";
import React, { useState } from "react";

const EditableForm = ({
  title,
  fields,
  initialData,
  onSave,
  additionalbutton,
  textAreaRows = 2,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    onSave(formData);
  };

  return (
    <div className="w-full shadow-md bg-[#F7F7F7]">
      <div className="border-b flex items-center mx-4 justify-between">
        <h2 className="text-xl font-semibold p-4">{title}</h2>
        <PenIcon onClick={() => setIsEditing(!isEditing)} />
      </div>

      <form className="pt-4 space-y-3 p-5">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col ">
            <div className="">
              <label className="text-lg font-semibold px-">{field.label}</label>
              {isEditing ? (
                <textarea
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  rows={textAreaRows}
                  className="text-lg border w-full"
                />
              ) : (
                <p className="text-lg p-2">{formData[field.name]}</p>
              )}
            </div>
          </div>
        ))}
      </form>
      <div className="mx-6 space-x-2">
        {isEditing && (
          <button
            onClick={handleSave}
            className="bg-[#001C4E1F] text-[#001C4E] font-bold px-8 py-2 rounded-md mx- mb-4"
          >
            Save
          </button>
        )}

        {additionalbutton && (
          <button className="bg-[#001C4E1F] text-[#001C4E] font-bold px-4 py-2 rounded-md mx- mb-4">
            {additionalbutton}
          </button>
        )}
      </div>
    </div>
  );
};

export default EditableForm;
