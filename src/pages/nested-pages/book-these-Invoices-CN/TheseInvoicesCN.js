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
import PrintButton from 'pages/book-invoices/components/invoice/PrintButton';
import FinalInvoice from 'pages/book-invoices/components/invoice/FinalInvoice';

const TheseInvoicesCN = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const closeModal = () => {
        setIsModalVisible(false);
    };
    const [options, setOptions] = useState([
        'paid by cheque',
        'paid by credit card',
        'paid by paypal',
    ]);
    const { isOpen } = useSidebarStore();
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
                                    <button onClick={handleOpenInvoice} className="bg-[#001C4E1F] hover:bg-gray-300 rounded-md text-[#001C4E] font-bold px-2 py-2 text-[10px]">View</button>
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

            <Modal isVisible={isModalVisible} onClose={closeModal} onSave={closeModal} title="Edit Contract Information">
                <ViewInvoice />
            </Modal>
        </div>
    )
}

export default TheseInvoicesCN