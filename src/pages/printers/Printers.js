import Title from "components/Title";
import React, { useState } from "react";
import Button from "components/Button";
import { data } from "../home/utils/utils";
import { invoiceData } from "./utils/utils";
import useSidebarStore from "stores/States";
import SelectField from "components/SelectField";
import TableButton from "components/TableButton";
import { renderToString } from "react-dom/server";
import DatePickerField from "components/DatePickerField";
import SearchField from "../home/components/SearchField";
import EditModal from "../bookshops/components/EditModal";
import PrintButton from "../tabs/book-invoices/components/invoice/PrintButton";
import FinalInvoice from "../tabs/book-invoices/components/invoice/FinalInvoice";

const Printers = () => {
  const { isOpen } = useSidebarStore();
  const [selectedRows, setSelectedRows] = useState([]);
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);

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

  const handleOpenInvoice = (row) => {
    const invoiceHtml = renderToString(<FinalInvoice invoiceData={row} />);
    const printButtonHtml = renderToString(<PrintButton />);
    const newWindow = window.open('', '', 'width=800,height=600');
    newWindow.document.write(`
      <html>
        <head>
          <title>Invoice</title>
          <style>
            /* Include TailwindCSS styles here or link to an external stylesheet */
            body { font-family: 'Lato', sans-serif; }
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

  const isRowSelected = (index) => selectedRows.includes(index);

  return (
    <div className="m-4">
      <Title />

      <div className="flex items-center mt-10 mb-4 gap-5">
        <p className="text-lg font-semibold"> Invoice # </p>
        <SearchField />
        <Button title={"Search"} />
        <p className="text-lg font-semibold"> Name # </p>
        <SelectField />
        <Button title={"Search"} />
        <Button title="ISBN Search" href="/isbn-search" />
      </div>

      <div className="flex items-center mt-3 gap-3">
        <p className="text-lg font-semibold"> Date : From </p>
        <DatePickerField />
        <p className="text-lg font-semibold"> To </p>
        <DatePickerField />
        <Button title="Search" />
      </div>

      <div
        className={` transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1200px]"
          }`}
      >
        <div className="flex items-center justify-end my-4">
          <Button title={"Send Via Email"} />
        </div>
        <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw">
          <table className="min-w-full table-fixed divide-y divide-gray-200">
            <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
              <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
                <th className="px-6 py-3 space-x-4 flex items-center gap-3">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectedRows.length === data.length}
                  />
                  Select All
                </th>
                <th className="px-6 py-3 "></th>
                <th className="px-6 py-3 ">Invoice No.</th>
                <th className="px-6 py-3 ">Credit No.</th>
                <th className="px-6 py-3 ">Date</th>
                <th className="px-6 py-3 ">Due Date</th>
                <th className="px-6 py-3 ">Name</th>
                <th className="px-6 py-3 ">NET</th>
                <th className="px-6 py-3 ">P&P</th>
                <th className="px-6 py-3 ">VAT</th>
                <th className="px-6 py-3 ">Total</th>
                <th className="px-6 py-3 ">Date Payment</th>
                <th className="px-16 py-3  w-[160px]">Paid</th>
                <th className="px-16 py-3  w-[160px]">Payment Detail</th>
                <th className="px-16 py-3  w-[160px]">Sale Type</th>
                <th className="px-16 py-3 ">H-F/Sale</th>
                <th className="px-6 py-3 ">Royalties</th>
                <th className="px-6 py-3 ">Status</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.map((row, index) => (
                <tr
                  key={index}
                  className={`text-sm text-gray-700 text-center border font-bold whitespace-nowrap custom-hover-row ${isRowSelected(index) ? "bg-gray-100" : ""
                    }`}
                >
                  <td className="px-6 py-4 ">
                    <input
                      type="checkbox"
                      onChange={() => handleSelectRow(index)}
                      checked={selectedRows.includes(index)}
                    />
                  </td>

                  <td className="px-6 py-4 ">
                    <TableButton title={"View"} onClick={() => handleOpenInvoice(row)} />
                  </td>
                  <td className="px-6 py-4 ">{row.invoiceNo}</td>
                  <td className="px-6 py-4 ">{row.creditNo}</td>
                  <td className="px-6 py-4 ">{row.date}</td>
                  <td className="px-6 py-4 ">{row.dueDate}</td>
                  <td className="px-6 py-4 ">{row.name}</td>
                  <td className="px-6 py-4 ">{row.net}</td>
                  <td className="px-6 py-4 ">{row.pp}</td>
                  <td className="px-6 py-4 ">{row.vat}</td>
                  <td className="px-6 py-4 ">{row.total}</td>
                  <td className="px-6 py-4 ">{row.datePayment}</td>
                  <td className="px-6 py-4 ">{row.paid}</td>
                  <td className="px-6 py-4  ">
                    <div className="flex gap-3">
                      <SelectField width="w-[160px]" />
                      <TableButton title={'Edit List'} onClick={() => setIsInfoModalVisible(true)} />
                    </div>
                  </td>
                  <td className="px-6 py-4 ">
                    <SelectField width="w-[160px]" />
                  </td>
                  <td className="px-6 py-4 ">
                    <SelectField width="w-[160px]" />
                  </td>
                  <td className="px-6 py-4 ">{row.royalties}</td>
                  <td className="px-6 py-4 ">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <EditModal
            isOpen={isInfoModalVisible}
            onClose={() => setIsInfoModalVisible(false)}
            title="Edit Payment Detail List"
            label={"Enter Payment method:"}
          />
        </div>
      </div>
    </div>
  );
};

export default Printers;
