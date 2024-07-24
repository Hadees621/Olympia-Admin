import React from 'react';
import DatePickerField from './DatePickerField';

const EditableDatePicker = ({ label, name, value, onChange }) => (
    <div className='w-full'>
        <p className="text-md font-semibold text-gray-600">{label}</p>
        <DatePickerField value={value} name={name} onChange={onChange} />
    </div>
);

export default EditableDatePicker;
