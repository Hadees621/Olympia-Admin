import React from "react";
import Button from "components/Button";
import SelectField from "components/SelectField";
import Row from "./Row";

const InvoicesTab = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center w-[55%] mt-3 gap-3 my-4">
        <SelectField placeholder="Author name" />
        <Button title="Go to these invoices/CN" />
        <Button title="New Invoices" />
      </div>
      <div className="overflow-x-auto text-center shadow">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="text-[10px] w-full font-medium text-gray-500 uppercase">
              <th className="p-3 "> Invoice Date</th>
              <th className="p-3 "> Invoice No.</th>
              <th className="p-3 "> Credit No. </th>
              <th className="p-3 "> C/N Date</th>
              <th className="p-3 "> Client</th>
              <th className="p-3 "> Total Amount </th>
              <th className="p-3 ">C/N Amount </th>
              <th className="p-3 ">Amount Due</th>
              <th className="p-3 "> Amount Paid</th>
              <th className="p-3 ">Sale Type </th>
              <th className="p-3 ">Royalties</th>
              <th className="p-3 ">Actions</th>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoicesTab;
