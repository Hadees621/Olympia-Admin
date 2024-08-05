import Button from "components/Button";
import React, { useState } from "react";
import EditableField from "./EditableField";
import FinalCheckHistory from "./FinalCheckHistory";
import SearchField from "pages/home/components/SearchField";
import Remaindered from "pages/editorial/components/Remaindered";
import SelectInputWithLabel from "components/SelectInputWithLabel";
import EditableTextarea from "components/EditableTextarea";

const FinalCheckView = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [data, setData] = useState([
        { id: 1, name: "Author name (cover and spine)", completed: false, date: null },
        { id: 2, name: "Book title (cover and spine)", completed: false, date: null },
        { id: 3, name: "Correct imprint logo (back and spine)", completed: false, date: null },
        { id: 4, name: "Check with databases. Back cover blurbs (spellings)", completed: false, date: null },
        { id: 5, name: "Price", completed: true, date: "29-11-2023" },
        { id: 6, name: "ISBN", completed: true, date: "29-11-2023" },
        { id: 7, name: "Classification", completed: true, date: "29-11-2023" },
        { id: 8, name: "Illustration credit if applicable", completed: false, date: null },
        { id: 9, name: "Author photo. Check if applicable (filenames)", completed: false, date: null },
        { id: 10, name: "Check quality and position", completed: false, date: null }
    ]);

    const handleCheckboxChange = (index) => {
        const newData = [...data];
        newData[index].completed = !newData[index].completed;
        newData[index].date = newData[index].completed ? new Date().toLocaleDateString() : null;
        setData(newData);
    };

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    const finalCheckHistoryData = [
        { date: "28-11-2023", checkedBy: "John Doe", action: "Approved" },
        { date: "27-11-2023", checkedBy: "Jane Smith", action: "Reviewed" },
        { date: "26-11-2023", checkedBy: "Emily Johnson", action: "Pending" }
    ];

    return (

        <div className="w-full text-start items-center m-4">
            {/* header */}
            <>
                <p className="text-3xl font-semibold mt-8 ml-8">
                    Welcome to Olympia Portal (olympia admin)
                </p>

                <div className="flex items-center mt-3 gap-3 m-4">
                    <SearchField placeholder="Book Title" />
                    <SearchField placeholder="Pen name/Author name" />
                    <Button title="Search" />
                    <Button title="Clear" />
                    <Button title="ISBN Search" href="/isbn-search" />
                </div>
            </>

            <Remaindered status={"Paid-in-full"} />

            <div className="py-4">
                <button
                    className={`font-bold  ${isEditing ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"} mb-4  text-white px-4 py-2 rounded`}
                    onClick={toggleEditMode}>
                    {isEditing ? "Save" : "Edit"}
                </button>
                <table className="min-w-full border-collapse block md:table">
                    <thead className="block md:table-header-group">
                        <tr className="border border-gray-300 md:border-none block md:table-row font-bold text-lg">
                            <th className="bg-gray-100 p-2 text-left md:table-cell">Field</th>
                            <th className="bg-gray-100 p-2 text-center md:table-cell">Completed</th>
                        </tr>
                    </thead>
                    <tbody className="block md:table-row-group">
                        {data.map((item, index) => (
                            <tr key={item.id} className="border border-gray-300 md:border-none block md:table-row">
                                <td className="p-2 md:table-cell font-bold text-lg border">{item.name}</td>
                                <EditableField
                                    fieldData={item}
                                    isEditing={isEditing}
                                    onCheckboxChange={() => handleCheckboxChange(index)}
                                />
                            </tr>
                        ))}
                        <tr className="w-full border">
                            <EditableTextarea />
                        </tr>
                    </tbody>
                </table>
            </div>
            <SelectInputWithLabel label={"Checked By*"} width="max-w-md" />

            <FinalCheckHistory history={finalCheckHistoryData} />
        </div>

    );
};

export default FinalCheckView;
