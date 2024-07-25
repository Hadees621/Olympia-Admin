import React, { useState } from "react";
import useSidebarStore from "stores/States";
import TableButton from "components/TableButton";
import SelectField from "components/SelectField";
import Button from "components/Button";
import { data } from "../home/utils/utils";
import DatePickerField from "components/DatePickerField";
import { invoiceData } from "./utils/utils";
import SearchField from "../home/components/SearchField";

const Printers = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const { isOpen } = useSidebarStore();

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
  const isRowSelected = (index) => selectedRows.includes(index);

  return (
    <div className="m-4">
      <>
        <p className="text-3xl font-semibold mt-8 ml-8">
          Welcome to Olympia Portal (olympia admin)
        </p>
        <div className="flex items-center mt-10 mb-4 gap-5 px-5">
          <p className="text-lg font-semibold"> Invoice # </p>
          <SearchField />
          <Button title={"Search"} />
          <p className="text-lg font-semibold"> Name # </p>
          <SelectField />
          <Button title={"Search"} />
          <Button title="ISBN Search" href="/isbn-search" />
        </div>
        <div className="flex items-center mt-3 gap-3 px-5">
          <p className="text-lg font-semibold"> Date : From </p>
          <DatePickerField />
          <p className="text-lg font-semibold"> To </p>
          <DatePickerField />
          <Button title="Search" />
        </div>
      </>
      <div
        className={`m-4 transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1200px]"
          }`}
      >
        <div className="flex items-center mt-10 mb-4 gap-3">
          <Button title={"Send Via Email"} />
        </div>
        <div className="overflow-x-auto shadow-md transition-all duration-300">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
              <tr className="text-xs font-medium text-gray-500 uppercase text-center whitespace-nowrap">
                <th className="px-6 py-3 border space-x-4 flex items-center gap-3">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectedRows.length === data.length}
                  />
                  Select All
                </th>
                <th className="px-6 py-3 border"></th>
                <th className="px-6 py-3 border">Invoice No.</th>
                <th className="px-6 py-3 border">Credit No.</th>
                <th className="px-6 py-3 border">Date</th>
                <th className="px-6 py-3 border">Due Date</th>
                <th className="px-6 py-3 border">Name</th>
                <th className="px-6 py-3 border">NET</th>
                <th className="px-6 py-3 border">P&P</th>
                <th className="px-6 py-3 border">VAT</th>
                <th className="px-6 py-3 border">Total</th>
                <th className="px-6 py-3 border">Date Payment</th>
                <th className="px-16 py-3 border w-[160px]">Paid</th>
                <th className="px-16 py-3 border w-[160px]">Payment Detail</th>
                <th className="px-16 py-3 border w-[160px]">Sale Type</th>
                <th className="px-16 py-3 border">H-F/Sale</th>
                <th className="px-6 py-3 border">Royalties</th>
                <th className="px-6 py-3 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.map((row, index) => (
                <tr
                  key={index}
                  className={`text-sm text-gray-700 text-center border font-bold whitespace-nowrap ${isRowSelected(index) ? "bg-gray-100" : ""
                    }`}
                >
                  <td className="px-6 py-4 border">
                    <input
                      type="checkbox"
                      onChange={() => handleSelectRow(index)}
                      checked={selectedRows.includes(index)}
                    />
                  </td>

                  <td className="px-6 py-4 border">
                    <TableButton title={"View"} />
                  </td>
                  <td className="px-6 py-4 border">{row.invoiceNo}</td>
                  <td className="px-6 py-4 border">{row.creditNo}</td>
                  <td className="px-6 py-4 border">{row.date}</td>
                  <td className="px-6 py-4 border">{row.dueDate}</td>
                  <td className="px-6 py-4 border">{row.name}</td>
                  <td className="px-6 py-4 border">{row.net}</td>
                  <td className="px-6 py-4 border">{row.pp}</td>
                  <td className="px-6 py-4 border">{row.vat}</td>
                  <td className="px-6 py-4 border">{row.total}</td>
                  <td className="px-6 py-4 border">{row.datePayment}</td>
                  <td className="px-6 py-4 border">{row.paid}</td>
                  <td className="px-6 py-4 border ">
                    <SelectField width="w-[160px]" />
                  </td>
                  <td className="px-6 py-4 border">
                    {" "}
                    <SelectField width="w-[160px]" />
                  </td>
                  <td className="px-6 py-4 border">
                    <SelectField width="w-[160px]" />
                  </td>
                  <td className="px-6 py-4 border">{row.royalties}</td>
                  <td className="px-6 py-4 border">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Printers;
