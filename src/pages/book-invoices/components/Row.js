import TableButton from "components/TableButton";
import React from "react";

const Row = () => {
  return (
    <tr className="text-[11px] border-b text-center">
      <td className="p-3">08-06-2010</td>
      <td className="p-3">2107</td>
      <td className="p-3">0000-00-00</td>
      <td className="p-3">Amazon.co.uk (oly)</td>
      <td className="p-3">£ 3.20</td>

      <td className="p-3">Amazon.co.uk </td>
      <td className="p-3"> Yes</td>
      <td className="p-3">
        <div className="flex justify-center items-center space-x-2">
          <TableButton title={"View"} />
          <TableButton title={"Edit"} bg="bg-green-500" text={"text-white"} />
          <TableButton title={"Archive"} bg="bg-red-500" text={"text-white"} />
        </div>
      </td>
    </tr>
  );
};

export default Row;
