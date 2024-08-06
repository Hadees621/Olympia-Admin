
import React from 'react';

const EditableRadio = ({
    label, name, value, onChange, options = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }
    ],
    text,
    flex = false,
    labelwidth = "w-[25%]"
}) => {
    return (
        <div className={`w-full ${flex ? "flex items-center gap-3" : "grid gap-2"}`}>
            <div className={`${flex ? labelwidth : "w-full"}`}>
                <label className='text-lg font-semibold '>{label}</label>
            </div>
            {text && <p className='italic'> {text} </p>}
            <div className={`w-full ${flex ? "flex items-center gap-3" : "grid gap-2"}`}>
                {options.map((option) => (
                    <label key={option.value} className='flex items-center'>
                        <input
                            type="radio"
                            name={name}
                            onChange={onChange}
                            value={option.value}
                            checked={value === option.value}
                            className='m-2 border border-black'
                        />
                        {option.label}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default EditableRadio;
