import React from 'react';
import DatePickerField from './DatePickerField';
import Button from './Button';

const EditableDatePicker = ({ label, name, value, onChange, edit = false }) => (
    <div className='w-full'>
        <p className="text-md font-semibold text-gray-600">{label}</p>
        <div className='flex gap-2 items-center'>
            <DatePickerField value={value} name={name} onChange={onChange} />
            {edit && <Button title={"Edit"} />
            }
        </div>
    </div>
);

export default EditableDatePicker;
