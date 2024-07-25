import React from 'react';
import EditableDatePicker from './EditableDatePicker';
import EditableDropdown from './EditableDropdown';
import EditableRadio from './EditableRadio';
import EditableTextarea from './EditableTextarea';
import EditableTextInput from './EditableTextInput';

const EditableFieldsGroup = ({ fields, formState, handleChange, gap }) => {
    return (
        <div className={`grid px-2 w-full ${gap}`}>
            {fields.map((item, index) => (
                <div key={index} className="w-full">
                    {item.type === 'date' ? (
                        <EditableDatePicker
                            label={item.label}
                            name={item.name}
                            value={formState[item.name]}
                            onChange={(value) => handleChange(item.name, value)}
                            edit={item.edit}
                        />
                    ) : item.type === 'dropdown' ? (
                        <EditableDropdown
                            label={item.label}
                            name={item.name}
                            value={formState[item.name]}
                            options={item.options}
                            onChange={(value) => handleChange(item.name, value)}
                            edit={item.edit}
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
                        />
                    ) : (
                        <EditableTextInput
                            label={item.label}
                            name={item.name}
                            value={formState[item.name]}
                            onChange={(value) => handleChange(item.name, value)}
                            isTextarea={item.isTextarea}
                            edit={item.edit}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default EditableFieldsGroup;
