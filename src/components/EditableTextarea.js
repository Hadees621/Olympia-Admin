import React from 'react';

const EditableTextarea = ({ label, name, value, onChange, rows = 3, text, font = "text-lg", flex = false, width = 'w-full', labelwidth = "w-[25%]", background = "bg-[#F7F7F7]" }) => (
    <div className={`${width} ${flex ? "flex items-center gap-3" : ""}`}>
        <div className={`${flex ? labelwidth : "w-full"}`}>
            <p className={`${font} text-md font-semibold`}>{label}</p>
        </div>
        <div className='w-full'>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                rows={rows}
                className={`w-full p-2 shadow rounded-md mt-2 ${background}`}
                placeholder={text}
            />
        </div>
    </div>
);

export default EditableTextarea;
