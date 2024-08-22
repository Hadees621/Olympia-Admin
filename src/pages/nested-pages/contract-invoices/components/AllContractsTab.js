import React from "react";
import Button from "components/Button";
import Notepad from "utils/icons/Notepad";
import Speaker from "utils/icons/Speaker";
import { getStatusClass } from "utils/utils";
import { AllContracts } from "../utils/utils";
import Calculator from "utils/icons/Calculator";
import SelectField from "components/SelectField";
import SearchField from "components/SearchField";

const AllContractsTab = () => {
    return (
        <div>
            <div className="flex items-center my-8 gap-3">
                <SearchField placeholder="Book Title" />
                <SearchField placeholder="Pen Name/Author Name" />
                <Button title="Search" />
                <Button title="Clear" />
                <SelectField placeholder="Select Filter" />
            </div>

            <div className="mb-3 w-full mx-2 font-semibold text-lg">
                <p>Total Records: {AllContracts.length}</p>
            </div>

            <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw">
                <table className="min-w-full table-fixed divide-y divide-gray-200">
                    <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
                        <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Pen Name</th>
                            <th className="px-6 py-3">Book Title</th>
                            <th className="px-6 py-3">Imprint</th>
                            <th className="px-6 py-3">Contract Date</th>
                            <th className="px-6 py-3">Contract Amount</th>
                            <th className="px-6 py-3">Author Forms</th>
                            <th className="px-6 py-3">Contract payment status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AllContracts.map((row, index) => (
                            <tr
                                key={index}
                                className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap custom-hover-row"
                            >
                                <td className="px-6 py-4 text-orange-500">{row.status}</td>
                                <td className="px-6 py-4">{row.penName}</td>
                                <td className="px-6 py-4">{row.bookTitle}</td>
                                <td className="px-6 py-4">{row.imprint}</td>
                                <td className="px-6 py-4">{row.contractDate}</td>
                                <td className="px-6 py-4">{row.contractAmount}</td>
                                <td className="px-6 py-4">
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
                                <td className="px-6 py-4 whitespace-nowrap">
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

