import React from "react";
import { getStatusClass } from "utils/utils";
import TableButton from "components/TableButton";

const ToDoTab = ({ data }) => {
  return (
    <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar">
      <table className="min-w-full table-fixed divide-y divide-gray-200">
        <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
          <tr className="text-sm w-full font-medium text-gray-500 uppercase">
            <th className="p-3">Status</th>
            <th className="p-3">Pen Name</th>
            <th className="p-3">Book Title</th>
            <th className="p-3">Imprint</th>
            <th className="p-3">Date sent for final check	</th>
            <th className="p-3">Contract Payment Status</th>
            <th className="p-3">Notes</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className="text-sm text-center font-bold custom-hover-row">
              <td className="p-3 text-orange-400">{row.status}</td>
              <td className="p-3">{row.penName}</td>
              <td className="p-3">{row.bookTitle}</td>
              <td className="p-3">{row.imprint}</td>
              <td className="p-3">{row.Datesentforfinalcheck}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`w-[90px] ${getStatusClass(
                    row.contractPaymentStatus
                  )}`}
                >
                  £ {row.contractPaymentStatus}
                </span>
              </td>
              <td className="px-6 py-4 ">
                <TableButton title="View" href={"/view-final-check"} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoTab;
