import TableButton from "components/TableButton";
import React from "react";

const BookInvoicesRow = () => {
  return (
    <tr className="text-[11px] border-b text-center">
      <td className="p-3">28-10-2010</td>
      <td className="p-3">2593</td>
      <td className="p-3">56793</td>
      <td className="p-3">0000-00-00</td>
      <td className="p-3">90</td>
      <td className="p-3"></td>

      <td className="p-3">£ 359.55</td>
      <td className="p-3"></td>
      <td className="p-3">359.55</td>
      <td className="p-3">Author Sale</td>
      <td className="p-3">Royalties</td>
      <td className="p-3"> Actions</td>
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

export default BookInvoicesRow;
