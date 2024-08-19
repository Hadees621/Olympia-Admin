import React from 'react';
import Button from './Button';
import SelectField from './SelectField';

const EditableDropdown = ({ label, name, value, bg, onChange, display = false, edit = false,
    options = [{ value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }]
}) => (
    <div className={` w-full ${display && ""}`}>
        <p className="text-md font-semibold text-gray-600">{label}</p>
        <div className={`flex gap-2 items-center ${bg}`}>
            <SelectField options={options} value={value} background={bg} />
            {edit && <Button title={"Edit"} />
            }
        </div>
    </div>
);

export default EditableDropdown;
