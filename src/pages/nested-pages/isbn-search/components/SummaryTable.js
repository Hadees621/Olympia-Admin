import React from "react";

const SummaryTable = ({ title, data }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full ">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="text-left px-4 py-2">Press</th>
            <th className="text-right px-4 py-2">subTotal</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{row.press}</td>
              <td className="text-right px-4 py-2">{row.subTotal}</td>
            </tr>
          ))}
          <tr className="font-bold border-t">
            <td className="px-4 py-2">TOTAL</td>
            <td className="text-right px-4 py-2">
              {data.reduce((total, row) => total + row.subTotal, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;
