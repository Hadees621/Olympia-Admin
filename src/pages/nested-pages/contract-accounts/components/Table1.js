import React, { useState } from 'react';
import Button from 'components/Button';
import Modal from 'components/modals/Modal';
import InvoiceCreator from './InvoiceCreator';
import TableButton from 'components/TableButton';
import AuthorPaymentSummary from './AuthorPaymentSummary';
import ContractSummaryModal from './ContractSummaryModal';

const Table1 = ({ data }) => {
    const [editData, setEditData] = useState({});
    const [selectedRows, setSelectedRows] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [editingRowIndex, setEditingRowIndex] = useState(null);
    const [isSummaryModalVisible, setIsSummaryModalVisible] = useState(false);
    const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);

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

    const handleEditClick = (index) => {
        setEditingRowIndex(index);
        setEditData(data[index]);
    };

    const handleSaveClick = () => {
        setEditingRowIndex(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData({
            ...editData,
            [name]: value,
        });
    };

    const isRowSelected = (index) => selectedRows.includes(index);
    const showActionButtons = selectedRows.length === 1 || selectedRows.length === data.length;

    return (
        <div>
            <div className='my-4 flex gap-1 justify-end mt-10'>
                <Button title={"Invoices"} href='/contract-invoices' />
                <Button title={"UAE Invoices"} href='/uae-invoices' />
                <Button title={"Create Author Advanced Payment Amount Summary"} onClick={() => setIsSummaryModalVisible(true)} />
                <Button title={"Create Author Contract Payment Summary"} onClick={() => setIsPaymentModalVisible(true)} />
                <Button
                    title="Create Contract New Invoice"
                    onClick={() => setModalIsOpen(true)}
                />
            </div>

            {showActionButtons && (
                <div className="flex items-center justify-end mt-4 gap-3 my-3">
                    <Button title="View Invoice" onClick={() => setModalIsOpen(true)} />
                    <Button title="Create C/N" onClick={() => setModalIsOpen(true)} />
                    <Button title="View Invoice" onClick={() => setModalIsOpen(true)} />
                    <Button title="Send Selected Invoices" />
                </div>
            )}

            <div className="overflow-x-auto shadow-md transition-all duration-300 custom-scrollbarw">
                <table className="w-full text-sm text-left max-h-[500px]">
                    <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
                        <tr className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap">
                            <th className="px-6 py-3 border space-x-4 flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    onChange={handleSelectAll}
                                    checked={selectedRows.length === data.length}
                                />
                                Select All
                            </th>
                            <th className="px-6 py-3 border">Invoice No.</th>
                            <th className="px-6 py-3 border">C/N No.</th>
                            <th className="px-6 py-3 border">Date</th>
                            <th className="px-6 py-3 border">Amount</th>
                            <th className="px-6 py-3 border">VAT</th>
                            <th className="px-6 py-3 border">Total</th>
                            <th className="px-6 py-3 border">Due Date</th>
                            <th className="px-6 py-3 border">Date Payment</th>
                            <th className="px-6 py-3 border">Amount Paid</th>
                            <th className="px-6 py-3 border">Mode Payment</th>
                            <th className="px-6 py-3 border">Delete</th>
                            <th className="px-6 py-3 border">Edit</th>
                            <th className="px-6 py-3 border">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr
                                key={index}
                                className={`text-sm text-gray-700 text-center border font-bold whitespace-nowrap ${isRowSelected(index) ? "bg-gray-100" : ""}`}
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
                                <td className="px-6 py-4 border">{row.date}</td>
                                <td className="px-6 py-4 border">{row.amount}</td>
                                <td className="px-6 py-4 border">{row.vat}</td>
                                <td className="px-6 py-4 border">{row.total}</td>
                                <td className="px-6 py-4 border">{row.dueDate}</td>
                                <td className="px-6 py-4 border">
                                    {editingRowIndex === index ? (
                                        <input
                                            type="date"
                                            name="paymentDate"
                                            value={editData.paymentDate}
                                            onChange={handleInputChange}
                                            className="border rounded px-2 py-1"
                                        />
                                    ) : (
                                        row.paymentDate
                                    )}
                                </td>
                                <td className="px-6 py-4 border">
                                    {editingRowIndex === index ? (
                                        <input
                                            type="text"
                                            name="amountPaid"
                                            value={editData.amountPaid}
                                            onChange={handleInputChange}
                                            className="border rounded px-2 py-1"
                                        />
                                    ) : (
                                        row.amountPaid
                                    )}
                                </td>
                                <td className="px-6 py-4 border">
                                    {editingRowIndex === index ? (
                                        <select
                                            name="paymentMode"
                                            value={editData.paymentMode}
                                            onChange={handleInputChange}
                                            className="border rounded px-2 py-1"
                                        >
                                            <option value="Credit Card">Credit Card</option>
                                            <option value="Bank Transfer">Bank Transfer</option>
                                            <option value="PayPal">PayPal</option>
                                        </select>
                                    ) : (
                                        row.paymentMode
                                    )}
                                </td>
                                <td className="px-6 py-4 border">
                                    <TableButton title="Delete" bg="bg-red-600" hover='hover:bg-red-700' text="text-white" />
                                </td>
                                <td className="px-6 py-4 border">
                                    {editingRowIndex === index ? (
                                        <TableButton
                                            title="Save"
                                            bg="bg-green-600"
                                            hover='hover:bg-green-700'
                                            text="text-white"
                                            onClick={handleSaveClick}
                                        />
                                    ) : (
                                        <TableButton
                                            title="Edit"
                                            bg="bg-blue-600"
                                            hover='hover:bg-blue-700'
                                            text="text-white"
                                            onClick={() => handleEditClick(index)}
                                        />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal isVisible={isSummaryModalVisible} onClose={() => setIsSummaryModalVisible(false)} onSave={() => setIsSummaryModalVisible(false)} title="Contract Payment Sheet" saveButton={false} width='max-w-[140vh]'>
                <ContractSummaryModal />
            </Modal>
            <Modal isVisible={isPaymentModalVisible} onClose={() => setIsPaymentModalVisible(false)} onSave={() => setIsPaymentModalVisible(false)} title="Author Contract Payment Summary" saveButton={false} width='max-w-[140vh]'>
                <AuthorPaymentSummary />
            </Modal>
            <Modal
                isVisible={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                contentLabel="Create New Invoice"
                saveButton={false}
            >
                <InvoiceCreator />
            </Modal>
        </div>
    );
};

export default Table1;
