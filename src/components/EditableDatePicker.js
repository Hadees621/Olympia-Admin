import React from 'react';
import DatePickerField from './DatePickerField';
import Button from './Button';

const EditableDatePicker = ({ label, name, value, onChange, edit = false, background = "bg-[#F7F7F7]" }) => (
    <div className='w-full'>
        <p className="text-md font-semibold">{label}</p>
        <div className={`flex gap-2 items-center ${background}`}>
            <DatePickerField value={value} name={name} onChange={onChange} background={background} />
            {edit && <Button title={"Edit"} />
            }
        </div>
    </div>
);

export default EditableDatePicker;
