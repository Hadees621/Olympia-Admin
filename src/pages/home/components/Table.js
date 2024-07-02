import React from "react";
import TableRow from "./TableRow";
import { data } from "../utils/utils";

const Table = () => {
  return (
    <div className="overflow-x-auto mt-5 mx-3 text-center">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 ">
          <tr className="text-[10px] border w-full font-medium text-gray-500 uppercase">
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
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <TableRow key={index} data={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
