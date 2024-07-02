import React from "react";
import Calculator from "../../../utils/icons/Calculator";
import Notepad from "../../../utils/icons/Notepad";
import Speaker from "../../../utils/icons/Speaker";
const TableRow = ({ data }) => {
  return (
    <tr className="text-[10px]">
      <td className="p-3">{data.status}</td>
      <td className="p-3">{data.imprint}</td>
      <td className="p-3">{data.author}</td>
      <td className="p-3">{data.penName}</td>
      <td className="p-3">{data.bookTitle}</td>
      <td className="p-3">{data.isbn}</td>
      <td className="px-6 py-4 whitespace-nowrap">{data.dateContract}</td>
      <td className="px-6 py-4 whitespace-nowrap">{data.datePublication}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex space-x-2 ">
          <div className="p-2 rounded-3xl bg-[#C3C4C5] cursor-pointer">
            {data.authorForms.form1 ? <Calculator color="green" /> : null}
          </div>
          <div className="p-2 rounded-3xl bg-[#C3C4C5] cursor-pointer">
            {data.authorForms.form2 ? <Notepad /> : null}
          </div>
          <div className="p-2 rounded-3xl bg-[#C3C4C5] cursor-pointer">
            {data.authorForms.form3 ? <Speaker color="green" /> : null}
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{data.paymentStatus}</td>
    </tr>
  );
};

export default TableRow;
