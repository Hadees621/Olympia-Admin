import React from 'react';
import EditableRadio from './EditableRadio';
import EditableTextarea from './EditableTextarea';
import EditableDropdown from './EditableDropdown';
import EditableTextInput from './EditableTextInput';
import EditableDatePicker from './EditableDatePicker';

const EditableFieldsGroup = ({ fields, formState, handleChange, gap, bg }) => {
    return (
        <div className={`grid px-2 w-full ${gap}`}>
            {fields.map((item, index) => (
                <div key={index} className="w-full space-y-3">
                    {item.type === 'date' ? (
                        <EditableDatePicker
                            label={item.label}
                            name={item.name}
                            value={formState[item.name]}
                            onChange={(value) => handleChange(item.name, value)}
                            edit={item.edit}
                            background={bg}
                        />
                    ) : item.type === 'dropdown' ? (
                        <EditableDropdown
                            label={item.label}
                            name={item.name}
                            value={formState[item.name]}
                            options={item.options}
                            onChange={(value) => handleChange(item.name, value)}
                            edit={item.edit}
                            bg={bg}
                        />
                    ) : item.type === 'radio' ? (
                        <EditableRadio
                            label={item.label}
                            name={item.name}
                            value={formState[item.name]}
                            options={item.options}
                            onChange={(value) => handleChange(item.name, value)}
                            edit={item.edit}

                        />
                    ) : item.type === 'textarea' ? (
                        <EditableTextarea
                            label={item.label}
                            name={item.name}
                            value={formState[item.name]}
                            onChange={(value) => handleChange(item.name, value)}
                            edit={item.edit}
                            background={bg}
                        />
                    ) : (
                        <EditableTextInput
                            label={item.label}
                            name={item.name}
                            value={formState[item.name]}
                            onChange={(value) => handleChange(item.name, value)}
                            isTextarea={item.isTextarea}
                            edit={item.edit}
                            bg={bg}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default EditableFieldsGroup;
