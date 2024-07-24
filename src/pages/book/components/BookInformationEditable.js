import React from "react";
import EditableTextInput from "components/EditableTextInput";
import ImageUploader from "./ImageUploader";
import EditableDatePicker from "components/EditableDatePicker";
import EditableDropdown from "components/EditableDropdown";
import Button from "components/Button";

const BookInformationEditable = ({ title, info, imageUrl }) => (
    <div className="w-full shadow-md bg-[#F7F7F7]">
        <div className="p-5 mx-4 border-b">
            <p className="text-xl font-bold">{title}</p>
        </div>
        <div className="flex justify-between p-8">
            <div className="grid my-4 gap-4 w-full">
                <EditableDatePicker label={"Publishing date:"} />
                <EditableDropdown label={"Situation:"} options={[{ value: "Under Production", label: "Under Production" }, { value: "Released", label: "Released" },
                { value: "Marketing", label: "Marketing" }, { value: "Remaindered", label: "Remaindered" },
                { value: "OnHold", label: "On Hold" }]} />
                <EditableDropdown label={"Imprint:"} options={[{ value: "Published", label: "Ebooks" }, { value: "Unpublished", label: "Olympia" }, { value: "bumblebee", label: "Bumblebee" }]} />
            </div>
            {imageUrl && (
                <div className="w-full borer borer-black justify-center grid items-center">
                    <p className="text-sm font-semibold text-gray-600">Book Cover:</p>
                    <img src={imageUrl} alt="book cover" />
                    <ImageUploader />
                </div>
            )}
            <div className="grid gap-4 px-2 w-full brder border-blck">
                <EditableTextInput label={"Price £ (GBP):"} value={"7.99"} />
                <EditableTextInput label={"Price $ (USD)::"} value={"7.99"} />
                <EditableTextInput label={"Price € (EU):"} value={"7.99"} />
                <EditableTextInput label={"Price $ (CAD):"} value={"7.99"} />
                <EditableTextInput label={"Price $ (AUD):"} value={"7.99"} />
                <EditableTextInput label={"Price ₹(INR):"} value={"7.99"} />
            </div>
        </div>
        <div className="flex p-6 border-t mx-4 justify-start gap-6">
            <div className="grid gap-4 px- w-full">
                <div className="space-y-4">
                    <EditableDropdown label={"Paperback:"} options={[{ value: "Remaindered", label: "Yes" }, { value: "Remaindered", label: "No" }]} />
                    <EditableTextInput label={"ISBN:"} value={"978-1-905513-51-2"} />

                    <EditableDropdown label={"Paperback:"} options={[{ value: "Remaindered", label: "Yes" }, { value: "Remaindered", label: "No" }]} />
                    <EditableTextInput label={"ISBN:"} value={"978-1-905513-51-2"} />

                    <EditableDropdown label={"Paperback:"} options={[{ value: "Remaindered", label: "Yes" }, { value: "Remaindered", label: "No" }]} />
                    <EditableTextInput label={"ISBN:"} value={"978-1-905513-51-2"} />

                    <EditableDropdown label={"Paperback:"} options={[{ value: "Remaindered", label: "Yes" }, { value: "Remaindered", label: "No" }]} />
                    <EditableTextInput label={"ISBN:"} value={"978-1-905513-51-2"} />
                </div>

            </div>
            <div className="grid gap-4 px-2 w-full">

                <EditableTextInput label={"Book No:"} value={1} />
                <div className="grid ">
                    <EditableDropdown label={"Format:"} options={[{ value: "Remaindered", label: "Paperback Edition" }, { value: "Remaindered", label: "Largeback Edition" }, { value: "Remaindered", label: "Paperback Edition" },
                    { value: "Remaindered", label: "E-Book" }]} />
                    <Button title={"Edit"} />
                </div>

                <EditableTextInput label={"No of pages:"} value={192} />

                <div className="grid ">
                    <EditableDropdown label={"Size:"} />
                    <Button title={"Edit"} />
                </div>
            </div>
        </div>
    </div>
);

export default BookInformationEditable;
