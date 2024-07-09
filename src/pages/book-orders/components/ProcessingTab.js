import React, { useState } from "react";
import Button from "components/Button";
import SelectField from "components/SelectField";
import Row from "pages/book-orders/components/Row";
import DatePickerField from "components/DatePickerField";

const ProcessingTab = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedRows([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
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
          <Button title="All Processing Invoices" />
        </div>
        <div className="flex items-center justify-end mt-3 gap-3 my-4">
          <Button title="Shipped" />
          <Button title="Print" />
          <Button title="Shopping label" />
          <Button title="Send via Ingram" />
        </div>
      </div>

      <div className="overflow-x-auto text-center shadow">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="text-[10px] w-full font-medium text-gray-500 uppercase">
              <th className="p-3">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
              <Row
                key={id}
                id={id}
                isSelected={selectedRows.includes(id)}
                handleSelectRow={handleSelectRow}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProcessingTab;
