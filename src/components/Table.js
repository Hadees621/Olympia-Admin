import React from "react";

const Table = ({ headers, data, rowsPerPage }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr className="text-sm w-full font-bold text-gray-500 uppercase">
          {
            <tr className="text-sm w-full font-bold  uppercase">
              <th className="p-3 ">Status</th>
              <th className="p-3">Imprint</th>
              <th className="p-3">Author</th>
              <th className="p-3">Pen Name</th>
              <th className="p-3">Book Title</th>
              <th className="p-3">ISBN</th>
              <th className="p-3">Date Contract</th>
              <th className="p-3">Date Publication</th>
              <th className="p-3">Author Forms</th>
              <th className="p-3">Payment Status</th>
            </tr>
          }
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.slice(0, rowsPerPage).map((row, rowIndex) => (
          <tr key={rowIndex} className="text-md text-center font-medium">
            {headers.map((header, colIndex) => (
              <td key={colIndex} className="p-3 text-sm text-center">
                {row[header.toLowerCase().replace(/ /g, "")]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
