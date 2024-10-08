import Button from 'components/Button';
import React, { useState } from 'react'
import { invoices } from './utils/utils';
import useSidebarStore from 'stores/States';
import Modal from 'components/modals/Modal';
import SelectField from 'components/SelectField';
import { renderToString } from 'react-dom/server';
import ViewInvoice from './components/ViewInvoice';
import EditListModal from 'components/modals/EditListModal';
import EditableTextInput from 'components/EditableTextInput';
import PrintButton from 'pages/tabs/book-invoices/components/invoice/PrintButton';
import FinalInvoice from 'pages/tabs/book-invoices/components/invoice/FinalInvoice';

const TheseInvoicesCN = () => {
    const { isOpen } = useSidebarStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [options, setOptions] = useState([
        'paid by cheque',
        'paid by credit card',
        'paid by paypal',
    ]);

    const invoiceData = {
        shipTo: 'John Doe, 123 Main St, City, Country',
        to: 'ABC Corp',
        bookTitle: 'The Marsh Man',
        author: 'Mark Vivian',
        isbn: '978-1-84897-028-1',
        invoiceNumber: 'B61225',
        reference: 'REF123',
        saleType: 'Retail',
        invoiceDate: '2023-07-25',
        dueDate: '2023-08-25',
        price: '10.00',
        quantity: '5',
        amount: '50.00',
        terms: {
            days: '30',
            paymentMethod: 'Bank Transfer',
            paymentDate: '2023-08-25',
            shippedStatus: 'Shipped',
        },
        discount: '5.00',
        subtotal: '45.00',
        pnp: '5.00',
        net: '50.00',
        vat: '10.00',
        total: '60.00',
    };

    const handleOpenInvoice = () => {
        const invoiceHtml = renderToString(<FinalInvoice invoiceData={invoiceData} />);
        const printButtonHtml = renderToString(<PrintButton />);

        const newWindow = window.open('', '', 'width=800,height=600');
        newWindow.document.write(`
          <html>
            <head>
              <title>Invoice</title>
              <style>
                /* Include TailwindCSS styles here or link to an external stylesheet */
              </style>
            </head>
            <body>
              ${invoiceHtml}
              ${printButtonHtml}
              <script>
                document.getElementById('printBtn').addEventListener('click', function() {
                  window.print();
                });
              </script>
            </body>
          </html>
        `);
        newWindow.document.close();
    };

    return (
        <div
            className={`m-4 transition-all duration-300 w-full ${isOpen ? "max-w-[1050px]" : "max-w-[1270px]"
                }`}
        >
            <div className='space-y-3'>
                <p className="text-3xl font-semibold mt-8">Invoices</p>
                <p className="text-xl font-semibold">Author Name:	Ms. Bradford Marie </p>
                <p className="text-xl font-semibold">Book Title:	Joe the Elf</p>
            </div>

            <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw mt-10">
                <table className="min-w-full table-fixed divide-y divide-gray-200">
                    <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
                        <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
                            <th className="px-6 py-3"></th>
                            <th className="px-6 py-3">Invoice No.</th>
                            <th className="px-6 py-3">Credit No.</th>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">Due Date</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Total</th>
                            <th className="px-6 py-3">Date Payment</th>
                            <th className="px-6 py-3">Paid</th>
                            <th className="px-6 py-3">Payment Detail</th>
                            <th className="px-6 py-3">Royalties</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((row, index) => (
                            <tr
                                key={index}
                                className={`text-sm text-gray-700 text-center border font-bold whitespace-nowrap custom-hover-row`}
                            >
                                <td className="px-6 py-4">
                                    <button onClick={handleOpenInvoice} className="bg-[#001C4E1F] hover:bg-gray-300 rounded-md text-[#001C4E] font-bold px-2 py-2 text-[10px]">View</button>
                                </td>
                                <td className="px-6 py-4">{row.InvoiceNo}</td>
                                <td className="px-6 py-4">
                                    <EditableTextInput value={row.CreditNo} width='w-[100px]' />
                                </td>
                                <td className="px-6 py-4">{row.Date}</td>
                                <td className="px-6 py-4">{row.DueDate}</td>
                                <td className="px-6 py-4">{row.Name}</td>
                                <td className="px-6 py-4">{row.Total}</td>
                                <td className="px-6 py-4">
                                    <EditableTextInput value={row.DatePayment} width='w-[100px]' />
                                </td>
                                <td className="px-6 py-4 flex items-center whitespace-nowrap">
                                    £ <EditableTextInput value={row.Paid} width='w-[100px]' />
                                </td>
                                <td className="px-6 py-4">
                                    <div className='flex gap-3 items-center'>
                                        <SelectField width='w-[180px]' />
                                        <Button title={"Edit List"} onClick={() => setIsModalOpen(true)} />
                                    </div>
                                </td>
                                <td className="px-6 py-4">{row.Royalties}</td>
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

            <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)} onSave={() => setIsModalVisible(false)} title="Edit Contract Information">
                <ViewInvoice />
            </Modal>
        </div>
    )
}

export default TheseInvoicesCN