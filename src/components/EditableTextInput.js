import React, { useState } from 'react';
import SearchField from 'pages/home/components/SearchField';

const EditableTextInput = ({ label, name, value, onChange, bg = 'bg-white' }) => {
    const [editableContent, setEditableContent] = useState(value);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setEditableContent(newValue);
        if (onChange) {
            onChange(name, newValue);
        }
    };

    return (
        <div className='w-full'>
            <p className="text-md font-semibold text-gray-600">{label}</p>
            <SearchField
                background={bg}
                value={editableContent}
                onChange={handleChange}
            />
        </div>
    );
};

export default EditableTextInput;


// import React from 'react';
// import SearchField from 'pages/home/components/SearchField';

// const EditableTextInput = ({ label, name, value, onChange }) => (
//     const [editableContent, setEditableContent] = useState(content);

//     const handleChange = (e) => {
//         const newValue = e.target.value;
//         setEditableContent(newValue);
//         if (onChange) {
//           onChange(newValue);
//         }
//       };

//     <div className='w-full'>
//         <p className="text-md font-semibold text-gray-600">{label}</p>
//         <SearchField background='bg-white' value={value} onChange={handleChange} />
//     </div>
// );

// export default EditableTextInput;
