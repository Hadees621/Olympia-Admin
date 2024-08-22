import Button from "./Button";
import React, { useState } from "react";
import SearchField from "./SearchField";

const EditableTextInput = ({
  label,
  name,
  value,
  onChange,
  bg = "bg-[#F7F7F7]",
  display = true,
  placeholder,
  width = "w-full",
  labelwidth = "w-[25%]",
  saveButton,
}) => {
  const [editableContent, setEditableContent] = useState(value);
  const handleChange = (e) => {
    const newValue = e.target.value;
    setEditableContent(newValue);
    if (onChange) {
      onChange(name, newValue);
    }
  };

  return (
    <div className={`${width} ${display && "flex items-center gap-3"}`}>
      <div className={`${display ? labelwidth : "w-full"}`}>
        <p className="text-lg font-semibold">{label}</p>
      </div>
      <SearchField
        background={bg}
        placeholder={placeholder}
        value={editableContent}
        onChange={handleChange}
      />
      {saveButton && (
        <Button
          title={"Save"}
          bg="bg-green-500"
          hover="hover:bg-green-600"
          text={"text-white"}
        />
      )}
    </div>
  );
};

export default EditableTextInput;
