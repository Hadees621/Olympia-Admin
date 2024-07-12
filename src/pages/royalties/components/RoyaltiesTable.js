import React, { useState } from "react";
import useSidebarStore from "stores/States";
import { data } from "../utils/utils";
import TableButton from "components/TableButton";
import SelectField from "components/SelectField";
import Button from "components/Button";

const RoyaltiesTable = () => {
  const { isOpen } = useSidebarStore();
  const [selectedRows, setSelectedRows] = useState([]);

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
    <div
      className={`m-4 transition-all duration-300 ${
        isOpen ? "max-w-[1050px]" : "max-w-[1200px]"
      }`}
    >
      <div className="flex items-center mt-10 mb-4 gap-3">
        <div className="w-[50%] gap-5 flex items-center">
          <p className="text-lg font-semibold"> With Selected: </p>
          <SelectField />
          <Button title="Submit" />
        </div>
        <div className="w-[50%] gap-5 flex items-center justify-end">
          <p className="text-lg font-semibold"> Total: 410 </p>
          <Button title="Download" />
        </div>
      </div>
      <div className="overflow-x-auto shadow-md transition-all duration-300">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-white uppercase dark:text-white">
            <tr className="text-xs font-medium text-gray-500 uppercase text-center whitespace-nowrap">
              <th className="px-6 py-3 border space-x-4 flex items-center gap-3">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedRows.length === data.length}
                />
                Select All
              </th>
              <th className="px-6 py-3 border">View</th>
              <th className="px-6 py-3 border">Email Status</th>
              <th className="px-6 py-3 border">Book </th>
              <th className="px-6 py-3 border">Author</th>
              <th className="px-6 py-3 border"> Duration</th>
              <th className="px-6 py-3 border">Issue Date</th>
              <th className="px-6 py-3 border">Royalties Amount</th>
              <th className="px-6 py-3 border">Broughtforward Amount</th>
              <th className="px-6 py-3 border">Total Amount</th>
              <th className="px-6 py-3 border">Issued</th>
              <th className="px-6 py-3 border">Status</th>
              <th className="px-6 py-3 border">Payment Date</th>
              <th className="px-6 py-3 border">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`text-sm text-gray-700 text-center border font-bold whitespace-nowrap ${
                  isRowSelected(index) ? "bg-gray-100" : ""
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
                <td className="px-6 py-4 border">{row.emailStatus}</td>
                <td className="px-6 py-4 border">{row.book}</td>
                <td className="px-6 py-4 border">{row.author}</td>
                <td className="px-6 py-4 border">{row.duration}</td>
                <td className="px-6 py-4 border">{row.issueDate}</td>
                <td className="px-6 py-4 border">{row.royaltiesAmount}</td>
                <td className="px-6 py-4 border">{row.broughtforwardAmount}</td>
                <td className="px-6 py-4 border">{row.totalAmount}</td>
                <td className="px-6 py-4 border">
                  <SelectField width="w-[120px]" />
                </td>
                <td className="px-6 py-4 border">{row.status}</td>

                <td className="px-6 py-4 border">{row.paymentDate}</td>
                <td className="px-6 py-4 border">
                  <TableButton title={"Delete"} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoyaltiesTable;
