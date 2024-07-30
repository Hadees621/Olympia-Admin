import React, { useState } from 'react';
import SearchField from 'pages/home/components/SearchField';

const EditableTextInput = ({ label, name, value, onChange, bg = 'bg-white', display = true, placeholder }) => {
    const [editableContent, setEditableContent] = useState(value);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setEditableContent(newValue);
        if (onChange) {
            onChange(name, newValue);
        }
    };

    return (
        <div className={`w-full  ${display && "flex items-center gap-3"}`}>
            <p className="text-md font-semibold text-gray-600">{label}</p>
            <SearchField
                background={bg}
                placeholder={placeholder}
                value={editableContent}
                onChange={handleChange}
            />
        </div>
    );
};

export default EditableTextInput;

