import Button from "components/Button";
import React, { useState } from "react";
import TotalRevenue from "./TotalRevenue";
import { tableData } from "../utils/utils";
import TableButton from "components/TableButton";
import SelectField from "components/SelectField";
import { renderToString } from "react-dom/server";
import DatePickerField from "components/DatePickerField";
import InvoiceModal from "pages/book-invoices/components/InvoiceModal";
import invoiceData from "pages/nested-pages/all-purchases/utils/utils";
import PrintButton from "pages/book-invoices/components/invoice/PrintButton";
import FinalInvoice from "pages/book-invoices/components/invoice/FinalInvoice";

const PreOrdersTab = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenInvoice = (invoiceData) => {
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
    <div>
      <div>
        <div className="flex items-center mt-3 gap-3 my-4">
          <SelectField placeholder="Select Company  " />
          <Button title="Search" />
          <DatePickerField />
          <DatePickerField />
          <Button title="Search Invoices Date Range" />
        </div>
      </div>

      <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <thead className="bg-gray-50 whitespace-nowrap sticky top-0 z-10">
            <tr className="text-sm w-full font-medium text-gray-500 uppercase">
              <th className="p-3">Invoice Date</th>
              <th className="p-3">Invoice No.</th>
              <th className="p-3">Credit No.</th>
              <th className="p-3">Client</th>
              <th className="p-3">P&P Total</th>
              <th className="p-3">Sale Type</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id} className="text-sm border-b custom-hover-row">
                <td className="p-3">{row.invoiceDate}</td>
                <td className="p-3">{row.invoiceNo}</td>
                <td className="p-3">{row.creditNo}</td>
                <td className="p-3">{row.client}</td>
                <td className="p-3">{row.pnpTotal}</td>
                <td className="p-3">{row.saleType}</td>
                <td className="p-3">{row.status}</td>
                <td className="p-3">
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      onClick={() => handleOpenInvoice(row)}
                      className="bg-[#001C4E1F] hover:bg-gray-300 rounded-md text-[#001C4E] font-bold px-2 py-2 text-[10px]"
                    >
                      View
                    </button>
                    <TableButton
                      title="Edit"
                      bg="bg-green-600"
                      hover="hover:bg-green-700"
                      text="text-white"
                      onClick={() => setModalVisible(true)}
                    />
                    <TableButton
                      title="Archive"
                      bg="bg-red-500"
                      hover="hover:bg-red-600"
                      text="text-white"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between">
        <p className="p-4 text-xl font-bold"> Total invoices: 12 </p>
        <div>
          <TotalRevenue />
        </div>
      </div>

      <InvoiceModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        initialData={invoiceData}
      />
    </div>
  );
};

export default PreOrdersTab;
