import React from "react";
import Calculator from "utils/icons/Calculator";
import Notepad from "utils/icons/Notepad";
import Speaker from "utils/icons/Speaker";

const TableRow = ({ data }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "status-button status-pending";
      case "Paid in Full":
        return "status-button status-paid";
      case "Hardback":
        return "status-button status-hardback";
      case "Traditional":
        return "status-button status-traditional";
      case "Paying":
        return "status-button status-paying";
      default:
        return "status-button";
    }
  };

  return (
    <tr className="text-sm font-medium">
      <td className="p-3 text-orange-400">{data.status}</td>
      <td className="p-3">{data.imprint}</td>
      <td className="p-3">{data.author}</td>
      <td className="p-3">{data.penName}</td>
      <td className="p-3">{data.bookTitle}</td>
      <td className="p-3">{data.isbn}</td>
      <td className="p-3">{data.dateContract}</td>
      <td className="p-3">{data.datePublication}</td>
      <td className="p-3">
        <div className="flex space-x-2">
          <div className="p-1.5 rounded-3xl bg-[#C3C4C5] cursor-pointer">
            <Calculator color={data.authorForms.form1 ? "green" : "white"} />
          </div>
          <div className="p-1.5 rounded-3xl bg-[#C3C4C5] cursor-pointer">
            <Notepad color={data.authorForms.form2 ? "green" : "white"} />
          </div>
          <div className="p-1.5 rounded-3xl bg-[#C3C4C5] cursor-pointer">
            <Speaker color={data.authorForms.form3 ? "green" : "white"} />
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`w-[90px] ${getStatusClass(data.paymentStatus)}`}>
          £ {data.paymentStatus}
        </span>
      </td>
    </tr>
  );
};

export default TableRow;
