import Button from "components/Button";
import React, { useState } from "react";
import Speaker from "utils/icons/Speaker";
import Notepad from "utils/icons/Notepad";
import Modal from "components/modals/Modal";
import Calculator from "utils/icons/Calculator";
import TableButton from "components/TableButton";
import SelectField from "components/SelectField";
import SearchField from "pages/home/components/SearchField";
import EditableField from "pages/bumblebee/components/EditableField";
import EditorialNotes from "pages/editorial/components/EditorialNotes";

const AllContractsTab = ({ data, onSave }) => {
    const [editingIndex, setEditingIndex] = useState(null);
    const [editableData, setEditableData] = useState(data);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleEditClick = (index) => {
        setEditingIndex(index);
    };

    const handleSaveClick = () => {
        setEditingIndex(null);
        if (onSave) onSave(editableData);
    };

    const getStatusClass = (status) => {
        switch (status) {
            case "Pending":
                return "status-button status-pending";
            case "Paid in Full":
                return "status-button status-paid";
            case "Hardback":
                return "status-button status-hardback";
            case "Traditional":
                return "status-button status-traditional";
            case "Paying":
                return "status-button status-paying";
            default:
                return "status-button";
        }
    };

    const handleCheckboxChange = (rowIndex, field) => {
        const updatedData = [...editableData];
        updatedData[rowIndex] = {
            ...updatedData[rowIndex],
            [field]: {
                ...updatedData[rowIndex][field],
                completed: !updatedData[rowIndex][field].completed,
                date: !updatedData[rowIndex][field].completed ? new Date().toLocaleDateString() : ""
            }
        };
        setEditableData(updatedData);
    };

    return (
        <div>
            <div className="flex items-center my-8 gap-3 m-4">
                <SearchField placeholder="Book Title" />
                <SearchField placeholder="Pen Name/Author Name" />
                <Button title="Search" />
                <Button title="Clear" />
                <SelectField placeholder="Select Filter" />
            </div>

            <div className="mb-3 w-full mx-4 font-semibold text-lg">
                <p>Total Records: 2589</p>
            </div>
            <div className="overflow-x-auto shadow-md transition-all duration-300">
                <table className="w-full text-sm text-left max-h-[500px]">
                    <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
                        <tr className="text-sm font-medium text-gray-500 uppercase text-center">
                            <th className="px-6 py-3 border">Status</th>
                            <th className="px-6 py-3 border">Pen Name</th>
                            <th className="px-6 py-3 border">Book Title</th>
                            <th className="px-6 py-3 border">Imprint</th>
                            <th className="px-6 py-3 border">Images</th>
                            <th className="px-6 py-3 border">Contract Date</th>
                            <th className="px-6 py-3 border">Remaining Day(s)/Date</th>
                            <th className="px-6 py-3 border">Author Forms</th>
                            <th className="px-6 py-3 border">Proofs format</th>
                            <th className="px-6 py-3 border">HS</th>
                            <th className="px-6 py-3 border">Cover Blurb</th>
                            <th className="px-6 py-3 border">90 days activated</th>
                            <th className="px-6 py-3 border">Cover design</th>
                            <th className="px-6 py-3 border">1st Proofs @reader</th>
                            <th className="px-6 py-3 border">1st Proofs @author</th>
                            <th className="px-6 py-3 border">1st Proofs @amender</th>
                            <th className="px-6 py-3 border">2nd Proofs @author</th>
                            <th className="px-6 py-3 border">3rd proofs @author</th>
                            <th className="px-6 py-3 border">Cover certificate received</th>
                            <th className="px-6 py-3 border">Proofs certificate received</th>
                            <th className="px-6 py-3 border">Finalised for print</th>
                            <th className="px-6 py-3 border">Send for final check</th>
                            <th className="px-6 py-3 border">Publication Date</th>
                            <th className="px-6 py-3 border">Contract payment status</th>
                            <th className="px-6 py-3 border">Edit</th>
                            <th className="px-6 py-3 border">Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap"
                        >
                            <td className="px-6 py-4 border">row.status</td>
                            <td className="px-6 py-4 border">row.penName</td>
                            <td className="px-6 py-4 border">row.bookTitle</td>
                            <td className="px-6 py-4 border">row.imprint</td>
                            <td className="px-6 py-4 border">row.images</td>
                            <td className="px-6 py-4 border">row.contractDate</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} title="Editorial" width="max-w-[120vh]">
                <EditorialNotes title={"Editorial notes"}
                    questionnaire={"/pending-production-questionnaires"} questionnaireType={"Pending Production questionnaire"}
                />
            </Modal>
        </div>
    );
};

export default AllContractsTab;

