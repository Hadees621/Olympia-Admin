import React, { useState } from 'react'

const LatTable = ({ data }) => {
    const [selectedRow, setSelectedRow] = useState(null);

    const handleSelectRow = (index) => {
        setSelectedRow(index);
    };

    const isRowSelected = (index) => selectedRow === index;

    return (
        <div>
            <div className='mt-8'>
                <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw">
                    <table className="min-w-full table-fixed divide-y divide-gray-200">
                        <thead className="uppercase bg-gray-50 sticky top-0 z-10">
                            <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
                                <th className="px-6 py-3">
                                </th>
                                <th className="px-6 py-3">Invoice No.</th>
                                <th className="px-6 py-3">Invoice Date</th>
                                <th className="px-6 py-3">C/N No.</th>
                                <th className="px-6 py-3">C/N Date</th>
                                <th className="px-6 py-3">Client</th>
                                <th className="px-6 py-3">Quantity</th>
                                <th className="px-6 py-3">NET</th>
                                <th className="px-6 py-3">VAT</th>
                                <th className="px-6 py-3">Total Amount</th>
                                <th className="px-6 py-3">Amount Paid</th>
                                <th className="px-6 py-3">Date Paid</th>
                                <th className="px-6 py-3">H/F Sale</th>
                                <th className="px-6 py-3">Royalty</th>
                                <th className="px-6 py-3">Sale Type</th>
                                <th className="px-6 py-3">Royalties</th>
                                <th className="px-6 py-3">Royalty Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr
                                    key={index}
                                    className={`text-sm text-gray-700 text-center border font-bold whitespace-nowrap custom-hover-row  ${isRowSelected(index) ? "bg-gray-100" : ""
                                        }`}
                                >
                                    <td className="px-6 py-4">
                                        <input
                                            type="radio"
                                            name="selectRow"
                                            onChange={() => handleSelectRow(index)}
                                            checked={isRowSelected(index)}
                                        />
                                    </td>
                                    <td className="px-6 py-4">{row.invoiceNo}</td>
                                    <td className="px-6 py-4">{row.invoiceDate}</td>
                                    <td className="px-6 py-4">{row.cnNo}</td>
                                    <td className="px-6 py-4">{row.cnDate}</td>
                                    <td className="px-6 py-4">{row.client}</td>
                                    <td className="px-6 py-4">{row.quantity}</td>
                                    <td className="px-6 py-4">{row.net}</td>
                                    <td className="px-6 py-4">{row.vat}</td>
                                    <td className="px-6 py-4">{row.totalAmount}</td>
                                    <td className="px-6 py-4">{row.amountPaid}</td>
                                    <td className="px-6 py-4">{row.datePaid}</td>
                                    <td className="px-6 py-4">{row.hfSale}</td>
                                    <td className="px-6 py-4">{row.royalty}</td>
                                    <td className="px-6 py-4">{row.saleType}</td>
                                    <td className="px-6 py-4">{row.royalties}</td>
                                    <td className="px-6 py-4">{row.royaltyAmount}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default LatTable