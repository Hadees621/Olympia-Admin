import React from "react";
import { data } from "../utils/utils";
import Notepad from "utils/icons/Notepad";
import Speaker from "utils/icons/Speaker";
import { getStatusClass } from "utils/utils";
import Calculator from "utils/icons/Calculator";

const Table = () => {
  return (
    <div className="overflow-x-auto mt-5 text-center shadow custom-scrollbarw max-h-[900px] custom-scrollbar">
      <table className="min-w-full">
        <thead className="text-sm text-grey-700 uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
          <tr className="text-sm w-full font-bold uppercase whitespace-nowrap">
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
        <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
          {data.map((data, index) => (
            <tr key={index} className="text-sm text-gray-700 font-semibold custom-hover-row">
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
