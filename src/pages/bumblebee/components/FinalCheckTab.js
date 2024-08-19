import React from "react";
import { getStatusClass } from "utils/utils";
import TableButton from "components/TableButton";


const FinalCheckTab = ({ data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 border">
      <thead className="bg-gray-50">
        <tr className="text-sm w-full font-medium text-gray-500 uppercase">
          <th className="p-3">Status</th>
          <th className="p-3">Pen Name</th>
          <th className="p-3">Book Title</th>
          <th className="p-3">Imprint</th>
          <th className="p-3">Contract Payment Status</th>
          <th className="p-3">Notes</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, index) => (
          <tr key={index} className="text-sm text-gray-700 text-center custom-hover-row font-bold whitespace-nowrap border">
            <td className="p-3 text-orange-400">{row.status}</td>
            <td className="p-3">{row.penName}</td>
            <td className="p-3">{row.bookTitle}</td>
            <td className="p-3">{row.daysActivated}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                className={`w-[90px] ${getStatusClass(
                  row.contractPaymentStatus
                )}`}
              >
                £ {row.contractPaymentStatus}
              </span>
            </td>
            <td className="px-6 py-4">
              <TableButton title="Edit" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FinalCheckTab;
