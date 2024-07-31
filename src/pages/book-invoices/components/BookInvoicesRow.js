import React from "react";
import FinalInvoice from "./FinalInvoice";
import TableButton from "components/TableButton";
import { renderToString } from "react-dom/server";

const BookInvoicesRow = ({ onClick }) => {
  const invoiceData = {
    shipTo: 'John Doe, 123 Main St, City, Country',
    sameAsInvoiceAddress: true,
    to: 'ABC Corp',
    messageTo: 'Thank you for your business',
    bookTitle: 'The Marsh Man',
    author: 'Mark Vivian',
    isbn: '978-1-84897-028-1',
    invoiceNumber: 'B61225',
    reference: 'REF123',
    saleType: 'Retail',
    invoiceDate: '2023-07-25',
    dueDate: '2023-08-25',
    hf: 'HF001',
    price: '10.00',
    quantity: '5',
    amount: '50.00',
    terms: {
      days: '30',
      addNew: 'N/A',
      paymentMethod: 'Bank Transfer',
      paymentDate: '2023-08-25',
      shippedStatus: 'Shipped',
      shippedDate: '2023-07-28',
    },
    discount: '5.00',
    subtotal: '45.00',
    pnp: '5.00',
    net: '50.00',
    vat: '10.00',
    total: '60.00',
  };
  const handleOpenInvoice = () => {
    const newWindow = window.open('', '', 'width=800,height=600');
    const invoiceHtml = renderToString(<FinalInvoice invoiceData={invoiceData} />);

    newWindow.document.write(`
        <html>
            <head>
                <title>Invoice</title>
                <style>
                    body {
                        font-family: 'Lato', sans-serif;
                    }
                    .p-4 { padding: 1rem; }
                    .shadow { box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
                    .grid { display: grid; }
                    .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
                    .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
                    .gap-4 { gap: 1rem; }
                    .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
                    .my-2 { margin-top: 0.5rem; margin-bottom: 0.5rem; }
                    .items-end { align-items: flex-end; }
                    .space-y-2 { margin-bottom: 0.5rem; }
                    .space-y-4 { margin-bottom: 1rem; }
                    .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
                    .font-bold { font-weight: bold; }
                    .text-xl { font-size: 1.25rem; }
                    .text-md { font-size: 1rem; }
                    .text-end { text-align: end; }
                    .text-red-500 { color: #f56565; }
                    .italic { font-style: italic; }
                </style>
            </head>
            <body>${invoiceHtml}</body>
        </html>
    `);
    newWindow.document.close();
  };
  return (
    <tr className="text-sm border-b text-center">
      <td className="p-3">28-10-2010</td>
      <td className="p-3">2593</td>
      <td className="p-3">56793</td>
      <td className="p-3">0000-00-00</td>
      <td className="p-3">90</td>
      <td className="p-3"></td>

      <td className="p-3">£ 359.55</td>
      <td className="p-3"></td>
      <td className="p-3">359.55</td>
      <td className="p-3">Author Sale</td>
      <td className="p-3">Royalties</td>
      <td className="p-3"> Actions</td>
      <td className="p-3">
        <div className="flex justify-center items-center space-x-2">
          <button onClick={handleOpenInvoice} className="bg-[#001C4E1F] hover:bg-gray-300 rounded-md text-[#001C4E] font-bold px-2 py-2 text-[10px]">View </button>

          <TableButton title={"Edit"} bg="bg-green-500" hover="hover:bg-green-600" text={"text-white"} onClick={onClick} />
        </div>
      </td>
    </tr>
  );
};

export default BookInvoicesRow;
