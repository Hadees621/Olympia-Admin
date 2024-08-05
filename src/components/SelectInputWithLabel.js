import React from 'react';
import Button from './Button';
import SelectField from './SelectField';

const SelectInputWithLabel = ({
    placeholder,
    onClick,
    background = "bg-[#F7F7F7]",
    name,
    value,
    onChange,
    label,
    width = 'w-full',
    edit = false,
    flex = false,
}) => {
    return (
        <div className={` ${width} ${flex ? "flex items-center gap-3" : ""}`}>
            <div className={`${flex ? "w-[20%]" : ""}`}>
                <p className="text-lg font-bold text-gray-600">{label}</p>
            </div>
            <SelectField
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                background={background}
                name={name}
            />
            <div className={`${edit && !flex ? "mt-3" : "mt-0"}`}>
                {edit && <Button title={"Edit"} onClick={onClick} />}
            </div>
        </div>
    );
};

export default SelectInputWithLabel;
