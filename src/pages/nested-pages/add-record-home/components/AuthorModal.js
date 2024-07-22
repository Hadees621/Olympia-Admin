import React from 'react';
import { Field } from './Field';
import Button from 'components/Button';
import SelectField from 'components/SelectField';
import SearchField from 'pages/home/components/SearchField';
import DatePickerField from 'components/DatePickerField';

const AuthorModal = ({ isOpen, onClose, onSave, onblur }) => {
    if (!isOpen) return null;

    const handleSave = () => {
        onSave();
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center top-[-20px] w-full">
            <div className="bg-white rounded-lg w-full max-w-5xl p-6 max-h-[600px] overflow-x-auto">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold uppercase">Add New Author</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-red-800 text-4xl">
                        &times;
                    </button>
                </div>
                <form className="mt-4 space-y-4">
                    <div className='flex gap-5  '>
                        <SearchField type="text" />
                        <Button title={"Load Author"} />
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className='space-y-4'>
                            <Field label="Title*" component={<SelectField type="text"
                                options={[
                                    { value: "GBP", label: "Mr." },
                                    { value: "GBP", label: "Miss" },
                                    { value: "GBP", label: "Mrs." },
                                    { value: "GBP", label: "Ms." },
                                    { value: "GBP", label: "Mx." },
                                    { value: "GBP", label: "Dr." },
                                    { value: "GBP", label: "Prof" },
                                    { value: "USD", label: "Master" },
                                ]}

                            />} />
                            <Field label="First Name*" component={<SearchField type="text" placeholder="Enter First Name" />} />
                            <Field label="Last Name*" component={<SearchField type="text" placeholder="Enter Last Name" />} />
                            <Field label="Pen Name*" component={<SearchField type="text" placeholder="Enter Pen Name" />} />
                            <Field label="Email Address" component={<SearchField type="text" placeholder="Enter Email Address" />} />
                            <Field label="Tel" component={<SearchField type="text" placeholder="Enter home or work contact number " />} />
                            <Field label="Mobile" component={<SearchField type="text" placeholder="Enter Mobile Number" />} />
                            <Field label="DOB" component={<DatePickerField />} />
                            <Field label="Author photo" component={<input type="file" className="bg-[#F7F7F7] mt-1 block w-full border-gray-300 rounded-md shadow-sm border p-3" />} />
                        </div>
                        <div className='space-y-4'>
                            <Field label="Address line 1" component={<SearchField type="text" placeholder={"Enter Address line 1"} />} />
                            <Field label="Address line 2" component={<SearchField type="text" placeholder="Enter Address line 2" />} />
                            <Field label="Town/City" component={<SearchField type="text" placeholder="Enter Town/City" />} />
                            <Field label="State" component={<SearchField type="text" placeholder="Enter State" />} />
                            <Field label="Country" component={<SearchField type="text" placeholder="Entre Country" />} />
                            <Field label="Postcode" component={<SearchField type="text" placeholder="Enter Postcode" />} />
                            <Field label="Mobile" component={<SearchField type="text" placeholder="Select Book Type" />} />
                            <Field label="Author Notes" component={<textarea
                                placeholder="Enter author related notes"
                                className="mt-1 block w-full border-gray-400 rounded-md shadow-md bg-[#F7F7F7] p-2"
                                rows={4}
                            ></textarea>} />
                        </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                        <Button title={"Cancel"} onClick={handleSave} bg='bg-gray-300 hover:bg-gray-400 ' text={"text-gray-700"} />
                        <Button title={"Save Author"} onClick={handleSave} bg='bg-green-500 hover:bg-green-600' text={"text-white"} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthorModal;
