import React from "react";

const Table = ({ headers, data }) => {
  return (
    <div className="p-4">
      <table className="min-w-full bg-white border-collapse border border-gray-300">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2 border border-gray-300 bg-gray-100 text-left text-gray-600"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-2 border border-gray-300"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
