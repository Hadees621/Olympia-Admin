
import React from 'react';

const EditableRadio = ({
    label, name, value, onChange, options = [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' }
    ]
    ,
    text
}) => {
    return (
        <div>
            <label className='text-lg font-semibold '>{label}</label>
            {text && <p className='italic'> {text}</p>}
            <div className='grid'>
                {options.map((option) => (
                    <label key={option.value} className='flex items-center'>
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={value === option.value}
                            onChange={onChange}

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
