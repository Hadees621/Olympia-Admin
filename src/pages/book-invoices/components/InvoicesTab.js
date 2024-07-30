import Button from "components/Button";
import React, { useState } from "react";
import InvoiceModal from "./InvoiceModal";
import BookInvoicesRow from "./BookInvoicesRow";
import SelectField from "components/SelectField";

const InvoicesTab = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [invoiceData, setInvoiceData] = useState({
    shipTo: 'Some Address',
    company: 'Some Company',
    bookTitle: 'The March Men',
    invoiceNumber: '12345',
  });

  const handleSave = (data) => {
    setInvoiceData(data);
  };

  return (
    <div>
      <div className="flex items-center w-[55%] mt-3 gap-3 my-4">
        <SelectField placeholder="Author name" />
        <Button title="Go to these invoices/CN" href="/these-invoices-CN" />
        <Button title="New Invoices" onClick={() => setModalVisible(true)} />
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
              <th className="p-3 "> Quantity</th>
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
            <BookInvoicesRow />
            <BookInvoicesRow />
            <BookInvoicesRow />
            <BookInvoicesRow />
            <BookInvoicesRow />
            <BookInvoicesRow />
            <BookInvoicesRow />
            <BookInvoicesRow />
            <BookInvoicesRow />
            <BookInvoicesRow />
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
