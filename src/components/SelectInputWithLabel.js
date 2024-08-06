import React from 'react';
import Button from './Button';
import SelectField from './SelectField';

const SelectInputWithLabel = ({
    background = "bg-[#F7F7F7]",
    width = 'w-full',
    labelwidth = "w-[25%]",
    edit = false,
    flex = false,
    placeholder,
    onClick,
    name,
    value,
    onChange,
    label,
}) => {
    return (
        <div className={`w-full ${width} ${flex ? "flex items-center gap-3" : ""}`}>
            <div className={`${flex ? labelwidth : "w-full"}`}>
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
