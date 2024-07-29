import React from 'react';

const EditableTextarea = ({ label, name, value, onChange, rows = 3, text, font = "text-lg" }) => (
    <div className='w-full'>
        <p className={`${font} text-md font-semibold`}>{label}</p>
        <textarea
            name={name}
            value={value}
            onChange={onChange}
            rows={rows}
            className='w-full p-2 shadow rounded-md mt-2'
            placeholder={text}
        />
    </div>
);

export default EditableTextarea;
