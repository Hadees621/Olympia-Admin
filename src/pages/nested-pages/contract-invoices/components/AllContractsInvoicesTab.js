import React from "react";
import Button from "components/Button";
import { invoicesData } from "../utils/utils";
import SelectField from "components/SelectField";
import SearchField from "pages/home/components/SearchField";

const AllContractsInvoicesTab = () => {
    return (
        <div>
            <div className="flex items-center my-8   gap-3 m-4">
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
                            <th className="px-6 py-3 border">Imprint</th>
                            <th className="px-6 py-3 border">Contract Date</th>
                            <th className="px-6 py-3 border">Pub Date</th>
                            <th className="px-6 py-3 border">Rem Date</th>
                            <th className="px-6 py-3 border">Author Name</th>
                            <th className="px-6 py-3 border">Pen Name</th>
                            <th className="px-6 py-3 border">Book Title</th>
                            <th className="px-6 py-3 border">Book No</th>
                            <th className="px-6 py-3 border">Amount</th>
                            <th className="px-6 py-3 border">VAT</th>
                            <th className="px-6 py-3 border">Total</th>
                            <th className="px-6 py-3 border">Paid</th>
                            <th className="px-6 py-3 border">Paid By Invoice</th>
                            <th className="px-6 py-3 border">Remaining</th>
                            <th className="px-6 py-3 border">Advance  Amount</th>
                            <th className="px-6 py-3 border">Advance Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoicesData.map((row, index) => (
                            <tr
                                key={index}
                                className="text-sm text-center border font-bold whitespace-nowrap"
                            >
                                <td className="px-6 py-4 border">{row.status}</td>
                                <td className="px-6 py-4 border">{row.penName}</td>
                                <td className="px-6 py-4 border">{row.contractDate}</td>
                                <td className="px-6 py-4 border">{row.pubDate}</td>
                                <td className="px-6 py-4 border">{row.remDate}</td>
                                <td className="px-6 py-4 border">{row.authorName}</td>
                                <td className="px-6 py-4 border">{row.penName}</td>
                                <td className="px-6 py-4 border">{row.bookTitle}</td>
                                <td className="px-6 py-4 border">{row.bookNo}</td>
                                <td className="px-6 py-4 border">{row.amount}</td>
                                <td className="px-6 py-4 border">{row.vat}</td>
                                <td className="px-6 py-4 border">{row.total}</td>
                                <td className="px-6 py-4 border">{row.paid}</td>
                                <td className="px-6 py-4 border">{row.paidByInvoice}</td>
                                <td className="px-6 py-4 border">{row.remaining}</td>
                                <td className="px-6 py-4 border">{row.advanceAmount}</td>
                                <td className="px-6 py-4 border">{row.advancePaid}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllContractsInvoicesTab;

