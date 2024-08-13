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
                <div className="overflow-x-auto shadow-md transition-all duration-300">
                    <table className="w-full text-sm text-left max-h-[500px]">
                        <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
                            <tr className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap">
                                <th className="px-6 py-3">
                                </th>
                                <th className="px-6 py-3 border">Invoice No.</th>
                                <th className="px-6 py-3 border">Invoice Date</th>
                                <th className="px-6 py-3 border">C/N No.</th>
                                <th className="px-6 py-3 border">C/N Date</th>
                                <th className="px-6 py-3 border">Client</th>
                                <th className="px-6 py-3 border">Quantity</th>
                                <th className="px-6 py-3 border">NET</th>
                                <th className="px-6 py-3 border">VAT</th>
                                <th className="px-6 py-3 border">Total Amount</th>
                                <th className="px-6 py-3 border">Amount Paid</th>
                                <th className="px-6 py-3 border">Date Paid</th>
                                <th className="px-6 py-3 border">H/F Sale</th>
                                <th className="px-6 py-3 border">Royalty</th>
                                <th className="px-6 py-3 border">Sale Type</th>
                                <th className="px-6 py-3 border">Royalties</th>
                                <th className="px-6 py-3 border">Royalty Amount</th>

                            </tr>
                        </thead>
                        <tbody>

                            {data.map((row, index) => (
                                <tr
                                    key={index}
                                    className={`text-sm text-gray-700 text-center border font-bold whitespace-nowrap ${isRowSelected(index) ? "bg-gray-100" : ""
                                        }`}
                                >
                                    <td className="px-6 py-4 border">
                                        <input
                                            type="radio"
                                            name="selectRow"
                                            onChange={() => handleSelectRow(index)}
                                            checked={isRowSelected(index)}
                                        />
                                    </td>
                                    <td className="px-6 py-4 border">{row.invoiceNo}</td>
                                    <td className="px-6 py-4 border">{row.invoiceDate}</td>
                                    <td className="px-6 py-4 border">{row.cnNo}</td>
                                    <td className="px-6 py-4 border">{row.cnDate}</td>
                                    <td className="px-6 py-4 border">{row.client}</td>
                                    <td className="px-6 py-4 border">{row.quantity}</td>
                                    <td className="px-6 py-4 border">{row.net}</td>
                                    <td className="px-6 py-4 border">{row.vat}</td>
                                    <td className="px-6 py-4 border">{row.totalAmount}</td>
                                    <td className="px-6 py-4 border">{row.amountPaid}</td>
                                    <td className="px-6 py-4 border">{row.datePaid}</td>
                                    <td className="px-6 py-4 border">{row.hfSale}</td>
                                    <td className="px-6 py-4 border">{row.royalty}</td>
                                    <td className="px-6 py-4 border">{row.saleType}</td>
                                    <td className="px-6 py-4 border">{row.royalties}</td>
                                    <td className="px-6 py-4 border">{row.royaltyAmount}</td>
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