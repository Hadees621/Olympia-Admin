import React from "react";
import Summary from "./Summary";
import Button from "components/Button";
import { invoices } from "../utils/utils";
import useSidebarStore from "stores/States";
import SearchField from "pages/home/components/SearchField";

const ClientsTable = () => {
  const { isOpen } = useSidebarStore();

  return (
    <div
      className={`m-4 transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1200px]"
        }`}
    >
      <div className="flex items-center mt-8 gap-3 m-4 w-[80%] mx-auto">
        <SearchField placeholder="Book Title" />
        <SearchField placeholder="Pen name/Author name" />
        <Button title="Search" />
        <Button title={"New Invoice"} bg="bg-green-500" text={"text-white"} />
      </div>
      <div className="overflow-x-auto shadow-md transition-all duration-300 max-h-[400px]">
        <table className="w-full text-sm text-left ">
          <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
            <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
              <th className="px-6 py-3 border"> Invoice No</th>
              <th className="px-6 py-3 border">Product 1</th>
              <th className="px-6 py-3 border">Product 2</th>
              <th className="px-6 py-3 border">Product 3</th>
              <th className="px-6 py-3 border">Amount 1</th>
              <th className="px-6 py-3 border">Amount 2</th>
              <th className="px-6 py-3 border">Amount 3</th>
              <th className="px-6 py-3 border">Due Date</th>
              <th className="px-6 py-3 border">Net </th>
              <th className="px-6 py-3 border">VAT</th>
              <th className="px-6 py-3 border">Total </th>
              <th className="px-6 py-3 border">Payments Detail</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((row, index) => (
              <tr
                key={index}
                className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap"
              >
                <td className="px-6 py-4 border">{row.InvoiceNo}</td>
                <td className="px-6 py-4 border">{row.Product1}</td>
                <td className="px-6 py-4 border">{row.Product2}</td>
                <td className="px-6 py-4 border">{row.Product3}</td>
                <td className="px-6 py-4 border">{row.Amount1}</td>
                <td className="px-6 py-4 border">{row.Amount2}</td>
                <td className="px-6 py-4 border">{row.Amount3}</td>
                <td className="px-6 py-4 border">{row.DueDate}</td>
                <td className="px-6 py-4 border">{row.Net}</td>
                <td className="px-6 py-4 border">{row.Vat}</td>
                <td className="px-6 py-4 border">{row.Total}</td>
                <td className="px-6 py-4 border">{row.PaymentDetail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Summary />
    </div>
  );
};

export default ClientsTable;
