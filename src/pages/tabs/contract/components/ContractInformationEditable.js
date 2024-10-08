import React, { useState } from 'react';
import EditableRadio from 'components/EditableRadio';
import EditableDropdown from 'components/EditableDropdown';
import EditableTextarea from 'components/EditableTextarea';
import EditableTextInput from 'components/EditableTextInput';
import EditableDatePicker from 'components/EditableDatePicker';

const ContractInformationEditable = ({ infoLeft, infoRight }) => {
    const [formState, setFormState] = useState(() => {
        const initialState = {};
        [...infoLeft, ...infoRight].forEach(item => {
            initialState[item.name] = item.value;
        });
        return initialState;
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    return (
        <div className="w-full shadow-md bg-[#F7F7F7] p-4">
            <div className="flex justify-between gap-14 ">
                <div className="w-full grid gap-4">
                    {infoLeft.map((item, index) => (
                        <div key={index} className='w-full'>
                            {item.type === 'date' ? (
                                <EditableDatePicker
                                    label={item.label}
                                    name={item.name}
                                    value={formState[item.name]}
                                    onChange={handleChange}
                                    background='bg-white'
                                />
                            ) : item.type === 'dropdown' ? (
                                <EditableDropdown
                                    label={item.label}
                                    name={item.name}
                                    value={formState[item.name]}
                                    options={item.options}
                                    onChange={handleChange}
                                    bg='bg-white'

                                />
                            ) : item.type === 'radio' ? (
                                <EditableRadio
                                    label={item.label}
                                    name={item.name}
                                    value={formState[item.name]}
                                    options={item.options}
                                    onChange={handleChange}
                                    bg='bg-white'

                                />
                            ) : item.type === 'textarea' ? (
                                <EditableTextarea
                                    label={item.label}
                                    name={item.name}
                                    value={formState[item.name]}
                                    onChange={handleChange}
                                    background='bg-white'
                                />
                            ) : (
                                <EditableTextInput
                                    label={item.label}
                                    name={item.name}
                                    value={formState[item.name]}
                                    onChange={handleChange}
                                    isTextarea={item.isTextarea}
                                    bg='bg-white'
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="w-full grid gap-4">
                    {infoRight.map((item, index) => (
                        <div key={index} className='w-full'>
                            {item.type === 'date' ? (
                                <EditableDatePicker
                                    label={item.label}
                                    name={item.name}
                                    value={formState[item.name]}
                                    onChange={handleChange}
                                    background='bg-white'

                                />
                            ) : item.type === 'dropdown' ? (
                                <EditableDropdown
                                    label={item.label}
                                    name={item.name}
                                    value={formState[item.name]}
                                    options={item.options}
                                    onChange={handleChange}
                                    bg='bg-white'
                                />
                            ) : item.type === 'radio' ? (
                                <EditableRadio
                                    label={item.label}
                                    name={item.name}
                                    value={formState[item.name]}
                                    options={item.options}
                                    onChange={handleChange}
                                />
                            ) : item.type === 'textarea' ? (
                                <EditableTextarea
                                    label={item.label}
                                    name={item.name}
                                    value={formState[item.name]}
                                    onChange={handleChange}
                                    background='bg-white'
                                />
                            ) : (
                                <EditableTextInput
                                    label={item.label}
                                    name={item.name}
                                    value={formState[item.name]}
                                    onChange={handleChange}
                                    isTextarea={item.isTextarea}
                                    bg='bg-white'

                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ContractInformationEditable;
