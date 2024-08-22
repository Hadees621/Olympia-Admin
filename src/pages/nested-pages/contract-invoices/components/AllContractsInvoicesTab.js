import React from "react";
import Button from "components/Button";
import { invoicesData } from "../utils/utils";
import Pagination from "components/Pagination";
import SelectField from "components/SelectField";
import SearchField from "components/SearchField";

const AllContractsInvoicesTab = () => {
    return (
        <div>
            <div className="flex items-center my-8 gap-3">
                <SearchField placeholder="Book Title" />
                <SearchField placeholder="Pen Name/Author Name" />
                <Button title="Search" />
                <Button title="Clear" />
                <SelectField placeholder="Select Filter" />
            </div>

            <div className="mb-3 w-full mx-4 font-semibold text-lg">
                <p>Total Records: 2589</p>
            </div>

            <Pagination num={14} />

            <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw">
                <table className="min-w-full table-fixed divide-y divide-gray-200">
                    <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
                        <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Imprint</th>
                            <th className="px-6 py-3">Contract Date</th>
                            <th className="px-6 py-3">Pub Date</th>
                            <th className="px-6 py-3">Rem Date</th>
                            <th className="px-6 py-3">Author Name</th>
                            <th className="px-6 py-3">Pen Name</th>
                            <th className="px-6 py-3">Book Title</th>
                            <th className="px-6 py-3">Book No</th>
                            <th className="px-6 py-3">Amount</th>
                            <th className="px-6 py-3">VAT</th>
                            <th className="px-6 py-3">Total</th>
                            <th className="px-6 py-3">Paid</th>
                            <th className="px-6 py-3">Paid By Invoice</th>
                            <th className="px-6 py-3">Remaining</th>
                            <th className="px-6 py-3">Advance  Amount</th>
                            <th className="px-6 py-3">Advance Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoicesData.map((row, index) => (
                            <tr
                                key={index}
                                className="text-sm text-gray-700 text-center font-bold whitespace-nowrap custom-hover-row"
                            >
                                <td className="px-6 py-4">{row.status}</td>
                                <td className="px-6 py-4">{row.penName}</td>
                                <td className="px-6 py-4">{row.contractDate}</td>
                                <td className="px-6 py-4">{row.pubDate}</td>
                                <td className="px-6 py-4">{row.remDate}</td>
                                <td className="px-6 py-4">{row.authorName}</td>
                                <td className="px-6 py-4">{row.penName}</td>
                                <td className="px-6 py-4">{row.bookTitle}</td>
                                <td className="px-6 py-4">{row.bookNo}</td>
                                <td className="px-6 py-4">{row.amount}</td>
                                <td className="px-6 py-4">{row.vat}</td>
                                <td className="px-6 py-4">{row.total}</td>
                                <td className="px-6 py-4">{row.paid}</td>
                                <td className="px-6 py-4">{row.paidByInvoice}</td>
                                <td className="px-6 py-4">{row.remaining}</td>
                                <td className="px-6 py-4">{row.advanceAmount}</td>
                                <td className="px-6 py-4">{row.advancePaid}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllContractsInvoicesTab;

