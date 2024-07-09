import React from "react";
import Button from "components/Button";
import Row from "pages/book-invoices/components/Row";

const IngramTab = () => {
  return (
    <div>
      <div>
        <div className="flex items-center mt-3 gap-3 my-4 justify-end">
          <Button title="Generate Order" />
        </div>
      </div>

      <div className="overflow-x-auto text-center shadow max-h-[500px]">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <thead className="bg-gray-50 whitespace-nowrap sticky top-0 z-10">
            <tr className="text-[10px] w-full font-medium text-gray-500 uppercase">
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
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IngramTab;
