import Title from "components/Title";
import Button from "components/Button";
import React, { useState } from "react";
import { tableData } from "./utils/utils";
import useSidebarStore from "stores/States";
import Modal from "components/modals/Modal";
import FileUpload from "components/FileUpload";
import TableButton from "components/TableButton";
import SelectField from "components/SelectField";
import InputWithLabel from "components/InputWithLabel";
import SearchField from "components/SearchField";
import SelectInputWithLabel from "components/SelectInputWithLabel";

const PendingPurchases = () => {
    const { isOpen } = useSidebarStore();
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div className="w-full text-start items-center m-4">
            <Title title="Pending Purchases" />

            <div className="flex items-center mt-3 gap-3">
                <p className="font-bold text-lg">Upload Invoice:</p>
                <FileUpload buttonflag={false} />
                <SearchField placeholder="Client Name" />
                <p className="font-bold text-lg">Uploaded by:</p>
                <SelectField placeholder="Select Client" />
                <Button title="Upload" />
                <Button title="All Purchases" href="/all-purchases" />
                <Button title="ISBN Search" href="/isbn-search" />
            </div>

            <div
                className={`mt-3 overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
                    }`}
            >
                <table className="min-w-full table-fixed divide-y divide-gray-200">
                    <thead className="uppercase bg-gray-50 sticky top-0 z-10">
                        <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
                            <th className="p-3 w-1/6">Client</th>
                            <th className="p-3 w-1/6">Files</th>
                            <th className="p-3 w-1/6">Uploaded By</th>
                            <th className="p-3 w-1/6">Date</th>
                            <th className="p-3 w-1/6">Actions</th>
                        </tr>
                    </thead>
                    {tableData.map((data, index) => (
                        <tr key={index} className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap custom-hover-row">
                            <td className="px-6 py-4 leading-5">{data.client}</td>
                            <td className="px-6 py-4 leading-5">{data.files}</td>
                            <td className="px-6 py-4 border-gray-300 leading-5">{data.uploadedBy}</td>
                            <td className="px-6 py-4 leading-5">{data.date}</td>
                            <td className="px-6 py-4">
                                <div className="flex justify-center items-center space-x-2">
                                    <TableButton title={"Create Purchase"} onClick={() => setIsModalVisible(true)} />
                                    <TableButton
                                        title={"X"}
                                        bg="bg-red-500"
                                        hover="bg-red-600"
                                        text={"text-white"}
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>

            <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} onSave={() => setIsModalVisible(false)} title="Add New Purchase" width="max-w-[70vh]">
                <p className="font-bold text-xl py-2"> Client Information </p>
                <div className="space-y-4 pt-5 px-5">
                    <InputWithLabel label={"First Name:"} flex={true} />
                    <InputWithLabel label={"Last Name:"} flex={true} />
                    <InputWithLabel label={"Company:"} flex={true} />
                </div>
                <p className="font-bold text-xl py-7"> Purchase </p>
                <div className="space-y-4 px-5">
                    <InputWithLabel label={"Reference: "} edit={true} flex={true} />
                    <SelectInputWithLabel label={"Reference: "} flex={true} />
                    <InputWithLabel label={"Invoice Date: "} flex={true} />
                    <InputWithLabel label={"Invoice Number: "} flex={true} />
                    <InputWithLabel label={"Due Date: "} flex={true} />
                    <InputWithLabel label={"NET: "} flex={true} />
                    <InputWithLabel label={"VAT: "} flex={true} />
                    <InputWithLabel label={"Total Amount: "} flex={true} />
                    <InputWithLabel label={"Amount Paid: "} flex={true} />
                    <InputWithLabel label={"Date Paid: "} flex={true} />
                    <SelectInputWithLabel label={"Status: "} flex={true} />
                    <SelectInputWithLabel label={"Method: "} flex={true} />
                    <SelectInputWithLabel label={"Paid By: "} edit={true} flex={true} />
                </div>
            </Modal>
        </div >
    );
};

export default PendingPurchases;