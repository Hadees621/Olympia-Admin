import TableButton from "components/TableButton";
import React from "react";

const Row = () => {
  return (
    <tr className="text-sm border-b text-center">
      <td className="p-3">2024-07-05</td>
      <td className="p-3">c7910332</td>
      <td className="p-3">Gardner</td>
      <td className="p-3">DN</td>
      <td className="p-3">
        <div className="flex justify-center items-center space-x-2">
          <TableButton title={"View"} />
          <TableButton title={"Edit"} bg="bg-green-500" text={"text-white"} />
          <TableButton title={"Delete"} bg="bg-red-500" text={"text-white"} />
        </div>
      </td>
    </tr>
  );
};

export default Row;
