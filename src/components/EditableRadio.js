
import React from 'react';

const EditableRadio = ({ label, name, value, options, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <div className='grid'>
                {options.map((option) => (
                    <label key={option.value}>
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
