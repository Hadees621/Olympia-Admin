import React from "react";
import TableButton from "components/TableButton";
import { renderToString } from "react-dom/server";
import FinalInvoice from "pages/book-invoices/components/invoice/FinalInvoice";
import PrintButton from "pages/book-invoices/components/invoice/PrintButton";

const Row = ({ id, isSelected, handleSelectRow, setModalVisible }) => {
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
    <tr className="text-sm border-b">
      <td className="p-3">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => handleSelectRow(id)}
        />
      </td>
      <td className="p-3">08-06-2010</td>
      <td className="p-3">2107</td>
      <td className="p-3">0000-00-00</td>
      <td className="p-3">Amazon.co.uk (oly)</td>
      <td className="p-3">£ 3.20</td>
      <td className="p-3">Amazon.co.uk</td>
      <td className="p-3">Yes</td>
      <td className="p-3">
        <div className="flex justify-center items-center space-x-2">
          <button onClick={handleOpenInvoice} className="bg-[#001C4E1F] hover:bg-gray-300 rounded-md text-[#001C4E] font-bold px-2 py-2 text-[10px]">View</button>
          <TableButton title="Edit" bg="bg-green-500" hover="hover:bg-green-600" text="text-white" onClick={() => setModalVisible(true)} />
          <TableButton title="Archive" bg="bg-red-500" hover="hover:bg-red-600" text="text-white" />
        </div>
      </td>
    </tr>
  );
};

export default Row;
