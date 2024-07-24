import React from 'react';
import SelectField from './SelectField';

const EditableDropdown = ({ label, name, value, onChange, options = [{ value: 'option1', label: 'Option 1' },
{ value: 'option2', label: 'Option 2' },
{ value: 'option3', label: 'Option 3' },] }) => (
    <div className='w-full'>
        <p className="text-md font-semibold text-gray-600">{label}</p>
        <SelectField options={options} value={value} />
    </div>
);

export default EditableDropdown;
