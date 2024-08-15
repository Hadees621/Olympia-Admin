import Button from "components/Button";
import React from "react";
import Notepad from "utils/icons/Notepad";
import Speaker from "utils/icons/Speaker";
import { AllContracts } from "../utils/utils";
import SelectField from "components/SelectField";
import Calculator from "utils/icons/Calculator";
import SearchField from "pages/home/components/SearchField";

const AllContractsTab = () => {
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

    return (
        <div>
            <div className="flex items-center my-8 gap-3 m-">
                <SearchField placeholder="Book Title" />
                <SearchField placeholder="Pen Name/Author Name" />
                <Button title="Search" />
                <Button title="Clear" />
                <SelectField placeholder="Select Filter" />
            </div>

            <div className="mb-3 w-full mx-2 font-semibold text-lg">
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
                            <th className="px-6 py-3 border">Contract Date</th>
                            <th className="px-6 py-3 border">Contract Amount</th>
                            <th className="px-6 py-3 border">Author Forms</th>
                            <th className="px-6 py-3 border">Contract payment status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AllContracts.map((row, index) => (
                            <tr
                                key={index}
                                className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap"
                            >
                                <td className="px-6 py-4 border text-orange-500">{row.status}</td>
                                <td className="px-6 py-4 border">{row.penName}</td>
                                <td className="px-6 py-4 border">{row.bookTitle}</td>
                                <td className="px-6 py-4 border">{row.imprint}</td>
                                <td className="px-6 py-4 border">{row.contractDate}</td>
                                <td className="px-6 py-4 border">{row.contractAmount}</td>
                                <td className="px-6 py-4 border">
                                    <div className="flex space-x-2">
                                        <div className="p-1.5 rounded-3xl bg-[#C3C4C5] cursor-pointer">
                                            <Calculator color={row.authorForms.form1 ? "green" : "white"} />
                                        </div>
                                        <div className="p-1.5 rounded-3xl bg-[#C3C4C5] cursor-pointer">
                                            <Notepad color={row.authorForms.form2 ? "green" : "white"} />
                                        </div>
                                        <div className="p-1.5 rounded-3xl bg-[#C3C4C5] cursor-pointer">
                                            <Speaker color={row.authorForms.form3 ? "green" : "white"} />
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 border whitespace-nowrap">
                                    <span className={`w-[90px] ${getStatusClass(row.contractPaymentStatus)}`}>
                                        £ {row.contractPaymentStatus}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllContractsTab;

