import React from 'react';

const EditableTextarea = ({ label, name, value, onChange, rows = 3 }) => (
    <div className='w-full '>
        <p className="text-md font-semibold text-gray-600">{label}</p>
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            rows={rows}
            className='w-full p-2  shadow rounded-md'
        />
    </div>
);

export default EditableTextarea;
