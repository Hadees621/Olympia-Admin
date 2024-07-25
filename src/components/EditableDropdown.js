import React from 'react';
import SelectField from './SelectField';
import Button from './Button';

const EditableDropdown = ({ label, name, value, onChange, edit = false, options = [{ value: 'option1', label: 'Option 1' },
{ value: 'option2', label: 'Option 2' },
{ value: 'option3', label: 'Option 3' },] }) => (
    <div className='w-full'>
        <p className="text-md font-semibold text-gray-600">{label}</p>
        <div className='flex gap-2 items-center'>
            <SelectField options={options} value={value} />
            {edit && <Button title={"Edit"} />
            }
        </div>
    </div>
);

export default EditableDropdown;
