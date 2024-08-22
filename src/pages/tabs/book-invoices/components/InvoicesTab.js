import React, { useState } from "react";
import Button from "components/Button";
import InvoiceModal from "./InvoiceModal";
import useSidebarStore from "stores/States";
import PrintButton from "./invoice/PrintButton";
import SelectField from "components/SelectField";
import FinalInvoice from "./invoice/FinalInvoice";
import TableButton from "components/TableButton";
import { renderToString } from "react-dom/server";
import { invoiceRows } from "../utils/utils";

const InvoicesTab = () => {
  const { isOpen } = useSidebarStore();
  const [isModalVisible, setModalVisible] = useState(false);
  const [invoiceData, setInvoiceData] = useState({
    shipTo: "Some Address",
    company: "Some Company",
    bookTitle: "The March Men",
    invoiceNumber: "12345",
  });

  const handleSave = (data) => {
    setInvoiceData(data);
  };

  const handleOpenInvoice = () => {
    const invoiceHtml = renderToString(<FinalInvoice invoiceData={invoiceData} />);
    const printButtonHtml = renderToString(<PrintButton />);

    const newWindow = window.open("", "", "width=800,height=600");
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
      className={`transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1260px]"
        }`}
    >
      <div className="flex items-center w-[55%] mt-3 gap-3 my-4">
        <SelectField placeholder="Author name" />
        <Button title="Go to these invoices/CN" href="/these-invoices-CN" />
        <Button title="New Invoices" onClick={() => setModalVisible(true)} />
      </div>

      <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <thead className="uppercase bg-gray-50 sticky top-0 z-10">
            <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
              <th className="px-6 py-3">Invoice Date</th>
              <th className="px-6 py-3">Invoice No.</th>
              <th className="px-6 py-3">Credit No.</th>
              <th className="px-6 py-3">C/N Date</th>
              <th className="px-6 py-3">Client</th>
              <th className="px-6 py-3">Quantity</th>
              <th className="px-6 py-3">Total Amount</th>
              <th className="px-6 py-3">C/N Amount</th>
              <th className="px-6 py-3">Amount Due</th>
              <th className="px-6 py-3">Sale Type</th>
              <th className="px-6 py-3">Royalties</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoiceRows.map((row, index) => (
              <tr key={index} className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap custom-hover-row">
                <td className="px-6 py-3">{row.invoiceDate}</td>
                <td className="px-6 py-3">{row.invoiceNo}</td>
                <td className="px-6 py-3">{row.creditNo}</td>
                <td className="px-6 py-3">{row.cnDate}</td>
                <td className="px-6 py-3">{row.client}</td>
                <td className="px-6 py-3">{row.quantity}</td>
                <td className="px-6 py-3">{row.totalAmount}</td>
                <td className="px-6 py-3">{row.cnAmount}</td>
                <td className="px-6 py-3">{row.amountDue}</td>
                <td className="px-6 py-3">{row.saleType}</td>
                <td className="px-6 py-3">{row.royalties}</td>
                <td className="px-6 py-3">
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      onClick={handleOpenInvoice}
                      className="bg-[#001C4E1F] hover:bg-gray-300 rounded-md text-[#001C4E] font-bold px-2 py-2 text-[10px]"
                    >
                      View
                    </button>
                    <TableButton
                      title={"Edit"}
                      bg="bg-green-600"
                      hover="hover:bg-green-700"
                      text={"text-white"}
                      onClick={() => setModalVisible(true)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <InvoiceModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        initialData={invoiceData}
        onSave={handleSave}
      />
    </div>
  );
};

export default InvoicesTab;

