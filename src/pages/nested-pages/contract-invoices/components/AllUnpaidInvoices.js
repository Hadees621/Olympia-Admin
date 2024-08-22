import Button from "components/Button";
import React, { useState } from "react";
import { unpaiddata } from "../utils/utils";
import Pagination from "components/Pagination";
import TableButton from "components/TableButton";
import SearchField from "components/SearchField";
import SelectField from "components/SelectField";
import EditListModal from "components/modals/EditListModal";
import InvoiceSummary from "../../Uae-invoices/components/InvoiceSummary";

const AllUnpaidInvoices = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const [paymentOptions, setPaymentOptions] = useState([
    "Credit Card",
    "Bank Transfer",
    "PayPal",
  ]);

  const handleSelectAll = () => {
    if (selectedRows.length === unpaiddata.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(unpaiddata.map((_, index) => index));
    }
  };

  const handleSelectRow = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((i) => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const isRowSelected = (index) => selectedRows.includes(index);

  return (
    <div className="w-full text-start items-center">
      <div className="mb-3 w-full mx-2 font-semibold text-lg">
        <p>Total Records: 2589</p>
      </div>

      <div className="flex gap-2 justify-start mt-8 items-center w-full">
        <SearchField placeholder="Invoice Number" />
        <Button title="Search" />
        <p className="text-md font-semibold text-gray-500">From:</p>
        <SearchField />
        <p className="text-md font-semibold text-gray-500">To:</p>
        <SearchField />
        <Button title="Search" />
        <Button title="CSV" />
      </div>

      <Pagination num={12} />

      <div>
        <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw">
          <table className="min-w-full table-fixed divide-y divide-gray-200">
            <thead className="text-sm text-white uppercase bg-gray-50 sticky top-0 z-10">
              <tr className="ont-medium text-gray-500 uppercase text-center whitespace-nowrap">
                <th className="px-6 py-3  space-x-4 flex items-center gap-3">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectedRows.length === unpaiddata.length}
                  />
                  Select All
                </th>
                <th className="px-6 py-3">Invoice No.</th>
                <th className="px-6 py-3">Pen Name</th>
                <th className="px-6 py-3">C/N No.</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Total Amount</th>
                <th className="px-6 py-3">Due Date</th>
                <th className="px-6 py-3">Date Payment</th>
                <th className="px-6 py-3">Amount Paid</th>
                <th className="px-6 py-3">Mode Payment</th>
                <th className="px-6 py-3"></th>
                <th className="px-6 py-3">Author</th>
              </tr>
            </thead>
            <tbody>
              {unpaiddata.map((row, index) => (
                <tr
                  key={index}
                  className={`text-sm text-gray-700 text-center border font-bold whitespace-nowrap custom-hover-row ${
                    isRowSelected(index) ? "bg-gray-100" : ""
                  }`}
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      onChange={() => handleSelectRow(index)}
                      checked={isRowSelected(index)}
                    />
                  </td>
                  <td className="px-6 py-4">{row.invoiceNo}</td>
                  <td className="px-6 py-4">{row.cnNo}</td>
                  <td className="px-6 py-4">{row.cnNo}</td>
                  <td className="px-6 py-4">{row.date}</td>
                  <td className="px-6 py-4">{row.amount}</td>
                  <td className="px-6 py-4">{row.total}</td>
                  <td className="px-4 py-4 w-[180px]">
                    <SearchField background="bg-white" />
                  </td>
                  <td className="px-4 py-4 flex items-center gap-2 w-[180px]">
                    <SearchField background="bg-white" /> <span> £ </span>
                  </td>
                  <td className="px-6 py-4 items-center">
                    <div className="flex w-[200px] gap-2">
                      <SelectField />
                      <TableButton
                        title={"Edit List"}
                        onClick={() => setIsModalOpen(true)}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">{row.paymentMode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <InvoiceSummary
          totalInvoices={7}
          totalRevenue="AED 9,465.00"
          totalPaid="AED 0.00"
          totalRemaining="AED 9,465.00"
        />

        <EditListModal
          isOpen={IsModalOpen}
          onClose={() => setIsModalOpen(false)}
          options={paymentOptions}
          setOptions={setPaymentOptions}
        />
      </div>
    </div>
  );
};

export default AllUnpaidInvoices;
