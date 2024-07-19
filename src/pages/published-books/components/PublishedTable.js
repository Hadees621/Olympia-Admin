import React from "react";
import useSidebarStore from "stores/States";
import Speaker from "utils/icons/Speaker";
import Notepad from "utils/icons/Notepad";
import Calculator from "utils/icons/Calculator";
import DatePickerField from "components/DatePickerField";
import Button from "components/Button";
import SearchField from "pages/home/components/SearchField";
import { data } from "pages/ready-for-publication/utils/utils";
import SelectField from "components/SelectField";
import Pagination from "components/Pagination";

const PublishedTable = () => {
  const { isOpen } = useSidebarStore();

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
    <div
      className={`m-4 transition-all duration-300 ${
        isOpen ? "max-w-[1030px]" : "max-w-[1200px]"
      }`}
    >
      <div className="flex justify-between">
        <div className="w-[25%]">
          <div className="flex gap-3">
            <p className="text-lg font-bold">Total Records:</p>
            <p className="text-lg font-bold">1</p>
          </div>
          <div className="flex gap-3">
            <p className="text-lg font-bold">Month:</p>
            <p className="text-lg font-bold">July</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 w-full">
          <SearchField placeholder="Book Title" />
          <SearchField placeholder="Pen name/Author name" />
          <Button title="Search" />
          <Button title="Clear" />
          <Button title="ISBN Search" />
        </div>
      </div>

      <div className="w-[70%] flex items-center justify-center gap-3 mx-auto my-5">
        <DatePickerField />
        <DatePickerField />
        <Button title="Search Date Range" />
        <SelectField />
      </div>

      <Pagination num={2} />
      <div className="overflow-x-auto shadow-md transition-all duration-300">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-white uppercase bg-gray-50 whitespace-nowrap sticky top-0 z-10">
            <tr className="text-xs font-medium text-gray-500 uppercase text-center whitespace-nowrap">
              <th className="px-6 py-3 border">Status</th>
              <th className="px-6 py-3 border">Pen Name</th>
              <th className="px-6 py-3 border">Book Title</th>
              <th className="px-6 py-3 border">Imprint</th>
              <th className="px-6 py-3 border">Contract Date</th>
              <th className="px-6 py-3 border">Publication Date</th>
              <th className="px-6 py-3 border">Author Forms</th>
              <th className="px-6 py-3 border">Contract Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="text-sm text-gray-700 text-center border font-bold whitespace-nowrap"
              >
                <td className="px-6 py-4 border text-orange-500 font-semibold">
                  {row.status}
                </td>
                <td className="px-6 py-4 border">{row.penName}</td>
                <td className="px-6 py-4 border">{row.bookTitle}</td>
                <td className="px-6 py-4 border">{row.imprint}</td>
                <td className="px-6 py-4 border">{row.contractDate}</td>
                <td className="px-6 py-4 border">
                  <div className="flex gap-2"></div>
                </td>
                <td className="px-6 py-4 border">
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
