import React from "react";

const FinalCheck = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50 ">
        <tr className="text-sm w-full font-medium text-gray-500 uppercase">
          <th className="p-3 ">Status</th>
          <th className="p-3">Pen Name</th>
          <th className="p-3">Book Title</th>
          <th className="p-3">Imprint</th>
          <th className="p-3">Date sent for final check</th>
          <th className="p-3">Date received from final check</th>
          <th className="p-3">Contract payment status</th>
          <th className="p-3"> View</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr className="text-sm text-center">
          <td className="p-3 text-orange-400">data.status</td>
          <td className="p-3">data.imprint</td>
          <td className="p-3">data.author</td>
          <td className="p-3">data.penName</td>
          <td className="p-3">data.bookTitle</td>
          <td className="p-3">data.isbn</td>
          <td className="p-3">data.dateContract</td>
          <td className="p-3">data.dateContract</td>
        </tr>
      </tbody>
    </table>
  );
};

export default FinalCheck;
