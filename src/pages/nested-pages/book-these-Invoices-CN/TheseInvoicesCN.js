import React, { useState } from 'react'
import Button from 'components/Button';
import useSidebarStore from 'stores/States';
import TableButton from 'components/TableButton'
import SelectField from 'components/SelectField';
import EditableTextInput from 'components/EditableTextInput';
import EditListModal from 'components/modals/EditListModal';
import { invoices } from './utils/utils';


const TheseInvoicesCN = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [options, setOptions] = useState([
        'paid by cheque',
        'paid by credit card',
        'paid by paypal',
    ]);

    const { isOpen } = useSidebarStore();

    return (
        <div
            className={`m-4 transition-all duration-300 w-full ${isOpen ? "max-w-[1050px]" : "max-w-[1200px]"
                }`}
        >
            <div className='ml-8 space-y-3'>
                <p className="text-3xl font-semibold mt-8">Invoices</p>
                <p className="text-xl font-semibold">Author Name:	Ms. Bradford Marie </p>
                <p className="text-xl font-semibold"> Book Title:	Joe the Elf</p>
            </div>
            <div className="overflow-x-auto shadow-md transition-all duration-300 mt-10 m-4">
                <table className="w-full text-sm text-left">
                    <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
                        <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
                            <th className="px-6 py-3 border"></th>
                            <th className="px-6 py-3 border">Invoice No.</th>
                            <th className="px-6 py-3 border">Credit No.</th>
                            <th className="px-6 py-3 border">Date</th>
                            <th className="px-6 py-3 border">Due Date</th>
                            <th className="px-6 py-3 border">Name</th>
                            <th className="px-6 py-3 border">Total</th>
                            <th className="px-6 py-3 border">Date Payment</th>
                            <th className="px-6 py-3 border">Paid</th>
                            <th className="px-6 py-3 border">Payment Detail</th>
                            <th className="px-6 py-3 border">Royalties</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((row, index) => (
                            <tr
                                key={index}
                                className={`text-sm text-gray-700 text-center border font-bold whitespace-nowrap`}
                            >
                                <td className="px-6 py-4 border">
                                    <TableButton title={"View"} />
                                </td>
                                <td className="px-6 py-4 border">{row.InvoiceNo}</td>
                                <td className="px-6 py-4 border">
                                    <EditableTextInput value={row.CreditNo} width='w-[100px]' />
                                </td>
                                <td className="px-6 py-4 border">{row.Date}</td>
                                <td className="px-6 py-4 border">{row.DueDate}</td>
                                <td className="px-6 py-4 border">{row.Name}</td>
                                <td className="px-6 py-4 border">{row.Total}</td>
                                <td className="px-6 py-4 border">
                                    <EditableTextInput value={row.DatePayment} width='w-[100px]' />
                                </td>
                                <td className="px-6 py-4 flex items-center whitespace-nowrap">
                                    £ <EditableTextInput value={row.Paid} width='w-[100px]' />
                                </td>
                                <td className="px-6 py-4 border">
                                    <div className='flex gap-3 items-center'>
                                        <SelectField width='w-[180px]' />
                                        <Button title={"Edit List"} onClick={() => setIsModalOpen(true)} />
                                    </div>
                                </td>
                                <td className="px-6 py-4 border">{row.Royalties}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <EditListModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                options={options}
                setOptions={setOptions}
            />
        </div>
    )
}

export default TheseInvoicesCN