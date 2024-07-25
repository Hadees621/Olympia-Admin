import React, { useState } from "react";
import EditableTextInput from "components/EditableTextInput";
import EditableDropdown from "components/EditableDropdown";
import EditableDatePicker from "components/EditableDatePicker";
import {
    editorialBookDetails4,
    editorialBookDetails44,
    editorialBookDetails5,
    editorialBookDetails55,
    editorialBookDetails555,
    pricing
} from "../utils/utils";
import EditableFieldsGroup from "components/EditableFieldsGroup";

const bookTypes = [
    { label: "Paperback:", isbn: "978-1-905513-51-2" },
    { label: "Hardback:", isbn: "978-1-905513-51-3" },
    { label: "eBook:", isbn: "978-1-905513-51-4" },
    { label: "Audio book:", isbn: "978-1-905513-51-5" }
];

const EditorialBookInformationEditable = ({ title, info, bookFlag }) => {
    const [formState, setFormState] = useState(() => {
        const initialState = {};
        editorialBookDetails4.forEach(item => {
            initialState[item.name] = item.value;
        });
        return initialState;
    });

    const handleChange = (name, value) => {
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="w-full shadow-md bg-[#F7F7F7]">
            <div className="p-5 mx-4 border-b">
                <p className="text-xl font-bold">{title}</p>
            </div>

            <div className="flex p-6 mx-4 justify-between gap-10 py-7">
                <div className="grid gap-4 w-full">
                    {bookTypes.map((book, index) => (
                        <div key={index} className="space-y-4">
                            <EditableDropdown
                                label={book.label}
                                options={[
                                    { value: "Yes", label: "Yes" },
                                    { value: "No", label: "No" }
                                ]}
                            />
                            <EditableTextInput label={"ISBN:"} value={book.isbn} />
                        </div>
                    ))}
                </div>
                <div className="grid gap-3 w-full">
                    <div>
                        <p className="text-sm font-semibold text-gray-600">Ready for Publication:</p>
                        <EditableDatePicker value="27-09-2007" onChange={(date) => {
                        }} />
                    </div>
                    {pricing.map((item, index) => (
                        <div key={index}>
                            <div className="text-left font-medium text-gray-600">
                                {item.label}
                            </div>
                            <EditableTextInput
                                className="text-left text-black font-semibold"
                                value={item.value}
                                onChange={(value) => {
                                    const newPricing = [...pricing];
                                    newPricing[index].value = value;
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex p-6 border-t mx-2 justify-between py-7">
                <div className="grid fle grid-cols-2 gap-4 px-2 w-full">
                    <div className="text-left font-medium text-gray-600">
                        Category
                    </div>
                    <div className="flex w-full gap-2">
                        <EditableDropdown />
                        <EditableDropdown />
                        <EditableDropdown />
                    </div>
                    <div className="text-left font-medium text-gray-600">
                        Word Count
                    </div>
                    <div className="flex w-full">
                        <EditableTextInput />
                    </div>
                </div>
                <div className="grid gap-4 grid-cols-2 px-2 w-full">
                    <div className="text-left font-medium text-gray-600">
                        Target audience age:
                    </div>
                    <div className="flex w-full">
                        <EditableTextInput />
                    </div>
                    <div className="text-left font-medium text-gray-600">
                        Age group
                    </div>
                    <div className="flex w-full">
                        <EditableDropdown />
                    </div>
                </div>
            </div>

            <div className="flex p-4 border-t mx-2 py-7">
                <div className="grid gap-3 px-2 w-full">
                    <EditableFieldsGroup fields={editorialBookDetails4} formState={formState} handleChange={handleChange} gap={"gap-2"} />
                </div>

                <div className="grid px-2 w-full">
                    <EditableFieldsGroup fields={editorialBookDetails44} formState={formState} handleChange={handleChange} gap={"gap-2"} />
                </div>
            </div>
            <div className="grid p-2 border-t mx-5 pt-7 py-7">
                <div className="grid grid-cols-3">
                    <EditableFieldsGroup fields={editorialBookDetails5} formState={formState} handleChange={handleChange} gap={"gap-3"} />
                    <EditableFieldsGroup fields={editorialBookDetails55} formState={formState} handleChange={handleChange} gap={"gap-3"} />
                    <EditableFieldsGroup fields={editorialBookDetails555} formState={formState} handleChange={handleChange} gap={"gap-3"} />
                </div>
            </div>
        </div>
    );
};

export default EditorialBookInformationEditable;