import Summary from "./Summary";
import Button from "components/Button";
import React, { useState } from "react";
import { invoices } from "../utils/utils";
import useSidebarStore from "stores/States";
import { invoiceData } from "pages/printers/utils/utils";
import SearchField from "pages/home/components/SearchField";
import InvoiceModal from "pages/book-invoices/components/InvoiceModal";

const ClientsTable = () => {
  const { isOpen } = useSidebarStore();
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <div
      className={`transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1200px]"
        }`}
    >
      <div className="flex items-center mt-8 gap-3 m-4 w-[80%] mx-auto">
        <SearchField placeholder="Book Title" />
        <SearchField placeholder="Pen name/Author name" />
        <Button title="Search" />
        <Button title={"New Invoice"} bg="bg-green-500" hover="hover:bg-green-600" text={"text-white"} onClick={() => setModalVisible(true)} />
      </div>

      <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <thead className="text-white uppercase bg-gray-50 sticky top-0 z-10">
            <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
              <th className="px-6 py-3 "> Invoice No</th>
              <th className="px-6 py-3 ">Product 1</th>
              <th className="px-6 py-3 ">Product 2</th>
              <th className="px-6 py-3 ">Product 3</th>
              <th className="px-6 py-3 ">Amount 1</th>
              <th className="px-6 py-3 ">Amount 2</th>
              <th className="px-6 py-3 ">Amount 3</th>
              <th className="px-6 py-3 ">Due Date</th>
              <th className="px-6 py-3 ">Net </th>
              <th className="px-6 py-3 ">VAT</th>
              <th className="px-6 py-3 ">Total </th>
              <th className="px-6 py-3 ">Payments Detail</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((row, index) => (
              <tr
                key={index}
                className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap custom-hover-row"
              >
                <td className="px-6 py-4 ">{row.InvoiceNo}</td>
                <td className="px-6 py-4 ">{row.Product1}</td>
                <td className="px-6 py-4 ">{row.Product2}</td>
                <td className="px-6 py-4 ">{row.Product3}</td>
                <td className="px-6 py-4 ">{row.Amount1}</td>
                <td className="px-6 py-4 ">{row.Amount2}</td>
                <td className="px-6 py-4 ">{row.Amount3}</td>
                <td className="px-6 py-4 ">{row.DueDate}</td>
                <td className="px-6 py-4 ">{row.Net}</td>
                <td className="px-6 py-4 ">{row.Vat}</td>
                <td className="px-6 py-4 ">{row.Total}</td>
                <td className="px-6 py-4 ">{row.PaymentDetail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <Summary />

      <InvoiceModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        initialData={invoiceData}
      />
    </div>
  );
};

export default ClientsTable;
