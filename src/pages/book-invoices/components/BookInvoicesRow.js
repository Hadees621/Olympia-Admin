import React from "react";
import FinalInvoice from "./invoice/FinalInvoice";
import TableButton from "components/TableButton";
import { renderToString } from "react-dom/server";
import PrintButton from "./invoice/PrintButton";

const BookInvoicesRow = ({ onClick }) => {
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
      <td className="p-3">Actions</td>
      <td className="p-3">
        <div className="flex justify-center items-center space-x-2">
          <button onClick={handleOpenInvoice} className="bg-[#001C4E1F] hover:bg-gray-300 rounded-md text-[#001C4E] font-bold px-2 py-2 text-[10px]">View</button>
          <TableButton title={"Edit"} bg="bg-green-500" hover="hover:bg-green-600" text={"text-white"} onClick={onClick} />
        </div>
      </td>
    </tr>
  );
};

export default BookInvoicesRow;
