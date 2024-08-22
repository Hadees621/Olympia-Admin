import React from "react";
import TotalRevenue from "./TotalRevenue";
import { reportsData } from "../utils/utils";

const ReportsTab = () => {
  return (
    <div>
      <div className="overflow-x-auto text-center shadow max-h-[500px] custom-scrollbar">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <thead className="bg-gray-50 whitespace-nowrap sticky top-0 z-10">
            <tr className="text-sm w-full font-medium text-gray-500 uppercase">
              <th className="p-3">Book Title</th>
              <th className="p-3">Author Name</th>
              <th className="p-3">ISBN</th>
              <th className="p-3">Price</th>
              <th className="p-3">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {reportsData.map((row, index) => (
              <tr key={index} className="text-sm border-b text-center custom-hover-row">
                <td className="p-3">{row.bookTitle}</td>
                <td className="p-3">{row.authorName}</td>
                <td className="p-3">{row.isbn}</td>
                <td className="p-3">{row.price}</td>
                <td className="p-3">{row.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between">
        <p className="p-4 text-xl font-bold">Total books: {reportsData.length}</p>
        <div>
          <TotalRevenue />
        </div>
      </div>
    </div>
  );
};

export default ReportsTab;

