import Button from 'components/Button';
import React, { useState } from 'react'
import useSidebarStore from 'stores/States';
import Pagination from 'components/Pagination';
import TableButton from 'components/TableButton';
import SelectField from 'components/SelectField';
import SearchField from 'pages/home/components/SearchField';
import InvoiceSummary from '../../Uae-invoices/components/InvoiceSummary';

const data = [
    {
        invoiceNo: 'INV001',
        client: 'Client A',
        date: '2024-08-01',
        amount: '$1000',
        status: 'Paid',
    },
    {
        invoiceNo: 'INV002',
        client: 'Client B',
        date: '2024-08-02',
        amount: '$2000',
        status: 'Pending',
    },
    {
        invoiceNo: 'INV003',
        client: 'Client C',
        date: '2024-08-03',
        amount: '$1500',
        status: 'Paid',
    },
    {
        invoiceNo: 'INV004',
        client: 'Client D',
        date: '2024-08-04',
        amount: '$500',
        status: 'Overdue',
    },
    {
        invoiceNo: 'INV005',
        client: 'Client E',
        date: '2024-08-05',
        amount: '$750',
        status: 'Paid',
    },
];

const AllInvoices = () => {
    const { isOpen } = useSidebarStore();
    const [selectedRows, setSelectedRows] = useState([]);

    const handleSelectAll = () => {
        if (selectedRows.length === data.length) {
            setSelectedRows([]);
        } else {
            setSelectedRows(data.map((_, index) => index));
        }
    };

    const handleSelectRow = (index) => {
        if (selectedRows.includes(index)) {
            setSelectedRows(selectedRows.filter((i) => i !== index));
        } else {
            setSelectedRows([...selectedRows, index]);
        }
    };

    const isRowSelected = (index) => selectedRows.includes(index);
    return (
        <div className="w-full text-start items-center">

            <div className="mb-3 w-full mx-2 font-semibold text-lg">
                <p>Total Records: 2589</p>
            </div>

            <div className="flex gap-2 justify-start mt-8 items-center w-full">
                <SearchField placeholder="Invoice Number" />
                <Button title="Search" />
                <p className="text-md font-semibold text-gray-500">From:</p>
                <SearchField />
                <p className="text-md font-semibold text-gray-500">To:</p>
                <SearchField />
                <Button title="Search" />
                <Button title="CSV" />
            </div>
            <div className="flex items-center justify-end mt-4 gap-3 my-3">
                <Button title="View Invoice" />
                <Button title="Create C/N" />
                <Button title="View Invoice" />
                <Button title="Send Selected Invoices" />
            </div>

            <Pagination num={12} />

            <div
                className={`transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"}`}
            >
                <div className="overflow-x-auto shadow-md transition-all duration-300">
                    <table className="w-full text-sm text-left max-h-[500px]">
                        <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
                            <tr className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap">
                                <th className="px-6 py-3  space-x-4 flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        onChange={handleSelectAll}
                                        checked={selectedRows.length === data.length}
                                    />
                                    Select All
                                </th>
                                <th className="px-6 py-3 border">Invoice No.</th>
                                <th className="px-6 py-3 border">Pen Name</th>
                                <th className="px-6 py-3 border">C/N No.</th>
                                <th className="px-6 py-3 border">Date</th>
                                <th className="px-6 py-3 border">Total Amount</th>
                                <th className="px-6 py-3 border">Due Date</th>
                                <th className="px-6 py-3 border">Date Payment</th>
                                <th className="px-6 py-3 border">Amount Paid</th>
                                <th className="px-6 py-3 border">Mode Payment</th>
                                <th className="px-6 py-3 border">Contract Amount</th>
                                <th className="px-6 py-3 border"></th>
                                <th className="px-6 py-3 border">Email</th>
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
                                            type="checkbox"
                                            onChange={() => handleSelectRow(index)}
                                            checked={isRowSelected(index)}
                                        />
                                    </td>
                                    <td className="px-6 py-4 border">{row.invoiceNo}</td>
                                    <td className="px-6 py-4 border">{row.cnNo}</td>
                                    <td className="px-6 py-4 border">{row.cnNo}</td>
                                    <td className="px-6 py-4 border">{row.date}</td>
                                    <td className="px-6 py-4 border">{row.amount}</td>
                                    <td className="px-6 py-4 border">{row.total}</td>
                                    <td className="px-4 py-4 w-[180px]">
                                        <SearchField background='bg-white' />
                                    </td>
                                    <td className="px-4 py-4 flex border-l items-center gap-2 w-[180px]">
                                        <SearchField background='bg-white' />  <span> £ </span>
                                    </td>
                                    <td className="px-6 py-4 border items-center">
                                        <div className='flex w-[200px] gap-2'>
                                            <SelectField />
                                            <TableButton title={"Edit List"} />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 border">{row.paymentMode}</td>
                                    <td className="px-6 py-4 border">{row.paymentMode}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <InvoiceSummary
                    totalInvoices={7}
                    totalRevenue="AED 9,465.00"
                    totalPaid="AED 0.00"
                    totalRemaining="AED 9,465.00"
                />
            </div>

        </div >
    )
}

export default AllInvoices