import Modal from './Modal';
import EditModal from './EdItModal';
import Button from 'components/Button';
import React, { useState } from 'react';
import invoiceData from '../utils/utils';
import Pagination from 'components/Pagination';
import TableButton from 'components/TableButton';
import SelectField from 'components/SelectField';

const AllPurchasesTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [isEditModalOpen, setEditModalOpen] = useState(false);

    const handleEditClick = (row) => {
        setSelectedRow(row);
        setEditModalOpen(true);
    };

    const handleSave = (updatedData) => {
        console.log("Updated Data:", updatedData);
    };

    const handleViewClick = (row) => {
        setSelectedRow(row);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedRow(null);
    };

    return (
        <div>
            <div className="flex items-center my-7 gap-3">
                <p className="text-lg font-semibold"> Date : From </p>
                <SelectField />
                <SelectField />
                <p className="text-lg font-semibold"> To </p>
                <SelectField />
                <SelectField />
                <SelectField />
                <Button title="Search" />
                <Button title="CSV" />
            </div>

            <Pagination num={32} />

            <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw">
                <table className="min-w-full table-fixed divide-y divide-gray-200">
                    <thead className="text-sm text-white uppercase bg-gray-50 sticky top-0 z-10">
                        <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
                            <th className="px-6 py-3">Invoice Date</th>
                            <th className="px-6 py-3 ">Due Date</th>
                            <th className="px-6 py-3">First Name</th>
                            <th className="px-6 py-3">Last Name</th>
                            <th className="px-6 py-3">Company</th>
                            <th className="px-6 py-3">Category</th>
                            <th className="px-6 py-3">Reference</th>
                            <th className="px-6 py-3">Invoice</th>
                            <th className="px-6 py-3">NET</th>
                            <th className="px-6 py-3">VAT</th>
                            <th className="px-6 py-3">Total Amount</th>
                            <th className="px-6 py-3">Amount Paid</th>
                            <th className="px-6 py-3">Date Paid</th>
                            <th className="px-6 py-3">Method</th>
                            <th className="px-6 py-3">Paid By</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoiceData.map((row, index) => (
                            <tr key={index} className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap custom-hover-row">
                                <td className="px-6 py-4">{row.invoiceDate}</td>
                                <td className="px-6 py-4">{row.dueDate}</td>
                                <td className="px-6 py-4">{row.firstName}</td>
                                <td className="px-6 py-4">{row.lastName}</td>
                                <td className="px-6 py-4">{row.company}</td>
                                <td className="px-6 py-4">{row.category}</td>
                                <td className="px-6 py-4">{row.reference}</td>
                                <td className="px-6 py-4">{row.invoiceNumber}</td>
                                <td className="px-6 py-4">{row.net}</td>
                                <td className="px-6 py-4">{row.vat}</td>
                                <td className="px-6 py-4">{row.totalAmount}</td>
                                <td className="px-6 py-4">{row.amountPaid}</td>
                                <td className="px-6 py-4">{row.datePaid}</td>
                                <td className="px-6 py-4">{row.paymentMethod}</td>
                                <td className="px-6 py-4">{row.paidBy}</td>
                                <td className="px-6 py-4">{row.status}</td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-center items-center space-x-2">
                                        <TableButton title={"View"} onClick={() => handleViewClick(row)} />
                                        <TableButton
                                            title={"Edit"}
                                            bg="bg-green-600"
                                            hover='hover:bg-green-700'
                                            text="text-white"
                                            onClick={() => handleEditClick(row)}
                                        />
                                        <TableButton title={"X"} bg="bg-red-500" hover='hover:bg-red-600' text={"text-white"} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Modal isOpen={isModalOpen} onClose={handleCloseModal} data={selectedRow} />
                <EditModal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)} data={selectedRow} onSave={handleSave} />
            </div>

            <div className="mt-6 pt-4 w-full items-end flex justify-end">
                <div className='p-5'>
                    <h3 className="text-lg font-semibold">Summary</h3>
                    <div className="mt-4 space-y-2 w-[200px] mb-5">
                        <div className="flex justify-between">
                            <span>Total Purchases:</span>
                            <span>100</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Total NET:</span>
                            <span>£ 7786.64</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Total VAT:</span>
                            <span>£ 988.79</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Total Amount:</span>
                            <span>£ 8775.43</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Total Paid:</span>
                            <span>£ 8395.03</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Total Unpaid:</span>
                            <span>£ 380.4</span>
                        </div>
                    </div>
                    <Button title={"Print"} />
                </div>
            </div>
        </div>
    );
};

export default AllPurchasesTable;
