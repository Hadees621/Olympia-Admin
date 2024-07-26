import Button from "components/Button";
import React, { useState } from "react";
import useSidebarStore from "stores/States";
import TableButton from "components/TableButton";
import SelectField from "components/SelectField";
import SearchField from "pages/home/components/SearchField";
import FileUpload from "components/FileUpload";

const PendingPurchases = () => {
    const { isOpen } = useSidebarStore();
    const tableData = [
        {
            client: "Lightning Source U.S.A.",
            files: "1721917124(1346720521).pdf",
            uploadedBy: "Becs",
            date: "25-07-2024",
        },
        {
            client: "Example Client",
            files: "examplefile.pdf",
            uploadedBy: "John Doe",
            date: "24-07-2024",
        },
        {
            client: "Lightning Source U.S.A.",
            files: "1721917124(1346720521).pdf",
            uploadedBy: "Becs",
            date: "25-07-2024",
        },
        {
            client: "Example Client",
            files: "examplefile.pdf",
            uploadedBy: "John Doe",
            date: "24-07-2024",
        }, {
            client: "Lightning Source U.S.A.",
            files: "1721917124(1346720521).pdf",
            uploadedBy: "Becs",
            date: "25-07-2024",
        },
        {
            client: "Example Client",
            files: "examplefile.pdf",
            uploadedBy: "John Doe",
            date: "24-07-2024",
        }, {
            client: "Lightning Source U.S.A.",
            files: "1721917124(1346720521).pdf",
            uploadedBy: "Becs",
            date: "25-07-2024",
        },
        {
            client: "Example Client",
            files: "examplefile.pdf",
            uploadedBy: "John Doe",
            date: "24-07-2024",
        }, {
            client: "Lightning Source U.S.A.",
            files: "1721917124(1346720521).pdf",
            uploadedBy: "Becs",
            date: "25-07-2024",
        },
        {
            client: "Example Client",
            files: "examplefile.pdf",
            uploadedBy: "John Doe",
            date: "24-07-2024",
        },
        // Add more dummy data as needed
    ];

    return (
        <div className="w-full text-start items-center m-4">
            {/* header */}
            <>
                <p className="text-3xl font-semibold my-8 ml-8">
                    Pending Purchases
                </p>
                <div className="flex items-center mt-3 gap-3 m-4">
                    <p className="font-bold text-lg">Upload Invoice:</p>
                    <FileUpload buttonflag={false} />
                    <SearchField placeholder="Client Name" />
                    <p className="font-bold text-lg">Uploaded by:</p>
                    <SelectField placeholder="Select Client" />
                    <Button title="Upload" />
                    <Button title="All Purchases" href="/all-purchases" />
                    <Button title="ISBN Search" href="/isbn-search" />
                </div>
            </>
            <div
                className={`m-4 transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
                    }`}
            >

                <table className="min-w-full table-fixed divide-y divide-gray-200 border">
                    <thead className="bg-gray-50 sticky top-0 z-10">
                        <tr className="text-[11px] w-full font-medium text-gray-500 uppercase">
                            <th className="p-3 w-1/6">Client</th>
                            <th className="p-3 w-1/6">Files</th>
                            <th className="p-3 w-1/6">Uploaded By</th>
                            <th className="p-3 w-1/6">Date</th>
                            <th className="p-3 w-1/6">Actions</th>
                        </tr>
                    </thead>
                    {tableData.map((data, index) => (
                        <tr key={index} className="text-center text-sm ">
                            <td className="px-6 py-4  border-gray-300 leading-5">{data.client}</td>
                            <td className="px-6 py-4  border-gray-300 leading-5">{data.files}</td>
                            <td className="px-6 py-4 border-gray-300 leading-5">{data.uploadedBy}</td>
                            <td className="px-6 py-4  border-gray-300 leading-5">{data.date}</td>
                            <td className="px-6 py-4">
                                <div className="flex justify-center items-center space-x-2">
                                    <TableButton title={"Create Purchase"} />
                                    <TableButton
                                        title={"X"}
                                        bg="bg-red-500"
                                        text={"text-white"}
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div >
    );
};

export default PendingPurchases;