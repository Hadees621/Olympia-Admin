import React from "react";
import Button from "components/Button";
import ImageUploader from "./ImageUploader";
import EditableDropdown from "components/EditableDropdown";
import EditableTextInput from "components/EditableTextInput";
import EditableDatePicker from "components/EditableDatePicker";

const bookTypes = [
    { label: "Paperback:", isbn: "978-1-905513-51-2" },
    { label: "Hardback:", isbn: "978-1-905513-51-3" },
    { label: "eBook:", isbn: "978-1-905513-51-4" },
    { label: "Audio book:", isbn: "978-1-905513-51-5" }
];

const BookInformationEditable = ({ title, imageUrl }) => (
    <div className="w-full shadow-md bg-[#F7F7F7]">
        <div className="p-5 mx-4 border-b">
            <p className="text-xl font-bold">{title}</p>
        </div>

        <div className="flex justify-between p-8">
            <div className="grid my-4 gap-4 w-full">
                <EditableDatePicker label={"Publishing date:"} background="bg-white" />
                <EditableDropdown
                    bg={"bg-white"}
                    label={"Situation:"}
                    options={[
                        { value: "Under Production", label: "Under Production" },
                        { value: "Released", label: "Released" },
                        { value: "Marketing", label: "Marketing" },
                        { value: "Remaindered", label: "Remaindered" },
                        { value: "OnHold", label: "On Hold" }
                    ]}
                />
                <EditableDropdown
                    bg={"bg-white"}
                    label={"Imprint:"}
                    options={[
                        { value: "Published", label: "Ebooks" },
                        { value: "Unpublished", label: "Olympia" },
                        { value: "bumblebee", label: "Bumblebee" }
                    ]}
                />
            </div>
            {imageUrl && (
                <div className="w-full justify-center grid items-center">
                    <p className="text-sm font-semibold text-gray-600">Book Cover:</p>
                    <img src={imageUrl} alt="book cover" />
                    <ImageUploader />
                </div>
            )}
            <div className="grid gap-4 px-2 w-full">
                <EditableTextInput label={"Price £ (GBP):"} value={"7.99"} />
                <EditableTextInput label={"Price $ (USD):"} value={"7.99"} />
                <EditableTextInput label={"Price € (EU):"} value={"7.99"} />
                <EditableTextInput label={"Price $ (CAD):"} value={"7.99"} />
                <EditableTextInput label={"Price $ (AUD):"} value={"7.99"} />
                <EditableTextInput label={"Price ₹ (INR):"} value={"7.99"} />
            </div>
        </div>

        <div className="flex p-6 border-t mx-4 justify-start gap-6">
            <div className="grid gap-4 w-full">
                {bookTypes.map((book, index) => (
                    <div key={index} className="space-y-4">
                        <EditableDropdown
                            bg={"bg-white"}
                            label={book.label}
                            options={[
                                { value: "Yes", label: "Yes" },
                                { value: "No", label: "No" }
                            ]}
                        />
                        <EditableTextInput label={"ISBN:"} value={book.isbn} labelwidth="w-[12%]" />
                    </div>
                ))}
            </div>
            <div className="grid gap-4 w-full">
                <EditableTextInput label={"Book No:"} value={1} labelwidth="w-[15%]" />
                <div className="grid">
                    <EditableDropdown
                        bg={"bg-white"}
                        label={"Format:"}
                        options={[
                            { value: "Paperback Edition", label: "Paperback Edition" },
                            { value: "Largeback Edition", label: "Largeback Edition" },
                            { value: "E-Book", label: "E-Book" }
                        ]}
                    />
                    <Button title={"Edit"} />
                </div>
                <EditableTextInput label={"No of pages:"} value={192} labelwidth="w-[15%]" />
                <div className="grid">
                    <EditableDropdown label={"Size:"} bg={"bg-white"} />
                    <Button title={"Edit"} />
                </div>
            </div>
        </div>
    </div>
);

export default BookInformationEditable;
