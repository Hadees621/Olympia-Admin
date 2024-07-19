import React from "react";

const DetailedTable = ({ title, data }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4">
        {title} : {data.length}
      </h2>
      <div className="overflow-x-auto max-h-[300px]">
        <table className="min-w-full relative">
          <thead className="bg-gray-200 sticky top-0">
            <tr>
              <th className="text-left px-4 py-2">ISBN</th>
              <th className="text-left px-4 py-2">Press</th>
              <th className="text-left px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="overflow-y-auto max-h-[300px]">
            {data.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{row.isbn}</td>
                <td className="px-4 py-2">{row.press}</td>
                <td className="px-4 py-2">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailedTable;
