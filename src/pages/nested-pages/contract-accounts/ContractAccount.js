import Button from 'components/Button';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import useSidebarStore from 'stores/States';
import TableButton from 'components/TableButton';
import SelectField from 'components/SelectField';
import { inputFields, lastTable } from './utils/utls';
import InputWithLabel from 'components/InputWithLabel';
import SearchField from 'pages/home/components/SearchField';
import EditableTextInput from 'components/EditableTextInput';
import EditableDatePicker from 'components/EditableDatePicker';

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

const ContractAccount = () => {
    const { isOpen } = useSidebarStore();
    const [selectedRows, setSelectedRows] = useState([]);

    const handleInputChange = (e) => {
        // Handle input change
    };

    const handleSelectAll = () => {
        if (selectedRows.length === data.length) {
            setSelectedRows([]); // Deselect all if already selected
        } else {
            setSelectedRows(data.map((_, index) => index)); // Select all
        }
    };

    const handleSelectRow = (index) => {
        if (selectedRows.includes(index)) {
            setSelectedRows(selectedRows.filter((i) => i !== index)); // Deselect row
        } else {
            setSelectedRows([...selectedRows, index]); // Select row
        }
    };

    const isRowSelected = (index) => selectedRows.includes(index);

    return (
        <div className="w-full text-start items-center m-3">
            <p className="text-3xl font-semibold my-8 ml-4">
                Contract Account Section
            </p>

            <div
                className={`transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"}`}
            >
                <div className="grid grid-cols-2 gap-4 shadow p-3">
                    <div className="space-y-3">
                        {inputFields.map((field, index) => (
                            <InputWithLabel
                                key={index}
                                label={field.label}
                                placeholder={field.placeholder}
                                value={field.value}
                                onChange={handleInputChange}
                                background='bg-white'
                            />
                        ))}
                    </div>
                    <div>
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-4">Royalty Information</h2>
                            <div className="shadow p-4">
                                {['Home Sale', 'Home Sale After 500', 'Home Sale After 5000', 'Foreign Sale', 'Foreign Sale After 5000', 'Ebooks', 'Audio Books'].map((item, index) => (
                                    <div key={index} className="flex items-center justify-between mb-2">
                                        <label className="w-1/2 text-md font-semibold">{item}:</label>
                                        <input type="number" className="w-1/2 border p-2 mr-3" defaultValue={0} />
                                        <span>£</span>
                                    </div>
                                ))}
                                <Button title={"Save"} bg='bg-green-500' hover='hover:bg-green-600' text={"text-white"} />
                            </div>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-4">Account Notes</h2>
                            <textarea className="w-full border p-2 mb-3" rows="4" defaultValue="I have changed the account notes to this latest one."></textarea>
                            <Button title={"Save"} bg='bg-green-500' hover='hover:bg-green-600' text={"text-white"} />
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-4">Author Account Details</h2>
                            <div className="flex items-center">
                                <input type="file" className="border p-2 mr-4" />
                                <Button title={"Upload"} bg='bg-orange-500' hover='hover:bg-orange-600' text={"text-white"} />
                            </div>
                            <p className="my-3">1619453698416473.pdf</p>
                            <div className='flex justify-between'>
                                <Button title={"Delete"} bg='bg-red-500' hover='hover:bg-red-600' text={"text-white"} />
                                <Link to={"/pending-publicity-questionnaire"} >
                                    <button className="ml-auto px-4 py-2 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded">
                                        Pending production questionnaire
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-4">Payment Method for Royalties</h2>
                            <SelectField />
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-4">Author Contract Payment Setup</h2>
                            <p>Author selected Other (member of accounts team will be in touch to discuss payment options)</p>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-xl font-bold mb-4">Author Receive Royalties Payment Method</h2>
                            <SelectField />
                            <div className="mt-2">Paypal email account: <SearchField background='bg-white' value={"zubair.signumconcepts@gmail.com"} /> </div>
                        </div>
                        <div className="mb-6">
                            <Button title={"Submit Now"} bg='bg-green-500' hover='hover:bg-green-600' text={"text-white"} />
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 mt-4">
                    <h2 className="text-2xl font-bold mb-4">Contract Information</h2>
                    <div className="mb-6 grid grid-cols-2 shadow">
                        <div className="p-4 space-y-4">
                            {['Contract Amount', 'Total VAT', 'Total Amount', 'Amount Already Paid', 'Amount Paid', 'Amount Returned', 'Bad Debt', 'Remaining Amount'].map((item, index) => (
                                <EditableTextInput key={index} label={item} value="£0.00" />
                            ))}
                        </div>
                        <div className="p-4 space-y-4">
                            <EditableTextInput label={"Invoicing Email:"} value="wasif.signumconcepts@gmail.com" saveButton={true} />
                            <EditableTextInput label={"Advance Contract Amount:"} value="£0.00" />
                            <div className='flex items-center gap-3'>
                                <EditableTextInput label={"Advance Contract Amount Paid:"} labelwidth='w-[150px]' value="£0.00" />
                                <EditableDatePicker background='bg-white' />
                            </div>
                            <div className='my-4 flex justify-end'>
                                <Button title={"Download Royalties List"} bg='bg-green-600' hover='hover:bg-green-700' text={"text-white"} />
                            </div>
                            <div className='my-4'>
                                <Button title={"Save"} bg='bg-green-500' hover='hover:bg-green-600' text={"text-white"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-4 flex gap-1 justify-end mt-10'>
                    <Button title={"Invoices"} href='/contract-invoices' />
                    <Button title={"UAE Invoices"} href='/uae-invoices' />
                    <Button title={"Create Author Advanced Payment Amount Summary"} />
                    <Button title={"Create Author Contract Payment Summary"} />
                    <Button title={"Create Contract New Invoice"} />
                </div>
                <div className="overflow-x-auto shadow-md transition-all duration-300">
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
                                    <td className="px-6 py-4 border">{row.date}</td>
                                    <td className="px-6 py-4 border">{row.amount}</td>
                                    <td className="px-6 py-4 border">{row.vat}</td>
                                    <td className="px-6 py-4 border">{row.total}</td>
                                    <td className="px-6 py-4 border">{row.dueDate}</td>
                                    <td className="px-6 py-4 border">{row.paymentDate}</td>
                                    <td className="px-6 py-4 border">{row.amountPaid}</td>
                                    <td className="px-6 py-4 border">{row.paymentMode}</td>
                                    <td className="px-6 py-4 border">
                                        <TableButton title="Delete" bg="bg-red-600" hover='hover:bg-red-700' text="text-white" />
                                    </td>
                                    <td className="px-6 py-4 border">
                                        <TableButton title="Edit" bg="bg-green-600" hover='hover:bg-green-700' text="text-white" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='mt-4'>
                    <div className="flex items-center justify-between my-4 gap-3">
                        <p className="text-2xl font-semibold my-4">
                            Royalties Information
                        </p>
                        <Button title="Royalty Statement for Author" />
                    </div>
                    <div className="overflow-x-auto shadow-md transition-all duration-300">
                        <table className="w-full text-sm text-left max-h-[500px]">
                            <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
                                <tr className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap">
                                    <th className="px-6 py-3 border">View</th>
                                    <th className="px-6 py-3 border">Email Statement</th>
                                    <th className="px-6 py-3 border">	Duration</th>
                                    <th className="px-6 py-3 border">	Issue Date</th>
                                    <th className="px-6 py-3 border">Royalties Amount</th>
                                    <th className="px-6 py-3 border">Broughtforward Amount</th>
                                    <th className="px-6 py-3 border">Total Amount</th>
                                    <th className="px-6 py-3 border">Issued</th>
                                    <th className="px-6 py-3 border min-w-[180px]">Status</th>
                                    <th className="px-6 py-3 border">Payment Date</th>
                                    <th className="px-6 py-3 border">Delete</th>
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
                                            <TableButton title={"View"} />
                                        </td>
                                        <td className="px-6 py-4 border">
                                            <TableButton title={"Send Email"} />
                                        </td>
                                        <td className="px-6 py-4 border">{row.invoiceNo}</td>
                                        <td className="px-6 py-4 border">{row.cnNo}</td>
                                        <td className="px-6 py-4 border">{row.date}</td>
                                        <td className="px-6 py-4 border">{row.amount}</td>
                                        <td className="px-6 py-4 border">{row.dueDate}</td>
                                        <td className="px-6 py-4 border">{row.paymentDate}</td>
                                        <td className="px-6 py-4 border ">
                                            <SelectField />
                                        </td>
                                        <td className="px-6 py-4 border">{row.paymentMode}</td>
                                        <td className="px-6 py-4 border">
                                            <TableButton title="Delete" bg="bg-red-600" hover='hover:bg-red-700' text="text-white" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='mt-8'>
                    <p className="text-2xl font-semibold my-4">
                        Installments Details
                    </p>
                    <div className="flex items-center justify-end my-4 gap-3">
                        <div className='w-[45%] flex gap-3 items-center'>
                            <p className="text-md font-semibold text-gray-500"> Payment Method : </p>
                            <SelectField />
                            <Button title="Add New Installment" />
                        </div>
                    </div>
                    <div className="overflow-x-auto shadow-md transition-all duration-300">
                        <table className="w-full text-sm text-left max-h-[500px]">
                            <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
                                <tr className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap">
                                    <th className="px-6 py-3 border">Installments</th>
                                    <th className="px-6 py-3 border">Due Date</th>
                                    <th className="px-6 py-3 border">Invoice Number</th>
                                    <th className="px-6 py-3 border">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr
                                        key={index}
                                        className={`text-sm text-gray-700 text-center border font-bold whitespace-nowrap ${isRowSelected(index) ? "bg-gray-100" : ""
                                            }`}
                                    >
                                        <td className="px-6 py-4 border flex items-center gap-4">
                                            <span> £ </span>   <SearchField background={"bg-white"} />
                                        </td>
                                        <td className="px-6 py-4 border ">
                                            <SearchField background={"bg-white"} />
                                        </td>
                                        <td className="px-6 py-4 border">
                                            <SearchField background={"bg-white"} />
                                        </td>
                                        <td className="px-6 py-4 border">
                                            <TableButton title="Delete" bg="bg-red-600" hover='hover:bg-red-700' text="text-white" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
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
                                {lastTable.map((row, index) => (
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


                                {/* {lastTable.map((row, index) => (
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
                                        <td className="px-6 py-4 border">{row.cnNo}</td>
                                        <td className="px-6 py-4 border">{row.cnNo}</td>

                                        <td className="px-6 py-4 border">{row.date}</td>
                                        <td className="px-6 py-4 border">{row.amount}</td>
                                        <td className="px-6 py-4 border">{row.total}</td>
                                        <td className="px-4 py-4 w-[180px]">
                                            <SearchField background='bg-white' />
                                        </td>
                                        <td className="px-4 py-4 flex border-l items-center gap-2 w-[180px]">
                                            <SearchField background='bg-white' />  <span> AED </span>
                                        </td>
                                        <td className="px-6 py-4 border items-center">
                                            <div className='flex w-[200px] gap-2'>
                                                <SelectField />
                                                <TableButton title={"Edit List"} />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 border">{row.paymentMode}</td>
                                    </tr>
                                ))} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContractAccount;

