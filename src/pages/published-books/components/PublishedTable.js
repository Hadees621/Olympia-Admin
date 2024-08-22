import React from "react";
import Button from "components/Button";
import Speaker from "utils/icons/Speaker";
import Notepad from "utils/icons/Notepad";
import useSidebarStore from "stores/States";
import { getStatusClass } from "utils/utils";
import Pagination from "components/Pagination";
import Calculator from "utils/icons/Calculator";
import SearchField from "components/SearchField";
import SelectField from "components/SelectField";
import DatePickerField from "components/DatePickerField";
import { data } from "pages/ready-for-publication/utils/utils";

const PublishedTable = () => {
  const { isOpen } = useSidebarStore();

  return (
    <div
      className={`transition-all duration-300 ${isOpen ? "max-w-[1050px]" : "max-w-[1300px]"
        }`}
    >
      <div className="flex justify-between">
        <div className="w-[25%]">
          <div className="flex gap-3">
            <p className="text-lg font-bold">Total Records:</p>
            <p className="text-lg font-bold">{data.length}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-lg font-bold">Month:</p>
            <p className="text-lg font-bold">July</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 w-full">
          <SearchField placeholder="Book Title" />
          <SearchField placeholder="Pen name/Author name" />
          <Button title="Search" />
          <Button title="Clear" />
          <Button title="ISBN Search" href="/isbn-search" />
        </div>
      </div>

      <div className="w-[70%] flex items-center justify-center gap-3 mx-auto my-5">
        <DatePickerField />
        <DatePickerField />
        <Button title="Search Date Range" />
        <SelectField />
      </div>

      <Pagination num={2} />

      <div className="overflow-x-auto text-center shadow max-h-[600px] custom-scrollbar custom-scrollbarw">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <thead className="text-sm text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
            <tr className="text-sm font-medium text-gray-500 uppercase text-center whitespace-nowrap">
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Pen Name</th>
              <th className="px-6 py-3">Book Title</th>
              <th className="px-6 py-3">Imprint</th>
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
                className="text-sm text-gray-700 text-center font-bold whitespace-nowrap custom-hover-row border"
              >
                <td className="px-6 py-4 text-orange-500 font-semibold">
                  {row.status}
                </td>
                <td className="px-6 py-4">{row.penName}</td>
                <td className="px-6 py-4">{row.bookTitle}</td>
                <td className="px-6 py-4">{row.imprint}</td>
                <td className="px-6 py-4">{row.contractDate}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2"></div>
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

export default PublishedTable;
