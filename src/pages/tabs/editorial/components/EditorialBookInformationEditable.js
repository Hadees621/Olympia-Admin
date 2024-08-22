import React, { useState } from "react";
import InputWithLabel from "components/InputWithLabel";
import EditableDropdown from "components/EditableDropdown";
import EditableTextInput from "components/EditableTextInput";
import EditableFieldsGroup from "components/EditableFieldsGroup";
import DatePickerWIthLabel from "components/DatePickerWIthLabel";
import SelectInputWithLabel from "components/SelectInputWithLabel";
import {
    editorialBookDetails4,
    editorialBookDetails44,
    editorialBookDetails5,
    editorialBookDetails55,
    editorialBookDetails555,
    pricing
} from "../utils/utils";

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
                            <SelectInputWithLabel
                                label={book.label}
                                background={'bg-white'}
                                options={[
                                    { value: "Yes", label: "Yes" },
                                    { value: "No", label: "No" }
                                ]}
                            />
                            <EditableTextInput labelwidth="w-[10%]" label={"ISBN:"} value={book.isbn} bg="bg-white" />
                        </div>
                    ))}
                </div>
                <div className="grid gap-3 w-full">
                    <DatePickerWIthLabel label={'Ready for Publication:'} background="bg-white" />
                    {pricing.map((item, index) => (
                        <div key={index}>
                            <div className="text-left font-medium text-gray-600">
                                {item.label}
                            </div>
                            <EditableTextInput
                                className="text-left text-black font-semibold"
                                value={item.value}
                                bg="bg-white"
                                labelwidth="w-[15%]"
                                onChange={(value) => {
                                    const newPricing = [...pricing];
                                    newPricing[index].value = value;
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex p-4 border-t mx-2 justify-between py-5">
                <div className="grid gap-4 px-2 w-full">
                    <div className="flex gap-2">
                        <div className="text-left text-lg font-bold">
                            Category
                        </div>
                        <div className="flex w-full gap-2">
                            <EditableDropdown bg={'bg-white'} />
                            <EditableDropdown bg={'bg-white'} />
                            <EditableDropdown bg={'bg-white'} />
                        </div>
                    </div>
                    <InputWithLabel label={"Word Count"} background="bg-white" flex={true} labelwidth="w-[15%]" />
                </div>
                <div className="grid gap- px-2 w-full">
                    <InputWithLabel flex={true} label={"Target audience age:"} background="bg-white" />
                    <InputWithLabel flex={true} label={"Age group: "} background="bg-white" />
                </div>
            </div>

            <div className="flex p-4 border-t mx-2 py-7">
                <div className="grid gap-3 px-2 w-full">
                    <EditableFieldsGroup bg={'bg-white'} fields={editorialBookDetails4} formState={formState} handleChange={handleChange} gap={"gap-2"} />
                </div>

                <div className="grid px-2 w-full">
                    <EditableFieldsGroup bg={'bg-white'} fields={editorialBookDetails44} formState={formState} handleChange={handleChange} gap={"gap-2"} />
                </div>
            </div>

            <div className="grid p-2 border-t mx-5 pt-7 py-7">
                <div className="grid grid-cols-3">
                    <EditableFieldsGroup bg={'bg-white'} fields={editorialBookDetails5} formState={formState} handleChange={handleChange} gap={"gap-3"} />
                    <EditableFieldsGroup bg={'bg-white'} fields={editorialBookDetails55} formState={formState} handleChange={handleChange} gap={"gap-3"} />
                    <EditableFieldsGroup bg={'bg-white'} fields={editorialBookDetails555} formState={formState} handleChange={handleChange} gap={"gap-3"} />
                </div>
            </div>
        </div>
    );
};

export default EditorialBookInformationEditable;