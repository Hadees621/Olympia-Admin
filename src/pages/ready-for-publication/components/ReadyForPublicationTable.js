import React from "react";
import { data } from "../utils/utils";
import Button from "components/Button";
import Speaker from "utils/icons/Speaker";
import Notepad from "utils/icons/Notepad";
import useSidebarStore from "stores/States";
import { getStatusClass } from "utils/utils";
import Pagination from "components/Pagination";
import Calculator from "utils/icons/Calculator";
import DatePickerField from "components/DatePickerField";
import SearchField from "pages/home/components/SearchField";

const ReadyForPublicationTable = () => {
  const { isOpen } = useSidebarStore();

  return (
    <div
      className={`transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1250px]"
        }`}
    >
      <div className="flex gap-3">
        <p className="text-lg font-bold">Total Records:</p>
        <p className="text-lg font-bold">{data.length}</p>
      </div>

      <div className="w-[70%] mx-auto my-3 flex items-center justify-center gap-3">
        <SearchField placeholder="Book Title" />
        <SearchField placeholder="Pen name/Author name" />
        <Button title="Search" />
        <Button title="Clear" />
        <Button title="ISBN Search" href="/isbn-search" />
      </div>

      <Pagination num={4} />

      <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
            <tr className="ext-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Pen Name</th>
              <th className="px-6 py-3">Book Title</th>
              <th className="px-6 py-3">Imprint</th>
              <th className="px-6 py-3">Ready for Publication Date</th>
              <th className="px-6 py-3">Contract Date</th>
              <th className="px-6 py-3">Publication Date</th>
              <th className="px-6 py-3">Author Forms</th>
              <th className="px-6 py-3">Contract Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap custom-hover-row"
              >
                <td className="px-6 py-4 text-orange-500 font-semibold">
                  {row.status}
                </td>
                <td className="px-6 py-4">{row.penName}</td>
                <td className="px-6 py-4">{row.bookTitle}</td>
                <td className="px-6 py-4">{row.imprint}</td>
                <td className="px-6 py-4">
                  {row.readyForPublicationDate}
                </td>
                <td className="px-6 py-4">{row.contractDate}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <DatePickerField />
                    <Button
                      title={"Update"}
                      bg="bg-green-600"
                      hover="hover:bg-green-700"
                      text={"text-white"}
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2 justify-center">
                    <div className="p-1.5 rounded-3xl bg-[#C3C4C5] cursor-pointer">
                      <Calculator
                        color={row.authorForms.form1 ? "green" : "white"}
                      />
                    </div>
                    <div className="p-1.5 rounded-3xl bg-[#C3C4C5] cursor-pointer">
                      <Notepad
                        color={row.authorForms.form2 ? "green" : "white"}
                      />
                    </div>
                    <div className="p-1.5 rounded-3xl bg-[#C3C4C5] cursor-pointer">
                      <Speaker
                        color={row.authorForms.form3 ? "green" : "white"}
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`w-[90px] ${getStatusClass(row.paymentStatus)}`}
                  >
                    £ {row.paymentStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReadyForPublicationTable;
